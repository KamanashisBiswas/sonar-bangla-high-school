import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Home,
  ChevronLeft,
  Share2,
  GraduationCap,
  Users,
  Star,
  Mail,
  Phone,
  BookOpen,
  Award,
  FileText,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TEACHERS, SCHOOL_INFO, LEADERSHIP_PROFILES } from '../data/schoolData';

export const FacultyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'certifications' | 'publications' | 'teaching' | 'contact'>('overview');
  const [copied, setCopied] = useState(false);

  const normalizedId = id?.toLowerCase();
  const isLeader =
    normalizedId === 'chairman' ||
    normalizedId === 'principal' ||
    normalizedId === 'maksuda-sultana' ||
    normalizedId === 'indrajit-kumar-mondal';

  // Find profile: check leadership profiles first, then teachers
  const teacher =
    (normalizedId && LEADERSHIP_PROFILES[normalizedId]) ||
    (normalizedId === 'maksuda-sultana' ? LEADERSHIP_PROFILES.chairman : null) ||
    (normalizedId === 'indrajit-kumar-mondal' ? LEADERSHIP_PROFILES.principal : null) ||
    TEACHERS.find((t) => t.id === id) ||
    TEACHERS[1] ||
    TEACHERS[0];

  if (!teacher) {
    return <Navigate to="/faculty" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${teacher.name} - SOS Hermann Gmeiner School Khulna`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const navTabs = [
    { id: 'overview', label: 'Overview', icon: <GraduationCap size={15} /> },
    { id: 'education', label: 'Education', icon: <BookOpen size={15} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={15} /> },
    { id: 'publications', label: 'Publications', icon: <FileText size={15} /> },
    { id: 'teaching', label: isLeader ? 'Leadership' : 'Teaching', icon: <Layers size={15} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={15} /> },
  ] as const;

  return (
    <div className="bg-[#f4faf6] min-h-screen pb-20 text-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3">
          <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <span className="text-slate-400">›</span>
          <Link
            to={isLeader ? "/administration" : "/faculty"}
            className="hover:text-emerald-800 transition-colors text-slate-600"
          >
            {isLeader ? "School Leadership & Administration" : "Faculty & Staff Directory"}
          </Link>
          <span className="text-slate-400">›</span>
          <span className="text-slate-800 font-bold">{teacher.name}</span>
        </div>

        {/* Back and Share Action Row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to={isLeader ? "/administration" : "/faculty"}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition"
          >
            <ChevronLeft size={14} />
            <span>{isLeader ? "Back to Administration" : "Back to Faculty & Staff Directory"}</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
          >
            <Share2 size={13} />
            <span>{copied ? 'Link Copied!' : 'Share Profile'}</span>
          </button>
        </div>

        {/* 1. Main Hero Profile Card (Matching media_1790113355933.jpg) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left: Big Portrait Photo */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-md bg-slate-100 border border-slate-200/90 group">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                  {isLeader ? (
                    <>
                      <Award size={14} className="text-amber-400" />
                      <span>School Leadership</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap size={14} className="text-emerald-400" />
                      <span>Teaching Faculty</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Info & Bio Block */}
            <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between space-y-4">
              {/* Header Details & Quote */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    {isLeader ? <Award size={13} /> : <GraduationCap size={13} />}
                    <span>{isLeader ? (teacher.id === 'chairman' ? 'CHAIRMAN, GOVERNING BODY' : 'PRINCIPAL & MEMBER SECRETARY') : 'TEACHING FACULTY'}</span>
                  </span>

                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
                    {teacher.name}
                  </h1>

                  <p className="text-sm sm:text-base font-bold text-[#059669] mt-0.5">
                    {teacher.designation} {teacher.subject ? `(${teacher.subject})` : ''}
                  </p>

                  <p className="text-xs text-slate-500 font-medium">
                    {SCHOOL_INFO.name}
                  </p>
                </div>

                {/* Floating Quote Box on Right */}
                <div className="bg-[#f0faf5] border border-[#d7f1e5] rounded-2xl p-4 max-w-xs shrink-0 shadow-2xs">
                  <span className="text-2xl text-[#059669] font-serif font-black block leading-none mb-1">
                    “
                  </span>
                  <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                    {teacher.mottoQuote || 'Education is the foundation for a brighter tomorrow.'}
                  </p>
                </div>
              </div>

              {/* Bio Quote */}
              <div className="border-l-2 border-[#059669] pl-3.5 py-0.5">
                <p className="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">
                  "{teacher.bioQuote || teacher.about}"
                </p>
              </div>

              {/* Stat & Contact Boxes (3 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-black text-slate-900 block leading-tight">
                      {teacher.experience || '08+ Years'}
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Years of Experience
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Star size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-black text-slate-900 block leading-tight">
                      {teacher.studentsMentored || '250+'}
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Students Mentored
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-[#059669] shrink-0" />
                    <span className="font-bold text-slate-900 truncate">
                      {teacher.email || 'info@soshgskhulna.edu.bd'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-[#059669] shrink-0" />
                    <span className="font-semibold text-slate-700">
                      {teacher.phone || SCHOOL_INFO.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="bg-white rounded-2xl p-1.5 border border-slate-200 mt-6 shadow-2xs flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 ${
                activeTab === tab.id
                  ? 'bg-[#e8f7ee] text-[#004d34] border border-emerald-200 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 3. Detailed Sections Grid (Matching media_1790113355933.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Card 1: Educational Qualifications */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Educational Qualifications
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {teacher.education?.length || 3} qualifications
                </span>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4 relative pl-3 before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-200">
                {(teacher.education || [
                  { degree: `Master of Science (M.Sc) in ${teacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2015' },
                  { degree: `Bachelor of Science (B.Sc Hons) in ${teacher.subject}`, institution: 'University of Dhaka', result: 'First Class', year: '2013' },
                  { degree: 'Bachelor of Education (B.Ed)', institution: "Govt. Teachers' Training College", result: 'First Class', year: '2017' }
                ]).map((edu, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#059669] border-2 border-white shadow-2xs mt-1 shrink-0 z-10" />
                    <div className="flex-1 bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {edu.institution}
                        </p>
                        <span className="inline-block text-[11px] font-bold text-[#059669] mt-1">
                          Result: {edu.result}
                        </span>
                      </div>
                      <span className="bg-white border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0 shadow-2xs">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Professional Training & Certifications */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Award size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Professional Training & Certifications
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {teacher.certifications?.length || 4} certifications
                </span>
              </div>

              {/* Certifications List */}
              <div className="space-y-3">
                {(teacher.certifications || [
                  'British Council Certificate in English Language Teaching (CELT)',
                  'B.Ed, Training in Modern Teaching Methods & Micro-teaching',
                  'Certified in ICT Integration in Language Education (TQI-SEP)',
                  'Youth Leadership & Debating Coach Certification'
                ]).map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <Award size={15} />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Research & Publications */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                    <FileText size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Research & Publications
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {teacher.publications?.length || 2} publications
                </span>
              </div>

              <div className="space-y-3">
                {(teacher.publications || [
                  { title: `Communicative ${teacher.subject} Pedagogical Techniques in Rural and Semi-Urban High Schools`, publisher: 'Educational Research Forum Bangladesh', year: '2020' },
                  { title: `Fostering Creative Problem Solving and Critical Reading Habits among High School Learners`, publisher: 'Secondary Education Journal', year: '2022' }
                ]).map((pub, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3.5 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        "{pub.title}"
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {pub.publisher || pub.journal}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="bg-purple-50 text-purple-700 border border-purple-100 text-[11px] font-bold px-2 py-0.5 rounded-md">
                        {pub.year}
                      </span>
                      <ExternalLink size={13} className="text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                type="button"
                className="text-xs font-bold text-[#004d34] hover:text-emerald-800 transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>View All Publications</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Card 4: Courses & Teaching Responsibilities */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <BookOpen size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {isLeader ? 'Institutional Responsibilities & Governance' : 'Courses & Teaching Responsibilities'}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {(teacher.responsibilities || [
                  `${teacher.subject}: Core Subject Instruction & Exam Preparation (Classes 8, 9, 10)`,
                  `Practical Sessions & Remedial Coaching (Classes 9, 10)`,
                  `Co-Curricular & Student Mentorship Program Facilitation`
                ]).map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office & Hours Box */}
            <div className="mt-5 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#059669] shrink-0" />
                <span>
                  <strong>Location:</strong> {teacher.officeLocation || "Teachers' Room, 2nd Floor, Academic Building"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-[#059669] shrink-0" />
                <span>
                  <strong>Office Hours:</strong> {teacher.officeHours || "Sunday - Thursday: 9:00 AM - 4:00 PM"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
