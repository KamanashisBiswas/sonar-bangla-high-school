import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, Calendar, Users, BookOpen, Award, 
  ExternalLink, CheckCircle, Smartphone, Globe, 
  Monitor, Library, Play, Image as ImageIcon,
  Clock, MapPin, Trophy, Sparkles, GraduationCap, BarChart3,
  Layers, Briefcase, Activity, ShieldCheck, FileText, ChevronRight, ChevronLeft,
  Target, Compass, HeartHandshake, Phone, Headphones, Laptop, Presentation, TreePine
} from 'lucide-react';

const NOTICE_EN_MAP: Record<string, string> = {
  'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫': 'Summer Vacation & Holiday Notice 2025',
  'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংগ্রহ': 'SSC Examination 2025 Results & Marksheet Distribution',
  'প্রেপ-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫': 'Online Admission Open for Prep-1 & Class 6 (Session 2025)',
  'আন্তর্জাতিক মাতৃভাষা দিবস ও বার্ষিক ক্রীড়া উৎসব উদযাপন': 'International Mother Language Day & Annual Sports Meet',
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
    if (activeNoticeTab === 'All') return notices.slice(0, 6);
    return notices.filter(n => n.type === activeNoticeTab).slice(0, 6);
  }, [notices, activeNoticeTab]);

  // Calculate Class-wise statistics
  const classStats = useMemo(() => {
    const classes = [
      { name: '৬ষ্ঠ', enName: 'Class 6', color: 'emerald', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      { name: '৭ম', enName: 'Class 7', color: 'blue', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      { name: '৮ম', enName: 'Class 8', color: 'amber', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
      { name: '৯ম', enName: 'Class 9', color: 'purple', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
      { name: '১০ম', enName: 'Class 10', color: 'rose', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
    ];
    return classes.map(cls => ({
      className: language === 'bn' ? cls.name : cls.enName,
      count: students.filter(s => s.class === cls.name || s.class === cls.name.replace('ম', '') || s.class === cls.name.replace('ষ্ঠ', '')).length,
      icon: GraduationCap,
      bg: cls.bg,
      text: cls.text,
      border: cls.border
    }));
  }, [students, language]);

  // Co-curricular activities from soshgskhulna.edu.bd
  const annualActivities = [
    {
      date: language === 'bn' ? '০১ জানুয়ারি' : '01 January',
      title: language === 'bn' ? 'বই বিতরণ উৎসব ও প্রতিষ্ঠাবার্ষিকী' : 'Book Distribution & Foundation Day',
      category: language === 'bn' ? 'জাতীয় উৎসব' : 'Foundation',
    },
    {
      date: language === 'bn' ? 'জানুয়ারি (৩য় সপ্তাহ)' : '3rd Week of Jan',
      title: language === 'bn' ? 'হারম্যান মেইনার স্কলারশিপ মূল্যায়ন' : 'Dr. Hermann Gmeiner Scholarship',
      category: language === 'bn' ? 'মেধা বৃত্তি' : 'Scholarship',
    },
    {
      date: language === 'bn' ? 'ফেব্রুয়ারি (২য় সপ্তাহ)' : '2nd Week of Feb',
      title: language === 'bn' ? 'বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক উৎসব' : 'Annual Sports & Cultural Meet',
      category: language === 'bn' ? 'ক্রীড়া ও সংস্কৃতি' : 'Sports & Culture',
    },
    {
      date: language === 'bn' ? '২১ ফেব্রুয়ারি' : '21 February',
      title: language === 'bn' ? 'আন্তর্জাতিক মাতৃভাষা ও শহীদ দিবস উদযাপন' : 'International Mother Language Day',
      category: language === 'bn' ? 'জাতীয় দিবস' : 'National Day',
    },
    {
      date: language === 'bn' ? 'ফেব্রুয়ারি (৪র্থ সপ্তাহ)' : '4th Week of Feb',
      title: language === 'bn' ? 'বার্ষিক শিক্ষাসফর ও বিজ্ঞান মেলা' : 'Annual Study Tour & Science Fair',
      category: language === 'bn' ? 'সহশিক্ষা' : 'Co-Curricular',
    },
    {
      date: language === 'bn' ? '২৬ মার্চ' : '26 March',
      title: language === 'bn' ? 'মহান স্বাধীনতা ও জাতীয় দিবস উদযাপন' : 'Independence & National Day',
      category: language === 'bn' ? 'জাতীয় দিবস' : 'National Day',
    }
  ];

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
    <div className="bg-slate-50 relative">
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

        {/* Full-Width School Overview (বিদ্যালয় পরিচিতি) Section - Matching Reference Mockup */}
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
              className="border border-emerald-600 text-emerald-800 hover:bg-emerald-700 hover:text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 self-start sm:self-center shadow-xs cursor-pointer"
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

        {/* 2-Column Grid: Left (Principal Message & Success) | Right (Interactive Notice Board & Quick Actions) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Left Column (2 spans): Chairman's Speech, Principal's Speech & Success highlights */}
          <div className="lg:col-span-2 space-y-8">

            {/* Chairman's Message Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 relative overflow-hidden">
              <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
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

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col items-center flex-shrink-0 text-center">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 mb-3 bg-slate-100">
                    <img 
                      src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                      alt={settings.chairmanName || "মাকসুদা সুলতানা"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{settings.chairmanName || "মাকসুদা সুলতানা"}</h4>
                  <p className="text-xs text-amber-700 font-bold">{language === 'bn' ? 'সভাপতি, গভর্নিং বডি' : 'Chairman, Governing Body'}</p>
                  <p className="text-[10px] text-slate-400 max-w-[180px] leading-tight mt-0.5">
                    {language === 'bn' ? 'প্রকল্প পরিচালক, এস ও এস চিলড্রেন্স ভিলেজ খুলনা' : "Project Director, SOS Children's Village Khulna"}
                  </p>
                </div>

                <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                  <blockquote className="italic font-medium text-slate-800 bg-amber-50/50 p-4 rounded-xl border-l-4 border-amber-500 text-xs sm:text-sm">
                    {language === 'bn' 
                      ? '"এস ও এস হারম্যান মেইনার স্কুল খুলনা এস ও এস চিলড্রেন্স ভিলেজ খুলনার সবুজ আঙিনায় প্রতিষ্ঠিত। মানসম্মত শিক্ষা ও শিক্ষার পরিবেশ নিশ্চিত করাই আমাদের অঙ্গীকার।"'
                      : '"SOS Hermann Gmeiner School Khulna is established within the green serene campus of SOS Children\'s Village Khulna, committed to ensuring qualitative education and moral integrity."'
                    }
                  </blockquote>
                  <p className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                    {settings.chairmanMessage}
                  </p>
                </div>
              </div>
            </div>

            {/* Principal's Message Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 relative overflow-hidden">
              <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">{t.home.headmasterTitle}</h3>
                    <p className="text-xs text-slate-500 font-medium">{t.home.headmasterSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex flex-col items-center flex-shrink-0 text-center">
                  <div className="w-36 h-44 rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 mb-3 bg-slate-100">
                    <img 
                      src={settings.headmasterImage} 
                      alt={settings.headmasterName} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{settings.headmasterName}</h4>
                  <p className="text-xs text-emerald-800 font-bold">{t.adminPage.headmaster}</p>
                  <p className="text-[11px] text-slate-400">{language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}</p>
                </div>

                <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                  <blockquote className="italic font-medium text-slate-800 bg-emerald-50/50 p-4 rounded-xl border-l-4 border-emerald-500 text-xs sm:text-sm">
                    {language === 'bn' 
                      ? '"Honesty is education, education is peace and peace is progress — সততা, শৃঙ্খলা ও মানবিক গুণাবলীর সমন্বয়ে সুনাগরিক গড়ে তোলাই আমাদের লক্ষ্য।"'
                      : '"Honesty is education, education is peace and peace is progress — Our mission is to foster disciplined, moral, and capable future citizens."'
                    }
                  </blockquote>
                  <p className="whitespace-pre-line leading-relaxed text-xs sm:text-sm">
                    {settings.headmasterMessage}
                  </p>
                  <div className="pt-2">
                    <Link 
                      to="/about" 
                      className="text-emerald-700 font-bold text-xs hover:text-emerald-800 inline-flex items-center gap-1.5 group cursor-pointer"
                    >
                      {t.home.readMoreAbout} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights 2-Col - Clean Light Theme */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Achievement Card */}
              <div className="bg-white p-6 rounded-3xl border border-emerald-200/90 shadow-sm hover:shadow-md transition relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-emerald-100/50 group-hover:scale-110 transition-transform pointer-events-none">
                  <Trophy size={110} />
                </div>
                <div className="relative z-10 flex items-center gap-2.5 mb-3">
                  <span className="p-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl">
                    <Trophy size={18} />
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{t.home.achievementCardTitle}</h4>
                </div>
                <p className="relative z-10 text-slate-600 text-xs mb-6 leading-relaxed">
                  {t.home.achievementCardDesc}
                </p>
                <div className="relative z-10 flex items-end justify-between pt-3 border-t border-slate-100">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-emerald-700">{toBanglaNum('98.5%')}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{t.home.achievementStatLabel}</p>
                  </div>
                  <Link 
                    to="/result" 
                    className="relative z-20 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition shadow-sm inline-flex items-center gap-1 cursor-pointer"
                  >
                    {t.home.achievementBtn}
                  </Link>
                </div>
              </div>

              {/* Smart Digital Campus Card */}
              <div className="bg-white p-6 rounded-3xl border border-blue-200/90 shadow-sm hover:shadow-md transition relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-blue-100/50 group-hover:scale-110 transition-transform pointer-events-none">
                  <Smartphone size={110} />
                </div>
                <div className="relative z-10 flex items-center gap-2.5 mb-3">
                  <span className="p-2.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-xl">
                    <Globe size={18} />
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">{t.home.smartCampusTitle}</h4>
                </div>
                <p className="relative z-10 text-slate-600 text-xs mb-6 leading-relaxed">
                  {t.home.smartCampusDesc}
                </p>
                <div className="relative z-10 flex items-end justify-between pt-3 border-t border-slate-100">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-blue-700">{toBanglaNum('100%')}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{t.home.smartCampusStatLabel}</p>
                  </div>
                  <Link 
                    to="/admission" 
                    className="relative z-20 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition shadow-sm inline-flex items-center gap-1 cursor-pointer"
                  >
                    {t.home.smartCampusBtn}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (1 span): Notice Board & Quick Access */}
          <div className="space-y-6">
            {/* Notice Board Box */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/90 relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{t.home.noticeBoardTitle}</h3>
                    <p className="text-[11px] text-slate-400">{t.home.noticeBoardSubtitle}</p>
                  </div>
                </div>
                <Link 
                  to="/notices" 
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition"
                >
                  {t.home.tabAll}
                </Link>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 pb-3 mb-3 border-b border-slate-100 overflow-x-auto text-xs">
                {(['All', 'General', 'Exam', 'Admission'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveNoticeTab(tab)}
                    className={`px-3 py-1 rounded-lg font-semibold transition ${
                      activeNoticeTab === tab 
                        ? 'bg-emerald-700 text-white' 
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {tab === 'All' ? t.home.tabAll : tab === 'General' ? t.home.tabGeneral : tab === 'Exam' ? t.home.tabExam : t.home.tabAdmission}
                  </button>
                ))}
              </div>

              {/* Notice List */}
              <div className="space-y-3.5">
                {filteredNotices.map((notice) => {
                  const dateInfo = renderNoticeDate(notice.date);
                  return (
                    <Link 
                      key={notice.id} 
                      to="/notices" 
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group border border-transparent hover:border-slate-200"
                    >
                      <div className="bg-emerald-50 text-emerald-800 p-2 rounded-xl text-center min-w-[50px] border border-emerald-100 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <span className="block text-base font-bold leading-tight">{dateInfo.day}</span>
                        <span className="block text-[9px] uppercase font-semibold">{dateInfo.month}</span>
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-slate-800 group-hover:text-emerald-700 text-xs line-clamp-2 leading-snug">
                          {language === 'bn' ? notice.title : (notice.titleEn || NOTICE_EN_MAP[notice.title] || notice.title)}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {notice.type}
                          </span>
                          <span className="text-[10px] text-slate-400">{toBanglaNum(notice.date.split('-').reverse().join('/'))}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-center">
                <Link 
                  to="/notices" 
                  className="w-full bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
                >
                  {t.home.allNotices} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Quick Link Cards Grid */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/90">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <Layers size={18} className="text-emerald-700" /> {t.home.quickLinks}
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <Link to="/academic" className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 rounded-xl font-bold text-slate-700 hover:text-emerald-800 transition flex flex-col items-center text-center gap-1.5">
                  <Calendar size={18} className="text-emerald-700"/>
                  <span>{t.home.viewRoutine}</span>
                </Link>
                <Link to="/result" className="p-3 bg-slate-50 hover:bg-amber-50 border border-slate-200/80 rounded-xl font-bold text-slate-700 hover:text-amber-800 transition flex flex-col items-center text-center gap-1.5">
                  <ShieldCheck size={18} className="text-amber-600"/>
                  <span>{t.home.examSchedule}</span>
                </Link>
                <Link to="/downloads" className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200/80 rounded-xl font-bold text-slate-700 hover:text-blue-800 transition flex flex-col items-center text-center gap-1.5">
                  <FileText size={18} className="text-blue-600"/>
                  <span>{t.home.syllabusDownload}</span>
                </Link>
                <Link to="/administration" className="p-3 bg-slate-50 hover:bg-purple-50 border border-slate-200/80 rounded-xl font-bold text-slate-700 hover:text-purple-800 transition flex flex-col items-center text-center gap-1.5">
                  <Users size={18} className="text-purple-600"/>
                  <span>{t.home.governingBody}</span>
                </Link>
              </div>
            </div>

            {/* Helpline / Contact Widget */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 rounded-3xl border border-emerald-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                <Phone size={16} className="text-emerald-700" /> {language === 'bn' ? 'জরুরি ভর্তি ও তথ্য সহায়তা' : 'Direct Helpline'}
              </h4>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                {language === 'bn' ? 'ভর্তি, ফলাফল বা যেকোনো প্রাতিষ্ঠানিক তথ্যের জন্য সরাসরি যোগাযোগ করুন।' : 'Contact our administration for admission or inquiries.'}
              </p>
              <a 
                href={`tel:${settings.contactPhone}`}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Phone size={14} /> {toBanglaNum(settings.contactPhone)}
              </a>
            </div>

          </div>

        </div>

        {/* 4. AIMS & CORE OBJECTIVES (Direct from soshgskhulna.edu.bd) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Target size={14} /> {t.home.aimObjectivesTitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{t.home.aimObjectivesTitle}</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.home.aimObjectivesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Compass size={24} className="text-emerald-700" />,
                title: language === 'bn' ? 'সুপ্ত প্রতিভার পূর্ণ বিকাশ' : 'Full Potential Growth',
                desc: language === 'bn' ? 'শিক্ষার্থীদের শারীরিক, মানসিক, সামাজিক ও বুদ্ধিবৃত্তিক ক্ষমতার সামঞ্জস্যপূর্ণ উৎকর্ষ সাধন।' : 'To enable each student to progress physically, emotionally, socially, and intellectually.',
                color: 'bg-emerald-50 border-emerald-200 text-emerald-700'
              },
              {
                icon: <HeartHandshake size={24} className="text-blue-700" />,
                title: language === 'bn' ? 'মানবিক মূল্যবোধ ও অবদান' : 'Social Contribution',
                desc: language === 'bn' ? 'আত্মজ্ঞান ও উপলব্ধির মাধ্যমে নিজের মেধা দেশের ও সমাজের কল্যাণে নিবেদিত করা।' : 'To enable students to see beyond their own needs and contribute to the betterment of society.',
                color: 'bg-blue-50 border-blue-200 text-blue-700'
              },
              {
                icon: <ShieldCheck size={24} className="text-purple-700" />,
                title: language === 'bn' ? 'শিশু সুরক্ষা ও যত্ন' : 'Child Care & Safety',
                desc: language === 'bn' ? 'এস ও এস ভিলেজের শিশুবান্ধব নীতিমালা ও আনন্দময় নিরাপদ শিক্ষাবান্ধব পরিবেশ নিশ্চিতকরণ।' : 'Recognizing the uniqueness of early childhood and fostering a protective, inspiring learning atmosphere.',
                color: 'bg-purple-50 border-purple-200 text-purple-700'
              },
              {
                icon: <Award size={24} className="text-amber-700" />,
                title: language === 'bn' ? 'মেধাভিত্তিক সমসুযোগ' : 'Equal Opportunity',
                desc: language === 'bn' ? 'মেধা, সততা ও শৃঙ্খলার ভিত্তিতে সকল শিক্ষার্থীর জন্য বৈষম্যহীন সমান সুযোগ প্রদান।' : 'Providing equal opportunity to all children on the basis of merit without any form of discrimination.',
                color: 'bg-amber-50 border-amber-200 text-amber-700'
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CO-CURRICULAR & ANNUAL ACTIVITY CALENDAR (From soshgskhulna.edu.bd) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1">
                <Calendar size={13} /> {language === 'bn' ? 'বাৎসরিক সময়সূচি' : 'Calendar 2025'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">{t.home.eventsCalendarTitle}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{t.home.eventsCalendarSubtitle}</p>
            </div>
            <Link 
              to="/academic" 
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <Calendar size={14} /> {language === 'bn' ? 'সম্পূর্ণ একাডেমিক ক্যালেন্ডার' : 'View Full Schedule'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annualActivities.map((act, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 border border-slate-200 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  {toBanglaNum(idx + 1)}
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {act.date}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{act.category}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-emerald-700 transition leading-snug line-clamp-2">
                    {act.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Statistics Banner - Clean Light Theme */}
        <div className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-20 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100/70 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy size={14} /> {t.home.statsSectionTitle}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">{t.home.statsSectionTitle}</h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">{t.home.statsSectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <Users size={24} />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900">{toBanglaNum(students.length)}</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">{t.home.studentsCount}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-3">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900">{toBanglaNum(teachers.length + staff.length)}</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">{t.home.teachersCount}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-3">
                <Trophy size={24} />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900">{toBanglaNum('98.5%')}</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">{t.home.passRate}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-3">
                <Award size={24} />
              </div>
              <h4 className="text-3xl sm:text-4xl font-black text-slate-900">{toBanglaNum('120+')}</h4>
            </div>
          </div>
        </div>

        {/* 7. CAMPUS PHOTO GALLERY SHOWCASE */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1">
                <ImageIcon size={13} /> {language === 'bn' ? 'ফটো অ্যালবাম' : 'Photo Gallery'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">{t.home.campusGalleryTitle}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{t.home.campusGallerySubtitle}</p>
            </div>
            <Link 
              to="/gallery" 
              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
            >
              <ImageIcon size={14} /> {language === 'bn' ? 'সকল ছবি দেখুন' : 'View Full Gallery'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.slice(0, 3).map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">{toBanglaNum(item.date || '')}</span>
                  <h4 className="font-bold text-xs sm:text-sm leading-snug">{item.caption}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class-wise Student Overview */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 size={22} className="text-emerald-700" /> {t.home.classStatsTitle}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{t.home.classStatsSubtitle}</p>
            </div>
            <Link 
              to="/students" 
              className="text-xs text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl transition"
            >
              {t.nav.students} ডিরেক্টরি <ChevronRight size={14} className="inline" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {classStats.map((item, idx) => (
              <div 
                key={idx} 
                className={`${item.bg} p-5 rounded-2xl border ${item.border} flex flex-col items-center justify-center text-center transition hover:shadow-md`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center ${item.text} mb-3 shadow-sm`}>
                  <item.icon size={20} />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">{item.className}</h4>
                <p className={`text-2xl font-black ${item.text}`}>{toBanglaNum(item.count || 45)}</p>
                <span className="text-[10px] text-slate-500 uppercase font-semibold mt-1">{t.home.students}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
