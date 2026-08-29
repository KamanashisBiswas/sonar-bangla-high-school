import { NavItem, Notice, Teacher, EventImage, Student, Staff, CommitteeMember, DownloadItem } from './types';

export const SCHOOL_NAME = "সোনার বাংলা উচ্চ বিদ্যালয়";
export const SCHOOL_ADDRESS = "ধানমন্ডি, ঢাকা-১২০৯";
export const EIIN_CODE = "123456";
export const ESTABLISHED_YEAR = "১৯৮৫";

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
  { label: 'শিক্ষক বাতায়ন', url: 'http://www.teachers.gov.bd/' },
  { label: 'বিশ্ববিদ্যালয় মঞ্জুরী কমিশন (UGC)', url: 'http://www.ugc.gov.bd/' },
  { label: 'ব্যানবেইস (BANBEIS)', url: 'http://www.banbeis.gov.bd/' },
  { label: 'প্রাথমিক ও গণশিক্ষা মন্ত্রণালয়', url: 'http://www.mopme.gov.bd/' },
  { label: 'ঢাকা বিশ্ববিদ্যালয়', url: 'http://www.du.ac.bd/' },
  { label: 'বাংলাদেশ জাতীয় তথ্য বাতায়ন', url: 'http://www.bangladesh.gov.bd/' },
  { label: 'বাংলাদেশ ফরম', url: 'http://www.forms.gov.bd/' },
  { label: 'জাতীয় বিশ্ববিদ্যালয়', url: 'http://www.nu.ac.bd/' },
  { label: 'শিক্ষা মন্ত্রণালয়', url: 'http://www.moedu.gov.bd/' },
  { label: 'র‍্যাপিড আইটি ইআইএমএস (EIMS)', url: '#' },
  { label: 'যশোর শিক্ষা বোর্ড', url: 'http://www.jessoreboard.gov.bd/' },
];

export const MOCK_NOTICES: Notice[] = [
  {
    id: '1',
    title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৪',
    date: '2024-10-15',
    type: 'Event',
    content: 'আগামী ২০ অক্টোবর ২০২৪ তারিখ রোজ রবিবার বিদ্যালয়ের বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।'
  },
  {
    id: '2',
    title: 'অর্ধ-বার্ষিক পরীক্ষার রুটিন প্রকাশ',
    date: '2024-10-10',
    type: 'Exam',
    content: 'এতদ্বারা জানানো যাচ্ছে যে, ৬ষ্ঠ থেকে ১০ম শ্রেণীর অর্ধ-বার্ষিক পরীক্ষা আগামী ১লা নভেম্বর থেকে শুরু হবে।'
  },
  {
    id: '3',
    title: '৬ষ্ঠ শ্রেণিতে ভর্তি বিজ্ঞপ্তি ২০২৫',
    date: '2024-09-25',
    type: 'Admission',
    content: '২০২৫ শিক্ষাবর্ষে ৬ষ্ঠ শ্রেণিতে ভর্তির আবেদন ফরম আগামী ০১/১১/২০২৪ হতে বিতরণ করা হবে।'
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'মোঃ রফিকুল ইসলাম',
    designation: 'প্রধান শিক্ষক',
    subject: 'গণিত',
    image: 'https://picsum.photos/200/200?random=1',
    qualifications: 'M.Sc (Math), B.Ed'
  },
  {
    id: '2',
    name: 'ফারজানা আক্তার',
    designation: 'সহকারী প্রধান শিক্ষক',
    subject: 'ইংরেজি',
    image: 'https://picsum.photos/200/200?random=2',
    qualifications: 'MA (English), M.Ed'
  },
  {
    id: '3',
    name: 'আব্দুল করিম',
    designation: 'সিনিয়র শিক্ষক',
    subject: 'বাংলা',
    image: 'https://picsum.photos/200/200?random=3',
    qualifications: 'MA (Bangla)'
  },
  {
    id: '4',
    name: 'সুবর্ণা দাস',
    designation: 'সহকারী শিক্ষক',
    subject: 'বিজ্ঞান',
    image: 'https://picsum.photos/200/200?random=4',
    qualifications: 'B.Sc (Physics)'
  },
  {
    id: '5',
    name: 'মাহমুদ হাসান',
    designation: 'সহকারী শিক্ষক',
    subject: 'ধর্ম',
    image: 'https://picsum.photos/200/200?random=5',
    qualifications: 'MA (Islamic Studies)'
  },
  {
    id: '6',
    name: 'নাসরিন সুলতানা',
    designation: 'সহকারী শিক্ষক',
    subject: 'জীববিজ্ঞান',
    image: 'https://picsum.photos/200/200?random=6',
    qualifications: 'M.Sc (Botany)'
  }
];

