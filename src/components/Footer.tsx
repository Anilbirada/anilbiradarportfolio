import React from 'react';
import { Cpu, Mail, ArrowUp, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight font-sans">
                Anil Biradar
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Junior AI Engineer specializing in Generative AI, LLM applications, RAG pipelines, autonomous agent
              workflows, and high-performance Python backends.
            </p>
            <div className="text-slate-400 flex items-center gap-2 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bengaluru, Karnataka, India • Open for Roles</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-2 text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition">About Profile</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Technical Stack</a>
            <a href="#projects" className="hover:text-cyan-400 transition">AI Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#github" className="hover:text-cyan-400 transition">GitHub Code</a>
            <a href="#journey" className="hover:text-cyan-400 transition">Career Journey</a>
            <a href="#resume" className="hover:text-cyan-400 transition">Download CV</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact Me</a>
          </div>

          {/* Social Connections */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white font-bold block text-sm font-sans">Engineering Channels</span>
            <div className="flex flex-col space-y-2">
              <a
                href="https://github.com/Anilbirada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>github.com/Anilbirada</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anil-biradar-531a71317/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>linkedin.com/in/anil-biradar</span>
              </a>
              <a
                href="mailto:aniladani843@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>aniladani843@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Anil Biradar. Engineered with React, TypeScript & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
