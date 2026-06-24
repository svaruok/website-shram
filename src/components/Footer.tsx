import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { handleDownload, getAppLink } from '../utils/download';


const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Shramico', href: '#why-shramico' },
];

const supportLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-gray-200">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-burgundy rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm"><img src="/Shramico_logo.jpeg" alt="shramico-logo" className='rounded-lg' /></span>
              </div>
              <span className="font-bold text-xl text-gray-900">Shramico</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs font-medium">
              Smart Hiring. Trusted Work. Real Opportunities.<br />
              Connecting employers and skilled workers through a seamless mobile experience.
            </p>
            <a
              href={getAppLink() || '#'}
              onClick={handleDownload}
              target={getAppLink() ? "_blank" : undefined}
              rel={getAppLink() ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 hover:border-burgundy/30 border border-gray-200 text-gray-900 shadow-sm text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200"
            >
              <Download size={15} className="text-burgundy" />
              Google Play
            </a>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Product</p>
            <ul className="space-y-3">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleScrollLink(e, href)}
                    className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getAppLink() || '#'}
                  onClick={handleDownload}
                  target={getAppLink() ? "_blank" : undefined}
                  rel={getAppLink() ? "noopener noreferrer" : undefined}
                  className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Support</p>
            <ul className="space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                     href={href}
                    onClick={(e) => handleScrollLink(e, href)}
                    className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@shramico.com"
                  className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                >
                  support@shramico.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-medium text-sm">&copy; 2026 Shramico. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-gray-500 font-medium text-xs hover:text-burgundy transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300 text-xs">·</span>
            <Link to="/terms-and-conditions" className="text-gray-500 font-medium text-xs hover:text-burgundy transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
