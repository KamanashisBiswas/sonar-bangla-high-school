import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Result, SubjectResult } from '../../types';
import { Plus, Trash2, Search, X, Save, Calculator, Award } from 'lucide-react';

const calculateGradeInfo = (marks: number, fullMarks: number = 100) => {
  const percentage = (marks / fullMarks) * 100;
  if (percentage >= 80) return { grade: 'A+', gpa: 5.00 };
  if (percentage >= 70) return { grade: 'A', gpa: 4.00 };
  if (percentage >= 60) return { grade: 'A-', gpa: 3.50 };
  if (percentage >= 50) return { grade: 'B', gpa: 3.00 };
  if (percentage >= 40) return { grade: 'C', gpa: 2.00 };
  if (percentage >= 33) return { grade: 'D', gpa: 1.00 };
  return { grade: 'F', gpa: 0.00 };
};

const DEFAULT_SUBJECTS = [
  { code: '101', subject: 'বাংলা', fullMarks: 100 },
  { code: '107', subject: 'ইংরেজি', fullMarks: 100 },
  { code: '109', subject: 'গণিত', fullMarks: 100 },
  { code: '145', subject: 'সামাজিক বিজ্ঞান', fullMarks: 100 },
  { code: '111', subject: 'ধর্ম ও নৈতিক শিক্ষা', fullMarks: 100 },
  { code: '136', subject: 'বিজ্ঞান / পদার্থবিজ্ঞান', fullMarks: 100 },
];

