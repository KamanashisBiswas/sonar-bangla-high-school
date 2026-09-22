import React, { useState } from 'react';
import { Lock, User, AlertCircle, ShieldCheck, ArrowRight, GraduationCap, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { settings } = useData();
  const { language, toggleLanguage, t } = useLanguage();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = login(username, password);
    
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError(language === 'bn' 
        ? 'ভুল ইউজারনেম বা পাসওয়ার্ড। অনুগ্রহ করে পুনরায় চেষ্টা করুন।' 
        : 'Invalid username or password. Please try again.'
      );
    }
  };

  const inputClass = "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden border border-slate-200 animate-fade-in relative">
        
        {/* Language switch button in login */}
        <button 
          onClick={toggleLanguage}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 border border-white/20"
        >
          <Globe size={12} />
          <span>{language === 'bn' ? 'EN' : 'বাংলা'}</span>
        </button>

        {/* Header */}
        <div className="bg-emerald-900 p-8 text-center text-white relative">
          <div className="w-16 h-16 rounded-2xl bg-white p-1 flex items-center justify-center mx-auto mb-3 shadow-md border border-slate-200">
            <img 
              src="https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png" 
              alt="SOS Hermann Gmeiner School Khulna" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-base sm:text-lg font-extrabold">{language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}</h2>
          <p className="text-emerald-200 text-xs font-semibold mt-1">
            {language === 'bn' ? 'অ্যাডমিন ও শিক্ষক পোর্টাল লগইন' : 'Admin & Faculty Portal Login'}
          </p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-rose-50 text-rose-700 p-3.5 rounded-xl border border-rose-200 text-xs font-bold flex items-start gap-2">
                <AlertCircle size={16} className="text-rose-600 flex-shrink-0 mt-0.5" /> 
                <span>{error}</span>
              </div>
            )}
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                {language === 'bn' ? 'ইউজারনেম' : 'Username'}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><User size={18} /></span>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={inputClass} 
                  placeholder="admin"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                {language === 'bn' ? 'পাসওয়ার্ড' : 'Password'}
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"><Lock size={18} /></span>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClass} 
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl transition shadow-md shadow-emerald-800/20 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer"
            >
              {language === 'bn' ? 'প্রবেশ করুন' : 'Sign In'} <ArrowRight size={16} />
            </button>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-center text-xs text-slate-500 space-y-1">
               <span className="font-bold text-slate-700 block">
                 {language === 'bn' ? 'ডেমো অ্যাডমিন এক্সেস:' : 'Demo Admin Credentials:'}
               </span>
               <span className="text-emerald-700 font-mono font-bold">admin</span> / <span className="text-emerald-700 font-mono font-bold">admin123</span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
