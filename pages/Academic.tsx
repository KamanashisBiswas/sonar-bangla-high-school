import React from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, BookOpen, Shirt, ShieldCheck, CheckCircle2, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academic: React.FC = () => {
  const { language, t, toBanglaNum } = useLanguage();

  const routine = [
    { period: language === 'bn' ? '১ম পিরিয়ড' : '1st Period', time: language === 'bn' ? '১০:০০ - ১০:৪৫' : '10:00 - 10:45 AM', c6: 'বাংলা', c7: 'ইংরেজি', c8: 'গণিত', c9: 'বিজ্ঞান/পদার্থ', c10: 'হিসাব/রসায়ন' },
    { period: language === 'bn' ? '২য় পিরিয়ড' : '2nd Period', time: language === 'bn' ? '১০:৪৫ - ১১:৩০' : '10:45 - 11:30 AM', c6: 'ইংরেজি', c7: 'গণিত', c8: 'বাংলা', c9: 'উচ্চতর গণিত', c10: 'পদার্থবিজ্ঞান' },
    { period: language === 'bn' ? '৩য় পিরিয়ড' : '3rd Period', time: language === 'bn' ? '১১:৩০ - ১২:১৫' : '11:30 - 12:15 PM', c6: 'গণিত', c7: 'বিজ্ঞান', c8: 'ইংরেজি', c9: 'ইংরেজি', c10: 'বাংলা' },
    { period: language === 'bn' ? 'টিফিন বিরতি' : 'Tiffin Break', time: language === 'bn' ? '১২:১৫ - ০১:০০' : '12:15 - 01:00 PM', c6: 'বিরতি', c7: 'বিরতি', c8: 'বিরতি', c9: 'বিরতি', c10: 'বিরতি' },
    { period: language === 'bn' ? '৪র্থ পিরিয়ড' : '4th Period', time: language === 'bn' ? '০১:০০ - ০১:৪৫' : '01:00 - 01:45 PM', c6: 'বিজ্ঞান', c7: 'বাংলা', c8: 'সমাজ', c9: 'জীববিজ্ঞান', c10: 'উচ্চতর গণিত' },
    { period: language === 'bn' ? '৫ম পিরিয়ড' : '5th Period', time: language === 'bn' ? '০১:৪৫ - ০২:৩০' : '01:45 - 02:30 PM', c6: 'ধর্ম', c7: 'আইসিটি', c8: 'বিজ্ঞান', c9: 'বাংলা', c10: 'আইসিটি' },
    { period: language === 'bn' ? '৬ষ্ঠ পিরিয়ড' : '6th Period', time: language === 'bn' ? '০২:৩০ - ০৩:১৫' : '02:30 - 03:15 PM', c6: 'আইসিটি', c7: 'ধর্ম', c8: 'আইসিটি', c9: 'সমাজ', c10: 'সমাজ' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen size={15} /> {language === 'bn' ? 'একাডেমিক তথ্য ও নীতিমালা' : 'Academic Guidelines & Routine'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.academic.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.academic.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Daily Class Routine Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Clock className="text-emerald-700" size={22} /> {t.academic.routineTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{t.academic.routineSubtitle}</p>
            </div>
            <Link 
              to="/downloads" 
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Download size={14} /> {language === 'bn' ? 'রুটিন ডাউনলোড করুন' : 'Download Timetable'}
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                  <th className="p-3 sm:p-4">{t.academic.period}</th>
                  <th className="p-3 sm:p-4">{t.academic.time}</th>
                  <th className="p-3 sm:p-4 text-center">{t.academic.class6}</th>
                  <th className="p-3 sm:p-4 text-center">{t.academic.class7}</th>
                  <th className="p-3 sm:p-4 text-center">{t.academic.class8}</th>
                  <th className="p-3 sm:p-4 text-center">{t.academic.class9}</th>
                  <th className="p-3 sm:p-4 text-center">{t.academic.class10}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {routine.map((row, idx) => (
                  <tr key={idx} className={row.c6 === 'বিরতি' || row.c6 === 'Break' ? 'bg-amber-50/60 font-bold text-amber-900' : 'hover:bg-slate-50'}>
                    <td className="p-3 sm:p-4 font-bold text-slate-900">{row.period}</td>
                    <td className="p-3 sm:p-4 font-semibold text-slate-500">{row.time}</td>
                    <td className="p-3 sm:p-4 text-center">{row.c6}</td>
                    <td className="p-3 sm:p-4 text-center">{row.c7}</td>
                    <td className="p-3 sm:p-4 text-center">{row.c8}</td>
                    <td className="p-3 sm:p-4 text-center">{row.c9}</td>
                    <td className="p-3 sm:p-4 text-center">{row.c10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uniform & Dress Code */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
              <Shirt className="text-emerald-700" size={24} />
              <h3 className="text-xl font-bold text-slate-900">{t.academic.dressBoys}</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা রঙের হাফ/ফুল হাতা শার্ট (বুকের বাঁ পাশে বিদ্যালয়ের মনোগ্রামযুক্ত ব্যাজ)' : 'White half/full sleeve shirt with school embroidered crest'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'নেভি ব্লু রঙের ফুল প্যান্ট ও কালো বেল্ট' : 'Navy blue formal trousers with black belt'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা কেডস ও সাদা মোজা' : 'White sneakers and white cotton socks'}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
              <Shirt className="text-emerald-700" size={24} />
              <h3 className="text-xl font-bold text-slate-900">{t.academic.dressGirls}</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'নেভি ব্লু রঙের ফ্রক/কামিজ ও সাদা পায়জামা/স্যালওয়ার' : 'Navy blue frock/kameez with white salwar'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা স্কার্ফ / ওড়না এবং বেল্ট' : 'White scarf/dupatta and school belt'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা কেডস ও সাদা মোজা' : 'White sneakers and white cotton socks'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Code of Conduct */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
            <ShieldCheck className="text-emerald-700" size={24} />
            <h3 className="text-xl font-bold text-slate-900">{t.academic.rulesTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
              <span>{language === 'bn' ? 'প্রত্যেক শিক্ষার্থীকে সকাল ৯:৪৫ মিনিটের মধ্যে বিদ্যালয়ে উপস্থিত হয়ে প্রাত্যহিক সমাবেশে অংশগ্রহণ করতে হবে।' : 'Students must arrive by 9:45 AM daily to attend the morning national assembly.'}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
              <span>{language === 'bn' ? 'বিদ্যালয় ক্যাম্পাসে মোবাইল ফোন বা কোনো ধরনের ইলেকট্রনিক ডিভাইস আনা সম্পূর্ণ নিষিদ্ধ।' : 'Mobile phones and unauthorized electronic devices are strictly prohibited on campus.'}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
              <span>{language === 'bn' ? 'বার্ষিক পরীক্ষায় অংশগ্রহণের জন্য ন্যূনতম ৭৫% ক্লাসে উপস্থিতি বাধ্যতামূলক।' : 'A minimum of 75% classroom attendance is mandatory to sit for annual/board examinations.'}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0"></span>
              <span>{language === 'bn' ? 'বিদ্যালয়ের যাবতীয় সম্পদ ও পরিষ্কার-পরিচ্ছন্নতা রক্ষা করা শিক্ষার্থীদের নৈতিক দায়িত্ব।' : 'Maintaining school cleanliness and safeguarding institutional property is every student responsibility.'}</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academic;
