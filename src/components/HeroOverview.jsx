import React from 'react';
import { MapPin, Mail, GitCommit, Star, Code2, Cpu, CheckCircle2, ExternalLink, Globe } from 'lucide-react';
import { githubProfile } from '../data/portfolioData';

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function HeroOverview() {
  const contributionWeeks = Array.from({ length: 30 }, (_, wIdx) => 
    Array.from({ length: 7 }, (_, dIdx) => {
      const level = (wIdx * 7 + dIdx) % 5;
      return level;
    })
  );

  const getGreenClass = (level) => {
    switch (level) {
      case 1: return 'bg-[#0e4429]';
      case 2: return 'bg-[#006d32]';
      case 3: return 'bg-[#26a641]';
      case 4: return 'bg-[#39d353]';
      default: return 'bg-[#161b22] border border-[#30363d]';
    }
  };

  return (
    <section id="hero" className="py-12 bg-github-canvas border-b border-[#30363d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GitHub Header Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Avatar & GitHub User Specs */}
          <div className="lg:col-span-4 bg-github-card p-6 rounded-2xl border border-github text-left space-y-5">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={githubProfile.avatarUrl}
                  alt={githubProfile.name}
                  className="w-24 h-24 rounded-full border-2 border-[#58a6ff] object-cover shadow-lg"
                />
                <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#238636] border-2 border-[#0d1117] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                </span>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white font-mono">{githubProfile.name}</h1>
                <p className="text-sm font-mono text-[#8b949e]">@{githubProfile.username}</p>
                <div className="mt-2 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#238636]/20 border border-[#2ea043]/40 font-mono text-[11px] text-[#3fb950]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{githubProfile.status}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#c9d1d9] leading-relaxed">
              {githubProfile.bio}
            </p>

            <div className="space-y-2.5 pt-2 border-t border-[#30363d] font-mono text-xs text-[#8b949e]">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#58a6ff]" />
                <span className="text-[#c9d1d9] font-semibold">{githubProfile.company}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#58a6ff]" />
                <span>{githubProfile.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#58a6ff]" />
                <span>{githubProfile.email}</span>
              </div>
            </div>

            {/* Social Media Links Bar */}
            <div className="pt-3 border-t border-[#30363d] space-y-2 font-mono text-xs">
              <div className="text-[#8b949e] text-[11px] font-bold uppercase">SOCIAL PROFILES</div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={githubProfile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#21262d] border border-[#30363d] hover:border-[#0a66c2] text-[#8b949e] hover:text-[#0a66c2] transition-colors flex items-center space-x-1.5"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={githubProfile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#21262d] border border-[#30363d] hover:border-[#e1306c] text-[#8b949e] hover:text-[#e1306c] transition-colors flex items-center space-x-1.5"
                  title="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href={githubProfile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#21262d] border border-[#30363d] hover:border-[#1877f2] text-[#8b949e] hover:text-[#1877f2] transition-colors flex items-center space-x-1.5"
                  title="Facebook Profile"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>

                <a
                  href={githubProfile.socials.portfolioVercel}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#21262d] border border-[#30363d] hover:border-[#3fb950] text-[#8b949e] hover:text-[#3fb950] transition-colors flex items-center space-x-1.5"
                  title="Vercel Live Portfolio"
                >
                  <Globe className="w-4 h-4 text-[#3fb950]" />
                  <span>Vercel Portfolio</span>
                </a>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={githubProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#c9d1d9] hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center space-x-2"
              >
                <span>VIEW GITHUB PROFILE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Title, Stats & Contribution Heatmap */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            <div className="bg-github-card p-6 rounded-2xl border border-github space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#30363d] pb-3">
                <div className="font-mono text-xs text-[#58a6ff] uppercase font-bold tracking-wider">
                  BS ARTIFICIAL INTELLIGENCE @ UMT
                </div>
                <div className="font-mono text-xs text-[#8b949e]">
                  PRIMARY STACK: PYTHON • C++ • SQL • VISION
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white font-mono">
                {githubProfile.title}
              </h2>

              <p className="text-base text-[#c9d1d9] leading-relaxed">
                {githubProfile.headline}
              </p>

              {/* GitHub Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d]">
                  <div className="font-mono text-[10px] text-[#8b949e] uppercase">PUBLIC REPOS</div>
                  <div className="font-mono font-bold text-xl text-[#58a6ff] mt-0.5">{githubProfile.stats.publicRepos} Repos</div>
                </div>
                <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d]">
                  <div className="font-mono text-[10px] text-[#8b949e] uppercase">STARS EARNED</div>
                  <div className="font-mono font-bold text-xl text-[#d29922] mt-0.5">⭐ {githubProfile.stats.starsEarned}</div>
                </div>
                <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d]">
                  <div className="font-mono text-[10px] text-[#8b949e] uppercase">YOLO VISION SPEED</div>
                  <div className="font-mono font-bold text-xl text-[#3fb950] mt-0.5">{githubProfile.stats.yoloFps}</div>
                </div>
                <div className="bg-[#0d1117] p-3 rounded-xl border border-[#30363d]">
                  <div className="font-mono text-[10px] text-[#8b949e] uppercase">ANNUAL COMMITS</div>
                  <div className="font-mono font-bold text-xl text-white mt-0.5">{githubProfile.stats.contributionsThisYear}</div>
                </div>
              </div>
            </div>

            {/* GitHub Contribution Heatmap Grid */}
            <div className="bg-github-card p-6 rounded-2xl border border-github text-left space-y-3">
              <div className="flex justify-between items-center font-mono text-xs text-[#8b949e]">
                <span>{githubProfile.stats.contributionsThisYear} contributions in the last year</span>
                <div className="flex items-center space-x-1">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded bg-[#161b22] border border-[#30363d]"></span>
                  <span className="w-2.5 h-2.5 rounded bg-[#0e4429]"></span>
                  <span className="w-2.5 h-2.5 rounded bg-[#006d32]"></span>
                  <span className="w-2.5 h-2.5 rounded bg-[#26a641]"></span>
                  <span className="w-2.5 h-2.5 rounded bg-[#39d353]"></span>
                  <span>More</span>
                </div>
              </div>

              {/* Grid visualizer */}
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-1 min-w-[500px]">
                  {contributionWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3 h-3 rounded-sm ${getGreenClass(level)} transition-colors hover:scale-125`}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Language breakdown progress bar */}
            <div className="bg-github-card p-5 rounded-2xl border border-github space-y-2 font-mono text-xs">
              <div className="flex justify-between text-[#8b949e] mb-1">
                <span>MOST USED LANGUAGES</span>
                <span>GitHub Telemetry</span>
              </div>
              <div className="h-2.5 w-full bg-[#0d1117] rounded-full overflow-hidden flex border border-[#30363d]">
                {githubProfile.languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    className="h-full"
                    title={`${lang.name}: ${lang.percent}%`}
                  ></div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-1 text-[11px]">
                {githubProfile.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                    <span className="text-[#c9d1d9] font-bold">{lang.name}</span>
                    <span className="text-[#8b949e]">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
