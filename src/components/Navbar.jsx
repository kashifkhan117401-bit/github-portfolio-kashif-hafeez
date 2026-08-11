import React from 'react';
import { BookOpen, Code2, Cpu, GitCommit, Mail, ExternalLink, Star, GitFork, UserCheck } from 'lucide-react';
import { githubProfile } from '../data/portfolioData';

function GithubOctocatIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'hero', label: 'Overview', icon: BookOpen },
    { id: 'repositories', label: 'Repositories', icon: Code2, count: githubProfile.stats.publicRepos },
    { id: 'skills', label: 'Tech Matrix', icon: Cpu },
    { id: 'experience', label: 'Commit Log', icon: GitCommit },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#010409]/95 backdrop-blur border-b border-[#30363d] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* GitHub Octocat Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            <div className="p-2 rounded-xl bg-[#21262d] border border-[#30363d] text-white group-hover:text-[#58a6ff] transition-colors">
              <GithubOctocatIcon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-base font-mono">{githubProfile.name}</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#1f6feb]/20 text-[#58a6ff] border border-[#1f6feb]/40 font-mono">
                  PRO
                </span>
              </div>
              <p className="text-xs text-[#8b949e] font-mono">@{githubProfile.username}</p>
            </div>
          </div>

          {/* GitHub Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                    isActive
                      ? 'bg-[#21262d] text-white font-bold border border-[#30363d]'
                      : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#58a6ff]' : ''}`} />
                  <span>{item.label}</span>
                  {item.count !== undefined && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#30363d] text-[10px] text-[#c9d1d9]">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: GitHub Profile External Button */}
          <div className="flex items-center space-x-3">
            <a
              href={githubProfile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-mono text-xs font-bold transition-all shadow flex items-center space-x-2"
            >
              <UserCheck className="w-4 h-4" />
              <span className="hidden sm:inline">GITHUB PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Tab Strip */}
      <div className="md:hidden flex justify-around bg-[#161b22] border-t border-[#30363d] px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md font-mono text-xs ${
                activeSection === item.id ? 'text-[#58a6ff] font-bold bg-[#21262d]' : 'text-[#8b949e]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
