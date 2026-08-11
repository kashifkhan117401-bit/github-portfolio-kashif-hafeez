// Web Audio API procedural sound synthesizer for Car Theme
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isEngineRunning = false;
    this.idleOsc = null;
    this.idleGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.idleGain) {
      this.idleGain.gain.setValueAtTime(0, this.ctx ? this.ctx.currentTime : 0);
    }
    return this.isMuted;
  }

  // Play ignition start and V8 engine rev
  playIgnition() {
    this.init();
    if (this.isMuted || !this.ctx) return;

    const now = this.ctx.currentTime;

    // Starter motor sound (high frequency pulse)
    const starterOsc = this.ctx.createOscillator();
    const starterGain = this.ctx.createGain();
    starterOsc.type = 'sawtooth';
    starterOsc.frequency.setValueAtTime(120, now);
    starterOsc.frequency.linearRampToValueAtTime(160, now + 0.4);
    
    starterGain.gain.setValueAtTime(0.15, now);
    starterGain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    starterOsc.connect(starterGain);
    starterGain.connect(this.ctx.destination);
    starterOsc.start(now);
    starterOsc.stop(now + 0.4);

    // V8 Engine Roar / Rev (Low V8 Sub Oscillators)
    const engineOsc1 = this.ctx.createOscillator();
    const engineOsc2 = this.ctx.createOscillator();
    const engineGain = this.ctx.createGain();

    engineOsc1.type = 'sawtooth';
    engineOsc2.type = 'square';

    // Pitch sweep: Start low -> Rev up to 380Hz -> Settle to idle ~75Hz
    engineOsc1.frequency.setValueAtTime(45, now + 0.4);
    engineOsc1.frequency.exponentialRampToValueAtTime(380, now + 1.2);
    engineOsc1.frequency.exponentialRampToValueAtTime(75, now + 2.5);

    engineOsc2.frequency.setValueAtTime(22.5, now + 0.4);
    engineOsc2.frequency.exponentialRampToValueAtTime(190, now + 1.2);
    engineOsc2.frequency.exponentialRampToValueAtTime(37.5, now + 2.5);

    // Exhaust distortion/filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now + 0.4);
    filter.frequency.linearRampToValueAtTime(1800, now + 1.2);
    filter.frequency.linearRampToValueAtTime(400, now + 2.5);

    engineGain.gain.setValueAtTime(0.01, now + 0.4);
    engineGain.gain.linearRampToValueAtTime(0.35, now + 0.9);
    engineGain.gain.exponentialRampToValueAtTime(0.05, now + 2.5);

    engineOsc1.connect(filter);
    engineOsc2.connect(filter);
    filter.connect(engineGain);
    engineGain.connect(this.ctx.destination);

    engineOsc1.start(now + 0.4);
    engineOsc2.start(now + 0.4);
    engineOsc1.stop(now + 2.6);
    engineOsc2.stop(now + 2.6);

    // Turbo whistle on rev
    const turboOsc = this.ctx.createOscillator();
    const turboGain = this.ctx.createGain();
    turboOsc.type = 'sine';
    turboOsc.frequency.setValueAtTime(1200, now + 0.6);
    turboOsc.frequency.exponentialRampToValueAtTime(3800, now + 1.2);
    turboGain.gain.setValueAtTime(0.01, now + 0.6);
    turboGain.gain.linearRampToValueAtTime(0.08, now + 1.2);
    turboGain.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

    turboOsc.connect(turboGain);
    turboGain.connect(this.ctx.destination);
    turboOsc.start(now + 0.6);
    turboOsc.stop(now + 1.7);

    this.isEngineRunning = true;
  }

  // Quick rev sound for gear change or button clicks
  playGearShift() {
    this.init();
    if (this.isMuted || !this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Metallic gear engagement click
    const clickOsc = this.ctx.createOscillator();
    const clickGain = this.ctx.createGain();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(800, now);
    clickOsc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

    clickGain.gain.setValueAtTime(0.2, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    clickOsc.connect(clickGain);
    clickGain.connect(this.ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.09);

    // Short rev burst
    const revOsc = this.ctx.createOscillator();
    const revGain = this.ctx.createGain();
    revOsc.type = 'sawtooth';
    revOsc.frequency.setValueAtTime(110, now + 0.05);
    revOsc.frequency.exponentialRampToValueAtTime(240, now + 0.2);
    revOsc.frequency.exponentialRampToValueAtTime(90, now + 0.4);

    revGain.gain.setValueAtTime(0.01, now + 0.05);
    revGain.gain.linearRampToValueAtTime(0.15, now + 0.2);
    revGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    revOsc.connect(revGain);
    revGain.connect(this.ctx.destination);
    revOsc.start(now + 0.05);
    revOsc.stop(now + 0.42);
  }

  // Turbo blow off valve (BOV) hiss sound
  playTurboBOV() {
    this.init();
    if (this.isMuted || !this.ctx) return;

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3000, now);
    filter.Q.setValueAtTime(3, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(now);
  }
}

export const audioEngine = new AudioEngine();
