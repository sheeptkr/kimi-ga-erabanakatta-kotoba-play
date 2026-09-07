/* Pure story engine. Works from file:// and under Node; no network or DOM. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.VNCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const SAVE_VERSION = 5;
  const MAX_PAGE = 100;
  const LINE_LENGTH = 35;

  function condition(rule, flags) {
    if (Object.prototype.hasOwnProperty.call(rule, 'flag')) return Boolean(flags[rule.flag]);
    if (Object.prototype.hasOwnProperty.call(rule, 'all')) return rule.all.every(name => Boolean(flags[name]));
    if (Object.prototype.hasOwnProperty.call(rule, 'any')) return rule.any.some(name => Boolean(flags[name]));
    if (Object.prototype.hasOwnProperty.call(rule, 'not')) return !flags[rule.not];
    throw new Error('条件が定義されていません。');
  }

  function resolveText(node, flags) {
    let text = node.text;
    for (const variant of node.text_variants || []) {
      text = text.split('{{' + variant.marker + '}}').join(variant[condition(variant, flags) ? 'true' : 'false']);
    }
    if (/\{\{|\}\}/u.test(text)) throw new Error('未解決の本文差分: ' + node.id);
    return text;
  }

  function kindOf(text) {
    if (/^＊$/u.test(text) || /^――\s*END/u.test(text)) return 'break';
    if (/^[《【]/u.test(text) || /^(入力：|表示された提案：|採用した文：|保存時の本人メモ：)/u.test(text)) return 'message';
    if (/^「/u.test(text)) return 'dialogue';
    return 'narration';
  }

  // Hard limits are counted in Unicode characters, never UTF-16 half-surrogates.
  // Prefer sentence boundaries and then commas; every non-whitespace character
  // remains in the exact order in which the manuscript supplied it.
  function shortLines(text) {
    const chars = Array.from(text);
    const output = [];
    let offset = 0;
    while (offset < chars.length) {
      let take = Math.min(LINE_LENGTH, chars.length - offset);
      if (take < chars.length - offset) {
        for (let i = take; i >= Math.ceil(LINE_LENGTH * 0.45); i--) {
          if (/[。！？!?、，]/u.test(chars[offset + i - 1])) {
            take = i;
            // A closing quote belongs with its sentence if it fits this line.
            while (take < LINE_LENGTH && /[」』》】）]/u.test(chars[offset + take] || '')) take++;
            break;
          }
        }
        // Avoid beginning a line with Japanese closing punctuation where there
        // is room to move one preceding character to the next line.
        while (take > 1 && /^[、。！？!?」』》】）]$/u.test(chars[offset + take] || '')) take--;
      }
      output.push(chars.slice(offset, offset + take).join(''));
      offset += take;
    }
    return output;
  }

  function paginate(text) {
    const pages = [];
    const push = (lines, kind) => {
      if (!lines.length) return;
      const content = lines.join('\n');
      pages.push({
        text: content, kind, index: pages.length,
        isEndingMarker: /^――\s*END/u.test(content)
      });
    };
    for (const paragraph of text.replace(/\r\n?/gu, '\n').split(/\n\s*\n/gu)) {
      let pending = [], pendingLength = 0, pendingKind = null;
      const flush = () => { push(pending, pendingKind); pending = []; pendingLength = 0; pendingKind = null; };
      for (const originalLine of paragraph.split('\n')) {
        const line = originalLine.trim();
        if (!line) continue;
        const kind = kindOf(line);
        if (pendingKind && (pendingKind !== kind || kind !== 'narration')) flush();
        const lines = shortLines(line);
        for (const chunk of lines) {
          const count = Array.from(chunk).length;
          if (pending.length >= 3 || pendingLength + count > MAX_PAGE) flush();
          pendingKind = kind;
          pending.push(chunk); pendingLength += count;
        }
        // Different spoken/message lines are separate turns, without inventing
        // speaker names from alternating quotation marks.
        if (kind !== 'narration') flush();
      }
      flush();
    }
    let cursor = 0;
    for (const page of pages) {
      let start = null;
      for (const char of Array.from(page.text)) {
        if (/\s/u.test(char)) continue;
        while (cursor < text.length && /\s/u.test(text[cursor])) cursor++;
        if (start === null) start = cursor;
        if (String.fromCodePoint(text.codePointAt(cursor)) !== char) throw new Error('本文の分割位置が一致しません。');
        cursor += char.length;
      }
      page.start = start === null ? cursor : start;
      page.end = cursor;
      Object.freeze(page);
    }
    return Object.freeze(pages);
  }

  // Direction changes belong to the first character of the page, not its
  // eventual last line. Resolve literal cues against this exact text variant;
  // unmatched cues may intentionally belong to the other conditional variant.
  // Keep paginate() unchanged: version 1 saves/read keys used its old layout.
  function paginateScene(text, cues = []) {
    const boundaries = [...new Set(cues.filter(cue => typeof cue?.at === 'string' && cue.at.length)
      .map(cue => text.indexOf(cue.at)).filter(offset => offset > 0))].sort((a, b) => a - b);
    if (!boundaries.length) return paginate(text);
    const pages = [];
    let start = 0;
    for (const end of [...boundaries, text.length]) {
      for (const page of paginate(text.slice(start, end))) {
        pages.push(Object.freeze({...page, index: pages.length, start: start + page.start, end: start + page.end}));
      }
      start = end;
    }
    return Object.freeze(pages);
  }

  function textHash(text) {
    let hash = 2166136261;
    for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619) >>> 0;
    return hash.toString(16);
  }

  function fingerprint(story) {
    const serialized = JSON.stringify({start: story.start_node, flags: story.flags, nodes: story.nodes});
    let hash = 2166136261;
    for (let i = 0; i < serialized.length; i++) hash = Math.imul(hash ^ serialized.charCodeAt(i), 16777619) >>> 0;
    return 'words-vn-' + hash.toString(16).padStart(8, '0');
  }

  function createEngine(story, options = {}) {
    if (!story || !Array.isArray(story.nodes) || !story.nodes.length) throw new Error('シナリオがありません。');
    const nodes = Object.create(null);
    for (const node of story.nodes) {
      if (!node || typeof node.id !== 'string' || nodes[node.id] || typeof node.text !== 'string') throw new Error('場面の形式が不正です。');
      nodes[node.id] = node;
    }
    if (!nodes[story.start_node]) throw new Error('開始場面がありません。');
    const defaults = Object.fromEntries(Object.entries(story.flags || {}).map(([key, value]) => [key, value.initial]));
    if (Object.values(defaults).some(value => typeof value !== 'boolean')) throw new Error('履歴の初期値が不正です。');
    function checkRule(rule) {
      const keys = ['flag', 'all', 'any', 'not'].filter(key => Object.prototype.hasOwnProperty.call(rule, key));
      if (keys.length !== 1) throw new Error('分岐条件が不正です。');
      const key = keys[0];
      const names = key === 'all' || key === 'any' ? rule[key] : [rule[key]];
      if (!Array.isArray(names) || !names.length || names.some(name => !Object.prototype.hasOwnProperty.call(defaults, name))) throw new Error('未定義の履歴条件です。');
    }
    for (const node of story.nodes) {
      const transitions = ['choices', 'branch', 'next'].filter(key => node[key]);
      if (transitions.length !== (node.kind === 'ending' ? 0 : 1)) throw new Error('場面の遷移が不正です: ' + node.id);
      const exits = node.choices ? node.choices.map(choice => choice.target) : node.branch ? [node.branch.true, node.branch.false] : node.next ? [node.next] : [];
      if (exits.some(target => !nodes[target])) throw new Error('移動先がありません: ' + node.id);
      if (node.branch) checkRule(node.branch);
      for (const [name, value] of Object.entries(node.effects || {})) {
        if (!Object.prototype.hasOwnProperty.call(defaults, name) || typeof value !== 'boolean') throw new Error('履歴の更新が不正です: ' + node.id);
      }
      for (const variant of node.text_variants || []) {
        checkRule(variant);
        if (typeof variant.true !== 'string' || typeof variant.false !== 'string') throw new Error('条件本文が不正です: ' + node.id);
      }
    }
    const storyId = fingerprint(story);
    const pageCaches = new Map([1,2,3,4,5].map(version=>[version,new Map()]));
    const direction = options.direction || {scenes: {}};
    // Preserve each released layout: v1 plain text, v2 background cues,
    // v3 wardrobe cues, v4 expressions, v5 event CGs. Saved page/offset pairs are checked
    // against their own version before migration to the current layout.
    const previousDirections = {
      2: options.previousDirection || direction,
      3: options.wardrobeDirection || direction,
      4: options.expressionDirection || direction,
      ...options.previousDirections
    };
    let path = [], pageIndex = 0;
    let activeFlags = {...defaults}, activePages = [];

    function flagsFor(candidatePath) {
      const flags = {...defaults};
      for (const id of candidatePath) Object.assign(flags, nodes[id].effects || {});
      return flags;
    }
    function exitsFor(node, flags) {
      if (node.choices) return node.choices.map(choice => choice.target);
      if (node.branch) return [node.branch[condition(node.branch, flags) ? 'true' : 'false']];
      return node.next ? [node.next] : [];
    }
    function pagesFor(node, flags, version = SAVE_VERSION) {
      const key = node.id + ':' + (node.text_variants || []).map(variant => condition(variant, flags) ? '1' : '0').join('');
      const cache = pageCaches.get(version);
      if(!cache)throw new Error('未対応の保存形式です: '+version);
      if (!cache.has(key)) {
        const text = resolveText(node, flags);
        const cues = (previousDirections[version] || direction).scenes?.[node.id]?.cues || [];
        cache.set(key, version === 1 ? paginate(text) : paginateScene(text, cues));
      }
      return cache.get(key);
    }
    function refresh() {
      activeFlags = flagsFor(path);
      activePages = path.length ? pagesFor(nodes[path[path.length - 1]], activeFlags) : [];
    }
    function enter(target) {
      path.push(target); pageIndex = 0; refresh();
      return 'scene';
    }
    function validPath(candidate) {
      if (!Array.isArray(candidate) || !candidate.length || candidate.length > story.nodes.length || candidate[0] !== story.start_node) return false;
      const flags = {...defaults}, seen = new Set();
      for (let i = 0; i < candidate.length; i++) {
        const id = candidate[i];
        if (typeof id !== 'string' || !nodes[id] || seen.has(id)) return false;
        if (i && !exitsFor(nodes[candidate[i - 1]], flags).includes(id)) return false;
        Object.assign(flags, nodes[id].effects || {}); seen.add(id);
      }
      return true;
    }
    function current() {
      if (!path.length) return null;
      const node = nodes[path[path.length - 1]];
      const final = pageIndex === activePages.length - 1;
      return {
        node, flags: {...activeFlags}, pages: activePages, page: activePages[pageIndex],
        index: pageIndex, total: activePages.length,
        choices: final && node.choices ? node.choices.map(choice => ({...choice})) : [],
        ending: final && node.kind === 'ending'
      };
    }
    const engine = {
      get state() { return {path: path.slice(), nodeId: path[path.length - 1] || null, pageIndex}; },
      storyId,
      start() { path = [story.start_node]; pageIndex = 0; refresh(); return current(); },
      current,
      history() {
        const flags = {...defaults}, history = [];
        path.forEach((nodeId, nodeIndex) => {
          const node = nodes[nodeId];
          Object.assign(flags, node.effects || {});
          const pages = pagesFor(node, flags);
          const limit = nodeIndex === path.length - 1 ? pageIndex + 1 : pages.length;
          pages.slice(0, limit).forEach(page => history.push({nodeId, pageIndex: page.index, text: page.text, kind: page.kind}));
        });
        return history;
      },
      snapshot() { return engine.snapshotAtPage(pageIndex); },
      // A deliberate seek (for example, replaying an unlocked ending) must
      // update both fields. Mutating pageIndex alone is a corrupt snapshot.
      snapshotAtPage(index) {
        if (!path.length || !Number.isInteger(index) || index < 0 || index >= activePages.length) return null;
        return {version: SAVE_VERSION, storyId, ...engine.state, pageIndex: index, sourceOffset: activePages[index].start};
      },
      readKey() {
        const view = current();
        return view ? storyId + ':' + view.node.id + ':' + view.index + ':' + textHash(view.page.text) : null;
      },
      // A new page is safely already read only if EVERY intersecting legacy
      // page was read. Reflow can combine pieces of two former pages; requiring
      // just one of their keys would silently skip previously unseen prose.
      legacyReadKeys(version = 1) {
        const view = current();
        if (!view) return [];
        return pagesFor(view.node, activeFlags, version)
          .filter(page => page.start < view.page.end && page.end > view.page.start)
          .map(page => storyId + ':' + view.node.id + ':' + page.index + ':' + textHash(page.text));
      },
      restore(saved) {
        if (!saved || ![1, 2, 3, 4, SAVE_VERSION].includes(saved.version) || saved.storyId !== storyId || !validPath(saved.path) || saved.nodeId !== saved.path[saved.path.length - 1] || !Number.isInteger(saved.pageIndex)) return false;
        const flags = flagsFor(saved.path), pages = pagesFor(nodes[saved.nodeId], flags);
        let restoredIndex = saved.pageIndex;
        if (saved.version < SAVE_VERSION) {
          const legacyPages = pagesFor(nodes[saved.nodeId], flags, saved.version);
          if (saved.pageIndex < 0 || saved.pageIndex >= legacyPages.length) return false;
          const sourceOffset = legacyPages[saved.pageIndex].start;
          if (saved.version >= 2 && (!Number.isInteger(saved.sourceOffset) || saved.sourceOffset !== sourceOffset)) return false;
          restoredIndex = pages.findIndex(page => page.start <= sourceOffset && sourceOffset < page.end);
          // Unlocked ending records are saved on the old final page. Even if
          // a direction cue splits that page, replay must still open the ending.
          if (nodes[saved.nodeId].kind === 'ending' && saved.pageIndex === legacyPages.length - 1) restoredIndex = pages.length - 1;
          if (restoredIndex < 0) return false;
        } else if (saved.pageIndex < 0 || saved.pageIndex >= pages.length || !Number.isInteger(saved.sourceOffset) || saved.sourceOffset !== pages[saved.pageIndex].start) {
          return false;
        }
        path = saved.path.slice(); pageIndex = restoredIndex; refresh(); return true;
      },
      advance() {
        if (!path.length) { engine.start(); return 'scene'; }
        if (pageIndex < activePages.length - 1) { pageIndex++; return 'page'; }
        const node = nodes[path[path.length - 1]];
        if (node.choices) return 'choice';
        if (node.kind === 'ending') return 'ending';
        return enter(exitsFor(node, activeFlags)[0]);
      },
      choose(target) {
        if (!path.length || pageIndex !== activePages.length - 1) return false;
        const node = nodes[path[path.length - 1]];
        if (!node.choices || !node.choices.some(choice => choice.target === target)) return false;
        return enter(target);
      },
      back() {
        if (!path.length) return false;
        if (pageIndex > 0) { pageIndex--; return 'page'; }
        if (path.length === 1) return false;
        path.pop(); refresh(); pageIndex = activePages.length - 1; return 'scene';
      },
      routeRestart() {
        const index = path.indexOf('C13');
        if (index < 0) return false;
        path = path.slice(0, index + 1); refresh(); pageIndex = activePages.length - 1; return 'scene';
      }
    };
    return engine;
  }
  return Object.freeze({createEngine, paginate, paginateScene, resolveText, condition, SAVE_VERSION});
});
