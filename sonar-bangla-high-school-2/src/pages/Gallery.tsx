import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Camera,
  Search,
  LayoutGrid,
  Trophy,
  Calendar,
  Users,
  Image as ImageIcon,
  Megaphone,
  FlaskConical,
  MoreHorizontal,
  MoreVertical,
  SlidersHorizontal,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Download,
  Eye,
  Maximize2,
  List,
  Grid,
  CheckCircle2,
  Sparkles,
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

interface PhotoAlbum {
  id: string;
  title: string;
  category: string;
  filterGroup: string;
  date: string;
  photosCount: number;
  thumbnail: string;
  description: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export const Gallery: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [selectedCategory, setSelectedCategory] = useState<string>('All Albums');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest' | 'photos' | 'name'>('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const albums: PhotoAlbum[] = useMemo(() => [
    {
      id: '1',
      title: isBn ? 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা ২০২৫' : 'Annual Sports & Cultural Program 2025',
      category: isBn ? 'ক্রীড়া ও পুরস্কার' : 'Sports & Awards',
      filterGroup: 'Sports & Awards',
      date: isBn ? '১৮ ফেব্রুয়ারি ২০২৫' : '18 FEB 2025',
      photosCount: 8,
      thumbnail: '/gallery/album_sports.jpg',
      description: isBn
        ? 'বার্ষিক ক্রীড়া প্রতিযোগিতার বর্ণাঢ্য আয়োজন, দৌড় ও ট্র‍্যাক ইভেন্ট এবং বিজয়ীদের হাতে ট্রফি তুলে দেওয়ার আনন্দঘন মুহূর্ত।'
        : 'Vibrant moments from our Annual Sports Day competitions, track events, and champions celebrating with trophies.',
      galleryImages: [
        {
          url: '/gallery/album_sports.jpg',
          caption: isBn ? 'খেলার মাঠে বিজয়ী দল তাদের চ্যাম্পিয়ন ট্রফি প্রদর্শন করছে।' : 'Proud champions holding the championship trophy on the athletic field.',
        },
        {
          url: '/programs/program_sports.png',
          caption: isBn ? 'রৌদ্রোজ্জ্বল দিনে দৌড় ও রিলে প্রতিযোগিতায় শিক্ষার্থীদের তীব্র প্রতিদ্বন্দ্বিতা।' : 'Athletes competing in sprint and relay events under sunny skies.',
        },
        {
          url: '/facilities/facility_grounds.png',
          caption: isBn ? 'ফাইনাল খেলার সময় গ্যালারিতে উপস্থিত শিক্ষক ও শিক্ষার্থীদের করতালি।' : 'Cheering crowds and house pavilions during the finals.',
        },
      ],
    },
    {
      id: '2',
      title: isBn ? 'বিজ্ঞান মেলা ও উদ্ভাবনী প্রদর্শনী' : 'Science Fair & Exhibition',
      category: isBn ? 'ল্যাব ও পাঠদান' : 'Academic & Labs',
      filterGroup: 'Academic & Labs',
      date: isBn ? '২০ জানুয়ারি ২০২৫' : '20 JAN 2025',
      photosCount: 7,
      thumbnail: '/gallery/album_science.jpg',
      description: isBn
        ? 'তরুণ বিজ্ঞানীদের স্বনির্মিত রোবটিক্স প্রজেক্ট, রসায়ন ল্যাবে ব্যবহারিক পরীক্ষা এবং উদ্ভাবনী প্রদর্শন।'
        : 'Young innovators demonstrating practical scientific experiments, robotics models, and research projects in the chemistry lab.',
      galleryImages: [
        {
          url: '/gallery/album_science.jpg',
          caption: isBn ? 'মাধ্যমিক শাখার শিক্ষার্থীরা রাসায়নিক বিক্রিয়া ও উপাদান বিশ্লেষণ করছে।' : 'Secondary section students testing chemical reactions and analyzing solutions.',
        },
        {
          url: '/facilities/facility_science.png',
          caption: isBn ? 'আধুনিক যন্ত্রপাতি ও গ্লাসওয়্যার সমৃদ্ধ সুসজ্জিত বিজ্ঞানাগার।' : 'State-of-the-art laboratory benches equipped with modern glassware and equipment.',
        },
        {
          url: '/programs/program_academic.png',
          caption: isBn ? 'শিক্ষকবৃন্দ বিজ্ঞান মেলায় প্রদর্শিত বৈজ্ঞানিক পোস্টার ও প্রজেক্ট মূল্যায়ন করছেন।' : 'Teachers evaluating scientific research abstracts and interactive exhibits.',
        },
      ],
    },
    {
      id: '3',
      title: isBn ? 'পুরস্কার বিতরণী ও কৃতি সংবর্ধনা ২০২৫' : 'Prize Giving Ceremony 2025',
      category: isBn ? 'ক্রীড়া ও পুরস্কার' : 'Sports & Awards',
      filterGroup: 'Sports & Awards',
      date: isBn ? '২২ জানুয়ারি ২০২৫' : '22 JAN 2025',
      photosCount: 7,
      thumbnail: '/gallery/album_prize.jpg',
      description: isBn
        ? 'বোর্ড পরীক্ষায় জিপিএ-৫ প্রাপ্ত কৃতি শিক্ষার্থী, হাউস চ্যাম্পিয়ন এবং বিশিষ্ট শিক্ষকবৃন্দের সম্মাননা প্রদান।'
        : 'Prestigious award presentation acknowledging board exam GPA-5.00 achievers, house champions, and faculty milestones.',
      galleryImages: [
        {
          url: '/gallery/album_prize.jpg',
          caption: isBn ? 'অফিসিয়াল মেধা স্মারক ক্রেস্ট ও সম্মাননা সনদ।' : 'Official institutional merit crests, crest plaques, and special achievement awards.',
        },
        {
          url: '/programs/program_sports_clean.png',
          caption: isBn ? 'প্রধান অতিথি কৃতি শিক্ষার্থীদের হাতে সনদ ও স্বর্ণপদক তুলে দিচ্ছেন।' : 'Chief guest handing over certificates and academic excellence medals.',
        },
      ],
    },
    {
      id: '4',
      title: isBn ? 'শ্রেণিকক্ষে শিখন ও আনন্দঘন পাঠদান' : 'Classroom Activities',
      category: isBn ? 'ল্যাব ও পাঠদান' : 'Academic & Labs',
      filterGroup: 'Academic & Labs',
      date: isBn ? '১৫ জানুয়ারি ২০২৫' : '15 JAN 2025',
      photosCount: 6,
      thumbnail: '/gallery/album_classroom.jpg',
      description: isBn
        ? 'মনোযোগী শিক্ষার্থীদের স্বতঃস্ফূর্ত অংশগ্রহণ, প্রশ্নোত্তরে হাত তোলা এবং দলগত সমস্যা সমাধান কার্যক্রম।'
        : 'Enthusiastic learners actively participating, raising hands, and engaging in collaborative problem solving.',
      galleryImages: [
        {
          url: '/gallery/album_classroom.jpg',
          caption: isBn ? 'গণিতের ক্লাসে শিক্ষককে উত্তর প্রদানের জন্য শিক্ষার্থীদের হাত তোলার দৃশ্য।' : 'Students raising hands during an interactive mathematics problem-solving session.',
        },
        {
          url: '/hero_slider_2.jpg',
          caption: isBn ? 'আধুনিক মাল্টিমিডিয়া প্রজেক্টরে সমৃদ্ধ শ্রেণিকক্ষের পাঠদান পরিবেশ।' : 'Modern interactive multimedia classroom environment.',
        },
      ],
    },
    {
      id: '5',
      title: isBn ? 'প্রাত্যহিক সমাবেশ ও বিশেষ অনুষ্ঠান' : 'Assembly Programs & Special Events',
      category: isBn ? 'সমাবেশ ও অনুষ্ঠান' : 'Assembly',
      filterGroup: 'Assembly',
      date: isBn ? '১৫ জানুয়ারি ২০২৫' : '15 JAN 2025',
      photosCount: 5,
      thumbnail: '/gallery/album_assembly.jpg',
      description: isBn
        ? 'অডিটোরিয়াম মঞ্চে ঐতিহ্যবাহী শাস্ত্রীয় নৃত্য, একাঙ্ক নাটক ও দেশাত্মবোধক সমবেত সঙ্গীত পরিবেশনা।'
        : 'Colorful cultural showcase with traditional classical dance recitals, drama performances, and musical chorus on auditorium stage.',
      galleryImages: [
        {
          url: '/gallery/album_assembly.jpg',
          caption: isBn ? 'উৎসবমুখর পোশাকে শিক্ষার্থীদের ঐতিহ্যবাহী নৃত্য পরিবেশন।' : 'Students performing traditional cultural dance recital in vivid festive attire.',
        },
        {
          url: '/programs/program_cultural.png',
          caption: isBn ? 'প্রাতিষ্ঠানিক দিবসে শিক্ষার্থীদের দেশাত্মবোধক গান পরিবেশনা।' : 'Chorus singing patriotic songs in commemoration of institutional celebrations.',
        },
      ],
    },
    {
      id: '6',
      title: isBn ? 'উন্মুক্ত সাংস্কৃতিক উৎসব ও মেলা' : 'Open Air Cultural Festival & Fair',
      category: isBn ? 'জয়ন্তী ২০২৬' : 'Jayanti 2026',
      filterGroup: 'Jayanti 2026',
      date: isBn ? '১৮ জানুয়ারি ২০২৫' : '18 JAN 2025',
      photosCount: 4,
      thumbnail: '/gallery/album_fair.jpg',
      description: isBn
        ? 'ক্যাম্পাসের উন্মুক্ত চত্বরে সাংস্কৃতিক অনুষ্ঠান, তারুণ্যের নেতৃত্ব ক্যাম্প ও ঐতিহ্যবাহী মেলার আয়োজন।'
        : 'Open-air cultural excursion and youth leadership camp celebrating natural heritage and student camaraderie at sunrise.',
      galleryImages: [
        {
          url: '/gallery/album_fair.jpg',
          caption: isBn ? 'ভোরের মিষ্টি আলোয় ক্যাম্পাসে প্রকৃতির সাথে একাত্ম হওয়া শিক্ষার্থীদের দৃশ্য।' : 'Silhouette of students greeting the sunrise during outdoor environmental excursion.',
        },
        {
          url: '/programs/program_clubs.png',
          caption: isBn ? 'স্কাউট ও পরিবেশ ক্লাবের সদস্যদের পরিবেশবান্ধব প্রদর্শনী মণ্ডপ।' : 'Scouts and youth club members setting up eco-friendly pavilions.',
        },
      ],
    },
    {
      id: '7',
      title: isBn ? 'কেন্দ্রীয় লাইব্রেরি ও পাঠচক্র' : 'Central Library & Study Circles',
      category: isBn ? 'ক্যাম্পাস প্রাঙ্গণ' : 'Campus Grounds',
      filterGroup: 'Campus Grounds',
      date: isBn ? '১২ জানুয়ারি ২০২৫' : '12 JAN 2025',
      photosCount: 3,
      thumbnail: '/gallery/album_library.jpg',
      description: isBn
        ? 'শান্ত ও নিবিড় পরিবেশে পড়াশোনা, দলগত বিষয়ভিত্তিক আলোচনা এবং লাইব্রেরির সমৃদ্ধ গ্রন্থসম্ভার।'
        : 'Quiet study hall, group research discussions, and extensive literary collection in the institutional central library.',
      galleryImages: [
        {
          url: '/gallery/album_library.jpg',
          caption: isBn ? 'লাইব্রেরি ডেস্কে রেফারেন্স বই নিয়ে অধ্যয়নরত শিক্ষার্থীরা।' : 'Students collaborating in literature review and textbook research at study desks.',
        },
        {
          url: '/facilities/facility_library.png',
          caption: isBn ? '১২,০০০ এর বেশি বই সমৃদ্ধ কেন্দ্রীয় পাঠকক্ষ।' : 'Spacious reading hall housing more than 12,000 academic titles and journals.',
        },
      ],
    },
    {
      id: '8',
      title: isBn ? 'ক্যাম্পাস জীবন - শিক্ষার্থীদের সাফল্য' : "Campus Life - Students' Team Success",
      category: isBn ? 'নেতৃত্ব ও পরিষদ' : 'Leadership',
      filterGroup: 'Leadership',
      date: isBn ? '১০ জানুয়ারি ২০২৫' : '10 JAN 2025',
      photosCount: 4,
      thumbnail: '/gallery/album_campus.jpg',
      description: isBn
        ? 'এস ও এস হারম্যান মেইনার স্কুলের মূল ফটকের সম্মুখে বিদায়ী ব্যাচের শিক্ষার্থী ও সম্মানিত শিক্ষকবৃন্দ।'
        : 'Graduating batch and faculty members proudly gathered at the official SOS Hermann Gmeiner monument campus entrance.',
      galleryImages: [
        {
          url: '/gallery/album_campus.jpg',
          caption: isBn ? 'দশম শ্রেণির শিক্ষার্থী ও শিক্ষকবৃন্দের স্মৃতিময় গ্রুপ ফটো।' : 'Class 10 students and faculty mentors posing at the institutional entrance gate.',
        },
        {
          url: '/campus_main.png',
          caption: isBn ? 'সুদৃশ্য সবুজ মাঠ ও আধুনিক মূল একাডেমিক ভবন।' : 'Lush green front lawn and modern academic school facade.',
        },
      ],
    },
    {
      id: '9',
      title: isBn ? 'প্রতিষ্ঠাতা ড. হারম্যান মেইনার জয়ন্তী' : 'Founders Jayanti 2026 Commemoration',
      category: isBn ? 'জয়ন্তী ২০২৬' : 'Jayanti 2026',
      filterGroup: 'Jayanti 2026',
      date: isBn ? '০৮ জানুয়ারি ২০২৫' : '08 JAN 2025',
      photosCount: 6,
      thumbnail: '/campus_main.png',
      description: isBn
        ? 'ড. হারম্যান মেইনার স্মরণে পুষ্পস্তবক অর্পণ, বিশেষ প্রার্থনা ও সমাজকল্যাণমূলক কর্মসূচি পালন।'
        : 'Paying tribute to Dr. Hermann Gmeiner with institutional wreath-laying, peace prayers, and social service projects.',
      galleryImages: [
        {
          url: '/campus_main.png',
          caption: isBn ? 'প্রতিষ্ঠাতার স্মরণে আয়োজিত বিশেষ স্মরণসভা।' : 'Commemorative assembly on campus honoring Dr. Hermann Gmeiner.',
        },
      ],
    },
    {
      id: '10',
      title: isBn ? 'শিক্ষার্থী প্রিফেক্ট কাউন্সিলের শপথগ্রহণ' : 'Student Prefect Council Induction',
      category: isBn ? 'নেতৃত্ব ও পরিষদ' : 'Leadership',
      filterGroup: 'Leadership',
      date: isBn ? '০৫ জানুয়ারি ২০২৫' : '05 JAN 2025',
      photosCount: 5,
      thumbnail: '/programs/program_clubs.png',
      description: isBn
        ? 'নির্বাচিত শিক্ষার্থী প্রতিনিধি ও শ্রেণি মনিটরদের দায়িত্বভার গ্রহণ ও শপথ অনুষ্ঠান।'
        : 'Investiture ceremony for newly elected student council prefects and class monitors taking solemn pledge of honor.',
      galleryImages: [
        {
          url: '/programs/program_clubs.png',
          caption: isBn ? 'অধ্যক্ষ মহোদয়ের সম্মুখে শিক্ষার্থীদের নেতৃত্বের শপথ পাঠ।' : 'Prefects taking institutional leadership oath before the Principal and teachers.',
        },
      ],
    },
    {
      id: '11',
      title: isBn ? 'বোটানিক্যাল গার্ডেন ও সবুজ ক্যাম্পাস প্রাঙ্গণ' : 'Botanical Garden & Green Campus Walk',
      category: isBn ? 'ক্যাম্পাস প্রাঙ্গণ' : 'Campus Grounds',
      filterGroup: 'Campus Grounds',
      date: isBn ? '০৩ জানুয়ারি ২০২৫' : '03 JAN 2025',
      photosCount: 4,
      thumbnail: '/facilities/facility_grounds.png',
      description: isBn
        ? 'পরিবেশ সচেতনতা বৃদ্ধি, বৃক্ষরোপণ অভিযান এবং ঔষধি বাগান রক্ষণাবেক্ষণ কার্যক্রম।'
        : 'Environmental science students documenting native botanical flora, tree plantations, and organic medicinal garden beds.',
      galleryImages: [
        {
          url: '/facilities/facility_grounds.png',
          caption: isBn ? 'খেলার মাঠের সীমানা প্রাচীর ঘেঁষে বৃক্ষরোপণ কর্মসূচি।' : 'Tree plantation drive across the perimeter sports grounds and garden courtyards.',
        },
      ],
    },
    {
      id: '12',
      title: isBn ? 'আন্তঃস্কুল বিতর্ক চ্যাম্পিয়নশিপ ট্রফি' : 'Inter-School Debate Championship Trophy',
      category: isBn ? 'অন্যান্য' : 'Others',
      filterGroup: 'Others',
      date: isBn ? '০২ জানুয়ারি ২০২৫' : '02 JAN 2025',
      photosCount: 5,
      thumbnail: '/programs/program_academic.png',
      description: isBn
        ? 'বিভাগীয় আন্তঃস্কুল সংসদীয় বিতর্ক প্রতিযোগিতায় আমাদের বিতার্কিক দলের চ্যাম্পিয়ন হওয়ার গৌরব।'
        : 'Debating club securing champion title at the regional inter-school parliamentary debate competition.',
      galleryImages: [
        {
          url: '/programs/program_academic.png',
          caption: isBn ? 'বিভাগীয় বিতর্ক চ্যাম্পিয়নশিপ ট্রফি ও সেরা বক্তার পুরস্কার গ্রহণ।' : 'Debaters receiving the divisional debate championship trophy and best speaker awards.',
        },
      ],
    },
  ], [isBn]);

