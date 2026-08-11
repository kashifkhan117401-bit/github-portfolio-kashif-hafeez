import React, { useState } from 'react';
import { repositoriesList } from '../data/portfolioData';
import { BookOpen, Star, GitFork, ExternalLink, X, Tag, Code, CheckCircle, FileText, Terminal, Layers } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Repositories() {
  const [filterLang, setFilterLang] = useState('ALL');
  const [activeReadmeRepo, setActiveReadmeRepo] = useState(null);

  const filters = ['ALL', 'Python', 'SQL', 'Cisco Packet Tracer'];

  const filteredRepos = filterLang === 'ALL'
    ? repositoriesList
    : repositoriesList.filter(r => r.language === filterLang);

  return (
    <section id="repositories" className="py-16 bg-github-canvas border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="text-left">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#58a6ff]" />
              <h2 className="text-2xl font-bold text-white font-mono">PINNED REPOSITORIES</h2>
            </div>
            <p className="text-xs text-[#8b949e] font-mono mt-1">
              Featured open-source projects, database architectures, and computer vision pipelines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilterLang(f)}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  filterLang === f
                    ? 'bg-[#1f6feb] text-white border-[#388bfd] font-bold'
                    : 'bg-[#161b22] text-[#8b949e] border-[#30363d] hover:text-[#c9d1d9] hover:bg-[#21262d]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-github-card p-6 rounded-2xl border border-github hover:border-[#58a6ff]/60 transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-3">
                {/* Repo Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 truncate">
                    <BookOpen className="w-4 h-4 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors shrink-0" />
                    <a
                      href={repo.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm font-bold text-[#58a6ff] hover:underline truncate"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-[#21262d] border border-[#30363d] font-mono text-[10px] text-[#8b949e] shrink-0">
                    Public
                  </span>
                </div>

                <p className="text-xs text-[#c9d1d9] leading-relaxed line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {repo.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md bg-[#388bfd]/10 border border-[#388bfd]/30 text-[#58a6ff] font-mono text-[10px]"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Card Footer */}
              <div className="pt-5 mt-4 border-t border-[#30363d] flex items-center justify-between font-mono text-xs text-[#8b949e]">
                <div className="flex items-center space-x-4">
                  {/* Language */}
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }}></span>
                    <span className="text-[#c9d1d9] font-semibold">{repo.language}</span>
                  </div>

                  {/* Stars */}
                  {repo.stars > 0 && (
                    <div className="flex items-center space-x-1 hover:text-[#d29922] transition-colors">
                      <Star className="w-3.5 h-3.5 text-[#d29922]" />
                      <span>{repo.stars}</span>
                    </div>
                  )}

                  {/* Forks */}
                  {repo.forks > 0 && (
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-3.5 h-3.5" />
                      <span>{repo.forks}</span>
                    </div>
                  )}
                </div>

                {/* Inspect README modal button */}
                <button
                  onClick={() => setActiveReadmeRepo(repo)}
                  className="px-2.5 py-1 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#58a6ff] hover:text-white border border-[#30363d] text-[11px] font-bold transition-all flex items-center space-x-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>README</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* GitHub README Preview Modal */}
      {activeReadmeRepo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#30363d] pb-4 mb-6">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-[#58a6ff]" />
                <div>
                  <h3 className="text-xl font-mono font-bold text-white flex items-center space-x-2">
                    <span>{activeReadmeRepo.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                      README.md
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-[#8b949e] mt-0.5">Primary Language: {activeReadmeRepo.language}</p>
                </div>
              </div>

              <button
                onClick={() => setActiveReadmeRepo(null)}
                className="p-2 rounded-lg bg-[#21262d] text-[#8b949e] hover:text-white hover:bg-[#30363d] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* README Content Section */}
            <div className="space-y-6 text-sm font-sans text-[#c9d1d9]">
              
              <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] space-y-2">
                <h4 className="font-mono text-xs font-bold text-[#58a6ff] uppercase tracking-wider flex items-center space-x-2">
                  <Terminal className="w-4 h-4" />
                  <span>ARCHITECTURE OVERVIEW</span>
                </h4>
                <p className="leading-relaxed text-xs font-mono text-[#c9d1d9]">
                  {activeReadmeRepo.readmeContent.overview}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#3fb950] uppercase tracking-wider mb-2 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>KEY TECHNICAL HIGHLIGHTS</span>
                </h4>
                <ul className="space-y-2">
                  {activeReadmeRepo.readmeContent.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2 bg-[#161b22] p-2.5 rounded-lg border border-[#30363d] font-mono text-xs text-[#c9d1d9]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58a6ff]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#d29922] uppercase tracking-wider mb-2 flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>TECH STACK & DEPENDENCIES</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeReadmeRepo.readmeContent.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#21262d] border border-[#30363d] font-mono text-xs text-[#c9d1d9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="mt-8 pt-4 border-t border-[#30363d] flex justify-end gap-3 font-mono text-xs">
              <a
                href={activeReadmeRepo.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-bold transition-all shadow flex items-center space-x-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW REPOSITORY ON GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
