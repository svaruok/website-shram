import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckCircle, Search, Star, Download, Zap, Shield, Clock, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { handleDownload, getAppLink } from '../utils/download';

const categories = [
  'Electrician', 'Plumber', 'Mason / Bricklayer', 'Carpenter', 'Painter',
  'Welder', 'Cleaner / Housekeeping', 'Driver', 'Security Guard',
  'Helper / Labor', 'AC Technician', 'Tile Layer',
];

export default function HireWorkersPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Helmet>
        <title>Hire Verified Workers Near You — Shramico</title>
        <meta name="description" content="Hire verified electricians, plumbers, masons, carpenters and more near you. Shramico connects employers with trusted, background-checked workers across India." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#800020] to-[#5C0014] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
            For Employers & Contractors
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Find trusted workers <br />
            <span className="text-white/70">in minutes, not days</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Post a job or browse verified workers near you. Electricians, plumbers, masons, cleaners — all background-checked and rated by real customers.
          </p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-white text-burgundy font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download & Start Hiring
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">How Hiring Works</h2>
            <p className="text-gray-500 text-lg">Get the right worker in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Search, title: 'Search & Browse', desc: 'Enter your location and required skill. Browse verified profiles with ratings and experience.' },
              { step: '02', icon: Star, title: 'Review & Select', desc: 'Check worker profiles, past reviews, verified credentials, and availability before booking.' },
              { step: '03', icon: CheckCircle, title: 'Book & Track', desc: 'Confirm your booking, track the worker in real time, and pay securely after the job is done.' },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-200">
                <span className="text-6xl font-black text-gray-100 absolute top-6 right-6 leading-none">{step}</span>
                <div className="w-12 h-12 bg-burgundy/10 text-burgundy rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shramico */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Why employers choose Shramico</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: Shield, title: 'Verified & Background Checked', desc: 'All workers go through ID verification before they appear on the platform.' },
              { icon: Zap, title: 'Instant Availability', desc: 'See who\'s available right now near your location — no waiting, no guessing.' },
              { icon: Star, title: 'Rating & Review System', desc: 'Real ratings from real customers. Hire with confidence every single time.' },
              { icon: Clock, title: 'Fast Response Time', desc: 'Workers on Shramico respond quickly. Get confirmations within minutes.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-5 items-start hover:shadow-md transition-all duration-300">
                <div className="w-11 h-11 bg-burgundy/10 text-burgundy rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker categories */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Worker Categories Available</h2>
          <p className="text-gray-500 text-center mb-10">We cover all major skilled and semi-skilled trades</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span key={cat} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-semibold text-sm hover:border-burgundy/40 hover:text-burgundy hover:bg-burgundy/5 transition-all duration-200 cursor-default">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#800020]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Start hiring today</h2>
          <p className="text-white/70 text-lg mb-8">Download the Shramico app and find your first worker in under 5 minutes.</p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-white text-burgundy font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download Shramico App
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
