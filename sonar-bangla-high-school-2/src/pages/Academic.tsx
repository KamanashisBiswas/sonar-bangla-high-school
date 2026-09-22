import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Calendar,
  CalendarDays,
  Shirt,
  ShieldCheck,
  Download,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Info,
  CheckCircle2,
  ArrowRight,
  Coffee,
  X,
  Printer,
  FileText,
} from 'lucide-react';

interface RoutineRow {
  period: string;
  time: string;
  isBreak?: boolean;
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
}

const ROUTINES_BY_CLASS: Record<string, RoutineRow[]> = {
  'Class 6': [
    {
      period: '1st Period',
      time: '09:00 - 09:40',
      sunday: 'Bangla',
      monday: 'English',
      tuesday: 'Mathematics',
      wednesday: 'Science',
      thursday: 'English',
      friday: 'Bangla',
    },
    {
      period: '2nd Period',
      time: '09:40 - 10:20',
      sunday: 'English',
      monday: 'Mathematics',
      tuesday: 'Bangla',
      wednesday: 'Higher Math',
      thursday: 'Physics',
      friday: 'English',
    },
    {
      period: '3rd Period',
      time: '10:20 - 11:00',
      sunday: 'Mathematics',
      monday: 'Science',
      tuesday: 'English',
      wednesday: 'English',
      thursday: 'Bangla',
      friday: 'Mathematics',
    },
    {
      period: '4th Period',
      time: '11:00 - 11:40',
      isBreak: true,
    },
    {
      period: '5th Period',
      time: '11:40 - 12:20',
      sunday: 'Science',
      monday: 'Bangla',
      tuesday: 'BGS',
      wednesday: 'Biology',
      thursday: 'Higher Math',
      friday: 'ICT',
    },
    {
      period: '6th Period',
      time: '12:20 - 01:00',
      sunday: 'Religion',
      monday: 'ICT',
      tuesday: 'Science',
      wednesday: 'Bangla',
      thursday: 'ICT',
      friday: 'BGS',
    },
  ],
  'Class 7': [
    {
      period: '1st Period',
      time: '09:00 - 09:40',
      sunday: 'English',
      monday: 'Bangla',
      tuesday: 'Science',
      wednesday: 'Mathematics',
      thursday: 'Bangla',
      friday: 'English',
    },
    {
      period: '2nd Period',
      time: '09:40 - 10:20',
      sunday: 'Mathematics',
      monday: 'Science',
      tuesday: 'English',
      wednesday: 'Bangla',
      thursday: 'ICT',
      friday: 'BGS',
    },
    {
      period: '3rd Period',
      time: '10:20 - 11:00',
      sunday: 'Science',
      monday: 'English',
      tuesday: 'Mathematics',
      wednesday: 'Higher Math',
      thursday: 'English',
      friday: 'Bangla',
    },
    {
      period: '4th Period',
      time: '11:00 - 11:40',
      isBreak: true,
    },
    {
      period: '5th Period',
      time: '11:40 - 12:20',
      sunday: 'Bangla',
      monday: 'BGS',
      tuesday: 'Biology',
      wednesday: 'Science',
      thursday: 'Mathematics',
      friday: 'Religion',
    },
    {
      period: '6th Period',
      time: '12:20 - 01:00',
      sunday: 'ICT',
      monday: 'Religion',
      tuesday: 'Bangla',
      wednesday: 'BGS',
      thursday: 'Science',
      friday: 'ICT',
    },
  ],
  'Class 8': [
    {
      period: '1st Period',
      time: '09:00 - 09:40',
      sunday: 'Mathematics',
      monday: 'English',
      tuesday: 'Bangla',
      wednesday: 'Science',
      thursday: 'Higher Math',
      friday: 'Physics',
    },
    {
      period: '2nd Period',
      time: '09:40 - 10:20',
      sunday: 'Bangla',
      monday: 'Mathematics',
      tuesday: 'Science',
      wednesday: 'English',
      thursday: 'Chemistry',
      friday: 'Biology',
    },
    {
      period: '3rd Period',
      time: '10:20 - 11:00',
      sunday: 'English',
      monday: 'Science',
      tuesday: 'Mathematics',
      wednesday: 'Bangla',
      thursday: 'English',
      friday: 'Mathematics',
    },
    {
      period: '4th Period',
      time: '11:00 - 11:40',
      isBreak: true,
    },
    {
      period: '5th Period',
      time: '11:40 - 12:20',
      sunday: 'BGS',
      monday: 'Higher Math',
      tuesday: 'Physics',
      wednesday: 'Biology',
      thursday: 'Science',
      friday: 'ICT',
    },
    {
      period: '6th Period',
      time: '12:20 - 01:00',
      sunday: 'Religion',
      monday: 'ICT',
      tuesday: 'BGS',
      wednesday: 'Bangla',
      thursday: 'Religion',
      friday: 'Bangla',
    },
  ],
  'Class 9': [
    {
      period: '1st Period',
      time: '09:00 - 09:40',
      sunday: 'Physics',
      monday: 'Chemistry',
      tuesday: 'Higher Math',
      wednesday: 'Biology',
      thursday: 'English',
      friday: 'Bangla',
    },
    {
      period: '2nd Period',
      time: '09:40 - 10:20',
      sunday: 'Higher Math',
      monday: 'Physics',
      tuesday: 'Chemistry',
      wednesday: 'Mathematics',
      thursday: 'Bangla',
      friday: 'English',
    },
    {
      period: '3rd Period',
      time: '10:20 - 11:00',
      sunday: 'Chemistry',
      monday: 'Higher Math',
      tuesday: 'Physics',
      wednesday: 'English',
      thursday: 'Mathematics',
      friday: 'Biology',
    },
    {
      period: '4th Period',
      time: '11:00 - 11:40',
      isBreak: true,
    },
    {
      period: '5th Period',
      time: '11:40 - 12:20',
      sunday: 'Biology',
      monday: 'Bangla',
      tuesday: 'English',
      wednesday: 'ICT',
      thursday: 'BGS',
      friday: 'Physics',
    },
    {
      period: '6th Period',
      time: '12:20 - 01:00',
      sunday: 'ICT',
      monday: 'Religion',
      tuesday: 'BGS',
      wednesday: 'Chemistry',
      thursday: 'Higher Math',
      friday: 'Bangla',
    },
  ],
  'Class 10': [
    {
      period: '1st Period',
      time: '09:00 - 09:40',
      sunday: 'Higher Math',
      monday: 'Physics',
      tuesday: 'Chemistry',
      wednesday: 'Biology',
      thursday: 'English',
      friday: 'Bangla',
    },
    {
      period: '2nd Period',
      time: '09:40 - 10:20',
      sunday: 'Physics',
      monday: 'Chemistry',
      tuesday: 'Higher Math',
      wednesday: 'Mathematics',
      thursday: 'Bangla',
      friday: 'English',
    },
    {
      period: '3rd Period',
      time: '10:20 - 11:00',
      sunday: 'Chemistry',
      monday: 'Higher Math',
      tuesday: 'Physics',
      wednesday: 'English',
      thursday: 'Mathematics',
      friday: 'Biology',
    },
    {
      period: '4th Period',
      time: '11:00 - 11:40',
      isBreak: true,
    },
    {
      period: '5th Period',
      time: '11:40 - 12:20',
      sunday: 'Biology',
      monday: 'Bangla',
      tuesday: 'English',
      wednesday: 'ICT',
      thursday: 'BGS',
      friday: 'Higher Math',
    },
    {
      period: '6th Period',
      time: '12:20 - 01:00',
      sunday: 'ICT',
      monday: 'Religion',
      tuesday: 'BGS',
      wednesday: 'Chemistry',
      thursday: 'Physics',
      friday: 'Bangla',
    },
  ],
};

