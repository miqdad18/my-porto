import React from 'react';
import { ArrowRight, Mail, Server, Network, Code, Terminal, Sparkles, CheckCircle2, ShieldCheck, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Cyber Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Intro & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* School & Role Badge */}
            <div
              id="hero-badge-school"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-sm shadow-cyan-500/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{personalInfo.role}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.name}</span>{' '}
                <span className="inline-block animate-bounce origin-bottom-right">👋</span>
              </h1>

              {/* Subheading / Specialization */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-base sm:text-lg text-slate-300">
                <span className="text-cyan-400 font-semibold">{personalInfo.headline.split('|')[0].trim()}</span>
                <span className="text-slate-600 hidden sm:inline">|</span>
                <span className="text-blue-300">{personalInfo.headline.split('|')[1]?.trim() || 'Web Dev & AI'}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#project"
                id="btn-hero-projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#kontak"
                id="btn-hero-contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Hubungi Saya</span>
              </a>

              <button
                id="btn-hero-resume"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/50 text-xs font-mono transition-colors"
                title="Lihat Curriculum Vitae (CV)"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Ringkasan CV</span>
              </button>
            </div>
          </div>

          {/* Right Column - Tech Avatar & Orbiting Badges */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
              {/* Outer Cyber Pulse Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-blue-500/20 pointer-events-none" />
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

              {/* Avatar Center Card */}
              <div
                id="avatar-main-card"
                className="relative z-10 w-52 sm:w-60 h-52 sm:h-60 rounded-3xl bg-gradient-to-b from-[#162238] to-[#0c1424] p-1.5 shadow-2xl shadow-cyan-950/60 border border-cyan-500/30 group"
              >
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#0a0f1d] flex flex-col items-center justify-center p-3">
                  {/* Decorative terminal header inside avatar */}
                  <div className="absolute top-2.5 left-3 flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="absolute top-2.5 right-3 text-[9px] font-mono text-cyan-400/70">
                    sys:linux
                  </div>

                  {/* Miqdad Photo Representation */}
                  <div className="relative mt-2 w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyan-500/40 bg-slate-900 shadow-lg shadow-cyan-950/50 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/miqdad.jpg"
                      alt="Miqdad - TKJ Specialist"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient overlay on bottom for cyber effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Glowing status dot */}
                    <div className="absolute bottom-1.5 right-1.5 p-1 bg-slate-950/90 rounded-full border border-slate-700 shadow-md">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
                    </div>
                  </div>

                  {/* Name tag on avatar */}
                  <div className="mt-2 text-center">
                    <span className="font-bold text-xs text-white block">Miqdad</span>
                    <span className="text-[10px] font-mono text-cyan-400">TKJ Specialist</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top - Linux Server Admin */}
              <div
                id="badge-linux-admin"
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0d1527] border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-lg shadow-black/60 hover:scale-105 transition-transform"
              >
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>Linux Server Admin</span>
              </div>

              {/* Floating Badge 2: Right - Cisco & Mikrotik */}
              <div
                id="badge-cisco-mikrotik"
                className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0d1527] border border-blue-500/40 text-blue-300 text-xs font-semibold shadow-lg shadow-black/60 hover:scale-105 transition-transform"
              >
                <Network className="w-3.5 h-3.5 text-blue-400" />
                <span>Cisco & MikroTik</span>
              </div>

              {/* Floating Badge 3: Bottom - Web Dev & AI */}
              <div
                id="badge-web-ai"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0d1527] border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-black/60 hover:scale-105 transition-transform"
              >
                <Code className="w-3.5 h-3.5 text-emerald-400" />
                <span>Web Dev & AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
