/* Original, procedural ambient score. No audio files or network requests. */
(function (root) {
  'use strict';
  const AudioContextClass = root.AudioContext || root.webkitAudioContext;
  const HARMONIES = {
    day: [[60, 64, 67, 71], [57, 60, 64, 67], [53, 57, 60, 64], [55, 59, 62, 69]],
    sunset: [[53, 57, 60, 64], [50, 53, 57, 64], [57, 60, 64, 67], [55, 60, 62, 69]],
    night: [[50, 53, 57, 64], [58, 62, 65, 69], [53, 57, 60, 64], [57, 60, 64, 67]],
    rain: [[57, 60, 64, 71], [53, 57, 60, 67], [50, 53, 57, 64], [52, 55, 59, 62]]
  };
  const frequency = midi => 440 * Math.pow(2, (midi - 69) / 12);

  function create() {
    let context = null, master = null, dry = null, send = null;
    let enabled = false, unlocked = false, playing = false, volume = 0.16;
    let mood = 'day', pendingMood = 'day', timer = null, suspendTimer = null;
    let nextBeat = 0, beat = 0;
    const beatDuration = 60 / 66;
    const voices = new Set();

    function ramp(parameter, value, seconds) {
      if (!context) return;
      const now = context.currentTime;
      if (typeof parameter.cancelAndHoldAtTime === 'function') parameter.cancelAndHoldAtTime(now);
      else {
        parameter.cancelScheduledValues(now);
        parameter.setValueAtTime(parameter.value, now);
      }
      parameter.linearRampToValueAtTime(value, now + seconds);
    }

    function initialize() {
      if (context) return true;
      if (!AudioContextClass) return false;
      try {
        context = new AudioContextClass();
        master = context.createGain(); master.gain.value = 0;
        const lowpass = context.createBiquadFilter();
        lowpass.type = 'lowpass'; lowpass.frequency.value = 2600; lowpass.Q.value = 0.4;
        dry = context.createGain(); dry.gain.value = 0.88;
        send = context.createGain(); send.gain.value = 0.18;
        const reverb = context.createConvolver();
        const frames = Math.floor(context.sampleRate * 1.6);
        const impulse = context.createBuffer(2, frames, context.sampleRate);
        // Deterministic decaying diffusion, created locally rather than sampled
        // from a recording. High frequencies are softened by the output filter.
        let seed = 49271;
        for (let channel = 0; channel < 2; channel++) {
          const samples = impulse.getChannelData(channel);
          for (let index = 0; index < frames; index++) {
            seed = Math.imul(seed, 16807) & 0x7fffffff;
            samples[index] = ((seed / 0x7fffffff) * 2 - 1) * Math.pow(1 - index / frames, 3.4) * 0.45;
          }
        }
        reverb.buffer = impulse;
        dry.connect(lowpass); send.connect(reverb); reverb.connect(lowpass);
        lowpass.connect(master); master.connect(context.destination);
        return true;
      } catch (_) {
        if (context && typeof context.close === 'function') {
          try { const result = context.close(); if (result && result.catch) result.catch(() => {}); } catch (_) {}
        }
        context = null; return false;
      }
    }

    function sound(note, when, duration, level, pad) {
      if (!context || !playing) return;
      const envelope = context.createGain();
      const start = Math.max(when, context.currentTime);
      const attack = pad ? 0.65 : 0.012;
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.exponentialRampToValueAtTime(Math.max(0.0002, level), start + attack);
      if (pad) {
        envelope.gain.setValueAtTime(level, start + duration * 0.55);
        envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      } else envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      envelope.connect(dry); envelope.connect(send);
      const partials = pad ? [[1, 1, 'sine'], [1.002, 0.18, 'triangle']] : [[1, 1, 'sine'], [2, 0.13, 'sine'], [3, 0.035, 'sine']];
      let remaining = partials.length;
      for (const [ratio, gain, type] of partials) {
        const oscillator = context.createOscillator(), partial = context.createGain();
        oscillator.type = type; oscillator.frequency.value = frequency(note) * ratio;
        partial.gain.value = gain;
        oscillator.connect(partial); partial.connect(envelope);
        voices.add(oscillator);
        oscillator.onended = () => {
          voices.delete(oscillator); oscillator.disconnect(); partial.disconnect();
          if (--remaining === 0) envelope.disconnect();
        };
        oscillator.start(start); oscillator.stop(start + duration + 0.03);
      }
    }

    function scheduleBeat() {
      const bar = Math.floor(beat / 4) % 16, step = beat % 4;
      if (step === 0) mood = pendingMood;
      const chord = HARMONIES[mood][Math.floor(bar / 2) % 4];
      if (step === 0) {
        sound(chord[0] - 12, nextBeat, beatDuration * 4.4, 0.025, true);
        sound(chord[2], nextBeat, beatDuration * 4.15, 0.012, true);
      }
      // Two spacious variations of one original arpeggio. Deliberate rests
      // leave dialogue in front; this is accompaniment rather than a lead tune.
      const order = bar % 2 ? [1, 3, 2, 0] : [0, 2, 3, 1];
      if (!(step === 3 && bar % 2)) {
        const note = chord[order[step]] + (step === 2 ? 12 : 0);
        sound(note, nextBeat + (step % 2 ? 0.035 : 0), 2.1, step === 0 ? 0.10 : 0.067, false);
      }
      beat = (beat + 1) % 64;
      nextBeat += beatDuration;
    }

    function scheduler() {
      if (!playing || !context || context.state !== 'running') return;
      // A throttled background timer must never catch up by emitting a burst.
      if (nextBeat < context.currentTime - 0.15) nextBeat = context.currentTime + 0.04;
      while (nextBeat < context.currentTime + 0.18) scheduleBeat();
    }

    function begin() {
      if (!context || !enabled || !unlocked || context.state !== 'running') return;
      if (suspendTimer !== null) { root.clearTimeout(suspendTimer); suspendTimer = null; }
      if (!playing) {
        playing = true; nextBeat = context.currentTime + 0.05;
        scheduler(); timer = root.setInterval(scheduler, 90);
      }
      ramp(master.gain, volume, 0.6);
    }

    function stop() {
      playing = false;
      if (timer !== null) { root.clearInterval(timer); timer = null; }
      if (suspendTimer !== null) { root.clearTimeout(suspendTimer); suspendTimer = null; }
      if (!context) return;
      ramp(master.gain, 0, 0.18);
      const end = context.currentTime + 0.2;
      for (const oscillator of voices) { try { oscillator.stop(end); } catch (_) {} }
      suspendTimer = root.setTimeout(() => {
        suspendTimer = null;
        if (!playing && context && context.state === 'running') {
          try { const result = context.suspend(); if (result && result.catch) result.catch(() => {}); } catch (_) {}
        }
      }, 260);
    }

    return {
      async unlock() {
        if (!initialize()) return false;
        if (suspendTimer !== null) { root.clearTimeout(suspendTimer); suspendTimer = null; }
        try {
          // Both resume and the one-frame silent source are initiated within
          // the click/touch handler, including on Safari and older iOS devices.
          const resumed = context.resume();
          const silent = context.createBufferSource();
          silent.buffer = context.createBuffer(1, 1, context.sampleRate);
          silent.connect(context.destination); silent.onended = () => silent.disconnect(); silent.start(0);
          if (resumed && resumed.then) await resumed;
          unlocked = context.state === 'running';
          begin(); return unlocked;
        } catch (_) { return false; }
      },
      setEnabled(value) { enabled = Boolean(value); if (enabled) begin(); else stop(); },
      setVolume(value) {
        if (!Number.isFinite(value)) return;
        volume = Math.min(1, Math.max(0, value));
        if (playing && master) ramp(master.gain, volume, 0.15);
      },
      setMood(value) { if (Object.prototype.hasOwnProperty.call(HARMONIES, value)) pendingMood = value; },
      tick() {
        if (!playing || !enabled || !context || context.state !== 'running') return;
        sound(72, context.currentTime, 0.075, 0.012, false);
      },
      stop
    };
  }
  root.VNAudio = Object.freeze({create});
})(typeof globalThis !== 'undefined' ? globalThis : this);
