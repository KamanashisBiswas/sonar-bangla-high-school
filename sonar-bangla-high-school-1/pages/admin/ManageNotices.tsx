import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Notice } from '../../types';
import { Plus, Edit, Trash2, X, Bell, Calendar, Type } from 'lucide-react';

const ManageNotices: React.FC = () => {
  const { notices, deleteNotice, addNotice } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [newNotice, setNewNotice] = useState<Partial<Notice>>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    type: 'General',
    content: ''
  });

  const handleDelete = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি নিশ্চিত যে আপনি এটি মুছে ফেলতে চান?' : 'Are you sure you want to delete this notice?')) {
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
                 <Bell className="text-emerald-700" size={26} /> 
                 {language === 'bn' ? 'নোটিশ বোর্ড ম্যানেজমেন্ট' : 'Notice Board Management'}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                {language === 'bn' ? 'নতুন নোটিশ প্রকাশ, সম্পাদনা বা বাতিল করুন' : 'Publish, edit, or remove official school circulars and notices'}
              </p>
            </div>
            {!showForm && (
                <button 
                  onClick={() => setShowForm(true)} 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition cursor-pointer"
                >
                    <Plus size={18}/> {language === 'bn' ? 'নতুন নোটিশ যুক্ত করুন' : 'Add New Notice'}
                </button>
            )}
        </div>

        {showForm && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-200 relative animate-slide-up">
                <button 
                  onClick={() => setShowForm(false)} 
                  className="absolute top-6 right-6 bg-slate-100 text-slate-500 hover:text-rose-600 p-2 rounded-xl transition cursor-pointer"
                >
                  <X size={18}/>
                </button>
                
                <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                  {language === 'bn' ? 'নতুন নোটিশ প্রকাশ ফরম' : 'Publish New Notice Form'}
                </h3>
                
                <form onSubmit={handleAdd} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="sm:col-span-3">
                            <label className={labelClass}>{language === 'bn' ? 'নোটিশ শিরোনাম *' : 'Notice Title *'}</label>
                            <input 
                              required 
                              value={newNotice.title} 
                              onChange={e => setNewNotice({...newNotice, title: e.target.value})} 
                              className={inputClass} 
                              placeholder={language === 'bn' ? "উদা: ২০২৫ শিক্ষাবর্ষের অর্ধবার্ষিক পরীক্ষার সময়সূচি" : "e.g. Half-Yearly Examination Routine 2025"}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>{language === 'bn' ? 'প্রকাশের তারিখ *' : 'Publication Date *'}</label>
                            <input 
                              type="date" 
                              required 
                              value={newNotice.date} 
                              onChange={e => setNewNotice({...newNotice, date: e.target.value})} 
                              className={inputClass}
                            />
                        </div>
                        <div>
                            <label className={labelClass}>{language === 'bn' ? 'নোটিশের ধরন' : 'Category / Type'}</label>
                            <select 
                              value={newNotice.type} 
                              onChange={e => setNewNotice({...newNotice, type: e.target.value as any})} 
                              className={inputClass}
                            >
                                <option value="General">General ({language === 'bn' ? 'সাধারণ' : 'General'})</option>
                                <option value="Exam">Exam ({language === 'bn' ? 'পরীক্ষা' : 'Exam'})</option>
                                <option value="Admission">Admission ({language === 'bn' ? 'ভর্তি' : 'Admission'})</option>
                                <option value="Event">Event ({language === 'bn' ? 'অনুষ্ঠান' : 'Event'})</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className={labelClass}>{language === 'bn' ? 'বিস্তারিত বিবরণ' : 'Detailed Content / Description'}</label>
                        <textarea 
                          rows={4} 
                          value={newNotice.content} 
                          onChange={e => setNewNotice({...newNotice, content: e.target.value})} 
                          className={inputClass} 
                          placeholder={language === 'bn' ? "নোটিশের বিস্তারিত তথ্য এখানে লিখুন..." : "Enter detailed circular info here..."}
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setShowForm(false)} 
                          className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs transition cursor-pointer"
                        >
                          {language === 'bn' ? 'বাতিল' : 'Cancel'}
                        </button>
                        <button 
                          type="submit" 
                          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-800/20 transition flex items-center gap-2 cursor-pointer"
                        >
                          <Bell size={16}/> {language === 'bn' ? 'নোটিশ প্রকাশ করুন' : 'Publish Notice'}
                        </button>
                    </div>
                </form>
            </div>
        )}

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="font-bold text-slate-800 text-sm">
             {language === 'bn' ? 'প্রকাশিত নোটিশের তালিকা' : 'Published Notices List'} ({toBanglaNum(notices.length)})
           </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">{language === 'bn' ? 'তারিখ' : 'Date'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'শিরোনাম' : 'Title'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'ধরন' : 'Category'}</th>
                <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {notices.length === 0 ? (
                <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">{language === 'bn' ? 'কোনো নোটিশ খুঁজে পাওয়া যায়নি' : 'No notices found'}</td></tr>
              ) : (
                notices.map(notice => (
                  <tr key={notice.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-slate-500">{toBanglaNum(notice.date)}</td>
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
                        className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200 cursor-pointer"
                        title={language === 'bn' ? 'মুছে ফেলুন' : 'Delete'}
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