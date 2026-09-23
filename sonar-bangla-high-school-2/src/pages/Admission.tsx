import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  FileText,
  CheckCircle2,
  User,
  Calendar,
  Phone,
  CreditCard,
  MapPin,
  Send,
  ArrowRight,
  Headphones,
  ChevronDown,
  X,
  Printer,
  Check,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SCHOOL_INFO } from '../data/schoolData';

export const Admission: React.FC = () => {
  const { language, t, toBanglaNum } = useLanguage();

  const [formData, setFormData] = useState({
    nameBn: '',
    nameEn: '',
    admissionClass: '',
    dob: '',
    fatherName: '',
    motherName: '',
    mobile: '',
    nid: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [showGuidelinesModal, setShowGuidelinesModal] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = `SOS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(trackingCode);
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      nameBn: '',
      nameEn: '',
      admissionClass: '',
      dob: '',
      fatherName: '',
      motherName: '',
      mobile: '',
      nid: '',
      address: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>{t.nav.home}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <Link
              to="/admission"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              {t.nav.admission}
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{t.admission.title}</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} />
              <span>{t.admission.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {language === 'bn' ? (
                <>
                  অনলাইন ভর্তি <br />
                  আবেদন কার্যক্রম
                </>
              ) : (
                <>
                  Online Admission <br />
                  Portal
                </>
              )}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {t.admission.subtitle}
            </p>
          </div>

          {/* Floating White Quote Card on the Right */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  {language === 'bn' ? 'আলোকিত আগামীর জন্য আজকের শিক্ষা' : 'Education today for a brighter tomorrow'}
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল' : 'SOS Hermann Gmeiner School'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Important Instructions & Guidelines Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-7 space-y-5">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  {t.admission.guidelinesTitle}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {language === 'bn'
                    ? 'আবেদনপত্র জমা দেওয়ার পূর্বে অনুগ্রহ করে নিম্নোক্ত নির্দেশাবলি মনোযোগ সহকারে পড়ুন।'
                    : 'Please read the following instructions carefully before submitting your application.'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowGuidelinesModal(true)}
              className="inline-flex items-center gap-1.5 bg-[#e8f7ee] hover:bg-[#d1fae5] text-[#004d34] font-bold text-xs px-3.5 py-1.5 rounded-xl transition cursor-pointer self-start sm:self-auto"
            >
              <span>{language === 'bn' ? 'বিস্তারিত নির্দেশাবলি দেখুন' : 'View Detailed Guidelines'}</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 4 Instruction Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 text-xs text-slate-700 font-medium leading-relaxed">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>{t.admission.rule1}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>{t.admission.rule3}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>{t.admission.rule2}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>{t.admission.rule4}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Fill in Admission Application Form Card */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          {/* Header Row */}
          <div className="flex items-center gap-3.5 pb-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                {t.admission.formTitle}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {language === 'bn' ? '* চিহ্নিত প্রতিটি তথ্য পূরণ করা আবশ্যক।' : 'All fields marked with * are required.'}
              </p>
            </div>
          </div>

          {/* Form / Success Screen */}
          {submitted ? (
            <div className="bg-[#f0f9f4] border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center space-y-5 animate-in fade-in duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#004d34] flex items-center justify-center mx-auto shadow-xs">
                <Check size={32} />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {t.admission.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {t.admission.successSubtitle}
                </p>
                <div className="inline-block mt-2 bg-white border-2 border-emerald-500 px-5 py-2 rounded-2xl text-emerald-800 font-black text-lg sm:text-xl shadow-xs tracking-wider">
                  {submissionId}
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-white rounded-2xl p-5 max-w-lg mx-auto text-left text-xs text-slate-700 space-y-2 border border-slate-200/80 shadow-2xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'শিক্ষার্থীর নাম:' : 'Student Name:'}</span>
                  <span className="font-bold text-slate-900">{formData.nameEn || formData.nameBn}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'আবেদিত শ্রেণি:' : 'Applied Class:'}</span>
                  <span className="font-bold text-slate-900">{formData.admissionClass}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">{language === 'bn' ? 'অভিভাবকের নম্বর:' : 'Guardian Contact:'}</span>
                  <span className="font-bold text-slate-900">{formData.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{language === 'bn' ? 'আবেদনের তারিখ:' : 'Application Date:'}</span>
                  <span className="font-bold text-slate-900">{toBanglaNum('2026')}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  <Printer size={15} />
                  <span>{t.admission.printReceipt}</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  <span>{t.admission.applyAnother}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Student Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.studentNameBn}
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      name="nameBn"
                      value={formData.nameBn}
                      onChange={handleChange}
                      placeholder={language === 'bn' ? 'ছাত্র/ছাত্রীর নাম বাংলায় লিখুন' : 'Enter student name in Bangla'}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.studentNameEn}
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      name="nameEn"
                      value={formData.nameEn}
                      onChange={handleChange}
                      placeholder="ENTER STUDENT NAME IN CAPITAL LETTERS"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 uppercase focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Seeking Admission Class & Date of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.desiredClass}
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      required
                      name="admissionClass"
                      value={formData.admissionClass}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-9 py-2.5 text-xs font-medium text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                    >
                      <option value="">{language === 'bn' ? 'শ্রেণি নির্বাচন করুন' : 'Select Class'}</option>
                      <option value="Play">{language === 'bn' ? 'প্লে (Play)' : 'Play'}</option>
                      <option value="Nursery">{language === 'bn' ? 'নার্সারি (Nursery)' : 'Nursery'}</option>
                      <option value="KG">{language === 'bn' ? 'কেজি (KG)' : 'KG'}</option>
                      <option value="Class 1">{language === 'bn' ? '১ম শ্রেণি' : 'Class 1'}</option>
                      <option value="Class 2">{language === 'bn' ? '২য় শ্রেণি' : 'Class 2'}</option>
                      <option value="Class 3">{language === 'bn' ? '৩য় শ্রেণি' : 'Class 3'}</option>
                      <option value="Class 4">{language === 'bn' ? '৪র্থ শ্রেণি' : 'Class 4'}</option>
                      <option value="Class 5">{language === 'bn' ? '৫ম শ্রেণি' : 'Class 5'}</option>
                      <option value="Class 6">{language === 'bn' ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
                      <option value="Class 7">{language === 'bn' ? '৭ম শ্রেণি' : 'Class 7'}</option>
                      <option value="Class 8">{language === 'bn' ? '৮ম শ্রেণি' : 'Class 8'}</option>
                      <option value="Class 9">{language === 'bn' ? '৯ম শ্রেণি' : 'Class 9'}</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.dob}
                  </label>
                  <div className="relative">
                    <Calendar
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="date"
                      required
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Father's Name & Mother's Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.fatherName}
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder={language === 'bn' ? 'পিতার নাম লিখুন' : "Enter father's name"}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.motherName}
                  </label>
                  <div className="relative">
                    <User
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      placeholder={language === 'bn' ? 'মাতার নাম লিখুন' : "Enter mother's name"}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Guardian Mobile Number & Guardian NID Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {t.admission.mobile}
                  </label>
                  <div className="relative">
                    <Phone
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="tel"
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="01XXXXXXXXX"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    {language === 'bn' ? 'অভিভাবকের এনআইডি / জন্মনিবন্ধন নম্বর *' : 'GUARDIAN NID NUMBER *'}
                  </label>
                  <div className="relative">
                    <CreditCard
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      name="nid"
                      value={formData.nid}
                      onChange={handleChange}
                      placeholder={language === 'bn' ? 'এনআইডি বা জন্ম নিবন্ধন নম্বর দিন' : 'NID or Birth Certificate Number'}
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: Current Address */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  {t.admission.presentAddress}
                </label>
                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3.5 top-3.5 text-slate-400"
                  />
                  <textarea
                    required
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder={language === 'bn' ? 'গ্রাম/সড়ক, ডাকঘর, উপজেলা, জেলা' : 'Village/Road, Post Office, Upazila, District'}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs resize-none"
                  />
                </div>
              </div>

              {/* Full Width Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Send size={15} />
                  <span>{t.admission.submitBtn}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 4. Bottom 4 Feature Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                {language === 'bn' ? 'নিরাপদ ও সুরক্ষিত' : 'Secure & Reliable'}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'আপনার সকল তথ্য শতভাগ সুরক্ষিত।' : 'Your information is safe and protected.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                {language === 'bn' ? 'সময় সাশ্রয়ী' : 'Save Time'}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'ঘরে বসেই সহজে আবেদন সম্পন্ন করুন।' : 'Apply online from the comfort of your home.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                {language === 'bn' ? 'সহজ প্রক্রিয়া' : 'Easy Process'}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'কয়েকটি সহজ ধাপে আবেদনপত্র দাখিল করুন।' : 'Simple steps to complete your application.'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <Headphones size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                {language === 'bn' ? 'সহায়তা ও হেল্পলাইন' : 'Help & Support'}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                {language === 'bn' ? 'যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম পাশে রয়েছে।' : "We're here to assist you at every step."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Detailed Guidelines Modal */}
      {showGuidelinesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5 text-[#004d34]">
                <FileText size={20} />
                <h3 className="font-extrabold text-base text-slate-900">
                  {language === 'bn' ? 'ভর্তি যোগ্যতা ও প্রয়োজনীয় কাগজপত্র' : 'Admission Eligibility & Required Documents'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowGuidelinesModal(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <h5 className="font-bold text-slate-800 text-xs mb-1">
                  {language === 'bn' ? '১. ভর্তির বয়সসীমা (১ জানুয়ারি ২০২৬ অনুযায়ী):' : '1. Age Criteria for Admission (as on 1st January 2026):'}
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{language === 'bn' ? 'প্লে গ্রুপ: ৪+ বছর' : 'Play Group: 4+ Years'}</li>
                  <li>{language === 'bn' ? 'নার্সারি: ৫+ বছর' : 'Nursery: 5+ Years'}</li>
                  <li>{language === 'bn' ? '১ম শ্রেণি: ৬+ বছর' : 'Class 1: 6+ Years'}</li>
                  <li>{language === 'bn' ? 'অন্যান্য শ্রেণিতে সরকারি নীতিমালা প্রযোজ্য।' : 'Other classes as per government age regulations.'}</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-xs mb-1">
                  {language === 'bn' ? '২. প্রয়োজনীয় কাগজপত্র:' : '2. Mandatory Documents to be attached:'}
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{language === 'bn' ? 'অনলাইন যাচাইকৃত ডিজিটাল জন্ম নিবন্ধন সনদের মূল ও ফটোকপি।' : 'Original and photocopy of online verified Digital Birth Registration Certificate.'}</li>
                  <li>{language === 'bn' ? 'শিক্ষার্থীর সদ্য তোলা পাসপোর্ট সাইজের রঙিন ছবি (৩ কপি)।' : 'Recent passport size color photograph (3 copies) of the student with white background.'}</li>
                  <li>{language === 'bn' ? 'পিতা-মাতার জাতীয় পরিচয়পত্রের (NID) ফটোকপি।' : "Photocopy of Parent's National Identity Card (NID)."}</li>
                  <li>{language === 'bn' ? 'পূর্ববর্তী বিদ্যালয়ের ছাড়পত্র (TC) ও মার্কশিট (২য় থেকে ৯ম শ্রেণির জন্য)।' : 'Original Transfer Certificate (TC) & previous mark sheet for Class 2 to Class 9.'}</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-xs mb-1">
                  {language === 'bn' ? '৩. হেল্পলাইন ও অফিস ডেস্ক:' : '3. Helpline & Physical Submission Desk:'}
                </h5>
                <p>
                  {language === 'bn' ? SCHOOL_INFO.addressBn : SCHOOL_INFO.address} <br />
                  {language === 'bn' ? 'হেল্পলাইন:' : 'Helpline:'} {toBanglaNum(SCHOOL_INFO.phone)} ({language === 'bn' ? 'রবি থেকে বৃহস্পতি, সকাল ৯টা – বিকাল ৪টা' : 'Sunday to Thursday, 9:00 AM – 4:00 PM'}) <br />
                  {language === 'bn' ? 'ইমেইল:' : 'Email:'} {SCHOOL_INFO.email}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <Printer size={13} />
                <span>{language === 'bn' ? 'নির্দেশিক প্রিন্ট করুন' : 'Print Guidelines'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowGuidelinesModal(false)}
                className="bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                {language === 'bn' ? 'বুঝেছি' : 'Got It'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
