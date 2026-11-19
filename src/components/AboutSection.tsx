import React from 'react';
import { GraduationCap, Briefcase, Code2, Bot, Layers, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-900/80 bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineering Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Background & Engineering Philosophy
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Grounded software engineer with formal computer science training and production experience building
            reliable, LLM-powered systems and backend microservices.
          </p>
        </div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Key Credentials */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span>Hands-on AI Engineering at RSR Technology</span>
              </h3>
              <p className="text-slate-300 mb-4">
                As a <strong className="text-cyan-300 font-semibold">Junior AI Developer at RSR Technology</strong> in
                Bengaluru, I build practical artificial intelligence systems that solve real operational friction. My
                daily work centers on writing resilient Python backend microservices, integrating LLM APIs with strict
                schema validations, designing vector-grounded RAG pipelines, and automating business workflows like Build
                IQ and Support IQ.
              </p>
              <p className="text-slate-300">
                Rather than treating AI as a magical black box, I approach it as a dependable engineering component. I
                couple probabilistic language models with deterministic database lookups, atomic transaction retries, and
                human-in-the-loop review checkpoints to ensure production stability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic Foundation: Bachelor of Computer Applications</span>
              </h3>
              <p className="text-slate-300">
                Completed my <strong className="text-white font-semibold">BCA degree</strong> with rigorous coursework
                in Data Structures, Algorithms, Relational Database Architecture (SQL), Object-Oriented Programming, and
                Operating Systems. This academic foundation enables me to write optimized, maintainable code and architect
                clean REST APIs rather than relying solely on script glue.
              </p>
            </div>
          </div>

          {/* Right Column: Key Engineering Capabilities Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">LLM & Structured Extraction</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prompt engineering with Pydantic JSON schemas, constrained token generation, and literal text verification
                to eliminate hallucinated outputs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">RAG & Vector Retrieval</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                PyMuPDF document ingestion, recursive chunking strategies, ChromaDB semantic search, and context-grounded
                answers with verbatim source citations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Backend & Microservices</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Asynchronous FastAPI and Flask REST services, JWT security, MariaDB/PostgreSQL data modeling, and Docker
                container deployments.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition duration-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Deterministic Guardrails</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Mathematical calculators, atomic database commits, deduplication algorithms, and human approval gates
                ensuring enterprise reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
