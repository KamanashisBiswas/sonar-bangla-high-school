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
} from "lucide-react";
import { QUICK_LINKS } from "../constants";
import { useData } from "../contexts/DataContext";
import { useLanguage } from "../contexts/LanguageContext";
import BackToTop from "./ui/BackToTop";
import { PageLoader } from "./ui/Loading";
import { AnimatePresence } from "framer-motion";

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { settings } = useData();
  const { language, toggleLanguage, t, toBanglaNum } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Trigger smooth loading indicator on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 350);
    return () => clearTimeout(timer);
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
      {/* Global Page Loader */}
      <AnimatePresence>{isLoading && <PageLoader />}</AnimatePresence>

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
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-medium">
                {t.topbar.estd}: {toBanglaNum(settings.establishedYear)}
              </span>
            </div>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 hover:text-white border border-amber-400/30 px-2.5 py-1 rounded-md text-xs font-bold transition shadow-sm cursor-pointer"
              title={
                language === "bn"
                  ? "Switch to English"
                  : "বাংলায় পরিবর্তন করুন"
              }
            >
              <Globe size={13} className="text-amber-300" />
              <span>{language === "bn" ? "English" : "বাংলা"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Institution Header */}
      <header className="bg-white border-b border-slate-200/90 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-300 overflow-hidden flex-shrink-0">
              <img
                src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
                alt="SOS Hermann Gmeiner School Khulna"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition">
                  {language === "bn"
                    ? settings.schoolName
                    : "SOS HERMANN GMEINER SCHOOL KHULNA"}
                </h1>
              </div>
              <p className="text-xs md:text-sm font-medium text-slate-500 flex items-center gap-2 mt-0.5">
                <span className="text-emerald-700 font-bold tracking-wide">
                  {language === "bn"
                    ? "SOS HERMANN GMEINER SCHOOL KHULNA"
                    : "গল্লামারী, খুলনা - ৯২০৮"}
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="hidden sm:inline text-slate-500 font-normal">
                  {language === "bn"
                    ? "শিক্ষা • শৃঙ্খলা • সততা"
                    : "Honesty is Education • Peace & Progress"}
                </span>
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

            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="md:hidden flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1.5 rounded-lg text-xs font-bold"
            >
              <Globe size={14} className="text-amber-700" />
              <span>{language === "bn" ? "EN" : "বাং"}</span>
            </button>

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

              <div className="py-2 flex items-center gap-2">
                <Link
                  to="/admin-login"
                  className="bg-emerald-900/80 hover:bg-emerald-950 text-emerald-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 border border-emerald-700"
                >
                  <Lock size={12} /> {t.topbar.adminLogin}
                </Link>
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
                  <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <img
                      src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
                      alt="SOS Hermann Gmeiner School Khulna"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight line-clamp-1">
                      {language === "bn"
                        ? settings.schoolName
                        : "SOS HERMANN GMEINER SCHOOL KHULNA"}
                    </h3>
                    <span className="text-[11px] text-emerald-700 font-semibold">
                      {language === "bn" ? "মেনুবার" : "Navigation"}
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
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs transition"
              >
                <Globe size={14} className="text-emerald-700" />
                <span>
                  {language === "bn" ? "Switch to English" : "বাংলায় দেখুন"}
                </span>
              </button>

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

      {/* Main Content Area */}
      <main className="flex-grow">{!isLoading && <Outlet />}</main>

      {/* Modern High-Class Institutional LIGHT Footer */}
      <footer className="bg-slate-100 text-slate-700 border-t-2 border-emerald-600 relative overflow-hidden">
        {/* Pre-Footer Action Banner (Light Emerald Tint) */}
        <div className="border-b border-emerald-100 bg-emerald-50/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">
                    {language === "bn"
                      ? "ভর্তি আবেদন ২০২৫"
                      : "Admissions Open 2025"}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === "bn"
                      ? "সকল শ্রেণিতে অনলাইনে আবেদন চলছে"
                      : "Online applications open for all grades"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-extrabold text-sm">
                    {language === "bn"
                      ? "ফলাফল ও মার্কশিট"
                      : "Results & Marksheets"}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {language === "bn"
                      ? "রোল নম্বর দিয়ে দ্রুত রেজাল্ট যাচাই"
                      : "Instant marksheet generation"}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-end gap-3">
                <Link
                  to="/admission"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition shadow-md shadow-emerald-800/20 flex items-center gap-1.5 cursor-pointer"
                >
                  {t.topbar.onlineAdmission} <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-300 transition shadow-sm cursor-pointer"
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Column 1: School Identity & Overview */}
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md border border-slate-200 flex-shrink-0">
                  <img
                    src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png"
                    alt="SOS Hermann Gmeiner School Khulna"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    {language === "bn"
                      ? settings.schoolName
                      : "SOS HERMANN GMEINER SCHOOL KHULNA"}
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-700 tracking-wide uppercase block">
                    {language === "bn"
                      ? "SOS HERMANN GMEINER SCHOOL KHULNA"
                      : "Gollamari, Khulna - 9208"}
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-600">
                {language === "bn"
                  ? "জ্ঞান, শৃঙ্খলা ও নৈতিক শিক্ষার সমন্বয়ে ভবিষ্যৎ সুনাগরিক গড়ে তোলাই আমাদের মূল লক্ষ্য। আধুনিক স্মার্ট ক্যাম্পাস ও সুশৃঙ্খল শিক্ষাব্যবস্থা।"
                  : "Committed to nurturing enlightened, disciplined, and morally sound future citizens through modern educational excellence."}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="bg-white text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono shadow-xs">
                  {t.topbar.eiin}: {toBanglaNum(settings.eiinCode)}
                </span>
                <span className="bg-white text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg text-[11px] font-bold font-mono shadow-xs">
                  {t.topbar.estd}: {toBanglaNum(settings.establishedYear)}
                </span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 bg-white hover:bg-blue-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition border border-slate-200 shadow-sm"
                  aria-label="Facebook Page"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="w-9 h-9 bg-white hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition border border-slate-200 shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail size={16} />
                </a>
                <a
                  href={`tel:${settings.contactPhone}`}
                  className="w-9 h-9 bg-white hover:bg-emerald-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition border border-slate-200 shadow-sm"
                  aria-label="Call Hotline"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Academic & Portals */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-200 flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-700" />{" "}
                {language === "bn" ? "একাডেমিক ও সেবা" : "Academic & Services"}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li>
                  <Link
                    to="/admission"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.topbar.onlineAdmission}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/result"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.result.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academic"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.academic.routineTitle}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/students"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.studentsPage.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teachers"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.teachers.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/downloads"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.downloads.title}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Administration & Policies */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-200 flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-700" />{" "}
                {language === "bn" ? "প্রশাসন ও পরিচিতি" : "Governance & Info"}
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.about.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/administration"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.adminPage.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/notices"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.notices.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.gallery.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-emerald-700 transition flex items-center gap-2"
                  >
                    <ChevronRight size={13} className="text-emerald-600" />{" "}
                    {t.contact.title}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin-login"
                    className="hover:text-emerald-700 transition flex items-center gap-2 text-emerald-800 font-bold"
                  >
                    <Lock size={12} /> {t.topbar.adminLogin}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact, Map & Hours */}
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-5 pb-2.5 border-b border-slate-200 flex items-center gap-2">
                <Phone size={16} className="text-emerald-700" />{" "}
                {t.footer.contactInfo}
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <MapPin
                    size={16}
                    className="text-emerald-700 flex-shrink-0 mt-0.5"
                  />
                  <span className="leading-relaxed text-slate-800">
                    {settings.schoolAddress}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="text-emerald-700 flex-shrink-0" />
                  <a
                    href={`tel:${settings.contactPhone}`}
                    className="hover:text-emerald-800 font-mono font-bold text-slate-900"
                  >
                    {toBanglaNum(settings.contactPhone)}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-emerald-700 flex-shrink-0" />
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="hover:text-emerald-800 font-mono font-semibold text-slate-800"
                  >
                    {settings.contactEmail}
                  </a>
                </li>
                <li className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-2xl">
                  <div className="flex items-start gap-2 text-amber-950">
                    <Clock
                      size={16}
                      className="text-amber-700 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="block font-bold text-xs">
                        {language === "bn" ? "অফিস সময়সূচি:" : "Office Hours:"}
                      </span>
                      <span className="text-[11px] text-amber-900">
                        {language === "bn"
                          ? "রবি - বৃহস্পতি: সকাল ৯:০০ - বিকাল ৪:০০"
                          : "Sun - Thu: 9:00 AM - 4:00 PM"}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* National & Educational Portals Banner */}
          <div className="border-t border-slate-200 pt-7 pb-4">
            <div className="mb-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Files size={14} className="text-emerald-700" />{" "}
                {language === "bn"
                  ? "প্রয়োজনীয় সরকারি ও শিক্ষা পোর্টাল লিংকসমূহ"
                  : "Important National & Education Portals"}
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              {QUICK_LINKS.slice(0, 8).map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition py-1.5 px-2.5 rounded-lg border border-slate-200/80 text-[11px] truncate group shadow-xs"
                >
                  <ExternalLink
                    size={11}
                    className="text-slate-400 group-hover:text-emerald-700 flex-shrink-0"
                  />
                  <span className="truncate font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Copyright & Credits Bar */}
          <div className="border-t border-slate-200 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p className="text-center sm:text-left text-slate-600">
              &copy; {toBanglaNum(new Date().getFullYear())}{" "}
              <strong className="text-slate-900 font-bold">
                {language === "bn"
                  ? settings.schoolName
                  : "Sonar Bangla High School"}
              </strong>
              । {t.footer.rights}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-600">
                {t.footer.developedBy}:{" "}
                <span className="text-emerald-800 font-bold bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-xs">
                  PerkTech
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Layout;
