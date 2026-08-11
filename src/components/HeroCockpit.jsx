import React, { useState, useEffect } from 'react';
import { Gauge, Zap, Flame, Cpu, ShieldCheck, ArrowRight, Play, Radio, Activity } from 'lucide-react';
import { driverSpecs } from '../data/portfolioData';
import { audioEngine } from '../utils/audioEngine';

export default function HeroCockpit({ isEngineRunning, onIgnition }) {
  const [rpm, setRpm] = useState(isEngineRunning ? 2500 : 0);
  const [revving, setRevving] = useState(false);

  useEffect(() => {
    if (isEngineRunning) {
      setRpm(2800);
    } else {
      setRpm(0);
    }
  }, [isEngineRunning]);

  const triggerRev = () => {
    onIgnition();
    setRevving(true);
    setRpm(7800); // Rev to near redline
    setTimeout(() => {
      setRpm(2800);
      setRevving(false);
    }, 1200);
  };

  // Convert RPM (0 to 9000) to gauge needle rotation angle (-120deg to +120deg)
  const needleAngle = -120 + (rpm / 9000) * 240;

  return (
    <section id="hero" className="relative min-h-[90vh] pt-12 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Car Grid Atmosphere */}
      <div className="absolute inset-0 bg-carbon opacity-90 z-0"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 shadow-2xl backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isEngineRunning ? 'bg-emerald-400 opacity-75' : 'bg-red-400 opacity-75'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isEngineRunning ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
              ECU STATUS: <strong className={isEngineRunning ? "text-emerald-400" : "text-red-400"}>
                {isEngineRunning ? "V8 TURBO ONLINE" : "STANDBY (PRESS START)"}
              </strong>
            </span>
          </div>

          <div className="flex items-center space-x-6 font-mono text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>FPS: <strong className="text-cyan-300">{driverSpecs.topSpeed}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>ENGINE: <strong className="text-amber-300">{driverSpecs.engineType}</strong></span>
            </div>
          </div>
        </div>

        {/* Main Grid: Driver Bio + Tachometer Cluster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Driver Intro & Telemetry Specs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 font-mono text-xs text-red-400">
              <Flame className="w-4 h-4 text-red-500 animate-bounce" />
              <span>SUPERCAR PORTFOLIO // 2026 APEX SPEC</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <img
                src={driverSpecs.avatarUrl}
                alt={driverSpecs.name}
                className="w-16 h-16 rounded-2xl border-2 border-red-500 shadow-xl shadow-red-900/50 object-cover"
              />
              <div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                    {driverSpecs.name}
                  </span>
                </h1>
                <p className="font-mono text-xs text-cyan-400 mt-1">@{driverSpecs.githubUser}</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-mono text-red-400 font-semibold tracking-wide">
              {driverSpecs.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {driverSpecs.tagline} {driverSpecs.bio}
            </p>

            {/* Driver Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4">
              {driverSpecs.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-left hover:border-red-500/50 transition-colors">
                  <p className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">{stat.label}</p>
                  <p className="font-mono font-bold text-xl text-white mt-1 text-glow-red">{stat.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#showroom"
                onClick={() => audioEngine.playGearShift()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-mono font-bold text-sm tracking-wider uppercase shadow-xl shadow-red-900/40 hover:scale-105 active:scale-95 transition-transform flex items-center space-x-2"
              >
                <span>ENTER SHOWROOM</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pitstop"
                onClick={() => audioEngine.playGearShift()}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white font-mono font-bold text-sm tracking-wider uppercase hover:bg-slate-800 hover:border-red-500/50 transition-all flex items-center space-x-2"
              >
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>PIT STOP CONTACT</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Supercar Instrument Cluster */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-dashboard-card p-6 rounded-3xl border border-red-500/30 shadow-2xl shadow-red-900/30 text-center">
              
              {/* Cockpit Card Header */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                <span className="font-mono text-xs text-slate-400 tracking-widest uppercase">TACHOMETER TELEMETRY</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-red-950 text-red-400 border border-red-800">
                  V8 TWIN TURBO
                </span>
              </div>

              {/* Tachometer Dial Canvas SVG */}
              <div className="relative w-64 h-64 mx-auto my-2 flex items-center justify-center">
                
                {/* SVG Gauge Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Outer ring */}
                  <circle cx="100" cy="100" r="85" stroke="#1e293b" strokeWidth="12" fill="none" />
                  
                  {/* Gauge Arc Spectrum (Green -> Yellow -> Red Redline) */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="400"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="60%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Gauge Ticks & Redline Labels */}
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                  <span className="text-3xl font-black text-white font-mono tracking-tighter">
                    {rpm.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-red-400 uppercase tracking-widest font-bold mt-0.5">
                    RPM / REV
                  </span>

                  <div className="mt-3 flex items-center space-x-2 text-[10px] font-mono text-slate-400">
                    <span className="px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800 text-cyan-400">
                      0-60: {driverSpecs.zeroToSixty}
                    </span>
                    <span className="px-1.5 py-0.5 bg-slate-900 rounded border border-slate-800 text-amber-400">
                      BOOST: 32 PSI
                    </span>
                  </div>
                </div>

                {/* Rotating Needle */}
                <div
                  className="absolute w-full h-full flex items-center justify-center transition-transform duration-300 ease-out pointer-events-none"
                  style={{ transform: `rotate(${needleAngle}deg)` }}
                >
                  <div className="w-1 h-24 bg-gradient-to-t from-red-500 via-rose-500 to-yellow-300 origin-bottom rounded-full shadow-lg shadow-red-500"></div>
                </div>

                {/* Center Hub Nut */}
                <div className="absolute w-8 h-8 bg-slate-950 rounded-full border-2 border-red-500 shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Engine Ignition Button */}
              <div className="mt-6">
                <button
                  onClick={triggerRev}
                  className={`w-full py-4 rounded-2xl font-mono font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl ${
                    revving
                      ? 'bg-gradient-to-r from-yellow-500 to-red-600 text-black scale-105 shadow-red-500/80 glow-red'
                      : 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white hover:scale-[1.02] shadow-red-900/50'
                  }`}
                >
                  <Flame className={`w-5 h-5 ${revving ? 'animate-spin text-black' : 'text-amber-300'}`} />
                  <span>{revving ? 'REV ENGINE [7800 RPM]' : 'PUSH TO REV V8 ENGINE'}</span>
                </button>
                <p className="text-[11px] font-mono text-slate-400 mt-2">
                  * Triggers procedural Web Audio V8 exhaust note synthesizer
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
