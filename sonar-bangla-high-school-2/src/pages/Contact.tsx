import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, Building } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Contact Us"
        badge="GET IN TOUCH"
        badgeIcon={<MessageSquare size={13} className="text-[#059669]" />}
        title="Contact & Office Location"
        description="We are here to assist you. Reach out for admission inquiries, academic feedback, or visit our campus."
        features={[
          { icon: <MapPin size={16} />, title: 'Campus', subtitle: 'Gollamari, Khulna' },
          { icon: <Phone size={16} />, title: 'Direct Call', subtitle: SCHOOL_INFO.phone },
          { icon: <Clock size={16} />, title: 'Office Hours', subtitle: '08:00 AM - 03:00 PM' },
        ]}
        buildingQuote={{
          text: 'Open doors and welcoming hearts for every student, parent, and visitor.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">School Campus</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {SCHOOL_INFO.address}
              </p>
              <span className="text-[11px] text-emerald-700 font-bold block mt-2">
                Khulna Division, Bangladesh
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Phone Helpline</h4>
              <p className="text-xs text-slate-600 mt-1">
                Landline: {SCHOOL_INFO.phone}
              </p>
              <p className="text-xs text-slate-600">Mobile: +880 1711-000000</p>
              <span className="text-[11px] text-emerald-700 font-bold block mt-2">
                Sun - Thu (8 AM - 3 PM)
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Email Address</h4>
              <p className="text-xs text-slate-600 mt-1 break-all">
                {SCHOOL_INFO.email}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">info@soshgskhulna.edu.bd</p>
              <span className="text-[11px] text-emerald-700 font-bold block mt-2">
                24/7 Response Desk
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Office Hours</h4>
              <p className="text-xs text-slate-600 mt-1">
                Sunday - Thursday: 8:00 AM - 3:00 PM
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Friday & Saturday: Closed</p>
              <span className="text-[11px] text-emerald-700 font-bold block mt-2">
                EIIN Code: {SCHOOL_INFO.eiin}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl font-black text-slate-900">Send an Inquiry</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and our administrative office will get back to you promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle size={36} className="text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out. We will contact you at {formData.email || 'your email'} shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-[#004d34] text-white text-xs font-bold rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rafiq Ahmed"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#004d34] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#004d34] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. 017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#004d34] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Admission Inquiry for Class 6"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#004d34] transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-[#004d34] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#004d34] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#064e3b] transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={14} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Location / Campus Map Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div>
              <h3 className="text-xl font-black text-slate-900">Campus Location</h3>
              <p className="text-xs text-slate-500 mt-1">
                Located near Gollamari bridge, Khulna. Easy access via public transit.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-video relative bg-slate-100 flex items-center justify-center">
              <iframe
                title="School Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.674902148722!2d89.53724647596041!3d22.814529323381666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0055743b176bb7%3A0xadbead2d1f43501a!2sSOS%20Hermann%20Gmeiner%20College%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                <Building size={14} className="text-[#004d34]" />
                Visiting Protocols
              </div>
              <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                All visitors must check in with the main security gate and obtain a visitor pass during office hours (08:00 AM - 03:00 PM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
