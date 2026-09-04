import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="pendidikan" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
            BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Riwayat <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pendidikan</span>
            <div className="h-0.5 flex-1 max-w-24 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
          </h2>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-3xl">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              id={`edu-card-${idx}`}
              className="relative pl-8 sm:pl-10 pb-10 border-l-2 border-cyan-500/40 last:border-transparent"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Main Card */}
              <div className="bg-[#0f172a]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-all">
                {/* Year Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>

                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {edu.status}
                  </span>
                </div>

                {/* School Name & Major */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {edu.school}
                </h3>
                <div className="text-sm font-mono text-cyan-400 font-semibold mb-4">
                  {edu.major}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Highlights / Achievements */}
                {edu.achievements && (
                  <div className="mb-6 space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-mono font-semibold text-slate-400 block uppercase tracking-wider">
                      Fokus Praktik &amp; Pencapaian:
                    </span>
                    {edu.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
                  {edu.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-700/60"
                    >
                      {skill}
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
