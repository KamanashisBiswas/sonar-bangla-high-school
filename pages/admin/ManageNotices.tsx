import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Notice } from '../../types';
import { Plus, Edit, Trash2, X, Bell, Calendar, Type } from 'lucide-react';

const ManageNotices: React.FC = () => {
  const { notices, deleteNotice, addNotice } = useData();
  const [showForm, setShowForm] = useState(false);
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    type: 'General',
    content: ''
  });

  const handleDelete = (id: string) => {
    if(window.confirm('আপনি কি নিশ্চিত যে আপনি এটি মুছে ফেলতে চান?')) {
      deleteNotice(id);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNotice.title && newNotice.date) {
        addNotice({
            id: Date.now().toString(),
            title: newNotice.title,
            date: newNotice.date,
            type: newNotice.type as any,
            content: newNotice.content
        });
        setShowForm(false);
        setNewNotice({ title: '', date: new Date().toISOString().split('T')[0], type: 'General', content: '' });
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
                 <Bell className="text-emerald-700" size={26} /> নোটিশ বোর্ড ম্যানেজমেন্ট
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">নতুন নোটিশ প্রকাশ, সম্পাদনা বা বাতিল করুন</p>
            </div>
            {!showForm && (
                <button 
                  onClick={() => setShowForm(true)} 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition"
                >
                    <Plus size={18}/> নতুন নোটিশ যুক্ত করুন
                </button>
            )}
        </div>

        {showForm && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200 relative animate-slide-up">
                <button 
                  onClick={() => setShowForm(false)} 
                  className="absolute top-6 right-6 bg-slate-100 text-slate-500 hover:text-rose-600 p-2 rounded-xl transition"
                >
                  <X size={18}/>
                </button>
                
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">নতুন নোটিশ প্রকাশ ফরম</h3>
                
                <form onSubmit={handleAdd} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="sm:col-span-3">
                            <label className={labelClass}>নোটিশ শিরোনাম *</label>
                            <input 
                              required 
                              value={newNotice.title} 
                              onChange={e => setNewNotice({...newNotice, title: e.target.value})} 
                              className={inputClass} 
                              placeholder="উদা: ২০২৫ শিক্ষাবর্ষের অর্ধবার্ষিক পরীক্ষার সময়সূচি"
                            />
                        </div>
                        <div>
                            <label className={labelClass}>প্রকাশের তারিখ *</label>
                            <input 
                              type="date" 
                              required 
                              value={newNotice.date} 
                              onChange={e => setNewNotice({...newNotice, date: e.target.value})} 
                              className={inputClass}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>নোটিশের ধরন</label>
                            <select 
                              value={newNotice.type} 
                              onChange={e => setNewNotice({...newNotice, type: e.target.value as any})} 
                              className={inputClass}
                            >
                                <option value="General">General (সাধারণ)</option>
                                <option value="Exam">Exam (পরীক্ষা)</option>
                                <option value="Admission">Admission (ভর্তি)</option>
                                <option value="Event">Event (অনুষ্ঠান)</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className={labelClass}>বিস্তারিত বিবরণ</label>
                        <textarea 
                          rows={4} 
                          value={newNotice.content} 
                          onChange={e => setNewNotice({...newNotice, content: e.target.value})} 
                          className={inputClass} 
                          placeholder="নোটিশের বিস্তারিত তথ্য এখানে লিখুন..."
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setShowForm(false)} 
                          className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs transition"
                        >
                          বাতিল
                        </button>
                        <button 
                          type="submit" 
                          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-800/20 transition flex items-center gap-2"
                        >
                          <Bell size={16}/> নোটিশ প্রকাশ করুন
                        </button>
                    </div>
                </form>
            </div>
        )}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="font-bold text-slate-800 text-sm">প্রকাশিত নোটিশের তালিকা ({notices.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">তারিখ</th>
                <th className="p-4 sm:p-5">শিরোনাম</th>
                <th className="p-4 sm:p-5 text-center">ধরন</th>
                <th className="p-4 sm:p-5 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {notices.length === 0 ? (
                <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">কোনো নোটিশ খুঁজে পাওয়া যায়নি</td></tr>
              ) : (
                notices.map(notice => (
                  <tr key={notice.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-500">{notice.date}</td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 leading-snug">{notice.title}</td>
                    <td className="p-4 sm:p-5 text-center">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                        notice.type === 'Exam' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                        notice.type === 'Admission' ? 'bg-blue-50 text-blue-800 border border-blue-200' :
                        'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {notice.type}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-right">
                      <button 
                        onClick={() => handleDelete(notice.id)} 
                        className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200"
                        title="মুছে ফেলুন"
                      >
                        <Trash2 size={16}/>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageNotices;