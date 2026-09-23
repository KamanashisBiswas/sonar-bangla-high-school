import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  GraduationCap,
  Award,
  Search,
  RotateCcw,
  Briefcase,
  Mail,
  Phone,
  ArrowRight,
  BookOpen,
  FlaskConical,
  Atom,
  Calculator,
  Compass,
  Laptop,
  X,
  Clock,
  MapPin,
  FileText,
  User,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Teacher } from '../data/schoolData';
import { TEACHERS, ADMINISTRATIVE_STAFF } from '../data/schoolData';
import { TEACHER_DETAILS_BN } from '../data/teacherLocalization';

const TEACHER_TRANSLATIONS: Record<string, { nameBn: string; designationBn: string; subjectBn: string }> = {
  '1': { nameBn: 'ইন্দ্রজিৎ কুমার মণ্ডল', designationBn: 'সহকারী শিক্ষক', subjectBn: 'রসায়ন / বিজ্ঞান' },
  '2': { nameBn: 'মোসাম্মৎ রেহানা পারভীন', designationBn: 'সহকারী অধ্যাপিকা', subjectBn: 'ইংরেজি' },
  '3': { nameBn: 'মোঃ জহিরুল হক', designationBn: 'সিনিয়র শিক্ষক', subjectBn: 'সাধারণ ও উচ্চতর গণিত' },
  '4': { nameBn: 'তানজিলা রহমান', designationBn: 'সিনিয়র শিক্ষক', subjectBn: 'পদার্থবিজ্ঞান' },
  '5': { nameBn: 'আব্দুল করিম শেখ', designationBn: 'সহকারী শিক্ষক', subjectBn: 'বাংলা সাহিত্য' },
  '6': { nameBn: 'সুবর্ণা দাস', designationBn: 'সহকারী শিক্ষক', subjectBn: 'জীববিজ্ঞান ও পরিবেশ' },
  '7': { nameBn: 'মাওলানা মোঃ সাইফুল ইসলাম', designationBn: 'সহকারী শিক্ষক', subjectBn: 'ইসলাম ও নৈতিক শিক্ষা' },
  '8': { nameBn: 'প্রকৌশলী অমিত রায়', designationBn: 'সহকারী শিক্ষক', subjectBn: 'তথ্য ও যোগাযোগ প্রযুক্তি' },
};

const STAFF_TRANSLATIONS: Record<string, { nameBn: string; roleBn: string }> = {
  '1': { nameBn: 'মোঃ রফিকুল ইসলাম', roleBn: 'অফিস সুপারিনটেনডেন্ট' },
  '2': { nameBn: 'সুমাইয়া আক্তার', roleBn: 'সিনিয়র হিসাবরক্ষক' },
  '3': { nameBn: 'মোঃ হাসানুজ্জামান', roleBn: 'প্রধান গ্রন্থাগারিক' },
  '4': { nameBn: 'রাকিবুল ইসলাম', roleBn: 'আইসিটি সহকারী ও নেটওয়ার্ক ইন-চার্জ' },
};

const SUBJECT_CAT_BN: Record<string, string> = {
  'All': 'সকল বিষয়',
  'Science': 'বিজ্ঞান',
  'English': 'ইংরেজি',
  'Math': 'গণিত',
  'Physics': 'পদার্থবিজ্ঞান',
  'Bangla': 'বাংলা',
  'Biology': 'জীববিজ্ঞান',
  'Islamic Studies': 'ইসলাম ধর্ম',
  'ICT': 'আইসিটি',
};

const DESIGNATION_BN: Record<string, string> = {
  'All': 'সকল পদবি',
  'Assistant Teacher': 'সহকারী শিক্ষক',
  'Assistant Professor': 'সহকারী অধ্যাপিকা',
  'Senior Teacher': 'সিনিয়র শিক্ষক',
};

