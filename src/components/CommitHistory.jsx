import React from 'react';
import { commitHistory } from '../data/portfolioData';
import { GitCommit, GitPullRequest, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function CommitHistory() {
  return (
    <section id="experience" className="py-16 bg-github-canvas border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="flex items-center space-x-2">
            <GitCommit className="w-5 h-5 text-[#3fb950]" />
            <h2 className="text-2xl font-bold text-white font-mono">COMMIT LOG & MILESTONES</h2>
          </div>
          <p className="text-xs text-[#8b949e] font-mono">
            Timeline of engineering accomplishments, pull requests, and key repository releases.
          </p>
        </div>

        {/* Timeline Git Commit Nodes */}
        <div className="relative border-l-2 border-[#30363d] ml-4 md:ml-8 space-y-8 text-left">
          {commitHistory.map((commit, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              
              {/* Commit Dot Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-[#238636] group-hover:bg-[#3fb950] transition-colors"></div>

              {/* Commit Card */}
              <div className="bg-github-card p-6 rounded-2xl border border-github hover:border-[#58a6ff]/50 transition-all space-y-4">
                
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#30363d] pb-3">
                  <div>
                    <div className="flex items-center space-x-2 font-mono text-xs text-[#58a6ff]">
                      <GitPullRequest className="w-3.5 h-3.5" />
                      <span>{commit.repo}</span>
                    </div>
                    <h3 className="text-lg font-mono font-bold text-white mt-1">{commit.title}</h3>
                  </div>

                  <div className="flex items-center space-x-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
                      commit <code className="text-[#3fb950] font-bold">{commit.hash}</code>
                    </span>
                    <span className="text-[#8b949e]">{commit.date}</span>
                  </div>
                </div>

                <p className="text-sm text-[#c9d1d9] leading-relaxed">
                  {commit.description}
                </p>

                {/* Commit Tags */}
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  {commit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-[#21262d] text-[#c9d1d9] border border-[#30363d] text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
