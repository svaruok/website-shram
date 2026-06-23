import { Users, Briefcase, Zap, Shield, Bell, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, value: '100+', label: 'Trusted Users', desc: 'OTP-authenticated accounts' },
  { icon: Briefcase, value: '500+', label: 'Jobs Posted', desc: 'Across multiple categories' },
  { icon: Zap, value: 'Fast', label: 'Hiring Experience', desc: 'Connect in minutes' },
  { icon: Shield, value: 'Secure', label: 'OTP Authentication', desc: 'Safe login every time' },
  { icon: Bell, value: 'Live', label: 'Real-Time Updates', desc: 'Instant notifications' },
  { icon: MapPin, value: 'Nearby', label: 'Location-Based', desc: 'Jobs close to you' },
];

export default function TrustStats() {
  return (
    <section className="py-24 bg-[#0f0814] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-burgundy/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#e8a060]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Platform Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for trust. <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#e8a060]">
              Designed for speed.
            </span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg">
            Shramico is engineered to make every hire and every job application fast, reliable, and secure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div
              key={label}
              className="group relative bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/[0.05] hover:border-burgundy/50 transition-all duration-500 text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-burgundy/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:bg-burgundy/20 group-hover:border-burgundy/50 transition-all duration-300 shadow-lg">
                  <Icon size={20} className="text-white/80 group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-extrabold text-white mb-1 tracking-tight">{value}</p>
                <p className="text-xs font-bold text-[#e8a060] uppercase tracking-wider mb-2">{label}</p>
                <p className="text-[11px] text-white/40 leading-tight">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
