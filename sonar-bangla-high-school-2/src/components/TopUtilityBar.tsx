import React from 'react';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopUtilityBarProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ language, setLanguage }) => {
  return (
    <div className="bg-[#004d34] text-white text-[11px] sm:text-xs py-1.5 border-b border-emerald-800/60 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
        {/* Left: Phone & Email (Matches reference mockup) */}
        <div className="flex items-center gap-3 sm:gap-4 text-emerald-100">
          <a
            href="tel:02477726775"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} className="text-emerald-300" />
            <span>024-77726775</span>
          </a>
          <span className="text-emerald-600/80">|</span>
          <a
            href="mailto:soskhulna@sos-bangladesh.org"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={12} className="text-emerald-300" />
            <span>soskhulna@sos-bangladesh.org</span>
          </a>
        </div>

        {/* Right: Quick Portals & Language */}
        <div className="flex items-center gap-3 sm:gap-4 text-emerald-100 font-medium">
          <Link to="/students" className="hover:text-white transition-colors">
            Student Portal
          </Link>
          <span className="text-emerald-600/80">|</span>
          <Link to="/faculty" className="hover:text-white transition-colors">
            Teacher Portal
          </Link>
          <span className="text-emerald-600/80">|</span>
          <Link to="/about" className="hover:text-white transition-colors">
            Alumni
          </Link>
          <span className="text-emerald-600/80">|</span>
          <button
            type="button"
            onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
            className="flex items-center gap-1 hover:text-amber-300 font-bold transition-colors cursor-pointer"
          >
            <span>{language === 'bn' ? 'BN' : 'EN'}</span>
            <ChevronDown size={11} className="text-emerald-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
