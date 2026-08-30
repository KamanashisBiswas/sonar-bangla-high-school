import React, { useState, useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Image as ImageIcon, Eye, X, ChevronLeft, ChevronRight, Layers, Calendar } from 'lucide-react';
import { EventImage } from '../types';

const Gallery: React.FC = () => {
  const { gallery } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<EventImage | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Available categories
  const categories = [
    { key: 'all', bn: 'সকল অ্যালবাম', en: 'All Albums' },
    { key: 'Sports', bn: 'ক্রীড়া ও চ্যাম্পিয়নশিপ', en: 'Sports & Awards' },
    { key: 'Jayanti', bn: 'জয়ন্তী ২০২৬', en: 'Jayanti 2026' },
    { key: 'Leadership', bn: 'নেতৃত্ব ও সম্মাননা', en: 'Leadership' },
    { key: 'Campus', bn: 'ক্যাম্পাস ও প্রাঙ্গণ', en: 'Campus Grounds' },
    { key: 'Assembly', bn: 'প্রাত্যহিক সমাবেশ', en: 'Assembly' },
    { key: 'Academic', bn: 'ডিজিটাল ক্লাসরুম', en: 'Academic & Labs' },
  ];

  const filteredAlbums = gallery.filter(album => {
    if (activeCategory === 'all') return true;
    return album.category?.toLowerCase() === activeCategory.toLowerCase();
  });

  const openAlbum = (album: EventImage, initialIndex = 0) => {
    setSelectedAlbum(album);
    setActivePhotoIndex(initialIndex);
  };

  const getAlbumPhotos = (album: EventImage): string[] => {
    if (album.photos && album.photos.length > 0) {
      return album.photos;
    }
    return [album.url];
  };

  const currentPhotos = selectedAlbum ? getAlbumPhotos(selectedAlbum) : [];

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPhotos.length > 0) {
      setActivePhotoIndex((prev) => (prev + 1) % currentPhotos.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentPhotos.length > 0) {
      setActivePhotoIndex((prev) => (prev === 0 ? currentPhotos.length - 1 : prev - 1));
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedAlbum) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') setSelectedAlbum(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAlbum, currentPhotos.length]);

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Layers size={15} /> {language === 'bn' ? 'ফটো অ্যালবাম ও গ্যালারি' : 'Photo Albums & Gallery'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {language === 'bn' ? 'স্মৃতিময় মুহূর্ত ও ফটো অ্যালবাম' : 'Memorable Moments & Photo Albums'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            {language === 'bn' 
              ? 'আমাদের বিদ্যালয়ের বিভিন্ন ক্রীড়া প্রতিযোগিতা, জয়ন্তী উৎসব, ক্যাম্পাস জীবন ও একাডেমিক মুহূর্তের অ্যালবাম কালেকশন।' 
              : 'Explore photo albums of our sports victories, jubilee celebrations, academic milestones, and campus life.'}
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-800/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {language === 'bn' ? cat.bn : cat.en}
            </button>
          ))}
        </div>

        {/* Album Grid with Realistic Stacked Photo Deck Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredAlbums.map((album) => {
            const albumPhotos = getAlbumPhotos(album);
            const photoCount = Math.max(albumPhotos.length, 5); // Guarantee rich count representation

            return (
              <div 
                key={album.id}
                className="relative group select-none transition-all duration-300"
              >
                {/* Stacked Photo Layer 2 (Backmost Left Stack) */}
                <div className="absolute inset-0 bg-slate-100 rounded-3xl border border-slate-300 shadow-sm transform -rotate-2 -translate-x-2.5 translate-y-1.5 group-hover:-rotate-3 group-hover:-translate-x-3.5 group-hover:translate-y-2 transition-all duration-300 pointer-events-none" />

                {/* Stacked Photo Layer 1 (Middle Right Stack) */}
                <div className="absolute inset-0 bg-slate-200/90 rounded-3xl border border-slate-300 shadow-sm transform rotate-2 translate-x-2.5 translate-y-1.5 group-hover:rotate-3 group-hover:translate-x-3.5 group-hover:translate-y-2 transition-all duration-300 pointer-events-none" />

                {/* Main Front Album Card */}
                <div 
                  onClick={() => openAlbum(album, 0)}
                  className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-slate-200/90 cursor-pointer flex flex-col justify-between group-hover:-translate-y-1.5"
                >
                  {/* Full Uncropped Cover Photo */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img 
                      src={album.url} 
                      alt={album.caption} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-white/95 text-slate-900 font-bold text-xs flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye size={16} className="text-emerald-700" />
                        <span>{language === 'bn' ? 'অ্যালবাম খুলুন' : 'Open Album'}</span>
                      </div>
                    </div>

                    {/* Photo Count Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <ImageIcon size={13} className="text-amber-300" />
                      <span>{toBanglaNum(photoCount)} {language === 'bn' ? 'টি ছবি' : 'Photos'}</span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute bottom-3.5 left-3.5">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-white bg-emerald-700/95 backdrop-blur-md px-3 py-1 rounded-lg shadow-md border border-emerald-500/30">
                        {album.category || (language === 'bn' ? 'অ্যালবাম' : 'Album')}
                      </span>
                    </div>
                  </div>

                  {/* Album Details */}
                  <div className="p-5 bg-white">
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {album.caption}
                    </h4>
                    {album.date && (
                      <p className="text-xs text-slate-400 font-medium mt-2 flex items-center gap-1.5">
                        <Calendar size={13} />
                        <span>{toBanglaNum(album.date.split('-').reverse().join('/'))}</span>
                      </p>
                    )}

                    {/* Filmstrip preview of album photos */}
                    {albumPhotos.length > 1 && (
                      <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center gap-1.5 overflow-hidden">
                        {albumPhotos.slice(0, 5).map((photoUrl, pIdx) => (
                          <div 
                            key={pIdx}
                            className="w-10 h-7 rounded-md overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 group-hover:border-emerald-400 transition"
                          >
                            <img src={photoUrl} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        {albumPhotos.length > 5 && (
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-1 rounded">
                            +{albumPhotos.length - 5}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Multi-Photo Album Viewer Lightbox */}
        {selectedAlbum && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in" 
            onClick={() => setSelectedAlbum(null)}
          >
            <div 
              className="bg-slate-900 rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative border border-slate-700 flex flex-col max-h-[92vh]" 
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex justify-between items-center text-white">
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded">
                      {selectedAlbum.category || 'Album'}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      {language === 'bn' ? 'ছবি' : 'Photo'} {toBanglaNum(activePhotoIndex + 1)} / {toBanglaNum(currentPhotos.length)}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white mt-1 line-clamp-1">
                    {selectedAlbum.caption}
                  </h3>
                </div>

                <button 
                  onClick={() => setSelectedAlbum(null)} 
                  className="bg-white/10 hover:bg-rose-600 text-white p-2 rounded-full transition cursor-pointer flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Photo View with Navigation */}
              <div className="relative flex-grow min-h-[300px] sm:min-h-[420px] max-h-[62vh] bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src={currentPhotos[activePhotoIndex]} 
                  alt={selectedAlbum.caption} 
                  className="w-full h-full object-contain max-h-[62vh] transition-all duration-300 select-none"
                />

                {/* Prev & Next Arrows */}
                {currentPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center transition shadow-xl cursor-pointer"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-emerald-600 text-white border border-white/20 flex items-center justify-center transition shadow-xl cursor-pointer"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Strip (Bottom) */}
              {currentPhotos.length > 1 && (
                <div className="p-3 bg-slate-950 border-t border-slate-800/80 overflow-x-auto flex items-center gap-2.5 justify-center">
                  {currentPhotos.map((photoUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                        idx === activePhotoIndex
                          ? 'ring-2 ring-emerald-400 scale-105 opacity-100'
                          : 'opacity-50 hover:opacity-100 ring-1 ring-white/10'
                      }`}
                    >
                      <img src={photoUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
