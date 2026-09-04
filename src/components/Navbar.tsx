import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Send, Sparkles, Network, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'tentang', 'keahlian', 'sertifikat', 'project', 'pendidikan', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero', id: 'hero' },
    { name: 'Tentang', href: '#tentang', id: 'tentang' },
    { name: 'Keahlian', href: '#keahlian', id: 'keahlian' },
    { name: 'Sertifikat', href: '#sertifikat', id: 'sertifikat' },
    { name: 'Project', href: '#project', id: 'project' },
    { name: 'Pendidikan', href: '#pendidikan', id: 'pendidikan' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          id="brand-logo"
          className="group flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b101b] rounded-[10px] flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
              <Network className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-tight font-extrabold tracking-tight">
              {personalInfo.name}
              <span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              TKJ Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            id="btn-terminal-launch"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyan-300 transition-all hover:border-cyan-500/40"
            title="Buka Terminal Interaktif TKJ"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>&gt;_ terminal</span>
          </button>

          <button
            id="btn-resume-preview"
            onClick={onOpenResume}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700/60 transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </button>

          <a
            id="btn-nav-contact"
            href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Halo%20Miqdad,%20saya%20tertarik%20dengan%20portofolio%20Anda!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/30 active:scale-95"
          >
            <Send className="w-3 h-3" />
            <span>Hubungi</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-terminal-btn"
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-slate-800"
            aria-label="Buka Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c121e] border-b border-slate-800 px-4 py-4 space-y-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-center transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-center text-xs font-medium rounded-lg bg-slate-800 text-slate-200"
            >
              Lihat CV / Resume
            </button>
            <a
              href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Halo%20Miqdad,%20saya%20melihat%20portofolio%20Anda!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-cyan-600 text-white flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
