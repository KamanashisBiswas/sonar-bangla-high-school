import { NavItem, Notice, Teacher, EventImage, Student, Staff, CommitteeMember, DownloadItem } from './types';

export const SCHOOL_NAME = "এস ও এস হারম্যান মেইনার স্কুল খুলনা";
export const SCHOOL_NAME_EN = "SOS HERMANN GMEINER SCHOOL KHULNA";
export const SCHOOL_LOGO = "https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png";
export const SCHOOL_FAVICON = "https://soshgskhulna.edu.bd/media/logos/NUtfNkRmi06Nt5RS26h6sS7TrSc7OuNIx0Wr261V.png";
export const SCHOOL_ADDRESS = "গল্লামারী, খুলনা - ৯২০৮";
export const SCHOOL_ADDRESS_EN = "Gollamari, Khulna - 9208";
export const EIIN_CODE = "117188";
export const ESTABLISHED_YEAR = "১৯৮৭";

export const NAV_ITEMS: NavItem[] = [
  { label: 'হোম', path: '/' },
  { label: 'আমাদের কথা', path: '/about' },
  { label: 'প্রশাসনিক', path: '/administration' },
  { label: 'শিক্ষক-কর্মচারী', path: '/teachers' },
  { label: 'শিক্ষার্থী', path: '/students' },
  { label: 'একাডেমিক', path: '/academic' },
  { label: 'ডাউনলোড', path: '/downloads' },
  { label: 'ভর্তি তথ্য', path: '/admission' },
  { label: 'নোটিশ', path: '/notices' },
  { label: 'ফলাফল', path: '/result' },
  { label: 'গ্যালারি', path: '/gallery' },
  { label: 'যোগাযোগ', path: '/contact' },
];

