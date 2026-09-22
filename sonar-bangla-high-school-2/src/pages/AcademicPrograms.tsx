import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  FlaskConical,
  Laptop,
  Library,
  Target,
  Users,
  Compass,
  FileText,
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export const AcademicPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'primary' | 'junior' | 'secondary'>('all');

  const levels = [
    {
      id: 'primary',
      name: 'Primary Education Wing',
      classes: 'Class 1 to Class 5',
      badge: 'Foundation Years',
      description: 'Nurturing curiosity, foundational literacy, mathematical reasoning, creative expression, and strong moral character through joyful, participatory learning.',
      features: [
        'Activity-based foundational literacy in Bangla and English',
        'Practical elementary mathematics and logical reasoning puzzles',
        'Elementary science experiments and environmental studies',
        'Moral education, values, civic sense, and physical wellness',
        'Creative arts, crafts, and interactive storytelling sessions'
      ],
      curriculum: 'National Curriculum & Textbook Board (NCTB) syllabus enriched with modern audiovisual aids.',
      icon: <BookOpen className="w-6 h-6 text-[#059669]" />
    },
    {
      id: 'junior',
      name: 'Junior Secondary Wing',
      classes: 'Class 6 to Class 8',
      badge: 'Skill Building',
      description: 'Transitioning students from basic concepts into rigorous analytical thinking, scientific inquiry, information technology skills, and bilingual fluency.',
      features: [
        'Comprehensive STEM education with supervised laboratory sessions',
        'Hands-on computer training in the ICT Computer Lab',
        'Intensive English and Bangla language and communicative competence',
        'Bangladesh & Global Studies (BGS) fostering national heritage',
        'Continuous assessment with formative diagnostic quizzes'
      ],
      curriculum: 'National Junior Curriculum integrated with communicative English and digital literacy programs.',
      icon: <FlaskConical className="w-6 h-6 text-[#059669]" />
    },
    {
      id: 'secondary',
      name: 'Secondary SSC Wing',
      classes: 'Class 9 & Class 10',
      badge: 'Board Excellence',
      description: 'Focused academic preparation across three recognized academic streams to excel in the Secondary School Certificate (SSC) examinations under Jashore Board.',
      features: [
        'Three specialized streams: Science, Business Studies, and Humanities',
        'Advanced Physics, Chemistry, Biology, and Higher Mathematics laboratory sessions',
        'Accounting, Finance, and Business Entrepreneurship specialized guidance',
        'Extensive model tests, test examinations, and personalized board mentorship',
        'Academic counseling and career guidance for higher secondary education'
      ],
      curriculum: 'Rigorous SSC Board preparation with consistent 100% pass record and outstanding GPA-5.00 achievements.',
      icon: <GraduationCap className="w-6 h-6 text-[#059669]" />
    }
  ];

  const streams = [
    {
      name: 'Science Stream',
      tag: 'Innovation & Research',
      color: 'border-emerald-200 bg-emerald-50/50',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      subjects: ['Physics', 'Chemistry', 'Higher Mathematics', 'Biology', 'Information & Communication Technology'],
      careerOutlook: 'Engineering, Medicine, Computer Science, Biotechnology, Architecture, Pure Research'
    },
    {
      name: 'Business Studies Stream',
      tag: 'Commerce & Enterprise',
      color: 'border-blue-200 bg-blue-50/50',
      badgeBg: 'bg-blue-100 text-blue-800',
      subjects: ['Accounting', 'Finance & Banking', 'Business Entrepreneurship', 'General Science', 'ICT'],
      careerOutlook: 'Chartered Accountancy, Banking, Corporate Management, Economics, Marketing, Entrepreneurship'
    },
    {
      name: 'Humanities Stream',
      tag: 'Society & Culture',
      color: 'border-amber-200 bg-amber-50/50',
      badgeBg: 'bg-amber-100 text-amber-800',
      subjects: ['History of Bangladesh & World Civilization', 'Geography & Environment', 'Civics & Citizenship', 'Economics', 'ICT'],
      careerOutlook: 'Law, Public Administration, Journalism & Media, International Relations, Education'
    }
  ];

  const highlights = [
    { value: '100%', label: 'SSC Pass Rate', desc: 'Consistently across consecutive board years' },
    { value: '1:25', label: 'Teacher-Student Ratio', desc: 'Ensuring personal attention for each child' },
    { value: '3 Streams', label: 'Academic Pathways', desc: 'Science, Business Studies & Humanities' },
    { value: '38+ Years', label: 'Academic Heritage', desc: 'Educating the nation with pride since 1987' }
  ];

  const filteredLevels = activeTab === 'all' 
    ? levels 
    : levels.filter((lvl) => lvl.id === activeTab);

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden text-slate-800">
      {/* 1. Hero Section: Full-Width Campus Background with Standard Overlay */}
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
            <span className="text-slate-800 font-bold">Academic Programs</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={14} />
              <span>ACADEMIC EXCELLENCE & CURRICULUM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Academic <br />
              Programs
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              Strong foundation with modern teaching methods, fostering analytical curiosity, ethical values, and outstanding board examination performance{' '}
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
                  Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">SOS Academic Council</span>
                  <span className="text-[10px] text-emerald-700 font-bold">Quality Learning</span>
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <GraduationCap size={14} />
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

      {/* 4. Level-by-Level Curriculum Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              COMPREHENSIVE PEDAGOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Education Wings & Stages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              A carefully structured developmental progression from initial foundational discovery to SSC mastery.
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {(['all', 'primary', 'junior', 'secondary'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-[#004d34] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab === 'all' ? 'All Wings' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {filteredLevels.map((lvl) => (
            <div
              key={lvl.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8f7ee] border border-emerald-100 flex items-center justify-center">
                    {lvl.icon}
                  </div>
                  <span className="bg-[#e8f7ee] text-[#059669] border border-emerald-100 px-3 py-1 rounded-full text-[11px] font-bold">
                    {lvl.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {lvl.name}
                </h3>
                <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                  {lvl.classes}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {lvl.description}
                </p>

                <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Highlights:
                  </h4>
                  {lvl.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-[#059669] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                  Curriculum Standard:
                </span>
                <p className="text-xs text-slate-700 font-medium mt-0.5">
                  {lvl.curriculum}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SSC Disciplines (Science, Business Studies, Humanities) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-br from-emerald-900 to-[#004d34] text-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              CLASS 9 & 10 SPECIALIZATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 leading-tight">
              SSC Academic Streams & Pathways
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 font-normal leading-relaxed">
              Equipping secondary examinees with the exact knowledge, laboratory mastery, and mentor coaching required to pursue their aspirational college and university careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10">
            {streams.map((stream, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold bg-white/20 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {stream.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stream.name}
                  </h3>
                  <div className="space-y-1.5 mt-3">
                    <p className="text-[11px] text-emerald-200 uppercase tracking-wider font-bold">
                      Elective Subjects:
                    </p>
                    <ul className="text-xs text-white/90 space-y-1">
                      {stream.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <span className="text-[10px] text-emerald-200 font-semibold uppercase tracking-wider block">
                    Future Career Pathways:
                  </span>
                  <p className="text-xs text-white/90 mt-1 font-medium leading-relaxed">
                    {stream.careerOutlook}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Facilities & Pedagogical Assets */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
            CAMPUS INFRASTRUCTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
            Learning Facilities Supporting Academics
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            State-of-the-art infrastructure designed to deliver hands-on practical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="/facilities/facility_science.png"
                alt="Science Laboratories"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Science Laboratories</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Equipped with apparatus for Physics, Chemistry, and Biology practicals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="/facilities/facility_computer.png"
                alt="ICT Computer Lab"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">ICT Computer Lab</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              High-speed internet workstations with modern programming and office software.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="/facilities/facility_library.png"
                alt="Central Library"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Central Library</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Over 10,000 academic titles, reference encyclopedias, and quiet reading nooks.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition">
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4">
              <img
                src="/facilities/facility_grounds.png"
                alt="Smart Classrooms"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Sprawling Campus Grounds</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Lush green open environment promoting physical vitality and fresh air.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Action CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Ready to begin your academic journey with us?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              Applications for new admissions in Class 1 to Class 9 are now open. Download our syllabus, check class routines, or apply directly online.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/academic"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>Class Routines</span>
            </Link>
            <Link
              to="/downloads"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <FileText size={14} />
              <span>Syllabus PDF</span>
            </Link>
            <Link
              to="/admission"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>Online Admission</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
