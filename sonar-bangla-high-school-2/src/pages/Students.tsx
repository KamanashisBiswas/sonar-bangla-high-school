import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Users,
  Award,
  Plus,
  Search,
  ChevronDown,
  Eye,
  Pencil,
  MoreVertical,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  RotateCcw,
} from 'lucide-react';

export interface StudentRecord {
  roll: string;
  name: string;
  subId: string;
  studentId: string;
  classLevel: string; // e.g. "10 Class", "9 Class", "8 Class", "7 Class", "6 Class", "5 Class"
  group: 'Science' | 'Business Studies' | 'Humanities' | 'General';
  avatar: string;
  fallbackAvatar: string;
  section: string; // "Section A" | "Section B" | "Section C"
  bloodGroup?: string;
  guardianName?: string;
}

const ALL_STUDENTS_DATA: StudentRecord[] = [
  // --- CLASS 10 (Matching reference mockup exactly) ---
  {
    roll: '#101',
    name: 'Abdullah Al Mamun',
    subId: 'ID: S-10-101',
    studentId: 'S-2024-0101',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Abdur Rahim',
  },
  {
    roll: '#102',
    name: 'Sumaiya Akter',
    subId: 'ID: S-10-102',
    studentId: 'S-2024-0102',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Shahidul Islam',
  },
  {
    roll: '#103',
    name: 'Rakib Hasan',
    subId: 'ID: S-10-103',
    studentId: 'S-2024-0103',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Anwar Hossain',
  },
  {
    roll: '#104',
    name: 'Nusrat Jahan',
    subId: 'ID: S-10-104',
    studentId: 'S-2024-0104',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Joynal Abedin',
  },
  {
    roll: '#105',
    name: 'Mehedi Hasan',
    subId: 'ID: S-10-105',
    studentId: 'S-2024-0105',
    classLevel: '10 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'O-',
    guardianName: 'Md. Moklesur Rahman',
  },
  {
    roll: '#106',
    name: 'Fatema Tuz Zohra',
    subId: 'ID: S-10-106',
    studentId: 'S-2024-0106',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Kamal Uddin',
  },
  {
    roll: '#107',
    name: 'Sajib Ahmed',
    subId: 'ID: S-10-107',
    studentId: 'S-2024-0107',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Faruk Ahmed',
  },
  {
    roll: '#108',
    name: 'Akiful Sultana',
    subId: 'ID: S-10-108',
    studentId: 'S-2024-0108',
    classLevel: '10 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Sirajul Islam',
  },
  {
    roll: '#109',
    name: 'Tanvir Rahman',
    subId: 'ID: S-10-109',
    studentId: 'S-2024-0109',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'AB-',
    guardianName: 'Md. Hafizur Rahman',
  },
  {
    roll: '#110',
    name: 'Jannatul Ferdous',
    subId: 'ID: S-10-110',
    studentId: 'S-2024-0110',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Golam Kibria',
  },

  // --- CLASS 9 ---
  {
    roll: '#201',
    name: 'Mahfuzur Rahman',
    subId: 'ID: S-09-201',
    studentId: 'S-2024-0201',
    classLevel: '9 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Rafiqul Islam',
  },
  {
    roll: '#202',
    name: 'Sabrina Yeasmin',
    subId: 'ID: S-09-202',
    studentId: 'S-2024-0202',
    classLevel: '9 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Jahangir Alam',
  },
  {
    roll: '#203',
    name: 'Arif Hossain',
    subId: 'ID: S-09-203',
    studentId: 'S-2024-0203',
    classLevel: '9 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Nurul Islam',
  },
  {
    roll: '#204',
    name: 'Fahmida Akter',
    subId: 'ID: S-09-204',
    studentId: 'S-2024-0204',
    classLevel: '9 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Shamsul Haque',
  },
  {
    roll: '#205',
    name: 'Shakil Khan',
    subId: 'ID: S-09-205',
    studentId: 'S-2024-0205',
    classLevel: '9 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'O-',
    guardianName: 'Md. Tariqul Islam',
  },
  {
    roll: '#206',
    name: 'Sadia Islam',
    subId: 'ID: S-09-206',
    studentId: 'S-2024-0206',
    classLevel: '9 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Asaduzzaman',
  },
  {
    roll: '#207',
    name: 'Nahid Hasan',
    subId: 'ID: S-09-207',
    studentId: 'S-2024-0207',
    classLevel: '9 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Belal Hossain',
  },
  {
    roll: '#208',
    name: 'Ritu Karmakar',
    subId: 'ID: S-09-208',
    studentId: 'S-2024-0208',
    classLevel: '9 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Sunil Karmakar',
  },
  {
    roll: '#209',
    name: 'Farhan Kabir',
    subId: 'ID: S-09-209',
    studentId: 'S-2024-0209',
    classLevel: '9 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'AB-',
    guardianName: 'Md. Humayun Kabir',
  },
  {
    roll: '#210',
    name: 'Tasnim Jahan',
    subId: 'ID: S-09-210',
    studentId: 'S-2024-0210',
    classLevel: '9 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Anisur Rahman',
  },

  // --- CLASS 8 ---
  {
    roll: '#301',
    name: 'Al-Amin Sheikh',
    subId: 'ID: S-08-301',
    studentId: 'S-2024-0301',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Rustam Sheikh',
  },
  {
    roll: '#302',
    name: 'Nusrat Sharmin',
    subId: 'ID: S-08-302',
    studentId: 'S-2024-0302',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Moniruzzaman',
  },
  {
    roll: '#303',
    name: 'Sourav Roy',
    subId: 'ID: S-08-303',
    studentId: 'S-2024-0303',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Subhasish Roy',
  },
  {
    roll: '#304',
    name: 'Meherun Nesa',
    subId: 'ID: S-08-304',
    studentId: 'S-2024-0304',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Mominul Islam',
  },
  {
    roll: '#305',
    name: 'Joy Biswas',
    subId: 'ID: S-08-305',
    studentId: 'S-2024-0305',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Kartik Biswas',
  },
  {
    roll: '#306',
    name: 'Ananya Roy',
    subId: 'ID: S-08-306',
    studentId: 'S-2024-0306',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Ashok Kumar Roy',
  },
  {
    roll: '#307',
    name: 'Sajjad Hossain',
    subId: 'ID: S-08-307',
    studentId: 'S-2024-0307',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Altaf Hossain',
  },
  {
    roll: '#308',
    name: 'Laboni Akter',
    subId: 'ID: S-08-308',
    studentId: 'S-2024-0308',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'O-',
    guardianName: 'Md. Liakat Ali',
  },
  {
    roll: '#309',
    name: 'Tanmoy Das',
    subId: 'ID: S-08-309',
    studentId: 'S-2024-0309',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'AB+',
    guardianName: 'Nripendra Das',
  },
  {
    roll: '#310',
    name: 'Mim Akter',
    subId: 'ID: S-08-310',
    studentId: 'S-2024-0310',
    classLevel: '8 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Mostafa Kamal',
  },

  // --- CLASS 7 ---
  {
    roll: '#401',
    name: 'Rayhan Mahmud',
    subId: 'ID: S-07-401',
    studentId: 'S-2024-0401',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Mahmudul Hasan',
  },
  {
    roll: '#402',
    name: 'Zarin Tasnim',
    subId: 'ID: S-07-402',
    studentId: 'S-2024-0402',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Zillur Rahman',
  },
  {
    roll: '#403',
    name: 'Pritom Sarker',
    subId: 'ID: S-07-403',
    studentId: 'S-2024-0403',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Prabir Sarker',
  },
  {
    roll: '#404',
    name: 'Sanjida Haque',
    subId: 'ID: S-07-404',
    studentId: 'S-2024-0404',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Azizul Haque',
  },
  {
    roll: '#405',
    name: 'Asif Iqbal',
    subId: 'ID: S-07-405',
    studentId: 'S-2024-0405',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Iqbal Hossain',
  },
  {
    roll: '#406',
    name: 'Puja Das',
    subId: 'ID: S-07-406',
    studentId: 'S-2024-0406',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Bipul Das',
  },
  {
    roll: '#407',
    name: 'Sabbir Rahman',
    subId: 'ID: S-07-407',
    studentId: 'S-2024-0407',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Md. Lutfar Rahman',
  },
  {
    roll: '#408',
    name: 'Bristy Sen',
    subId: 'ID: S-07-408',
    studentId: 'S-2024-0408',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Shyamal Sen',
  },
  {
    roll: '#409',
    name: 'Monirul Islam',
    subId: 'ID: S-07-409',
    studentId: 'S-2024-0409',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Siraj Islam',
  },
  {
    roll: '#410',
    name: 'Afia Anjum',
    subId: 'ID: S-07-410',
    studentId: 'S-2024-0410',
    classLevel: '7 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Enamul Haque',
  },

  // --- CLASS 6 ---
  {
    roll: '#501',
    name: 'Shafiul Islam',
    subId: 'ID: S-06-501',
    studentId: 'S-2024-0501',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Shafiqul Islam',
  },
  {
    roll: '#502',
    name: 'Nabila Tabassum',
    subId: 'ID: S-06-502',
    studentId: 'S-2024-0502',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Towhidul Islam',
  },
  {
    roll: '#503',
    name: 'Dibyo Mondal',
    subId: 'ID: S-06-503',
    studentId: 'S-2024-0503',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Dipankar Mondal',
  },
  {
    roll: '#504',
    name: 'Samia Zaman',
    subId: 'ID: S-06-504',
    studentId: 'S-2024-0504',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Hasan Zaman',
  },
  {
    roll: '#505',
    name: 'Kazi Rafiq',
    subId: 'ID: S-06-505',
    studentId: 'S-2024-0505',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Kazi Nazrul Islam',
  },
  {
    roll: '#506',
    name: 'Prova Roy',
    subId: 'ID: S-06-506',
    studentId: 'S-2024-0506',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Pranab Roy',
  },
  {
    roll: '#507',
    name: 'Shanto Biswas',
    subId: 'ID: S-06-507',
    studentId: 'S-2024-0507',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Swapan Biswas',
  },
  {
    roll: '#508',
    name: 'Rimi Saha',
    subId: 'ID: S-06-508',
    studentId: 'S-2024-0508',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Ratan Saha',
  },
  {
    roll: '#509',
    name: 'Tahmidul Alam',
    subId: 'ID: S-06-509',
    studentId: 'S-2024-0509',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'O-',
    guardianName: 'Md. Badrul Alam',
  },
  {
    roll: '#510',
    name: 'Shaila Sharmin',
    subId: 'ID: S-06-510',
    studentId: 'S-2024-0510',
    classLevel: '6 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Shakhawat Hossain',
  },

  // --- CLASS 5 ---
  {
    roll: '#601',
    name: 'Emon Ali',
    subId: 'ID: S-05-601',
    studentId: 'S-2024-0601',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Ayub Ali',
  },
  {
    roll: '#602',
    name: 'Ishrat Jahan',
    subId: 'ID: S-05-602',
    studentId: 'S-2024-0602',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Israfil Hossain',
  },
  {
    roll: '#603',
    name: 'Sohel Rana',
    subId: 'ID: S-05-603',
    studentId: 'S-2024-0603',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Mansur Ali',
  },
  {
    roll: '#604',
    name: 'Moumita Paul',
    subId: 'ID: S-05-604',
    studentId: 'S-2024-0604',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Gouranga Paul',
  },
  {
    roll: '#605',
    name: 'Naimur Rahman',
    subId: 'ID: S-05-605',
    studentId: 'S-2024-0605',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Nazrul Islam',
  },
  {
    roll: '#606',
    name: 'Afrin Sultana',
    subId: 'ID: S-05-606',
    studentId: 'S-2024-0606',
    classLevel: '5 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Abdul Khaleque',
  },
];

