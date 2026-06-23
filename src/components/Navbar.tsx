import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { handleDownload, getAppLink } from '../utils/download';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Shramico', href: '#why-shramico' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-burgundy rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm leading-none"><img src="/Shramico_logo.jpeg" alt="Shramico-logo" className='rounded-lg' /></span>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Shramico
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-burgundy px-3 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getAppLink() || '#'}
              onClick={handleDownload}
              target={getAppLink() ? "_blank" : undefined}
              rel={getAppLink() ? "noopener noreferrer" : undefined}
              className="btn-primary text-sm"
            >
              <Download size={15} />
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-burgundy hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 py-4 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-burgundy hover:bg-gray-50 px-3 py-2.5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
                className="btn-primary w-full justify-center text-sm"
              >
                <Download size={15} />
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
