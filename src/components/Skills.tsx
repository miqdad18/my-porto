import React from 'react';
import {
  Network,
  Server,
  Code2,
  Database,
  Terminal,
  Layers,
  GitBranch,
  Github,
  Code,
  Figma,
  Box,
  Radio,
  Cpu
} from 'lucide-react';
import { skillGroups, toolsEcosystem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-orange-400" />;
      case 'Github':
        return <Github className="w-4 h-4 text-white" />;
      case 'Code':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Figma':
        return <Figma className="w-4 h-4 text-pink-400" />;
      case 'Network':
        return <Network className="w-4 h-4 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-indigo-400" />;
      case 'Box':
        return <Box className="w-4 h-4 text-amber-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-teal-400" />;
      case 'Container':
        return <Box className="w-4 h-4 text-sky-400" />;
      case 'Terminal':
      case 'TerminalSquare':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Radio':
        return <Radio className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="keahlian" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
            SKILL &amp; TEKNOLOGI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Keahlian <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Teknis</span>
            <div className="h-0.5 flex-1 max-w-24 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
          </h2>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              id={`skill-group-${group.id}`}
              className="bg-[#0f172a]/70 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm hover:border-slate-700 transition-all duration-300"
            >
              {/* Card Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-inner">
                  {getGroupIcon(group.icon)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {group.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/50">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <span className="font-mono font-bold text-cyan-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-800/90 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software Ecosystem */}
        <div className="bg-[#0f172a]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-800">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Tools &amp; Software Ecosystem
            </h3>
            <span className="ml-auto text-xs font-mono text-slate-400">
              {toolsEcosystem.length} Tools Terintegrasi
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {toolsEcosystem.map((tool, idx) => (
              <div
                key={idx}
                id={`tool-card-${idx}`}
                className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getToolIcon(tool.icon)}
                </div>
                <div className="overflow-hidden">
                  <span className="text-xs font-semibold text-slate-200 block truncate group-hover:text-cyan-300 transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-slate-400 block truncate font-mono">
                    {tool.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