export const QUICK_LINKS = [
  { label: 'মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর (DSHE)', url: 'http://www.dshe.gov.bd/' },
  { label: 'যশোর শিক্ষা বোর্ড (BISE Jessore)', url: 'http://www.jessoreboard.gov.bd/' },
  { label: 'শিক্ষক বাতায়ন (Shikkhok Batayan)', url: 'http://www.teachers.gov.bd/' },
  { label: 'এস ও এস চিলড্রেনস ভিলেজ বাংলাদেশ', url: 'https://www.sos-bangladesh.org/' },
  { label: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)', url: 'http://www.nctb.gov.bd/' },
  { label: 'ব্যানবেইস (BANBEIS)', url: 'http://www.banbeis.gov.bd/' },
  { label: 'শিক্ষা মন্ত্রণালয় (MOEDU)', url: 'http://www.moedu.gov.bd/' },
  { label: 'বাংলাদেশ জাতীয় তথ্য বাতায়ন', url: 'http://www.bangladesh.gov.bd/' },
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: '1',
    title: 'গ্রীষ্মকালীন অবকাশ ও ছুটির বিজ্ঞপ্তি ২০২৫',
    titleEn: 'Summer Vacation & Holiday Notice 2025',
    date: '2025-05-18',
    type: 'General',
    content: 'এতদ্বারা এস ও এস হারম্যান মেইনার স্কুল খুলনার সকল শিক্ষক, শিক্ষার্থী ও অভিভাবকদের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ২৯-০৫-২০২৫ তারিখ থেকে ০৭-০৬-২০২৫ তারিখ পর্যন্ত বিদ্যালয়ের সকল শ্রেণি কার্যক্রম গ্রীষ্মকালীন ছুটির জন্য বন্ধ থাকবে।',
    contentEn: 'This is to inform all teachers, students, and guardians of SOS Hermann Gmeiner School Khulna that all academic classes will remain closed from 29-05-2025 to 07-06-2025 for summer vacation.'
  },
  {
    id: '2',
    title: 'এস.এস.সি পরীক্ষা ২০২৫ এর ফলাফল ও মার্কশিট সংক্রান্ত',
    titleEn: 'SSC Examination 2025 Results & Marksheet Distribution',
    date: '2025-05-12',
    type: 'Exam',
    content: 'এস.এস.সি পরীক্ষা ২০২৫ এ উত্তীর্ণ শিক্ষার্থীদের অভিনন্দন। উত্তীর্ণ শিক্ষার্থীরা আগামী ১৫ মে থেকে বিদ্যালয়ের অফিস কক্ষ থেকে অফিশিয়াল একাডেমিক মার্কশিট ও প্রশংসাপত্র সংগ্রহ করতে পারবে।',
    contentEn: 'Congratulations to all successful candidates of SSC Exam 2025. Students can collect official academic marksheets and testimonials from the school office starting May 15.'
  },
  {
    id: '3',
    title: 'শ্রেণি-১ ও ৬ষ্ঠ শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম ২০২৫',
    titleEn: 'Online Admission Open for Class 1 & Class 6 (Session 2025)',
    date: '2025-05-01',
    type: 'Admission',
    content: 'চলতি শিক্ষাবর্ষে ১ম হতে ৯ম শ্রেণি পর্যন্ত শূন্য আসনে অনলাইনে ভর্তি আবেদন গ্রহণ করা হচ্ছে। অভিভাবকগণ ওয়েবসাইট থেকে ঘরে বসেই আবেদন সম্পন্ন করতে পারবেন।',
    contentEn: 'Online admission applications are now open for vacant seats from Class 1 to Class 9. Guardians can submit applications directly online via the portal.'
  },
  {
    id: '4',
    title: 'আন্তর্জাতিক মাতৃভাষা দিবস ও বার্ষিক ক্রীড়া উৎসব উদযাপন',
    titleEn: 'International Mother Language Day & Annual Sports Meet',
    date: '2025-04-21',
    type: 'Event',
    content: 'যথাযোগ্য মর্যাদায় শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে প্রভাতফেরি, আলোচনা সভা ও বার্ষিক ক্রীড়া প্রতিযোগিতার আয়োজন করা হয়েছে।',
    contentEn: 'On the occasion of Martyrs Day & International Mother Language Day, a morning procession, discussion assembly, and sports competitions have been organized.'
  },
  {
    id: '5',
    title: 'অর্ধ-বার্ষিক ও প্রাক-নির্বাচনী পরীক্ষা ২০২৫ এর সময়সূচি প্রকাশ',
    titleEn: 'Half-Yearly & Pre-Test Exam 2025 Schedule Published',
    date: '2025-04-10',
    type: 'Exam',
    content: 'সকল শ্রেণির অর্ধ-বার্ষিক ও ১০ম শ্রেণির প্রাক-নির্বাচনী পরীক্ষার রুটিন প্রকাশিত হয়েছে। শিক্ষার্থীরা একাডেমিক সেকশন থেকে রুটিন ডাউনলোড করতে পারবে।',
    contentEn: 'The schedule for Half-Yearly Examinations for all classes and Pre-Test for Class 10 has been published and is downloadable from the academic section.'
  },
  {
    id: '6',
    title: 'বার্ষিক বিজ্ঞান মেলা ও আইসিটি উদ্ভাবন প্রদর্শনী ২০২৫',
    titleEn: 'Annual Science Fair & ICT Innovation Expo 2025',
    date: '2025-03-15',
    type: 'Event',
    content: 'শিক্ষার্থীদের বিজ্ঞানমনস্ক ও প্রযুক্তি উদ্ভাবনে উৎসাহিত করতে আগামী ১৫ মার্চ স্কুল অডিটোরিয়ামে বিজ্ঞান মেলা ও রোবোটিক্স প্রদর্শনী অনুষ্ঠিত হবে।',
    contentEn: 'To foster scientific curiosity and technological innovation, an Annual Science Fair and Robotics Exhibition will be held on March 15 in the auditorium.'
  },
  {
    id: '7',
    title: 'মাসিক বেতন ও পরীক্ষার ফি পরিশোধের সময়সীমা সংক্রান্ত',
    titleEn: 'Notice Regarding Monthly Tuition & Exam Fee Payment',
    date: '2025-03-05',
    type: 'General',
    content: 'অভিভাবকবৃন্দের অবগতির জন্য জানানো যাচ্ছে যে, চলতি মাসের টিউশন ফি আগামী ১০ তারিখের মধ্যে অনলাইন গেটওয়ে বা হিসাব শাখায় পরিশোধের অনুরোধ করা হচ্ছে।',
    contentEn: 'Guardians are kindly requested to clear the current month tuition fee by the 10th through the online fee payment gateway or accounts office.'
  },
  {
    id: '8',
    title: 'নতুন শিক্ষার্থীদের ভর্তির জন্য আইডি কার্ড ও ইউনিফর্ম বিজ্ঞপ্তি',
    titleEn: 'ID Card & Uniform Notice for Newly Admitted Students',
    date: '2025-02-10',
    type: 'Admission',
    content: '২০২৫ শিক্ষাবর্ষে নতুন ভর্তি হওয়া শিক্ষার্থীদের ডিজিটাল আইডি কার্ড ও নির্ধারিত ইউনিফর্ম আগামী ১২ ফেব্রুয়ারি সকাল ১০টা থেকে বিতরণ করা হবে।',
    contentEn: 'Digital Student ID cards and prescribed school uniform for newly admitted students will be distributed from February 12 at 10:00 AM.'
  },
  {
    id: '9',
    title: 'জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মবার্ষিকী ও জাতীয় শিশু দিবস',
    titleEn: 'Birth Anniversary of Bangabandhu & National Children Day',
    date: '2025-03-17',
    type: 'Event',
    content: '১৭ মার্চ জাতীয় শিশু দিবস উপলক্ষে চিত্রাঙ্কন প্রতিযোগিতা, রচনা প্রতিযোগিতা ও বিশেষ আলোচনা সভার আয়োজন করা হয়েছে। সকল শিক্ষার্থীকে উপস্থিত থাকতে বলা হলো।',
    contentEn: 'On March 17, National Children Day will be observed with art competitions, essay writing, and cultural assemblies.'
  },
  {
    id: '10',
    title: '৯ম ও ১০ম শ্রেণির বিজ্ঞান ল্যাব ও ব্যবহারিক ক্লাসের বিশেষ সময়সূচি',
    titleEn: 'Special Schedule for Science Lab & Practical Classes (Class 9-10)',
    date: '2025-02-25',
    type: 'Exam',
    content: 'বিজ্ঞান বিভাগের শিক্ষার্থীদের পদার্থ, রসায়ন ও জীববিজ্ঞান ল্যাব ক্লাসের নতুন রুটিন নোটিশ বোর্ডে প্রকাশ করা হয়েছে। সকল শিক্ষার্থীকে নির্ধারিত অ্যাপ্রন পরিধান করতে হবে।',
    contentEn: 'The updated science laboratory schedule for Physics, Chemistry, and Biology has been published. Lab aprons are mandatory.'
  },
  {
    id: '11',
    title: 'অভিভাবক সমাবেশ ও ত্রৈমাসিক প্রগতি প্রতিবেদন পর্যালোচনা ২০২৫',
    titleEn: 'Parent-Teacher Meeting & Quarterly Progress Review 2025',
    date: '2025-02-15',
    type: 'General',
    content: 'শিক্ষার্থীদের সার্বিক একাডেমিক ও আচরণিক মূল্যায়ন সংক্রান্ত মতবিনিময়ের জন্য আগামী ২০ ফেব্রুয়ারি অভিভাবক সমাবেশ অনুষ্ঠিত হবে।',
    contentEn: 'A Parent-Teacher meeting will be held on February 20 to review student academic and co-curricular progress.'
  },
  {
    id: '12',
    title: '২০২৫ শিক্ষাবর্ষে মেধাভিত্তিক বৃত্তি ও বিশেষ ওয়েভার আবেদন',
    titleEn: 'Merit Scholarship & Tuition Fee Waiver Application 2025',
    date: '2025-01-25',
    type: 'Admission',
    content: 'অসহায় ও মেধাবী শিক্ষার্থীদের জন্য এস ও এস চিলড্রেনস ভিলেজ ট্রাস্টের বিশেষ শিক্ষাবৃত্তি ও ফি ওয়েভার আবেদন আগামী ৩১ জানুয়ারি পর্যন্ত গ্রহণ করা হবে।',
    contentEn: 'Applications for merit scholarships and tuition waivers for deserving students will be accepted until January 31.'
  },
  {
    id: '13',
    title: 'আন্তঃহাউস বিতর্ক ও উপস্থিত বক্তৃতা প্রতিযোগিতা ২০২৫',
    titleEn: 'Inter-House Debate & Extempore Speech Competition 2025',
    date: '2025-01-18',
    type: 'Event',
    content: 'শিক্ষার্থীদের যুক্তি ও নেতৃত্ব বিকাশে আগামী ২৩ জানুয়ারি স্কুল মিলনায়তনে আন্তঃহাউস বিতর্ক প্রতিযোগিতা অনুষ্ঠিত হবে।',
    contentEn: 'The Inter-House Debate competition will take place on January 23 in the school auditorium.'
  },
  {
    id: '14',
    title: 'স্কাউট ও গার্ল গাইডস বার্ষিক ক্যাম্পিং ওরিয়েন্টেশন ২০২৫',
    titleEn: 'Scouts & Girl Guides Annual Camping Orientation 2025',
    date: '2025-01-12',
    type: 'Event',
    content: 'এস ও এস হারম্যান মেইনার স্কুল খুলনা স্কাউট দলের ৩ দিনব্যাপী বার্ষিক ক্যাম্পিং ওরিয়েন্টেশন আগামী সপ্তাহে অনুষ্ঠিত হবে।',
    contentEn: 'A 3-day annual camp orientation for Scouts and Girl Guides unit will be conducted next week.'
  },
  {
    id: '15',
    title: 'একাদশ শ্রেণিতে ভর্তিচ্ছু শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ নির্দেশনা',
    titleEn: 'Important Guidelines for Class 11 College Admission Applicants',
    date: '2025-05-25',
    type: 'Admission',
    content: 'এসএসসি উত্তীর্ণ যেসকল শিক্ষার্থী একাদশ শ্রেণিতে ভর্তি হতে ইচ্ছুক, তাদের কলেজ আবেদন পোর্টাল ও ডকুমেন্ট ভেরিফিকেশনের নিয়মাবলী অনুসরণ করতে বলা হলো।',
    contentEn: 'Guidelines and verification procedures for Class 11 college admissions have been released for SSC graduates.'
  },
  {
    id: '16',
    title: 'বার্ষিক পরীক্ষার ফলাফল পুনঃনিরীক্ষণ আবেদন সংক্রান্ত বিজ্ঞপ্তি',
    titleEn: 'Notice Regarding Re-scrutiny of Annual Examination Results',
    date: '2024-12-28',
    type: 'Exam',
    content: 'বার্ষিক পরীক্ষার খাতা পুনঃনিরীক্ষণের আবেদন আগামী ৫ জানুয়ারির মধ্যে নির্ধারিত ফি সহ পরীক্ষা নিয়ন্ত্রণ শাখায় জমা দিতে হবে।',
    contentEn: 'Applications for answer sheet re-scrutiny must be submitted to the exam controller office by January 5.'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'ইন্দ্রজিৎ কুমার মন্ডল',
    designation: 'অধ্যক্ষ',
    subject: 'রসায়ন / বিজ্ঞান',
    image: 'https://soshgskhulna.edu.bd/media/163/P.sir...jpg',
    qualifications: 'M.Sc (Chemistry), B.Ed'
  },
  {
    id: '2',
    name: 'মোসাম্মৎ রেহানা পারভীন',
    designation: 'সহকারী প্রধান শিক্ষক',
    subject: 'ইংরেজি',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&fit=crop&q=80',
    qualifications: 'MA (English), M.Ed'
  },
  {
    id: '3',
    name: 'মোঃ জহিরুল হক',
    designation: 'সিনিয়র শিক্ষক',
    subject: 'গণিত ও উচ্চতর গণিত',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
    qualifications: 'M.Sc (Mathematics), B.Ed'
  },
  {
    id: '4',
    name: 'তানজিলা রহমান',
    designation: 'সিনিয়র শিক্ষক',
    subject: 'পদার্থবিজ্ঞান',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80',
    qualifications: 'M.Sc (Physics), B.Ed'
  },
  {
    id: '5',
    name: 'আব্দুল করিম শেখ',
    designation: 'সহকারী শিক্ষক',
    subject: 'বাংলা সাহিত্য',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80',
    qualifications: 'MA (Bangla), B.Ed'
  },
  {
    id: '6',
    name: 'সুবর্ণা দাস',
    designation: 'সহকারী শিক্ষক',
    subject: 'জীববিজ্ঞান ও পরিবেশ',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&fit=crop&q=80',
    qualifications: 'M.Sc (Botany)'
  },
  {
    id: '7',
    name: 'মাওলানা মোঃ সাইফুল ইসলাম',
    designation: 'সহকারী শিক্ষক',
    subject: 'ইসলাম ও নৈতিক শিক্ষা',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80',
    qualifications: 'MA (Islamic Studies)'
  },
  {
    id: '8',
    name: 'প্রকৌশলী অমিত রায়',
    designation: 'সহকারী শিক্ষক (আইসিটি)',
    subject: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80',
    qualifications: 'B.Sc in CSE'
  }
];

