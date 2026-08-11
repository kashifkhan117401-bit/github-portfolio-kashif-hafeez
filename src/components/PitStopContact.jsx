import React, { useState } from 'react';
import { Radio, Send, CheckCircle2, ShieldAlert, Zap, Mail, MessageSquare } from 'lucide-react';
import { dashboardIndicators } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { audioEngine } from '../utils/audioEngine';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z" />
    </svg>
  );
}


export default function PitStopContact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectScope: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    audioEngine.playIgnition();
    
    // Trigger celebratory checkered flag confetti explosion
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#06b6d4', '#f59e0b', '#ffffff', '#000000']
    });

    setSubmitted(true);
  };

  return (
    <section id="pitstop" className="py-20 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PIT STOP CONTROL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            INITIATE <span className="text-cyan-400">TELEMETRY RADIO</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Ready to build a next-generation web application? Send a telemetry message directly to the pit wall.
          </p>
        </div>

        {/* Status Warning Lights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {dashboardIndicators.map((ind, idx) => (
            <div key={idx} className={`p-4 rounded-2xl border ${ind.bg} backdrop-blur-md text-left flex items-center space-x-3`}>
              <div className={`w-3 h-3 rounded-full ${ind.color.replace('text-', 'bg-')} animate-ping`}></div>
              <div>
                <p className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">{ind.label}</p>
                <p className={`font-mono font-bold text-xs ${ind.color}`}>{ind.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Direct Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dashboard Form */}
          <div className="lg:col-span-7 bg-dashboard-card p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl text-left">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-white uppercase">TELEMETRY TRANSMITTED!</h3>
                <p className="text-slate-300 font-mono text-sm max-w-md mx-auto">
                  Message received on the pit wall frequency. I will review telemetry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs text-slate-300 hover:text-white uppercase font-bold"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                
                <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-2">
                  <span className="text-slate-400 uppercase tracking-widest font-bold">DISPATCH FORM</span>
                  <span className="text-cyan-400">CHANNEL #01-DIRECT</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-2 uppercase">PILOT / CLIENT NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Carroll Shelby"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-2 uppercase">RADIO FREQUENCY EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@team-apex.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-2 uppercase">PROJECT CATEGORY / VEHICLE SPEC</label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
                  >
                    <option value="">Select Project Scope...</option>
                    <option value="Full-Stack Web App">Full-Stack Supercar App</option>
                    <option value="Frontend UI/UX Systems">Frontend Aerodynamics & Design System</option>
                    <option value="Performance Tuning">ECU Speed Optimization & Code Audit</option>
                    <option value="Full-time Engineering Role">Full-Time Lead Software Engineer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-2 uppercase">TRANSMISSION DETAILS *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your project specs, timeline, and horsepower requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-cyan-500 font-sans"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-600 text-slate-950 font-black text-sm uppercase tracking-widest shadow-xl shadow-cyan-500/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5 text-slate-950" />
                  <span>TRANSMIT TELEMETRY TO PIT WALL</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Direct Channels */}
          <div className="lg:col-span-5 bg-dashboard-card p-6 sm:p-8 rounded-3xl border border-slate-800 text-left space-y-6">
            <h3 className="font-mono text-lg font-bold text-white uppercase flex items-center space-x-2 border-b border-slate-800 pb-3">
              <MessageSquare className="w-5 h-5 text-red-500" />
              <span>DIRECT RADIO CHANNELS</span>
            </h3>

            <div className="space-y-4 font-mono text-xs">
              <a
                href="mailto:alex@apex-dev.com"
                className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">EMAIL TRANSMISSION</div>
                  <div className="font-bold text-sm text-white">alex@apex-dev.com</div>
                </div>
              </a>

              <a
                href="https://github.com/kashifkhan117401-bit"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">GITHUB CODE GARAGE</div>
                  <div className="font-bold text-sm text-white">github.com/kashifkhan117401-bit</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase">LINKEDIN DRIVER PROFILE</div>
                  <div className="font-bold text-sm text-white">linkedin.com/in/apex-mercer</div>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-400 font-mono text-[11px] leading-relaxed">
              <span className="text-red-400 font-bold">LOCATION:</span> San Francisco, CA (PST / UTC-8). Available for remote contracts and on-site engineering missions worldwide.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
