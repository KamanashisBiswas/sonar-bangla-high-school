import React, { useState, useMemo } from 'react';
import {
  Users,
  GraduationCap,
  Award,
  Sparkles,
  Search,
  RotateCcw,
  Briefcase,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { InnerHero } from '../components/InnerHero';
import { TEACHERS, ADMINISTRATIVE_STAFF } from '../data/schoolData';

export const Faculty: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'teaching' | 'admin'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedDesignation, setSelectedDesignation] = useState('All');

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

  // Helper for badge color based on subject
  const getSubjectBadgeStyle = (category: string) => {
    switch (category) {
      case 'Science':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'English':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Math':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Physics':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Bangla':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Biology':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Islamic Studies':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'ICT':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-slate-50/60 pb-16">
      {/* 1. Signature InnerHero Section */}
      <InnerHero
        breadcrumb="Faculty & Staff"
        badge="OUR EDUCATORS, OUR STRENGTH"
        badgeIcon={<Users size={13} className="text-[#059669]" />}
        title="Faculty & Staff Directory"
        description="Meet our dedicated and experienced faculty and staff who inspire, guide and support our students towards a brighter future."
        features={[
          {
            icon: <Users size={16} />,
            title: 'Dedicated',
            subtitle: 'Educators',
          },
          {
            icon: <Award size={16} />,
            title: 'Student',
            subtitle: 'Centered Approach',
          },
          {
            icon: <Sparkles size={16} />,
            title: 'Excellence',
            subtitle: 'in Education',
          },
        ]}
        buildingQuote={{
          text: 'Great teachers inspire great minds.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      {/* Main Content Area */}
      <div className="container mx-auto pt-8 sm:pt-10 space-y-10">
        {/* 2. Category Switcher Tabs & Filter Bar Row (Matching Exact Layout) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-xs">
          {/* Left: Tab Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'teaching' ? 'all' : 'teaching')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'teaching' || activeTab === 'all'
                  ? 'bg-[#004d34] text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <GraduationCap size={16} />
              <span>Teaching Faculty</span>
            </button>

            <button
              onClick={() => setActiveTab(activeTab === 'admin' ? 'all' : 'admin')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'admin'
                  ? 'bg-[#004d34] text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Briefcase size={16} />
              <span>Administrative Staff</span>
            </button>
          </div>

          {/* Right: Search Input & Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
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
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
            </div>

            {/* Subject Dropdown */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
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
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer"
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
              onClick={handleReset}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
              title="Reset Filters"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* 3. Teaching Faculty Section */}
        {(activeTab === 'all' || activeTab === 'teaching') && (
          <section className="space-y-5">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#004d34] flex items-center justify-center">
                  <GraduationCap size={18} />
                </div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Teaching Faculty
                  </h2>
                  <span className="bg-[#e8f7f0] text-[#005a3c] border border-[#a7f3d0] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {filteredTeachers.length} Members
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Dedicated to creating a better learning tomorrow —
              </p>
            </div>

            {/* 4-Column Grid for Teaching Faculty Cards */}
            {filteredTeachers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredTeachers.map((teacher) => (
                  <div
                    key={teacher.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Photo & Identity Row */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-16 h-18 sm:w-18 sm:h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
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
                          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-emerald-800 transition truncate">
                            {teacher.name}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">
                            {teacher.designation}
                          </p>

                          {/* Subject Badge */}
                          <div className="mt-2">
                            <span
                              className={`inline-block border text-[11px] font-bold px-2.5 py-0.5 rounded-lg ${getSubjectBadgeStyle(
                                teacher.subjectCategory
                              )}`}
                            >
                              {teacher.subject}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Qualifications Line */}
                      <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600 font-medium">
                        <span className="font-bold text-slate-700">Qualifications: </span>
                        {teacher.qualifications}
                      </div>
                    </div>

                    {/* View Profile Link */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                      <span>View Profile</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No teaching faculty found matching your filters.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-3 text-xs font-bold text-emerald-700 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>
        )}

        {/* 4. Administrative Staff Section */}
        {(activeTab === 'all' || activeTab === 'admin') && (
          <section className="space-y-5 pt-4">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#004d34] flex items-center justify-center">
                  <Briefcase size={18} />
                </div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Administrative Staff
                  </h2>
                  <span className="bg-[#e8f7f0] text-[#005a3c] border border-[#a7f3d0] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {filteredStaff.length} Members
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Supporting a well-managed and nurturing school environment —
              </p>
            </div>

            {/* 4-Column Grid for Administrative Staff Cards */}
            {filteredStaff.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Photo & Role */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-16 h-18 sm:w-18 sm:h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
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
                          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight group-hover:text-emerald-800 transition truncate">
                            {staff.name}
                          </h3>
                          <p className="text-xs text-emerald-800 font-bold mt-1">
                            {staff.role}
                          </p>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 truncate">
                          <Mail size={12} className="text-slate-400 flex-shrink-0" />
                          <span className="truncate">{staff.email}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone size={12} className="text-slate-400 flex-shrink-0" />
                          <span>{staff.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Profile Link */}
                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900">
                      <span>View Profile</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
                <p className="text-slate-500 text-sm">
                  No administrative staff found matching your search.
                </p>
              </div>
            )}
          </section>
        )}

        {/* 5. Together for a Brighter Future CTA Banner (Matching Image 1) */}
        <div className="bg-[#e8f7f0] border border-[#a7f3d0] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#004d34] flex items-center justify-center flex-shrink-0 shadow-xs">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Together for a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5 max-w-xl">
                Our faculty and staff work hand in hand to nurture confident, compassionate and capable individuals.
              </p>
            </div>
          </div>

          <a
            href="mailto:soshgskhu@sos-bangladesh.org"
            className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#064e3b] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>Join Our Team</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
