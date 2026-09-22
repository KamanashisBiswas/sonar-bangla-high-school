import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Direct flat navigation links matching reference mockup exactly (NO DROPDOWNS)
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Administration', path: '/administration' },
    { label: 'Faculty', path: '/faculty' },
    { label: 'Students', path: '/students' },
    { label: 'Academic', path: '/academic' },
    { label: 'Admission', path: '/admission' },
    { label: 'Result', path: '/result' },
    { label: 'Notices', path: '/notices' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-200 border-b border-slate-200/80 ${
        isScrolled ? 'shadow-md py-1.5' : 'py-2.5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <img
            src={SCHOOL_INFO.logo}
            alt={SCHOOL_INFO.name}
            className={`object-contain transition-all duration-200 group-hover:scale-105 ${
              isScrolled ? 'h-9 sm:h-11' : 'h-11 sm:h-12'
            }`}
          />
          <div>
            <span className="block font-black text-slate-900 text-xs sm:text-[13px] xl:text-[14px] 2xl:text-[15px] tracking-tight leading-tight group-hover:text-[#004d34] transition-colors">
              {language === 'bn' ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}
            </span>
            <span className="block text-[8px] sm:text-[8.5px] 2xl:text-[9px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
              {SCHOOL_INFO.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Exact reference mockup: FLAT, NO DROPDOWNS */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative px-1.5 2xl:px-2 py-1 text-[12px] 2xl:text-[13px] font-bold transition-colors whitespace-nowrap ${
                  isActive
                    ? 'text-[#004d34] font-extrabold after:content-[""] after:block after:h-[2.5px] after:bg-[#004d34] after:w-full after:mt-0.5 after:rounded-full'
                    : 'text-slate-700 hover:text-[#004d34]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Search Icon + Online Admission Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Button */}
          <button
            aria-label="Search"
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full text-slate-600 hover:text-[#004d34] hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
          >
            <Search size={18} />
          </button>

          {/* Online Admission CTA Button */}
          <Link
            to="/admission"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#004d34] hover:bg-[#003826] text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition shadow-xs hover:shadow whitespace-nowrap cursor-pointer"
          >
            <span>Online Admission</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-xl bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-[#004d34] flex items-center justify-center transition cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="border-t border-slate-100 bg-slate-50 py-2.5 transition-all">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search notices, faculty, curriculum..."
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] focus:border-transparent shadow-xs"
                autoFocus
              />
              <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-xs font-bold transition ${
                    isActive
                      ? 'bg-emerald-50 text-[#004d34]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#004d34]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                to="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#004d34] text-white py-2.5 rounded-xl text-xs font-bold transition shadow-xs"
              >
                <span>Online Admission</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
