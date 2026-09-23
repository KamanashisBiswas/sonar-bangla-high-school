import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, GraduationCap, Award, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  language?: 'en' | 'bn';
  setLanguage?: (lang: 'en' | 'bn') => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Direct flat navigation links matching reference mockup exactly (12 direct flat links, NO DROPDOWNS)
  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.administration, path: '/administration' },
    { label: t.nav.faculty, path: '/faculty' },
    { label: t.nav.students, path: '/students' },
    { label: t.nav.academic, path: '/academic' },
    { label: t.nav.admission, path: '/admission' },
    { label: t.nav.result, path: '/result' },
    { label: t.nav.notices, path: '/notices' },
    { label: t.nav.downloads, path: '/downloads' },
    { label: t.nav.gallery, path: '/gallery' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. White Header Tier: Brand Logo & Fast CTA Actions */}
      <div className="bg-white border-b border-slate-100 py-2.5 transition-all">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* School Crest Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={SCHOOL_INFO.logo}
              alt={SCHOOL_INFO.name}
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <span className="block font-black text-slate-900 text-xs sm:text-[14px] xl:text-[15px] tracking-tight leading-tight group-hover:text-[#004d34] transition-colors uppercase">
                {language === 'bn' ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold text-[#059669] leading-tight mt-0.5">
                {language === 'bn' ? SCHOOL_INFO.addressBn : SCHOOL_INFO.address}
              </span>
              <span className="block text-[8px] sm:text-[8.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                {language === 'bn' ? 'জ্ঞানের আলোয় আলোকিত ভবিষ্যৎ' : SCHOOL_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Button */}
            <button
              aria-label="Search"
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 rounded-full text-slate-600 hover:text-[#004d34] hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
            >
              <Search size={18} />
            </button>

            {/* Online Admission Button (Mint rounded pill button) */}
            <Link
              to="/admission"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#e8f7ee] hover:bg-[#d1fae5] border border-emerald-300/80 text-[#004d34] px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs hover:shadow-xs whitespace-nowrap cursor-pointer"
            >
              <GraduationCap size={15} className="text-[#059669]" />
              <span>{t.topbar.onlineAdmission}</span>
            </Link>

            {/* Result Button (Amber/Orange rounded pill button) */}
            <Link
              to="/result"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#fffbeb] hover:bg-[#fef3c7] border border-amber-300/80 text-[#b45309] px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs hover:shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Award size={15} className="text-[#d97706]" />
              <span>{t.topbar.result}</span>
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
      </div>

      {/* Expandable Search Input Bar */}
      {searchOpen && (
        <div className="border-t border-slate-100 bg-slate-50 py-2.5 transition-all">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder={t.nav.searchPlaceholder}
                className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] focus:border-transparent shadow-xs"
                autoFocus
              />
              <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
            </div>
          </div>
        </div>
      )}

      {/* 2. Deep Green Navigation Bar Tier (Matching reference mockup exactly) */}
      <div className="bg-[#004d34] text-white hidden xl:block select-none border-t border-emerald-800/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Flat Navigation Links */}
          <nav className="flex items-center gap-1 py-1 overflow-x-auto scrollbar-none">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative px-2.5 2xl:px-3 py-2 text-[12px] 2xl:text-[13px] font-bold transition-all whitespace-nowrap rounded-t-lg ${
                    isActive
                      ? 'text-white bg-[#003826] font-extrabold after:content-[""] after:block after:h-[3px] after:bg-[#facc15] after:w-full after:mt-1 after:rounded-full'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Far Right: Language Switcher Toggle (বাং / EN) */}
          <div className="flex items-center bg-[#003826] p-0.5 rounded-full border border-emerald-700/60 shrink-0 ml-3">
            <button
              type="button"
              onClick={() => setLanguage('bn')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                language === 'bn'
                  ? 'bg-[#fbbf24] text-slate-950 font-black shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              বাং
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                language === 'en'
                  ? 'bg-[#fbbf24] text-slate-950 font-black shadow-xs'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-[#004d34] text-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {/* Quick Action Buttons in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-emerald-800/80">
              <Link
                to="/admission"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-[#e8f7ee] text-[#004d34] py-2 rounded-xl text-xs font-bold"
              >
                <GraduationCap size={15} />
                <span>{t.topbar.onlineAdmission}</span>
              </Link>
              <Link
                to="/result"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-[#fffbeb] text-[#b45309] py-2 rounded-xl text-xs font-bold"
              >
                <Award size={15} />
                <span>{t.topbar.result}</span>
              </Link>
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-[#003826] text-[#facc15] font-black'
                      : 'text-white/90 hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Language Switcher in Mobile Drawer */}
            <div className="pt-3 border-t border-emerald-800/80 flex items-center justify-between">
              <span className="text-xs text-emerald-200 font-medium">Language:</span>
              <div className="flex items-center bg-[#003826] p-0.5 rounded-full border border-emerald-700/60">
                <button
                  type="button"
                  onClick={() => setLanguage('bn')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition ${
                    language === 'bn'
                      ? 'bg-[#fbbf24] text-slate-950 font-black'
                      : 'text-white/80'
                  }`}
                >
                  বাং
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition ${
                    language === 'en'
                      ? 'bg-[#fbbf24] text-slate-950 font-black'
                      : 'text-white/80'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
