import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowLeft, GraduationCap, Award, BookOpen, FlaskConical, 
  Mail, Phone, MapPin, Clock, FileText, CheckCircle2, 
  Sparkles, Globe, Calendar, Share2, Users, Star, User
} from 'lucide-react';

const TeacherProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { teachers } = useData();
  const { language, toBanglaNum } = useLanguage();

  // Comprehensive teacher & staff profiles database
  const PROFILES_MAP: Record<string, any> = {
    '1': {
      id: '1',
      roleType: 'teacher',
      nameBn: 'ইন্দ্রজিৎ কুমার মণ্ডল',
      nameEn: 'Indrajit Kumar Mondal',
      designationBn: 'সহকারী শিক্ষক (রসায়ন ও বিজ্ঞান)',
      designationEn: 'Assistant Teacher (Chemistry & Science)',
      subjectBn: 'রসায়ন / সাধারণ বিজ্ঞান',
      subjectEn: 'Chemistry & General Science',
      image: 'https://soshgskhulna.edu.bd/media/181/Picture_PP.jpg',
      experience: '12+',
      studentsMentored: '350+',
      email: 'indrajit.mondal@soshgskhulna.edu.bd',
      phone: '024-77726775',
      room: 'Science Faculty Room, Academic Building 1',
      hours: 'Sunday - Thursday: 8:30 AM - 3:30 PM',
      bioBn: 'মানসম্মত রসায়ন শিক্ষা ও বিজ্ঞান গবেষণায় নিবেদিতপ্রাণ শিক্ষক। শ্রেণিকক্ষে বাস্তব ল্যাব পরীক্ষার মাধ্যমে শিক্ষার্থীদের বিজ্ঞানমনস্ক ও উদ্ভাবনী চিন্তাধারায় দক্ষ করে তোলাই মূল উদ্দেশ্য।',
      bioEn: 'Dedicated chemistry educator with 12+ years of teaching expertise. Passionate about hands-on laboratory experimentation and inspiring scientific inquiry among secondary school students.',
      education: [
        { degree: 'M.Sc in Chemistry', institution: 'University of Rajshahi', year: '2012', result: 'First Class' },
        { degree: 'B.Sc (Honours) in Chemistry', institution: 'University of Rajshahi', year: '2010', result: 'First Class' },
        { degree: 'Bachelor of Education (B.Ed)', institution: 'Govt. Teachers Training College', year: '2014', result: 'First Class' },
      ],
      research: [
        { title: 'Pedagogical Approaches to Chemistry Laboratory Safety in Secondary Schools', journal: 'Journal of Science Education Bangladesh', year: '2021' },
        { title: 'Interactive Science Demonstrations to Enhance Secondary Student Engagement', journal: 'National STEM Teaching Review', year: '2023' }
      ],
      certifications: [
        'National Curriculum and Textbook Board (NCTB) Master Trainer (Chemistry)',
        'British Council Certified STEM Pedagogical Skills',
        'UNESCO ICT in Secondary Science Education Certificate',
        'Child Safeguarding & Protection Certified Educator'
      ],
      courses: [
        'Secondary Chemistry (Classes 9 & 10)',
        'General Science & Environmental Chemistry (Classes 7 & 8)',
        'Senior Chemistry Practical Lab Workshop'
      ]
    },
    '2': {
      id: '2',
      roleType: 'teacher',
      nameBn: 'মোসাম্মৎ রেহানা পারভীন',
      nameEn: 'Mst. Rehana Parveen',
      designationBn: 'সহকারী অধ্যাপিকা (ইংরেজি)',
      designationEn: 'Assistant Professor (English)',
      subjectBn: 'ইংরেজি ভাষা ও সাহিত্য',
      subjectEn: 'English Language & Literature',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      experience: '09+',
      studentsMentored: '280+',
      email: 'rehana.parveen@soshgskhulna.edu.bd',
      phone: '024-77726775',
      room: "Teachers' Room, 2nd Floor, Academic Building",
      hours: 'Sunday - Thursday: 9:00 AM - 4:00 PM',
      bioBn: 'ইংরেজি ব্যাকরণ ও যোগাযোগ দক্ষতা উন্নয়নে বিশেষ প্রশিক্ষণপ্রাপ্ত অভিজ্ঞ শিক্ষিকা। শিক্ষার্থীদের সৃজনশীল লেখালেখি ও আত্মবিশ্বাসের সাথে ইংরেজি বলতে উৎসাহিত করেন।',
      bioEn: 'Dedicated and passionate educator with strong commitment to academic excellence, English communicative competence, and holistic student personality development.',
      education: [
        { degree: 'Master of Arts (MA) in English', institution: 'University of Dhaka', year: '2015', result: 'First Class' },
        { degree: 'Bachelor of Arts (BA Hons) in English', institution: 'University of Dhaka', year: '2013', result: 'First Class' },
        { degree: 'Master of Education (M.Ed)', institution: 'Institute of Education and Research (IER)', year: '2017', result: 'CGPA 3.85' },
      ],
      research: [
        { title: 'Communicative English Language Teaching Techniques in Rural and Semi-Urban High Schools', journal: 'Bangladesh English Language Teachers Association (BELTA) Journal', year: '2020' },
        { title: 'Fostering Creative Writing and Critical Reading Habits among High School Learners', journal: 'Language & Literacy Forum', year: '2022' }
      ],
      certifications: [
        'British Council Certificate in English Language Teaching (CELT)',
        'B.Ed, Training in Modern Teaching Methods & Micro-teaching',
        'Certified in ICT Integration in Language Education (TQI-SEP)',
        'Youth Leadership & Debating Coach Certification'
      ],
      courses: [
        'English 1st Paper: Reading Comprehension & Literature (Classes 8, 9, 10)',
        'English 2nd Paper: Applied Grammar & Writing Composition (Classes 9, 10)',
        'Spoken English & English Language Club Facilitation'
      ]
    },
    '3': {
      id: '3',
      roleType: 'teacher',
      nameBn: 'মোঃ জহিরুল হক',
      nameEn: 'Md. Zahirul Haque',
      designationBn: 'সিনিয়র শিক্ষক (গণিত)',
      designationEn: 'Senior Teacher (Mathematics)',
      subjectBn: 'গণিত ও উচ্চতর গণিত',
      subjectEn: 'General & Higher Mathematics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
      experience: '14+',
      studentsMentored: '420+',
      email: 'zahirul.haque@soshgskhulna.edu.bd',
      phone: '024-77726775',
      room: "Math Faculty Room, 1st Floor",
      hours: 'Sunday - Thursday: 8:30 AM - 3:30 PM',
      bioBn: 'মাধ্যমিক পর্যায়ে শিক্ষার্থীদের গণিতভীতি দূর করে যৌক্তিক ও সমস্যা সমাধানের দক্ষতা তৈরিতে বিশেষজ্ঞ শিক্ষক।',
      bioEn: 'Senior mathematics teacher specializing in problem solving methodologies, algebra, and olympiad math training.',
      education: [
        { degree: 'M.Sc in Applied Mathematics', institution: 'Khulna University', year: '2010', result: 'First Class' },
        { degree: 'B.Sc (Honours) in Mathematics', institution: 'Khulna University', year: '2008', result: 'First Class' },
        { degree: 'B.Ed', institution: 'Govt. TTC Khulna', year: '2012', result: 'First Class' },
      ],
      research: [
        { title: 'Remedial Math Strategies for Secondary School Students', journal: 'Bangladesh Math Teachers Journal', year: '2019' }
      ],
      certifications: [
        'National Math Olympiad Head Coach Trainer',
        'Advanced Calculus and Analytical Geometry Teaching Workshop'
      ],
      courses: ['Higher Mathematics (Classes 9 & 10)', 'General Mathematics (Class 8)']
    },
    'staff-1': {
      id: 'staff-1',
      roleType: 'staff',
      nameBn: 'মোঃ রফিকুল ইসলাম',
      nameEn: 'Md. Rafiqul Islam',
      designationBn: 'অফিস সুপারিনটেনডেন্ট',
      designationEn: 'Office Superintendent',
      subjectBn: 'সাধারণ প্রশাসন ও বোর্ড নথিপত্র',
      subjectEn: 'General Administration & Institutional Records',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80',
      experience: '12+',
      studentsMentored: 'N/A',
      email: 'office.super@sos-bangladesh.org',
      phone: '01712-112233',
      room: 'Main Admin Office, Ground Floor',
      hours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      bioBn: 'বিদ্যালয়ের সার্বিক দাপ্তরিক কার্যক্রম, শিক্ষার্থী ও শিক্ষক নথিপত্র সংরক্ষণ ও প্রাতিষ্ঠানিক সমন্বয়ে নিবেদিত কর্মকর্তা।',
      bioEn: 'Dedicated administrative officer managing institutional records, board coordination, student documentation, and office operations.',
      education: [
        { degree: 'Master of Public Administration (MPA)', institution: 'University of Rajshahi', year: '2011', result: 'First Class' },
        { degree: 'Bachelor of Arts (BA Hons)', institution: 'University of Rajshahi', year: '2009', result: 'First Class' },
      ],
      research: [
        { title: 'Optimizing Administrative Record-keeping and Digitization in Educational Institutions', journal: 'Public Administration & Institutional Review', year: '2020' }
      ],
      certifications: [
        'Certified Institutional Office Administrator (BPSC)',
        'Government Education Board Electronic Data Management Certification',
        'Advanced Institutional Documentation and File Management'
      ],
      courses: [
        'Student Registry & Admission File Supervision',
        'Secondary Education Board (BISE) Exam Coordination',
        'Official Correspondence & Circular Distribution'
      ]
    },
    'staff-2': {
      id: 'staff-2',
      roleType: 'staff',
      nameBn: 'সুমাইয়া আক্তার',
      nameEn: 'Sumaiya Akter',
      designationBn: 'হিসাবরক্ষণ কর্মকর্তা',
      designationEn: 'Senior Accountant',
      subjectBn: 'অর্থ ও প্রাতিষ্ঠানিক হিসাবরক্ষণ',
      subjectEn: 'Institutional Finance & Accounts',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80',
      experience: '08+',
      studentsMentored: 'N/A',
      email: 'accounts@sos-bangladesh.org',
      phone: '01713-223344',
      room: 'Accounts Office, Admin Building, 1st Floor',
      hours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      bioBn: 'বিদ্যালয়ের আর্থিক স্বচ্ছতা, ডিজিটাল ফি পেমেন্ট ও নিয়মতান্ত্রিক হিসাব সংরক্ষণে দায়িত্বরত হিসাববিদ।',
      bioEn: 'Finance professional managing institutional budgeting, digital fee collection, payroll, and statutory auditing.',
      education: [
        { degree: 'Master of Business Administration (MBA in Finance)', institution: 'Khulna University', year: '2016', result: 'CGPA 3.80' },
        { degree: 'BBA in Accounting & Information Systems', institution: 'Khulna University', year: '2014', result: 'CGPA 3.75' },
      ],
      research: [
        { title: 'Digital Payment System Integration and Transparency in School Financial Administration', journal: 'Accounting & Finance Review', year: '2021' }
      ],
      certifications: [
        'Certified Tally.ERP9 & Quickbooks Professional',
        'National Tax & VAT Compliance Certification (NBR)',
        'Digital Education Finance Administration System (DEFAS)'
      ],
      courses: [
        'Tuition Fee & Exam Fee Accounting',
        'Institutional Payroll & Provident Fund Management',
        'Annual Financial Statement & Statutory Audit Reconciliation'
      ]
    },
    'staff-3': {
      id: 'staff-3',
      roleType: 'staff',
      nameBn: 'মোঃ হাসানুজ্জামান',
      nameEn: 'Md. Hasanuzzaman',
      designationBn: 'গ্রন্থাগারিক ও তথ্য কর্মকর্তা',
      designationEn: 'Head Librarian',
      subjectBn: 'গ্রন্থাগার ব্যবস্থাপনা ও রেফারেন্স',
      subjectEn: 'Library & Information Science',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80',
      experience: '10+',
      studentsMentored: 'N/A',
      email: 'library@sos-bangladesh.org',
      phone: '01714-334455',
      room: 'Central Library, 3rd Floor, Main Academic Block',
      hours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      bioBn: 'শিক্ষার্থীদের পড়ার অভ্যাস তৈরি ও সমৃদ্ধ জ্ঞানভাণ্ডার পরিচালনায় দায়িত্বরত অভিজ্ঞ গ্রন্থাগারিক।',
      bioEn: 'Information specialist managing library automation, cataloging, academic journals, and modern reading room facilities.',
      education: [
        { degree: 'MA in Information Science & Library Management', institution: 'University of Dhaka', year: '2014', result: 'First Class' },
        { degree: 'BA (Hons) in Information Science', institution: 'University of Dhaka', year: '2012', result: 'First Class' },
      ],
      research: [
        { title: 'Digital Library Adoption and Reading Habits in Secondary Schools', journal: 'Bangladesh Library Association Journal', year: '2022' }
      ],
      certifications: [
        'Koha Open Source Integrated Library System Specialist',
        'DDC (Dewey Decimal Classification) Certified Cataloger',
        'E-resource and Digital Archive Management'
      ],
      courses: [
        'Library Orientation for New Students',
        'Book Circulation & Digital Card Issuance',
        'Reading Room Discipline & Research Assistance'
      ]
    },
    'staff-4': {
      id: 'staff-4',
      roleType: 'staff',
      nameBn: 'রাকিবুল ইসলাম',
      nameEn: 'Rakibul Islam',
      designationBn: 'আইসিটি সহকারী ও নেটওয়ার্ক ইনচার্জ',
      designationEn: 'ICT Assistant & Network In-charge',
      subjectBn: 'আইসিটি ল্যাব ও নেটওয়ার্কিং',
      subjectEn: 'ICT Infrastructure & Network Administration',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80',
      experience: '06+',
      studentsMentored: 'N/A',
      email: 'ict.support@sos-bangladesh.org',
      phone: '01715-445566',
      room: 'Computer Lab 1, ICT Block, 2nd Floor',
      hours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      bioBn: 'স্মার্ট ক্লাসরুম, কম্পিউটার ল্যাব ও প্রাতিষ্ঠানিক ডিজিটাল সেবা পরিচালনায় নিবেদিত প্রযুক্তি সহকারী।',
      bioEn: 'Technology specialist ensuring smooth operations of digital classrooms, computer laboratories, campus LAN, and institutional IT systems.',
      education: [
        { degree: 'B.Sc in Computer Science & Engineering', institution: 'Khulna University of Engineering & Technology (KUET)', year: '2018', result: 'CGPA 3.65' },
        { degree: 'Diploma in Computer Technology', institution: 'Khulna Polytechnic Institute', year: '2014', result: 'First Division' },
      ],
      research: [
        { title: 'Campus LAN Security and Multimedia Classroom Infrastructure Optimization', journal: 'ICT in Education Journal', year: '2023' }
      ],
      certifications: [
        'Cisco Certified Network Associate (CCNA)',
        'Microsoft Certified Solutions Associate (MCSA)',
        'Smart Interactive Flat Panel & Projector System Specialist'
      ],
      courses: [
        'ICT Lab Setup & Hardware Maintenance',
        'Campus High-speed Wi-Fi & Firewall Administration',
        'Website Technical Management & Online Result Server Support'
      ]
    }
  };

  const currentTeacher = PROFILES_MAP[id || '2'] || PROFILES_MAP['2'];
  const name = language === 'bn' ? currentTeacher.nameBn : currentTeacher.nameEn;
  const designation = language === 'bn' ? currentTeacher.designationBn : currentTeacher.designationEn;
  const subject = language === 'bn' ? currentTeacher.subjectBn : currentTeacher.subjectEn;
  const bio = language === 'bn' ? currentTeacher.bioBn : currentTeacher.bioEn;

  return (
    <div className="bg-[#edf9f3] min-h-screen py-8 sm:py-10 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Back Navigation Link (Pixel-perfect pill button) */}
        <div>
          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-emerald-800 border border-emerald-200/90 px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs transition cursor-pointer"
          >
            <ArrowLeft size={15} className="text-emerald-700" />
            <span>{language === 'bn' ? 'সকল শিক্ষক ও কর্মকর্তা তালিকায় ফিরুন' : 'Back to Faculty & Staff Directory'}</span>
          </Link>
        </div>

        {/* 1. TOP HERO PROFILE CARD (100% PIXEL-PERFECT MATCH TO REFERENCE) */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Layered Portrait Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-56 h-68 sm:w-64 sm:h-76">
                {/* Mint decorative backdrop frame */}
                <div className="absolute inset-0 bg-[#d8f3e5] rounded-[32px] -rotate-3 scale-98 origin-bottom-left" />
                
                {/* Front Photo Container */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#e8f7ee] shadow-xs flex items-end justify-center border border-emerald-100/60">
                  <img 
                    src={currentTeacher.image} 
                    alt={name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right Profile Details */}
            <div className="lg:col-span-8 space-y-4 text-left">
              
              {/* Role Pill Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#eaf7f0] text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
                <GraduationCap size={13} className="text-emerald-700" />
                <span>
                  {currentTeacher.roleType === 'teacher' 
                    ? (language === 'bn' ? 'শিক্ষকমণ্ডলী' : 'TEACHING FACULTY') 
                    : (language === 'bn' ? 'প্রশাসনিক কর্মকর্তা' : 'ADMINISTRATIVE STAFF')}
                </span>
              </div>
              
              {/* Name & Designation */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {name}
                </h1>
                <p className="text-base sm:text-lg text-emerald-700 font-bold mt-1">
                  {designation}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনা' : 'SOS Hermann Gmeiner School Khulna'}
                </p>
              </div>

              {/* Italic Bio with Green Quotation Mark */}
              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                <span className="text-2xl font-serif text-emerald-600 leading-none select-none">“</span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                  "{bio}"
                </p>
              </div>

              {/* Stats and Contact Quick Info Box */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
                
                {/* 2 Mini Stats Cards */}
                <div className="sm:col-span-7 grid grid-cols-2 gap-3">
                  <div className="bg-[#f8fafc] p-3 sm:p-3.5 rounded-2xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Users size={15} />
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-black text-slate-900 block leading-tight">
                        {toBanglaNum(currentTeacher.experience)}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'bn' ? 'অভিজ্ঞতা' : 'YEARS OF EXPERIENCE'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#f8fafc] p-3 sm:p-3.5 rounded-2xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-100/70 text-amber-700 flex items-center justify-center flex-shrink-0">
                      <Star size={15} className="fill-amber-500" />
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-black text-slate-900 block leading-tight">
                        {currentTeacher.roleType === 'teacher' ? toBanglaNum(currentTeacher.studentsMentored) : (language === 'bn' ? 'স্থায়ী' : 'Permanent')}
                      </span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        {currentTeacher.roleType === 'teacher' ? (language === 'bn' ? 'শিক্ষার্থী' : 'STUDENTS MENTORED') : (language === 'bn' ? 'সার্ভিস' : 'SERVICE STATUS')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email & Phone Card */}
                <div className="sm:col-span-5 bg-[#f8fafc] p-3 sm:p-3.5 rounded-2xl border border-slate-100 space-y-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="text-emerald-700 flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-slate-800 truncate block">{currentTeacher.email}</span>
                      <span className="text-[8px] text-slate-400 font-bold uppercase block">EMAIL</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className="text-emerald-700 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 font-mono block">{toBanglaNum(currentTeacher.phone)}</span>
                      <span className="text-[8px] text-slate-400 font-bold uppercase block">PHONE</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* 2. DETAILED 2x2 SECTIONS GRID (100% MATCHING REFERENCE IMAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Educational Qualifications (Connected Timeline) */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualifications'}
              </h2>
            </div>

            {/* Timeline connected list */}
            <div className="relative pl-5 space-y-3.5 before:absolute before:left-2 before:top-4 before:bottom-4 before:w-0.5 before:bg-emerald-200">
              {currentTeacher.education?.map((edu: any, index: number) => (
                <div key={index} className="relative bg-[#f8fafc] rounded-2xl p-4 border border-slate-100 flex items-center justify-between gap-3">
                  {/* Green timeline bullet dot */}
                  <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-700 border-2 border-white shadow-2xs" />
                  
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{edu.degree}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">{edu.institution}</p>
                    <p className="text-[11px] text-emerald-700 font-bold mt-1">
                      {language === 'bn' ? `ফলাফল: ${edu.result}` : `Result: ${edu.result}`}
                    </p>
                  </div>
                  
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-black px-3 py-1 rounded-xl flex-shrink-0 shadow-2xs">
                    {toBanglaNum(edu.year)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Professional Training & Certifications */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100/70 text-sky-800 flex items-center justify-center flex-shrink-0">
                <Award size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {language === 'bn' ? 'পেশাগত প্রশিক্ষণ ও সনদ' : 'Professional Training & Certifications'}
              </h2>
            </div>

            <div className="space-y-3">
              {currentTeacher.certifications?.map((cert: string, index: number) => (
                <div key={index} className="flex items-center gap-3 bg-[#f8fafc] p-3.5 rounded-2xl border border-slate-100">
                  <CheckCircle2 size={16} className="text-sky-600 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Research & Publications / Contributions */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-100/70 text-purple-800 flex items-center justify-center flex-shrink-0">
                <FileText size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {currentTeacher.roleType === 'teacher'
                  ? (language === 'bn' ? 'গবেষণা ও প্রকাশনা' : 'Research & Publications')
                  : (language === 'bn' ? 'প্রাতিষ্ঠানিক ও দাপ্তরিক অবদান' : 'Administrative & Institutional Contributions')}
              </h2>
            </div>

            <div className="space-y-3">
              {currentTeacher.research?.map((res: any, index: number) => (
                <div key={index} className="bg-[#f8fafc] p-4 rounded-2xl border border-slate-100 flex items-center justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      "{res.title}"
                    </h3>
                    <p className="text-[11px] text-slate-500">{res.journal}</p>
                  </div>
                  <span className="bg-purple-50 text-purple-800 border border-purple-200/80 text-xs font-black px-3 py-1 rounded-xl flex-shrink-0 shadow-2xs">
                    {toBanglaNum(res.year)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Courses & Teaching Responsibilities / Operational Scope */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center flex-shrink-0">
                <BookOpen size={18} />
              </div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {currentTeacher.roleType === 'teacher'
                  ? (language === 'bn' ? 'পাঠদানের বিষয় ও দায়িত্ব' : 'Courses & Teaching Responsibilities')
                  : (language === 'bn' ? 'মূল দায়িত্ব ও কর্মপরিধি' : 'Key Responsibilities & Scope')}
              </h2>
            </div>

            {/* Courses List with Orange Bullet Dots */}
            <div className="space-y-2.5">
              {currentTeacher.courses?.map((course: string, index: number) => (
                <div key={index} className="flex items-center gap-3 bg-[#f8fafc] p-3.5 rounded-2xl border border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                    {course}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Office Hours Box */}
            <div className="bg-[#f8fafc] rounded-2xl p-4 border border-slate-100 space-y-1.5 text-xs text-slate-600 mt-3">
              <p className="flex items-center gap-2">
                <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                <span><strong className="text-slate-800">{language === 'bn' ? 'অফিস অবস্থান:' : 'Location:'}</strong> {currentTeacher.room}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={13} className="text-slate-400 flex-shrink-0" />
                <span><strong className="text-slate-800">{language === 'bn' ? 'অফিস সময়:' : 'Office Hours:'}</strong> {currentTeacher.hours}</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TeacherProfile;
