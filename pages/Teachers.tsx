import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Briefcase, Mail, Phone, BookOpen, Award } from 'lucide-react';

const Teachers: React.FC = () => {
  const { teachers, staff } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [activeTab, setActiveTab] = useState<'teachers' | 'staff'>('teachers');

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap size={15} /> {language === 'bn' ? 'সম্মানিত শিক্ষকমণ্ডলী ও স্টাফ' : 'Faculty & Staff Directory'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.teachers.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.teachers.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('teachers')}
            className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-sm cursor-pointer ${
              activeTab === 'teachers'
                ? 'bg-emerald-700 text-white shadow-emerald-800/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <GraduationCap size={18} /> {t.teachers.tabTeachers} ({toBanglaNum(teachers.length)})
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-sm cursor-pointer ${
              activeTab === 'staff'
                ? 'bg-emerald-700 text-white shadow-emerald-800/20'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase size={18} /> {t.teachers.tabStaff} ({toBanglaNum(staff.length)})
          </button>
        </div>

        {/* Teachers Grid */}
        {activeTab === 'teachers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <div 
                key={teacher.id} 
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200/90 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-28 h-28 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-100 border-4 border-slate-50 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-extrabold text-slate-900 text-base mb-0.5">{teacher.name}</h3>
                    <p className="text-xs font-bold text-emerald-700">{teacher.designation}</p>
                    <span className="inline-block mt-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[11px] font-semibold">
                      {t.teachers.subject}: {teacher.subject}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  <p className="text-[11px]"><strong className="text-slate-700">{t.teachers.qualifications}:</strong> {teacher.qualifications}</p>
                  {teacher.phone && (
                    <p className="flex items-center gap-1.5 text-slate-600">
                      <Phone size={12} className="text-emerald-700" /> {toBanglaNum(teacher.phone)}
                    </p>
                  )}
                  {teacher.email && (
                    <p className="flex items-center gap-1.5 text-slate-600 truncate">
                      <Mail size={12} className="text-emerald-700" /> {teacher.email}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Staff Grid */}
        {activeTab === 'staff' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staff.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-slate-200/90 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-slate-100 border-4 border-slate-50 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-extrabold text-slate-900 text-base mb-0.5">{member.name}</h3>
                    <p className="text-xs font-bold text-slate-600">{member.designation}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
                  {member.phone && (
                    <p className="flex items-center gap-1.5 text-slate-600">
                      <Phone size={12} className="text-emerald-700" /> {toBanglaNum(member.phone)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Teachers;
