import React from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Award, CheckCircle, Trophy, Target, Compass, Sparkles, Building, Clock, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

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
                {language === 'bn' 
                  ? 'এস ও এস চিলড্রেন্স ভিলেজ ইন্টারন্যাশনালের প্রতিষ্ঠাতা ড. হারম্যান মেইনারের নামানুসারে এ বিদ্যাপীঠের নামকরণ করা হয়েছে। ১৯৮৭ সালে এস ও এস চিলড্রেন্স ভিলেজ খুলনা ক্যাম্পাসে সুবিধাবঞ্চিত ও বাইরের সাধারণ শিক্ষার্থীদের মাঝে মানসম্মত শিক্ষা বিস্তারের লক্ষ্যে বিদ্যালয়টি প্রতিষ্ঠিত হয়।'
                  : `The very name of the School bears the name of the founder father of SOS Children's Village International, Dr. Hermann Gmeiner. The School was established in 1987 with a view to imparting quality education to the Students of both inside and outside of the SOS Children's Village, Khulna.`
                }
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'বিদ্যালয়ের মূলনীতি হলো "সততাই শিক্ষা, শিক্ষাই শান্তি এবং শান্তিই প্রগতি" (Honesty is education, education is peace and peace is progress)। মেধা, শৃঙ্খলা ও সততাই এখানে ভর্তির মূল ভিত্তি। বিদ্যালয়টিতে প্রেপ-১ হতে দশম শ্রেণি পর্যন্ত বাংলা মাধ্যমে ইংরেজি পাঠে বিশেষ গুরুত্বসহ পাঠদান পরিচালিত হয়।'
                  : 'The main criteria for entry is merit, discipline and Integrity. The motto of the school is "Honesty is education, education is peace and peace is progress." The institution follows the curriculum of NCTB and BISE Jessore with special emphasis on English language proficiency.'
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
                <span className="text-3xl font-black text-purple-700 block">{toBanglaNum('38+')}</span>
                <span className="text-xs font-bold text-slate-500 mt-1 uppercase">{language === 'bn' ? 'বছরের ঐতিহ্য' : 'Years Heritage'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Statements: Chairman & Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Chairman Block */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                <img 
                  src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                  alt="Chairman" 
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-black text-slate-900 text-base">
                    {language === 'bn' ? (settings.chairmanName || "মাকসুদা সুলতানা") : (settings.chairmanName === 'মাকসুদা সুলতানা' ? 'Maksuda Sultana' : settings.chairmanName || 'Maksuda Sultana')}
                  </h4>
                  <p className="text-xs text-amber-700 font-bold">{language === 'bn' ? 'সভাপতি, গভর্নিং বডি' : 'Chairman, Governing Body'}</p>
                  <p className="text-[10px] text-slate-400">{language === 'bn' ? 'প্রকল্প পরিচালক, এস ও এস চিলড্রেন্স ভিলেজ খুলনা' : "Project Director, SOS Children's Village Khulna"}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "{settings.chairmanMessage}"
              </p>
            </div>
          </div>

          {/* Principal Block */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                <img 
                  src={settings.headmasterImage} 
                  alt="Principal" 
                  className="w-16 h-16 rounded-2xl object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-black text-slate-900 text-base">
                    {language === 'bn' ? settings.headmasterName : (settings.headmasterName === 'ইন্দ্রজিৎ কুমার মন্ডল' ? 'Indrajit Kumar Mondal' : settings.headmasterName === 'মোহাম্মদ রফিকুল ইসলাম' ? 'Mohammad Rafiqul Islam' : settings.headmasterName)}
                  </h4>
                  <p className="text-xs text-emerald-800 font-bold">{t.adminPage.headmaster}</p>
                  <p className="text-[10px] text-slate-400">{language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                "{settings.headmasterMessage}"
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{language === 'bn' ? 'আমাদের ভিশন (Vision)' : 'Our Vision'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'একটি সুশিক্ষিত, প্রযুক্তিদক্ষ, আত্মবিশ্বাসী এবং মানবিক মূল্যবোধসম্পন্ন ভবিষ্যৎ প্রজন্ম গড়ে তোলা, যারা সততা ও শৃঙ্খলা বজায় রেখে জাতীয় ও আন্তর্জাতিক অঙ্গনে নেতৃত্ব দিতে সক্ষম হবে।'
                  : 'To nurture educated, technologically skilled, confident, and morally grounded future generations who will lead the nation with honesty and discipline.'
                }
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{language === 'bn' ? 'আমাদের মিশন ও মূলনীতি' : 'Mission & Core Motto'}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'মানসম্মত পাঠ্যক্রম, সৃজনশীল পাঠদান, আধুনিক ল্যাব, বিজ্ঞানাগার ও বৈচিত্র্যময় সহশিক্ষা কার্যক্রমের মাধ্যমে প্রতিটি শিক্ষার্থীর বুদ্ধিবৃত্তিক ও নৈতিক মেধার পূর্ণ বিকাশ সাধন।'
                  : 'Delivering holistic education through modern pedagogies, STEM laboratories, multimedia smart classrooms, and extensive co-curricular programs.'
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
              { title: language === 'bn' ? 'বিজ্ঞানাগার (Science Lab)' : 'Modern Science Lab', desc: language === 'bn' ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের আধুনিক সরঞ্জাম' : 'Modern Physics, Chem & Biology kits' },
              { title: language === 'bn' ? 'সমৃদ্ধ লাইব্রেরি' : 'School Library', desc: language === 'bn' ? 'তথ্যবহুল বই ও শিশুবান্ধব পড়ার পরিবেশ' : 'Vast collection of books & reading corner' },
              { title: language === 'bn' ? 'সবুজ প্রাঙ্গণ ও খেলার মাঠ' : 'Green Athletic Grounds', desc: language === 'bn' ? 'ক্রীড়া প্রতিযোগিতা ও শারীরিক শিক্ষার সুযোগ' : 'Sports, athletics & co-curricular area' },
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
