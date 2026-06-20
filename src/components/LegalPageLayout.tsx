import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-burgundy rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm leading-none">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Shramico</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-burgundy transition-colors"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero strip */}
      <div className="bg-gradient-to-br from-[#800020] to-[#5C0014] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/60 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-5">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-white/50 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12 space-y-8 text-sm text-gray-600 leading-relaxed">
          {children}
        </div>
      </main>

      {/* Footer strip */}
      <div className="border-t border-gray-200 bg-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; 2026 Shramico. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-burgundy transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-burgundy transition-colors">Terms &amp; Conditions</Link>
            <Link to="/#contact" className="text-gray-400 hover:text-burgundy transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
