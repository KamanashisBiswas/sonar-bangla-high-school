import React, { useState } from 'react';
import { Search, Printer, AlertCircle, CheckCircle, XCircle, Calculator, GraduationCap, Award, FileText, ChevronRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Result as ResultType } from '../types';

const Result: React.FC = () => {
  const { results, settings } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [year, setYear] = useState('2025');
  const [examType, setExamType] = useState('annual');
  const [className, setClassName] = useState('10');
  const [roll, setRoll] = useState('');
  const [result, setResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    setTimeout(() => {
      const foundResult = results.find(r => 
        r.roll.trim() === roll.trim() && 
        (r.class.includes(className) || r.class === className)
      );

      if (foundResult) {
        setResult(foundResult);
      } else {
        setError(language === 'bn' 
          ? `দুঃখিত, ${className}ম শ্রেণির রোল ${roll}-এর কোনো ফলাফল খুঁজে পাওয়া যায়নি। রোল ও শ্রেণি সঠিক কিনা যাচাই করুন।`
          : `Sorry, no result found for Class ${className} with Roll ${roll}. Please verify the credentials.`
        );
      }
      setLoading(false);
    }, 500);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-800 font-semibold text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="bg-slate-50 min-h-screen py-12 print:bg-white print:py-0 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10 print:hidden">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator size={15} /> {language === 'bn' ? 'একাডেমিক ফলাফল পোর্টাল' : 'Academic Result Portal'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.result.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.result.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Search Form Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/90 mb-10 print:hidden">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
            <div>
               <label className={labelClass}>{t.result.session}</label>
               <select value={year} onChange={e => setYear(e.target.value)} className={inputClass}>
                 <option value="2025">{toBanglaNum(2025)}</option>
                 <option value="2024">{toBanglaNum(2024)}</option>
                 <option value="2023">{toBanglaNum(2023)}</option>
               </select>
            </div>
            <div>
               <label className={labelClass}>{t.result.examName}</label>
               <select value={examType} onChange={e => setExamType(e.target.value)} className={inputClass}>
                 <option value="annual">{t.result.examFinal}</option>
                 <option value="half_yearly">{t.result.examHalfYearly}</option>
                 <option value="pre_test">{t.result.examPreTest}</option>
                 <option value="test">{t.result.examTest}</option>
               </select>
            </div>
            <div>
               <label className={labelClass}>{t.academic.class}</label>
               <select value={className} onChange={e => setClassName(e.target.value)} className={inputClass}>
                 <option value="10">{t.academic.class10}</option>
                 <option value="9">{t.academic.class9}</option>
                 <option value="8">{t.academic.class8}</option>
                 <option value="7">{t.academic.class7}</option>
                 <option value="6">{t.academic.class6}</option>
               </select>
            </div>
            <div>
               <label className={labelClass}>{t.studentsPage.rollCol}</label>
               <input 
                 type="text" 
                 value={roll} 
                 onChange={e => setRoll(e.target.value)} 
                 placeholder="101" 
                 className={inputClass}
                 required
               />
            </div>
            <div>
               <button 
                 type="submit" 
                 disabled={loading}
                 className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-md shadow-emerald-800/20 flex items-center justify-center gap-2 text-sm disabled:opacity-70 cursor-pointer"
               >
                 {loading ? (
                   <span className="inline-block animate-spin">⌛</span>
                 ) : (
                   <Search size={16} />
                 )}
                 {loading ? t.common.loading : t.result.searchBtn}
               </button>
            </div>
          </form>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-5 rounded-2xl mb-8 flex items-start gap-3 print:hidden animate-fade-in">
            <AlertCircle size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm">{t.result.notFoundTitle}</h4>
              <p className="text-xs text-rose-700 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* Official Printable Academic Marksheet Card */}
        {result && (
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden mb-12 animate-fade-in print:shadow-none print:border-none print:m-0">
            
            {/* Marksheet Print Header with Institution Crest */}
            <div className="bg-emerald-900 text-white p-8 sm:p-10 text-center relative border-b-4 border-amber-400 print:bg-emerald-900 print:text-white">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-3 shadow-inner border border-white/20">
                  <GraduationCap size={36} className="text-amber-300" />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  {language === 'bn' ? settings.schoolName : 'Sonar Bangla High School'}
                </h1>
                <p className="text-xs sm:text-sm text-emerald-200 font-medium mt-1">
                  {settings.schoolAddress}
                </p>
                <div className="flex items-center gap-4 text-xs text-emerald-300 mt-2 font-mono">
                  <span>EIIN: {toBanglaNum(settings.eiinCode)}</span>
                  <span>•</span>
                  <span>{t.topbar.estd}: {toBanglaNum(settings.establishedYear)}</span>
                </div>
                
                <div className="inline-block bg-amber-400 text-emerald-950 px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest mt-4 shadow">
                  {t.result.officialMarksheet}
                </div>
              </div>
            </div>

            {/* Student & Examination Details Grid */}
            <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-wider text-[10px] block mb-1">{t.result.studentName}</span>
                  <span className="font-extrabold text-slate-900 text-sm">{result.studentName}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-wider text-[10px] block mb-1">{t.studentsPage.rollCol} & {t.academic.class}</span>
                  <span className="font-extrabold text-slate-900 text-sm">#{toBanglaNum(result.roll)} ({toBanglaNum(result.class)} {t.academic.class})</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-wider text-[10px] block mb-1">{t.result.fatherName}</span>
                  <span className="font-bold text-slate-800">{result.fatherName || '-'}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="text-slate-400 uppercase font-bold tracking-wider text-[10px] block mb-1">{t.result.examName}</span>
                  <span className="font-bold text-emerald-800">{result.examName} ({toBanglaNum(result.year)})</span>
                </div>
              </div>
            </div>

            {/* Detailed Subject Marks Table */}
            <div className="p-6 sm:p-8 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 uppercase font-extrabold text-[11px] tracking-wider border-b border-slate-300">
                    <th className="p-3 sm:p-4">{t.result.code}</th>
                    <th className="p-3 sm:p-4">{t.result.subject}</th>
                    <th className="p-3 sm:p-4 text-center">{t.result.fullMarks}</th>
                    <th className="p-3 sm:p-4 text-center">{t.result.obtainedMarks}</th>
                    <th className="p-3 sm:p-4 text-center">{t.result.letterGrade}</th>
                    <th className="p-3 sm:p-4 text-center">{t.result.gpa}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {result.subjects.map((sub, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 sm:p-4 font-mono text-slate-500 font-bold">{toBanglaNum(sub.code)}</td>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">{sub.subject}</td>
                      <td className="p-3 sm:p-4 text-center text-slate-600 font-semibold">{toBanglaNum(sub.fullMarks)}</td>
                      <td className="p-3 sm:p-4 text-center font-extrabold text-slate-900">{toBanglaNum(sub.obtained)}</td>
                      <td className="p-3 sm:p-4 text-center">
                        <span className={`px-2 py-0.5 rounded font-extrabold text-xs ${sub.grade === 'A+' ? 'bg-emerald-100 text-emerald-800' : sub.grade === 'F' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-800'}`}>
                          {sub.grade}
                        </span>
                      </td>
                      <td className="p-3 sm:p-4 text-center font-bold text-slate-700">{toBanglaNum(sub.gpa.toFixed(2))}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50 border-t-2 border-slate-300 font-bold text-slate-800">
                    <td colSpan={2} className="p-4 text-right uppercase tracking-wider text-xs">{t.result.total}:</td>
                    <td className="p-4 text-center">{toBanglaNum(result.subjects.reduce((sum, s) => sum + s.fullMarks, 0))}</td>
                    <td className="p-4 text-center text-base font-extrabold text-emerald-800">{toBanglaNum(result.totalMarks)}</td>
                    <td colSpan={2} className="p-4 text-center text-xs font-semibold text-slate-500">GPA: {toBanglaNum(result.gpa.toFixed(2))}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Result Summary & Standing Status */}
            <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md ${result.status === 'Passed' ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                    {result.status === 'Passed' ? <Award size={32} /> : <XCircle size={32} />}
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{t.result.overallResult}</span>
                    <h3 className={`text-xl font-black ${result.status === 'Passed' ? 'text-emerald-800' : 'text-rose-700'}`}>
                      {result.status === 'Passed' ? t.result.passed : t.result.failed}
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold mt-0.5">
                      {t.result.gpaEarned}: <span className="font-extrabold text-slate-900 font-mono text-sm">{toBanglaNum(result.gpa.toFixed(2))}</span> (গ্রেড {result.grade})
                    </p>
                  </div>
                </div>

                <div className="print:hidden">
                  <button 
                    onClick={() => window.print()} 
                    className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition shadow-md flex items-center gap-2 text-xs cursor-pointer"
                  >
                    <Printer size={16} /> {t.result.printBtn}
                  </button>
                </div>
              </div>

              {/* Signatures for Print View */}
              <div className="hidden print:flex justify-between items-end pt-16 mt-12 text-xs text-slate-600 border-t border-slate-300">
                <div className="text-center">
                  <div className="w-36 border-b border-slate-400 pb-1 mb-1"></div>
                  <span>{t.result.classTeacherSig}</span>
                </div>
                <div className="text-center">
                  <div className="w-36 border-b border-slate-400 pb-1 mb-1"></div>
                  <span>{t.result.headmasterSig}</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Result;
