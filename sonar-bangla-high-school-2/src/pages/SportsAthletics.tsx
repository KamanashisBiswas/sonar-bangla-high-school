import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  Calendar,
  Image as ImageIcon,
  GraduationCap
} from 'lucide-react';

export const SportsAthletics: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const highlights = [
    { value: '2+ Acres', label: 'Lush Campus Grounds', desc: 'Full-sized football field & cricket pitch' },
    { value: '8+ Events', label: 'Sporting Disciplines', desc: 'Football, cricket, athletics, badminton & more' },
    { value: '4 Houses', label: 'Inter-House League', desc: 'Padma, Meghna, Jamuna & Karnaphuli' },
    { value: '100+ Medals', label: 'District Honors', desc: 'Championship titles in inter-school tournaments' }
  ];

  const sportsList = [
    {
      id: 'football',
      name: 'Football (Soccer)',
      badge: 'Team Sport',
      tag: 'Most Popular',
      category: 'outdoor',
      image: '/programs/program_sports.png',
      description: 'The heartbeat of our school sports culture. Students participate in annual inter-house tournaments and represent the institution at Khulna district school leagues.',
      features: [
        'Full-size grass field with regulation goalposts',
        'Certified physical education coaching & fitness drills',
        'Junior and Senior inter-house championship cups',
        'Annual friendly matches with neighboring institutions'
      ]
    },
    {
      id: 'cricket',
      name: 'Cricket Training & Matches',
      badge: 'National Passion',
      tag: 'Turf Nets',
      category: 'outdoor',
      image: '/facilities/facility_grounds.png',
      description: 'Developing batting precision, bowling discipline, and strategic field leadership on our dedicated cricket practice pitches with safety netting.',
      features: [
        'Dedicated practice pitches with protective safety nets',
        'Season ball and tape-tennis seasonal tournaments',
        'Specialized pace, spin, and wicketkeeping coaching',
        'Inter-school divisional tournament selection'
      ]
    },
    {
      id: 'athletics',
      name: 'Track & Field Athletics',
      badge: 'Individual Mastery',
      tag: 'Annual Meet',
      category: 'track',
      image: '/gallery/album_sports.jpg',
      description: 'The core centerpiece of our grand Annual Sports Meet. Fostering speed, endurance, power, and agility across sprint, middle distance, and field jumps.',
      features: [
        '100m, 200m, 400m sprint and 4x100m relay competitions',
        'High jump, long jump, and triple jump arenas',
        'Shot put and discus throwing sector with safety zones',
        'March-past parade and Olympic torch inauguration'
      ]
    },
    {
      id: 'badminton',
      name: 'Badminton & Volleyball',
      badge: 'Court Games',
      tag: 'Floodlight Play',
      category: 'outdoor',
      image: '/gallery/card_sports.jpg',
      description: 'Fast-paced agility and reflex building. Featuring outdoor courts equipped with floodlight fixtures for twilight practices and winter tournaments.',
      features: [
        'Multi-court facility for badminton and volleyball',
        'Winter inter-batch badminton singles & doubles open',
        'High-grade racquets, shuttlecocks, and standard volleyballs',
        'Daily recreational games during break and after classes'
      ]
    },
    {
      id: 'indoor',
      name: 'Chess, Carrom & Table Tennis',
      badge: 'Mental Focus',
      tag: 'Indoor Arena',
      category: 'indoor',
      image: '/gallery/album_prize.jpg',
      description: 'Sharpening tactical concentration and cognitive foresight in our dedicated indoor recreation common room.',
      features: [
        'International standard chess boards and tournament timers',
        'Carrom boards for friendly and competitive matches',
        'Indoor table tennis board for quick reflexes',
        'Inter-school chess tournament representations'
      ]
    }
  ];

  const houses = [
    {
      name: 'Padma House',
      motto: 'Courage & Dignity',
      color: 'bg-emerald-600',
      badge: 'Green',
      desc: 'Named after the mighty river, symbolizing fearless determination and endurance.'
    },
    {
      name: 'Meghna House',
      motto: 'Wisdom & Strength',
      color: 'bg-blue-600',
      badge: 'Blue',
      desc: 'Reflecting vast potential, strategic intellect, and unyielding team unity.'
    },
    {
      name: 'Jamuna House',
      motto: 'Purity & Passion',
      color: 'bg-amber-500',
      badge: 'Yellow',
      desc: 'Inspired by youthful energy, blazing enthusiasm, and fair play excellence.'
    },
    {
      name: 'Karnaphuli House',
      motto: 'Speed & Honor',
      color: 'bg-rose-600',
      badge: 'Red',
      desc: 'Representing swift agility, spirited competition, and respect for all contenders.'
    }
  ];

  const filteredSports = selectedDiscipline === 'all'
    ? sportsList
    : sportsList.filter((s) => s.category === selectedDiscipline);

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
            <span className="text-slate-800 font-bold">Sports & Athletics</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Trophy size={14} />
              <span>PHYSICAL FITNESS & SPORTSMANSHIP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Sports & <br />
              Athletics
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Building physical discipline, tactical resilience, and unwavering team leadership on our sprawling green campus grounds{' '}
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
                  Champions keep playing until they get it right. Sports do not just build character—they reveal it.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">Sports & Athletics Dept</span>
                  <span className="text-[10px] text-emerald-700 font-bold">Active Life</span>
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <Trophy size={14} />
                <span>Sports & Athletics</span>
              </Link>
              <Link
                to="/cultural-activities"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
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

      {/* 4. Sporting Disciplines Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              TRACK, FIELD & COURTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Active Sports Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Encouraging physical vitality, competitive spirit, and sportsmanlike conduct in every student.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Sports' },
              { id: 'outdoor', label: 'Outdoor' },
              { id: 'track', label: 'Track & Field' },
              { id: 'indoor', label: 'Indoor Games' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDiscipline(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedDiscipline === tab.id
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
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {sport.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#e8f7ee] text-[#059669] px-2 py-0.5 rounded-md">
                    {sport.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004d34] transition-colors">
                  {sport.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {sport.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Key Features:
                  </h4>
                  {sport.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Inter-House Competition System */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#f0faf5] border border-emerald-100/80 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              HOUSE SYSTEM & CAMARADERIE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Four School Houses: Fostering Lifelong Brotherhood
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every student belongs to one of four historic houses from Class 1 through Class 10, earning points through athletic, academic, and co-curricular tournaments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${house.color} text-white flex items-center justify-center shadow-xs`}>
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-[11px] font-black uppercase text-slate-400">
                    {house.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {house.name}
                </h3>
                <span className="text-xs font-semibold text-emerald-700 block mt-0.5 italic">
                  "{house.motto}"
                </span>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {house.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Annual Sports Meet Highlights */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Flame size={14} className="text-amber-400" />
                <span>SIGNATURE ANNUAL EVENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                The Grand Annual Athletic & Sports Meet
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Held each winter on our expansive campus grounds, the Annual Sports Meet draws over 1,200 enthusiastic student participants, respected parents, alumni, and district educational dignitaries.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">March Past & Oath</span>
                  <p className="text-[11px] text-emerald-200">Synchronized house parade saluting the national flag</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">25+ Athletic Events</span>
                  <p className="text-[11px] text-emerald-200">Sprints, relays, high jump, discus, and hurdle challenges</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20">
                <img
                  src="/gallery/album_sports.jpg"
                  alt="Annual Sports Meet"
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
              Want to see our athletes and sports day in action?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Browse our high-resolution sports photo galleries, check upcoming athletic schedules on the notice board, or get in touch with our physical education faculty.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/gallery"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon size={14} />
              <span>Sports Gallery</span>
            </Link>
            <Link
              to="/notices"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>Sports Notices</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>Contact Sports Dept</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
