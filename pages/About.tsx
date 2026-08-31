import React from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  BookOpen, Award, Trophy, Target, Compass, Sparkles, 
  Building, Clock, Users, ShieldCheck, Eye, Laptop, 
  FlaskConical, TreePine, Calendar, Quote, ExternalLink, School
} from 'lucide-react';

const About: React.FC = () => {
  const { settings, teachers, students } = useData();
  const { language, t, toBanglaNum } = useLanguage();

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (100% SEAMLESS WITH MINT BACKGROUND) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 mb-8">
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
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <span>{language === 'bn' ? 'ঐতিহ্য ও ইতিহাস' : 'HERITAGE & HISTORY'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {language === 'bn' ? 'আমাদের প্রতিষ্ঠান পরিচিতি' : 'About Our Institution'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {language === 'bn' 
                ? 'জ্ঞান, সততা ও শৃঙ্খলার আলো ছড়িয়ে অবিরত পথচলা ' 
                : 'Spreading the light of quality education and moral discipline continuously '}
              <strong className="text-emerald-700 font-extrabold">
                {language === 'bn' ? '১৯৮৭ সাল থেকে।' : 'since 1987.'}
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. HISTORY & HERITAGE (2 Columns: Narrative + 4 Stat Cards) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-1 rounded-xl text-xs font-bold">
                <Calendar size={13} className="text-emerald-700" />
                <span>{language === 'bn' ? 'স্থাপিত: ১৯৮৭' : 'ESTD: 1987'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {language === 'bn' ? 'আমাদের ইতিহাস ও গৌরবময় ঐতিহ্য' : 'Our History & Heritage'}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'এস ও এস চিলড্রেন্স ভিলেজ ইন্টারন্যাশনালের প্রতিষ্ঠাতা ড. হারম্যান মেইনারের নামানুসারে এ বিদ্যাপীঠের নামকরণ করা হয়েছে। ১৯৮৭ সালে এস ও এস চিলড্রেন্স ভিলেজ খুলনা ক্যাম্পাসে সুবিধাবঞ্চিত ও বাইরের সাধারণ শিক্ষার্থীদের মাঝে মানসম্মত শিক্ষা বিস্তারের লক্ষ্যে বিদ্যালয়টি প্রতিষ্ঠিত হয়।'
                  : `The very name of the School bears the name of the founder father of SOS Children's Village International, Dr. Hermann Gmeiner. The School was established in 1987 with a view to imparting quality education to the Students of both inside and outside of the SOS Children's Village, Khulna.`
                }
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'bn'
                  ? 'বিদ্যালয়ের মূলনীতি হলো "সততাই শিক্ষা, শিক্ষাই শান্তি এবং শান্তিই প্রগতি"। মেধা, শৃঙ্খলা ও সততাই এখানে ভর্তির মূল ভিত্তি। বিদ্যালয়টিতে প্রেপ-১ হতে দশম শ্রেণি পর্যন্ত বাংলা মাধ্যমে ইংরেজি পাঠে বিশেষ গুরুত্বসহ পাঠদান পরিচালিত হয়।'
                  : 'The main criteria for entry is merit, discipline and integrity. The motto of the school is "Honesty is education, education is peace and peace is progress." The institution follows the curriculum of NCTB and BISE Jessore with special emphasis on English language proficiency.'
                }
              </p>
            </div>

            {/* Right 2x2 Stat Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* Stat 1: Students */}
              <div className="bg-slate-50/80 hover:bg-emerald-50/60 transition p-5 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 shadow-xs">
                  <Users size={20} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                  {toBanglaNum(students.length > 0 ? students.length : 1200)}
                </h4>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {language === 'bn' ? 'মোট শিক্ষার্থী' : 'TOTAL STUDENTS'}
                </span>
              </div>

              {/* Stat 2: Teachers */}
              <div className="bg-slate-50/80 hover:bg-sky-50/60 transition p-5 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-2 shadow-xs">
                  <Laptop size={20} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                  {toBanglaNum(teachers.length > 0 ? teachers.length : 25)}
                </h4>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {language === 'bn' ? 'শিক্ষক ও শিক্ষিকা' : 'TEACHING FACULTY'}
                </span>
              </div>

              {/* Stat 3: Pass Rate */}
              <div className="bg-slate-50/80 hover:bg-amber-50/60 transition p-5 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-2 shadow-xs">
                  <Trophy size={20} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-amber-600 font-mono">
                  {toBanglaNum('98.5%')}
                </h4>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {language === 'bn' ? 'গড় পাস হার' : 'AVERAGE PASS RATE'}
                </span>
              </div>

              {/* Stat 4: Heritage */}
              <div className="bg-slate-50/80 hover:bg-purple-50/60 transition p-5 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-2 shadow-xs">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-purple-700 font-mono">
                  {toBanglaNum('38+')}
                </h4>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {language === 'bn' ? 'বছরের গৌরবময় ঐতিহ্য' : 'YEARS HERITAGE'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LEADERSHIP MESSAGES: CHAIRMAN & PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Card 1: Chairman Message */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0 shadow-xs">
                  “
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {language === 'bn' ? 'সভাপতির বাণী' : 'Message from the Chairman'}
                </h3>
              </div>

              {/* Photo & Quote Content */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-24 sm:w-28 flex-shrink-0 text-center sm:text-left">
                  <img 
                    src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                    alt="Chairman" 
                    className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl object-cover border border-slate-200 shadow-sm mb-2.5 mx-auto sm:mx-0"
                  />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                    {language === 'bn' ? (settings.chairmanName || "মাকসুদা সুলতানা") : "Maksuda Sultana"}
                  </h4>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-0.5">
                    {language === 'bn' ? 'সভাপতি, পরিচালনা কমিটি' : 'Chairman, Governing Body'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                  </p>
                </div>

                {/* Quote Bubble Card */}
                <div className="flex-1 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-100/90 text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  "{language === 'bn' 
                    ? (settings.chairmanMessage || 'এস ও এস হারম্যান মেইনার স্কুল খুলনা এস ও এস চিলড্রেন্স ভিলেজ খুলনার সবুজ আঙিনায় প্রতিষ্ঠিত। মানসম্মত শিক্ষা ও শিক্ষার পরিবেশ নিশ্চিত করার লক্ষ্যে বিদ্যালয়টি প্রতিষ্ঠিত। বিদ্যালয়ের সার্বিক কার্যক্রম পরিচালিত হচ্ছে সেই অভিলক্ষ্যে। শিক্ষার্থীদের মানবিক চেতনায় উদ্বুদ্ধ করতে সহপাঠ্যক্রম চর্চার প্রতি বিশেষ গুরুত্বারোপ করা হয়। দক্ষ শিক্ষকমণ্ডলী, শিক্ষার্থীবান্ধব পরিবেশ ও শিশু সুরক্ষা নীতিমালা অনুসরণের মাধ্যমে শিক্ষার্থী ও শিক্ষকের প্রীতিমধুর সম্পর্ক বিদ্যালয়ের ঐতিহ্য।')
                    : "SOS Hermann Gmeiner School Khulna is established within the verdant campus of SOS Children's Village Khulna with a steadfast mission to ensure quality education and a wholesome learning atmosphere. All institutional initiatives are driven toward that goal. We lay special emphasis on co-curricular activities to awaken humanistic and moral values in learners. Guided by qualified faculty, a child-friendly environment, and comprehensive safeguarding policies, cordial teacher-student harmony remains the enduring hallmark of our institution."
                  }"
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Principal Message */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-serif text-sm font-bold flex-shrink-0 shadow-xs">
                  “
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {language === 'bn' ? 'প্রধান শিক্ষকের বাণী' : 'Message from the Principal'}
                </h3>
              </div>

              {/* Photo & Quote Content */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-24 sm:w-28 flex-shrink-0 text-center sm:text-left">
                  <img 
                    src={settings.headmasterImage || "https://soshgskhulna.edu.bd/media/181/Picture_PP.jpg"} 
                    alt="Principal" 
                    className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl object-cover border border-slate-200 shadow-sm mb-2.5 mx-auto sm:mx-0"
                  />
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                    {language === 'bn' ? (settings.headmasterName || "ইন্দ্রজিৎ কুমার মণ্ডল") : "Indrajit Kumar Mondal"}
                  </h4>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-0.5">
                    {language === 'bn' ? 'প্রধান শিক্ষক' : 'Principal'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
                  </p>
                </div>

                {/* Quote Bubble Card */}
                <div className="flex-1 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-100/90 text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  "{language === 'bn'
                    ? (settings.headmasterMessage || 'এস ও এস হারম্যান মেইনার স্কুল খুলনা মানসম্মত শিক্ষা নিশ্চিতকরণের প্রতিশ্রুতি নিয়ে ১৯৮৭ সালে প্রতিষ্ঠিত হয়। বিদ্যালয়টি পরিচালনায় রয়েছে দক্ষ গভর্নিং বডি ও প্রশিক্ষণপ্রাপ্ত নিবেদিতপ্রাণ শিক্ষকবৃন্দ। বিদ্যালয়ে শিক্ষার্থীবান্ধব ও আনন্দময় পাঠদান উপযোগী পরিবেশ নিশ্চিত করা হয়েছে। শিক্ষক, শিক্ষার্থী, অভিভাবক ও শুভানুধ্যায়ীদের সহযোগিতায় নৈতিক মূল্যবোধসম্পন্ন, সৎ, যোগ্য, দক্ষ ও দেশপ্রেমিক মানবসম্পদ সৃষ্টিই আমাদের মূল লক্ষ্য।')
                    : 'SOS Hermann Gmeiner School Khulna was founded in 1987 with an uncompromising commitment to educational excellence. The institution is guided by a visionary Governing Body and a team of professionally trained, devoted educators. We have fostered an inspiring, joyful, and child-centered learning environment. With collective support from teachers, students, guardians, and patrons, our paramount mission is nurturing morally upright, honest, accomplished, and patriotic global citizens.'
                  }"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. EXPANDED VISION & MISSION (Larger Prominent Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-xs border border-emerald-100">
                  <Eye size={30} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 block">OUR FUTURE OUTLOOK</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {language === 'bn' ? 'আমাদের ভিশন' : 'Our Vision'}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {language === 'bn'
                  ? 'একটি সুশিক্ষিত, প্রযুক্তিদক্ষ, আত্মবিশ্বাসী এবং মানবিক মূল্যবোধসম্পন্ন ভবিষ্যৎ প্রজন্ম গড়ে তোলা, যারা সততা ও শৃঙ্খলা বজায় রেখে দেশকে নেতৃত্ব দিতে এবং আন্তর্জাতিক অঙ্গনে সাফল্য অর্জন করতে সক্ষম হবে।'
                  : 'To nurture educated, technologically skilled, confident, and morally grounded future generations who will lead the nation with honesty, integrity, and discipline.'}
              </p>
            </div>
            
            {/* Value Highlights */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '✨ নৈতিক মূল্যবোধ' : '✨ Moral Values'}
              </span>
              <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '🎓 শিক্ষাগত উৎকর্ষ' : '🎓 Academic Excellence'}
              </span>
              <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '🌟 নেতৃত্ব ও সততা' : '🌟 Leadership & Integrity'}
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 shadow-xs border border-sky-100">
                  <Target size={30} />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-sky-700 block">OUR PURPOSE & VALUES</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    {language === 'bn' ? 'মিশন ও মূলনীতি' : 'Mission & Core Motto'}
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {language === 'bn'
                  ? 'মানসম্মত আধুনিক পাঠ্যক্রম, সৃজনশীল পাঠদান, আধুনিক ল্যাব, বিজ্ঞানাগার ও বৈচিত্র্যময় সহশিক্ষা কার্যক্রমের মাধ্যমে প্রতিটি শিক্ষার্থীর মেধার পূর্ণ বিকাশ সাধন এবং আদর্শ নাগরিক হিসেবে গড়ে তোলা।'
                  : 'Delivering holistic education through modern pedagogies, STEM laboratories, multimedia smart classrooms, and extensive co-curricular programs for all-round student development.'}
              </p>
            </div>

            {/* Value Highlights */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
              <span className="bg-sky-50 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '🔬 আধুনিক বিজ্ঞান ও প্রযুক্তি' : '🔬 STEM & Technology'}
              </span>
              <span className="bg-sky-50 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '📚 মানবিক ও সহশিক্ষা' : '📚 Holistic Development'}
              </span>
              <span className="bg-sky-50 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                {language === 'bn' ? '🤝 সমতা ও সেবা' : '🤝 Inclusivity & Care'}
              </span>
            </div>
          </div>
        </div>

        {/* 5. CAMPUS & FACILITIES (4 Columns Row) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <School size={20} />
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {language === 'bn' ? 'ক্যাম্পাস ও সুযোগ-সুবিধা' : 'Campus & Facilities'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { 
                icon: Laptop,
                color: 'text-emerald-700 bg-emerald-50 border-emerald-100',
                title: language === 'bn' ? 'ডিজিটাল কম্পিউটার ল্যাব' : 'Digital Computer Lab', 
                desc: language === 'bn' ? 'হাই-স্পিড ইন্টারনেট ও ৩০+ কম্পিউটার' : 'High-speed Internet & 30+ PCs' 
              },
              { 
                icon: FlaskConical,
                color: 'text-teal-700 bg-teal-50 border-teal-100',
                title: language === 'bn' ? 'আধুনিক বিজ্ঞান ল্যাব' : 'Modern Science Lab', 
                desc: language === 'bn' ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের সরঞ্জাম' : 'Modern Physics, Chem & Biology kits' 
              },
              { 
                icon: BookOpen,
                color: 'text-sky-700 bg-sky-50 border-sky-100',
                title: language === 'bn' ? 'সমৃদ্ধ লাইব্রেরি' : 'School Library', 
                desc: language === 'bn' ? 'বইয়ের বিশাল সংগ্রহ ও পড়ার কর্নার' : 'Vast collection of books & reading corner' 
              },
              { 
                icon: TreePine,
                color: 'text-emerald-700 bg-emerald-50 border-emerald-100',
                title: language === 'bn' ? 'সবুজ খেলার মাঠ' : 'Green Athletic Grounds', 
                desc: language === 'bn' ? 'ক্রীড়া, শারীরিক শিক্ষা ও সহশিক্ষা প্রাঙ্গণ' : 'Sports, athletics & co-curricular area' 
              },
            ].map((facility, i) => (
              <div 
                key={i} 
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex items-start gap-3.5 hover:bg-white hover:shadow-md transition duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${facility.color} flex items-center justify-center flex-shrink-0 shadow-xs border`}>
                  <facility.icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-0.5 leading-snug">
                    {facility.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
