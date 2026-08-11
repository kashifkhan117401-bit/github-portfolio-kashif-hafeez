import React, { useState } from 'react';
import { dynoSkills } from '../data/portfolioData';
import { Sliders, Zap, Flame, ShieldAlert, Cpu, Award } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export default function DynoSkills() {
  const [boostLevel, setBoostLevel] = useState(85); // 50 to 100%

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setBoostLevel(val);
    if (val === 100) {
      audioEngine.playTurboBOV();
    }
  };

  // Calculate dynamic horsepower based on boost slider
  const calcHp = (baseHp) => Math.round(baseHp * (boostLevel / 85));

  return (
    <section id="dyno" className="py-20 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>DYNO TUNING LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            POWERTRAIN <span className="text-amber-500">SKILLS MATRIX</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Adjust the turbo boost slider below to simulate full developer engine output under high load.
          </p>
        </div>

        {/* Interactive Boost Tuner Controls */}
        <div className="max-w-2xl mx-auto bg-dashboard-card p-6 rounded-3xl border border-amber-500/30 shadow-2xl mb-12 text-center">
          <div className="flex justify-between items-center mb-4 font-mono text-xs">
            <span className="text-slate-400 uppercase tracking-widest">TURBO BOOST PRESSURE</span>
            <span className={`font-bold px-3 py-1 rounded ${boostLevel === 100 ? 'bg-red-600 text-white animate-pulse' : 'bg-amber-500/20 text-amber-300'}`}>
              {boostLevel}% OVERCLOCK [{boostLevel === 100 ? 'MAX BOOST!' : 'TUNED'}]
            </span>
          </div>

          <input
            type="range"
            min="50"
            max="100"
            value={boostLevel}
            onChange={handleSliderChange}
            className="w-full h-3 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-500 shadow-inner"
          />

          <div className="flex justify-between items-center mt-3 font-mono text-[11px] text-slate-400">
            <span>ECO MODE (50%)</span>
            <span>STOCK (85%)</span>
            <span className="text-red-400 font-bold">100% TURBO OVERCLOCK</span>
          </div>
        </div>

        {/* Dyno Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dynoSkills.map((skill, idx) => {
            const currentHp = calcHp(skill.hpRating);
            return (
              <div
                key={idx}
                className="bg-dashboard-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 shadow-xl transition-all duration-300 text-left space-y-6"
              >
                {/* Header info */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono text-[10px] uppercase font-bold tracking-wider">
                      {skill.category}
                    </span>
                    <h3 className="font-mono text-xl font-bold text-white mt-1">{skill.name}</h3>
                  </div>

                  <div className="text-right font-mono">
                    <div className="text-2xl font-black text-amber-400 text-glow-amber">
                      {currentHp} <span className="text-xs text-slate-400">HP</span>
                    </div>
                    <div className="text-xs text-slate-400">TORQUE: {skill.torque}</div>
                  </div>
                </div>

                {/* Progress Bar Meter */}
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-slate-400">BENCHMARK EFFICIENCY</span>
                    <span className="text-white font-bold">{Math.min(100, Math.round(skill.level * (boostLevel / 85)))}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-red-500 transition-all duration-500 shadow-md"
                      style={{ width: `${Math.min(100, Math.round(skill.level * (boostLevel / 85)))}%` }}
                    ></div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div>
                  <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">POWERED BY:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
