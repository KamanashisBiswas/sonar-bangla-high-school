import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  MapPin, PhoneCall, Mail, Clock, Send, CheckCircle2, 
  MessageSquare, Home, Phone
} from 'lucide-react';

const Contact: React.FC = () => {
  const { settings } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4500);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white p-3 sm:p-3.5 rounded-xl focus:ring-1 focus:ring-emerald-500 outline-none transition text-slate-800 font-medium text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-700 mb-1.5";

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
              {isBn ? 'যোগাযোগ ও ক্যাম্পাস অবস্থান' : 'Contact & Campus Location'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <PhoneCall size={13} className="text-emerald-700" />
              <span>{isBn ? 'যোগাযোগ করুন' : 'GET IN TOUCH'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'যোগাযোগ ও ক্যাম্পাস অবস্থান' : 'Contact Us'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'যেকোনো তথ্য, ভর্তি অনুসন্ধান বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে সহায়তা করতে প্রস্তুত।' 
                : 'We are here to help you. Reach out for any inquiries, suggestions, or general information.'}
            </p>
          </div>

        </div>
      </div>

      {/* 2. MAIN CONTENT GRID (2 COLUMNS: LEFT 4 INFO CARDS | RIGHT SEND MESSAGE FORM) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: 4 Information Cards (4 Spans) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Card 1: Our Location */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {isBn ? 'আমাদের অবস্থান' : 'Our Location'}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {settings.schoolAddress || (isBn ? 'গল্লামারী, খুলনা - ৯২০৮' : 'Gollamari, Khulna - 9208')}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {isBn ? 'বাংলাদেশ' : 'Bangladesh'}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Call Us */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <PhoneCall size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {isBn ? 'টেলিফোন ও মোবাইল' : 'Call Us'}
                </h4>
                <p className="text-xs text-slate-700 font-bold">
                  {toBanglaNum(settings.contactPhone || '024-77726775')}
                </p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                  EIIN: {toBanglaNum(settings.eiinCode || '117188')}
                </p>
              </div>
            </motion.div>

            {/* Card 3: Email Us */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {isBn ? 'ইমেইল ঠিকানা' : 'Email Us'}
                </h4>
                <p className="text-xs text-slate-700 font-bold break-all">
                  {settings.contactEmail || 'soshgskhul@sos-bangladesh.org'}
                </p>
              </div>
            </motion.div>

            {/* Card 4: Office Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  {isBn ? 'অফিস সময়সূচি' : 'Office Hours'}
                </h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {isBn ? 'রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - বিকাল ৪:০০' : 'Sunday - Thursday: 9:00 AM - 4:00 PM'}
                </p>
                <p className="text-xs text-rose-600 font-semibold mt-0.5">
                  {isBn ? 'শুক্রবার: বন্ধ' : 'Friday: Closed'}
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Send us a Message Card (8 Spans) */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xs"
          >
            
            {/* Header with Icon */}
            <div className="mb-6 flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MessageSquare size={22} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {isBn ? 'আমাদের বার্তা পাঠান' : 'Send us a Message'}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {isBn 
                    ? 'নিচের ফর্মটি পূরণ করুন, আমরা দ্রুততম সময়ে আপনার সাথে যোগাযোগ করব।' 
                    : 'Fill out the form below and we will get back to you as soon as possible.'}
                </p>
              </div>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-6 flex items-center gap-3 font-bold text-xs sm:text-sm animate-fade-in">
                <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                <span>
                  {isBn 
                    ? 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!' 
                    : 'Thank you! Your message has been sent successfully.'}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className={labelClass}>
                    {isBn ? 'আপনার নাম *' : 'Your Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isBn ? 'আপনার পূর্ণ নাম লিখুন' : 'Enter your full name'}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    {isBn ? 'মোবাইল নম্বর *' : 'Mobile Number *'}
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="017XXXXXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2: Email & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className={labelClass}>
                    {isBn ? 'ইমেইল ঠিকানা' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    {isBn ? 'বিষয় *' : 'Subject *'}
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isBn ? 'বিষয় লিখুন বা নির্বাচন করুন' : 'Select or type your subject'}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 3: Message Area */}
              <div>
                <label className={labelClass}>
                  {isBn ? 'বার্তা বিস্তারিত *' : 'Message *'}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={isBn ? 'আপনার বার্তা বা জিজ্ঞাসা এখানে বিস্তারিত লিখুন...' : 'Write your message here...'}
                  className={inputClass}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#00704A] hover:bg-[#005a3c] text-white font-bold py-3.5 sm:py-4 rounded-2xl transition shadow-md hover:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} />
                  <span>{isBn ? 'বার্তা পাঠান' : 'Send Message'}</span>
                </button>
              </div>

            </form>

          </motion.div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
