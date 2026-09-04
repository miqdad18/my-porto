import React from 'react';
import { X, Award, CheckCircle2, Calendar, ShieldCheck, Printer, Copy, Check } from 'lucide-react';
import { Certificate } from '../types';
import { personalInfo } from '../data/portfolioData';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="certificate-modal-content"
        className="relative w-full max-w-2xl bg-[#0d1424] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              {certificate.type} Certificate Viewer
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Body Container */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Certificate Visual Frame */}
          <div className="relative border-2 border-dashed border-cyan-500/40 rounded-xl p-6 sm:p-8 bg-gradient-to-b from-[#11192d] to-[#0a101d] text-center space-y-4 shadow-inner">
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            <div className="inline-flex p-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-1">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest block">
              Sertifikat Keahlian &amp; Pencapaian
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {certificate.title}
            </h3>

            <p className="text-xs text-slate-400">Diberikan secara terverifikasi kepada:</p>
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-300 font-mono">
              {personalInfo.fullName}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed pt-2">
              {certificate.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Penerbit:</span>
                <span className="font-semibold text-white">{certificate.issuer}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{certificate.issueDate}</span>
              </div>
            </div>
          </div>

          {/* Skills Verified Section */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Kompetensi Yang Diverifikasi:</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skillsVerified.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credential Verification Code */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono">
              <span className="text-slate-400 block text-[10px]">CREDENTIAL ID:</span>
              <span className="text-cyan-400 font-bold tracking-wider">{certificate.credentialId}</span>
            </div>
            <button
              onClick={handleCopyId}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors w-fit"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">ID Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Salin ID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#090d16]">
          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Status Terverifikasi Resmi
          </span>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Unduh</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
