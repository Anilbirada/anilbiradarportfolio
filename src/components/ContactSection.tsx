import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide a contact email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission workflow and generate pre-filled email draft
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Open email client with pre-filled message draft securely
      const mailtoUrl = `mailto:aniladani843@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 800);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('aniladani843@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900 bg-[#070913]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Whether discussing Junior AI Engineer roles, Generative AI projects, RAG architecture, or enterprise
            automation, feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                I am actively considering Junior AI Engineer, Generative AI Developer, and AI Automation Engineer
                roles based in Bengaluru or remote.
              </p>

              <div className="space-y-4 text-xs font-mono">
                {/* Email Item */}
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded bg-cyan-950/80 text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-slate-400 text-[10px] block">Primary Email</span>
                      <a href="mailto:aniladani843@gmail.com" className="text-cyan-300 font-bold truncate hover:underline">
                        aniladani843@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 transition shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href="https://www.linkedin.com/in/anil-biradar-531a71317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-sky-950/80 text-sky-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">LinkedIn Profile</span>
                      <span className="text-white group-hover:text-cyan-300 font-bold">in/anil-biradar</span>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-xs">Connect →</span>
                </a>

                {/* GitHub Item */}
                <a
                  href="https://github.com/Anilbirada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-3 group transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 text-slate-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">GitHub Repositories</span>
                      <span className="text-white group-hover:text-cyan-300 font-bold">github.com/Anilbirada</span>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-xs">View Code →</span>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded bg-slate-900 text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Location</span>
                    <span className="text-white font-bold">Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to prepare and dispatch an inquiry directly.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Message Prepared Successfully</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-4">
                    Your email client has been prompted with the structured inquiry draft. You can also reach me directly
                    at <span className="text-cyan-300 font-mono">aniladani843@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name / Organization <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-1 transition ${
                          errors.name
                            ? 'border-rose-500/80 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-1 transition ${
                          errors.email
                            ? 'border-rose-500/80 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject / Opportunity <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior AI Engineer Role / Project Consultation"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-1 transition ${
                        errors.subject
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                        Message Details <span className="text-cyan-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your role requirements, project scope, or technical questions..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-1 transition resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-cyan-400 focus:ring-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_15px_rgba(0,242,254,0.3)] transition disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Preparing Dispatch...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                        <span>Send Message Draft</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    Zero external trackers. Does not expose private API keys in client code.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
