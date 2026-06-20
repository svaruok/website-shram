import { Download, ArrowRight, Shield, Zap, MapPin } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.shramico.app';

const badges = [
  { icon: Shield, text: 'OTP Verified' },
  { icon: Zap, text: 'Instant Hiring' },
  { icon: MapPin, text: 'Location-Based' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#FAF9F7] via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-burgundy/4 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-burgundy/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="section-label mb-6">
              Quick Hire Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
              Find Trusted Workers.{' '}
              <span className="text-burgundy">Discover Better</span>{' '}
              Opportunities.{' '}
              <span className="text-burgundy">Hire Faster.</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg">
              Shramico connects employers and skilled workers through a seamless mobile
              experience, helping businesses hire efficiently and workers discover
              opportunities nearby.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                <Download size={18} />
                Download on Google Play
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline text-base px-8 py-4"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-burgundy" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — device mockup */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full border border-burgundy/10" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-burgundy/8" />

              {/* Main phone mockup */}
              <div className="relative z-10 w-64 h-[520px] bg-gray-900 rounded-[44px] shadow-2xl border-4 border-gray-800 overflow-hidden mx-auto">
                {/* Status bar */}
                <div className="h-8 bg-gray-900 flex items-center justify-between px-6">
                  <span className="text-white text-[10px] font-medium">8:23</span>
                  <div className="w-24 h-5 bg-gray-800 rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-3 h-2 bg-white/80 rounded-sm" />
                    <div className="w-1 h-2 bg-white/60 rounded-sm" />
                  </div>
                </div>
                {/* App screen */}
                <div className="bg-gradient-to-b from-[#800020] to-[#5C0014] h-full flex flex-col">
                  {/* Header */}
                  <div className="px-5 pt-6 pb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <span className="text-white font-bold text-sm">Shramico</span>
                    </div>
                    <p className="text-white/70 text-xs">Good morning,</p>
                    <p className="text-white font-semibold text-base">Find work near you</p>
                  </div>
                  {/* Search bar */}
                  <div className="px-5 mb-4">
                    <div className="bg-white/15 rounded-xl px-4 py-2.5 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full border border-white/60" />
                      <span className="text-white/60 text-xs">Search jobs...</span>
                    </div>
                  </div>
                  {/* Cards */}
                  <div className="flex-1 bg-white rounded-t-3xl px-4 pt-5 space-y-3 overflow-hidden">
                    {['Electrician', 'Plumber', 'Carpenter'].map((job, i) => (
                      <div key={job} className="bg-gray-50 rounded-xl p-3 flex items-center gap-3 border border-gray-100">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                          style={{ background: i === 0 ? '#800020' : i === 1 ? '#A63A50' : '#5C0014' }}
                        >
                          {job[0]}
                        </div>
                        <div>
                          <p className="text-gray-800 text-xs font-semibold">{job}</p>
                          <p className="text-gray-400 text-[10px]">2.4 km away · Full-time</p>
                        </div>
                        <div className="ml-auto w-5 h-5 rounded-full bg-burgundy/10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                        </div>
                      </div>
                    ))}
                    <div className="text-center pt-1">
                      <div className="inline-block px-4 py-1.5 bg-burgundy/10 rounded-full text-[10px] font-semibold text-burgundy">
                        View All Jobs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-1/3 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 w-44">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-gray-800 text-xs font-semibold">Hired!</p>
                  <p className="text-gray-400 text-[10px]">Electrician · Just now</p>
                </div>
              </div>

              <div className="absolute -right-12 bottom-1/3 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 w-40">
                <p className="text-gray-500 text-[10px] mb-1">Active Listings</p>
                <p className="text-gray-900 text-lg font-bold">1,240+</p>
                <p className="text-green-500 text-[10px] font-medium">+12% this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 48h1440V24C1200 48 960 0 720 0S240 48 0 24V48z" fill="#FAF9F7" />
        </svg>
      </div>
    </section>
  );
}
