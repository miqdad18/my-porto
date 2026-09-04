import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo, skillGroups, certificates, projects, educationList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#0c1220] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080d18] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <h3 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider">
              Curriculum Vitae (CV) - {personalInfo.fullName}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b111f] text-slate-200">
          {/* Top Profile Header */}
          <div className="pb-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/miqdad.jpg"
                alt={personalInfo.fullName}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-cyan-500/40 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {personalInfo.fullName}
                </h1>
                <p className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold mt-0.5">
                  {personalInfo.role} | {personalInfo.headline}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs font-mono text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    {personalInfo.contact.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    {personalInfo.contact.whatsapp}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {personalInfo.contact.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 self-start sm:self-center">
              ● Status: Siswa Aktif TKJ
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
              RINGKASAN PROFIL
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.extendedBio[0]}
            </p>
          </div>

          {/* Pendidikan */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>PENDIDIKAN FORMAL</span>
            </h2>
            {educationList.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-white text-sm">{edu.school}</span>
                  <span className="text-cyan-300">{edu.period}</span>
                </div>
                <div className="text-xs text-cyan-400 font-semibold">{edu.major}</div>
                <p className="text-xs text-slate-300 pt-1">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Keahlian Utama */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>KOMPETENSI TEKNIS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillGroups.map((grp) => (
                <div key={grp.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <h3 className="text-xs font-bold text-white font-mono uppercase">{grp.title}</h3>
                  <div className="space-y-1">
                    {grp.skills.map((s, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-xs">
                        <span className="text-slate-300">{s.name}</span>
                        <span className="text-cyan-400 font-mono">{s.level}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikasi */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>SERTIFIKASI TERVERIFIKASI</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-white">{cert.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono">{cert.issuer} • {cert.issueDate}</div>
                  <div className="text-[10px] text-cyan-400 font-mono">ID: {cert.credentialId}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Proyek Unggulan */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>PORTFOLIO PROYEK UNGGULAN</span>
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-cyan-400 font-mono text-[10px]">[{proj.category}]</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.shortDesc}</p>
                  <div className="text-[10px] text-slate-400 font-mono">Tech: {proj.tags.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080d18] border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Portofolio Resmi Miqdad • SMK Madinatulquran</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
