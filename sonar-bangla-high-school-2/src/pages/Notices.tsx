import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Megaphone,
  Search,
  LayoutGrid,
  FileText,
  GraduationCap,
  Calendar,
  Folder,
  Bookmark,
  Paperclip,
  Image as ImageIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Printer,
  X,
  Share2,
  CheckCircle2,
  Clock,
  Building2,
  AlertCircle
} from 'lucide-react';

interface NoticeItem {
  id: string;
  day: string;
  month: string;
  year: string;
  dateStr: string;
  category: 'General' | 'Exam' | 'Admission' | 'Event' | 'Others';
  isFeatured?: boolean;
  hasBookmark?: boolean;
  title: string;
  excerpt: string;
  publishedBy: string;
  attachments?: {
    type: 'file' | 'image';
    count: number;
    label: string;
  };
  memoNo: string;
  fullBody: string[];
}

export const Notices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

  const notices: NoticeItem[] = [
    {
      id: '1',
      day: '18',
      month: 'May',
      year: '2025',
      dateStr: '18 May 2025',
      category: 'General',
      isFeatured: true,
      hasBookmark: true,
      title: 'Summer Vacation & Holiday Notice 2025',
      excerpt: 'This is to inform all students, parents and guardians that the summer vacation will begin from 1st June 2025....',
      publishedBy: 'Administration',
      memoNo: 'SOS-HGK/NOT-2025/118',
      fullBody: [
        'This is to officially inform all students, respected parents, and guardians that SOS Hermann Gmeiner School Khulna will remain closed for the Summer Vacation and Eid-ul-Adha recess starting from 1st June 2025 to 25th June 2025.',
        'All academic and co-curricular activities will resume in full swing on Thursday, 26th June 2025 according to the standard institutional class timetable.',
        'Students are strictly advised to complete their designated vacation holiday assignments (Home Task & Practical Files) during this recess. Class teachers will collect and evaluate the homework on the school reopening day.',
        'The administrative and accounts office will remain open on selected working days from 10:00 AM to 01:30 PM for emergency student affairs.'
      ]
    },
    {
      id: '2',
      day: '12',
      month: 'May',
      year: '2025',
      dateStr: '12 May 2025',
      category: 'Exam',
      title: 'SSC Examination 2025 Results & Marksheet Distribution',
      excerpt: 'The results of SSC Examination 2025 have been published. Students can collect their marksheets from the school...',
      publishedBy: 'Examination Committee',
      attachments: {
        type: 'file',
        count: 2,
        label: '2 Attachments'
      },
      memoNo: 'SOS-HGK/EXAM-2025/074',
      fullBody: [
        'We proudly announce that the official results of the Secondary School Certificate (SSC) Examination 2025 under the Board of Intermediate and Secondary Education, Jashore have been published.',
        'Students and guardians can collect their official academic transcripts and grade marksheets from the School Administrative Building (Counter 02) from 15th May 2025, between 10:00 AM and 2:00 PM.',
        'Please ensure you bring the original Admit Card and Registration Slip when claiming the grade sheet and testimonial documents.',
        'Congratulations to all students, teachers, and guardians for achieving a 100% pass rate with outstanding GPA-5.00 honors!'
      ]
    },
    {
      id: '3',
      day: '01',
      month: 'May',
      year: '2025',
      dateStr: '01 May 2025',
      category: 'Admission',
      title: 'Online Admission Open for Class 1 & Class 6 (Session 2025)',
      excerpt: 'Online admission for Class 1 and Class 6 is now open. Interested guardians are requested to complete the...',
      publishedBy: 'Admission Office',
      memoNo: 'SOS-HGK/ADM-2025/029',
      fullBody: [
        'SOS Hermann Gmeiner School Khulna invites online applications for admission into Class 1 and Class 6 for the upcoming academic session 2025.',
        'Eligible candidates and guardians must fill up the application form on the school official web portal (www.soshgskhulna.edu.bd/admission) before 31st May 2025.',
        'Required attachments: Digital passport-size photograph, digital birth registration certificate (verified online), and previous school progress report card (for Class 6 applicants).',
        'Written assessment and lottery dates will be communicated through SMS and institutional notices.'
      ]
    },
    {
      id: '4',
      day: '21',
      month: 'Apr',
      year: '2025',
      dateStr: '21 April 2025',
      category: 'Event',
      title: 'International Mother Language Day & Annual Sports Meet',
      excerpt: 'We are pleased to announce the celebration of International Mother Language Day and Annual Sports Meet...',
      publishedBy: 'Cultural Committee',
      attachments: {
        type: 'image',
        count: 3,
        label: '3 Images'
      },
      memoNo: 'SOS-HGK/EVENT-2025/042',
      fullBody: [
        'SOS Hermann Gmeiner School Khulna will host a grand event marking the Annual Sports Meet alongside the observance of historical cultural achievements.',
        'Events include track and field races, high jump, long jump, debate competition, patriotic music recital, and traditional folk performance.',
        'Parents and respected alumni are cordially invited to grace the ceremony on the school playground. Dignitaries from the Directorate of Secondary and Higher Education will attend as Chief Guests.'
      ]
    },
    {
      id: '5',
      day: '10',
      month: 'Apr',
      year: '2025',
      dateStr: '10 April 2025',
      category: 'Exam',
      title: 'Half-Yearly & Pre-Test Exam 2025 Schedule Published',
      excerpt: 'The schedule for Half-Yearly and Pre-Test Examination 2025 has been published. Please check the detailed routine...',
      publishedBy: 'Academic Office',
      attachments: {
        type: 'file',
        count: 1,
        label: '1 Attachment'
      },
      memoNo: 'SOS-HGK/EXAM-2025/061',
      fullBody: [
        'The official timetable for the Half-Yearly Examination (Classes 6-8) and Pre-Test Examination (Classes 9-10) for 2025 has been finalized and released.',
        'Examinations will commence promptly at 09:30 AM each scheduled day. Examinees must be seated in their assigned exam halls at least 20 minutes prior to exam commencement.',
        'No student will be permitted to enter the examination center without their valid Admit Card and complete school uniform.',
        'Download the official timetable PDF from the link below or collect a physical printout from the academic reception desk.'
      ]
    },
    {
      id: '6',
      day: '15',
      month: 'Mar',
      year: '2025',
      dateStr: '15 March 2025',
      category: 'Event',
      title: 'Annual Science Fair & ICT Innovation Expo 2025',
      excerpt: 'The Annual Science Fair and ICT Innovation Expo 2025 will be held on 30 March 2025 at the school premises....',
      publishedBy: 'Science Club',
      memoNo: 'SOS-HGK/SCI-2025/014',
      fullBody: [
        'SOS Hermann Gmeiner Science Club is organizing the 12th Annual Science Fair & ICT Innovation Expo 2025 on campus.',
        'Students from Junior Section (Class 6-8) and Senior Section (Class 9-10) are invited to submit their innovative project abstracts across Physics, Biology, Chemistry, Robotics, and Artificial Intelligence.',
        'Best project winners across each category will receive crests, certificates, and opportunities to represent the school at the National Children Science Congress.'
      ]
    },
    {
      id: '7',
      day: '05',
      month: 'Mar',
      year: '2025',
      dateStr: '05 March 2025',
      category: 'General',
      title: 'Notice Regarding Monthly Tuition & Exam Fee Payment',
      excerpt: 'This is to remind all parents and guardians to pay the monthly tuition and examination fees within the due date...',
      publishedBy: 'Accounts Section',
      memoNo: 'SOS-HGK/ACC-2025/088',
      fullBody: [
        'This is a polite reminder to all valued guardians regarding the settlement of outstanding monthly tuition fees and term exam registration charges.',
        'Payments can be made smoothly through our integrated online bKash / Nagad payment gateway via student portal or physically at the bank collection booth.',
        'Please complete the transaction by the 15th of the running month to avoid delayed payment penalty fees.'
      ]
    },
    {
      id: '8',
      day: '10',
      month: 'Feb',
      year: '2025',
      dateStr: '10 February 2025',
      category: 'Admission',
      title: 'ID Card & Uniform Notice for Newly Admitted Students',
      excerpt: 'All newly admitted students are requested to collect their ID cards and follow the uniform guidelines...',
      publishedBy: 'Administration',
      memoNo: 'SOS-HGK/ADM-2025/011',
      fullBody: [
        'Students newly admitted to Session 2025 are instructed to collect their RFID digital student ID cards from the administration wing counter.',
        'All students must be in complete institution-prescribed uniform with school crest, monogrammed shoulder epaulets, and black polished leather shoes.',
        'Class section assignments and locker allocations have been posted on the ground floor notice board.'
      ]
    },
    // Page 2 items
    {
      id: '9',
      day: '25',
      month: 'Jan',
      year: '2025',
      dateStr: '25 January 2025',
      category: 'Others',
      title: 'Textbook Distribution Ceremony 2025 Schedule',
      excerpt: 'The annual National Textbook Distribution Festival will take place on campus on scheduled dates...',
      publishedBy: 'Academic Committee',
      attachments: {
        type: 'file',
        count: 1,
        label: '1 Attachment'
      },
      memoNo: 'SOS-HGK/TXT-2025/005',
      fullBody: [
        'Free textbook distribution under the National Curriculum and Textbook Board (NCTB) will be inaugurated on campus.',
        'Students must report according to their sectional schedules accompanied by their class identity cards to receive complete text sets.'
      ]
    },
    {
      id: '10',
      day: '15',
      month: 'Jan',
      year: '2025',
      dateStr: '15 January 2025',
      category: 'General',
      title: 'Winter Vacation Extension Due to Cold Wave',
      excerpt: 'As per the government directive, the school will observe an extended winter recess for primary & junior wings...',
      publishedBy: "Principal's Office",
      memoNo: 'SOS-HGK/GEN-2025/003',
      fullBody: [
        'In view of the prevailing severe cold wave advisory issued by the meteorological department, classes for junior sections are suspended till 20th January 2025.',
        'Senior classes will proceed under revised morning timing starting from 10:00 AM.'
      ]
    }
  ];

  const categories = [
    { label: 'All', icon: LayoutGrid },
    { label: 'General', icon: Megaphone },
    { label: 'Exam', icon: FileText },
    { label: 'Admission', icon: GraduationCap },
    { label: 'Event', icon: Calendar },
    { label: 'Others', icon: Folder }
  ];

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      const matchesCategory =
        selectedCategory === 'All' || notice.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.publishedBy.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [notices, selectedCategory, searchQuery]);

  const itemsPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(filteredNotices.length / itemsPerPage));
  const currentNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'General':
        return 'bg-[#e6f7ef] text-[#00875a] border border-[#c1e8d4]';
      case 'Exam':
        return 'bg-[#fff4e5] text-[#b36b00] border border-[#ffe0b2]';
      case 'Admission':
        return 'bg-[#eaf4ff] text-[#0065ff] border border-[#c5e0ff]';
      case 'Event':
        return 'bg-[#f3edff] text-[#6554c0] border border-[#e1d5ff]';
      case 'Others':
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  const getDateBadgeClass = (category: string) => {
    switch (category) {
      case 'Exam':
        return 'bg-[#f0f7ff] border-[#d8ebff] text-sky-800';
      default:
        return 'bg-[#f0faf5] border-[#d7f1e5] text-[#004d34]';
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] text-slate-800">
      {/* Top Hero Section: Full-Width Real Campus Background with Left-to-Right White Fade */}
      <section className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
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
          {/* Breadcrumb Navigation (Top) */}
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
              to="/notices"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              Notices
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Official Notice Board</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Megaphone size={14} />
              <span>OFFICIAL NOTICES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Official Notice Board
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Stay informed with the latest announcements, official circulars, exam schedules and
              important updates from SOS Hermann Gmeiner School Khulna.
            </p>
          </div>

          {/* Floating White Quote Card on the Right (Matching media_1790110070973.png) */}
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
      </section>

      {/* Main Notice List Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Interactive Filter Pills & Search Bar Card */}
        <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.label);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-[#004d34] text-white shadow-emerald-900/20'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={13} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search notice title or topic..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition shadow-xs"
            />
          </div>
        </div>
        <div className="space-y-3.5">
          {currentNotices.length > 0 ? (
            currentNotices.map((notice) => {
              const dateClass = getDateBadgeClass(notice.category);
              return (
                <div
                  key={notice.id}
                  className="relative group bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  {/* Top-Right Hanging Green Ribbon for Featured Notice */}
                  {notice.hasBookmark && (
                    <div className="absolute top-0 right-6 sm:right-8 w-5 h-7 bg-[#007a4d] text-white flex items-center justify-center rounded-b-sm shadow-xs pointer-events-none">
                      <Bookmark size={13} className="fill-white" />
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Left: Date Badge + Main Info */}
                    <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                      {/* Date Badge */}
                      <div
                        className={`w-14 h-16 sm:w-16 sm:h-18 rounded-xl flex flex-col items-center justify-center border text-center shrink-0 ${dateClass}`}
                      >
                        <span className="text-xl sm:text-2xl font-black leading-none">
                          {notice.day}
                        </span>
                        <span className="text-[11px] font-bold uppercase mt-1 leading-none">
                          {notice.month}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium mt-1 leading-none">
                          {notice.year}
                        </span>
                      </div>

                      {/* Content Body */}
                      <div className="flex-1 min-w-0">
                        {/* Badges row */}
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <span
                            className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wide ${getCategoryBadgeClass(
                              notice.category
                            )}`}
                          >
                            {notice.category}
                          </span>

                          {notice.isFeatured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#dcf4e8] text-[#007a4d] border border-[#b8e8d1]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#007a4d]" />
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h2
                          onClick={() => setActiveNotice(notice)}
                          className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#004d34] transition-colors cursor-pointer leading-snug line-clamp-1"
                        >
                          {notice.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                          {notice.excerpt}
                        </p>

                        {/* Metadata row */}
                        <div className="flex items-center gap-4 text-[11px] text-slate-500 mt-2 font-medium">
                          <div className="flex items-center gap-1.5">
                            <FileText size={12} className="text-slate-400 shrink-0" />
                            <span>
                              Published by:{' '}
                              <strong className="text-slate-700 font-semibold">
                                {notice.publishedBy}
                              </strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-slate-400 shrink-0" />
                            <span>{notice.dateStr}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: View Details & Attachments Badge */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2.5 shrink-0 self-stretch sm:self-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      {/* View Details Link */}
                      <button
                        type="button"
                        onClick={() => setActiveNotice(notice)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#006644] hover:text-[#004d34] hover:underline transition-colors cursor-pointer group/link"
                      >
                        <span>View Details</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover/link:translate-x-0.5"
                        />
                      </button>

                      {/* Attachments Badge */}
                      {notice.attachments && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold">
                          {notice.attachments.type === 'file' ? (
                            <Paperclip size={12} className="text-slate-500" />
                          ) : (
                            <ImageIcon size={12} className="text-slate-500" />
                          )}
                          <span>{notice.attachments.label}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <AlertCircle size={36} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-800">No notices found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No circulars match your current filter or search criteria. Try selecting "All" or
                clearing the search keyword.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Pagination */}
        {filteredNotices.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                currentPage === 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-white/60'
                  : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-xs'
              }`}
              title="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page 1 */}
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentPage === 1
                  ? 'bg-[#004d34] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              1
            </button>

            {/* Page 2 if exists */}
            {totalPages >= 2 && (
              <button
                onClick={() => setCurrentPage(2)}
                className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currentPage === 2
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                2
              </button>
            )}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                currentPage === totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed bg-white/60'
                  : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 shadow-xs'
              }`}
              title="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </main>

      {/* Notice Detail Modal */}
      {activeNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#004d34] text-white p-6 rounded-t-3xl relative">
              <button
                onClick={() => setActiveNotice(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${getCategoryBadgeClass(
                    activeNotice.category
                  )}`}
                >
                  {activeNotice.category}
                </span>
                <span className="text-xs text-emerald-100 font-mono">
                  {activeNotice.memoNo}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white leading-snug pr-8">
                {activeNotice.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-emerald-100/90 mt-3 font-medium">
                <span>Published by: {activeNotice.publishedBy}</span>
                <span>•</span>
                <span>Date: {activeNotice.dateStr}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              {/* Formal Institution Header in Circular */}
              <div className="border-b border-slate-200 pb-4 text-center">
                <p className="text-[11px] font-bold text-emerald-800 tracking-wider uppercase">
                  SOS Hermann Gmeiner School Khulna
                </p>
                <p className="text-xs text-slate-500">
                  Established 1986 • EIIN: 117195 • Khulna, Bangladesh
                </p>
                <div className="w-16 h-0.5 bg-emerald-600 mx-auto mt-2" />
              </div>

              {/* Text Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeNotice.fullBody.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Attachments Section if any */}
              {activeNotice.attachments && (
                <div className="bg-[#f0faf5] rounded-2xl p-4 border border-[#d7f1e5] space-y-2">
                  <span className="text-xs font-bold text-[#004d34] flex items-center gap-1.5">
                    <Paperclip size={14} /> Official Attachments
                  </span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => alert('Downloading official circular attachment (PDF)...')}
                      className="flex-1 flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-200 text-xs font-semibold text-slate-800 hover:border-emerald-600 transition cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <FileText size={14} className="text-emerald-700" />
                        {activeNotice.title.slice(0, 30)}...pdf
                      </span>
                      <Download size={14} className="text-[#004d34]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Authority Seal / Signature */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500">
                <div>
                  <p className="font-bold text-slate-900">Signed & Approved by:</p>
                  <p className="text-emerald-800 font-semibold">{activeNotice.publishedBy}</p>
                  <p className="text-[11px] text-slate-400">SOS Hermann Gmeiner School Khulna</p>
                </div>
                <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-600/40 flex items-center justify-center text-center p-1 text-[9px] font-bold text-emerald-800 uppercase tracking-tighter rotate-[-12deg]">
                  Official Seal Verified
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bg-slate-50 px-6 py-4 rounded-b-3xl border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                <Printer size={14} />
                <span>Print Notice</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveNotice(null)}
                className="px-5 py-2 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition cursor-pointer shadow-xs"
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
