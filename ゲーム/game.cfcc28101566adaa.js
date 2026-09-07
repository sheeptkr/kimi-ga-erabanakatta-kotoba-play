/* Presentation and local saves. No external services or dependencies. */
(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const STORAGE_KEY = 'words.visualnovel.v1';
  const SETTINGS = {speed:28, autoDelay:2200, fontSize:23, music:false, volume:16, reducedMotion:false};
  const ENDING_IDS = ['S05', 'M06A', 'M06B', 'U04', 'D04'];
  const NAMES = {saki:'紗季', mio:'澪', minato:'湊'};
  const ASSETS = window.VN_BACKGROUNDS.assets;
  const TITLE_BACKGROUND = window.VN_BACKGROUNDS.title;
  const COSTUMES = window.VN_COSTUMES.assets;
  const portraits = window.VNPortrait.create(window.VN_PORTRAITS);
  const previousDirection = window.VN_DIRECTION;
  const wardrobeDirection = window.VN_WARDROBE.applyTo(previousDirection);
  const expressionDirection = window.VN_EXPRESSIONS.applyTo(wardrobeDirection);
  const direction = window.VN_CG.applyTo(expressionDirection);
  const CG_ASSETS = window.VN_CG.assets;
  const engine = window.VNCore.createEngine(window.VN_STORY, {direction, previousDirection, wardrobeDirection, expressionDirection});
  const probe = window.VNCore.createEngine(window.VN_STORY, {direction, previousDirection, wardrobeDirection, expressionDirection});
  const audio = window.VNAudio.create();
  const validSnapshot = value => probe.restore(value);
  let memory = {version:1, settings:{...SETTINGS}, slots:Array(6).fill(null), auto:null, read:{}, endings:{}, cgs:{}};
  let mode = 'title', auto = false, skip = false, typing = false, currentText = '', pageWasRead = false;
  let typeTimer = 0, advanceTimer = 0, toastTimer = 0, transitionTimer = 0;
  let background = '', backgroundIndex = 0, lastNode = '', lastDirection = {}, savingAvailable = true;
  let returnFocus = null, modalKind = '', confirmResolve = null, pausedTyping = false;
  let activeCG = null, cgImage = null, cgRequest = 0, interfaceTyping = false;

  function validEntry(entry) {
    return entry && typeof entry === 'object' && validSnapshot(entry.snapshot) && Number.isFinite(entry.time);
  }
  function migrateEntry(entry) {
    if(!validEntry(entry))return null;
    const current=probe.current();
    return {...entry,snapshot:probe.snapshot(),background:directionAt(current).background};
  }
  function safeSettings(input) {
    const result = {...SETTINGS};
    for (const [key,min,max] of [['speed',0,60],['autoDelay',800,6000],['fontSize',19,28],['volume',0,50]]) {
      if (Number.isFinite(input?.[key])) result[key] = Math.max(min,Math.min(max,input[key]));
    }
    for (const key of ['music','reducedMotion']) if (typeof input?.[key] === 'boolean') result[key] = input[key];
    return result;
  }
  function sanitize(data) {
    if (!data || data.version !== 1) return null;
    const result = {version:1,settings:safeSettings(data.settings),slots:Array(6).fill(null),auto:null,read:{},endings:{},cgs:{}};
    if (Array.isArray(data.slots)) data.slots.slice(0,6).forEach((entry,i) => {result.slots[i] = migrateEntry(entry);});
    result.auto = migrateEntry(data.auto);
    if (data.read && typeof data.read === 'object') {
      Object.entries(data.read).slice(0,10000).forEach(([key,value]) => {
        if (value === true && /^words-vn-[a-f0-9]+:[A-Z0-9]+:\d+:[a-f0-9]+$/u.test(key)) result.read[key] = true;
      });
    }
    for(const id of ENDING_IDS){const migrated=migrateEntry(data.endings?.[id]);if(migrated && migrated.snapshot.nodeId===id && probe.current()?.ending)result.endings[id]=migrated;}
    for(const id of Object.keys(CG_ASSETS)){
      const saved=data.cgs?.[id];
      // No retroactive unlock from route completion, older save layouts, a
      // bare true value, or a snapshot of a different picture/scene.
      if(saved?.cg===id && saved.snapshot?.version>=5 && Number.isFinite(saved.time) && validSnapshot(saved.snapshot) && directionAt(probe.current()).cg===id){
        result.cgs[id]={cg:id,snapshot:probe.snapshot(),time:saved.time};
      }
    }
    return result;
  }
  try { const loaded = sanitize(JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')); if(loaded) memory=loaded; }
  catch (_) { savingAvailable=false; }

  function persist(notifyFailure=false) {
    try {localStorage.setItem(STORAGE_KEY,JSON.stringify(memory));savingAvailable=true;}
    catch (_) {savingAvailable=false;if(notifyFailure) toast('このブラウザでは保存できません。「データを書き出す」で保存できます。');}
    $('continue-game').disabled=!memory.auto;
  }
  function toast(message) {
    clearTimeout(toastTimer);$('toast').textContent=message;$('toast').classList.add('show');
    toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3200);
  }
  function element(tag,className,text) {
    const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;
  }
  function button(text,className,handler) {
    const el=element('button',className,text);el.type='button';el.addEventListener('click',handler);return el;
  }
  function hash(text) {let result=2166136261;for(let i=0;i<text.length;i++)result=Math.imul(result^text.charCodeAt(i),16777619)>>>0;return result.toString(16);}
  function readKey() {return engine.readKey();}
  function entry() {
    const current=engine.current();if(!current)return null;
    return {snapshot:engine.snapshot(),time:Date.now(),title:lastDirection.label||current.node.title,text:current.page.text.slice(0,90),background:lastDirection.background};
  }
  function autosave() {if(engine.current()){memory.auto=entry();persist();}}
  function stopModes() {
    auto=false;skip=false;clearTimeout(advanceTimer);updateModes();
  }
  function updateModes() {
    $('auto').setAttribute('aria-pressed',String(auto));$('skip').setAttribute('aria-pressed',String(skip));
    $('reading-mode').textContent=skip?'既読スキップ':auto?'AUTO':'';
  }
  function applySettings() {
    document.documentElement.style.setProperty('--text-size',memory.settings.fontSize+'px');
    document.documentElement.classList.toggle('reduced-motion',memory.settings.reducedMotion);
    audio.setVolume(memory.settings.volume/100);audio.setEnabled(memory.settings.music);
    $('title-sound').classList.toggle('music-on',memory.settings.music);
    $('title-sound').setAttribute('aria-label',memory.settings.music?'音楽をオフにする':'音楽をオンにする');
  }
  async function unlockAudio() {try{await audio.unlock();audio.setEnabled(memory.settings.music);}catch(_){}}
  function scenery(kind,state={timeOfDay:'sunset',weather:'dry',season:'early-spring',audioMood:'sunset'}) {
    if(!ASSETS[kind])throw new Error('背景が登録されていません: '+kind);
    const key=kind;
    if(background!==key){background=key;const incoming=$(backgroundIndex?'background-a':'background-b');const outgoing=$(backgroundIndex?'background-b':'background-a');incoming.style.backgroundImage='url("'+ASSETS[key]+'")';incoming.classList.add('active');outgoing.classList.remove('active');backgroundIndex=1-backgroundIndex;}
    $('app').dataset.time=state.timeOfDay;$('app').dataset.weather=state.weather;$('app').dataset.season=state.season;
    $('app').dataset.background=key;audio.setMood(state.audioMood||'day');
  }
  function setMode(next) {
    mode=next;$('app').dataset.mode=next;
    for(const id of ['title','game','ending'])$(id+'-screen').hidden=id!==next;
  }
  function title() {
    stopModes();clearTimeout(typeTimer);typing=false;hideChoices();clearTimeout(transitionTimer);$('scene-transition').classList.remove('show');
    closeModal();setMode('title');scenery(TITLE_BACKGROUND);persist();lastNode='';
  }
  function directionAt(current) {
    const base=direction.scenes[current.node.id];
    if(!base)throw new Error('場面の演出がありません: '+current.node.id);
    const result={...base};
    const text=window.VNCore.resolveText(current.node,current.flags);
    const cues=(base.cues||[]).map(cue=>({cue,offset:text.indexOf(cue.at)})).filter(item=>item.offset>=0).sort((a,b)=>a.offset-b.offset);
    for(const {cue,offset} of cues) if(offset<=current.page.start)Object.assign(result,cue);
    return result;
  }
  function recordDisplayedCG() {
    if(mode!=='game'||!activeCG||!cgImage||cgImage.dataset.loaded!=='true'||document.hidden||$('modal').open||$('confirm-dialog').open)return;
    const current=engine.current();
    if(!current||directionAt(current).cg!==activeCG||cgImage.parentElement!==$('cg-art'))return;
    if(!memory.cgs[activeCG]){
      memory.cgs[activeCG]={cg:activeCG,snapshot:engine.snapshot(),time:Date.now()};persist();
    }
  }
  function presentCG(current) {
    const id=lastDirection.cg;
    $('game-screen').classList.toggle('cg-active',Boolean(id));
    $('game-screen').dataset.cg=id||'';
    $('hide-interface').textContent=id?'CGを鑑賞する':'文章を隠す';
    if(!id){
      activeCG=null;cgImage=null;cgRequest++;$('cg-stage').hidden=true;$('cg-art').replaceChildren();return;
    }
    const asset=window.VN_CG.asset(id); // Unknown IDs must not silently fall back.
    $('cg-stage').hidden=false;
    if(id===activeCG){recordDisplayedCG();return;}
    activeCG=id;const request=++cgRequest;
    const image=element('img');cgImage=image;image.id='cg-image';image.alt=asset.title;image.draggable=false;image.hidden=true;
    $('cg-art').replaceChildren(image);$('cg-status').hidden=false;$('cg-status').textContent='イラストを読み込んでいます。';
    image.addEventListener('load',()=>{
      if(request!==cgRequest||cgImage!==image||activeCG!==id||image.parentElement!==$('cg-art'))return;
      if(!image.naturalWidth){fail();return;}
      image.dataset.loaded='true';image.hidden=false;$('cg-status').hidden=true;
      // The player may have advanced, returned, loaded a save, or opened a
      // modal while this image was in flight. Check the live state now.
      recordDisplayedCG();scheduleAdvance();
    });
    function fail(){
      if(request!==cgRequest||cgImage!==image)return;
      image.dataset.loaded='false';image.hidden=true;stopModes();
      $('cg-status').hidden=false;$('cg-status').textContent='このCGを読み込めません。\nゲームの画像ファイルを確認してから、ページを開き直してください。';
    }
    image.addEventListener('error',fail);image.src=asset.src;
  }
  function speakerFor(current) {
    if(current.page.kind==='narration')return 'minato';
    if(current.page.kind==='message')return 'message';
    if(current.page.kind==='break')return '';
    const quote=current.page.text.replace(/\s/gu,'');
    const dictionary=direction.dialogue?.[current.node.id]||{};
    for(const [key,name] of Object.entries(dictionary))if(key.replace(/\s/gu,'')===quote)return name;
    return '';
  }
  function presentDirection(current) {
    lastDirection=directionAt(current);scenery(lastDirection.background,lastDirection);
    $('chapter-name').textContent=lastDirection.label;$('chapter-kicker').textContent=lastDirection.date||'2030';$('location-label').textContent=lastDirection.location;
    const cast=lastDirection.cast||[];$('cast').classList.toggle('single',cast.length===1);
    const speaker=speakerFor(current);
    for(const name of ['saki','mio']){
      const sprite=$(name),outfit=lastDirection.wardrobe[name],asset=COSTUMES[outfit],expression=lastDirection.expression[name];
      if(!asset || asset.character!==name)throw new Error('衣装が登録されていません: '+outfit);
      // Resolve from this exact story position, including back/load/replay.
      // No random choice, date guess, or mutable last-outfit state.
      if(sprite.dataset.outfit!==outfit||sprite.dataset.expression!==expression){
        sprite.src=portraits.compose(outfit,asset,expression);
        sprite.style.maskImage=asset.mask?'url("'+asset.mask+'")':'none';
        sprite.style.webkitMaskImage=sprite.style.maskImage;
        sprite.dataset.outfit=outfit;
        sprite.dataset.expression=expression;
      }
      sprite.classList.toggle('visible',!lastDirection.cg&&cast.includes(name));
      sprite.classList.toggle('dim',Boolean(NAMES[speaker]&&speaker!=='minato'&&speaker!==name));
    }
    $('speaker-name').textContent=speaker==='message'?'メッセージ':NAMES[speaker]||'　';
    $('dialogue-wrap').dataset.speaker=speaker;
    presentCG(current);
  }
  function hideChoices() {$('choice-panel').hidden=true;$('choice-list').replaceChildren();$('game-screen').classList.remove('choosing');}
  function showChoices(current) {
    if(!current.choices.length||!$('choice-panel').hidden)return;
    stopModes();$('choice-panel').hidden=false;$('game-screen').classList.add('choosing');
    for(const [index,choice] of current.choices.entries()){
      const b=button('','story-choice',()=>{unlockAudio();audio.tick();if(engine.choose(choice.target)){hideChoices();render();}});
      b.dataset.target=choice.target;b.append(element('span','',String(index+1).padStart(2,'0')),element('span','',choice.text),element('span','','↗'));$('choice-list').append(b);
    }
    $('page-hint').textContent='言葉を選んでください';$('next-indicator').hidden=true;
    $('choice-list').firstElementChild?.focus({preventScroll:true});
  }
  function scheduleAdvance() {
    clearTimeout(advanceTimer);
    if(mode!=='game'||typing||$('modal').open||$('confirm-dialog').open||document.hidden)return;
    const current=engine.current();if(!current)return;
    if(current.choices.length){showChoices(current);return;}
    if(current.ending){stopModes();return;}
    if(lastDirection.cg&&cgImage?.dataset.loaded!=='true')return;
    if(skip){if(!pageWasRead){skip=false;updateModes();toast('未読の文章でスキップを止めました。');return;}advanceTimer=setTimeout(()=>advance(true),65);}
    else if(auto)advanceTimer=setTimeout(()=>advance(true),memory.settings.autoDelay+Array.from(currentText).length*24);
  }
  function completeText() {
    clearTimeout(typeTimer);typing=false;$('dialogue-text').textContent=currentText;$('dialogue-text').setAttribute('aria-busy','false');
    const current=engine.current();if(!current)return;
    memory.read[readKey(current)]=true;persist();
    $('next-indicator').hidden=false;$('page-hint').textContent=current.ending?'CLICK TO FINISH':'CLICK TO CONTINUE';
    scheduleAdvance();
  }
  function reveal(current,immediate) {
    clearTimeout(typeTimer);currentText=current.page.text;$('dialogue-text').scrollTop=0;
    $('dialogue-text').textContent='';$('dialogue-text').setAttribute('aria-busy','true');$('next-indicator').hidden=true;
    $('advance').classList.toggle('message',current.page.kind==='message');$('advance').classList.toggle('break-page',current.page.kind==='break');
    if(immediate||memory.settings.speed===0||memory.settings.reducedMotion||current.page.kind==='break'){completeText();return;}
    typing=true;const chars=Array.from(currentText);let i=0;
    const tick=()=>{
      if(!typing)return;i++;$('dialogue-text').textContent=chars.slice(0,i).join('');
      if(i>=chars.length){completeText();return;}
      const delay=/[。！？]/u.test(chars[i-1])?memory.settings.speed*3:memory.settings.speed;
      typeTimer=setTimeout(tick,delay);
    };tick();
  }
  function render(immediate=false,withTransition=true) {
    clearTimeout(advanceTimer);clearTimeout(typeTimer);interfaceTyping=false;hideChoices();setMode('game');$('game-screen').classList.remove('interface-hidden');$('show-interface').hidden=true;
    const current=engine.current();if(!current)return;
    const key=readKey(current);
    const oldLayouts=[1,2,3,4].map(version=>engine.legacyReadKeys(version));
    pageWasRead=Boolean(memory.read[key])||oldLayouts.some(keys=>keys.length>0&&keys.every(oldKey=>memory.read[oldKey]===true));
    if(pageWasRead)memory.read[key]=true;
    if(skip&&!pageWasRead){skip=false;updateModes();toast('未読の文章でスキップを止めました。');}
    presentDirection(current);$('game-screen').dataset.node=current.node.id;$('game-screen').dataset.page=String(current.index);
    $('back').disabled=engine.state.path.length===1&&current.index===0;
    if(lastNode!==current.node.id&&withTransition&&lastDirection.label!==$('transition-title').textContent&&!memory.settings.reducedMotion){
      $('transition-date').textContent=lastDirection.date;$('transition-title').textContent=lastDirection.label;
      $('scene-transition').classList.add('show');clearTimeout(transitionTimer);transitionTimer=setTimeout(()=>$('scene-transition').classList.remove('show'),950);
    }
    lastNode=current.node.id;autosave();reveal(current,immediate||skip);updateModes();
  }
  function advance(automatic=false) {
    if(mode!=='game'||$('modal').open||$('confirm-dialog').open)return;
    if($('game-screen').classList.contains('interface-hidden')){showInterface();return;}
    if(typing){completeText();return;}
    const current=engine.current();
    if(current.choices.length){showChoices(current);return;}
    if(current.ending){showEnding();return;}
    if(!automatic)audio.tick();const result=engine.advance();if(result)render();
  }
  function goBack() {if(mode!=='game')return;stopModes();if(engine.back())render(true,false);}
  function showEnding() {
    const current=engine.current();if(!current?.ending)return;
    stopModes();clearTimeout(typeTimer);typing=false;
    const details=direction.endings[current.node.id]||{title:current.node.title,subtitle:''};
    memory.endings[current.node.id]=entry();autosave();persist();
    setMode('ending');$('ending-title').textContent=details.title;$('ending-subtitle').textContent=details.subtitle||'';
    $('ending-number').textContent='END '+String(ENDING_IDS.indexOf(current.node.id)+1).padStart(2,'0');
    $('ending-title-return').focus({preventScroll:true});
  }
  async function start() {
    unlockAudio();
    if(memory.auto&&!await confirmAction('はじめから読む','自動保存の読書位置が最初に戻ります。\n手動で保存したデータと、読了した結末は残ります。','はじめる'))return;
    stopModes();closeModal();engine.start();lastNode='';render();
    if(!savingAvailable)toast('自動保存が利用できません。セーブ画面からデータを書き出せます。');
  }
  function resume(saved) {
    if(!validEntry(saved)||!engine.restore(saved.snapshot)){toast('このセーブデータは読み込めません。');return false;}
    stopModes();closeModal();lastNode='';unlockAudio();render(true);return true;
  }

  function openModal(kind,titleText,kicker) {
    stopModes();if(typing)completeText();clearTimeout(advanceTimer);
    modalKind=kind;returnFocus=document.activeElement;$('modal-title').textContent=titleText;$('modal-kicker').textContent=kicker;
    $('modal-content').replaceChildren();if(!$('modal').open)$('modal').showModal();$('modal').scrollTop=0;
  }
  function closeModal() {if($('modal').open)$('modal').close();modalKind='';}
  function confirmAction(titleText,text,ok='続ける') {
    if($('confirm-dialog').open)return Promise.resolve(false);
    stopModes();$('confirm-title').textContent=titleText;$('confirm-text').textContent=text;$('confirm-ok').textContent=ok;$('confirm-dialog').showModal();
    $('confirm-cancel').focus();return new Promise(resolve=>{confirmResolve=resolve;});
  }
  function resolveConfirm(value) {if(!$('confirm-dialog').open)return;$('confirm-dialog').close();const resolve=confirmResolve;confirmResolve=null;resolve?.(value);}
  function dateText(time) {return new Date(time).toLocaleString('ja-JP',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});}
  function saves(saveMode=false) {
    openModal('saves',saveMode?'記憶を残す':'記憶をひらく',saveMode?'SAVE':'LOAD');
    const container=$('modal-content');const tabs=element('nav','save-tabs');
    const saveTab=button('セーブ',saveMode?'active':'',()=>saves(true));saveTab.disabled=!engine.current();
    tabs.append(saveTab,button('ロード',!saveMode?'active':'',()=>saves(false)));container.append(tabs);
    container.append(element('p','modal-note',savingAvailable?'読書位置と選んだ言葉を、このブラウザに保存します。':'このブラウザでは保存が許可されていません。下の「データを書き出す」をご利用ください。'));
    const grid=element('div','save-grid');
    const entries=[{index:-1,label:'AUTO SAVE',entry:memory.auto},...memory.slots.map((entry,index)=>({index,label:'SLOT '+String(index+1).padStart(2,'0'),entry}))];
    for(const item of entries){
      const b=button('','save-slot'+(!item.entry?' empty':''),async()=>{
        if(saveMode){
          if(item.index<0)return;
          if(item.entry&&!await confirmAction('この記憶を上書きする',item.entry.title+'\n'+dateText(item.entry.time),'上書きする'))return;
          memory.slots[item.index]=entry();persist(true);saves(true);if(savingAvailable)toast('スロット '+(item.index+1)+' に保存しました。');
        }else if(item.entry){
          if(mode==='game'&&!await confirmAction('保存した場面に戻る','現在の読書位置から、選んだセーブデータに切り替えます。','読み込む'))return;
          resume(item.entry);
        }
      });
      b.disabled=saveMode?(item.index<0||!engine.current()):!item.entry;
      const thumb=element('span','save-thumb');if(item.entry)thumb.style.backgroundImage='url("'+ASSETS[item.entry.background]+'")';else thumb.textContent='＋';
      const copy=element('span','save-copy');copy.append(element('span','save-number',item.label),element('span','save-name',item.entry?.title||'まだ記憶はありません'));
      if(item.entry)copy.append(element('span','save-snippet',item.entry.text||''),element('span','save-time',dateText(item.entry.time)));
      b.append(thumb,copy);grid.append(b);
    }
    container.append(grid);const actions=element('div','data-actions');actions.append(button('データを書き出す','',exportData),button('データを読み込む','',importData));container.append(actions);
  }
  function exportData() {
    const blob=new Blob([JSON.stringify(memory,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);
    const a=element('a');a.href=url;a.download='きみが選ばなかった言葉_セーブデータ.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);toast('セーブデータを書き出しました。');
  }
  function importData() {
    const input=element('input');input.type='file';input.accept='.json,application/json';
    input.addEventListener('change',async()=>{
      const file=input.files?.[0];if(!file)return;
      if(file.size>5000000){toast('セーブデータのサイズが大きすぎます。');return;}
      try{
        const data=sanitize(JSON.parse(await file.text()));
        if(!data||(!data.auto&&!data.slots.some(Boolean)&&!Object.keys(data.endings).length)){toast('このゲームの有効なセーブデータがありません。');return;}
        if(!await confirmAction('セーブデータを取り込む','このブラウザの保存データを、ファイルの内容に置き換えます。','取り込む'))return;
        memory=data;applySettings();persist(true);saves(false);toast(savingAvailable?'セーブデータを取り込みました。':'取り込みました。このブラウザでは永続保存ができないため、終了前に書き出してください。');
      }catch(_){toast('セーブデータを読み込めませんでした。');}
    });input.click();
  }
  function settings() {
    openModal('settings','読む時間を整える','SETTINGS');const list=element('div','settings-list');
    function range(label,key,min,max,step,format,help){
      const row=element('div','setting-row');const text=element('label','setting-label',label);text.htmlFor='setting-'+key;
      if(help)text.append(element('span','setting-help',help));const control=element('div','setting-control');
      const input=element('input');input.type='range';input.id='setting-'+key;input.min=min;input.max=max;input.step=step;input.value=memory.settings[key];
      const output=element('output','',format(memory.settings[key]));output.htmlFor=input.id;
      input.addEventListener('input',()=>{memory.settings[key]=Number(input.value);output.textContent=format(Number(input.value));applySettings();persist();});control.append(input,output);row.append(text,control);list.append(row);
    }
    range('文字の表示速度','speed',0,60,5,v=>v===0?'一括':v<=15?'速い':v<=35?'ふつう':'ゆっくり','左端で一括表示');
    range('オートの間隔','autoDelay',800,6000,200,v=>(v/1000).toFixed(1)+' 秒');
    range('文字の大きさ','fontSize',19,28,1,v=>v+' px');
    range('音楽の音量','volume',0,50,1,v=>v+' %');
    function toggle(label,key,help){
      const row=element('div','setting-row');const text=element('label','setting-label',label);text.htmlFor='setting-'+key;
      const control=element('div','setting-control');const input=element('input');input.type='checkbox';input.id='setting-'+key;input.checked=memory.settings[key];
      input.addEventListener('change',()=>{memory.settings[key]=input.checked;unlockAudio();applySettings();persist();});control.append(input,element('span','setting-help',help));row.append(text,control);list.append(row);
    }
    toggle('音楽','music','静かな音楽を流す');toggle('演出を控えめに','reducedMotion','画面の動きと文字アニメーションを省く');
    $('modal-content').append(list);const keys=element('div','key-help');
    for(const [key,label] of [['Enter / Space','次へ'],['←','前へ'],['L','ログ'],['A','オート'],['S','既読スキップ'],['Esc','メニュー'],['H','文章を隠す'],['F','全画面']]){const el=element('span');el.append(element('kbd','',key),document.createTextNode(label));keys.append(el);}
    $('modal-content').append(keys);
  }
  function backlog() {
    if(!engine.current())return;openModal('log','選んできた言葉','BACKLOG');
    let node='';for(const item of engine.history()){
      if(node!==item.nodeId){node=item.nodeId;$('modal-content').append(element('p','history-chapter',direction.scenes[node]?.label||''));}
      const line=element('div','history-entry '+item.kind);line.append(element('p','',item.text));$('modal-content').append(line);
    }
    requestAnimationFrame(()=>$('modal').scrollTop=$('modal').scrollHeight);
  }
  function memories(tab='endings') {
    if(tab==='cg'){cgMemories();return;}
    openModal('memories','あの時間のつづき','MEMORIES');const count=Object.keys(memory.endings).length;
    memoryTabs('endings');
    $('modal-content').append(element('p','modal-note','読了した結末　'+count+' / 5　　最後まで読んだ物語を、ここから振り返れます。'));
    const grid=element('div','memory-grid');ENDING_IDS.forEach((id,index)=>{
      const saved=memory.endings[id],details=direction.endings[id]||{};
      const card=button('','memory-card',async()=>{
        if(mode==='game'&&!await confirmAction('終章を読み返す','現在の読書位置から、読了した終章へ移動します。','読み返す'))return;
        const copy=JSON.parse(JSON.stringify(saved));if(!probe.restore(copy.snapshot))return;copy.snapshot=probe.snapshotAtPage(0);resume(copy);
      });card.disabled=!saved;card.append(element('span','','ENDING '+String(index+1).padStart(2,'0')),element('h3','',saved?details.title:'——'),element('p','',saved?'もう一度、この時間へ。':'まだ選ばれていない言葉。'));grid.append(card);
    });$('modal-content').append(grid);
  }
  function memoryTabs(active) {
    const tabs=element('nav','cg-tabs');tabs.setAttribute('aria-label','追憶の種類');
    tabs.append(button('読了した結末',active==='endings'?'active':'',()=>memories()),button('CG一覧',active==='cg'?'active':'',cgMemories));
    $('modal-content').append(tabs);
  }
  function galleryImage(id,className='') {
    const asset=window.VN_CG.asset(id),image=element('img',className);image.alt=asset.title;image.draggable=false;
    image.addEventListener('error',()=>{
      image.hidden=true;
      const error=element('p','cg-gallery-error','このCGを読み込めません。画像ファイルを確認してください。');
      image.parentElement?.append(error);
    });
    image.src=asset.src;return image;
  }
  function cgMemories() {
    openModal('cgs','心に残った一枚','CG MEMORIES');memoryTabs('cg');
    const ids=Object.keys(CG_ASSETS),count=Object.keys(memory.cgs).length;
    $('modal-content').append(element('p','modal-note','見たイラスト　'+count+' / '+ids.length+'　　物語の中で見た一枚を、文章なしで鑑賞できます。'));
    const grid=element('div','cg-grid');
    for(const [index,id] of ids.entries()){
      const unlocked=Boolean(memory.cgs[id]);
      const card=button('','cg-card',()=>viewCG(id));card.dataset.cg=id;card.disabled=!unlocked;
      if(unlocked)card.append(galleryImage(id));
      else card.append(element('span','cg-locked','—'));
      card.append(element('span','',unlocked?CG_ASSETS[id].title:'まだ見ていない一枚'));
      card.setAttribute('aria-label',unlocked?CG_ASSETS[id].title:'未到達のCG '+String(index+1));grid.append(card);
    }
    $('modal-content').append(grid);
  }
  function viewCG(id) {
    if(!memory.cgs[id])return;
    const asset=window.VN_CG.asset(id);
    openModal('cg-view',asset.title,'CG MEMORIES');
    const figure=element('figure','cg-viewer');figure.dataset.cg=id;figure.append(galleryImage(id));$('modal-content').append(figure);
    const ids=Object.keys(CG_ASSETS).filter(key=>memory.cgs[key]),index=ids.indexOf(id),actions=element('nav','cg-view-actions');
    const previous=button('前の一枚','',()=>viewCG(ids[index-1])),next=button('次の一枚','',()=>viewCG(ids[index+1]));
    previous.disabled=index===0;next.disabled=index===ids.length-1;
    actions.append(previous,button('CG一覧へ','',cgMemories),next);$('modal-content').append(actions);
  }
  function menu() {
    openModal('menu','ひと息つく','PAUSE');const list=element('div','menu-list');
    for(const [text,sub,action] of [['物語に戻る','RESUME',closeModal],['セーブ','SAVE',()=>saves(true)],['ロード','LOAD',()=>saves(false)],['バックログ','LOG',backlog],['追憶','MEMORIES',memories],['設定','SETTINGS',settings],['全画面の切り替え','FULLSCREEN',fullscreen],['タイトルへ','TITLE',title]]){const el=button(text,'',action);el.append(element('span','',sub));list.append(el);}
    $('modal-content').append(list);
  }
  function about() {
    openModal('about','きみが選ばなかった言葉','ABOUT THIS STORY');const copy=element('div','about-copy');
    copy.append(element('p','','大学卒業まで、あと一ヶ月。\n恋人の紗季、親友の澪、そして僕。\n同じ時間を、違う気持ちで覚えていた。'),element('p','','言葉を選びながら、三人の春を過ごす物語です。\n4つのルートと5つの結末を収録しています。'));
    copy.append(element('p','about-small','クリック・タップ・Enter キーで読み進めます。Enterは長押しでも連続して進みます。文字が流れている間に押すと、全文を表示します。選択肢では一度キーを離してから決定してください。数字キーでも選べます。読書位置は自動保存されます。手動セーブと書き出しも利用できます。'),element('p','about-small','紗季：文学部。春から出版社へ。\n澪：建築専攻。別の大学の大学院へ。\n湊：この街の印刷会社へ。\n三人とも22歳。舞台と人物、個人AI「ナギ」は架空です。'));
    copy.append(element('p','about-credits','シナリオ：第二稿・全編改稿\n背景・キャラクターイラスト：既存デザインを参照したAI生成素材\n音楽：この作品のためのオリジナル合成音楽\n音声・外部通信なし。セーブデータはこのブラウザ内に保存されます。'));
    copy.style.whiteSpace='pre-line';$('modal-content').append(copy);
  }
  async function fullscreen() {
    try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(_){toast('このブラウザでは全画面に切り替えられません。');}
  }
  function showInterface(){
    $('game-screen').classList.remove('interface-hidden');$('show-interface').hidden=true;
    if(interfaceTyping){interfaceTyping=false;reveal(engine.current(),false);}
    recordDisplayedCG();
  }
  function hideInterface(){
    if(mode!=='game'||!$('choice-panel').hidden)return;stopModes();
    interfaceTyping=typing;if(typing){clearTimeout(typeTimer);typing=false;}
    $('game-screen').classList.add('interface-hidden');$('show-interface').hidden=false;
    $('show-interface').focus({preventScroll:true});
  }
  function toggleAuto(){if(mode!=='game'||engine.current()?.choices.length)return;auto=!auto;skip=false;updateModes();if(typing&&auto)completeText();else scheduleAdvance();}
  function toggleSkip(){if(mode!=='game'||engine.current()?.choices.length)return;skip=!skip;auto=false;if(skip)pageWasRead=Boolean(memory.read[readKey(engine.current())]);if(skip&&!pageWasRead){skip=false;toast('既読の文章だけをスキップします。');}updateModes();if(skip&&typing)completeText();else scheduleAdvance();}

  $('new-game').addEventListener('click',start);$('continue-game').addEventListener('click',()=>resume(memory.auto));
  for(const id of ['title-load','load'])$(id).addEventListener('click',()=>saves(false));
  for(const id of ['title-settings','settings'])$(id).addEventListener('click',settings);
  $('title-memories').addEventListener('click',memories);$('title-about').addEventListener('click',about);
  $('title-sound').addEventListener('click',()=>{memory.settings.music=!memory.settings.music;unlockAudio();applySettings();persist();});
  $('advance').addEventListener('click',()=>{unlockAudio();advance();});$('back').addEventListener('click',goBack);$('log').addEventListener('click',backlog);
  $('auto').addEventListener('click',toggleAuto);$('skip').addEventListener('click',toggleSkip);$('save').addEventListener('click',()=>saves(true));$('game-menu').addEventListener('click',menu);
  $('ending-title-return').addEventListener('click',title);$('ending-return').addEventListener('click',()=>{if(engine.routeRestart()){lastNode='';render(true);}});
  $('show-interface').addEventListener('click',showInterface);
  $('hide-interface').addEventListener('click',hideInterface);
  $('close-modal').addEventListener('click',closeModal);
  $('modal').addEventListener('click',event=>{if(event.target===$('modal')){const r=$('modal').getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeModal();}});
  $('modal').addEventListener('close',()=>{modalKind='';recordDisplayedCG();if(returnFocus?.isConnected&&!returnFocus.closest('[hidden]'))returnFocus.focus({preventScroll:true});});
  $('confirm-cancel').addEventListener('click',()=>resolveConfirm(false));$('confirm-ok').addEventListener('click',()=>resolveConfirm(true));
  $('confirm-dialog').addEventListener('cancel',event=>{event.preventDefault();resolveConfirm(false);});
  document.addEventListener('keydown',event=>{
    const target=event.target;
    if(event.ctrlKey||event.metaKey||event.altKey||target.isContentEditable||/^(INPUT|SELECT|TEXTAREA)$/u.test(target.tagName))return;
    const nativeButton=target.tagName==='BUTTON'&&target!==$('advance')&&target.isConnected&&!target.closest('[hidden]');
    if(event.repeat){
      if(event.key==='Enter'){
        // Own the repeat instead of depending on a focused button's native click.
        // Cancel that click even after focus moves to a choice or a dialog button.
        event.preventDefault();
        if(mode==='game'&&!document.hidden&&!$('modal').open&&!$('confirm-dialog').open&&!nativeButton)advance();
      }
      return;
    }
    if($('confirm-dialog').open)return;
    if($('modal').open)return;
    if(event.key==='Escape'){event.preventDefault();if(mode==='game')menu();return;}
    if(event.key.toLowerCase()==='f'){event.preventDefault();fullscreen();return;}
    if(mode!=='game')return;
    if(/^[1-4]$/u.test(event.key)&&!$('choice-panel').hidden){const choice=$('choice-list').children[Number(event.key)-1];if(choice){event.preventDefault();choice.click();}return;}
    // A visible control keeps its normal activation. Stale hidden/detached
    // buttons from the title or a previous page must not swallow reading keys.
    if((event.key==='Enter'||event.key===' ')&&nativeButton)return;
    if(event.key==='Enter'||event.key===' '||event.key==='ArrowRight'){event.preventDefault();advance();}
    else if(event.key==='ArrowLeft'){event.preventDefault();goBack();}
    else if(event.key.toLowerCase()==='l'){event.preventDefault();backlog();}
    else if(event.key.toLowerCase()==='a'){event.preventDefault();toggleAuto();}
    else if(event.key.toLowerCase()==='s'){event.preventDefault();toggleSkip();}
    else if(event.key.toLowerCase()==='h'){event.preventDefault();$('game-screen').classList.contains('interface-hidden')?showInterface():hideInterface();}
  });
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stopModes();audio.stop();pausedTyping=typing;if(typing){clearTimeout(typeTimer);typing=false;}if(mode==='game')autosave();}else{applySettings();if(pausedTyping&&mode==='game'&&!$('game-screen').classList.contains('interface-hidden'))reveal(engine.current(),false);pausedTyping=false;recordDisplayedCG();}});
  window.addEventListener('pagehide',()=>{if(mode==='game')autosave();audio.stop();});
  for(const name of ['saki','mio'])$(name).addEventListener('error',()=>{$(name).style.visibility='hidden';toast('一部のイラストを読み込めません。「ゲーム」フォルダの場所を確認してください。');});
  applySettings();title();
})();
