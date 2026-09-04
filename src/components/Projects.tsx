import React, { useState } from 'react';
import {
  ShoppingCart,
  ScanLine,
  Network,
  Activity,
  Terminal,
  ExternalLink,
  Layers,
  ArrowRight,
  Code
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Web Dev', 'Jaringan', 'Server & DevOps'];

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === 'Semua') return true;
    return proj.category === activeCategory;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-8 h-8 text-cyan-400" />;
      case 'ScanLine':
        return <ScanLine className="w-8 h-8 text-teal-400" />;
      case 'Network':
        return <Network className="w-8 h-8 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-8 h-8 text-purple-400" />;
      default:
        return <Code className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="project" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
              PORTFOLIO WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Unggulan</span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#0f172a]/70 hover:bg-[#121c32] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              <div>
                {/* Visual Top Preview Card */}
                <div className="h-44 w-full bg-gradient-to-br from-[#0c1424] via-[#10192e] to-[#090e1a] border-b border-slate-800/80 p-5 flex flex-col justify-between relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {/* Subtle cyber lines */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Centered Graphic Icon */}
                  <div className="flex items-center justify-center my-auto z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-lg shadow-black/40">
                      {getProjectIcon(project.icon)}
                    </div>
                  </div>

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 z-10">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/70 text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Lihat Detail &amp; Arsitektur</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
