import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Bell,
  Headphones,
  Laptop,
  Play,
  Heart,
  Globe,
  Quote,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Trophy,
  Activity,
  Palette,
  Eye,
} from 'lucide-react';
import {
  SCHOOL_INFO,
  PROGRAMS,
  CAMPUS_LIFE_PHOTOS,
  LEADERSHIP,
  NEWS_EVENTS,
  UPCOMING_EVENTS,
} from '../data/schoolData';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroQuotes = [
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

  const tickerNotices = [
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
                'linear-gradient(to right, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0.96) 36%, rgba(255,255,255,0.6) 44%, rgba(255,255,255,0.15) 52%, rgba(255,255,255,0) 60%)',
            }}
          />

          {/* 2. Bottom Stats White Fade: Solid up to 100% Heart for Children box (52%), then gradually decreasing opacity to 75% */}
          <div
            className="absolute bottom-0 left-0 w-full h-[260px] sm:h-[290px] lg:h-[320px] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 52%, rgba(255,255,255,0.92) 57%, rgba(255,255,255,0.6) 64%, rgba(255,255,255,0.2) 71%, rgba(255,255,255,0) 77%)',
              WebkitMaskImage:
                'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.15) 90%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* 3. Soft upward blend feathering into building stairs alcove */}
          <div
            className="absolute bottom-0 left-0 w-[65%] h-[340px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 25% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0) 100%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto relative z-10 pt-12 sm:pt-16 pb-8 flex-1 flex flex-col justify-between">
          {/* Upper Content: Text on Left (Building fully visible in Center & Right) */}
          <div className="max-w-xl space-y-5">
            {/* Category Tracker */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#059669]">
              <span>EDUCATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              <span>CHARACTER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
              <span>A BRIGHTER FUTURE</span>
            </div>

            {/* Big Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-slate-900 tracking-tight leading-[1.04]">
              Nurturing <br />
              Young Minds <br />
              <span className="text-[#058c58]">for a Better World</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-md font-normal">
              SOS Hermann Gmeiner School Khulna provides quality education,
              care and a values-based learning environment to help children grow
              into responsible global citizens.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3.5">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#064e3b] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-2xs hover:shadow cursor-pointer"
              >
                <span>Learn More</span>
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
                    1987
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Established
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
                    117188+
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Lives Touched
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
                    25+
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Qualified Teachers
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
                    1200+
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Students
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
                    100%
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Heart for Children
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
                    {heroQuotes[currentSlide].quote}
                  </p>
                  <p className="text-[10px] text-emerald-300 font-semibold mt-1.5">
                    — {heroQuotes[currentSlide].author}
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
                  {[0, 1, 2, 3].map((idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentSlide % 4
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

      {/* 3. 5-CARD QUICK ACTION ROW (Exact matching Image) */}
      <div className="container mx-auto mt-8">
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {/* Card 1: Online Admission */}
          <Link
            to="/admission"
            className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-105 transition">
                <Laptop size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                  Online Admission
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  Apply in a few steps
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
              ›
            </span>
          </Link>

          {/* Card 2: Class Routine */}
          <Link
            to="/academic"
            className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100 group-hover:scale-105 transition">
                <Calendar size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                  Class Routine
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  View class schedules
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
              ›
            </span>
          </Link>

          {/* Card 3: Notice Board */}
          <Link
            to="/notices"
            className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100 group-hover:scale-105 transition">
                <Bell size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                  Notice Board
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  Latest announcements
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
              ›
            </span>
          </Link>

          {/* Card 4: Academic Calendar */}
          <Link
            to="/academic"
            className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-100 group-hover:scale-105 transition">
                <Calendar size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                  Academic Calendar
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  Important dates
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
              ›
            </span>
          </Link>

          {/* Card 5: Contact & Support */}
          <Link
            to="/contact"
            className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition flex items-center justify-between group col-span-2 sm:col-span-1"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100 group-hover:scale-105 transition">
                <Headphones size={18} />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#004d34]">
                  Contact & Support
                </h4>
                <p className="text-[10px] text-slate-400 truncate">
                  We're here to help
                </p>
              </div>
            </div>
            <span className="text-slate-300 group-hover:text-[#004d34] group-hover:translate-x-0.5 transition-all text-sm font-bold">
              ›
            </span>
          </Link>
        </section>
      </div>

      {/* 4. ABOUT OUR SCHOOL: A HOME FOR LEARNING, A FUTURE OF POSSIBILITIES */}
      <div className="container mx-auto mt-14">
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
                  Watch Our Story
                </span>
                <span className="text-[10px] text-slate-300">1:45 minutes</span>
              </div>
            </div>

            {/* Middle: Narrative & CTA */}
            <div className="lg:col-span-4 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 text-[#059669] text-[11px] font-extrabold uppercase tracking-wider">
                <span>ABOUT OUR SCHOOL</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                A Home for Learning, <br />
                A Future of Possibilities
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                SOS Hermann Gmeiner School Khulna is a premier educational
                institution founded in <strong className="text-slate-900">1987</strong> at
                Gollamari, Khulna under SOS Children's Villages International.
                We provide a safe, loving and disciplined environment with modern
                education, moral values and co-curricular activities for holistic
                development.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-emerald-50 text-[#004d34] border border-slate-300/80 px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs"
                >
                  <span>Read Full History</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Right: 4 Value Items */}
            <div className="lg:col-span-4 space-y-3">
              {[
                {
                  icon: <Users size={16} />,
                  title: 'Value-Based Education',
                  desc: 'Integrity, respect, empathy',
                },
                {
                  icon: <Activity size={16} />,
                  title: 'Holistic Development',
                  desc: 'Academic, sports, arts & life skills',
                },
                {
                  icon: <ShieldCheck size={16} />,
                  title: 'Safe & Green Campus',
                  desc: 'A secure and nurturing environment',
                },
                {
                  icon: <Globe size={16} />,
                  title: 'Global Perspective',
                  desc: 'Preparing responsible global citizens',
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
      </div>

      {/* 5. OUR PROGRAMS: ACADEMIC & CO-CURRICULAR EXCELLENCE (Exact Match to Reference Screenshot) */}
      <section className="w-full bg-[#f0faf5] pt-16 pb-14 mt-16 border-t border-emerald-100/40">
        <div className="container mx-auto">
          {/* Centered Heading Block */}
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-snug">
              Academic & Co-Curricular Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              We offer a well-rounded learning experience that goes beyond textbooks.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {/* Card 1: Academic Programs */}
            <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src="/programs/program_academic.png"
                    alt="Academic Programs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Circular Badge Overlapping Bottom-Left of Photo */}
                <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                  <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="px-2 mt-2.5">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                    Academic Programs
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                    Strong foundation with modern teaching methods.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-2 pt-5">
                <Link
                  to="/academic"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                >
                  <span>Learn More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Sports & Athletics */}
            <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src="/programs/program_sports.png"
                    alt="Sports & Athletics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Circular Badge Overlapping Bottom-Left of Photo */}
                <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                  <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8"/>
                    <path d="M12 9v4l2 2"/>
                    <path d="M12 2v3"/>
                    <path d="M9 2h6"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="px-2 mt-2.5">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                    Sports & Athletics
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                    Building discipline through sports and teamwork.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-2 pt-5">
                <Link
                  to="/academic"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                >
                  <span>Learn More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Cultural Activities */}
            <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src="/programs/program_cultural.png"
                    alt="Cultural Activities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Circular Badge Overlapping Bottom-Left of Photo */}
                <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                  <svg className="w-5 h-5 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="3"/>
                    <circle cx="16" cy="8" r="3"/>
                    <circle cx="8" cy="16" r="3"/>
                    <circle cx="16" cy="16" r="3"/>
                  </svg>
                </div>

                {/* Text Content */}
                <div className="px-2 mt-2.5">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                    Cultural Activities
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                    Nurturing creativity and talent in every child.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-2 pt-5">
                <Link
                  to="/academic"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                >
                  <span>Learn More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Clubs & Societies */}
            <div className="bg-white rounded-[24px] p-3.5 sm:p-4 pb-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src="/programs/program_clubs.png"
                    alt="Clubs & Societies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Circular Badge Overlapping Bottom-Left of Photo */}
                <div className="-mt-6 ml-3 w-12 h-12 rounded-full bg-[#004d34] border-[3.5px] border-white text-white flex items-center justify-center shadow-md relative z-10">
                  <Users size={20} className="text-white" />
                </div>

                {/* Text Content */}
                <div className="px-2 mt-2.5">
                  <h4 className="font-bold text-slate-900 text-base leading-snug group-hover:text-[#004d34] transition-colors">
                    Clubs & Societies
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-1.5 leading-relaxed">
                    Leadership through engagement and service.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-2 pt-5">
                <Link
                  to="/students"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-[#064e3b] group/link"
                >
                  <span>Learn More</span>
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST NOTICE TICKER BAR (Pixel-Perfect Full-Bleed Matching Reference Screenshot) */}
      <div className="w-full bg-[#004d34] text-white py-3.5 sm:py-4 shadow-sm relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
          {/* Left: Megaphone Icon + Latest Notice Label */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Megaphone size={19} className="text-white shrink-0" />
            <span className="font-bold text-white text-xs sm:text-[13px] tracking-wide whitespace-nowrap">
              Latest Notice:
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
            <span>View All Notices</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* 7. CAMPUS LIFE: MOMENTS THAT MAKE US PROUD */}
      <div className="container mx-auto mt-12 sm:mt-14">
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-extrabold text-[#059669] uppercase tracking-wider mb-1">
                <span>CAMPUS LIFE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Moments That Make Us Proud
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                A glimpse into our vibrant campus life, achievements, and unforgettable moments.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#004d34] hover:text-emerald-800 border border-emerald-600/70 hover:border-emerald-700 bg-white hover:bg-emerald-50/60 px-4 py-2 rounded-xl transition shadow-2xs self-start sm:self-auto"
            >
              <span>View Full Gallery</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* 6-Photo Carousel Grid */}
          <div className="relative group/carousel">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {CAMPUS_LIFE_PHOTOS.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs group relative cursor-pointer"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-2.5">
                    <p className="text-[11px] font-bold text-white leading-tight">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Left/Right Carousel indicators */}
            <button
              aria-label="Previous photos"
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-emerald-50 hover:text-[#004d34] transition cursor-pointer hidden lg:flex"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              aria-label="Next photos"
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-emerald-50 hover:text-[#004d34] transition cursor-pointer hidden lg:flex"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* 8. LEADERSHIP MESSAGES: DUAL CARDS */}
      <div className="container mx-auto mt-14">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Chairman Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 mb-4">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[10px]">
                  ★
                </span>
                <span>Message from the Chairman</span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 shadow-sm">
                  <img
                    src={LEADERSHIP.chairman.image}
                    alt={LEADERSHIP.chairman.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{LEADERSHIP.chairman.quote}"
                  </p>
                  <div className="mt-3">
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      {LEADERSHIP.chairman.name}
                    </h4>
                    <p className="text-[11px] text-amber-700 font-bold">
                      Chairman, Governing Body
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <Link
                to="/administration"
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
                <span>Message from the Principal</span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-600 shrink-0 shadow-sm">
                  <img
                    src={LEADERSHIP.principal.image}
                    alt={LEADERSHIP.principal.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{LEADERSHIP.principal.quote}"
                  </p>
                  <div className="mt-3">
                    <h4 className="font-extrabold text-slate-900 text-sm">
                      {LEADERSHIP.principal.name}
                    </h4>
                    <p className="text-[11px] text-emerald-800 font-bold">
                      Principal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <Link
                to="/administration"
                className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-[#004d34] text-[#004d34] hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 9. 3-COLUMN BOTTOM SECTION: NEWS & EVENTS | UPCOMING EVENTS | QUICK LINKS */}
      <div className="container mx-auto mt-14">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Column 1: News & Events (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  News & Events
                </h3>
              </div>
              <Link
                to="/notices"
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>

            <div className="space-y-3">
              {NEWS_EVENTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex flex-col items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-[#004d34] group-hover:text-white transition">
                    <span className="text-xs font-black leading-none">{item.day}</span>
                    <span className="text-[9px] font-bold uppercase">{item.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[9px] font-bold uppercase bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mb-0.5">
                      {item.category}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-emerald-800 transition truncate">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-slate-400 font-medium">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Upcoming Events (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Upcoming Events
                </h3>
              </div>
              <Link
                to="/notices"
                className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
              >
                <span>View Calendar</span>
                <span>→</span>
              </Link>
            </div>

            <div className="space-y-3">
              {UPCOMING_EVENTS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-800 flex flex-col items-center justify-center shrink-0 border border-purple-100 group-hover:bg-purple-700 group-hover:text-white transition">
                    <span className="text-xs font-black leading-none">{item.day}</span>
                    <span className="text-[9px] font-bold uppercase">{item.month}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 group-hover:text-purple-800 transition truncate">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links (4 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                <span>Quick Links</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: 'Student Portal', path: '/students' },
                { label: 'Teacher Portal', path: '/faculty' },
                { label: 'Library', path: '/academic' },
                { label: 'Downloads', path: '/downloads' },
                { label: 'Academic Calendar', path: '/academic' },
                { label: 'Rules & Policies', path: '/about' },
                { label: 'Alumni', path: '/about' },
                { label: 'Contact Us', path: '/contact' },
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
      </div>

      {/* 10. BE A PART OF OUR JOURNEY CTA BANNER (Pixel-Perfect Match to media_1790093511919.png) */}
      <section className="w-full relative overflow-hidden bg-[#004d34] border-b border-emerald-900/60 mt-16">
        {/* Background Image of Students Matching Reference */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/journey_bg.png"
            alt="SOS Hermann Gmeiner School Journey"
            className="w-full h-full object-cover object-center select-none brightness-105 contrast-105"
          />
          {/* Subtle contrast gradient ensuring 100% text legibility while keeping the background image prominently visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#004d34]/70 via-[#004d34]/35 to-[#004d34]/65 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Be a Part of Our Journey
            </h2>
            <p className="text-xs sm:text-[13px] text-emerald-100/90 leading-relaxed font-normal mt-1.5">
              Together we can create a brighter, kinder and more inclusive future for our children.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              to="/admission"
              className="bg-white hover:bg-slate-100 text-[#004d34] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for Admission</span>
              <ArrowRight size={15} className="text-[#004d34]" />
            </Link>
            <Link
              to="/contact"
              className="border border-white/60 hover:border-white text-white hover:bg-white/10 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
