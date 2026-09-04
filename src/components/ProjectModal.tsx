import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Cpu,
  Server,
  Layers,
  Play,
  RotateCcw
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'simulation'>('details');
  const [simulationState, setSimulationState] = useState<string>('idle');

  if (!project) return null;

  return (
    <div
      id="project-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-3xl bg-[#0c1220] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#080d18]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 px-6 bg-[#0a0f1d] gap-2 pt-2">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 ${
              activeTab === 'details'
                ? 'border-cyan-400 text-cyan-300 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Spesifikasi &amp; Fitur
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'border-cyan-400 text-cyan-300 bg-slate-800/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Play className="w-3 h-3 text-cyan-400" />
            Simulasi Interaktif
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'details' ? (
            <>
              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
                  Deskripsi Proyek
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.fullDesc}
                </p>
              </div>

              {/* Architecture & Stack */}
              {project.architecture && (
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>ARSITEKTUR SISTEM</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* System Specs Table */}
              {project.systemSpecs && (
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Spesifikasi Teknis &amp; Lingkungan</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {Object.entries(project.systemSpecs).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center"
                      >
                        <span className="text-slate-400">{key}:</span>
                        <span className="text-cyan-300 font-semibold">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fitur Utama &amp; Implementasi</span>
                </h4>
                <div className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/40 border border-slate-800/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-slate-700/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Simulation Tab */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Interactive Sandbox: {project.title}
                  </span>
                  <button
                    onClick={() => setSimulationState('idle')}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                </div>

                {project.id === 'cisco-enterprise' && (
                  <div className="space-y-3">
                    <p className="text-slate-300">
                      Simulasi Packet Tracer: Tes konektivitas VLAN &amp; Routing OSPF
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg text-slate-300 space-y-1">
                      <div>Router-Core# <span className="text-cyan-300">show ip ospf neighbor</span></div>
                      <div className="text-emerald-400">Neighbor ID 192.168.10.1  Pri 1  State FULL/DR  00:00:36  Gig0/0</div>
                      <div className="text-emerald-400">Neighbor ID 192.168.20.1  Pri 1  State FULL/BDR 00:00:34  Gig0/1</div>
                      <div className="text-slate-400 mt-2">Router-Core# <span className="text-cyan-300">ping 10.10.30.254 repeat 5</span></div>
                      <div className="text-emerald-400">Sending 5, 100-byte ICMP Echos to 10.10.30.254, timeout is 2 seconds:</div>
                      <div className="text-cyan-400 font-bold">!!!!!</div>
                      <div className="text-emerald-400">Success rate is 100 percent (5/5), round-trip min/avg/max = 1/2/4 ms</div>
                    </div>
                  </div>
                )}

                {project.id === 'automation-ansible' && (
                  <div className="space-y-3">
                    <p className="text-slate-300">
                      Playbook Execution: <span className="text-cyan-300">site-deploy.yml</span>
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg space-y-1">
                      <div className="text-slate-400">$ ansible-playbook -i production site-deploy.yml</div>
                      <div className="text-blue-400">PLAY [Configure Web &amp; DNS Nodes] ********************</div>
                      <div className="text-emerald-400">TASK [Gathering Facts] ********************************* ok: [web-node-01]</div>
                      <div className="text-emerald-400">TASK [Install Nginx &amp; UFW Firewall] ***************** ok: [web-node-01]</div>
                      <div className="text-amber-400">TASK [Deploy Nginx VirtualHost Template] *************** changed: [web-node-01]</div>
                      <div className="text-emerald-400">TASK [Configure DNS Bind9 Zones] *********************** ok: [dns-node-01]</div>
                      <div className="text-cyan-400 pt-2 font-bold">
                        PLAY RECAP *********************************************
                      </div>
                      <div className="text-emerald-400">
                        web-node-01 : ok=8 changed=2 unreachable=0 failed=0
                      </div>
                      <div className="text-emerald-400">
                        dns-node-01 : ok=6 changed=1 unreachable=0 failed=0
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'monitoring-prometheus' && (
                  <div className="space-y-3">
                    <p className="text-slate-300">
                      Real-time Node Exporter Telemetry:
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center py-2">
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-cyan-400 font-bold text-lg">18.4%</div>
                        <div className="text-slate-400 text-[10px]">CPU Utilization</div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-emerald-400 font-bold text-lg">1.42 / 4 GB</div>
                        <div className="text-slate-400 text-[10px]">RAM Usage (35%)</div>
                      </div>
                      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="text-purple-400 font-bold text-lg">24.8 Mbps</div>
                        <div className="text-slate-400 text-[10px]">Network Bandwidth</div>
                      </div>
                    </div>
                    <div className="text-emerald-400 text-center text-[11px]">
                      ● Prometheus Target: healthy (Scrape interval: 5s)
                    </div>
                  </div>
                )}

                {project.id === 'barcode-scanner' && (
                  <div className="space-y-3 text-center py-4">
                    <div className="w-40 h-24 mx-auto border-2 border-dashed border-cyan-400 rounded-lg flex flex-col items-center justify-center bg-cyan-950/30 relative overflow-hidden">
                      <div className="w-full h-0.5 bg-rose-500 absolute animate-pulse top-1/2" />
                      <span className="text-[10px] text-cyan-300 font-mono">|||||||||||||||||||</span>
                      <span className="text-[9px] text-slate-400">978020137962</span>
                    </div>
                    <p className="text-emerald-400 text-xs">
                      [BEEP!] Barcode Berhasil Terdeteksi: <span className="font-bold">EAN-13 (8992753210041)</span>
                    </p>
                  </div>
                )}

                {project.id === 'toko-online' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-900 rounded-lg space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white font-semibold">Router MikroTik hEX RB750Gr3</span>
                        <span className="text-cyan-400 font-mono font-bold">Rp 650.000</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white font-semibold">Kabel UTP Cat6 Belden (100m)</span>
                        <span className="text-cyan-400 font-mono font-bold">Rp 480.000</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex justify-between text-xs font-bold">
                        <span className="text-slate-300">Total Keranjang:</span>
                        <span className="text-emerald-400 font-mono">Rp 1.130.000</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#080d18]">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ready for Review</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
