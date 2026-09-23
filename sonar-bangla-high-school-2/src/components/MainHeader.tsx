import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ShieldCheck, Menu, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface MainHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  language: 'en' | 'bn';
}

export const MainHeader: React.FC<MainHeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  language,
}) => {
  return (
    <div className="bg-white border-b border-slate-100 shadow-xs relative z-30">
      <div className="container mx-auto py-2.5 sm:py-3.5 flex justify-between items-center">
        {/* Left: School Identity */}
        <Link to="/" className="flex items-center gap-3 sm:gap-3.5 group">
          <img
            src={SCHOOL_INFO.logo}
            alt={SCHOOL_INFO.name}
            className="h-13 sm:h-16 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
          <div>
            <h1 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-emerald-800 transition-colors">
              {language === 'bn' ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}
            </h1>
            <p className="text-[11px] sm:text-xs font-semibold text-emerald-800 mt-0.5">
              {language === 'bn' ? SCHOOL_INFO.addressBn : SCHOOL_INFO.address}
            </p>
            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 tracking-wider uppercase hidden sm:block mt-0.5">
              {language === 'bn' ? 'জ্ঞান • শৃঙ্খলা • ভবিষ্যৎ' : SCHOOL_INFO.tagline}
            </p>
          </div>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search */}
          <button
            aria-label={language === 'bn' ? 'অনুসন্ধান' : 'Search'}
            title={language === 'bn' ? 'অনুসন্ধান' : 'Search'}
            className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
          >
            <Search size={16} />
          </button>

          {/* Quick Action: Online Admission */}
          <Link
            to="/admission"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#e8f7f0] hover:bg-[#d5f2e3] text-[#005a3c] border border-[#9fe3c2] px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shadow-2xs hover:shadow-xs"
          >
            <BookOpen size={14} className="text-[#059669]" />
            <span>{language === 'bn' ? 'অনলাইন ভর্তি' : 'Online Admission'}</span>
          </Link>

          {/* Quick Action: Result */}
          <Link
            to="/result"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#fef4ea] hover:bg-[#fde8d4] text-[#b45309] border border-[#fcd9be] px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shadow-2xs hover:shadow-xs"
          >
            <ShieldCheck size={14} className="text-[#d97706]" />
            <span>{language === 'bn' ? 'ফলাফল' : 'Result'}</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden text-slate-700 hover:text-emerald-800 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </div>
  );
};
