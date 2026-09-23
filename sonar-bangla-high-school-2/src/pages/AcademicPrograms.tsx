import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Laptop,
  Library,
  Target,
  Users,
  Compass,
  FileText,
  Calendar,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard
} from '../components/ui/MotionComponents';

export const AcademicPrograms: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'junior' | 'secondary'>('all');

  const levels = [
    {
      id: 'primary',
      name: isBn ? 'প্রাথমিক শিক্ষা শাখা' : 'Primary Education Wing',
      classes: isBn ? `${toBanglaNum(1)}ম থেকে ${toBanglaNum(5)}ম শ্রেণি` : 'Class 1 to Class 5',
      badge: isBn ? 'ভিত্তি পর্যায়' : 'Foundation Years',
      description: isBn
        ? 'আনন্দময় ও সক্রিয় অংশগ্রহণের মাধ্যমে শিশুদের কৌতূহল, ভাষা জ্ঞান, গাণিতিক যুক্তি, সৃজনশীল প্রকাশ এবং নৈতিক চরিত্র গঠন করা হয়।'
        : 'Nurturing curiosity, foundational literacy, mathematical reasoning, creative expression, and strong moral character through joyful, participatory learning.',
      features: isBn
        ? [
            'বাংলা ও ইংরেজিতে কার্যকর বর্ণজ্ঞান ও ভাষাদক্ষতার ভিত্তি',
            'বাস্তবধর্মী প্রাথমিক গণিত ও যৌক্তিক চিন্তার মজার অনুশীলন',
            'প্রাথমিক বিজ্ঞান পর্যবেক্ষণ ও পরিবেশ বিষয়ক পাঠদান',
            'নৈতিক শিক্ষা, শিষ্টাচার, নাগরিকতাবোধ ও স্বাস্থ্য সচেতনতা',
            'সৃজনশীল শিল্পকলা, চারু-কারুকলা এবং গল্প বলা অধিবেশন'
          ]
        : [
            'Activity-based foundational literacy in Bangla and English',
            'Practical elementary mathematics and logical reasoning puzzles',
            'Elementary science experiments and environmental studies',
            'Moral education, values, civic sense, and physical wellness',
            'Creative arts, crafts, and interactive storytelling sessions'
          ],
      curriculum: isBn
        ? 'আধুনিক মাল্টিমিডিয়া অডিও-ভিজ্যুয়াল সমৃদ্ধ জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) পাঠ্যক্রম।'
        : 'National Curriculum & Textbook Board (NCTB) syllabus enriched with modern audiovisual aids.',
      icon: <BookOpen className="w-6 h-6 text-[#059669]" />
    },
    {
      id: 'junior',
      name: isBn ? 'জুনিয়র সেকেন্ডারি শাখা' : 'Junior Secondary Wing',
      classes: isBn ? `${toBanglaNum(6)}ষ্ঠ থেকে ${toBanglaNum(8)}ম শ্রেণি` : 'Class 6 to Class 8',
      badge: isBn ? 'দক্ষতা উন্নয়ন' : 'Skill Building',
      description: isBn
        ? 'মৌলিক ধারণা থেকে শিক্ষার্থীদের গভীর বিশ্লেষণাত্মক চিন্তা, বিজ্ঞানচর্চা, তথ্যপ্রযুক্তি দক্ষতা ও দ্বিভাষিক যোগাযোগে দক্ষ করে গড়ে তোলা।'
        : 'Transitioning students from basic concepts into rigorous analytical thinking, scientific inquiry, information technology skills, and bilingual fluency.',
      features: isBn
        ? [
            'তত্ত্বাবধানভিত্তিক আধুনিক সায়েন্স ল্যাবে হাতে-কলমে স্টেম শিক্ষা',
            'আইসিটি কম্পিউটার ল্যাবে তথ্য ও যোগাযোগ প্রযুক্তির বাস্তব প্রশিক্ষণ',
            'ইংরেজি ও বাংলা উভয় ভাষায় গভীর ব্যাকরণ ও কথোপকথন চর্চা',
            'বাংলাদেশ ও বিশ্বপরিচয়ের মাধ্যমে জাতীয় চেতনা ও ইতিহাস পরিচিতি',
            'ধারাবাহিক মূল্যায়ন ও নিয়মিত শ্রেণি ডায়াগনস্টিক কুইজ পরীক্ষা'
          ]
        : [
            'Comprehensive STEM education with supervised laboratory sessions',
            'Hands-on computer training in the ICT Computer Lab',
            'Intensive English and Bangla language and communicative competence',
            'Bangladesh & Global Studies (BGS) fostering national heritage',
            'Continuous assessment with formative diagnostic quizzes'
          ],
      curriculum: isBn
        ? 'জাতীয় শিক্ষাক্রমের সাথে সমন্বিত যোগাযোগমূলক ইংরেজি ও ডিজিটাল সাক্ষরতা প্রোগ্রাম।'
        : 'National Junior Curriculum integrated with communicative English and digital literacy programs.',
      icon: <FlaskConical className="w-6 h-6 text-[#059669]" />
    },
    {
      id: 'secondary',
      name: isBn ? 'মাধ্যমিক এসএসসি শাখা' : 'Secondary SSC Wing',
      classes: isBn ? `${toBanglaNum(9)}ম ও ${toBanglaNum(10)}ম শ্রেণি` : 'Class 9 & Class 10',
      badge: isBn ? 'বোর্ড উৎকর্ষ' : 'Board Excellence',
      description: isBn
        ? 'যশোর শিক্ষা বোর্ডের অধীনে মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি) পরীক্ষায় সেরা ফলাফলের লক্ষ্যে তিনটি শাখায় বিশেষ প্রস্তুতি।'
        : 'Focused academic preparation across three recognized academic streams to excel in the Secondary School Certificate (SSC) examinations under Jashore Board.',
      features: isBn
        ? [
            'তিনটি বিশেষায়িত শাখা: বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক বিভাগ',
            'উচ্চতর পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান ও গণিতের সমৃদ্ধ ল্যাব সেশন',
            'হিসাববিজ্ঞান, ফিন্যান্স ও ব্যবসায় উদ্যোগের বিশেষ দিকনির্দেশনা',
            'ব্যাপক মডেল টেস্ট, টেস্ট পরীক্ষা ও ব্যক্তিগত বোর্ড মেন্টরিং',
            'উচ্চ মাধ্যমিক শিক্ষার লক্ষ্যে একাডেমিক ও ক্যারিয়ার কাউন্সেলিং'
          ]
        : [
            'Three specialized streams: Science, Business Studies, and Humanities',
            'Advanced Physics, Chemistry, Biology, and Higher Mathematics laboratory sessions',
            'Accounting, Finance, and Business Entrepreneurship specialized guidance',
            'Extensive model tests, test examinations, and personalized board mentorship',
            'Academic counseling and career guidance for higher secondary education'
          ],
      curriculum: isBn
        ? 'ধারাবাহিক ১০০% পাস ও সর্বোচ্চ জিপিএ-৫ অর্জনের ধারাবাহিক সাফল্য সমৃদ্ধ বোর্ড প্রস্তুতি।'
        : 'Rigorous SSC Board preparation with consistent 100% pass record and outstanding GPA-5.00 achievements.',
      icon: <GraduationCap className="w-6 h-6 text-[#059669]" />
    }
  ];

  const streams = [
    {
      name: isBn ? 'বিজ্ঞান বিভাগ' : 'Science Stream',
      tag: isBn ? 'উদ্ভাবন ও গবেষণা' : 'Innovation & Research',
      color: 'border-emerald-200 bg-emerald-50/50',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      subjects: isBn
        ? ['পদার্থবিজ্ঞান', 'রসায়ন', 'উচ্চতর গণিত', 'জীববিজ্ঞান', 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)']
        : ['Physics', 'Chemistry', 'Higher Mathematics', 'Biology', 'Information & Communication Technology'],
      careerOutlook: isBn
        ? 'প্রকৌশল, চিকিৎসাবিজ্ঞান, কম্পিউটার সায়েন্স, বায়োটেকনোলজি, স্থাপত্যবিদ্যা, মৌলিক গবেষণা'
        : 'Engineering, Medicine, Computer Science, Biotechnology, Architecture, Pure Research'
    },
    {
      name: isBn ? 'ব্যবসায় শিক্ষা বিভাগ' : 'Business Studies Stream',
      tag: isBn ? 'বাণিজ্য ও উদ্যোগ' : 'Commerce & Enterprise',
      color: 'border-blue-200 bg-blue-50/50',
      badgeBg: 'bg-blue-100 text-blue-800',
      subjects: isBn
        ? ['হিসাববিজ্ঞান', 'ফিন্যান্স ও ব্যাংকিং', 'ব্যবসায় উদ্যোগ', 'সাধারণ বিজ্ঞান', 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)']
        : ['Accounting', 'Finance & Banking', 'Business Entrepreneurship', 'General Science', 'ICT'],
      careerOutlook: isBn
        ? 'চার্টার্ড অ্যাকাউন্ট্যান্সি (CA), ব্যাংকিং, করপোরেট ব্যবস্থাপনা, অর্থনীতি, বিপণন ও শিল্পোদ্যোগ'
        : 'Chartered Accountancy, Banking, Corporate Management, Economics, Marketing, Entrepreneurship'
    },
    {
      name: isBn ? 'মানবিক বিভাগ' : 'Humanities Stream',
      tag: isBn ? 'সমাজ ও সংস্কৃতি' : 'Society & Culture',
      color: 'border-amber-200 bg-amber-50/50',
      badgeBg: 'bg-amber-100 text-amber-800',
      subjects: isBn
        ? ['বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা', 'ভূগোল ও পরিবেশ', 'পৌরনীতি ও নাগরিকতা', 'অর্থনীতি', 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)']
        : ['History of Bangladesh & World Civilization', 'Geography & Environment', 'Civics & Citizenship', 'Economics', 'ICT'],
      careerOutlook: isBn
        ? 'আইন ও বিচার বিভাগ, বিসিএস ও জনপ্রশাসন, সাংবাদিকতা ও গণমাধ্যম, আন্তর্জাতিক সম্পর্ক ও শিক্ষকতা'
        : 'Law, Public Administration, Journalism & Media, International Relations, Education'
    }
  ];

  const highlights = [
    {
      value: isBn ? `${toBanglaNum(100)}%` : '100%',
      label: isBn ? 'এসএসসি পাসের হার' : 'SSC Pass Rate',
      desc: isBn ? 'টানা বোর্ড পরীক্ষায় শতভাগ পাসের অনন্য গৌরব' : 'Consistently across consecutive board years'
    },
    {
      value: isBn ? `${toBanglaNum(1)}:${toBanglaNum(25)}` : '1:25',
      label: isBn ? 'শিক্ষক-শিক্ষার্থী অনুপাত' : 'Teacher-Student Ratio',
      desc: isBn ? 'প্রতিটি শিশুর ব্যক্তিগত যত্ন ও নিবিড় পাঠদান' : 'Ensuring personal attention for each child'
    },
    {
      value: isBn ? `${toBanglaNum(3)}টি বিভাগ` : '3 Streams',
      label: isBn ? 'শিক্ষা বিভাগ' : 'Academic Pathways',
      desc: isBn ? 'বিজ্ঞান, ব্যবসায় শিক্ষা ও মানবিক শাখা' : 'Science, Business Studies & Humanities'
    },
    {
      value: isBn ? `${toBanglaNum(38)}+ বছর` : '38+ Years',
      label: isBn ? 'শিক্ষাদানের ঐতিহ্য' : 'Academic Heritage',
      desc: isBn ? `${toBanglaNum(1987)} সাল থেকে গৌরবের সাথে পাঠদান` : 'Educating the nation with pride since 1987'
    }
  ];

  const filteredLevels = activeTab === 'all' 
    ? levels 
    : levels.filter((lvl) => lvl.id === activeTab);

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden text-slate-800">
      {/* 1. Hero Section: Full-Width Campus Background with Standard Overlay */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-48 h-80 opacity-[0.07] pointer-events-none text-emerald-700">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
              <path d="M30 170 C10 120 20 60 70 20 C75 60 70 120 30 170 Z" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
              <Home size={14} />
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500">{isBn ? 'আমাদের কার্যক্রম' : 'Our Programs'}</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{isBn ? 'একাডেমিক কার্যক্রম' : 'Academic Programs'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
              <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                <GraduationCap size={14} />
                <span>{isBn ? 'একাডেমিক উৎকর্ষ ও পাঠ্যক্রম' : 'ACADEMIC EXCELLENCE & CURRICULUM'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
                {isBn ? (
                  <>একাডেমিক <br />কার্যক্রম</>
                ) : (
                  <>Academic <br />Programs</>
                )}
              </h1>

              <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
                {isBn ? (
                  <>
                    আধুনিক পাঠদান পদ্ধতি ও মজবুত ভিত্তির সমন্বয়ে শিক্ষার্থীদের বিশ্লেষণী প্রতিভা, নৈতিক মূল্যবোধ ও বোর্ড পরীক্ষায় শীর্ষ সাফল্য অর্জন নিশ্চিত করা হচ্ছে{' '}
                    <strong className="text-emerald-800 font-bold">{toBanglaNum(1987)} থেকে।</strong>
                  </>
                ) : (
                  <>
                    Strong foundation with modern teaching methods, fostering analytical curiosity, ethical values, and outstanding board examination performance{' '}
                    <strong className="text-emerald-800 font-bold">since 1987.</strong>
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16 max-w-[340px]">
            <ScrollScale delay={0.2}>
              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                    “
                  </span>
                  <div>
                    <p className="text-xs text-slate-700 font-medium italic leading-relaxed">
                      {isBn
                        ? 'শিক্ষা হলো ভবিষ্যতের পাসপোর্ট, কারণ আগামী দিন কেবল তাদেরই জন্য যারা আজ তার প্রস্তুতি গ্রহণ করে।'
                        : 'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.'}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-900">{isBn ? 'এসওএস একাডেমিক কাউন্সিল' : 'SOS Academic Council'}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">{isBn ? 'মানসম্মত শিক্ষা' : 'Quality Learning'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollScale>
          </div>
        </div>
      </div>

      {/* 2. Co-Curricular & Programs Switcher Pill Navigation Bar */}
      <div className="bg-[#f0faf5] border-b border-emerald-100/60 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <ScrollReveal duration={0.5} distance={15}>
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline-block">
                {isBn ? 'কার্যক্রম:' : 'Programs:'}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/academic-programs"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
                >
                  <GraduationCap size={14} />
                  <span>{isBn ? 'একাডেমিক কার্যক্রম' : 'Academic Programs'}</span>
                </Link>
                <Link
                  to="/sports-athletics"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'খেলাধুলা ও শরীরচর্চা' : 'Sports & Athletics'}</span>
                </Link>
                <Link
                  to="/cultural-activities"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'সাংস্কৃতিক কার্যক্রম' : 'Cultural Activities'}</span>
                </Link>
                <Link
                  to="/clubs-societies"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'ক্লাব ও সোসাইটি' : 'Clubs & Societies'}</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Stat Highlights Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ScrollStaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <ScrollStaggerItem key={idx}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition text-center h-full">
                  <span className="text-2xl sm:text-3xl font-black text-[#004d34] tracking-tight block">
                    {item.value}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 4. Level-by-Level Curriculum Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.6} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
                {isBn ? 'সমন্বিত পাঠদান রূপরেখা' : 'COMPREHENSIVE PEDAGOGY'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {isBn ? 'শিক্ষার স্তর ও পর্যায়সমূহ' : 'Education Wings & Stages'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isBn
                  ? 'প্রাথমিক আবিষ্কার থেকে মাধ্যমিক বোর্ড পরীক্ষা পর্যন্ত ধাপে ধাপে সুবিন্যস্ত শিক্ষা ব্যবস্থা।'
                  : 'A carefully structured developmental progression from initial foundational discovery to SSC mastery.'}
              </p>
            </div>

            {/* Level Filter Tabs */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
              {([
                { id: 'all', label: isBn ? 'সকল স্তর' : 'All Wings' },
                { id: 'primary', label: isBn ? 'প্রাথমিক' : 'Primary' },
                { id: 'junior', label: isBn ? 'জুনিয়র' : 'Junior' },
                { id: 'secondary', label: isBn ? 'মাধ্যমিক' : 'Secondary' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-[#004d34] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Level Cards */}
        <ScrollStaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {filteredLevels.map((lvl) => (
            <ScrollStaggerItem key={lvl.id}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#e8f7ee] border border-emerald-100 flex items-center justify-center">
                        {lvl.icon}
                      </div>
                      <span className="bg-[#e8f7ee] text-[#059669] border border-emerald-100 px-3 py-1 rounded-full text-[11px] font-bold">
                        {lvl.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {lvl.name}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                      {lvl.classes}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {lvl.description}
                    </p>

                    <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {isBn ? 'প্রধান বৈশিষ্ট্যসমূহ:' : 'Key Highlights:'}
                      </h4>
                      {lvl.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-[#059669] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                      {isBn ? 'পাঠ্যক্রম মানদণ্ড:' : 'Curriculum Standard:'}
                    </span>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
                      {lvl.curriculum}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 5. SSC Disciplines (Science, Business Studies, Humanities) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-gradient-to-br from-emerald-900 to-[#004d34] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                {isBn ? '৯ম ও ১০ম শ্রেণির বিশেষায়িত বিভাগ' : 'CLASS 9 & 10 SPECIALIZATIONS'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 leading-tight">
                {isBn ? 'এসএসসি শিক্ষা বিভাগ ও ক্যারিয়ারের পথ' : 'SSC Academic Streams & Pathways'}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 font-normal leading-relaxed">
                {isBn
                  ? 'উচ্চশিক্ষা ও বিশ্ববিদ্যালয় জীবনের লক্ষ্য পূরণে মাধ্যমিক শিক্ষার্থীদের প্রয়োজনীয় বিষয়ভিত্তিক জ্ঞান, ল্যাবরেটরি দক্ষতা ও নিবিড় মেন্টরিং প্রদান।'
                  : 'Equipping secondary examinees with the exact knowledge, laboratory mastery, and mentor coaching required to pursue their aspirational college and university careers.'}
              </p>
            </div>

            <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
              {streams.map((stream, idx) => (
                <ScrollStaggerItem key={idx}>
                  <HoverCard className="h-full">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition h-full">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            {stream.tag}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {stream.name}
                        </h3>
                        <div className="space-y-1.5 mt-3">
                          <p className="text-[11px] text-emerald-200 uppercase tracking-wider font-bold">
                            {isBn ? 'শাখাভিত্তিক বিষয়সমূহ:' : 'Elective Subjects:'}
                          </p>
                          <ul className="text-xs text-white/90 space-y-1">
                            {stream.subjects.map((sub, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2">
                                <span className="text-emerald-400 font-bold">•</span>
                                <span>{sub}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/15">
                        <span className="text-[10px] text-emerald-200 font-semibold uppercase tracking-wider block">
                          {isBn ? 'ভবিষ্যৎ ক্যারিয়ারের পথ:' : 'Future Career Pathways:'}
                        </span>
                        <p className="text-xs text-white/90 mt-1 font-medium leading-relaxed">
                          {stream.careerOutlook}
                        </p>
                      </div>
                    </div>
                  </HoverCard>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </div>
        </ScrollReveal>
      </div>

      {/* 6. Facilities & Pedagogical Assets */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.6} distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              {isBn ? 'ক্যাম্পাস অবকাঠামো' : 'CAMPUS INFRASTRUCTURE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isBn ? 'শিক্ষা সহায়ক সমৃদ্ধ সুযোগ-সুবিধা' : 'Learning Facilities Supporting Academics'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? 'হাতে-কলমে আধুনিক ও প্রায়োগিক জ্ঞান অর্জনের জন্য প্রস্তুতকৃত উন্নত অবকাঠামো।'
                : 'State-of-the-art infrastructure designed to deliver hands-on practical knowledge.'}
            </p>
          </div>
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/facilities/facility_science.png"
                      alt="Science Laboratories"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {isBn ? 'বিজ্ঞান ল্যাবরেটরি' : 'Science Laboratories'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isBn
                      ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের সকল ব্যবহারিক পরীক্ষার আধুনিক যন্ত্রপাতি ও রাসায়নিক সরঞ্জাম।'
                      : 'Equipped with apparatus for Physics, Chemistry, and Biology practicals.'}
                  </p>
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>

          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/facilities/facility_computer.png"
                      alt="ICT Computer Lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {isBn ? 'আইসিটি কম্পিউটার ল্যাব' : 'ICT Computer Lab'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isBn
                      ? 'উচ্চগতির ইন্টারনেট সুবিধাসহ অত্যাধুনিক কম্পিউটার এবং অফিস ও প্রোগ্রামিং সফটওয়্যার।'
                      : 'High-speed internet workstations with modern programming and office software.'}
                  </p>
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>

          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/facilities/facility_library.png"
                      alt="Central Library"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {isBn ? 'কেন্দ্রীয় লাইব্রেরি' : 'Central Library'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isBn
                      ? '১০,০০০+ একাডেমিক বই, রেফারেন্স বিশ্বকোষ ও শান্ত মনোরম পাঠ কক্ষ।'
                      : 'Over 10,000 academic titles, reference encyclopedias, and quiet reading nooks.'}
                  </p>
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>

          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition h-full flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <img
                      src="/facilities/facility_grounds.png"
                      alt="Smart Classrooms"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {isBn ? 'বিস্তীর্ণ সবুজ ক্যাম্পাস প্রাঙ্গণ' : 'Sprawling Campus Grounds'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {isBn
                      ? 'শারীরিক সুস্থতা, খেলাধুলা ও মুক্ত নির্মল বাতাসের সুপরিসর সুশীতল পরিবেশ।'
                      : 'Lush green open environment promoting physical vitality and fresh air.'}
                  </p>
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </div>

      {/* 7. Action CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {isBn ? 'আমাদের সাথে আপনার শিক্ষা জীবন শুরু করতে প্রস্তুত?' : 'Ready to begin your academic journey with us?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                {isBn
                  ? `১ম থেকে ৯ম শ্রেণিতে নতুন ভর্তি প্রক্রিয়া চলমান। আমাদের সিলেবাস ডাউনলোড করুন, ক্লাস রুটিন দেখুন বা সরাসরি অনলাইনে আবেদন করুন।`
                  : 'Applications for new admissions in Class 1 to Class 9 are now open. Download our syllabus, check class routines, or apply directly online.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              <Link
                to="/academic"
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <Calendar size={14} />
                <span>{isBn ? 'ক্লাস রুটিন' : 'Class Routines'}</span>
              </Link>
              <Link
                to="/downloads"
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <FileText size={14} />
                <span>{isBn ? 'সিলেবাস পিডিএফ' : 'Syllabus PDF'}</span>
              </Link>
              <Link
                to="/admission"
                className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
              >
                <span>{isBn ? 'অনলাইন ভর্তি' : 'Online Admission'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