export const Academic: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string>('Class 6');
  const [activeTab, setActiveTab] = useState<'routine' | 'uniform' | 'conduct' | 'calendar' | 'downloads'>('routine');
  const [detailsModal, setDetailsModal] = useState<'boys' | 'girls' | 'policy' | null>(null);

  const activeRoutine = ROUTINES_BY_CLASS[selectedClass] || ROUTINES_BY_CLASS['Class 6'];

  const handleDownloadRoutine = () => {
    window.print();
  };

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade Overlay */}
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
              to="/academic"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              Academic
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Academic Policies & Routine</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} />
              <span>ACADEMIC EXCELLENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Academic Policies & <br />
              Routine
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Sub-headline & Description */}
            <div className="space-y-1">
              <p className="text-[#059669] font-bold text-sm sm:text-base leading-snug">
                Structured learning. Disciplined routines. Brighter futures.
              </p>
              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
                Explore our class routines, curriculum guidelines, and academic policies designed to ensure quality education for every student.
              </p>
            </div>
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

      {/* 2. Floating Top Navigation Pill Bar (Overlapping Bottom of Hero Banner) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-1.5 sm:p-2 flex items-center justify-between overflow-x-auto gap-2 scrollbar-none">
          {/* Pill 1: Class Routine */}
          <button
            type="button"
            onClick={() => setActiveTab('routine')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
              activeTab === 'routine'
                ? 'bg-[#004d34] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-50 hover:text-[#004d34]'
            }`}
          >
            <Calendar size={15} />
            <span>Class Routine</span>
          </button>

          {/* Pill 2: Uniform Guidelines */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('uniform');
              const el = document.getElementById('uniform-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
              activeTab === 'uniform'
                ? 'bg-[#004d34] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-50 hover:text-[#004d34]'
            }`}
          >
            <Shirt size={15} className={activeTab === 'uniform' ? 'text-white' : 'text-emerald-700'} />
            <span>Uniform Guidelines</span>
          </button>

          {/* Pill 3: Code of Conduct */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('conduct');
              const el = document.getElementById('conduct-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
              activeTab === 'conduct'
                ? 'bg-[#004d34] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-50 hover:text-[#004d34]'
            }`}
          >
            <ShieldCheck size={15} className={activeTab === 'conduct' ? 'text-white' : 'text-emerald-700'} />
            <span>Code of Conduct</span>
          </button>

          {/* Pill 4: Academic Calendar */}
          <button
            type="button"
            onClick={() => {
              setActiveTab('calendar');
              setDetailsModal('policy');
            }}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-[#004d34] text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-50 hover:text-[#004d34]'
            }`}
          >
            <CalendarDays size={15} className={activeTab === 'calendar' ? 'text-white' : 'text-emerald-700'} />
            <span>Academic Calendar</span>
          </button>

          {/* Pill 5: Downloads */}
          <Link
            to="/downloads"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition text-slate-700 hover:bg-slate-50 hover:text-[#004d34] cursor-pointer"
          >
            <Download size={15} className="text-emerald-700" />
            <span>Downloads</span>
          </Link>
        </div>
      </div>

      {/* 3. Daily Class Schedule & Routine Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
          {/* Header Row: Title & Download Timetable Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <Calendar size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Daily Class Schedule & Routine
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  View the daily timetable by class. Select a class to see the complete routine.
                </p>
              </div>
            </div>

            {/* Download Timetable Button */}
            <button
              type="button"
              onClick={handleDownloadRoutine}
              className="inline-flex items-center gap-2 bg-[#e8f7ee] hover:bg-[#d1fae5] border border-emerald-300/80 text-[#004d34] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-2xs hover:shadow-xs cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <Download size={15} />
              <span>Download Timetable</span>
            </button>
          </div>

          {/* Controls Row: Select Class Dropdown & Date Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            {/* Select Class */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-900 whitespace-nowrap">
                Select Class
              </span>
              <div className="relative w-44">
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-3.5 pr-8 py-2 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                >
                  <option value="Class 6">Class 6</option>
                  <option value="Class 7">Class 7</option>
                  <option value="Class 8">Class 8</option>
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                />
              </div>
            </div>

            {/* Date Pill & Arrow Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs">
                <Calendar size={13} className="text-slate-400" />
                <span>Today, 10 Dec 2025 (Wed)</span>
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition cursor-pointer"
                title="Previous Day"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition cursor-pointer"
                title="Next Day"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Routine Timetable Grid */}
          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#f4f9f6] text-slate-700 font-bold text-[11px] border-b border-slate-100">
                  <th className="py-3.5 px-4 sm:px-6">Period</th>
                  <th className="py-3.5 px-4 sm:px-6">Time</th>
                  <th className="py-3.5 px-4 sm:px-6">Sunday</th>
                  <th className="py-3.5 px-4 sm:px-6">Monday</th>
                  <th className="py-3.5 px-4 sm:px-6">Tuesday</th>
                  <th className="py-3.5 px-4 sm:px-6">Wednesday</th>
                  <th className="py-3.5 px-4 sm:px-6">Thursday</th>
                  <th className="py-3.5 px-4 sm:px-6">Friday</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                {activeRoutine.map((row, idx) => {
                  if (row.isBreak) {
                    return (
                      <tr key={idx} className="bg-[#fffbeb] text-[#b45309]">
                        <td className="py-3 px-4 sm:px-6 font-black text-amber-900">
                          {row.period}
                        </td>
                        <td className="py-3 px-4 sm:px-6 font-bold text-amber-800">
                          {row.time}
                        </td>
                        <td
                          colSpan={6}
                          className="py-3 px-4 sm:px-6 font-bold text-center text-amber-900"
                        >
                          <div className="inline-flex items-center gap-2 justify-center">
                            <Coffee size={14} className="text-amber-700" />
                            <span>Tiffin Break: 11:00 AM – 11:20 AM</span>
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-black text-slate-900">
                        {row.period}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-500 whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.sunday}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.monday}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.tuesday}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.wednesday}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.thursday}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-800">
                        {row.friday}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Note Callout Bar */}
          <div className="bg-[#e8f7ee] border border-emerald-100/90 rounded-2xl p-3.5 flex items-center gap-2.5 text-xs text-slate-700 font-medium">
            <Info size={16} className="text-[#059669] shrink-0" />
            <span>
              Note: Schedule may be subject to changes upon administrative requirements. Please check notice board for updates.
            </span>
          </div>
        </div>
      </div>

      {/* 4. Uniform Guidelines (Two Cards Side by Side) */}
      <div id="uniform-section" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Boys' School Uniform */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Shirt size={18} />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Boys' School Uniform
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setDetailsModal('boys')}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#004d34] hover:text-emerald-800 bg-[#e8f7ee] hover:bg-[#d1fae5] px-2.5 py-1 rounded-lg transition cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* Items List */}
              <ul className="space-y-3 pt-4 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>White half/full sleeve shirt (as per school design)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>Navy blue formal trousers with black belt</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>White socks and black school shoes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>Official school crest/badge is mandatory</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Girls' School Uniform */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Shirt size={18} />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Girls' School Uniform
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setDetailsModal('girls')}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#004d34] hover:text-emerald-800 bg-[#e8f7ee] hover:bg-[#d1fae5] px-2.5 py-1 rounded-lg transition cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* Items List */}
              <ul className="space-y-3 pt-4 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>Navy blue school salwar/frock with white dupatta/hijab</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>White scarf / one-piece shirt (as per school design)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>White socks and black school shoes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#059669] shrink-0" />
                  <span>Official school crest/badge is mandatory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Discipline & Code of Conduct Card (Wide Full-Width Card) */}
      <div id="conduct-section" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-extrabold text-base text-slate-900">
                Discipline & Code of Conduct
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setDetailsModal('policy')}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#004d34] hover:text-emerald-800 bg-[#e8f7ee] hover:bg-[#d1fae5] px-2.5 py-1 rounded-lg transition cursor-pointer"
            >
              <span>View Full Policy</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* 2-Column Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-2 text-xs text-slate-700 font-medium">
            {/* Left Column */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Students must arrive at school by 8:00 AM daily.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Mobile phones and electronic gadgets are strictly prohibited on campus.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Show respect and courteous behavior towards teachers and peers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Participation in all scheduled exams and evaluations is mandatory.</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Absence requires a written application signed by parents.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Students must maintain classroom and campus cleanliness.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Any damage to school property and furniture is strictly punishable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                <span>Leaving classroom during session without permission is not allowed.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Modals for Uniform Details and Code of Conduct */}
      {detailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5 text-[#004d34]">
                {detailsModal === 'policy' ? <ShieldCheck size={20} /> : <Shirt size={20} />}
                <h3 className="font-extrabold text-base text-slate-900">
                  {detailsModal === 'boys'
                    ? "Boys' Dress Code Specification"
                    : detailsModal === 'girls'
                    ? "Girls' Dress Code Specification"
                    : 'Institutional Code of Conduct & Guidelines'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setDetailsModal(null)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {detailsModal === 'boys' && (
                <>
                  <p>
                    All male students must strictly wear standard uniforms specified by SOS Hermann Gmeiner School Khulna:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li>White cotton half-sleeve (summer) or full-sleeve (winter) shirt.</li>
                    <li>Navy blue formal trousers tailored as per institutional fit.</li>
                    <li>Plain black leather shoes with clean white socks.</li>
                    <li>Dark navy blue sweater/blazer during winter season.</li>
                    <li>Properly pinned school ID card and metal embroidered chest crest.</li>
                  </ul>
                </>
              )}

              {detailsModal === 'girls' && (
                <>
                  <p>
                    All female students must wear the designated institutional attire:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li>Navy blue salwar/frock with official school pattern and cut.</li>
                    <li>White cotton or polyester dupatta / hijab fastened neatly.</li>
                    <li>Plain black footwear and white ankle-high socks.</li>
                    <li>Navy blue pullover cardigan or blazer during the winter period.</li>
                    <li>Official institutional badge and student identification card.</li>
                  </ul>
                </>
              )}

              {detailsModal === 'policy' && (
                <>
                  <p>
                    SOS Hermann Gmeiner School Khulna maintains rigorous standards of academic discipline, punctuality, and personal ethics:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                    <li>75% minimum mandatory attendance required for exam eligibility.</li>
                    <li>Strict zero-tolerance policy against bullying, vandalism, and digital device misuse.</li>
                    <li>Leave of absence must be applied for in writing with guardian endorsement.</li>
                    <li>Active respect for school teachers, staff, peer students, and national values.</li>
                  </ul>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                <Printer size={13} />
                <span>Print Document</span>
              </button>

              <button
                type="button"
                onClick={() => setDetailsModal(null)}
                className="bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
