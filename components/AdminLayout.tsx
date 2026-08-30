import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, ImagePlus, LogOut, 
  Download, UserCog, GraduationCap, Bell, Menu, X,
  Settings, UserPlus, ClipboardCheck, ExternalLink, ShieldCheck, Globe,
  PanelLeftClose, PanelLeftOpen, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { PageLoader } from './ui/Loading';
import { AnimatePresence } from 'framer-motion';

const AdminLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-slate-900 text-white flex flex-col justify-between transform transition-all duration-300 ease-in-out md:relative md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64 shadow-2xl border-r border-slate-800`}
      >
        <div>
          {/* Sidebar Top Brand Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950 min-h-[72px]">
            <div className={`flex items-center gap-3 min-w-0 flex-1 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md flex-shrink-0">
                <img 
                  src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png" 
                  alt="SOS Hermann Gmeiner School Khulna" 
                  className="w-full h-full object-contain"
                />
              </div>
              {!isCollapsed && (
                <div className="min-w-0 flex-1">
                  <h2 className="font-extrabold text-xs text-white leading-tight break-words line-clamp-2">
                    {settings.schoolName}
                  </h2>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mt-0.5">
                    {language === 'bn' ? 'অ্যাডমিন প্যানেল' : 'Admin Portal'}
                  </span>
                </div>
              )}
            </div>

            {/* Mobile close button */}
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="md:hidden text-slate-400 hover:text-white p-1.5 rounded-lg"
            >
              <X size={20}/>
            </button>
          </div>

          {/* Nav items */}
          <nav className="p-2.5 space-y-1 overflow-y-auto max-h-[calc(100vh-170px)] text-xs">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                title={isCollapsed ? item.label : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold transition-all ${
                    isCollapsed ? 'justify-center' : ''
                  } ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  }`
                }
              >
                <item.icon size={19} className="flex-shrink-0" />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer Actions */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 space-y-2">
          <Link 
            to="/" 
            target="_blank" 
            title={language === 'bn' ? 'ওয়েবসাইট দেখুন' : 'Live Website'}
            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition ${isCollapsed ? 'px-0' : 'px-3'}`}
          >
            <ExternalLink size={16} className="flex-shrink-0" /> 
            {!isCollapsed && <span>{language === 'bn' ? 'ওয়েবসাইট দেখুন' : 'Live Website'}</span>}
          </Link>

          <button 
            onClick={handleLogout} 
            title={language === 'bn' ? 'লগআউট' : 'Logout'}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/30 transition ${isCollapsed ? 'px-0' : 'px-3'}`}
          >
            <LogOut size={16} className="flex-shrink-0"/> 
            {!isCollapsed && <span>{language === 'bn' ? 'লগআউট' : 'Logout'}</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Body */}
      <div className="flex-grow flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-4 sm:px-6 py-3.5 flex justify-between items-center z-30">
          <div className="flex items-center gap-3">
            {/* Hamburger menu button (works for both mobile drawer & desktop collapse) */}
            <button 
              onClick={() => {
                if (window.innerWidth < 768) {
                  setMobileMenuOpen(!mobileMenuOpen);
                } else {
                  setIsCollapsed(!isCollapsed);
                }
              }} 
              className="text-slate-700 hover:text-emerald-700 hover:bg-slate-100 p-2 rounded-xl border border-slate-200 transition shadow-xs flex items-center justify-center cursor-pointer"
              title={isCollapsed ? 'সাইডবার প্রসারিত করুন' : 'সাইডবার সংকুচিত করুন'}
            >
              <Menu size={20}/>
            </button>

            <div>
              <h2 className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                {language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
              </h2>
              <p className="text-[11px] text-slate-400 font-medium">EIIN: {toBanglaNum(settings.eiinCode)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer"
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
    </div>
  );
};

export default AdminLayout;
