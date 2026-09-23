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
  ArrowRight
} from 'lucide-react';
import { TEACHERS, SCHOOL_INFO, LEADERSHIP_PROFILES } from '../data/schoolData';
import { TEACHER_DETAILS_BN } from '../data/teacherLocalization';
import { useLanguage } from '../contexts/LanguageContext';

const TEACHER_TRANSLATIONS: Record<string, { nameBn: string; designationBn: string; subjectBn: string }> = {
  '1': { nameBn: 'ইন্দ্রজিৎ কুমার মণ্ডল', designationBn: 'সহকারী শিক্ষক', subjectBn: 'রসায়ন / বিজ্ঞান' },
  '2': { nameBn: 'মোসাম্মৎ রেহানা পারভীন', designationBn: 'সহকারী অধ্যাপিকা', subjectBn: 'ইংরেজি' },
  '3': { nameBn: 'মোঃ জহিরুল হক', designationBn: 'সিনিয়র শিক্ষক', subjectBn: 'সাধারণ ও উচ্চতর গণিত' },
  '4': { nameBn: 'তানজিলা রহমান', designationBn: 'সিনিয়র শিক্ষক', subjectBn: 'পদার্থবিজ্ঞান' },
  '5': { nameBn: 'আব্দুল করিম শেখ', designationBn: 'সহকারী শিক্ষক', subjectBn: 'বাংলা সাহিত্য' },
  '6': { nameBn: 'নাসরিন সুলতানা', designationBn: 'সহকারী শিক্ষক', subjectBn: 'জীববিজ্ঞান' },
  '7': { nameBn: 'মোহাম্মদ আলী', designationBn: 'সিনিয়র শিক্ষক', subjectBn: 'ইসলাম ও নৈতিক শিক্ষা' },
  '8': { nameBn: 'ফারহানা ইয়াসমিন', designationBn: 'সহকারী শিক্ষক', subjectBn: 'তথ্য ও যোগাযোগ প্রযুক্তি' },
  'chairman': { nameBn: 'মাকসুদা সুলতানা', designationBn: 'সভাপতি, গভর্নিং বডি', subjectBn: 'প্রশাসন' },
  'principal': { nameBn: 'ইন্দ্রজিৎ কুমার মণ্ডল', designationBn: 'অধ্যক্ষ ও সদস্য সচিব', subjectBn: 'শিক্ষা প্রশাসন' },
};

