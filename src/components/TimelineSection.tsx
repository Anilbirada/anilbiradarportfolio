import React from 'react';
import { TIMELINE_DATA } from '../data/projectsData';
import { Milestone, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative z-10 border-t border-slate-900 bg-[#070913]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth & Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Journey & Milestones
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            From formal computer application studies to engineering production-grade Generative AI, RAG pipelines,
            and orchestrated multi-agent systems.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Track Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 sm:-translate-x-1/2 z-0 opacity-40" />

          <div className="space-y-12 relative z-10">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0">
                    <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition duration-200 backdrop-blur-sm group">
                      <span className="inline-block px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-mono text-[11px] uppercase tracking-wider mb-2">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition duration-150">
                        {item.title}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400 mb-3">{item.subtitle}</div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Competencies Acquired */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.4)] z-20 font-mono font-bold text-xs">
                    {idx + 1}
                  </div>

                  {/* Empty Spacer Column on Opposite Side for Desktop Grid */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
