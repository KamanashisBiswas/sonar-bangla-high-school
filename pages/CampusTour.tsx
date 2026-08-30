import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  TreePine, ShieldCheck, HeartHandshake, CheckCircle, 
  MapPin, ArrowRight, Library, Activity, Sparkles, Image as ImageIcon
} from 'lucide-react';

const CampusTour: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <TreePine size={15} /> {language === 'bn' ? 'ক্যাম্পাস পরিবেশ ও সুবিধা' : 'Campus Environment & Facilities'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {language === 'bn' ? 'নিরাপদ, সুশৃঙ্খল ও নান্দনিক সবুজ ক্যাম্পাস' : 'Safe, Green & Disciplined Campus'}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'খুলনার গল্লামারীতে অবস্থিত আমাদের সুবিশাল সবুজ ক্যাম্পাস শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশে এক শান্ত ও নিরাপদ অভয়ারণ্য।' 
              : 'Located at Gollamari, Khulna, our eco-friendly green campus provides a serene, safe, and secure sanctuary for learning, athletics, and cultural development.'}
          </p>
          <div className="h-1 w-20 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              title: language === 'bn' ? 'সার্বক্ষণিক সিসিটিভি নিরাপত্তা' : '24/7 CCTV Security',
              desc: language === 'bn' ? 'সম্পূর্ণ ক্যাম্পাস ও প্রবেশদ্বার সার্বক্ষণিক সিসিটিভি ক্যামেরায় নজরদারি।' : 'Comprehensive 24/7 CCTV coverage across all gates and academic buildings.',
              icon: ShieldCheck,
              color: 'purple'
            },
            {
              title: language === 'bn' ? 'সবুজ খেলার মাঠ ও অ্যাথলেটিক্স' : 'Green Athletic Grounds',
              desc: language === 'bn' ? 'ফুটবল, ভলিবল ও বার্ষিক ক্রীড়ার জন্য বিশাল প্রাকৃতিক সবুজ মাঠ।' : 'Spacious grass sports field for volleyball, football, and track events.',
              icon: Activity,
              color: 'emerald'
            },
            {
              title: language === 'bn' ? 'সমৃদ্ধ কেন্দ্রীয় লাইব্রেরি' : 'Rich Central Library',
              desc: language === 'bn' ? 'হাজারো বই, রেফারেন্স জার্নাল ও পাঠাগার সুবিধা।' : 'Thousands of academic references, world classics, and quiet study zones.',
              icon: Library,
              color: 'blue'
            },
            {
              title: language === 'bn' ? 'বিশুদ্ধ পানি ও স্বাস্থ্যসেবা' : 'Pure Water & Hygiene',
              desc: language === 'bn' ? 'গভীর নলকূপ ও ফিল্টারিং প্ল্যান্টসহ স্বাস্থ্যসম্মত ওয়াশরুম।' : 'Modern deep-filtration drinking stations and strict hygiene standards.',
              icon: HeartHandshake,
              color: 'amber'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all">
              <div className={`w-12 h-12 rounded-2xl bg-${item.color}-50 text-${item.color}-600 flex items-center justify-center mb-4 shadow-inner`}>
                <item.icon size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <MapPin size={24} className="text-purple-600" />
              {language === 'bn' ? 'ক্যাম্পাসের প্রধান সুবিধাসমূহ' : 'Key Campus Infrastructure'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'bn' 
                ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা শহরতলির কোলাহলমুক্ত শান্ত পরিবেশে অবস্থিত। লাল ইটের ঐতিহ্যবাহী নান্দনিক ভবন এবং চারপাশের ছায়াঘেরা বৃক্ষরাজি শিক্ষার্থীদের পড়াশোনায় গভীর মনোযোগ তৈরি করে।' 
                : 'Nestled in a pollution-free setting at Gollamari, the iconic red-brick architecture surrounded by lush gardens inspires learning and creativity in our young students.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                language === 'bn' ? 'অভিজ্ঞ সিকিউরিটি গার্ড ও কঠোর ভিজিটর মনিটরিং' : 'Dedicated security personnel and rigorous visitor verification protocol',
                language === 'bn' ? 'অগ্নিনির্বাপক ব্যবস্থা ও জরুরি প্রাথমিক চিকিৎসা কক্ষ' : 'Fire safety systems and a fully equipped first-aid medical station',
                language === 'bn' ? 'সুপ্রশস্ত প্রাত্যহিক সমাবেশ প্রাঙ্গণ ও জাতীয় পতাকা মঞ্চ' : 'Spacious morning assembly court and ceremonial flag podium',
                language === 'bn' ? 'গার্লস ও বয়েজ পৃথক আধুনিক স্যানিটেশন ব্যবস্থা' : 'Separate, ultra-hygienic sanitation facilities for boys and girls',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-purple-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full inline-block">
                Campus Gallery
              </span>
              <h3 className="text-2xl font-extrabold leading-tight">
                {language === 'bn' ? 'ক্যাম্পাসের ছবি ও ভিডিও গ্যালারি দেখুন' : 'Explore High-Res Campus Photographs'}
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {language === 'bn' 
                  ? 'আমাদের প্রধান একাডেমি ভবন, খেলার মাঠ, অ্যাসেম্বলি ও বিভিন্ন অনুষ্ঠানের বাস্তব চিত্র দেখতে ফটো গ্যালারি ঘুরে আসুন।' 
                  : 'Take an instant photo tour of our lush grounds, sports events, classrooms, and architectural campus landmarks.'}
              </p>
            </div>

            <div className="pt-6 border-t border-purple-800 flex flex-wrap gap-4 items-center justify-between">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md cursor-pointer"
              >
                <ImageIcon size={16} />
                <span>{language === 'bn' ? 'ফটো অ্যালবাম খুলুন' : 'Open Photo Albums'}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="text-xs font-bold text-purple-200 hover:text-white underline transition"
              >
                {language === 'bn' ? 'ক্যাম্পাস লোকেশন ও যোগাযোগ' : 'Location & Directions'}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CampusTour;
