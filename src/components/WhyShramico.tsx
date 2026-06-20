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
    <section id="why-shramico" className="py-24 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-6">Why Choose Shramico</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              A platform you can{' '}
              <span className="text-burgundy">rely on</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Shramico was built to solve a real problem: connecting skilled workers with
              employers in a fast, trustworthy, and accessible way. Here's why thousands
              choose us.
            </p>
            <div className="space-y-6">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 bg-burgundy/8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={20} className="text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
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
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-1 bg-burgundy rounded-full mb-4" />
                <h3 className="font-extrabold text-gray-900 text-xl mb-2">{value}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}

            {/* Testimonial placeholder */}
            <div className="col-span-2 bg-gradient-to-br from-[#800020] to-[#5C0014] rounded-2xl p-7 text-white">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current text-yellow-300" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                "Shramico made it so easy to find a qualified electrician near my shop within
                an hour. The app is clean, fast, and trustworthy."
              </p>
              <p className="text-white/60 text-xs font-medium">— Employer, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
