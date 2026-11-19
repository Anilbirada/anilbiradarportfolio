import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/projectsData';
import { ArchitectureModal } from './ArchitectureModal';
import { Cpu, ExternalLink, Layers, ArrowRight, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import { Github } from './SocialIcons';

export const FeaturedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects (8)' },
    { id: 'featured', label: 'Featured Core (4)' },
    { id: 'agent', label: 'Multi-Agent & Automation' },
    { id: 'rag', label: 'RAG & Document AI' },
    { id: 'ml', label: 'ML & Predictive' },
    { id: 'fullstack', label: 'Production Full-Stack' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'featured') return p.featured;
    return p.type === activeTab;
  });

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured AI & Backend Systems
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Real implementations solving genuine enterprise problems: autonomous multi-agent networks,
            context-grounded RAG assistants, atomic log intelligence, and scalable full-stack platforms.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition duration-150 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.35)]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl bg-slate-900/60 border transition duration-300 flex flex-col justify-between overflow-hidden group ${
                project.featured
                  ? 'border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.08)]'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Card Top / Visual Banner */}
              <div>
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 opacity-85 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-cyan-400 p-6 text-center">
                            <span class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-1">Architecture Preview</span>
                            <span class="font-bold text-lg text-white">${project.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-cyan-500/50 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_#00f2fe]">
                        Core Project
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition duration-150 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">{project.tagline}</p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Key Contributions Checklist */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                      Key Engineering Contributions:
                    </span>
                    {project.keyContributions.slice(0, 3).map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-semibold transition"
                >
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Technical Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Architecture Modal */}
      <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
