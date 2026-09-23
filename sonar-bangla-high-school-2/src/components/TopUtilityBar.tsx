import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { SCHOOL_INFO } from '../data/schoolData';

interface TopUtilityBarProps {
  language?: 'en' | 'bn';
  setLanguage?: (lang: 'en' | 'bn') => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = () => {
  const { t, toBanglaNum } = useLanguage();

  return (
    <div className="bg-[#004d34] text-white text-[11px] sm:text-xs py-1.5 border-b border-emerald-800/60 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
        {/* Left: Phone & Email */}
        <div className="flex items-center gap-3 sm:gap-4 text-emerald-100 font-medium">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} className="text-emerald-300" />
            <span>{toBanglaNum(SCHOOL_INFO.phone)}</span>
          </a>
          <span className="text-emerald-600/80">|</span>
          <a
            href={`mailto:${SCHOOL_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={12} className="text-emerald-300" />
            <span>{SCHOOL_INFO.email}</span>
          </a>
        </div>

        {/* Right: Quick Portals & EIIN Badge */}
        <div className="flex items-center gap-3 sm:gap-4 text-emerald-100 font-medium">
          <Link to="/students" className="hover:text-white transition-colors">
            {t.topbar.studentPortal}
          </Link>
          <span className="text-emerald-600/80">|</span>
          <Link to="/faculty" className="hover:text-white transition-colors">
            {t.topbar.teacherPortal}
          </Link>
          <span className="text-emerald-600/80">|</span>
          <Link to="/about" className="hover:text-white transition-colors">
            {t.topbar.alumni}
          </Link>
          <span className="text-emerald-600/80">|</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[10px] font-bold tracking-wider">
            {t.topbar.eiin}: {toBanglaNum(SCHOOL_INFO.eiin)}
          </span>
        </div>
      </div>
    </div>
  );
};
