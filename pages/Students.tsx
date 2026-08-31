import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Search, GraduationCap, Eye, X, Droplet, Layers, 
  Briefcase, ArrowLeft, ChevronDown, UserCheck, Phone, 
  Calendar, CheckCircle2, Award, Home
} from 'lucide-react';

const Students: React.FC = () => {
  const { students } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [selectedClass, setSelectedClass] = useState('10');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // Comprehensive Students Database covering Class 10 (10 students), Class 9, 8, 7, 6
  const defaultStudents = [
    // --- CLASS 10 (Default 10 students matching reference image) ---
    {
      id: '1',
      roll: 101,
      nameBn: 'আব্দুল্লাহ আল মামুন',
      nameEn: 'Abdullah Al Mamun',
      class: '10',
      section: 'A',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'A+',
      fatherNameBn: 'মোঃ রফিকুল ইসলাম',
      fatherNameEn: 'Md. Rafiqul Islam',
      motherNameBn: 'মোসাম্মৎ মমতাজ বেগম',
      motherNameEn: 'Mst. Momtaz Begum',
      guardianPhone: '01712-334455',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&fit=crop&q=80',
      dob: '2008-04-12',
      addressBn: 'গল্লামারী, খুলনা',
      addressEn: 'Gollamari, Khulna',
      attendance: '98%',
      gpa: '5.00'
    },
    {
      id: '2',
      roll: 102,
      nameBn: 'সুমাইয়া আক্তার',
      nameEn: 'Sumaiya Akter',
      class: '10',
      section: 'A',
      groupBn: 'ব্যবসায় শিক্ষা',
      groupEn: 'Business Studies',
      bloodGroup: 'B+',
      fatherNameBn: 'আব্দুল কাদের',
      fatherNameEn: 'Abdul Quader',
      motherNameBn: 'সুফিয়া খাতুন',
      motherNameEn: 'Sufia Khatun',
      guardianPhone: '01713-445566',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&fit=crop&q=80',
      dob: '2008-08-20',
      addressBn: 'সোনাডাঙ্গা, খুলনা',
      addressEn: 'Sonadanga, Khulna',
      attendance: '96%',
      gpa: '4.85'
    },
    {
      id: '3',
      roll: 103,
      nameBn: 'রাকিব হাসান',
      nameEn: 'Rakib Hasan',
      class: '10',
      section: 'A',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'O+',
      fatherNameBn: 'মোঃ আসাদুজ্জামান',
      fatherNameEn: 'Md. Asaduzzaman',
      motherNameBn: 'নাজমুন নাহার',
      motherNameEn: 'Najmun Nahar',
      guardianPhone: '01714-556677',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&fit=crop&q=80',
      dob: '2008-02-15',
      addressBn: 'বয়রা, খুলনা',
      addressEn: 'Boyra, Khulna',
      attendance: '95%',
      gpa: '5.00'
    },
    {
      id: '4',
      roll: 104,
      nameBn: 'নুসরাত জাহান',
      nameEn: 'Nusrat Jahan',
      class: '10',
      section: 'B',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'AB+',
      fatherNameBn: 'মাহমুদুল হাসান',
      fatherNameEn: 'Mahmudul Hasan',
      motherNameBn: 'রুকসানা পারভীন',
      motherNameEn: 'Ruksana Parveen',
      guardianPhone: '01715-667788',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&fit=crop&q=80',
      dob: '2008-07-10',
      addressBn: 'খালিশপুর, খুলনা',
      addressEn: 'Khalishpur, Khulna',
      attendance: '97%',
      gpa: '4.90'
    },
    {
      id: '5',
      roll: 105,
      nameBn: 'মেহেদী হাসান',
      nameEn: 'Mehedi Hasan',
      class: '10',
      section: 'B',
      groupBn: 'মানবিক',
      groupEn: 'Humanities',
      bloodGroup: 'A+',
      fatherNameBn: 'মোঃ শাহ আলম',
      fatherNameEn: 'Md. Shah Alam',
      motherNameBn: 'শাহনাজ পারভীন',
      motherNameEn: 'Shahnaz Parveen',
      guardianPhone: '01716-778899',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&fit=crop&q=80',
      dob: '2008-01-25',
      addressBn: 'দৌলতপুর, খুলনা',
      addressEn: 'Daulatpur, Khulna',
      attendance: '94%',
      gpa: '4.75'
    },
    {
      id: '6',
      roll: 106,
      nameBn: 'ফাতেমা তুজ জোহরা',
      nameEn: 'Fatema Tuz Zohra',
      class: '10',
      section: 'A',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'O+',
      fatherNameBn: 'আফজাল হোসেন',
      fatherNameEn: 'Afzal Hossain',
      motherNameBn: 'বিলকিস আক্তার',
      motherNameEn: 'Bilkis Akter',
      guardianPhone: '01717-889900',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&fit=crop&q=80',
      dob: '2008-06-18',
      addressBn: 'মুজগুন্নী, খুলনা',
      addressEn: 'Muzgunni, Khulna',
      attendance: '99%',
      gpa: '5.00'
    },
    {
      id: '7',
      roll: 107,
      nameBn: 'সজীব আহমেদ',
      nameEn: 'Sajib Ahmed',
      class: '10',
      section: 'B',
      groupBn: 'ব্যবসায় শিক্ষা',
      groupEn: 'Business Studies',
      bloodGroup: 'B+',
      fatherNameBn: 'মোঃ হারুনুর রশিদ',
      fatherNameEn: 'Md. Harunur Rashid',
      motherNameBn: 'ফরিদা ইয়াসমিন',
      motherNameEn: 'Farida Yasmin',
      guardianPhone: '01718-990011',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&fit=crop&q=80',
      dob: '2008-11-05',
      addressBn: 'রূপসা, খুলনা',
      addressEn: 'Rupsha, Khulna',
      attendance: '93%',
      gpa: '4.60'
    },
    {
      id: '8',
      roll: 108,
      nameBn: 'আকিফুল সুলতানা',
      nameEn: 'Akiful Sultana',
      class: '10',
      section: 'A',
      groupBn: 'মানবিক',
      groupEn: 'Humanities',
      bloodGroup: 'A-',
      fatherNameBn: 'সোহেল রানা',
      fatherNameEn: 'Sohel Rana',
      motherNameBn: 'তাসলিমা বেগম',
      motherNameEn: 'Taslima Begum',
      guardianPhone: '01719-001122',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&fit=crop&q=80',
      dob: '2008-03-30',
      addressBn: 'শিরোমণি, খুলনা',
      addressEn: 'Shiromoni, Khulna',
      attendance: '96%',
      gpa: '4.80'
    },
    {
      id: '9',
      roll: 109,
      nameBn: 'তানভীর রহমান',
      nameEn: 'Tanvir Rahman',
      class: '10',
      section: 'B',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'AB+',
      fatherNameBn: 'তারেক রহমান',
      fatherNameEn: 'Tarek Rahman',
      motherNameBn: 'লতিফা খাতুন',
      motherNameEn: 'Latifa Khatun',
      guardianPhone: '01720-112233',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&fit=crop&q=80',
      dob: '2008-09-14',
      addressBn: 'ফুলতলা, খুলনা',
      addressEn: 'Phultala, Khulna',
      attendance: '95%',
      gpa: '4.70'
    },
    {
      id: '10',
      roll: 110,
      nameBn: 'জান্নাতুল ফেরদৌস',
      nameEn: 'Jannatul Ferdous',
      class: '10',
      section: 'A',
      groupBn: 'ব্যবসায় শিক্ষা',
      groupEn: 'Business Studies',
      bloodGroup: 'O+',
      fatherNameBn: 'আব্দুস সাত্তার',
      fatherNameEn: 'Abdus Sattar',
      motherNameBn: 'রাবেয়া বেগম',
      motherNameEn: 'Rabeya Begum',
      guardianPhone: '01721-223344',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&fit=crop&q=80',
      dob: '2008-05-22',
      addressBn: 'গল্লামারী, খুলনা',
      addressEn: 'Gollamari, Khulna',
      attendance: '98%',
      gpa: '5.00'
    },

    // --- CLASS 9 (Sample Students) ---
    {
      id: '11',
      roll: 201,
      nameBn: 'তাহমিদ আল হাসিব',
      nameEn: 'Tahmid Al Hasib',
      class: '9',
      section: 'A',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'A+',
      fatherNameBn: 'মোঃ রফিকুল ইসলাম',
      fatherNameEn: 'Md. Rafiqul Islam',
      motherNameBn: 'মোসাম্মৎ মমতাজ বেগম',
      motherNameEn: 'Mst. Momtaz Begum',
      guardianPhone: '01712-334455',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&fit=crop&q=80',
      dob: '2009-04-12',
      addressBn: 'গল্লামারী, খুলনা',
      addressEn: 'Gollamari, Khulna',
      attendance: '97%',
      gpa: '5.00'
    },
    {
      id: '12',
      roll: 202,
      nameBn: 'মারিয়াম আক্তার তানহা',
      nameEn: 'Mariam Akter Tanha',
      class: '9',
      section: 'B',
      groupBn: 'ব্যবসায় শিক্ষা',
      groupEn: 'Business Studies',
      bloodGroup: 'O+',
      fatherNameBn: 'আমিরুল ইসলাম',
      fatherNameEn: 'Amirul Islam',
      motherNameBn: 'তাসমিন আক্তার',
      motherNameEn: 'Tasmin Akter',
      guardianPhone: '01713-778899',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&fit=crop&q=80',
      dob: '2009-07-20',
      addressBn: 'সোনাডাঙ্গা, খুলনা',
      addressEn: 'Sonadanga, Khulna',
      attendance: '95%',
      gpa: '4.80'
    },
    {
      id: '13',
      roll: 203,
      nameBn: 'নাফিস ফুয়াদ',
      nameEn: 'Nafis Fuad',
      class: '9',
      section: 'A',
      groupBn: 'বিজ্ঞান',
      groupEn: 'Science',
      bloodGroup: 'B+',
      fatherNameBn: 'কবির হোসেন',
      fatherNameEn: 'Kabir Hossain',
      motherNameBn: 'নাসরিন সুলতানা',
      motherNameEn: 'Nasrin Sultana',
      guardianPhone: '01714-889900',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&fit=crop&q=80',
      dob: '2009-10-15',
      addressBn: 'খালিশপুর, খুলনা',
      addressEn: 'Khalishpur, Khulna',
      attendance: '96%',
      gpa: '4.90'
    },

    // --- CLASS 8 (Sample Students) ---
    {
      id: '14',
      roll: 301,
      nameBn: 'আফরিন জাহান মৌ',
      nameEn: 'Afrin Jahan Mou',
      class: '8',
      section: 'A',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'AB+',
      fatherNameBn: 'জালাল উদ্দিন',
      fatherNameEn: 'Jalal Uddin',
      motherNameBn: 'শাহনাজ পারভীন',
      motherNameEn: 'Shahnaz Parveen',
      guardianPhone: '01715-112233',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&fit=crop&q=80',
      dob: '2010-03-10',
      addressBn: 'বয়রা, খুলনা',
      addressEn: 'Boyra, Khulna',
      attendance: '99%',
      gpa: '5.00'
    },
    {
      id: '15',
      roll: 302,
      nameBn: 'মাহিন চৌধুরী',
      nameEn: 'Mahin Chowdhury',
      class: '8',
      section: 'B',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'A+',
      fatherNameBn: 'সোহাগ চৌধুরী',
      fatherNameEn: 'Sohag Chowdhury',
      motherNameBn: 'মনিরা বেগম',
      motherNameEn: 'Monira Begum',
      guardianPhone: '01716-223344',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&fit=crop&q=80',
      dob: '2010-08-18',
      addressBn: 'দৌলতপুর, খুলনা',
      addressEn: 'Daulatpur, Khulna',
      attendance: '94%',
      gpa: '4.70'
    },

    // --- CLASS 7 (Sample Students) ---
    {
      id: '16',
      roll: 401,
      nameBn: 'সাদিয়া নূর ইভা',
      nameEn: 'Sadia Noor Eva',
      class: '7',
      section: 'A',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'O+',
      fatherNameBn: 'নুরুল হক',
      fatherNameEn: 'Nurul Haque',
      motherNameBn: 'রেশমা পারভীন',
      motherNameEn: 'Reshma Parveen',
      guardianPhone: '01717-334455',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&fit=crop&q=80',
      dob: '2011-05-12',
      addressBn: 'রূপসা, খুলনা',
      addressEn: 'Rupsha, Khulna',
      attendance: '98%',
      gpa: '4.95'
    },
    {
      id: '17',
      roll: 402,
      nameBn: 'রাফসান আহমেদ',
      nameEn: 'Rafsan Ahmed',
      class: '7',
      section: 'B',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'B+',
      fatherNameBn: 'মিজানুর রহমান',
      fatherNameEn: 'Mijanur Rahman',
      motherNameBn: 'ফারজানা আক্তার',
      motherNameEn: 'Farzana Akter',
      guardianPhone: '01718-445566',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&fit=crop&q=80',
      dob: '2011-11-20',
      addressBn: 'মুজগুন্নী, খুলনা',
      addressEn: 'Muzgunni, Khulna',
      attendance: '96%',
      gpa: '4.80'
    },

    // --- CLASS 6 (Sample Students) ---
    {
      id: '18',
      roll: 501,
      nameBn: 'সামিয়া তাসনিম',
      nameEn: 'Samia Tasnim',
      class: '6',
      section: 'A',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'A+',
      fatherNameBn: 'আনোয়ার হোসেন',
      fatherNameEn: 'Anwar Hossain',
      motherNameBn: 'সুলতানা রাজিয়া',
      motherNameEn: 'Sultana Razia',
      guardianPhone: '01719-556677',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&fit=crop&q=80',
      dob: '2012-02-14',
      addressBn: 'শিরোমণি, খুলনা',
      addressEn: 'Shiromoni, Khulna',
      attendance: '99%',
      gpa: '5.00'
    },
    {
      id: '19',
      roll: 502,
      nameBn: 'আবির হাসান',
      nameEn: 'Abir Hasan',
      class: '6',
      section: 'B',
      groupBn: '-',
      groupEn: '-',
      bloodGroup: 'O+',
      fatherNameBn: 'মুস্তাফিজুর রহমান',
      fatherNameEn: 'Mustafizur Rahman',
      motherNameBn: 'শারমিন আক্তার',
      motherNameEn: 'Sharmin Akter',
      guardianPhone: '01720-667788',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&fit=crop&q=80',
      dob: '2012-08-25',
      addressBn: 'ফুলতলা, খুলনা',
      addressEn: 'Phultala, Khulna',
      attendance: '97%',
      gpa: '4.85'
    }
  ];

  const studentList = defaultStudents.map(s => ({
    id: s.id,
    roll: s.roll,
    name: language === 'bn' ? s.nameBn : s.nameEn,
    class: s.class,
    section: s.section,
    group: language === 'bn' ? s.groupBn : s.groupEn,
    bloodGroup: s.bloodGroup,
    fatherName: language === 'bn' ? s.fatherNameBn : s.fatherNameEn,
    motherName: language === 'bn' ? s.motherNameBn : s.motherNameEn,
    guardianPhone: s.guardianPhone,
    image: s.image,
    dob: s.dob,
    address: language === 'bn' ? s.addressBn : s.addressEn,
    attendance: s.attendance,
    gpa: s.gpa,
  }));

  const filteredStudents = studentList.filter(student => {
    const matchesClass = selectedClass === 'all' || String(student.class).trim() === String(selectedClass).trim();
    const searchLow = searchTerm.toLowerCase().trim();
    if (!searchLow) return matchesClass;
    const matchesSearch = 
      student.name.toLowerCase().includes(searchLow) || 
      String(student.roll).includes(searchLow) ||
      (student.group && student.group !== '-' && student.group.toLowerCase().includes(searchLow));
    return matchesClass && matchesSearch;
  });

  return (
    <div className="bg-[#edf9f3] min-h-screen pb-16 text-slate-800">
      
      {/* 1. HERO SECTION (MATCHING ABOUT US / ADMINISTRATION STANDARD) */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 mb-8">
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
              {language === 'bn' ? 'শিক্ষার্থী' : 'Students'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <GraduationCap size={13} className="text-emerald-700" />
              <span>{language === 'bn' ? 'শিক্ষার্থী ডাটাবেস' : 'STUDENT DIRECTORY'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {language === 'bn' ? 'শিক্ষার্থী ডাটাবেস ও প্রোফাইল' : 'Student Database & Directory'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {language === 'bn' 
                ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনার শিক্ষার্থীদের পূর্ণাঙ্গ তথ্য ও একাডেমিক প্রোফাইল।' 
                : 'Complete academic database and student records of SOS Hermann Gmeiner School Khulna.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 2. FILTER & SEARCH BAR ROW (MATCHING REFERENCE IMAGE) */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Class Dropdown Select Filter */}
          <div className="relative w-full md:w-72">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-2xl text-xs sm:text-sm font-bold text-slate-700 outline-none transition appearance-none cursor-pointer"
            >
              <option value="10">{language === 'bn' ? '১০ম শ্রেণি' : 'Class 10'}</option>
              <option value="9">{language === 'bn' ? '৯ম শ্রেণি' : 'Class 9'}</option>
              <option value="8">{language === 'bn' ? '৮ম শ্রেণি' : 'Class 8'}</option>
              <option value="7">{language === 'bn' ? '৭ম শ্রেণি' : 'Class 7'}</option>
              <option value="6">{language === 'bn' ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
            </select>
            <ChevronDown size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={language === 'bn' ? 'নাম, পদবি বা বিষয় দিয়ে খুঁজুন...' : 'Search by name, roll, or group...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-2xl text-xs sm:text-sm outline-none transition font-medium text-slate-800"
            />
          </div>

        </div>

        {/* 3. STUDENTS TABLE LIST (MATCHING REFERENCE IMAGE 100%) */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 uppercase font-black tracking-wider text-[11px] border-b border-slate-100">
                  <th className="p-4 sm:p-5 pl-6">{language === 'bn' ? 'রোল' : 'Roll'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'শিক্ষার্থী পরিচিতি' : 'Student Info'}</th>
                  <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'শ্রেণি' : 'Class'}</th>
                  <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'বিষয় / বিভাগ' : 'Group'}</th>
                  <th className="p-4 sm:p-5 pr-6 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-slate-400 font-semibold">
                      {language === 'bn' ? 'কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।' : 'No student records found.'}
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                      
                      {/* Roll Column with Green font */}
                      <td className="p-4 sm:p-5 pl-6 font-bold text-emerald-700 text-xs sm:text-sm">
                        #{toBanglaNum(s.roll)}
                      </td>

                      {/* Student Info with Avatar */}
                      <td className="p-4 sm:p-5">
                        <div className="flex items-center gap-3">
                          <img 
                            src={s.image} 
                            alt={s.name} 
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-emerald-100/80 shadow-2xs flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 block truncate text-xs sm:text-sm">
                              {s.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono block">
                              ID: SB-{toBanglaNum(s.id)}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Class Badge */}
                      <td className="p-4 sm:p-5 text-center">
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1 rounded-full text-xs font-bold inline-block shadow-2xs">
                          {toBanglaNum(s.class)} {language === 'bn' ? 'শ্রেণি' : 'Class'}
                        </span>
                      </td>

                      {/* Group / Subject */}
                      <td className="p-4 sm:p-5 text-center text-slate-600 font-medium text-xs">
                        {s.group}
                      </td>

                      {/* Action Button (Icon Only) */}
                      <td className="p-4 sm:p-5 pr-6 text-right">
                        <button 
                          onClick={() => setSelectedStudent(s)}
                          title={language === 'bn' ? 'প্রোফাইল দেখুন' : 'View Profile'}
                          aria-label={language === 'bn' ? 'প্রোফাইল দেখুন' : 'View Profile'}
                          className="w-8 h-8 rounded-full inline-flex items-center justify-center bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition border border-slate-200/90 hover:border-emerald-300 shadow-2xs cursor-pointer"
                        >
                          <Eye size={15} />
                        </button>
                      </td>

                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* 4. STUDENT DETAIL MODAL */}
      {selectedStudent && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs p-4 flex min-h-full items-center justify-center animate-fade-in"
          onClick={() => setSelectedStudent(null)}
        >
          <div 
            className="bg-white rounded-[32px] max-w-md w-full overflow-hidden shadow-2xl relative border border-slate-100 my-auto transform transition-all animate-scale-up"
            onClick={e => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button 
              onClick={() => setSelectedStudent(null)} 
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Header Banner */}
            <div className="bg-gradient-to-r from-emerald-800 to-teal-900 h-24 relative">
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                <img 
                  src={selectedStudent.image} 
                  alt={selectedStudent.name} 
                  className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover bg-white"
                />
              </div>
            </div>

            {/* Modal Body */}
            <div className="px-6 pb-6 pt-12 text-center space-y-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">{selectedStudent.name}</h2>
                <p className="text-xs text-emerald-700 font-bold mt-0.5">
                  {language === 'bn' ? 'রোল নং' : 'Roll'}: #{toBanglaNum(selectedStudent.roll)} • ID: SB-{toBanglaNum(selectedStudent.id)}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                </p>
              </div>
              
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-left text-xs">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-0.5 flex items-center gap-1">
                    <GraduationCap size={11} className="text-emerald-700" /> {language === 'bn' ? 'শ্রেণি' : 'Class'}
                  </p>
                  <p className="font-bold text-slate-800 text-xs">
                    {toBanglaNum(selectedStudent.class)} {language === 'bn' ? 'শ্রেণি' : 'Class'}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-0.5 flex items-center gap-1">
                    <Layers size={11} className="text-emerald-700" /> {language === 'bn' ? 'শাখা' : 'Section'}
                  </p>
                  <p className="font-bold text-slate-800 text-xs">
                    {selectedStudent.section}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-0.5 flex items-center gap-1">
                    <Briefcase size={11} className="text-emerald-700" /> {language === 'bn' ? 'বিভাগ' : 'Group'}
                  </p>
                  <p className="font-bold text-slate-800 text-xs">
                    {selectedStudent.group || '-'}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-0.5 flex items-center gap-1">
                    <Droplet size={11} className="text-emerald-700" /> {language === 'bn' ? 'রক্তের গ্রুপ' : 'Blood Group'}
                  </p>
                  <p className="font-bold text-slate-800 text-xs">
                    {selectedStudent.bloodGroup || 'N/A'}
                  </p>
                </div>
              </div>
              
              {/* Guardian Info */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-left text-xs space-y-1.5">
                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/80 pb-1">
                  {language === 'bn' ? 'অভিভাবকের তথ্য ও যোগাযোগ' : 'Guardian & Contact Details'}
                </h3>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">{language === 'bn' ? 'পিতার নাম' : "Father's Name"}:</span>
                  <span className="font-bold text-slate-800">{selectedStudent.fatherName || '-'}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">{language === 'bn' ? 'মাতার নাম' : "Mother's Name"}:</span>
                  <span className="font-bold text-slate-800">{selectedStudent.motherName || '-'}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-500">{language === 'bn' ? 'ফোন নম্বর' : 'Phone'}:</span>
                  <span className="font-bold text-emerald-800 font-mono">{toBanglaNum(selectedStudent.guardianPhone || '-')}</span>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedStudent(null)}
                className="w-full bg-[#00704A] hover:bg-[#005a3c] text-white py-2.5 rounded-2xl font-bold text-xs transition shadow-sm cursor-pointer"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close Profile'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Students;
