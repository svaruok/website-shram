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
    <section className="py-20 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Platform Highlights</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Built for trust. Designed for speed.
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Shramico is engineered to make every hire and every job application fast, reliable, and secure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map(({ icon: Icon, value, label, desc }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center group"
            >
              <div className="w-11 h-11 bg-burgundy/8 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-burgundy/15 transition-colors">
                <Icon size={20} className="text-burgundy" />
              </div>
              <p className="text-2xl font-extrabold text-gray-900 mb-0.5">{value}</p>
              <p className="text-xs font-semibold text-gray-700 mb-1">{label}</p>
              <p className="text-[11px] text-gray-400 leading-tight">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
