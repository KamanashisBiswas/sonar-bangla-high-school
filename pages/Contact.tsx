import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { settings } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4500);
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin size={15} /> {language === 'bn' ? 'যোগাযোগ ও অবস্থান' : 'Contact & Location'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.contact.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Info Cards */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t.contact.addressTitle}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{settings.schoolAddress}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t.contact.phoneTitle}</h4>
                <p className="text-xs text-slate-600 font-semibold">{toBanglaNum(settings.contactPhone)}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">EIIN: {toBanglaNum(settings.eiinCode)}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t.contact.emailTitle}</h4>
                <p className="text-xs text-slate-600 font-semibold">{settings.contactEmail}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{t.contact.hoursTitle}</h4>
                <p className="text-xs text-slate-500">{t.contact.hoursDesc}</p>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <MessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{t.contact.formTitle}</h3>
                <p className="text-xs text-slate-400">{t.contact.formSubtitle}</p>
              </div>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-6 flex items-center gap-3 font-bold text-xs sm:text-sm animate-fade-in">
                <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                <span>{t.contact.msgSuccess}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.contact.nameLabel}</label>
                  <input
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="আপনার নাম"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.contact.phoneLabel}</label>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@mail.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.contact.subjectLabel}</label>
                  <input
                    required
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="বার্তা প্রেরণের বিষয়"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>{t.contact.messageLabel}</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="আপনার বার্তা বা প্রশ্ন বিস্তারিত লিখুন..."
                  className={inputClass}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition shadow-md shadow-emerald-800/20 text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} /> {t.contact.sendBtn}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Location Map Placeholder */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <h4 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-emerald-700" /> {language === 'bn' ? 'ক্যাম্পাসের গুগল ম্যাপ লোকেশন' : 'Campus Google Map Location'}
          </h4>
          <div className="w-full h-64 bg-slate-100 rounded-2xl flex flex-col items-center justify-center border border-slate-200 text-center p-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
              <MapPin size={24} />
            </div>
            <h5 className="font-extrabold text-slate-800 text-sm">{settings.schoolName}</h5>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">{settings.schoolAddress}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
