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
  Target, Compass, HeartHandshake, Phone
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

  // Hero carousel slides
  const heroSlides = useMemo(() => [
    {
      image: settings.heroImage || 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
      badge: language === 'bn' ? 'মানসম্মত শিক্ষা ও সুশৃঙ্খল মেলবন্ধন • স্থাপিত ১৯৮৭' : `Excellence in Education • Estd ${settings.establishedYear}`,
      title: language === 'bn' ? settings.heroTitle : 'Education • Discipline • Integrity — Commitment to Bright Future',
      subtitle: language === 'bn' ? settings.heroSubtitle : t.home.heroSubtitle,
      primaryBtn: { text: t.home.applyNow, link: '/admission', icon: BookOpen },
      secondaryBtn: { text: t.home.seeResults, link: '/result', icon: ShieldCheck }
    },
    {
      image: 'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
      badge: language === 'bn' ? 'সুশৃঙ্খল ক্যাম্পাস ও প্রাত্যহিক সমাবেশ' : 'Disciplined Campus & Daily Assembly',
      title: language === 'bn' ? 'নৈতিক মূল্যবোধ ও দেশপ্রেমিক নাগরিক গড়ার প্রত্যয়' : 'Fostering Ethical Values & Responsible Citizens',
      subtitle: language === 'bn' ? 'শিক্ষার্থীবান্ধব ও আনন্দময় পরিবেশে আধুনিক যুগোপযোগী শিক্ষা ও চরিত্র গঠনের সর্বোত্তম বিদ্যাপীঠ।' : 'A student-friendly, joyful environment ensuring holistic character development and modern quality education.',
      primaryBtn: { text: language === 'bn' ? 'শিক্ষক পরিচিতি' : 'Our Faculty', link: '/teachers', icon: Users },
      secondaryBtn: { text: language === 'bn' ? 'একাডেমিক তথ্য' : 'Academic Info', link: '/academic', icon: BookOpen }
    },
    {
      image: 'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg',
      badge: language === 'bn' ? 'ডিজিটাল মাল্টিমিডিয়া ক্লাসরুম ও বিজ্ঞান চর্চা' : 'Digital Classrooms & Science Labs',
      title: language === 'bn' ? 'আধুনিক প্রযুক্তি ও বিজ্ঞানমনস্ক শিক্ষায় অগ্রগামী' : 'Pioneering in STEM & Modern Digital Learning',
      subtitle: language === 'bn' ? 'স্মার্ট মাল্টিমিডিয়া ক্লাসরুম, আধুনিক কম্পিউটার ও সাইন্স ল্যাবে বাস্তবমুখী শিক্ষার অপার সুযোগ।' : 'State-of-the-art multimedia classrooms, advanced computer labs, and hands-on science education.',
      primaryBtn: { text: language === 'bn' ? 'অনলাইন ভর্তি' : 'Online Admission', link: '/admission', icon: BookOpen },
      secondaryBtn: { text: language === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board', link: '/notices', icon: FileText }
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&fit=crop&q=85',
      badge: language === 'bn' ? 'সহশিক্ষা, ক্রীড়া ও সাংস্কৃতিক অঙ্গন' : 'Co-Curricular & Sports Championship',
      title: language === 'bn' ? 'ক্রীড়া, বিতর্ক ও সাংস্কৃতিক অঙ্গনে গৌরবময় সাফল্য' : 'Glorious Triumphs in Sports, Debate & Cultural Arts',
      subtitle: language === 'bn' ? 'পড়াশোনার পাশাপাশি শারীরিক ও মানসিক বিকাশের জন্য বছরব্যাপী নানা সহশিক্ষা কার্যক্রম ও ক্রীড়া উৎসব।' : 'Year-round sports tournaments, cultural meets, and debate competitions ensuring 360-degree student growth.',
      primaryBtn: { text: language === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery', link: '/gallery', icon: ImageIcon },
      secondaryBtn: { text: language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us', link: '/contact', icon: Phone }
    }
  ], [settings, language, t]);

  // Auto slide interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

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

      {/* Hero Section Carousel */}
      <section 
        className="relative h-[520px] sm:h-[560px] md:h-[640px] w-full overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image Slides with Smooth Fade */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity 1000ms ease-in-out, transform 7000ms ease-out'
            }}
          >
            {/* Dark & Emerald Overlay for Superior Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/85 to-slate-900/45 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white space-y-5 sm:space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-emerald-500/25 backdrop-blur-md border border-emerald-400/50 text-emerald-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-fade-in">
                    <Sparkles size={15} className="text-amber-300 animate-pulse" />
                    <span>{slide.badge}</span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg text-white">
                    {slide.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 drop-shadow max-w-xl font-normal leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3.5 sm:gap-4">
                    <Link 
                      to={slide.primaryBtn.link} 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold transition shadow-xl shadow-emerald-950/40 hover:scale-105 transform flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base cursor-pointer"
                    >
                      <slide.primaryBtn.icon size={18}/> {slide.primaryBtn.text} <ArrowRight size={18}/>
                    </Link>
                    <Link 
                      to={slide.secondaryBtn.link} 
                      className="bg-white/15 backdrop-blur-md border border-white/40 hover:bg-white/25 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base cursor-pointer"
                    >
                      <slide.secondaryBtn.icon size={18} className="text-amber-300"/> {slide.secondaryBtn.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/40 hover:bg-emerald-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/40 hover:bg-emerald-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xl cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-16 sm:bottom-14 lg:bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-slate-950/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide 
                  ? 'w-8 h-2.5 bg-emerald-400 shadow-md shadow-emerald-500/50' 
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Portal Access Ribbon */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 hidden lg:block shadow-md z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center text-xs">
            <div className="flex items-center gap-8">
              <span className="font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-pulse"></span>
                {t.home.quickLinks}:
              </span>
              <Link to="/admission" className="text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition">
                <BookOpen size={14} className="text-emerald-600" /> {t.topbar.onlineAdmission}
              </Link>
              <Link to="/academic" className="text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition">
                <Calendar size={14} className="text-blue-600" /> {t.academic.routineTitle}
              </Link>
              <Link to="/downloads" className="text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1.5 transition">
                <FileText size={14} className="text-amber-600" /> {t.nav.downloads}
              </Link>
            </div>
            <div className="text-slate-500 font-medium">
              EIIN: <span className="font-bold text-slate-800">{toBanglaNum(settings.eiinCode)}</span> | {t.topbar.helpline}: <span className="font-bold text-slate-800">{toBanglaNum(settings.contactPhone)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Quick 4-Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 -mt-10 lg:-mt-6 relative z-10">
          {[
            { title: t.home.highlightsTitle1, desc: t.home.highlightsDesc1, icon: Users, color: 'emerald' },
            { title: t.home.highlightsTitle2, desc: t.home.highlightsDesc2, icon: Monitor, color: 'blue' },
            { title: t.home.highlightsTitle3, desc: t.home.highlightsDesc3, icon: Trophy, color: 'amber' },
            { title: t.home.highlightsTitle4, desc: t.home.highlightsDesc4, icon: ShieldCheck, color: 'purple' },
          ].map((card, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/90 flex items-start gap-4 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${card.color}-50 text-${card.color}-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                <card.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
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
                  <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider">{toBanglaNum(item.date)}</span>
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
