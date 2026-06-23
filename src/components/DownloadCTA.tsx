import { handleDownload, getAppLink } from '../utils/download';
import { Download } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section className="py-32 bg-[#0a050e] relative overflow-hidden border-t border-white/5">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-burgundy/15 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#e8a060]/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
          Available Now
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Ready to get{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-[#e8a060]">
            started?
          </span>
        </h2>
        
        <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Join Shramico and experience a faster, smarter way to connect employers
          with skilled workers — right from your phone.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? "_blank" : undefined}
            rel={getAppLink() ? "noopener noreferrer" : undefined}
            className="group relative inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-burgundy/20 to-[#e8a060]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Download size={24} className="text-burgundy" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-0.5">Download on</p>
                <p className="text-xl font-extrabold text-white">Google Play</p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            { label: 'Free to register', icon: '✨' },
            { label: 'OTP verified accounts', icon: '🔒' },
            { label: 'Instant job matching', icon: '⚡' }
          ].map((point) => (
            <div key={point.label} className="flex items-center gap-3 text-white/60 text-sm font-semibold">
              <span className="text-[#e8a060]">{point.icon}</span>
              {point.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
