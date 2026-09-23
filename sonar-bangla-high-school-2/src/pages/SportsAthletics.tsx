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
import { useLanguage } from '../contexts/LanguageContext';

export const SportsAthletics: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');

  const highlights = [
    {
      value: isBn ? `${toBanglaNum(2)}+ একর` : '2+ Acres',
      label: isBn ? 'বিস্তীর্ণ ক্যাম্পাস মাঠ' : 'Lush Campus Grounds',
      desc: isBn ? 'আন্তর্জাতিক মানের ফুটবল মাঠ ও ক্রিকেট পিচ' : 'Full-sized football field & cricket pitch'
    },
    {
      value: isBn ? `${toBanglaNum(8)}+টি ইভেন্ট` : '8+ Events',
      label: isBn ? 'ক্রীড়া প্রতিযোগিতা' : 'Sporting Disciplines',
      desc: isBn ? 'ফুটবল, ক্রিকেট, অ্যাথলেটিক্স, ব্যাডমিন্টন ও অন্যান্য' : 'Football, cricket, athletics, badminton & more'
    },
    {
      value: isBn ? `${toBanglaNum(4)}টি হাউস` : '4 Houses',
      label: isBn ? 'আন্তঃহাউস প্রতিযোগিতা' : 'Inter-House League',
      desc: isBn ? 'পদ্মা, মেঘনা, যমুনা ও কর্ণফুলী' : 'Padma, Meghna, Jamuna & Karnaphuli'
    },
    {
      value: isBn ? `${toBanglaNum(100)}+ পদক` : '100+ Medals',
      label: isBn ? 'জেলা পর্যায়ের গৌরব' : 'District Honors',
      desc: isBn ? 'আন্তঃস্কুল টুর্নামেন্টে চ্যাম্পিয়নশিপ ট্রফি' : 'Championship titles in inter-school tournaments'
    }
  ];

  const sportsList = [
    {
      id: 'football',
      name: isBn ? 'ফুটবল খেলা' : 'Football (Soccer)',
      badge: isBn ? 'দলীয় খেলা' : 'Team Sport',
      tag: isBn ? 'জনপ্রিয়তম' : 'Most Popular',
      category: 'outdoor',
      image: '/programs/program_sports.png',
      description: isBn
        ? 'আমাদের স্কুল ক্রীড়া সংস্কৃতির প্রাণকেন্দ্র। শিক্ষার্থীরা বার্ষিক আন্তঃহাউস টুর্নামেন্টে অংশ নেয় এবং খুলনা জেলা আন্তঃস্কুল লিগে প্রতিষ্ঠানের প্রতিনিধিত্ব করে।'
        : 'The heartbeat of our school sports culture. Students participate in annual inter-house tournaments and represent the institution at Khulna district school leagues.',
      features: isBn
        ? [
            'প্রমাণ মাপের ঘাসের মাঠ ও গোলপোস্ট সুবিধা',
            'সার্টিফাইড শারীরিক শিক্ষা প্রশিক্ষক ও ফিটনেস ড্রিল',
            'জুনিয়র ও সিনিয়র আন্তঃহাউস চ্যাম্পিয়নশিপ কাপ',
            'প্রতিবেশী শিক্ষা প্রতিষ্ঠানের সাথে বার্ষিক প্রীতি ম্যাচ'
          ]
        : [
            'Full-size grass field with regulation goalposts',
            'Certified physical education coaching & fitness drills',
            'Junior and Senior inter-house championship cups',
            'Annual friendly matches with neighboring institutions'
          ]
    },
    {
      id: 'cricket',
      name: isBn ? 'ক্রিকেট প্রশিক্ষণ ও ম্যাচ' : 'Cricket Training & Matches',
      badge: isBn ? 'জাতীয় আবেগ' : 'National Passion',
      tag: isBn ? 'টার্ফ নেট' : 'Turf Nets',
      category: 'outdoor',
      image: '/facilities/facility_grounds.png',
      description: isBn
        ? 'নিরাপত্তা নেটযুক্ত সুনির্দিষ্ট ক্রিকেট অনুশীলন পিচে ব্যাটিং দক্ষতা, নিখুঁত বোলিং এবং কৌশলগত ফিল্ডিং নেতৃত্বের বিকাশ ঘটানো হয়।'
        : 'Developing batting precision, bowling discipline, and strategic field leadership on our dedicated cricket practice pitches with safety netting.',
      features: isBn
        ? [
            'প্রতিরক্ষামূলক নেটসহ সুনির্দিষ্ট অনুশীলন পিচ',
            'মৌসুমি ডিউস বল ও টেপ-টেনিস টুর্নামেন্ট আয়োজন',
            'পেস, স্পিন ও উইকেটকিপিংয়ের বিশেষ কোচিং',
            'আন্তঃস্কুল বিভাগীয় টুর্নামেন্টের জন্য দল নির্বাচন'
          ]
        : [
            'Dedicated practice pitches with protective safety nets',
            'Season ball and tape-tennis seasonal tournaments',
            'Specialized pace, spin, and wicketkeeping coaching',
            'Inter-school divisional tournament selection'
          ]
    },
    {
      id: 'athletics',
      name: isBn ? 'ট্র্যাক অ্যান্ড ফিল্ড অ্যাথলেটিক্স' : 'Track & Field Athletics',
      badge: isBn ? 'ব্যক্তিগত দক্ষতা' : 'Individual Mastery',
      tag: isBn ? 'বার্ষিক ক্রীড়া' : 'Annual Meet',
      category: 'track',
      image: '/gallery/album_sports.jpg',
      description: isBn
        ? 'আমাদের জমকালো বার্ষিক ক্রীড়া প্রতিযোগিতার মূল আকর্ষণ। স্প্রিন্ট, দূরপাল্লার দৌড় ও ফিল্ড জাম্পের মাধ্যমে গতি, স্ট্যামিনা ও ক্ষিপ্রতা তৈরি করা হয়।'
        : 'The core centerpiece of our grand Annual Sports Meet. Fostering speed, endurance, power, and agility across sprint, middle distance, and field jumps.',
      features: isBn
        ? [
            '১০০ মি., ২০০ মি., ৪০০ মি. স্প্রিন্ট ও ৪x১০০ মি. রিলে দৌড়',
            'হাই জাম্প, লং জাম্প ও ট্রিপল জাম্প ট্র্যাক',
            'নিরাপদ জোনে শটপুট ও চাকতি নিক্ষেপ প্রতিযোগিতা',
            'মার্চ-পাস্ট কুচকাওয়াজ ও অলিম্পিক মশাল প্রজ্জ্বলন'
          ]
        : [
            '100m, 200m, 400m sprint and 4x100m relay competitions',
            'High jump, long jump, and triple jump arenas',
            'Shot put and discus throwing sector with safety zones',
            'March-past parade and Olympic torch inauguration'
          ]
    },
    {
      id: 'badminton',
      name: isBn ? 'ব্যাডমিন্টন ও ভলিবল' : 'Badminton & Volleyball',
      badge: isBn ? 'কোর্ট গেমস' : 'Court Games',
      tag: isBn ? 'ফ্লাডলাইট সুবিধা' : 'Floodlight Play',
      category: 'outdoor',
      image: '/gallery/card_sports.jpg',
      description: isBn
        ? 'দ্রুত প্রতিফলন ও ক্ষিপ্রতা বৃদ্ধির খেলা। ফ্লাডলাইট সুবিধাযুক্ত আউটডোর কোর্টে গোধূলিলগ্নে অনুশীলন ও শীতকালীন টুর্নামেন্ট অনুষ্ঠিত হয়।'
        : 'Fast-paced agility and reflex building. Featuring outdoor courts equipped with floodlight fixtures for twilight practices and winter tournaments.',
      features: isBn
        ? [
            'ব্যাডমিন্টন ও ভলিবলের জন্য দ্বৈত কোর্ট সুবিধা',
            'শীতকালীন ব্যাচভিত্তিক একক ও দ্বৈত ব্যাডমিন্টন টুর্নামেন্ট',
            'উন্নত মানের র‍্যাকেট, কর্ক ও আন্তর্জাতিক মানের ভলিবল',
            'টিফিন বিরতিতে ও ক্লাসের পরে নিয়মিত শরীরচর্চা ও খেলা'
          ]
        : [
            'Multi-court facility for badminton and volleyball',
            'Winter inter-batch badminton singles & doubles open',
            'High-grade racquets, shuttlecocks, and standard volleyballs',
            'Daily recreational games during break and after classes'
          ]
    },
    {
      id: 'indoor',
      name: isBn ? 'দাবা, ক্যারম ও টেবিল টেনিস' : 'Chess, Carrom & Table Tennis',
      badge: isBn ? 'মানসিক একাগ্রতা' : 'Mental Focus',
      tag: isBn ? 'ইনডোর এরিনা' : 'Indoor Arena',
      category: 'indoor',
      image: '/gallery/album_prize.jpg',
      description: isBn
        ? 'আমাদের সুনির্দিষ্ট ইনডোর কমনরুমে শিক্ষার্থীদের কৌশলগত মনোযোগ ও চিন্তাশক্তি শাণিত করা হয়।'
        : 'Sharpening tactical concentration and cognitive foresight in our dedicated indoor recreation common room.',
      features: isBn
        ? [
            'আন্তর্জাতিক মানসম্পন্ন দাবা বোর্ড ও টুর্নামেন্ট টাইমার',
            'বন্ধুত্বপূর্ণ ও প্রতিযোগিতামূলক ম্যাচের জন্য ক্যারম বোর্ড',
            'দ্রুত রিফ্লেক্স গড়ে তুলতে ইনডোর টেবিল টেনিস সুবিধা',
            'জেলা ও জাতীয় পর্যায়ে আন্তঃস্কুল দাবা প্রতিযোগিতায় অংশগ্রহণ'
          ]
        : [
            'International standard chess boards and tournament timers',
            'Carrom boards for friendly and competitive matches',
            'Indoor table tennis board for quick reflexes',
            'Inter-school chess tournament representations'
          ]
    }
  ];

  const houses = [
    {
      name: isBn ? 'পদ্মা হাউস' : 'Padma House',
      motto: isBn ? 'সাহস ও মর্যাদা' : 'Courage & Dignity',
      color: 'bg-emerald-600',
      badge: isBn ? 'সবুজ' : 'Green',
      desc: isBn
        ? 'প্রমত্তা পদ্মার নামে নামাঙ্কিত, যা অদম্য সংকল্প ও অবিচল সহনশীলতার প্রতীক।'
        : 'Named after the mighty river, symbolizing fearless determination and endurance.'
    },
    {
      name: isBn ? 'মেঘনা হাউস' : 'Meghna House',
      motto: isBn ? 'প্রজ্ঞা ও শক্তি' : 'Wisdom & Strength',
      color: 'bg-blue-600',
      badge: isBn ? 'নীল' : 'Blue',
      desc: isBn
        ? 'অফুরন্ত সম্ভাবনা, কৌশলগত বুদ্ধিমত্তা এবং অটুট দলীয় ঐক্যের পরিচায়ক।'
        : 'Reflecting vast potential, strategic intellect, and unyielding team unity.'
    },
    {
      name: isBn ? 'যমুনা হাউস' : 'Jamuna House',
      motto: isBn ? 'বিশুদ্ধতা ও উদ্দীপনা' : 'Purity & Passion',
      color: 'bg-amber-500',
      badge: isBn ? 'হলুদ' : 'Yellow',
      desc: isBn
        ? 'তারুণ্যের শক্তি, প্রদীপ্ত উৎসাহ এবং ন্যায়সঙ্গত ক্রীড়াসুলভ মনোভাবের প্রতীক।'
        : 'Inspired by youthful energy, blazing enthusiasm, and fair play excellence.'
    },
    {
      name: isBn ? 'কর্ণফুলী হাউস' : 'Karnaphuli House',
      motto: isBn ? 'গতি ও সম্মান' : 'Speed & Honor',
      color: 'bg-rose-600',
      badge: isBn ? 'লাল' : 'Red',
      desc: isBn
        ? 'ক্ষিপ্র গতি, উদ্দীপনাময় প্রতিদ্বন্দ্বিতা এবং সকল প্রতিযোগীর প্রতি শ্রদ্ধাবোধের নিদর্শন।'
        : 'Representing swift agility, spirited competition, and respect for all contenders.'
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
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500">{isBn ? 'আমাদের কার্যক্রম' : 'Our Programs'}</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{isBn ? 'খেলাধুলা ও শরীরচর্চা' : 'Sports & Athletics'}</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <Trophy size={14} />
              <span>{isBn ? 'শারীরিক সক্ষমতা ও ক্রীড়াসুলভ চেতনা' : 'PHYSICAL FITNESS & SPORTSMANSHIP'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>খেলাধুলা ও <br />শরীরচর্চা</>
              ) : (
                <>Sports & <br />Athletics</>
              )}
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn ? (
                <>
                  আমাদের সুপরিসর সবুজ ক্যাম্পাস মাঠে শারীরিক নিয়মানুবর্তিতা, কৌশলগত দৃঢ়তা ও দলীয় নেতৃত্বের পাঠ দেওয়া হচ্ছে{' '}
                  <strong className="text-emerald-800 font-bold">{toBanglaNum(1987)} থেকে।</strong>
                </>
              ) : (
                <>
                  Building physical discipline, tactical resilience, and unwavering team leadership on our sprawling green campus grounds{' '}
                  <strong className="text-emerald-800 font-bold">since 1987.</strong>
                </>
              )}
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
                  {isBn
                    ? 'চ্যাম্পিয়নরা ততক্ষণ খেলে যতক্ষণ না তারা নিখুঁত হয়। খেলাধুলা শুধু চরিত্র গড়ে না—তা চরিত্র প্রকাশ করে।'
                    : 'Champions keep playing until they get it right. Sports do not just build character—they reveal it.'}
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-900">{isBn ? 'শারীরিক শিক্ষা ও ক্রীড়া বিভাগ' : 'Sports & Athletics Dept'}</span>
                  <span className="text-[10px] text-emerald-700 font-bold">{isBn ? 'সক্রিয় জীবন' : 'Active Life'}</span>
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
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004d34] text-white shadow-xs flex items-center gap-1.5 transition"
              >
                <Trophy size={14} />
                <span>{isBn ? 'খেলাধুলা ও শরীরচর্চা' : 'Sports & Athletics'}</span>
              </Link>
              <Link
                to="/cultural-activities"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition flex items-center gap-1.5"
              >
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
              {isBn ? 'ট্র্যাক, ফিল্ড ও কোর্ট' : 'TRACK, FIELD & COURTS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isBn ? 'সক্রিয় ক্রীড়া বিভাগসমূহ' : 'Active Sports Disciplines'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {isBn
                ? 'প্রতিটি শিক্ষার্থীর মধ্যে শারীরিক সক্ষমতা, প্রতিযোগিতামূলক মনোভাব ও ক্রীড়াসুলভ আচরণের বিকাশ।'
                : 'Encouraging physical vitality, competitive spirit, and sportsmanlike conduct in every student.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: isBn ? 'সকল খেলা' : 'All Sports' },
              { id: 'outdoor', label: isBn ? 'আউটডোর' : 'Outdoor' },
              { id: 'track', label: isBn ? 'ট্র্যাক ও ফিল্ড' : 'Track & Field' },
              { id: 'indoor', label: isBn ? 'ইনডোর গেমস' : 'Indoor Games' }
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
                    {isBn ? 'মূল বৈশিষ্ট্যসমূহ:' : 'Key Features:'}
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
              {isBn ? 'হাউস পদ্ধতি ও ভ্রাতৃত্ববোধ' : 'HOUSE SYSTEM & CAMARADERIE'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {isBn ? 'চারটি স্কুল হাউস: আজীবন বন্ধুত্বের বন্ধন' : 'Four School Houses: Fostering Lifelong Brotherhood'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {isBn
                ? '১ম থেকে ১০ম শ্রেণি পর্যন্ত প্রতিটি শিক্ষার্থী চারটি ঐতিহ্যবাহী হাউসের অন্তর্ভুক্ত হয়ে ক্রীড়া ও সহশিক্ষা কার্যক্রমে অংশ নেয়।'
                : 'Every student belongs to one of four historic houses from Class 1 through Class 10, earning points through athletic, academic, and co-curricular tournaments.'}
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
                <span>{isBn ? 'বার্ষিক সিগনেচার ইভেন্ট' : 'SIGNATURE ANNUAL EVENT'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                {isBn ? 'ঐতিহ্যবাহী বার্ষিক অ্যাথলেটিক্স ও ক্রীড়া প্রতিযোগিতা' : 'The Grand Annual Athletic & Sports Meet'}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                {isBn
                  ? `প্রতি বছর শীতকালে আমাদের সুবিশাল ক্যাম্পাসে আয়োজিত হয় বার্ষিক ক্রীড়া প্রতিযোগিতা, যেখানে অংশ নেয় ${toBanglaNum(1200)}+ শিক্ষার্থী, অভিভাবক, প্রাক্তন ছাত্র এবং গণ্যমান্য ব্যক্তিবর্গ।`
                  : 'Held each winter on our expansive campus grounds, the Annual Sports Meet draws over 1,200 enthusiastic student participants, respected parents, alumni, and district educational dignitaries.'}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">
                    {isBn ? 'মার্চ-পাস্ট ও শপথগ্রহণ' : 'March Past & Oath'}
                  </span>
                  <p className="text-[11px] text-emerald-200">
                    {isBn ? 'জাতীয় পতাকাকে অভিবাদন জানিয়ে সুশৃঙ্খল হাউসভিত্তিক কুচকাওয়াজ' : 'Synchronized house parade saluting the national flag'}
                  </p>
                </div>
                <div className="border-l-2 border-emerald-400 pl-3">
                  <span className="text-lg font-black text-white block">
                    {isBn ? `${toBanglaNum(25)}+টি অ্যাথলেটিক্স ইভেন্ট` : '25+ Athletic Events'}
                  </span>
                  <p className="text-[11px] text-emerald-200">
                    {isBn ? 'স্প্রিন্ট, রিলে, হাই জাম্প, চাকতি নিক্ষেপ ও হার্ডল প্রতিযোগিতা' : 'Sprints, relays, high jump, discus, and hurdle challenges'}
                  </p>
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
              {isBn ? 'আমাদের শিক্ষার্থীদের ক্রীড়া নৈপুণ্য দেখতে চান?' : 'Want to see our athletes and sports day in action?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
              {isBn
                ? 'আমাদের ফটো গ্যালারিতে বার্ষিক ক্রীড়ার ছবি দেখুন, নোটিশ বোর্ডে ক্রীড়া সূচি চেক করুন বা সরাসরি যোগাযোগ করুন।'
                : 'Browse our high-resolution sports photo galleries, check upcoming athletic schedules on the notice board, or get in touch with our physical education faculty.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <Link
              to="/gallery"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <ImageIcon size={14} />
              <span>{isBn ? 'ক্রীড়া গ্যালারি' : 'Sports Gallery'}</span>
            </Link>
            <Link
              to="/notices"
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} />
              <span>{isBn ? 'ক্রীড়া নোটিশ' : 'Sports Notices'}</span>
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#004d34] hover:bg-[#003b28] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <span>{isBn ? 'ক্রীড়া বিভাগে যোগাযোগ' : 'Contact Sports Dept'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
