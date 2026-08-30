import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, Award, BookOpen, CheckCircle, GraduationCap, 
  Sparkles, ArrowRight, HeartHandshake, ShieldCheck, Compass 
} from 'lucide-react';

const FacultyExcellence: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Users size={15} /> {language === 'bn' ? 'শিক্ষক পরিষদ ও পাঠদান শ্রেষ্ঠত্ব' : 'Faculty Excellence'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {language === 'bn' ? 'যোগ্য, অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষক পরিষদ' : 'Qualified Faculty & Academic Leadership'}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'আমাদের অভিজ্ঞ ও উচ্চ প্রশিক্ষিত শিক্ষকবৃন্দ প্রতিটি শিক্ষার্থীর মেধা বিকাশ ও মানবিক মূল্যবোধ গঠনে পরম যত্নশীল।' 
              : 'Our dedicated, highly trained educators foster intellectual curiosity, analytical thinking, and moral character in every learner.'}
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { value: '100%', bnVal: '১০০%', label: language === 'bn' ? 'স্নাতকোত্তর ডিগ্রিধারী' : 'Post-Graduate Educators', icon: GraduationCap, color: 'emerald' },
            { value: '1 : 25', bnVal: '১ : ২৫', label: language === 'bn' ? 'শিক্ষক-শিক্ষার্থী অনুপাত' : 'Teacher-Student Ratio', icon: Users, color: 'blue' },
            { value: '35+', bnVal: '৩৫+', label: language === 'bn' ? 'অভিজ্ঞ শিক্ষক-শিক্ষিকা' : 'Experienced Educators', icon: Award, color: 'amber' },
            { value: '100%', bnVal: '১০০%', label: language === 'bn' ? 'ডিজিটাল পেডাগজি প্রশিক্ষণ' : 'Digital Pedagogy Trained', icon: Sparkles, color: 'purple' },
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left 2 Spans: Teaching Philosophy & Training */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-2.5">
                <BookOpen size={24} className="text-emerald-600" />
                {language === 'bn' ? 'আমাদের শিক্ষাদান দর্শন ও পদ্ধতি' : 'Our Teaching Philosophy & Methodology'}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {language === 'bn' 
                  ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনায় শিক্ষাদান কেবলমাত্র পাঠ্যবইয়ের মধ্যে সীমাবদ্ধ নয়। আমাদের শিক্ষকগণ প্রতিটি শিক্ষার্থীর ব্যক্তিগত আগ্রহ ও মেধার মূল্যায়ন করে সৃজনশীল ও বাস্তবমুখী শিক্ষা নিশ্চিত করেন। দুর্বল শিক্ষার্থীদের জন্য বিশেষ যত্ন ও পিছিয়ে পড়া বিষয়ে অতিরিক্ত ক্লাসের ব্যবস্থা রয়েছে।'
                  : 'At SOS Hermann Gmeiner School Khulna, education goes far beyond textbooks. Our teachers assess each student\'s individual potential, fostering creativity, problem-solving, and critical thinking. Specialized remedial classes and one-on-one academic mentoring ensure that every child thrives.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: language === 'bn' ? 'সৃজনশীল ও অংশগ্রহণমূলক পাঠদান' : 'Interactive & Participatory Learning',
                    desc: language === 'bn' ? 'ক্লাসরুমে প্রশ্নোত্তর, গ্রুপ ডিসকাশন ও ভিজ্যুয়াল লার্নিং।' : 'Classroom discussions, group projects, and interactive exercises.'
                  },
                  {
                    title: language === 'bn' ? 'বিষয়ভিত্তিক বিশেষজ্ঞ শিক্ষক' : 'Subject-Matter Specialists',
                    desc: language === 'bn' ? 'পদার্থ, রসায়ন, গণিত ও ইংরেজি বিষয়ে উচ্চতর ডিগ্রিধারী শিক্ষক।' : 'Advanced post-graduate specialists in STEM, Languages, and Arts.'
                  },
                  {
                    title: language === 'bn' ? 'নিয়মিত প্রশিক্ষণ ও কর্মশালা' : 'Continuous Faculty Training',
                    desc: language === 'bn' ? 'জাতীয় কারিকুলাম ও আধুনিক পেডাগজি বিষয়ে নিয়মিত টিচার্স ট্রেইনিং।' : 'Regular workshops on the National Curriculum and modern pedagogical tech.'
                  },
                  {
                    title: language === 'bn' ? 'মানবিক মূল্যবোধ ও মোরাল গাইডেন্স' : 'Moral Mentorship & Character Building',
                    desc: language === 'bn' ? 'নৈতিকতা, শৃঙ্খলা ও দেশপ্রেমে উদ্বুদ্ধকরণ।' : 'Nurturing integrity, discipline, empathy, and social responsibility.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Breakdown */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80">
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-5 flex items-center gap-2">
                <Compass size={22} className="text-blue-600" />
                {language === 'bn' ? 'একাডেমিক বিভাগ ও শিক্ষকমণ্ডলী' : 'Academic Departments'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: language === 'bn' ? 'বিজ্ঞান বিভাগ' : 'Science & Math', count: '12', bnCount: '১২', desc: language === 'bn' ? 'পদার্থ, রসায়ন, জীববিজ্ঞান ও উচ্চতর গণিত' : 'Physics, Chemistry, Biology & Higher Math' },
                  { name: language === 'bn' ? 'মানবিক ও সামাজিক বিজ্ঞান' : 'Humanities & Social', count: '10', bnCount: '১০', desc: language === 'bn' ? 'বাংলা, ইতিহাস, ভূগোল ও পৌরনীতি' : 'Bangla, History, Civics & Geography' },
                  { name: language === 'bn' ? 'ভাষা ও তথ্যপ্রযুক্তি' : 'Languages & ICT', count: '13', bnCount: '১৩', desc: language === 'bn' ? 'ইংরেজি, আইসিটি ও সাধারণ গণিত' : 'English, ICT & Foundational Studies' },
                ].map((dept, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center">
                    <span className="text-xl font-black text-emerald-700">{language === 'bn' ? dept.bnCount : dept.count} {language === 'bn' ? 'জন শিক্ষক' : 'Teachers'}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">{dept.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-1">{dept.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: CTA Card & Teacher Directory Link */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-800 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300">
                  <ShieldCheck size={26} />
                </div>
                <h3 className="text-xl font-extrabold leading-snug">
                  {language === 'bn' ? 'শিক্ষক তালিকা ও প্রোফাইল দেখুন' : 'Explore Faculty Directory'}
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  {language === 'bn' 
                    ? 'আমাদের সম্মানিত সকল শিক্ষক-শিক্ষিকার পূর্ণাঙ্গ নাম, পদবি, শিক্ষাগত যোগ্যতা ও যোগাযোগের তথ্য দেখতে শিক্ষক ডিরেক্টরি পরিদর্শন করুন।' 
                    : 'Browse our complete teacher profiles, designations, educational backgrounds, and subject specializations.'}
                </p>
                <Link
                  to="/teachers"
                  className="inline-flex items-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md cursor-pointer"
                >
                  <span>{language === 'bn' ? 'সকল শিক্ষক প্রোফাইল' : 'View Teacher Directory'}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <HeartHandshake size={18} className="text-rose-600" />
                {language === 'bn' ? 'অভিভাবক-শিক্ষক মতবিনিময়' : 'Parent-Teacher Engagement'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === 'bn' 
                  ? 'প্রতিটি সাময়িক পরীক্ষার পর শিক্ষার্থীদের অগ্রগতি মূল্যায়নে নিয়মিত অভিভাবক সমাবেশের আয়োজন করা হয়।' 
                  : 'Regular Parent-Teacher meetings are scheduled after every terminal exam to review student performance.'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FacultyExcellence;
