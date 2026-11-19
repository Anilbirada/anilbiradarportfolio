import React, { useEffect, useRef } from 'react';
import { Download, FolderGit2, Mail, Cpu, Terminal, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export const NeuralHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing AI neurons
    const particleCount = Math.min(Math.floor(width / 22), 65);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connecting synapses
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Subtle mouse attraction
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 160) {
          p1.x += (dxMouse / distMouse) * 0.3;
          p1.y += (dyMouse / distMouse) * 0.3;
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.35;
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p1.baseAlpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f2fe';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Dynamic Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-75"
        style={{ zIndex: 0 }}
      />

      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Recruiter Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,242,254,0.15)] animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f2fe]" />
          <span className="font-medium tracking-wide">Available for Junior AI Engineer & GenAI Roles • Bengaluru & Remote</span>
        </div>

        {/* Headshot & Technical Identity Grid */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-2xl bg-slate-950">
            <img
              src="/images/00_Anil_Biradar_Profile_Headshot.jpg"
              alt="Anil Biradar - Junior AI Engineer"
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition duration-500"
              onError={(e) => {
                // Fallback avatar if local image not found
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-cyan-400 font-bold text-3xl">
                      AB
                    </div>
                  `;
                }
              }}
            />
          </div>
          {/* Engineering Verification Badge */}
          <div className="absolute bottom-0 right-0 p-1.5 bg-slate-950 border border-cyan-500/50 rounded-full text-cyan-400 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        {/* Professional Identity */}
        <div className="text-sm uppercase tracking-widest text-slate-400 font-mono mb-3 flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Anil Biradar • Junior AI Engineer & LLM Developer</span>
        </div>

        {/* Primary Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15] mb-6">
          Engineering{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,242,254,0.3)]">
            Intelligent AI Solutions
          </span>{' '}
          for Real-World Problems.
        </h1>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          I'm <strong className="text-white font-semibold">Anil Biradar</strong>, a Junior AI Engineer focused on{' '}
          <span className="text-cyan-300">Generative AI</span>, <span className="text-cyan-300">LLM applications</span>,{' '}
          <span className="text-cyan-300">RAG systems</span>, and intelligent automation. I build practical AI-powered
          applications by combining Python, modern AI technologies, and scalable backend engineering.
        </p>

        {/* Quick Engineering Spec Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs font-mono text-slate-300">
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400">
            Python & FastAPI
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400">
            Structured JSON Outputs
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400">
            ChromaDB RAG Pipelines
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400">
            Multi-Agent Workflows
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400">
            Docker & Linux VPS
          </span>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-2xl mb-10">
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Anil_Biradar_AI_Engineer_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition duration-200"
          >
            <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            <span>Download Resume</span>
          </a>

          {/* Explore Projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 text-sm font-semibold transition duration-200 shadow-md backdrop-blur-md"
          >
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 text-sm font-medium transition duration-200"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Connections */}
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Connect:</span>
          <a
            href="https://github.com/Anilbirada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition duration-150"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anil-biradar-531a71317/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition duration-150"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:aniladani843@gmail.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition duration-150"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
