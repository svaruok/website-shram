import { Download } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shramico.app';

export default function DownloadCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#800020] to-[#5C0014] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8">
          Available Now
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to get started?
        </h2>
        <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join Shramico and experience a faster, smarter way to connect employers
          with skilled workers — right from your phone.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#800020] font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Google Play icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.18 23.76a2 2 0 0 0 2.09-.21L17.4 12 5.27.45A2 2 0 0 0 2 2.25v19.5a2 2 0 0 0 1.18 2.01z" opacity=".8"/>
              <path d="M22.08 10.56 19.3 9 17.4 12l1.9 3 2.78-1.56a1.93 1.93 0 0 0 0-2.88z" opacity=".6"/>
              <path d="m17.4 12-12.13 12a2 2 0 0 0 2.28-.36l12.75-7.17L17.4 12z" opacity=".8"/>
              <path d="M5.27.45 17.4 12l2.9-2.9L7.55.38A2 2 0 0 0 5.27.45z" opacity=".6"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] font-medium text-[#800020]/70 leading-none">Get it on</p>
              <p className="text-base font-bold leading-tight">Google Play</p>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {['Free to register', 'OTP verified accounts', 'Instant job matching'].map((point) => (
            <div key={point} className="flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
