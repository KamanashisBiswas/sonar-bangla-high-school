import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Users,
  Award,
  Globe,
  Heart,
  Calendar,
  Search,
  ArrowRight,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Sparkles,
  ChevronDown,
  BookOpen,
  Trophy,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard,
} from '../components/ui/MotionComponents';

interface CommitteeMember {
  id: string;
  name: string;
  nameBn: string;
  designation: string;
  designationBn: string;
  batch: string;
  profession: string;
  professionBn: string;
  organization: string;
  organizationBn: string;
  image: string;
  email: string;
  phone?: string;
}

interface AlumniProfile {
  id: string;
  name: string;
  nameBn: string;
  batch: string;
  role: string;
  roleBn: string;
  organization: string;
  organizationBn: string;
  field: string;
  fieldBn: string;
  higherEd: string;
  higherEdBn: string;
  location: string;
  locationBn: string;
  image: string;
  quote?: string;
  quoteBn?: string;
  isDistinguished?: boolean;
}

const EXECUTIVE_COMMITTEE: CommitteeMember[] = [
  {
    id: 'com-1',
    name: 'Engr. Faisal Ahmed',
    nameBn: 'প্রকৌশলী ফয়সাল আহমেদ',
    designation: 'President',
    designationBn: 'সভাপতি',
    batch: '1996',
    profession: 'Executive Engineer',
    professionBn: 'নির্বাহী প্রকৌশলী',
    organization: 'Public Works Department (PWD)',
    organizationBn: 'গণপূর্ত অধিদপ্তর (পিডব্লিউডি)',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&fit=crop&q=80',
    email: 'faisal.ahmed96@alumni.soshgs.edu.bd',
  },
  {
    id: 'com-2',
    name: 'Barrister Kazi Rezwan',
    nameBn: 'ব্যারিস্টার কাজী রেজওয়ান',
    designation: 'Vice President',
    designationBn: 'সহ-সভাপতি',
    batch: '1998',
    profession: 'Advocate',
    professionBn: 'আইনজীবী ও ব্যারিস্টার',
    organization: 'Supreme Court of Bangladesh',
    organizationBn: 'বাংলাদেশ সুপ্রিম কোর্ট',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&fit=crop&q=80',
    email: 'kazi.rezwan@supremecourt.gov.bd',
  },
  {
    id: 'com-3',
    name: 'Dr. Farhana Rahman',
    nameBn: 'ডা. ফারহানা রহমান',
    designation: 'General Secretary',
    designationBn: 'সাধারণ সম্পাদক',
    batch: '2000',
    profession: 'Associate Professor (Pediatrics)',
    professionBn: 'সহযোগী অধ্যাপক (শিশু রোগ বিশেষজ্ঞ)',
    organization: 'Khulna Medical College & Hospital',
    organizationBn: 'খুলনা মেডিকেল কলেজ ও হাসপাতাল',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&fit=crop&q=80',
    email: 'dr.farhana@kmc.edu.bd',
  },
  {
    id: 'com-4',
    name: 'Tanvir Mahmud, BCS',
    nameBn: 'তানভীর মাহমুদ, বিসিএস',
    designation: 'Joint Secretary',
    designationBn: 'যুগ্ম সাধারণ সম্পাদক',
    batch: '2004',
    profession: 'Senior Assistant Secretary',
    professionBn: 'সিনিয়র সহকারী সচিব',
    organization: 'Ministry of Finance',
    organizationBn: 'অর্থ মন্ত্রণালয়, বাংলাদেশ সরকার',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&fit=crop&q=80',
    email: 'tanvir.mahmud@mof.gov.bd',
  },
  {
    id: 'com-5',
    name: 'Rubina Yasmin',
    nameBn: 'রুবিনা ইয়াসমিন',
    designation: 'Treasurer / Finance Secretary',
    designationBn: 'অর্থ সম্পাদক',
    batch: '2008',
    profession: 'Vice President, Retail Banking',
    professionBn: 'ভাইস প্রেসিডেন্ট, রিটেল ব্যাংকিং',
    organization: 'Standard Chartered Bank',
    organizationBn: 'স্ট্যান্ডার্ড চার্টার্ড ব্যাংক',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&fit=crop&q=80',
    email: 'rubina.yasmin@sc.com',
  },
  {
    id: 'com-6',
    name: 'Dr. Anisur Rahman',
    nameBn: 'ড. আনিসুর রহমান',
    designation: 'Organizing Secretary',
    designationBn: 'সাংগঠনিক সম্পাদক',
    batch: '2002',
    profession: 'Professor of Computer Science',
    professionBn: 'অধ্যাপক, কম্পিউটার সায়েন্স',
    organization: 'KUET, Khulna',
    organizationBn: 'কুয়েট, খুলনা',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&fit=crop&q=80',
    email: 'anisur@cse.kuet.ac.bd',
  },
  {
    id: 'com-7',
    name: 'Dr. Nahid Sultana',
    nameBn: 'ডা. নাহিদ সুলতানা',
    designation: 'Student Welfare & Mentorship Secretary',
    designationBn: 'ছাত্র কল্যাণ ও মেন্টরশিপ সম্পাদক',
    batch: '2005',
    profession: 'Consultant Cardiologist',
    professionBn: 'কনসালট্যান্ট কার্ডিওলজিস্ট',
    organization: 'National Heart Foundation',
    organizationBn: 'ন্যাশনাল হার্ট ফাউন্ডেশন',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&fit=crop&q=80',
    email: 'dr.nahid@nhf.org.bd',
  },
  {
    id: 'com-8',
    name: 'Sazzad Hossain',
    nameBn: 'সাজ্জাদ হোসেন',
    designation: 'International Affairs Secretary',
    designationBn: 'আন্তর্জাতিক বিষয়ক সম্পাদক',
    batch: '2006',
    profession: 'Staff Software Engineer',
    professionBn: 'স্টাফ সফটওয়্যার ইঞ্জিনিয়ার',
    organization: 'Google LLC (USA)',
    organizationBn: 'গুগল এলএলসি (যুক্তরাষ্ট্র)',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&fit=crop&q=80',
    email: 'sazzad@google.com',
  },
  {
    id: 'com-9',
    name: 'Mahfuzul Alam',
    nameBn: 'মাহফুজুল আলম',
    designation: 'Sports & Cultural Secretary',
    designationBn: 'ক্রীড়া ও সাংস্কৃতিক সম্পাদক',
    batch: '2012',
    profession: 'Founder & CEO',
    professionBn: 'প্রতিষ্ঠাতা ও প্রধান নির্বাহী',
    organization: 'AgroTech Bangladesh',
    organizationBn: 'অ্যাগ্রোটেক বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=80',
    email: 'mahfuz@agrotech.com.bd',
  },
  {
    id: 'com-10',
    name: 'Nazmul Haque',
    nameBn: 'নাজমুল হক',
    designation: 'IT & Communications Secretary',
    designationBn: 'প্রচার ও প্রযুক্তি সম্পাদক',
    batch: '2015',
    profession: 'Senior Data Scientist',
    professionBn: 'সিনিয়র ডেটা সায়েন্টিস্ট',
    organization: 'Vodafone Global Enterprise (UK)',
    organizationBn: 'ভোডাফোন গ্লোবাল এন্টারপ্রাইজ (যুক্তরাজ্য)',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&fit=crop&q=80',
    email: 'nazmul.haque@vodafone.com',
  },
];

