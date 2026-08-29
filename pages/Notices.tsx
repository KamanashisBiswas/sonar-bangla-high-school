import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Notice } from '../types';
import { Bell, Search, Calendar, Tag, ChevronRight, FileText, X } from 'lucide-react';

const Notices: React.FC = () => {
  const { notices } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (notice.content && notice.content.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || notice.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Bell size={15} /> {language === 'bn' ? 'বিজ্ঞপ্তি ও নোটিশ বোর্ড' : 'Notice Board'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.notices.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.notices.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter & Search Controls */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            {[
              { id: 'all', label: t.home.tabAll },
              { id: 'general', label: t.home.tabGeneral },
              { id: 'exam', label: t.home.tabExam },
              { id: 'admission', label: t.home.tabAdmission },
              { id: 'event', label: t.home.tabEvent },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-xl font-bold transition flex-shrink-0 cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.notices.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm outline-none transition font-medium"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl text-center border border-slate-200">
              <Bell size={40} className="mx-auto text-slate-300 mb-3" />
              <h4 className="text-base font-bold text-slate-700">{t.notices.noNotices}</h4>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div 
                key={notice.id} 
                onClick={() => setSelectedNotice(notice)}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col items-center justify-center flex-shrink-0 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <span className="text-lg font-black leading-tight">{toBanglaNum(notice.date.split('-')[2] || '01')}</span>
                    <span className="text-[10px] font-bold uppercase">{toBanglaNum(notice.date.split('-')[1] || '01')}</span>
                  </div>

                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase mb-1.5 ${
                      notice.type === 'Exam' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                      notice.type === 'Admission' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                      'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {notice.type}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition leading-snug">
                      {notice.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                      <span>{t.downloads.dateCol}: {toBanglaNum(notice.date)}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs font-bold text-emerald-700 group-hover:underline">
                    {language === 'bn' ? 'বিস্তারিত দেখুন' : 'Read Details'}
                  </span>
                  <ChevronRight size={16} className="text-emerald-700 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notice Details Modal */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedNotice(null)}>
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedNotice(null)} 
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 transition"
              >
                <X size={18} />
              </button>

              <div className="mb-4">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                  {selectedNotice.type}
                </span>
                <span className="text-xs text-slate-400 font-semibold ml-3">{toBanglaNum(selectedNotice.date)}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-snug">
                {selectedNotice.title}
              </h2>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-6 max-h-96 overflow-y-auto">
                {selectedNotice.content || (language === 'bn' ? 'উক্ত নোটিশের সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকবৃন্দকে যথাযথ নির্দেশনা অনুসরণের জন্য অনুরোধ জানানো যাচ্ছে।' : 'All concerned teachers, students, and guardians are requested to follow the circular accordingly.')}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedNotice(null)} 
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  {t.notices.closeBtn}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Notices;
