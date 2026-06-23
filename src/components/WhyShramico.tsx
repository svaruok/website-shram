import { CheckCircle2, Award, Globe, Users } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Verified & Trusted',
    desc: 'Every user goes through OTP-based phone verification, creating a foundation of accountability and trust across the platform.',
  },
  {
    icon: Award,
    title: 'Purpose-Built for Local Hiring',
    desc: 'Shramico is specifically designed for skilled and semi-skilled workers — a market underserved by generic job platforms.',
  },
  {
    icon: Globe,
    title: 'Mobile-First for Real India',
    desc: 'A lightweight, fast mobile app that works reliably on everyday devices, designed with the real user in mind.',
  },
  {
    icon: Users,
    title: 'Human-Centric Design',
    desc: 'Every feature is built with the end user at the center — clear interfaces, no jargon, and guided flows for all skill levels.',
  },
];

const pillars = [
  { value: 'Privacy', desc: 'Your data is handled responsibly and never shared without consent.' },
  { value: 'Security', desc: 'OTP-based login and secure data practices at every layer.' },
  { value: 'Transparency', desc: 'Clear policies, honest communication, and no hidden practices.' },
  { value: 'Reliability', desc: 'A stable, tested platform you can depend on every day.' },
];

export default function WhyShramico() {
  return (
    <section id="why-shramico" className="py-32 bg-[#0f0814] relative overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[20rem] bg-[#e8a060]/5 rounded-t-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Why Choose Shramico
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              A platform you can{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8a060] to-burgundy">
                rely on
              </span>
            </h2>
            <p className="text-white/50 text-lg mb-12 leading-relaxed">
              Shramico was built to solve a real problem: connecting skilled workers with
              employers in a fast, trustworthy, and accessible way. Here's why thousands
              choose us.
            </p>
            <div className="space-y-8">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group flex gap-5">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#e8a060]/20 group-hover:border-[#e8a060]/50 transition-all duration-300 shadow-lg mt-1">
                    <Icon size={24} className="text-[#e8a060] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl mb-2 group-hover:text-[#e8a060] transition-colors">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map(({ value, desc }) => (
              <div
                key={value}
                className="group bg-white/[0.02] backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                <div className="w-10 h-1 bg-gradient-to-r from-burgundy to-[#e8a060] rounded-full mb-6 group-hover:scale-x-150 transform origin-left transition-transform duration-500" />
                <h3 className="font-extrabold text-white text-xl mb-3">{value}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Testimonial placeholder */}
            <div className="col-span-2 bg-gradient-to-br from-burgundy to-[#5C0014] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current text-[#e8a060]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-medium">
                  "Shramico made it so easy to find a qualified electrician near my shop within
                  an hour. The app is clean, fast, and trustworthy."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm border border-white/30">
                    EM
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Employer</p>
                    <p className="text-white/60 text-xs">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
