import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import { Certificate } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Cisco & Networking', 'Linux & Server', 'Web & Programming'];

  const filteredCertificates = certificates.filter((cert) => {
    if (filter === 'Semua') return true;
    if (filter === 'Cisco & Networking') {
      return cert.title.toLowerCase().includes('cisco') || cert.title.toLowerCase().includes('ccna') || cert.title.toLowerCase().includes('mikrotik');
    }
    if (filter === 'Linux & Server') {
      return cert.title.toLowerCase().includes('linux');
    }
    if (filter === 'Web & Programming') {
      return cert.title.toLowerCase().includes('web') || cert.title.toLowerCase().includes('python');
    }
    return true;
  });

  return (
    <section id="sertifikat" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
              ACHIEVEMENTS &amp; CERTIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              Sertifikat <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Unggulan</span>
              <div className="h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-[#0f172a] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="group bg-[#0f172a]/70 hover:bg-[#121c32] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${
                      cert.type === 'International'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {cert.type === 'International' ? 'INTERNATIONAL CERTIFICATE' : 'VERIFIED CERTIFICATE'}
                  </span>

                  <Award className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="space-y-1.5 mb-4 text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400">Penerbit:</span>
                    <span className="text-slate-200 font-semibold truncate">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsVerified.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsVerified.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900/50 text-slate-400">
                      +{cert.skillsVerified.length - 3} lainnya
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                <button
                  id={`btn-view-cert-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/30 transition-all duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>

                <button
                  id={`btn-dl-cert-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh / Cetak</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal viewer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
