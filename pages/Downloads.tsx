import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Search, FileText, Calendar, HardDrive, 
  Home, LayoutGrid, BookOpen, CalendarDays, MoreHorizontal, 
  Eye, CheckCircle2, ArrowDownToLine, Printer 
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { DownloadItem } from '../types';
import { 
  SCHOOL_NAME, SCHOOL_NAME_EN, SCHOOL_LOGO, SCHOOL_ADDRESS, 
  EIIN_CODE, ESTABLISHED_YEAR, DOWNLOAD_ITEMS 
} from '../constants';

const Downloads: React.FC = () => {
  const { downloads } = useData();
  const { language, t, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fallback to constants if context has fewer items
  const allDownloads = (downloads && downloads.length >= 7) ? downloads : DOWNLOAD_ITEMS;

  const filteredDownloads = allDownloads.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       (item.titleEn && item.titleEn.toLowerCase().includes(searchTerm.toLowerCase())) ||
                       item.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedCategory === 'all') return titleMatch;
    if (selectedCategory === 'others') {
      return titleMatch && !['routine', 'syllabus', 'form', 'calendar'].includes(item.category.toLowerCase());
    }
    return titleMatch && item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  // Get localized category label
  const getCategoryLabel = (category: string) => {
    const catLower = category.toLowerCase();
    if (!isBn) return category;
    if (catLower === 'form') return 'ফরম';
    if (catLower === 'prospectus') return 'প্রসপেক্টাস';
    if (catLower === 'routine') return 'রুটিন';
    if (catLower === 'syllabus') return 'সিলেবাস';
    if (catLower === 'calendar') return 'ক্যালেন্ডার';
    if (catLower === 'general') return 'সাধারণ';
    return category;
  };

  // Handle Printable / Downloadable Document with item-specific authentic contents
  const handleDownloadDoc = (item: DownloadItem) => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const titleText = isBn ? item.title : (item.titleEn || item.title);
    const categoryText = isBn ? getCategoryLabel(item.category) : item.category;

    // Generate specific content per download item
    let specificHtmlBody = '';

    if (item.id === '1') {
      // 1. Admission Form & Guidelines 2025
      specificHtmlBody = isBn ? `
        <div style="border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; margin-bottom: 20px; background: #fafafa;">
          <h3 style="color: #00704A; margin-bottom: 10px; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">১. শিক্ষার্থীর ব্যক্তিগত তথ্যাবলী (Student Information)</h3>
          <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
            <tr><td style="padding: 6px; width: 30%;">শিক্ষার্থীর পুরো নাম (বাংলায়):</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Student Name (in English Block):</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">জন্ম তারিখ (DOB) ও জন্ম নিবন্ধন নং:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">ভর্তিচ্ছু শ্রেণি ও বিভাগ:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">লিঙ্গ ও রক্তের গ্রুপ:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
          </table>
        </div>

        <div style="border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; margin-bottom: 20px; background: #fafafa;">
          <h3 style="color: #00704A; margin-bottom: 10px; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">২. পিতা, মাতা ও অভিভাবকের তথ্য (Guardian Information)</h3>
          <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
            <tr><td style="padding: 6px; width: 30%;">পিতার নাম ও পেশা:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">মাতার নাম ও পেশা:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">জরুরি যোগাযোগের মোবাইল নং:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">বর্তমান ও স্থায়ী ঠিকানা:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
          </table>
        </div>

        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; font-size: 11.5px; line-height: 1.6;">
          <strong>প্রয়োজনীয় কাগজপত্র সংযুক্তি:</strong> ১. ডিজিটাল জন্ম নিবন্ধনের সত্যায়িত ফটোকপি, ২. সদ্য তোলা ৩ কপি পাসপোর্ট সাইজ রঙিন ছবি, ৩. পূর্ববর্তী স্কুলের প্রশংসাপত্র/মার্কশিট, ৪. পিতা-মাতার জাতীয় পরিচয়পত্রের কপি।
        </div>
      ` : `
        <div style="border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; margin-bottom: 20px; background: #fafafa;">
          <h3 style="color: #00704A; margin-bottom: 10px; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">1. Student Personal Information</h3>
          <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
            <tr><td style="padding: 6px; width: 30%;">Applicant Full Name (Block):</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Date of Birth & Birth Reg. No:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Desired Class & Section/Group:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Gender & Blood Group:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
          </table>
        </div>

        <div style="border: 1px solid #cbd5e1; padding: 15px; border-radius: 8px; margin-bottom: 20px; background: #fafafa;">
          <h3 style="color: #00704A; margin-bottom: 10px; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px;">2. Guardian Information</h3>
          <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
            <tr><td style="padding: 6px; width: 30%;">Father's Name & Occupation:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Mother's Name & Occupation:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Emergency Contact Mobile:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
            <tr><td style="padding: 6px;">Present & Permanent Address:</td><td style="border-bottom: 1px dotted #94a3b8;">.......................................................................</td></tr>
          </table>
        </div>

        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px; font-size: 11.5px; line-height: 1.6;">
          <strong>Required Enclosures:</strong> 1. Photocopy of Digital Birth Certificate, 2. Three passport-size color photographs, 3. Previous School Academic Transcript / Transfer Certificate, 4. Parents' NID copies.
        </div>
      `;
    } else if (item.id === '2') {
      // 2. Academic Prospectus & Curriculum
      specificHtmlBody = isBn ? `
        <div style="font-size: 12.5px; line-height: 1.8; color: #1e293b;">
          <p style="margin-bottom: 15px;">
            <strong>এস ও এস হারম্যান মেইনার স্কুল খুলনা</strong> ১৯৮৭ সালে প্রতিষ্ঠিত একটি অনন্য শিক্ষালয়। জ্ঞান, মানবিক মূল্যবোধ ও শৃঙ্খলাভিত্তিক শিক্ষাদানের মাধ্যমে শিক্ষার্থীদের ভবিষ্যৎ প্রজন্মের যোগ্য নাগরিক হিসেবে গড়ে তোলা আমাদের মূল লক্ষ্য।
          </p>
          
          <h3 style="color: #00704A; font-size: 14px; margin: 15px 0 8px;">শিক্ষাক্রম ও বিভাগসমূহ:</h3>
          <ul style="padding-left: 20px; margin-bottom: 15px;">
            <li><strong>প্রাথমিক বিভাগ:</strong> প্রেপ-১ হতে ৫ম শ্রেণি (সহজীকরণ গণিত, ভাষা শিক্ষা ও সৃজনশীল কার্যক্রম)।</li>
            <li><strong>জুনিয়র মাধ্যমিক:</strong> ৬ষ্ঠ হতে ৮ম শ্রেণি (বিজ্ঞান মনস্কতা, আইসিটি ও প্রযুক্তি শিক্ষা)।</li>
            <li><strong>মাধ্যমিক (এসএসসি):</strong> ৯ম ও ১০ম শ্রেণি — <strong>বিজ্ঞান বিভাগ, ব্যবসায় শিক্ষা বিভাগ ও মানবিক বিভাগ</strong>।</li>
          </ul>

          <h3 style="color: #00704A; font-size: 14px; margin: 15px 0 8px;">ক্যাম্পাস সুযোগ-সুবিধা:</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px;">
            <tr style="background: #eaf7f0;"><th style="border: 1px solid #cbd5e1; padding: 8px;">সুবিধা</th><th style="border: 1px solid #cbd5e1; padding: 8px;">বিবরণ</th></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">বিজ্ঞানাগার</td><td style="border: 1px solid #cbd5e1; padding: 8px;">পদার্থ, রসায়ন ও জীববিজ্ঞানের সুসজ্জিত পৃথক ল্যাবরেটরি।</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">কম্পিউটার ল্যাব</td><td style="border: 1px solid #cbd5e1; padding: 8px;">উচ্চগতির ইন্টারনেট ও আধুনিক পিসি সম্বলিত আইসিটি ল্যাব।</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">গ্রন্থাগার</td><td style="border: 1px solid #cbd5e1; padding: 8px;">১০,০০০+ পাঠ্যপুস্তক, রেফারেন্স বুক ও সাহিত্যগ্রন্থ।</td></tr>
          </table>
        </div>
      ` : `
        <div style="font-size: 12.5px; line-height: 1.8; color: #1e293b;">
          <p style="margin-bottom: 15px;">
            Established in 1987, <strong>SOS Hermann Gmeiner School Khulna</strong> is committed to fostering academic excellence, moral integrity, and modern co-curricular achievements.
          </p>
          
          <h3 style="color: #00704A; font-size: 14px; margin: 15px 0 8px;">Academic Streams & Curriculum:</h3>
          <ul style="padding-left: 20px; margin-bottom: 15px;">
            <li><strong>Primary Level:</strong> Prep-1 to Class 5 (Child-centric foundational learning).</li>
            <li><strong>Junior Secondary:</strong> Class 6 to Class 8 (Science, Mathematics, and ICT focus).</li>
            <li><strong>Secondary (SSC):</strong> Class 9 & 10 — <strong>Science, Business Studies, and Humanities Streams</strong>.</li>
          </ul>

          <h3 style="color: #00704A; font-size: 14px; margin: 15px 0 8px;">Campus Facilities:</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px;">
            <tr style="background: #eaf7f0;"><th style="border: 1px solid #cbd5e1; padding: 8px;">Facility</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Description</th></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">Science Laboratories</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Fully equipped Physics, Chemistry, and Biology laboratories.</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">ICT Computer Lab</td><td style="border: 1px solid #cbd5e1; padding: 8px;">High-speed internet enabled modern workstation environment.</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 8px;">Central Library</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Over 10,000 reference books, journals, and literature.</td></tr>
          </table>
        </div>
      `;
    } else if (item.id === '3') {
      // 3. Class Routine 2025 (Prep to Class X)
      specificHtmlBody = isBn ? `
        <div style="font-size: 12px;">
          <p style="margin-bottom: 12px; font-weight: 700; color: #00704A;">
            সাপ্তাহিক ক্লাস রুটিন ও সময়সূচি (রবিবার হতে বৃহস্পতিবার):
          </p>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">পিরিয়ড</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">সময়কাল</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">প্রাথমিক শাখা (১ম-৫ম)</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">মাধ্যমিক শাখা (৬ষ্ঠ-১০ম)</th>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">সমাবেশ</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">০৮:৩০ - ০৮:৪৫</td>
              <td colspan="2" style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; background: #f8fafc; font-weight: bold;">প্রাত্যহিক সমাবেশ, শপথ ও জাতীয় সঙ্গীত</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">১ম পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">০৮:৪৫ - ০৯:৩০</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">বাংলা সাহিত্য</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">English 1st Paper</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">২য় পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">০৯:৩০ - ১০:১৫</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">প্রাথমিক গণিত</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">সাধারণ গণিত / উচ্চতর গণিত</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">৩য় পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">১০:১৫ - ১১:০০</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">English For Today</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">পদার্থবিজ্ঞান / হিসাববিজ্ঞান / পৌরনীতি</td>
            </tr>
            <tr style="background: #fef3c7;">
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold;">বিরতি</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">১১:০০ - ১১:৩০</td>
              <td colspan="2" style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #92400e;">টিফিন ও যোহরের নামাজ বিরতি</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">৪র্থ পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">১১:৩০ - ১২:১৫</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">প্রাথমিক বিজ্ঞান</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">রসায়ন / ব্যবসায় উদ্যোগ / ইতিহাস</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">৫ম পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">১২:১৫ - ০১:০০</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">ধর্ম ও নৈতিক শিক্ষা</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">জীববিজ্ঞান / ফিন্যান্স / অর্থনীতি</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">৬ষ্ঠ পিরিয়ড</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">০১:০০ - ০১:৪৫</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">চারু ও কারুকলা / আইসিটি</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">তথ্য ও যোগাযোগ প্রযুক্তি (ল্যাব)</td>
            </tr>
          </table>
        </div>
      ` : `
        <div style="font-size: 12px;">
          <p style="margin-bottom: 12px; font-weight: 700; color: #00704A;">
            Weekly Class Schedule & Timing (Sunday to Thursday):
          </p>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">Period</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">Timing</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">Primary (Class 1-5)</th>
              <th style="border: 1px solid #cbd5e1; padding: 8px;">Secondary (Class 6-10)</th>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">Assembly</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">08:30 - 08:45 AM</td>
              <td colspan="2" style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; background: #f8fafc; font-weight: bold;">Daily Assembly, Oath & National Anthem</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">1st Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">08:45 - 09:30 AM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Bangla Literature</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">English 1st Paper</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">2nd Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">09:30 - 10:15 AM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Primary Mathematics</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">General Math / Higher Math</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">3rd Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">10:15 - 11:00 AM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">English For Today</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Physics / Accounting / Civics</td>
            </tr>
            <tr style="background: #fef3c7;">
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold;">Break</td>
              <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">11:00 - 11:30 AM</td>
              <td colspan="2" style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #92400e;">Tiffin & Prayer Break</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">4th Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">11:30 - 12:15 PM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">General Science</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Chemistry / Business Org / History</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">5th Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">12:15 - 01:00 PM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Religion & Moral Education</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Biology / Finance / Economics</td>
            </tr>
            <tr>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center; font-weight: bold;">6th Period</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">01:00 - 01:45 PM</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">Arts & Crafts / Music</td>
              <td style="border: 1px solid #cbd5e1; padding: 7px;">ICT Computer Practical Lab</td>
            </tr>
          </table>
        </div>
      `;
    } else if (item.id === '4') {
      // 4. Syllabus & Book List
      specificHtmlBody = isBn ? `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            অনুমোদিত পাঠ্যপুস্তক ও রেফারেন্স বুক তালিকা (২০২৫):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 16px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 7px;">ক্রমিক</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">বিষয়</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">বইয়ের নাম</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">প্রকাশনী / বোর্ড</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">০১</td><td style="border: 1px solid #cbd5e1; padding: 6px;">বাংলা ১ম ও ২য় পত্র</td><td style="border: 1px solid #cbd5e1; padding: 6px;">সাহিত্য কণিকা ও ব্যাকরণ নির্মিতি</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">০২</td><td style="border: 1px solid #cbd5e1; padding: 6px;">English 1st & 2nd</td><td style="border: 1px solid #cbd5e1; padding: 6px;">English For Today & Grammar in Focus</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB / Oxford Press</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">০৩</td><td style="border: 1px solid #cbd5e1; padding: 6px;">গণিত ও উচ্চতর গণিত</td><td style="border: 1px solid #cbd5e1; padding: 6px;">মাধ্যমিক গণিত পাঠ্যবই ও সমাধান</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">০৪</td><td style="border: 1px solid #cbd5e1; padding: 6px;">পদার্থ, রসায়ন, জীববিজ্ঞান</td><td style="border: 1px solid #cbd5e1; padding: 6px;">বিজ্ঞান মূল বই ও ব্যবহারিক নির্দেশিকা</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">০৫</td><td style="border: 1px solid #cbd5e1; padding: 6px;">আইসিটি (ICT)</td><td style="border: 1px solid #cbd5e1; padding: 6px;">তথ্য ও যোগাযোগ প্রযুক্তি বাস্তব প্রয়োগ</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
          </table>

          <div style="background: #faf5ff; border: 1px solid #e9d5ff; padding: 10px 14px; border-radius: 8px; font-size: 11px;">
            <strong>মূল্যায়ন পদ্ধতি:</strong> অর্ধ-বার্ষিক পরীক্ষা (৫০% পাঠ্যক্রম) + প্রাক-নির্বাচনী/মডেল টেস্ট + চূড়ান্ত মূল্যায়ন পরীক্ষা (১০০% সমন্বিত পাঠ্যক্রম)।
          </div>
        </div>
      ` : `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            Prescribed Textbooks & Approved Curriculum List (2025):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 16px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 7px;">SL</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">Subject</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">Prescribed Book Title</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px;">Publisher / Board</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">01</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Bangla 1st & 2nd</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Sahitya Konika & Byakoron Nirmiti</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">02</td><td style="border: 1px solid #cbd5e1; padding: 6px;">English 1st & 2nd</td><td style="border: 1px solid #cbd5e1; padding: 6px;">English For Today & Grammar in Focus</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB / Oxford Press</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">03</td><td style="border: 1px solid #cbd5e1; padding: 6px;">General & Higher Math</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Secondary Mathematics Textbook</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">04</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Physics, Chemistry, Biology</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Science Core Text & Practical Manual</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">05</td><td style="border: 1px solid #cbd5e1; padding: 6px;">ICT</td><td style="border: 1px solid #cbd5e1; padding: 6px;">Information & Communication Technology</td><td style="border: 1px solid #cbd5e1; padding: 6px;">NCTB</td></tr>
          </table>

          <div style="background: #faf5ff; border: 1px solid #e9d5ff; padding: 10px 14px; border-radius: 8px; font-size: 11px;">
            <strong>Evaluation Framework:</strong> Half-Yearly (50% syllabus) + Pre-Test/Model Test + Annual Final Exam (100% comprehensive syllabus).
          </div>
        </div>
      `;
    } else if (item.id === '5') {
      // 5. Holiday List & Academic Calendar 2025
      specificHtmlBody = isBn ? `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            বাৎসরিক প্রধান প্রধান ছুটির তালিকা (২০২৫ শিক্ষাবর্ষ):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 6px;">ছুটির বিবরণ</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">তারিখ ও দিন</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">দিন সংখ্যা</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">আন্তর্জাতিক মাতৃভাষা ও শহীদ দিবস</td><td style="border: 1px solid #cbd5e1; padding: 5px;">২১ ফেব্রুয়ারি (শুক্রবার)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">০১ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">জাতির পিতা বঙ্গবন্ধুর জন্মবার্ষিকী ও জাতীয় শিশু দিবস</td><td style="border: 1px solid #cbd5e1; padding: 5px;">১৭ মার্চ (সোমবার)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">০১ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">পবিত্র রমজান, শবে কদর ও ঈদুল ফিতর</td><td style="border: 1px solid #cbd5e1; padding: 5px;">২০ মার্চ - ০৫ এপ্রিল</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">১৭ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">বাংলা নববর্ষ (পহেলা বৈশাখ)</td><td style="border: 1px solid #cbd5e1; padding: 5px;">১৪ এপ্রিল (সোমবার)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">০১ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">মে দিবস ও বুদ্ধ পূর্ণিমা</td><td style="border: 1px solid #cbd5e1; padding: 5px;">০১ ও ১২ মে</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">০২ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">ঈদুল আজহা ও গ্রীষ্মকালীন অবকাশ</td><td style="border: 1px solid #cbd5e1; padding: 5px;">০৫ জুন - ১৯ জুন</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">১৫ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">শুভ দুর্গাপূজা ও শ্রীশ্রী লক্ষ্মীপূজা</td><td style="border: 1px solid #cbd5e1; padding: 5px;">২১ সেপ্টেম্বর - ০২ অক্টোবর</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">১২ দিন</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">শীতকালীন অবকাশ ও যিশু খ্রিস্টের জন্মদিন</td><td style="border: 1px solid #cbd5e1; padding: 5px;">২০ ডিসেম্বর - ৩১ ডিসেম্বর</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">১২ দিন</td></tr>
          </table>
          <div style="font-weight: bold; color: #00704A; text-align: right; font-size: 11.5px;">
            মোট সম্ভাব্য কার্যদিবস: ২২০ দিন | মোট ছুটি: ৮৫ দিন
          </div>
        </div>
      ` : `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            Annual Official Holiday Schedule (Academic Session 2025):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 12px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Holiday Description</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px;">Dates</th>
              <th style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">Duration</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">International Mother Language & Martyrs' Day</td><td style="border: 1px solid #cbd5e1; padding: 5px;">21 February (Friday)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">01 Day</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Birth Anniversary of Bangabandhu & Children's Day</td><td style="border: 1px solid #cbd5e1; padding: 5px;">17 March (Monday)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">01 Day</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Holy Ramadan, Shab-e-Qadr & Eid-ul-Fitr</td><td style="border: 1px solid #cbd5e1; padding: 5px;">20 March - 05 April</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">17 Days</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Bengali New Year (Pahela Baishakh)</td><td style="border: 1px solid #cbd5e1; padding: 5px;">14 April (Monday)</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">01 Day</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">May Day & Buddha Purnima</td><td style="border: 1px solid #cbd5e1; padding: 5px;">01 & 12 May</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">02 Days</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Eid-ul-Adha & Summer Vacation</td><td style="border: 1px solid #cbd5e1; padding: 5px;">05 June - 19 June</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">15 Days</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Durga Puja & Lakshmi Puja</td><td style="border: 1px solid #cbd5e1; padding: 5px;">21 September - 02 October</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">12 Days</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 5px;">Winter Vacation & Christmas Day</td><td style="border: 1px solid #cbd5e1; padding: 5px;">20 December - 31 December</td><td style="border: 1px solid #cbd5e1; padding: 5px; text-align: center;">12 Days</td></tr>
          </table>
          <div style="font-weight: bold; color: #00704A; text-align: right; font-size: 11.5px;">
            Total Estimated Working Days: 220 Days | Total Holidays: 85 Days
          </div>
        </div>
      `;
    } else if (item.id === '6') {
      // 6. Annual Fee & Exam Fee Payment Schedule
      specificHtmlBody = isBn ? `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            শ্রেণিভিত্তিক মাসিক বেতন ও ফি কাঠামো (২০২৫):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 15px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 7px;">শ্রেণি / বিভাগ</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">মাসিক বেতন</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">সেশন ও ল্যাব ফি</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">পরীক্ষার ফি</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">প্রাথমিক শাখা (প্রেপ-১ হতে ৫ম)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ১,২০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ১,৫০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ৪০০</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">জুনিয়র মাধ্যমিক (৬ষ্ঠ হতে ৮ম)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ১,৫০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ২,০০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ৫০০</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">মাধ্যমিক শাখা (৯ম ও ১০ম)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ১,৮০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ২,৫০০</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ ৬০০</td></tr>
          </table>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; font-size: 11.5px; line-height: 1.6;">
            <strong>ফি পরিশোধ সংক্রান্ত নিয়মাবলী:</strong><br/>
            ১. প্রতি মাসের ১ থেকে ১০ তারিখের মধ্যে বিদ্যালয় হিসাব শাখা অথবা বিকাশ/নগদ মার্চেন্ট পেমেন্টে বেতন পরিশোধ করতে হবে।<br/>
            ২. ১০ তারিখের পর বকেয়া পরিশোধে বিলম্ব ফি প্রযোজ্য হবে।<br/>
            ৩. পরীক্ষার ফি পরীক্ষার রুটিন প্রকাশের ৭ দিনের মধ্যে পরিশোধযোগ্য।
          </div>
        </div>
      ` : `
        <div style="font-size: 12px;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 10px;">
            Class-wise Tuition & Academic Fee Schedule (2025):
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 15px;">
            <tr style="background: #eaf7f0; color: #00704A;">
              <th style="border: 1px solid #cbd5e1; padding: 7px;">Class / Stream</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">Monthly Tuition</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">Session & Lab Fee</th>
              <th style="border: 1px solid #cbd5e1; padding: 7px; text-align: center;">Exam Fee</th>
            </tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">Primary Level (Prep-1 to Class 5)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 1,200</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 1,500</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 400</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">Junior Secondary (Class 6 to 8)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 1,500</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 2,000</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 500</td></tr>
            <tr><td style="border: 1px solid #cbd5e1; padding: 6px;">Secondary SSC (Class 9 & 10)</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 1,800</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 2,500</td><td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">৳ 600</td></tr>
          </table>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; font-size: 11.5px; line-height: 1.6;">
            <strong>Fee Payment Guidelines:</strong><br/>
            1. Tuition fees must be cleared by the 10th of every month via Accounts counter or bKash/Nagad gateway.<br/>
            2. Late fee surcharge applies for payments made after the 10th.<br/>
            3. Examination fees must be submitted within 7 days of exam schedule publication.
          </div>
        </div>
      `;
    } else {
      // 7. New Student Admission Info & Uniform Guide
      specificHtmlBody = isBn ? `
        <div style="font-size: 12px; line-height: 1.8;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 8px;">
            ১. স্কুল ইউনিফর্ম ও পোশাক নির্দেশিকা:
          </h3>
          <ul style="padding-left: 20px; margin-bottom: 14px;">
            <li><strong>ছাত্রদের ইউনিফর্ম:</strong> সাদা হাফ/ফুলহাতা শার্ট, গাঢ় নেভি ব্লু ফুল প্যান্ট, কালো জুতো, সাদা মোজা এবং বুকের বামপাশে স্কুলের অফিশিয়াল কাপড়ের মনোগ্রাম/ব্যাজ।</li>
            <li><strong>ছাত্রীদের ইউনিফর্ম:</strong> নেভি ব্লু ফ্রক/কুর্তি, সাদা সালোয়ার, সাদা ওড়না/স্কার্ফ, কালো জুতো ও সাদা মোজা।</li>
            <li><strong>শীতকালীন পোশাক:</strong> শুধুমাত্র গাঢ় নেভি ব্লু ভি-গলা সোয়েটার বা কার্ডিগান পরিধানযোগ্য।</li>
          </ul>

          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 8px;">
            ২. সময়ানুবর্তিতা ও ক্যাম্পাসের আচরণবিধি:
          </h3>
          <ul style="padding-left: 20px; margin-bottom: 14px;">
            <li>প্রতিদিন সকাল ০৮:১৫ মিনিটের মধ্যে ক্যাম্পাসে প্রবেশ বাধ্যতামূলক। সকাল ০৮:২৫ মিনিটে মূল ফটক বন্ধ করা হবে।</li>
            <li>প্রত্যেক শিক্ষার্থীকে সার্বক্ষণিক গলায় ডিজিটাল স্টুডেন্ট আইডি কার্ড ঝুলিয়ে রাখতে হবে।</li>
            <li>মোবাইল ফোন বা কোনো অননুমোদিত ইলেকট্রনিক ডিভাইস ক্যাম্পাসে আনা সম্পূর্ণ নিষিদ্ধ।</li>
          </ul>
        </div>
      ` : `
        <div style="font-size: 12px; line-height: 1.8;">
          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 8px;">
            1. Official Uniform & Dress Code Policy:
          </h3>
          <ul style="padding-left: 20px; margin-bottom: 14px;">
            <li><strong>Boys' Uniform:</strong> White half/full sleeve shirt, dark navy blue trousers, black shoes, white socks, and stitched school chest monogram badge.</li>
            <li><strong>Girls' Uniform:</strong> Navy blue frock/kurti, white salwar, white dupatta/scarf, black shoes, and white socks.</li>
            <li><strong>Winter Wear:</strong> Navy blue V-neck sweater or cardigan exclusively.</li>
          </ul>

          <h3 style="color: #00704A; font-size: 13.5px; margin-bottom: 8px;">
            2. Campus Punctuality & Code of Conduct:
          </h3>
          <ul style="padding-left: 20px; margin-bottom: 14px;">
            <li>Students must arrive by 08:15 AM. Main school gates will strictly close at 08:25 AM.</li>
            <li>Digital Student ID Card must be visibly worn around the neck at all times on campus.</li>
            <li>Mobile phones and unapproved electronic gadgets are strictly prohibited on campus.</li>
          </ul>
        </div>
      `;
    }

    const printContent = `
      <!DOCTYPE html>
      <html lang="${isBn ? 'bn' : 'en'}">
      <head>
        <meta charset="UTF-8">
        <title>Download - ${titleText}</title>
        <style>
          @page { size: A4 portrait; margin: 15mm 20mm; }
          * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; }
          body { color: #0f172a; background: #fff; padding: 10px; }
          .border-wrapper { border: 2.5px solid #00704A; border-radius: 12px; padding: 26px 30px; position: relative; min-height: 95vh; display: flex; flex-direction: column; justify-content: space-between; }
          .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #00704A; padding-bottom: 14px; margin-bottom: 20px; }
          .header-left { display: flex; align-items: center; gap: 14px; }
          .logo { width: 68px; height: 68px; object-fit: contain; }
          .school-title-main { font-size: 21px; font-weight: 900; color: #00704A; }
          .school-info { font-size: 11px; color: #475569; margin-top: 2px; }
          .eiin-badge { display: inline-block; background: #eaf7f0; color: #00704A; border: 1px solid #bbf7d0; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 800; }
          .meta-row { display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 16px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 8px; }
          .doc-badge { background: #eaf7f0; color: #00704A; padding: 4px 12px; border-radius: 6px; font-weight: 800; font-size: 11px; text-transform: uppercase; }
          .doc-title { font-size: 20px; font-weight: 900; color: #0f172a; margin-bottom: 16px; text-align: center; line-height: 1.4; }
          .doc-body { margin-bottom: 30px; }
          .signatures { display: flex; justify-content: space-between; margin-top: auto; padding-top: 40px; }
          .sig-box { text-align: center; width: 170px; }
          .sig-line { border-top: 1.2px solid #475569; margin-bottom: 4px; width: 100%; }
          .sig-title { font-size: 11px; font-weight: 800; color: #1e293b; }
        </style>
      </head>
      <body>
        <div class="border-wrapper">
          <div>
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

            <div class="meta-row">
              <div>${isBn ? 'নথি কোড: এসওএস/ডাউনলোড/' : 'Document Code: SOS/DOWNLOAD/'}${item.id}</div>
              <div>${isBn ? 'প্রকাশের তারিখ:' : 'Published Date:'} ${item.date}</div>
            </div>

            <div style="text-align: center; margin-bottom: 12px;">
              <span class="doc-badge">${categoryText}</span>
            </div>

            <h1 class="doc-title">${titleText}</h1>

            <div class="doc-body">
              ${specificHtmlBody}
            </div>
          </div>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'যাচাইকারী কর্মকর্তা' : 'Verifying Officer'}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'অধ্যক্ষ / প্রধান শিক্ষক' : 'Principal / Headmaster'}</div>
              <div style="font-size: 9.5px; color: #64748b;">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
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
              {isBn ? 'ডাউনলোড সেন্টার' : 'Download Center'}
            </span>
          </div>

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Download size={13} className="text-emerald-700" />
              <span>{isBn ? 'ডাউনলোড সেন্টার' : 'DOWNLOAD CENTER'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-2">
              {isBn ? 'ডাউনলোড সেন্টার' : 'Download Center'}
            </h1>
            <div className="w-12 h-1 bg-emerald-600 rounded-full mb-4" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {isBn 
                ? 'ক্লাস রুটিন, পাঠ্যসূচি, ছুটির ক্যালেন্ডার এবং প্রয়োজনীয় প্রাতিষ্ঠানিক ফরম ডাউনলোড করুন।' 
                : 'Download class routines, syllabi, holiday calendars, and school forms.'}
            </p>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* 2. CATEGORY TABS & SEARCH BAR ROW (MATCHING REFERENCE IMAGE 100%) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: isBn ? 'সকল ফাইল' : 'All Files', icon: LayoutGrid },
              { id: 'routine', label: isBn ? 'রুটিন' : 'Routine', icon: Calendar },
              { id: 'syllabus', label: isBn ? 'পাঠ্যসূচি' : 'Syllabus', icon: BookOpen },
              { id: 'form', label: isBn ? 'ফরম' : 'Form', icon: FileText },
              { id: 'calendar', label: isBn ? 'ক্যালেন্ডার' : 'Calendar', icon: CalendarDays },
              { id: 'others', label: isBn ? 'অন্যান্য' : 'Others', icon: MoreHorizontal },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#00704A] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-slate-500'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={isBn ? 'ফাইলের নাম বা বিষয় লিখুন...' : 'Search files by title...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/90 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500 rounded-xl sm:rounded-2xl text-xs sm:text-sm outline-none transition font-medium text-slate-800 shadow-2xs"
            />
          </div>

        </div>

        {/* 3. DOWNLOADS TABLE CARD (MATCHING REFERENCE IMAGE 100%) */}
        <div className="bg-white rounded-[28px] sm:rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-5 sm:px-6">{isBn ? 'ফাইলের শিরোনাম' : 'FILE TITLE'}</th>
                  <th className="py-4 px-4 text-center">{isBn ? 'বিভাগ' : 'CATEGORY'}</th>
                  <th className="py-4 px-4 text-center">{isBn ? 'তারিখ' : 'DATE'}</th>
                  <th className="py-4 px-4 text-center">{isBn ? 'সাইজ' : 'SIZE'}</th>
                  <th className="py-4 px-5 sm:px-6 text-right">{isBn ? 'অ্যাকশন' : 'ACTION'}</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredDownloads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-slate-400 font-semibold space-y-2">
                      <HardDrive size={36} className="mx-auto text-slate-300 mb-2" />
                      <div>{isBn ? 'কোনো ফাইল খুঁজে পাওয়া যায়নি' : 'No downloadable files found'}</div>
                    </td>
                  </tr>
                ) : (
                  filteredDownloads.map((item, idx) => {
                    const categoryLower = (item.category || 'General').toLowerCase();
                    
                    let badgeClass = 'bg-slate-100 text-slate-700 border-slate-200';
                    if (categoryLower === 'form') badgeClass = 'bg-[#eaf7f0] text-[#00704A] border-[#c6f0dc]';
                    if (categoryLower === 'prospectus') badgeClass = 'bg-[#e0f2fe] text-[#0369a1] border-[#bae6fd]';
                    if (categoryLower === 'routine' || categoryLower === 'calendar') badgeClass = 'bg-[#fef3c7] text-[#92400e] border-[#fde68a]';
                    if (categoryLower === 'syllabus') badgeClass = 'bg-[#f3e8ff] text-[#7e22ce] border-[#e9d5ff]';

                    const primaryTitle = isBn ? item.title : (item.titleEn || item.title);
                    const secondaryTitle = isBn ? (item.titleEn || item.title) : item.title;

                    return (
                      <motion.tr 
                        key={item.id} 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.28, delay: idx * 0.03, ease: [0.22, 1, 0.36, 1] }}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        
                        {/* File Title */}
                        <td className="py-4 px-5 sm:px-6">
                          <div className="flex items-center gap-3.5 sm:gap-4">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#eaf7f0] text-[#00704A] border border-[#c6f0dc] flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:bg-[#00704A] group-hover:text-white transition-colors">
                              <FileText size={18} />
                            </div>

                            <div>
                              <div className="font-extrabold text-slate-900 text-xs sm:text-sm group-hover:text-[#00704A] transition leading-snug">
                                {primaryTitle}
                              </div>
                              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                                {secondaryTitle}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Category Badge */}
                        <td className="py-4 px-4 text-center whitespace-nowrap">
                          <span className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold border ${badgeClass}`}>
                            {getCategoryLabel(item.category)}
                          </span>
                        </td>

                        {/* Date */}
                        <td className="py-4 px-4 text-center whitespace-nowrap text-slate-500 font-medium text-[11px] sm:text-xs">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={12} className="text-slate-400" />
                            <span>{isBn ? toBanglaNum(item.date) : item.date}</span>
                          </span>
                        </td>

                        {/* Size */}
                        <td className="py-4 px-4 text-center whitespace-nowrap font-bold text-slate-600 text-xs font-mono">
                          {isBn ? toBanglaNum(item.size) : item.size}
                        </td>

                        {/* Action Button */}
                        <td className="py-4 px-5 sm:px-6 text-right whitespace-nowrap">
                          <button
                            onClick={() => handleDownloadDoc(item)}
                            className="inline-flex items-center gap-1.5 bg-[#edf9f3] text-[#00704A] hover:bg-[#00704A] hover:text-white border border-[#bbf7d0] px-3.5 sm:px-4 py-1.5 rounded-xl font-bold text-xs transition shadow-2xs cursor-pointer active:scale-95"
                          >
                            <Download size={13} />
                            <span>{isBn ? 'ডাউনলোড' : 'Download'}</span>
                          </button>
                        </td>

                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Downloads;
