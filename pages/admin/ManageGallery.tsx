import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { EventImage } from '../../types';
import { Plus, Trash2, ImagePlus, X, Image as ImageIcon } from 'lucide-react';

const ManageGallery: React.FC = () => {
  const { gallery, deleteGalleryImage, addGalleryImage } = useData();
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState({
    url: '',
    caption: '',
    category: 'অনুষ্ঠান'
  });

  const handleDelete = (id: string) => {
    if(window.confirm('আপনি কি এই ছবিটি মুছে ফেলতে চান?')) deleteGalleryImage(id);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newImage.url && newImage.caption) {
      addGalleryImage({
        id: Date.now().toString(),
        url: newImage.url,
        caption: newImage.caption,
        category: newImage.category
      });
      setShowModal(false);
      setNewImage({ url: '', caption: '', category: 'অনুষ্ঠান' });
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
            <ImageIcon className="text-emerald-700" size={26} /> ফটো গ্যালারি ম্যানেজমেন্ট
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">বিদ্যালয়ের বিভিন্ন অনুষ্ঠান ও ক্যাম্পাসের ফটো যুক্ত ও পরিচালনা করুন</p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition"
        >
          <Plus size={18}/> নতুন ছবি যোগ করুন
        </button>
      </div>

      {/* Add Image Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">নতুন ছবি আপলোড ফরম</h3>
            
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className={labelClass}>ছবির URL লিঙ্ক *</label>
                <input required value={newImage.url} onChange={e => setNewImage({...newImage, url: e.target.value})} className={inputClass} placeholder="https://images.unsplash.com/..." />
              </div>
              <div>
                <label className={labelClass}>ছবির ক্যাপশন / বিবরণ *</label>
                <input required value={newImage.caption} onChange={e => setNewImage({...newImage, caption: e.target.value})} className={inputClass} placeholder="উদা: বিজ্ঞান মেলা ও উদ্ভাবনী প্রজেক্ট প্রদর্শনী" />
              </div>
              <div>
                <label className={labelClass}>ক্যাটাগরি</label>
                <input value={newImage.category} onChange={e => setNewImage({...newImage, category: e.target.value})} className={inputClass} placeholder="উদা: একাডেমিক / খেলাধুলা / অনুষ্ঠান" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600">বাতিল</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md">সংরক্ষণ করুন</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
         {gallery.map(img => (
           <div key={img.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group hover:shadow-md transition">
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img src={img.url} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                   <button 
                     onClick={() => handleDelete(img.id)} 
                     className="bg-rose-600 hover:bg-rose-700 text-white p-2.5 rounded-xl shadow-lg transition"
                     title="মুছে ফেলুন"
                   >
                     <Trash2 size={16}/>
                   </button>
                </div>
              </div>
              <div className="p-3.5 bg-white border-t border-slate-100">
                 <p className="text-xs font-bold text-slate-800 truncate">{img.caption}</p>
                 <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md mt-1 inline-block">
                   {img.category || 'সাধারণ'}
                 </span>
              </div>
           </div>
         ))}
         
         <div 
           onClick={() => setShowModal(true)} 
           className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl h-56 flex flex-col items-center justify-center text-slate-400 hover:text-emerald-700 bg-white hover:bg-emerald-50/50 cursor-pointer transition"
         >
            <ImagePlus size={28}/>
            <span className="text-xs font-bold mt-2">নতুন ছবি যুক্ত করুন</span>
         </div>
      </div>

    </div>
  );
};

export default ManageGallery;
