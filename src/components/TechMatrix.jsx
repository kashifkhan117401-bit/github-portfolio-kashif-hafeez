import React from 'react';
import { techSkillsMatrix } from '../data/portfolioData';
import { Cpu, Brain, Database, Network, Code, CheckCircle } from 'lucide-react';

export default function TechMatrix() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-[#a371f7]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#d29922]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#3fb950]" />;
      default: return <Code className="w-5 h-5 text-[#58a6ff]" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-github-canvas border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-2">
          <div className="flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-[#a371f7]" />
            <h2 className="text-2xl font-bold text-white font-mono">TECHNICAL SKILLS & COMPETENCIES</h2>
          </div>
          <p className="text-xs text-[#8b949e] font-mono">
            Core proficiency across Artificial Intelligence, Relational Databases, Cisco Networks, and Full-Stack Engineering.
          </p>
        </div>

        {/* Tech Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techSkillsMatrix.map((cat, idx) => (
            <div
              key={idx}
              className="bg-github-card p-6 rounded-2xl border border-github text-left space-y-6"
            >
              <div className="flex items-center space-x-3 border-b border-[#30363d] pb-3">
                <div className="p-2 rounded-lg bg-[#21262d] border border-[#30363d]">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-mono text-lg font-bold text-white">{cat.category}</h3>
              </div>

              {/* Skills Progress Meters */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#c9d1d9] font-semibold">{skill.name}</span>
                      <span className="text-[#8b949e]">{skill.level} ({skill.percent}%)</span>
                    </div>

                    <div className="h-2 w-full bg-[#0d1117] rounded-full overflow-hidden border border-[#30363d] p-0.5">
                      <div
                        className="h-full rounded-full bg-[#238636] transition-all duration-500"
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
