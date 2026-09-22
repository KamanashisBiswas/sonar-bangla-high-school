import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { BookOpen, CheckCircle2, ShieldCheck, Download, ArrowRight, Clock, FileText } from 'lucide-react';

export const Admission: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Admission"
        badge="ONLINE ADMISSION"
        badgeIcon={<BookOpen size={13} className="text-[#059669]" />}
        title="Online Admission 2026"
        description="Apply for admission to SOS Hermann Gmeiner School Khulna from the comfort of your home. Follow the steps and submit your application."
        features={[
          { icon: <CheckCircle2 size={16} />, title: 'Easy Process', subtitle: 'Step by step form' },
          { icon: <ShieldCheck size={16} />, title: 'Merit Based', subtitle: 'Fair selection' },
          { icon: <Clock size={16} />, title: 'Open Now', subtitle: 'Session 2026' },
        ]}
        buildingQuote={{
          text: 'Education is the key to unlocking the world.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-12">
        {/* Guidelines Card */}
        <div className="bg-[#004d34] text-white p-6 sm:p-8 rounded-3xl shadow-md border border-emerald-800">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-800">
            <ShieldCheck size={22} className="text-amber-300" />
            <h2 className="text-lg sm:text-xl font-bold">Admission Instructions & Guidelines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 text-xs sm:text-sm text-emerald-100">
            <p>• Online admission applications are open for Prep to Class 9.</p>
            <p>• Prepare student's digital birth registration certificate and passport size photo.</p>
            <p>• Application fee can be paid through mobile banking or bank deposit.</p>
            <p>• Selected candidates will be notified via SMS and official notice board.</p>
          </div>
        </div>

        {/* Admission Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs max-w-4xl mx-auto">
          <h3 className="text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
            Student Admission Application Form
          </h3>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
              <CheckCircle2 size={32} className="mx-auto text-emerald-600" />
              <h4 className="font-extrabold text-base">Application Submitted Successfully!</h4>
              <p className="text-xs">Your application tracking number is: <strong>SOS-2026-8834</strong>. Please save this for future reference.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Student Full Name (English) *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Abdullah Al Mamun"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Seeking Admission for Class *
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="">Select Class</option>
                    <option value="Prep">Play / Nursery / Prep</option>
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                    <option value="6">Class 6</option>
                    <option value="7">Class 7</option>
                    <option value="8">Class 8</option>
                    <option value="9">Class 9 (Science / Business)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Date of Birth *
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Gender *
                  </label>
                  <select
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Father's Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Father Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mother's Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Mother Name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Guardian Mobile Number *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Present Address *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Area, Thana, District"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#004d34] hover:bg-[#064e3b] text-white px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition shadow-md cursor-pointer"
                >
                  Submit Application Form
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
