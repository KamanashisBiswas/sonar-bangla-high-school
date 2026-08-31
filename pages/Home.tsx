import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from '../components/Marquee';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ScrollReveal, ScrollScale, ScrollStaggerContainer, ScrollStaggerItem, HoverCard 
} from '../components/ui/MotionComponents';
import { 
  ArrowRight, Calendar, Users, BookOpen, Award, 
  ExternalLink, CheckCircle, Smartphone, Globe, 
  Monitor, Library, Play, Image as ImageIcon,
  Clock, MapPin, Trophy, Sparkles, GraduationCap, BarChart3,
  Layers, Briefcase, Activity, ShieldCheck, FileText, ChevronRight, ChevronLeft,
  Target, Compass, HeartHandshake, Phone, Headphones, Laptop, Presentation, TreePine,
  Download, Link2, Leaf, Shield, Heart, FlaskConical, Images, Building2, School
} from 'lucide-react';

const NOTICE_EN_MAP: Record<string, string> = {
  'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫': 'Summer Vacation & Holiday Notice 2025',
  'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংগ্রহ': 'SSC Examination 2025 Results & Marksheet Distribution',
  'প্রেপ-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫': 'Online Admission Open for Prep-1 & Class 6 (Session 2025)',
  'আন্তর্জাতিক মাতৃভাষা দিবস ও বার্ষিক ক্রীড়া উৎসব উদযাপন': 'International Mother Language Day & Annual Sports Meet',
  'অর্ধ-বার্ষিক ও প্রাক-নির্বাচনী পরীক্ষা ২০২৫ এর সময়সূচি প্রকাশ': 'Half-Yearly & Pre-Test Exam 2025 Schedule Published',
  'বার্ষিক বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনী ২০২৫': 'Annual Science Fair & ICT Innovation Expo 2025',
  'মাসিক বেতন ও পরীক্ষার ফি পরিশোধের সময়সীমা সংক্রান্ত': 'Notice Regarding Monthly Tuition & Exam Fee Payment',
  'নতুন শিক্ষাবর্ষে ডিজিটাল আইডি কার্ড ও ইউনিফর্ম বিতরণ': 'Distribution of Digital Student ID Card & School Uniform',
};

const PERSON_NAME_EN_MAP: Record<string, string> = {
  'মাকসুদা সুলতানা': 'Maksuda Sultana',
  'ইন্দ্রজিৎ কুমার মন্ডল': 'Indrajit Kumar Mondal',
  'মোহাম্মদ রফিকুল ইসলাম': 'Mohammad Rafiqul Islam',
};

