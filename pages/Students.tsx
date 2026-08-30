import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Student } from '../types';
import { Search, GraduationCap, Eye, X, Droplet, Layers, Briefcase } from 'lucide-react';

const Students: React.FC = () => {
  const { students } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [selectedClass, setSelectedClass] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = students.filter(student => {
    const matchesClass = selectedClass === 'all' || student.class.includes(selectedClass) || student.class === selectedClass;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          String(student.roll).includes(searchTerm);
    return matchesClass && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap size={15} /> {language === 'bn' ? 'শিক্ষার্থী তথ্যকোষ' : 'Student Database'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.studentsPage.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.studentsPage.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            {[
              { id: 'all', label: t.studentsPage.tabAll },
              { id: '10', label: t.academic.class10 },
              { id: '9', label: t.academic.class9 },
              { id: '8', label: t.academic.class8 },
              { id: '7', label: t.academic.class7 },
              { id: '6', label: t.academic.class6 },
            ].map(cls => (
              <button
                key={cls.id}
                onClick={() => setSelectedClass(cls.id)}
                className={`px-4 py-2 rounded-xl font-bold transition flex-shrink-0 cursor-pointer ${
                  selectedClass === cls.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cls.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.studentsPage.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-xs sm:text-sm outline-none transition font-medium"
            />
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                  <th className="p-4 sm:p-5">{t.studentsPage.rollCol}</th>
                  <th className="p-4 sm:p-5">{t.studentsPage.nameCol}</th>
                  <th className="p-4 sm:p-5 text-center">{t.studentsPage.classCol}</th>
                  <th className="p-4 sm:p-5 text-center">{t.studentsPage.sectionCol}</th>
                  <th className="p-4 sm:p-5 text-center">{t.studentsPage.groupCol}</th>
                  <th className="p-4 sm:p-5 text-right">{t.studentsPage.actionCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-slate-400 font-semibold">
                      {language === 'bn' ? 'কোনো শিক্ষার্থী পাওয়া যায়নি।' : 'No student records found.'}
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5 font-black text-slate-900">#{toBanglaNum(s.roll)}</td>
                      <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-3">
                        <img 
                          src={s.image} 
                          alt="" 
                          className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"
                        />
                        <div>
                          <span>{s.name}</span>
                          <span className="text-[10px] text-slate-400 block font-mono">ID: SB-{toBanglaNum(s.id)}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold">
                          {toBanglaNum(s.class)} {t.academic.class}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-center font-bold text-slate-600">{s.section}</td>
                      <td className="p-4 sm:p-5 text-center text-slate-500 font-medium">{s.group || '-'}</td>
                      <td className="p-4 sm:p-5 text-right">
                        <button 
                          onClick={() => setSelectedStudent(s)}
                          className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-emerald-700 text-slate-700 hover:text-white px-3.5 py-1.5 rounded-xl font-bold text-xs transition border border-slate-200 hover:border-emerald-700 shadow-sm cursor-pointer"
                        >
                          <Eye size={13} /> {t.studentsPage.viewIdBtn}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Student ID Card Modal */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedStudent(null)}>
            <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl relative border border-slate-200" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedStudent(null)} 
                className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full transition cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="bg-emerald-800 h-28 relative">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={selectedStudent.image} 
                    alt={selectedStudent.name} 
                    className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover bg-white"
                  />
                </div>
              </div>

              <div className="px-6 pb-6 pt-14 text-center">
                <h2 className="text-xl font-extrabold text-slate-900">{selectedStudent.name}</h2>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  {t.studentsPage.rollCol}: #{toBanglaNum(selectedStudent.roll)} • ID: SB-{toBanglaNum(selectedStudent.id)}
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                      <GraduationCap size={12} className="text-emerald-700" /> {t.studentsPage.classCol}
                    </p>
                    <p className="text-sm font-extrabold text-slate-800">
                      {toBanglaNum(selectedStudent.class)} {t.academic.class}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                      <Layers size={12} className="text-emerald-700" /> {t.studentsPage.sectionCol}
                    </p>
                    <p className="text-sm font-extrabold text-slate-800">
                      {selectedStudent.section}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                      <Briefcase size={12} className="text-emerald-700" /> {t.studentsPage.groupCol}
                    </p>
                    <p className="text-sm font-extrabold text-slate-800">
                      {selectedStudent.group || (language === 'bn' ? 'সাধারণ' : 'General')}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                      <Droplet size={12} className="text-emerald-700" /> {language === 'bn' ? 'রক্তের গ্রুপ' : 'Blood Group'}
                    </p>
                    <p className="text-sm font-extrabold text-slate-800">
                      {selectedStudent.bloodGroup || 'N/A'}
                    </p>
                  </div>
                </div>
                
                <div className="mt-5 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-2">
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-1.5">
                    {language === 'bn' ? 'অভিভাবকের তথ্য' : 'Guardian Details'}
                  </h3>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{t.result.fatherName}:</span>
                    <span className="font-bold text-slate-800">{selectedStudent.fatherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{t.result.motherName}:</span>
                    <span className="font-bold text-slate-800">{selectedStudent.motherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">{t.admission.mobile}:</span>
                    <span className="font-bold text-emerald-800">{toBanglaNum(selectedStudent.guardianPhone || '-')}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  {t.common.close}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Students;
