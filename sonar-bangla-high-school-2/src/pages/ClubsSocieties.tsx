import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  Compass,
  Cpu,
  Globe2,
  TreePine,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
  Calendar,
  Image as ImageIcon,
  HeartHandshake,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ClubsSocieties: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
  const [selectedClubCategory, setSelectedClubCategory] = useState<string>('all');

  const highlights = [
    {
      value: isBn ? `${toBanglaNum(6)}টি ক্লাব` : '6 Clubs',
      label: isBn ? 'সক্রিয় সোসাইটি' : 'Active Societies',
      desc: isBn ? 'স্টেম, সাহিত্য, পরিবেশ ও সমাজসেবা' : 'Covering STEM, literature, ecology, and civic service'
    },
    {
      value: isBn ? 'প্রতি বৃহস্পতিবার' : 'Every Thursday',
      label: isBn ? 'ক্লাব কার্যক্রমের সময়' : 'Club Activity Period',
      desc: isBn ? 'সাপ্তাহিক ৯০ মিনিটের নির্ধারিত সহশিক্ষা সেশন' : 'Dedicated 90-minute weekly co-curricular session'
    },
    {
      value: isBn ? `${toBanglaNum(250)}+ সদস্য` : '250+ Members',
      label: isBn ? 'শিক্ষার্থী নেতৃত্ব' : 'Student Leaders',
      desc: isBn ? 'নির্বাহী কাউন্সিলের দায়িত্বে ক্ষমতায়িত শিক্ষার্থী' : 'Empowered with executive council responsibilities'
    },
    {
      value: isBn ? `${toBanglaNum(15)}+ পুরস্কার` : '15+ Awards',
      label: isBn ? 'জাতীয় অলিম্পিয়াড' : 'National Olympiads',
      desc: isBn ? 'গণিত, পদার্থ ও আইসিটি অলিম্পিয়াডে সাফল্য' : 'Honors in Math, Physics, and ICT Olympiads'
    }
  ];

  const clubs = [
    {
      id: 'science-ict',
      name: isBn ? 'বিজ্ঞান ও আইসিটি ক্লাব' : 'Science & ICT Club',
      badge: isBn ? 'স্টেম ও রোবোটিক্স' : 'STEM & Robotics',
      tag: isBn ? 'উদ্ভাবন' : 'Innovation',
      category: 'stem',
      image: '/gallery/album_science.jpg',
      description: isBn
        ? 'আমাদের স্কুলের প্রযুক্তিগত উদ্ভাবনের কেন্দ্রবিন্দু। শিক্ষার্থীরা রোবোটিক্স, প্রোগ্রামিং ও বৈজ্ঞানিক গবেষণায় যুক্ত হয় এবং জাতীয় অলিম্পিয়াডে স্কুলের প্রতিনিধিত্ব করে।'
        : 'The technological innovation hub of our school. Students explore robotics, computer programming, scientific research, and represent the institution at national science olympiads.',
      activities: isBn
        ? [
            'বার্ষিক বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনী আয়োজন',
            'রোবোটিক্স, সেন্সর সার্কিট ও আরডুইনো বিষয়ক ব্যবহারিক কর্মশালা',
            'জাতীয় গণিত, পদার্থবিজ্ঞান ও জীববিজ্ঞান অলিম্পিয়াডের প্রশিক্ষণ',
            'পাইথন প্রোগ্রামিং ও ওয়েব প্রযুক্তির প্রাথমিক প্রশিক্ষণ ক্লাস'
          ]
        : [
            'Annual Science Fair & ICT Innovation Expo organization',
            'Hands-on robotics, sensor circuitry, and Arduino workshops',
            'National Mathematical, Physics, and Biology Olympiad training',
            'Introductory coding classes in Python and web technologies'
          ],
      moderator: isBn ? 'জ্যেষ্ঠ পদার্থবিজ্ঞান ও আইসিটি শিক্ষক' : 'Senior Physics & ICT Faculty'
    },
    {
      id: 'debating',
      name: isBn ? 'ইংরেজি ও বিতর্ক পরিষদ' : 'English & Debating Society',
      badge: isBn ? 'বাগ্মিতা ও যুক্তি' : 'Oratory & Rhetoric',
      tag: isBn ? 'উপস্থিত বক্তব্য' : 'Public Speaking',
      category: 'literary',
      image: '/gallery/album_library.jpg',
      description: isBn
        ? 'দ্বিভাষিক বিতর্ক, ছায়া জাতিসংঘ (MUN) অধিবেশন এবং উপস্থিত বক্তৃতার মাধ্যমে আত্মবিশ্বাসী বাগ্মী, যুক্তিবাদী ও দক্ষ আলোচক গড়ে তোলা।'
        : 'Developing eloquent communicators, critical thinkers, and persuasive negotiators through bilingual debates, Model UN mock sessions, and public speaking.',
      activities: isBn
        ? [
            'বাংলা ও ইংরেজি উভয় ভাষায় সাপ্তাহিক সংসদীয় ধারার বিতর্ক অনুশীলন',
            'উপস্থিত বক্তৃতা, গল্প বলা ও বাচনিক দক্ষতা বিষয়ক কর্মশালা',
            'মডেল ইউনাইটেড নেশনস (MUN) সিমুলেশন অধিবেশন',
            'আন্তঃস্কুল ও জাতীয় টেলিভিশন স্কুল বিতর্ক প্রতিযোগিতায় অংশগ্রহণ'
          ]
        : [
            'Weekly parliamentary style debate practice in Bangla & English',
            'Extempore speech, storytelling, and declamation workshops',
            'Model United Nations (MUN) simulation conferences',
            'Participation in inter-school television debate tournaments'
          ],
      moderator: isBn ? 'জ্যেষ্ঠ ইংরেজি বিভাগীয় শিক্ষক' : 'Senior English Department Faculty'
    },
    {
      id: 'eco-club',
      name: isBn ? 'পরিবেশ ও প্রকৃতি সংরক্ষণ ক্লাব' : 'Eco & Nature Conservation Club',
      badge: isBn ? 'সবুজ ক্যাম্পাস' : 'Green Campus',
      tag: isBn ? 'টেকসই পরিবেশ' : 'Sustainability',
      category: 'community',
      image: '/programs/program_clubs.png',
      description: isBn
        ? 'গ্রিন ক্যাম্পাস উদ্যোগ, বৃক্ষরোপণ অভিযান এবং প্লাস্টিক পুনর্ব্যবহার সচেতনতার মাধ্যমে পরিবেশ সংরক্ষণ ও টেকসই জীবনধারা জাগ্রত করা।'
        : 'Instilling environmental stewardship and sustainable lifestyles through green campus initiatives, tree plantation drives, and plastic recycling awareness.',
      activities: isBn
        ? [
            'বার্ষিক বর্ষাকালীন ক্যাম্পাস বৃক্ষরোপণ উৎসব আয়োজন',
            'ক্যাম্পাস জিরো-প্লাস্টিক অভিযান ও বর্জ্য পৃথকীকরণ কর্মসূচি',
            'ভেষজ বাগান পরিচর্যা ও ঔষধি উদ্ভিদের যত্ন নিশ্চিতকরণ',
            'বিশ্ব পরিবেশ দিবস উপলক্ষে আলোচনা সভা ও পোস্টার র‍্যালি'
          ]
        : [
            'Annual Monsoon Campus Tree Plantation Festival',
            'Campus zero-plastic campaigns and waste segregation',
            'Organic botanical garden management and medicinal plant care',
            'Observance of World Environment Day with seminars and poster rallies'
          ],
      moderator: isBn ? 'জীববিজ্ঞান ও ভূগোল শিক্ষক' : 'Biology & Geography Faculty'
    },
    {
      id: 'scouts',
      name: isBn ? 'বাংলাদেশ স্কাউটস ও গার্ল গাইডস' : 'Bangladesh Scouts & Girl Guides',
      badge: isBn ? 'নেতৃত্ব ও সেবা' : 'Leadership & Service',
      tag: isBn ? 'নাগরিক দায়িত্ব' : 'Civic Duty',
      category: 'service',
      image: '/gallery/album_assembly.jpg',
      description: isBn
        ? 'ঐতিহাসিক স্কাউট আন্দোলনের মাধ্যমে নিয়মানুবর্তিতা, নৈতিক সততা, শারীরিক সক্ষমতা এবং মানবিক সেবার মানসিকতা তৈরি করা।'
        : 'Fostering disciplined self-reliance, moral integrity, physical stamina, and humanitarian preparedness through the historic scout movement.',
      activities: isBn
        ? [
            'সাপ্তাহিক বহিরাঙ্গন ক্যাম্পিং, তাঁবু খাটানো ও পাইওনিয়ারিং গিট চর্চা',
            'সার্টিফাইড প্রাথমিক চিকিৎসা ও দুর্যোগ ব্যবস্থাপনা মহড়া',
            'জাতীয় দিবস ও ক্যাম্পাসের বিশেষ অনুষ্ঠানে গার্ড অব অনার প্রদান',
            'জাতীয় স্কাউট জাম্বুরি ও জেলা পর্যায়ের সমাবেশসমূহে অংশগ্রহণ'
          ]
        : [
            'Weekend outdoor camping, tent pitching, and pioneering knots',
            'Certified First Aid and emergency disaster management drills',
            'Honor guard duties during national days and VIP visits on campus',
            'Participation in National Scout Jamboree and district rallies'
          ],
      moderator: isBn ? 'সার্টিফাইড উডব্যাজ স্কাউট লিডার' : 'Certified Wood Badge Scout Leader'
    },
    {
      id: 'literature-arts',
      name: isBn ? 'সাহিত্য ও সৃজনশীল চারুকলা সমিতি' : 'Literature & Creative Arts Society',
      badge: isBn ? 'সৃজনশীল লেখনী' : 'Creative Writing',
      tag: isBn ? 'প্রকাশনা' : 'Publishing',
      category: 'literary',
      image: '/gallery/card_fair.jpg',
      description: isBn
        ? 'উদীয়মান কবি, প্রাবন্ধিক, চিত্রশিল্পী ও ক্যালিগ্রাফি অনুরাগীদের সৃজনক্ষেত্র। নিয়মিত দেয়াল পত্রিকা ও বার্ষিক স্কুল সাহিত্য সংকলন প্রকাশকারী।'
        : 'A sanctuary for budding poets, essayists, illustrators, and calligraphy enthusiasts. Publishers of our quarterly wall magazines and annual school journal.',
      activities: isBn
        ? [
            'বিষয়ভিত্তিক ত্রৈমাসিক দেয়াল পত্রিকা ("দেয়ালিকা") প্রকাশনা',
            'কবিতা পাঠের আসর, বই পর্যালোচনা সভা ও সৃজনশীল লেখালেখি',
            'বার্ষিক হস্তাক্ষর, ক্যালিগ্রাফি ও বইয়ের প্রচ্ছদ অঙ্কন প্রতিযোগিতা',
            'সাহিত্য কুইজ ও জাতীয় বইমেলা পরিদর্শন'
          ]
        : [
            'Publication of quarterly themed wall magazine ("Dewalika")',
            'Poetry recitation circles, book review discussions, and creative writing',
            'Annual handwriting, calligraphy, and book illustration contests',
            'Literary quizzes and visits to national book fairs'
          ],
      moderator: isBn ? 'বাংলা বিভাগীয় শিক্ষক' : 'Bangla Department Faculty'
    },
    {
      id: 'social-welfare',
      name: isBn ? 'সমাজকল্যাণ ও রেড ক্রিসেন্ট যুব দল' : 'Social Welfare & Red Crescent Youth',
      badge: isBn ? 'মানবধর্ম' : 'Humanitarian',
      tag: isBn ? 'সহমর্মিতা' : 'Empathy in Action',
      category: 'service',
      image: '/gallery/album_prize.jpg',
      description: isBn
        ? 'হারমান মেইনারের মানবহিতৈষী আদর্শকে ধারণ করে সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো, ত্রাণ কর্মসূচি পরিচালনা এবং স্বাস্থ্য সচেতনতা বৃদ্ধি।'
        : 'Embodying the founding ethos of Hermann Gmeiner by serving underprivileged communities, conducting relief campaigns, and spreading public health awareness.',
      activities: isBn
        ? [
            'শীতকালে দুস্থদের মাঝে শীতবস্ত্র ও কম্বল সংগ্রহ ও বিতরণ কর্মসূচি',
            'বিনামূল্যে রক্তের গ্রুপ নির্ণয় ও রক্তদানে সচেতনতামূলক ক্যাম্প',
            'সুবিধাবঞ্চিত শিশুদের মাঝে খাতা-কলম ও পাঠ্যবই বিতরণ',
            'স্বাস্থ্যবিধি, ব্যক্তিগত পরিচ্ছন্নতা ও বিশুদ্ধ পানি বিষয়ক সচেতনতা'
          ]
        : [
            'Winter cloth and warm blanket collection and distribution drives',
            'Voluntary blood group determination and donor awareness camp',
            'Free stationary and textbook distribution to underprivileged children',
            'Health, hygiene, and clean water awareness programs'
          ],
      moderator: isBn ? 'প্রশাসন ও কাউন্সেলিং দপ্তর' : 'Administration & Counseling Office'
    }
  ];

  const steps = [
    {
      number: isBn ? `${toBanglaNum('01')}` : '01',
      title: isBn ? 'ক্লাব ওরিয়েন্টেশন সপ্তাহ' : 'Club Orientation Week',
      desc: isBn
        ? 'প্রতি শিক্ষাবর্ষের শুরুতে অডিটোরিয়ামে ছয়টি ক্লাব তাদের কার্যক্রম, বিগত প্রকল্প ও অর্জন প্রদর্শন করে।'
        : 'At the start of each academic year, all six clubs showcase their activities, previous projects, and awards at the school auditorium.'
    },
    {
      number: isBn ? `${toBanglaNum('02')}` : '02',
      title: isBn ? 'নিবন্ধন ও সদস্যপদ গ্রহণ' : 'Registration & Membership',
      desc: isBn
        ? '৬ষ্ঠ থেকে ১০ম শ্রেণির শিক্ষার্থীরা শিক্ষকের সাথে পরামর্শ করে পছন্দের সর্বোচ্চ দুটি ক্লাবে যুক্ত হতে পারে।'
        : 'Students from Class 6 to Class 10 can join up to two complementary clubs based on personal passion and teacher consultation.'
    },
    {
      number: isBn ? `${toBanglaNum('03')}` : '03',
      title: isBn ? 'সাপ্তাহিক সক্রিয় ক্লাব পিরিয়ড' : 'Weekly Activity Periods',
      desc: isBn
        ? 'প্রতি বৃহস্পতিবার ৯০ মিনিটের নির্ধারিত পিরিয়ডে ক্লাবগুলো কর্মশালা, দলীয় প্রজেক্ট ও প্রতিযোগিতা প্রস্তুতি চালায়।'
        : 'Dedicated 90-minute sessions every Thursday where clubs conduct workshops, team projects, and competitive preparation.'
    },
    {
      number: isBn ? `${toBanglaNum('04')}` : '04',
      title: isBn ? 'কাউন্সিল নেতৃত্ব ও দায়িত্ব' : 'Council Leadership Roles',
      desc: isBn
        ? 'সিনিয়র শিক্ষার্থীরা সভাপতি, সাধারণ সম্পাদক ও প্রজেক্ট লিড হিসেবে নির্বাচিত হয়ে বাস্তব নেতৃত্ব শেখে।'
        : 'Senior students are elected as President, General Secretary, and Project Leads, cultivating real-world organizational leadership.'
    }
  ];

  const filteredClubs = selectedClubCategory === 'all'
    ? clubs
    : clubs.filter((c) => c.category === selectedClubCategory);

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden text-slate-800">
      {/* 1. Standard Hero Section */}
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
            <span className="text-slate-800 font-bold">{isBn ? 'ক্লাব ও সোসাইটি' : 'Clubs & Societies'}</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Users size={14} />
              <span>{isBn ? 'সহশিক্ষা পরিষদ ও ক্লাবসমূহ' : 'CO-CURRICULAR COUNCILS & CLUBS'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>ক্লাব ও <br />সোসাইটি</>
              ) : (
                <>Clubs & <br />Societies</>
              )}
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn ? (
                <>
                  একবিংশ শতাব্দীর নেতৃত্ব, বৈজ্ঞানিক উদ্ভাবন, বাগ্মিতা ও মানবিক সেবায় শিক্ষার্থীদের দক্ষ করে তোলা হচ্ছে{' '}
                  <strong className="text-emerald-800 font-bold">{toBanglaNum(1987)} থেকে।</strong>
                </>
              ) : (
                <>
                  Empowering students with 21st-century leadership, scientific innovation, communicative eloquence, and compassionate humanitarian service{' '}
                  <strong className="text-emerald-800 font-bold">since 1987.</strong>
                </>
              )}
            </p>
          </div>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <p className="text-xs text-slate-700 font-medium italic leading-relaxed">
                  {isBn
                    ? 'নেতৃত্ব কোনো পদবির বিষয় নয়; এটি সহযোগিতার মাধ্যমে প্রভাব, প্রেরণা ও ইতিবাচক পরিবর্তনের নাম।'
                    : 'Leadership is not about a title; it is about impact, influence, and inspiration through collaboration.'}
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">{isBn ? 'স্টুডেন্ট কাউন্সিল বোর্ড' : 'Student Council Board'}</span>
                  <span className="text-[10px] text-emerald-700 font-bold">{isBn ? 'নেতৃত্ব কেন্দ্র' : 'Leadership Hub'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Co-Curricular & Programs Switcher Pill Navigation Bar */}
      <div className="bg-[#f0faf5] border-b border-emerald-100/60 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline-block">
              {isBn ? 'কার্যক্রম:' : 'Programs:'}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/academic-programs"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <Users size={14} />
                <span>{isBn ? 'ক্লাব ও সোসাইটি' : 'Clubs & Societies'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Stat Highlights Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition text-center"
            >
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
          ))}
        </div>
      </div>

      {/* 4. Active Clubs Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              {isBn ? 'শিক্ষার্থী পরিষদ ও চ্যাপ্টার' : 'STUDENT COUNCILS & CHAPTERS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isBn ? 'আমাদের সক্রিয় ক্লাব ও সোসাইটিসমূহ' : 'Featured Clubs & Societies'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? 'শ্রেণিকক্ষের আনুষ্ঠানিক পাঠের বাইরে শিক্ষার্থীদের নিজস্ব শখ ও প্রতিভার বিকাশ ঘটাতে অনন্য সুযোগ।'
                : 'Providing vibrant spaces where students pursue their unique passions outside formal class lectures.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: isBn ? 'সকল ক্লাব' : 'All Clubs' },
              { id: 'stem', label: isBn ? 'স্টেম ও রোবোটিক্স' : 'STEM & Robotics' },
              { id: 'literary', label: isBn ? 'বিতর্ক ও সাহিত্য' : 'Debate & Arts' },
              { id: 'service', label: isBn ? 'স্কাউট ও সমাজসেবা' : 'Scouts & Service' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedClubCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedClubCategory === tab.id
                    ? 'bg-white text-[#004d34] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {club.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#e8f7ee] text-[#059669] px-2 py-0.5 rounded-md">
                    {club.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004d34] transition-colors">
                  {club.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {club.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {isBn ? 'মূল কার্যক্রমসমূহ:' : 'Core Activities:'}
                  </h4>
                  {club.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold">{isBn ? 'মডারেটর শিক্ষক:' : 'Faculty Moderator:'}</span>
                <span className="font-bold text-emerald-800">{club.moderator}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. How to Join & Leadership Flow */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#f0faf5] border border-emerald-100/80 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              {isBn ? 'শিক্ষার্থী সম্পৃক্ততার রূপরেখা' : 'STUDENT ENGAGEMENT ROADMAP'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isBn ? 'যেভাবে শিক্ষার্থীরা ক্লাবে যোগ দেয় ও নেতৃত্ব শেখে' : 'How Students Join & Grow in Clubs'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {isBn
                ? 'নির্বাহী নেতৃত্ব, দলীয় মেলবন্ধন ও প্রজেক্ট ব্যবস্থাপনার দক্ষতা বিকাশের সুনির্দিষ্ট চার ধাপ।'
                : 'A transparent four-stage path designed to nurture executive leadership, teamwork, and project ownership.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-emerald-300 block mb-2 font-mono">
                    {st.number}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Signature Annual Club Expo Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-emerald-900 to-[#004d34] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-emerald-300" />
                <span>{isBn ? 'সিগনেচার বার্ষিক প্রদর্শনী' : 'SIGNATURE ANNUAL EXPO'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                {isBn ? 'বার্ষিক বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনী' : 'Annual Science Fair & ICT Innovation Expo'}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                {isBn
                  ? 'বিজ্ঞান ও আইসিটি ক্লাব কর্তৃক প্রতি বছর আয়োজিত এ মেলায় শিক্ষার্থীরা নবায়নযোগ্য শক্তি, রোবোটিক্স, কৃত্রিম বুদ্ধিমত্তা ও জনস্বাস্থ্য বিষয়ক উদ্ভাবনী মডেল প্রদর্শন করে।'
                  : 'Organized each year by the Science & ICT Club, presenting innovative student working models across renewable energy, robotics, AI automation, public sanitation, and healthcare inventions.'}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">
                    {isBn ? `${toBanglaNum(50)}+টি প্রজেক্ট প্রদর্শনী` : '50+ Project Exhibits'}
                  </span>
                  <p className="text-[11px] text-emerald-200">
                    {isBn ? 'জুনিয়র ও সিনিয়র বিভাগের বিজ্ঞানীদের বাস্তব প্রদর্শনী' : 'Junior & Senior section scientific demonstrations'}
                  </p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">
                    {isBn ? 'বিশেষজ্ঞ বিচারক ও পুরস্কার' : 'Expert Jury & Awards'}
                  </span>
                  <p className="text-[11px] text-emerald-200">
                    {isBn ? 'বিশ্ববিদ্যালয় শিক্ষক ও প্রকৌশলীদের দ্বারা মূল্যায়ন' : 'Judged by university professors and industry engineers'}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20">
                <img
                  src="/gallery/album_science.jpg"
                  alt="Science Fair Expo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Action CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {isBn ? 'আমাদের ক্লাব কার্যক্রম দেখতে চান?' : 'Want to see our clubs in action?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              {isBn
                ? 'বিজ্ঞান মেলা, স্কাউট ক্যাম্পোরি, বিতর্ক উৎসব ও বৃক্ষরোপণ অভিযানের স্থিরচিত্র দেখুন আমাদের ফটো গ্যালারিতে।'
                : 'Browse photo moments from science fairs, scout camporees, debate tournaments, and tree plantation drives in our photo gallery.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/gallery"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon size={14} />
              <span>{isBn ? 'ক্লাব গ্যালারি' : 'Clubs Gallery'}</span>
            </Link>
            <Link
              to="/notices"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>{isBn ? 'ক্লাব নোটিশ' : 'Club Circulars'}</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>{isBn ? 'ক্লাব ইন-চার্জের সাথে যোগাযোগ' : 'Contact Club In-Charge'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
