import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { DownloadItem } from '../../types';
import { Plus, Trash2, Download, X, FileText } from 'lucide-react';

const ManageDownloads: React.FC = () => {
  const { downloads, deleteDownload, addDownload } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: '',
    category: 'রুটিন',
    date: new Date().toISOString().split('T')[0],
    size: '2.5 MB',
    fileUrl: '#'
  });

  const handleDelete = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি এই ফাইলটি মুছে ফেলতে চান?' : 'Are you sure you want to delete this downloadable file?')) {
      deleteDownload(id);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDoc.title) {
      addDownload({
        id: Date.now().toString(),
        title: newDoc.title,
        category: newDoc.category,
        date: newDoc.date,
        size: newDoc.size,
        fileUrl: newDoc.fileUrl
      });
      setShowModal(false);
      setNewDoc({ title: '', category: 'রুটিন', date: new Date().toISOString().split('T')[0], size: '2.5 MB', fileUrl: '#' });
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Download className="text-emerald-700" size={26} /> 
            {language === 'bn' ? 'ডাউনলোড জোন ম্যানেজমেন্ট' : 'Download Zone Management'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            {language === 'bn' ? 'রুটিন, সিলেবাস, ছুটির তালিকা ও ফরম আপলোড করুন' : 'Manage routines, syllabuses, academic calendars and downloadable forms'}
          </p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition cursor-pointer"
        >
          <Plus size={18}/> {language === 'bn' ? 'নতুন ফাইল আপলোড করুন' : 'Upload New File'}
        </button>
      </div>

      {/* Add File Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 cursor-pointer">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
              {language === 'bn' ? 'নতুন ডাউনলোড ফাইল যোগ' : 'Upload Downloadable Document'}
            </h3>
            
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className={labelClass}>{language === 'bn' ? 'ফাইলের শিরোনাম *' : 'Document Title *'}</label>
                <input required value={newDoc.title} onChange={e => setNewDoc({...newDoc, title: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: বার্ষিক পরীক্ষা ২০২৫ এর রুটিন" : "e.g. Annual Exam Routine 2025"} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'ক্যাটাগরি' : 'Category'}</label>
                  <select value={newDoc.category} onChange={e => setNewDoc({...newDoc, category: e.target.value})} className={inputClass}>
                    <option value="রুটিন">{language === 'bn' ? 'রুটিন' : 'Routine'}</option>
                    <option value="সিলেবাস">{language === 'bn' ? 'সিলেবাস' : 'Syllabus'}</option>
                    <option value="ছুটির তালিকা">{language === 'bn' ? 'ছুটির তালিকা' : 'Holidays List'}</option>
                    <option value="ফরম">{language === 'bn' ? 'ফরম' : 'Forms'}</option>
                    <option value="অন্যান্য">{language === 'bn' ? 'অন্যান্য' : 'Others'}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'সাইজ' : 'File Size'}</label>
                  <input value={newDoc.size} onChange={e => setNewDoc({...newDoc, size: e.target.value})} className={inputClass} placeholder="1.2 MB" />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600 cursor-pointer">{language === 'bn' ? 'বাতিল' : 'Cancel'}</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md cursor-pointer">{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Document'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="font-bold text-slate-800 text-sm">
             {language === 'bn' ? 'আপলোডকৃত ফাইলের তালিকা' : 'Uploaded Files List'} ({toBanglaNum(downloads.length)})
           </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">{language === 'bn' ? 'ফাইলের শিরোনাম' : 'Document Title'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'আপলোডের তারিখ' : 'Upload Date'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'সাইজ' : 'Size'}</th>
                <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {downloads.map(d => (
                <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2.5">
                    <FileText size={16} className="text-emerald-700 flex-shrink-0" />
                    <span>{d.title}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-center">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-lg text-xs font-semibold">
                      {d.category}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-500 font-medium">{toBanglaNum(d.date)}</td>
                  <td className="p-4 sm:p-5 text-slate-600 font-bold">{toBanglaNum(d.size)}</td>
                  <td className="p-4 sm:p-5 text-right">
                    <button 
                      onClick={() => handleDelete(d.id)} 
                      className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200 cursor-pointer"
                      title={language === 'bn' ? "মুছে ফেলুন" : "Delete"}
                    >
                      <Trash2 size={16}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ManageDownloads;
