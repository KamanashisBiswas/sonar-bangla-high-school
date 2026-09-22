import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  BarChart3,
  Landmark,
  User,
  Calendar,
  FileText,
  Users,
  Search,
  Printer,
  Download,
  CheckCircle2,
  TrendingUp,
  Star,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

interface SubjectMark {
  code: string;
  name: string;
  fullMarks: number;
  obtained: number;
  grade: string;
  gpa: string;
}

interface StudentResult {
  roll: string;
  name: string;
  avatarLetter: string;
  avatarColor: string;
  groupSec: string;
  group: string;
  totalMarks: number;
  maxMarks: number;
  gpa: string;
  grade: string;
  status: 'Passed' | 'Failed';
  subjects: SubjectMark[];
}

const RESULTS_DATABASE: StudentResult[] = [
  {
    roll: '101',
    name: 'Abdullah Al Mamun',
    avatarLetter: 'A',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    groupSec: 'Science (A)',
    group: 'Science',
    totalMarks: 672,
    maxMarks: 700,
    gpa: '5.00',
    grade: 'A+',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 95, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 92, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 89, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 48, grade: 'A+', gpa: '5.00' },
    ],
  },
  {
    roll: '102',
    name: 'Sumaiya Akter',
    avatarLetter: 'S',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Business Studies (A)',
    group: 'Business Studies',
    totalMarks: 658,
    maxMarks: 700,
    gpa: '5.00',
    grade: 'A+',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 90, grade: 'A+', gpa: '5.00' },
      { code: '146', name: 'Accounting', fullMarks: 100, obtained: 94, grade: 'A+', gpa: '5.00' },
      { code: '147', name: 'Business Org', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '148', name: 'Finance & Banking', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 47, grade: 'A+', gpa: '5.00' },
    ],
  },
  {
    roll: '103',
    name: 'Tanvir Hasan',
    avatarLetter: 'T',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Science (A)',
    group: 'Science',
    totalMarks: 642,
    maxMarks: 700,
    gpa: '4.88',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 91, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 83, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '104',
    name: 'Fatema Tuz Zohra',
    avatarLetter: 'F',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Science (B)',
    group: 'Science',
    totalMarks: 630,
    maxMarks: 700,
    gpa: '4.75',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 79, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 76, grade: 'A', gpa: '4.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '105',
    name: 'Mehedi Hasan Rony',
    avatarLetter: 'M',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Humanities (B)',
    group: 'Humanities',
    totalMarks: 615,
    maxMarks: 700,
    gpa: '4.60',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '150', name: 'History of Bangladesh', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '151', name: 'Civics & Citizenship', fullMarks: 100, obtained: 74, grade: 'A', gpa: '4.00' },
      { code: '152', name: 'Geography', fullMarks: 100, obtained: 75, grade: 'A', gpa: '4.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 42, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '106',
    name: 'Nusrat Jahan Tisha',
    avatarLetter: 'N',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Business Studies (B)',
    group: 'Business Studies',
    totalMarks: 640,
    maxMarks: 700,
    gpa: '4.85',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '146', name: 'Accounting', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '147', name: 'Business Org', fullMarks: 100, obtained: 79, grade: 'A', gpa: '4.00' },
      { code: '148', name: 'Finance & Banking', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '107',
    name: 'Ariful Islam Sakib',
    avatarLetter: 'A',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    groupSec: 'Humanities (A)',
    group: 'Humanities',
    totalMarks: 605,
    maxMarks: 700,
    gpa: '4.50',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 75, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '150', name: 'History of Bangladesh', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '151', name: 'Civics & Citizenship', fullMarks: 100, obtained: 76, grade: 'A', gpa: '4.00' },
      { code: '152', name: 'Geography', fullMarks: 100, obtained: 74, grade: 'A', gpa: '4.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 41, grade: 'A', gpa: '4.00' },
    ],
  },
];

