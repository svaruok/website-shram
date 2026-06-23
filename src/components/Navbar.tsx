import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { handleDownload, getAppLink } from '../utils/download';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
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
        scrolled ? 'bg-[#0a050e]/80 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-burgundy rounded-xl flex items-center justify-center shadow-lg shadow-burgundy/20 group-hover:shadow-burgundy/40 transition-all duration-300">
              <span className="text-white font-bold text-sm leading-none"><img src="/Shramico_logo.jpeg" alt="Shramico-logo" className='rounded-xl' /></span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              Shramico
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-1 bg-white/[0.03] backdrop-blur-md border border-white/10 px-2 py-1.5 rounded-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300"
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
                className="bg-white hover:bg-gray-100 text-[#0a050e] font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download size={16} />
                Download App
              </a>
            </div>
            <div 
              className={`transition-all duration-500 origin-top flex flex-col items-end ${
                scrolled ? 'opacity-0 scale-y-0 h-0 mt-0 pointer-events-none' : 'opacity-100 scale-y-100 h-8 mt-1'
              }`}
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-xl shadow-black/20 border border-white/40">
                <p className="text-[#800020] text-[13px] font-black tracking-wide">
                  Every download rebuilds the Colosseum
                </p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
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
        <div className="bg-[#0f0814]/95 backdrop-blur-xl border-t border-white/10 px-4 py-6 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 mt-2">
              <a
                href={getAppLink() || '#'}
                onClick={handleDownload}
                target={getAppLink() ? "_blank" : undefined}
                rel={getAppLink() ? "noopener noreferrer" : undefined}
                className="w-full bg-gradient-to-r from-burgundy to-[#a01030] text-white font-bold rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-burgundy/30 transition-all"
              >
                <Download size={18} />
                Download App
              </a>
              <div className="mt-4 flex justify-center">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20 shadow-xl">
                  <p className="text-white text-[13px] font-black tracking-wide text-center">
                    Every download rebuilds the Colosseum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
