import { ArrowRight, Download } from 'lucide-react';
import { handleDownload, getAppLink } from '../../utils/download';

export default function CollosseumHero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white min-h-[90dvh] flex flex-col justify-center border-b border-gray-100">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-burgundy/5 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-12 lg:px-20 pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            Welcome to Shramico
          </div>
          
          <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6">
            Find Trusted Workers.<br />
            <span className="text-burgundy">Discover Better</span> Opportunities.<br />
            <span className="text-gray-900">Hire Faster.</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl font-medium">
            Shramico connects employers and skilled workers through a seamless
            mobile experience — helping businesses hire efficiently and workers
            discover opportunities nearby.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={getAppLink() || '#'}
              onClick={handleDownload}
              target={getAppLink() ? '_blank' : undefined}
              rel={getAppLink() ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-2.5 bg-burgundy hover:bg-[#a01030] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-burgundy/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Download size={20} />
              Download on Google Play
            </a>
            
            <a
              href="#philosophy"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#philosophy')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-bold px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto shadow-sm"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
