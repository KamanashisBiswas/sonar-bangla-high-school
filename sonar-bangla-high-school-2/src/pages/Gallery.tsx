import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Image as ImageIcon, Maximize2, X, Sparkles, Filter } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Events' | 'Academic';
  url: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: '1',
      title: 'Main Academic Building & Landscaped Front Courtyard',
      category: 'Campus',
      url: '/campus_main.png',
      caption: 'The serene and green campus architecture of SOS Hermann Gmeiner School Khulna.',
    },
    {
      id: '2',
      title: 'Annual Inter-House Football Championship 2025',
      category: 'Sports',
      url: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&fit=crop&q=80',
      caption: 'Students competing in the vibrant annual football finals on the main sports ground.',
    },
    {
      id: '3',
      title: 'National Mourning Day & Cultural Recitation Program',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&fit=crop&q=80',
      caption: 'Students presenting poetic recitations and patriotic songs during institutional observance.',
    },
    {
      id: '4',
      title: 'Senior Physics & Chemistry Practical Laboratory Session',
      category: 'Academic',
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&fit=crop&q=80',
      caption: 'Hands-on scientific investigations guided by specialized faculty in our state-of-the-art lab.',
    },
    {
      id: '5',
      title: 'Central Library Reading Hall & Research Desk',
      category: 'Academic',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&fit=crop&q=80',
      caption: 'Silent study and reading session with access to 10,000+ volumes and periodicals.',
    },
    {
      id: '6',
      title: 'Annual Merit & Board Examination Toppers Award Ceremony',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop&q=80',
      caption: 'Celebrating the exceptional academic accomplishments of our graduating batches.',
    },
    {
      id: '7',
      title: 'Modern High-Tech ICT Computer Laboratory',
      category: 'Academic',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&fit=crop&q=80',
      caption: 'Interactive digital classroom equipped with multimedia workstations and broadband access.',
    },
    {
      id: '8',
      title: 'Annual Sports Track & Field Sprint Events',
      category: 'Sports',
      url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&fit=crop&q=80',
      caption: 'Track athletes showing energy, agility, and sportsmanship on sports day.',
    },
    {
      id: '9',
      title: 'Creative Art & Children Painting Exhibition',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&fit=crop&q=80',
      caption: 'Young painters displaying colorful creativity under the theme of green homeland.',
    },
  ];

  const categories = ['All', 'Campus', 'Academic', 'Sports', 'Events'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Gallery"
        badge="CAMPUS MOMENTS & MEMORIES"
        badgeIcon={<ImageIcon size={13} className="text-[#059669]" />}
        title="Photo Gallery & Campus Life"
        description="Explore vibrant moments, academic achievements, sports competitions, and cultural celebrations at SOS Khulna."
        features={[
          { icon: <Sparkles size={16} />, title: 'Vibrant', subtitle: 'Student Life' },
          { icon: <ImageIcon size={16} />, title: 'High-Res', subtitle: 'Photo Showcase' },
          { icon: <Filter size={16} />, title: 'Categorized', subtitle: 'Easy Navigation' },
        ]}
        buildingQuote={{
          text: 'Every picture captures a story of growth, friendship, and success.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#004d34] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/90 text-[#004d34] rounded-full shadow-lg">
                    <Maximize2 size={20} />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-white/90 text-[#004d34] backdrop-blur-xs shadow-xs">
                    {photo.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#004d34] transition-colors leading-snug">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 mt-3 block">
                  Click to enlarge →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 text-white flex items-center justify-center hover:bg-slate-900 transition"
            >
              <X size={18} />
            </button>
            <div className="max-h-[70vh] bg-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#004d34]">
                  {activePhoto.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{activePhoto.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
