import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Presentation, Monitor, Sparkles, CheckCircle, 
  Cpu, ArrowRight, Laptop, Video, Layers, ShieldCheck
} from 'lucide-react';

const SmartClassrooms: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-12 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Presentation size={15} /> {language === 'bn' ? 'ডিজিটাল শিক্ষা ও প্রযুক্তি' : 'Smart Digital Infrastructure'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {language === 'bn' ? 'মাল্টিমিডিয়া স্মার্ট ক্লাসরুম ও বিজ্ঞান ল্যাব' : 'Multimedia Smart Classrooms & High-Tech Labs'}
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'আধুনিক ডিজিটাল প্রজেক্টর, স্মার্ট বোর্ড ও আধুনিক কম্পিউটার ল্যাবের মাধ্যমে শিক্ষার্থীদের একবিংশ শতাব্দীর চ্যালেঞ্জের জন্য তৈরি করা হচ্ছে।' 
              : 'Empowering 21st-century learners through high-definition interactive projectors, digital smart-boards, and dedicated STEM science laboratories.'}
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {[
            {
              title: language === 'bn' ? 'ইন্টারেক্টিভ প্রজেক্টর' : 'Interactive Projectors',
              desc: language === 'bn' ? 'প্রতিটি ক্লাসে ফুল এইচডি ডিজিটাল প্রজেক্টর ও অডিও সিস্টেম।' : 'Full HD high-definition projection systems with crisp audio.',
              icon: Video,
              color: 'blue'
            },
            {
              title: language === 'bn' ? 'কম্পিউটার ও আইসিটি ল্যাব' : 'Modern ICT Computer Lab',
              desc: language === 'bn' ? 'উচ্চগতির ব্রডব্যান্ড ইন্টারনেটসহ আধুনিক কম্পিউটার সুবিধা।' : 'High-speed broadband workstations for programming and digital skills.',
              icon: Laptop,
              color: 'emerald'
            },
            {
              title: language === 'bn' ? 'ব্যবহারিক বিজ্ঞানাগার' : 'Practical Science Labs',
              desc: language === 'bn' ? 'পদার্থ, রসায়ন ও জীববিজ্ঞানের সুসজ্জিত যন্ত্রপাতি ও সুরক্ষা।' : 'Hands-on physics, chemistry, and biology experimental stations.',
              icon: Cpu,
              color: 'amber'
            },
            {
              title: language === 'bn' ? 'ভিজ্যুয়াল কন্টেন্ট লাইব্রেরি' : 'Visual Learning Suite',
              desc: language === 'bn' ? 'অ্যানিমেটেড লেসন, সিমুলেশন ও বৈজ্ঞানিক তথ্যচিত্র।' : '3D scientific animations, simulations, and documentary archives.',
              icon: Sparkles,
              color: 'purple'
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

        {/* Deep Dive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <Monitor size={24} className="text-blue-600" />
              {language === 'bn' ? 'ডিজিটাল ক্লাসরুমের সুবিধাসমূহ' : 'Smart Learning Advantages'}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {language === 'bn' 
                ? 'বইয়ের কঠিন বিষয়গুলো যখন প্রজেক্টরের পর্দায় থ্রি-ডি অ্যানিমেশন ও ভিডিওর মাধ্যমে উপস্থাপন করা হয়, তখন শিক্ষার্থীরা সহজে ও আনন্দের সাথে শিখতে পারে।' 
                : 'Abstract concepts in physics, biology, and mathematics are brought to life through rich 3D animations, interactive simulations, and real-world case studies.'}
            </p>

            <div className="space-y-3 pt-2">
              {[
                language === 'bn' ? 'ভিজ্যুয়াল লার্নিংয়ের মাধ্যমে দ্রুত ও দীর্ঘস্থায়ী শিখন' : 'Faster concept retention through audio-visual engagement',
                language === 'bn' ? 'পাওয়ারপয়েন্ট ও ডিজিটাল কনটেন্ট ভিত্তিক আকর্ষণীয় পাঠ' : 'Digital slide decks and multimedia curriculum modules',
                language === 'bn' ? 'শিক্ষার্থীদের সরাসরি প্রেজেন্টেশন ও প্রযুক্তি দক্ষতা বৃদ্ধি' : 'Student-led presentations fostering public speaking & tech confidence',
                language === 'bn' ? 'সার্বক্ষণিক বিদ্যুৎ ও নিরবচ্ছিন্ন ব্যাকআপ সুবিধা' : 'Uninterrupted power supply (UPS) and backup generator infrastructure',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-400 bg-blue-900/60 px-3 py-1 rounded-full inline-block">
                STEM & Robotics
              </span>
              <h3 className="text-2xl font-extrabold leading-tight">
                {language === 'bn' ? 'ভবিষ্যতের উদ্ভাবক তৈরিতে এস ও এস স্কুল' : 'Nurturing Future Technologists & Innovators'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'bn' 
                  ? 'আমরা শিক্ষার্থীদের শুধুমাত্র কম্পিউটার ব্যবহার শেখাই না, বরং প্রোগ্রামিং, কোডিং ও বিজ্ঞান প্রজেক্ট তৈরির মাধ্যমে সৃজনশীল চিন্তার বিকাশ ঘটাই।' 
                  : 'Beyond basic digital literacy, our ICT curriculum introduces students to logical thinking, coding foundations, and hands-on science fair projects.'}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-md cursor-pointer"
              >
                <span>{language === 'bn' ? 'ল্যাব ও ক্লাসরুমের ছবি দেখুন' : 'View Lab Gallery'}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/academic"
                className="text-xs font-bold text-slate-300 hover:text-white underline transition"
              >
                {language === 'bn' ? 'একাডেমিক কারিকুলাম' : 'Academic Curriculum'}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SmartClassrooms;