  // Dynamic category filter list with exact count calculations
  const categoryFilters = useMemo(() => {
    return [
      {
        id: 'All Albums',
        label: isBn ? 'সকল অ্যালবাম' : 'All Albums',
        icon: LayoutGrid,
        count: albums.length,
      },
      {
        id: 'Sports & Awards',
        label: isBn ? 'ক্রীড়া ও পুরস্কার' : 'Sports & Awards',
        icon: Trophy,
        count: albums.filter((a) => a.filterGroup === 'Sports & Awards').length,
      },
      {
        id: 'Jayanti 2026',
        label: isBn ? 'জয়ন্তী ২০২৬' : 'Jayanti 2026',
        icon: Calendar,
        count: albums.filter((a) => a.filterGroup === 'Jayanti 2026').length,
      },
      {
        id: 'Leadership',
        label: isBn ? 'নেতৃত্ব ও পরিষদ' : 'Leadership',
        icon: Users,
        count: albums.filter((a) => a.filterGroup === 'Leadership').length,
      },
      {
        id: 'Campus Grounds',
        label: isBn ? 'ক্যাম্পাস প্রাঙ্গণ' : 'Campus Grounds',
        icon: ImageIcon,
        count: albums.filter((a) => a.filterGroup === 'Campus Grounds').length,
      },
      {
        id: 'Assembly',
        label: isBn ? 'সমাবেশ ও অনুষ্ঠান' : 'Assembly',
        icon: Megaphone,
        count: albums.filter((a) => a.filterGroup === 'Assembly').length,
      },
      {
        id: 'Academic & Labs',
        label: isBn ? 'ল্যাব ও পাঠদান' : 'Academic & Labs',
        icon: FlaskConical,
        count: albums.filter((a) => a.filterGroup === 'Academic & Labs').length,
      },
      {
        id: 'Others',
        label: isBn ? 'অন্যান্য' : 'Others',
        icon: MoreHorizontal,
        count: albums.filter((a) => a.filterGroup === 'Others').length,
      },
    ];
  }, [albums, isBn]);