const ALUMNI_DATABASE: AlumniProfile[] = [
  {
    id: 'alm-1',
    name: 'Engr. Faisal Ahmed',
    nameBn: 'প্রকৌশলী ফয়সাল আহমেদ',
    batch: '1996',
    role: 'Executive Engineer',
    roleBn: 'নির্বাহী প্রকৌশলী',
    organization: 'Public Works Department (PWD)',
    organizationBn: 'গণপূর্ত অধিদপ্তর (পিডব্লিউডি)',
    field: 'Civil Service & Engineering',
    fieldBn: 'পাবলিক সার্ভিস ও প্রকৌশল',
    higherEd: 'B.Sc in Civil Engineering (BUET)',
    higherEdBn: 'বিএসসি ইন সিভিল ইঞ্জিনিয়ারিং (বুয়েট)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&fit=crop&q=80',
    quote: 'The values of discipline and humanitarian compassion learned at SOS Hermann Gmeiner continue to guide my public service career.',
    quoteBn: 'এস ও এস স্কুলের শৃঙ্খলা এবং মানবিক মূল্যবোধের শিক্ষাই আমার কর্মজীবনের সবচেয়ে বড় শক্তি।',
    isDistinguished: true,
  },
  {
    id: 'alm-2',
    name: 'Dr. Farhana Rahman',
    nameBn: 'ডা. ফারহানা রহমান',
    batch: '2000',
    role: 'Associate Professor',
    roleBn: 'সহযোগী অধ্যাপক',
    organization: 'Khulna Medical College & Hospital',
    organizationBn: 'খুলনা মেডিকেল কলেজ ও হাসপাতাল',
    field: 'Medical & Healthcare',
    fieldBn: 'চিকিৎসা ও স্বাস্থ্যসেবা',
    higherEd: 'MBBS (DMC), FCPS (Pediatrics)',
    higherEdBn: 'এমবিবিএস (ডিএমসি), এফসিপিএস (শিশু বিশেষজ্ঞ)',
    location: 'Khulna, Bangladesh',
    locationBn: 'খুলনা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&fit=crop&q=80',
    quote: 'Serving the people of Khulna with healthcare and giving back to the community that nurtured me from childhood is my greatest joy.',
    quoteBn: 'খুলনার মানুষের চিকিৎসা সেবা দেওয়া এবং ছোটবেলা যে স্কুলে বেড়ে উঠেছি সেই স্কুলের কল্যাণে পাশে থাকা আমার পরম প্রাপ্তি।',
    isDistinguished: true,
  },
  {
    id: 'alm-3',
    name: 'Sazzad Hossain',
    nameBn: 'সাজ্জাদ হোসেন',
    batch: '2006',
    role: 'Staff Software Engineer',
    roleBn: 'স্টাফ সফটওয়্যার ইঞ্জিনিয়ার',
    organization: 'Google LLC',
    organizationBn: 'গুগল এলএলসি',
    field: 'Technology & AI',
    fieldBn: 'প্রযুক্তি ও এআই',
    higherEd: 'B.Sc in CSE (BUET), M.S in CS (Stanford)',
    higherEdBn: 'বিএসসি ইন সিএসই (বুয়েট), এমএস (স্ট্যানফোর্ড)',
    location: 'Mountain View, California, USA',
    locationBn: 'ক্যালিফোর্নিয়া, যুক্তরাষ্ট্র',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&fit=crop&q=80',
    quote: 'From our school computer lab to Silicon Valley, the teachers here built our analytical mindset from the roots.',
    quoteBn: 'আমাদের স্কুলের কম্পিউটার ল্যাব থেকে সিলিকন ভ্যালি—শিক্ষকদের যত্নই আমাদের চিন্তার ভিত্তি গড়ে দিয়েছিল।',
    isDistinguished: true,
  },
  {
    id: 'alm-4',
    name: 'Tanvir Mahmud, BCS',
    nameBn: 'তানভীর মাহমুদ, বিসিএস',
    batch: '2004',
    role: 'Senior Assistant Secretary',
    roleBn: 'সিনিয়র সহকারী সচিব',
    organization: 'Ministry of Finance, Bangladesh',
    organizationBn: 'অর্থ মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার',
    field: 'Civil Service & Governance',
    fieldBn: 'সিভিল প্রশাসন ও শাসন',
    higherEd: 'BBA & MBA in Finance (DU, IBA)',
    higherEdBn: 'বিবিএ ও এমবিএ ইন ফিন্যান্স (আইবিএ, ঢাবি)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&fit=crop&q=80',
    quote: 'Integrity and patriotism were not just classroom subjects; they were lived traditions on our campus.',
    quoteBn: 'সততা ও দেশপ্রেম এখানে শুধু বইয়ের পাঠ ছিল না, পুরো ক্যাম্পাস সংস্কৃতির অংশ ছিল।',
    isDistinguished: true,
  },
  {
    id: 'alm-5',
    name: 'Dr. Anisur Rahman',
    nameBn: 'ড. আনিসুর রহমান',
    batch: '2002',
    role: 'Professor of Computer Science',
    roleBn: 'অধ্যাপক, কম্পিউটার সায়েন্স',
    organization: 'KUET',
    organizationBn: 'খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (কুয়েট)',
    field: 'Academics & Research',
    fieldBn: 'উচ্চশিক্ষা ও গবেষণা',
    higherEd: 'B.Sc (KUET), Ph.D (Univ of Tokyo)',
    higherEdBn: 'বিএসসি (কুয়েট), পিএইচডি (টোকিও বিশ্ববিদ্যালয়)',
    location: 'Khulna, Bangladesh',
    locationBn: 'খুলনা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&fit=crop&q=80',
    quote: 'My journey into scientific research started in the high school science fairs and physics labs of SOS.',
    quoteBn: 'আমার বৈজ্ঞানিক গবেষণার প্রথম আগ্রহ তৈরি হয়েছিল এস ও এস স্কুলের বিজ্ঞান মেলা আর ল্যাব থেকেই।',
    isDistinguished: true,
  },
  {
    id: 'alm-6',
    name: 'Rubina Yasmin',
    nameBn: 'রুবিনা ইয়াসমিন',
    batch: '2008',
    role: 'Vice President, Retail Banking',
    roleBn: 'ভাইস প্রেসিডেন্ট, রিটেল ব্যাংকিং',
    organization: 'Standard Chartered Bank',
    organizationBn: 'স্ট্যান্ডার্ড চার্টার্ড ব্যাংক',
    field: 'Finance & Banking',
    fieldBn: 'অর্থনীতি ও ব্যাংকিং',
    higherEd: 'B.Com (Hons), MBA (Dhaka University)',
    higherEdBn: 'বি.কম (অনার্স), এমবিএ (ঢাকা বিশ্ববিদ্যালয়)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&fit=crop&q=80',
    quote: 'Empowering women in financial leadership is my passion, inspired by our teachers who always encouraged female students to excel.',
    quoteBn: 'আমাদের শিক্ষকরা সবসময় মেয়েদের নেতৃত্বের জায়গায় যাওয়ার সাহস দিতেন, যা আজও আমার কাজের প্রেরণা।',
    isDistinguished: true,
  },
  {
    id: 'alm-7',
    name: 'Barrister Kazi Rezwan',
    nameBn: 'ব্যারিস্টার কাজী রেজওয়ান',
    batch: '1998',
    role: 'Advocate',
    roleBn: 'আইনজীবী ও ব্যারিস্টার',
    organization: 'Supreme Court of Bangladesh',
    organizationBn: 'বাংলাদেশ সুপ্রিম কোর্ট',
    field: 'Civil Service & Governance',
    fieldBn: 'আইন ও বিচার ব্যবস্থা',
    higherEd: 'LL.B (Hons), Barrister-at-Law (Lincoln’s Inn)',
    higherEdBn: 'এলএলবি (অনার্স), বার অ্যাট ল (লিংকনস ইন)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&fit=crop&q=80',
    quote: 'Justice, equity and community service have always been the core guiding lights taught in SOS Hermann Gmeiner School.',
    quoteBn: 'ন্যায়পরায়ণতা ও জনকল্যাণই ছিল আমাদের স্কুল থেকে পাওয়া সবচেয়ে বড় দর্শন।',
    isDistinguished: true,
  },
  {
    id: 'alm-8',
    name: 'Dr. Nahid Sultana',
    nameBn: 'ডা. নাহিদ সুলতানা',
    batch: '2005',
    role: 'Consultant Cardiologist',
    roleBn: 'কনসালট্যান্ট কার্ডিওলজিস্ট',
    organization: 'National Heart Foundation Hospital',
    organizationBn: 'ন্যাশনাল হার্ট ফাউন্ডেশন হাসপাতাল',
    field: 'Medical & Healthcare',
    fieldBn: 'চিকিৎসা ও স্বাস্থ্যসেবা',
    higherEd: 'MBBS (SSMC), MD (Cardiology)',
    higherEdBn: 'এমবিবিএস (সলিমুল্লাহ), এমডি (কার্ডিওলজি)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&fit=crop&q=80',
    quote: 'Every life touched with compassionate healthcare is a tribute to the dedicated teachers who believed in us.',
    quoteBn: 'চিকিৎসাসেবার মাধ্যমে মানুষের পাশে দাঁড়ানোই আমাদের শ্রদ্ধেয় শিক্ষকদের প্রতি প্রকৃত শ্রদ্ধাঞ্জলি।',
    isDistinguished: true,
  },
  {
    id: 'alm-9',
    name: 'Mahfuzul Alam',
    nameBn: 'মাহফুজুল আলম',
    batch: '2012',
    role: 'Founder & CEO',
    roleBn: 'প্রতিষ্ঠাতা ও প্রধান নির্বাহী',
    organization: 'AgroTech Bangladesh',
    organizationBn: 'অ্যাগ্রোটেক বাংলাদেশ',
    field: 'Entrepreneurship',
    fieldBn: 'উদ্যোক্তা ও প্রযুক্তি',
    higherEd: 'B.Sc in Agricultural Economics (BAU)',
    higherEdBn: 'বিএসসি ইন কৃষি অর্থনীতি (বাকৃবি)',
    location: 'Khulna, Bangladesh',
    locationBn: 'খুলনা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&fit=crop&q=80',
    quote: 'Building tech-driven sustainable agriculture solutions for Southwestern farmers started from my school days curiosity.',
    quoteBn: 'দক্ষিণ-পশ্চিমাঞ্চলের কৃষকদের জন্য প্রযুক্তিনির্ভর সেবা গড়ে তোলার ভাবনা স্কুলজীবনের কৌতূহল থেকেই এসেছে।',
    isDistinguished: false,
  },
  {
    id: 'alm-10',
    name: 'Nazmul Haque',
    nameBn: 'নাজমুল হক',
    batch: '2015',
    role: 'Senior Data Scientist',
    roleBn: 'সিনিয়র ডেটা সায়েন্টিস্ট',
    organization: 'Vodafone Global Enterprise',
    organizationBn: 'ভোডাফোন গ্লোবাল এন্টারপ্রাইজ',
    field: 'Technology & AI',
    fieldBn: 'প্রযুক্তি ও এআই',
    higherEd: 'B.Sc in EEE (IUT, OIC)',
    higherEdBn: 'বিএসসি ইন ইইই (আইইউটি, ওআইসি)',
    location: 'London, United Kingdom',
    locationBn: 'লন্ডন, যুক্তরাজ্য',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&fit=crop&q=80',
    quote: 'Grateful for the strong mathematics grounding provided by our teachers that opened doors to global opportunities.',
    quoteBn: 'আমাদের শিক্ষকদের দেওয়া গণিতের দৃঢ় ভিত্তিই বিশ্বমঞ্চে কাজ করার সুযোগ করে দিয়েছে।',
    isDistinguished: false,
  },
  {
    id: 'alm-11',
    name: 'Tasnim Jahan',
    nameBn: 'তাসনিম জাহান',
    batch: '2010',
    role: 'Senior Lead Architect',
    roleBn: 'সিনিয়র লিড আর্কিটেক্ট',
    organization: 'Studio Morphogenesis',
    organizationBn: 'স্টুডিও মরফোজেনেসিস',
    field: 'Civil Service & Engineering',
    fieldBn: 'স্থাপত্য ও টেকসই ডিজাইন',
    higherEd: 'B.Arch (BUET)',
    higherEdBn: 'বি.আর্ক (বুয়েট)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&fit=crop&q=80',
    quote: 'School art classes and drafting sessions laid the earliest foundation of my design career.',
    quoteBn: 'স্কুলের চিত্রাঙ্কন ও ল্যাব ক্লাসের আনন্দই আমার স্থাপত্য জীবনের বীজ বুনে দিয়েছিল।',
    isDistinguished: false,
  },
  {
    id: 'alm-12',
    name: 'Capt. Ashraful Islam',
    nameBn: 'ক্যাপ্টেন আশরাফুল ইসলাম',
    batch: '2009',
    role: 'First Officer, Boeing 787',
    roleBn: 'ফার্স্ট অফিসার, বোয়িং ৭৮৭',
    organization: 'Biman Bangladesh Airlines',
    organizationBn: 'বিমান বাংলাদেশ এয়ারলাইন্স',
    field: 'Aviation & Defense',
    fieldBn: 'এভিয়েশন ও পরিবহন',
    higherEd: 'Commercial Pilot License (FAA, USA)',
    higherEdBn: 'সিপিএল (এফএএ, যুক্তরাষ্ট্র)',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&fit=crop&q=80',
    quote: 'Discipline in morning assembly taught me the value of checklists, which is now the core of aviation safety.',
    quoteBn: 'প্রাত্যহিক সমাবেশের নিয়মানুবর্তিতাই আজ আকাশজয়ের প্রতিটি পদক্ষেপে আমার শৃঙ্খলা বজায় রাখে।',
    isDistinguished: false,
  },
];

