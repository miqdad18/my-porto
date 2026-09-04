import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Proyek Baru / Magang',
    message: ''
  });

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setFormSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Halo Miqdad!%0A%0ASaya: ${encodeURIComponent(formData.name || 'Pengunjung Portofolio')}%0AEmail: ${encodeURIComponent(formData.email || '-')}%0ATopik: ${encodeURIComponent(formData.topic)}%0A%0APesan:%0A${encodeURIComponent(formData.message || 'Halo, saya tertarik berdiskusi dengan Anda.')}`;
    window.open(`https://wa.me/${personalInfo.contact.whatsappClean}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase block mb-1">
            MARI BERHUBUNGAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Saya</span>
            <div className="h-0.5 flex-1 max-w-24 bg-gradient-to-r from-cyan-500 to-transparent ml-2 rounded-full" />
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Mari Bicara Tentang Proyek atau Kolaborasi!
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Apakah Anda memiliki pertanyaan, tawaran proyek, kesempatan magang, atau sekadar ingin berdiskusi seputar networking &amp; web development? Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div
                id="contact-email-card"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/80 border border-slate-800 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">EMAIL</span>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 block truncate"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Salin Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp */}
              <div
                id="contact-wa-card"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/80 border border-slate-800 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">WHATSAPP</span>
                    <a
                      href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Halo%20Miqdad,%20saya%20melihat%20portofolio%20Anda!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 block truncate"
                    >
                      {personalInfo.contact.whatsapp}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${personalInfo.contact.whatsappClean}?text=Halo%20Miqdad,%20saya%20melihat%20portofolio%20Anda!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-400 hover:text-white transition-colors shrink-0"
                  title="Buka WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* GitHub */}
              <div
                id="contact-github-card"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/80 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">GITHUB</span>
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 block truncate"
                    >
                      {personalInfo.contact.github}
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* LinkedIn */}
              <div
                id="contact-linkedin-card"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/80 border border-slate-800 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">LINKEDIN</span>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-300 block truncate"
                    >
                      {personalInfo.contact.linkedin}
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Instagram */}
              <div
                id="contact-instagram-card"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/80 border border-slate-800 hover:border-pink-500/40 transition-all"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">INSTAGRAM</span>
                    <a
                      href={personalInfo.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-pink-300 block truncate"
                    >
                      {personalInfo.contact.instagramUsername}
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-pink-600 text-slate-400 hover:text-white transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct message form */}
          <div className="lg:col-span-7 bg-[#0f172a]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Kirim Pesan Direct
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Fast Response
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Pesan Anda Berhasil Terkirim!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Terima kasih <span className="text-cyan-300 font-semibold">{formData.name}</span>! Saya akan segera merespons melalui email <span className="text-cyan-300 font-mono">{formData.email}</span> atau Anda dapat langsung menghubungkan via WhatsApp.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Lanjutkan ke WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'Proyek Baru / Magang', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                    Nama Lengkap <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama lengkap Anda..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                    Alamat Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {/* Topic / Purpose */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                    Keperluan / Topik
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Proyek Baru / Magang">Tawaran Proyek Baru / Magang</option>
                    <option value="Setup Jaringan / Cisco">Setup Jaringan &amp; Konfigurasi Cisco</option>
                    <option value="Administrasi Server Linux">Administrasi &amp; Maintenance Server Linux</option>
                    <option value="Pengembangan Aplikasi Web">Pengembangan Aplikasi Web</option>
                    <option value="Diskusi Tech / Tanya Jawab">Diskusi Tech &amp; Tanya-Tanya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 uppercase">
                    Pesan Anda <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan detail pertanyaan, deskripsi proyek, atau ajakan diskusi Anda di sini..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="btn-submit-message"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Format ke WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
