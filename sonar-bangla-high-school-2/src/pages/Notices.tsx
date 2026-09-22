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
  AlertCircle,
  Info
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

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

  const handlePrintNotice = (notice: NoticeItem) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print or download this notice.');
      return;
    }

    const monthMap: Record<string, string> = {
      Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
      Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
    };
    const monthNum = monthMap[notice.month] || '05';
    const formattedDate = `${notice.day.padStart(2, '0')}/${monthNum}/${notice.year}`;
    const memoNo = `SOS/KHULNA/NOTICE/${notice.id}`;

    const bodyHtml = notice.id === '1'
      ? `<p style="margin: 0; line-height: 1.85;">This is to inform all teachers, students, and guardians of SOS Hermann Gmeiner School Khulna that all academic classes will remain closed from 29-05-2025 to 07-06-2025 for summer vacation.</p>`
      : notice.fullBody.map((p) => `<p style="margin: 0 0 14px 0; line-height: 1.85;">${p}</p>`).join('');

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${notice.title} - ${SCHOOL_INFO.name}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 10mm 15mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      padding: 24px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .print-frame {
      border: 2px solid #005a3c;
      border-radius: 12px;
      padding: 28px 36px;
      min-height: calc(100vh - 48px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
    }
    .header-table {
      width: 100%;
      border-collapse: collapse;
      border-bottom: 2px solid #005a3c;
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
    .logo-td {
      width: 65px;
      vertical-align: middle;
    }
    .logo-img {
      width: 55px;
      height: 55px;
      object-fit: contain;
      display: block;
    }
    .info-td {
      vertical-align: middle;
      padding-left: 14px;
    }
    .school-title {
      font-size: 19px;
      font-weight: 800;
      color: #005a3c;
      margin: 0;
      letter-spacing: -0.2px;
      text-transform: uppercase;
    }
    .school-sub {
      font-size: 11px;
      color: #475569;
      margin-top: 3px;
    }
    .eiin-td {
      vertical-align: middle;
      text-align: right;
      width: 140px;
    }
    .eiin-badge {
      display: inline-block;
      background: #e8f7ee;
      color: #059669;
      font-size: 11px;
      font-weight: 800;
      padding: 3px 10px;
      border-radius: 6px;
    }
    .est-text {
      font-size: 10px;
      color: #64748b;
      font-weight: 600;
      margin-top: 4px;
    }
    .meta-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: #334155;
      padding: 8px 0;
      border-bottom: 1px dashed #94a3b8;
      margin-bottom: 26px;
    }
    .category-box {
      text-align: center;
      margin-bottom: 12px;
    }
    .category-pill {
      display: inline-block;
      background: #e8f7ee;
      color: #059669;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 3px 16px;
      border-radius: 9999px;
    }
    .notice-heading {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      text-align: center;
      margin: 0 0 24px 0;
      line-height: 1.35;
    }
    .notice-content {
      font-size: 13px;
      line-height: 1.85;
      color: #1e293b;
      margin-bottom: 24px;
      text-align: left;
    }
    .signatures-box {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 20px;
    }
    .sig-incharge {
      text-align: center;
      min-width: 140px;
    }
    .sig-principal {
      text-align: center;
      min-width: 180px;
    }
    .sig-line {
      border-top: 1.5px solid #0f172a;
      width: 100%;
      margin-bottom: 6px;
    }
    .sig-label {
      font-size: 12px;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }
    .sig-sub {
      font-size: 9.5px;
      font-weight: 600;
      color: #64748b;
      margin: 2px 0 0 0;
      text-transform: uppercase;
      line-height: 1.3;
    }
    @media print {
      body {
        padding: 0;
      }
      .print-frame {
        min-height: 98vh;
        border: 2px solid #005a3c !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-frame">
    <div>
      <table class="header-table">
        <tr>
          <td class="logo-td">
            <img class="logo-img" src="${SCHOOL_INFO.logo}" alt="SOS Logo" />
          </td>
          <td class="info-td">
            <h1 class="school-title">${SCHOOL_INFO.name}</h1>
            <div class="school-sub">${SCHOOL_INFO.address} | Phone: ${SCHOOL_INFO.phone} | Email: ${SCHOOL_INFO.email}</div>
          </td>
          <td class="eiin-td">
            <div class="eiin-badge">EIIN: ${SCHOOL_INFO.eiin}</div>
            <div class="est-text">Established: ${SCHOOL_INFO.established}</div>
          </td>
        </tr>
      </table>

      <div class="meta-bar">
        <div><strong>Memo No:</strong> ${memoNo}</div>
        <div><strong>Date:</strong> ${formattedDate}</div>
      </div>

      <div class="category-box">
        <span class="category-pill">${notice.category}</span>
      </div>

      <h2 class="notice-heading">${notice.title}</h2>

      <div class="notice-content">
        ${bodyHtml}
      </div>
    </div>

    <div class="signatures-box">
      <div class="sig-incharge">
        <div class="sig-line"></div>
        <p class="sig-label">Notice In-Charge</p>
      </div>
      <div class="sig-principal">
        <div class="sig-line"></div>
        <p class="sig-label">Principal / Headmaster</p>
        <p class="sig-sub">SOS HERMANN GMEINER SCHOOL<br/>KHULNA</p>
      </div>
    </div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.focus();
        window.print();
      }, 300);
    });
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
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

                    {/* Right: View Details Link */}
                    <div className="flex items-center justify-end shrink-0 self-stretch sm:self-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative border border-slate-100 animate-in zoom-in-95 duration-150 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header: Icon + Category Badge + Date + Close */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <div className="w-10 h-10 rounded-2xl bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100">
                  <Megaphone size={18} />
                </div>
                <span className="bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                  {activeNotice.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold ml-1">
                  <Calendar size={14} className="text-slate-400" />
                  <span>{activeNotice.dateStr}</span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveNotice(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition cursor-pointer shrink-0"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-4 leading-tight">
              {activeNotice.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 mb-4">
              Notice for all teachers, students and guardians
            </p>

            {/* Notice Body Card */}
            <div className="bg-[#f0faf5] border border-[#d7f1e5] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#059669] flex items-center justify-center shrink-0 shadow-2xs border border-emerald-100">
                <FileText size={20} />
              </div>
              <div className="flex-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeNotice.id === '1' ? (
                  <>
                    <p>
                      This is to inform all teachers, students, and guardians of{' '}
                      <span className="font-bold text-[#059669]">
                        SOS Hermann Gmeiner School Khulna
                      </span>{' '}
                      that all academic classes will remain closed from:
                    </p>
                    <div className="my-3 bg-white rounded-xl py-2.5 px-4 border border-emerald-100/90 flex items-center justify-center gap-3 text-xs sm:text-sm font-black text-slate-800 shadow-2xs">
                      <Calendar size={15} className="text-[#059669]" />
                      <span>29 July 2025</span>
                      <span className="text-slate-400 font-normal">—</span>
                      <span>07 August 2025</span>
                    </div>
                    <p>for summer vacation.</p>
                  </>
                ) : (
                  <div className="space-y-2">
                    {activeNotice.fullBody.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information Card */}
            <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-4 sm:p-5 mt-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-2">
                <Info size={16} className="text-[#0065ff]" />
                <span>Additional Information</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 pl-5 list-disc marker:text-slate-400">
                <li>Regular classes will resume on 10 August 2025 (Sunday).</li>
                <li>School office will remain open during vacation hours.</li>
                <li>For any urgent matter, please contact the administration office.</li>
              </ul>
            </div>

            {/* Footer Row */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <FileText size={14} className="text-slate-400 shrink-0" />
                <span>Memo: SOS/KHULNA/NOTICE/{activeNotice.id}</span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => handlePrintNotice(activeNotice)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
                >
                  <Printer size={14} />
                  <span>Print Notice</span>
                </button>
                <button
                  type="button"
                  onClick={() => handlePrintNotice(activeNotice)}
                  className="px-4 py-2 rounded-xl bg-[#006644] hover:bg-[#004d34] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
