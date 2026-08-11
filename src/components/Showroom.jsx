import React, { useState } from 'react';
import { projectShowroom } from '../data/portfolioData';
import { Gauge, ExternalLink, Zap, ShieldCheck, Flame, X, Cpu, Activity, BarChart2, Code2 } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}


export default function Showroom() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['ALL', 'Full-Stack / IoT', 'AI / Cloud', 'Frontend UI/UX'];

  const filteredProjects = selectedCategory === 'ALL'
    ? projectShowroom
    : projectShowroom.filter(p => p.category === selectedCategory);

  const openModal = (proj) => {
    audioEngine.playGearShift();
    setActiveModalProject(proj);
  };

  const closeModal = () => {
    audioEngine.playGearShift();
    setActiveModalProject(null);
  };

  return (
    <section id="showroom" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>SUPERCAR SHOWROOM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            FEATURED <span className="text-red-500">PROJECTS</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            High-performance applications built with hypercar power, telemetry analytics, and clean code architecture.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  audioEngine.playGearShift();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-900/50 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-dashboard-card rounded-3xl overflow-hidden border border-slate-800 hover:border-red-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-slate-700 font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-bold">
                    {project.category}
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-red-600/90 text-white font-mono text-[10px] uppercase font-bold tracking-wider shadow-lg">
                    {project.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 text-left">
                  <h3 className="font-mono font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Engine Specs Box */}
                  <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 font-mono text-xs space-y-2">
                    <div className="flex justify-between items-center text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5 text-red-500" />
                        <span>ENGINE:</span>
                      </span>
                      <span className="text-white font-bold">{project.engine}</span>
                    </div>

                    <div className="flex justify-between items-center text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>TURBO BOOST:</span>
                      </span>
                      <span className="text-amber-400 font-bold">{project.boost}</span>
                    </div>

                    <div className="flex justify-between items-center text-slate-400">
                      <span className="flex items-center space-x-1.5">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        <span>0-100 ACCEL:</span>
                      </span>
                      <span className="text-cyan-400 font-bold">{project.zeroTo100}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => openModal(project)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-red-600 border border-slate-700 hover:border-red-500 text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <BarChart2 className="w-4 h-4" />
                  <span>VIEW TELEMETRY</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Telemetry Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-dashboard-card border border-red-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-red-900/50 text-left max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-[10px] uppercase font-bold tracking-widest">
                  TELEMETRY SPEC SHEET
                </span>
                <h3 className="text-2xl font-mono font-bold text-white mt-1">{activeModalProject.title}</h3>
                <p className="text-xs font-mono text-slate-400">CLASS: {activeModalProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="h-48 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-800">
              <img src={activeModalProject.image} alt={activeModalProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Architecture Telemetry */}
            <div className="space-y-4 font-sans text-sm text-slate-300">
              <div>
                <h4 className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider mb-1">ARCHITECTURE OVERVIEW</h4>
                <p className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">{activeModalProject.telemetry.architecture}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">KEY TELEMETRY FEATURES</h4>
                <ul className="space-y-2">
                  {activeModalProject.telemetry.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60 text-xs font-mono">
                      <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">BENCHMARK METRICS</h4>
                <p className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl font-mono text-xs text-emerald-300">
                  {activeModalProject.telemetry.metrics}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap gap-4 justify-end font-mono text-xs">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 flex items-center space-x-2 font-bold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB ECU REPO</span>
              </a>

              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold shadow-lg shadow-red-900/40 flex items-center space-x-2 hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LAUNCH SIMULATOR</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
