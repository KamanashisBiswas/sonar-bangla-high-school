import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowRight, Calendar, Users, BookOpen, Award, 
  ExternalLink, CheckCircle, Smartphone, Globe, 
  Monitor, Library, Play, Image as ImageIcon,
  Clock, MapPin, Trophy, Sparkles, GraduationCap, BarChart3,
  Layers, Briefcase, Activity, ShieldCheck, FileText, ChevronRight
} from 'lucide-react';

const Home: React.FC = () => {
  const { settings, notices, teachers, students, gallery, staff } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [activeNoticeTab, setActiveNoticeTab] = useState<'All' | 'Exam' | 'Admission' | 'General'>('All');

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

  // Helper for Date Rendering
  const renderNoticeDate = (dateStr: string) => {
    const dateObj = new Date(dateStr);
    const isValid = !isNaN(dateObj.getTime());
    
    return {
      day: isValid ? (language === 'bn' ? dateObj.toLocaleString('bn-BD', { day: '2-digit' }) : dateObj.toLocaleString('en-US', { day: '2-digit' })) : '01',
      month: isValid ? (language === 'bn' ? dateObj.toLocaleString('bn-BD', { month: 'short' }) : dateObj.toLocaleString('en-US', { month: 'short' })) : 'Jan'
    };
  };

  return (
    <div className="bg-slate-50 relative">
      <Marquee />

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[620px] w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url("${settings.heroImage}")` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-emerald-950/80 to-slate-900/40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white animate-slide-up space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                <Sparkles size={14} className="text-amber-400" />
                <span>{t.home.heroBadge} • {t.topbar.estd} {toBanglaNum(settings.establishedYear)}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-md text-white">
                {language === 'bn' ? settings.heroTitle : 'Sonar Bangla High School'}
              </h2>
              
              <p className="text-base sm:text-lg text-slate-200 drop-shadow max-w-xl font-normal leading-relaxed">
                {language === 'bn' ? settings.heroSubtitle : t.home.heroSubtitle}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <Link 
                  to="/admission" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold transition shadow-lg shadow-emerald-900/30 hover:scale-105 transform flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                >
                  <BookOpen size={18}/> {t.home.applyNow} <ArrowRight size={18}/>
                </Link>
                <Link 
                  to="/result" 
                  className="bg-white/15 backdrop-blur-md border border-white/40 hover:bg-white/25 text-white px-6 py-3.5 rounded-xl font-bold transition flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
                >
                  <ShieldCheck size={18} className="text-amber-300"/> {t.home.seeResults}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Portal Access Ribbon */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 hidden lg:block shadow-md">
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
          
          {/* Left Column (2 spans): Headmaster's Speech & Success highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Headmaster's Message Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 relative overflow-hidden">
              <div className="border-b border-slate-100 pb-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{t.home.headmasterTitle}</h3>
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
                  <p className="text-[11px] text-slate-400">{language === 'bn' ? settings.schoolName : 'Sonar Bangla High School'}</p>
                </div>

                <div className="text-slate-600 leading-relaxed text-sm space-y-4">
                  <blockquote className="italic font-medium text-slate-800 bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-500">
                    {language === 'bn' 
                      ? '"শিক্ষা কেবল পরীক্ষার ফলাফলের মধ্যে সীমাবদ্ধ নয়; এটি আত্মমর্যাদাশীল, মানবিক ও আদর্শ মানুষ গড়ার সার্বজনীন ভিত্তি।"'
                      : '"Education is not confined to test results alone; it is the universal foundation for building self-respecting, humane, and enlightened global citizens."'
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

            {/* Academic Highlights 2-Col */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-6 rounded-2xl text-white shadow-md relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform pointer-events-none">
                  <Trophy size={110} />
                </div>
                <div className="relative z-10 flex items-center gap-2 mb-3">
                  <span className="p-2 bg-white/10 rounded-lg"><Trophy size={18} className="text-amber-300" /></span>
                  <h4 className="text-lg font-bold">{t.home.achievementCardTitle}</h4>
                </div>
                <p className="relative z-10 text-emerald-100 text-xs mb-6 leading-relaxed">
                  {t.home.achievementCardDesc}
                </p>
                <div className="relative z-10 flex items-end justify-between pt-2 border-t border-emerald-600/60">
                  <div>
                    <p className="text-2xl font-extrabold text-white">{toBanglaNum('98.5%')}</p>
                    <p className="text-[10px] text-emerald-200 uppercase font-semibold">{t.home.achievementStatLabel}</p>
                  </div>
                  <Link 
                    to="/result" 
                    className="relative z-20 bg-white text-emerald-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-50 active:scale-95 transition shadow inline-flex items-center gap-1 cursor-pointer"
                  >
                    {t.home.achievementBtn}
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl text-white shadow-md relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 text-white/10 group-hover:scale-110 transition-transform pointer-events-none">
                  <Smartphone size={110} />
                </div>
                <div className="relative z-10 flex items-center gap-2 mb-3">
                  <span className="p-2 bg-white/10 rounded-lg"><Globe size={18} className="text-emerald-400" /></span>
                  <h4 className="text-lg font-bold">{t.home.smartCampusTitle}</h4>
                </div>
                <p className="relative z-10 text-slate-300 text-xs mb-6 leading-relaxed">
                  {t.home.smartCampusDesc}
                </p>
                <div className="relative z-10 flex items-end justify-between pt-2 border-t border-slate-700">
                  <div>
                    <p className="text-2xl font-extrabold text-emerald-400">{toBanglaNum('100%')}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">{t.home.smartCampusStatLabel}</p>
                  </div>
                  <Link 
                    to="/admission" 
                    className="relative z-20 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-500 active:scale-95 transition shadow inline-flex items-center gap-1 cursor-pointer"
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
                        ? 'bg-slate-900 text-white' 
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
                          {notice.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {notice.type}
                          </span>
                          <span className="text-[10px] text-slate-400">{toBanglaNum(notice.date)}</span>
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
          </div>

        </div>

        {/* Global Statistics Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">{t.home.statsSectionTitle}</h3>
            <p className="text-slate-400 text-xs sm:text-sm">{t.home.statsSectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <Users size={32} className="mx-auto mb-2 text-emerald-400" />
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">{toBanglaNum(students.length)}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">{t.home.studentsCount}</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <GraduationCap size={32} className="mx-auto mb-2 text-blue-400" />
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">{toBanglaNum(teachers.length + staff.length)}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">{t.home.teachersCount}</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <Trophy size={32} className="mx-auto mb-2 text-amber-400" />
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">{toBanglaNum('98.5%')}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">{t.home.passRate}</p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80">
              <Award size={32} className="mx-auto mb-2 text-purple-400" />
              <h4 className="text-3xl sm:text-4xl font-extrabold text-white">{toBanglaNum('120+')}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">{t.home.gpa5Count}</p>
            </div>
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
