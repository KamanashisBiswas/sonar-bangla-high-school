import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  GraduationCap,
  Lock,
  ExternalLink,
  Files,
  Link as LinkIcon,
  BookOpen,
  Clock,
  ShieldCheck,
  ChevronRight,
  Globe,
  Award,
  Sparkles,
  Send,
  CheckCircle2,
  ArrowRight,
  Youtube,
  Building2
} from "lucide-react";
import { QUICK_LINKS } from "../constants";
import { useData } from "../contexts/DataContext";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollProgressBar } from "./ui/MotionComponents";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { settings } = useData();
  const { language, toggleLanguage, t, toBanglaNum } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.administration, path: "/administration" },
    { label: t.nav.teachers, path: "/teachers" },
    { label: t.nav.students, path: "/students" },
    { label: t.nav.academic, path: "/academic" },
    { label: t.nav.admission, path: "/admission" },
    { label: t.nav.result, path: "/result" },
    { label: t.nav.notices, path: "/notices" },
    { label: t.nav.downloads, path: "/downloads" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sleek Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Utility Bar */}
      <div className="bg-emerald-900 text-emerald-50 text-xs py-2 border-b border-emerald-800/80 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Phone size={13} className="text-emerald-400" />{" "}
              {toBanglaNum(settings.contactPhone)}
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Mail size={13} className="text-emerald-400" />{" "}
              {settings.contactEmail}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-emerald-800 text-emerald-200 px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wider">
                {t.topbar.eiin}: {toBanglaNum(settings.eiinCode)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Institution Header */}
      <header className="bg-white border-b border-slate-200/90 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
              alt="SOS Hermann Gmeiner School Khulna"
              className="h-16 sm:h-20 md:h-22 w-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition">
                {language === "bn"
                  ? settings.schoolName
                  : "SOS HERMANN GMEINER SCHOOL KHULNA"}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-1 tracking-wide">
                {language === "bn"
                  ? settings.schoolAddress
                  : "Gollamari, Khulna - 9208"}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Quick Action Badges / CTAs for Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/admission"
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <BookOpen size={14} /> {t.topbar.onlineAdmission}
              </Link>
              <Link
                to="/result"
                className="bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <ShieldCheck size={14} /> {t.topbar.result}
              </Link>
            </div>

            {/* Mobile Language Switcher (BN | EN) */}
            <div className="md:hidden bg-slate-100 p-0.5 rounded-lg border border-slate-200 flex items-center shadow-xs">
              <button
                type="button"
                onClick={() => language !== 'bn' && toggleLanguage()}
                className={`px-2 py-1 rounded-md text-xs font-black transition ${
                  language === 'bn'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                BN
              </button>
              <button
                type="button"
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`px-2 py-1 rounded-md text-xs font-black transition ${
                  language === 'en'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden text-slate-700 hover:text-emerald-700 p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition shadow-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Primary Desktop Navigation Bar */}
        <div className="bg-emerald-800 text-white border-t border-emerald-700/50 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between">
              <ul className="flex items-center flex-wrap gap-0.5">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`inline-block px-3.5 py-3 text-sm font-semibold transition-all duration-200 relative ${
                          isActive
                            ? "bg-emerald-950 text-white shadow-inner font-bold"
                            : "text-emerald-50 hover:bg-emerald-700/80 hover:text-white"
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400 rounded-t" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="py-2 flex items-center">
                {/* Language Switch Toggle (BN | EN) */}
                <div className="bg-emerald-950/90 p-0.5 rounded-full border border-emerald-700/60 flex items-center shadow-inner">
                  <button
                    type="button"
                    onClick={() => language !== 'bn' && toggleLanguage()}
                    className={`px-3 py-1 rounded-full text-xs font-black transition-all duration-200 cursor-pointer ${
                      language === 'bn'
                        ? 'bg-amber-400 text-emerald-950 shadow-sm scale-100'
                        : 'text-emerald-300 hover:text-white'
                    }`}
                    title="বাংলা"
                  >
                    BN
                  </button>
                  <button
                    type="button"
                    onClick={() => language !== 'en' && toggleLanguage()}
                    className={`px-3 py-1 rounded-full text-xs font-black transition-all duration-200 cursor-pointer ${
                      language === 'en'
                        ? 'bg-amber-400 text-emerald-950 shadow-sm scale-100'
                        : 'text-emerald-300 hover:text-white'
                    }`}
                    title="English"
                  >
                    EN
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={toggleMenu}
        >
          <div
            className="w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
                    alt="SOS Hermann Gmeiner School Khulna"
                    className="h-12 w-auto object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight line-clamp-1">
                      {language === "bn"
                        ? settings.schoolName
                        : "SOS HERMANN GMEINER SCHOOL KHULNA"}
                    </h3>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      {language === "bn" ? settings.schoolAddress : "Gollamari, Khulna"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 border-l-4 border-emerald-600 font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-emerald-700"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          size={16}
                          className={
                            isActive ? "text-emerald-700" : "text-slate-400"
                          }
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              {/* Language Segmented Switch for Mobile Drawer */}
              <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 pl-2">
                  {language === 'bn' ? 'ভাষা নির্বাচন' : 'Language'}
                </span>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 shadow-xs">
                  <button
                    type="button"
                    onClick={() => { if (language !== 'bn') toggleLanguage(); }}
                    className={`px-3 py-1 rounded-md text-xs font-black transition ${
                      language === 'bn'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    BN
                  </button>
                  <button
                    type="button"
                    onClick={() => { if (language !== 'en') toggleLanguage(); }}
                    className={`px-3 py-1 rounded-md text-xs font-black transition ${
                      language === 'en'
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Link
                to="/admin-login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-xl font-bold text-sm shadow-md transition"
              >
                <Lock size={16} /> {t.topbar.adminLogin}
              </Link>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                {t.topbar.eiin}: {toBanglaNum(settings.eiinCode)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area with Butter-Smooth Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Solid Rich Deep Green Institutional Footer (4-Column Layout - Pixel Perfect) */}
      <footer className="bg-[#064e3b] text-white pt-14 pb-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
            {/* Column 1: School Identity & Social */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-md">
                  <img
                    src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
                    alt="SOS Hermann Gmeiner School Khulna"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight">
                    {language === "bn"
                      ? "এস ও এস হারম্যান মেইনার স্কুল খুলনা"
                      : "SOS HERMANN\nGMEINER SCHOOL\nKHULNA"}
                  </h3>
                  <p className="text-xs text-emerald-200/90 mt-0.5">
                    {language === "bn" ? "গল্লামারী, খুলনা - ৯২০৮" : "Gollamari, Khulna - 9208"}
                  </p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-emerald-100/80">
                {language === "bn"
                  ? "জ্ঞান, শৃঙ্খলা ও নৈতিক শিক্ষার সমন্বয়ে ভবিষ্যৎ সুনাগরিক গড়ে তোলাই আমাদের মূল লক্ষ্য। আধুনিক স্মার্ট ক্যাম্পাস ও সুশৃঙ্খল শিক্ষাব্যবস্থা।"
                  : "Committed to nurturing enlightened, disciplined, and morally sound future citizens through modern educational excellence."}
              </p>

              {/* 4 Circular Social Icons */}
              <div className="pt-2 flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition shadow-xs"
                  aria-label="Facebook"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition shadow-xs"
                  aria-label="Send Email"
                >
                  <Mail size={15} />
                </a>
                <a
                  href={`tel:${settings.contactPhone}`}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition shadow-xs"
                  aria-label="Call Hotline"
                >
                  <Phone size={15} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition shadow-xs"
                  aria-label="YouTube"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>

            {/* Column 2: Academic & Services */}
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
                {language === "bn" ? "একাডেমিক ও সেবা" : "Academic & Services"}
              </h4>
              <ul className="space-y-3 text-xs text-emerald-100/90 font-medium">
                <li>
                  <Link to="/admission" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "অনলাইন ভর্তি" : "Online Admission"}
                  </Link>
                </li>
                <li>
                  <Link to="/result" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "একাডেমিক ফলাফল ও মার্কশিট" : "Academic Results & Marksheet"}
                  </Link>
                </li>
                <li>
                  <Link to="/academic" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "দৈনিক ক্লাস রুটিন" : "Daily Class Schedule & Routine"}
                  </Link>
                </li>
                <li>
                  <Link to="/students" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "শিক্ষার্থী ডিরেক্টরি" : "Student Directory"}
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "শিক্ষক ও কর্মকর্তা পরিচিতি" : "Faculty & Staff Directory"}
                  </Link>
                </li>
                <li>
                  <Link to="/downloads" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "ডাউনলোড সেন্টার" : "Download Center"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Governance & Info (Without Admin Login) */}
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
                {language === "bn" ? "প্রশাসন ও পরিচিতি" : "Governance & Info"}
              </h4>
              <ul className="space-y-3 text-xs text-emerald-100/90 font-medium">
                <li>
                  <Link to="/about" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "প্রতিষ্ঠান পরিচিতি" : "About Our Institution"}
                  </Link>
                </li>
                <li>
                  <Link to="/administration" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "পরিচালনা পর্ষদ ও প্রশাসন" : "Administration & Governance"}
                  </Link>
                </li>
                <li>
                  <Link to="/notices" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "অফিসিয়াল নোটিশ বোর্ড" : "Official Notice Board"}
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "ফটো গ্যালারি" : "Photo Gallery"}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition flex items-center gap-2">
                    <span className="text-emerald-300">›</span> {language === "bn" ? "যোগাযোগ ও ক্যাম্পাস অবস্থান" : "Contact & Campus Location"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div>
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-5">
                {language === "bn" ? "যোগাযোগের তথ্য" : "Contact Information"}
              </h4>
              <ul className="space-y-3 text-xs text-emerald-100/90">
                <li className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>{language === "bn" ? "গল্লামারী, খুলনা - ৯২০৮" : "Gollamari, Khulna - 9208"}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-emerald-300 flex-shrink-0" />
                  <a href={`tel:${settings.contactPhone}`} className="hover:text-white font-mono font-bold">
                    {toBanglaNum(settings.contactPhone)}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-emerald-300 flex-shrink-0" />
                  <a href={`mailto:${settings.contactEmail}`} className="hover:text-white">
                    {settings.contactEmail}
                  </a>
                </li>

                {/* Office Hours Gold-Border Box */}
                <li className="p-3.5 bg-emerald-950/40 border border-amber-400/40 rounded-2xl flex items-center gap-3.5 mt-4">
                  <div className="w-8 h-8 rounded-full border border-amber-300 text-amber-300 flex items-center justify-center font-bold flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="block font-bold text-xs text-amber-300">
                      {language === "bn" ? "অফিস সময়সূচি" : "Office Hours"}
                    </span>
                    <span className="text-[11px] text-white/90 block mt-0.5 font-medium">
                      {language === "bn" ? "রবি - বৃহস্পতি: ৯:০০ AM - ৪:০০ PM" : "Sun - Thu: 9:00 AM - 4:00 PM"}
                    </span>
                    <span className="text-[10px] text-emerald-200 block mt-0.5 font-medium">
                      {language === "bn" ? "শুক্রবার: বন্ধ" : "Friday: Closed"}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Credits */}
          <div className="border-t border-emerald-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-emerald-200/90">
            <p className="text-center sm:text-left">
              &copy; {toBanglaNum(2026)}{" "}
              <strong className="text-white font-bold">SOS Hermann Gmeiner School Khulna</strong>. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-emerald-200/80">Design & Development:</span>
              <span className="bg-white text-emerald-950 font-bold px-3.5 py-1 rounded-full text-xs shadow-xs">
                PerkTech
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
