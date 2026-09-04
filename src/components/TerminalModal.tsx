import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { personalInfo, skillGroups, certificates, projects, terminalCommandsHelp } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  cmd: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Miqdad Interactive Terminal [Version 2.4.0-tkj-release]
          </p>
          <p className="text-slate-400">
            Ketik <span className="text-cyan-300 font-bold">&apos;help&apos;</span> untuk melihat daftar perintah, atau klik shortcut di bawah ini.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'help') {
      response = (
        <div className="space-y-1 text-xs">
          <div className="text-cyan-400 font-bold mb-1">DAFTAR PERINTAH TERSEDIA:</div>
          {terminalCommandsHelp.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-cyan-300 font-mono w-28 shrink-0">{item.cmd}</span>
              <span className="text-slate-400">{item.desc}</span>
            </div>
          ))}
        </div>
      );
    } else if (trimmed === 'whoami') {
      response = (
        <div className="space-y-1 text-xs text-slate-300">
          <p className="text-white font-bold">{personalInfo.fullName} ({personalInfo.name})</p>
          <p className="text-cyan-400">{personalInfo.role}</p>
          <p className="text-slate-400">{personalInfo.headline}</p>
          <p className="text-slate-300 mt-2">{personalInfo.bio}</p>
        </div>
      );
    } else if (trimmed === 'about') {
      response = (
        <div className="text-xs text-slate-300 space-y-2">
          {personalInfo.extendedBio.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      );
    } else if (trimmed === 'skills') {
      response = (
        <div className="space-y-2 text-xs">
          {skillGroups.map((grp) => (
            <div key={grp.id} className="space-y-1">
              <span className="text-cyan-300 font-bold"># {grp.title}:</span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 pl-3">
                {grp.skills.map((s, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-cyan-400 font-mono">{s.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (trimmed === 'projects') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-bold">PROJECT UNGGULAN:</div>
          {projects.map((proj, idx) => (
            <div key={idx} className="pl-2 border-l border-cyan-500/40">
              <div className="text-white font-semibold">{proj.title} <span className="text-slate-400 font-mono">[{proj.category}]</span></div>
              <div className="text-slate-400">{proj.shortDesc}</div>
              <div className="text-cyan-300 font-mono text-[10px]">Stack: {proj.tags.join(', ')}</div>
            </div>
          ))}
        </div>
      );
    } else if (trimmed === 'certs') {
      response = (
        <div className="space-y-2 text-xs">
          <div className="text-cyan-400 font-bold">SERTIFIKASI TERVERIFIKASI:</div>
          {certificates.map((c, idx) => (
            <div key={idx} className="text-slate-300">
              <span className="text-emerald-400">● </span>
              <span className="font-semibold text-white">{c.title}</span> - {c.issuer} ({c.issueDate})
            </div>
          ))}
        </div>
      );
    } else if (trimmed === 'contact') {
      response = (
        <div className="space-y-1 text-xs font-mono text-slate-300">
          <div>Email: <span className="text-cyan-400">{personalInfo.contact.email}</span></div>
          <div>WhatsApp: <span className="text-emerald-400">{personalInfo.contact.whatsapp}</span></div>
          <div>GitHub: <span className="text-blue-400">{personalInfo.contact.github}</span></div>
          <div>LinkedIn: <span className="text-blue-300">{personalInfo.contact.linkedin}</span></div>
        </div>
      );
    } else if (trimmed.startsWith('ping')) {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-slate-400">PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.</div>
          <div className="text-emerald-400">64 bytes from 8.8.8.8: icmp_seq=1 ttl=118 time=8.42 ms</div>
          <div className="text-emerald-400">64 bytes from 8.8.8.8: icmp_seq=2 ttl=118 time=9.14 ms</div>
          <div className="text-emerald-400">64 bytes from 8.8.8.8: icmp_seq=3 ttl=118 time=8.77 ms</div>
          <div className="text-slate-300 mt-1">--- 8.8.8.8 ping statistics ---</div>
          <div className="text-cyan-300">3 packets transmitted, 3 received, 0% packet loss, time 2004ms</div>
        </div>
      );
    } else if (trimmed === 'neofetch') {
      response = (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs font-mono py-1">
          <div className="sm:col-span-4 text-cyan-400 font-bold whitespace-pre">
{`   _____   
  /     \\  
 |  O O  | 
  \\  -  /  
   \\___/   
  /|   |\\  
 / |   | \\ 
   |   |   
  _|_ _|_  `}
          </div>
          <div className="sm:col-span-8 space-y-0.5 text-slate-300">
            <div className="text-cyan-300 font-bold">miqdad@madinatulquran</div>
            <div className="text-slate-500">----------------------</div>
            <div><span className="text-cyan-400">OS:</span> Debian GNU/Linux 12 (bookworm)</div>
            <div><span className="text-cyan-400">Host:</span> SMK Madinatulquran TKJ Workstation</div>
            <div><span className="text-cyan-400">Kernel:</span> 6.1.0-21-amd64</div>
            <div><span className="text-cyan-400">Uptime:</span> 100% Focused &amp; Learning</div>
            <div><span className="text-cyan-400">Shell:</span> bash 5.2.15</div>
            <div><span className="text-cyan-400">Specialization:</span> Cisco Networking &amp; SysAdmin</div>
            <div><span className="text-cyan-400">Status:</span> Available for Projects</div>
          </div>
        </div>
      );
    } else {
      response = (
        <div className="text-xs text-rose-400 font-mono">
          bash: command not found: {rawCmd}. Ketik <span className="text-cyan-300 underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> untuk melihat daftar perintah.
        </div>
      );
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleShortcutClick = (cmd: string) => {
    executeCommand(cmd);
  };

  return (
    <div
      id="terminal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="terminal-modal-container"
        className="relative w-full max-w-3xl bg-[#090e18] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Window Controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#060a12] border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"
                title="Close"
              />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="ml-3 flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>miqdad@madinatulquran: ~ (bash)</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Shortcuts Pill Bar */}
        <div className="px-4 py-2 bg-[#0a0f1b] border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-slate-400 shrink-0">Perintah Cepat:</span>
          {['help', 'whoami', 'neofetch', 'skills', 'projects', 'certs', 'ping 8.8.8.8', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleShortcutClick(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-cyan-300 hover:bg-slate-800 hover:border-cyan-500 shrink-0 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.cmd !== 'welcome' && (
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-emerald-400">miqdad@madinatulquran:~$</span>
                  <span>{item.cmd}</span>
                </div>
              )}
              <div className="pl-0 sm:pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 bg-[#060a12] border-t border-slate-800"
        >
          <span className="text-emerald-400 font-mono text-xs font-bold shrink-0">
            miqdad@madinatulquran:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ketik perintah (contoh: help, neofetch, skills)..."
            className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="p-1.5 rounded text-slate-400 hover:text-cyan-400"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
