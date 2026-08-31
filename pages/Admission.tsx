import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AdmissionRequest } from '../types';
import { ScrollReveal } from '../components/ui/MotionComponents';
import { 
  BookOpen, CheckCircle, FileText, User, Phone, ShieldCheck, 
  Printer, ArrowRight, Home, ChevronDown, CheckCircle2, 
  Clock, Headphones, Calendar
} from 'lucide-react';
import { 
  SCHOOL_NAME, SCHOOL_NAME_EN, SCHOOL_LOGO, SCHOOL_ADDRESS, 
  EIIN_CODE, ESTABLISHED_YEAR 
} from '../constants';

const Admission: React.FC = () => {
  const { submitAdmission } = useData();
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<AdmissionRequest | null>(null);
  
  // Form States
  const [formData, setFormData] = useState({
    nameBn: '',
    nameEn: '',
    dob: '',
    classVal: '6',
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

  // Printable application receipt download/print function
  const handlePrintReceipt = () => {
    if (!lastSubmission) return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const printContent = `
      <!DOCTYPE html>
      <html lang="${isBn ? 'bn' : 'en'}">
      <head>
        <meta charset="UTF-8">
        <title>Admission Slip - SB-ADM-${lastSubmission.id.slice(-6)} - SOS Hermann Gmeiner School Khulna</title>
        <style>
          @page { size: A4 portrait; margin: 15mm 18mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; }
          body { color: #0f172a; background: #fff; padding: 15px; }
          .border-wrapper { border: 2px solid #00704A; border-radius: 10px; padding: 20px 24px; position: relative; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #00704A; padding-bottom: 12px; margin-bottom: 16px; }
          .header-left { display: flex; align-items: center; gap: 14px; }
          .logo { width: 65px; height: 65px; object-fit: contain; }
          .school-title-main { font-size: 20px; font-weight: 900; color: #00704A; }
          .school-info { font-size: 11px; color: #475569; margin-top: 2px; }
          .eiin-badge { display: inline-block; background: #eaf7f0; color: #00704A; border: 1px solid #bbf7d0; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 800; }
          .doc-banner { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; }
          .doc-title { font-size: 15px; font-weight: 800; color: #0f172a; }
          .doc-app-id { font-size: 13px; font-weight: 900; color: #00704A; font-family: monospace; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px; }
          th, td { border: 1px solid #cbd5e1; padding: 9px 12px; text-align: left; }
          th { background-color: #f1f5f9; color: #334155; font-weight: 700; width: 35%; }
          td { font-weight: 600; color: #0f172a; }
          .notes-box { border: 1px dashed #94a3b8; border-radius: 6px; padding: 10px 14px; margin-bottom: 30px; font-size: 10.5px; color: #475569; background: #fafafa; }
          .signatures { display: flex; justify-content: space-between; margin-top: 40px; padding: 0 10px; }
          .sig-box { text-align: center; width: 180px; }
          .sig-line { border-top: 1.2px solid #475569; margin-bottom: 4px; width: 100%; }
          .sig-title { font-size: 11px; font-weight: 800; color: #1e293b; }
        </style>
      </head>
      <body>
        <div class="border-wrapper">
          <div class="header">
            <div class="header-left">
              <img class="logo" src="${SCHOOL_LOGO}" alt="Logo" onerror="this.style.display='none'" />
              <div>
                <div class="school-title-main">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
                <div class="school-info">
                  ${isBn ? 'গল্লামারী, খুলনা - ৯২০৮ | ফোন: ০২৪-৭৭৭২৬৭৭৫ | ইমেইল: soshgskhulna@sos-bangladesh.org' : 'Gollamari, Khulna - 9208 | Phone: 024-77726775 | Email: soshgskhulna@sos-bangladesh.org'}
                </div>
              </div>
            </div>
            <div style="text-align: right;">
              <div class="eiin-badge">EIIN: ${EIIN_CODE}</div>
              <div class="school-info">${isBn ? `স্থাপিত: ${ESTABLISHED_YEAR} ইং` : 'Established: 1987'}</div>
            </div>
          </div>

          <div class="doc-banner">
            <div class="doc-title">${isBn ? 'ভর্তি আবেদন স্বীকৃতি ও রসিদ (২০২৬)' : 'Online Admission Application Slip (2026)'}</div>
            <div class="doc-app-id">APP ID: SB-ADM-${lastSubmission.id.slice(-6)}</div>
          </div>

          <table>
            <tbody>
              <tr>
                <th>${isBn ? 'শিক্ষার্থীর নাম (বাংলা)' : 'Student Name (Bangla)'}</th>
                <td>${lastSubmission.studentNameBn}</td>
              </tr>
              <tr>
                <th>${isBn ? 'শিক্ষার্থীর নাম (ইংরেজি)' : 'Student Name (English)'}</th>
                <td>${lastSubmission.studentNameEn}</td>
              </tr>
              <tr>
                <th>${isBn ? 'আবেদনকৃত শ্রেণি' : 'Applied Class'}</th>
                <td>${isBn ? (lastSubmission.desiredClass === '6' ? '৬ষ্ঠ শ্রেণি' : `${lastSubmission.desiredClass} শ্রেণি`) : `Class ${lastSubmission.desiredClass}`}</td>
              </tr>
              <tr>
                <th>${isBn ? 'জন্ম তারিখ' : 'Date of Birth'}</th>
                <td>${lastSubmission.dob}</td>
              </tr>
              <tr>
                <th>${isBn ? 'পিতার নাম' : "Father's Name"}</th>
                <td>${lastSubmission.fatherName}</td>
              </tr>
              <tr>
                <th>${isBn ? 'মাতার নাম' : "Mother's Name"}</th>
                <td>${lastSubmission.motherName}</td>
              </tr>
              <tr>
                <th>${isBn ? 'অভিভাবকের মোবাইল নম্বর' : 'Guardian Mobile'}</th>
                <td>${lastSubmission.mobile}</td>
              </tr>
              <tr>
                <th>${isBn ? 'জন্মনিবন্ধন / NID নম্বর' : 'Birth Certificate / NID'}</th>
                <td>${lastSubmission.nid}</td>
              </tr>
              <tr>
                <th>${isBn ? 'আবেদনের তারিখ' : 'Application Date'}</th>
                <td>${lastSubmission.submissionDate}</td>
              </tr>
            </tbody>
          </table>

          <div class="notes-box">
            <strong>${isBn ? 'জরুরি জ্ঞাতব্য:' : 'Important Instructions:'}</strong>
            <div>${isBn ? '১. এই রসিদটি প্রিন্ট করে শিক্ষার্থীর ২ কপি পাসপোর্ট সাইজ ছবি, জন্মনিবন্ধন সনদ ও পূর্ববর্তী শ্রেণির ট্রান্সক্রিপ্টসহ বিদ্যালয় অফিসে জমা দিন।' : '1. Print this slip and submit to school office with 2 passport-size photographs, birth certificate copy, and previous school transfer certificate.'}</div>
            <div>${isBn ? '২. ভর্তি পরীক্ষা বা লটারির তারিখ এসএমএস এর মাধ্যমে এই মোবাইল নম্বরে জানানো হবে।' : '2. Admission test or lottery schedule will be notified via SMS to the provided mobile number.'}</div>
          </div>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'অভিভাবকের স্বাক্ষর' : 'Guardian Signature'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'ভর্তি কমিটি প্রধান / অফিস সীল' : 'Admission Authority Seal'}</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  const inputClass = "w-full bg-slate-50/80 border border-slate-200/90 focus:border-emerald-600 focus:bg-white px-3.5 py-2.5 rounded-xl outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-[11px] sm:text-xs font-black text-slate-700 mb-1.5 uppercase tracking-wider";

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (MATCHING ABOUT US / ADMINISTRATION STANDARD) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 mb-8">
        {/* Background School Linework Illustration on Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 md:w-3/5 lg:w-1/2 pointer-events-none overflow-hidden select-none items-center justify-end">
          <img 
            src="/campus_illustration.jpg" 
            alt="School Campus Architectural Linework Illustration"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.95)_45%,black_100%)] opacity-85 mix-blend-multiply"
          />
        </div>

        {/* Hero Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
              <Home size={14} className="text-emerald-700" />
              <span>{isBn ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'অনলাইন ভর্তি আবেদন' : 'Online Admission Application'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <BookOpen size={13} className="text-emerald-700" />
              <span>{isBn ? 'ভর্তি পোর্টাল ২০২৬' : 'ADMISSION PORTAL 2026'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'অনলাইন ভর্তি আবেদন' : 'Online Admission Portal'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'সকল শ্রেণিতে ভর্তি কার্যক্রম চলমান। ঘরে বসেই সহজে আপনার আবেদন সম্পন্ন করুন।' 
                : 'Online admissions for all classes are now open. Complete your application easily from home.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 2. ADMISSION INSTRUCTIONS & GUIDELINES (DARK GREEN CARD) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="bg-[#004d34] text-white p-6 sm:p-8 rounded-[28px] shadow-sm border border-emerald-900/40 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-emerald-800/80">
              <div className="w-9 h-9 rounded-xl bg-emerald-800/80 text-amber-300 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={19} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-white">
                {isBn ? 'ভর্তি নির্দেশনাবলি ও তথ্যাবলি' : 'Admission Instructions & Guidelines'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-8 text-xs sm:text-sm text-emerald-100/95 font-medium leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isBn 
                    ? 'শিক্ষার্থীর জন্মনিবন্ধন সনদ ও পূর্ববর্তী ছাড়পত্র অনুযায়ী সঠিক তথ্য প্রদান করুন।' 
                    : 'Provide authentic information according to the student birth certificate and previous transfer certificate.'}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isBn 
                    ? 'এসএমএস নোটিফিকেশন ও আপডেটের জন্য সক্রিয় অভিভাবক মোবাইল নম্বর প্রদান করুন।' 
                    : 'Provide an active parent/guardian mobile number for SMS notifications and updates.'}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isBn 
                    ? 'আবেদন সম্পন্ন হলে রসিদ প্রিন্ট করে প্রয়োজনীয় কাগজপত্রসহ স্কুল অফিসে জমা দিন।' 
                    : 'Print the completed application slip and submit it to the school office with required documents.'}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {isBn 
                    ? 'যেকোনো কারিগরি সহায়তা বা তথ্যের জন্য সরাসরি আমাদের হেল্পলাইনে যোগাযোগ করুন।' 
                    : 'For any technical support or queries, contact our helpline directly.'}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. APPLICATION FORM CARD (MATCHING REFERENCE IMAGE 100%) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-100 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <FileText size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {isBn ? 'ভর্তি আবেদন ফরম পূরণ করুন' : 'Fill in Admission Application'}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
                {/* Student Name Bangla */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'শিক্ষার্থীর নাম (বাংলা) *' : 'STUDENT NAME (BANGLA) *'}
                  </label>
                  <input 
                    required 
                    name="nameBn"
                    value={formData.nameBn} 
                    onChange={handleChange} 
                    placeholder={isBn ? 'ছাত্র/ছাত্রীর নাম বাংলায় লিখুন' : 'ছাত্র/ছাত্রীর নাম বাংলায় লিখুন'} 
                    className={inputClass}
                  />
                </div>

                {/* Student Name English */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'শিক্ষার্থীর নাম (ইংরেজি ক্যাপিটাল) *' : 'STUDENT NAME (ENGLISH CAPITAL) *'}
                  </label>
                  <input 
                    required 
                    name="nameEn"
                    value={formData.nameEn} 
                    onChange={handleChange} 
                    placeholder={isBn ? 'ইংরেজি বড় হাতের অক্ষরে নাম লিখুন' : 'Enter name in English (capital letters)'} 
                    className={inputClass}
                  />
                </div>

                {/* Seeking Admission in Class */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'আবেদনকৃত শ্রেণি *' : 'SEEKING ADMISSION IN CLASS *'}
                  </label>
                  <div className="relative">
                    <select 
                      name="classVal"
                      value={formData.classVal} 
                      onChange={handleChange} 
                      className={`${inputClass} appearance-none pr-8 cursor-pointer`}
                    >
                      <option value="6">{isBn ? '৬ষ্ঠ শ্রেণি (Class 6)' : 'Class 6'}</option>
                      <option value="7">{isBn ? '৭ম শ্রেণি (Class 7)' : 'Class 7'}</option>
                      <option value="8">{isBn ? '৮ম শ্রেণি (Class 8)' : 'Class 8'}</option>
                      <option value="9">{isBn ? '৯ম শ্রেণি (Class 9)' : 'Class 9'}</option>
                      <option value="10">{isBn ? '১০ম শ্রেণি (Class 10)' : 'Class 10'}</option>
                      <option value="prep1">{isBn ? 'প্রেপ-১ / প্লে (Play)' : 'Prep 1 / Play'}</option>
                      <option value="prep2">{isBn ? 'প্রেপ-২ / নার্সারি (Nursery)' : 'Prep 2 / Nursery'}</option>
                      <option value="1">{isBn ? '১ম শ্রেণি (Class 1)' : 'Class 1'}</option>
                      <option value="2">{isBn ? '২য় শ্রেণি (Class 2)' : 'Class 2'}</option>
                      <option value="3">{isBn ? '৩য় শ্রেণি (Class 3)' : 'Class 3'}</option>
                      <option value="4">{isBn ? '৪র্থ শ্রেণি (Class 4)' : 'Class 4'}</option>
                      <option value="5">{isBn ? '৫ম শ্রেণি (Class 5)' : 'Class 5'}</option>
                    </select>
                    <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'জন্ম তারিখ *' : 'DATE OF BIRTH *'}
                  </label>
                  <input 
                    type="date"
                    required 
                    name="dob"
                    value={formData.dob} 
                    onChange={handleChange} 
                    className={inputClass}
                  />
                </div>

                {/* Father's Name */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'পিতার নাম *' : "FATHER'S NAME *"}
                  </label>
                  <input 
                    required 
                    name="fatherName"
                    value={formData.fatherName} 
                    onChange={handleChange} 
                    placeholder={isBn ? 'পিতার পূর্ণ নাম' : 'Enter father\'s name'} 
                    className={inputClass}
                  />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'মাতার নাম *' : "MOTHER'S NAME *"}
                  </label>
                  <input 
                    required 
                    name="motherName"
                    value={formData.motherName} 
                    onChange={handleChange} 
                    placeholder={isBn ? 'মাতার পূর্ণ নাম' : 'Enter mother\'s name'} 
                    className={inputClass}
                  />
                </div>

                {/* Guardian Mobile Number */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'অভিভাবকের মোবাইল নম্বর *' : 'GUARDIAN MOBILE NUMBER *'}
                  </label>
                  <input 
                    type="tel"
                    required 
                    name="mobile"
                    value={formData.mobile} 
                    onChange={handleChange} 
                    placeholder="01XXXXXXXXX" 
                    className={inputClass}
                  />
                </div>

                {/* Guardian NID / Student Birth Certificate */}
                <div>
                  <label className={labelClass}>
                    {isBn ? 'অভিভাবকের এনআইডি / জন্মনিবন্ধন নম্বর *' : 'GUARDIAN NID NUMBER *'}
                  </label>
                  <input 
                    required 
                    name="nid"
                    value={formData.nid} 
                    onChange={handleChange} 
                    placeholder={isBn ? '১০/১৭ ডিজিটের জাতীয় পরিচয়পত্র বা জন্মনিবন্ধন নম্বর' : 'NID or Birth Certificate Number'} 
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Current Address (Full Width) */}
              <div>
                <label className={labelClass}>
                  {isBn ? 'বর্তমান ঠিকানা *' : 'CURRENT ADDRESS *'}
                </label>
                <textarea 
                  rows={3}
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={isBn ? 'গ্রাম/রোড, ডাকঘর, উপজেলা, জেলা' : 'Village/Road, Post Office, Upazila, District'}
                  className={inputClass}
                />
              </div>

              {/* Submit Application Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#00704A] hover:bg-[#005a3c] text-white font-bold py-3.5 px-6 rounded-2xl transition shadow-sm text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span>{isBn ? 'আবেদন দাখিল করুন' : 'Submit Application'}</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>

        {/* 4. KEY PILLARS / FEATURES ROW (MATCHING REFERENCE IMAGE) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900">
                  {isBn ? 'নিরাপদ ও নির্ভরযোগ্য' : 'Secure & Reliable'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  {isBn ? 'আপনার সকল তথ্য সুরক্ষিত।' : 'Your information is safe and protected.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900">
                  {isBn ? 'সময় সাশ্রয়ী' : 'Save Time'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  {isBn ? 'ঘরে বসেই সহজে আবেদন।' : 'Apply online from the comfort of your home.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900">
                  {isBn ? 'সহজ প্রক্রিয়া' : 'Easy Process'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  {isBn ? 'কয়েকটি সহজ ধাপে আবেদন।' : 'Simple steps to complete your application.'}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Headphones size={20} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-slate-900">
                  {isBn ? 'সহায়তা ও সেবা' : 'Help & Support'}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  {isBn ? 'সার্বক্ষণিক হেল্পলাইন সুবিধা।' : "We're here to assist you at every step."}
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* 5. SUBMISSION SUCCESS MODAL */}
      <AnimatePresence>
        {submitted && lastSubmission && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50"
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center relative space-y-5"
            >
              
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-3xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle size={36} />
              </div>
              
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {isBn ? 'আবেদন সফলভাবে গৃহীত হয়েছে!' : 'Application Submitted Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {isBn ? 'আপনার ভর্তি আবেদনপত্রটি সফলভাবে সিস্টেমে সংরক্ষিত হয়েছে।' : 'Your admission application has been recorded in our system.'}
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-left text-xs sm:text-sm space-y-2.5 font-medium">
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-bold">{isBn ? 'আবেদন আইডি (App ID):' : 'Application ID:'}</span>
                  <span className="font-black text-emerald-700 font-mono">SB-ADM-{lastSubmission.id.slice(-6)}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-bold">{isBn ? 'শিক্ষার্থীর নাম:' : 'Student Name:'}</span>
                  <span className="font-bold text-slate-900">{lastSubmission.studentNameBn} ({lastSubmission.studentNameEn})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-bold">{isBn ? 'আবেদনকৃত শ্রেণি:' : 'Applied Class:'}</span>
                  <span className="font-bold text-slate-900">{isBn ? `${lastSubmission.desiredClass} শ্রেণি` : `Class ${lastSubmission.desiredClass}`}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-2">
                  <span className="text-slate-500 font-bold">{isBn ? 'মোবাইল নম্বর:' : 'Mobile Number:'}</span>
                  <span className="font-bold text-slate-900">{lastSubmission.mobile}</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500 font-bold">{isBn ? 'আবেদনের তারিখ:' : 'Submission Date:'}</span>
                  <span className="font-bold text-slate-700">{lastSubmission.submissionDate}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button 
                  onClick={handlePrintReceipt}
                  className="w-full sm:w-auto bg-[#00704A] hover:bg-[#005a3c] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <Printer size={15} />
                  <span>{isBn ? 'রসিদ প্রিন্ট / ডাউনলোড' : 'Print / Download Slip'}</span>
                </button>

                <button 
                  onClick={() => { 
                    setSubmitted(false); 
                    setFormData({ nameBn: '', nameEn: '', dob: '', classVal: '6', fatherName: '', motherName: '', mobile: '', nid: '', address: '' }); 
                  }} 
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
                >
                  {isBn ? 'আরেকটি আবেদন করুন' : 'Apply Another'}
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Admission;

