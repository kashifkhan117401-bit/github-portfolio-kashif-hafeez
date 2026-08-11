import React from 'react';
import { circuitExperience } from '../data/portfolioData';
import { Flag, Award, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function TrackExperience() {
  return (
    <section id="track" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
            <Flag className="w-3.5 h-3.5 text-red-500" />
            <span>RACE TRACK LOGBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            CAREER <span className="text-red-500">CIRCUITS</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Track records, team milestones, and engineering victories across major software development circuits.
          </p>
        </div>

        {/* Timeline Circuit Cards */}
        <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-32 space-y-12 text-left">
          {circuitExperience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              
              {/* Checkered Flag Node Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-red-500 flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:bg-red-600 transition-all duration-300">
                <Flag className="w-4 h-4 text-white" />
              </div>

              {/* Card Container */}
              <div className="bg-dashboard-card p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-red-500/50 shadow-xl transition-all duration-300">
                
                {/* Circuit Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-widest flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.circuit}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">{exp.role}</h3>
                    <p className="text-sm font-mono text-cyan-400 font-semibold">{exp.company}</p>
                  </div>

                  <div className="text-right font-mono">
                    <span className="px-3 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 text-xs font-bold block mb-1">
                      {exp.period}
                    </span>
                    <span className="text-xs text-amber-400 flex items-center justify-end space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>LAP RECORD: {exp.lapRecord}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">TRACK RECORDS & ACHIEVEMENTS:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start space-x-2 text-xs font-mono text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
