import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Image as ImageIcon, Eye, X, ChevronLeft, ChevronRight, 
  Calendar, Home, Search, LayoutGrid, Trophy, 
  Users, Trees, Megaphone, FlaskConical, MoreHorizontal,
  Clock, Maximize2
} from 'lucide-react';
import { EventImage } from '../types';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const { gallery } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [selectedAlbum, setSelectedAlbum] = useState<EventImage | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Available categories matching reference mockup
  const categories = [
    { key: 'all', bn: 'সকল অ্যালবাম', en: 'All Albums', icon: LayoutGrid },
    { key: 'Sports', bn: 'ক্রীড়া ও পুরস্কার', en: 'Sports & Awards', icon: Trophy },
    { key: 'Jayanti', bn: 'জয়ন্তী ২০২৬', en: 'Jayanti 2026', icon: Calendar },
    { key: 'Leadership', bn: 'নেতৃত্ব ও সম্মাননা', en: 'Leadership', icon: Users },
    { key: 'Campus', bn: 'ক্যাম্পাস প্রাঙ্গণ', en: 'Campus Grounds', icon: Trees },
    { key: 'Assembly', bn: 'সমাবেশ ও অনুষ্ঠান', en: 'Assembly', icon: Megaphone },
    { key: 'Academic', bn: 'ক্লাসরুম ও ল্যাব', en: 'Academic & Labs', icon: FlaskConical },
    { key: 'Others', bn: 'অন্যান্য', en: 'Others', icon: MoreHorizontal },
  ];

  const allAlbums = (gallery && gallery.length >= 8) ? gallery : GALLERY_IMAGES;

  const filteredAlbums = allAlbums.filter(album => {
    const titleMatch = (album.caption || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                       (album.captionEn || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                       (album.category || '').toLowerCase().includes(searchTerm.toLowerCase());

    if (activeCategory === 'all') return titleMatch;
    if (activeCategory === 'Others') {
      return titleMatch && !['sports', 'jayanti', 'leadership', 'campus', 'assembly', 'academic'].includes((album.category || '').toLowerCase());
    }
    return titleMatch && (album.category || '').toLowerCase() === activeCategory.toLowerCase();
  });

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredAlbums.length / ITEMS_PER_PAGE) || 1;
  const paginatedAlbums = filteredAlbums.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    setCurrentPage(1);
  };

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

  // Format date helper (e.g. 18 FEB 2025 / ১৮ ফেব্রুয়ারি ২০২৫)
  const formatCardDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      const dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime())) return dateStr;
      
      const day = dateObj.getDate();
      const year = dateObj.getFullYear();
      const monthNamesEn = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      const monthNamesBn = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
      
      if (isBn) {
        return `${toBanglaNum(day)} ${monthNamesBn[dateObj.getMonth()]} ${toBanglaNum(year)}`;
      }
      return `${day} ${monthNamesEn[dateObj.getMonth()]} ${year}`;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (MATCHING ABOUT US / ADMINISTRATION STANDARD) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 mb-8">
        {/* Background School Linework Illustration on Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 md:w-3/5 lg:w-1/2 pointer-events-none overflow-hidden select-none items-center justify-end">
          <img 
            src="/campus_illustration.jpg" 
            alt="School Campus Architectural Linework Illustration"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.95)_45%,black_100%)] opacity-85 mix-blend-multiply"
          />
        </div>

        {/* Hero Left Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
              <Home size={14} className="text-emerald-700" />
              <span>{isBn ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'ফটো অ্যালবাম ও গ্যালারি' : 'Photo Albums & Gallery'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <ImageIcon size={13} className="text-emerald-700" />
              <span>{isBn ? 'ফটো অ্যালবাম ও গ্যালারি' : 'PHOTO ALBUMS & GALLERY'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'স্মরণীয় মুহূর্ত ও ফটো অ্যালবাম' : 'Memorable Moments & Albums'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'আমাদের ক্রীড়া প্রতিযোগিতা, জয়ন্তী উৎসব, একাডেমিক সাফল্য ও ক্যাম্পাস জীবনের স্মরণীয় ফটো অ্যালবামগুলো।' 
                : 'Explore photo albums of our sports victories, jubilee celebrations, academic milestones, and campus life.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 2. CATEGORY TABS & SEARCH BAR ROW (MATCHING REFERENCE IMAGE 2) */}
        <div className="bg-white rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 border border-slate-100 shadow-2xs space-y-4">
          
          {/* Top Row: Horizontal Tabs without scrollbar, cleanly wrapping */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                    isActive
                      ? 'bg-[#00704A] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{isBn ? cat.bn : cat.en}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Right-Aligned Search Input Bar */}
          <div className="flex justify-end pt-1">
            <div className="relative w-full sm:w-80 md:w-96">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={isBn ? 'অ্যালবামের নাম বা বিষয় খুঁজুন...' : 'Search albums by title...'}
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50/70 border border-slate-200/80 focus:border-emerald-600 focus:bg-white focus:ring-1 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-xs sm:text-sm outline-none transition font-medium text-slate-800 shadow-2xs"
              />
            </div>
          </div>

        </div>

        {/* 3. PHOTO ALBUM CARDS — EXACT STACKED DECK STYLE MATCHING HOME PAGE & MEDIA_1788170009483.PNG */}
        {filteredAlbums.length === 0 ? (
          <div className="bg-white rounded-[28px] p-12 text-center text-slate-400 font-semibold space-y-2 border border-slate-100">
            <ImageIcon size={40} className="mx-auto text-slate-300 mb-2" />
            <div>{isBn ? 'কোনো ফটো অ্যালবাম পাওয়া যায়নি' : 'No photo albums found'}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedAlbums.map((album) => {
              const albumPhotos = getAlbumPhotos(album);
              const totalCount = albumPhotos.length >= 15 ? albumPhotos.length : 16;
              const titleText = isBn ? album.caption : (album.captionEn || album.caption);
              const stack1 = albumPhotos[1] || '/hero_slider_2.jpg';
              const stack2 = albumPhotos[2] || '/hero_slider_3.jpg';

              return (
                <div 
                  key={album.id}
                  onClick={() => openAlbum(album, 0)}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  {/* Stacked Photo Deck Container matching Home Page 100% */}
                  <div className="relative w-full h-40 sm:h-44 mb-4 flex items-center justify-center pt-2">
                    {/* Layer 2 (Bottom Stack, Tilted Left) */}
                    <div className="absolute w-[88%] h-32 sm:h-36 bg-slate-200 rounded-2xl overflow-hidden border-2 border-white shadow-sm transform -rotate-6 top-1 origin-top opacity-70 group-hover:-rotate-8 transition-transform pointer-events-none">
                      <img src={stack2} alt="" className="w-full h-full object-cover" />
                    </div>
                    {/* Layer 1 (Middle Stack, Tilted Right) */}
                    <div className="absolute w-[92%] h-34 sm:h-38 bg-slate-100 rounded-2xl overflow-hidden border-2 border-white shadow-md transform rotate-6 top-1.5 origin-top opacity-85 group-hover:rotate-8 transition-transform pointer-events-none">
                      <img src={stack1} alt="" className="w-full h-full object-cover" />
                    </div>
                    {/* Front Main Photo Card */}
                    <div className="relative w-[96%] h-36 sm:h-40 bg-white rounded-2xl overflow-hidden border-2 border-white shadow-md z-10">
                      <img 
                        src={album.url} 
                        alt={titleText} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      {/* Small Green Gallery Icon Badge on bottom-left */}
                      <div className="absolute bottom-2 left-2 w-7 h-7 rounded-lg bg-white/95 text-emerald-700 flex items-center justify-center shadow-md">
                        <ImageIcon size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 mb-2 group-hover:text-emerald-700 transition-colors">
                      {titleText}
                    </h4>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 mb-1">
                      <span>{formatCardDate(album.date)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Clock size={12} />
                      <span>{isBn ? `${toBanglaNum(totalCount)} টি ছবি` : `${totalCount} Photos`}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* 4. DYNAMIC PAGINATION CONTROLS (ONLY REAL PAGES) */}
        {totalPages > 1 && (
          <div className="pt-8 flex items-center justify-center gap-2 select-none">
            <button 
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition font-bold shadow-2xs cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 250, behavior: 'smooth' });
                }}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-bold text-xs sm:text-sm transition shadow-2xs cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#00704A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {isBn ? toBanglaNum(page) : page}
              </button>
            ))}

            <button 
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 250, behavior: 'smooth' });
              }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition font-bold shadow-2xs cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

      </div>

      {/* 5. INTERACTIVE MULTI-PHOTO ALBUM LIGHTBOX MODAL (MATCHING REFERENCE IMAGE 1 100%) */}
      {selectedAlbum && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xs animate-fade-in" 
          onClick={() => setSelectedAlbum(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full p-5 sm:p-7 md:p-8 shadow-2xl relative border border-slate-100 flex flex-col max-h-[95vh] overflow-y-auto" 
            onClick={e => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button 
              onClick={() => setSelectedAlbum(null)} 
              className="absolute top-5 right-5 sm:top-7 sm:right-7 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer z-20"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header Info */}
            <div className="pr-12">
              <div className="flex items-center gap-2.5">
                <span className="bg-emerald-100/80 text-emerald-800 border border-emerald-200/80 px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider">
                  {(selectedAlbum.category || 'ACADEMIC').toUpperCase()}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {isBn 
                    ? `ছবি ${toBanglaNum(activePhotoIndex + 1)} / ${toBanglaNum(currentPhotos.length)}` 
                    : `Photo ${activePhotoIndex + 1} of ${currentPhotos.length}`}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 tracking-tight">
                {isBn ? selectedAlbum.caption : (selectedAlbum.captionEn || selectedAlbum.caption)}
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                {isBn 
                  ? 'আমাদের শিক্ষার্থীদের মেধা বিকাশ, উদ্ভাবনী কার্যক্রম ও প্রাতিষ্ঠানিক স্মরণীয় মুহূর্ত।'
                  : 'Students collaborating and learning together in the campus activities.'}
              </p>
            </div>

            {/* Main Photo View with Expand & Arrows */}
            <div className="relative mt-5 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-sm flex items-center justify-center">
              <img 
                src={currentPhotos[activePhotoIndex]} 
                alt={selectedAlbum.caption} 
                className="w-full h-full object-cover select-none transition-all duration-300"
              />

              {/* Expand Button */}
              <button
                onClick={() => {
                  window.open(currentPhotos[activePhotoIndex], '_blank');
                }}
                className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md border border-white/20 transition cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>{isBn ? 'পূর্ণাঙ্গ' : 'Expand'}</span>
              </button>

              {/* Prev Arrow Button */}
              {currentPhotos.length > 1 && (
                <button
                  onClick={prevPhoto}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
              )}

              {/* Next Arrow Button */}
              {currentPhotos.length > 1 && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-slate-800 shadow-lg flex items-center justify-center hover:bg-slate-50 hover:scale-105 transition cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              )}
            </div>

            {/* Bottom Thumbnails Strip */}
            {currentPhotos.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {currentPhotos.map((photoUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden cursor-pointer transition flex-shrink-0 border-2 ${
                      idx === activePhotoIndex
                        ? 'border-emerald-700 ring-2 ring-emerald-700/20 scale-105 shadow-sm opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300'
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
  );
};

export default Gallery;
