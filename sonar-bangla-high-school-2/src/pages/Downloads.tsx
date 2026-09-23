import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Download,
  Search,
  LayoutGrid,
  Calendar,
  BookOpen,
  FileText,
  MoreHorizontal,
  MoreVertical,
  SlidersHorizontal,
  ChevronDown,
  List,
  Grid,
  Eye,
  Share2,
  Printer,
  X,
  CheckCircle2,
  FileCheck,
  AlertCircle
} from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard
} from '../components/ui/MotionComponents';

interface DownloadItem {
  id: string;
  serial: string;
  title: string;
  subtitle: string;
  category: string;
  filterGroup: 'Routine' | 'Syllabus' | 'Form' | 'Calendar' | 'Others';
  date: string;
  size: string;
  fileType: 'PDF' | 'DOCX';
  iconColor: {
    bg: string;
    border: string;
    text: string;
  };
  categoryBadge: {
    bg: string;
    text: string;
    border: string;
  };
  details: string[];
}

export const Downloads: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [selectedFilter, setSelectedFilter] = useState<string>('All Files');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'name' | 'size'>('latest');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [activeItem, setActiveItem] = useState<DownloadItem | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const downloadItems: DownloadItem[] = useMemo(() => [
    {
      id: '01',
      serial: '01',
      title: isBn ? 'ভর্তি আবেদন ফরম ও নির্দেশিকা ২০২৫' : 'Admission Form & Guidelines 2025',
      subtitle: isBn ? '২০২৫ শিক্ষাবর্ষে ভর্তির আবেদন ফরম ও পূর্ণাঙ্গ নির্দেশিকা।' : 'Application form and detailed guidelines for admission.',
      category: isBn ? 'আবেদন ফরম' : 'Form',
      filterGroup: 'Form',
      date: '2025-01-05',
      size: isBn ? '১.২ মেগাবাইট' : '1.2 MB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        text: 'text-emerald-600',
      },
      categoryBadge: {
        bg: 'bg-[#e6f7ef]',
        text: 'text-[#00875a]',
        border: 'border-[#c1e8d4]',
      },
      details: isBn
        ? [
            '২০২৫ শিক্ষাবর্ষের সকল শ্রেণির জন্য অফিসিয়াল ও প্রিন্টযোগ্য ভর্তি আবেদন ফরম।',
            'বয়সসীমা, প্রদেয় প্রয়োজনীয় সনদের তালিকা এবং পর্যায়ক্রমিক জমাদানের দিকনির্দেশনা।',
            'ফরমের শেষ পৃষ্ঠায় প্রয়োজনীয় দলিলের সংযুক্তি চেকলিস্ট দেওয়া আছে।'
          ]
        : [
            'Complete printable admission application form for academic session 2025.',
            'Includes age criteria, document requirements, and step-by-step submission instructions.',
            'Required attachments checklist included in section 4.'
          ]
    },
    {
      id: '02',
      serial: '02',
      title: isBn ? 'প্রাতিষ্ঠানিক প্রসপেক্টাস ও পাঠ্যক্রম' : 'Academic Prospectus & Curriculum',
      subtitle: isBn ? 'কলেজের সার্বিক পরিচিতি, শিক্ষার দর্শন ও বিস্তারিত পাঠ্যক্রম।' : 'Complete academic prospectus and curriculum details.',
      category: isBn ? 'প্রসপেক্টাস' : 'Prospectus',
      filterGroup: 'Others',
      date: '2025-01-10',
      size: isBn ? '৩.৫ মেগাবাইট' : '3.5 MB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        text: 'text-sky-600',
      },
      categoryBadge: {
        bg: 'bg-[#eaf4ff]',
        text: 'text-[#0065ff]',
        border: 'border-[#c5e0ff]',
      },
      details: isBn
        ? [
            'প্রতিষ্ঠানের পরিচিতি, ঐতিহ্য, শিক্ষার লক্ষ্য ও শিক্ষকদের সংক্ষিপ্ত বিবরণী।',
            'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্দেশিত পাঠ্যপরিকল্পনার বিশ্লেষণ।',
            'সহশিক্ষা কার্যক্রম, আধুনিক কম্পিউটার ল্যাব, বিজ্ঞানাগার ও শিক্ষার্থীদের সুযোগ-সুবিধা।'
          ]
        : [
            'Institutional introduction, educational philosophy, and faculty profile.',
            'NCTB national curriculum implementation overview from Primary to Secondary levels.',
            'Co-curricular facilities, laboratory guides, and student support services.'
          ]
    },
    {
      id: '03',
      serial: '03',
      title: isBn ? 'ক্লাস রুটিন ২০২৫ (প্লে থেকে দশম শ্রেণি)' : 'Class Routine 2025 (Prep to Class X)',
      subtitle: isBn ? 'সকল শ্রেণির জন্য নির্ধারিত পূর্ণাঙ্গ দৈনিক ক্লাসের সময়সূচি।' : 'Updated class routine for all sections.',
      category: isBn ? 'ক্লাস রুটিন' : 'Routine',
      filterGroup: 'Routine',
      date: '2025-01-12',
      size: isBn ? '৫০০ কিলোবাইট' : '500 KB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        text: 'text-amber-600',
      },
      categoryBadge: {
        bg: 'bg-[#fff4e5]',
        text: 'text-[#b36b00]',
        border: 'border-[#ffe0b2]',
      },
      details: isBn
        ? [
            'প্রাত্যহিক সমাবেশ, ৬টি পিরিয়ড এবং ৩০ মিনিটের টিফিন বিরতির সমন্বিত সময়তালিকা।',
            'শ্রেণি ও সেকশন অনুযায়ী শিক্ষক বণ্টন এবং কক্ষ নম্বরের বিবরণ।',
            '২০২৫ শিক্ষাবর্ষের প্রথম কার্যদিবস থেকে কার্যকর।'
          ]
        : [
            'Master schedule for 6 periods daily along with assembly and 30-minute Tiffin break.',
            'Specific subject allocations, teacher period distribution, and room numbers.',
            'Effective starting from the first academic week of Session 2025.'
          ]
    },
    {
      id: '04',
      serial: '04',
      title: isBn ? 'পাঠ্যসূচি ও বইয়ের তালিকা' : 'Syllabus & Book List',
      subtitle: isBn ? 'শ্রেণিভিত্তিক পূর্ণাঙ্গ সিলেবাস ও সহায়ক বইয়ের তালিকা।' : 'Subject-wise syllabus and recommended book list.',
      category: isBn ? 'সিলেবাস' : 'Syllabus',
      filterGroup: 'Syllabus',
      date: '2025-01-15',
      size: isBn ? '২.১ মেগাবাইট' : '2.1 MB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        text: 'text-purple-600',
      },
      categoryBadge: {
        bg: 'bg-[#f3edff]',
        text: 'text-[#6554c0]',
        border: 'border-[#e1d5ff]',
      },
      details: isBn
        ? [
            'অর্ধবার্ষিকী ও বার্ষিক পরীক্ষার বিস্তারিত অধ্যায়ভিত্তিক বিভাজন ও নম্বর বণ্টন।',
            'এনসিটিবি অনুমোদিত মূল পাঠ্যবই এবং প্রস্তাবিত সহায়ক বইয়ের নির্দেশিকা।',
            'ধারাবাহিক মূল্যায়ন ও ব্যবহারিক ক্লাসের বিস্তারিত রূপরেখা।'
          ]
        : [
            'Detailed term-wise syllabus breakdown for Half-Yearly and Annual examinations.',
            'Prescribed textbooks approved by NCTB and supplementary reference materials.',
            'Marking schemes and continuous assessment guidelines.'
          ]
    },
    {
      id: '05',
      serial: '05',
      title: isBn ? 'বাৎসরিক ছুটির তালিকা ও শিক্ষাপঞ্জি ২০২৫' : 'Holiday List & Academic Calendar 2025',
      subtitle: isBn ? '২০২৫ সালের সকল সরকারি ও প্রাতিষ্ঠানিক ছুটির দিনপঞ্জি।' : 'List of holidays and academic calendar for 2025.',
      category: isBn ? 'ক্যালেন্ডার' : 'Calendar',
      filterGroup: 'Calendar',
      date: '2025-01-01',
      size: isBn ? '২৫০ কিলোবাইট' : '250 KB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        text: 'text-rose-600',
      },
      categoryBadge: {
        bg: 'bg-[#ffebe6]',
        text: 'text-[#de350b]',
        border: 'border-[#ffd2cc]',
      },
      details: isBn
        ? [
            'শিক্ষা মন্ত্রণালয় কর্তৃক অনুমোদিত জাতীয় ও ধর্মীয় ছুটির পূর্ণাঙ্গ তালিকা।',
            'সাময়িক পরীক্ষা, অভিভাবক সমাবেশ এবং বার্ষিক ক্রীড়া প্রতিযোগিতার সম্ভাব্য তারিখ।',
            'গ্রীষ্মকালীন ও শীতকালীন দীর্ঘ ছুটির সুনির্দিষ্ট তফসিল।'
          ]
        : [
            'Official government approved list of national and religious holidays.',
            'Examination commencement dates, parent-teacher meetings, and sports meet schedule.',
            'Term vacation dates including summer and winter recesses.'
          ]
    },
    {
      id: '06',
      serial: '06',
      title: isBn ? 'বার্ষিক বেতন ও পরীক্ষার ফি পরিশোধের সময়সূচি' : 'Annual Fee & Exam Fee Payment Schedule',
      subtitle: isBn ? 'মাসিক বেতন ও বিভিন্ন পরীক্ষার ফি জমাদানের বিস্তারিত তফসিল।' : 'Detailed schedule for annual and examination fees.',
      category: isBn ? 'সাধারণ' : 'General',
      filterGroup: 'Others',
      date: '2025-01-08',
      size: isBn ? '৭৫০ কিলোবাইট' : '750 KB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-slate-100',
        border: 'border-slate-200',
        text: 'text-slate-600',
      },
      categoryBadge: {
        bg: 'bg-slate-100',
        text: 'text-slate-700',
        border: 'border-slate-200',
      },
      details: isBn
        ? [
            'টিউশন ফি, সেশন চার্জ, ল্যাব ফি এবং পরীক্ষা রেজিস্ট্রেশন ফির খাতভিত্তিক বিবরণ।',
            'বিকাশ, নগদ এবং নির্ধারিত ব্যাংক বুথে অনলাইনে ফি পরিশোধের বিস্তারিত নিয়মাবলী।',
            'বিলম্ব ফি এড়াতে প্রতি মাসের নির্ধারিত তারিখের মধ্যে ফি পরিশোধের অনুরোধ।'
          ]
        : [
            'Breakdown of tuition fees, laboratory fees, and examination registration fees.',
            'Due dates for each installment throughout the academic session.',
            'Instructions for online payment via bKash, Nagad, and nominated bank counters.'
          ]
    },
    {
      id: '07',
      serial: '07',
      title: isBn ? 'নবীন শিক্ষার্থীদের নির্দেশিকা ও পোশাক নীতি' : 'New Student Admission Info & Uniform Guide',
      subtitle: isBn ? 'নতুন শিক্ষার্থীদের দিকনির্দেশনা ও নির্ধারিত কলেজ পোশাকের বিবরণ।' : 'Information for new students and uniform guidelines.',
      category: isBn ? 'আবেদন ফরম' : 'Form',
      filterGroup: 'Form',
      date: '2025-01-03',
      size: isBn ? '১.৮ মেগাবাইট' : '1.8 MB',
      fileType: 'PDF',
      iconColor: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        text: 'text-emerald-600',
      },
      categoryBadge: {
        bg: 'bg-[#e6f7ef]',
        text: 'text-[#00875a]',
        border: 'border-[#c1e8d4]',
      },
      details: isBn
        ? [
            'ছাত্র-ছাত্রীদের গ্রীষ্মকালীন ও শীতকালীন ইউনিফর্মের সুনির্দিষ্ট মাপ ও নকশা।',
            'প্রতিষ্ঠান ব্যাজ, নির্ধারিত জুতা ও মোজা এবং চুলের শৃঙ্খলার নিয়মাবলী।',
            'নবীন বরণ ও ওরিয়েন্টেশন ক্লাসের সূচি এবং ক্যাম্পাসের আচরণবিধি।'
          ]
        : [
            'Complete uniform specifications for boys and girls across Summer and Winter.',
            'Institution crest placement, shoe and sock guidelines, and haircut standards.',
            'Campus code of ethics and orientation day schedule.'
          ]
    }
  ], [isBn]);

  // Dynamic filter buttons with exact counts
  const filterPills = useMemo(() => {
    return [
      {
        id: 'All Files',
        label: isBn ? 'সকল ফাইল' : 'All Files',
        icon: LayoutGrid,
        count: downloadItems.length,
      },
      {
        id: 'Routine',
        label: isBn ? 'ক্লাস রুটিন' : 'Routine',
        icon: Calendar,
        count: downloadItems.filter((i) => i.filterGroup === 'Routine').length,
      },
      {
        id: 'Syllabus',
        label: isBn ? 'সিলেবাস' : 'Syllabus',
        icon: BookOpen,
        count: downloadItems.filter((i) => i.filterGroup === 'Syllabus').length,
      },
      {
        id: 'Form',
        label: isBn ? 'ভর্তি ও অন্যান্য ফরম' : 'Form',
        icon: FileText,
        count: downloadItems.filter((i) => i.filterGroup === 'Form').length,
      },
      {
        id: 'Calendar',
        label: isBn ? 'একাডেমিক ক্যালেন্ডার' : 'Calendar',
        icon: Calendar,
        count: downloadItems.filter((i) => i.filterGroup === 'Calendar').length,
      },
      {
        id: 'Others',
        label: isBn ? 'অন্যান্য নথি' : 'Others',
        icon: MoreHorizontal,
        count: downloadItems.filter((i) => i.filterGroup === 'Others').length,
      },
    ];
  }, [downloadItems, isBn]);

  // Filter & Sort
  const filteredAndSortedItems = useMemo(() => {
    const list = downloadItems.filter((item) => {
      const matchesFilter =
        selectedFilter === 'All Files' || item.filterGroup === selectedFilter;
      const matchesQuery =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesQuery;
    });

    return list.sort((a, b) => {
      if (sortBy === 'latest') return b.date.localeCompare(a.date);
      if (sortBy === 'oldest') return a.date.localeCompare(b.date);
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      if (sortBy === 'size') return parseFloat(b.size) - parseFloat(a.size);
      return 0;
    });
  }, [downloadItems, selectedFilter, searchQuery, sortBy]);

  const handleDownload = (item: DownloadItem) => {
    // Generate sample text download
    const content = `SOS Hermann Gmeiner School Khulna\nOfficial Document: ${item.title}\nCategory: ${item.category}\nDate: ${item.date}\nSize: ${item.size}\n\nDetails:\n${item.details.join('\n')}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = (item: DownloadItem) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
    setOpenDropdownId(null);
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] text-slate-800 pb-20">
      {/* 1. Hero Section: Full-Width Real Campus Background with Left-to-Right White Fade */}
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
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{isBn ? 'ডাউনলোড কর্নার' : 'Download Center'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25} className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Tag Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Download size={14} />
              <span>{isBn ? 'ডাউনলোড কর্নার' : 'DOWNLOAD CENTER'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? 'ডাউনলোড কর্নার' : 'Download Center'}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn
                ? 'গুরুত্বপূর্ণ প্রাতিষ্ঠানিক নির্দেশিকা, ভর্তি ফরম, সিলেবাস, ক্লাস রুটিন, ছুটির তালিকা এবং একাডেমিক নথিপত্র এক ক্লিকে ডাউনলোড করুন।'
                : 'Access and download important academic resources, forms, routines, syllabi, calendars and more.'}
            </p>
          </ScrollReveal>

          {/* Floating White Quote Card on the Right (Matching media_1790110070973.png) */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 max-w-[340px]">
            <ScrollScale delay={0.2} className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90">
              <div className="flex items-start gap-3">
                <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                  “
                </span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                    {isBn ? 'আজকের শিক্ষা, আলোকিত আগামীর প্রত্যয়' : 'Education today for a brighter tomorrow'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                    {isBn ? '— এস ও এস হারম্যান মেইনার কলেজ' : '— SOS Hermann Gmeiner School'}
                  </p>
                </div>
              </div>
            </ScrollScale>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-5">
        {/* Category Filter Pills (Exact replica of media_1790109113156.jpg) */}
        <ScrollReveal duration={0.5} distance={15} className="flex flex-wrap items-center gap-2.5">
          {filterPills.map((pill) => {
            const Icon = pill.icon;
            const isActive = selectedFilter === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedFilter(pill.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#004d34] text-white shadow-emerald-900/20'
                    : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                <span>{pill.label}</span>
                <span
                  className={`ml-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {toBanglaNum(pill.count)}
                </span>
              </button>
            );
          })}
        </ScrollReveal>
        {/* Search, Sort & View Controls Card (Exact match of reference) */}
        <ScrollReveal duration={0.5} distance={15} className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Left: Search input with green icon box */}
          <div className="flex items-center flex-1 max-w-xl bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#004d34] focus-within:ring-1 focus-within:ring-[#004d34] transition">
            <div className="bg-[#004d34] text-white p-2.5 sm:p-3 flex items-center justify-center shrink-0">
              <Search size={16} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isBn ? 'শিরোনাম, বিষয় বা ক্যাটাগরি দিয়ে ফাইল খুঁজুন...' : 'Search files by title, keyword or category...'}
              className="w-full px-3.5 py-2 bg-transparent text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="pr-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                {isBn ? 'মুছুন' : 'Clear'}
              </button>
            )}
          </div>

          {/* Right: Sort Dropdown & View Mode Switcher */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            {/* Sort Dropdown */}
            <div className="relative flex items-center gap-1.5 border border-slate-200 rounded-xl px-3 py-2 bg-white text-xs font-semibold text-slate-700 shadow-2xs">
              <SlidersHorizontal size={13} className="text-slate-500" />
              <span className="text-slate-400 font-medium">{isBn ? 'ক্রমানুসার' : 'Sort by'}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-800 font-bold focus:outline-none cursor-pointer pr-1"
              >
                <option value="latest">{isBn ? 'সর্বশেষ প্রথম' : 'Latest First'}</option>
                <option value="oldest">{isBn ? 'প্রাচীনতম প্রথম' : 'Oldest First'}</option>
                <option value="name">{isBn ? 'নাম অনুযায়ী' : 'Name (A-Z)'}</option>
                <option value="size">{isBn ? 'ফাইলের আকার' : 'Size (Large to Small)'}</option>
              </select>
            </div>

            {/* List vs Grid Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                title={isBn ? 'তালিকা ভিউ' : 'List View'}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <List size={16} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title={isBn ? 'গ্রিড ভিউ' : 'Grid View'}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Grid size={16} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* View Mode: List View (Table matching media_1790109113156.jpg) */}
        {viewMode === 'list' ? (
          <ScrollReveal duration={0.6} distance={25} className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    <th className="py-4 px-5 text-center w-14">#</th>
                    <th className="py-4 px-4 min-w-[280px]">{isBn ? 'ফাইলের বিবরণ' : 'FILE TITLE'}</th>
                    <th className="py-4 px-4">{isBn ? 'ক্যাটাগরি' : 'CATEGORY'}</th>
                    <th className="py-4 px-4">{isBn ? 'তারিখ' : 'DATE'}</th>
                    <th className="py-4 px-4">{isBn ? 'ফাইলের আকার' : 'SIZE'}</th>
                    <th className="py-4 px-6 text-right">{isBn ? 'পদক্ষেপ' : 'ACTION'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/90 text-xs sm:text-sm">
                  {filteredAndSortedItems.length > 0 ? (
                    filteredAndSortedItems.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-emerald-50/25 transition-colors group"
                      >
                        {/* Serial Number */}
                        <td className="py-4 px-5 text-center font-bold text-slate-500 text-xs">
                          {toBanglaNum(item.serial)}
                        </td>

                        {/* File Title & Subtitle with Icon */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3.5">
                            {/* Color Coded File Icon */}
                            <div
                              className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${item.iconColor.bg} ${item.iconColor.border} ${item.iconColor.text}`}
                            >
                              <FileText size={18} />
                            </div>

                            {/* Titles */}
                            <div>
                              <button
                                type="button"
                                onClick={() => setActiveItem(item)}
                                className="font-bold text-slate-900 group-hover:text-[#004d34] transition-colors text-left block leading-snug cursor-pointer"
                              >
                                {item.title}
                              </button>
                              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                                {item.subtitle}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Category Pill */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${item.categoryBadge.bg} ${item.categoryBadge.text}`}
                          >
                            {item.category}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="py-4 px-4 whitespace-nowrap text-slate-500 text-xs">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-slate-400" />
                            <span>{toBanglaNum(item.date)}</span>
                          </div>
                        </td>

                        {/* Size */}
                        <td className="py-4 px-4 whitespace-nowrap font-medium text-slate-600 text-xs">
                          {item.size}
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2 justify-end relative">
                            {/* Download Button */}
                            <button
                              type="button"
                              onClick={() => handleDownload(item)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#007a4d] bg-[#e8f7ee] hover:bg-[#d5f0e1] border border-[#c1e8d4] transition-all cursor-pointer shadow-2xs active:scale-95"
                            >
                              <Download size={13} />
                              <span>{isBn ? 'ডাউনলোড' : 'Download'}</span>
                            </button>

                            {/* More Actions Dropdown Toggle */}
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenDropdownId(
                                    openDropdownId === item.id ? null : item.id
                                  )
                                }
                                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                                title={isBn ? 'আরও অপশন' : 'More options'}
                              >
                                <MoreVertical size={16} />
                              </button>

                              {/* Dropdown Menu */}
                              {openDropdownId === item.id && (
                                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-30 animate-in fade-in zoom-in-95 duration-100">
                                  <button
                                    onClick={() => {
                                      setActiveItem(item);
                                      setOpenDropdownId(null);
                                    }}
                                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                  >
                                    <Eye size={14} className="text-slate-500" />
                                    <span>{isBn ? 'বিস্তারিত দেখুন' : 'Preview Details'}</span>
                                  </button>
                                  <button
                                    onClick={() => handleCopyLink(item)}
                                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                  >
                                    <Share2 size={14} className="text-slate-500" />
                                    <span>
                                      {copiedId === item.id
                                        ? (isBn ? 'লিংক কপি হয়েছে!' : 'Link Copied!')
                                        : (isBn ? 'শেয়ার লিংক কপি' : 'Copy Share Link')}
                                    </span>
                                  </button>
                                  <button
                                    onClick={() => {
                                      window.print();
                                      setOpenDropdownId(null);
                                    }}
                                    className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 border-t border-slate-100"
                                  >
                                    <Printer size={14} className="text-slate-500" />
                                    <span>{isBn ? 'প্রিন্ট করুন' : 'Print Information'}</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <AlertCircle size={36} className="mx-auto text-slate-400 mb-2" />
                        <p className="font-bold text-slate-800">
                          {isBn ? 'কোনো ফাইল পাওয়া যায়নি' : 'No documents found'}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isBn
                            ? 'অনুসন্ধান বা ক্যাটাগরি ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।'
                            : 'Try adjusting your search query or category filter.'}
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        ) : (
          /* Grid View Mode */
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAndSortedItems.map((item) => (
              <ScrollStaggerItem key={item.id}>
                <HoverCard className="h-full">
                  <div
                    className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group h-full"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${item.iconColor.bg} ${item.iconColor.border} ${item.iconColor.text}`}
                        >
                          <FileText size={22} />
                        </div>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${item.categoryBadge.bg} ${item.categoryBadge.text}`}
                        >
                          {item.category}
                        </span>
                      </div>

                      <h3
                        onClick={() => setActiveItem(item)}
                        className="font-bold text-slate-900 group-hover:text-[#004d34] transition-colors leading-snug cursor-pointer mb-1 line-clamp-1"
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] text-slate-500">
                        <p className="font-semibold text-slate-700">{item.size}</p>
                        <p className="text-slate-400">{toBanglaNum(item.date)}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDownload(item)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#007a4d] bg-[#e8f7ee] hover:bg-[#d5f0e1] border border-[#c1e8d4] transition-all cursor-pointer"
                      >
                        <Download size={13} />
                        <span>{isBn ? 'ডাউনলোড' : 'Download'}</span>
                      </button>
                    </div>
                  </div>
                </HoverCard>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        )}
      </main>

      {/* Document Details Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#004d34] text-white p-6 rounded-t-3xl relative">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title={isBn ? 'বন্ধ করুন' : 'Close'}
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider ${activeItem.categoryBadge.bg} ${activeItem.categoryBadge.text}`}
                >
                  {activeItem.category}
                </span>
                <span className="text-xs text-emerald-100 font-mono">
                  REF-{toBanglaNum('2025')}/{toBanglaNum(activeItem.serial)}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white leading-snug pr-8">
                {activeItem.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-emerald-100/90 mt-3 font-medium">
                <span>{isBn ? 'প্রকাশের তারিখ:' : 'Published:'} {toBanglaNum(activeItem.date)}</span>
                <span>•</span>
                <span>{isBn ? 'আকার:' : 'Size:'} {activeItem.size}</span>
                <span>•</span>
                <span>{isBn ? 'ফরম্যাট:' : 'Format:'} {activeItem.fileType}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {isBn ? 'নথির সারসংক্ষেপ' : 'Document Overview'}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeItem.subtitle}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  {isBn ? 'সূচি ও নির্দেশিকা' : 'Contents & Instructions'}
                </p>
                <ul className="space-y-2">
                  {activeItem.details.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-emerald-600 shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-emerald-950">
                    {isBn ? 'অনুমোদিত প্রাতিষ্ঠানিক নথি' : 'Verified Official Resource'}
                  </p>
                  <p className="text-[11px] text-emerald-700">
                    {isBn ? 'এস ও এস হারম্যান মেইনার কলেজ আর্কাইভ' : 'SOS Hermann Gmeiner School Khulna Archive'}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-800 font-black text-xs">
                  SOS
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 rounded-b-3xl border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
              >
                <Printer size={14} />
                <span>{isBn ? 'প্রিন্ট' : 'Print Info'}</span>
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition cursor-pointer"
                >
                  {isBn ? 'বন্ধ করুন' : 'Close'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(activeItem);
                    setActiveItem(null);
                  }}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition cursor-pointer shadow-xs"
                >
                  <Download size={14} />
                  <span>{isBn ? 'এখনই ডাউনলোড' : 'Download Now'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
