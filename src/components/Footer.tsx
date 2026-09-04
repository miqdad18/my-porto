import React from 'react';
import {
  ArrowUp,
  Heart,
  Network,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Terminal
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-slate-800/80 bg-[#080c16] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand & Brief */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Network className="w-4 h-4" />
              </div>
              <span>{personalInfo.name}<span className="text-cyan-400">.dev</span></span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {personalInfo.role}. Fokus merancang infrastruktur jaringan enterprise yang tangguh, mengelola server Linux, serta otomasi sistem.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">
                {personalInfo.contact.status}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigasi Cepat
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-cyan-300 transition-colors">Beranda</a>
              <a href="#tentang" className="hover:text-cyan-300 transition-colors">Tentang Saya</a>
              <a href="#keahlian" className="hover:text-cyan-300 transition-colors">Keahlian Teknis</a>
              <a href="#sertifikat" className="hover:text-cyan-300 transition-colors">Sertifikat</a>
              <a href="#project" className="hover:text-cyan-300 transition-colors">Project Unggulan</a>
              <a href="#pendidikan" className="hover:text-cyan-300 transition-colors">Pendidikan</a>
              <a href="#kontak" className="hover:text-cyan-300 transition-colors">Hubungi</a>
              <button
                onClick={onOpenTerminal}
                className="text-left text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
              >
                &gt;_ Terminal
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Koneksi Sosial
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex items-center justify-center text-slate-300 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenTerminal}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                title="Interactive Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-400">
            © {new Date().getFullYear()} {personalInfo.fullName}. Dibuat dengan dedikasi untuk industri teknologi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