export const Faculty: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [activeTab, setActiveTab] = useState<'all' | 'teaching' | 'admin'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDesignation, setSelectedDesignation] = useState('All');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [modalTab, setModalTab] = useState<'professional' | 'academic' | 'additional'>('professional');

  // Filter subjects for dropdown
  const subjectList = useMemo(() => {
    const list = Array.from(new Set(TEACHERS.map((t) => t.subjectCategory)));
    return ['All', ...list];
  }, []);

  // Filter designations for dropdown
  const designationList = useMemo(() => {
    const list = Array.from(new Set(TEACHERS.map((t) => t.designation)));
    return ['All', ...list];
  }, []);

  // Filtered teachers
  const filteredTeachers = useMemo(() => {
    return TEACHERS.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.designation.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSubject =
        selectedSubject === 'All' || t.subjectCategory === selectedSubject;
      const matchesDesignation =
        selectedDesignation === 'All' || t.designation === selectedDesignation;
      return matchesSearch && matchesSubject && matchesDesignation;
    });
  }, [searchQuery, selectedSubject, selectedDesignation]);

  // Filtered staff
  const filteredStaff = useMemo(() => {
    return ADMINISTRATIVE_STAFF.filter((s) => {
      return (
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedSubject('All');
    setSelectedDesignation('All');
    setActiveTab('all');
  };

  // Helper for badge color based on subject (Matching mockup)
  const getSubjectBadge = (category: string, subject: string) => {
    switch (category) {
      case 'Science':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <FlaskConical size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'English':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#fdf2f8] text-[#be185d] border border-pink-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <BookOpen size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'Math':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <Calculator size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'Physics':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#faf5ff] text-[#7e22ce] border border-purple-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <Atom size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'Bangla':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#fffbeb] text-[#b45309] border border-amber-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <BookOpen size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'Biology':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#ecfdf5] text-[#047857] border border-teal-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <Compass size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'Islamic Studies':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#f5f3ff] text-[#6d28d9] border border-indigo-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <BookOpen size={11} />
            <span>{subject}</span>
          </span>
        );
      case 'ICT':
        return (
          <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] text-[#1d4ed8] border border-blue-100 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <Laptop size={11} />
            <span>{subject}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 border border-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded-lg">
            <span>{subject}</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade (Matching media_1790105578493.jpg) */}
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
            <span className="text-slate-800 font-bold">{isBn ? 'শিক্ষক ও কর্মচারী ডিরেক্টরি' : 'Faculty & Staff'}</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Users size={14} className="text-[#059669]" />
              <span>{isBn ? 'আমাদের শিক্ষক, আমাদের শক্তি' : 'OUR EDUCATORS, OUR STRENGTH'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>
                  শিক্ষক ও স্টাফ <br />
                  ডিরেক্টরি
                </>
              ) : (
                <>
                  Faculty & Staff <br />
                  Directory
                </>
              )}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn
                ? 'আমাদের দক্ষ, অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষক ও কর্মকর্তা-কর্মচারীবৃন্দ যারা শিক্ষার্থীদের সম্ভাবনাময় ভবিষ্যৎ বিনির্মাণে সদা ব্রতী।'
                : 'Meet our dedicated and experienced faculty and staff who inspire, guide and support our students towards a brighter future.'}
            </p>
          </div>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  {isBn ? 'আজকের শিক্ষা, আগামীর সম্ভাবনা' : 'Education today for a brighter tomorrow'}
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — {isBn ? 'এস ও এস হারম্যান মেইনার স্কুল' : 'SOS Hermann Gmeiner School'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Tabs Switcher & Filter Bar Row (Matching media_1790105578493.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Left: Tab Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'teaching' ? 'all' : 'teaching')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                activeTab === 'teaching' || activeTab === 'all'
                  ? 'bg-[#004d34] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <GraduationCap size={16} />
              <span>{isBn ? 'শিক্ষকমণ্ডলী' : 'Teaching Faculty'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab(activeTab === 'admin' ? 'all' : 'admin')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                activeTab === 'admin'
                  ? 'bg-[#004d34] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <Briefcase size={16} />
              <span>{isBn ? 'প্রশাসনিক ও অফিস স্টাফ' : 'Administrative Staff'}</span>
            </button>
          </div>

          {/* Right: Search Input & Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search Box */}
            <div className="relative flex-1 sm:w-64">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isBn ? 'নাম, বিষয় বা পদবি দিয়ে খুঁজুন...' : 'Search by name, subject or designation...'}
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-xs"
              />
            </div>

            {/* Subject Dropdown */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-xs"
            >
              <option value="All">{isBn ? 'সকল বিষয়' : 'All Subjects'}</option>
              {subjectList
                .filter((s) => s !== 'All')
                .map((subj) => (
                  <option key={subj} value={subj}>
                    {isBn ? (SUBJECT_CAT_BN[subj] || subj) : subj}
                  </option>
                ))}
            </select>

            {/* Designation Dropdown */}
            <select
              value={selectedDesignation}
              onChange={(e) => setSelectedDesignation(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-xs"
            >
              <option value="All">{isBn ? 'সকল পদবি' : 'All Designations'}</option>
              {designationList
                .filter((d) => d !== 'All')
                .map((desig) => (
                  <option key={desig} value={desig}>
                    {isBn ? (DESIGNATION_BN[desig] || desig) : desig}
                  </option>
                ))}
            </select>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
              title={isBn ? 'ফিল্টার রিসেট' : 'Reset Filters'}
            >
              <RotateCcw size={13} />
              <span>{isBn ? 'রিসেট' : 'Reset'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Teaching Faculty Section (Matching media_1790105578493.jpg) */}
      {(activeTab === 'all' || activeTab === 'teaching') && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <section className="space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <GraduationCap size={20} />
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {isBn ? 'শিক্ষকমণ্ডলী' : 'Teaching Faculty'}
                  </h2>
                  <span className="bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-xs font-bold px-3 py-0.5 rounded-full">
                    {isBn ? `${toBanglaNum(filteredTeachers.length)} জন শিক্ষক` : `${filteredTeachers.length} Members`}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {isBn ? 'সুন্দর ও দক্ষ ভবিষ্যৎ প্রজন্ম গড়ায় নিবেদিত —' : 'Dedicated to creating a better learning tomorrow —'}
              </p>
            </div>

            {/* 4 Cards Grid for Teaching Faculty */}
            {filteredTeachers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredTeachers.map((teacher) => {
                  const teacherName = isBn ? (TEACHER_TRANSLATIONS[teacher.id]?.nameBn || teacher.name) : teacher.name;
                  const teacherDesig = isBn ? (TEACHER_TRANSLATIONS[teacher.id]?.designationBn || teacher.designation) : teacher.designation;
                  const teacherSubj = isBn ? (TEACHER_TRANSLATIONS[teacher.id]?.subjectBn || teacher.subject) : teacher.subject;
                  return (
                    <div
                      key={teacher.id}
                      onClick={() => {
                        setSelectedTeacher(teacher);
                        setModalTab('professional');
                      }}
                      className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        {/* Photo & Identity Row */}
                        <div className="flex items-start gap-3.5 mb-3">
                          <div className="w-16 h-18 sm:w-18 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-2xs">
                            <img
                              src={teacher.image}
                              alt={teacherName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-[#004d34] transition">
                              {teacherName}
                            </h3>
                            <p className="text-xs text-slate-500 font-semibold mt-0.5">
                              {teacherDesig}
                            </p>

                            {/* Subject Badge */}
                            <div className="mt-2">
                              {getSubjectBadge(teacher.subjectCategory, teacherSubj)}
                            </div>
                          </div>
                        </div>

                        {/* Qualifications */}
                        <div className="pt-2.5 border-t border-slate-100 text-[11px] text-slate-600 font-normal">
                          <strong className="text-slate-800 font-bold">{isBn ? 'শিক্ষাগত যোগ্যতা: ' : 'Qualifications: '}</strong>
                          <span>{isBn ? (TEACHER_DETAILS_BN[teacher.id]?.qualificationsBn || teacher.qualifications) : teacher.qualifications}</span>
                        </div>
                      </div>

                      {/* View Profile Link */}
                      <div className="pt-3 mt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTeacher(teacher);
                            setModalTab('professional');
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 transition cursor-pointer"
                        >
                          <span>{isBn ? 'বিস্তারিত' : 'View'}</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  {isBn ? 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো শিক্ষক পাওয়া যায়নি।' : 'No teaching faculty found matching your filters.'}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-xs font-bold text-[#004d34] underline cursor-pointer"
                >
                  {isBn ? 'ফিল্টার রিসেট করুন' : 'Clear filters'}
                </button>
              </div>
            )}
          </section>
        </div>
      )}

      {/* 4. Administrative Staff Section (Matching media_1790105578493.jpg) */}
      {(activeTab === 'all' || activeTab === 'admin') && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14">
          <section className="space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Briefcase size={20} />
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {isBn ? 'প্রশাসনিক ও অফিস স্টাফ' : 'Administrative Staff'}
                  </h2>
                  <span className="bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-xs font-bold px-3 py-0.5 rounded-full">
                    {isBn ? `${toBanglaNum(filteredStaff.length)} জন কর্মকর্তা-কর্মচারী` : `${filteredStaff.length} Members`}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {isBn ? 'সুশৃঙ্খল ও আন্তরিক প্রাতিষ্ঠানিক পরিবেশ পরিচালনায় নিবেদিত —' : 'Supporting a well-managed and nurturing school environment —'}
              </p>
            </div>

            {/* 4 Cards Grid for Administrative Staff */}
            {filteredStaff.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredStaff.map((staff) => {
                  const staffName = isBn ? (STAFF_TRANSLATIONS[staff.id]?.nameBn || staff.name) : staff.name;
                  const staffRole = isBn ? (STAFF_TRANSLATIONS[staff.id]?.roleBn || staff.role) : staff.role;
                  return (
                    <div
                      key={staff.id}
                      className="bg-white rounded-3xl border border-slate-200/80 p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                    >
                      <div>
                        {/* Photo & Role */}
                        <div className="flex items-start gap-3.5 mb-3">
                          <div className="w-16 h-18 sm:w-18 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-2xs">
                            <img
                              src={staff.image}
                              alt={staffName}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-[#004d34] transition">
                              {staffName}
                            </h3>
                            <p className="text-xs text-[#059669] font-bold mt-1">
                              {staffRole}
                            </p>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-2.5 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-normal">
                          <div className="flex items-center gap-1.5 truncate">
                            <Mail size={12} className="text-slate-400 shrink-0" />
                            <span className="truncate">{staff.email}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone size={12} className="text-slate-400 shrink-0" />
                            <span>{isBn ? toBanglaNum(staff.phone) : staff.phone}</span>
                          </div>
                        </div>
                      </div>

                      {/* View Profile Link */}
                      <div className="pt-3 mt-3 border-t border-slate-100">
                        <Link
                          to="/about"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 transition"
                        >
                          <span>{isBn ? 'বিস্তারিত' : 'View'}</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  {isBn ? 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো স্টাফ পাওয়া যায়নি।' : 'No administrative staff found matching your search.'}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-xs font-bold text-[#004d34] underline cursor-pointer"
                >
                  {isBn ? 'ফিল্টার রিসেট করুন' : 'Clear filters'}
                </button>
              </div>
            )}
          </section>
        </div>
      )}

      {/* 5. Together for a Brighter Future (Matching media_1790105578493.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <section className="bg-[#e8f7ee] border border-emerald-100/90 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#004d34] flex items-center justify-center shrink-0 shadow-2xs">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {isBn ? 'সমৃদ্ধ আগামীর জন্য আমরা ঐক্যবদ্ধ' : 'Together for a Brighter Future'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                {isBn
                  ? 'আমাদের শিক্ষক ও স্টাফ ঐক্যবদ্ধভাবে প্রতিটি শিক্ষার্থীকে আত্মবিশ্বাসী, মানবিক ও দক্ষ হিসেবে গড়ে তোলে।'
                  : 'Our faculty and staff work hand in hand to nurture confident, compassionate and capable individuals.'}
              </p>
            </div>
          </div>

          <a
            href="mailto:soshgskhu@sos-bangladesh.org"
            className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs hover:shadow whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>{isBn ? 'যোগ দিন আমাদের টিমে' : 'Join Our Team'}</span>
            <ArrowRight size={14} />
          </a>
        </section>
      </div>

      {/* 6. Faculty Quick View Modal (Matching media_1790113348730.jpg) */}
      {/* 6. Faculty Quick View Modal (Matching media_1790113348730.jpg) */}
      {selectedTeacher && (() => {
        const detailsBn = TEACHER_DETAILS_BN[selectedTeacher.id];
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setSelectedTeacher(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-7 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition cursor-pointer z-20"
                title="Close"
              >
                <X size={16} />
              </button>

              {/* Modal Body Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* Left Column: Photo & Brief Info */}
                <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-2xs">
                    <img
                      src={selectedTeacher.image}
                      alt={isBn ? (detailsBn?.nameBn || selectedTeacher.name) : selectedTeacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80';
                      }}
                    />
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{isBn ? 'সক্রিয়' : 'Active'}</span>
                    </div>
                  </div>

                  <div className="mt-3.5">
                    <span className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#059669] border border-emerald-100 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      <GraduationCap size={13} />
                      <span>{isBn ? 'শিক্ষকমণ্ডলী' : 'TEACHING FACULTY'}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                    {isBn ? (detailsBn?.nameBn || selectedTeacher.name) : selectedTeacher.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#059669] mt-0.5">
                    {isBn ? (detailsBn?.designationBn || selectedTeacher.designation) : selectedTeacher.designation}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {isBn ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {isBn
                      ? (detailsBn?.aboutBn || 'শিক্ষার মানোন্নয়ন ও শিক্ষার্থীদের সার্বিক বিকাশে নিবেদিতপ্রাণ শিক্ষক।')
                      : (selectedTeacher.about || 'Passionate about education and dedicated to nurturing young minds. Committed to creating an engaging and inclusive learning environment.')}
                  </p>

                  <div className="bg-[#f0faf5] border border-[#d7f1e5] rounded-xl p-3 mt-3 flex items-start gap-2 shadow-2xs">
                    <span className="text-lg text-[#059669] font-serif font-black leading-none shrink-0">“</span>
                    <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                      {isBn
                        ? (detailsBn?.mottoQuoteBn || 'আজকের শিক্ষা, উজ্জ্বল ও আলোকিত আগামীর মূল ভিত্তি।')
                        : (selectedTeacher.mottoQuote || 'Education is the foundation for a brighter tomorrow.')}
                    </p>
                  </div>
                </div>

                {/* Right Column: Tabbed Information */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between self-stretch">
                  {/* Top Tabs */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-100 pb-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => setModalTab('professional')}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                        modalTab === 'professional'
                          ? 'bg-[#e8f7ee] text-[#004d34] border border-emerald-200 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80'
                      }`}
                    >
                      <User size={14} />
                      <span>{isBn ? 'পেশাগত তথ্য' : 'Professional Information'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('academic')}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                        modalTab === 'academic'
                          ? 'bg-[#e8f7ee] text-[#004d34] border border-emerald-200 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80'
                      }`}
                    >
                      <BookOpen size={14} />
                      <span>{isBn ? 'শিক্ষাগত বিবরণ' : 'Academic Details'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalTab('additional')}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                        modalTab === 'additional'
                          ? 'bg-[#e8f7ee] text-[#004d34] border border-emerald-200 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80'
                      }`}
                    >
                      <FileText size={14} />
                      <span>{isBn ? 'অতিরিক্ত তথ্য' : 'Additional Info'}</span>
                    </button>
                  </div>

                  {/* Tab Content Container with fixed minimum height so footer buttons never jump */}
                  <div className="flex-1 my-3.5 min-h-[460px] flex flex-col justify-start">

                  {/* Tab 1: Professional Information */}
                  {modalTab === 'professional' && (
                    <div className="mt-3.5 space-y-3.5 animate-in fade-in duration-100">
                      <h4 className="text-sm font-bold text-slate-900 border-b-2 border-[#059669] inline-block pb-0.5">
                        {isBn ? 'পেশাগত তথ্য' : 'Professional Information'}
                      </h4>

                      {/* 6 Cards Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Card 1: Teaching Subject */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <BookOpen size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'পাঠদানের বিষয়' : 'Teaching Subject'}
                            </span>
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {isBn ? (detailsBn?.subjectBn || selectedTeacher.subject) : selectedTeacher.subject}
                            </span>
                          </div>
                        </div>

                        {/* Card 2: Educational Qualifications */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <GraduationCap size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualifications'}
                            </span>
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {isBn ? (detailsBn?.qualificationsBn || selectedTeacher.qualifications) : selectedTeacher.qualifications}
                            </span>
                          </div>
                        </div>

                        {/* Card 3: Professional Qualifications */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <Award size={16} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'পেশাগত যোগ্যতা' : 'Professional Qualifications'}
                            </span>
                            <span className="text-xs font-bold text-slate-900 block leading-tight">
                              {isBn ? (detailsBn?.professionalQualificationsBn || 'বি.এড, আধুনিক পাঠদান পদ্ধতি প্রশিক্ষণ') : (selectedTeacher.professionalQualifications || 'B.Ed, Training in Modern Teaching Methods')}
                            </span>
                            <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium mt-1 truncate">
                              <Mail size={11} className="shrink-0" />
                              <span className="truncate">{selectedTeacher.email || 'info@soshgskhulna.edu.bd'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card 4: Contact Phone */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <Phone size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'যোগাযোগের ফোন' : 'Contact Phone'}
                            </span>
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {isBn ? toBanglaNum(selectedTeacher.phone || '024-77726775') : (selectedTeacher.phone || '024-77726775')}
                            </span>
                          </div>
                        </div>

                        {/* Card 5: Office Location */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <MapPin size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'অফিস কক্ষ' : 'Office Location'}
                            </span>
                            <span className="text-xs sm:text-sm font-black text-slate-900">
                              {isBn ? (detailsBn?.officeLocationBn || 'শিক্ষক মিলনায়তন / একাডেমি ভবন') : (selectedTeacher.officeLocation || 'Admin Building')}
                            </span>
                          </div>
                        </div>

                        {/* Card 6: Office Hours */}
                        <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                            <Clock size={16} />
                          </div>
                          <div>
                            <span className="text-[11px] text-slate-400 font-semibold block">
                              {isBn ? 'সাক্ষাতের সময়সূচি' : 'Office Hours'}
                            </span>
                            <span className="text-xs font-bold text-slate-900 block">
                              {isBn ? (detailsBn?.officeHoursBn || 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০') : (selectedTeacher.officeHours || 'Sunday - Thursday: 8:00 AM - 4:00 PM')}
                            </span>
                            <span className="text-[11px] font-bold text-rose-600 block mt-0.5">
                              {isBn ? 'শুক্রবার: সাপ্তাহিক ছুটি' : 'Friday: Closed'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* About Card */}
                      <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 mt-3">
                        <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                          <FileText size={16} />
                        </div>
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                            {isBn ? 'পরিচিতি' : 'About'}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {isBn
                              ? (detailsBn?.aboutBn || `${detailsBn?.nameBn || selectedTeacher.name} এস ও এস হারম্যান মেইনার স্কুল খুলনার একজন নিবেদিতপ্রাণ ও অভিজ্ঞ ${detailsBn?.designationBn || selectedTeacher.designation}। তিনি আধুনিক পাঠদান পদ্ধতি ও শিক্ষার্থীদের সৃজনশীল মেধা বিকাশে সচেষ্ট।`)
                              : (selectedTeacher.about || `Mr./Ms. ${selectedTeacher.name} is a dedicated ${selectedTeacher.designation} at SOS Hermann Gmeiner School Khulna. Brings a strong academic background and a deep passion for teaching ${selectedTeacher.subject}. Teaching approach focuses on student-centered learning and creative expression.`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Academic Details */}
                  {modalTab === 'academic' && (
                    <div className="mt-3.5 space-y-3.5 animate-in fade-in duration-100">
                      <h4 className="text-sm font-bold text-slate-900 border-b-2 border-[#059669] inline-block pb-0.5">
                        {isBn ? 'ডিগ্রি ও প্রশিক্ষণ সনদ' : 'Degrees & Training Certifications'}
                      </h4>

                      <div className="space-y-2.5">
                        {(isBn && detailsBn?.educationBn
                          ? detailsBn.educationBn
                          : selectedTeacher.education || [
                              { degree: `Master Degree in ${selectedTeacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2015' },
                              { degree: `Bachelor (Hons) in ${selectedTeacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2013' }
                            ]
                        ).map((edu, i) => (
                          <div key={i} className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start justify-between gap-3">
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold text-slate-900">{edu.degree}</h5>
                              <p className="text-xs text-slate-500 mt-0.5">{edu.institution}</p>
                              <span className="text-[11px] font-bold text-[#059669]">
                                {isBn ? `ফলাফল: ${edu.result}` : `Result: ${edu.result}`}
                              </span>
                            </div>
                            <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-lg shadow-2xs">
                              {isBn ? toBanglaNum(edu.year) : edu.year}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          {isBn ? 'প্রশিক্ষণ সনদসমূহ:' : 'Training Certifications:'}
                        </h5>
                        <div className="space-y-1.5">
                          {(isBn && detailsBn?.certificationsBn
                            ? detailsBn.certificationsBn
                            : selectedTeacher.certifications || [
                                'B.Ed, Training in Modern Teaching Methods & Micro-teaching',
                                'Certified in ICT Integration in Education (TQI-SEP)'
                              ]
                          ).map((cert, ci) => (
                            <div key={ci} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-100 p-2 rounded-lg">
                              <CheckCircle2 size={13} className="text-[#059669] shrink-0" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Additional Info */}
                  {modalTab === 'additional' && (
                    <div className="mt-3.5 space-y-3.5 animate-in fade-in duration-100">
                      <h4 className="text-sm font-bold text-slate-900 border-b-2 border-[#059669] inline-block pb-0.5">
                        {isBn ? 'পাঠদান দায়িত্ব ও প্রকাশনা' : 'Teaching Responsibilities & Publications'}
                      </h4>

                      <div className="space-y-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {isBn ? 'ক্লাসরুমের দায়িত্ব:' : 'Classroom Duties:'}
                        </h5>
                        {(isBn && detailsBn?.responsibilitiesBn
                          ? detailsBn.responsibilitiesBn
                          : selectedTeacher.responsibilities || [
                              `${selectedTeacher.subject}: Core Subject Instruction (Classes 8, 9, 10)`,
                              `Remedial Learning & Student Mentorship Support`
                            ]
                        ).map((resp, ri) => (
                          <div key={ri} className="flex items-start gap-2 text-xs text-slate-700 bg-[#f7faf8] p-2.5 rounded-xl border border-slate-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {((isBn && detailsBn?.publicationsBn) ? detailsBn.publicationsBn : (selectedTeacher.publications || [])).length > 0 && (
                        <div className="pt-2 space-y-2">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            {isBn ? 'গবেষণা ও প্রকাশনা:' : 'Research Works:'}
                          </h5>
                          {(isBn && detailsBn?.publicationsBn
                            ? detailsBn.publicationsBn
                            : selectedTeacher.publications!
                          ).map((pub, pi) => (
                            <div key={pi} className="bg-white border border-slate-100 p-2.5 rounded-xl text-xs">
                              <p className="font-bold text-slate-900">"{pub.title}"</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">
                                {pub.publisher} ({isBn ? toBanglaNum(pub.year) : pub.year})
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  </div>

                  {/* Modal Footer Actions - Fixed at Bottom Right */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                    <Link
                      to={`/faculty/${selectedTeacher.id}`}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold flex items-center gap-2 shadow-2xs transition"
                    >
                      <User size={14} />
                      <span>{isBn ? 'পূর্ণাঙ্গ প্রোফাইল দেখুন' : 'View Full Profile'}</span>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedTeacher(null)}
                      className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                    >
                      <X size={14} />
                      <span>{isBn ? 'বন্ধ করুন' : 'Close'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
