import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Calendar, Download, Clock, BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const Academic: React.FC = () => {
  const [activeClass, setActiveClass] = useState('10');

  const routines = [
    { period: '1st', time: '08:00 - 08:45 AM', subject: 'Bangla 1st Paper', teacher: 'Abdul Karim Sheikh' },
    { period: '2nd', time: '08:45 - 09:30 AM', subject: 'English 1st Paper', teacher: 'Mst. Rehana Parveen' },
    { period: '3rd', time: '09:30 - 10:15 AM', subject: 'Higher Mathematics', teacher: 'Md. Zahirul Haque' },
    { period: '4th', time: '10:15 - 11:00 AM', subject: 'Physics / Chemistry', teacher: 'Indrajit Kumar Mondal' },
    { period: 'Break', time: '11:00 - 11:30 AM', subject: 'Tiffin & Refreshment', teacher: '—' },
    { period: '5th', time: '11:30 - 12:15 PM', subject: 'Biology', teacher: 'Subarna Das' },
    { period: '6th', time: '12:15 - 01:00 PM', subject: 'Information & Tech', teacher: 'Engr. Amit Roy' },
  ];

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Academic"
        badge="ACADEMIC EXCELLENCE"
        badgeIcon={<Calendar size={13} className="text-[#059669]" />}
        title="Academic Policies & Routine"
        description="Master class routines, curriculum guidelines, exam schedules, and comprehensive academic policies."
        features={[
          { icon: <Calendar size={16} />, title: 'Structured', subtitle: 'Daily Routine' },
          { icon: <BookOpen size={16} />, title: 'NCTB Curriculum', subtitle: 'National Standard' },
          { icon: <Layers size={16} />, title: 'Holistic', subtitle: 'Co-Curricular' },
        ]}
        buildingQuote={{
          text: 'Discipline and dedication pave the road to knowledge.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-12">
        {/* Class Routine Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-black text-slate-900">Daily Master Class Routine</h3>
              <p className="text-xs text-slate-500 font-medium">Session 2025 - 2026 Academic Schedule</p>
            </div>

            <div className="flex items-center gap-2">
              {['6', '7', '8', '9', '10'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setActiveClass(cls)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeClass === cls
                      ? 'bg-[#004d34] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Class {cls}
                </button>
              ))}
            </div>
          </div>

          {/* Routine Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 uppercase font-extrabold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Teacher / Mentor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {routines.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50/80 transition ${
                      row.period === 'Break' ? 'bg-amber-50/60 font-bold' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-900">{row.period}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{row.time}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-900">{row.subject}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{row.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Academic Policies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center font-bold">
              <CheckCircle2 size={20} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">Attendance Policy</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Minimum 80% attendance is mandatory for participating in semester and board examinations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Layers size={20} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">Grading & Evaluation</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Continuous assessment including class tests, homework, lab evaluations and midterm exams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <Clock size={20} />
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">Campus Discipline</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Prompt arrival, proper prescribed uniform, and courteous conduct are expected from every learner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