export const OFFICE_STAFF: Staff[] = [
  { id: '1', name: 'মোঃ আনোয়ার হোসেন', designation: 'প্রধান সহকারী ও হিসাবরক্ষণ কর্মকর্তা', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80', phone: '01712-112233' },
  { id: '2', name: 'সুভাষ চন্দ্র ঘোষ', designation: 'কম্পিউটার অপারেটর ও অফিস সহকারী', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80', phone: '01713-223344' },
  { id: '3', name: 'মোছাঃ মমতাজ বেগম', designation: 'ল্যাব সহকারী (বিজ্ঞানাগার)', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80', phone: '01714-334455' },
  { id: '4', name: 'মোঃ হারুনুর রশীদ', designation: 'নিরাপত্তা ইনচার্জ ও কেয়ারটেকার', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80', phone: '01715-445566' },
];

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  { 
    id: '1', 
    name: 'মাকসুদা সুলতানা', 
    position: 'সভাপতি (Chairman)', 
    type: 'President', 
    image: 'https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg' 
  },
  { 
    id: '2', 
    name: 'ইন্দ্রজিৎ কুমার মন্ডল', 
    position: 'সদস্য সচিব (অধ্যক্ষ)', 
    type: 'Member', 
    image: 'https://soshgskhulna.edu.bd/media/163/P.sir...jpg' 
  },
  { 
    id: '3', 
    name: 'প্রতিনিধি, এস ও এস চিলড্রেনস ভিলেজ ইন্টারন্যাশনাল', 
    position: 'নির্বাহী সদস্য', 
    type: 'Donor', 
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80' 
  },
  { 
    id: '4', 
    name: 'অভিভাবক প্রতিনিধি পরিষদ', 
    position: 'অভিভাবক সদস্য', 
    type: 'Member', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80' 
  },
];

export const MOCK_STUDENTS: Student[] = [
  { 
    id: '1', name: 'আব্দুল্লাহ আল মামুন', class: '১০ম', roll: 101, section: 'ক', group: 'বিজ্ঞান', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80', bloodGroup: 'A+',
    fatherName: 'মোঃ শফিকুল ইসলাম', motherName: 'মোছাঃ ফাতেমা বেগম', guardianPhone: '01712345678'
  },
  { 
    id: '2', name: 'সুমাইয়া আক্তার', class: '১০ম', roll: 102, section: 'ক', group: 'বিজ্ঞান', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&fit=crop&q=80', bloodGroup: 'O+',
    fatherName: 'আব্দুল করিম', motherName: 'নাসিমা খাতুন', guardianPhone: '01812345678'
  },
  { 
    id: '3', name: 'রাকিব হাসান', class: '১০ম', roll: 201, section: 'খ', group: 'ব্যবসায় শিক্ষা', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80', bloodGroup: 'B+',
    fatherName: 'জহিরুল ইসলাম', motherName: 'রাবেয়া বসরি', guardianPhone: '01912345678'
  },
  { 
    id: '4', name: 'নুসরাত জাহান', class: '৯ম', roll: 101, section: 'ক', group: 'বিজ্ঞান', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop&q=80', bloodGroup: 'A-',
    fatherName: 'কামাল হোসেন', motherName: 'সালমা আক্তার', guardianPhone: '01612345678'
  },
  { 
    id: '5', name: 'মেহেদী হাসান', class: '৯ম', roll: 102, section: 'ক', group: 'বিজ্ঞান', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80', bloodGroup: 'AB+',
    fatherName: 'আনোয়ার হোসেন', motherName: 'কুলসুম বিবি', guardianPhone: '01512345678'
  },
  { 
    id: '6', name: 'ফাতেমা তুজ জোহরা', class: '৮ম', roll: 101, section: 'ক', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&fit=crop&q=80', bloodGroup: 'O-',
    fatherName: 'আবুল কালাম', motherName: 'মরিয়ম বেগম', guardianPhone: '01798765432'
  },
  { 
    id: '7', name: 'সজীব আহমেদ', class: '৮ম', roll: 102, section: 'ক', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&fit=crop&q=80', bloodGroup: 'B+',
    fatherName: 'রশিদ মিয়া', motherName: 'হালিমা খাতুন', guardianPhone: '01898765432'
  },
  { 
    id: '8', name: 'আরিফা সুলতানা', class: '৭ম', roll: 101, section: 'ক', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80', bloodGroup: 'A+',
    fatherName: 'সিদ্দিকুর রহমান', motherName: 'আমেনা বেগম', guardianPhone: '01998765432'
  },
  { 
    id: '9', name: 'তানভীর রহমান', class: '৭ম', roll: 102, section: 'খ', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80', bloodGroup: 'O+',
    fatherName: 'মাসুদ রানা', motherName: 'ফরিদা পারভীন', guardianPhone: '01698765432'
  },
  { 
    id: '10', name: 'জান্নাতুল ফেরদৌস', class: '৬ষ্ঠ', roll: 101, section: 'ক', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&fit=crop&q=80', bloodGroup: 'B-',
    fatherName: 'বেলাল হোসেন', motherName: 'নুরজাহান বেগম', guardianPhone: '01598765432'
  }
];

export const GALLERY_IMAGES: EventImage[] = [
  { 
    id: '1', 
    url: '/hero_slider.jpg', 
    caption: 'আন্তঃস্কুল ভলিবল ও বার্ষিক ক্রীড়া চ্যাম্পিয়নশিপ ২০২৫', 
    date: '2025-02-18', 
    category: 'Sports',
    photos: [
      '/hero_slider.jpg',
      '/hero_slider_2.jpg',
      'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&fit=crop&q=80'
    ]
  },
  { 
    id: '2', 
    url: '/hero_slider_2.jpg', 
    caption: 'জয়ন্তী ২০২৬ — ক্রীড়া, সহশিক্ষা ও মেধা মূল্যায়ন উৎসব', 
    date: '2026-01-20', 
    category: 'Jayanti',
    photos: [
      '/hero_slider_2.jpg',
      '/hero_slider_3.jpg',
      '/hero_slider.jpg',
      'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&fit=crop&q=80'
    ]
  },
  { 
    id: '3', 
    url: '/hero_slider_3.jpg', 
    caption: 'জয়ন্তী ২০২৬ — শিক্ষা, মানবতা ও ভবিষ্যৎ সম্মাননা স্মারক প্রদান', 
    date: '2026-01-22', 
    category: 'Leadership',
    photos: [
      '/hero_slider_3.jpg',
      'https://soshgskhulna.edu.bd/media/163/P.sir...jpg',
      'https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg',
      '/hero_slider_2.jpg',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&fit=crop&q=80'
    ]
  },
  { 
    id: '4', 
    url: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg', 
    caption: 'এস ও এস হারম্যান মেইনার স্কুল খুলনা — সুদৃশ্য মূল একাডেমি ও সবুজ ক্যাম্পাস', 
    date: '2025-01-10', 
    category: 'Campus',
    photos: [
      'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
      'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&fit=crop&q=80'
    ]
  },
  { 
    id: '5', 
    url: 'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg', 
    caption: 'বিদ্যালয় প্রাঙ্গণ ও শিক্ষার্থীদের সুশৃঙ্খল প্রাত্যহিক সমাবেশ', 
    date: '2025-01-15', 
    category: 'Assembly',
    photos: [
      'https://soshgskhulna.edu.bd/media/157/Slider-4.jpeg',
      '/hero_slider.jpg',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&fit=crop&q=80'
    ]
  },
  { 
    id: '6', 
    url: 'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg', 
    caption: 'স্মার্ট মাল্টিমিডিয়া ক্লাসরুম ও ব্যবহারিক বিজ্ঞান ল্যাব সেশন', 
    date: '2025-02-21', 
    category: 'Academic',
    photos: [
      'https://soshgskhulna.edu.bd/media/155/Slider-6.jpg',
      'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&fit=crop&q=80'
    ]
  },
];

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  { id: '1', title: 'ভর্তি ফরম ও আবেদন নির্দেশিকা ২০২৫', category: 'Form', date: '2025-01-05', size: '1.2 MB' },
  { id: '2', title: 'একাডেমিক প্রসপেক্টাস ও কারিকুলাম', category: 'Prospectus', date: '2025-01-10', size: '3.5 MB' },
  { id: '3', title: 'ক্লাস রুটিন ২০২৫ (Prep to Class X)', category: 'Routine', date: '2025-01-12', size: '500 KB' },
  { id: '4', title: 'পাঠ্যসূচি (Syllabus) ও বুক লিস্ট', category: 'Syllabus', date: '2025-01-15', size: '2.1 MB' },
  { id: '5', title: 'বার্ষিক ছুটির তালিকা ও একাডেমিক ক্যালেন্ডার ২০২৫', category: 'Routine', date: '2025-01-01', size: '250 KB' },
];
