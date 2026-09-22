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

export const Administration: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  // Governing Body Members (Matching media_1790103321289.jpg)
  const governingMembers = [
    {
      id: '1',
      name: 'Maksuda Sultana',
      role: 'President (Chairman)',
      tag: 'PRESIDENT',
      tagColor: 'bg-[#e8f7ee] text-[#004d34] border-emerald-100',
      image: LEADERSHIP.chairman.image,
      fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80',
    },
    {
      id: '2',
      name: 'Indrajit Kumar Mondal',
      role: 'Member Secretary (Acting)',
      tag: 'MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      image: LEADERSHIP.principal.image,
      fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
    },
    {
      id: '3',
      name: 'Representative,',
      subtitle: "SOS Children's Village",
      role: "Representative, SOS Children's Village",
      tag: 'EXECUTIVE MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      isAvatar: true,
      avatarType: 'executive',
    },
    {
      id: '4',
      name: 'Guardian Member',
      role: 'Elected Guardian Rep.',
      tag: 'MEMBER',
      tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-blue-100',
      isAvatar: true,
      avatarType: 'guardian',
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-16 sm:pb-20 flex-1 flex flex-col justify-between">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Administration</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-4 pt-6 sm:pt-8">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-2xs">
              <Users size={14} className="text-[#059669]" />
              <span>ADMINISTRATION & GOVERNANCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.06]">
              Administration & <br />
              Governance
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal max-w-lg">
              Dedicated leadership and transparent governance ensuring excellence in education, discipline and holistic development.
            </p>

            {/* Governance Quote */}
            <div className="pt-2 flex items-start gap-2.5">
              <span className="text-2xl font-serif text-slate-300 leading-none select-none">“</span>
              <div>
                <p className="text-xs sm:text-[13px] text-slate-700 italic font-medium leading-relaxed">
                  “Good governance builds a stronger school, brighter students and a better tomorrow.”
                </p>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  <span className="text-emerald-700 font-bold">—</span> SOS Hermann Gmeiner School Khulna
                </p>
              </div>
            </div>
          </div>

          {/* Floating Dark Green Box on Bottom-Right of Hero Banner */}
          <div className="hidden lg:block absolute bottom-12 right-6 sm:right-10 xl:right-16 max-w-[340px] bg-[#004d34]/95 backdrop-blur-md text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-emerald-500/30">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-800/80 flex items-center justify-center shrink-0 border border-emerald-500/40 text-emerald-200">
                <Users size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-snug text-white">
                  Working Together for a Better Tomorrow
                </h4>
                <p className="text-[11px] text-emerald-300 font-semibold mt-1">
                  Leadership • Integrity • Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Overlapping Stat / Values Bar: Floating Single Bar (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <section className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100/90 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {/* Item 1 */}
          <div className="flex items-center gap-3.5 px-2 sm:px-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100/80">
              <Users size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Strong Leadership
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Guiding with vision & care</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/80">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Transparent Governance
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Accountability in action</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/80">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Student-Centered
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Policies for brighter futures</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5 px-2 sm:px-6 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/80">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                Continuous Improvement
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-1">For a better tomorrow</p>
            </div>
          </div>
        </section>
      </div>

      {/* 3. Section: Our School Leadership (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <section className="space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#059669] mb-1.5">
                <span className="w-5 h-0.5 bg-[#059669]" />
                <span>SCHOOL LEADERSHIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Our School Leadership
              </h2>
            </div>

            <div className="flex items-center gap-4 sm:self-end">
              <p className="hidden lg:block text-xs text-slate-500 max-w-md font-medium text-right leading-relaxed">
                Our dedicated leadership team works collectively to ensure quality education, ethical practices and a nurturing environment for every learner.
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
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group">
              {/* Photo Box */}
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                <img
                  src={LEADERSHIP.chairman.image}
                  alt={LEADERSHIP.chairman.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80';
                  }}
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                <div>
                  <span className="inline-block bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                    CHAIRMAN
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                    {LEADERSHIP.chairman.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    {LEADERSHIP.chairman.subtitle}
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-3">
                    {LEADERSHIP.chairman.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 bg-[#eefaf3] hover:bg-[#dcf5e7] text-[#004d34] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Principal */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start group">
              {/* Photo Box */}
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs">
                <img
                  src={LEADERSHIP.principal.image}
                  alt={LEADERSHIP.principal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                  }}
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left min-w-0">
                <div>
                  <span className="inline-block bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                    PRINCIPAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                    {LEADERSHIP.principal.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    {LEADERSHIP.principal.subtitle}
                  </p>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-3">
                    {LEADERSHIP.principal.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 bg-[#eff6ff] hover:bg-[#dbeafe] text-[#1d4ed8] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 4. Section: Honorable Governing Body (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <section className="space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#059669] mb-1.5">
                <span className="w-5 h-0.5 bg-[#059669]" />
                <span>GOVERNANCE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Honorable Governing Body
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-1">
                A committed team working together for the sustained growth and development of our school.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 border border-emerald-600/70 hover:border-emerald-700 bg-white hover:bg-emerald-50 px-4 py-2 rounded-xl transition shadow-2xs self-start sm:self-auto cursor-pointer"
            >
              <span>View All Members</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 4 Governing Body Cards with Floating Next Arrow on Right */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {governingMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
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
                          className="w-full h-full object-cover"
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
                      <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight">
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
                </div>
              ))}
            </div>

            {/* Floating Next Circle Button on Right Edge */}
            <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <button
                type="button"
                aria-label="Next members"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-md flex items-center justify-center transition cursor-pointer hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Section: Our Commitment (Matching media_1790103321289.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 sm:mt-18">
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Block */}
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Our Commitment
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mt-1">
                  We believe in transparent administration, collaborative leadership and policies that put students at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Right 3 Stat Columns */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 text-center">
              <div className="space-y-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                  <Scale size={18} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Integrity</h5>
                <p className="text-[10px] text-slate-500 font-medium">In all actions</p>
              </div>

              <div className="space-y-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                  <Users size={18} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Collaboration</h5>
                <p className="text-[10px] text-slate-500 font-medium">With community</p>
              </div>

              <div className="space-y-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100/60">
                  <TrendingUp size={18} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Excellence</h5>
                <p className="text-[10px] text-slate-500 font-medium">In education</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
