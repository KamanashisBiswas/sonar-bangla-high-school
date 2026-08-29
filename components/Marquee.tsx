import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

const Marquee: React.FC = () => {
  const { notices } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  
  return (
    <div className="bg-white border-y border-slate-200/90 flex items-stretch h-11 shadow-sm overflow-hidden">
      <div className="bg-rose-600 text-white px-4 flex items-center font-bold text-xs sm:text-sm z-10 flex-shrink-0 shadow-md">
        <span className="flex h-2 w-2 relative mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <Bell size={14} className="mr-1.5 hidden sm:inline" />
        {t.topbar.emergencyNotice}
      </div>
      <div className="flex-grow overflow-hidden relative h-full flex items-center bg-slate-50">
        <div className="marquee-container w-full">
          <div className="marquee-content text-xs sm:text-sm text-slate-700 font-medium py-1">
            {notices.map((notice, idx) => (
              <Link 
                key={idx} 
                to="/notices" 
                className="mr-12 inline-flex items-center hover:text-emerald-700 hover:underline transition group"
              >
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 group-hover:scale-125 transition"></span>
                <span className="font-semibold text-slate-900 group-hover:text-emerald-700">{notice.title}</span>
                <span className="ml-2 text-[11px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-sans font-medium">{toBanglaNum(notice.date)}</span>
              </Link>
            ))}
            {notices.length === 0 && (
              <span className="mr-12 font-semibold text-emerald-800">
                {language === 'bn' 
                  ? 'সোনার বাংলা উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম! ভর্তি ও একাডেমিক তথ্যের জন্য মেনুবার দেখুন।' 
                  : 'Welcome to Sonar Bangla High School! Explore the menu for admission and academic updates.'}
              </span>
            )}
          </div>
        </div>
      </div>
      <Link 
        to="/notices" 
        className="hidden md:flex items-center gap-1 bg-white hover:bg-slate-50 text-slate-600 hover:text-emerald-700 text-xs font-semibold px-4 border-l border-slate-200 transition flex-shrink-0"
      >
        {t.home.allNotices} <ChevronRight size={14} />
      </Link>
    </div>
  );
};

export default Marquee;
