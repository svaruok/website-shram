import { Download, ArrowRight, Shield, Zap, MapPin, ArrowLeft, Users } from 'lucide-react';
import { handleDownload, getAppLink } from '../utils/download';
import AnimatedShramicoImage from './AnimatedShramicoImage';

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
      {/* Subtle background pattern & Animated Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatedShramicoImage />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-burgundy/4 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-burgundy/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 z-10 pt-48 lg:pt-64">
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
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
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
              <div className="relative z-10 w-64 h-[520px] bg-gray-900 rounded-[44px] shadow-2xl border-4 border-gray-800 overflow-hidden mx-auto flex flex-col">
                {/* Status bar */}
                <div className="h-8 bg-gray-900 flex items-center justify-between px-6 flex-shrink-0">
                  <span className="text-white text-[10px] font-medium">8:23</span>
                  <div className="w-24 h-5 bg-gray-800 rounded-full" />
                  <div className="flex gap-1">
                    <div className="w-3 h-2 bg-white/80 rounded-sm" />
                    <div className="w-1 h-2 bg-white/60 rounded-sm" />
                  </div>
                </div>
                {/* App screen */}
                <div className="bg-[#FAF9F6] h-[488px] flex flex-col font-sans relative overflow-hidden select-none">
                  {/* Header */}
                  <div className="px-4 pt-3 pb-2 flex items-center border-b border-gray-100 bg-white">
                    <div className="bg-pink-50/70 p-1.5 rounded-full w-7 h-7 flex items-center justify-center text-burgundy cursor-pointer hover:bg-pink-100/50 transition-colors">
                      <ArrowLeft size={14} className="text-burgundy stroke-[3px]" />
                    </div>
                    <span className="text-sm font-bold text-gray-900 tracking-tight ml-2">Shramico</span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-[9px] text-gray-500 font-semibold px-4 pt-2 leading-relaxed">
                    Select worker(s) to continue.
                  </p>

                  {/* Selected worker badge */}
                  <div className="border border-pink-100 bg-white rounded-2xl p-2.5 mx-4 mt-2 flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <div className="bg-red-50 text-burgundy p-1.5 rounded-lg flex items-center justify-center">
                      <Users size={12} className="text-burgundy" />
                    </div>
                    <span className="text-[9.5px] font-bold text-gray-900">1 worker selected</span>
                  </div>

                  {/* Category Grid (scrollable) */}
                  <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-3 scrollbar-hide">
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Mason - Selected */}
                      <div className="border-2 border-burgundy rounded-[24px] p-2 bg-[#FDF2F4]/30 flex flex-col items-center justify-between text-center shadow-sm">
                        <img src="/Categories/Mason.png" alt="Mason" className="w-16 h-16 object-contain rounded-t-xl mt-1" />
                        <h5 className="text-[9.5px] font-extrabold text-gray-900 mt-1">Mason</h5>
                        <div className="bg-burgundy text-white rounded-full py-1 px-2.5 flex items-center justify-between w-full text-[8.5px] font-bold mt-2 shadow-sm">
                          <span>-</span>
                          <span>1</span>
                          <span>+</span>
                        </div>
                      </div>

                      {/* Construction Helper */}
                      <div className="border border-gray-150 rounded-[24px] p-2 bg-white flex flex-col items-center justify-between text-center shadow-sm hover:border-burgundy/30 transition-colors">
                        <img src="/Categories/Construction_helper.png" alt="Construction Helper" className="w-16 h-16 object-contain rounded-t-xl mt-1" />
                        <h5 className="text-[8.5px] font-bold text-gray-855 mt-1 leading-tight">Construction Helper</h5>
                        <div className="bg-pink-50/40 text-burgundy border border-pink-100 rounded-full py-1 px-2.5 flex items-center justify-between w-full text-[8.5px] font-bold mt-2">
                          <span className="text-gray-300">-</span>
                          <span>Add</span>
                          <span className="text-burgundy">+</span>
                        </div>
                      </div>

                      {/* General */}
                      <div className="border border-gray-150 rounded-[24px] p-2 bg-white flex flex-col items-center justify-between text-center shadow-sm hover:border-burgundy/30 transition-colors">
                        <img src="/Categories/General.png" alt="General" className="w-16 h-16 object-contain rounded-t-xl mt-1" />
                        <h5 className="text-[8.5px] font-bold text-gray-855 mt-1">General</h5>
                        <div className="bg-pink-50/40 text-burgundy border border-pink-100 rounded-full py-1 px-2.5 flex items-center justify-between w-full text-[8.5px] font-bold mt-2">
                          <span className="text-gray-300">-</span>
                          <span>Add</span>
                          <span className="text-burgundy">+</span>
                        </div>
                      </div>

                      {/* Packers & Movers */}
                      <div className="border border-gray-150 rounded-[24px] p-2 bg-white flex flex-col items-center justify-between text-center shadow-sm hover:border-burgundy/30 transition-colors">
                        <img src="/Categories/Packers_and_Movers.png" alt="Packers and Movers" className="w-16 h-16 object-contain rounded-t-xl mt-1" />
                        <h5 className="text-[8.5px] font-bold text-gray-855 mt-1 leading-tight">Packers and Movers</h5>
                        <div className="bg-pink-50/40 text-burgundy border border-pink-100 rounded-full py-1 px-2.5 flex items-center justify-between w-full text-[8.5px] font-bold mt-2">
                          <span className="text-gray-300">-</span>
                          <span>Add</span>
                          <span className="text-burgundy">+</span>
                        </div>
                      </div>

                      {/* Helper */}
                      <div className="border border-gray-150 rounded-[24px] p-2 bg-white flex flex-col items-center justify-between text-center shadow-sm hover:border-burgundy/30 transition-colors">
                        <img src="/Categories/Helper.png" alt="Helper" className="w-16 h-16 object-contain rounded-t-xl mt-1" />
                        <h5 className="text-[8.5px] font-bold text-gray-855 mt-1">Helper</h5>
                        <div className="bg-pink-50/40 text-burgundy border border-pink-100 rounded-full py-1 px-2.5 flex items-center justify-between w-full text-[8.5px] font-bold mt-2">
                          <span className="text-gray-300">-</span>
                          <span>Add</span>
                          <span className="text-burgundy">+</span>
                        </div>
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
