import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, ImagePlus, LogOut, 
  Download, UserCog, GraduationCap, Bell, Menu, X,
  Settings, UserPlus, ClipboardCheck, ExternalLink, ShieldCheck, Globe
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import BackToTop from './ui/BackToTop';
import { PageLoader } from './ui/Loading';
import { AnimatePresence } from 'framer-motion';

const AdminLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { settings } = useData();
  const { language, toggleLanguage, t, toBanglaNum } = useLanguage();

  const handleLogout = () => {
    logout();
    navigate('/admin-login');
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const menuItems = [
    { path: '/admin/dashboard', label: language === 'bn' ? 'ড্যাশবোর্ড' : 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/settings', label: language === 'bn' ? 'ওয়েবসাইট সেটিংস' : 'Website Settings', icon: Settings },
    { path: '/admin/notices', label: language === 'bn' ? 'নোটিশ ব্যবস্থাপনা' : 'Manage Notices', icon: Bell },
    { path: '/admin/admissions', label: language === 'bn' ? 'ভর্তি আবেদন' : 'Admissions', icon: UserPlus },
    { path: '/admin/results', label: language === 'bn' ? 'ফলাফল প্রকাশ' : 'Manage Results', icon: ClipboardCheck },
    { path: '/admin/committee', label: language === 'bn' ? 'পরিচালনা কমিটি' : 'Managing Committee', icon: UserCog },
    { path: '/admin/teachers', label: language === 'bn' ? 'শিক্ষক ও স্টাফ' : 'Faculty & Staff', icon: Users },
    { path: '/admin/students', label: language === 'bn' ? 'শিক্ষার্থী তথ্য' : 'Students Database', icon: GraduationCap },
    { path: '/admin/downloads', label: language === 'bn' ? 'ডাউনলোড কর্নার' : 'Downloads Zone', icon: Download },
    { path: '/admin/gallery', label: language === 'bn' ? 'ফটো গ্যালারি' : 'Photo Gallery', icon: ImagePlus },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-100 font-sans text-slate-800">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl border-r border-slate-800`}>
        <div>
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap size={22} />
              </div>
              <div className="overflow-hidden">
                <h2 className="font-extrabold text-sm text-white truncate">{settings.schoolName}</h2>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">
                  {language === 'bn' ? 'অ্যাডমিন প্যানেল' : 'Admin Portal'}
                </span>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-white">
              <X size={20}/>
            </button>
          </div>

          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)] text-xs">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/60 space-y-2">
          <Link 
            to="/" 
            target="_blank" 
            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition"
          >
            <ExternalLink size={14} /> {language === 'bn' ? 'ওয়েবসাইট দেখুন' : 'Live Website'}
          </Link>
          <button 
            onClick={handleLogout} 
            className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/30 transition"
          >
            <LogOut size={14}/> {language === 'bn' ? 'লগআউট' : 'Logout'}
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4 flex justify-between items-center z-30">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(true)} 
              className="md:hidden text-slate-700 hover:text-emerald-700 p-2 rounded-lg border border-slate-200"
            >
              <Menu size={20}/>
            </button>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                {language === 'bn' ? settings.schoolName : 'Sonar Bangla High School'}
              </h2>
              <p className="text-[11px] text-slate-400">EIIN: {toBanglaNum(settings.eiinCode)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold transition"
            >
              <Globe size={14} className="text-emerald-700" />
              <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                A
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">Admin</p>
                <p className="text-[10px] text-emerald-600 font-semibold">Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-grow p-4 sm:p-6 md:p-8 overflow-y-auto bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {!isLoading && <Outlet />}
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 z-40 md:hidden backdrop-blur-sm"></div>
      )}

      <BackToTop />
    </div>
  );
};

export default AdminLayout;
