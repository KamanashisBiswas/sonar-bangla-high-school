import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, Search, Calendar, Tag, ChevronRight, FileText, 
  X, Home, LayoutGrid, Megaphone, GraduationCap, 
  Folder, ArrowRight, Printer, Download, Eye, Clock
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Notice } from '../types';
import { 
  SCHOOL_NAME, SCHOOL_NAME_EN, SCHOOL_LOGO, SCHOOL_ADDRESS, 
  EIIN_CODE, ESTABLISHED_YEAR, MOCK_NOTICES 
} from '../constants';

const NOTICE_EN_MAP: Record<string, string> = {
  'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫': 'Summer Vacation & Holiday Notice 2025',
  'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংক্রান্ত': 'SSC Examination 2025 Results & Marksheet Distribution',
  'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংগ্রহ': 'SSC Examination 2025 Results & Marksheet Distribution',
  'শ্রেণি-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫': 'Online Admission Open for Class 1 & Class 6 (Session 2025)',
  'প্রেপ-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫': 'Online Admission Open for Prep-1 & Class 6 (Session 2025)',
  'আন্তর্জাতিক মাতৃভাষা দিবস ও বার্ষিক ক্রীড়া উৎসব উদযাপন': 'International Mother Language Day & Annual Sports Meet',
  'অর্ধ-বার্ষিক ও প্রাক-নির্বাচনী পরীক্ষা ২০২৫ এর সময়সূচি প্রকাশ': 'Half-Yearly & Pre-Test Exam 2025 Schedule Published',
  'বার্ষিক বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনী ২০২৫': 'Annual Science Fair & ICT Innovation Expo 2025',
  'মাসিক বেতন ও পরীক্ষার ফি পরিশোধের সময়সীমা সংক্রান্ত': 'Notice Regarding Monthly Tuition & Exam Fee Payment',
  'নতুন শিক্ষার্থীদের ভর্তির জন্য আইডি কার্ড ও ইউনিফর্ম বিজ্ঞপ্তি': 'ID Card & School Uniform Notice for Newly Admitted Students',
};

