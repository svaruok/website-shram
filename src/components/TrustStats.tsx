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
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100 z-20">
      {/* Background glow effects */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Platform Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Built for trust. <br className="sm:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-burgundy to-gray-900">
              Designed for speed.
            </span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg font-medium">
            Shramico is engineered to make every hire and every job application fast, reliable, and secure.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col items-center text-center p-8 bg-gray-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-100 text-burgundy mb-6 shadow-sm group-hover:scale-110 group-hover:border-burgundy/20 transition-all duration-300">
                  <Icon size={24} className="currentColor" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                  {stat.value}
                </h3>
                <p className="font-bold text-gray-900 mb-1">
                  {stat.label}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