export const FacultyProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
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

  const detailsBn = isBn && teacher.id ? (TEACHER_DETAILS_BN[teacher.id] || (normalizedId ? TEACHER_DETAILS_BN[normalizedId] : undefined)) : undefined;
  const tr = teacher.id ? TEACHER_TRANSLATIONS[teacher.id] : undefined;
  const teacherName = isBn && (detailsBn?.nameBn || tr?.nameBn) ? (detailsBn?.nameBn || tr?.nameBn) : teacher.name;
  const teacherDesignation = isBn && (detailsBn?.designationBn || tr?.designationBn) ? (detailsBn?.designationBn || tr?.designationBn) : teacher.designation;
  const teacherSubject = isBn && (detailsBn?.subjectBn || tr?.subjectBn) ? (detailsBn?.subjectBn || tr?.subjectBn) : teacher.subject;
  const teacherMottoQuote = isBn && detailsBn?.mottoQuoteBn ? detailsBn.mottoQuoteBn : teacher.mottoQuote;
  const teacherBioQuote = isBn && (detailsBn?.bioQuoteBn || detailsBn?.aboutBn) ? (detailsBn.bioQuoteBn || detailsBn.aboutBn) : (teacher.bioQuote || teacher.about);
  const teacherEducation = isBn && detailsBn?.educationBn ? detailsBn.educationBn : teacher.education;
  const teacherCertifications = isBn && detailsBn?.certificationsBn ? detailsBn.certificationsBn : teacher.certifications;
  const teacherPublications = isBn && detailsBn?.publicationsBn ? detailsBn.publicationsBn : teacher.publications;
  const teacherResponsibilities = isBn && detailsBn?.responsibilitiesBn ? detailsBn.responsibilitiesBn : teacher.responsibilities;
  const teacherOfficeLocation = isBn && detailsBn?.officeLocationBn ? detailsBn.officeLocationBn : teacher.officeLocation;
  const teacherOfficeHours = isBn && detailsBn?.officeHoursBn ? detailsBn.officeHoursBn : teacher.officeHours;


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${teacherName} - ${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#f4faf6] min-h-screen pb-20 text-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-3">
          <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
            <Home size={13} />
            <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
          </Link>
          <span className="text-slate-400">›</span>
          <Link
            to={isLeader ? "/administration" : "/faculty"}
            className="hover:text-emerald-800 transition-colors text-slate-600"
          >
            {isBn
              ? (isLeader ? "প্রশাসন ও পরিচালনা পর্ষদ" : "শিক্ষক ও কর্মকর্তা ডিরেক্টরি")
              : (isLeader ? "School Leadership & Administration" : "Faculty & Staff Directory")}
          </Link>
          <span className="text-slate-400">›</span>
          <span className="text-slate-800 font-bold">{teacherName}</span>
        </div>

        {/* Back and Share Action Row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to={isLeader ? "/administration" : "/faculty"}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition"
          >
            <ChevronLeft size={14} />
            <span>
              {isBn
                ? (isLeader ? "প্রশাসনে ফিরে যান" : "শিক্ষক ডিরেক্টরিতে ফিরে যান")
                : (isLeader ? "Back to Administration" : "Back to Faculty & Staff Directory")}
            </span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 shadow-2xs transition cursor-pointer"
          >
            <Share2 size={13} />
            <span>{copied ? (isBn ? 'লিংক কপি হয়েছে!' : 'Link Copied!') : (isBn ? 'প্রোফাইল শেয়ার' : 'Share Profile')}</span>
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
                  alt={teacherName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md">
                  {isLeader ? (
                    <>
                      <Award size={14} className="text-amber-400" />
                      <span>{isBn ? 'প্রাতিষ্ঠানিক নেতৃত্ব' : 'School Leadership'}</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap size={14} className="text-emerald-400" />
                      <span>{isBn ? 'শিক্ষকমণ্ডলী' : 'Teaching Faculty'}</span>
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
                    <span>
                      {isLeader
                        ? (teacher.id === 'chairman'
                            ? (isBn ? 'সভাপতি, গভর্নিং বডি' : 'CHAIRMAN, GOVERNING BODY')
                            : (isBn ? 'অধ্যক্ষ ও সদস্য সচিব' : 'PRINCIPAL & MEMBER SECRETARY'))
                        : (isBn ? 'শিক্ষকমণ্ডলী' : 'TEACHING FACULTY')}
                    </span>
                  </span>

                  <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
                    {teacherName}
                  </h1>

                  <p className="text-sm sm:text-base font-bold text-[#059669] mt-0.5">
                    {teacherDesignation} {teacherSubject ? `(${teacherSubject})` : ''}
                  </p>

                  <p className="text-xs text-slate-500 font-medium">
                    {isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}
                  </p>
                </div>

                {/* Floating Quote Box on Right */}
                <div className="bg-[#f0faf5] border border-[#d7f1e5] rounded-2xl p-4 max-w-xs shrink-0 shadow-2xs">
                  <span className="text-2xl text-[#059669] font-serif font-black block leading-none mb-1">
                    “
                  </span>
                  <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                    {teacherMottoQuote || (isBn ? 'শিক্ষাই একটি সম্ভাবনাময় ভবিষ্যতের সূচনা করে।' : 'Education is the foundation for a brighter tomorrow.')}
                  </p>
                </div>
              </div>

              {/* Bio Quote */}
              <div className="border-l-2 border-[#059669] pl-3.5 py-0.5">
                <p className="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">
                  "{teacherBioQuote}"
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
                      {isBn ? toBanglaNum(teacher.experience || '08+') + ' বছর' : (teacher.experience || '08+ Years')}
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {isBn ? 'কর্ম অভিজ্ঞতা' : 'Years of Experience'}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Star size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-black text-slate-900 block leading-tight">
                      {isBn ? toBanglaNum(teacher.studentsMentored || '250+') : (teacher.studentsMentored || '250+')}
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {isBn ? 'দিকনির্দেশনা প্রাপ্ত শিক্ষার্থী' : 'Students Mentored'}
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
                      {isBn ? toBanglaNum(teacher.phone || SCHOOL_INFO.phone) : (teacher.phone || SCHOOL_INFO.phone)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Detailed Sections Grid */}
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
                    {isBn ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualifications'}
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {isBn
                    ? `${toBanglaNum(teacherEducation?.length || 3)}টি ডিগ্রি`
                    : `${teacherEducation?.length || 3} qualifications`}
                </span>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4 relative pl-3 before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-200">
                {(teacherEducation || [
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
                          {isBn ? 'ফলাফল: ' : 'Result: '}{edu.result}
                        </span>
                      </div>
                      <span className="bg-white border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-lg shrink-0 shadow-2xs">
                        {isBn ? toBanglaNum(edu.year) : edu.year}
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
                    {isBn ? 'পেশাগত প্রশিক্ষণ ও সনদ' : 'Professional Training & Certifications'}
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {isBn
                    ? `${toBanglaNum(teacherCertifications?.length || 4)}টি সনদ`
                    : `${teacherCertifications?.length || 4} certifications`}
                </span>
              </div>

              {/* Certifications List */}
              <div className="space-y-3">
                {(teacherCertifications || [
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
                    {isBn ? 'গবেষণা ও প্রকাশনা' : 'Research & Publications'}
                  </h3>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {isBn
                    ? `${toBanglaNum(teacherPublications?.length || 2)}টি প্রকাশনা`
                    : `${teacherPublications?.length || 2} publications`}
                </span>
              </div>

              <div className="space-y-3">
                {(teacherPublications || [
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
                        {isBn ? toBanglaNum(pub.year) : pub.year}
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
                <span>{isBn ? 'সকল প্রকাশনা দেখুন' : 'View All Publications'}</span>
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
                    {isLeader
                      ? (isBn ? 'প্রাতিষ্ঠানিক দায়িত্ব ও প্রশাসন' : 'Institutional Responsibilities & Governance')
                      : (isBn ? 'পাঠদান ও প্রাতিষ্ঠানিক দায়িত্ব' : 'Courses & Teaching Responsibilities')}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {(teacherResponsibilities || [
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
                  <strong>{isBn ? 'অবস্থান:' : 'Location:'}</strong> {teacherOfficeLocation || (isBn ? 'শিক্ষক মিলনায়তন, ২য় তলা, একাডেমিক ভবন' : "Teachers' Room, 2nd Floor, Academic Building")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-[#059669] shrink-0" />
                <span>
                  <strong>{isBn ? 'অফিস সময়:' : 'Office Hours:'}</strong> {teacherOfficeHours || (isBn ? 'রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - বিকাল ৪:০০' : "Sunday - Thursday: 9:00 AM - 4:00 PM")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