export const Result: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'institute' | 'individual'>('institute');

  // Filters for Institute Result
  const [instSession, setInstSession] = useState('2025');
  const [instExam, setInstExam] = useState('Annual Examination');
  const [instClass, setInstClass] = useState('Class 10');
  const [instGroup, setInstGroup] = useState('All Groups');

  // Filters for Individual Result
  const [indSession, setIndSession] = useState('2025');
  const [indExam, setIndExam] = useState('Annual Examination');
  const [indClass, setIndClass] = useState('Class 10');
  const [rollInput, setRollInput] = useState('101');

  // Active individual result
  const [activeStudent, setActiveStudent] = useState<StudentResult>(RESULTS_DATABASE[0]);

  const handleSearchIndividual = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRoll = rollInput.replace(/\D/g, '') || '101';
    const found = RESULTS_DATABASE.find((s) => s.roll === cleanRoll);
    if (found) {
      setActiveStudent(found);
    } else {
      // Create custom student if not found in default 7
      setActiveStudent({
        roll: cleanRoll,
        name: `Student (Roll ${cleanRoll})`,
        avatarLetter: cleanRoll.charAt(0),
        avatarColor: 'bg-emerald-100 text-emerald-700',
        groupSec: 'General',
        group: 'General',
        totalMarks: 620,
        maxMarks: 700,
        gpa: '4.70',
        grade: 'A',
        status: 'Passed',
        subjects: [
          { code: '101', name: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
          { code: '107', name: 'English', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
          { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 90, grade: 'A+', gpa: '5.00' },
          { code: '136', name: 'Science / Studies', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
          { code: '154', name: 'ICT', fullMarks: 50, obtained: 45, grade: 'A+', gpa: '5.00' },
        ],
      });
    }
  };

  const handleSelectStudentTranscript = (student: StudentResult) => {
    setActiveStudent(student);
    setRollInput(student.roll);
    setActiveTab('individual');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const filteredInstituteResults = RESULTS_DATABASE.filter((s) => {
    if (instGroup === 'All Groups') return true;
    return s.group === instGroup;
  });

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Real Campus Background with Left-to-Right White Fade */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Real Campus Photo Background */}
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

          {/* Decorative Subtle Botanical Watermark on Far Right */}
          <div className="absolute right-0 bottom-10 w-44 h-72 opacity-[0.06] pointer-events-none text-emerald-800 rotate-45">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <Link
              to="/result"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              Result
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Academic Results & Marksheet</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <BarChart3 size={15} />
              <span>ACADEMIC RESULT PORTAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Academic Results & <br />
              Marksheet
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Search results and generate official academic transcripts using student Roll and Class.
            </p>
          </div>

          {/* Floating White Quote Card on the Right (Common across all pages) */}
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

      {/* 2. Search & Tab Filter Card (Overlapping Bottom of Hero Banner) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-7 space-y-6">
          {/* Top Tabs: Institute Result vs Individual Student Result */}
          <div className="flex items-center gap-6 border-b border-slate-100 pb-3">
            {/* Tab 1: Institute Result */}
            <button
              type="button"
              onClick={() => setActiveTab('institute')}
              className={`inline-flex items-center gap-2 pb-2 text-xs sm:text-sm font-bold transition cursor-pointer relative ${
                activeTab === 'institute'
                  ? 'text-[#004d34] after:content-[""] after:block after:h-[2.5px] after:bg-[#004d34] after:w-full after:absolute after:bottom-[-13px] after:left-0'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Landmark size={17} />
              <span>Institute Result</span>
            </button>

            {/* Tab 2: Individual Student Result */}
            <button
              type="button"
              onClick={() => setActiveTab('individual')}
              className={`inline-flex items-center gap-2 pb-2 text-xs sm:text-sm font-bold transition cursor-pointer relative ${
                activeTab === 'individual'
                  ? 'text-[#004d34] after:content-[""] after:block after:h-[2.5px] after:bg-[#004d34] after:w-full after:absolute after:bottom-[-13px] after:left-0'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <User size={17} />
              <span>Individual Student Result</span>
            </button>
          </div>

          {/* TAB 1 FILTERS: Institute Result */}
          {activeTab === 'institute' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Session */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  SESSION
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instSession}
                    onChange={(e) => setInstSession(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Examination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  EXAMINATION
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instExam}
                    onChange={(e) => setInstExam(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Annual Examination">Annual Examination</option>
                    <option value="Half Yearly Examination">Half Yearly Examination</option>
                    <option value="Model Test Examination">Model Test Examination</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  CLASS
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instClass}
                    onChange={(e) => setInstClass(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 6">Class 6</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Group (Optional) */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  GROUP (OPTIONAL)
                </label>
                <div className="relative">
                  <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instGroup}
                    onChange={(e) => setInstGroup(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="All Groups">All Groups</option>
                    <option value="Science">Science</option>
                    <option value="Business Studies">Business Studies</option>
                    <option value="Humanities">Humanities</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Result Button */}
              <div>
                <button
                  type="button"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Search size={14} />
                  <span>Search Result</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2 FILTERS: Individual Student Result */}
          {activeTab === 'individual' && (
            <form onSubmit={handleSearchIndividual} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Session */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  SESSION
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indSession}
                    onChange={(e) => setIndSession(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Examination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  EXAMINATION
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indExam}
                    onChange={(e) => setIndExam(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Annual Examination">Annual Examination</option>
                    <option value="Half Yearly Examination">Half Yearly Examination</option>
                    <option value="Model Test Examination">Model Test Examination</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  CLASS
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indClass}
                    onChange={(e) => setIndClass(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 6">Class 6</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Student Roll Number */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  STUDENT ROLL NUMBER *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                    #
                  </span>
                  <input
                    type="text"
                    required
                    value={rollInput}
                    onChange={(e) => setRollInput(e.target.value)}
                    placeholder="101"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                  />
                </div>
              </div>

              {/* Search Result Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Search size={14} />
                  <span>Search Result</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 3. MAIN RESULTS CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* VIEW 1: Institute Result Table (Matching media_1790108298733.png) */}
        {activeTab === 'institute' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {instClass} Institutional Result Summary
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Session: {instSession} | Exam: {instExam}
                  </p>
                </div>
              </div>

              {/* Right Badges */}
              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 bg-[#e8f7ee] border border-emerald-100 px-3 py-1.5 rounded-xl text-xs font-bold text-[#059669]">
                  <BarChart3 size={14} />
                  <span>Pass Rate: 100%</span>
                </div>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  <Printer size={14} />
                  <span>Print Result Sheet</span>
                </button>
              </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-100">
                    <th className="py-3.5 px-4 sm:px-6">ROLL</th>
                    <th className="py-3.5 px-4 sm:px-6">STUDENT NAME</th>
                    <th className="py-3.5 px-4 sm:px-6">GROUP & SEC</th>
                    <th className="py-3.5 px-4 sm:px-6">TOTAL MARKS</th>
                    <th className="py-3.5 px-4 sm:px-6">GPA</th>
                    <th className="py-3.5 px-4 sm:px-6">GRADE</th>
                    <th className="py-3.5 px-4 sm:px-6">STATUS</th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">MARKSHEET</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredInstituteResults.map((student) => (
                    <tr
                      key={student.roll}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Roll */}
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                        #{student.roll}
                      </td>

                      {/* Student Name */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${student.avatarColor}`}
                          >
                            {student.avatarLetter}
                          </div>
                          <span className="font-extrabold text-slate-900 leading-tight">
                            {student.name}
                          </span>
                        </div>
                      </td>

                      {/* Group & Sec */}
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-medium">
                        {student.groupSec}
                      </td>

                      {/* Total Marks */}
                      <td className="py-3.5 px-4 sm:px-6 font-extrabold text-[#059669]">
                        {student.totalMarks}
                      </td>

                      {/* GPA */}
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                        {student.gpa}
                      </td>

                      {/* Grade Badge */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#e8f7ee] text-[#059669]">
                          {student.grade}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>Passed</span>
                        </span>
                      </td>

                      {/* Marksheet / Transcript CTA */}
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <button
                          type="button"
                          onClick={() => handleSelectStudentTranscript(student)}
                          className="inline-flex items-center gap-1.5 bg-[#e8f7ee] hover:bg-[#d1fae5] text-[#004d34] border border-emerald-200/80 px-3 py-1 rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer"
                        >
                          <FileText size={13} />
                          <span>Transcript</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note Below Table */}
            <div className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <span className="text-blue-500 font-bold shrink-0">ⓘ</span>
              <span>
                Note: This is the institutional result summary. For detailed individual subject marks, please use the Individual Student Result option above.
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: Individual Student Result & Marksheet (Matching media_1790108309383.png) */}
        {activeTab === 'individual' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
            {/* Header: Student Identity & Download Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 font-black text-xl flex items-center justify-center shrink-0 shadow-2xs">
                  {activeStudent.avatarLetter}
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#059669] tracking-wider uppercase">
                    OFFICIAL ACADEMIC TRANSCRIPT
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {activeStudent.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    Roll: {activeStudent.roll} | Class: {indClass.replace('Class ', '')} | Group: {activeStudent.group} | Session: {indSession}
                  </p>
                </div>
              </div>

              {/* Download Transcript Button */}
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-[#e8f7ee] hover:bg-[#d1fae5] border border-emerald-300 text-[#004d34] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer self-start sm:self-auto"
              >
                <Download size={15} />
                <span>Download Transcript</span>
              </button>
            </div>

            {/* 4 Summary Stat Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Box 1: Total Obtained */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">Total Obtained</div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {activeStudent.totalMarks} <span className="text-xs text-slate-400 font-normal">out of {activeStudent.maxMarks}</span>
                  </div>
                </div>
              </div>

              {/* Box 2: GPA */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">GPA (5.00 Scale)</div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {activeStudent.gpa}
                  </div>
                </div>
              </div>

              {/* Box 3: Letter Grade */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">Letter Grade</div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {activeStudent.grade}
                  </div>
                </div>
              </div>

              {/* Box 4: Result Status */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">Result Status</div>
                  <div className="text-xl font-black text-emerald-700 leading-tight">
                    Passed
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-100">
                    <th className="py-3 px-4 sm:px-6">#</th>
                    <th className="py-3 px-4 sm:px-6">Subject Code</th>
                    <th className="py-3 px-4 sm:px-6">Subject Name</th>
                    <th className="py-3 px-4 sm:px-6">Full Marks</th>
                    <th className="py-3 px-4 sm:px-6">Obtained Marks</th>
                    <th className="py-3 px-4 sm:px-6">Letter Grade</th>
                    <th className="py-3 px-4 sm:px-6">Grade Point</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {activeStudent.subjects.map((sub, idx) => (
                    <tr key={sub.code} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 text-slate-500 font-bold">{idx + 1}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-semibold">{sub.code}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">{sub.name}</td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">{sub.fullMarks}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-extrabold text-[#059669]">{sub.obtained}</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#e8f7ee] text-[#059669]">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">{sub.gpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note Below Table */}
            <div className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <span className="text-blue-500 font-bold shrink-0">ⓘ</span>
              <span>
                Note: This is the individual student result. For class-wise results and detailed statistics, please use the Institute Result option above.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom 2 Quick Action Cards (Matching media_1790108298733.png & media_1790108309383.png) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Institute Result */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 flex items-center justify-between gap-4 hover:shadow-xs transition">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Landmark size={20} />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {activeTab === 'institute' ? 'Institute Result' : 'View Institute Result'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium max-w-sm">
                Check class-wise results, subject statistics, pass rates and academic performance summary.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('institute');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 transition cursor-pointer"
              >
                <span>{activeTab === 'institute' ? 'View Institute Result' : 'Go to Institute Result'}</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Decorative Minimal Bar Chart Graphic */}
            <div className="hidden sm:flex items-end gap-1.5 h-16 opacity-25 text-emerald-600 shrink-0 pr-4">
              <div className="w-3 bg-emerald-600 rounded-t h-8" />
              <div className="w-3 bg-emerald-600 rounded-t h-12" />
              <div className="w-3 bg-emerald-600 rounded-t h-16" />
            </div>
          </div>

          {/* Card 2: Individual Student Result / Search Another Student */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 flex items-center justify-between gap-4 hover:shadow-xs transition">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <User size={20} />
                </div>
                <h3 className="font-extrabold text-base text-slate-900">
                  {activeTab === 'institute' ? 'Individual Student Result' : 'Search Another Student'}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium max-w-sm">
                {activeTab === 'institute'
                  ? 'Search and view individual student marksheet and academic transcript.'
                  : "Enter a different roll number to view another student's marksheet."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('individual');
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer"
              >
                <span>{activeTab === 'institute' ? 'View Student Result' : 'Search Again'}</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Decorative Minimal Document / Magnifying Graphic */}
            <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-400 opacity-50 shrink-0 mr-4">
              {activeTab === 'institute' ? <FileText size={30} /> : <Search size={30} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
