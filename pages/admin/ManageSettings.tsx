import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Save, CheckCircle2, Settings, User, Globe, Image as ImageIcon } from 'lucide-react';

const ManageSettings: React.FC = () => {
  const { settings, updateSettings } = useData();
  const { language } = useLanguage();
  const [formData, setFormData] = useState(settings);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setMessage(language === 'bn' ? 'সেটিংস সফলভাবে আপডেট ও সংরক্ষণ হয়েছে!' : 'Settings updated and saved successfully!');
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
              <Settings className="text-emerald-700" size={26} /> 
              {language === 'bn' ? 'ওয়েবসাইট জেনারেল সেটিংস' : 'Website General Settings'}
           </h2>
           <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              {language === 'bn' ? 'বিদ্যালয়ের নাম, যোগাযোগের তথ্য, প্রধান শিক্ষকের বাণী ও ব্যানার কন্টেন্ট' : 'School name, contact details, leadership speeches, and banner settings'}
           </p>
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
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'বিদ্যালয়ের পরিচিতি ও যোগাযোগ' : 'School Identity & Contact Info'}
              </h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'বিদ্যালয়ের পূর্ণ নাম *' : 'School Full Name *'}</label>
                 <input name="schoolName" value={formData.schoolName} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'বিদ্যালয়ের ঠিকানা *' : 'School Address *'}</label>
                 <input name="schoolAddress" value={formData.schoolAddress} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'EIIN নম্বর' : 'EIIN Code'}</label>
                 <input name="eiinCode" value={formData.eiinCode} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'প্রতিষ্ঠার সাল' : 'Established Year'}</label>
                 <input name="establishedYear" value={formData.establishedYear} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'অফিসিয়াল ইমেইল' : 'Official Email'}</label>
                 <input name="contactEmail" value={formData.contactEmail} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'হটলাইন / মোবাইল নম্বর' : 'Helpline / Phone Number'}</label>
                 <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                 <label className={labelClass}>{language === 'bn' ? 'বিদ্যালয় পরিচিতি বার্তা (About Text)' : 'About School Text'}</label>
                 <textarea name="aboutUsText" value={formData.aboutUsText} onChange={handleChange} rows={5} className={inputClass}></textarea>
              </div>
           </div>
        </div>

        {/* Headmaster Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-3">
              <User className="text-emerald-700" size={22} />
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'প্রধান শিক্ষকের প্রোফাইল ও বাণী' : "Principal's Profile & Message"}
              </h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'প্রধান শিক্ষকের নাম' : "Principal's Name"}</label>
                 <input name="headmasterName" value={formData.headmasterName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'প্রোফাইল ছবির URL' : 'Profile Image URL'}</label>
                 <input name="headmasterImage" value={formData.headmasterImage} onChange={handleChange} className={inputClass} />
              </div>
              <div className="md:col-span-2">
                 <label className={labelClass}>{language === 'bn' ? 'প্রধান শিক্ষকের বাণী' : "Principal's Speech Message"}</label>
                 <textarea name="headmasterMessage" value={formData.headmasterMessage} onChange={handleChange} rows={5} className={inputClass}></textarea>
              </div>
           </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
           <div className="flex items-center gap-2.5 mb-6 border-b border-slate-100 pb-3">
              <ImageIcon className="text-emerald-700" size={22} />
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'bn' ? 'হোমপেজ ব্যানার (Hero Section)' : 'Homepage Hero Banner'}
              </h3>
           </div>
           <div className="space-y-4">
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'ব্যানার প্রধান শিরোনাম' : 'Hero Main Title'}</label>
                 <input name="heroTitle" value={formData.heroTitle} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'ব্যানার সাব-টাইটেল / বার্তা' : 'Hero Subtitle'}</label>
                 <input name="heroSubtitle" value={formData.heroSubtitle} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                 <label className={labelClass}>{language === 'bn' ? 'ব্যানার ব্যাকগ্রাউন্ড ছবির URL' : 'Hero Background Image URL'}</label>
                 <input name="heroImage" value={formData.heroImage} onChange={handleChange} className={inputClass} />
              </div>
           </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition shadow-md shadow-emerald-800/20 flex items-center justify-center gap-2 cursor-pointer"
          >
             <Save size={18} /> {language === 'bn' ? 'সেটিংস পরিবর্তন সেভ করুন' : 'Save Changes'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default ManageSettings;
