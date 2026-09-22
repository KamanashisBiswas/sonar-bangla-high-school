import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Users,
  ShieldCheck,
  Clock,
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
} from 'lucide-react';

export const Admission: React.FC = () => {
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
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade (Matching media_1790107723010.jpg) */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Two-Story Campus Background Photo */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_admission.png"
            alt="SOS Hermann Gmeiner School Khulna Campus Building"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main.png';
            }}
          />

          {/* Precision Left-to-Right White Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />

          {/* Decorative Subtle Botanical / Leaf Watermark on Far Left */}
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-48 h-80 opacity-[0.07] pointer-events-none text-emerald-700">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
              <path d="M30 170 C10 120 20 60 70 20 C75 60 70 120 30 170 Z" />
            </svg>
          </div>

          {/* Decorative Subtle Botanical Watermark on Far Right */}
          <div className="absolute right-0 bottom-6 w-48 h-72 opacity-[0.07] pointer-events-none text-emerald-800 rotate-45">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-16 sm:pb-20 flex-1 flex flex-col justify-between">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <Link
              to="/admission"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              Admission
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Online Admission Application</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3.5 pt-6 sm:pt-8">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} />
              <span>ADMISSION PORTAL 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Online Admission Portal
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal max-w-lg">
              Take the next step towards a brighter future. Complete your admission application easily,
              securely and from the comfort of your home.
            </p>

            {/* 3 Value Chips underneath the subtitle (Matching media_1790107723010.jpg) */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Chip 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100/90">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">
                    Simple Process
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">Fill up the form in minutes</p>
                </div>
              </div>

              {/* Chip 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100/90">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">
                    Secure & Confidential
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">Your data is always protected</p>
                </div>
              </div>

              {/* Chip 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100/90">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 leading-tight">
                    Apply from Anywhere
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">Anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating White Quote Card on the Right (Matching media_1790107723010.jpg) */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  Education builds <br />
                  <span className="text-[#0284c7]">brighter tomorrows</span>
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — SOS Hermann Gmeiner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Important Instructions & Guidelines Card (Matching media_1790107723010.jpg) */}
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
                  Important Instructions & Guidelines
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Please read the following instructions carefully before submitting your application.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowGuidelinesModal(true)}
              className="inline-flex items-center gap-1.5 bg-[#e8f7ee] hover:bg-[#d1fae5] text-[#004d34] font-bold text-xs px-3.5 py-1.5 rounded-xl transition cursor-pointer self-start sm:self-auto"
            >
              <span>View Detailed Guidelines</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* 4 Instruction Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 text-xs text-slate-700 font-medium leading-relaxed">
            {/* Instruction 1 */}
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>
                Provide authentic information according to the student birth certificate and previous transfer certificate.
              </span>
            </div>

            {/* Instruction 2 */}
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>
                Print the completed application slip and submit it to the school office with required documents.
              </span>
            </div>

            {/* Instruction 3 */}
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>
                Provide an active parent/guardian mobile number for SMS notifications and updates.
              </span>
            </div>

            {/* Instruction 4 */}
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
              <span>
                For any technical support or queries, contact our helpline directly.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Fill in Admission Application Form Card (Matching media_1790107723010.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          {/* Header Row */}
          <div className="flex items-center gap-3.5 pb-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Fill in Admission Application
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                All fields marked with * are required.
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
                  Application Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your application has been received and registered under tracking ID:
                </p>
                <div className="inline-block mt-2 bg-white border-2 border-emerald-500 px-5 py-2 rounded-2xl text-emerald-800 font-black text-lg sm:text-xl shadow-xs tracking-wider">
                  {submissionId}
                </div>
              </div>

              {/* Summary Box */}
              <div className="bg-white rounded-2xl p-5 max-w-lg mx-auto text-left text-xs text-slate-700 space-y-2 border border-slate-200/80 shadow-2xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-bold text-slate-900">{formData.nameEn || formData.nameBn}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Applied Class:</span>
                  <span className="font-bold text-slate-900">{formData.admissionClass}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Guardian Contact:</span>
                  <span className="font-bold text-slate-900">{formData.mobile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Application Date:</span>
                  <span className="font-bold text-slate-900">23 September 2026</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  <Printer size={15} />
                  <span>Print Application Slip</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer"
                >
                  <span>Submit Another Application</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Student Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Student Name Bangla */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    STUDENT NAME (BANGLA) *
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
                      placeholder="ছাত্র/ছাত্রীর নাম বাংলায় লিখুন"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>

                {/* Student Name English Capital */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    STUDENT NAME (ENGLISH CAPITAL) *
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
                      placeholder="Enter name in English (capital letters)"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 uppercase focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Seeking Admission Class & Date of Birth */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Seeking Admission in Class */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    SEEKING ADMISSION IN CLASS *
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
                      <option value="">Select Class</option>
                      <option value="Play">Play</option>
                      <option value="Nursery">Nursery</option>
                      <option value="KG">KG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9 (Science / Business Studies / Humanities)</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    DATE OF BIRTH *
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
                {/* Father's Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    FATHER'S NAME *
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
                      placeholder="Enter father's name"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    MOTHER'S NAME *
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
                      placeholder="Enter mother's name"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Guardian Mobile Number & Guardian NID Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Guardian Mobile Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    GUARDIAN MOBILE NUMBER *
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

                {/* Guardian NID Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    GUARDIAN NID NUMBER *
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
                      placeholder="NID or Birth Certificate Number"
                      className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: Current Address */}
              <div>
                <label className="block text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  CURRENT ADDRESS *
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
                    placeholder="Village/Road, Post Office, Upazila, District"
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs resize-none"
                  />
                </div>
              </div>

              {/* Full Width Submit Button (Matching media_1790107723010.jpg) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Send size={15} />
                  <span>Submit Application</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* 4. Bottom 4 Feature Cards (Matching media_1790107723010.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Secure & Reliable */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                Secure & Reliable
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Your information is safe and protected.
              </p>
            </div>
          </div>

          {/* Card 2: Save Time */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                Save Time
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Apply online from the comfort of your home.
              </p>
            </div>
          </div>

          {/* Card 3: Easy Process */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                Easy Process
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Simple steps to complete your application.
              </p>
            </div>
          </div>

          {/* Card 4: Help & Support */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-5 flex items-center gap-4 hover:shadow-xs transition">
            <div className="w-12 h-12 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <Headphones size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 leading-tight">
                Help & Support
              </h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                We're here to assist you at every step.
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
                  Admission Eligibility & Required Documents
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
                  1. Age Criteria for Admission (as on 1st January 2026):
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Play Group: 4+ Years</li>
                  <li>Nursery: 5+ Years</li>
                  <li>Class 1: 6+ Years</li>
                  <li>Other classes as per government age regulations.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-xs mb-1">
                  2. Mandatory Documents to be attached:
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Original and photocopy of online verified Digital Birth Registration Certificate.</li>
                  <li>Recent passport size color photograph (3 copies) of the student with white background.</li>
                  <li>Photocopy of Parent's National Identity Card (NID).</li>
                  <li>Original Transfer Certificate (TC) & previous mark sheet for Class 2 to Class 9.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-slate-800 text-xs mb-1">
                  3. Helpline & Physical Submission Desk:
                </h5>
                <p>
                  School Office: Gollamari, Khulna - 9208 <br />
                  Helpline: 024-77726775 (Sunday to Thursday, 9:00 AM – 4:00 PM) <br />
                  Email: soshgskhu@sos-bangladesh.org
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
                <span>Print Guidelines</span>
              </button>

              <button
                type="button"
                onClick={() => setShowGuidelinesModal(false)}
                className="bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
