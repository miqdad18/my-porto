import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Animated Splash Loading Screen */}
      <LoadingScreen />

      {/* Top Fixed Navbar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Modals */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
