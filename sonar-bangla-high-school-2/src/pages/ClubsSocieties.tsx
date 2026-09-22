import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Users,
  Compass,
  Cpu,
  Globe2,
  TreePine,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Award,
  Calendar,
  Image as ImageIcon,
  HeartHandshake,
  BookOpen,
  ChevronRight
} from 'lucide-react';

export const ClubsSocieties: React.FC = () => {
  const [selectedClubCategory, setSelectedClubCategory] = useState<string>('all');

  const highlights = [
    { value: '6 Clubs', label: 'Active Societies', desc: 'Covering STEM, literature, ecology, and civic service' },
    { value: 'Every Thursday', label: 'Club Activity Period', desc: 'Dedicated 90-minute weekly co-curricular session' },
    { value: '250+ Members', label: 'Student Leaders', desc: 'Empowered with executive council responsibilities' },
    { value: '15+ Awards', label: 'National Olympiads', desc: 'Honors in Math, Physics, and ICT Olympiads' }
  ];

  const clubs = [
    {
      id: 'science-ict',
      name: 'Science & ICT Club',
      badge: 'STEM & Robotics',
      tag: 'Innovation',
      category: 'stem',
      image: '/gallery/album_science.jpg',
      description: 'The technological innovation hub of our school. Students explore robotics, computer programming, scientific research, and represent the institution at national science olympiads.',
      activities: [
        'Annual Science Fair & ICT Innovation Expo organization',
        'Hands-on robotics, sensor circuitry, and Arduino workshops',
        'National Mathematical, Physics, and Biology Olympiad training',
        'Introductory coding classes in Python and web technologies'
      ],
      moderator: 'Senior Physics & ICT Faculty'
    },
    {
      id: 'debating',
      name: 'English & Debating Society',
      badge: 'Oratory & Rhetoric',
      tag: 'Public Speaking',
      category: 'literary',
      image: '/gallery/album_library.jpg',
      description: 'Developing eloquent communicators, critical thinkers, and persuasive negotiators through bilingual debates, Model UN mock sessions, and public speaking.',
      activities: [
        'Weekly parliamentary style debate practice in Bangla & English',
        'Extempore speech, storytelling, and declamation workshops',
        'Model United Nations (MUN) simulation conferences',
        'Participation in inter-school television debate tournaments'
      ],
      moderator: 'Senior English Department Faculty'
    },
    {
      id: 'eco-club',
      name: 'Eco & Nature Conservation Club',
      badge: 'Green Campus',
      tag: 'Sustainability',
      category: 'community',
      image: '/programs/program_clubs.png',
      description: 'Instilling environmental stewardship and sustainable lifestyles through green campus initiatives, tree plantation drives, and plastic recycling awareness.',
      activities: [
        'Annual Monsoon Campus Tree Plantation Festival',
        'Campus zero-plastic campaigns and waste segregation',
        'Organic botanical garden management and medicinal plant care',
        'Observance of World Environment Day with seminars and poster rallies'
      ],
      moderator: 'Biology & Geography Faculty'
    },
    {
      id: 'scouts',
      name: 'Bangladesh Scouts & Girl Guides',
      badge: 'Leadership & Service',
      tag: 'Civic Duty',
      category: 'service',
      image: '/gallery/album_assembly.jpg',
      description: 'Fostering disciplined self-reliance, moral integrity, physical stamina, and humanitarian preparedness through the historic scout movement.',
      activities: [
        'Weekend outdoor camping, tent pitching, and pioneering knots',
        'Certified First Aid and emergency disaster management drills',
        'Honor guard duties during national days and VIP visits on campus',
        'Participation in National Scout Jamboree and district rallies'
      ],
      moderator: 'Certified Wood Badge Scout Leader'
    },
    {
      id: 'literature-arts',
      name: 'Literature & Creative Arts Society',
      badge: 'Creative Writing',
      tag: 'Publishing',
      category: 'literary',
      image: '/gallery/card_fair.jpg',
      description: 'A sanctuary for budding poets, essayists, illustrators, and calligraphy enthusiasts. Publishers of our quarterly wall magazines and annual school journal.',
      activities: [
        'Publication of quarterly themed wall magazine ("Dewalika")',
        'Poetry recitation circles, book review discussions, and creative writing',
        'Annual handwriting, calligraphy, and book illustration contests',
        'Literary quizzes and visits to national book fairs'
      ],
      moderator: 'Bangla Department Faculty'
    },
    {
      id: 'social-welfare',
      name: 'Social Welfare & Red Crescent Youth',
      badge: 'Humanitarian',
      tag: 'Empathy in Action',
      category: 'service',
      image: '/gallery/album_prize.jpg',
      description: 'Embodying the founding ethos of Hermann Gmeiner by serving underprivileged communities, conducting relief campaigns, and spreading public health awareness.',
      activities: [
        'Winter cloth and warm blanket collection and distribution drives',
        'Voluntary blood group determination and donor awareness camp',
        'Free stationary and textbook distribution to underprivileged children',
        'Health, hygiene, and clean water awareness programs'
      ],
      moderator: 'Administration & Counseling Office'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Club Orientation Week',
      desc: 'At the start of each academic year, all six clubs showcase their activities, previous projects, and awards at the school auditorium.'
    },
    {
      number: '02',
      title: 'Registration & Membership',
      desc: 'Students from Class 6 to Class 10 can join up to two complementary clubs based on personal passion and teacher consultation.'
    },
    {
      number: '03',
      title: 'Weekly Activity Periods',
      desc: 'Dedicated 90-minute sessions every Thursday where clubs conduct workshops, team projects, and competitive preparation.'
    },
    {
      number: '04',
      title: 'Council Leadership Roles',
      desc: 'Senior students are elected as President, General Secretary, and Project Leads, cultivating real-world organizational leadership.'
    }
  ];

  const filteredClubs = selectedClubCategory === 'all'
    ? clubs
    : clubs.filter((c) => c.category === selectedClubCategory);

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
            <span className="text-slate-800 font-bold">Clubs & Societies</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Users size={14} />
              <span>CO-CURRICULAR COUNCILS & CLUBS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Clubs & <br />
              Societies
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Empowering students with 21st-century leadership, scientific innovation, communicative eloquence, and compassionate humanitarian service{' '}
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
                  Leadership is not about a title; it is about impact, influence, and inspiration through collaboration.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">Student Council Board</span>
                  <span className="text-[10px] text-emerald-700 font-bold">Leadership Hub</span>
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
                <span>Cultural Activities</span>
              </Link>
              <Link
                to="/clubs-societies"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <Users size={14} />
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

      {/* 4. Active Clubs Showcase */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              STUDENT COUNCILS & CHAPTERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Featured Clubs & Societies
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Providing vibrant spaces where students pursue their unique passions outside formal class lectures.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Clubs' },
              { id: 'stem', label: 'STEM & Robotics' },
              { id: 'literary', label: 'Debate & Arts' },
              { id: 'service', label: 'Scouts & Service' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedClubCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  selectedClubCategory === tab.id
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
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {club.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#e8f7ee] text-[#059669] px-2 py-0.5 rounded-md">
                    {club.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004d34] transition-colors">
                  {club.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {club.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Core Activities:
                  </h4>
                  {club.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold">Faculty Moderator:</span>
                <span className="font-bold text-emerald-800">{club.moderator}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. How to Join & Leadership Flow */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#f0faf5] border border-emerald-100/80 rounded-3xl p-8 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              STUDENT ENGAGEMENT ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              How Students Join & Grow in Clubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              A transparent four-stage path designed to nurture executive leadership, teamwork, and project ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-2xs hover:shadow-lg transition-all relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-emerald-300 block mb-2 font-mono">
                    {st.number}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Signature Annual Club Expo Banner */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-emerald-900 to-[#004d34] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-emerald-300" />
                <span>SIGNATURE ANNUAL EXPO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Annual Science Fair & ICT Innovation Expo
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Organized each year by the Science & ICT Club, presenting innovative student working models across renewable energy, robotics, AI automation, public sanitation, and healthcare inventions.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">50+ Project Exhibits</span>
                  <p className="text-[11px] text-emerald-200">Junior & Senior section scientific demonstrations</p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">Expert Jury & Awards</span>
                  <p className="text-[11px] text-emerald-200">Judged by university professors and industry engineers</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20">
                <img
                  src="/gallery/album_science.jpg"
                  alt="Science Fair Expo"
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
              Want to see our clubs in action?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Browse photo moments from science fairs, scout camporees, debate tournaments, and tree plantation drives in our photo gallery.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/gallery"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon size={14} />
              <span>Clubs Gallery</span>
            </Link>
            <Link
              to="/notices"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>Club Circulars</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>Contact Club In-Charge</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
