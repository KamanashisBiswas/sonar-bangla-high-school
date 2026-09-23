import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  GraduationCap,
  Trophy,
  History,
  Eye,
  Target,
  ArrowRight,
  Monitor,
  FlaskConical,
  BookOpen,
  Activity,
  Briefcase,
  Award,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  LEADERSHIP,
} from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard,
} from '../components/ui/MotionComponents';

export const About: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-width Campus Background with White Fade Overlay (Matching media_1790101513924.jpg) */}
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
            <span className="text-slate-800 font-bold">{isBn ? 'পরিচিতি' : 'About Us'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
              {/* Pill Tag Badge */}
              <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                <Sparkles size={14} />
                <span>{isBn ? 'আমাদের ঐতিহ্য ও অঙ্গীকার' : 'OUR STORY, OUR COMMITMENT'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
                {isBn ? (
                  <>
                    আমাদের পরিচিতি ও <br />
                    পটভূমি
                  </>
                ) : (
                  <>
                    About Our <br />
                    Institution
                  </>
                )}
              </h1>

              {/* Short Green Accent Line Under Title */}
              <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

              {/* Subtitle */}
              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
                {isBn ? (
                  <>
                    ১৯৮৭ সাল থেকে মানসম্মত শিক্ষা ও মানবিক মূল্যবোধের আলো ছড়িয়ে যাচ্ছে{' '}
                    <strong className="text-emerald-800 font-bold">নিরবচ্ছিন্নভাবে।</strong>
                  </>
                ) : (
                  <>
                    Spreading the light of quality education and moral discipline continuously{' '}
                    <strong className="text-emerald-800 font-bold">since 1987.</strong>
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16">
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

      {/* 2. Stat Cards Row: Floating Overlapping White Rounded Bar (Matching media_1790101513924.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <ScrollReveal duration={0.6} distance={20}>
          <section className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100/90 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/80">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {isBn ? toBanglaNum(10) : '10'}
                </h4>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  {isBn ? 'মোট শিক্ষার্থী' : 'Total Students'}
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  {isBn ? 'মেধা ও মূল্যবোধের বিকাশ' : 'Nurturing young minds'}
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {isBn ? toBanglaNum(8) : '8'}
                </h4>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  {isBn ? 'শিক্ষকমণ্ডলী' : 'Teaching Faculty'}
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  {isBn ? 'নিবেদিতপ্রাণ শিক্ষকবৃন্দ' : 'Dedicated educators'}
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
                <Trophy size={22} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {isBn ? toBanglaNum('98.5%') : '98.5%'}
                </h4>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  {isBn ? 'গড় পাসের হার' : 'Average Pass Rate'}
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  {isBn ? 'ধারাবাহিক একাডেমিক সাফল্য' : 'Academic excellence'}
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
                <History size={22} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {isBn ? toBanglaNum('38+') : '38+'}
                </h4>
                <p className="text-xs font-bold text-slate-800 mt-1">
                  {isBn ? 'বছরের ঐতিহ্য' : 'Years of Heritage'}
                </p>
                <p className="text-[10px] text-slate-400 font-medium">
                  {isBn ? '১৯৮৭ সাল থেকে' : 'Since 1987'}
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 3. Our History & Heritage Section (Matching media_1790101513924.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18 relative">
        {/* Subtle Leaf Decorative Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-80 opacity-[0.05] pointer-events-none text-emerald-800">
          <svg viewBox="0 0 200 350" fill="currentColor">
            <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
            <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
          </svg>
        </div>

        <ScrollReveal duration={0.65} distance={30}>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#059669]">
                <span className="w-5 h-0.5 bg-[#059669]" />
                <span>{isBn ? 'ইতিহাস ও ঐতিহ্য' : 'HISTORY & HERITAGE'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {isBn ? 'আমাদের ইতিহাস ও পটভূমি' : 'Our History & Heritage'}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {isBn
                  ? "এস ও এস হারম্যান মেইনার স্কুল খুলনার নামকরণ করা হয়েছে আন্তর্জাতিক এস ও এস চিলড্রেনস ভিলেজেসের প্রতিষ্ঠাতা ড. হারম্যান মেইনারের নামানুসারে। ১৯৮৭ সালে প্রতিষ্ঠিত এই বিদ্যাপীঠ এস ও এস ভিলেজের শিশুসহ সমাজের সর্বস্তরের শিক্ষার্থীদের গুণগত মানসম্মত শিক্ষাদানে নিবেদিত।"
                  : "The very name of the School bears the name of the founder father of SOS Children's Village International, Dr. Hermann Gmeiner. The School was established in 1987 with a view to imparting quality education to the Students of both inside and outside of the SOS Children's Village, Khulna."}
              </p>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                {isBn
                  ? 'আমাদের মূল লক্ষ্য সততা, শৃঙ্খলা ও নৈতিক শিক্ষার সুদৃঢ় ভিত্তি তৈরি করা। বিদ্যালয়ের মূল বাণী — "সততাই শিক্ষা, শিক্ষাই শান্তি এবং শান্তিই প্রগতি"। প্রতিষ্ঠানটি জাতীয় শিক্ষাক্রম (এনসিটিবি) ও যশোর শিক্ষা বোর্ডের অধীনে পরিচালিত হয় এবং ইংরেজি ভাষা ও আইসিটি দক্ষতায় বিশেষ গুরুত্ব প্রদান করে।'
                  : 'The main criteria for entry is merit, discipline and integrity. The motto of the school is "Honesty is education, education is peace and peace is progress." The institution follows the curriculum of NCTB and BISE Jessore with special emphasis on English language proficiency.'}
              </p>

              <div className="pt-2">
                <a
                  href="https://en.wikipedia.org/wiki/SOS_Children%27s_Villages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#064e3b] text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm hover:shadow cursor-pointer"
                >
                  <span>{isBn ? 'আমাদের পূর্ণ ইতিহাস জানুন' : 'Learn More About Our History'}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right Column: Hermann Gmeiner Portrait & Quote Card Side by Side */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5">
              {/* Portrait Photo */}
              <a
                href="https://en.wikipedia.org/wiki/Hermann_Gmeiner"
                target="_blank"
                rel="noopener noreferrer"
                title={isBn ? "উইকিপিডিয়ায় ড. হারম্যান মেইনারের জীবনী পড়ুন" : "Read Dr. Hermann Gmeiner's biography on Wikipedia"}
                className="w-full sm:w-[210px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-lg border border-slate-200 shrink-0 bg-slate-100 block group"
              >
                <img
                  src="/hermann_gmeiner_bw.png"
                  alt="Dr. Hermann Gmeiner"
                  className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-500"
                />
              </a>

              {/* Quote Card */}
              <div className="w-full flex-1 bg-white rounded-[24px] p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-center">
                <span className="text-3xl font-serif text-[#004d34] leading-none mb-3 select-none">“</span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed">
                  {isBn
                    ? '“প্রতিটি শিশুর জন্য একটি স্নেহময় নিরাপদ নীড় এবং সম্ভাবনাময় উজ্জ্বল ভবিষ্যৎ।”'
                    : '“A loving home for every child, and a future full of possibilities.”'}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <a
                      href="https://en.wikipedia.org/wiki/Hermann_Gmeiner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-black text-xs sm:text-sm text-slate-900 hover:text-[#004d34] transition-colors"
                    >
                      {isBn ? 'ড. হারম্যান মেইনার' : 'Dr. Hermann Gmeiner'}
                    </a>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {isBn ? 'প্রতিষ্ঠাতা, এস ও এস চিলড্রেনস ভিলেজেস ইন্টারন্যাশনাল' : 'Founder, SOS Children’s Villages International'}
                    </p>
                  </div>
                  <a
                    href="https://en.wikipedia.org/wiki/SOS_Children%27s_Villages"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read on Wikipedia"
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-500 hover:text-[#004d34] flex items-center justify-center transition"
                  >
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 4. Leadership Messages: Chairman & Principal (Matching media_1790101513924.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chairman Card */}
            <div className="bg-[#f0faf5] hover:bg-[#ebf8f1] rounded-3xl p-6 sm:p-7 border border-emerald-100/80 shadow-xs flex flex-col justify-between transition-all">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Users size={12} />
                  </div>
                  <span>{isBn ? 'সভাপতির বাণী' : 'Message from the Chairman'}</span>
                </div>

                {/* Body: Photo & Quote */}
                <div className="flex items-start gap-4">
                  <Link
                    to="/profile/chairman"
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-emerald-600/30 shrink-0 shadow-md bg-white block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={LEADERSHIP.chairman.image}
                      alt={isBn ? 'মাকসুদা সুলতানা' : LEADERSHIP.chairman.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-1.5">
                      <span className="text-xl font-serif text-emerald-600 leading-none select-none">“</span>
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        {isBn
                          ? '"এস ও এস চিলড্রেনস ভিলেজ খুলনার সুপরিসর ও সুশোভিত ক্যাম্পাসে অবস্থিত এস ও এস হারম্যান মেইনার স্কুল খুলনা একটি আদর্শ ও মানবিক বিদ্যাপীঠ। মানসম্মত শিক্ষা ও সুশৃঙ্খল পরিবেশের মাধ্যমে আমরা ভবিষ্যৎ নেতৃত্ব গঠনে অঙ্গীকারবদ্ধ..."'
                          : '"SOS Hermann Gmeiner School Khulna is established within the verdant campus of SOS Children\'s Village Khulna with a steadfast mission to ensure quality education and a wholesome learning atmosphere..."'}
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link to="/profile/chairman" className="hover:text-emerald-800 transition-colors">
                        <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                          {isBn ? 'মাকসুদা সুলতানা' : LEADERSHIP.chairman.name}
                        </h4>
                      </Link>
                      <p className="text-[11px] text-[#b45309] font-bold mt-0.5">
                        {isBn ? 'সভাপতি, গভর্নিং বডি' : 'Chairman, Governing Body'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-right Circle Arrow Button */}
              <div className="pt-3 flex justify-end">
                <Link
                  to="/profile/chairman"
                  aria-label={isBn ? 'সভাপতির প্রোফাইল দেখুন' : 'View Chairman Profile'}
                  className="w-8 h-8 rounded-full bg-white border border-emerald-200 text-[#004d34] hover:bg-[#004d34] hover:text-white flex items-center justify-center transition shadow-2xs cursor-pointer"
                >
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Principal Card */}
            <div className="bg-[#f0f7ff] hover:bg-[#e8f2fe] rounded-3xl p-6 sm:p-7 border border-blue-100/80 shadow-xs flex flex-col justify-between transition-all">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <GraduationCap size={12} />
                  </div>
                  <span>{isBn ? 'অধ্যক্ষের বাণী' : 'Message from the Principal'}</span>
                </div>

                {/* Body: Photo & Quote */}
                <div className="flex items-start gap-4">
                  <Link
                    to="/profile/principal"
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-600/30 shrink-0 shadow-md bg-white block hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={LEADERSHIP.principal.image}
                      alt={isBn ? 'ইন্দ্রজিৎ কুমার মণ্ডল' : LEADERSHIP.principal.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                      }}
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-1.5">
                      <span className="text-xl font-serif text-blue-600 leading-none select-none">“</span>
                      <p className="text-xs text-slate-600 italic leading-relaxed">
                        {isBn
                          ? '"১৯৮৭ সালে প্রতিষ্ঠার পর থেকে এস ও এস হারম্যান মেইনার স্কুল খুলনা নিরবচ্ছিন্নভাবে শিক্ষার আলোকবর্তিকা প্রজ্বলন করে চলেছে। প্রতিটি শিক্ষার্থীকে দায়িত্বশীল, মানবিক ও যুগের উপযোগী যোগ্য নাগরিক হিসেবে গড়ে তোলাই আমাদের পরম ব্রত।"'
                          : '"SOS Hermann Gmeiner School Khulna was founded in 1987 with an uncompromising commitment to educational excellence. We believe in nurturing students to become responsible, compassionate and future-ready global citizens."'}
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link to="/profile/principal" className="hover:text-blue-800 transition-colors">
                        <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                          {isBn ? 'ইন্দ্রজিৎ কুমার মণ্ডল' : LEADERSHIP.principal.name}
                        </h4>
                      </Link>
                      <p className="text-[11px] text-[#1d4ed8] font-bold mt-0.5">
                        {isBn ? 'অধ্যক্ষ' : 'Principal'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom-right Circle Arrow Button */}
              <div className="pt-3 flex justify-end">
                <Link
                  to="/profile/principal"
                  aria-label={isBn ? 'অধ্যক্ষের প্রোফাইল দেখুন' : 'View Principal Profile'}
                  className="w-8 h-8 rounded-full bg-white border border-blue-200 text-blue-800 hover:bg-blue-800 hover:text-white flex items-center justify-center transition shadow-2xs cursor-pointer"
                >
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 5. Our Vision & Mission & Core Motto (Matching media_1790101513924.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <ScrollReveal duration={0.65} distance={30}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              {/* Watermark Illustration on Right */}
              <div className="absolute right-4 bottom-2 opacity-15 pointer-events-none text-emerald-600">
                <svg width="120" height="90" viewBox="0 0 120 90" fill="currentColor">
                  <polygon points="20,80 60,15 100,80" />
                  <polygon points="55,80 80,35 105,80" opacity="0.6" />
                  <line x1="60" y1="15" x2="60" y2="5" stroke="currentColor" strokeWidth="2" />
                  <polygon points="60,5 75,10 60,15" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Eye size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {isBn ? 'আমাদের লক্ষ্য (Vision)' : 'Our Vision'}
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-md">
                  {isBn
                    ? 'শিক্ষিত, তথ্যপ্রযুক্তি নির্ভর, আত্মবিশ্বাসী এবং নৈতিক মূল্যবোধে সমৃদ্ধ ভবিষ্যৎ প্রজন্ম গড়ে তোলা যারা সততা, ন্যায়পরায়ণতা ও শৃঙ্খলার সাথে দেশকে নেতৃত্ব প্রদান করবে।'
                    : 'To nurture educated, technologically skilled, confident, and morally grounded future generations who will lead the nation with honesty, integrity, and discipline.'}
                </p>
              </div>

              {/* Pill Buttons Row */}
              <div className="relative z-10 pt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-[#eefaf3] text-[#004d34] text-[11px] font-bold px-3 py-1.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>{isBn ? 'নৈতিক মূল্যবোধ' : 'Moral Values'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#eefaf3] text-[#004d34] text-[11px] font-bold px-3 py-1.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>{isBn ? 'একাডেমিক শ্রেষ্ঠত্ব' : 'Academic Excellence'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#eefaf3] text-[#004d34] text-[11px] font-bold px-3 py-1.5 rounded-xl border border-emerald-100">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  <span>{isBn ? 'নেতৃত্ব ও সততা' : 'Leadership & Integrity'}</span>
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative overflow-hidden flex flex-col justify-between">
              {/* Watermark Illustration on Right */}
              <div className="absolute right-4 bottom-2 opacity-15 pointer-events-none text-blue-600">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                  <circle cx="50" cy="50" r="42" />
                  <circle cx="50" cy="50" r="28" />
                  <circle cx="50" cy="50" r="14" fill="currentColor" />
                  <line x1="15" y1="15" x2="50" y2="50" strokeWidth="4" />
                  <polygon points="50,50 42,46 46,42" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                    <Target size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {isBn ? 'উদ্দেশ্য ও মূল বাণী (Mission)' : 'Mission & Core Motto'}
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-md">
                  {isBn
                    ? 'আধুনিক শিক্ষণ পদ্ধতি, বিজ্ঞান ও আইসিটি ল্যাব, মাল্টিমিডিয়া ক্লাসরুম এবং বিস্তৃত সহশিক্ষা কার্যক্রমের মাধ্যমে শিক্ষার্থীদের সার্বিক ও নান্দনিক বিকাশ সাধন করা।'
                    : 'Delivering holistic education through modern pedagogies, STEM laboratories, multimedia smart classrooms, and extensive co-curricular programs for all-round student development.'}
                </p>
              </div>

              {/* Pill Buttons Row */}
              <div className="relative z-10 pt-6 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-blue-100">
                  <CheckCircle2 size={13} className="text-blue-600" />
                  <span>{isBn ? 'বিজ্ঞান ও তথ্যপ্রযুক্তি' : 'STEM & Technology'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-blue-100">
                  <CheckCircle2 size={13} className="text-blue-600" />
                  <span>{isBn ? 'সার্বিক ও নান্দনিক বিকাশ' : 'Holistic Development'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 text-[11px] font-bold px-3 py-1.5 rounded-xl border border-amber-100">
                  <Award size={13} className="text-amber-600" />
                  <span>{isBn ? 'মমতা ও মানবিক যত্ন' : 'Inclusivity & Care'}</span>
                </span>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* 6. Campus & Facilities (Matching media_1790101513924.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <section className="space-y-6">
          {/* Header Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {isBn ? 'ক্যাম্পাস ও আধুনিক সুবিধাসমূহ' : 'Campus & Facilities'}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    {isBn ? 'বিশ্বমানের আধুনিক সুবিধা সমৃদ্ধ সবুজ ও সুশৃঙ্খল ক্যাম্পাস' : 'A modern learning environment with world-class facilities'}
                  </p>
                </div>
              </div>

              <Link
                to="/academic"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 border border-emerald-600/70 hover:border-emerald-700 bg-white hover:bg-emerald-50/60 px-4 py-2 rounded-xl transition shadow-2xs self-start sm:self-auto cursor-pointer"
              >
                <span>{isBn ? 'সকল সুবিধা দেখুন' : 'View All Facilities'}</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </ScrollReveal>

          {/* 4 Cards Grid */}
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Facility 1 */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 h-full group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src="/facilities/facility_computer.png"
                      alt={isBn ? 'ডিজিটাল কম্পিউটার ল্যাব' : 'Digital Computer Lab'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <div className="p-2 pt-3 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Monitor size={17} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-emerald-800 transition">
                        {isBn ? 'ডিজিটাল কম্পিউটার ল্যাব' : 'Digital Computer Lab'}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {isBn ? 'উচ্চগতির ইন্টারনেট ও ৩০+ কম্পিউটার' : 'High-speed internet & 30+ PCs'}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Facility 2 */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 h-full group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src="/facilities/facility_science.png"
                      alt={isBn ? 'আধুনিক বিজ্ঞান ল্যাব' : 'Modern Science Lab'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <div className="p-2 pt-3 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <FlaskConical size={17} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-emerald-800 transition">
                        {isBn ? 'আধুনিক বিজ্ঞান ল্যাব' : 'Modern Science Lab'}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {isBn ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের উপকরণ' : 'Physics, Chemistry, Biology Kits'}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Facility 3 */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 h-full group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src="/facilities/facility_library.png"
                      alt={isBn ? 'বিদ্যালয় গ্রন্থাগার' : 'School Library'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <div className="p-2 pt-3 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <BookOpen size={17} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-emerald-800 transition">
                        {isBn ? 'বিদ্যালয় গ্রন্থাগার' : 'School Library'}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {isBn ? 'সমৃদ্ধ বইয়ের সংগ্রহ ও পাঠকক্ষ' : 'Wide collection of books & reading corner'}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>

            {/* Facility 4 */}
            <ScrollStaggerItem>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 h-full group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src="/facilities/facility_grounds.png"
                      alt={isBn ? 'সবুজ খেলার মাঠ ও ক্রীড়া প্রাঙ্গণ' : 'Green Athletic Grounds'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <div className="p-2 pt-3 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                      <Activity size={17} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-emerald-800 transition">
                        {isBn ? 'সবুজ খেলার মাঠ ও ক্রীড়া প্রাঙ্গণ' : 'Green Athletic Grounds'}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {isBn ? 'খেলাধুলা, অ্যাথলেটিক্স ও সহশিক্ষা প্রাঙ্গণ' : 'Sports, athletics & co-curricular area'}
                      </p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          </ScrollStaggerContainer>
        </section>
      </div>
    </div>
  );
};
