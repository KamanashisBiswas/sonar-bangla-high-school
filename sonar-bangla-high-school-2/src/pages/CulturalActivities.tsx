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
  Users,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard
} from '../components/ui/MotionComponents';

export const CulturalActivities: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const highlights = [
    {
      value: isBn ? `${toBanglaNum(10)}+টি অনুষ্ঠান` : '10+ Events',
      label: isBn ? 'বার্ষিক উৎসব ও অনুষ্ঠান' : 'Annual Celebrations',
      desc: isBn ? 'জাতীয় দিবস, সাংস্কৃতিক সপ্তাহ ও ঋতুভিত্তিক উৎসব' : 'National days, cultural weeks, and seasonal festivals'
    },
    {
      value: isBn ? `${toBanglaNum(500)}+ আসন` : '500+ Seats',
      label: isBn ? 'মিলনায়তনের ধারণক্ষমতা' : 'Auditorium Capacity',
      desc: isBn ? 'শব্দনিয়ন্ত্রিত আধুনিক সমাবেশ ও মঞ্চায়ন হল' : 'Acoustically treated assembly and performance hall'
    },
    {
      value: isBn ? `${toBanglaNum(4)}টি শিল্পকলা শাখা` : '4 Arts Wings',
      label: isBn ? 'সৃজনশীল দল' : 'Creative Ensembles',
      desc: isBn ? 'সংগীত, নৃত্য, আবৃত্তি ও চারুকলা' : 'Music, dance, recitation, and fine arts'
    },
    {
      value: isBn ? `${toBanglaNum(25)}+ ট্রফি` : '25+ Trophies',
      label: isBn ? 'জেলা পর্যায়ের সম্মাননা' : 'District Honors',
      desc: isBn ? 'আন্তঃস্কুল বিতর্ক ও শিল্পকলা প্রতিযোগিতায় সাফল্য' : 'Accolades in inter-school debate & arts competitions'
    }
  ];

  const programs = [
    {
      id: 'national',
      name: isBn ? 'জাতীয় দিবস ও ঐতিহাসিক ঐতিহ্য' : 'National Observances & Heritage',
      tag: isBn ? 'দেশপ্রেম ও ইতিহাস' : 'Patriotism & History',
      badge: isBn ? 'ঐতিহ্য' : 'Heritage',
      category: 'observance',
      image: '/gallery/album_assembly.jpg',
      description: isBn
        ? 'সার্বভৌম বাংলাদেশ বিনির্মাণে জাতীয় সংগ্রাম, মুক্তিযুদ্ধের গৌরবোজ্জ্বল ইতিহাস ও বীর শহীদদের প্রতি গভীর শ্রদ্ধাবোধ জাগ্রত করা।'
        : 'Instilling profound respect for the national struggle, liberation history, and sacrifices that built sovereign Bangladesh.',
      events: isBn
        ? [
            'আন্তর্জাতিক মাতৃভাষা দিবস ও শহীদ দিবস (২১শে ফেব্রুয়ারি) প্রভাতফেরি সহ পালন',
            'স্বাধীনতা ও জাতীয় দিবস (২৬শে মার্চ) উপলক্ষে বিশেষ সাংস্কৃতিক শ্রদ্ধার্ঘ্য',
            'বিজয় দিবস (১৬ই ডিসেম্বর) সমবেত দেশাত্মবোধক গান ও নাট্যমঞ্চায়ন',
            'জাতীয় শোক দিবস (১৫ই আগস্ট) আলোচনা সভা ও কবিতা আবৃত্তি'
          ]
        : [
            'International Mother Language Day & Shaheed Dibash (21 February) with Probhat Feri',
            'Independence & National Day (26 March) with commemorative cultural tribute',
            'Victory Day (16 December) with patriotic choral recitals and drama performances',
            'National Mourning Day (15 August) with discussion and poetry recitations'
          ]
    },
    {
      id: 'boishakh',
      name: isBn ? 'পহেলা বৈশাখ ও লোকজ উৎসব' : 'Pohela Boishakh & Folk Festivals',
      tag: isBn ? 'বাঙালি ঐতিহ্য' : 'Bengali Tradition',
      badge: isBn ? 'নববর্ষ' : 'New Year',
      category: 'festival',
      image: '/programs/program_cultural.png',
      description: isBn
        ? 'উজ্জ্বল বর্ণচ্ছটা, ঐতিহ্যবাহী লোকসঙ্গীত ও প্রীতির বন্ধনে ক্যাম্পাসে আবহমান বাংলার সার্বজনীন উৎসব উদযাপন।'
        : 'The premier celebration of timeless Bengali culture on campus with vibrant colors, traditional folk songs, and joyful togetherness.',
      events: isBn
        ? [
            'ক্যাম্পাস প্রাঙ্গণে বর্ণাঢ্য মঙ্গল শোভাযাত্রা ও পদযাত্রা',
            'শিক্ষার্থীদের পরিবেশনায় বাউল, ভাটিয়ালি ও পল্লীগীতি পরিবেশনা',
            'ঐতিহ্যবাহী বাঙালি মিষ্টান্ন ও পিঠা উৎসবের আনন্দমেলা স্টল',
            'কনিষ্ঠ শিল্পীদের হাতে তৈরি মুখোশ ও লোকশিল্প প্রদর্শনী'
          ]
        : [
            'Colorful Mangal Shobhajatra parade around campus premises',
            'Traditional Baul, Bhatiali, and folk melodies performed by students',
            'Traditional Bengali sweet and pitha distribution stalls',
            'Handicraft and ethnic mask displays created by junior artists'
          ]
    },
    {
      id: 'music-dance',
      name: isBn ? 'সংগীত, নৃত্য ও নাট্যকলা দল' : 'Music, Dance & Drama Ensemble',
      tag: isBn ? 'মঞ্চ ও পরিবেশন শিল্প' : 'Performing Arts',
      badge: isBn ? 'মঞ্চায়ন' : 'Performance',
      category: 'performing',
      image: '/gallery/album_fair.jpg',
      description: isBn
        ? 'বিশেষজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে মঞ্চাভিনয়, কণ্ঠসংগীত সাধনা, ছন্দোবদ্ধ নৃত্য ও নাট্যদক্ষতার উৎকর্ষ সাধন।'
        : 'Cultivating stage presence, vocal training, rhythmic dance mastery, and theatrical acting under guidance of specialized art instructors.',
      events: isBn
        ? [
            'রবীন্দ্রসংগীত, নজরুলগীতি ও আধুনিক দেশাত্মবোধক সমবেত গান',
            'শাস্ত্রীয়, লোকনৃত্য ও সমকালীন সৃজনশীল নৃত্য পরিবেশনা',
            'নৈতিক ও মানবিক মূল্যবোধভিত্তিক বার্ষিক পূর্ণাঙ্গ নাটক মঞ্চায়ন',
            'সাপ্তাহিক বাদ্যযন্ত্র প্রশিক্ষণ: হারমোনিয়াম, তবলা ও গিটারের মৌলিক তালিম'
          ]
        : [
            'Rabindra Sangeet, Nazrul Geeti, and modern patriotic song choir',
            'Classical, folk, and contemporary Bengali creative dance choreography',
            'Annual theatrical drama productions addressing ethical and social values',
            'Weekly instrumental training: Harmonium, Tabla, and Guitar basics'
          ]
    },
    {
      id: 'arts-magazines',
      name: isBn ? 'চারুকলা ও দেয়ালিকা (দেয়াল পত্রিকা)' : 'Fine Arts & Wall Magazine (Dewalika)',
      tag: isBn ? 'দৃশ্য ও সাহিত্যকলা' : 'Visual & Literary',
      badge: isBn ? 'সৃজনশীল লেখনী' : 'Creative Writing',
      category: 'arts',
      image: '/gallery/card_fair.jpg',
      description: isBn
        ? 'তরুণ চিত্রশিল্পী, স্কেচ আর্টিস্ট, কবি ও গল্পকারদের সমাজ, প্রকৃতি ও মানবিক মূল্যবোধ নিয়ে ভাব প্রকাশের অনুপ্রেরণা।'
        : 'Encouraging young painters, sketch artists, poets, and prose writers to express their perspectives on community, nature, and human values.',
      events: isBn
        ? [
            'প্রতিটি শ্রেণিভিত্তিক ত্রৈমাসিক দেয়াল পত্রিকা ("দেয়ালিকা") প্রকাশনা',
            'বিশেষজ্ঞ বিচারকমণ্ডলীর মূল্যায়নে বার্ষিক চিত্রাঙ্কন প্রতিযোগিতা',
            'জাতীয় দিবসগুলোতে ক্যালিগ্রাফি ও পোস্টার প্রদর্শনী',
            'সৃজনশীল লেখনী বৃত্ত ও স্কুলের বার্ষিক সাহিত্য স্মারক সংকলন'
          ]
        : [
            'Quarterly wall magazine ("Dewalika") publication by each class section',
            'Annual Art & Painting Competition with expert jury evaluations',
            'Poster and calligraphy exhibitions during national cultural observances',
            'Creative writing circles and school literary annual souvenir'
          ]
    },
    {
      id: 'debate',
      name: isBn ? 'বিতর্ক ও উপস্থিত বক্তৃতা' : 'Debate & Public Speaking',
      tag: isBn ? 'বাগ্মিতা ও যুক্তি' : 'Oratory & Logic',
      badge: isBn ? 'চিন্তাশীলতা' : 'Critical Thinking',
      category: 'literary',
      image: '/gallery/album_library.jpg',
      description: isBn
        ? 'বাংলা ও ইংরেজি ভাষায় সুসংগঠিত সংসদীয় বিতর্কের মাধ্যমে যুক্তিবাদী চিন্তা, বাগ্মিতা ও গবেষণা দক্ষতা শাণিত করা।'
        : 'Sharpening logical clarity, persuasive rhetoric, and research skills through structured parliamentary debates in Bangla and English.',
      events: isBn
        ? [
            'বাংলা ও ইংরেজি ভাষায় সংসদীয় ধারার আন্তঃহাউস বিতর্ক লিগ',
            'উপস্থিত বক্তৃতা ও নির্ধারিত বক্তৃতা প্রতিযোগিতা',
            'যুক্তি গঠন, তথ্য যাচাই ও খণ্ডন কৌশলের ওপর বিশেষ কর্মশালা',
            'জাতীয় টেলিভিশন স্কুল বিতর্ক প্রতিযোগিতায় নিয়মিত অংশগ্রহণ'
          ]
        : [
            'Bangla and English Parliamentary style inter-house debate leagues',
            'Extempore speech contests and declamation competitions',
            'Workshops on counter-argument construction and rebuttal strategies',
            'Participation in National Children Television Debate tournaments'
          ]
    }
  ];

  const venues = [
    {
      title: isBn ? 'স্কুল মিলনায়তন (অডিটোরিয়াম)' : 'School Auditorium',
      desc: isBn
        ? 'পেশাদার অ্যাকোস্টিক প্যানেল, স্টেজ লাইটিং ও আধুনিক সাউন্ড কনসোল সমৃদ্ধ ৫০০ আসনের থিয়েটার হল।'
        : '500-seat multipurpose theater with professional acoustic panels, stage lighting, and sound console.',
      icon: <Theater className="w-6 h-6 text-[#059669]" />
    },
    {
      title: isBn ? 'মুক্তমঞ্চ ও অ্যাম্পিথিয়েটার' : 'Open Amphitheater',
      desc: isBn
        ? 'দৈনিক প্রাতঃকালীন সমাবেশ, সাংস্কৃতিক মেলা ও উন্মুক্ত লোকজ পরিবেশনার জন্য উন্মুক্ত চত্বর।'
        : 'Spacious central pavilion for daily morning assemblies, cultural fairs, and open-air folk performances.',
      icon: <Users className="w-6 h-6 text-[#059669]" />
    },
    {
      title: isBn ? 'সংগীত ও চারুকলা স্টুডিও' : 'Music & Art Studios',
      desc: isBn
        ? 'বাদ্যযন্ত্র ও চারুকলা অঙ্কন সরঞ্জাম সমৃদ্ধ নিবিড় অনুশীলনের সুপরিসর স্টুডিও কক্ষ।'
        : 'Dedicated soundproofed practice rooms with musical instruments and fine arts easels.',
      icon: <Palette className="w-6 h-6 text-[#059669]" />
    },
    {
      title: isBn ? 'সেমিনার ও বিতর্ক কক্ষ' : 'Seminar & Debate Hall',
      desc: isBn
        ? 'পোডিয়াম, প্রজেকশন স্ক্রিন ও রাউন্ড-টেবিল মাইক্রোফোন সমৃদ্ধ আধুনিক বিতর্ক কক্ষ।'
        : 'Equipped with podium, projection screen, and round-table microphone layout for debate contests.',
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
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500">{isBn ? 'আমাদের কার্যক্রম' : 'Our Programs'}</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{isBn ? 'সাংস্কৃতিক কার্যক্রম' : 'Cultural Activities'}</span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25}>
            <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
              <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                <Sparkles size={14} />
                <span>{isBn ? 'ঐতিহ্য, শিল্পকলা ও নান্দনিকতা' : 'HERITAGE, ARTS & EXPRESSION'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
                {isBn ? (
                  <>সাংস্কৃতিক <br />কার্যক্রম</>
                ) : (
                  <>Cultural <br />Activities</>
                )}
              </h1>

              <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

              <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
                {isBn ? (
                  <>
                    কলা ও নান্দনিকতা, দেশপ্রেম, সৃজনশীল প্রকাশ এবং বাঙালি ঐতিহ্যের লালন করা হচ্ছে{' '}
                    <strong className="text-emerald-800 font-bold">{toBanglaNum(1987)} থেকে।</strong>
                  </>
                ) : (
                  <>
                    Nurturing artistic talents, patriotic values, creative expressions, and proud celebrations of Bengali national heritage{' '}
                    <strong className="text-emerald-800 font-bold">since 1987.</strong>
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16 max-w-[340px]">
            <ScrollScale delay={0.2}>
              <div className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90">
                <div className="flex items-start gap-3">
                  <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                    “
                  </span>
                  <div>
                    <p className="text-xs text-slate-700 font-medium italic leading-relaxed">
                      {isBn
                        ? 'সংস্কৃতি হলো মনন ও আত্মার বিকাশ। আর সৃজনশীলতা হলো বুদ্ধিমত্তার আনন্দময় প্রকাশ।'
                        : 'Culture is the widening of the mind and of the spirit. Creativity is intelligence having fun.'}
                    </p>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-900">{isBn ? 'সাংস্কৃতিক কমিটি' : 'Cultural Committee'}</span>
                      <span className="text-[10px] text-emerald-700 font-bold">{isBn ? 'শিল্প ও ঐতিহ্য' : 'Arts & Heritage'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollScale>
          </div>
        </div>
      </div>

      {/* 2. Co-Curricular & Programs Switcher Pill Navigation Bar */}
      <div className="bg-[#f0faf5] border-b border-emerald-100/60 sticky top-[72px] z-30 shadow-2xs backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <ScrollReveal duration={0.5} distance={15}>
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline-block">
                {isBn ? 'কার্যক্রম:' : 'Programs:'}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/academic-programs"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'একাডেমিক কার্যক্রম' : 'Academic Programs'}</span>
                </Link>
                <Link
                  to="/sports-athletics"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'খেলাধুলা ও শরীরচর্চা' : 'Sports & Athletics'}</span>
                </Link>
                <Link
                  to="/cultural-activities"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
                >
                  <Sparkles size={14} />
                  <span>{isBn ? 'সাংস্কৃতিক কার্যক্রম' : 'Cultural Activities'}</span>
                </Link>
                <Link
                  to="/clubs-societies"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
                >
                  <span>{isBn ? 'ক্লাব ও সোসাইটি' : 'Clubs & Societies'}</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. Stat Highlights Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <ScrollStaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => (
            <ScrollStaggerItem key={idx}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition text-center h-full">
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
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 4. Programs Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.6} distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
                {isBn ? 'মঞ্চ, সংগীত ও চারুকলা' : 'STAGE, MUSIC & FINE ARTS'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {isBn ? 'সৃজনশীল শাখা ও উৎসবসমূহ' : 'Creative Wings & Festivals'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {isBn
                  ? 'প্রতিটি শিশুর অন্তর্নিহিত সুকুমার বৃত্তি ও প্রতিভার স্ফুরণ ঘটাতে প্রস্তুতকৃত উন্মুক্ত ক্ষেত্র।'
                  : 'Providing dynamic platforms for every child to explore and showcase their artistic potential.'}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
              {[
                { id: 'all', label: isBn ? 'সকল কার্যক্রম' : 'All Programs' },
                { id: 'observance', label: isBn ? 'জাতীয় দিবস' : 'National Days' },
                { id: 'festival', label: isBn ? 'উৎসব ও মেলা' : 'Festivals' },
                { id: 'performing', label: isBn ? 'সংগীত ও নাটক' : 'Music & Drama' },
                { id: 'arts', label: isBn ? 'চারুকলা ও বিতর্ক' : 'Fine Arts' }
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
        </ScrollReveal>

        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredPrograms.map((prog) => (
            <ScrollStaggerItem key={prog.id}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
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
                        {isBn ? 'উল্লেখযোগ্য কার্যক্রমসমূহ:' : 'Featured Activities:'}
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
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 5. Cultural Venues on Campus */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-[#f0faf5] border border-emerald-100/80 rounded-3xl p-8 sm:p-10 lg:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
                {isBn ? 'সৃজনশীল চত্বর' : 'CREATIVE SPACES'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {isBn ? 'শিল্পকলা ও নাট্যচর্চায় নিবেদিত মঞ্চসমূহ' : 'Venues Dedicated to Arts & Performance'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {isBn
                  ? 'মঞ্চের আত্মবিশ্বাস অর্জন, নিয়মিত মহড়া ও প্রদর্শনী আয়োজনের জন্য সুনির্মিত আধুনিক সুবিধা।'
                  : 'Purpose-built campus facilities providing stage confidence, rehearsal space, and visual exhibitions.'}
              </p>
            </div>

            <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {venues.map((venue, idx) => (
                <ScrollStaggerItem key={idx}>
                  <HoverCard className="h-full">
                    <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs hover:shadow-lg transition-all h-full">
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
                  </HoverCard>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </div>
        </ScrollReveal>
      </div>

      {/* 6. Signature Event Banner: Annual Cultural Week */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-gradient-to-br from-[#004d34] to-emerald-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Music size={14} className="text-emerald-300" />
                  <span>{isBn ? 'সিগনেচার উৎসব' : 'SIGNATURE FESTIVAL'}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                  {isBn ? 'বার্ষিক সাংস্কৃতিক সপ্তাহ ও পুরস্কার বিতরণী' : 'Annual Cultural Week & Prize Ceremony'}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                  {isBn
                    ? 'সপ্তাহব্যাপী জমকালো উৎসব যেখানে বিশিষ্ট সাংস্কৃতিক ব্যক্তিত্বদের উপস্থিতিতে আবৃত্তি, সংগীত, লোকনৃত্য, উপস্থিত বক্তৃতা, কেরাত ও একাঙ্কিক নাটকে শিক্ষার্থীরা অংশ নেয়।'
                    : 'A week-long celebration where students compete in recitation, vocal music, folk dance, extempore speech, quran recitation, storytelling, and one-act plays under the guidance of renowned cultural personalities.'}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="border-l-2 border-emerald-400 pl-3">
                    <span className="text-lg font-black text-white block">
                      {isBn ? `${toBanglaNum(15)}+টি শিল্পকলা প্রতিযোগিতা` : '15+ Art Categories'}
                    </span>
                    <p className="text-[11px] text-emerald-200">
                      {isBn ? 'জুনিয়র, সিনিয়র ও উন্মুক্ত তিনটি শাখায় প্রতিযোগিতা' : 'Across junior, senior, and open student sections'}
                    </p>
                  </div>
                  <div className="border-l-2 border-emerald-400 pl-3">
                    <span className="text-lg font-black text-white block">
                      {isBn ? 'মহতী সমাপনী ও সম্মাননা' : 'Grand Gala & Awards'}
                    </span>
                    <p className="text-[11px] text-emerald-200">
                      {isBn ? 'সেরা কৃতীদের মাঝে বিশেষ ক্রেস্ট ও সনদ বিতরণ' : 'Prestigious school crests and certificates conferred'}
                    </p>
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
        </ScrollReveal>
      </div>

      {/* 7. Action CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <ScrollReveal duration={0.65} distance={30}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {isBn ? 'আমাদের সাংস্কৃতিক আয়োজন ও স্মৃতি দেখতে চান?' : 'Explore our cultural albums and memories'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                {isBn
                  ? 'ফটো গ্যালারিতে পহেলা বৈশাখ র‍্যালি, জাতীয় দিবস উদযাপন ও বার্ষিক নাট্যোৎসবের ছবি ও মুহূর্তগুলো দেখুন।'
                  : 'Browse photo moments from our Pohela Boishakh rallies, national day ceremonies, and annual drama productions in the school gallery.'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              <Link
                to="/gallery"
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <ImageIcon size={14} />
                <span>{isBn ? 'সাংস্কৃতিক গ্যালারি' : 'Cultural Gallery'}</span>
              </Link>
              <Link
                to="/notices"
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
              >
                <Calendar size={14} />
                <span>{isBn ? 'অনুষ্ঠান নোটিশ' : 'Event Notices'}</span>
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
              >
                <span>{isBn ? 'সাংস্কৃতিক দপ্তরে যোগাযোগ' : 'Contact Cultural Office'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
