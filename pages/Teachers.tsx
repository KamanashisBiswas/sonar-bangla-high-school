import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem 
} from '../components/ui/MotionComponents';
import { 
  GraduationCap, Briefcase, Mail, Phone, BookOpen, 
  FlaskConical, Binary, Atom, Calculator, Laptop, Users, X,
  User, Star, MapPin, Clock, Award, Home
} from 'lucide-react';

const Teachers: React.FC = () => {
  const navigate = useNavigate();
  const { teachers, staff } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);

  // Helper to pick subject icon
  const getSubjectIcon = (subject: string) => {
    if (subject.includes('রসায়ন') || subject.includes('Chemistry') || subject.includes('বিজ্ঞান') || subject.includes('Science')) {
      return <FlaskConical size={12} className="text-emerald-700" />;
    }
    if (subject.includes('ইংরেজি') || subject.includes('English') || subject.includes('বাংলা') || subject.includes('Bangla') || subject.includes('সাহিত্য')) {
      return <BookOpen size={12} className="text-sky-700" />;
    }
    if (subject.includes('গণিত') || subject.includes('Math')) {
      return <Calculator size={12} className="text-amber-700" />;
    }
    if (subject.includes('পদার্থ') || subject.includes('Physics')) {
      return <Atom size={12} className="text-purple-700" />;
    }
    if (subject.includes('আইসিটি') || subject.includes('ICT') || subject.includes('কম্পিউটার') || subject.includes('প্রযুক্তি')) {
      return <Laptop size={12} className="text-teal-700" />;
    }
    return <GraduationCap size={12} className="text-emerald-700" />;
  };

  // 8 Teachers Dataset (Supporting BN / EN)
  const defaultTeachers = [
    {
      id: '1',
      nameBn: 'ইন্দ্রজিৎ কুমার মণ্ডল',
      nameEn: 'Indrajit Kumar Mondal',
      designationBn: 'সহকারী শিক্ষক',
      designationEn: 'Assistant Teacher',
      subjectBn: 'রসায়ন / বিজ্ঞান',
      subjectEn: 'Chemistry / Science',
      qualifications: 'M.Sc (Chemistry), B.Ed',
      image: 'https://soshgskhulna.edu.bd/media/181/Picture_PP.jpg',
    },
    {
      id: '2',
      nameBn: 'মোসাম্মৎ রেহানা পারভীন',
      nameEn: 'Mst. Rehana Parveen',
      designationBn: 'সহকারী অধ্যাপিকা',
      designationEn: 'Assistant Professor',
      subjectBn: 'ইংরেজি',
      subjectEn: 'English',
      qualifications: 'MA (English), M.Ed',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: '3',
      nameBn: 'মোঃ জহিরুল হক',
      nameEn: 'Md. Zahirul Haque',
      designationBn: 'সিনিয়র শিক্ষক',
      designationEn: 'Senior Teacher',
      subjectBn: 'গণিত ও উচ্চতর গণিত',
      subjectEn: 'General & Higher Math',
      qualifications: 'M.Sc (Mathematics), B.Ed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
    },
    {
      id: '4',
      nameBn: 'তানজিলা রহমান',
      nameEn: 'Tanzila Rahman',
      designationBn: 'সিনিয়র শিক্ষক',
      designationEn: 'Senior Teacher',
      subjectBn: 'পদার্থবিজ্ঞান',
      subjectEn: 'Physics',
      qualifications: 'M.Sc (Physics), B.Ed',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80',
    },
    {
      id: '5',
      nameBn: 'আব্দুল করিম শেখ',
      nameEn: 'Abdul Karim Sheikh',
      designationBn: 'সহকারী শিক্ষক',
      designationEn: 'Assistant Teacher',
      subjectBn: 'বাংলা সাহিত্য',
      subjectEn: 'Bangla Literature',
      qualifications: 'MA (Bangla), B.Ed',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80',
    },
    {
      id: '6',
      nameBn: 'সুবর্ণা দাস',
      nameEn: 'Subarna Das',
      designationBn: 'সহকারী শিক্ষক',
      designationEn: 'Assistant Teacher',
      subjectBn: 'জীববিজ্ঞান ও পরিবেশ',
      subjectEn: 'Biology & Environment',
      qualifications: 'M.Sc (Botany)',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&fit=crop&q=80',
    },
    {
      id: '7',
      nameBn: 'মাওলানা মোঃ সাইফুল ইসলাম',
      nameEn: 'Mawlana Md. Saiful Islam',
      designationBn: 'সহকারী শিক্ষক',
      designationEn: 'Assistant Teacher',
      subjectBn: 'ইসলাম ও নৈতিক শিক্ষা',
      subjectEn: 'Islamic & Moral Studies',
      qualifications: 'MA (Islamic Studies)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80',
    },
    {
      id: '8',
      nameBn: 'প্রকৌশলী অমিত রায়',
      nameEn: 'Engr. Amit Roy',
      designationBn: 'সহকারী শিক্ষক (আইসিটি)',
      designationEn: 'Assistant Teacher (ICT)',
      subjectBn: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
      subjectEn: 'Information Tech (ICT)',
      qualifications: 'B.Sc in CSE',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80',
    },
  ];

  // 4 Administrative Staff Dataset (Rich meaningful institutional data for BN & EN)
  const defaultStaff = [
    {
      id: 'staff-1',
      nameBn: 'মোঃ রফিকুল ইসলাম',
      nameEn: 'Md. Rafiqul Islam',
      designationBn: 'অফিস সুপারিনটেনডেন্ট',
      designationEn: 'Office Superintendent',
      departmentBn: 'প্রশাসনিক ও সাধারণ শাখা',
      departmentEn: 'General Administration',
      qualifications: 'Master of Public Administration (MPA), B.A (Hons)',
      responsibilitiesBn: 'অফিস প্রশাসন, শিক্ষার্থী নথিপত্র সংরক্ষণ, শিক্ষা বোর্ড সমন্বয় ও সরকারি পরিপত্র বাস্তবায়ন।',
      responsibilitiesEn: 'General office management, student registry, education board liaison, official circulars',
      bioBn: 'বিদ্যালয়ের সার্বিক দাপ্তরিক কার্যক্রম, শিক্ষার্থী ও শিক্ষক নথিপত্র সংরক্ষণ ও প্রাতিষ্ঠানিক সমন্বয়ে নিবেদিত কর্মকর্তা।',
      bioEn: 'Dedicated administrative officer managing institutional records, board coordination, student documentation, and office operations.',
      experience: '12+',
      roomBn: 'প্রধান প্রশাসনিক দপ্তর, নিচতলা',
      roomEn: 'Main Admin Office, Ground Floor',
      email: 'office.super@sos-bangladesh.org',
      phone: '01712-112233',
      hoursBn: 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০',
      hoursEn: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80',
    },
    {
      id: 'staff-2',
      nameBn: 'সুমাইয়া আক্তার',
      nameEn: 'Sumaiya Akter',
      designationBn: 'হিসাবরক্ষণ কর্মকর্তা',
      designationEn: 'Senior Accountant',
      departmentBn: 'অর্থ ও হিসাব শাখা',
      departmentEn: 'Finance & Accounts',
      qualifications: 'M.Com / MBA in Accounting & Finance',
      responsibilitiesBn: 'টিউশন ফি সংগ্রহ, শিক্ষক-কর্মচারী বেতন-ভাতা, ব্যাংক হিসাব ও বার্ষিক অডিট ব্যবস্থাপনা।',
      responsibilitiesEn: 'Tuition fee collection, institutional payroll, bank reconciliation, financial audit compliance',
      bioBn: 'বিদ্যালয়ের আর্থিক স্বচ্ছতা, ডিজিটাল ফি পেমেন্ট ও নিয়মতান্ত্রিক হিসাব সংরক্ষণে দায়িত্বরত হিসাববিদ।',
      bioEn: 'Finance professional managing institutional budgeting, digital fee collection, payroll, and statutory auditing.',
      experience: '08+',
      roomBn: 'হিসাব শাখা, প্রশাসনিক ভবন',
      roomEn: 'Accounts Office, Admin Building',
      email: 'accounts@sos-bangladesh.org',
      phone: '01713-223344',
      hoursBn: 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০',
      hoursEn: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80',
    },
    {
      id: 'staff-3',
      nameBn: 'মোঃ হাসানুজ্জামান',
      nameEn: 'Md. Hasanuzzaman',
      designationBn: 'গ্রন্থাগারিক ও তথ্য কর্মকর্তা',
      designationEn: 'Head Librarian',
      departmentBn: 'কেন্দ্রীয় পাঠাগার ও তথ্য সেবা',
      departmentEn: 'Central Library & Resources',
      qualifications: 'MA in Information Science & Library Management (ISLM)',
      responsibilitiesBn: 'ডিজিটাল ক্যাটালগিং, বই ইস্যু ও সংরক্ষণ, পাঠকক্ষ শৃঙ্খলা ও রেফারেন্স সেবা।',
      responsibilitiesEn: 'Digital cataloging, Koha library system, book circulation, reference service for students & faculty',
      bioBn: 'শিক্ষার্থীদের পড়ার অভ্যাস তৈরি ও সমৃদ্ধ জ্ঞানভাণ্ডার পরিচালনায় দায়িত্বরত অভিজ্ঞ গ্রন্থাগারিক।',
      bioEn: 'Information specialist managing library automation, cataloging, academic journals, and modern reading room facilities.',
      experience: '10+',
      roomBn: 'কেন্দ্রীয় লাইব্রেরি, ৩য় তলা',
      roomEn: 'Central Library, 3rd Floor',
      email: 'library@sos-bangladesh.org',
      phone: '01714-334455',
      hoursBn: 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০',
      hoursEn: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80',
    },
    {
      id: 'staff-4',
      nameBn: 'রাকিবুল ইসলাম',
      nameEn: 'Rakibul Islam',
      designationBn: 'আইসিটি সহকারী ও নেটওয়ার্ক ইনচার্জ',
      designationEn: 'ICT Assistant & Network In-charge',
      departmentBn: 'আইসিটি ও ডিজিটাল সার্ভিসেস',
      departmentEn: 'ICT & Digital Services',
      qualifications: 'Diploma / B.Sc in CSE, CCNA, Hardware & Networking',
      responsibilitiesBn: 'কম্পিউটার ল্যাব রক্ষণাবেক্ষণ, স্কুল ওয়াইফাই ও ওয়েবসাইট, মাল্টিমিডিয়া ক্লাসরুম সাপোর্ট।',
      responsibilitiesEn: 'Computer lab management, smart classroom AV setup, campus network administration, hardware troubleshooting',
      bioBn: 'স্মার্ট ক্লাসরুম, কম্পিউটার ল্যাব ও প্রাতিষ্ঠানিক ডিজিটাল সেবা পরিচালনায় নিবেদিত প্রযুক্তি সহকারী।',
      bioEn: 'Technology specialist ensuring smooth operations of digital classrooms, computer laboratories, campus LAN, and institutional IT systems.',
      experience: '06+',
      roomBn: 'কম্পিউটার ল্যাব ১, আইসিটি ব্লক',
      roomEn: 'Computer Lab 1, ICT Block',
      email: 'ict.support@sos-bangladesh.org',
      phone: '01715-445566',
      hoursBn: 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০',
      hoursEn: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80',
    },
  ];

  const teacherList = teachers && teachers.length >= 8 ? teachers.map((t, idx) => ({
    ...t,
    name: language === 'bn' ? t.name : (defaultTeachers[idx]?.nameEn || t.name),
    designation: language === 'bn' ? t.designation : (defaultTeachers[idx]?.designationEn || t.designation),
    subject: language === 'bn' ? t.subject : (defaultTeachers[idx]?.subjectEn || t.subject),
    qualifications: t.qualifications || defaultTeachers[idx]?.qualifications || 'M.A / M.Sc, B.Ed',
  })) : defaultTeachers.map(t => ({
    id: t.id,
    name: language === 'bn' ? t.nameBn : t.nameEn,
    designation: language === 'bn' ? t.designationBn : t.designationEn,
    subject: language === 'bn' ? t.subjectBn : t.subjectEn,
    qualifications: t.qualifications,
    image: t.image,
  }));

  const staffList = staff && staff.length >= 4 ? staff.map((s, idx) => ({
    ...s,
    id: s.id || defaultStaff[idx]?.id,
    name: language === 'bn' ? s.name : (defaultStaff[idx]?.nameEn || s.name),
    designation: language === 'bn' ? s.designation : (defaultStaff[idx]?.designationEn || s.designation),
    department: language === 'bn' ? (defaultStaff[idx]?.departmentBn || 'প্রশাসনিক শাখা') : (defaultStaff[idx]?.departmentEn || 'Administrative Affairs'),
    qualifications: defaultStaff[idx]?.qualifications || 'Bachelor / Master Degree',
    responsibilities: language === 'bn' ? (defaultStaff[idx]?.responsibilitiesBn || 'দাপ্তরিক ও প্রশাসনিক দায়িত্ব পালন') : (defaultStaff[idx]?.responsibilitiesEn || 'Administrative & operational support'),
    bio: language === 'bn' ? (defaultStaff[idx]?.bioBn || 'বিদ্যালয়ের প্রশাসনিক কার্যক্রমে নিবেদিতপ্রাণ কর্মকর্তা।') : (defaultStaff[idx]?.bioEn || 'Dedicated staff member contributing to smooth school operations.'),
    experience: defaultStaff[idx]?.experience || '08+',
    room: language === 'bn' ? (defaultStaff[idx]?.roomBn || 'প্রশাসনিক ভবন') : (defaultStaff[idx]?.roomEn || 'Admin Building'),
    hours: language === 'bn' ? (defaultStaff[idx]?.hoursBn || 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০') : (defaultStaff[idx]?.hoursEn || 'Sunday - Thursday: 8:00 AM - 4:00 PM'),
    email: s.email || defaultStaff[idx]?.email || 'office@sos-bangladesh.org',
    phone: s.phone || defaultStaff[idx]?.phone || '01712-112233',
  })) : defaultStaff.map(s => ({
    id: s.id,
    name: language === 'bn' ? s.nameBn : s.nameEn,
    designation: language === 'bn' ? s.designationBn : s.designationEn,
    department: language === 'bn' ? s.departmentBn : s.departmentEn,
    qualifications: s.qualifications,
    responsibilities: language === 'bn' ? s.responsibilitiesBn : s.responsibilitiesEn,
    bio: language === 'bn' ? s.bioBn : s.bioEn,
    experience: s.experience,
    room: language === 'bn' ? s.roomBn : s.roomEn,
    hours: language === 'bn' ? s.hoursBn : s.hoursEn,
    email: s.email,
    phone: s.phone,
    image: s.image,
  }));

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (MATCHING REFERENCE IMAGE 100%) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 mb-8">
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
              <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {language === 'bn' ? 'শিক্ষক ও কর্মচারী' : 'Faculty & Staff'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Users size={13} className="text-emerald-700" />
              <span>{language === 'bn' ? 'শিক্ষক ও কর্মকর্তা ডিরেক্টরি' : 'FACULTY & STAFF DIRECTORY'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {language === 'bn' ? 'শিক্ষক ও কর্মকর্তা পরিচিতি' : 'Faculty & Staff Directory'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {language === 'bn' 
                ? 'আমাদের অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষক ও প্রশাসনিক কর্মকর্তা দল, যারা শিক্ষার্থীদের ভবিষ্যৎ বিনির্মাণে একযোগে কাজ করছেন।' 
                : 'Meet our experienced and dedicated teaching and administrative team who work together for excellence.'}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 2. TEACHING FACULTY SECTION (4-Column Grid) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="flex items-center gap-2.5 mb-5">
            <GraduationCap className="text-emerald-700" size={22} />
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {language === 'bn' ? 'শিক্ষকমণ্ডলী' : 'Teaching Faculty'}
            </h2>
            <span className="bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {language === 'bn' ? `${toBanglaNum(teacherList.length)} জন শিক্ষক` : `${teacherList.length} Members`}
            </span>
          </div>

          <ScrollStaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {teacherList.map((teacher) => (
              <ScrollStaggerItem 
                key={teacher.id} 
                onClick={() => setSelectedPerson({ ...teacher, roleType: 'teacher' })}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
              >
                {/* Top Info with Photo */}
                <div className="flex items-start gap-3.5">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-14 h-16 sm:w-16 sm:h-18 rounded-xl object-cover shadow-2xs border border-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="min-w-0 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate leading-tight group-hover:text-emerald-700 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-semibold truncate">
                      {teacher.designation}
                    </p>
                    <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-[10px] text-slate-600 font-medium max-w-full">
                      {getSubjectIcon(teacher.subject)}
                      <span className="truncate">{language === 'bn' ? `বিষয়: ${teacher.subject}` : `Subject: ${teacher.subject}`}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Qualifications */}
                <div className="pt-2.5 mt-3 border-t border-slate-100 text-[10px] text-slate-500 font-medium truncate flex items-center justify-between">
                  <span className="truncate"><strong className="text-slate-700">{language === 'bn' ? 'যোগ্যতা:' : 'Qualifications:'}</strong> {teacher.qualifications}</span>
                  <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === 'bn' ? 'বিস্তারিত' : 'View'}
                  </span>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </ScrollReveal>

        {/* 3. ADMINISTRATIVE STAFF SECTION (4-Column Grid) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="flex items-center gap-2.5 mb-5">
            <Briefcase className="text-emerald-700" size={22} />
            <h2 className="text-lg sm:text-xl font-black text-slate-900">
              {language === 'bn' ? 'প্রশাসনিক কর্মকর্তা ও কর্মচারী' : 'Administrative Staff'}
            </h2>
            <span className="bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              {language === 'bn' ? `${toBanglaNum(staffList.length)} জন কর্মকর্তা` : `${staffList.length} Members`}
            </span>
          </div>

          <ScrollStaggerContainer staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {staffList.map((member) => (
              <ScrollStaggerItem 
                key={member.id} 
                onClick={() => setSelectedPerson({ ...member, roleType: 'staff' })}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex items-start gap-3.5 cursor-pointer group"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-14 h-16 sm:w-16 sm:h-18 rounded-xl object-cover shadow-2xs border border-slate-100 flex-shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate leading-tight group-hover:text-emerald-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-emerald-700 font-semibold truncate">
                    {member.designation}
                  </p>
                  
                  {/* Contact Details */}
                  <div className="space-y-0.5 pt-1">
                    {member.email && (
                      <p className="text-[10px] text-slate-500 flex items-center gap-1.5 truncate">
                        <Mail size={10} className="text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </p>
                    )}
                    {member.phone && (
                      <p className="text-[10px] text-slate-500 flex items-center gap-1.5 font-mono">
                        <Phone size={10} className="text-emerald-600 flex-shrink-0" />
                        <span>{toBanglaNum(member.phone)}</span>
                      </p>
                    )}
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </ScrollReveal>

      </div>

      {/* 4. DETAIL MODAL POPUP (ANIMATED WITH FRAMER MOTION) */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs p-3 sm:p-4 md:p-6 flex min-h-full items-center justify-center"
            onClick={() => setSelectedPerson(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="bg-white rounded-3xl sm:rounded-[32px] max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-100 relative my-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Top Right Circular Close Button */}
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition cursor-pointer z-20 shadow-xs"
            >
              <X size={16} />
            </button>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-5 sm:p-7 md:p-8 flex-1">
              {/* 2-Column Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Left Column: Photo, Role, Bio, Stats */}
                <div className="md:col-span-5 space-y-4">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-100 bg-slate-50 w-full">
                    <img 
                      src={selectedPerson.image} 
                      alt={selectedPerson.name} 
                      className="w-full h-auto aspect-[3/3.8] object-cover object-top rounded-2xl sm:rounded-3xl"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
                      {selectedPerson.roleType === 'teacher' ? (
                        <>
                          <GraduationCap size={13} className="text-emerald-700" />
                          <span>{language === 'bn' ? 'শিক্ষকমণ্ডলী' : 'TEACHING FACULTY'}</span>
                        </>
                      ) : (
                        <>
                          <Briefcase size={13} className="text-emerald-700" />
                          <span>{language === 'bn' ? 'প্রশাসনিক কর্মকর্তা' : 'ADMINISTRATIVE STAFF'}</span>
                        </>
                      )}
                    </div>

                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {selectedPerson.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">
                        {selectedPerson.designation}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                        {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                      {selectedPerson.bio || (language === 'bn' 
                        ? 'বিদ্যালয়ের সার্বিক কার্যক্রম ও মানসম্মত সেবা নিশ্চিতকরণে নিবেদিতপ্রাণ কর্মকর্তা।'
                        : 'Dedicated professional ensuring excellence in school operations, management, and institutional services.')}
                    </p>
                  </div>

                  {/* 2 Mini Stat Badges */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                    <div className="bg-emerald-50/60 border border-emerald-100/90 rounded-2xl p-2.5 sm:p-3 text-center">
                      <Users size={16} className="text-emerald-700 mx-auto mb-1" />
                      <span className="text-base sm:text-lg font-black text-slate-900 block leading-tight">
                        {toBanglaNum(selectedPerson.experience || '08+')}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        {language === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}
                      </span>
                    </div>

                    <div className="bg-amber-50/60 border border-amber-100/90 rounded-2xl p-2.5 sm:p-3 text-center">
                      <Star size={16} className="text-amber-600 mx-auto mb-1 fill-amber-500" />
                      <span className="text-base sm:text-lg font-black text-slate-900 block leading-tight">
                        {selectedPerson.roleType === 'teacher' 
                          ? toBanglaNum(selectedPerson.id === '1' ? '350+' : selectedPerson.id === '3' ? '420+' : '120+') 
                          : (language === 'bn' ? 'সক্রিয়' : 'Active')}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                        {selectedPerson.roleType === 'teacher' 
                          ? (language === 'bn' ? 'শিক্ষার্থী' : 'Mentored')
                          : (language === 'bn' ? 'স্ট্যাটাস' : 'Status')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Professional / Administrative Information Stack */}
                <div className="md:col-span-7 space-y-2.5 sm:space-y-3">
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-slate-900">
                      {selectedPerson.roleType === 'teacher' 
                        ? (language === 'bn' ? 'পেশাগত তথ্য' : 'Professional Information')
                        : (language === 'bn' ? 'প্রশাসনিক ও দাপ্তরিক তথ্য' : 'Administrative & Official Information')}
                    </h3>
                    <div className="w-10 sm:w-12 h-1 bg-emerald-600 rounded-full mt-1 mb-3" />
                  </div>

                  {/* Info Card 1: Teaching Subject OR Assigned Department */}
                  {selectedPerson.roleType === 'teacher' ? (
                    <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                        <BookOpen size={16} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'bn' ? 'পাঠদানের বিষয়' : 'TEACHING SUBJECT'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
                          {selectedPerson.subject}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={16} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {language === 'bn' ? 'দায়িত্বপ্রাপ্ত বিভাগ' : 'ASSIGNED DEPARTMENT'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
                          {selectedPerson.department || (language === 'bn' ? 'সাধারণ প্রশাসন' : 'General Administration')}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Info Card 2: Educational Qualifications */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'EDUCATIONAL QUALIFICATIONS'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-snug">
                        {selectedPerson.qualifications || 'Graduate / Postgraduate Degree'}
                      </span>
                    </div>
                  </div>

                  {/* Info Card 3: Professional Qualifications OR Key Responsibilities */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Award size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {selectedPerson.roleType === 'teacher'
                          ? (language === 'bn' ? 'পেশাগত যোগ্যতা ও প্রশিক্ষণ' : 'PROFESSIONAL QUALIFICATIONS')
                          : (language === 'bn' ? 'মূল দায়িত্ব ও কর্মক্ষেত্র' : 'KEY RESPONSIBILITIES')}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-snug">
                        {selectedPerson.roleType === 'teacher' 
                          ? (language === 'bn' ? 'বি.এড, আধুনিক শিক্ষাদান পদ্ধতিতে বিশেষ প্রশিক্ষণ' : 'B.Ed, Training in Modern Teaching Methods')
                          : (selectedPerson.responsibilities || (language === 'bn' ? 'দাপ্তরিক ও প্রাতিষ্ঠানিক সেবা প্রদান' : 'Administrative and operational service management'))}
                      </span>
                    </div>
                  </div>

                  {/* Info Card 4: Email Address */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'ইমেইল ঠিকানা' : 'EMAIL ADDRESS'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
                        {selectedPerson.email || 'info@soshgskhulna.edu.bd'}
                      </span>
                    </div>
                  </div>

                  {/* Info Card 5: Contact Phone */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'যোগাযোগের ফোন নম্বর' : 'CONTACT PHONE'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 font-mono">
                        {toBanglaNum(selectedPerson.phone || '024-77726775')}
                      </span>
                    </div>
                  </div>

                  {/* Info Card 6: Office Location */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'অফিস অবস্থান' : 'OFFICE LOCATION'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                        {selectedPerson.room || (language === 'bn' ? 'প্রশাসনিক ভবন' : 'Admin Building')}
                      </span>
                    </div>
                  </div>

                  {/* Info Card 7: Office Hours */}
                  <div className="bg-slate-50/80 rounded-xl sm:rounded-2xl p-3 border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'অফিস সময়' : 'OFFICE HOURS'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                        {selectedPerson.hours || (language === 'bn' ? 'রবিবার - বৃহস্পতিবার: সকাল ৮:০০ - বিকাল ৪:০০' : 'Sunday - Thursday: 8:00 AM - 4:00 PM')}
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Fixed Bottom Modal Action Bar (Always Visible & Accessible) */}
            <div className="px-5 py-3.5 sm:px-7 sm:py-4 bg-slate-50/90 border-t border-slate-100 flex items-center justify-end gap-3 flex-shrink-0">
              
              {/* Profile Button */}
              <button
                onClick={() => {
                  const targetId = selectedPerson.id || '1';
                  setSelectedPerson(null);
                  navigate(`/teachers/${targetId}`);
                }}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <User size={15} className="text-slate-600" />
                <span>{language === 'bn' ? 'প্রোফাইল দেখুন' : 'Profile'}</span>
              </button>

              {/* Close Profile Button */}
              <button
                onClick={() => setSelectedPerson(null)}
                className="bg-[#00704A] hover:bg-[#005a3c] text-white font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <X size={15} />
                <span>{language === 'bn' ? 'প্রোফাইল বন্ধ করুন' : 'Close Profile'}</span>
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
};

export default Teachers;
