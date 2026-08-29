import React from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Award, CheckCircle, Trophy, Target, Compass, Sparkles, Building, Clock, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const { settings, teachers, students } = useData();
  const { language, t, toBanglaNum } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={15} /> {language === 'bn' ? 'ঐতিহ্য ও পথচলা' : 'Heritage & History'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.about.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.about.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* History Card with Stats */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                {t.topbar.estd}: {toBanglaNum(settings.establishedYear)}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {t.about.historyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn' ? settings.aboutUsText : `Sonar Bangla High School was established with a vision to impart quality and value-based education. Over the past decades, it has evolved into a premier secondary academic institution distinguished for academic rigor, modern amenities, and character development.`}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'বিদ্যালয়টিতে বর্তমানে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত সহশিক্ষা কার্যক্রম চালু রয়েছে। সুসজ্জিত বিজ্ঞানাগার, সমৃদ্ধ কম্পিউটার ল্যাব ও সুবিশাল খেলার মাঠ শিক্ষার্থীদের সামগ্রিক মেধা বিকাশে কার্যকর ভূমিকা পালন করছে।'
                  : 'The school currently runs secondary co-educational programs from Class 6 to Class 10 with dedicated science laboratories, a rich computer lab, multimedia classrooms, and spacious athletic grounds.'
                }
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                <span className="text-3xl font-black text-emerald-700 block">{toBanglaNum(students.length)}</span>
                <span className="text-xs font-bold text-slate-500 mt-1 uppercase">{t.home.studentsCount}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                <span className="text-3xl font-black text-blue-700 block">{toBanglaNum(teachers.length)}</span>
                <span className="text-xs font-bold text-slate-500 mt-1 uppercase">{t.teachers.tabTeachers}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                <span className="text-3xl font-black text-amber-600 block">{toBanglaNum('98.5%')}</span>
                <span className="text-xs font-bold text-slate-500 mt-1 uppercase">{t.home.passRate}</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                <span className="text-3xl font-black text-purple-700 block">{toBanglaNum('30+')}</span>
                <span className="text-xs font-bold text-slate-500 mt-1 uppercase">{language === 'bn' ? 'বছরের ঐতিহ্য' : 'Years Experience'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{language === 'bn' ? 'আমাদের ভিশন (লক্ষ্য)' : 'Our Vision'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'একটি সুশিক্ষিত, প্রযুক্তিদক্ষ, আত্মবিশ্বাসী এবং নৈতিক মূল্যবোধসম্পন্ন ভবিষ্যৎ প্রজন্ম গড়ে তোলা, যারা জাতীয় ও আন্তর্জাতিক পর্যায়ে দেশের মুখ উজ্জ্বল করবে।'
                  : 'To nurture educated, technologically skilled, confident, and morally grounded future generations who will contribute meaningfully to the nation and the world.'
                }
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{language === 'bn' ? 'আমাদের মিশন (উদ্দেশ্য)' : 'Our Mission'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'আধুনিক পাঠ্যক্রম, সৃজনশীল পাঠদান পদ্ধতি, আধুনিক ল্যাব ও সাংস্কৃতিক কার্যক্রমের সমন্বয়ে প্রতিটি শিক্ষার্থীর অন্তর্নিহিত প্রতিভার সর্বোচ্চ বিকাশ সাধন করা।'
                  : 'To unlock the full potential of every student through modern pedagogical approaches, multimedia classrooms, STEM laboratories, and vibrant co-curricular activities.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Building className="text-emerald-700" size={24} /> {t.about.facilitiesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: language === 'bn' ? 'ডিজিটাল কম্পিউটার ল্যাব' : 'Digital Computer Lab', desc: language === 'bn' ? 'হাই-স্পিড ইন্টারনেট ও ৩০+ কম্পিউটার' : 'High-speed Internet & 30+ PCs' },
              { title: language === 'bn' ? 'বিজ্ঞানাগার' : 'Science Laboratory', desc: language === 'bn' ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের আধুনিক সরঞ্জাম' : 'Modern Physics, Chem & Biology kits' },
              { title: language === 'bn' ? 'কেন্দ্রীয় লাইব্রেরি' : 'Central Library', desc: language === 'bn' ? '৫,০০০+ বই ও তথ্যসমৃদ্ধ পাঠাগার' : '5,000+ books & periodicals' },
              { title: language === 'bn' ? 'খেলার মাঠ ও স্পোর্টস' : 'Spacious Play Ground', desc: language === 'bn' ? 'ক্রিকেট, ফুটবল ও বার্ষিক ক্রীড়া প্রতিযোগিতা' : 'Cricket, Football & Athletic track' },
            ].map((facility, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 text-sm mb-1">{facility.title}</h4>
                <p className="text-xs text-slate-500">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
