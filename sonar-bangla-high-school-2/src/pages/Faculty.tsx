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
import type { Teacher } from '../data/schoolData';
import { TEACHERS, ADMINISTRATIVE_STAFF } from '../data/schoolData';

export const Faculty: React.FC = () => {
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
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Faculty & Staff</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Users size={14} className="text-[#059669]" />
              <span>OUR EDUCATORS, OUR STRENGTH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Faculty & Staff <br />
              Directory
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Meet our dedicated and experienced faculty and staff who inspire, guide and support our students towards a brighter future.
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
                  Education today for a brighter tomorrow
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — SOS Hermann Gmeiner School
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
              <span>Teaching Faculty</span>
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
              <span>Administrative Staff</span>
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
                placeholder="Search by name, subject or designation..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-xs"
              />
            </div>

            {/* Subject Dropdown */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-xs"
            >
              <option value="All">All Subjects</option>
              {subjectList
                .filter((s) => s !== 'All')
                .map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
            </select>

            {/* Designation Dropdown */}
            <select
              value={selectedDesignation}
              onChange={(e) => setSelectedDesignation(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-xs"
            >
              <option value="All">All Designations</option>
              {designationList
                .filter((d) => d !== 'All')
                .map((desig) => (
                  <option key={desig} value={desig}>
                    {desig}
                  </option>
                ))}
            </select>

            {/* Reset Button */}
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
              title="Reset Filters"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
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
                    Teaching Faculty
                  </h2>
                  <span className="bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-xs font-bold px-3 py-0.5 rounded-full">
                    {filteredTeachers.length} Members
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Dedicated to creating a better learning tomorrow —
              </p>
            </div>

            {/* 4 Cards Grid for Teaching Faculty */}
            {filteredTeachers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredTeachers.map((teacher) => (
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
                            alt={teacher.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-[#004d34] transition">
                            {teacher.name}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            {teacher.designation}
                          </p>

                          {/* Subject Badge */}
                          <div className="mt-2">
                            {getSubjectBadge(teacher.subjectCategory, teacher.subject)}
                          </div>
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div className="pt-2.5 border-t border-slate-100 text-[11px] text-slate-600 font-normal">
                        <strong className="text-slate-800 font-bold">Qualifications: </strong>
                        <span>{teacher.qualifications}</span>
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
                        <span>View</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No teaching faculty found matching your filters.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-3 text-xs font-bold text-[#004d34] underline cursor-pointer"
                >
                  Clear filters
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
                    Administrative Staff
                  </h2>
                  <span className="bg-[#e8f7ee] text-[#004d34] border border-emerald-100 text-xs font-bold px-3 py-0.5 rounded-full">
                    {filteredStaff.length} Members
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Supporting a well-managed and nurturing school environment —
              </p>
            </div>

            {/* 4 Cards Grid for Administrative Staff */}
            {filteredStaff.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredStaff.map((staff) => (
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
                            alt={staff.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80';
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-[#004d34] transition">
                            {staff.name}
                          </h3>
                          <p className="text-xs text-[#059669] font-bold mt-1">
                            {staff.role}
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
                          <span>{staff.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Profile Link */}
                    <div className="pt-3 mt-3 border-t border-slate-100">
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 transition"
                      >
                        <span>View</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No administrative staff found matching your search.
                </p>
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
                Together for a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                Our faculty and staff work hand in hand to nurture confident, compassionate and capable individuals.
              </p>
            </div>
          </div>

          <a
            href="mailto:soshgskhu@sos-bangladesh.org"
            className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs hover:shadow whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Join Our Team</span>
            <ArrowRight size={14} />
          </a>
        </section>
      </div>

      {/* 6. Faculty Quick View Modal (Matching media_1790113348730.jpg) */}
      {selectedTeacher && (
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column: Photo & Brief Info */}
              <div className="md:col-span-5 lg:col-span-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 relative shadow-2xs">
                  <img
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Active</span>
                  </div>
                </div>

                <div className="mt-3.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#059669] border border-emerald-100 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    <GraduationCap size={13} />
                    <span>TEACHING FACULTY</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 leading-tight">
                  {selectedTeacher.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#059669] mt-0.5">
                  {selectedTeacher.designation}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  SOS Hermann Gmeiner School Khulna
                </p>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Passionate about education and dedicated to nurturing young minds. Committed to creating an engaging and inclusive learning environment.
                </p>

                <div className="bg-[#f0faf5] border border-[#d7f1e5] rounded-xl p-3 mt-3 flex items-start gap-2 shadow-2xs">
                  <span className="text-lg text-[#059669] font-serif font-black leading-none shrink-0">“</span>
                  <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                    {selectedTeacher.mottoQuote || 'Education is the foundation for a brighter tomorrow.'}
                  </p>
                </div>
              </div>

              {/* Right Column: Tabbed Information */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
                {/* Top Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-slate-100 pb-3">
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
                    <span>Professional Information</span>
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
                    <span>Academic Details</span>
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
                    <span>Additional Info</span>
                  </button>
                </div>

                {/* Tab 1: Professional Information */}
                {modalTab === 'professional' && (
                  <div className="mt-3.5 space-y-3.5 animate-in fade-in duration-100">
                    <h4 className="text-sm font-bold text-slate-900 border-b-2 border-[#059669] inline-block pb-0.5">
                      Professional Information
                    </h4>

                    {/* 6 Cards Grid (Matching reference screenshot) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Card 1: Teaching Subject */}
                      <div className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] text-slate-400 font-semibold block">
                            Teaching Subject
                          </span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {selectedTeacher.subject}
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
                            Educational Qualifications
                          </span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {selectedTeacher.qualifications}
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
                            Professional Qualifications
                          </span>
                          <span className="text-xs font-bold text-slate-900 block leading-tight">
                            {selectedTeacher.professionalQualifications || 'B.Ed, Training in Modern Teaching Methods'}
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
                            Contact Phone
                          </span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {selectedTeacher.phone || '024-77726775'}
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
                            Office Location
                          </span>
                          <span className="text-xs sm:text-sm font-black text-slate-900">
                            {selectedTeacher.officeLocation || 'Admin Building'}
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
                            Office Hours
                          </span>
                          <span className="text-xs font-bold text-slate-900 block">
                            {selectedTeacher.officeHours || 'Sunday - Thursday: 8:00 AM - 4:00 PM'}
                          </span>
                          <span className="text-[11px] font-bold text-rose-600 block mt-0.5">
                            Friday: Closed
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
                          About
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {selectedTeacher.about || `Mr./Ms. ${selectedTeacher.name} is a dedicated ${selectedTeacher.designation} at SOS Hermann Gmeiner School Khulna. Brings a strong academic background and a deep passion for teaching ${selectedTeacher.subject}. Teaching approach focuses on student-centered learning and creative expression.`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Academic Details */}
                {modalTab === 'academic' && (
                  <div className="mt-3.5 space-y-3.5 animate-in fade-in duration-100">
                    <h4 className="text-sm font-bold text-slate-900 border-b-2 border-[#059669] inline-block pb-0.5">
                      Degrees & Training Certifications
                    </h4>

                    <div className="space-y-2.5">
                      {(selectedTeacher.education || [
                        { degree: `Master Degree in ${selectedTeacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2015' },
                        { degree: `Bachelor (Hons) in ${selectedTeacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2013' }
                      ]).map((edu, i) => (
                        <div key={i} className="bg-[#f7faf8] border border-slate-100 rounded-xl p-3 flex items-start justify-between gap-3">
                          <div>
                            <h5 className="text-xs sm:text-sm font-bold text-slate-900">{edu.degree}</h5>
                            <p className="text-xs text-slate-500 mt-0.5">{edu.institution}</p>
                            <span className="text-[11px] font-bold text-[#059669]">Result: {edu.result}</span>
                          </div>
                          <span className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-lg shadow-2xs">{edu.year}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Training Certifications:</h5>
                      <div className="space-y-1.5">
                        {(selectedTeacher.certifications || [
                          'B.Ed, Training in Modern Teaching Methods & Micro-teaching',
                          'Certified in ICT Integration in Education (TQI-SEP)'
                        ]).map((cert, ci) => (
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
                      Teaching Responsibilities & Publications
                    </h4>

                    <div className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Classroom Duties:</h5>
                      {(selectedTeacher.responsibilities || [
                        `${selectedTeacher.subject}: Core Subject Instruction (Classes 8, 9, 10)`,
                        `Remedial Learning & Student Mentorship Support`
                      ]).map((resp, ri) => (
                        <div key={ri} className="flex items-start gap-2 text-xs text-slate-700 bg-[#f7faf8] p-2.5 rounded-xl border border-slate-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {selectedTeacher.publications && selectedTeacher.publications.length > 0 && (
                      <div className="pt-2 space-y-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Research Works:</h5>
                        {selectedTeacher.publications.map((pub, pi) => (
                          <div key={pi} className="bg-white border border-slate-100 p-2.5 rounded-xl text-xs">
                            <p className="font-bold text-slate-900">"{pub.title}"</p>
                            <p className="text-[11px] text-slate-500 mt-0.5">{pub.publisher} ({pub.year})</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <Link
                    to={`/faculty/${selectedTeacher.id}`}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold flex items-center gap-2 shadow-2xs transition"
                  >
                    <User size={14} />
                    <span>View Full Profile</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSelectedTeacher(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                  >
                    <X size={14} />
                    <span>Close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