const Notices: React.FC = () => {
  const { notices } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Use full notices dataset
  const allNotices = (notices && notices.length >= 16) ? notices : MOCK_NOTICES;

  // Month names for date badge
  const getMonthName = (monthStr: string) => {
    const monthNum = parseInt(monthStr, 10);
    const bnMonths = ['', 'জানু', 'ফেব্রু', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
    const enMonths = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return isBn ? (bnMonths[monthNum] || 'মে') : (enMonths[monthNum] || 'May');
  };

  // Filter Notices
  const filteredNotices = allNotices.filter(notice => {
    const titleMatch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       (notice.titleEn && notice.titleEn.toLowerCase().includes(searchTerm.toLowerCase())) ||
                       (notice.content && notice.content.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterType === 'all') return titleMatch;
    if (filterType === 'others') {
      return titleMatch && !['general', 'exam', 'admission', 'event'].includes(notice.type.toLowerCase());
    }
    return titleMatch && notice.type.toLowerCase() === filterType.toLowerCase();
  });

  // Handle Printable Official Notice
  const handlePrintNotice = (notice: Notice) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const titleText = isBn ? notice.title : (notice.titleEn || NOTICE_EN_MAP[notice.title] || notice.title);
    const contentText = isBn 
      ? (notice.content || 'উক্ত নোটিশের সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকবৃন্দকে যথাযথ নির্দেশনা অনুসরণের জন্য অনুরোধ জানানো যাচ্ছে।')
      : (notice.contentEn || notice.content || 'All concerned teachers, students, and guardians are requested to follow the circular accordingly.');

    const printContent = `
      <!DOCTYPE html>
      <html lang="${isBn ? 'bn' : 'en'}">
      <head>
        <meta charset="UTF-8">
        <title>Notice - ${titleText}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm 20mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; }
          body { color: #0f172a; background: #fff; padding: 10px; }
          .border-wrapper { border: 2.5px solid #00704A; border-radius: 12px; padding: 26px 30px; position: relative; min-height: 95vh; display: flex; flex-direction: column; justify-content: space-between; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #00704A; padding-bottom: 14px; margin-bottom: 24px; }
          .header-left { display: flex; align-items: center; gap: 14px; }
          .logo { width: 68px; height: 68px; object-fit: contain; }
          .school-title-main { font-size: 21px; font-weight: 900; color: #00704A; }
          .school-info { font-size: 11px; color: #475569; margin-top: 2px; }
          .eiin-badge { display: inline-block; background: #eaf7f0; color: #00704A; border: 1px solid #bbf7d0; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 800; }
          .meta-row { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 20px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px; }
          .notice-badge { background: #eaf7f0; color: #00704A; padding: 4px 10px; border-radius: 6px; font-weight: 800; font-size: 11px; text-transform: uppercase; }
          .notice-title { font-size: 18px; font-weight: 900; color: #0f172a; margin-bottom: 20px; text-align: center; line-height: 1.4; }
          .notice-body { font-size: 13px; line-height: 1.8; color: #1e293b; text-align: justify; white-space: pre-line; margin-bottom: 40px; }
          .signatures { display: flex; justify-content: space-between; margin-top: auto; padding-top: 50px; }
          .sig-box { text-align: center; width: 170px; }
          .sig-line { border-top: 1.2px solid #475569; margin-bottom: 4px; width: 100%; }
          .sig-title { font-size: 11px; font-weight: 800; color: #1e293b; }
        </style>
      </head>
      <body>
        <div class="border-wrapper">
          <div>
            <div class="header">
              <div class="header-left">
                <img class="logo" src="${SCHOOL_LOGO}" alt="Logo" onerror="this.style.display='none'" />
                <div>
                  <div class="school-title-main">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
                  <div class="school-info">
                    ${isBn ? 'গল্লামারী, খুলনা - ৯২০৮ | ফোন: ০২৪-৭৭৭২৬৭৭৫ | ইমেইল: soshgskhulna@sos-bangladesh.org' : 'Gollamari, Khulna - 9208 | Phone: 024-77726775 | Email: soshgskhulna@sos-bangladesh.org'}
                  </div>
                </div>
              </div>
              <div style="text-align: right;">
                <div class="eiin-badge">EIIN: ${EIIN_CODE}</div>
                <div class="school-info">${isBn ? `স্থাপিত: ${ESTABLISHED_YEAR} ইং` : 'Established: 1987'}</div>
              </div>
            </div>

            <div class="meta-row">
              <div>${isBn ? 'স্মারক নং: এসওএস/খুলনা/বিজ্ঞপ্তি/' : 'Memo No: SOS/KHULNA/NOTICE/'}${notice.id}</div>
              <div>${isBn ? 'তারিখ:' : 'Date:'} ${toBanglaNum(notice.date.split('-').reverse().join('/'))}</div>
            </div>

            <div style="text-align: center; margin-bottom: 14px;">
              <span class="notice-badge">${notice.type}</span>
            </div>

            <h1 class="notice-title">${titleText}</h1>

            <div class="notice-body">
              ${contentText}
            </div>
          </div>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'নোটিশ ইনচার্জ' : 'Notice In-Charge'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'অধ্যক্ষ / প্রধান শিক্ষক' : 'Principal / Headmaster'}</div>
              <div style="font-size: 9.5px; color: #64748b;">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredNotices.length / ITEMS_PER_PAGE) || 1;
  const paginatedNotices = filteredNotices.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (MATCHING ABOUT US / ADMINISTRATION STANDARD) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 mb-8">
        {/* Background School Linework Illustration on Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 md:w-3/5 lg:w-1/2 pointer-events-none overflow-hidden select-none items-center justify-end">
          <img 
            src="/campus_illustration.jpg" 
            alt="School Campus Architectural Linework Illustration"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.95)_45%,black_100%)] opacity-85 mix-blend-multiply"
          />
        </div>

        {/* Hero Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
              <Home size={14} className="text-emerald-700" />
              <span>{isBn ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'অফিসিয়াল নোটিশ বোর্ড' : 'Official Notice Board'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Bell size={13} className="text-emerald-700" />
              <span>{isBn ? 'সকল আপডেট এক জায়গায়' : 'ALL UPDATES IN ONE PLACE'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'অফিসিয়াল নোটিশ বোর্ড' : 'Official Notice Board'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'বিদ্যালয়ের সর্বশেষ ঘোষণা, পরিপত্র, সময়সূচি ও প্রয়োজনীয় প্রশাসনিক বিজ্ঞপ্তি।' 
                : 'Latest announcements, official circulars, exam schedules and essential notices.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 2. CATEGORY TABS & SEARCH BAR ROW (MATCHING REFERENCE IMAGE 100%) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: isBn ? 'সব' : 'All', icon: LayoutGrid },
              { id: 'general', label: isBn ? 'সাধারণ' : 'General', icon: Megaphone },
              { id: 'exam', label: isBn ? 'পরীক্ষা' : 'Exam', icon: FileText },
              { id: 'admission', label: isBn ? 'ভর্তি' : 'Admission', icon: GraduationCap },
              { id: 'event', label: isBn ? 'ইভেন্ট' : 'Event', icon: Calendar },
              { id: 'others', label: isBn ? 'অন্যান্য' : 'Others', icon: Folder },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = filterType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setFilterType(tab.id); setCurrentPage(1); }}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#00704A] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isBn ? 'নোটিশের শিরোনাম বা বিষয় লিখুন...' : 'Search notice title or topic...'}
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-xs sm:text-sm outline-none transition font-medium text-slate-800 shadow-2xs"
            />
          </div>

        </div>

        {/* 3. NOTICE LIST CARDS (MATCHING REFERENCE IMAGE 100%) */}
        <div className="space-y-3 sm:space-y-4">
          {paginatedNotices.length === 0 ? (
            <div className="bg-white p-12 rounded-[28px] text-center border border-slate-100 shadow-sm space-y-3">
              <Bell size={38} className="mx-auto text-slate-300" />
              <h4 className="text-sm sm:text-base font-bold text-slate-700">
                {isBn ? 'কোনো নোটিশ খুঁজে পাওয়া যায়নি' : 'No notices found matching your criteria'}
              </h4>
              <p className="text-xs text-slate-400">
                {isBn ? 'অন্য কোনো কি-ওয়ার্ড বা বিভাগ নির্বাচন করে পুনরায় চেষ্টা করুন।' : 'Try searching with different keywords or switch categories.'}
              </p>
            </div>
          ) : (
            paginatedNotices.map((notice) => {
              const dayStr = notice.date.split('-')[2] || '01';
              const monthStr = notice.date.split('-')[1] || '05';
              const displayTitle = isBn ? notice.title : (notice.titleEn || NOTICE_EN_MAP[notice.title] || notice.title);
              
              // Category badge style
              const typeUpper = (notice.type || 'General').toUpperCase();
              let badgeColor = 'bg-[#eaf7f0] text-[#00704A]';
              if (typeUpper === 'EXAM') badgeColor = 'bg-[#fef3c7] text-[#92400e]';
              if (typeUpper === 'ADMISSION') badgeColor = 'bg-[#e0f2fe] text-[#0369a1]';
              if (typeUpper === 'EVENT') badgeColor = 'bg-[#f3e8ff] text-[#7e22ce]';

              return (
                <div 
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    
                    {/* Left Date Box - Perfect Rounded Square Shape */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] aspect-square bg-[#edf9f3] rounded-[18px] sm:rounded-2xl border border-emerald-100 flex flex-col items-center justify-center flex-shrink-0 text-[#00704A] select-none shadow-2xs">
                      <span className="text-xl sm:text-2xl font-black leading-none text-[#00704A] font-mono">
                        {isBn ? toBanglaNum(dayStr) : dayStr}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-[#00704A] mt-1 leading-none">
                        {getMonthName(monthStr)}
                      </span>
                    </div>

                    {/* Middle Title & Metadata */}
                    <div className="space-y-1">
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${badgeColor}`}>
                          {typeUpper}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-800 transition leading-snug">
                        {displayTitle}
                      </h3>

                      <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
                        <Calendar size={12} className="text-slate-400" />
                        <span>
                          {isBn 
                            ? `তারিখ: ${toBanglaNum(notice.date.split('-').reverse().join('/'))}`
                            : `Date: ${notice.date.split('-').reverse().join('/')}`}
                        </span>
                      </p>
                    </div>

                  </div>

                  {/* Right Action Link */}
                  <div className="flex items-center gap-1.5 self-end sm:self-center text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition pt-1 sm:pt-0">
                    <span>{isBn ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* 4. DYNAMIC PAGINATION CONTROLS (ONLY REAL PAGES) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-6 select-none">
            <button 
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(p => Math.max(1, p - 1));
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs font-bold transition shadow-2xs"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold cursor-pointer transition shadow-2xs ${
                  currentPage === page
                    ? 'bg-[#00704A] text-white shadow-xs'
                    : 'bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {isBn ? toBanglaNum(page) : page}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(p => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs font-bold transition shadow-2xs"
            >
              &gt;
            </button>
          </div>
        )}

      </div>

      {/* 5. NOTICE DETAILS MODAL (100% MOBILE RESPONSIVE & MATCHING REFERENCE IMAGE) */}
      {selectedNotice && (() => {
        const titleText = isBn ? selectedNotice.title : (selectedNotice.titleEn || NOTICE_EN_MAP[selectedNotice.title] || selectedNotice.title);
        const day = selectedNotice.date.split('-')[2] || '28';
        const monthNum = parseInt(selectedNotice.date.split('-')[1] || '07', 10);
        const year = selectedNotice.date.split('-')[0] || '2025';
        const fullBnMonths = ['', 'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
        const fullEnMonths = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const formattedDate = isBn 
          ? `${toBanglaNum(day)} ${fullBnMonths[monthNum]} ${toBanglaNum(year)}`
          : `${day} ${fullEnMonths[monthNum]} ${year}`;

        const isHolidayNotice = selectedNotice.id === '1' || selectedNotice.title.includes('গ্রীষ্মকালীন') || selectedNotice.title.includes('ছুটি');

        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
            onClick={() => setSelectedNotice(null)}
          >
            <div 
              className="bg-white rounded-[28px] sm:rounded-[36px] max-w-2xl w-full p-5 sm:p-8 md:p-9 shadow-2xl border border-slate-100 relative space-y-4 my-auto animate-in zoom-in-95 duration-200"
              onClick={e => e.stopPropagation()}
            >
              {/* Circular Close Button Pinned to Top Right */}
              <button 
                onClick={() => setSelectedNotice(null)} 
                className="absolute top-4 right-4 sm:top-7 sm:right-7 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition flex items-center justify-center cursor-pointer z-10"
              >
                <X size={18} />
              </button>

              {/* Top Header Row: Icon + Pill Tag + Date */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pr-10 sm:pr-12">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#eaf7f0] text-[#00704A] border border-[#c6f0dc] flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {selectedNotice.type === 'Exam' ? <FileText size={18} /> :
                   selectedNotice.type === 'Admission' ? <GraduationCap size={18} /> :
                   selectedNotice.type === 'Event' ? <Calendar size={18} /> :
                   <Megaphone size={18} />}
                </div>

                <span className="bg-[#eaf7f0] text-[#00704A] border border-[#c6f0dc] px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  {selectedNotice.type}
                </span>

                <span className="text-[11px] sm:text-sm font-semibold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                  <Calendar size={13} className="text-slate-400" />
                  <span>{formattedDate}</span>
                </span>
              </div>

              {/* Title & Green Accent Underline */}
              <div className="pt-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-snug tracking-tight">
                  {titleText}
                </h2>
                <div className="w-12 sm:w-14 h-1 bg-[#00704A] rounded-full mt-2 sm:mt-2.5" />
              </div>

              {/* Notice Body Box */}
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#eaf7f0] text-[#00704A] border border-[#c6f0dc] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                    <FileText size={18} />
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 flex-1 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                    <p>
                      {isBn ? (
                        <>
                          এতদ্বারা <strong className="font-extrabold text-[#00704A]">এস ও এস হারম্যান মেইনার স্কুল খুলনা</strong> এর সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকদের অবগতির জন্য জানানো যাচ্ছে যে,
                        </>
                      ) : (
                        <>
                          This is to inform all teachers, students, and guardians of <strong className="font-extrabold text-[#00704A]">SOS Hermann Gmeiner School Khulna</strong> that
                        </>
                      )}
                    </p>

                    {isHolidayNotice ? (
                      <>
                        <p>{isBn ? 'বিদ্যালয়ের সকল শ্রেণি কার্যক্রম বন্ধ থাকবে:' : 'all academic classes will remain closed from'}</p>
                        
                        <div className="py-1">
                          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 py-2.5 sm:py-3 px-3.5 sm:px-6 bg-[#eaf7f0] border border-[#bbf7d0] rounded-xl sm:rounded-2xl text-slate-900 font-extrabold text-xs sm:text-sm md:text-base shadow-2xs whitespace-nowrap">
                            <Calendar size={16} className="text-[#00704A] flex-shrink-0" />
                            <span className="font-mono">{isBn ? '২৯-০৭-২০২৫' : '29-07-2025'}</span>
                            <span className="text-slate-400 font-normal">—</span>
                            <span className="font-mono">{isBn ? '০৭-০৮-২০২৫' : '07-08-2025'}</span>
                          </div>
                        </div>

                        <p>{isBn ? 'গ্রীষ্মকালীন অবকাশ ও ছুটির জন্য।' : 'for summer vacation.'}</p>
                      </>
                    ) : (
                      <p className="whitespace-pre-line text-slate-700">
                        {isBn 
                          ? (selectedNotice.content || 'উক্ত নোটিশের সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকবৃন্দকে যথাযথ নির্দেশনা অনুসরণের জন্য অনুরোধ জানানো যাচ্ছে।')
                          : (selectedNotice.contentEn || selectedNotice.content || 'All concerned teachers, students, and guardians are requested to follow the circular accordingly.')}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 sm:pt-3">
                <div className="text-[11px] sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
                  <FileText size={14} className="text-slate-400" />
                  <span>
                    {isBn ? `স্মারক: এসওএস/খুলনা/বিজ্ঞপ্তি/${selectedNotice.id}` : `Memo: SOS/KHULNA/NOTICE/${selectedNotice.id}`}
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button 
                    onClick={() => handlePrintNotice(selectedNotice)}
                    className="flex-1 sm:flex-initial bg-[#00704A] hover:bg-[#005a3c] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition active:scale-95 cursor-pointer"
                  >
                    <Printer size={15} />
                    <span>{isBn ? 'নোটিশ প্রিন্ট করুন' : 'Print Official Notice'}</span>
                  </button>

                  <button 
                    onClick={() => setSelectedNotice(null)} 
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
                  >
                    {isBn ? 'বন্ধ করুন' : 'Close'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

    </div>
  );
};

export default Notices;
