import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Image as ImageIcon, Eye, X } from 'lucide-react';
import { EventImage } from '../types';

const Gallery: React.FC = () => {
  const { gallery } = useData();
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<EventImage | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ImageIcon size={15} /> {language === 'bn' ? 'ফটো গ্যালারি ও চিত্রশালা' : 'Photo Gallery'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{t.gallery.title}</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {t.gallery.subtitle}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200/90 cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg">
                    <Eye size={20} />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm leading-snug line-clamp-2">{img.caption}</h4>
                <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md mt-2 inline-block">
                  {img.category || (language === 'bn' ? 'অনুষ্ঠান' : 'Event')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Image Preview Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in" onClick={() => setSelectedImage(null)}>
            <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-slate-700" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedImage(null)} 
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="max-h-[70vh] bg-slate-950 flex items-center justify-center">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption} 
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 bg-white flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">{selectedImage.caption}</h3>
                  <span className="text-xs text-emerald-700 font-bold mt-1 inline-block">
                    ক্যাটাগরি: {selectedImage.category || 'সাধারণ'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
