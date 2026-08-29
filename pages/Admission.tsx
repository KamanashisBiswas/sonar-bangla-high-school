import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AdmissionRequest } from '../types';
import { BookOpen, CheckCircle, FileText, User, Phone, ShieldCheck, AlertCircle, Printer, ArrowRight } from 'lucide-react';

const Admission: React.FC = () => {
  const { submitAdmission, settings } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<AdmissionRequest | null>(null);
  
  // Form States
  const [formData, setFormData] = useState({
    nameBn: '',
    nameEn: '',
    dob: '',
    classVal: '৬ষ্ঠ',
    fatherName: '',
    motherName: '',
    mobile: '',
    nid: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRequest: AdmissionRequest = {
      id: Date.now().toString(),
      studentNameBn: formData.nameBn,
      studentNameEn: formData.nameEn,
      dob: formData.dob,
      desiredClass: formData.classVal,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      mobile: formData.mobile,
      nid: formData.nid,
      status: 'Pending',
      submissionDate: new Date().toISOString().split('T')[0]
    };

    submitAdmission(newRequest);
    setLastSubmission(newRequest);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  if (submitted && lastSubmission) {
    return (
      <div className="bg-slate-50 min-h-screen py-16 text-slate-800 print:bg-white print:py-0">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-slate-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={36} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{t.admission.successTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              {t.admission.successSubtitle}
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-left text-xs sm:text-sm space-y-2.5 mb-8">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">{t.admission.appId}:</span>
                <span className="font-extrabold text-emerald-700">SB-ADM-{lastSubmission.id.slice(-6)}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">{t.result.studentName}:</span>
                <span className="font-extrabold text-slate-900">{lastSubmission.studentNameBn} ({lastSubmission.studentNameEn})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">{t.admission.desiredClass}:</span>
                <span className="font-extrabold text-slate-900">{lastSubmission.desiredClass} {t.academic.class}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-bold">{t.admission.mobile}:</span>
                <span className="font-extrabold text-slate-900">{toBanglaNum(lastSubmission.mobile)}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-500 font-bold">{t.downloads.dateCol}:</span>
                <span className="font-bold text-slate-700">{toBanglaNum(lastSubmission.submissionDate)}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={() => window.print()}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Printer size={16} /> {t.admission.printReceipt}
              </button>
              <button 
                onClick={() => { 
                  setSubmitted(false); 
                  setFormData({ nameBn: '', nameEn: '', dob: '', classVal: '৬ষ্ঠ', fatherName: '', motherName: '', mobile: '', nid: '', address: '' }); 
                }} 
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                {t.admission.applyAnother}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen size={15} /> Admission Portal 2025
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.admission.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.admission.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Guidelines */}
        <div className="bg-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-md mb-10 border border-emerald-800">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={24} className="text-amber-300" />
            <h3 className="text-lg font-bold">{t.admission.guidelinesTitle}</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-emerald-100 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              <span>{t.admission.rule1}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              <span>{t.admission.rule2}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              <span>{t.admission.rule3}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0"></span>
              <span>{t.admission.rule4}</span>
            </li>
          </ul>
        </div>

        {/* Application Form */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
            <FileText size={20} className="text-emerald-700" /> {t.admission.formTitle}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t.admission.studentNameBn}</label>
                <input 
                  required 
                  name="nameBn"
                  value={formData.nameBn} 
                  onChange={handleChange} 
                  placeholder="উদা: মোঃ আরিয়ান আহমেদ" 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.admission.studentNameEn}</label>
                <input 
                  required 
                  name="nameEn"
                  value={formData.nameEn} 
                  onChange={handleChange} 
                  placeholder="MD. ARIYAN AHMED" 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.admission.desiredClass}</label>
                <select 
                  name="classVal"
                  value={formData.classVal} 
                  onChange={handleChange} 
                  className={inputClass}
                >
                  <option value="৬ষ্ঠ">{t.academic.class6}</option>
                  <option value="৭ম">{t.academic.class7}</option>
                  <option value="৮ম">{t.academic.class8}</option>
                  <option value="৯ম">{t.academic.class9}</option>
                  <option value="১০ম">{t.academic.class10}</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>{t.admission.dob}</label>
                <input 
                  type="date"
                  required 
                  name="dob"
                  value={formData.dob} 
                  onChange={handleChange} 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.admission.fatherName}</label>
                <input 
                  required 
                  name="fatherName"
                  value={formData.fatherName} 
                  onChange={handleChange} 
                  placeholder="পিতার পূর্ণ নাম" 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.admission.motherName}</label>
                <input 
                  required 
                  name="motherName"
                  value={formData.motherName} 
                  onChange={handleChange} 
                  placeholder="মাতার পূর্ণ নাম" 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>{t.admission.mobile}</label>
                <input 
                  type="tel"
                  required 
                  name="mobile"
                  value={formData.mobile} 
                  onChange={handleChange} 
                  placeholder="017XXXXXXXX" 
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>শিক্ষার্থীর জন্মনিবন্ধন / NID নম্বর *</label>
                <input 
                  required 
                  name="nid"
                  value={formData.nid} 
                  onChange={handleChange} 
                  placeholder="১৭ ডিজিটের জন্মনিবন্ধন নম্বর" 
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t.admission.presentAddress}</label>
              <textarea 
                rows={3}
                required
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="গ্রাম/রোড, ডাকঘর, উপজেলা, জেলা"
                className={inputClass}
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition shadow-md shadow-emerald-800/20 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {t.admission.submitBtn} <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Admission;
