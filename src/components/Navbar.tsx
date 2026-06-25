import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { handleDownload, getAppLink } from '../utils/download';

const mainNavLinks = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About', href: '/about', isRoute: true },
  { label: 'FAQ', href: '/faq', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
  { label: 'Blog', href: '/blog', isRoute: true },
];

const sectionLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workersOpen, setWorkersOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const close = () => setWorkersOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-burgundy rounded-xl flex items-center justify-center shadow-lg shadow-burgundy/20 group-hover:shadow-burgundy/40 transition-all duration-300">
              <span className="text-white font-bold text-sm leading-none"><img src="/Shramico_logo.jpeg" alt="Shramico-logo" className='rounded-xl' /></span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">Shramico</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1 bg-gray-500/5 backdrop-blur-md border border-gray-200 px-2 py-1.5 rounded-2xl">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200/50 px-4 py-2 rounded-xl transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Workers dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setWorkersOpen(!workersOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200/50 px-4 py-2 rounded-xl transition-all duration-300"
              >
                Workers <ChevronDown size={14} className={`transition-transform ${workersOpen ? 'rotate-180' : ''}`} />
              </button>
              {workersOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden z-50">
                  <Link to="/hire-workers" onClick={() => setWorkersOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-burgundy/5 hover:text-burgundy transition-all">
                    Hire Workers
                  </Link>
                  <Link to="/find-jobs" onClick={() => setWorkersOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-burgundy/5 hover:text-burgundy transition-all">
                    Find Jobs
                  </Link>
                </div>
              )}
            </div>

            {isHome && sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-200/50 px-4 py-2 rounded-xl transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex flex-col items-end gap-1.5 mt-3">
            <div className="flex items-center">
              <a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
                className="bg-burgundy hover:bg-[#a01030] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-burgundy/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download size={16} />
                Download App
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-burgundy hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-6 shadow-2xl">
          <div className="flex flex-col gap-1">
            {mainNavLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-bold text-gray-700 hover:text-burgundy hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/hire-workers" onClick={() => setMenuOpen(false)} className="text-base font-bold text-gray-700 hover:text-burgundy hover:bg-gray-50 px-4 py-3 rounded-xl transition-all">
              Hire Workers
            </Link>
            <Link to="/find-jobs" onClick={() => setMenuOpen(false)} className="text-base font-bold text-gray-700 hover:text-burgundy hover:bg-gray-50 px-4 py-3 rounded-xl transition-all">
              Find Jobs
            </Link>
            {isHome && sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="text-base font-bold text-gray-700 hover:text-burgundy hover:bg-gray-50 px-4 py-3 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
                className="w-full bg-burgundy text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg hover:bg-[#a01030] transition-all"
              >
                <Download size={18} />
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
