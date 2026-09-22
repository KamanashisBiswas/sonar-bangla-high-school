import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Users, Award, ShieldCheck, BookOpen, Star, Compass, CheckCircle2 } from 'lucide-react';

export const Students: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'clubs' | 'stats' | 'guidelines'>('clubs');

  const studentClubs = [
    {
      name: 'Science & Robotics Club',
      lead: 'Md. Zahirul Haque',
      members: '120+ Members',
      desc: 'Hands-on experimentation, national science Olympiad training, and robotics projects.',
      icon: '🔬',
    },
    {
      name: 'Debating & Literary Society',
      lead: 'Mst. Rehana Parveen',
      members: '85+ Members',
      desc: 'Fostering public speaking, parliamentary debate skills, and national speech competitions.',
      icon: '🎙️',
    },
    {
      name: 'Bangladesh Scouts Troop',
      lead: 'Abdul Karim Sheikh',
      members: '90+ Scouts',
      desc: 'Community volunteering, wilderness camps, leadership development, and disaster aid.',
      icon: '⚜️',
    },
    {
      name: 'Cultural & Performing Arts Club',
      lead: 'Subarna Das',
      members: '110+ Members',
      desc: 'Traditional Bengali music, drama performances, Tagore & Nazrul day celebrations.',
      icon: '🎭',
    },
    {
      name: 'Sports & Athletic Association',
      lead: 'Indrajit Kumar Mondal',
      members: '150+ Athletes',
      desc: 'Football, cricket, volleyball, badminton, and annual sports events.',
      icon: '⚽',
    },
    {
      name: 'ICT & Coding Innovators Club',
      lead: 'Engr. Amit Roy',
      members: '95+ Members',
      desc: 'Basic programming, web fundamentals, digital literacy, and IT exhibitions.',
      icon: '💻',
    },
  ];

  const classEnrollment = [
    { class: 'Class 6', sections: 'A, B', boys: 58, girls: 62, total: 120 },
    { class: 'Class 7', sections: 'A, B', boys: 55, girls: 65, total: 120 },
    { class: 'Class 8', sections: 'A, B', boys: 60, girls: 58, total: 118 },
    { class: 'Class 9 (Science & Arts)', sections: 'A, B, C', boys: 75, girls: 80, total: 155 },
    { class: 'Class 10 (Science & Arts)', sections: 'A, B, C', boys: 70, girls: 78, total: 148 },
  ];

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Students"
        badge="STUDENT LIFE & ACTIVITIES"
        badgeIcon={<Users size={13} className="text-[#059669]" />}
        title="Student Community & Clubs"
        description="Nurturing talent, discipline, leadership, and camaraderie through active clubs, sports, and co-curricular programs."
        features={[
          { icon: <Users size={16} />, title: '1,200+', subtitle: 'Enrolled Students' },
          { icon: <Award size={16} />, title: '6+ Clubs', subtitle: 'Co-Curriculars' },
          { icon: <ShieldCheck size={16} />, title: 'Holistic', subtitle: 'Character Building' },
        ]}
        buildingQuote={{
          text: 'Every child is an ocean of boundless curiosity and extraordinary potential.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-10">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-center gap-2">
          {[
            { id: 'clubs', label: 'Co-Curricular Clubs' },
            { id: 'stats', label: 'Class Enrollment' },
            { id: 'guidelines', label: 'Code of Conduct' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#004d34] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Clubs */}
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentClubs.map((club, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-3 bg-emerald-50 rounded-2xl">
                      {club.icon}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {club.members}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {club.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {club.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Moderator:</span>
                  <span className="text-xs font-bold text-[#004d34]">
                    {club.lead}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Class Enrollment */}
        {activeTab === 'stats' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-black text-slate-900">Current Academic Enrollment</h3>
              <p className="text-xs text-slate-500">Breakdown across secondary classes for Academic Year 2025</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#004d34] text-white">
                    <th className="py-3 px-6 font-bold">Class Level</th>
                    <th className="py-3 px-6 font-bold">Sections</th>
                    <th className="py-3 px-6 font-bold">Male Students</th>
                    <th className="py-3 px-6 font-bold">Female Students</th>
                    <th className="py-3 px-6 font-bold text-right">Total Strength</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {classEnrollment.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      <td className="py-3.5 px-6 font-bold text-slate-900">{row.class}</td>
                      <td className="py-3.5 px-6 text-slate-600 font-medium">{row.sections}</td>
                      <td className="py-3.5 px-6 text-slate-600 font-medium">{row.boys}</td>
                      <td className="py-3.5 px-6 text-slate-600 font-medium">{row.girls}</td>
                      <td className="py-3.5 px-6 text-right font-black text-[#004d34]">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Guidelines & Code of Conduct */}
        {activeTab === 'guidelines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#004d34] flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Student Discipline & Ethics
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Punctuality is mandatory. Students must arrive by 07:45 AM before morning assembly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prescribed institutional uniform and student ID card must be worn at all times.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Cellphones and unauthorized electronic devices are strictly prohibited on campus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Respect toward teachers, staff members, peers, and school property is non-negotiable.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <Star size={20} />
                </div>
                <h4 className="text-base font-bold text-slate-900">
                  Uniform & Dress Standards
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Boys:</strong> White shirt with school monogram, bottle green trousers, black shoes & white socks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Girls:</strong> Bottle green frock/kamiz with white collar, white salwar, white orna/scarf, black shoes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Winter:</strong> Official bottle green sweater or blazer with school emblem.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>PT & Sports:</strong> White sports t-shirt with house color accents and white sneakers.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
