import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, ExternalLink, Globe } from 'lucide-react';
import { githubProfile } from '../data/portfolioData';
import confetti from 'canvas-confetti';

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

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#238636', '#58a6ff', '#a371f7', '#ffffff']
    });
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-github-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-[#58a6ff]" />
            <h2 className="text-2xl font-bold text-white font-mono font-bold">GET IN TOUCH</h2>
          </div>
          <p className="text-xs text-[#8b949e] font-mono">
            Interested in collaborating with Kashif Hafeez on AI models, computer vision, voice assistants, or software engineering? Send a direct message.
          </p>
        </div>

        {/* Grid: Form & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-github-card p-6 sm:p-8 rounded-2xl border border-github text-left">
            {submitted ? (
              <div className="py-10 text-center space-y-4 font-mono">
                <div className="w-14 h-14 bg-[#238636]/20 text-[#3fb950] border border-[#2ea043]/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">MESSAGE SENT TO KASHIF HAFEEZ!</h3>
                <p className="text-xs text-[#8b949e] max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Kashif will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#21262d] border border-[#30363d] text-xs text-[#c9d1d9] hover:text-white font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-[#30363d] pb-3 mb-1">
                  <span className="text-[#58a6ff] font-bold">CONTACT MESSAGE FORM</span>
                  <span className="text-[#8b949e]">Status: Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8b949e] mb-1.5 uppercase">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#58a6ff] font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8b949e] mb-1.5 uppercase">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#58a6ff] font-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8b949e] mb-1.5 uppercase">SUBJECT / PROJECT DOMAIN</label>
                  <input
                    type="text"
                    placeholder="e.g. YOLOv8 / Voice AI / Full-Time Engineering Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#58a6ff] font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#8b949e] mb-1.5 uppercase">MESSAGE *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your project details, requirements, or collaboration inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-[#58a6ff] font-sans text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH MESSAGE TO KASHIF HAFEEZ</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Connect Cards */}
          <div className="lg:col-span-5 bg-github-card p-6 sm:p-8 rounded-2xl border border-github text-left space-y-4 font-mono text-xs">
            <h3 className="text-sm font-bold text-white uppercase border-b border-[#30363d] pb-3 flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-[#58a6ff]" />
              <span>DIRECT SOCIAL & GITHUB CHANNELS</span>
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <a
                href={githubProfile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#21262d] text-[#58a6ff]">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8b949e]">GITHUB PROFILE</div>
                  <div className="font-bold text-sm text-white">github.com/{githubProfile.username}</div>
                </div>
              </a>

              <a
                href={githubProfile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#0a66c2] text-[#c9d1d9] hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#21262d] text-[#0a66c2]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8b949e]">LINKEDIN PROFILE</div>
                  <div className="font-bold text-sm text-white">linkedin.com/in/kashif-hafeez</div>
                </div>
              </a>

              <a
                href={githubProfile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#e1306c] text-[#c9d1d9] hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#21262d] text-[#e1306c]">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8b949e]">INSTAGRAM PROFILE</div>
                  <div className="font-bold text-sm text-white">instagram.com/i_kashiif</div>
                </div>
              </a>

              <a
                href={githubProfile.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#1877f2] text-[#c9d1d9] hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#21262d] text-[#1877f2]">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8b949e]">FACEBOOK PROFILE</div>
                  <div className="font-bold text-sm text-white">facebook.com/kashif.hafeez</div>
                </div>
              </a>

              <a
                href={githubProfile.socials.portfolioVercel}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-3 p-3 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#3fb950] text-[#c9d1d9] hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-[#21262d] text-[#3fb950]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-[#8b949e]">VERCEL LIVE PORTFOLIO</div>
                  <div className="font-bold text-sm text-white">kashifhafeez-portfolio1.vercel.app</div>
                </div>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-[#8b949e] font-mono text-xs leading-relaxed">
              <strong className="text-[#3fb950]">STATUS:</strong> BS Artificial Intelligence Student at UMT. Open to internships, remote contracts, and global AI engineering roles.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
