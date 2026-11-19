import React, { useState } from 'react';
import { Download, FileText, Eye, CheckCircle2, GraduationCap, Briefcase, Code, Sparkles, X, ExternalLink } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  return (
    <section id="resume" className="py-24 relative z-10 border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Engineering Resume
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A comprehensive, verified summary of commercial experience, artificial intelligence projects, and academic
            credentials.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/resume.pdf"
              download="Anil_Biradar_AI_Engineer_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] transition"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={() => setShowPreviewModal(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/40 text-sm font-semibold transition"
            >
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Preview Interactive Resume</span>
            </button>
          </div>
        </div>

        {/* Live Interactive Resume Paper View */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl p-6 sm:p-10 backdrop-blur-md">
          {/* Header Area */}
          <div className="border-b border-slate-800 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Anil Biradar</h3>
              <p className="text-sm font-mono text-cyan-400 font-semibold mt-1">
                Junior AI Engineer | Generative AI | LLMs | RAG | AI Agents
              </p>
              <div className="text-xs text-slate-400 mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono">
                <span>Bengaluru, Karnataka, India</span>
                <span>•</span>
                <a href="mailto:aniladani843@gmail.com" className="text-cyan-300 hover:underline">
                  aniladani843@gmail.com
                </a>
                <span>•</span>
                <a
                  href="https://github.com/Anilbirada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  github.com/Anilbirada
                </a>
              </div>
            </div>

            <div className="hidden sm:block text-right">
              <span className="inline-block px-3 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-400">
                A4 Document Format
              </span>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Professional Summary</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Junior AI Engineer with hands-on production experience in Python, Large Language Model application
              development, Retrieval-Augmented Generation (RAG) architectures, and autonomous multi-agent pipelines.
              Demonstrated ability to write clean, test-driven REST backends with FastAPI and Flask, deploy containerized
              systems with Docker, and construct deterministic validation layers preventing LLM hallucination in
              enterprise business contexts.
            </p>
          </div>

          {/* Section: Professional Experience */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Commercial Experience</span>
            </h4>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm mb-1">
                  <span className="font-bold text-white">Junior AI Developer</span>
                  <span className="font-mono text-xs text-cyan-400">Present | Bengaluru, IN</span>
                </div>
                <div className="text-xs font-mono text-slate-400 mb-2">RSR Technology</div>
                <ul className="space-y-1.5 text-xs text-slate-300 pl-4 list-disc marker:text-cyan-400">
                  <li>
                    Architected and deployed asynchronous Python backend services for internal AI applications utilizing
                    FastAPI and Pydantic v2.
                  </li>
                  <li>
                    Engineered "Build IQ" automated diagnostic pipelines, synthesizing verbose developer CI/CD logs into
                    concise failure summaries with suggested remedies.
                  </li>
                  <li>
                    Implemented "Support IQ" semantic customer inquiry triage system with ChromaDB vector search and
                    mandatory human review checkpoints.
                  </li>
                  <li>
                    Maintained high test coverage with automated Pytest suites and conducted end-to-end API validations.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Core Technical Projects */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Core Engineering Projects</span>
            </h4>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>ErrorSentinel AI — AI Error Intelligence & Inbox Monitoring</span>
                  <span className="font-mono text-cyan-400">Python • LLMs • SQLite</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Engineered atomic SQLite-backed exception monitoring pipeline with strict ground-truth prompt validation
                  and deduplication algorithms.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>Nexora AI — Multi-Agent Business Automation Platform</span>
                  <span className="font-mono text-cyan-400">Python • FastAPI • PostgreSQL</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Orchestrated 8 collaborative agents with Human-in-the-Loop review gates and deterministic pricing
                  isolation for commercial proposals.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>Enterprise RAG Assistant — Document Intelligence Engine</span>
                  <span className="font-mono text-cyan-400">PyMuPDF • ChromaDB • FastAPI</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Built end-to-end PDF chunking, embedding, and vector search with strict source citation constraints
                  and role-based document access.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="font-bold text-white flex justify-between">
                  <span>Customer Loyalty Platform (CLP) — Production Full-Stack</span>
                  <span className="font-mono text-cyan-400">Frappe • Python • MariaDB</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Production Frappe Framework application for fuel retail networks with QR redemption, MariaDB ledger,
                  and live Ubuntu VPS hosting.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white text-sm">Bachelor of Computer Applications (BCA)</span>
                <p className="text-slate-400 mt-0.5">
                  Core coursework: Data Structures, Algorithms, Relational Database Management Systems, Software
                  Engineering, Operating Systems.
                </p>
              </div>
              <span className="font-mono text-cyan-400 shrink-0 mt-1 sm:mt-0">Graduate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen PDF / Interactive Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
              <span className="font-mono text-sm text-cyan-300 font-bold flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Resume Preview — Anil Biradar
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Anil_Biradar_AI_Engineer_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full p-4 overflow-auto bg-slate-950 flex items-center justify-center">
              <iframe
                src="/resume.pdf"
                title="Resume PDF Viewer"
                className="w-full h-[75vh] rounded-lg border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
