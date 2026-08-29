import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Users, FileText, ImagePlus, Download, Bell, Activity, TrendingUp, UserCheck, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';

const attendanceData = [
  { name: 'জানু', attendance: 88 },
  { name: 'ফেব্রু', attendance: 92 },
  { name: 'মার্চ', attendance: 95 },
  { name: 'এপ্রিল', attendance: 86 },
  { name: 'মে', attendance: 89 },
  { name: 'জুন', attendance: 94 },
];

const Dashboard: React.FC = () => {
  const { students, teachers, staff, notices, results, admissionRequests } = useData();

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
           <div className="flex items-center gap-2 mb-1">
             <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">সিস্টেম স্ট্যাটাস: সক্রিয়</span>
           </div>
           <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">অ্যাডমিন ড্যাশবোর্ড ওভারভিউ</h3>
           <p className="text-slate-500 text-xs sm:text-sm mt-0.5">বিদ্যালয়ের সার্বিক শিক্ষার্থী, শিক্ষক, নোটিশ ও ফলাফলের রিয়েল-টাইম তথ্য।</p>
        </div>
        <div className="flex items-center gap-3">
           <Link 
             to="/admin/admissions" 
             className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
           >
             ভর্তি আবেদন ({admissionRequests.length})
           </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+৫% এই মাসে</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট শিক্ষার্থী</p>
            <h4 className="text-3xl font-extrabold text-slate-900 mt-1">{students.length} জন</h4>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">নিয়মিত</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">শিক্ষক ও স্টাফ</p>
            <h4 className="text-3xl font-extrabold text-slate-900 mt-1">{teachers.length + staff.length} জন</h4>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center font-bold">
              <Bell size={24} />
            </div>
            <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">সক্রিয়</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">মোট নোটিশ</p>
            <h4 className="text-3xl font-extrabold text-slate-900 mt-1">{notices.length} টি</h4>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold">
              <Activity size={24} />
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">সন্তোষজনক</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">গড় উপস্থিতি</p>
            <h4 className="text-3xl font-extrabold text-slate-900 mt-1">৯৪.৮%</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="text-emerald-700" size={20} /> মাসিক গড় শিক্ষার্থী উপস্থিতি হার (%)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">চলতি শিক্ষাবর্ষের মাসভিত্তিক উপস্থিতির পরিসংখ্যান</p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">২০২৫</span>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} domain={[0, 100]} />
                <Tooltip 
                  cursor={{fill: 'rgba(16, 185, 129, 0.05)'}} 
                  contentStyle={{backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px', fontWeight: 'bold'}}
                />
                <Bar dataKey="attendance" fill="#059669" radius={[6, 6, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions Shortcuts */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between">
           <div>
             <h3 className="text-lg font-bold text-slate-900 mb-2 pb-3 border-b border-slate-100">কুইক অ্যাকশন মেনু</h3>
             <p className="text-xs text-slate-400 mb-6">ঘন ঘন ব্যবহৃত মডিউলসমূহে দ্রুত প্রবেশ করুন</p>
           </div>
           
           <div className="grid grid-cols-2 gap-3.5">
              <Link 
                to="/admin/notices" 
                className="p-4 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-2xl transition flex flex-col items-center gap-2 text-center group"
              >
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-700 shadow-sm border border-slate-100 group-hover:scale-110 transition">
                   <Bell size={20} />
                 </div>
                 <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-800">নোটিশ প্রকাশ</span>
              </Link>

              <Link 
                to="/admin/students" 
                className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl transition flex flex-col items-center gap-2 text-center group"
              >
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-700 shadow-sm border border-slate-100 group-hover:scale-110 transition">
                   <Users size={20} />
                 </div>
                 <span className="text-xs font-bold text-slate-700 group-hover:text-blue-800">শিক্ষার্থী ডাটা</span>
              </Link>

              <Link 
                to="/admin/results" 
                className="p-4 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-200 rounded-2xl transition flex flex-col items-center gap-2 text-center group"
              >
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-amber-700 shadow-sm border border-slate-100 group-hover:scale-110 transition">
                   <FileText size={20} />
                 </div>
                 <span className="text-xs font-bold text-slate-700 group-hover:text-amber-800">ফলাফল তৈরি</span>
              </Link>

              <Link 
                to="/admin/downloads" 
                className="p-4 bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 rounded-2xl transition flex flex-col items-center gap-2 text-center group"
              >
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-purple-700 shadow-sm border border-slate-100 group-hover:scale-110 transition">
                   <Download size={20} />
                 </div>
                 <span className="text-xs font-bold text-slate-700 group-hover:text-purple-800">ফাইল আপলোড</span>
              </Link>
           </div>

           <div className="mt-6 pt-4 border-t border-slate-100">
              <Link 
                to="/" 
                target="_blank"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                লাইভ ওয়েবসাইট দেখুন <ArrowUpRight size={14} />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;