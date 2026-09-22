import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  User,
  List,
  ChevronRight,
  ExternalLink,
  Info,
  CheckCircle2,
  X
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');

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
    const refCode = `SOS-MSG-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[#f3f9f6] text-slate-800 pb-20">
      {/* 1. Hero Section: Full-Width Real Campus Background with Left-to-Right White Fade */}
      <section className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Real Campus Photo Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
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
          <div className="absolute right-0 bottom-10 w-44 h-72 opacity-[0.06] pointer-events-none text-emerald-800 rotate-45">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation (Top) */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Contact & Campus Location</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <MapPin size={14} />
              <span>GET IN TOUCH</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Contact Us
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              We are here to help you. Reach out for any inquiries, suggestions, or general
              information.
            </p>
          </div>

          {/* Floating White Quote Card on the Right (Matching media_1790110070973.png) */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  Education today for a brighter tomorrow
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — SOS Hermann Gmeiner School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: 2-Column Layout matching media_1790110554018.jpg */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column (5 Info Cards) - 4 cols */}
          <div className="lg:col-span-4 space-y-3.5">
            {/* 1. Our Location Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-4.5 shadow-xs hover:shadow-md transition flex items-center justify-between gap-3 group">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">Our Location</h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Gollamari, Khulna - 9208
                  </p>
                  <p className="text-xs text-slate-400">Bangladesh</p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition shrink-0"
              />
            </div>

            {/* 2. Call Us Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-4.5 shadow-xs hover:shadow-md transition flex items-center justify-between gap-3 group">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">Call Us</h3>
                  <p className="text-xs font-bold text-slate-800 mt-0.5 leading-snug">
                    024-77726775
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">EIIN: 117188</p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition shrink-0"
              />
            </div>

            {/* 3. Email Us Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-4.5 shadow-xs hover:shadow-md transition flex items-center justify-between gap-3 group">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">Email Us</h3>
                  <p className="text-xs font-bold text-slate-800 mt-0.5 leading-snug break-all">
                    soshgskhu@sos-bangladesh.org
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    We usually respond within 24 hours
                  </p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className="text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition shrink-0"
              />
            </div>

            {/* 4. Office Hours Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-4.5 shadow-xs hover:shadow-md transition flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">Office Hours</h3>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Sunday - Thursday: 9:00 AM - 4:00 PM
                </p>
                <p className="text-xs font-bold text-red-500 mt-1">Friday: Closed</p>
              </div>
            </div>

            {/* 5. Find Us on Map Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-emerald-700" />
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Find Us on Map
                </h3>
              </div>

              {/* Graphic Map Preview with Pin & Google Maps Link */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 h-44 bg-slate-100">
                {/* Stylized Map Vector Background */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 400 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="400" height="220" fill="#E8F0F3" />
                  {/* Rivers / Water */}
                  <path
                    d="M-20 60 Q 80 80, 160 50 T 320 70 T 420 40"
                    stroke="#C7E2F1"
                    strokeWidth="18"
                    fill="none"
                  />
                  <path
                    d="M160 50 Q 200 120, 240 180 T 260 230"
                    stroke="#C7E2F1"
                    strokeWidth="12"
                    fill="none"
                  />
                  {/* Roads / Grid */}
                  <path d="M0 110 H400" stroke="#FFFFFF" strokeWidth="6" />
                  <path d="M0 160 H400" stroke="#FFFFFF" strokeWidth="4" />
                  <path d="M0 40 H400" stroke="#FFFFFF" strokeWidth="4" />
                  <path d="M120 0 V220" stroke="#FFFFFF" strokeWidth="5" />
                  <path d="M260 0 V220" stroke="#FED7AA" strokeWidth="6" />
                  <path d="M340 0 V220" stroke="#FFFFFF" strokeWidth="4" />
                  <path
                    d="M40 0 L 360 220"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeDasharray="4 4"
                  />
                  {/* Green park patches */}
                  <rect x="20" y="120" width="70" height="60" rx="6" fill="#DCFCE7" />
                  <rect x="280" y="20" width="90" height="50" rx="8" fill="#DCFCE7" />
                  <rect x="280" y="130" width="100" height="70" rx="8" fill="#DCFCE7" />
                  {/* Text landmark */}
                  <text
                    x="35"
                    y="150"
                    fill="#64748B"
                    fontSize="11"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                  >
                    GOLLAMARI
                  </text>
                  <text
                    x="35"
                    y="164"
                    fill="#94A3B8"
                    fontSize="9"
                    fontFamily="sans-serif"
                  >
                    গল্লামারী
                  </text>
                  <text
                    x="150"
                    y="130"
                    fill="#1E293B"
                    fontSize="14"
                    fontFamily="sans-serif"
                    fontWeight="900"
                  >
                    Khulna
                  </text>
                  <text
                    x="150"
                    y="145"
                    fill="#64748B"
                    fontSize="11"
                    fontFamily="sans-serif"
                  >
                    খুলনা
                  </text>
                </svg>

                {/* Animated Red Pin Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-md border border-slate-200 text-[10px] font-bold text-slate-800 whitespace-nowrap mb-1">
                    SOS Hermann Gmeiner School Khulna
                  </div>
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg ring-4 ring-red-400/40 animate-bounce">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>

                {/* Open in Google Maps Button */}
                <a
                  href="https://maps.google.com/?q=SOS+Hermann+Gmeiner+School+Khulna,+Gollamari,+Khulna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 bg-[#007a4d] hover:bg-[#004d34] text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition active:scale-95"
                >
                  <ExternalLink size={12} />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send us a Message Form - 8 cols */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xs space-y-6">
              {/* Card Header with Green Speech Icon */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                    Send us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-medium">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>
              </div>

              {/* Blue Alert Pill Banner */}
              <div className="bg-[#edf5ff] border border-[#d6e7ff] text-[#0052cc] rounded-2xl p-3 sm:p-3.5 flex items-center gap-2.5 text-xs font-semibold">
                <Info size={16} className="text-blue-600 shrink-0" />
                <span>For urgent inquiries, please call us directly during office hours.</span>
              </div>

              {/* Main Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="tel"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="017XXXXXXXX"
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <List
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition appearance-none cursor-pointer"
                      >
                        <option value="">Select or type your subject</option>
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Academic Curriculum & Routine">
                          Academic Curriculum & Routine
                        </option>
                        <option value="Fee Payment & Accounts">Fee Payment & Accounts</option>
                        <option value="Transfer Certificate (TC)">
                          Transfer Certificate (TC)
                        </option>
                        <option value="General Query or Feedback">General Query or Feedback</option>
                      </select>
                      <ChevronRight
                        size={15}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Send
                      size={14}
                      className="absolute left-3.5 top-3.5 text-slate-400"
                    />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full pl-9 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#004d34] focus:ring-1 focus:ring-[#004d34] transition resize-none"
                    />
                    <div className="text-right text-[11px] text-slate-400 mt-1 font-medium">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#004d34] hover:bg-[#003b28] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Submission Success Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsSubmitted(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center space-y-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#004d34] flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              Message Sent Successfully!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your message
              has been received. Our administrative desk will reach back to you at{' '}
              <strong className="text-slate-900">{formData.mobile}</strong> shortly.
            </p>

            <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 text-xs text-slate-600">
              <span>Tracking Reference: </span>
              <strong className="text-emerald-800 font-mono font-bold">{ticketId}</strong>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-[#004d34] text-white text-xs font-bold hover:bg-[#003b28] transition cursor-pointer shadow-xs"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
