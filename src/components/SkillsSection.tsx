import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/projectsData';
import { Code, Bot, Database, Server, Terminal, ShieldCheck, Cpu, Check, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...TECHNICAL_SKILLS.map((c) => c.category)];

  const filteredSkills =
    filter === 'All'
      ? TECHNICAL_SKILLS
      : TECHNICAL_SKILLS.filter((c) => c.category === filter);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-900/80 bg-[#070913]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Expertise & Engineering Stack
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A verified inventory of technologies utilized in production and hands-on systems. Distinguishing commercial
            production experience from active hands-on implementations.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition duration-150 ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,242,254,0.35)]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((categoryGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 transition duration-200 backdrop-blur-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition duration-150">
                    {categoryGroup.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    {categoryGroup.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => {
                    const isProduction = skill.level === 'Production Experience';
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition duration-150 ${
                          isProduction
                            ? 'bg-slate-950/90 border border-cyan-500/40 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-950/20'
                            : 'bg-slate-950/70 border border-slate-800 text-slate-400'
                        }`}
                      >
                        {isProduction && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f2fe]" />
                        )}
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded ${
                            isProduction
                              ? 'bg-cyan-950/70 text-cyan-400 border border-cyan-800/50'
                              : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          {isProduction ? 'Production' : 'Hands-on'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified standard badge */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Codebase verified
                </span>
                <span>Bengaluru, IN</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
