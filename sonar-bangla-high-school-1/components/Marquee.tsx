import React from 'react';
import { Megaphone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

const NOTICE_EN_MAP: Record<string, string> = {
  'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫': 'Summer Vacation & Holiday Notice 2025',
  'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংগ্রহ': 'SSC Examination 2025 Results & Marksheet Distribution',
  'প্রেপ-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫': 'Online Admission Open for Prep-1 & Class 6 (Session 2025)',
  'আন্তর্জাতিক মাতৃভাষা দিবস ও বার্ষিক ক্রীড়া উৎসব উদযাপন': 'International Mother Language Day & Annual Sports Meet',
};

const Marquee: React.FC = () => {
  const { notices } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  
  // Format date to DD/MM/YYYY
  const formatNoticeDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const [year, month, day] = parts;
        return toBanglaNum(`${day}/${month}/${year}`);
      }
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) {
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yyyy = d.getFullYear();
        return toBanglaNum(`${dd}/${mm}/${yyyy}`);
      }
      return toBanglaNum(dateStr);
    } catch {
      return toBanglaNum(dateStr);
    }
  };

  const getNoticeTitle = (notice: { title: string; titleEn?: string }) => {
    if (language === 'bn') return notice.title;
    return notice.titleEn || NOTICE_EN_MAP[notice.title] || notice.title;
  };

  return (
    <div className="bg-white border-y border-slate-200/90 flex items-stretch h-11 shadow-sm overflow-hidden">
      <div className="bg-rose-600 text-white px-3.5 sm:px-4 flex items-center font-bold text-xs sm:text-sm z-10 flex-shrink-0 shadow-md gap-2 rounded-r-2xl">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 animate-pulse"></span>
        </span>
        <Megaphone size={16} className="text-white transform -rotate-12 flex-shrink-0" />
        <span>{t.topbar.emergencyNotice}</span>
      </div>
      <div className="flex-grow overflow-hidden relative h-full flex items-center bg-slate-50">
        <div className="marquee-container w-full">
          <div className="marquee-content text-xs sm:text-sm text-slate-700 font-medium py-1 whitespace-nowrap flex items-center">
            {notices.map((notice, idx) => (
              <Link 
                key={idx} 
                to="/notices" 
                className="mr-6 inline-flex items-center gap-2.5 bg-white hover:bg-emerald-50 border border-slate-200/90 hover:border-emerald-300 px-3.5 py-1 rounded-full shadow-xs transition group whitespace-nowrap flex-shrink-0"
              >
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 animate-pulse"></span>
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-emerald-700 text-xs sm:text-sm whitespace-nowrap">
                  {getNoticeTitle(notice)}
                </span>
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap flex-shrink-0">
                  ({formatNoticeDate(notice.date)})
                </span>
              </Link>
            ))}
            {notices.length === 0 && (
              <span className="mr-8 font-semibold text-emerald-800 whitespace-nowrap">
                {language === 'bn' 
                  ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনায় আপনাকে স্বাগতম! ভর্তি ও একাডেমিক তথ্যের জন্য মেনুবার দেখুন।' 
                  : 'Welcome to SOS Hermann Gmeiner School Khulna! Explore the menu for admission and academic updates.'}
              </span>
            )}
          </div>
        </div>
      </div>
      <Link 
        to="/notices" 
        className="hidden md:flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 transition flex-shrink-0 shadow-md cursor-pointer rounded-l-2xl z-10"
      >
        {t.home.allNotices} <ChevronRight size={14} />
      </Link>
    </div>
  );
};

export default Marquee;
