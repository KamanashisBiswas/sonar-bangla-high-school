import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Bell,
  Headphones,
  Laptop,
  Play,
  Heart,
  Globe,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Activity,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  CAMPUS_LIFE_PHOTOS,
  LEADERSHIP,
  NEWS_EVENTS,
  UPCOMING_EVENTS,
} from '../data/schoolData';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard,
} from '../components/ui/MotionComponents';

export const Home: React.FC = () => {
  const { language, t, toBanglaNum } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(111);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setNavbarHeight(header.offsetHeight);
      }
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  const heroQuotes = language === 'bn' ? [
    {
      quote: 'প্রতিটি শিশুর ভালোবাসাপূর্ণ একটি ঘর এবং একটি উজ্জ্বল ভবিষ্যৎ গড়ার সুযোগ পাওয়ার অধিকার রয়েছে।',
      author: 'ড. হারম্যান মেইনার',
    },
    {
      quote: 'শিক্ষা হলো সবচেয়ে শক্তিশালী হাতিয়ার যা আপনি বিশ্বকে পরিবর্তন করতে ব্যবহার করতে পারেন।',
      author: 'নেলসন ম্যান্ডেলা',
    },
    {
      quote: 'প্রতিটি শিশুর জন্য একটি ভালোবাসাপূর্ণ ঘর, আলোকিত ভবিষ্যতের জন্য মানসম্মত শিক্ষা।',
      author: 'এস ও এস চিলড্রেনস ভিলেজেস',
    },
  ] : [
    {
      quote:
        'Every child deserves a loving home and the chance to build a brighter tomorrow.',
      author: 'Hermann Gmeiner',
    },
    {
      quote:
        'Education is the most powerful weapon which you can use to change the world.',
      author: 'Nelson Mandela',
    },
    {
      quote:
        'A loving home for every child, quality education for a brighter future.',
      author: 'SOS Children’s Villages',
    },
  ];

  const tickerNotices = language === 'bn' ? [
    {
      title: '২০২৬ শিক্ষাবর্ষে প্রেপ-১ ও ১ম শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম চলছে।',
      date: '০১ সেপ্টেম্বর ২০২৫',
      link: '/admission',
    },
    {
      title: 'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫।',
      date: '১২ সেপ্টেম্বর ২০২৫',
      link: '/notices',
    },
    {
      title: 'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংগ্রহ সংক্রান্ত।',
      date: '১০ সেপ্টেম্বর ২০২৫',
      link: '/notices',
    },
    {
      title: 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা ২০২৫ এর সময়সূচি প্রকাশ।',
      date: '২০ সেপ্টেম্বর ২০২৫',
      link: '/notices',
    },
    {
      title: 'বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনীর নিবন্ধন চলছে।',
      date: '০৫ অক্টোবর ২০২৫',
      link: '/notices',
    },
  ] : [
    {
      title: 'Online Admission for Class 1 (Session 2026) is now open.',
      date: '01 Sep 2025',
      link: '/admission',
    },
    {
      title: 'Summer Vacation & Holiday Notice 2025.',
      date: '12 Sep 2025',
      link: '/notices',
    },
    {
      title: 'SSC Examination 2025 Results & Marksheet Distribution.',
      date: '10 Sep 2025',
      link: '/notices',
    },
    {
      title: 'Annual Sports & Cultural Program 2025 schedule announced.',
      date: '20 Sep 2025',
      link: '/notices',
    },
    {
      title: 'Science Fair & ICT Innovation Exhibition registration open.',
      date: '05 Oct 2025',
      link: '/notices',
    },
  ];

  return (
    <div className="bg-[#fcfdfd]">
      {/* 1. HERO SECTION (Pixel-Perfect Match to Reference Screenshot) */}
      <section className="relative overflow-hidden w-full min-h-[620px] lg:min-h-[680px] flex flex-col justify-between bg-slate-50">
        {/* Full-bleed Campus Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/campus_main2.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-[center_right] select-none"
          />

          {/* 1. Left Horizontal White Gradient Fade (Covers text on left) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.92) 48%, rgba(255,255,255,0.45) 68%, rgba(255,255,255,0) 88%)',
            }}
          />

          {/* 2. Bottom Vertical White Fade (Soft blend into page body) */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
        </div>

        {/* Hero Interactive Content Overlay */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 relative z-10 flex flex-col justify-between flex-1">
          {/* Upper Content: Headlines & Call to Actions */}
          <div className="max-w-xl lg:max-w-2xl space-y-4">
            {/* Soft Green Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8f7ee] border border-[#a7f3d0] text-[#004d34] text-[11px] sm:text-xs font-bold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>{t.home.heroBadge}</span>
            </div>

            {/* Big Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-slate-900 tracking-tight leading-[1.04]">
              {language === 'bn' ? (
                <>
                  জ্ঞানের আলোয় <br />
                  আলোকিত শিশু <br />
                  <span className="text-[#058c58]">উন্নত আগামীর প্রত্যয়</span>
                </>
              ) : (
                <>
                  Nurturing <br />
                  Young Minds <br />
                  <span className="text-[#058c58]">for a Better World</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-md font-normal">
              {t.home.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#064e3b] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.home.applyNow}</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-2xs hover:shadow cursor-pointer"
              >
                <span>{language === 'bn' ? 'বিদ্যালয়ের পরিচিতি' : 'Learn More'}</span>
              </Link>
            </div>
          </div>

          {/* Lower Content: Stats on Left (~65%) + Quote Box on Right (~35%) */}
          <div className="pt-10 sm:pt-14 flex flex-col lg:flex-row items-end justify-between gap-6">
            {/* 5 Stats Row - Compact & Aligned on Left */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#e8f7f0] text-[#004d34] flex items-center justify-center shrink-0 border border-[#a7f3d0]">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                    {toBanglaNum('1987')}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {language === 'bn' ? 'স্থাপিত' : 'Established'}
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#e8f7f0] text-[#004d34] flex items-center justify-center shrink-0 border border-[#a7f3d0]">
                  <BookOpen size={17} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                    {toBanglaNum('117188')}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {language === 'bn' ? 'EIIN নম্বর' : 'EIIN Number'}
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#e8f7f0] text-[#004d34] flex items-center justify-center shrink-0 border border-[#a7f3d0]">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                    {toBanglaNum('25+')}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {t.home.teachersCount}
                  </p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#e8f7f0] text-[#004d34] flex items-center justify-center shrink-0 border border-[#a7f3d0]">
                  <Users size={17} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                    {toBanglaNum('1200+')}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {t.home.studentsCount}
                  </p>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#e8f7f0] text-[#004d34] flex items-center justify-center shrink-0 border border-[#a7f3d0]">
                  <Heart size={17} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-none">
                    {toBanglaNum('100%')}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {t.home.passRate}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Quote Box - Positioned on Bottom Right */}
            <div className="max-w-[340px] sm:max-w-[360px] w-full bg-[#004d34]/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-emerald-500/30 shrink-0">
              <div className="flex items-start gap-2.5">
                <span className="text-2xl font-serif text-white/90 leading-none select-none">“</span>
                <div>
                  <p className="text-xs font-medium leading-snug text-emerald-50">
                    {heroQuotes[currentSlide % heroQuotes.length].quote}
                  </p>
                  <p className="text-[10px] text-emerald-300 font-semibold mt-1.5">
                    — {heroQuotes[currentSlide % heroQuotes.length].author}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-3 mt-2.5 border-t border-emerald-800/80">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroQuotes.length - 1 : prev - 1))}
                  aria-label="Previous quote"
                  className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-emerald-100 transition cursor-pointer shadow-xs"
                >
                  <ChevronLeft size={14} />
                </button>

                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentSlide % 3
                          ? 'bg-white w-4'
                          : 'bg-white/40 w-1.5'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % heroQuotes.length)}
                  aria-label="Next quote"
                  className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-emerald-100 transition cursor-pointer shadow-xs"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LATEST NOTICE TICKER BAR (Positioned below hero, sticks under Navbar upon scroll) */}
      <div
        style={{ top: `${navbarHeight}px` }}
        className="sticky z-40 w-full bg-[#004d34] text-white py-3 sm:py-3.5 shadow-md border-b border-emerald-900/40 transition-all"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Megaphone Icon + Latest Notice Label */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Megaphone size={19} className="text-emerald-300 shrink-0" />
            <span className="font-bold text-white text-xs sm:text-[13px] tracking-wide whitespace-nowrap">
              {language === 'bn' ? 'সর্বশেষ নোটিশ:' : 'Latest Notice:'}
            </span>
          </div>

          {/* Center: Marquee with Notice Title + Date */}
          <div className="flex-1 overflow-hidden mx-1 sm:mx-3">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              onMouseEnter={(e: any) => e.currentTarget && e.currentTarget.stop && e.currentTarget.stop()}
              onMouseLeave={(e: any) => e.currentTarget && e.currentTarget.start && e.currentTarget.start()}
              className="w-full text-white text-xs sm:text-[13px] align-middle cursor-pointer"
            >
              <span className="inline-flex items-center gap-6">
                {tickerNotices.map((notice, idx) => (
                  <Link
                    key={idx}
                    to={notice.link}
                    className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition-colors group"
                  >
                    <span className="text-white/95 font-medium group-hover:underline">
                      {notice.title}
                    </span>
                    <span className="text-emerald-200 text-xs font-semibold whitespace-nowrap">
                      ({notice.date})
                    </span>
                    <span className="text-emerald-400/60 mx-2.5 font-bold">•</span>
                  </Link>
                ))}
              </span>
            </marquee>
          </div>

          {/* Right: View All Notices Link */}
          <Link
            to="/notices"
            className="text-xs sm:text-[13px] font-semibold text-white/95 hover:text-white flex items-center gap-1.5 shrink-0 whitespace-nowrap transition-colors"
          >
            <span>{t.home.allNotices}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* 3. 5-CARD QUICK ACTION ROW (Exact matching Image) */}
      <div className="container mx-auto mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8">
        <ScrollStaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {/* Card 1: Online Admission */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <Link
                to="/admission"
                className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-105 transition">
                    <Laptop size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                      {t.home.quickOnlineAdmission}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {t.home.quickOnlineAdmissionDesc}
                    </p>
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                  ›
                </span>
              </Link>
            </HoverCard>
          </ScrollStaggerItem>

          {/* Card 2: Class Routine */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <Link
                to="/academic"
                className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition">
                    <Calendar size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                      {t.home.quickClassRoutine}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {t.home.quickClassRoutineDesc}
                    </p>
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                  ›
                </span>
              </Link>
            </HoverCard>
          </ScrollStaggerItem>

          {/* Card 3: Notice Board */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <Link
                to="/notices"
                className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100 group-hover:scale-105 transition">
                    <Bell size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                      {t.home.quickNoticeBoard}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {t.home.quickNoticeBoardDesc}
                    </p>
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                  ›
                </span>
              </Link>
            </HoverCard>
          </ScrollStaggerItem>

          {/* Card 4: Academic Calendar */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <Link
                to="/academic"
                className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-105 transition">
                    <Calendar size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                      {t.home.quickAcademicCalendar}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {t.home.quickAcademicCalendarDesc}
                    </p>
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                  ›
                </span>
              </Link>
            </HoverCard>
          </ScrollStaggerItem>

          {/* Card 5: Contact & Support */}
          <ScrollStaggerItem className="col-span-2 sm:col-span-1">
            <HoverCard className="h-full">
              <Link
                to="/contact"
                className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100 group-hover:scale-105 transition">
                    <Headphones size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                      {t.home.quickContactSupport}
                    </h4>
                    <p className="text-[10px] text-slate-400 truncate">
                      {t.home.quickContactSupportDesc}
                    </p>
                  </div>
                </div>
                <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
                  ›
                </span>
              </Link>
            </HoverCard>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </div>

      {/* 4. ABOUT OUR SCHOOL: A HOME FOR LEARNING, A FUTURE OF POSSIBILITIES */}
      <div className="container mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left: Video Thumbnail */}
              <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop&q=80"
                  alt="Students of SOS Hermann Gmeiner School Khulna"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 group-hover:scale-110 transition cursor-pointer">
                    <Play size={20} className="fill-white translate-x-0.5" />
                  </div>
                  <span className="text-xs font-bold tracking-wider">
                    {t.home.watchVideo}
                  </span>
                  <span className="text-[10px] text-slate-300">{t.home.videoDuration}</span>
                </div>
              </div>

              {/* Middle: Narrative & CTA */}
              <div className="lg:col-span-4 space-y-3.5">
                <div className="inline-flex items-center gap-1.5 text-[#059669] text-[11px] font-extrabold uppercase tracking-wider">
                  <span>{t.home.aboutTag}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {t.home.aboutTitle}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.home.aboutDesc}
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-50 text-[#004d34] border border-slate-300/80 px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs"
                  >
                    <span>{t.home.readHistory}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Right: 4 Value Items */}
              <div className="lg:col-span-4 space-y-3">
                {[
                  {
                    icon: <Users size={16} />,
                    title: t.home.featureValTitle,
                    desc: t.home.featureValDesc,
                  },
                  {
                    icon: <Activity size={16} />,
                    title: t.home.featureDevTitle,
                    desc: t.home.featureDevDesc,
                  },
                  {
                    icon: <ShieldCheck size={16} />,
                    title: t.home.featureCampusTitle,
                    desc: t.home.featureCampusDesc,
                  },
                  {
                    icon: <Globe size={16} />,
                    title: t.home.featureGlobalTitle,
                    desc: t.home.featureGlobalDesc,
                  },
                ].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-slate-50/80 border border-slate-100 p-3 rounded-2xl"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                      {val.icon}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 leading-tight">
                        {val.title}
                      </h5>
                      <p className="text-[10px] text-slate-500 font-medium">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 5. OUR PROGRAMS: ACADEMIC & CO-CURRICULAR EXCELLENCE */}
      <div className="container mx-auto my-14 sm:my-16 px-4 sm:px-6 lg:px-8">
        <section>
          {/* Centered Heading Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="text-center max-w-2xl mx-auto space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
                {language === 'bn' ? 'আমাদের কার্যক্রম' : 'OUR PROGRAMS'}
              </span>
              <h2 className="text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-snug">
                {language === 'bn' ? 'একাডেমিক ও সহশিক্ষা উৎকর্ষ' : 'Academic & Co-Curricular Excellence'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {language === 'bn'
                  ? 'আমরা পাঠ্যবইয়ের পাশাপাশি শিক্ষার্থীদের সার্বিক মেধা ও সুপ্ত প্রতিভা বিকাশে প্রতিশ্রুতিবদ্ধ।'
                  : 'We offer a well-rounded learning experience that goes beyond textbooks.'}
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Cards Grid */}
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Card 1: Academic Programs */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                      <img
                        src="/programs/program_academic.png"
                        alt="Academic Programs"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                      <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    </div>

                    <div className="px-2 mt-2.5">
                      <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                        {language === 'bn' ? 'একাডেমিক কার্যক্রম' : 'Academic Programs'}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                        {language === 'bn' ? 'আধুনিক স্মার্ট পাঠদান পদ্ধতির মাধ্যমে শক্তিশালী ভিত্তি।' : 'Strong foundation with modern teaching methods.'}
                      </p>
                    </div>
                  </div>

                  <div className="px-2 pt-5">
                    <Link
                      to="/academic-programs"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                    >
                      <span>{t.common.readMore}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Card 2: Sports & Athletics */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                      <img
                        src="/programs/program_sports.png"
                        alt="Sports & Athletics"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                      <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="13" r="8"/>
                        <path d="M12 9v4l2 2"/>
                        <path d="M12 2v3"/>
                        <path d="M9 2h6"/>
                      </svg>
                    </div>

                    <div className="px-2 mt-2.5">
                      <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                        {language === 'bn' ? 'খেলাধুলা ও শরীরচর্চা' : 'Sports & Athletics'}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                        {language === 'bn' ? 'খেলাধুলা ও দলগত চর্চার মাধ্যমে শৃঙ্খলা ও মনোবল গঠন।' : 'Building discipline through sports and teamwork.'}
                      </p>
                    </div>
                  </div>

                  <div className="px-2 pt-5">
                    <Link
                      to="/sports-athletics"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                    >
                      <span>{t.common.readMore}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Card 3: Cultural Activities */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                      <img
                        src="/programs/program_cultural.png"
                        alt="Cultural Activities"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                      <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="8" r="3"/>
                        <circle cx="16" cy="8" r="3"/>
                        <circle cx="8" cy="16" r="3"/>
                        <circle cx="16" cy="16" r="3"/>
                      </svg>
                    </div>

                    <div className="px-2 mt-2.5">
                      <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                        {language === 'bn' ? 'সাংস্কৃতিক কার্যক্রম' : 'Cultural Activities'}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                        {language === 'bn' ? 'প্রত্যেক শিক্ষার্থীর সুপ্ত প্রতিভা ও সৃজনশীলতার বিকাশ।' : 'Nurturing creativity and talent in every child.'}
                      </p>
                    </div>
                  </div>

                  <div className="px-2 pt-5">
                    <Link
                      to="/cultural-activities"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                    >
                      <span>{t.common.readMore}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Card 4: Clubs & Societies */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                      <img
                        src="/programs/program_clubs.png"
                        alt="Clubs & Societies"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                      <Users size={20} className="text-white" />
                    </div>

                    <div className="px-2 mt-2.5">
                      <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                        {language === 'bn' ? 'ক্লাব ও সোসাইটি' : 'Clubs & Societies'}
                      </h4>
                      <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                        {language === 'bn' ? 'সামাজিক দায়িত্ববোধ ও নেতৃত্বগুণের ধারাবাহিক বিকাশ।' : 'Leadership through engagement and service.'}
                      </p>
                    </div>
                  </div>

                  <div className="px-2 pt-5">
                    <Link
                      to="/clubs-societies"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                    >
                      <span>{t.common.readMore}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          </ScrollStaggerContainer>
        </section>
      </div>

      {/* 7. CAMPUS LIFE: MOMENTS THAT MAKE US PROUD */}
      <div className="container mx-auto mt-12 sm:mt-14 px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold text-[#059669] uppercase tracking-wider mb-1">
                  <span>{language === 'bn' ? 'ক্যাম্পাস জীবন' : 'CAMPUS LIFE'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {language === 'bn' ? 'আমাদের আনন্দঘন মুহূর্ত' : 'Moments That Make Us Proud'}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'bn'
                    ? 'বিদ্যালয়ের সমৃদ্ধ ক্যাম্পাস জীবন, সাফল্য ও অবিস্মরণীয় মুহূর্তসমূহ।'
                    : 'A glimpse into our vibrant campus life, achievements, and unforgettable moments.'}
                </p>
              </div>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#004d34] hover:text-emerald-800 border border-emerald-600/70 hover:border-emerald-700 bg-white hover:bg-emerald-50/60 px-4 py-2 rounded-xl transition shadow-2xs self-start sm:self-auto"
              >
                <span>{language === 'bn' ? 'পূর্ণাঙ্গ গ্যালারি দেখুন' : 'View Full Gallery'}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Smooth Auto-sliding Infinite Photo Track */}
            <div className="relative overflow-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
              <div className="campus-slider-track flex gap-4 w-max">
                {[...CAMPUS_LIFE_PHOTOS, ...CAMPUS_LIFE_PHOTOS].map((photo, index) => (
                  <div
                    key={index}
                    className="w-48 sm:w-56 md:w-60 lg:w-64 aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs group relative shrink-0 cursor-pointer"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                      <p className="text-xs font-bold text-white leading-tight">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 8. LEADERSHIP MESSAGES: DUAL CARDS */}
      <div className="container mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chairman Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-4">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[10px]">
                    ★
                  </span>
                  <span>{language === 'bn' ? 'সভাপতির বাণী' : 'Message from the Chairman'}</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <Link
                    to="/profile/chairman"
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 shadow-sm block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={LEADERSHIP.chairman.image}
                      alt={LEADERSHIP.chairman.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>
                  <div className="flex-1">
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      "{language === 'bn'
                        ? 'একটি মানসম্মত শিক্ষাপ্রতিষ্ঠান শুধু পাঠ্যপুস্তকের জ্ঞান নয়, বরং চরিত্র গঠন ও নৈতিকতার আলোকবর্তিকা হিসেবে কাজ করে।'
                        : LEADERSHIP.chairman.quote}"
                    </p>
                    <div className="mt-3">
                      <Link to="/profile/chairman" className="hover:text-amber-800 transition-colors">
                        <h4 className="font-extrabold text-slate-900 text-sm">
                          {language === 'bn' ? 'ড. মোঃ রফিকুল ইসলাম' : LEADERSHIP.chairman.name}
                        </h4>
                      </Link>
                      <p className="text-[11px] text-amber-700 font-bold">
                        {language === 'bn' ? 'সভাপতি, পরিচালনা পর্ষদ' : 'Chairman, Governing Body'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <Link
                  to="/profile/chairman"
                  aria-label="View Chairman Profile"
                  className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-[#004d34] text-[#004d34] hover:text-white flex items-center justify-center transition cursor-pointer"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Principal Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-4">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px]">
                    🎓
                  </span>
                  <span>{t.home.headmasterTitle}</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <Link
                    to="/profile/principal"
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0 shadow-sm block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={LEADERSHIP.principal.image}
                      alt={LEADERSHIP.principal.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>
                  <div className="flex-1">
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      "{language === 'bn'
                        ? 'প্রতিটি শিশুর মধ্যে রয়েছে অপার সম্ভাবনা। আমাদের দায়িত্ব হলো ভালোবাসাপূর্ণ পরিবেশে সেই সম্ভাবনাকে প্রস্ফুটিত করা।'
                        : LEADERSHIP.principal.quote}"
                    </p>
                    <div className="mt-3">
                      <Link to="/profile/principal" className="hover:text-emerald-800 transition-colors">
                        <h4 className="font-extrabold text-slate-900 text-sm">
                          {language === 'bn' ? 'মাকসুদা সুলতানা' : LEADERSHIP.principal.name}
                        </h4>
                      </Link>
                      <p className="text-[11px] text-emerald-800 font-bold">
                        {t.adminPage.headmaster}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <Link
                  to="/profile/principal"
                  aria-label="View Principal Profile"
                  className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-[#004d34] text-[#004d34] hover:text-white flex items-center justify-center transition cursor-pointer"
                >
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 9. 3-COLUMN BOTTOM SECTION: NEWS & EVENTS | UPCOMING EVENTS | QUICK LINKS */}
      <div className="container mx-auto mt-14 px-4 sm:px-6 lg:px-8">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {/* Column 1: News & Events (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {language === 'bn' ? 'সংবাদ ও নোটিশ' : 'News & Events'}
                  </h3>
                </div>
                <Link
                  to="/notices"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <span>{language === 'bn' ? 'সকল দেখুন' : 'View All'}</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="space-y-3">
                {NEWS_EVENTS.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link || '/notices'}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex flex-col items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-[#004d34] group-hover:text-white transition">
                      <span className="text-xs font-black leading-none">
                        {language === 'bn' ? toBanglaNum(item.day) : item.day}
                      </span>
                      <span className="text-[9px] font-bold uppercase">
                        {language === 'bn' ? (item.monthBn || item.month) : item.month}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block text-[9px] font-bold uppercase bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mb-0.5">
                        {language === 'bn' ? (item.categoryBn || item.category) : item.category}
                      </span>
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition truncate">
                        {language === 'bn' ? (item.titleBn || item.title) : item.title}
                      </h5>
                      <p className="text-[10px] text-slate-400 font-medium">
                        {language === 'bn' ? (item.dateBn || toBanglaNum(item.date)) : item.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Upcoming Events (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {language === 'bn' ? 'আসন্ন অনুষ্ঠানসমূহ' : 'Upcoming Events'}
                  </h3>
                </div>
                <Link
                  to="/notices"
                  className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>{language === 'bn' ? 'ক্যালেন্ডার দেখুন' : 'View Calendar'}</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="space-y-3">
                {UPCOMING_EVENTS.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link || '/notices'}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-800 flex flex-col items-center justify-center shrink-0 border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition">
                      <span className="text-xs font-black leading-none">
                        {language === 'bn' ? toBanglaNum(item.day) : item.day}
                      </span>
                      <span className="text-[9px] font-bold uppercase">
                        {language === 'bn' ? (item.monthBn || item.month) : item.month}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-purple-800 transition truncate">
                      {language === 'bn' ? (item.titleBn || item.title) : item.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Quick Links / Quick Access (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                  <span>{language === 'bn' ? 'কুইক এক্সেস' : 'Quick Access'}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: language === 'bn' ? 'শিক্ষার্থী পোর্টাল' : 'Student Portal', path: '/students' },
                  { label: language === 'bn' ? 'শিক্ষক পোর্টাল' : 'Teacher Portal', path: '/faculty' },
                  { label: language === 'bn' ? 'একাডেমিক' : 'Academic', path: '/academic' },
                  { label: language === 'bn' ? 'ডাউনলোড' : 'Downloads', path: '/downloads' },
                  { label: language === 'bn' ? 'একাডেমিক ক্যালেন্ডার' : 'Academic Calendar', path: '/academic' },
                  { label: language === 'bn' ? 'নিয়ম ও নীতিমালা' : 'Rules & Policies', path: '/about' },
                  { label: language === 'bn' ? 'প্রাক্তন শিক্ষার্থী' : 'Alumni', path: '/alumni' },
                  { label: language === 'bn' ? 'যোগাযোগ' : 'Contact', path: '/contact' },
                ].map((lnk) => (
                  <Link
                    key={lnk.label}
                    to={lnk.path}
                    className="flex items-center gap-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 p-2.5 rounded-xl text-xs font-bold transition border border-slate-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span className="truncate">{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 10. BE A PART OF OUR JOURNEY CTA BANNER */}
      <ScrollReveal duration={0.65} distance={30}>
        <section className="w-full relative overflow-hidden bg-[#004d34] border-b border-emerald-900/60 mt-16">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="/journey_bg.png"
              alt="SOS Hermann Gmeiner School Journey"
              className="w-full h-full object-cover object-center select-none brightness-105 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004d34]/70 via-[#004d34]/35 to-[#004d34]/65 pointer-events-none" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {language === 'bn' ? 'আমাদের পথচলার অংশ হোন' : 'Be a Part of Our Journey'}
              </h2>
              <p className="text-xs sm:text-[13px] text-emerald-100/90 leading-relaxed font-normal mt-1.5">
                {language === 'bn'
                  ? 'একসাথে আমরা ভবিষ্যৎ প্রজন্মের জন্য একটি সুন্দর, মানবিক ও আলোকিত ভবিষ্যৎ গড়ে তুলতে পারি।'
                  : 'Together we can create a brighter, kinder and more inclusive future for our children.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Link
                to="/admission"
                className="bg-white hover:bg-slate-100 text-[#004d34] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.home.applyNow}</span>
                <ArrowRight size={15} className="text-[#004d34]" />
              </Link>
              <Link
                to="/contact"
                className="border border-white/60 hover:border-white text-white hover:bg-white/10 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
