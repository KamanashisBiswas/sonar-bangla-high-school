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

        {/* Headmaster & Academic Leadership Highlights */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <GraduationCap className="text-emerald-700" size={24} /> {t.adminPage.leadershipTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Headmaster Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition">
              <div className="w-32 h-40 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img src={settings.headmasterImage} alt={settings.headmasterName} className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t.adminPage.headmaster}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">{settings.headmasterName}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  এম.এস.সি, বি.এড • অভিজ্ঞতা: ২৫+ বছর
                </p>
                <p className="text-xs text-slate-400">
                  {language === 'bn' ? settings.schoolName : 'Sonar Bangla High School'}
                </p>
              </div>
            </div>

            {/* Assistant Headmaster Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition">
              <div className="w-32 h-40 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img src={teachers[1]?.image || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&fit=crop&q=80'} alt="সহকারী প্রধান শিক্ষক" className="w-full h-full object-cover" />
              </div>
              <div className="text-center sm:text-left space-y-2">
                <span className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t.adminPage.asstHeadmaster}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900">মোসাম্মৎ রেহানা পারভীন</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  এম.এ (ইংরেজি), বি.এড • অভিজ্ঞতা: ১৮+ বছর
                </p>
                <p className="text-xs text-slate-400">
                  {language === 'bn' ? settings.schoolName : 'Sonar Bangla High School'}
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
                  <h4 className="font-extrabold text-slate-900 text-base mb-1">{member.name}</h4>
                  <p className="text-xs font-extrabold text-emerald-700">{member.position}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-semibold">
                    {member.type}
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
