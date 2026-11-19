import React from 'react';
import { EXPERIENCE_DATA } from '../data/projectsData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Code2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-900 bg-[#070913]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Engineering Experience
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Real commercial contributions in AI software development, asynchronous backend services, and enterprise
            workflow automation.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-slate-900/50 border border-cyan-500/30 shadow-[0_0_35px_rgba(0,0,0,0.6)] backdrop-blur-md relative overflow-hidden group"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-cyan-400 font-bold text-lg mt-1">{exp.company}</div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {exp.overview}
              </p>

              {/* Responsibilities List */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Key Responsibilities & Deliverables:</span>
                </h4>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                  Technologies Deployed in Production:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md bg-slate-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                    >
                      {tech}
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
};
