import React from 'react';
import { ShieldCheck, Cpu, Zap, Settings, Award, CheckCircle2, Compass, Wrench } from 'lucide-react';
import { driverSpecs } from '../data/portfolioData';

export default function TechSpecs() {
  const engineSpecsList = [
    { label: "Engine Configuration", val: "Twin-Turbo React & Node.js V8", detail: "High-concurrency event-loop execution" },
    { label: "Transmission / Drivetrain", val: "6-Speed Full-Stack Pipeline", detail: "Seamless REST & GraphQL paddles" },
    { label: "Aerodynamic Drag Coeff.", val: "0.18 Cd (Peak Aero)", detail: "Zero-bloat optimized CSS/JS bundles" },
    { label: "Fuel System / Security", val: "JWT + OAuth2 + TLS 1.3", detail: "Strict telemetry encryption" },
    { label: "Chassis & Architecture", val: "Microservices & Docker Container", detail: "Modular component dynamic imports" },
    { label: "ECU Tuning Mode", val: "Production Overclocked", detail: "100/100 Lighthouse Web Vitals" },
  ];

  return (
    <section id="specs" className="py-20 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
            <Settings className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>TELEMETRY DIAGNOSTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DRIVER & VEHICLE <span className="text-red-500">SPECS</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm">
            Technical blueprint and engineering principles powering high-performance software builds.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Driver Spec Sheet */}
          <div className="lg:col-span-5 bg-dashboard-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-white uppercase">DRIVER BLUEPRINT</h3>
                    <p className="font-mono text-xs text-slate-400">CHASSIS NO. #2026-DEV</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono text-xs">
                  PASSED INSPECTION
                </span>
              </div>

              <div className="space-y-4 text-left">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I approach full-stack software development with the exact precision of a motorsports engineer tuning a championship-winning hypercar. Every line of code is optimized for maximum downforce (maintainability) and reduced friction (latency).
                </p>

                <div className="space-y-2 pt-2 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-400">PRIMARY ROLE:</span>
                    <span className="text-white font-bold">{driverSpecs.title}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-400">LOCATION:</span>
                    <span className="text-cyan-400 font-bold">{driverSpecs.location}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-400">AVAILABILITY:</span>
                    <span className="text-emerald-400 font-bold">{driverSpecs.status}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">MAX ENGINE RPM:</span>
                    <span className="text-red-400 font-bold">{driverSpecs.maxRpm} RPM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-xs text-slate-300">CERTIFIED ISO 9001 CLEAN CODE</span>
              </div>
              <Wrench className="w-4 h-4 text-slate-500" />
            </div>
          </div>

          {/* Right Column: Detailed Telemetry Specs Table */}
          <div className="lg:col-span-7 bg-dashboard-card p-6 sm:p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <h3 className="font-mono text-lg font-bold text-white uppercase flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <span>POWERTRAIN DIAGNOSTIC METRICS</span>
              </h3>
              <span className="font-mono text-xs text-slate-400">V8 TWIN-TURBO RECTIFIER</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineSpecsList.map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-colors text-left space-y-1">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="font-mono text-xs uppercase text-slate-400 tracking-wider">{item.label}</span>
                  </div>
                  <p className="font-mono font-bold text-sm text-white">{item.val}</p>
                  <p className="text-[11px] text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center space-x-4">
              <Zap className="w-6 h-6 text-red-400 shrink-0 animate-pulse" />
              <p className="font-mono text-xs text-slate-300 text-left">
                <strong>FAST-TRACK GUARANTEE:</strong> Engineered to achieve sub-second page loads, 60+ FPS fluid animations, and zero memory leaks under full production throttle.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
