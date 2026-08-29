import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Save, CheckCircle2, Settings, User, Globe, Image as ImageIcon } from 'lucide-react';

const ManageSettings: React.FC = () => {
  const { settings, updateSettings } = useData();
  const [formData, setFormData] = useState(settings);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setMessage('সেটিংস সফলভাবে আপডেট ও সংরক্ষণ হয়েছে!');
    setTimeout(() => setMessage(''), 4000);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800 pb-10">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
           <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <Settings className="text-emerald-700" size={26} /> ওয়েবসাইট জেনারেল সেটিংস
           </h2>
           <p className="text-slate-500 text-xs sm:text-sm mt-0.5">বিদ্যালয়ের নাম, যোগাযোগের তথ্য, প্রধান শিক্ষকের বাণী ও ব্যানার কন্টেন্ট</p>
        </div>
      </div>
      
      {message && (
        <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl border border-emerald-200 flex items-center gap-2.5 font-bold text-xs sm:text-sm shadow-sm animate-fade-in">
           <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" /> 
           <span>{message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* General Settings Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-3">
              <Globe className="text-emerald-700" size={22} />
              <h3 className="text-lg font-bold text-slate-900">বিদ্যালয়ের পরিচিতি ও যোগাযোগ</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                 <label className={labelClass}>বিদ্যালয়ের পূর্ণ নাম *</label>
                 <input name="schoolName" value={formData.schoolName} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                 <label className={labelClass}>বিদ্যালয়ের ঠিকানা *</label>
                 <input name="schoolAddress" value={formData.schoolAddress} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                 <label className={labelClass}>EIIN নম্বর</label>
                 <input name="eiinCode" value={formData.eiinCode} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>প্রতিষ্ঠার সাল</label>
                 <input name="establishedYear" value={formData.establishedYear} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>অফিসিয়াল ইমেইল</label>
                 <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>হটলাইন / মোবাইল নম্বর</label>
                 <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                 <label className={labelClass}>বিদ্যালয় পরিচিতি বার্তা (About Text)</label>
                 <textarea name="aboutUsText" value={formData.aboutUsText} onChange={handleChange} rows={5} className={inputClass}></textarea>
              </div>
           </div>
        </div>

        {/* Headmaster Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-3">
              <User className="text-emerald-700" size={22} />
              <h3 className="text-lg font-bold text-slate-900">প্রধান শিক্ষকের প্রোফাইল ও বাণী</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                 <label className={labelClass}>প্রধান শিক্ষকের নাম</label>
                 <input name="headmasterName" value={formData.headmasterName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>প্রোফাইল ছবির URL</label>
                 <input name="headmasterImage" value={formData.headmasterImage} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                 <label className={labelClass}>প্রধান শিক্ষকের বাণী</label>
                 <textarea name="headmasterMessage" value={formData.headmasterMessage} onChange={handleChange} rows={5} className={inputClass}></textarea>
              </div>
           </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-3">
              <ImageIcon className="text-emerald-700" size={22} />
              <h3 className="text-lg font-bold text-slate-900">হোমপেজ ব্যানার (Hero Section)</h3>
           </div>
           <div className="space-y-4">
              <div>
                 <label className={labelClass}>ব্যানার প্রধান শিরোনাম</label>
                 <input name="heroTitle" value={formData.heroTitle} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>ব্যানার সাব-টাইটেল / বার্তা</label>
                 <input name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>ব্যানার ব্যাকগ্রাউন্ড ছবির URL</label>
                 <input name="heroImage" value={formData.heroImage} onChange={handleChange} className={inputClass} />
              </div>
           </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition shadow-md shadow-emerald-800/20 flex items-center justify-center gap-2"
          >
             <Save size={18} /> সেটিংস পরিবর্তন সেভ করুন
          </button>
        </div>

      </form>
    </div>
  );
};

export default ManageSettings;
