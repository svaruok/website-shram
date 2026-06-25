import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { MapPin, Download, CheckCircle, Star, Phone } from 'lucide-react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { handleDownload, getAppLink } from '../../utils/download';

const services = [
  'Electricians in Mumbai', 'Plumbers in Mumbai', 'Masons in Mumbai',
  'Carpenters in Mumbai', 'Painters in Mumbai', 'Cleaners in Mumbai',
  'Drivers in Mumbai', 'Security Guards in Mumbai',
];

const areas = ['Andheri', 'Bandra', 'Thane', 'Navi Mumbai', 'Kurla', 'Dadar', 'Borivali', 'Powai', 'Goregaon', 'Malad'];

export default function MumbaiPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Helmet>
        <title>Hire Verified Workers in Mumbai — Electrician, Plumber, Mason | Shramico</title>
        <meta name="description" content="Find verified electricians, plumbers, masons, carpenters and skilled workers in Mumbai. Shramico connects Mumbai employers with background-checked, rated professionals." />
        <meta name="keywords" content="electrician in Mumbai, plumber in Mumbai, mason in Mumbai, hire workers Mumbai, skilled workers Mumbai, Shramico Mumbai" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Shramico — Hire Workers in Mumbai",
          "description": "Hire verified electricians, plumbers, masons, and skilled workers in Mumbai through the Shramico app.",
          "url": "https://shramico.com/workers-mumbai",
          "areaServed": { "@type": "City", "name": "Mumbai" },
          "serviceType": ["Electrician", "Plumber", "Mason", "Carpenter", "Painter", "Cleaner"],
        })}</script>
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#800020] to-[#5C0014] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6">
            <MapPin size={12} /> Mumbai, Maharashtra
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight max-w-3xl">
            Hire Verified Workers in Mumbai — Instantly
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            Find trusted electricians, plumbers, masons, carpenters and more in Mumbai. All workers on Shramico are ID-verified, rated, and ready to work near you.
          </p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-white text-burgundy font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download Shramico — Free
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Workers Available in Mumbai</h2>
          <p className="text-gray-500 mb-10">Browse by category — all verified and reviewed by real customers in Mumbai</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((name) => (
              <div key={name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-burgundy/40 hover:bg-burgundy/5 transition-all duration-200 cursor-default group">
                <div className="w-9 h-9 bg-burgundy/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-burgundy/20 transition-all">
                  <CheckCircle size={16} className="text-burgundy" />
                </div>
                <p className="font-bold text-gray-800 text-sm leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <MapPin size={20} className="text-burgundy" /> Areas We Serve in Mumbai
          </h2>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-semibold text-sm hover:border-burgundy/30 hover:text-burgundy transition-all duration-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: CheckCircle, stat: '100%', label: 'ID Verified Workers' },
              { icon: Star, stat: '4.8★', label: 'Average Worker Rating' },
              { icon: Phone, stat: '<5 min', label: 'Average Response Time' },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
                <Icon size={24} className="text-burgundy mx-auto mb-3" />
                <p className="text-3xl font-black text-gray-900 mb-1">{stat}</p>
                <p className="text-gray-500 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#800020]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Find workers in Mumbai today</h2>
          <p className="text-white/70 text-lg mb-8">Download Shramico and get connected to trusted workers near you — in minutes.</p>
          <a
            href={getAppLink() || '#'}
            onClick={handleDownload}
            target={getAppLink() ? '_blank' : undefined}
            rel={getAppLink() ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 bg-white text-burgundy font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <Download size={18} /> Download Shramico
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
