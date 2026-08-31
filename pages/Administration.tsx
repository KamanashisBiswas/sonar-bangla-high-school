import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, GraduationCap, ShieldCheck, Award, Home } from 'lucide-react';

const Administration: React.FC = () => {
  const { committee, settings } = useData();
  const { language, t, toBanglaNum } = useLanguage();

  // Robust translation function for governing body members
  const translateMember = (name: string, position: string) => {
    if (language === 'bn') {
      return { name, position };
    }

    let enName = name;
    let enPos = position;

    // Translate Name
    if (name.includes('মাকসুদা')) {
      enName = 'Maksuda Sultana';
    } else if (name.includes('ইন্দ্রজিৎ')) {
      enName = 'Indrajit Kumar Mondal';
    } else if (name.includes('প্রতিনিধি') && (name.includes('এস ও এস') || name.includes('SOS'))) {
      enName = "Representative, SOS Children's Village International";
    } else if (name.includes('অভিভাবক')) {
      enName = 'Guardian Representative Council';
    }

    // Translate Position
    if (position.includes('সভাপতি') || position.toLowerCase().includes('chairman') || position.toLowerCase().includes('president')) {
      enPos = 'President (Chairman)';
    } else if (position.includes('সদস্য সচিব') || position.includes('ভারপ্রাপ্ত') || position.includes('অধ্যক্ষ') || position.toLowerCase().includes('principal')) {
      enPos = 'Member Secretary (Acting)';
    } else if (position.includes('নির্বাহী') || position.includes('উপপরিচালক') || position.toLowerCase().includes('executive')) {
      enPos = 'Executive Member';
    } else if (position.includes('অভিভাবক') || position.toLowerCase().includes('guardian')) {
      enPos = 'Guardian Member';
    } else if (position.includes('দাতা')) {
      enPos = 'Donor Member';
    } else if (position.includes('সদস্য')) {
      enPos = 'Member';
    }

    return { name: enName, position: enPos };
  };

  const rawList = committee && committee.length >= 4 ? committee : [
    {
      id: '1',
      name: 'মাকসুদা সুলতানা',
      position: 'সভাপতি (Chairman)',
      type: 'President',
      image: settings.chairmanImage || 'https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg',
    },
    {
      id: '2',
      name: 'ইন্দ্রজিৎ কুমার মণ্ডল',
      position: 'সদস্য সচিব (ভারপ্রাপ্ত)',
      type: 'Member',
      image: settings.headmasterImage || 'https://soshgskhulna.edu.bd/media/181/Picture_PP.jpg',
    },
    {
      id: '3',
      name: 'প্রতিনিধি, এস ও এস চিলড্রেনস ভিলেজ ইন্টারন্যাশনাল',
      position: 'নির্বাহী সদস্য',
      type: 'Donor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      name: 'অভিভাবক প্রতিনিধি পরিষদ',
      position: 'অভিভাবক সদস্য',
      type: 'Member',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const governingBodyList = rawList.map(member => {
    const translated = translateMember(member.name, member.position);
    return {
      ...member,
      displayName: translated.name,
      displayPosition: translated.position,
    };
  });

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (NO CARD WRAPPER - 100% MATCH TO REFERENCE IMAGE) */}
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
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
              <Home size={14} className="text-emerald-700" />
              <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {language === 'bn' ? 'প্রশাসনিক তথ্য' : 'Administration'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Users size={13} className="text-emerald-700" />
              <span>{language === 'bn' ? 'প্রশাসন ও পরিচালনা পর্ষদ' : 'ADMINISTRATION & GOVERNANCE'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {language === 'bn' ? 'প্রশাসন ও পরিচালনা পর্ষদ' : 'Administration & Governance'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {language === 'bn' 
                ? 'মানসম্মত শিক্ষা ও সুশৃঙ্খল প্রাতিষ্ঠানিক পরিচালনার দায়িত্বে নিবেদিত নেতৃত্ব ও পরিচালনা পর্ষদ।' 
                : 'Dedicated leadership and governing body ensuring excellence in school operations.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* 2. SCHOOL LEADERSHIP SECTION (2-Column Grid) */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <GraduationCap className="text-emerald-700" size={22} />
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {language === 'bn' ? 'প্রাতিষ্ঠানিক নেতৃত্ব' : 'School Leadership'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chairman Leadership Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:shadow-md transition">
              <img 
                src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                alt="Chairman" 
                className="w-22 h-26 sm:w-24 sm:h-30 rounded-2xl object-cover shadow-sm border border-slate-200 flex-shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left flex-1">
                <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                  {language === 'bn' ? 'সভাপতি' : 'CHAIRMAN'}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {language === 'bn' ? (settings.chairmanName || "মাকসুদা সুলতানা") : "Maksuda Sultana"}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'bn' ? 'প্রকল্প পরিচালক, এস ও এস চিলড্রেন্স ভিলেজ খুলনা' : "Project Director, SOS Children's Village Khulna"}
                </p>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                  {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
                </p>
              </div>
            </div>

            {/* Principal Leadership Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:shadow-md transition">
              <img 
                src={settings.headmasterImage || "https://soshgskhulna.edu.bd/media/181/Picture_PP.jpg"} 
                alt="Principal" 
                className="w-22 h-26 sm:w-24 sm:h-30 rounded-2xl object-cover shadow-sm border border-slate-200 flex-shrink-0"
              />
              <div className="space-y-1.5 text-center sm:text-left flex-1">
                <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                  {language === 'bn' ? 'অধ্যক্ষ' : 'PRINCIPAL'}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                  {language === 'bn' ? (settings.headmasterName || "ইন্দ্রজিৎ কুমার মণ্ডল") : "Indrajit Kumar Mondal"}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'bn' ? 'অধ্যক্ষ ও সদস্য সচিব, গভর্নিং বডি' : 'Principal & Member Secretary, Governing Body'}
                </p>
                <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                  {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. HONORABLE GOVERNING BODY SECTION (Without Number Count) */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <ShieldCheck className="text-emerald-700" size={22} />
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {language === 'bn' ? 'সম্মানিত পরিচালনা পর্ষদ' : 'Honorable Governing Body'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {governingBodyList.map((member, idx) => (
              <div 
                key={member.id || idx} 
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={member.image} 
                    alt={member.displayName} 
                    className="w-14 h-16 rounded-xl object-cover shadow-2xs border border-slate-100 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate leading-snug">
                      {member.displayName}
                    </h4>
                    <p className="text-[11px] text-emerald-700 font-semibold mt-0.5 truncate">
                      {member.displayPosition}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 text-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                    {member.type === 'President' ? 'PRESIDENT' : 
                     member.type === 'Donor' ? 'DONOR MEMBER' : 
                     'MEMBER'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Administration;
