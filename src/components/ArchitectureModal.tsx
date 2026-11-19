import React from 'react';
import { ProjectItem } from '../data/projectsData';
import { X, ShieldAlert, Cpu, Database, Server, GitBranch, CheckCircle2, Lock, Terminal, ExternalLink } from 'lucide-react';

interface ArchitectureModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const arch = project.architecture;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/70 flex items-start justify-between gap-4 sticky top-0 z-20 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{project.title}</span>
              <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono font-normal">
                Technical Deep Dive
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-1">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition duration-150"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-300 text-sm leading-relaxed">
          {/* Section: Problem & Solution Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 font-bold mb-2 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>1. Problem Statement</span>
              </h3>
              <p className="text-slate-300">{arch.problemStatement}</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>2. Solution Overview</span>
              </h3>
              <p className="text-slate-300">{arch.solutionOverview}</p>
            </div>
          </div>

          {/* Section: Visual Architecture Flow */}
          <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>3. System Architecture & Pipeline Flow</span>
            </h3>

            {/* SVG Visual Architecture Representation */}
            <div className="w-full bg-[#070913] p-6 rounded-lg border border-slate-800 overflow-x-auto">
              <div className="min-w-[620px] flex items-center justify-between text-center relative py-4">
                {arch.dataFlow.map((step, idx) => {
                  const parts = step.split(': ');
                  const title = parts[0] || `Step ${idx + 1}`;
                  const desc = parts[1] || parts[0];

                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center relative px-2 group">
                      {/* Node Box */}
                      <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 text-cyan-300 flex items-center justify-center font-mono font-bold text-xs mb-3 shadow-[0_0_12px_rgba(0,242,254,0.3)] group-hover:scale-110 transition duration-150">
                        0{idx + 1}
                      </div>
                      <div className="font-bold text-white text-xs font-mono mb-1">{title}</div>
                      <div className="text-[11px] text-slate-400 max-w-[140px] leading-tight">{desc}</div>

                      {/* Connecting Line */}
                      {idx < arch.dataFlow.length - 1 && (
                        <div className="hidden sm:block absolute top-5 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500/40 z-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: LLM Integration & Deterministic Guardrails */}
          <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>4. LLM Integration & Deterministic Guardrails</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">Model & Provider</span>
                <p className="text-xs text-slate-300 font-mono">{arch.llmIntegration.model}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">Prompting Strategy</span>
                <p className="text-xs text-slate-300">{arch.llmIntegration.promptStrategy}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">
                  Hallucination Prevention Guardrails
                </span>
                <p className="text-xs text-slate-300">{arch.llmIntegration.guardrails}</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">Deterministic Fallback</span>
                <p className="text-xs text-slate-300">{arch.llmIntegration.deterministicFallback}</p>
              </div>
            </div>
          </div>

          {/* Section: Backend & Database Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>5. Backend Architecture</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">{arch.backendArchitecture}</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>6. Database & Persistence Design</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">{arch.databaseDesign}</p>
            </div>
          </div>

          {/* Section: Security, Testing, Deployment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Security & Secrets</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {arch.security.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Testing & Evaluation</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{arch.testingEvaluation}</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Deployment Stack</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{arch.deployment}</p>
            </div>
          </div>

          {/* Section: Real Engineering Challenges Overcome */}
          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>7. Technical Challenges & Engineering Solutions</span>
            </h3>

            <div className="space-y-4">
              {arch.engineeringChallenges.map((ec, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-900 border border-slate-800/80">
                  <div className="font-semibold text-rose-300 text-xs mb-1">Challenge: {ec.challenge}</div>
                  <div className="text-xs text-cyan-200">
                    <strong className="text-slate-300">Solution:</strong> {ec.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="text-xs text-slate-400 font-mono">
            Source architecture verified against local repository code.
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-[0_0_15px_rgba(0,242,254,0.3)]"
            >
              Close Deep Dive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