const Home: React.FC = () => {
  const { settings, notices, teachers, students, gallery, staff } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [activeNoticeTab, setActiveNoticeTab] = useState<'All' | 'Exam' | 'Admission' | 'General'>('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Hero carousel slides based on photo gallery
  const heroSlides = useMemo(() => [
    {
      image: '/hero_slider.jpg',
      title: language === 'bn' ? 'আন্তঃস্কুল ভলিবল ও ক্রীড়া প্রতিযোগিতায় চ্যাম্পিয়ন হওয়ার গৌরবময় মুহূর্ত' : 'Champions in Inter-School Volleyball & Sports Tournament',
      category: language === 'bn' ? 'ফটো গ্যালারি • ক্রীড়া ও সহশিক্ষা' : 'Photo Gallery • Sports & Achievements',
      link: '/gallery'
    },
    {
      image: '/hero_slider_2.jpg',
      title: language === 'bn' ? 'জয়ন্তী ২০২৬ — ক্রীড়া ও সহশিক্ষা কার্যক্রমে শিক্ষার্থীদের গৌরবময় অর্জন' : 'Jayanti 2026 — Glorious Student Triumphs in Sports & Co-Curricular',
      category: language === 'bn' ? 'ফটো গ্যালারি • জয়ন্তী ২০২৬' : 'Photo Gallery • Jayanti 2026',
      link: '/gallery'
    },
    {
      image: '/hero_slider_3.jpg',
      title: language === 'bn' ? 'জয়ন্তী ২০২৬ — শিক্ষা, মানবতা ও ভবিষ্যৎ গড়ার প্রত্যয়' : 'Jayanti 2026 — Education, Humanity & Fostering Bright Futures',
      category: language === 'bn' ? 'ফটো গ্যালারি • অধ্যক্ষ ও জয়ন্তী ২০২৬' : 'Photo Gallery • Leadership & Jayanti',
      link: '/gallery'
    },
    {
      image: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
      title: language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা — মূল একাডেমি ও সবুজ ক্যাম্পাস' : 'SOS Hermann Gmeiner School Khulna — Main Academic Campus & Grounds',
      category: language === 'bn' ? 'ফটো গ্যালারি • ক্যাম্পাস ভবন' : 'Photo Gallery • Campus',
      link: '/gallery'
    },
    {
      image: 'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
      title: language === 'bn' ? 'সুশৃঙ্খল পরিবেশ ও শিক্ষার্থীদের প্রাত্যহিক সমাবেশ' : 'Disciplined Environment & Morning Student Assembly',
      category: language === 'bn' ? 'ফটো গ্যালারি • প্রাত্যহিক সমাবেশ' : 'Photo Gallery • Assembly',
      link: '/gallery'
    },
    {
      image: 'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg',
      title: language === 'bn' ? 'স্মার্ট ডিজিটাল মাল্টিমিডিয়া ক্লাসরুম ও বিজ্ঞান ল্যাব' : 'Smart Digital Classrooms & Hands-on Science Labs',
      category: language === 'bn' ? 'ফটো গ্যালারি • ডিজিটাল ল্যাব' : 'Photo Gallery • Digital Labs',
      link: '/gallery'
    }
  ], [language]);

  // Auto slide interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, heroSlides.length]);

  // Filtered notices
  const filteredNotices = useMemo(() => {
    if (activeNoticeTab === 'All') return notices;
    return notices.filter(n => n.type === activeNoticeTab);
  }, [notices, activeNoticeTab]);

  // Guaranteed seamless loop track (minimum 8 items so track height is ~600px, greater than container 370px)
  const noticeMarqueeTrack = useMemo(() => {
    if (!filteredNotices.length) return [];
    let items = [...filteredNotices];
    while (items.length < 8) {
      items = [...items, ...filteredNotices];
    }
    return items;
  }, [filteredNotices]);

  // Helper for Date Rendering in Notices
  const renderNoticeDate = (dateStr: string) => {
    try {
      const dateObj = new Date(dateStr);
      const isValid = !isNaN(dateObj.getTime());
      
      return {
        day: isValid ? (language === 'bn' ? dateObj.toLocaleString('bn-BD', { day: '2-digit' }) : dateObj.toLocaleString('en-US', { day: '2-digit' })) : (language === 'bn' ? '০১' : '01'),
        month: isValid ? (language === 'bn' ? dateObj.toLocaleString('bn-BD', { month: 'short' }) : dateObj.toLocaleString('en-US', { month: 'short' })) : (language === 'bn' ? 'জানু' : 'Jan')
      };
    } catch {
      return { day: language === 'bn' ? '০১' : '01', month: language === 'bn' ? 'জানু' : 'Jan' };
    }
  };

  return (
    <div className="bg-[#edf9f3] relative">
      <Marquee />

      {/* Hero Section Carousel - 100% Full Fit, Zero Crop, Zero Whitespace */}
      <section 
        className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] overflow-hidden select-none bg-slate-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image Slides with Smooth Fade & Full Fit */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            {/* Image fills 100% of the carousel area completely without any white space or cropping */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-fill"
            />

            {/* Text & Button Layer (Zero Dark Gradient Overlay) */}
            <div className="absolute inset-0 z-20 flex items-end pointer-events-none">
              {/* Photo Description & Read More Button (No Card Box, Clean Typography with Text Shadow) */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 md:pb-24 lg:pb-28 pointer-events-auto">
                <div className="max-w-2xl space-y-1.5 sm:space-y-2 animate-fade-in">
                  <span className="inline-block text-[11px] sm:text-xs font-bold text-emerald-300 uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                    {slide.category}
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] max-w-xl">
                    {slide.title}
                  </h2>
                  <div className="pt-1.5">
                    <Link
                      to="/gallery"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold transition shadow-lg shadow-slate-950/60 hover:scale-105 transform inline-flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer"
                    >
                      <ImageIcon size={16} />
                      <span>{language === 'bn' ? 'ফটো গ্যালারি দেখুন' : 'Read More'}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Active Panel Indicators (Lifted Comfortably Above Floating Action Cards) */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 right-4 sm:right-6 lg:right-8 z-20 flex items-center gap-2 bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/20 shadow-xl">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide 
                  ? 'w-7 h-2.5 bg-emerald-400 shadow-md shadow-emerald-500/50' 
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 3-Column Floating Quick Action Cards (Directly Below Carousel) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 md:-mt-10 relative z-30 mb-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-100/90 p-3 sm:p-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:divide-x md:divide-slate-200/70">
          
          {/* Card 1: Online Admission */}
          <Link 
            to="/admission" 
            className="flex items-center gap-4 group p-3.5 sm:p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/90 hover:-translate-y-0.5 border border-transparent hover:border-slate-100 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Laptop size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition">
                {language === 'bn' ? 'অনলাইন ভর্তি আবেদন' : 'Online Admission'}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'অনলাইনে ভর্তির আবেদন করুন' : 'Apply for admission online'}
              </p>
            </div>
          </Link>

          {/* Card 2: Daily Class Schedule */}
          <Link 
            to="/academic" 
            className="flex items-center gap-4 group p-3.5 sm:p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/90 hover:-translate-y-0.5 border border-transparent hover:border-slate-100 transition-all duration-300 md:pl-6 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition">
                {language === 'bn' ? 'শ্রেণি কার্যক্রম ও রুটিন' : 'Daily Class Schedule'}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'ক্লাস রুটিন ও সময়সূচি দেখুন' : 'View routine & class time'}
              </p>
            </div>
          </Link>

          {/* Card 3: Contact & Help Desk */}
          <Link 
            to="/contact" 
            className="flex items-center gap-4 group p-3.5 sm:p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/90 hover:-translate-y-0.5 border border-transparent hover:border-slate-100 transition-all duration-300 md:pl-6 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 shadow-xs">
              <Headphones size={24} />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-emerald-700 transition">
                {language === 'bn' ? 'যোগাযোগ ও হেল্পডেস্ক' : 'Contact & Help Desk'}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'আমরা আপনাকে সহায়তা করতে প্রস্তুত' : "We're here to help you"}
              </p>
            </div>
          </Link>

        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* OUR CORE PILLARS & CAMPUS EXCELLENCE (Matching Latest Reference Mockup) */}
        <section className="mb-16 -mt-2 sm:-mt-4 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-wide uppercase">
              {language === 'bn' ? 'আমাদের মূল ভিত্তি ও ক্যাম্পাস শ্রেষ্ঠত্ব' : 'OUR CORE PILLARS & CAMPUS EXCELLENCE'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              {language === 'bn' 
                ? 'গল্লামারী, খুলনায় মানবিক ও যুগোপযোগী শিক্ষাদানে দৃঢ় অঙ্গীকার।' 
                : 'A commitment to holistic education and academic brilliance at Gollamari, Khulna.'}
            </p>
          </div>

          {/* 4 Pillars Grid with Background Images & Dark Overlay (No Icons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: language === 'bn' ? 'যোগ্য ও অভিজ্ঞ শিক্ষকবৃন্দ' : 'Qualified Faculty',
                desc: language === 'bn' ? 'আমাদের নিবেদিতপ্রাণ, অভিজ্ঞ ও উচ্চ প্রশিক্ষিত শিক্ষকদের পাঠদান ও দিকনির্দেশনা।' : 'Direction by our dedicated, experienced, and highly trained educators.',
                action: language === 'bn' ? 'শিক্ষকবৃন্দের সাথে পরিচিত হোন →' : 'Meet Our Faculty →',
                link: '/faculty-excellence',
                image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&fit=crop&q=80',
                badge: language === 'bn' ? 'শিক্ষক পরিষদ' : 'Faculty',
                badgeColor: 'bg-emerald-600/90 text-white',
              },
              {
                title: language === 'bn' ? 'মাল্টিমিডিয়া স্মার্ট ক্লাসরুম' : 'Multimedia Smart Classrooms',
                desc: language === 'bn' ? 'ডিজিটাল প্রজেক্টর ও উন্নত ভিজ্যুয়াল লার্নিং প্রযুক্তি সমৃদ্ধ আধুনিক ক্লাসরুম।' : 'Modern, fully integrated digital projectors and advanced visual learning tech.',
                action: language === 'bn' ? 'ক্লাসরুম গ্যালারি দেখুন →' : 'Explore Classroom Galleries →',
                link: '/smart-classrooms',
                image: 'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg',
                badge: language === 'bn' ? 'ডিজিটাল ল্যাব' : 'Smart Lab',
                badgeColor: 'bg-sky-600/90 text-white',
              },
              {
                title: language === 'bn' ? 'একাডেমিক সাফল্য ও ঐতিহ্য' : 'Academic Excellence & Tradition',
                desc: language === 'bn' ? 'বোর্ড ও বার্ষিক পরীক্ষায় ধারাবাহিক সাফল্য ও শতভাগ পাসের গৌরবময় ঐতিহ্য।' : 'A consistent history of board and annual examination achievements.',
                action: language === 'bn' ? 'মেধা ও সাফল্য রেকর্ড দেখুন →' : 'View Merit Records →',
                link: '/academic-excellence',
                image: '/hero_slider.jpg',
                badge: language === 'bn' ? 'শতভাগ পাস' : '100% Pass',
                badgeColor: 'bg-amber-600/90 text-white',
              },
              {
                title: language === 'bn' ? 'নিরাপদ ও সুশৃঙ্খল সবুজ ক্যাম্পাস' : 'Safe, Green & Disciplined Campus',
                desc: language === 'bn' ? 'খুলনার গল্লামারীতে মনোরম, শান্ত ও পরিবেশবান্ধব প্রাকৃতিক সবুজ ক্যাম্পাস।' : 'A serene, environment-friendly campus in Gollamari, Khulna.',
                action: language === 'bn' ? 'ভার্চুয়াল ট্যুর শুরু করুন →' : 'Start Virtual Tour →',
                link: '/campus-tour',
                image: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
                badge: language === 'bn' ? 'সবুজ ক্যাম্পাস' : 'Campus',
                badgeColor: 'bg-purple-600/90 text-white',
              },
            ].map((card, i) => (
              <Link 
                key={i} 
                to={card.link}
                className="relative h-80 sm:h-96 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700/30 flex flex-col justify-between p-6 group hover:-translate-y-2 cursor-pointer select-none"
              >
                {/* Background Image with Zoom on hover */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 -z-20"
                />

                {/* Dark Gradient Overlay for High-Contrast Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 group-hover:from-slate-950 group-hover:via-slate-950/60 transition-all duration-300 -z-10" />

                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md ${card.badgeColor} shadow-md`}>
                    {card.badge}
                  </span>
                  <span className="text-xs font-black text-white/50 group-hover:text-white transition">
                    0{i + 1}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="space-y-2.5">
                  <h4 className="font-extrabold text-white text-base sm:text-lg leading-snug drop-shadow-md group-hover:text-emerald-300 transition duration-300">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-200/90 font-medium leading-relaxed drop-shadow-sm line-clamp-3">
                    {card.desc}
                  </p>

                  {/* Action Link Button */}
                  <div className="pt-3 border-t border-white/15">
                    <span className="text-xs font-bold text-emerald-400 group-hover:text-white group-hover:underline inline-flex items-center gap-1.5 transition">
                      <span>{card.action}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Solid Pill Explore Admissions Button */}
          <div className="text-center mt-7">
            <Link 
              to="/admission"
              className="inline-block px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-white bg-emerald-950 hover:bg-emerald-900 shadow-md shadow-emerald-950/20 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {language === 'bn' ? 'ভর্তি সংক্রান্ত তথ্য (Explore Admissions)' : 'EXPLORE ADMISSIONS'}
            </Link>
          </div>

        </section>

        {/* Full-Width School Overview (বিদ্যালয় পরিচিতি) Section - Animated with ScrollReveal */}
        <ScrollReveal duration={0.65} distance={35}>
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-[32px] shadow-sm border border-slate-200/80 mb-14 relative overflow-hidden">
            
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
              <div className="flex items-start gap-4">
                {/* Left Round Green Icon */}
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest block mb-0.5">
                    {language === 'bn' ? 'আমাদের প্রতিষ্ঠান সম্পর্কে' : 'ABOUT OUR INSTITUTION'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {language === 'bn' ? 'বিদ্যালয় পরিচিতি ও ইতিহাস' : 'School Overview'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    {language === 'bn' ? 'ঐতিহ্য, মানবিক মূল্যবোধ ও আধুনিক শিক্ষার মেলবন্ধন' : 'Heritage, Human Values & Contemporary Academic Excellence'}
                  </p>
                  <div className="h-1 w-12 bg-emerald-600 rounded-full mt-2" />
                </div>
              </div>

              {/* Read Full History Button */}
              <Link 
                to="/about"
                className="border border-emerald-600 text-emerald-800 hover:bg-emerald-700 hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 self-start sm:self-center shadow-xs cursor-pointer active:scale-95"
              >
                <span>{language === 'bn' ? 'সম্পূর্ণ ইতিহাস পড়ুন' : 'Read Full History'}</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Middle Body: Left Image & Right Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              {/* Left Photo with Estd and Location Badges */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-md aspect-[16/11] bg-slate-900 group">
                  <img 
                    src="/hero_slider.jpg" 
                    alt="SOS Hermann Gmeiner School Students & Campus" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badges Overlaid at Bottom */}
                  <div className="absolute bottom-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-slate-950/90 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-md border border-white/10">
                      <MapPin size={13} className="text-emerald-400" />
                      <span>{language === 'bn' ? 'গল্লামারী, খুলনা' : 'Gollamari, Khulna'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Narrative & 4 Info Cards */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  {language === 'bn' ? (
                    <>
                      <strong className="text-emerald-800 font-extrabold">{settings.schoolName}</strong> ১৯৮৭ সালে খুলনার গল্লামারীতে এস ও এস চিলড্রেন্স ভিলেজ ইন্টারন্যাশনাল দ্বারা প্রতিষ্ঠিত একটি ঐতিহ্যবাহী ও শীর্ষস্থানীয় বিদ্যাপীঠ। মনোরম ও শান্ত প্রাকৃতিক পরিবেশে আধুনিক ডিজিটাল ক্লাসরুম, সমৃদ্ধ বিজ্ঞানাগার, চারিত্রিক নৈতিকতা গঠন ও যুগোপযোগী সহশিক্ষা কার্যক্রমের মাধ্যমে প্রতিটি শিক্ষার্থীকে আলোকিত ও দক্ষ বৈশ্বিক নাগরিক হিসেবে গড়ে তোলাই আমাদের পরম ব্রত।
                    </>
                  ) : (
                    <>
                      <strong className="text-emerald-800 font-extrabold">SOS Hermann Gmeiner School Khulna</strong> is a premier educational institution founded in <strong className="text-slate-900 font-extrabold">1987</strong> at Gollamari, Khulna under SOS Children's Villages International. Nestled in a lush, peaceful campus, the institution combines state-of-the-art multimedia learning, science laboratories, holistic character formation, and dynamic co-curricular activities to prepare learners for leadership in the 21st century.
                    </>
                  )}
                </p>

                {/* 4 Standalone White Info Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {/* Card 1: EIIN Code */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-100/90 shadow-sm flex flex-col items-center justify-between text-center hover:shadow-md transition">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">EIIN CODE</span>
                    <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{toBanglaNum(settings.eiinCode)}</span>
                  </div>

                {/* Card 2: Established */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100/90 shadow-sm flex flex-col items-center justify-between text-center hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                    <Calendar size={20} />
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{language === 'bn' ? 'প্রতিষ্ঠিত' : 'ESTABLISHED'}</span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{toBanglaNum(settings.establishedYear || '1987')}</span>
                </div>

                {/* Card 3: Levels */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100/90 shadow-sm flex flex-col items-center justify-between text-center hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                    <BarChart3 size={20} />
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{language === 'bn' ? 'শ্রেণি পর্যায়' : 'LEVELS'}</span>
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base mt-0.5">{language === 'bn' ? 'প্লে - ১০ম' : 'Play - 10th'}</span>
                </div>

                {/* Card 4: Campus Area */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100/90 shadow-sm flex flex-col items-center justify-between text-center hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                    <TreePine size={20} />
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{language === 'bn' ? 'ক্যাম্পাস' : 'CAMPUS AREA'}</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm mt-0.5">{language === 'bn' ? 'সবুজ ক্যাম্পাস' : 'Green Eco-Campus'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Core Values Banner Strip */}
          <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            {/* Value 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {language === 'bn' ? 'মূল্যবোধভিত্তিক শিক্ষা' : 'Value Based Education'}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {language === 'bn' ? 'চরিত্র গঠন, সহানুভূতি ও দায়িত্বশীলতা।' : 'Building character, empathy and responsibility.'}
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {language === 'bn' ? 'সার্বিক মেধা বিকাশ' : 'Holistic Development'}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {language === 'bn' ? 'পড়াশোনা, ক্রীড়া, শিল্প ও জীবনদক্ষতার সমন্বয়।' : 'Balancing academics, sports, arts and life skills.'}
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {language === 'bn' ? 'বৈশ্বিক দৃষ্টিভঙ্গি' : 'Global Perspective'}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {language === 'bn' ? 'আধুনিক বিশ্বের জন্য দক্ষ নাগরিক তৈরি।' : 'Preparing learners for a connected world.'}
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {language === 'bn' ? 'সমাজ ও মানবিক যত্ন' : 'Community & Care'}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {language === 'bn' ? 'সহমর্মিতা ও সামাজিক দায়বদ্ধতা চর্চা।' : 'Nurturing compassion and social responsibility.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>

        {/* 2-Column Grid: Left (Chairman's & Principal's Speeches) | Right (Interactive Notice Board & Quick Actions) */}
        <ScrollReveal duration={0.65} distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 items-stretch">
          
          {/* Left Column (2 spans): Chairman's Speech & Principal's Speech */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-6">

            {/* Chairman's Message Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-slate-200/90 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="border-b border-slate-100 pb-3.5 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {language === 'bn' ? 'সভাপতি মহোদয়ের বাণী' : 'Message from the Chairman'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Message from the Chairman</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                <div className="flex flex-col items-center flex-shrink-0 text-center">
                  <div className="w-28 h-34 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-slate-100 mb-2.5 bg-slate-100">
                    <img 
                      src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                      alt={settings.chairmanName || "মাকসুদা সুলতানা"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {language === 'bn' 
                      ? (settings.chairmanName || 'মাকসুদা সুলতানা') 
                      : (PERSON_NAME_EN_MAP[settings.chairmanName || ''] || 'Maksuda Sultana')}
                  </h4>
                  <p className="text-xs text-amber-700 font-bold mt-0.5">{language === 'bn' ? 'সভাপতি, গভর্নিং বডি' : 'Chairman, Governing Body'}</p>
                  <p className="text-[10px] text-slate-400 max-w-[180px] leading-tight mt-0.5">
                    {language === 'bn' ? 'এসওএস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                  </p>
                </div>

                <div className="text-slate-600 leading-relaxed text-xs sm:text-sm space-y-3 flex-1">
                  <blockquote className="font-medium text-slate-800 bg-amber-50/40 p-3.5 rounded-xl border-l-4 border-amber-500 text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-amber-600 font-serif text-2xl leading-none flex-shrink-0">“</span>
                    <p className="italic leading-relaxed">
                      {language === 'bn' 
                        ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা এর এ এস চিলড্রেন্স ভিলেজ খুলনার সবুজ আঙিনায় প্রতিষ্ঠিত। মানসম্মত শিক্ষা ও শিক্ষার পরিবেশ নিশ্চিত করাই আমাদের অঙ্গীকার।'
                        : 'SOS Hermann Gmeiner School Khulna is established within the serene campus of SOS Children\'s Village Khulna, committed to ensuring qualitative education and moral integrity.'}
                    </p>
                  </blockquote>
                  <p className="leading-relaxed text-justify">
                    {language === 'bn'
                      ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা এর এ এস চিলড্রেন্স ভিলেজ খুলনার সবুজ আঙিনায় প্রতিষ্ঠিত। মানসম্মত শিক্ষা ও শিক্ষার পরিবেশ নিশ্চিত করার লক্ষ্য নিয়ে আমরা প্রতিজ্ঞাবদ্ধ।'
                      : 'SOS Hermann Gmeiner School Khulna is dedicated to delivering exemplary education in a peaceful, supportive atmosphere.'}
                  </p>
                  <p className="leading-relaxed text-justify">
                    {language === 'bn'
                      ? 'বিদ্যালয়ের সার্বিক কার্যক্রম পরিচালিত হচ্ছে সেই আদলে। শিক্ষার্থীদের মানসিক চেতনায় উন্নত করতে সহযোগিতার চেষ্টাই আমাদের মূল লক্ষ্য। দক্ষ শিক্ষকমণ্ডলী ও বিস্তৃত সুরক্ষিত পরিবেশ বিদ্যালয়ের ভিত্তি।'
                      : 'The institution guides students toward intellectual and moral excellence through modern pedagogy, disciplined leadership, and dedicated educators.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Principal's Message Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm border border-slate-200/90 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="border-b border-slate-100 pb-3.5 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {language === 'bn' ? 'অধ্যক্ষের বাণী' : 'Message from the Principal'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Message from the Principal</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                <div className="flex flex-col items-center flex-shrink-0 text-center">
                  <div className="w-28 h-34 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shadow-sm border-2 border-slate-100 mb-2.5 bg-slate-100">
                    <img 
                      src={settings.headmasterImage || "https://soshgskhulna.edu.bd/media/163/P.sir...jpg"} 
                      alt={settings.headmasterName || "ইন্দ্রজিৎ কুমার মন্ডল"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {language === 'bn' 
                      ? (settings.headmasterName || 'ইন্দ্রজিৎ কুমার মন্ডল') 
                      : (PERSON_NAME_EN_MAP[settings.headmasterName || ''] || 'Indrajit Kumar Mondal')}
                  </h4>
                  <p className="text-xs text-emerald-800 font-bold mt-0.5">{language === 'bn' ? 'অধ্যক্ষ' : 'Principal'}</p>
                  <p className="text-[10px] text-slate-400 max-w-[180px] leading-tight mt-0.5">
                    {language === 'bn' ? 'এসওএস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                  </p>
                </div>

                <div className="text-slate-600 leading-relaxed text-xs sm:text-sm space-y-3 flex-1">
                  <blockquote className="font-medium text-slate-800 bg-emerald-50/40 p-3.5 rounded-xl border-l-4 border-emerald-500 text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-emerald-600 font-serif text-2xl leading-none flex-shrink-0">“</span>
                    <p className="italic leading-relaxed">
                      {language === 'bn' 
                        ? '“Honesty is education, education is peace and peace is progress — সততা, শৃঙ্খলা ও মননশীলতার সমন্বয়ে সুনাগরিক গড়ে তোলাই আমাদের লক্ষ্য।”'
                        : '“Honesty is education, education is peace and peace is progress — Fostering disciplined, moral, and capable future citizens is our core mission.”'}
                    </p>
                  </blockquote>
                  <p className="leading-relaxed text-justify">
                    {language === 'bn'
                      ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা মানসম্মত শিক্ষা নিশ্চিতকরণে প্রতিষ্ঠিত। ১৯৮৭ সালে প্রতিষ্ঠিত এই বিদ্যালয়টি পরিচালনায় রয়েছে দক্ষ গভর্নিং বডি ও প্রশিক্ষণপ্রাপ্ত নিবেদিতপ্রাণ শিক্ষকমণ্ডলী।'
                      : 'SOS Hermann Gmeiner School Khulna was established in 1987 to guarantee quality education steered by a proficient governing board and devoted educators.'}
                  </p>
                  <p className="leading-relaxed text-justify">
                    {language === 'bn'
                      ? 'বিদ্যালয়ের শিক্ষার্থীদের আনন্দময় পাঠদান উপযোগী পরিবেশ নিশ্চিত করা হয়েছে। শিক্ষার মানোন্নয়ন ও শিক্ষার্থীদের যোগ্য মানবসম্পদে পরিণত করতে আমরা প্রতিশ্রুতিবদ্ধ।'
                      : 'We provide an inspiring learning environment focused on cognitive development, creative pursuits, and molding students into valuable human resources.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (1 span): Notice Board & Quick Access */}
          <div className="flex flex-col justify-between gap-6">
            {/* Notice Board Box - Fully Filled Height */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-200/90 relative flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Calendar size={17} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {language === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board'}
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      {language === 'bn' ? 'সর্বশেষ বিজ্ঞপ্তি ও নির্দেশনা' : 'Latest announcements'}
                    </p>
                  </div>
                </div>
                <Link 
                  to="/notices" 
                  className="text-xs text-emerald-800 hover:text-emerald-900 font-bold bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2.5 py-1 rounded-xl transition"
                >
                  {language === 'bn' ? 'সবগুলো দেখুন' : 'View All'}
                </Link>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 pb-2.5 mb-3 border-b border-slate-100 overflow-x-auto text-xs scrollbar-none">
                {[
                  { key: 'All', labelBn: 'সকল', labelEn: 'All' },
                  { key: 'General', labelBn: 'সাধারণ', labelEn: 'General' },
                  { key: 'Exam', labelBn: 'পরীক্ষা', labelEn: 'Exam' },
                  { key: 'Admission', labelBn: 'ভর্তি', labelEn: 'Admission' },
                  { key: 'Event', labelBn: 'ইভেন্ট', labelEn: 'Event' },
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveNoticeTab(tab.key as any)}
                    className={`px-2.5 py-0.5 rounded-lg font-bold transition whitespace-nowrap cursor-pointer text-[11px] ${
                      activeNoticeTab === tab.key 
                        ? 'bg-emerald-800 text-white shadow-xs' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {language === 'bn' ? tab.labelBn : tab.labelEn}
                  </button>
                ))}
              </div>

              {/* Notice List Container - Clean Manual Scroll with Custom Scrollbar */}
              <div className="relative flex-1 min-h-[340px] max-h-[380px] overflow-y-auto pr-1.5 space-y-2.5 rounded-2xl bg-slate-50/40 p-1.5 border border-slate-100/80 custom-notice-scrollbar">
                <style>{`
                  .custom-notice-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #047857 #f1f5f9;
                  }
                  .custom-notice-scrollbar::-webkit-scrollbar {
                    width: 5px;
                  }
                  .custom-notice-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 9999px;
                  }
                  .custom-notice-scrollbar::-webkit-scrollbar-thumb {
                    background: #047857;
                    border-radius: 9999px;
                  }
                  .custom-notice-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #065f46;
                  }
                `}</style>
                
                {filteredNotices.map((notice) => {
                  const dateInfo = renderNoticeDate(notice.date);
                  const badgeColor = 
                    notice.type === 'General' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    notice.type === 'Exam' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    notice.type === 'Admission' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                    'bg-purple-50 text-purple-700 border-purple-200';

                  return (
                    <Link 
                      key={notice.id} 
                      to="/notices" 
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-white hover:bg-emerald-50/80 transition-all duration-200 group border border-slate-100 shadow-xs hover:shadow-sm cursor-pointer"
                    >
                      <div className="bg-emerald-50 text-emerald-800 p-1.5 rounded-xl text-center w-12 flex-shrink-0 border border-emerald-100/80 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                        <span className="block text-base font-black leading-none">{dateInfo.day}</span>
                        <span className="block text-[9px] uppercase font-bold mt-0.5">{dateInfo.month}</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-bold text-slate-800 group-hover:text-emerald-700 text-xs sm:text-[13px] line-clamp-1 leading-tight">
                          {language === 'bn' ? notice.title : (notice.titleEn || NOTICE_EN_MAP[notice.title] || notice.title)}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${badgeColor}`}>
                            {notice.type}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                            <Calendar size={10} /> {toBanglaNum(notice.date.split('-').reverse().join('/'))}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Full-Width CTA */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
                <Link 
                  to="/notices" 
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>{language === 'bn' ? 'সব নোটিশ দেখুন →' : 'View All Notices →'}</span>
                </Link>
              </div>
            </div>

            {/* Quick Link Cards Grid - Compact Sleek 1-Line Layout */}
            <div className="bg-white p-4 sm:p-4.5 rounded-3xl shadow-sm border border-slate-200/90">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 pb-1.5 border-b border-slate-100 flex items-center gap-1.5">
                <Link2 size={16} className="text-emerald-700" /> {language === 'bn' ? 'প্রয়োজনীয় লিংক' : 'Quick Access'}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {/* 1. Class Routine */}
                <Link 
                  to="/academic" 
                  className="py-2 px-1 bg-slate-50 hover:bg-emerald-50 border border-slate-100 rounded-xl font-bold text-slate-700 hover:text-emerald-800 transition-all flex flex-col items-center text-center gap-1 hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center justify-center group-hover:scale-105 transition">
                    <Calendar size={15} />
                  </div>
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">
                    {language === 'bn' ? 'ক্লাস রুটিন' : 'Routine'}
                  </span>
                </Link>

                {/* 2. Faculty Directory */}
                <Link 
                  to="/faculty" 
                  className="py-2 px-1 bg-slate-50 hover:bg-blue-50 border border-slate-100 rounded-xl font-bold text-slate-700 hover:text-blue-800 transition-all flex flex-col items-center text-center gap-1 hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/70 flex items-center justify-center group-hover:scale-105 transition">
                    <Users size={15} />
                  </div>
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">
                    {language === 'bn' ? 'শিক্ষক তালিকা' : 'Faculty'}
                  </span>
                </Link>

                {/* 3. Exam Schedules */}
                <Link 
                  to="/result" 
                  className="py-2 px-1 bg-slate-50 hover:bg-purple-50 border border-slate-100 rounded-xl font-bold text-slate-700 hover:text-purple-800 transition-all flex flex-col items-center text-center gap-1 hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 border border-purple-200/70 flex items-center justify-center group-hover:scale-105 transition">
                    <ShieldCheck size={15} />
                  </div>
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">
                    {language === 'bn' ? 'পরীক্ষা সূচি' : 'Exams'}
                  </span>
                </Link>

                {/* 4. Download Center */}
                <Link 
                  to="/downloads" 
                  className="py-2 px-1 bg-slate-50 hover:bg-amber-50 border border-slate-100 rounded-xl font-bold text-slate-700 hover:text-amber-800 transition-all flex flex-col items-center text-center gap-1 hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/70 flex items-center justify-center group-hover:scale-105 transition">
                    <Download size={15} />
                  </div>
                  <span className="text-[10px] font-bold leading-tight line-clamp-1">
                    {language === 'bn' ? 'ডাউনলোড' : 'Downloads'}
                  </span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </ScrollReveal>

        {/* 4. AIMS & KEY OBJECTIVES (Animated with ScrollStagger) */}
        <ScrollReveal duration={0.6} distance={25} className="mb-20 relative">
          {/* Subtle Background Target Watermark on Top-Right */}
          <div className="absolute top-0 right-4 text-slate-100/70 pointer-events-none hidden md:block select-none">
            <Target size={170} strokeWidth={1} />
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/90 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Target size={14} className="text-emerald-700" /> 
              {language === 'bn' ? 'আমাদের লক্ষ্য ও মূল উদ্দেশ্য' : 'OUR AIM & KEY OBJECTIVES'}
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {language === 'bn' ? 'আমাদের লক্ষ্য ও মূল উদ্দেশ্য' : 'Our Aim & Key Objectives'}
            </h3>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mx-auto mt-3 mb-3" />
            <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              {language === 'bn'
                ? 'সততা, শৃঙ্খলা ও মননশীলতার সমন্বয়ে সুনাগরিক গড়ে তোলাই আমাদের পথপ্রদর্শক।'
                : 'Honesty is education, education is peace and peace is progress — Guiding our path.'}
            </p>
          </div>

          <ScrollStaggerContainer staggerDelay={0.09} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                icon: <Leaf size={24} className="text-emerald-600" />,
                topBorder: 'bg-emerald-600',
                iconBg: 'bg-emerald-50 border-emerald-100',
                lineBg: 'bg-emerald-600',
                buttonBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
                title: language === 'bn' ? 'সুপ্ত প্রতিভার পূর্ণ বিকাশ' : 'Full Potential Growth',
                desc: language === 'bn' 
                  ? 'শিক্ষার্থীদের শারীরিক, মানসিক, সামাজিক ও বুদ্ধিবৃত্তিক ক্ষমতার সামঞ্জস্যপূর্ণ উৎকর্ষ সাধন।' 
                  : 'To enable each student to progress physically, emotionally, socially, and intellectually.',
                link: '/about'
              },
              {
                icon: <Heart size={24} className="text-blue-600 fill-blue-50" />,
                topBorder: 'bg-blue-600',
                iconBg: 'bg-blue-50 border-blue-100',
                lineBg: 'bg-blue-600',
                buttonBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
                title: language === 'bn' ? 'সামাজিক অবদান ও মূল্যবোধ' : 'Social Contribution',
                desc: language === 'bn' 
                  ? 'শিক্ষার্থীদের নিজ স্বার্থের ঊর্ধ্বে উঠে সমাজের উন্নয়ন ও কল্যাণে সক্রিয় অবদান রাখতে উদ্বুদ্ধ করা।' 
                  : 'To enable students to see beyond their own needs and contribute to the betterment of society.',
                link: '/about'
              },
              {
                icon: <Shield size={24} className="text-purple-600" />,
                topBorder: 'bg-purple-600',
                iconBg: 'bg-purple-50 border-purple-100',
                lineBg: 'bg-purple-600',
                buttonBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
                title: language === 'bn' ? 'শিশু সুরক্ষা ও যত্ন' : 'Child Care & Safety',
                desc: language === 'bn' 
                  ? 'শৈশবের অনন্যতাকে মূল্যায়ন করে একটি নিরাপদ, সুরক্ষিত ও অনুপ্রেরণাদায়ক শিক্ষার পরিবেশ নিশ্চিত করা।' 
                  : 'Recognizing the uniqueness of early childhood and fostering a protective, inspiring learning atmosphere.',
                link: '/about'
              },
              {
                icon: <Award size={24} className="text-amber-600" />,
                topBorder: 'bg-amber-500',
                iconBg: 'bg-amber-50 border-amber-100',
                lineBg: 'bg-amber-500',
                buttonBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
                title: language === 'bn' ? 'সবার জন্য সমান সুযোগ' : 'Equal Opportunity',
                desc: language === 'bn' 
                  ? 'মেধা ও যোগ্যতার ভিত্তিতে সকল শিক্ষার্থীকে যেকোনো ধরনের বৈষম্যহীন মানসম্মত শিক্ষার সুযোগ প্রদান।' 
                  : 'Providing equal opportunity to all children on the basis of merit without any form of discrimination.',
                link: '/about'
              }
            ].map((card, i) => (
              <ScrollStaggerItem 
                key={i} 
                className="bg-white rounded-3xl border border-slate-100/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 group"
              >
                {/* Top Colored Accent Bar */}
                <div className={`h-1.5 w-full ${card.topBorder} absolute top-0 left-0`} />

                {/* Subtle Dot Grid Background Pattern in top-right */}
                <div 
                  className="absolute top-2 right-2 w-24 h-24 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '8px 8px'
                  }}
                />

                <div>
                  {/* Circular Icon Button */}
                  <div className={`w-14 h-14 rounded-full ${card.iconBg} border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs`}>
                    {card.icon}
                  </div>

                  {/* Accent Divider Line */}
                  <div className={`w-8 h-1 ${card.lineBg} rounded-full mb-4`} />

                  {/* Title & Description */}
                  <h4 className="font-extrabold text-slate-900 text-lg mb-2.5 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed text-justify">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Action Circle Button */}
                <div className="pt-6 mt-auto">
                  <Link 
                    to={card.link} 
                    className={`w-9 h-9 rounded-full ${card.buttonBg} transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer active:scale-95`}
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </ScrollReveal>

        {/* 7. CAMPUS SHOWCASE & PHOTO GALLERY (12 Stacked Deck Cards Matching Reference Image) */}
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm mb-12 relative">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-emerald-600 rounded-full inline-block" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {language === 'bn' ? 'ক্যাম্পাস ফটো গ্যালারি ও অ্যালবাম' : 'Campus Showcase & Photo Gallery'}
              </h3>
            </div>
            <Link 
              to="/gallery" 
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'bn' ? 'সকল ছবি দেখুন' : 'View Full Gallery'}</span>
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* 12 Stacked Deck Photo Album Cards Grid (4 Columns x 3 Rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {[
              {
                id: '1',
                title: language === 'bn' ? 'বার্ষিক ক্রীড়া ও সাংস্কৃতিক অনুষ্ঠান ২০২৫' : 'Annual Sports & Cultural Program 2025',
                date: '18 FEB 2025',
                dateBn: '১৮ ফেব্রুয়ারি ২০২৫',
                photosCount: 16,
                cover: '/hero_slider.jpg',
                stack1: '/hero_slider_2.jpg',
                stack2: '/hero_slider_3.jpg'
              },
              {
                id: '2',
                title: language === 'bn' ? 'বিজ্ঞান মেলা ও রোবোটিক্স প্রদর্শনী' : 'Science Fair & Exhibition',
                date: '20 JAN 2025',
                dateBn: '২০ জানুয়ারি ২০২৫',
                photosCount: 16,
                cover: '/hero_slider_2.jpg',
                stack1: '/hero_slider.jpg',
                stack2: '/hero_slider_3.jpg'
              },
              {
                id: '3',
                title: language === 'bn' ? 'বার্ষিক পুরস্কার বিতরণী ও কৃতি সংবর্ধনা ২০২৫' : 'Prize Giving Ceremony 2025',
                date: '22 JAN 2025',
                dateBn: '২২ জানুয়ারি ২০২৫',
                photosCount: 16,
                cover: '/hero_slider_3.jpg',
                stack1: '/hero_slider_2.jpg',
                stack2: '/hero_slider.jpg'
              },
              {
                id: '4',
                title: language === 'bn' ? 'স্মার্ট ক্লাসরুম ও সহশিক্ষা কার্যক্রম' : 'Classroom Activities',
                date: '15 JAN 2025',
                dateBn: '১৫ জানুয়ারি ২০২৫',
                photosCount: 20,
                cover: 'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg',
                stack1: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
                stack2: '/hero_slider.jpg'
              },
              {
                id: '5',
                title: language === 'bn' ? 'আন্তর্জাতিক মাতৃভাষা দিবস ও প্রভাতফেরি' : 'International Mother Language Day',
                date: '21 FEB 2025',
                dateBn: '২১ ফেব্রুয়ারি ২০২৫',
                photosCount: 18,
                cover: 'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
                stack1: '/hero_slider_2.jpg',
                stack2: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg'
              },
              {
                id: '6',
                title: language === 'bn' ? 'স্কাউট ক্যাম্পুরি ও সামাজিক নেতৃত্ব প্রশিক্ষণ' : 'Scout Camporee & Youth Training',
                date: '12 JAN 2025',
                dateBn: '১২ জানুয়ারি ২০২৫',
                photosCount: 14,
                cover: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&fit=crop&q=80',
                stack1: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
                stack2: '/hero_slider.jpg'
              },
              {
                id: '7',
                title: language === 'bn' ? 'এস.এস.সি কৃতি শিক্ষার্থী সংবর্ধনা ও সম্মাননা' : 'SSC Brilliant Student Reception',
                date: '25 MAY 2025',
                dateBn: '২৫ মে ২০২৫',
                photosCount: 24,
                cover: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop&q=80',
                stack1: '/hero_slider_2.jpg',
                stack2: '/hero_slider_3.jpg'
              },
              {
                id: '8',
                title: language === 'bn' ? 'ক্যাম্পাস বৃক্ষরোপণ অভিযান ও পরিবেশ দিবস' : 'Campus Greenery & Tree Plantation',
                date: '05 JUN 2025',
                dateBn: '০৫ জুন ২০২৫',
                photosCount: 12,
                cover: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
                stack1: '/hero_slider_2.jpg',
                stack2: '/hero_slider.jpg'
              },
              {
                id: '9',
                title: language === 'bn' ? 'বার্ষিক বনভোজন ও সুন্দরবন শিক্ষাসফর' : 'Annual Study Tour & Picnic',
                date: '28 JAN 2025',
                dateBn: '২৮ জানুয়ারি ২০২৫',
                photosCount: 28,
                cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&fit=crop&q=80',
                stack1: '/hero_slider_3.jpg',
                stack2: '/hero_slider.jpg'
              },
              {
                id: '10',
                title: language === 'bn' ? 'জাতীয় বই বিতরণ উৎসব ও নবীন বরণ' : 'National Book Festival 2025',
                date: '01 JAN 2025',
                dateBn: '০১ জানুয়ারি ২০২৫',
                photosCount: 15,
                cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&fit=crop&q=80',
                stack1: '/hero_slider_2.jpg',
                stack2: '/hero_slider_3.jpg'
              },
              {
                id: '11',
                title: language === 'bn' ? 'বার্ষিক শিশু চিত্রাঙ্কন ও চারুকলা প্রদর্শনী' : 'Children Art & Painting Exhibition',
                date: '08 APR 2025',
                dateBn: '০৮ এপ্রিল ২০২৫',
                photosCount: 19,
                cover: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&fit=crop&q=80',
                stack1: '/hero_slider.jpg',
                stack2: '/hero_slider_2.jpg'
              },
              {
                id: '12',
                title: language === 'bn' ? 'আন্তঃস্কুল ভলিবল চ্যাম্পিয়নশিপ ও ট্রফি' : 'Volleyball Championship Trophy',
                date: '10 MAR 2025',
                dateBn: '১০ মার্চ ২০২৫',
                photosCount: 17,
                cover: '/hero_slider.jpg',
                stack1: '/hero_slider_3.jpg',
                stack2: '/hero_slider_2.jpg'
              }
            ].map((album) => (
              <Link 
                key={album.id}
                to="/gallery" 
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                {/* Stacked Photo Deck Container */}
                <div className="relative w-full h-44 mb-5 flex items-center justify-center pt-2">
                  {/* Layer 2 (Bottom Stack, Tilted Left) */}
                  <div className="absolute w-[88%] h-36 bg-slate-200 rounded-2xl overflow-hidden border-2 border-white shadow-md transform -rotate-6 top-1 opacity-70 group-hover:-rotate-8 transition-transform">
                    <img src={album.stack2} alt="Back Stack" className="w-full h-full object-cover" />
                  </div>
                  {/* Layer 1 (Middle Stack, Tilted Right) */}
                  <div className="absolute w-[92%] h-38 bg-slate-100 rounded-2xl overflow-hidden border-2 border-white shadow-md transform rotate-6 top-2 opacity-85 group-hover:rotate-8 transition-transform">
                    <img src={album.stack1} alt="Middle Stack" className="w-full h-full object-cover" />
                  </div>
                  {/* Front Main Photo Card */}
                  <div className="relative w-[96%] h-40 bg-white rounded-2xl overflow-hidden border-2 border-white shadow-lg z-10">
                    <img 
                      src={album.cover} 
                      alt={album.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    {/* Small Green Gallery Icon Badge on bottom-left */}
                    <div className="absolute bottom-2 left-2 w-7 h-7 rounded-lg bg-white/95 text-emerald-700 flex items-center justify-center shadow-md">
                      <ImageIcon size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-emerald-700 transition-colors">
                    {album.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                    <span>{language === 'bn' ? album.dateBn : album.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <Clock size={12} />
                    <span>{language === 'bn' ? `${toBanglaNum(album.photosCount)} টি ছবি` : `${album.photosCount} Photos`}</span>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 8. SOLID RICH GREEN INSTITUTIONAL STATS COUNTER STRIP (Animated with ScrollReveal) */}
        <ScrollReveal duration={0.65} distance={25}>
          <div className="bg-[#044e3a] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-between">
              {/* 1. Established */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-200 flex items-center justify-center flex-shrink-0">
                  <School size={22} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{toBanglaNum(1987)}</h4>
                  <p className="text-xs text-emerald-200/90 font-medium">{language === 'bn' ? 'স্থাপিত' : 'Established'}</p>
                </div>
              </div>

              {/* 2. EIIN Number */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-200 flex items-center justify-center flex-shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{toBanglaNum(117188)}</h4>
                  <p className="text-xs text-emerald-200/90 font-medium">{language === 'bn' ? 'ইআইআইএন নম্বর' : 'EIIN Number'}</p>
                </div>
              </div>

              {/* 3. Qualified Teachers */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-200 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{toBanglaNum('25+')}</h4>
                  <p className="text-xs text-emerald-200/90 font-medium">{language === 'bn' ? 'দক্ষ শিক্ষক-শিক্ষিকা' : 'Qualified Teachers'}</p>
                </div>
              </div>

              {/* 4. Students */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-200 flex items-center justify-center flex-shrink-0">
                  <Users size={22} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{toBanglaNum('1200+')}</h4>
                  <p className="text-xs text-emerald-200/90 font-medium">{language === 'bn' ? 'শিক্ষার্থী' : 'Students'}</p>
                </div>
              </div>

              {/* 5. Pass Tradition */}
              <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-200 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">{toBanglaNum('100%')}</h4>
                  <p className="text-xs text-emerald-200/90 font-medium">{language === 'bn' ? 'পাস ঐতিহ্য' : 'Pass Tradition'}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Home;
