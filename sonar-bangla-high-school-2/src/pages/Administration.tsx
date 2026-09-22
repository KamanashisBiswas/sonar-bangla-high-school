import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Compass,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Scale,
  Building2,
  CheckCircle,
} from 'lucide-react';
import { InnerHero } from '../components/InnerHero';
import { LEADERSHIP, GOVERNING_BODY } from '../data/schoolData';

export const Administration: React.FC = () => {
  return (
    <div className="bg-slate-50/60 pb-16">
      {/* 1. Signature InnerHero Section */}
      <InnerHero
        breadcrumb="Administration"
        badge="ADMINISTRATION & GOVERNANCE"
        badgeIcon={<Building2 size={13} className="text-[#059669]" />}
        title="Administration & Governance"
        description="Dedicated leadership and transparent governance ensuring excellence in education, discipline and holistic development."
        quote={{
          text: 'Good governance builds a stronger school, brighter students and a better tomorrow.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
        features={[
          {
            icon: <Users size={16} />,
            title: 'Strong Leadership',
            subtitle: 'Guiding with vision & care',
          },
          {
            icon: <ShieldCheck size={16} />,
            title: 'Transparent Governance',
            subtitle: 'Accountability in action',
          },
          {
            icon: <Compass size={16} />,
            title: 'Student-Centered',
            subtitle: 'Policies for brighter futures',
          },
          {
            icon: <TrendingUp size={16} />,
            title: 'Continuous Improvement',
            subtitle: 'For a better tomorrow',
          },
        ]}
        buildingQuote={{
          text: 'Working Together for a Better Tomorrow',
          author: 'Leadership • Integrity • Excellence',
        }}
      />

      {/* Main Container */}
      <div className="container mx-auto pt-10 space-y-14">
        {/* 2. Our School Leadership (2 Large Cards matching Image 4) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <span className="w-4 h-0.5 bg-emerald-600 inline-block" />
                <span>SCHOOL LEADERSHIP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our School Leadership
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="hidden lg:block text-xs text-slate-500 max-w-md font-medium text-right">
                Our dedicated leadership team works collectively to ensure quality education, ethical practices and a nurturing environment for every learner.
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  aria-label="Previous"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition shadow-2xs cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  aria-label="Next"
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition shadow-2xs cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* 2 Featured Leadership Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chairman Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-32 h-36 sm:w-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 shadow-xs">
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
              <div className="flex-1 space-y-2">
                <span className="inline-block bg-[#e8f7f0] text-[#005a3c] border border-[#a7f3d0] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                  {LEADERSHIP.chairman.roleTag}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {LEADERSHIP.chairman.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {LEADERSHIP.chairman.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {LEADERSHIP.chairman.description}
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Principal Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-32 h-36 sm:w-36 sm:h-40 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 shadow-xs">
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
              <div className="flex-1 space-y-2">
                <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md tracking-wider">
                  {LEADERSHIP.principal.roleTag}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {LEADERSHIP.principal.name}
                </h3>
                <p className="text-xs text-slate-500 font-semibold">
                  {LEADERSHIP.principal.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                  {LEADERSHIP.principal.description}
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 group"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Honorable Governing Body (Matching Image 4) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                <span className="w-4 h-0.5 bg-emerald-600 inline-block" />
                <span>GOVERNANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Honorable Governing Body
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                A committed team working together for the sustained growth and development of our school.
              </p>
            </div>

            <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-700 border border-emerald-200/80 bg-white hover:bg-emerald-50 px-4 py-2 rounded-xl transition shadow-2xs self-start sm:self-auto cursor-pointer">
              <span>View All Members</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 4 Governing Body Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GOVERNING_BODY.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-14 h-16 sm:w-16 sm:h-18 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-tight truncate">
                      {member.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-block bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    {member.type}
                  </span>
                  <CheckCircle size={14} className="text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Our Commitment Banner (Matching Image 4) */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#e8f7f0] text-[#004d34] flex items-center justify-center flex-shrink-0">
                <Building2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Our Commitment
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-1">
                  We believe in transparent administration, collaborative leadership and policies that put students at the heart of everything we do.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 text-center">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Scale size={16} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Integrity</h5>
                <p className="text-[10px] text-slate-500 font-medium">In all actions</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-blue-700 flex items-center justify-center mx-auto">
                  <Users size={16} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Collaboration</h5>
                <p className="text-[10px] text-slate-500 font-medium">With community</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-amber-700 flex items-center justify-center mx-auto">
                  <TrendingUp size={16} />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Excellence</h5>
                <p className="text-[10px] text-slate-500 font-medium">In education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
