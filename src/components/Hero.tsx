import { Download, ArrowRight, Shield, Zap, MapPin, ArrowLeft, Users } from 'lucide-react';
import { handleDownload, getAppLink } from '../utils/download';
import AnimatedShramicoImage from './AnimatedShramicoImage';
import { motion } from 'framer-motion';

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 pt-10 lg:pt-16 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <motion.div 
              className="section-label mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Hire Platform
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Find Trusted Workers.{' '}
              <span className="text-burgundy">Discover Better</span>{' '}
              Opportunities.{' '}
              <span className="text-burgundy">Hire Faster.</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-500 leading-relaxed mb-10 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Shramico connects employers and skilled workers through a seamless mobile
              experience, helping businesses hire efficiently and workers discover
              opportunities nearby.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
                className="btn-primary text-base px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download on Google Play
              </motion.a>
              <motion.a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline text-base px-8 py-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-burgundy" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — device mockup */}
          <motion.div 
            className="flex items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Decorative circles */}
              <motion.div 
                className="absolute -top-8 -left-8 w-64 h-64 rounded-full border border-burgundy/10"
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-burgundy/8"
                animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Main phone mockup */}
              <div className="relative z-10 w-[280px] h-[480px] bg-white rounded-[44px] shadow-2xl border-[10px] border-gray-900 overflow-hidden mx-auto flex flex-col ring-4 ring-gray-100">
                
                {/* Dynamic Island Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-950 shadow-[inset_0_0_1px_rgba(255,255,255,0.3)] mr-1"></div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900/80 rounded-full z-30"></div>

                <div 
                  className="absolute inset-0 w-full h-full overflow-y-auto no-scrollbar overscroll-contain z-10 pt-10 pb-8 rounded-[36px]"
                  style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
                >
                  <div className="relative w-full h-auto">
                    <img 
                      src="/contractor_home.jpg" 
                      alt="Shramico Contractor App" 
                      className="w-full h-auto block"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    {/* Hack to cover "Test" and replace with "Rakesh" */}
                    <div className="absolute top-[88px] left-[155px] bg-white px-1 flex items-center justify-start z-20">
                      <span className="text-[#641E24] font-bold text-[15px]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Rakesh</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gray-50 z-0">
                  <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-bold text-sm mb-1">Screenshot Missing</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Please save your image in the <strong>public</strong> folder and name it exactly <strong>contractor_home.jpg</strong>
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div 
                className="absolute -left-16 top-1/3 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3 w-44"
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1 },
                  x: { duration: 0.6, delay: 1, type: 'spring' },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                }}
              >
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-gray-800 text-xs font-semibold">Hired!</p>
                  <p className="text-gray-400 text-[10px]">Electrician · Just now</p>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -right-12 bottom-1/3 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 w-40"
                initial={{ opacity: 0, x: 30 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 10, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.2 },
                  x: { duration: 0.6, delay: 1.2, type: 'spring' },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
                }}
              >
                <p className="text-gray-500 text-[10px] mb-1">Active Listings</p>
                <p className="text-gray-900 text-lg font-bold">1,240+</p>
                <p className="text-green-500 text-[10px] font-medium">+12% this week</p>
              </motion.div>
            </div>
          </motion.div>
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