export const OFFICE_STAFF: Staff[] = [
  { id: '1', name: 'মোঃ আনোয়ার হোসেন', designation: 'প্রধান করণিক', image: 'https://picsum.photos/200/200?random=50' },
  { id: '2', name: 'কামাল উদ্দিন', designation: 'হিসাব রক্ষক', image: 'https://picsum.photos/200/200?random=51' },
  { id: '3', name: 'রহিমা বেগম', designation: 'অফিস সহকারী', image: 'https://picsum.photos/200/200?random=52' },
  { id: '4', name: 'আবুল কালাম', designation: 'নিরাপত্তা প্রহরী', image: 'https://picsum.photos/200/200?random=53' },
];

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  { id: '1', name: 'আলহাজ্ব মকবুল হোসেন', position: 'সভাপতি', type: 'President', image: 'https://picsum.photos/200/200?random=60' },
  { id: '2', name: 'মোঃ রফিকুল ইসলাম', position: 'সদস্য সচিব (প্রধান শিক্ষক)', type: 'Member', image: 'https://picsum.photos/200/200?random=1' },
  { id: '3', name: 'ডাঃ সালমা বেগম', position: 'দাতা সদস্য', type: 'Donor', image: 'https://picsum.photos/200/200?random=61' },
  { id: '4', name: 'এডভোকেট জহিরুল ইসলাম', position: 'অভিভাবক সদস্য', type: 'Member', image: 'https://picsum.photos/200/200?random=62' },
];

