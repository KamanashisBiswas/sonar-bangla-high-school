import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, Search, FileText, Calendar, HardDrive } from 'lucide-react';

const Downloads: React.FC = () => {
  const { downloads } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Download size={15} /> {language === 'bn' ? 'প্রাতিষ্ঠানিক ফাইল ও রুটিন' : 'Download Center'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.downloads.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.downloads.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            {['all', 'রুটিন', 'সিলেবাস', 'ছুটির তালিকা', 'ফরম'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold transition flex-shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat === 'all' ? t.home.tabAll : cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.downloads.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm outline-none transition font-medium"
            />
          </div>
        </div>

        {/* Downloads Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                  <th className="p-4 sm:p-5">{t.downloads.titleCol}</th>
                  <th className="p-4 sm:p-5 text-center">{t.downloads.categoryCol}</th>
                  <th className="p-4 sm:p-5">{t.downloads.dateCol}</th>
                  <th className="p-4 sm:p-5">{t.downloads.sizeCol}</th>
                  <th className="p-4 sm:p-5 text-right">{t.downloads.actionCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDownloads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-slate-400 font-semibold">
                      {t.notices.noNotices}
                    </td>
                  </tr>
                ) : (
                  filteredDownloads.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                          <FileText size={18} />
                        </div>
                        <span>{item.title}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-lg text-xs font-semibold">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500 font-medium">{toBanglaNum(item.date)}</td>
                      <td className="p-4 sm:p-5 text-slate-600 font-bold">{toBanglaNum(item.size)}</td>
                      <td className="p-4 sm:p-5 text-right">
                        <a
                          href={item.fileUrl}
                          download
                          className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-700 text-emerald-800 hover:text-white border border-emerald-200 hover:border-emerald-700 px-3.5 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer shadow-sm"
                        >
                          <Download size={13} /> {t.downloads.downloadBtn}
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Downloads;