  // Filtering and sorting logic
  const filteredAndSortedAlbums = useMemo(() => {
    const list = albums.filter((album) => {
      const matchesCategory =
        selectedCategory === 'All Albums' || album.filterGroup === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });

    return list.sort((a, b) => {
      if (sortBy === 'latest') return b.id.localeCompare(a.id);
      if (sortBy === 'oldest') return a.id.localeCompare(b.id);
      if (sortBy === 'photos') return b.photosCount - a.photosCount;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [albums, selectedCategory, searchQuery, sortBy]);

  const handleShare = (album: PhotoAlbum) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(album.id);
    setTimeout(() => setCopiedId(null), 2000);
    setOpenMenuId(null);
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
            <span className="text-slate-800 font-bold">{isBn ? 'ফটো অ্যালবাম ও গ্যালারি' : 'Photo Albums & Gallery'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25} className="max-w-xl lg:max-w-2xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Tag Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Camera size={14} />
              <span>{isBn ? 'ফটো গ্যালারি' : 'PHOTO GALLERY'}</span>
            </div>

            {/* Main Headline (2 lines matching Academic Results & Marksheet) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>স্মরণীয় মুহূর্ত ও <br />অ্যালবামসমূহ</>
              ) : (
                <><span className="whitespace-nowrap">Memorable Moments &</span> <br />Albums</>
              )}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn
                ? 'আমাদের বার্ষিক ক্রীড়া প্রতিযোগিতা, জয়ন্তী উদযাপন, সাংস্কৃতিক অনুষ্ঠান এবং প্রাত্যহিক ক্যাম্পাস জীবনের বর্ণাঢ্য চিত্রমালা।'
                : 'Explore photo albums of our sports victories, jubilee celebrations, academic milestones, and campus life.'}
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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        {/* Category Filter Pills (Exact replica of media_1790109401328.jpg) */}
        <ScrollReveal duration={0.5} distance={15} className="flex flex-wrap items-center gap-2.5">
          {categoryFilters.map((pill) => {
            const Icon = pill.icon;
            const isActive = selectedCategory === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedCategory(pill.id)}
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
        {/* Search, Sort & View Controls Bar (Exact match of reference) */}
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
              placeholder={isBn ? 'অ্যালবাম শিরোনাম, অনুষ্ঠান বা কীওয়ার্ড দিয়ে খুঁজুন...' : 'Search albums by title, event or keyword...'}
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
                <option value="photos">{isBn ? 'সর্বাধিক ছবি' : 'Most Photos'}</option>
                <option value="name">{isBn ? 'নাম অনুযায়ী' : 'Name (A-Z)'}</option>
              </select>
            </div>

            {/* Grid vs List Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
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
            </div>
          </div>
        </ScrollReveal>

        {/* View Mode: Grid View (Matching 4-column layout of media_1790109401328.jpg) */}
        {viewMode === 'grid' ? (
          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredAndSortedAlbums.length > 0 ? (
              filteredAndSortedAlbums.map((album) => (
                <ScrollStaggerItem key={album.id}>
                  <HoverCard className="h-full">
                    <div
                      className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group h-full"
                    >
                      {/* Photo Container with Overlays */}
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer">
                        <img
                          src={album.thumbnail}
                          alt={album.title}
                          onClick={() => {
                            setActiveAlbum(album);
                            setActivePhotoIndex(0);
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/campus_main.png';
                          }}
                        />

                        {/* Translucent Frosted Glass Camera Badge (Bottom-Left) */}
                        <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 pointer-events-none shadow-xs">
                          <Camera size={12} className="text-white" />
                          <span>{toBanglaNum(album.photosCount)} {isBn ? 'টি ছবি' : 'Photos'}</span>
                        </div>

                        {/* Floating Top-Right 3-Dots Button */}
                        <div className="absolute top-2.5 right-2.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenuId(openMenuId === album.id ? null : album.id);
                            }}
                            className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs text-slate-700 hover:text-slate-950 flex items-center justify-center shadow-xs transition cursor-pointer"
                            title={isBn ? 'অপশন' : 'Options'}
                          >
                            <MoreVertical size={13} />
                          </button>

                          {/* Dropdown Menu */}
                          {openMenuId === album.id && (
                            <div
                              className="absolute right-0 top-full mt-1 w-40 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-100"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                onClick={() => {
                                  setActiveAlbum(album);
                                  setActivePhotoIndex(0);
                                  setOpenMenuId(null);
                                }}
                                className="w-full px-3 py-1.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                              >
                                <Eye size={13} className="text-slate-500" />
                                <span>{isBn ? 'অ্যালবাম দেখুন' : 'View Album'}</span>
                              </button>
                              <button
                                onClick={() => handleShare(album)}
                                className="w-full px-3 py-1.5 text-left text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                              >
                                <Share2 size={13} className="text-slate-500" />
                                <span>
                                  {copiedId === album.id
                                    ? (isBn ? 'কপি হয়েছে!' : 'Copied!')
                                    : (isBn ? 'শেয়ার লিংক কপি' : 'Share Link')}
                                </span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Title & Metadata Row */}
                      <div className="pt-3">
                        <h3
                          onClick={() => {
                            setActiveAlbum(album);
                            setActivePhotoIndex(0);
                          }}
                          className="text-sm font-bold text-slate-900 group-hover:text-[#004d34] transition-colors line-clamp-1 leading-snug cursor-pointer"
                          title={album.title}
                        >
                          {album.title}
                        </h3>

                        {/* Date and Arrow Button Row */}
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-50">
                          <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold">
                            <Calendar size={13} className="text-emerald-700" />
                            <span>{album.date}</span>
                          </div>

                          {/* Circular Light-Green Arrow Button */}
                          <button
                            type="button"
                            onClick={() => {
                              setActiveAlbum(album);
                              setActivePhotoIndex(0);
                            }}
                            className="w-8 h-8 rounded-full bg-[#e8f7ee] text-[#007a4d] group-hover:bg-[#004d34] group-hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs active:scale-95"
                            title="View Album"
                          >
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </ScrollStaggerItem>
              ))
            ) : (
              <div className="col-span-full bg-white rounded-3xl border border-slate-200 p-12 text-center">
                <AlertCircle size={36} className="mx-auto text-slate-400 mb-2" />
                <h3 className="text-base font-bold text-slate-800">
                  {isBn ? 'কোনো অ্যালবাম পাওয়া যায়নি' : 'No albums found'}
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  {isBn
                    ? 'আপনার নির্বাচিত ক্যাটাগরি বা কীওয়ার্ডের সাথে কোনো ফটো অ্যালবাম মেলেনি।'
                    : 'No photo albums match your selected filter or keyword.'}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Albums');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition cursor-pointer"
                >
                  {isBn ? 'ফিল্টার রিসেট করুন' : 'Reset Filters'}
                </button>
              </div>
            )}
          </ScrollStaggerContainer>
        ) : (
          /* View Mode: List View */
          <ScrollReveal duration={0.6} distance={25} className="bg-white rounded-3xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
            {filteredAndSortedAlbums.map((album) => (
              <div
                key={album.id}
                className="p-4 sm:p-5 hover:bg-emerald-50/25 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={album.thumbnail}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100">
                        {album.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {toBanglaNum(album.photosCount)} {isBn ? 'টি ছবি' : 'Photos'}
                      </span>
                    </div>
                    <h4
                      onClick={() => {
                        setActiveAlbum(album);
                        setActivePhotoIndex(0);
                      }}
                      className="text-sm font-bold text-slate-900 group-hover:text-[#004d34] transition-colors cursor-pointer"
                    >
                      {album.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                      {album.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                    <Calendar size={13} /> {album.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveAlbum(album);
                      setActivePhotoIndex(0);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white hover:bg-[#003b28] transition cursor-pointer shadow-xs"
                  >
                    <span>{isBn ? 'ছবি দেখুন' : 'View Photos'}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </ScrollReveal>
        )}
      </main>

      {/* Full Photo Album Lightbox Modal */}
      {activeAlbum && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveAlbum(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#004d34] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-white/20 text-white">
                  {activeAlbum.category}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-1 leading-snug">
                  {activeAlbum.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveAlbum(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                title={isBn ? 'বন্ধ করুন' : 'Close'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Main Lightbox Image View */}
            <div className="relative bg-slate-950 flex-1 min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
              <img
                src={activeAlbum.galleryImages[activePhotoIndex]?.url || activeAlbum.thumbnail}
                alt={activeAlbum.title}
                className="max-h-[60vh] max-w-full object-contain"
              />

              {/* Prev Photo Arrow */}
              {activeAlbum.galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) =>
                        (prev - 1 + activeAlbum.galleryImages.length) %
                        activeAlbum.galleryImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition cursor-pointer"
                  title={isBn ? 'পূর্ববর্তী ছবি' : 'Previous Photo'}
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Next Photo Arrow */}
              {activeAlbum.galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setActivePhotoIndex(
                      (prev) => (prev + 1) % activeAlbum.galleryImages.length
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition cursor-pointer"
                  title={isBn ? 'পরবর্তী ছবি' : 'Next Photo'}
                >
                  <ChevronRight size={20} />
                </button>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs sm:text-sm font-medium flex items-center justify-between">
                <span>
                  {activeAlbum.galleryImages[activePhotoIndex]?.caption ||
                    activeAlbum.description}
                </span>
                <span className="text-xs text-slate-300 font-bold shrink-0 ml-4">
                  {toBanglaNum(activePhotoIndex + 1)} / {toBanglaNum(activeAlbum.galleryImages.length)}
                </span>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <Calendar size={14} className="text-emerald-700" />
                <span>{isBn ? 'অনুষ্ঠানের তারিখ:' : 'Event Date:'} {activeAlbum.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleShare(activeAlbum)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
                >
                  <Share2 size={13} />
                  <span>
                    {copiedId === activeAlbum.id
                      ? (isBn ? 'লিংক কপি হয়েছে!' : 'Copied Link')
                      : (isBn ? 'শেয়ার' : 'Share')}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveAlbum(null)}
                  className="px-4 py-1.5 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition cursor-pointer shadow-xs"
                >
                  {isBn ? 'বন্ধ করুন' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