export const MOCK_STUDENTS: Student[] = [
  { 
    id: '1', name: 'আব্দুল্লাহ আল মামুন', class: '১০ম', roll: 101, section: 'ক', group: 'বিজ্ঞান', image: 'https://picsum.photos/200/200?random=20', bloodGroup: 'A+',
    fatherName: 'মোঃ রফিকুল ইসলাম', motherName: 'মোছাঃ ফাতেমা বেগম', guardianPhone: '01712345678'
  },
  { 
    id: '2', name: 'সুমাইয়া আক্তার', class: '১০ম', roll: 102, section: 'ক', group: 'বিজ্ঞান', image: 'https://picsum.photos/200/200?random=21', bloodGroup: 'O+',
    fatherName: 'আব্দুল করিম', motherName: 'নাসিমা খাতুন', guardianPhone: '01812345678'
  },
  { 
    id: '3', name: 'রাকিব হাসান', class: '১০ম', roll: 201, section: 'খ', group: 'ব্যবসায় শিক্ষা', image: 'https://picsum.photos/200/200?random=22', bloodGroup: 'B+',
    fatherName: 'জহিরুল ইসলাম', motherName: 'রাবেয়া বসরি', guardianPhone: '01912345678'
  },
  { 
    id: '4', name: 'নুসরাত জাহান', class: '৯ম', roll: 101, section: 'ক', group: 'বিজ্ঞান', image: 'https://picsum.photos/200/200?random=23', bloodGroup: 'A-',
    fatherName: 'কামাল হোসেন', motherName: 'সালমা আক্তার', guardianPhone: '01612345678'
  },
  { 
    id: '5', name: 'মেহেদী হাসান', class: '৯ম', roll: 102, section: 'ক', group: 'বিজ্ঞান', image: 'https://picsum.photos/200/200?random=24', bloodGroup: 'AB+',
    fatherName: 'আনোয়ার হোসেন', motherName: 'কুলসুম বিবি', guardianPhone: '01512345678'
  },
  { 
    id: '6', name: 'ফাতেমা তুজ জোহরা', class: '৮ম', roll: 101, section: 'ক', image: 'https://picsum.photos/200/200?random=25', bloodGroup: 'O-',
    fatherName: 'আবুল কালাম', motherName: 'মরিয়ম বেগম', guardianPhone: '01798765432'
  },
  { 
    id: '7', name: 'সজীব আহমেদ', class: '৮ম', roll: 102, section: 'ক', image: 'https://picsum.photos/200/200?random=26', bloodGroup: 'B+',
    fatherName: 'রশিদ মিয়া', motherName: 'হালিমা খাতুন', guardianPhone: '01898765432'
  },
  { 
    id: '8', name: 'আরিফা সুলতানা', class: '৭ম', roll: 101, section: 'ক', image: 'https://picsum.photos/200/200?random=27', bloodGroup: 'A+',
    fatherName: 'সিদ্দিকুর রহমান', motherName: 'আমেনা বেগম', guardianPhone: '01998765432'
  },
  { 
    id: '9', name: 'তানভীর রহমান', class: '৭ম', roll: 102, section: 'খ', image: 'https://picsum.photos/200/200?random=28', bloodGroup: 'O+',
    fatherName: 'মাসুদ রানা', motherName: 'ফরিদা পারভীন', guardianPhone: '01698765432'
  },
  { 
    id: '10', name: 'জান্নাতুল ফেরদৌস', class: '৬ষ্ঠ', roll: 101, section: 'ক', image: 'https://picsum.photos/200/200?random=29', bloodGroup: 'B-',
    fatherName: 'বেলাল হোসেন', motherName: 'নুরজাহান বেগম', guardianPhone: '01598765432'
  },
  { 
    id: '11', name: 'ইমরান হোসেন', class: '৬ষ্ঠ', roll: 102, section: 'ক', image: 'https://picsum.photos/200/200?random=30', bloodGroup: 'AB-',
    fatherName: 'Shahjahan Ali', motherName: 'Rahima Khatun', guardianPhone: '01711223344'
  },
  { 
    id: '12', name: 'সামিয়া রহমান', class: '৯ম', roll: 301, section: 'গ', group: 'মানবিক', image: 'https://picsum.photos/200/200?random=31', bloodGroup: 'A+',
    fatherName: 'Faruk Ahmed', motherName: 'Sultana Razia', guardianPhone: '01811223344'
  },
];

export const GALLERY_IMAGES: EventImage[] = [
  { id: '1', url: 'https://picsum.photos/800/600?random=10', caption: 'বার্ষিক ক্রীড়া প্রতিযোগিতা', date: '2024-03-20' },
  { id: '2', url: 'https://picsum.photos/800/600?random=11', caption: 'বিজ্ঞান মেলা', date: '2024-05-15' },
  { id: '3', url: 'https://picsum.photos/800/600?random=12', caption: 'সাংস্কৃতিক অনুষ্ঠান', date: '2024-02-21' },
];

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  { id: '1', title: 'ভর্তি ফরম ২০২৫', category: 'Form', date: '2024-10-01', size: '1.2 MB' },
  { id: '2', title: 'একাডেমিক প্রসপেক্টাস', category: 'Prospectus', date: '2024-01-10', size: '3.5 MB' },
  { id: '3', title: 'ক্লাস রুটিন ২০২৫', category: 'Routine', date: '2024-12-20', size: '500 KB' },
  { id: '4', title: 'পাঠ্যসূচি (Syllabus) - ৬ষ্ঠ থেকে ১০ম', category: 'Syllabus', date: '2024-01-15', size: '2.1 MB' },
  { id: '5', title: 'ছুটির তালিকা ২০২৫', category: 'Routine', date: '2024-12-25', size: '200 KB' },
];