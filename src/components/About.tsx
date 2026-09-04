import React from 'react';
import {
  Network,
  Server,
  Code2,
  Cpu,
  Sparkles,
  Bot,
  Terminal,
  Layers,
  CheckCircle2,
  Radio
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-6 h-6 text-cyan-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'networking':
      case 'cisco':
      case 'mikrotik':
        return <Radio className="w-3.5 h-3.5" />;
      case 'linux server':
        return <Terminal className="w-3.5 h-3.5" />;
      case 'web development':
        return <Code2 className="w-3.5 h-3.5" />;
      case 'automation':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'artificial intelligence':
        return <Bot className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="tentang" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
            MENGENAL LEBIH DEKAT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Saya</span>
            <div className="h-0.5 flex-1 max-w-24 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dedicated Story & Focus Tags */}
          <div className="lg:col-span-6 bg-[#0f172a]/70 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>TKJ Madinatulquran</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 leading-snug">
              Siswa TKJ yang Berdedikasi &amp; Haus Ilmu
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.extendedBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Focus Minat & Eksplorasi */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                <span>Fokus Minat &amp; Eksplorasi:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.focusTags.map((tag, idx) => (
                  <span
                    key={idx}
                    id={`focus-tag-${idx}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#162032] text-slate-200 border border-slate-700/60 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-cyan-400">{getTagIcon(tag)}</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.focusPillars.map((pillar, index) => (
              <div
                key={index}
                id={`pillar-card-${index}`}
                className="group bg-[#0f172a]/60 hover:bg-[#131d33] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
                    {pillar.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
