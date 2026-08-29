import React from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Users, GraduationCap, ShieldCheck, Award } from 'lucide-react';

const Administration: React.FC = () => {
  const { committee, settings, teachers } = useData();
  const { language, t, toBanglaNum } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Users size={15} /> {language === 'bn' ? 'প্রশাসনিক নেতৃত্ব ও পরিচালনা পর্ষদ' : 'Administration & Governance'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.adminPage.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.adminPage.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Chairman & Principal Top Leadership Highlights */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <GraduationCap className="text-emerald-700" size={24} /> {t.adminPage.leadershipTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chairman Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition">
              <div className="w-32 h-40 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={settings.chairmanImage || "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg"} 
                  alt="Chairman" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {language === 'bn' ? 'সভাপতি (Chairman)' : 'Chairman'}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">{settings.chairmanName || "মাকসুদা সুলতানা"}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {language === 'bn' ? 'প্রকল্প পরিচালক, এস ও এস চিলড্রেন্স ভিলেজ খুলনা' : "Project Director, SOS Children's Village Khulna"}
                </p>
                <p className="text-xs text-slate-400">
                  {language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
                </p>
              </div>
            </div>

            {/* Principal Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition">
              <div className="w-32 h-40 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={settings.headmasterImage} 
                  alt={settings.headmasterName} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t.adminPage.headmaster}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">{settings.headmasterName}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {language === 'bn' ? 'অধ্যক্ষ ও সদস্য সচিব, গভর্নিং বডি' : 'Principal & Member Secretary, Governing Body'}
                </p>
                <p className="text-xs text-slate-400">
                  {language === 'bn' ? settings.schoolName : 'SOS HERMANN GMEINER SCHOOL KHULNA'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Committee Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <ShieldCheck className="text-emerald-700" size={24} /> {t.adminPage.committeeTitle} ({toBanglaNum(committee.length)})
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {committee.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200/90 text-center flex flex-col justify-between group"
              >
                <div>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-100 border-4 border-slate-50 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">{member.name}</h4>
                  <p className="text-xs text-emerald-700 font-bold mb-2">{member.position}</p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {member.type === 'President' ? (language === 'bn' ? 'সভাপতি' : 'President') : 
                     member.type === 'Donor' ? (language === 'bn' ? 'দাতা সদস্য' : 'Donor Member') : 
                     (language === 'bn' ? 'সদস্য' : 'Member')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Administration;
