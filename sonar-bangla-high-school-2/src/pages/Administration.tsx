import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  Scale,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import { LEADERSHIP } from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard,
} from '../components/ui/MotionComponents';

export const Administration: React.FC = () => {
  const { language } = useLanguage();
  const isBn = language === 'bn';
  const [, setSliderIndex] = useState(0);

  // Governing Body Members (Full committee displayed in responsive grid)
  const governingMembers = [
    {
      id: '1',
      name: isBn ? 'মাকসুদা সুলতানা' : 'Maksuda Sultana',
      role: isBn ? 'সভাপতি, গভর্নিং বডি' : 'President (Chairman)',
      tag: isBn ? 'সভাপতি' : 'PRESIDENT',
      tagColor: 'bg-[#e8f7ee] text-[#004d34] border-emerald-100',
      image: LEADERSHIP.chairman.image,
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80',
      profileLink: '/profile/chairman',
    },
    {
      id: '2',
      name: isBn ? 'ইন্দ্রজিৎ কুমার মণ্ডল' : 'Indrajit Kumar Mondal',
      role: isBn ? 'ভারপ্রাপ্ত অধ্যক্ষ ও সদস্য সচিব' : 'Member Secretary (Acting)',
      tag: isBn ? 'সদস্য সচিব' : 'MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      image: LEADERSHIP.principal.image,
      fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
      profileLink: '/profile/principal',
    },
    {
      id: '3',
      name: isBn ? 'প্রতিনিধি,' : 'Representative,',
      subtitle: isBn ? "এস ও এস চিলড্রেনস ভিলেজ" : "SOS Children's Village",
      role: isBn ? "প্রতিনিধি, এস ও এস চিলড্রেনস ভিলেজ" : "Representative, SOS Children's Village",
      tag: isBn ? 'নির্বাহী সদস্য' : 'EXECUTIVE MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      isAvatar: true,
      avatarType: 'executive',
    },
    {
      id: '4',
      name: isBn ? 'অভিভাবক সদস্য' : 'Guardian Member',
      role: isBn ? 'নির্বাচিত অভিভাবক প্রতিনিধি' : 'Elected Guardian Rep.',
      tag: isBn ? 'সদস্য' : 'MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      isAvatar: true,
      avatarType: 'guardian',
    },
    {
      id: '5',
      name: isBn ? 'শিক্ষক প্রতিনিধি' : 'Teacher Representative',
      role: isBn ? 'নির্বাচিত শিক্ষক প্রতিনিধি' : 'Elected Teacher Rep.',
      tag: isBn ? 'শিক্ষক প্রতিনিধি' : 'TEACHER REP.',
      tagColor: 'bg-[#fef3c7] text-[#92400e] border-amber-100',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80',
      profileLink: '/faculty/2',
    },
    {
      id: '6',
      name: isBn ? 'মহিলা অভিভাবক সদস্য' : 'Female Guardian Member',
      role: isBn ? 'সংরক্ষিত নারী অভিভাবক প্রতিনিধি' : 'Elected Guardian Rep.',
      tag: isBn ? 'অভিভাবক প্রতিনিধি' : 'GUARDIAN REP.',
      tagColor: 'bg-[#fce7f3] text-[#9d174d] border-pink-100',
      isAvatar: true,
      avatarType: 'guardian',
    },
    {
      id: '7',
      name: isBn ? 'বিশিষ্ট শিক্ষানুরাগী সদস্য' : 'Educationist Member',
      role: isBn ? 'মনোনীত শিক্ষা বিশেষজ্ঞ' : 'Nominated Education Specialist',
      tag: isBn ? 'বিশেষ সদস্য' : 'SPECIAL MEMBER',
      tagColor: 'bg-[#f3e8ff] text-[#6b21a8] border-purple-100',
      isAvatar: true,
      avatarType: 'executive',
    },
    {
      id: '8',
      name: isBn ? 'শিক্ষা বোর্ড প্রতিনিধি' : 'Education Board Rep.',
      subtitle: isBn ? 'যশোর শিক্ষা বোর্ড' : 'BISE Jessore',
      role: isBn ? 'বোর্ড কর্তৃক মনোনীত সদস্য' : 'Board Nominated Member',
      tag: isBn ? 'বোর্ড মনোনীত' : 'BOARD NOMINEE',
      tagColor: 'bg-[#ecfdf5] text-[#065f46] border-emerald-100',
      isAvatar: true,
      avatarType: 'executive',
    },
  ];

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade (Matching media_1790103321289.jpg) */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Campus Building Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />

          {/* Precision Left-to-Right White Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />

          {/* Decorative Subtle Botanical / Leaf Watermark on Far Left */}
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-48 h-80 opacity-[0.07] pointer-events-none text-emerald-700">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
              <path d="M30 170 C10 120 20 60 70 20 C75 60 70 120 30 170 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
              <Home size={14} />
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{isBn ? 'প্রশাসন ও গভর্নিং বডি' : 'Administration'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
              {/* Pill Tag Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                <Users size={14} className="text-[#059669]" />
                <span>{isBn ? 'প্রশাসন ও পরিচালনা পর্ষদ' : 'ADMINISTRATION & GOVERNANCE'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
                {isBn ? (
                  <>
                    প্রশাসন ও <br />
                    পরিচালনা পর্ষদ
                  </>
                ) : (
                  <>
                    Administration & <br />
                    Governance
                  </>
                )}
              </h1>

              {/* Short Green Accent Line Under Title */}
              <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

              {/* Subtitle */}
              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
                {isBn
                  ? 'বিদ্যালয়ের সার্বিক শৃঙ্খলা, মানসম্মত শিক্ষা এবং কল্যাণমুখী পরিচালনায় নিবেদিত প্রশাসন ও পরিচালনা পর্ষদ।'
                  : 'Dedicated leadership and transparent governance ensuring excellence in education, discipline and holistic development.'}
              </p>
            </div>
          </ScrollReveal>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16">
            <ScrollScale delay={0.2}>
              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                    “
                  </span>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                      {isBn ? 'আজকের মানসম্মত শিক্ষাই আগামীর সম্ভাবনাময় ভবিষ্যৎ' : 'Education today for a brighter tomorrow'}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                      — {isBn ? 'এস ও এস হারম্যান মেইনার স্কুল' : 'SOS Hermann Gmeiner School'}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollScale>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Stat / Values Bar: Floating Single Bar (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <ScrollReveal duration={0.6} distance={20}>
          <section className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100/90 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Item 1 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100/80">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  {isBn ? 'দৃঢ় ও দূরদর্শী নেতৃত্ব' : 'Strong Leadership'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {isBn ? 'দূরদর্শিতা ও স্নেহের মেলবন্ধন' : 'Guiding with vision & care'}
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  {isBn ? 'স্বচ্ছ প্রশাসন' : 'Transparent Governance'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {isBn ? 'কার্যকর জবাবদিহিতা' : 'Accountability in action'}
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  {isBn ? 'শিক্ষার্থীবান্ধব নীতি' : 'Student-Centered'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {isBn ? 'উজ্জ্বল ভবিষ্যতের রূপরেখা' : 'Policies for brighter futures'}
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                <Sparkles size={22} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  {isBn ? 'ধারাবাহিক উৎকর্ষ' : 'Continuous Improvement'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  {isBn ? 'সমৃদ্ধ আগামীর প্রত্যয়ে' : 'For a better tomorrow'}
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 3. Section: Our School Leadership (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#059669] mb-1.5">
                  <span className="w-5 h-0.5 bg-[#059669]" />
                  <span>{isBn ? 'স্কুল প্রশাসন' : 'SCHOOL LEADERSHIP'}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {isBn ? 'আমাদের প্রাতিষ্ঠানিক নেতৃত্ব' : 'Our School Leadership'}
                </h2>
              </div>

              <div className="flex items-center gap-4 sm:self-end">
                <p className="hidden lg:block text-xs text-slate-500 max-w-md font-medium text-right leading-relaxed">
                  {isBn
                    ? 'আমাদের সুদক্ষ ও নিষ্ঠাবান নেতৃত্ব দল প্রতিটি শিক্ষার্থীর জন্য মানসম্মত শিক্ষা, সুশৃঙ্খল চর্চা ও অনুকূল পরিবেশ নিশ্চিত করতে নিরবচ্ছিন্নভাবে কাজ করে চলেছে।'
                    : 'Our dedicated leadership team works collectively to ensure quality education, ethical practices and a nurturing environment for every learner.'}
                </p>
                {/* Slider Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous leadership member"
                    onClick={() => setSliderIndex((prev) => (prev > 0 ? prev - 1 : 0))}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition shadow-2xs cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next leadership member"
                    onClick={() => setSliderIndex((prev) => prev + 1)}
                    className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 flex items-center justify-center transition shadow-2xs cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* 2 Large Leadership Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Chairman */}
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group h-full">
                  {/* Photo Box */}
                  <Link
                    to="/profile/chairman"
                    className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs block"
                  >
                    <img
                      src={LEADERSHIP.chairman.image}
                      alt={isBn ? 'মাকসুদা সুলতানা' : LEADERSHIP.chairman.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                    <div>
                      <span className="inline-block bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                        {isBn ? 'সভাপতি' : 'CHAIRMAN'}
                      </span>
                      <Link to="/profile/chairman" className="block hover:text-[#004d34] transition-colors">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                          {isBn ? 'মাকসুদা সুলতানা' : LEADERSHIP.chairman.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        {isBn ? 'সহকারী প্রকল্প পরিচালক ও সভাপতি' : LEADERSHIP.chairman.subtitle}
                      </p>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-3">
                        {isBn
                          ? 'জ্ঞানের আলোয় সমাজ গড়ার প্রত্যয়ে একনিষ্ঠ ভূমিকা রেখে চলেছেন আমাদের সভাপতি মহোদয়া। তাঁর বলিষ্ঠ নেতৃত্বে প্রতিষ্ঠানটি সার্বিক শিক্ষায় শীর্ষস্থান ধরে রেখেছে।'
                          : LEADERSHIP.chairman.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/profile/chairman"
                        className="inline-flex items-center gap-1.5 bg-[#eefaf3] hover:bg-[#dcf5e7] text-[#004d34] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                      >
                        <span>{isBn ? 'প্রোফাইল দেখুন' : 'View Profile'}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCard>

              {/* Card 2: Principal */}
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group h-full">
                  {/* Photo Box */}
                  <Link
                    to="/profile/principal"
                    className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs block"
                  >
                    <img
                      src={LEADERSHIP.principal.image}
                      alt={isBn ? 'ইন্দ্রজিৎ কুমার মণ্ডল' : LEADERSHIP.principal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                    <div>
                      <span className="inline-block bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                        {isBn ? 'ভারপ্রাপ্ত অধ্যক্ষ' : 'PRINCIPAL'}
                      </span>
                      <Link to="/profile/principal" className="block hover:text-[#1d4ed8] transition-colors">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                          {isBn ? 'ইন্দ্রজিৎ কুমার মণ্ডল' : LEADERSHIP.principal.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        {isBn ? 'ভারপ্রাপ্ত অধ্যক্ষ ও সদস্য সচিব' : LEADERSHIP.principal.subtitle}
                      </p>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-3">
                        {isBn
                          ? 'গুণগত পাঠদান, সুশৃঙ্খল পরিবেশ এবং শিক্ষার্থীদের মানসিক বিকাশে তিনি প্রতিনিয়ত নিরলস কাজ করে যাচ্ছেন।'
                          : LEADERSHIP.principal.description}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/profile/principal"
                        className="inline-flex items-center gap-1.5 bg-[#eff6ff] hover:bg-[#dbeafe] text-[#1d4ed8] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                      >
                        <span>{isBn ? 'প্রোফাইল দেখুন' : 'View Profile'}</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 4. Section: Honorable Governing Body (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <section className="space-y-6">
          {/* Header Row */}
          <ScrollReveal duration={0.6} distance={20}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#059669] mb-1.5">
                  <span className="w-5 h-0.5 bg-[#059669]" />
                  <span>{isBn ? 'পরিচালনা পরিষদ' : 'GOVERNANCE'}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {isBn ? 'সম্মানিত গভর্নিং বডি' : 'Honorable Governing Body'}
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {isBn
                    ? 'প্রতিষ্ঠানের টেকসই উন্নয়ন ও সামগ্রিক অগ্রযাত্রায় নিবেদিত একটি দূরদর্শী ও ঐক্যবদ্ধ পরিষদ।'
                    : 'A committed team working together for the sustained growth and development of our school.'}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Governing Body Cards Grid (Direct multi-row display) */}
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {governingMembers.map((member) => {
              const cardInner = (
                <>
                  <div className="flex items-center gap-3.5 mb-4">
                    {/* Photo / Avatar */}
                    <div className="w-14 h-16 sm:w-16 sm:h-18 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center">
                      {member.isAvatar ? (
                        member.avatarType === 'executive' ? (
                          <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-white relative">
                            {/* Executive Avatar SVG */}
                            <svg viewBox="0 0 64 64" className="w-12 h-12">
                              <circle cx="32" cy="24" r="12" fill="#e2e8f0" />
                              <path d="M16 54 C16 40 24 36 32 36 C40 36 48 40 48 54 Z" fill="#334155" />
                              <polygon points="32,36 30,46 34,46" fill="#dc2626" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-full h-full bg-slate-700 flex flex-col items-center justify-center text-white relative">
                            {/* Guardian Avatar with Glasses SVG */}
                            <svg viewBox="0 0 64 64" className="w-12 h-12">
                              <circle cx="32" cy="24" r="12" fill="#cbd5e1" />
                              <circle cx="28" cy="24" r="3" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                              <circle cx="36" cy="24" r="3" fill="none" stroke="#0f172a" strokeWidth="1.5" />
                              <line x1="31" y1="24" x2="33" y2="24" stroke="#0f172a" strokeWidth="1.5" />
                              <path d="M16 54 C16 40 24 36 32 36 C40 36 48 40 48 54 Z" fill="#1e293b" />
                            </svg>
                          </div>
                        )
                      ) : (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            if (member.fallback) {
                              (e.target as HTMLImageElement).src = member.fallback;
                            }
                          }}
                        />
                      )}
                    </div>

                    {/* Member Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight group-hover:text-[#004d34] transition-colors">
                        {member.name}
                      </h4>
                      {member.subtitle && (
                        <p className="text-[11px] font-bold text-slate-800 leading-tight">
                          {member.subtitle}
                        </p>
                      )}
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Pill Tag at Bottom */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span
                      className={`inline-block border text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${member.tagColor}`}
                    >
                      {member.tag}
                    </span>
                    <UserCheck size={14} className="text-emerald-600" />
                  </div>
                </>
              );

              return (
                <ScrollStaggerItem key={member.id}>
                  <HoverCard className="h-full">
                    {member.profileLink ? (
                      <Link
                        to={member.profileLink}
                        className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full"
                      >
                        {cardInner}
                      </Link>
                    ) : (
                      <div
                        className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-full"
                      >
                        {cardInner}
                      </div>
                    )}
                  </HoverCard>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStaggerContainer>
        </section>
      </div>

      {/* 5. Section: Our Commitment (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Block */}
              <div className="lg:col-span-6 flex items-start gap-4">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    {isBn ? 'আমাদের অঙ্গীকার' : 'Our Commitment'}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mt-1">
                    {isBn
                      ? 'আমরা একটি স্বচ্ছ প্রশাসনিক কাঠামো, দলগত নেতৃত্ব এবং এমন শিক্ষার্থী-কেন্দ্রিক নীতিমালায় বিশ্বাসী যা প্রতিটি শিক্ষার্থীর আত্মবিকাশের মূল চাবিকাঠি।'
                      : 'We believe in transparent administration, collaborative leadership and policies that put students at the heart of everything we do.'}
                  </p>
                </div>
              </div>

              {/* Right 3 Stat Columns */}
              <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 text-center">
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                    <Scale size={18} />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900">{isBn ? 'সততা ও নিষ্ঠা' : 'Integrity'}</h5>
                  <p className="text-[10px] text-slate-500 font-medium">{isBn ? 'প্রতিটি কর্মকাণ্ডে' : 'In all actions'}</p>
                </div>

                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                    <Users size={18} />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900">{isBn ? 'যৌথ প্রয়াস' : 'Collaboration'}</h5>
                  <p className="text-[10px] text-slate-500 font-medium">{isBn ? 'সমাজ ও পরিবারের সাথে' : 'With community'}</p>
                </div>

                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                    <TrendingUp size={18} />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900">{isBn ? 'উৎকর্ষ সাধন' : 'Excellence'}</h5>
                  <p className="text-[10px] text-slate-500 font-medium">{isBn ? 'শিক্ষায় ও নেতৃত্বে' : 'In education'}</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};