const ITEMS_PER_PAGE = 10;

export const Students: React.FC = () => {
  const [students, setStudents] = useState<StudentRecord[]>(ALL_STUDENTS_DATA);
  const [selectedClass, setSelectedClass] = useState<string>('Class 10');
  const [selectedGroup, setSelectedGroup] = useState<string>('All Groups');
  const [selectedSection, setSelectedSection] = useState<string>('All Sections');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewingStudent, setViewingStudent] = useState<StudentRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // New Student Form State
  const [newName, setNewName] = useState('');
  const [newRoll, setNewRoll] = useState('');
  const [newClass, setNewClass] = useState('10 Class');
  const [newGroup, setNewGroup] = useState<'Science' | 'Business Studies' | 'Humanities' | 'General'>('Science');
  const [newSection, setNewSection] = useState('Section A');
  const [newBloodGroup, setNewBloodGroup] = useState('B+');
  const [newGuardian, setNewGuardian] = useState('');

  // Robust Filter logic supporting All Classes & each individual Class
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      // 1. Class filter matching: "Class 10" matches "10 Class" or "Class 10"
      const matchClass =
        selectedClass === 'All Classes' ||
        s.classLevel === selectedClass ||
        s.classLevel === `${selectedClass.replace('Class ', '')} Class` ||
        selectedClass === `Class ${s.classLevel.replace(' Class', '')}`;

      // 2. Group filter
      const matchGroup =
        selectedGroup === 'All Groups' || s.group === selectedGroup;

      // 3. Section filter
      const matchSection =
        selectedSection === 'All Sections' || s.section === selectedSection;

      // 4. Search query
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.roll.toLowerCase().includes(q) ||
        s.studentId.toLowerCase().includes(q) ||
        s.subId.toLowerCase().includes(q) ||
        s.group.toLowerCase().includes(q) ||
        s.classLevel.toLowerCase().includes(q) ||
        s.section.toLowerCase().includes(q);

      return matchClass && matchGroup && matchSection && matchSearch;
    });
  }, [students, selectedClass, selectedGroup, selectedSection, searchQuery]);

  // Paginated students for the current active page
  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / ITEMS_PER_PAGE));
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStudents, currentPage]);

  const handleClassChange = (val: string) => {
    setSelectedClass(val);
    setCurrentPage(1);
  };

  const handleGroupChange = (val: string) => {
    setSelectedGroup(val);
    setCurrentPage(1);
  };

  const handleSectionChange = (val: string) => {
    setSelectedSection(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedClass('All Classes');
    setSelectedGroup('All Groups');
    setSelectedSection('All Sections');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newRoll.trim()) return;

    const formattedRoll = newRoll.startsWith('#') ? newRoll : `#${newRoll}`;
    const idNum = newRoll.replace(/\D/g, '') || Math.floor(100 + Math.random() * 900).toString();
    const classNum = newClass.replace(/\D/g, '') || '10';

    const newStudent: StudentRecord = {
      roll: formattedRoll,
      name: newName.trim(),
      subId: `ID: S-${classNum}-${idNum}`,
      studentId: `S-2024-0${idNum}`,
      classLevel: newClass,
      group: newGroup,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
      fallbackAvatar: '/students/student_1.png',
      section: newSection,
      bloodGroup: newBloodGroup || 'O+',
      guardianName: newGuardian || 'Guardian Record on File',
    };

    setStudents([newStudent, ...students]);
    setIsAddModalOpen(false);
    setNewName('');
    setNewRoll('');
    setNewGuardian('');
  };

  // Helper for group pill styling matching reference mockup
  const renderGroupBadge = (group: string) => {
    switch (group) {
      case 'Science':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#eff6ff] text-[#2563eb] border border-blue-100">
            Science
          </span>
        );
      case 'Business Studies':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#f5f3ff] text-[#7c3aed] border border-purple-100">
            Business Studies
          </span>
        );
      case 'Humanities':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#fffbeb] text-[#b45309] border border-amber-100">
            Humanities
          </span>
        );
      case 'General':
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
            General
          </span>
        );
    }
  };

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Campus Background with Left-to-Right White Fade */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Campus Building Background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />

          {/* Precision Left-to-Right White Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />

          {/* Decorative Subtle Botanical / Leaf Watermark on Far Left */}
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-48 h-80 opacity-[0.07] pointer-events-none text-emerald-700">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
              <path d="M30 170 C10 120 20 60 70 20 C75 60 70 120 30 170 Z" />
            </svg>
          </div>

          {/* Decorative Subtle Botanical Watermark on Far Right */}
          <div className="absolute right-0 bottom-10 w-44 h-72 opacity-[0.06] pointer-events-none text-emerald-800 rotate-45">
            <svg viewBox="0 0 200 350" fill="currentColor">
              <path d="M50 300 C20 220 30 140 100 80 C110 140 100 220 50 300 Z" />
              <path d="M120 250 C160 190 150 120 90 70 C100 130 110 190 120 250 Z" />
            </svg>
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col justify-between">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">Students</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3.5 pt-6 sm:pt-8">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} />
              <span>STUDENT DIRECTORY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Student Database & <br />
              Directory
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full" />

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal max-w-lg">
              Explore our students and their academic information. <br className="hidden sm:inline" />
              Building bright minds for a better tomorrow.
            </p>
          </div>

        </div>
      </div>

      {/* 2. Floating 4-Stat Bar (Overlapping Bottom of Hero Banner) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-20">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {/* Stat 1: Total Students */}
          <div className="flex items-center gap-4 pt-2 sm:pt-0 sm:pl-2 first:pl-0">
            <div className="w-13 h-13 rounded-full bg-[#e8f7ee] text-[#059669] flex items-center justify-center shrink-0">
              <Users size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                1,240
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">Total Students</div>
              <div className="text-[11px] font-bold text-emerald-600 mt-0.5">+12% this year</div>
            </div>
          </div>

          {/* Stat 2: Classes */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                12
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">Classes</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Play to Class 10</div>
            </div>
          </div>

          {/* Stat 3: Student Groups */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
              <Users size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                25
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">Student Groups</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">Academic & Co-curricular</div>
            </div>
          </div>

          {/* Stat 4: Student Support */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shrink-0">
              <Award size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                100%
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">Student Support</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">For a brighter future</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Students Data Table & Directory Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
          {/* Header Row: Title & + Add New Student Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <Users size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Students
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  View and search student information by class, name, or group.
                </p>
              </div>
            </div>

            {/* + Add New Student Button */}
            <button
              type="button"
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs hover:shadow cursor-pointer shrink-0 self-start sm:self-auto"
            >
              <Plus size={16} />
              <span>Add New Student</span>
            </button>
          </div>

          {/* Filter Controls Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2">
            {/* Class Dropdown (Supports All Classes and specific classes) */}
            <div className="lg:col-span-2 relative">
              <select
                value={selectedClass}
                onChange={(e) => handleClassChange(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
              >
                <option value="All Classes">All Classes</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 5">Class 5</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Group Dropdown */}
            <div className="lg:col-span-2 relative">
              <select
                value={selectedGroup}
                onChange={(e) => handleGroupChange(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
              >
                <option value="All Groups">All Groups</option>
                <option value="Science">Science</option>
                <option value="Business Studies">Business Studies</option>
                <option value="Humanities">Humanities</option>
                <option value="General">General</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Section Dropdown */}
            <div className="lg:col-span-2 relative">
              <select
                value={selectedSection}
                onChange={(e) => handleSectionChange(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
              >
                <option value="All Sections">All Sections</option>
                <option value="Section A">Section A</option>
                <option value="Section B">Section B</option>
                <option value="Section C">Section C</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>

            {/* Search Input Box */}
            <div className="lg:col-span-6 relative">
              <Search
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by name, roll, or group..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Pills Bar (When filters are modified) */}
          {(selectedClass !== 'All Classes' || selectedGroup !== 'All Groups' || selectedSection !== 'All Sections' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-medium text-[11px]">Active Filters:</span>
              {selectedClass !== 'All Classes' && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-[#004d34] border border-emerald-100 font-bold px-2.5 py-0.5 rounded-lg text-[11px]">
                  <span>Class: {selectedClass}</span>
                  <button type="button" onClick={() => handleClassChange('All Classes')} className="hover:text-emerald-900">
                    <X size={11} />
                  </button>
                </span>
              )}
              {selectedGroup !== 'All Groups' && (
                <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 border border-blue-100 font-bold px-2.5 py-0.5 rounded-lg text-[11px]">
                  <span>Group: {selectedGroup}</span>
                  <button type="button" onClick={() => handleGroupChange('All Groups')} className="hover:text-blue-900">
                    <X size={11} />
                  </button>
                </span>
              )}
              {selectedSection !== 'All Sections' && (
                <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 border border-purple-100 font-bold px-2.5 py-0.5 rounded-lg text-[11px]">
                  <span>{selectedSection}</span>
                  <button type="button" onClick={() => handleSectionChange('All Sections')} className="hover:text-purple-900">
                    <X size={11} />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-100 font-bold px-2.5 py-0.5 rounded-lg text-[11px]">
                  <span>"{searchQuery}"</span>
                  <button type="button" onClick={() => handleSearchChange('')} className="hover:text-amber-950">
                    <X size={11} />
                  </button>
                </span>
              )}
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-800 underline ml-2 cursor-pointer"
              >
                <RotateCcw size={10} />
                <span>Reset all</span>
              </button>
            </div>
          )}

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 sm:px-6">ROLL</th>
                  <th className="py-3.5 px-4 sm:px-6">STUDENT</th>
                  <th className="py-3.5 px-4 sm:px-6">CLASS</th>
                  <th className="py-3.5 px-4 sm:px-6">GROUP</th>
                  <th className="py-3.5 px-4 sm:px-6">STUDENT ID</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center">ACTION</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-100 bg-white">
                {paginatedStudents.length > 0 ? (
                  paginatedStudents.map((student) => (
                    <tr
                      key={student.roll + student.studentId}
                      className="hover:bg-slate-50/70 transition-colors group"
                    >
                      {/* Roll Column */}
                      <td className="py-3.5 px-4 sm:px-6 font-extrabold text-[#059669]">
                        {student.roll}
                      </td>

                      {/* Student Info Column: Avatar + Name + Sub ID */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-2xs">
                            <img
                              src={student.avatar}
                              alt={student.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = student.fallbackAvatar;
                              }}
                            />
                          </div>
                          <div>
                            <div className="font-extrabold text-slate-900 group-hover:text-[#004d34] transition-colors leading-tight">
                              {student.name}
                            </div>
                            <div className="text-[10.5px] text-slate-400 font-medium mt-0.5">
                              {student.subId}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Class Column */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#e8f7ee] text-[#059669] border border-emerald-100">
                          {student.classLevel}
                        </span>
                      </td>

                      {/* Group Column */}
                      <td className="py-3.5 px-4 sm:px-6">
                        {renderGroupBadge(student.group)}
                      </td>

                      {/* Student ID Column */}
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-600">
                        {student.studentId}
                      </td>

                      {/* Action Buttons Column */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center justify-center gap-1.5">
                          {/* Eye / View Profile */}
                          <button
                            type="button"
                            title="View Student"
                            onClick={() => setViewingStudent(student)}
                            className="w-7 h-7 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-[#004d34] border border-slate-200/80 flex items-center justify-center transition cursor-pointer"
                          >
                            <Eye size={13} />
                          </button>

                          {/* Pencil / Edit */}
                          <button
                            type="button"
                            title="Edit Record"
                            onClick={() => setViewingStudent(student)}
                            className="w-7 h-7 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-[#004d34] border border-slate-200/80 flex items-center justify-center transition cursor-pointer"
                          >
                            <Pencil size={12} />
                          </button>

                          {/* More Options */}
                          <button
                            type="button"
                            title="More Options"
                            onClick={() => setViewingStudent(student)}
                            className="w-7 h-7 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-[#004d34] border border-slate-200/80 flex items-center justify-center transition cursor-pointer"
                          >
                            <MoreVertical size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      <p className="text-slate-500 font-medium">
                        No student records found matching the selected filters.
                      </p>
                      <button
                        type="button"
                        onClick={handleResetFilters}
                        className="mt-2 text-xs font-bold text-[#004d34] hover:underline"
                      >
                        Reset filters
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer: Pagination & Count (Exact match to media_1790106007535.jpg) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium">
              Showing {filteredStudents.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}-
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredStudents.length)} of{' '}
              {filteredStudents.length} students
            </span>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1 self-center sm:self-auto select-none">
                {/* Prev Button */}
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-8 h-8 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronLeft size={14} />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center transition cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#004d34] text-white'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className="w-8 h-8 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition cursor-pointer"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Together for a Brighter Future Callout Banner (Matching media_1790106007535.jpg) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <section className="bg-[#e8f7ee] border border-emerald-100/90 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-13 h-13 rounded-full bg-[#d1fae5] text-[#059669] flex items-center justify-center shrink-0 shadow-2xs">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Together for a Brighter Future
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                Our students are the heart of our school. We are committed to providing a safe, supportive
                and inspiring environment for every learner.
              </p>
            </div>
          </div>

          <Link
            to="/admission"
            className="inline-flex items-center gap-2 bg-[#004d34] hover:bg-[#003826] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs hover:shadow whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Empower Our Students</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>

      {/* 5. View Student Details Modal */}
      {viewingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-base text-slate-900">
                Student Profile Information
              </h3>
              <button
                type="button"
                onClick={() => setViewingStudent(null)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border-2 border-emerald-500 shrink-0">
                <img
                  src={viewingStudent.avatar}
                  alt={viewingStudent.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = viewingStudent.fallbackAvatar;
                  }}
                />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-lg leading-tight">
                  {viewingStudent.name}
                </h4>
                <p className="text-xs text-emerald-700 font-bold mt-0.5">
                  Roll: {viewingStudent.roll} • {viewingStudent.studentId}
                </p>
                <div className="mt-1">{renderGroupBadge(viewingStudent.group)}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">
                  Class & Section
                </span>
                <span className="font-bold text-slate-800">
                  {viewingStudent.classLevel}, {viewingStudent.section}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">
                  Blood Group
                </span>
                <span className="font-bold text-slate-800">
                  {viewingStudent.bloodGroup || 'O+'}
                </span>
              </div>
              <div className="col-span-2 bg-slate-50 p-3 rounded-xl">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">
                  Guardian Name
                </span>
                <span className="font-bold text-slate-800">
                  {viewingStudent.guardianName || 'Guardian Record on File'}
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setViewingStudent(null)}
                className="bg-[#004d34] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#003826] transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-[#004d34]">
                <Plus size={18} />
                <h3 className="font-extrabold text-base text-slate-900">
                  Add New Student Record
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Student Full Name</label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Mahfuzur Rahman"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Roll Number</label>
                  <input
                    type="text"
                    required
                    value={newRoll}
                    onChange={(e) => setNewRoll(e.target.value)}
                    placeholder="e.g. #111"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Class</label>
                  <select
                    value={newClass}
                    onChange={(e) => setNewClass(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  >
                    <option value="10 Class">10 Class</option>
                    <option value="9 Class">9 Class</option>
                    <option value="8 Class">8 Class</option>
                    <option value="7 Class">7 Class</option>
                    <option value="6 Class">6 Class</option>
                    <option value="5 Class">5 Class</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Group</label>
                  <select
                    value={newGroup}
                    onChange={(e) =>
                      setNewGroup(e.target.value as 'Science' | 'Business Studies' | 'Humanities' | 'General')
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  >
                    <option value="Science">Science</option>
                    <option value="Business Studies">Business Studies</option>
                    <option value="Humanities">Humanities</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Section</label>
                  <select
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  >
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
                    <option value="Section C">Section C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Blood Group</label>
                  <select
                    value={newBloodGroup}
                    onChange={(e) => setNewBloodGroup(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Guardian Name</label>
                  <input
                    type="text"
                    value={newGuardian}
                    onChange={(e) => setNewGuardian(e.target.value)}
                    placeholder="e.g. Md. Rafiqul Islam"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#004d34] hover:bg-[#003826] text-white px-5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                >
                  <Check size={14} />
                  <span>Save Student</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
