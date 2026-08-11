import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { githubProfile } from '../data/portfolioData';

function GithubOctocatIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#010409] border-t border-[#30363d] py-10 font-mono text-xs text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3">
            <GithubOctocatIcon className="w-5 h-5 text-[#8b949e]" />
            <div className="text-left">
              <span className="font-bold text-white text-xs">{githubProfile.name}</span>
              <span className="text-[#8b949e] ml-2">@{githubProfile.username}</span>
            </div>
          </div>

          <div className="text-center text-[11px] text-[#8b949e]">
            © {new Date().getFullYear()} Kashif Khan. Built with React 18, Vite & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-[#c9d1d9] hover:text-white transition-all flex items-center space-x-1.5 text-xs font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#58a6ff]" />
          </button>

        </div>

      </div>
    </footer>
  );
}