export const Alumni: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatchRange, setSelectedBatchRange] = useState('All');
  const [selectedField, setSelectedField] = useState('All');

  // Active Tab for Hero Quick Nav
  const [activeNavTab, setActiveNavTab] = useState<'committee' | 'directory'>('committee');

  const scrollToSection = (id: 'committee' | 'directory') => {
    setActiveNavTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Filter logic
  const filteredAlumni = ALUMNI_DATABASE.filter((alm) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      alm.name.toLowerCase().includes(q) ||
      alm.nameBn.includes(searchQuery) ||
      alm.role.toLowerCase().includes(q) ||
      alm.organization.toLowerCase().includes(q) ||
      alm.organizationBn.includes(searchQuery) ||
      alm.batch.includes(searchQuery);

    let matchesBatch = true;
    const batchYear = parseInt(alm.batch, 10);
    if (selectedBatchRange === '1990-1999') {
      matchesBatch = batchYear >= 1990 && batchYear <= 1999;
    } else if (selectedBatchRange === '2000-2009') {
      matchesBatch = batchYear >= 2000 && batchYear <= 2009;
    } else if (selectedBatchRange === '2010-2019') {
      matchesBatch = batchYear >= 2010 && batchYear <= 2019;
    } else if (selectedBatchRange === '2020-2026') {
      matchesBatch = batchYear >= 2020 && batchYear <= 2026;
    }

    let matchesField = true;
    if (selectedField !== 'All') {
      matchesField = alm.field === selectedField;
    }

    return matchesSearch && matchesBatch && matchesField;
  });

  return (
    <div className="bg-[#fcfdfd] pb-24 overflow-hidden">
      {/* 1. HERO SECTION: Full-Width Real Campus Banner with White Fade Overlay */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[530px] flex flex-col justify-between border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/campus_main.png"
            alt="SOS Hermann Gmeiner School Khulna Campus"
            className="w-full h-full object-cover object-right"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/campus_main2.png';
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255, 255, 255, 0.96) 48%, rgba(255, 255, 255, 0.45) 66%, rgba(255, 255, 255, 0) 84%)',
            }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-5 sm:pt-6 pb-20 sm:pb-24 flex-1 flex flex-col">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link
              to="/"
              className="hover:text-emerald-800 flex items-center gap-1 transition-colors text-emerald-700"
            >
              <Home size={14} />
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'প্রাক্তন শিক্ষার্থী পরিষদ (Alumni)' : 'Alumni Association'}
            </span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25} className="max-w-xl space-y-3.5 pt-12 sm:pt-16 lg:pt-20">
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#004d34] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <GraduationCap size={15} className="text-[#059669]" />
              <span>{isBn ? 'গৌরবময় প্রাক্তন শিক্ষার্থী নেটওয়ার্ক' : 'GLOBAL ALUMNI NETWORK'}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>
                  স্মৃতির ক্যাম্পাস, <br />
                  <span className="text-[#004d34]">সাফল্যের মহিমায়</span> বন্ধন
                </>
              ) : (
                <>
                  Connecting Generations <br />
                  <span className="text-[#004d34]">of Excellence</span>
                </>
              )}
            </h1>

            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn
                ? 'এস ও এস হারম্যান মেইনার স্কুল খুলনার অফিশিয়াল প্রাক্তন শিক্ষার্থী নেটওয়ার্কে আপনাকে স্বাগতম। ১৯৮৭ সাল থেকে গড়ে ওঠা হাজারো প্রাক্তন শিক্ষার্থীর অবিচ্ছেদ্য বন্ধন, পেশাগত উন্নয়ন ও উত্তরসূরিদের অনুপ্রেরণার কেন্দ্র।'
                : 'Welcome to the official Alumni Association of SOS Hermann Gmeiner School Khulna. Celebrating over 38 years of proud heritage, leadership, and lifelong bonds across the globe.'}
            </p>

            {/* Hero Quick CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => scrollToSection('committee')}
                className={`inline-flex items-center gap-2 font-bold text-xs px-5 py-2.5 rounded-xl transition cursor-pointer ${
                  activeNavTab === 'committee'
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs'
                }`}
              >
                <ShieldCheck size={15} />
                <span>{isBn ? 'কার্যনির্বাহী কমিটি' : 'Executive Committee'}</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('directory')}
                className={`inline-flex items-center gap-2 font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer ${
                  activeNavTab === 'directory'
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'bg-[#fef3c7] hover:bg-[#fde68a] text-amber-900 shadow-2xs'
                }`}
              >
                <Search size={14} className={activeNavTab === 'directory' ? 'text-emerald-300' : 'text-amber-700'} />
                <span>{isBn ? 'প্রাক্তনীদের তালিকা' : 'Alumni Directory'}</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Floating Quote Card */}
          <ScrollScale delay={0.2} className="hidden lg:block absolute bottom-12 right-8 xl:right-16 bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-[340px]">
            <div className="flex items-start gap-3">
              <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                “
              </span>
              <div>
                <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                  {isBn ? 'একবার হারম্যান মেইনারিয়ান, চিরকাল এক পরিবার' : 'Once a Gmeinerian, Always Family'}
                </h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  — {isBn ? 'অ্যালামনাই অ্যাসোসিয়েশন এক্সিকিউটিভ কমিটি' : 'Alumni Association Executive Committee'}
                </p>
              </div>
            </div>
          </ScrollScale>
        </div>
      </div>

      {/* 2. STATS BAR: Key Impact & Alumni Reach */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <ScrollStaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {[
            {
              val: '12,500+',
              valBn: '১২,৫০০+',
              label: isBn ? 'মোট সফল গ্র্যাজুয়েট' : 'Graduates Since 1987',
              icon: GraduationCap,
              color: 'text-emerald-700 bg-emerald-50',
            },
            {
              val: '38+',
              valBn: '৩৮+',
              label: isBn ? 'গৌরবময় এসএসসি ব্যাচ' : 'Successful SSC Batches',
              icon: Award,
              color: 'text-blue-700 bg-blue-50',
            },
            {
              val: '35+',
              valBn: '৩৫+',
              label: isBn ? 'বিশ্বের বিভিন্ন দেশে অবস্থান' : 'Countries Represented',
              icon: Globe,
              color: 'text-indigo-700 bg-indigo-50',
            },
            {
              val: '50 Lakh+',
              valBn: '৫০ লক্ষ+ ৳',
              label: isBn ? 'শিক্ষার্থী কল্যাণ বৃত্তি তহবিল' : 'Student Welfare & Grants',
              icon: Heart,
              color: 'text-rose-700 bg-rose-50',
            },
          ].map((stat, idx) => (
            <ScrollStaggerItem key={idx}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 flex items-center gap-3.5 h-full">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}
                  >
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {isBn ? stat.valBn : stat.val}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 3. EXECUTIVE COMMITTEE SECTION (Requested by User) */}
      <div id="committee" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 scroll-mt-20">
        <ScrollReveal duration={0.6} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#004d34] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
            <ShieldCheck size={14} className="text-[#059669]" />
            <span>{isBn ? 'কার্যনির্বাহী পরিষদ (২০২৫–২০২৭)' : 'EXECUTIVE COMMITTEE (2025–2027)'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isBn ? 'অ্যালামনাই অ্যাসোসিয়েশন কার্যনির্বাহী কমিটি' : 'Alumni Association Leadership'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
            {isBn
              ? 'আমাদের প্রাক্তন শিক্ষার্থীদের মেলবন্ধন সুদৃঢ় করতে ও স্কুল পরিবারের পাশে থাকতে নিবেদিতপ্রাণ পরিষদ।'
              : 'Dedicated alumni serving to strengthen the community, mentor students, and support our alma mater.'}
          </p>
        </ScrollReveal>

        {/* Committee Cards Grid */}
        <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {EXECUTIVE_COMMITTEE.map((member) => (
            <ScrollStaggerItem key={member.id}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 p-5 flex flex-col items-center text-center group hover:border-emerald-300 h-full">
                  {/* Photo with zoom hover */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3.5 border-3 border-emerald-50 shadow-md group-hover:scale-105 transition-transform duration-300 relative bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80';
                      }}
                    />
                  </div>

                  {/* Designation Badge */}
                  <span className="inline-block bg-[#e8f7ee] text-[#004d34] text-[10.5px] font-black px-2.5 py-0.5 rounded-full mb-2 border border-emerald-100">
                    {isBn ? member.designationBn : member.designation}
                  </span>

                  {/* Name */}
                  <h3 className="font-extrabold text-sm text-slate-900 leading-tight group-hover:text-[#004d34] transition-colors">
                    {isBn ? member.nameBn : member.name}
                  </h3>

                  {/* Batch Tag */}
                  <span className="text-[11px] font-bold text-[#059669] mt-0.5">
                    {isBn ? `ব্যাচ ${toBanglaNum(member.batch)}` : `Batch ${member.batch}`}
                  </span>

                  {/* Professional Role */}
                  <div className="text-[11px] text-slate-600 font-semibold mt-2 line-clamp-1">
                    {isBn ? member.professionBn : member.profession}
                  </div>

                  {/* Organization */}
                  <div className="text-[10.5px] text-slate-400 font-medium line-clamp-1">
                    {isBn ? member.organizationBn : member.organization}
                  </div>

                  {/* Email Contact */}
                  <div className="mt-auto pt-3.5 border-t border-slate-100 w-full flex items-center justify-center">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#004d34] transition"
                      title={member.email}
                    >
                      <Mail size={12} className="text-[#059669]" />
                      <span>{isBn ? 'ইমেইল' : 'Email'}</span>
                    </a>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 4. DISTINGUISHED ALUMNI SPOTLIGHT (With Personal Images) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <ScrollReveal duration={0.6} className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#059669] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles size={13} />
            <span>{isBn ? 'কৃতি প্রাক্তনীদের অর্জন' : 'HALL OF EXCELLENCE'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {isBn ? 'দেশ ও বিশ্বমঞ্চে আমাদের প্রাক্তনীদের পদচিহ্ন' : 'Distinguished Alumni Spotlight'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
            {isBn
              ? 'সিভিল প্রশাসন, চিকিৎসা, তথ্যপ্রযুক্তি, গবেষণা ও শিল্পোদ্যোগে অনন্য অবদান রেখে চলা আমাদের কৃতী শিক্ষার্থীরা।'
              : 'Celebrating graduates who are shaping industries, leading institutions, and making a lasting difference.'}
          </p>
        </ScrollReveal>

        {/* Distinguished Cards Grid with Real Photos */}
        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALUMNI_DATABASE.filter((a) => a.isDistinguished).map((alumni) => (
            <ScrollStaggerItem key={alumni.id}>
              <HoverCard className="h-full">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group hover:border-emerald-300 h-full">
                  <div>
                    {/* Top Badge & Batch */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#e8f7ee] text-[#004d34] border border-emerald-100">
                        <Award size={12} />
                        <span>{isBn ? `ব্যাচ ${toBanglaNum(alumni.batch)}` : `Batch ${alumni.batch}`}</span>
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {isBn ? alumni.fieldBn : alumni.field}
                      </span>
                    </div>

                    {/* Identity Header with Personal Image */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-emerald-100 bg-slate-100 group-hover:scale-105 transition-transform">
                        <img
                          src={alumni.image}
                          alt={alumni.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#004d34] transition-colors leading-tight">
                          {isBn ? alumni.nameBn : alumni.name}
                        </h3>
                        <p className="text-xs font-bold text-[#059669] mt-0.5">
                          {isBn ? alumni.roleBn : alumni.role}
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {isBn ? alumni.organizationBn : alumni.organization}
                        </p>
                      </div>
                    </div>

                    {/* Quote Box */}
                    {alumni.quote && (
                      <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-3.5 text-xs text-slate-600 italic font-medium leading-relaxed mb-4">
                        “{isBn ? alumni.quoteBn : alumni.quote}”
                      </div>
                    )}
                  </div>

                  {/* Bottom Meta */}
                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={13} className="text-slate-400 shrink-0" />
                      <span className="truncate">{isBn ? alumni.higherEdBn : alumni.higherEd}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-slate-400 shrink-0" />
                      <span>{isBn ? alumni.locationBn : alumni.location}</span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </div>

      {/* 5. ALUMNI INITIATIVES & STUDENT WELFARE */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        <ScrollReveal duration={0.65} distance={30} className="bg-gradient-to-br from-[#003826] to-[#004d34] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute right-40 top-0 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

          <div className="max-w-2xl space-y-3 mb-10">
            <span className="inline-block bg-white/15 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-200">
              {isBn ? 'প্রাক্তনীদের প্রাতিষ্ঠানিক অবদান' : 'GIVING BACK TO ALMA MATER'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {isBn ? 'উত্তরসূরিদের জন্য প্রাক্তনীদের বিভিন্ন কর্মসূচি' : 'Key Alumni Initiatives & Support'}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-normal leading-relaxed">
              {isBn
                ? 'এস ও এস স্কুলের প্রাক্তন শিক্ষার্থীরা নিয়মিতভাবে বর্তমান শিক্ষার্থীদের মেন্টরশিপ, উচ্চশিক্ষা নির্দেশিকা এবং সুবিধাবঞ্চিত শিক্ষার্থীদের আর্থিক সহায়তা প্রদান করে আসছেন।'
                : 'Empowering future generations through student mentoring, scholarship funds, medical camps, and annual career seminars.'}
            </p>
          </div>

          <ScrollStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: isBn ? 'ক্যারিয়ার মেন্টরশিপ' : 'Career Mentoring',
                desc: isBn
                  ? '৯ম ও ১০ম শ্রেণির শিক্ষার্থীদের জন্য বুয়েট, মেডিকেল ও শীর্ষ বিশ্ববিদ্যালয়ের ভর্তি প্রস্তুতি ও পেশাগত দিকনির্দেশনা।'
                  : 'Guiding senior students with varsity admission pathways, engineering, medical & IT career prep.',
                icon: BookOpen,
              },
              {
                title: isBn ? 'মেধাবী শিক্ষার্থী বৃত্তি' : 'Merit Scholarships',
                desc: isBn
                  ? 'অর্থনৈতিকভাবে অসচ্ছল অথচ অত্যন্ত মেধাবী ছাত্র-ছাত্রীদের সম্পূর্ণ বেতন ও পাঠ্যপুস্তকের ব্যয়ভার বহন।'
                  : 'Annual scholarships covering tuition and learning materials for deserving students in financial need.',
                icon: Trophy,
              },
              {
                title: isBn ? 'জরুরি চিকিৎসা তহবিল' : 'Emergency Health Fund',
                desc: isBn
                  ? 'যেকোনো শিক্ষার্থী বা কর্মচারীর জরুরি চিকিৎসায় তাৎক্ষণিক অর্থ সহায়তা প্রদান ও রক্তদান নেটওয়ার্ক।'
                  : 'Instant support for student healthcare emergencies and dedicated volunteer blood donor pool.',
                icon: Heart,
              },
              {
                title: isBn ? 'বার্ষিক ক্রীড়া উৎসব' : 'Annual Sports Carnival',
                desc: isBn
                  ? 'প্রাক্তন বনাম বর্তমান শিক্ষার্থীদের প্রীতি ক্রিকেট ও ফুটবল ম্যাচ এবং সাংস্কৃতিক পুনর্মিলনী সন্ধ্যা।'
                  : 'Inter-batch friendly cricket and football matches promoting wellness, camaraderie, and nostalgia.',
                icon: Award,
              },
            ].map((init, i) => (
              <ScrollStaggerItem key={i}>
                <HoverCard className="h-full">
                  <div className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl p-5 transition backdrop-blur-xs flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white/20 text-emerald-200 flex items-center justify-center mb-3.5">
                        <init.icon size={20} />
                      </div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white mb-1.5">
                        {init.title}
                      </h3>
                      <p className="text-xs text-emerald-100/80 leading-relaxed font-normal">
                        {init.desc}
                      </p>
                    </div>
                  </div>
                </HoverCard>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </ScrollReveal>
      </div>

      {/* 6. INTERACTIVE ALUMNI DIRECTORY (With Photos) */}
      <div id="directory" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 scroll-mt-20">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-6 sm:p-8 space-y-6">
          <ScrollReveal duration={0.5} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#e8f7ee] text-[#004d34] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
                  <Users size={13} className="text-[#059669]" />
                  <span>{isBn ? 'সদস্য তালিকা ও অনুসন্ধান' : 'ALUMNI DIRECTORY'}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {isBn ? 'প্রাক্তনীদের অনুসন্ধান ও সংযোগ' : 'Search & Connect with Graduates'}
                </h2>
              </div>
              <div className="text-xs text-slate-500 font-semibold">
                {isBn
                  ? `মোট তালিকাভুক্ত: ${toBanglaNum(filteredAlumni.length)} জন`
                  : `Showing ${filteredAlumni.length} Alumni Profiles`}
              </div>
            </div>

            {/* Filter Toolbar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isBn ? 'নাম, পদবি বা প্রতিষ্ঠান দিয়ে খুঁজুন...' : 'Search by name, role or company...'}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#004d34]"
                />
              </div>

              <div className="relative">
                <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedBatchRange}
                  onChange={(e) => setSelectedBatchRange(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer"
                >
                  <option value="All">{isBn ? 'সকল ব্যাচ (১৯৮৭ - ২০২৬)' : 'All Batches (1987 - 2026)'}</option>
                  <option value="1990-1999">{isBn ? '১৯৯০ - ১৯৯৯ ব্যাচ' : '1990 - 1999 Batches'}</option>
                  <option value="2000-2009">{isBn ? '২০০০ - ২০০৯ ব্যাচ' : '2000 - 2009 Batches'}</option>
                  <option value="2010-2019">{isBn ? '২০১০ - ২০১৯ ব্যাচ' : '2010 - 2019 Batches'}</option>
                  <option value="2020-2026">{isBn ? '২০২০ - ২০২৬ ব্যাচ' : '2020 - 2026 Batches'}</option>
                </select>
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative">
                <Briefcase size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer"
                >
                  <option value="All">{isBn ? 'সকল পেশা ও ক্ষেত্র' : 'All Professional Fields'}</option>
                  <option value="Civil Service & Engineering">{isBn ? 'পাবলিক সার্ভিস ও প্রকৌশল' : 'Civil Service & Engineering'}</option>
                  <option value="Medical & Healthcare">{isBn ? 'চিকিৎসা ও স্বাস্থ্যসেবা' : 'Medical & Healthcare'}</option>
                  <option value="Technology & AI">{isBn ? 'প্রযুক্তি ও এআই' : 'Technology & AI'}</option>
                  <option value="Civil Service & Governance">{isBn ? 'সিভিল প্রশাসন ও শাসন' : 'Civil Service & Governance'}</option>
                  <option value="Academics & Research">{isBn ? 'উচ্চশিক্ষা ও গবেষণা' : 'Academics & Research'}</option>
                  <option value="Finance & Banking">{isBn ? 'অর্থনীতি ও ব্যাংকিং' : 'Finance & Banking'}</option>
                  <option value="Entrepreneurship">{isBn ? 'উদ্যোক্তা' : 'Entrepreneurship'}</option>
                </select>
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </ScrollReveal>

          {/* Directory Grid */}
          {filteredAlumni.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Users size={32} className="mx-auto text-slate-400 mb-2" />
              <p className="text-sm font-bold text-slate-700">
                {isBn ? 'কোনো অ্যালামনাই প্রোফাইল পাওয়া যায়নি' : 'No Alumni Found'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {isBn ? 'অনুগ্রহ করে ভিন্ন কীওয়ার্ড বা ফিল্টার ব্যবহার করে চেষ্টা করুন।' : 'Try adjusting your search criteria or filters.'}
              </p>
            </div>
          ) : (
            <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAlumni.map((alm) => (
                <ScrollStaggerItem key={alm.id}>
                  <HoverCard className="h-full">
                    <div className="bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-emerald-300 transition shadow-2xs hover:shadow-xs flex flex-col justify-between group h-full">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-2xs border border-emerald-100 bg-slate-100 group-hover:scale-105 transition-transform">
                              <img
                                src={alm.image}
                                alt={alm.name}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80';
                                }}
                              />
                            </div>
                            <div>
                              <h4 className="font-extrabold text-sm text-slate-900 leading-tight group-hover:text-[#004d34] transition-colors">
                                {isBn ? alm.nameBn : alm.name}
                              </h4>
                              <span className="text-[11px] font-semibold text-[#059669]">
                                {isBn ? `এসএসসি ব্যাচ ${toBanglaNum(alm.batch)}` : `SSC Batch ${alm.batch}`}
                              </span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 shrink-0">
                            {isBn ? alm.fieldBn.split(' ')[0] : alm.field.split(' ')[0]}
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          <div className="font-bold text-slate-800">
                            {isBn ? alm.roleBn : alm.role}
                          </div>
                          <div className="text-slate-500 font-medium">
                            {isBn ? alm.organizationBn : alm.organization}
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {isBn ? alm.higherEdBn : alm.higherEd}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 text-slate-500 font-medium">
                          <MapPin size={12} className="text-slate-400" />
                          <span>{isBn ? alm.locationBn : alm.location}</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => alert(isBn ? 'যোগাযোগের লিংক শীঘ্রই সক্রিয় করা হবে।' : 'Alumni direct messaging will be available soon.')}
                          className="text-[#004d34] hover:text-[#003826] font-bold inline-flex items-center gap-1 transition cursor-pointer"
                        >
                          <span>{isBn ? 'যোগাযোগ' : 'Connect'}</span>
                          <ArrowRight size={11} />
                        </button>
                      </div>
                    </div>
                  </HoverCard>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          )}
        </div>
      </div>

      {/* 7. UPCOMING GRAND REUNION 2026 */}
      <div id="reunion" className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 scroll-mt-20">
        <ScrollReveal duration={0.65} distance={30} className="bg-white rounded-3xl border border-slate-200/90 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-gradient-to-br from-[#004d34] to-[#00281b] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="inline-block bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                {isBn ? 'আসন্ন মেগা ইভেন্ট' : 'UPCOMING EVENT'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {isBn ? 'গ্র্যান্ড উইন্টার রিইউনিয়ন ২০২৬' : 'Grand Winter Reunion 2026'}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
                {isBn
                  ? '‘ফিরে চল মাটির টানে, সোনালী শৈশবের স্মৃতিচারণে’ — স্কুল প্রাঙ্গণে অনুষ্ঠিত হতে যাচ্ছে সর্বকালের সর্ববৃহৎ পুনর্মিলনী উৎসব।'
                  : 'Returning to the roots, reliving timeless memories. Join hundreds of fellow alumni on our beloved school campus.'}
              </p>
            </div>

            <div className="pt-8 space-y-3 relative z-10">
              <div className="flex items-center gap-3 text-xs text-emerald-100">
                <Calendar size={16} className="text-amber-300 shrink-0" />
                <span className="font-bold">{isBn ? '২৫ ডিসেম্বর, ২০২৬ (শুক্রবার)' : 'December 25, 2026 (Friday)'}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-emerald-100">
                <MapPin size={16} className="text-amber-300 shrink-0" />
                <span>{isBn ? 'মূল স্কুল প্রাঙ্গণ, গল্লামারী, খুলনা' : 'Main School Campus, Gollamari, Khulna'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <h4 className="text-lg font-black text-slate-900 tracking-tight">
              {isBn ? 'পুনর্মিলনী দিবসের বিশেষ আয়োজন' : 'Reunion Day Program Highlights'}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  time: isBn ? 'সকাল ০৮:৩০' : '08:30 AM',
                  title: isBn ? 'স্মৃতি জাগানিয়া প্রাত্যহিক সমাবেশ' : 'Nostalgic Morning Assembly',
                  desc: isBn ? 'স্কুলবেলার সেই প্রিয় জাতীয় সংগীত ও শপথ পাঠ।' : 'Singing the anthem on the morning assembly ground.',
                },
                {
                  time: isBn ? 'সকাল ১০:৩০' : '10:30 AM',
                  title: isBn ? 'শ্রদ্ধেয় শিক্ষকদের সম্মাননা' : 'Veteran Teachers Felicitation',
                  desc: isBn ? 'আমাদের প্রিয় শিক্ষক-শিক্ষিকাদের প্রতি সম্মান ও স্মারক প্রদান।' : 'Honoring the mentors who shaped our lives.',
                },
                {
                  time: isBn ? 'দুপুর ০১:৩০' : '01:30 PM',
                  title: isBn ? 'ঐতিহ্যবাহী মেজবান ও মধ্যাহ্নভোজ' : 'Grand Traditional Lunch',
                  desc: isBn ? 'খুলনার ঐতিহ্যবাহী সুস্বাদু খাবার ও ব্যাচভিত্তিক আড্ডা।' : 'Authentic regional feast with old classmates.',
                },
                {
                  time: isBn ? 'সন্ধ্যা ০৫:০০' : '05:00 PM',
                  title: isBn ? 'সাংস্কৃতিক সন্ধ্যা ও সংগীতানুষ্ঠান' : 'Cultural Gala & Concert',
                  desc: isBn ? 'প্রাক্তন শিক্ষার্থী ও দেশের জনপ্রিয় ব্যান্ড দলের পরিবেশনা।' : 'Live music performances and alumni talent showcase.',
                },
              ].map((ev, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] font-black text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    {ev.time}
                  </span>
                  <div className="font-extrabold text-xs text-slate-800">{ev.title}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{ev.desc}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="bg-[#004d34] hover:bg-[#003826] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-2"
              >
                <span>{isBn ? 'যোগাযোগ ও বিস্তারিত জানুন' : 'Contact & Inquiries'}</span>
              </Link>
              <span className="text-xs text-slate-500 font-medium">
                {isBn ? 'অনুষ্ঠান সংক্রান্ত যেকোনো তথ্যের জন্য যোগাযোগ করুন' : 'Reach out for reunion queries and details'}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Alumni;
