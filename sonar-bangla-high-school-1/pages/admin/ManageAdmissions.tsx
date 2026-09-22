import React from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Check, X, Clock, UserCheck, Phone, Calendar } from 'lucide-react';

const ManageAdmissions: React.FC = () => {
  const { admissionRequests, updateAdmissionStatus } = useData();
  const { language, toBanglaNum } = useLanguage();
  
  const sortedRequests = [...admissionRequests].sort((a, b) => {
    if (a.status === 'Pending' && b.status !== 'Pending') return -1;
    if (a.status !== 'Pending' && b.status === 'Pending') return 1;
    return 0;
  });

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
           <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <UserCheck className="text-emerald-700" size={26} /> 
              {language === 'bn' ? 'ভর্তি আবেদনসমূহ' : 'Admission Applications'}
           </h2>
           <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
             {language === 'bn' ? 'নতুন শিক্ষার্থীদের অনলাইন আবেদন যাচাই ও অনুমোদন করুন' : 'Verify, approve or manage new student online admission applications'}
           </p>
        </div>
        <div className="flex items-center gap-3">
           <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
              <Clock size={16} className="text-amber-700" />
              <span>
                {language === 'bn' 
                  ? `বিচারাধীন আবেদন: ${toBanglaNum(admissionRequests.filter(r => r.status === 'Pending').length)} টি`
                  : `Pending Applications: ${admissionRequests.filter(r => r.status === 'Pending').length}`
                }
              </span>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="font-bold text-slate-800 text-sm">
             {language === 'bn' ? 'আবেদনকারীদের বিস্তারিত তালিকা' : 'Applicant Records List'} ({toBanglaNum(sortedRequests.length)})
           </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">{language === 'bn' ? 'আবেদনকারী' : 'Applicant'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'আবেদনের শ্রেণি' : 'Applied Class'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'পিতার নাম' : "Father's Name"}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'মোবাইল' : 'Mobile'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'আবেদনের তারিখ' : 'Submission Date'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'স্ট্যাটাস' : 'Status'}</th>
                <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sortedRequests.length === 0 ? (
                  <tr>
                      <td colSpan={7} className="p-16 text-center text-slate-400 font-semibold">
                        {language === 'bn' ? 'বর্তমানে কোনো নতুন আবেদন জমা পড়েনি' : 'No new applications submitted currently'}
                      </td>
                  </tr>
              ) : (
                  sortedRequests.map(req => (
                  <tr key={req.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 sm:p-5">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-extrabold text-emerald-800">
                                {req.studentNameBn ? req.studentNameBn[0] : (req.studentNameEn ? req.studentNameEn[0] : 'S')}
                             </div>
                             <div>
                                <span className="block font-bold text-slate-900">{language === 'bn' ? req.studentNameBn : req.studentNameEn || req.studentNameBn}</span>
                                <span className="text-[11px] text-slate-400 font-medium">{req.studentNameEn}</span>
                             </div>
                          </div>
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-bold">
                          {language === 'bn' ? `${req.desiredClass} শ্রেণি` : `Class ${req.desiredClass}`}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 font-medium text-slate-700">{req.fatherName}</td>
                      <td className="p-4 sm:p-5 font-bold text-emerald-800">
                         <div className="flex items-center gap-1.5">
                            <Phone size={13} className="text-slate-400"/> {toBanglaNum(req.mobile)}
                         </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500 font-medium">{toBanglaNum(req.submissionDate)}</td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 ${
                            req.status === 'Approved' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 
                            req.status === 'Rejected' ? 'bg-rose-50 text-rose-800 border border-rose-200' : 
                            'bg-amber-50 text-amber-800 border border-amber-200'
                        }`}>
                            {req.status === 'Pending' && <Clock size={13}/>}
                            {req.status === 'Approved' && <Check size={13}/>}
                            {req.status === 'Rejected' && <X size={13}/>}
                            {req.status === 'Approved' ? (language === 'bn' ? 'অনুমোদিত' : 'Approved') : req.status === 'Rejected' ? (language === 'bn' ? 'বাতিলকৃত' : 'Rejected') : (language === 'bn' ? 'বিচারাধীন' : 'Pending')}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-right">
                      {req.status === 'Pending' ? (
                          <div className="flex justify-end gap-2">
                              <button 
                                onClick={() => updateAdmissionStatus(req.id, 'Approved')} 
                                className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl transition shadow-sm cursor-pointer" 
                                title={language === 'bn' ? "অনুমোদন করুন" : "Approve"}
                              >
                                  <Check size={16}/>
                              </button>
                              <button 
                                onClick={() => updateAdmissionStatus(req.id, 'Rejected')} 
                                className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-xl transition shadow-sm cursor-pointer" 
                                title={language === 'bn' ? "বাতিল করুন" : "Reject"}
                              >
                                  <X size={16}/>
                              </button>
                          </div>
                      ) : (
                        <span className="text-xs text-slate-400 font-semibold">{language === 'bn' ? 'সম্পন্ন' : 'Completed'}</span>
                      )}
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

export default ManageAdmissions;
