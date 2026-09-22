import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopUtilityBarProps {
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = () => {
  return (
    <div className="bg-[#004d34] text-white text-[11px] sm:text-xs py-1.5 border-b border-emerald-800/60 select-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
        {/* Left: Phone & Email (Exact match to reference mockup) */}
        <div className="flex items-center gap-3 sm:gap-4 text-emerald-100 font-medium">
          <a
            href="tel:02477726775"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={12} className="text-emerald-300" />
            <span>024-77726775</span>
          </a>
          <span className="text-emerald-600/80">|</span>
          <a
            href="mailto:soshgskhu@sos-bangladesh.org"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={12} className="text-emerald-300" />
            <span>soshgskhu@sos-bangladesh.org</span>
          </a>
        </div>

        {/* Right: Quick Portals & EIIN Badge (Exact match to reference mockup) */}
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
          <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[10px] font-bold tracking-wider">
            EIIN: 117188
          </span>
        </div>
      </div>
    </div>
  );
};
