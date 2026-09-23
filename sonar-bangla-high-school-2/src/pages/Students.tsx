import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Users,
  Award,
  Search,
  ChevronDown,
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  RotateCcw,
  BookOpen,
  Droplet,
  Phone,
  MapPin,
  UserCheck,
  User,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';

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
  fatherName?: string;
  motherName?: string;
  phoneNumber?: string;
  address?: string;
}

const ALL_STUDENTS_DATA: StudentRecord[] = [
  // --- CLASS 10 (Matching reference mockup exactly) ---
  {
    roll: '#101',
    name: 'Abdullah Al Mamun',
    subId: 'ID: SB-1',
    studentId: 'S-2024-0101',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Abdur Rahim',
    fatherName: 'Md. Abdur Rahim',
    motherName: 'Salma Khatun',
    phoneNumber: '01711-223344',
    address: 'Gollamari, Khulna - 9208',
  },
  {
    roll: '#102',
    name: 'Sumaiya Akter',
    subId: 'ID: SB-2',
    studentId: 'S-2024-0102',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Abdul Quader',
    fatherName: 'Abdul Quader',
    motherName: 'Sufia Khatun',
    phoneNumber: '01713-445566',
    address: 'Gollamari, Khulna - 9208',
  },
  {
    roll: '#103',
    name: 'Rakib Hasan',
    subId: 'ID: SB-3',
    studentId: 'S-2024-0103',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Anwar Hossain',
    fatherName: 'Md. Anwar Hossain',
    motherName: 'Rasheda Begum',
    phoneNumber: '01712-334455',
    address: 'Boyra, Khulna - 9000',
  },
  {
    roll: '#104',
    name: 'Nusrat Jahan',
    subId: 'ID: SB-4',
    studentId: 'S-2024-0104',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section A',
    bloodGroup: 'AB+',
    guardianName: 'Md. Joynal Abedin',
    fatherName: 'Md. Joynal Abedin',
    motherName: 'Nasrin Akter',
    phoneNumber: '01714-556677',
    address: 'Sonadanga, Khulna - 9100',
  },
  {
    roll: '#105',
    name: 'Mehedi Hasan',
    subId: 'ID: SB-5',
    studentId: 'S-2024-0105',
    classLevel: '10 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section B',
    bloodGroup: 'O-',
    guardianName: 'Md. Moklesur Rahman',
    fatherName: 'Md. Moklesur Rahman',
    motherName: 'Fatema Begum',
    phoneNumber: '01715-667788',
    address: 'Khalishpur, Khulna - 9000',
  },
  {
    roll: '#106',
    name: 'Fatema Tuz Zohra',
    subId: 'ID: SB-6',
    studentId: 'S-2024-0106',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Kamal Uddin',
    fatherName: 'Md. Kamal Uddin',
    motherName: 'Tahmina Akter',
    phoneNumber: '01716-778899',
    address: 'Daulatpur, Khulna - 9202',
  },
  {
    roll: '#107',
    name: 'Sajib Ahmed',
    subId: 'ID: SB-7',
    studentId: 'S-2024-0107',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Md. Faruk Ahmed',
    fatherName: 'Md. Faruk Ahmed',
    motherName: 'Rokeya Begum',
    phoneNumber: '01717-889900',
    address: 'Gollamari, Khulna - 9208',
  },
  {
    roll: '#108',
    name: 'Akiful Sultana',
    subId: 'ID: SB-8',
    studentId: 'S-2024-0108',
    classLevel: '10 Class',
    group: 'Humanities',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Sirajul Islam',
    fatherName: 'Md. Sirajul Islam',
    motherName: 'Hasina Banu',
    phoneNumber: '01718-990011',
    address: 'Sonadanga, Khulna - 9100',
  },
  {
    roll: '#109',
    name: 'Tanvir Rahman',
    subId: 'ID: SB-9',
    studentId: 'S-2024-0109',
    classLevel: '10 Class',
    group: 'Science',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_9.png',
    section: 'Section B',
    bloodGroup: 'AB-',
    guardianName: 'Md. Hafizur Rahman',
    fatherName: 'Md. Hafizur Rahman',
    motherName: 'Nazma Begum',
    phoneNumber: '01719-001122',
    address: 'Boyra, Khulna - 9000',
  },
  {
    roll: '#110',
    name: 'Jannatul Ferdous',
    subId: 'ID: SB-10',
    studentId: 'S-2024-0110',
    classLevel: '10 Class',
    group: 'Business Studies',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_10.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Golam Kibria',
    fatherName: 'Md. Golam Kibria',
    motherName: 'Ferdousi Begum',
    phoneNumber: '01720-112233',
    address: 'Gollamari, Khulna - 9208',
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

  // --- CLASS 4 ---
  {
    roll: '#701',
    name: 'Samiul Islam',
    subId: 'ID: S-04-701',
    studentId: 'S-2024-0701',
    classLevel: '4 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Shahidul Islam',
  },
  {
    roll: '#702',
    name: 'Sadia Jahan',
    subId: 'ID: S-04-702',
    studentId: 'S-2024-0702',
    classLevel: '4 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Joynal Abedin',
  },
  {
    roll: '#703',
    name: 'Tanzim Hossain',
    subId: 'ID: S-04-703',
    studentId: 'S-2024-0703',
    classLevel: '4 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Anwarul Kabir',
  },
  {
    roll: '#704',
    name: 'Moumita Roy',
    subId: 'ID: S-04-704',
    studentId: 'S-2024-0704',
    classLevel: '4 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section B',
    bloodGroup: 'AB+',
    guardianName: 'Bidhan Chandra Roy',
  },

  // --- CLASS 3 ---
  {
    roll: '#801',
    name: 'Abrar Fahim',
    subId: 'ID: S-03-801',
    studentId: 'S-2024-0801',
    classLevel: '3 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Farhad Hossain',
  },
  {
    roll: '#802',
    name: 'Nusrat Fariha',
    subId: 'ID: S-03-802',
    studentId: 'S-2024-0802',
    classLevel: '3 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Sirajul Haque',
  },
  {
    roll: '#803',
    name: 'Hasibul Islam',
    subId: 'ID: S-03-803',
    studentId: 'S-2024-0803',
    classLevel: '3 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Md. Enamul Kabir',
  },
  {
    roll: '#804',
    name: 'Tanha Akter',
    subId: 'ID: S-03-804',
    studentId: 'S-2024-0804',
    classLevel: '3 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section B',
    bloodGroup: 'O-',
    guardianName: 'Md. Mizanur Rahman',
  },

  // --- CLASS 2 ---
  {
    roll: '#901',
    name: 'Rafiul Hasan',
    subId: 'ID: S-02-901',
    studentId: 'S-2024-0901',
    classLevel: '2 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Golam Sarwar',
  },
  {
    roll: '#902',
    name: 'Samia Tasnim',
    subId: 'ID: S-02-902',
    studentId: 'S-2024-0902',
    classLevel: '2 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Harun-ur-Rashid',
  },
  {
    roll: '#903',
    name: 'Zubair Ahmed',
    subId: 'ID: S-02-903',
    studentId: 'S-2024-0903',
    classLevel: '2 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'O+',
    guardianName: 'Md. Babul Akter',
  },
  {
    roll: '#904',
    name: 'Lamia Islam',
    subId: 'ID: S-02-904',
    studentId: 'S-2024-0904',
    classLevel: '2 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section B',
    bloodGroup: 'AB+',
    guardianName: 'Md. Saiful Islam',
  },

  // --- CLASS 1 ---
  {
    roll: '#1001',
    name: 'Tahmid Rahman',
    subId: 'ID: S-01-1001',
    studentId: 'S-2024-1001',
    classLevel: '1 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Azizul Haque',
  },
  {
    roll: '#1002',
    name: 'Anika Tabassum',
    subId: 'ID: S-01-1002',
    studentId: 'S-2024-1002',
    classLevel: '1 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section A',
    bloodGroup: 'A+',
    guardianName: 'Md. Moniruzzaman',
  },
  {
    roll: '#1003',
    name: 'Aryan Das',
    subId: 'ID: S-01-1003',
    studentId: 'S-2024-1003',
    classLevel: '1 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section B',
    bloodGroup: 'B+',
    guardianName: 'Subrata Das',
  },
  {
    roll: '#1004',
    name: 'Mehvish Khan',
    subId: 'ID: S-01-1004',
    studentId: 'S-2024-1004',
    classLevel: '1 Class',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section B',
    bloodGroup: 'AB-',
    guardianName: 'Md. Alamgir Khan',
  },

  // --- PRED 2 (Preparatory 2) ---
  {
    roll: '#1101',
    name: 'Ayaan Ahmed',
    subId: 'ID: S-P2-1101',
    studentId: 'S-2024-1101',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Kamrul Hasan',
  },
  {
    roll: '#1102',
    name: 'Inaya Rahman',
    subId: 'ID: S-P2-1102',
    studentId: 'S-2024-1102',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Shafiqul Islam',
  },
  {
    roll: '#1103',
    name: 'Rayyan Chowdhury',
    subId: 'ID: S-P2-1103',
    studentId: 'S-2024-1103',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Md. Tanveer Chowdhury',
  },
  {
    roll: '#1104',
    name: 'Zunaira Noor',
    subId: 'ID: S-P2-1104',
    studentId: 'S-2024-1104',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section B',
    bloodGroup: 'B-',
    guardianName: 'Md. Nuruzzaman',
  },
  {
    roll: '#1105',
    name: 'Zafirul Islam',
    subId: 'ID: S-P2-1105',
    studentId: 'S-2024-1105',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_5.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Zulfikar Ali',
  },
  {
    roll: '#1106',
    name: 'Wania Fatima',
    subId: 'ID: S-P2-1106',
    studentId: 'S-2024-1106',
    classLevel: 'Pred 2',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_6.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Md. Wahiduzzaman',
  },

  // --- PRED 1 (Preparatory 1) ---
  {
    roll: '#1201',
    name: 'Adiyan Rahman',
    subId: 'ID: S-P1-1201',
    studentId: 'S-2024-1201',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_1.png',
    section: 'Section A',
    bloodGroup: 'O+',
    guardianName: 'Md. Anisur Rahman',
  },
  {
    roll: '#1202',
    name: 'Ayat Fatima',
    subId: 'ID: S-P1-1202',
    studentId: 'S-2024-1202',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_2.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Ashraf Ali',
  },
  {
    roll: '#1203',
    name: 'Arham Mahmud',
    subId: 'ID: S-P1-1203',
    studentId: 'S-2024-1203',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_3.png',
    section: 'Section B',
    bloodGroup: 'A+',
    guardianName: 'Md. Ashraful Mahmud',
  },
  {
    roll: '#1204',
    name: 'Zaara Khan',
    subId: 'ID: S-P1-1204',
    studentId: 'S-2024-1204',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_4.png',
    section: 'Section B',
    bloodGroup: 'AB+',
    guardianName: 'Md. Zakir Hossain',
  },
  {
    roll: '#1205',
    name: 'Shafwan Hossain',
    subId: 'ID: S-P1-1205',
    studentId: 'S-2024-1205',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_7.png',
    section: 'Section A',
    bloodGroup: 'B+',
    guardianName: 'Md. Shahadat Hossain',
  },
  {
    roll: '#1206',
    name: 'Sara Mehreen',
    subId: 'ID: S-P1-1206',
    studentId: 'S-2024-1206',
    classLevel: 'Pred 1',
    group: 'General',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop&q=80',
    fallbackAvatar: '/students/student_8.png',
    section: 'Section B',
    bloodGroup: 'AB+',
    guardianName: 'Md. Mahfuzul Alam',
  },
];

const ITEMS_PER_PAGE = 10;

export const Students: React.FC = () => {
  const { language, t, toBanglaNum } = useLanguage();
  const [students, setStudents] = useState<StudentRecord[]>(ALL_STUDENTS_DATA);
  const [selectedClass, setSelectedClass] = useState<string>('Class 10');
  const [selectedGroup, setSelectedGroup] = useState<string>('All Groups');
  const [selectedSection, setSelectedSection] = useState<string>('All Sections');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewingStudent, setViewingStudent] = useState<StudentRecord | null>(null);

  // Robust Filter logic supporting All Classes & each individual Class
  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      // 1. Class filter matching: supports Prep 1, Prep 2, Class 1 to Class 10
      const matchClass = (() => {
        if (selectedClass === 'All Classes') return true;
        const normSelected = selectedClass.toLowerCase().trim();
        const normStudent = s.classLevel.toLowerCase().trim();

        if (normStudent === normSelected) return true;

        // Prep 1 / Pred 1
        if (
          (normSelected.includes('prep 1') || normSelected.includes('pred 1') || normSelected === 'prep1' || normSelected === 'pred1') &&
          (normStudent.includes('prep 1') || normStudent.includes('pred 1') || normStudent.includes('prep-1') || normStudent.includes('prep-i'))
        ) return true;

        // Prep 2 / Pred 2
        if (
          (normSelected.includes('prep 2') || normSelected.includes('pred 2') || normSelected === 'prep2' || normSelected === 'pred2') &&
          (normStudent.includes('prep 2') || normStudent.includes('pred 2') || normStudent.includes('prep-2') || normStudent.includes('prep-ii'))
        ) return true;

        const selNum = normSelected.replace(/class/g, '').trim();
        const stuNum = normStudent.replace(/class/g, '').trim();
        if (selNum && stuNum && selNum === stuNum) return true;

        return normStudent.includes(normSelected) || normSelected.includes(normStudent);
      })();

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

  // Previous and Next Student Modal Navigation
  const handlePrevStudent = () => {
    if (!viewingStudent) return;
    const currentIndex = filteredStudents.findIndex(
      (s) => s.roll === viewingStudent.roll && s.studentId === viewingStudent.studentId
    );
    if (currentIndex > 0) {
      setViewingStudent(filteredStudents[currentIndex - 1]);
    } else if (filteredStudents.length > 0) {
      setViewingStudent(filteredStudents[filteredStudents.length - 1]);
    }
  };

  const handleNextStudent = () => {
    if (!viewingStudent) return;
    const currentIndex = filteredStudents.findIndex(
      (s) => s.roll === viewingStudent.roll && s.studentId === viewingStudent.studentId
    );
    if (currentIndex >= 0 && currentIndex < filteredStudents.length - 1) {
      setViewingStudent(filteredStudents[currentIndex + 1]);
    } else if (filteredStudents.length > 0) {
      setViewingStudent(filteredStudents[0]);
    }
  };

  // Keyboard navigation for Modal (Escape to close, Left/Right arrow to cycle students)
  useEffect(() => {
    if (!viewingStudent) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setViewingStudent(null);
      if (e.key === 'ArrowLeft') handlePrevStudent();
      if (e.key === 'ArrowRight') handleNextStudent();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewingStudent, filteredStudents]);

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>{t.nav.home}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">{t.studentsPage.title}</span>
          </div>

          {/* Left Narrative Block */}
          <div className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} />
              <span>{language === 'bn' ? 'শিক্ষার্থী ডিরেক্টরি' : 'STUDENT DIRECTORY'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {language === 'bn' ? (
                <>
                  শিক্ষার্থী ডাটাবেস ও <br />
                  ডিরেক্টরি
                </>
              ) : (
                <>
                  Student Database & <br />
                  Directory
                </>
              )}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {t.studentsPage.subtitle}
            </p>
          </div>

          {/* Floating White Quote Card on Bottom-Right */}
          <div className="hidden lg:block absolute bottom-16 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  {language === 'bn' ? 'আলোকিত আগামীর জন্য আজকের শিক্ষা' : 'Education today for a brighter tomorrow'}
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — {language === 'bn' ? 'এস ও এস হারম্যান মেইনার স্কুল' : 'SOS Hermann Gmeiner School'}
                </p>
              </div>
            </div>
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
                {toBanglaNum('1,240')}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">{t.studentsPage.totalStudents}</div>
              <div className="text-[11px] font-bold text-emerald-600 mt-0.5">{language === 'bn' ? '+১২% চলতি বছর' : '+12% this year'}</div>
            </div>
          </div>

          {/* Stat 2: Classes */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                {toBanglaNum('12')}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">{language === 'bn' ? 'মোট শ্রেণি' : 'Classes'}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">{language === 'bn' ? 'প্রেপ ১ থেকে ১০ম শ্রেণি' : 'Pred 1 to Class 10'}</div>
            </div>
          </div>

          {/* Stat 3: Student Groups */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0">
              <Users size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                {toBanglaNum('25')}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">{language === 'bn' ? 'গ্রুপ ও শাখা' : 'Student Groups'}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">{language === 'bn' ? 'বিজ্ঞান, মানবিক ও ব্যবসায়' : 'Academic & Co-curricular'}</div>
            </div>
          </div>

          {/* Stat 4: Student Support */}
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-6">
            <div className="w-13 h-13 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shrink-0">
              <Award size={22} />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">
                {toBanglaNum('100%')}
              </div>
              <div className="text-xs font-bold text-slate-600 mt-1">{language === 'bn' ? 'শিক্ষার্থী সহায়তা' : 'Student Support'}</div>
              <div className="text-[11px] font-medium text-slate-400 mt-0.5">{language === 'bn' ? 'উন্নত আগামীর প্রত্যয়ে' : 'For a brighter future'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Students Data Table & Directory Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
          {/* Header Row: Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                <Users size={20} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {t.studentsPage.title}
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  {t.studentsPage.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Filter Controls Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2">
            {/* Class Dropdown */}
            <div className="lg:col-span-2 relative">
              <select
                value={selectedClass}
                onChange={(e) => handleClassChange(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
              >
                <option value="All Classes">{t.studentsPage.tabAll}</option>
                <option value="Pred 1">{language === 'bn' ? 'প্রেপ ১' : 'Pred 1'}</option>
                <option value="Pred 2">{language === 'bn' ? 'প্রেপ ২' : 'Pred 2'}</option>
                <option value="Class 1">{language === 'bn' ? '১ম শ্রেণি' : 'Class 1'}</option>
                <option value="Class 2">{language === 'bn' ? '২য় শ্রেণি' : 'Class 2'}</option>
                <option value="Class 3">{language === 'bn' ? '৩য় শ্রেণি' : 'Class 3'}</option>
                <option value="Class 4">{language === 'bn' ? '৪র্থ শ্রেণি' : 'Class 4'}</option>
                <option value="Class 5">{language === 'bn' ? '৫ম শ্রেণি' : 'Class 5'}</option>
                <option value="Class 6">{language === 'bn' ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
                <option value="Class 7">{language === 'bn' ? '৭ম শ্রেণি' : 'Class 7'}</option>
                <option value="Class 8">{language === 'bn' ? '৮ম শ্রেণি' : 'Class 8'}</option>
                <option value="Class 9">{language === 'bn' ? '৯ম শ্রেণি' : 'Class 9'}</option>
                <option value="Class 10">{language === 'bn' ? '১০ম শ্রেণি' : 'Class 10'}</option>
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
                <option value="All Groups">{language === 'bn' ? 'সকল গ্রুপ' : 'All Groups'}</option>
                <option value="Science">{language === 'bn' ? 'বিজ্ঞান' : 'Science'}</option>
                <option value="Business Studies">{language === 'bn' ? 'ব্যবসায় শিক্ষা' : 'Business Studies'}</option>
                <option value="Humanities">{language === 'bn' ? 'মানবিক' : 'Humanities'}</option>
                <option value="General">{language === 'bn' ? 'সাধারণ' : 'General'}</option>
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
                <option value="All Sections">{language === 'bn' ? 'সকল শাখা' : 'All Sections'}</option>
                <option value="Section A">{language === 'bn' ? 'শাখা এ (A)' : 'Section A'}</option>
                <option value="Section B">{language === 'bn' ? 'শাখা বি (B)' : 'Section B'}</option>
                <option value="Section C">{language === 'bn' ? 'শাখা সি (C)' : 'Section C'}</option>
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
                placeholder={t.studentsPage.searchPlaceholder}
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
                <span>{language === 'bn' ? 'সব ফিল্টার রিসেট' : 'Reset all'}</span>
              </button>
            </div>
          )}

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 sm:px-6">{t.studentsPage.rollCol}</th>
                  <th className="py-3.5 px-4 sm:px-6">{t.studentsPage.nameCol}</th>
                  <th className="py-3.5 px-4 sm:px-6">{t.studentsPage.classCol}</th>
                  <th className="py-3.5 px-4 sm:px-6">{t.studentsPage.groupCol}</th>
                  <th className="py-3.5 px-4 sm:px-6">{language === 'bn' ? 'শিক্ষার্থী আইডি' : 'STUDENT ID'}</th>
                  <th className="py-3.5 px-4 sm:px-6 text-center">{t.studentsPage.actionCol}</th>
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
                        <div className="flex items-center justify-center">
                          {/* Eye / View Profile */}
                          <button
                            type="button"
                            title="View Profile"
                            onClick={() => setViewingStudent(student)}
                            className="w-7 h-7 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-[#004d34] border border-slate-200/80 flex items-center justify-center transition cursor-pointer"
                          >
                            <Eye size={13} />
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
            <span>{language === 'bn' ? 'ভর্তি নির্দেশিকা ও তথ্য' : 'Empower Our Students'}</span>
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>

      {/* 5. View Student Details Modal (Matching reference image media_1790114800234.jpg) */}
      {viewingStudent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setViewingStudent(null);
          }}
        >
          <div className="relative bg-white rounded-3xl max-w-[430px] w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100 my-auto">
            {/* Dark Green Curved Top Header */}
            <div className="relative bg-[#004d34] h-28 sm:h-32 flex items-start justify-end p-3.5">
              {/* Subtle curved bottom shape */}
              <div
                className="absolute inset-x-0 -bottom-1 h-8 bg-white"
                style={{
                  borderTopLeftRadius: '50% 100%',
                  borderTopRightRadius: '50% 100%',
                }}
              />

              {/* Close Button (X in white round button on top right) */}
              <button
                type="button"
                aria-label="Close"
                onClick={() => setViewingStudent(null)}
                className="relative z-20 w-8 h-8 rounded-full bg-white text-slate-800 hover:bg-slate-100 shadow-md flex items-center justify-center transition cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Avatar & Left/Right Navigation Row */}
            <div className="relative px-6 -mt-14 sm:-mt-16 flex items-center justify-between z-10">
              {/* Left Arrow Button */}
              <button
                type="button"
                aria-label="Previous Student"
                onClick={handlePrevStudent}
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Central Circular Student Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white shrink-0">
                <img
                  src={viewingStudent.avatar}
                  alt={viewingStudent.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = viewingStudent.fallbackAvatar;
                  }}
                />
              </div>

              {/* Right Arrow Button */}
              <button
                type="button"
                aria-label="Next Student"
                onClick={handleNextStudent}
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Modal Body Info */}
            <div className="p-5 sm:p-6 pt-3 space-y-4">
              {/* Student Name */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                  {viewingStudent.name}
                </h3>

                {/* Roll & ID Pill Badge */}
                <div className="flex items-center justify-center mt-2">
                  <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#004d34] border border-emerald-200/70 px-3.5 py-1 rounded-full text-xs font-bold shadow-2xs">
                    <User size={13} className="text-[#059669]" />
                    <span>{language === 'bn' ? `রোল: ${toBanglaNum(viewingStudent.roll)}` : `Roll: ${viewingStudent.roll}`}</span>
                    <span className="text-emerald-300">|</span>
                    <span>
                      {language === 'bn' ? 'আইডি' : 'ID'}:{' '}
                      {toBanglaNum(
                        viewingStudent.subId
                          ? viewingStudent.subId.replace('ID: ', '')
                          : viewingStudent.studentId
                      )}
                    </span>
                  </div>
                </div>

                {/* School Name Subtext */}
                <p className="text-[11px] sm:text-xs font-semibold text-slate-400 mt-1.5">
                  {language === 'bn' ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}
                </p>
              </div>

              {/* 4 Info Cards (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* 1. Class */}
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400">{language === 'bn' ? 'শ্রেণি' : 'Class'}</span>
                    <span className="block text-sm sm:text-base font-black text-slate-900 tracking-tight truncate">
                      {toBanglaNum(viewingStudent.classLevel.replace(' Class', ''))}
                    </span>
                  </div>
                </div>

                {/* 2. Section */}
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400">{language === 'bn' ? 'শাখা' : 'Section'}</span>
                    <span className="block text-sm sm:text-base font-black text-slate-900 tracking-tight truncate">
                      {viewingStudent.section.replace('Section ', '')}
                    </span>
                  </div>
                </div>

                {/* 3. Group */}
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] border border-emerald-100 flex items-center justify-center shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400">{language === 'bn' ? 'বিভাগ' : 'Group'}</span>
                    <span className="block text-xs font-black text-slate-900 tracking-tight truncate">
                      {viewingStudent.group}
                    </span>
                  </div>
                </div>

                {/* 4. Blood Group */}
                <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0">
                    <Droplet size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold text-slate-400">{language === 'bn' ? 'রক্তের গ্রুপ' : 'Blood Group'}</span>
                    <span className="block text-sm sm:text-base font-black text-slate-900 tracking-tight truncate">
                      {viewingStudent.bloodGroup || 'B+'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guardian & Contact Details Card */}
              <div className="bg-[#f0fdf4]/50 border border-emerald-100/90 rounded-2xl p-3.5 sm:p-4 space-y-2.5 shadow-2xs">
                <div className="flex items-center gap-2 text-[#004d34] font-extrabold text-xs sm:text-sm pb-2 border-b border-emerald-100/80">
                  <UserCheck size={16} className="text-[#059669]" />
                  <span>{language === 'bn' ? 'অভিভাবক ও যোগাযোগের তথ্য' : 'Guardian & Contact Details'}</span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Father's Name */}
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 flex items-center gap-2 text-slate-500 font-semibold">
                      <User size={13} className="text-[#059669] shrink-0" />
                      <span>{t.studentsPage.fatherName}</span>
                    </div>
                    <div className="col-span-1 text-slate-400 font-bold text-center">:</div>
                    <div className="col-span-6 font-bold text-slate-900 truncate">
                      {viewingStudent.fatherName || viewingStudent.guardianName || 'Md. Abdul Quader'}
                    </div>
                  </div>

                  {/* Mother's Name */}
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 flex items-center gap-2 text-slate-500 font-semibold">
                      <User size={13} className="text-[#059669] shrink-0" />
                      <span>{t.studentsPage.motherName}</span>
                    </div>
                    <div className="col-span-1 text-slate-400 font-bold text-center">:</div>
                    <div className="col-span-6 font-bold text-slate-900 truncate">
                      {viewingStudent.motherName || 'Sufia Khatun'}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 flex items-center gap-2 text-slate-500 font-semibold">
                      <Phone size={13} className="text-[#059669] shrink-0" />
                      <span>{t.studentsPage.phone}</span>
                    </div>
                    <div className="col-span-1 text-slate-400 font-bold text-center">:</div>
                    <div className="col-span-6 font-bold text-slate-900">
                      {toBanglaNum(viewingStudent.phoneNumber || '01713-445566')}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-5 flex items-center gap-2 text-slate-500 font-semibold">
                      <MapPin size={13} className="text-[#059669] shrink-0" />
                      <span>{t.studentsPage.address}</span>
                    </div>
                    <div className="col-span-1 text-slate-400 font-bold text-center">:</div>
                    <div className="col-span-6 font-bold text-slate-900 truncate">
                      {viewingStudent.address || (language === 'bn' ? 'গল্লামারী, খুলনা – ৯২০৮' : 'Gollamari, Khulna - 9208')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Profile Button */}
              <button
                type="button"
                onClick={() => setViewingStudent(null)}
                className="w-full bg-[#004d34] hover:bg-[#003826] text-white py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer mt-3"
              >
                <UserCheck size={16} />
                <span>{language === 'bn' ? 'প্রোফাইল বন্ধ করুন' : 'Close Profile'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
