import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Printer, AlertCircle, CheckCircle, XCircle, 
  GraduationCap, Award, FileText, ChevronRight, Home, 
  Building, User, Calendar, CheckCircle2, ArrowRight,
  TrendingUp, BarChart3, ChevronDown, Download
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Result as ResultType } from '../types';
import { 
  ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem 
} from '../components/ui/MotionComponents';
import { 
  SCHOOL_NAME, SCHOOL_NAME_EN, SCHOOL_LOGO, SCHOOL_ADDRESS, 
  EIIN_CODE, ESTABLISHED_YEAR 
} from '../constants';

const Result: React.FC = () => {
  const { results, settings } = useData();
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  // Active Tab: 'institute' or 'individual'
  const [activeTab, setActiveTab] = useState<'institute' | 'individual'>('institute');

  // Filter States
  const [session, setSession] = useState('2025');
  const [examType, setExamType] = useState('annual');
  const [selectedClass, setSelectedClass] = useState('10');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedSection, setSelectedSection] = useState('all');
  const [viewType, setViewType] = useState<'summary' | 'subject'>('summary');
  const [rollNumber, setRollNumber] = useState('');

  // Result Search States
  const [hasSearched, setHasSearched] = useState(false);
  const [searchedTab, setSearchedTab] = useState<'institute' | 'individual'>('institute');
  const [selectedStudentResult, setSelectedStudentResult] = useState<ResultType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock comprehensive institute dataset for Class 10, 9, 8, 7, 6 across Science, Business Studies, Humanities, and General
  const instituteResultsData: Record<string, ResultType[]> = {
    '10': [
      {
        id: 'res-10-1',
        studentName: 'আব্দুল্লাহ আল মামুন',
        studentNameEn: 'Abdullah Al Mamun',
        roll: '101',
        class: '10',
        group: 'Science',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 672,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'মোঃ রফিকুল ইসলাম',
        motherName: 'মোসাম্মৎ মমতাজ বেগম',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 95, grade: 'A+', gpa: 5.0 },
          { code: '136', subject: 'পদার্থবিজ্ঞান', subjectEn: 'Physics', fullMarks: 100, obtained: 92, grade: 'A+', gpa: 5.0 },
          { code: '137', subject: 'রসায়ন', subjectEn: 'Chemistry', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '138', subject: 'জীববিজ্ঞান', subjectEn: 'Biology', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'তথ্য ও যোগাযোগ প্রযুক্তি', subjectEn: 'ICT', fullMarks: 50, obtained: 48, grade: 'A+', gpa: 5.0 },
        ]
      },
      {
        id: 'res-10-2',
        studentName: 'সুমাইয়া আক্তার',
        studentNameEn: 'Sumaiya Akter',
        roll: '102',
        class: '10',
        group: 'Business Studies',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 658,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'আব্দুল কাদের',
        motherName: 'সুফিয়া খাতুন',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 91, grade: 'A+', gpa: 5.0 },
          { code: '146', subject: 'হিসাববিজ্ঞান', subjectEn: 'Accounting', fullMarks: 100, obtained: 94, grade: 'A+', gpa: 5.0 },
          { code: '147', subject: 'ব্যবসায় উদ্যোগ', subjectEn: 'Business Entrepreneurship', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '152', subject: 'ফিন্যান্স ও ব্যাংকিং', subjectEn: 'Finance & Banking', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 46, grade: 'A+', gpa: 5.0 },
        ]
      },
      {
        id: 'res-10-3',
        studentName: 'তানভীর হাসান',
        studentNameEn: 'Tanvir Hasan',
        roll: '103',
        class: '10',
        group: 'Science',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 642,
        gpa: 4.88,
        grade: 'A',
        status: 'Passed',
        fatherName: 'মোঃ আবুল কালাম',
        motherName: 'রাবেয়া বেগম',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 80, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 78, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 93, grade: 'A+', gpa: 5.0 },
          { code: '136', subject: 'পদার্থবিজ্ঞান', subjectEn: 'Physics', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '137', subject: 'রসায়ন', subjectEn: 'Chemistry', fullMarks: 100, obtained: 81, grade: 'A+', gpa: 5.0 },
          { code: '138', subject: 'জীববিজ্ঞান', subjectEn: 'Biology', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 43, grade: 'A', gpa: 4.0 },
        ]
      },
      {
        id: 'res-10-4',
        studentName: 'ফাতেমা তুজ জোহরা',
        studentNameEn: 'Fatema Tuz Zohra',
        roll: '104',
        class: '10',
        group: 'Science',
        section: 'B',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 630,
        gpa: 4.75,
        grade: 'A',
        status: 'Passed',
        fatherName: 'মোঃ মোশাররফ হোসেন',
        motherName: 'বিলকিস আক্তার',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 78, grade: 'A', gpa: 4.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 75, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '136', subject: 'পদার্থবিজ্ঞান', subjectEn: 'Physics', fullMarks: 100, obtained: 83, grade: 'A+', gpa: 5.0 },
          { code: '137', subject: 'রসায়ন', subjectEn: 'Chemistry', fullMarks: 100, obtained: 79, grade: 'A', gpa: 4.0 },
          { code: '138', subject: 'জীববিজ্ঞান', subjectEn: 'Biology', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 43, grade: 'A', gpa: 4.0 },
        ]
      },
      {
        id: 'res-10-5',
        studentName: 'মেহেদী হাসান রনি',
        studentNameEn: 'Mehedi Hasan Rony',
        roll: '105',
        class: '10',
        group: 'Humanities',
        section: 'B',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 615,
        gpa: 4.60,
        grade: 'A',
        status: 'Passed',
        fatherName: 'শফিকুল ইসলাম',
        motherName: 'মাজেদা খাতুন',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 81, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 72, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '108', subject: 'ইতিহাস', subjectEn: 'History', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '110', subject: 'ভূগোল ও পরিবেশ', subjectEn: 'Geography', fullMarks: 100, obtained: 78, grade: 'A', gpa: 4.0 },
          { code: '140', subject: 'পৌরনীতি ও নাগরিকতা', subjectEn: 'Civics', fullMarks: 100, obtained: 80, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 41, grade: 'A', gpa: 4.0 },
        ]
      },
      {
        id: 'res-10-6',
        studentName: 'নুসরাত জাহান তিশা',
        studentNameEn: 'Nusrat Jahan Tisha',
        roll: '106',
        class: '10',
        group: 'Business Studies',
        section: 'B',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 640,
        gpa: 4.85,
        grade: 'A',
        status: 'Passed',
        fatherName: 'মোঃ শরিফুল ইসলাম',
        motherName: 'নাজমা আক্তার',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 79, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
          { code: '146', subject: 'হিসাববিজ্ঞান', subjectEn: 'Accounting', fullMarks: 100, obtained: 92, grade: 'A+', gpa: 5.0 },
          { code: '147', subject: 'ব্যবসায় উদ্যোগ', subjectEn: 'Business Entrepreneurship', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '152', subject: 'ফিন্যান্স ও ব্যাংকিং', subjectEn: 'Finance & Banking', fullMarks: 100, obtained: 83, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: 4.0 },
        ]
      },
      {
        id: 'res-10-7',
        studentName: 'আরিফুল ইসলাম সাকিব',
        studentNameEn: 'Ariful Islam Sakib',
        roll: '107',
        class: '10',
        group: 'Humanities',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 605,
        gpa: 4.50,
        grade: 'A',
        status: 'Passed',
        fatherName: 'মোঃ গোলাম মোস্তফা',
        motherName: 'জাহানারা বেগম',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 79, grade: 'A', gpa: 4.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 70, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 81, grade: 'A+', gpa: 5.0 },
          { code: '108', subject: 'ইতিহাস', subjectEn: 'History', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '110', subject: 'ভূগোল ও পরিবেশ', subjectEn: 'Geography', fullMarks: 100, obtained: 76, grade: 'A', gpa: 4.0 },
          { code: '140', subject: 'পৌরনীতি ও নাগরিকতা', subjectEn: 'Civics', fullMarks: 100, obtained: 78, grade: 'A', gpa: 4.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 40, grade: 'A', gpa: 4.0 },
        ]
      },
    ],
    '9': [
      {
        id: 'res-9-1',
        studentName: 'মোঃ তামিম ইকবাল',
        studentNameEn: 'Md. Tamim Iqbal',
        roll: '201',
        class: '9',
        group: 'Science',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 660,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'মোঃ রফিকুল ইসলাম',
        motherName: 'মোসাম্মৎ মমতাজ বেগম',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 83, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 92, grade: 'A+', gpa: 5.0 },
          { code: '136', subject: 'পদার্থবিজ্ঞান', subjectEn: 'Physics', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
          { code: '137', subject: 'রসায়ন', subjectEn: 'Chemistry', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '138', subject: 'জীববিজ্ঞান', subjectEn: 'Biology', fullMarks: 100, obtained: 87, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 47, grade: 'A+', gpa: 5.0 },
        ]
      },
      {
        id: 'res-9-2',
        studentName: 'মারিয়াম আক্তার তানহা',
        studentNameEn: 'Mariam Akter Tanha',
        roll: '202',
        class: '9',
        group: 'Business Studies',
        section: 'B',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 635,
        gpa: 4.80,
        grade: 'A',
        status: 'Passed',
        fatherName: 'আমিরুল ইসলাম',
        motherName: 'তাসমিন আক্তার',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 79, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '146', subject: 'হিসাববিজ্ঞান', subjectEn: 'Accounting', fullMarks: 100, obtained: 90, grade: 'A+', gpa: 5.0 },
          { code: '147', subject: 'ব্যবসায় উদ্যোগ', subjectEn: 'Business Entrepreneurship', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '152', subject: 'ফিন্যান্স ও ব্যাংকিং', subjectEn: 'Finance & Banking', fullMarks: 100, obtained: 83, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: 4.0 },
        ]
      },
      {
        id: 'res-9-3',
        studentName: 'ফারিয়া তাবাসসুম',
        studentNameEn: 'Faria Tabassum',
        roll: '203',
        class: '9',
        group: 'Humanities',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 610,
        gpa: 4.55,
        grade: 'A',
        status: 'Passed',
        fatherName: 'কামাল হোসেন',
        motherName: 'রোকেয়া বেগম',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 80, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 73, grade: 'A', gpa: 4.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '108', subject: 'ইতিহাস', subjectEn: 'History', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '110', subject: 'ভূগোল ও পরিবেশ', subjectEn: 'Geography', fullMarks: 100, obtained: 77, grade: 'A', gpa: 4.0 },
          { code: '140', subject: 'পৌরনীতি ও নাগরিকতা', subjectEn: 'Civics', fullMarks: 100, obtained: 79, grade: 'A', gpa: 4.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 41, grade: 'A', gpa: 4.0 },
        ]
      }
    ],
    '8': [
      {
        id: 'res-8-1',
        studentName: 'আহমেদ জুবায়ের',
        studentNameEn: 'Ahmed Zubair',
        roll: '301',
        class: '8',
        group: 'General',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 650,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'জাহিদুল ইসলাম',
        motherName: 'ফারহানা ইয়াসমিন',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 87, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 94, grade: 'A+', gpa: 5.0 },
          { code: '127', subject: 'বিজ্ঞান', subjectEn: 'General Science', fullMarks: 100, obtained: 91, grade: 'A+', gpa: 5.0 },
          { code: '150', subject: 'বাংলাদেশ ও বিশ্বপরিচয়', subjectEn: 'Bangladesh & Global Studies', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '111', subject: 'ধর্ম ও নৈতিক শিক্ষা', subjectEn: 'Religion & Moral Education', fullMarks: 100, obtained: 90, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 46, grade: 'A+', gpa: 5.0 },
        ]
      },
      {
        id: 'res-8-2',
        studentName: 'তাহমিনা চৌধুরী',
        studentNameEn: 'Tahmina Chowdhury',
        roll: '302',
        class: '8',
        group: 'General',
        section: 'B',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 638,
        gpa: 4.90,
        grade: 'A',
        status: 'Passed',
        fatherName: 'আব্দুর রব চৌধুরী',
        motherName: 'নাজনীন চৌধুরী',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 91, grade: 'A+', gpa: 5.0 },
          { code: '127', subject: 'বিজ্ঞান', subjectEn: 'General Science', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '150', subject: 'বাংলাদেশ ও বিশ্বপরিচয়', subjectEn: 'Bangladesh & Global Studies', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '111', subject: 'ধর্ম ও নৈতিক শিক্ষা', subjectEn: 'Religion & Moral Education', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 45, grade: 'A+', gpa: 5.0 },
        ]
      }
    ],
    '7': [
      {
        id: 'res-7-1',
        studentName: 'সাদিয়া তাসনিম',
        studentNameEn: 'Sadia Tasnim',
        roll: '401',
        class: '7',
        group: 'General',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 645,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'মাহমুদুল হাসান',
        motherName: 'সালমা জাহান',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 93, grade: 'A+', gpa: 5.0 },
          { code: '127', subject: 'বিজ্ঞান', subjectEn: 'General Science', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
          { code: '150', subject: 'বাংলাদেশ ও বিশ্বপরিচয়', subjectEn: 'Bangladesh & Global Studies', fullMarks: 100, obtained: 87, grade: 'A+', gpa: 5.0 },
          { code: '111', subject: 'ধর্ম ও নৈতিক শিক্ষা', subjectEn: 'Religion & Moral Education', fullMarks: 100, obtained: 91, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 45, grade: 'A+', gpa: 5.0 },
        ]
      }
    ],
    '6': [
      {
        id: 'res-6-1',
        studentName: 'নাঈমুর রহমান',
        studentNameEn: 'Naimur Rahman',
        roll: '501',
        class: '6',
        group: 'General',
        section: 'A',
        year: '2025',
        examName: isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024',
        totalMarks: 640,
        gpa: 5.00,
        grade: 'A+',
        status: 'Passed',
        fatherName: 'আনোয়ার হোসেন',
        motherName: 'রোকসানা পারভীন',
        subjects: [
          { code: '101', subject: 'বাংলা', subjectEn: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: 5.0 },
          { code: '107', subject: 'ইংরেজি', subjectEn: 'English', fullMarks: 100, obtained: 82, grade: 'A+', gpa: 5.0 },
          { code: '109', subject: 'গণিত', subjectEn: 'Mathematics', fullMarks: 100, obtained: 94, grade: 'A+', gpa: 5.0 },
          { code: '127', subject: 'বিজ্ঞান', subjectEn: 'General Science', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
          { code: '150', subject: 'বাংলাদেশ ও বিশ্বপরিচয়', subjectEn: 'Bangladesh & Global Studies', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
          { code: '111', subject: 'ধর্ম ও নৈতিক শিক্ষা', subjectEn: 'Religion & Moral Education', fullMarks: 100, obtained: 90, grade: 'A+', gpa: 5.0 },
          { code: '154', subject: 'আইসিটি', subjectEn: 'ICT', fullMarks: 50, obtained: 45, grade: 'A+', gpa: 5.0 },
        ]
      }
    ]
  };

  // Filtered raw list for selected class
  const rawClassList = instituteResultsData[selectedClass] || instituteResultsData['10'] || [];

  // Filtered list based on selected group
  const currentClassList = rawClassList.filter(stu => {
    if (selectedGroup !== 'all') {
      const g = (stu.group || '').toLowerCase();
      if (selectedGroup === 'science' && !g.includes('science')) return false;
      if (selectedGroup === 'business' && !g.includes('business')) return false;
      if (selectedGroup === 'humanities' && !g.includes('humanities')) return false;
    }
    return true;
  });

  // Helper functions for translation
  const getGroupName = (group?: string) => {
    if (!group) return isBn ? 'সকল বিভাগ' : 'All Groups';
    if (group.toLowerCase().includes('science') || group.includes('বিজ্ঞান')) return isBn ? 'বিজ্ঞান' : 'Science';
    if (group.toLowerCase().includes('business') || group.includes('ব্যবসায়')) return isBn ? 'ব্যবসায় শিক্ষা' : 'Business Studies';
    if (group.toLowerCase().includes('humanities') || group.includes('মানবিক')) return isBn ? 'মানবিক' : 'Humanities';
    return isBn ? 'সাধারণ' : 'General';
  };

  const getExamName = (exam: string) => {
    if (exam === 'annual') return isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination';
    if (exam === 'half_yearly') return isBn ? 'অর্ধবার্ষিক পরীক্ষা' : 'Half Yearly Examination';
    if (exam === 'pre_test') return isBn ? 'প্রাক-নির্বাচনী পরীক্ষা' : 'Pre-Test Examination';
    if (exam === 'test') return isBn ? 'নির্বাচনী পরীক্ষা' : 'Test Examination';
    return isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination';
  };

  // Handle Search Submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSelectedStudentResult(null);

    setTimeout(() => {
      setLoading(false);
      setHasSearched(true);
      setSearchedTab(activeTab);

      if (activeTab === 'institute') {
        if (currentClassList.length === 0) {
          setError(
            isBn
              ? `দুঃখিত, ${selectedClass}ম শ্রেণির "${getGroupName(selectedGroup)}" বিভাগে কোনো শিক্ষার্থীর ফলাফল খুঁজে পাওয়া যায়নি।`
              : `Sorry, no academic results found for Class ${selectedClass} in ${getGroupName(selectedGroup)} group.`
          );
        }
      } else if (activeTab === 'individual') {
        const searchRoll = rollNumber.trim();
        const found = rawClassList.find(r => r.roll.trim() === searchRoll || String(r.roll) === searchRoll);
        if (found) {
          setSelectedStudentResult(found);
        } else {
          setError(
            isBn
              ? `দুঃখিত, ${selectedClass}ম শ্রেণির রোল "${searchRoll}"-এর কোনো ফলাফল খুঁজে পাওয়া যায়নি। রোল নম্বর সঠিক কিনা যাচাই করুন। (উদা: ১০১, ১০২, ১০৩)`
              : `Sorry, no academic record found for Class ${selectedClass} with Roll "${searchRoll}". Please check the roll number. (e.g. 101, 102, 103)`
          );
        }
      }
    }, 300);
  };

  // Handle Print Institute Result Sheet (Tabulation & Merit List)
  const handlePrintInstituteResult = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const currentExamLabel = getExamName(examType);
    const currentGroupLabel = getGroupName(selectedGroup);
    
    // Explicitly compute the filtered list according to current selected class & group
    const classData = instituteResultsData[selectedClass] || instituteResultsData['10'] || [];
    const printList = classData.filter(stu => {
      if (selectedGroup !== 'all') {
        const g = (stu.group || '').toLowerCase();
        if (selectedGroup === 'science' && !g.includes('science')) return false;
        if (selectedGroup === 'business' && !g.includes('business')) return false;
        if (selectedGroup === 'humanities' && !g.includes('humanities')) return false;
      }
      return true;
    });

    const totalStudents = printList.length;
    const passedCount = printList.filter(s => s.status === 'Passed').length;
    const passRate = totalStudents > 0 ? ((passedCount / totalStudents) * 100).toFixed(0) : '100';

    const printContent = `
      <!DOCTYPE html>
      <html lang="${isBn ? 'bn' : 'en'}">
      <head>
        <meta charset="UTF-8">
        <title>Institute Results - Class ${selectedClass} - ${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</title>
        <style>
          @page { size: A4 landscape; margin: 8mm 10mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; }
          body { color: #0f172a; background: #fff; padding: 5px; }
          .border-wrapper { border: 2px solid #00704A; border-radius: 8px; padding: 14px 18px; position: relative; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #00704A; padding-bottom: 10px; margin-bottom: 12px; }
          .header-left { display: flex; align-items: center; gap: 12px; }
          .logo { width: 55px; height: 55px; object-fit: contain; }
          .school-title-main { font-size: 18px; font-weight: 900; color: #00704A; }
          .school-info { font-size: 10.5px; color: #475569; margin-top: 1px; }
          .eiin-badge { display: inline-block; background: #eaf7f0; color: #00704A; border: 1px solid #bbf7d0; padding: 2px 7px; border-radius: 4px; font-size: 10.5px; font-weight: 800; }
          .doc-banner { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 7px 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; }
          .doc-title { font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; }
          .doc-metrics { display: flex; gap: 14px; font-size: 11px; font-weight: 700; color: #334155; }
          .doc-metrics strong { color: #00704A; font-weight: 900; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: center; }
          th { background-color: #f1f5f9; color: #1e293b; font-weight: 800; font-size: 10.5px; text-transform: uppercase; }
          .text-left { text-align: left; }
          .grade-badge { display: inline-block; padding: 1px 6px; border-radius: 4px; font-weight: 800; font-size: 10.5px; background: #eaf7f0; color: #00704A; }
          .signatures { display: flex; justify-content: space-between; margin-top: 35px; padding: 0 20px; }
          .sig-box { text-align: center; width: 160px; }
          .sig-line { border-top: 1.2px solid #475569; margin-bottom: 3px; width: 100%; }
          .sig-title { font-size: 10px; font-weight: 800; color: #1e293b; }
        </style>
      </head>
      <body>
        <div class="border-wrapper">
          <div class="header">
            <div class="header-left">
              <img class="logo" src="${SCHOOL_LOGO}" alt="Logo" onerror="this.style.display='none'" />
              <div>
                <div class="school-title-main">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
                <div class="school-info">
                  ${isBn ? 'গল্লামারী, খুলনা - ৯২০৮ | ফোন: ০২৪-৭৭৭২৬৭৭৫ | ইমেইল: soshgskhulna@sos-bangladesh.org' : 'Gollamari, Khulna - 9208 | Phone: 024-77726775 | Email: soshgskhulna@sos-bangladesh.org'}
                </div>
              </div>
            </div>
            <div style="text-align: right;">
              <div class="eiin-badge">EIIN: ${EIIN_CODE}</div>
              <div class="school-info">${isBn ? `স্থাপিত: ${ESTABLISHED_YEAR} ইং` : 'Established: 1987'}</div>
            </div>
          </div>

          <div class="doc-banner">
            <div class="doc-title">${isBn ? `${toBanglaNum(selectedClass)}ম শ্রেণি ${selectedGroup !== 'all' ? `(${currentGroupLabel} বিভাগ)` : ''} প্রাতিষ্ঠানিক ফলাফল ও মেধা তালিকা` : `Class ${selectedClass} ${selectedGroup !== 'all' ? `(${currentGroupLabel} Group)` : ''} Institutional Result & Merit Sheet`}</div>
            <div class="doc-metrics">
              <div>${isBn ? 'শিক্ষাবর্ষ:' : 'Session:'} <strong>${isBn ? toBanglaNum(session) : session}</strong></div>
              <div>${isBn ? 'পরীক্ষা:' : 'Exam:'} <strong>${currentExamLabel}</strong></div>
              <div>${isBn ? 'বিভাগ:' : 'Group:'} <strong>${currentGroupLabel}</strong></div>
              <div>${isBn ? 'মোট শিক্ষার্থী:' : 'Total Students:'} <strong>${isBn ? toBanglaNum(totalStudents) : totalStudents}</strong></div>
              <div>${isBn ? 'পাসের হার:' : 'Pass Rate:'} <strong>${isBn ? toBanglaNum(passRate) : passRate}%</strong></div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 8%;">${isBn ? 'মেধা ক্রম' : 'SL / POS'}</th>
                <th style="width: 10%;">${isBn ? 'রোল নম্বর' : 'ROLL'}</th>
                <th class="text-left">${isBn ? 'শিক্ষার্থীর নাম' : 'STUDENT NAME'}</th>
                <th>${isBn ? 'পিতার নাম' : "FATHER'S NAME"}</th>
                <th>${isBn ? 'বিভাগ / শাখা' : 'GROUP & SEC'}</th>
                <th>${isBn ? 'মোট নম্বর' : 'TOTAL MARKS'}</th>
                <th>${isBn ? 'জিপিএ (GPA)' : 'GPA'}</th>
                <th>${isBn ? 'লেটার গ্রেড' : 'GRADE'}</th>
                <th>${isBn ? 'ফলাফল স্থিতি' : 'STATUS'}</th>
              </tr>
            </thead>
            <tbody>
              ${printList.map((s, idx) => `
                <tr>
                  <td style="font-weight: 800; color: #64748b;">${isBn ? toBanglaNum(idx + 1) : idx + 1}</td>
                  <td style="font-family: monospace; font-weight: 800;">${isBn ? toBanglaNum(s.roll) : s.roll}</td>
                  <td class="text-left" style="font-weight: 700;">${isBn ? s.studentName : (s.studentNameEn || s.studentName)}</td>
                  <td class="text-left" style="color: #475569;">${s.fatherName || '-'}</td>
                  <td>${getGroupName(s.group)} (${s.section || 'A'})</td>
                  <td style="font-weight: 800; color: #00704A;">${isBn ? toBanglaNum(s.totalMarks) : s.totalMarks}</td>
                  <td style="font-weight: 800;">${isBn ? toBanglaNum(s.gpa.toFixed(2)) : s.gpa.toFixed(2)}</td>
                  <td><span class="grade-badge">${s.grade}</span></td>
                  <td style="font-weight: 800; color: #166534;">${isBn ? 'উত্তীর্ণ' : 'Passed'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'শ্রেণি শিক্ষকের স্বাক্ষর' : 'Class Teacher'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'পরীক্ষা নিয়ন্ত্রক কমিটি' : 'Exam Controller Committee'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'প্রধান শিক্ষক / অধ্যক্ষ' : 'Principal / Headmaster'}</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  // Handle Print Marksheet / Transcript
  const handlePrintMarksheet = (res: ResultType) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const printContent = `
      <!DOCTYPE html>
      <html lang="${isBn ? 'bn' : 'en'}">
      <head>
        <meta charset="UTF-8">
        <title>Academic Transcript - ${res.studentName} - Roll ${res.roll}</title>
        <style>
          @page { size: A4 portrait; margin: 12mm 15mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; }
          body { color: #0f172a; background: #fff; padding: 10px; }
          .border-wrapper { border: 2.5px solid #00704A; border-radius: 12px; padding: 22px 24px; position: relative; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #00704A; padding-bottom: 12px; margin-bottom: 16px; }
          .header-left { display: flex; align-items: center; gap: 14px; }
          .logo { width: 65px; height: 65px; object-fit: contain; }
          .school-title-main { font-size: 20px; font-weight: 900; color: #00704A; }
          .school-info { font-size: 11px; color: #475569; margin-top: 2px; }
          .eiin-badge { display: inline-block; background: #eaf7f0; color: #00704A; border: 1px solid #bbf7d0; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 800; }
          .doc-banner { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 9px 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
          .doc-title { font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; }
          .doc-exam { font-size: 12px; font-weight: 800; color: #00704A; }
          .info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 16px; font-size: 11.5px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .info-item label { color: #64748b; font-size: 10px; font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 2px; }
          .info-item span { font-weight: 800; color: #0f172a; font-size: 12px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 18px; font-size: 11.5px; }
          th, td { border: 1px solid #cbd5e1; padding: 7px 10px; text-align: left; }
          th { background-color: #f1f5f9; color: #1e293b; font-weight: 800; font-size: 11px; text-transform: uppercase; }
          .text-center { text-align: center; }
          .grade-badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-weight: 800; font-size: 11px; background: #eaf7f0; color: #00704A; }
          .summary-card { background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 8px; padding: 12px 16px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; }
          .summary-title { font-size: 13px; font-weight: 800; color: #166534; }
          .summary-metrics { display: flex; gap: 20px; font-size: 12px; font-weight: 700; }
          .summary-metrics strong { color: #15803d; font-size: 14px; }
          .signatures { display: flex; justify-content: space-between; margin-top: 50px; padding: 0 10px; }
          .sig-box { text-align: center; width: 160px; }
          .sig-line { border-top: 1.2px solid #475569; margin-bottom: 4px; width: 100%; }
          .sig-title { font-size: 10.5px; font-weight: 800; color: #1e293b; }
        </style>
      </head>
      <body>
        <div class="border-wrapper">
          <div class="header">
            <div class="header-left">
              <img class="logo" src="${SCHOOL_LOGO}" alt="Logo" onerror="this.style.display='none'" />
              <div>
                <div class="school-title-main">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
                <div class="school-info">
                  ${isBn ? 'গল্লামারী, খুলনা - ৯২০৮ | ফোন: ০২৪-৭৭৭২৬৭৭৫ | ইমেইল: soshgskhulna@sos-bangladesh.org' : 'Gollamari, Khulna - 9208 | Phone: 024-77726775 | Email: soshgskhulna@sos-bangladesh.org'}
                </div>
              </div>
            </div>
            <div style="text-align: right;">
              <div class="eiin-badge">EIIN: ${EIIN_CODE}</div>
              <div class="school-info">${isBn ? `স্থাপিত: ${ESTABLISHED_YEAR} ইং` : 'Established: 1987'}</div>
            </div>
          </div>

          <div class="doc-banner">
            <div class="doc-title">${isBn ? 'অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট ও মার্কশিট' : 'OFFICIAL ACADEMIC TRANSCRIPT & MARKSHEET'}</div>
            <div class="doc-exam">${res.examName || (isBn ? 'বার্ষিক পরীক্ষা ২০২৪' : 'Annual Examination 2024')}</div>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <label>${isBn ? 'শিক্ষার্থীর নাম' : 'STUDENT NAME'}</label>
              <span>${isBn ? res.studentName : (res.studentNameEn || res.studentName)}</span>
            </div>
            <div class="info-item">
              <label>${isBn ? 'শ্রেণি ও রোল' : 'CLASS & ROLL'}</label>
              <span>${isBn ? `${res.class}ম শ্রেণি | রোল: ${toBanglaNum(res.roll)}` : `Class ${res.class} | Roll: ${res.roll}`}</span>
            </div>
            <div class="info-item">
              <label>${isBn ? 'বিভাগ / শাখা' : 'GROUP / SECTION'}</label>
              <span>${res.group || 'General'} | Sec: ${res.section || 'A'}</span>
            </div>
            <div class="info-item">
              <label>${isBn ? 'পিতার নাম' : "FATHER'S NAME"}</label>
              <span>${res.fatherName || '-'}</span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width: 12%;">${isBn ? 'কোড' : 'CODE'}</th>
                <th>${isBn ? 'বিষয়' : 'SUBJECT NAME'}</th>
                <th class="text-center" style="width: 15%;">${isBn ? 'পূর্ণমান' : 'FULL MARKS'}</th>
                <th class="text-center" style="width: 15%;">${isBn ? 'প্রাপ্ত নম্বর' : 'OBTAINED'}</th>
                <th class="text-center" style="width: 15%;">${isBn ? 'লেটার গ্রেড' : 'GRADE'}</th>
                <th class="text-center" style="width: 15%;">${isBn ? 'গ্রেড পয়েন্ট' : 'GPA'}</th>
              </tr>
            </thead>
            <tbody>
              ${res.subjects.map(s => `
                <tr>
                  <td style="font-family: monospace; font-weight: 700; color: #64748b;">${isBn ? toBanglaNum(s.code) : s.code}</td>
                  <td style="font-weight: 700;">${isBn ? s.subject : (s.subjectEn || s.subject)}</td>
                  <td class="text-center">${isBn ? toBanglaNum(s.fullMarks) : s.fullMarks}</td>
                  <td class="text-center" style="font-weight: 800; color: #00704A;">${isBn ? toBanglaNum(s.obtained) : s.obtained}</td>
                  <td class="text-center"><span class="grade-badge">${s.grade}</span></td>
                  <td class="text-center" style="font-weight: 800;">${isBn ? toBanglaNum(s.gpa.toFixed(2)) : s.gpa.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot>
              <tr style="background: #f8fafc; font-weight: 800;">
                <td colspan="2" style="text-align: right; text-transform: uppercase;">${isBn ? 'সর্বমোট / চূড়ান্ত ফলাফল:' : 'TOTAL / FINAL RESULT:'}</td>
                <td class="text-center">${isBn ? toBanglaNum(res.subjects.reduce((acc, curr) => acc + curr.fullMarks, 0)) : res.subjects.reduce((acc, curr) => acc + curr.fullMarks, 0)}</td>
                <td class="text-center" style="font-size: 13px; color: #00704A;">${isBn ? toBanglaNum(res.totalMarks) : res.totalMarks}</td>
                <td class="text-center"><span class="grade-badge" style="background: #00704A; color: #fff;">${res.grade}</span></td>
                <td class="text-center" style="font-size: 13px; color: #00704A;">${isBn ? toBanglaNum(res.gpa.toFixed(2)) : res.gpa.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>

          <div class="summary-card">
            <div class="summary-title">${isBn ? 'ফলাফল স্থিতি: উত্তীর্ণ (PASSED)' : 'ACADEMIC STATUS: PASSED'}</div>
            <div class="summary-metrics">
              <div>${isBn ? 'মোট নম্বর:' : 'Total Marks:'} <strong>${isBn ? toBanglaNum(res.totalMarks) : res.totalMarks}</strong></div>
              <div>${isBn ? 'প্রাপ্ত জিপিএ:' : 'Earned GPA:'} <strong>${isBn ? toBanglaNum(res.gpa.toFixed(2)) : res.gpa.toFixed(2)}</strong></div>
              <div>${isBn ? 'লেটার গ্রেড:' : 'Grade:'} <strong>${res.grade}</strong></div>
            </div>
          </div>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'শ্রেণি শিক্ষকের স্বাক্ষর' : 'Class Teacher'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'পরীক্ষা নিয়ন্ত্রক' : 'Controller of Exams'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'প্রধান শিক্ষক / অধ্যক্ষ' : 'Principal / Headmaster'}</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  const selectClass = "w-full bg-slate-50/90 border border-slate-200/90 focus:border-emerald-600 focus:bg-white px-3 py-2 rounded-xl outline-none transition text-slate-800 font-bold text-xs sm:text-sm appearance-none cursor-pointer";
  const labelClass = "block text-[11px] font-black text-slate-600 mb-1 uppercase tracking-wider";

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
              <span>{isBn ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'একাডেমিক ফলাফল ও মার্কশিট' : 'Academic Results & Marksheet'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Award size={13} className="text-emerald-700" />
              <span>{isBn ? 'একাডেমিক ফলাফল পোর্টাল' : 'ACADEMIC RESULT PORTAL'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'একাডেমিক ফলাফল ও মার্কশিট' : 'Academic Results & Marksheet'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'শ্রেণি ও রোল নম্বর ব্যবহার করে ফলাফল অনুসন্ধান করুন এবং অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট সংগ্রহ করুন।' 
                : 'Search results and generate official academic transcripts using student Roll and Class.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 2. MAIN SEARCH CARD WITH TABS (ANIMATED WITH SCROLLREVEAL) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          
          {/* Dual Tabs Header */}
          <div className="flex items-center border-b border-slate-100 pb-0 gap-8">
            <button
              onClick={() => { setActiveTab('institute'); setError(''); }}
              className={`flex items-center gap-2 pb-3.5 font-black text-xs sm:text-sm transition relative cursor-pointer ${
                activeTab === 'institute' 
                  ? 'text-emerald-800 border-b-2 border-emerald-600' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Building size={16} className={activeTab === 'institute' ? 'text-emerald-700' : 'text-slate-400'} />
              <span>{isBn ? 'প্রতিষ্ঠান ফলাফল' : 'Institute Result'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('individual'); setError(''); }}
              className={`flex items-center gap-2 pb-3.5 font-black text-xs sm:text-sm transition relative cursor-pointer ${
                activeTab === 'individual' 
                  ? 'text-emerald-800 border-b-2 border-emerald-600' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <User size={16} className={activeTab === 'individual' ? 'text-emerald-700' : 'text-slate-400'} />
              <span>{isBn ? 'একক শিক্ষার্থী ফলাফল' : 'Individual Student Result'}</span>
            </button>
          </div>

          {/* Filters Form */}
          <form onSubmit={handleSearch} className="space-y-6">
            {activeTab === 'institute' ? (
              /* Institute Result: Session, Examination, Class, Group (Optional) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Session */}
                <div>
                  <label className={labelClass}>{isBn ? 'শিক্ষাবর্ষ (SESSION)' : 'SESSION'}</label>
                  <div className="relative">
                    <select 
                      value={session} 
                      onChange={e => setSession(e.target.value)} 
                      className={`${selectClass} pl-8 pr-8`}
                    >
                      <option value="2025">{isBn ? '২০২৫' : '2025'}</option>
                      <option value="2024">{isBn ? '২০২৪' : '2024'}</option>
                      <option value="2023">{isBn ? '২০২৩' : '2023'}</option>
                      <option value="2026">{isBn ? '২০২৬' : '2026'}</option>
                    </select>
                    <Calendar size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Examination */}
                <div>
                  <label className={labelClass}>{isBn ? 'পরীক্ষা (EXAMINATION)' : 'EXAMINATION'}</label>
                  <div className="relative">
                    <select 
                      value={examType} 
                      onChange={e => setExamType(e.target.value)} 
                      className={`${selectClass} pr-8`}
                    >
                      <option value="annual">{isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination'}</option>
                      <option value="half_yearly">{isBn ? 'অর্ধবার্ষিক পরীক্ষা' : 'Half Yearly Examination'}</option>
                      <option value="pre_test">{isBn ? 'প্রাক-নির্বাচনী পরীক্ষা' : 'Pre-Test Examination'}</option>
                      <option value="test">{isBn ? 'নির্বাচনী পরীক্ষা' : 'Test Examination'}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className={labelClass}>{isBn ? 'শ্রেণি (CLASS)' : 'CLASS'}</label>
                  <div className="relative">
                    <select 
                      value={selectedClass} 
                      onChange={e => setSelectedClass(e.target.value)} 
                      className={`${selectClass} pr-8`}
                    >
                      <option value="10">{isBn ? '১০ম শ্রেণি (Class 10)' : 'Class 10'}</option>
                      <option value="9">{isBn ? '৯ম শ্রেণি (Class 9)' : 'Class 9'}</option>
                      <option value="8">{isBn ? '৮ম শ্রেণি (Class 8)' : 'Class 8'}</option>
                      <option value="7">{isBn ? '৭ম শ্রেণি (Class 7)' : 'Class 7'}</option>
                      <option value="6">{isBn ? '৬ষ্ঠ শ্রেণি (Class 6)' : 'Class 6'}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Group (Optional) */}
                <div>
                  <label className={labelClass}>{isBn ? 'বিভাগ (GROUP - ঐচ্ছিক)' : 'GROUP (OPTIONAL)'}</label>
                  <div className="relative">
                    <select 
                      value={selectedGroup} 
                      onChange={e => setSelectedGroup(e.target.value)} 
                      className={`${selectClass} pr-8`}
                    >
                      <option value="all">{isBn ? 'সকল বিভাগ' : 'All Groups'}</option>
                      <option value="science">{isBn ? 'বিজ্ঞান (Science)' : 'Science'}</option>
                      <option value="business">{isBn ? 'ব্যবসায় শিক্ষা (Business)' : 'Business Studies'}</option>
                      <option value="humanities">{isBn ? 'মানবিক (Humanities)' : 'Humanities'}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            ) : (
              /* Individual Student Result: Session, Examination, Class, Student Roll Number */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Session */}
                <div>
                  <label className={labelClass}>{isBn ? 'শিক্ষাবর্ষ (SESSION)' : 'SESSION'}</label>
                  <div className="relative">
                    <select 
                      value={session} 
                      onChange={e => setSession(e.target.value)} 
                      className={`${selectClass} pl-8 pr-8`}
                    >
                      <option value="2025">{isBn ? '২০২৫' : '2025'}</option>
                      <option value="2024">{isBn ? '২০২৪' : '2024'}</option>
                      <option value="2023">{isBn ? '২০২৩' : '2023'}</option>
                      <option value="2026">{isBn ? '২০২৬' : '2026'}</option>
                    </select>
                    <Calendar size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Examination */}
                <div>
                  <label className={labelClass}>{isBn ? 'পরীক্ষা (EXAMINATION)' : 'EXAMINATION'}</label>
                  <div className="relative">
                    <select 
                      value={examType} 
                      onChange={e => setExamType(e.target.value)} 
                      className={`${selectClass} pr-8`}
                    >
                      <option value="annual">{isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination'}</option>
                      <option value="half_yearly">{isBn ? 'অর্ধবার্ষিক পরীক্ষা' : 'Half Yearly Examination'}</option>
                      <option value="pre_test">{isBn ? 'প্রাক-নির্বাচনী পরীক্ষা' : 'Pre-Test Examination'}</option>
                      <option value="test">{isBn ? 'নির্বাচনী পরীক্ষা' : 'Test Examination'}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className={labelClass}>{isBn ? 'শ্রেণি (CLASS)' : 'CLASS'}</label>
                  <div className="relative">
                    <select 
                      value={selectedClass} 
                      onChange={e => setSelectedClass(e.target.value)} 
                      className={`${selectClass} pr-8`}
                    >
                      <option value="10">{isBn ? '১০ম শ্রেণি (Class 10)' : 'Class 10'}</option>
                      <option value="9">{isBn ? '৯ম শ্রেণি (Class 9)' : 'Class 9'}</option>
                      <option value="8">{isBn ? '৮ম শ্রেণি (Class 8)' : 'Class 8'}</option>
                      <option value="7">{isBn ? '৭ম শ্রেণি (Class 7)' : 'Class 7'}</option>
                      <option value="6">{isBn ? '৬ষ্ঠ শ্রেণি (Class 6)' : 'Class 6'}</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Student Roll Number */}
                <div>
                  <label className={labelClass}>{isBn ? 'শিক্ষার্থীর রোল নম্বর *' : 'STUDENT ROLL NUMBER *'}</label>
                  <input 
                    type="text"
                    required
                    value={rollNumber}
                    onChange={e => setRollNumber(e.target.value)}
                    placeholder={isBn ? 'উদা: ১০১, ১০২' : 'e.g. 101, 102'}
                    className="w-full bg-slate-50/90 border border-slate-200/90 focus:border-emerald-600 focus:bg-white px-3.5 py-2 rounded-xl outline-none transition text-slate-800 font-bold text-xs sm:text-sm"
                  />
                </div>
              </div>
            )}

            {/* Submit Button Row (Aligned to Right) */}
            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button 
                type="submit" 
                disabled={loading}
                className="bg-[#00704A] hover:bg-[#005a3c] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 disabled:opacity-75"
              >
                {loading ? (
                  <span className="inline-block animate-spin">⏳</span>
                ) : (
                  <Search size={15} />
                )}
                <span>{isBn ? 'ফলাফল অনুসন্ধান' : 'Search Result'}</span>
              </button>
            </div>
          </form>

        </div>
      </ScrollReveal>

        {/* Error Notification */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 sm:p-5 rounded-2xl flex items-start gap-3 animate-in fade-in duration-200">
            <AlertCircle size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs sm:text-sm">{isBn ? 'ফলাফল পাওয়া যায়নি' : 'Result Not Found'}</h4>
              <p className="text-xs text-rose-700 mt-0.5 leading-relaxed">{error}</p>
            </div>
          </div>
        )}

        {/* 3. SEARCH RESULTS DISPLAY */}
        {hasSearched && !error && (
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Institute Results Table & Stats */}
            {searchedTab === 'institute' && (
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                
                {/* Stats Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      {isBn ? `${selectedClass}ম শ্রেণির প্রাতিষ্ঠানিক ফলাফল তালিকা` : `Class ${selectedClass} Institutional Result Summary`}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {isBn ? `শিক্ষাবর্ষ: ${toBanglaNum(session)} | পরীক্ষা: ${getExamName(examType)}` : `Session: ${session} | Exam: ${getExamName(examType)}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-xl text-xs font-black">
                      {isBn ? 'পাসের হার: ১০০%' : 'Pass Rate: 100%'}
                    </div>
                    <button
                      onClick={handlePrintInstituteResult}
                      className="inline-flex items-center gap-1.5 bg-[#00704A] hover:bg-[#005a3c] text-white px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs active:scale-95"
                    >
                      <Printer size={14} />
                      <span>{isBn ? 'ফলাফল প্রিন্ট' : 'Print Result Sheet'}</span>
                    </button>
                  </div>
                </div>

                {/* Institute Summary Results Grid */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
                  <table className="w-full text-center text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 uppercase font-black tracking-wider text-[11px] border-b border-slate-200/80">
                        <th className="p-3 sm:p-4 text-left pl-5">{isBn ? 'রোল' : 'Roll'}</th>
                        <th className="p-3 sm:p-4 text-left">{isBn ? 'শিক্ষার্থীর নাম' : 'Student Name'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'বিভাগ / শাখা' : 'Group & Sec'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'মোট নম্বর' : 'Total Marks'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'প্রাপ্ত জিপিএ' : 'GPA'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'গ্রেড' : 'Grade'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'ফলাফল' : 'Status'}</th>
                        <th className="p-3 sm:p-4 pr-5 text-right">{isBn ? 'মার্কশিট' : 'Marksheet'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentClassList.map((stu, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3.5 sm:p-4 text-left pl-5 font-black text-slate-900 font-mono">
                            #{isBn ? toBanglaNum(stu.roll) : stu.roll}
                          </td>
                          <td className="p-3.5 sm:p-4 text-left font-bold text-slate-900">
                            {isBn ? stu.studentName : (stu.studentNameEn || stu.studentName)}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-600 font-medium">
                            {getGroupName(stu.group)} ({stu.section || 'A'})
                          </td>
                          <td className="p-3.5 sm:p-4 font-black text-emerald-800 font-mono">
                            {isBn ? toBanglaNum(stu.totalMarks) : stu.totalMarks}
                          </td>
                          <td className="p-3.5 sm:p-4 font-black text-slate-900 font-mono">
                            {isBn ? toBanglaNum(stu.gpa.toFixed(2)) : stu.gpa.toFixed(2)}
                          </td>
                          <td className="p-3.5 sm:p-4">
                            <span className="inline-block bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-black text-xs">
                              {stu.grade}
                            </span>
                          </td>
                          <td className="p-3.5 sm:p-4">
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                              <CheckCircle2 size={13} />
                              <span>{isBn ? 'উত্তীর্ণ' : 'Passed'}</span>
                            </span>
                          </td>
                          <td className="p-3.5 sm:p-4 pr-5 text-right">
                            <button
                              onClick={() => handlePrintMarksheet(stu)}
                              className="inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/90 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer active:scale-95"
                            >
                              <Printer size={13} />
                              <span>{isBn ? 'মার্কশিট' : 'Transcript'}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

            {/* Individual Student Result Marksheet */}
            {searchedTab === 'individual' && selectedStudentResult && (
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
                
                {/* Header with Print Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-emerald-700 tracking-wider mb-1">
                      <GraduationCap size={14} />
                      <span>{isBn ? 'একাডেমিক ট্রান্সক্রিপ্ট ও মার্কশিট' : 'OFFICIAL ACADEMIC TRANSCRIPT'}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">
                      {isBn ? selectedStudentResult.studentName : (selectedStudentResult.studentNameEn || selectedStudentResult.studentName)}
                    </h3>
                  </div>

                  <button
                    onClick={() => handlePrintMarksheet(selectedStudentResult)}
                    className="inline-flex items-center gap-2 bg-[#00704A] hover:bg-[#005a3c] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shadow-sm active:scale-95"
                  >
                    <Download size={15} />
                    <span>{isBn ? 'মার্কশিট ডাউনলোড / প্রিন্ট' : 'Download Transcript'}</span>
                  </button>
                </div>

                {/* Student Info Card Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">{isBn ? 'রোল নম্বর' : 'ROLL NUMBER'}</span>
                    <span className="font-black text-slate-900 text-sm font-mono">#{selectedStudentResult.roll}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">{isBn ? 'শ্রেণি ও বিভাগ' : 'CLASS & GROUP'}</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{selectedStudentResult.class}th Class ({selectedStudentResult.group || 'General'})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">{isBn ? 'মোট নম্বর' : 'TOTAL OBTAINED'}</span>
                    <span className="font-black text-emerald-700 text-sm font-mono">{selectedStudentResult.totalMarks}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">{isBn ? 'জিপিএ ও গ্রেড' : 'GPA & GRADE'}</span>
                    <span className="font-black text-slate-900 text-sm">GPA {selectedStudentResult.gpa.toFixed(2)} ({selectedStudentResult.grade})</span>
                  </div>
                </div>

                {/* Subject-Wise Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
                  <table className="w-full text-center text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-slate-700 uppercase font-black tracking-wider text-[11px] border-b border-slate-200/80">
                        <th className="p-3 sm:p-4 text-left pl-5">{isBn ? 'কোড' : 'Code'}</th>
                        <th className="p-3 sm:p-4 text-left">{isBn ? 'বিষয়' : 'Subject'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'পূর্ণমান' : 'Full Marks'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'প্রাপ্ত নম্বর' : 'Obtained Marks'}</th>
                        <th className="p-3 sm:p-4">{isBn ? 'লেটার গ্রেড' : 'Letter Grade'}</th>
                        <th className="p-3 sm:p-4 pr-5">{isBn ? 'গ্রেড পয়েন্ট' : 'GPA'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedStudentResult.subjects.map((sub, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-3.5 sm:p-4 text-left pl-5 font-mono font-bold text-slate-500">{sub.code}</td>
                          <td className="p-3.5 sm:p-4 text-left font-bold text-slate-900">{isBn ? sub.subject : (sub.subjectEn || sub.subject)}</td>
                          <td className="p-3.5 sm:p-4 text-slate-600 font-medium">{sub.fullMarks}</td>
                          <td className="p-3.5 sm:p-4 font-black text-emerald-800 font-mono">{sub.obtained}</td>
                          <td className="p-3.5 sm:p-4">
                            <span className="inline-block bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-black text-xs">
                              {sub.grade}
                            </span>
                          </td>
                          <td className="p-3.5 sm:p-4 pr-5 font-black text-slate-800 font-mono">{sub.gpa.toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            )}

          </div>
        )}

        {/* 4. TWO QUICK ACTION CARDS (MATCHING REFERENCE IMAGE 100%) */}
        <ScrollReveal duration={0.6} distance={25}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Institute Result Card */}
            <div 
              onClick={() => { setActiveTab('institute'); setError(''); }}
              className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-2xs hover:shadow-md transition-all group cursor-pointer space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                <Building size={22} />
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-800 transition">
                  {isBn ? 'প্রতিষ্ঠান ফলাফল' : 'Institute Result'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                  {isBn 
                    ? 'শ্রেণি ও গ্রেডভিত্তিক ফলাফল, পাসের হার ও বার্ষিক পারফরম্যান্স সারসংক্ষেপ দেখুন।' 
                    : 'View class-wise or grade-wise results, statistics, pass rates and academic performance summary.'}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-emerald-800 transition pt-1">
                <span>{isBn ? 'প্রতিষ্ঠান ফলাফল দেখুন' : 'View Institute Result'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Individual Student Result Card */}
            <div 
              onClick={() => { setActiveTab('individual'); setError(''); }}
              className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-2xs hover:shadow-md transition-all group cursor-pointer space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                <User size={22} />
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-800 transition">
                  {isBn ? 'একক শিক্ষার্থী ফলাফল' : 'Individual Student Result'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                  {isBn 
                    ? 'একক শিক্ষার্থীর বিস্তারিত মার্কশিট ও একাডেমিক ট্রান্সক্রিপ্ট অনুসন্ধান ও ডাউনলোড করুন।' 
                    : 'Search and view individual student marksheet and academic transcript.'}
                </p>
              </div>

              <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-700 group-hover:text-blue-800 transition pt-1">
                <span>{isBn ? 'শিক্ষার্থী ফলাফল দেখুন' : 'View Student Result'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

    </div>
  );
};

export default Result;
