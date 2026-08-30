import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Trophy, Award, GraduationCap, CheckCircle, 
  Sparkles, ArrowRight, BarChart3, Star, Target 
} from 'lucide-react';

const AcademicBrilliance: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy size={15} /> {language === 'bn' ? 'সাফল্য ও গৌরবময় ঐতিহ্য' : 'Tradition of Academic Excellence'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {language === 'bn' ? 'একাডেমিক সাফল্য ও শতভাগ পাসের ঐতিহ্য' : 'Academic Brilliance & Landmark Achievements'}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মাধ্যমিক ও জুনিয়র বৃত্তি পরীক্ষায় ধারাবাহিক শতভাগ পাসের হার ও উল্লেখযোগ্য সংখ্যক জিপিএ ৫.০০ অর্জনের অনন্য রেকর্ড।' 
              : 'A proud legacy of 100% board examination pass rates, stellar GPA 5.00 tallies, government talentpool scholarships, and Olympiad medals.'}
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { value: '100%', bnVal: '১০০%', label: language === 'bn' ? 'এসএসসি পাসের হার' : 'SSC Board Pass Rate', icon: Trophy, color: 'amber' },
            { value: '85%+', bnVal: '৮৫%+', label: language === 'bn' ? 'জিপিএ ৫.০০ ও এ-গ্রেড' : 'GPA 5.00 & A-Grades', icon: Star, color: 'emerald' },
            { value: '1987', bnVal: '১৯৮৭', label: language === 'bn' ? 'প্রতিষ্ঠাকালীন ঐতিহ্য' : 'Estd & Legacy', icon: GraduationCap, color: 'blue' },
            { value: '1000+', bnVal: '১০০০+', label: language === 'bn' ? 'সফল প্রাক্তন শিক্ষার্থী' : 'Alumni Across Top Varsities', icon: Target, color: 'purple' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm text-center">
              <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mx-auto mb-3 shadow-inner`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{language === 'bn' ? stat.bnVal : stat.value}</h3>
              <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Board Results Table & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <BarChart3 size={24} className="text-amber-600" />
              {language === 'bn' ? 'বিগত বছরসমূহের এসএসসি পরীক্ষার ফলাফল' : 'SSC Board Examination Performance Records'}
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3 sm:p-4 rounded-l-xl">{language === 'bn' ? 'পরীক্ষার বছর' : 'Exam Year'}</th>
                    <th className="p-3 sm:p-4">{language === 'bn' ? 'মোট পরীক্ষার্থী' : 'Examinees'}</th>
                    <th className="p-3 sm:p-4">{language === 'bn' ? 'উত্তীর্ণ' : 'Passed'}</th>
                    <th className="p-3 sm:p-4">{language === 'bn' ? 'জিপিএ ৫.০০' : 'GPA 5.00'}</th>
                    <th className="p-3 sm:p-4 rounded-r-xl">{language === 'bn' ? 'পাসের হার' : 'Pass Rate'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { year: '2024', bnYear: '২০২৪', total: '128', bnTotal: '১২৮', passed: '128', bnPassed: '১২৮', gpa5: '72', bnGpa5: '৭২', rate: '100%' },
                    { year: '2023', bnYear: '২০২৩', total: '115', bnTotal: '১১৫', passed: '115', bnPassed: '১১৫', gpa5: '64', bnGpa5: '৬৪', rate: '100%' },
                    { year: '2022', bnYear: '২০২২', total: '120', bnTotal: '১২০', passed: '120', bnPassed: '১২০', gpa5: '68', bnGpa5: '৬৮', rate: '100%' },
                    { year: '2021', bnYear: '২০২১', total: '110', bnTotal: '১১০', passed: '110', bnPassed: '১১০', gpa5: '59', bnGpa5: '৫৯', rate: '100%' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-amber-50/40 transition">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">{language === 'bn' ? row.bnYear : row.year}</td>
                      <td className="p-3 sm:p-4">{language === 'bn' ? row.bnTotal : row.total}</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-bold">{language === 'bn' ? row.bnPassed : row.passed}</td>
                      <td className="p-3 sm:p-4 font-extrabold text-amber-600">{language === 'bn' ? row.bnGpa5 : row.gpa5}</td>
                      <td className="p-3 sm:p-4 font-black text-emerald-600">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Key Pillars to Success & CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-600 to-orange-800 text-white p-6 sm:p-8 rounded-3xl shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-200">
                <Award size={26} />
              </div>
              <h3 className="text-xl font-extrabold leading-snug">
                {language === 'bn' ? 'অনলাইন ফলাফল সার্চ করুন' : 'Search Exam Results Online'}
              </h3>
              <p className="text-xs text-amber-100/90 leading-relaxed">
                {language === 'bn' 
                  ? 'আপনার ক্লাস, রোল ও বছর সিলেক্ট করে সাময়িক ও বার্ষিক পরীক্ষার মার্কশিট সরাসরি অনলাইনে দেখুন।' 
                  : 'Look up student terminal and annual report cards directly with instant GPA and grade breakdown.'}
              </p>
              <Link
                to="/result"
                className="inline-flex items-center gap-2 bg-white text-amber-900 hover:bg-amber-50 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md cursor-pointer"
              >
                <span>{language === 'bn' ? 'ফলাফল সার্চ পোর্টাল' : 'Open Result Portal'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles size={18} className="text-amber-500" />
                {language === 'bn' ? 'বৃত্তি ও মেধা পুরস্কার' : 'Scholarships & Talent Awards'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === 'bn' 
                  ? 'প্রতি বছর সরকারি ট্যালেন্টপুল বৃত্তি এবং এস ও এস ফাউন্ডেশন মেধা অনুদানে আমাদের শিক্ষার্থীরা শীর্ষ স্থান অর্জন করে।' 
                  : 'Every academic cycle, our students secure top positions in government talentpool scholarships and national Olympiads.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AcademicBrilliance;
