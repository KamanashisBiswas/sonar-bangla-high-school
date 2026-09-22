import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Music,
  Palette,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Theater,
  Calendar,
  Image as ImageIcon,
  Mic2,
  BookOpen,
  Award,
  Users
} from 'lucide-react';

export const CulturalActivities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const highlights = [
    { value: '10+ Events', label: 'Annual Celebrations', desc: 'National days, cultural weeks, and seasonal festivals' },
    { value: '500+ Seats', label: 'Auditorium Capacity', desc: 'Acoustically treated assembly and performance hall' },
    { value: '4 Arts Wings', label: 'Creative Ensembles', desc: 'Music, dance, recitation, and fine arts' },
    { value: '25+ Trophies', label: 'District Honors', desc: 'Accolades in inter-school debate & arts competitions' }
  ];

  const programs = [
    {
      id: 'national',
      name: 'National Observances & Heritage',
      tag: 'Patriotism & History',
      badge: 'Heritage',
      category: 'observance',
      image: '/gallery/album_assembly.jpg',
      description: 'Instilling profound respect for the national struggle, liberation history, and sacrifices that built sovereign Bangladesh.',
      events: [
        'International Mother Language Day & Shaheed Dibash (21 February) with Probhat Feri',
        'Independence & National Day (26 March) with commemorative cultural tribute',
        'Victory Day (16 December) with patriotic choral recitals and drama performances',
        'National Mourning Day (15 August) with discussion and poetry recitations'
      ]
    },
    {
      id: 'boishakh',
      name: 'Pohela Boishakh & Folk Festivals',
      tag: 'Bengali Tradition',
      badge: 'New Year',
      category: 'festival',
      image: '/programs/program_cultural.png',
      description: 'The premier celebration of timeless Bengali culture on campus with vibrant colors, traditional folk songs, and joyful togetherness.',
      events: [
        'Colorful Mangal Shobhajatra parade around campus premises',
        'Traditional Baul, Bhatiali, and folk melodies performed by students',
        'Traditional Bengali sweet and pitha distribution stalls',
        'Handicraft and ethnic mask displays created by junior artists'
      ]
    },
    {
      id: 'music-dance',
      name: 'Music, Dance & Drama Ensemble',
      tag: 'Performing Arts',
      badge: 'Performance',
      category: 'performing',
      image: '/gallery/album_fair.jpg',
      description: 'Cultivating stage presence, vocal training, rhythmic dance mastery, and theatrical acting under guidance of specialized art instructors.',
      events: [
        'Rabindra Sangeet, Nazrul Geeti, and modern patriotic song choir',
        'Classical, folk, and contemporary Bengali creative dance choreography',
        'Annual theatrical drama productions addressing ethical and social values',
        'Weekly instrumental training: Harmonium, Tabla, and Guitar basics'
      ]
    },
    {
      id: 'arts-magazines',
      name: 'Fine Arts & Wall Magazine (Dewalika)',
      tag: 'Visual & Literary',
      badge: 'Creative Writing',
      category: 'arts',
      image: '/gallery/card_fair.jpg',
      description: 'Encouraging young painters, sketch artists, poets, and prose writers to express their perspectives on community, nature, and human values.',
      events: [
        'Quarterly wall magazine ("Dewalika") publication by each class section',
        'Annual Art & Painting Competition with expert jury evaluations',
        'Poster and calligraphy exhibitions during national cultural observances',
        'Creative writing circles and school literary annual souvenir'
      ]
    },
    {
      id: 'debate',
      name: 'Debate & Public Speaking',
      tag: 'Oratory & Logic',
      badge: 'Critical Thinking',
      category: 'literary',
      image: '/gallery/album_library.jpg',
      description: 'Sharpening logical clarity, persuasive rhetoric, and research skills through structured parliamentary debates in Bangla and English.',
      events: [
        'Bangla and English Parliamentary style inter-house debate leagues',
        'Extempore speech contests and declamation competitions',
        'Workshops on counter-argument construction and rebuttal strategies',
        'Participation in National Children Television Debate tournaments'
      ]
    }
  ];

  const venues = [
    {
      title: 'School Auditorium',
      desc: '500-seat multipurpose theater with professional acoustic panels, stage lighting, and sound console.',
      icon: <Theater className="w-6 h-6 text-[#059669]" />
    },
    {
      title: 'Open Amphitheater',
      desc: 'Spacious central pavilion for daily morning assemblies, cultural fairs, and open-air folk performances.',
      icon: <Users className="w-6 h-6 text-[#059669]" />
    },
    {
      title: 'Music & Art Studios',
      desc: 'Dedicated soundproofed practice rooms with musical instruments and fine arts easels.',
      icon: <Palette className="w-6 h-6 text-[#059669]" />
    },
    {
      title: 'Seminar & Debate Hall',
      desc: 'Equipped with podium, projection screen, and round-table microphone layout for debate contests.',
      icon: <Mic2 className="w-6 h-6 text-[#059669]" />
    }
  ];

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden text-slate-800">
      {/* 1. Standard Hero Section */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-48 h-80 opacity-[0.07] pointer-events-none text-emerald-700">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
              <path d="M30 170 C10 120 20 60 70 20 C75 60 70 120 30 170 Z" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700">
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500">Our Programs</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Cultural Activities</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Sparkles size={14} />
              <span>HERITAGE, ARTS & EXPRESSION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Cultural <br />
              Activities
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Nurturing artistic talents, patriotic values, creative expressions, and proud celebrations of Bengali national heritage{' '}
              <strong className="text-emerald-800 font-bold">since 1987.</strong>
            </p>
          </div>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <p className="text-xs text-slate-700 font-medium italic leading-relaxed">
                  Culture is the widening of the mind and of the spirit. Creativity is intelligence having fun.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">Cultural Committee</span>
                  <span className="text-[10px] text-emerald-700 font-bold">Arts & Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Co-Curricular & Programs Switcher Pill Navigation Bar */}
      <div className="bg-[#f0faf5] border-b border-emerald-100/60 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline-block">
              Programs:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/academic-programs"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
                <span>Academic Programs</span>
              </Link>
              <Link
                to="/sports-athletics"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
                <span>Sports & Athletics</span>
              </Link>
              <Link
                to="/cultural-activities"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <Sparkles size={14} />
                <span>Cultural Activities</span>
              </Link>
              <Link
                to="/clubs-societies"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
                <span>Clubs & Societies</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Stat Highlights Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition text-center"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#004d34] tracking-tight block">
                {item.value}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                {item.label}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Programs Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              STAGE, MUSIC & FINE ARTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Creative Wings & Festivals
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Providing dynamic platforms for every child to explore and showcase their artistic potential.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'observance', label: 'National Days' },
              { id: 'festival', label: 'Festivals' },
              { id: 'performing', label: 'Music & Drama' },
              { id: 'arts', label: 'Fine Arts' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#004d34] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {prog.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#e8f7ee] text-[#059669] px-2 py-0.5 rounded-md">
                    {prog.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004d34] transition-colors">
                  {prog.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {prog.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Featured Activities:
                  </h4>
                  {prog.events.map((evt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{evt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Cultural Venues on Campus */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#f0faf5] border border-emerald-100/80 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              CREATIVE SPACES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Venues Dedicated to Arts & Performance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Purpose-built campus facilities providing stage confidence, rehearsal space, and visual exhibitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e8f7ee] border border-emerald-100 flex items-center justify-center mb-4">
                  {venue.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {venue.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {venue.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Signature Event Banner: Annual Cultural Week */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-[#004d34] to-emerald-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Music size={14} className="text-emerald-300" />
                <span>SIGNATURE FESTIVAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Annual Cultural Week & Prize Ceremony
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                A week-long celebration where students compete in recitation, vocal music, folk dance, extempore speech, quran recitation, storytelling, and one-act plays under the guidance of renowned cultural personalities.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">15+ Art Categories</span>
                  <p className="text-[11px] text-emerald-200">Across junior, senior, and open student sections</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">Grand Gala & Awards</span>
                  <p className="text-[11px] text-emerald-200">Prestigious school crests and certificates conferred</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20">
                <img
                  src="/gallery/album_fair.jpg"
                  alt="Annual Cultural Week"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Action CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Explore our cultural albums and memories
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Browse photo moments from our Pohela Boishakh rallies, national day ceremonies, and annual drama productions in the school gallery.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/gallery"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon size={14} />
              <span>Cultural Gallery</span>
            </Link>
            <Link
              to="/notices"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>Event Notices</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>Contact Cultural Office</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
