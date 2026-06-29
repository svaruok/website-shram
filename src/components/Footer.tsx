import { Link } from 'react-router-dom';
import { Download, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { handleDownload, getAppLink } from '../utils/download';

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Shramico', href: '#why-shramico' },
];

const supportLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-900 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 pb-12 border-b border-gray-200">
          {/* Brand */}
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Company</p>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">About Us</Link></li>
              <li><Link to="/hire-workers" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Hire Workers</Link></li>
              <li><Link to="/find-jobs" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Find Jobs</Link></li>
              <li><Link to="/blog" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Blog</Link></li>
            </ul>
          </motion.div>

          {/* Locations (SEO Backlinks) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Locations</p>
            <ul className="space-y-3">
              <li><Link to="/construction-workers-pune" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Workers in Pune</Link></li>
              <li><Link to="/workers-mumbai" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Workers in Mumbai</Link></li>
              <li><Link to="/workers-nashik" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Workers in Nashik</Link></li>
              <li><Link to="/electrician-pune" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Electricians (Pune)</Link></li>
              <li><Link to="/plumber-pune" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">Plumbers (Pune)</Link></li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Support</p>
            <ul className="space-y-3">
              {supportLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors"
                  >
                    {label}
                  </Link>
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
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Legal</p>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link to="/account-deletion" className="text-gray-600 font-medium text-sm hover:text-burgundy transition-colors">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3">
              <p className="text-gray-500 font-medium text-sm">&copy; 2026 Shramico. All Rights Reserved.</p>
              {/* DPIIT Badge */}
              <img src="/dpiit-logo.jpg" alt="DPIIT Recognized Startup India" className="h-8 object-contain mix-blend-multiply" />
            </div>
            
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-gray-500 font-medium text-xs hover:text-burgundy transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300 text-xs">·</span>
            <Link to="/terms-and-conditions" className="text-gray-500 font-medium text-xs hover:text-burgundy transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-gray-300 text-xs">·</span>
            <Link to="/account-deletion" className="text-gray-500 font-medium text-xs hover:text-burgundy transition-colors">
              Account Deletion
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
