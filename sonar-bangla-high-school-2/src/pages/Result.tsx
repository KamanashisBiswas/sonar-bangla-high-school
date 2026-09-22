import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Award, Search, CheckCircle2, ShieldCheck, Download, FileText } from 'lucide-react';

export const Result: React.FC = () => {
  const [roll, setRoll] = useState('');
  const [examClass, setExamClass] = useState('10');
  const [searched, setSearched] = useState(false);

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Result"
        badge="ACADEMIC RESULT PORTAL"
        badgeIcon={<Award size={13} className="text-[#059669]" />}
        title="Academic Results & Marksheet"
        description="Search results and generate official academic transcripts using student Roll and Class."
        features={[
          { icon: <Award size={16} />, title: 'Instant', subtitle: 'Marksheet Search' },
          { icon: <ShieldCheck size={16} />, title: 'Verified', subtitle: 'Board Certified' },
        ]}
        buildingQuote={{
          text: 'Excellence is the gradual result of always striving to do better.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-12">
        {/* Search Result Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs max-w-3xl mx-auto">
          <h3 className="text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
            Student Result Search
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearched(true);
            }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Class</label>
                <select
                  value={examClass}
                  onChange={(e) => setExamClass(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Exam Year</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600">
                  <option value="2025">2025 - Annual Exam</option>
                  <option value="2024">2024 - Annual Exam</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Roll Number</label>
                <input
                  required
                  type="text"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  placeholder="e.g. 101"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#064e3b] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition shadow-md cursor-pointer"
              >
                <Search size={14} />
                <span>Search Result</span>
              </button>
            </div>
          </form>

          {searched && (
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
              <div className="bg-[#e8f7f0] border border-[#a7f3d0] p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Abdullah Al Mamun</h4>
                  <p className="text-xs text-slate-600">Class {examClass} | Roll: {roll || '101'} | GPA: 5.00 (Golden A+)</p>
                </div>
                <span className="bg-[#004d34] text-white text-xs font-bold px-3 py-1 rounded-full">
                  PASSED
                </span>
              </div>

              {/* Subject Breakdown */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">Subject</th>
                      <th className="py-2.5 px-3">Marks</th>
                      <th className="py-2.5 px-3">Grade</th>
                      <th className="py-2.5 px-3">Point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Bangla</td>
                      <td className="py-2.5 px-3">88</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">A+</td>
                      <td className="py-2.5 px-3">5.0</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">English</td>
                      <td className="py-2.5 px-3">85</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">A+</td>
                      <td className="py-2.5 px-3">5.0</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Mathematics</td>
                      <td className="py-2.5 px-3">94</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">A+</td>
                      <td className="py-2.5 px-3">5.0</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Higher Mathematics</td>
                      <td className="py-2.5 px-3">91</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">A+</td>
                      <td className="py-2.5 px-3">5.0</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-semibold">Physics</td>
                      <td className="py-2.5 px-3">89</td>
                      <td className="py-2.5 px-3 text-emerald-700 font-bold">A+</td>
                      <td className="py-2.5 px-3">5.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Marksheet PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