const ManageResults: React.FC = () => {
  const { results, addResult, deleteResult } = useData();
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [studentInfo, setStudentInfo] = useState({
     roll: '',
     name: '',
     fatherName: '',
     motherName: '',
     classVal: '১০ম',
     section: 'ক',
     examName: 'বার্ষিক পরীক্ষা',
     year: '২০২৫',
     group: 'বিজ্ঞান',
     dob: ''
  });

  const [subjects, setSubjects] = useState<SubjectResult[]>(
    DEFAULT_SUBJECTS.map(s => ({ ...s, obtained: 0, grade: 'F', gpa: 0.00 }))
  );

  const handleSubjectChange = (index: number, obtained: number) => {
    const newSubjects = [...subjects];
    const info = calculateGradeInfo(obtained, newSubjects[index].fullMarks);
    newSubjects[index] = {
      ...newSubjects[index],
      obtained: obtained,
      grade: info.grade,
      gpa: info.gpa
    };
    setSubjects(newSubjects);
  };

  const calculateFinalResult = () => {
    const totalMarks = subjects.reduce((sum, sub) => sum + sub.obtained, 0);
    const totalGPA = subjects.reduce((sum, sub) => sum + sub.gpa, 0);
    const hasFailed = subjects.some(sub => sub.grade === 'F');
    
    const finalGPA = hasFailed ? 0.00 : parseFloat((totalGPA / subjects.length).toFixed(2));
    const finalGrade = hasFailed ? 'F' : calculateGradeInfo((totalMarks / (subjects.length * 100)) * 100).grade;
    
    return { totalMarks, finalGPA, finalGrade, status: hasFailed ? 'Failed' : 'Passed' };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculation = calculateFinalResult();

    const newResult: Result = {
        id: Date.now().toString(),
        studentName: studentInfo.name,
        fatherName: studentInfo.fatherName,
        motherName: studentInfo.motherName,
        roll: studentInfo.roll,
        class: studentInfo.classVal,
        section: studentInfo.section,
        year: studentInfo.year,
        examName: studentInfo.examName,
        group: studentInfo.group,
        dob: studentInfo.dob,
        totalMarks: calculation.totalMarks,
        gpa: calculation.finalGPA,
        grade: calculation.finalGrade,
        status: calculation.status as 'Passed' | 'Failed',
        subjects: subjects
    };
    
    addResult(newResult);
    setShowForm(false);
    setStudentInfo({ ...studentInfo, roll: '', name: '' });
    setSubjects(DEFAULT_SUBJECTS.map(s => ({ ...s, obtained: 0, grade: 'F', gpa: 0.00 })));
  };

  const filteredResults = results.filter(r => 
    r.roll.includes(searchTerm) || r.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
                <Award className="text-emerald-700" size={26} /> একাডেমিক ফলাফল ব্যবস্থাপনা
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">পরীক্ষার নম্বর ইনপুট, মার্কশিট তৈরি ও ফলাফল প্রকাশ</p>
            </div>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition"
            >
               {showForm ? <><X size={18}/> বাতিল</> : <><Plus size={18}/> নতুন ফলাফল এন্ট্রি</>}
            </button>
        </div>

        {/* Add Result Form */}
        {showForm && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200 animate-slide-up">
                <h3 className="font-bold text-lg mb-6 text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                   <Calculator className="text-emerald-700" size={20}/> মার্কশিট এন্ট্রি ফরম
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                       <div>
                         <label className={labelClass}>রোল নম্বর *</label>
                         <input required className={inputClass} value={studentInfo.roll} onChange={e => setStudentInfo({...studentInfo, roll: e.target.value})} placeholder="উদা: 101"/>
                       </div>
                       <div>
                         <label className={labelClass}>শিক্ষার্থীর নাম *</label>
                         <input required className={inputClass} value={studentInfo.name} onChange={e => setStudentInfo({...studentInfo, name: e.target.value})} placeholder="উদা: মোঃ আরিয়ান আহমেদ"/>
                       </div>
                       <div>
                         <label className={labelClass}>শ্রেণি</label>
                         <select className={inputClass} value={studentInfo.classVal} onChange={e => setStudentInfo({...studentInfo, classVal: e.target.value})}>
                           <option>৬ষ্ঠ</option><option>৭ম</option><option>৮ম</option><option>৯ম</option><option>১০ম</option>
                         </select>
                       </div>
                       <div>
                         <label className={labelClass}>পরীক্ষার নাম</label>
                         <select className={inputClass} value={studentInfo.examName} onChange={e => setStudentInfo({...studentInfo, examName: e.target.value})}>
                           <option>অর্ধ-বার্ষিক পরীক্ষা</option><option>বার্ষিক পরীক্ষা</option><option>প্রাক-নির্বাচনী পরীক্ষা</option>
                         </select>
                       </div>
                   </div>

                   {/* Subject Marks Entry */}
                   <div className="overflow-x-auto rounded-2xl border border-slate-200">
                     <table className="w-full text-xs sm:text-sm text-left">
                        <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                          <tr>
                            <th className="p-3.5 w-20">কোড</th>
                            <th className="p-3.5">বিষয়</th>
                            <th className="p-3.5 w-24 text-center">পূর্ণমান</th>
                            <th className="p-3.5 w-32 text-center">প্রাপ্ত নম্বর</th>
                            <th className="p-3.5 w-24 text-center">লেটার গ্রেড</th>
                            <th className="p-3.5 w-24 text-center">জিপিএ (GPA)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {subjects.map((subject, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                               <td className="p-3.5 text-slate-400 font-bold">{subject.code}</td>
                               <td className="p-3.5 font-bold text-slate-800">{subject.subject}</td>
                               <td className="p-3.5 text-center text-slate-500 font-medium">{subject.fullMarks}</td>
                               <td className="p-3.5 text-center">
                                 <input 
                                   type="number" 
                                   max={subject.fullMarks}
                                   min={0}
                                   className="w-24 bg-white border border-slate-300 rounded-lg px-2 py-1.5 text-center focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none font-bold text-slate-900"
                                   value={subject.obtained}
                                   onChange={(e) => handleSubjectChange(index, parseInt(e.target.value) || 0)}
                                 />
                                </td>
                               <td className={`p-3.5 text-center font-extrabold ${subject.grade === 'F' ? 'text-rose-600' : 'text-emerald-700'}`}>
                                 {subject.grade}
                               </td>
                               <td className="p-3.5 text-center font-bold text-slate-700">{subject.gpa.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                           <tr>
                              <td colSpan={2} className="p-4 text-right text-xs text-slate-500 uppercase">সর্বমোট:</td>
                              <td className="p-4 text-center text-slate-600">{subjects.reduce((a, b) => a + b.fullMarks, 0)}</td>
                              <td className="p-4 text-center text-base text-emerald-800">{subjects.reduce((a, b) => a + b.obtained, 0)}</td>
                              <td className="p-4 text-center text-emerald-800" colSpan={2}>
                                 {(() => {
                                    const res = calculateFinalResult();
                                    return `GPA: ${res.finalGPA} (${res.status})`;
                                 })()}
                              </td>
                           </tr>
                        </tfoot>
                     </table>
                   </div>

                   <button 
                     type="submit" 
                     className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 rounded-xl font-bold transition shadow-md shadow-emerald-800/20 flex items-center justify-center gap-2"
                   >
                      <Save size={18}/> ফলাফল প্রকাশ ও সংরক্ষণ করুন
                   </button>
                </form>
            </div>
        )}

        {/* Results List */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h3 className="font-bold text-slate-800 text-sm">প্রকাশিত ফলাফল তালিকা ({results.length})</h3>
                <div className="relative w-full sm:w-64">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/>
                    <input 
                      type="text" 
                      placeholder="রোল বা নাম দিয়ে খুঁজুন..." 
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                      <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                          <th className="p-4 sm:p-5">রোল</th>
                          <th className="p-4 sm:p-5">শিক্ষার্থীর নাম</th>
                          <th className="p-4 sm:p-5 text-center">শ্রেণি</th>
                          <th className="p-4 sm:p-5 text-center">মোট নম্বর</th>
                          <th className="p-4 sm:p-5 text-center">GPA (গ্রেড)</th>
                          <th className="p-4 sm:p-5 text-center">স্ট্যাটাস</th>
                          <th className="p-4 sm:p-5 text-right">অ্যাকশন</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                      {filteredResults.length === 0 ? (
                          <tr><td colSpan={7} className="p-10 text-center text-slate-400 font-semibold">কোনো ফলাফল পাওয়া যায়নি</td></tr>
                      ) : (
                          filteredResults.map(res => (
                              <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                                  <td className="p-4 sm:p-5 font-extrabold text-slate-900">#{res.roll}</td>
                                  <td className="p-4 sm:p-5 font-bold text-slate-900">{res.studentName}</td>
                                  <td className="p-4 sm:p-5 text-center">
                                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                                      {res.class} শ্রেণি
                                    </span>
                                  </td>
                                  <td className="p-4 sm:p-5 text-center font-bold text-slate-700">{res.totalMarks}</td>
                                  <td className="p-4 sm:p-5 text-center font-extrabold text-emerald-800">{res.gpa.toFixed(2)} ({res.grade})</td>
                                  <td className="p-4 sm:p-5 text-center">
                                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                                        res.status === 'Passed' 
                                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                                          : 'bg-rose-50 text-rose-800 border border-rose-200'
                                      }`}>
                                          {res.status === 'Passed' ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ'}
                                      </span>
                                  </td>
                                  <td className="p-4 sm:p-5 text-right">
                                      <button 
                                        onClick={() => deleteResult(res.id)} 
                                        className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200" 
                                        title="মুছে ফেলুন"
                                      >
                                        <Trash2 size={16}/>
                                      </button>
                                  </td>
                              </tr>
                          ))
                      )}
                  </tbody>
              </table>
            </div>
        </div>
    </div>
  );
};

export default ManageResults;
