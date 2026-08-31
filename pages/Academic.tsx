import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shirt, ShieldCheck, CheckCircle2, 
  Download, Calendar, Home, ChevronDown, Info
} from 'lucide-react';
import { 
  SCHOOL_NAME, SCHOOL_NAME_EN, SCHOOL_LOGO, 
  EIIN_CODE, ESTABLISHED_YEAR 
} from '../constants';

const Academic: React.FC = () => {
  const { language } = useLanguage();
  const [selectedClass, setSelectedClass] = useState('6');

  // Dynamic Routine Database by Class with full Bengali and English datasets
  const routinesByClass: Record<string, any[]> = {
    '6': [
      { periodBn: '১ম পিরিয়ড', periodEn: '1st Period', timeBn: '০৯:০০ - ০৯:৪০', timeEn: '09:00 - 09:40', sunBn: 'বাংলা', sunEn: 'Bangla', monBn: 'ইংরেজি', monEn: 'English', tueBn: 'গণিত', tueEn: 'Mathematics', wedBn: 'বিজ্ঞান', wedEn: 'Science', thuBn: 'ইংরেজি', thuEn: 'English', friBn: 'বাংলা', friEn: 'Bangla', isBreak: false },
      { periodBn: '২য় পিরিয়ড', periodEn: '2nd Period', timeBn: '০৯:৪০ - ১০:২০', timeEn: '09:40 - 10:20', sunBn: 'ইংরেজি', sunEn: 'English', monBn: 'গণিত', monEn: 'Mathematics', tueBn: 'বাংলা', tueEn: 'Bangla', wedBn: 'উচ্চতর গণিত', wedEn: 'Higher Math', thuBn: 'পদার্থবিজ্ঞান', thuEn: 'Physics', friBn: 'ইংরেজি', friEn: 'English', isBreak: false },
      { periodBn: '৩য় পিরিয়ড', periodEn: '3rd Period', timeBn: '১০:২০ - ১১:০০', timeEn: '10:20 - 11:00', sunBn: 'গণিত', sunEn: 'Mathematics', monBn: 'বিজ্ঞান', monEn: 'Science', tueBn: 'ইংরেজি', tueEn: 'English', wedBn: 'ইংরেজি', wedEn: 'English', thuBn: 'বাংলা', thuEn: 'Bangla', friBn: 'গণিত', friEn: 'Mathematics', isBreak: false },
      { periodBn: '৪র্থ পিরিয়ড', periodEn: '4th Period', timeBn: '১১:০০ - ১১:৪০', timeEn: '11:00 - 11:40', sunBn: 'বিরতি ১১:০০ - ১১:২০', sunEn: 'Tiffin Break', monBn: 'বিরতি ১১:০০ - ১১:২০', monEn: 'Tiffin Break', tueBn: 'বিরতি ১১:০০ - ১১:২০', tueEn: 'Tiffin Break', wedBn: 'বিরতি ১১:০০ - ১১:২০', wedEn: 'Tiffin Break', thuBn: 'বিরতি ১১:০০ - ১১:২০', thuEn: 'Tiffin Break', friBn: 'বিরতি ১১:০০ - ১১:২০', friEn: 'Tiffin Break', isBreak: true },
      { periodBn: '৫ম পিরিয়ড', periodEn: '5th Period', timeBn: '১১:৪০ - ১২:২০', timeEn: '11:40 - 12:20', sunBn: 'বিজ্ঞান', sunEn: 'Science', monBn: 'বাংলা', monEn: 'Bangla', tueBn: 'সমাজ', tueEn: 'BGS', wedBn: 'জীববিজ্ঞান', wedEn: 'Biology', thuBn: 'উচ্চতর গণিত', thuEn: 'Higher Math', friBn: 'আইসিটি', friEn: 'ICT', isBreak: false },
      { periodBn: '৬ষ্ঠ পিরিয়ড', periodEn: '6th Period', timeBn: '১২:২০ - ০১:০০', timeEn: '12:20 - 01:00', sunBn: 'ধর্ম', sunEn: 'Religion', monBn: 'আইসিটি', monEn: 'ICT', tueBn: 'বিজ্ঞান', tueEn: 'Science', wedBn: 'বাংলা', wedEn: 'Bangla', thuBn: 'আইসিটি', thuEn: 'ICT', friBn: 'সমাজ', friEn: 'BGS', isBreak: false },
    ],
    '7': [
      { periodBn: '১ম পিরিয়ড', periodEn: '1st Period', timeBn: '০৯:০০ - ০৯:৪০', timeEn: '09:00 - 09:40', sunBn: 'ইংরেজি', sunEn: 'English', monBn: 'বাংলা', monEn: 'Bangla', tueBn: 'গণিত', tueEn: 'Mathematics', wedBn: 'সমাজ', wedEn: 'BGS', thuBn: 'বিজ্ঞান', thuEn: 'Science', friBn: 'ইংরেজি', friEn: 'English', isBreak: false },
      { periodBn: '২য় পিরিয়ড', periodEn: '2nd Period', timeBn: '০৯:৪০ - ১০:২০', timeEn: '09:40 - 10:20', sunBn: 'বাংলা', sunEn: 'Bangla', monBn: 'গণিত', monEn: 'Mathematics', tueBn: 'বিজ্ঞান', tueEn: 'Science', wedBn: 'আইসিটি', wedEn: 'ICT', thuBn: 'ইংরেজি', thuEn: 'English', friBn: 'ধর্ম', friEn: 'Religion', isBreak: false },
      { periodBn: '৩য় পিরিয়ড', periodEn: '3rd Period', timeBn: '১০:২০ - ১১:০০', timeEn: '10:20 - 11:00', sunBn: 'বিজ্ঞান', sunEn: 'Science', monBn: 'ইংরেজি', monEn: 'English', tueBn: 'বাংলা', tueEn: 'Bangla', wedBn: 'গণিত', wedEn: 'Mathematics', thuBn: 'সমাজ', thuEn: 'BGS', friBn: 'বাংলা', friEn: 'Bangla', isBreak: false },
      { periodBn: '৪র্থ পিরিয়ড', periodEn: '4th Period', timeBn: '১১:০০ - ১১:৪০', timeEn: '11:00 - 11:40', sunBn: 'বিরতি ১১:০০ - ১১:২০', sunEn: 'Tiffin Break', monBn: 'বিরতি ১১:০০ - ১১:২০', monEn: 'Tiffin Break', tueBn: 'বিরতি ১১:০০ - ১১:২০', tueEn: 'Tiffin Break', wedBn: 'বিরতি ১১:০০ - ১১:২০', wedEn: 'Tiffin Break', thuBn: 'বিরতি ১১:০০ - ১১:২০', thuEn: 'Tiffin Break', friBn: 'বিরতি ১১:০০ - ১১:২০', friEn: 'Tiffin Break', isBreak: true },
      { periodBn: '৫ম পিরিয়ড', periodEn: '5th Period', timeBn: '১১:৪০ - ১২:২০', timeEn: '11:40 - 12:20', sunBn: 'গণিত', sunEn: 'Mathematics', monBn: 'সমাজ', monEn: 'BGS', tueBn: 'আইসিটি', tueEn: 'ICT', wedBn: 'বাংলা', wedEn: 'Bangla', thuBn: 'ধর্ম', thuEn: 'Religion', friBn: 'বিজ্ঞান', friEn: 'Science', isBreak: false },
      { periodBn: '৬ষ্ঠ পিরিয়ড', periodEn: '6th Period', timeBn: '১২:২০ - ০১:০০', timeEn: '12:20 - 01:00', sunBn: 'আইসিটি', sunEn: 'ICT', monBn: 'ধর্ম', monEn: 'Religion', tueBn: 'ইংরেজি', tueEn: 'English', wedBn: 'বিজ্ঞান', wedEn: 'Science', thuBn: 'বাংলা', thuEn: 'Bangla', friBn: 'গণিত', friEn: 'Mathematics', isBreak: false },
    ],
    '8': [
      { periodBn: '১ম পিরিয়ড', periodEn: '1st Period', timeBn: '০৯:০০ - ০৯:৪০', timeEn: '09:00 - 09:40', sunBn: 'গণিত', sunEn: 'Mathematics', monBn: 'ইংরেজি', monEn: 'English', tueBn: 'বাংলা', tueEn: 'Bangla', wedBn: 'বিজ্ঞান', wedEn: 'Science', thuBn: 'আইসিটি', thuEn: 'ICT', friBn: 'গণিত', friEn: 'Mathematics', isBreak: false },
      { periodBn: '২য় পিরিয়ড', periodEn: '2nd Period', timeBn: '০৯:৪০ - ১০:২০', timeEn: '09:40 - 10:20', sunBn: 'ইংরেজি', sunEn: 'English', monBn: 'বাংলা', monEn: 'Bangla', tueBn: 'গণিত', tueEn: 'Mathematics', wedBn: 'সমাজ', wedEn: 'BGS', thuBn: 'বিজ্ঞান', thuEn: 'Science', friBn: 'ইংরেজি', friEn: 'English', isBreak: false },
      { periodBn: '৩য় পিরিয়ড', periodEn: '3rd Period', timeBn: '১০:২০ - ১১:০০', timeEn: '10:20 - 11:00', sunBn: 'বাংলা', sunEn: 'Bangla', monBn: 'বিজ্ঞান', monEn: 'Science', tueBn: 'ইংরেজি', tueEn: 'English', wedBn: 'গণিত', wedEn: 'Mathematics', thuBn: 'বাংলা', thuEn: 'Bangla', friBn: 'ধর্ম', friEn: 'Religion', isBreak: false },
      { periodBn: '৪র্থ পিরিয়ড', periodEn: '4th Period', timeBn: '১১:০০ - ১১:৪০', timeEn: '11:00 - 11:40', sunBn: 'বিরতি ১১:০০ - ১১:২০', sunEn: 'Tiffin Break', monBn: 'বিরতি ১১:০০ - ১১:২০', monEn: 'Tiffin Break', tueBn: 'বিরতি ১১:০০ - ১১:২০', tueEn: 'Tiffin Break', wedBn: 'বিরতি ১১:০০ - ১১:২০', wedEn: 'Tiffin Break', thuBn: 'বিরতি ১১:০০ - ১১:২০', thuEn: 'Tiffin Break', friBn: 'বিরতি ১১:০০ - ১১:২০', friEn: 'Tiffin Break', isBreak: true },
      { periodBn: '৫ম পিরিয়ড', periodEn: '5th Period', timeBn: '১১:৪০ - ১২:২০', timeEn: '11:40 - 12:20', sunBn: 'বিজ্ঞান', sunEn: 'Science', monBn: 'গণিত', monEn: 'Mathematics', tueBn: 'সমাজ', tueEn: 'BGS', wedBn: 'বাংলা', wedEn: 'Bangla', thuBn: 'ধর্ম', thuEn: 'Religion', friBn: 'আইসিটি', friEn: 'ICT', isBreak: false },
      { periodBn: '৬ষ্ঠ পিরিয়ড', periodEn: '6th Period', timeBn: '১২:২০ - ০১:০০', timeEn: '12:20 - 01:00', sunBn: 'সমাজ', sunEn: 'BGS', monBn: 'ধর্ম', monEn: 'Religion', tueBn: 'আইসিটি', tueEn: 'ICT', wedBn: 'ইংরেজি', wedEn: 'English', thuBn: 'গণিত', thuEn: 'Mathematics', friBn: 'বিজ্ঞান', friEn: 'Science', isBreak: false },
    ],
    '9': [
      { periodBn: '১ম পিরিয়ড', periodEn: '1st Period', timeBn: '০৯:০০ - ০৯:৪০', timeEn: '09:00 - 09:40', sunBn: 'পদার্থবিজ্ঞান', sunEn: 'Physics', monBn: 'রসায়ন', monEn: 'Chemistry', tueBn: 'উচ্চতর গণিত', tueEn: 'Higher Math', wedBn: 'ইংরেজি', wedEn: 'English', thuBn: 'বাংলা', thuEn: 'Bangla', friBn: 'পদার্থবিজ্ঞান', friEn: 'Physics', isBreak: false },
      { periodBn: '২য় পিরিয়ড', periodEn: '2nd Period', timeBn: '০৯:৪০ - ১০:২০', timeEn: '09:40 - 10:20', sunBn: 'উচ্চতর গণিত', sunEn: 'Higher Math', monBn: 'জীববিজ্ঞান', monEn: 'Biology', tueBn: 'পদার্থবিজ্ঞান', tueEn: 'Physics', wedBn: 'রসায়ন', wedEn: 'Chemistry', thuBn: 'ইংরেজি', thuEn: 'English', friBn: 'উচ্চতর গণিত', friEn: 'Higher Math', isBreak: false },
      { periodBn: '৩য় পিরিয়ড', periodEn: '3rd Period', timeBn: '১০:২০ - ১১:০০', timeEn: '10:20 - 11:00', sunBn: 'ইংরেজি', sunEn: 'English', monBn: 'উচ্চতর গণিত', monEn: 'Higher Math', tueBn: 'বাংলা', tueEn: 'Bangla', wedBn: 'জীববিজ্ঞান', wedEn: 'Biology', thuBn: 'রসায়ন', thuEn: 'Chemistry', friBn: 'ইংরেজি', friEn: 'English', isBreak: false },
      { periodBn: '৪র্থ পিরিয়ড', periodEn: '4th Period', timeBn: '১১:০০ - ১১:৪০', timeEn: '11:00 - 11:40', sunBn: 'বিরতি ১১:০০ - ১১:২০', sunEn: 'Tiffin Break', monBn: 'বিরতি ১১:০০ - ১১:২০', monEn: 'Tiffin Break', tueBn: 'বিরতি ১১:০০ - ১১:২০', tueEn: 'Tiffin Break', wedBn: 'বিরতি ১১:০০ - ১১:২০', wedEn: 'Tiffin Break', thuBn: 'বিরতি ১১:০০ - ১১:২০', thuEn: 'Tiffin Break', friBn: 'বিরতি ১১:০০ - ১১:২০', friEn: 'Tiffin Break', isBreak: true },
      { periodBn: '৫ম পিরিয়ড', periodEn: '5th Period', timeBn: '১১:৪০ - ১২:২০', timeEn: '11:40 - 12:20', sunBn: 'রসায়ন', sunEn: 'Chemistry', monBn: 'বাংলা', monEn: 'Bangla', tueBn: 'জীববিজ্ঞান', tueEn: 'Biology', wedBn: 'পদার্থবিজ্ঞান', wedEn: 'Physics', thuBn: 'আইসিটি', thuEn: 'ICT', friBn: 'বাংলা', friEn: 'Bangla', isBreak: false },
      { periodBn: '৬ষ্ঠ পিরিয়ড', periodEn: '6th Period', timeBn: '১২:২০ - ০১:০০', timeEn: '12:20 - 01:00', sunBn: 'আইসিটি', sunEn: 'ICT', monBn: 'পদার্থবিজ্ঞান', monEn: 'Physics', tueBn: 'ইংরেজি', tueEn: 'English', wedBn: 'বাংলা', wedEn: 'Bangla', thuBn: 'জীববিজ্ঞান', thuEn: 'Biology', friBn: 'আইসিটি', friEn: 'ICT', isBreak: false },
    ],
    '10': [
      { periodBn: '১ম পিরিয়ড', periodEn: '1st Period', timeBn: '০৯:০০ - ০৯:৪০', timeEn: '09:00 - 09:40', sunBn: 'বাংলা ১ম', sunEn: 'Bangla 1st', monBn: 'ইংরেজি ১ম', monEn: 'English 1st', tueBn: 'উচ্চতর গণিত', tueEn: 'Higher Math', wedBn: 'রসায়ন', wedEn: 'Chemistry', thuBn: 'পদার্থবিজ্ঞান', thuEn: 'Physics', friBn: 'বাংলা ১ম', friEn: 'Bangla 1st', isBreak: false },
      { periodBn: '২য় পিরিয়ড', periodEn: '2nd Period', timeBn: '০৯:৪০ - ১০:২০', timeEn: '09:40 - 10:20', sunBn: 'ইংরেজি ২য়', sunEn: 'English 2nd', monBn: 'গণিত', monEn: 'General Math', tueBn: 'পদার্থবিজ্ঞান', tueEn: 'Physics', wedBn: 'উচ্চতর গণিত', wedEn: 'Higher Math', thuBn: 'রসায়ন', thuEn: 'Chemistry', friBn: 'ইংরেজি ২য়', friEn: 'English 2nd', isBreak: false },
      { periodBn: '৩য় পিরিয়ড', periodEn: '3rd Period', timeBn: '১০:২০ - ১১:০০', timeEn: '10:20 - 11:00', sunBn: 'উচ্চতর গণিত', sunEn: 'Higher Math', monBn: 'রসায়ন', monEn: 'Chemistry', tueBn: 'ইংরেজি ১ম', tueEn: 'English 1st', wedBn: 'জীববিজ্ঞান', wedEn: 'Biology', thuBn: 'বাংলা ২য়', thuEn: 'Bangla 2nd', friBn: 'উচ্চতর গণিত', friEn: 'Higher Math', isBreak: false },
      { periodBn: '৪র্থ পিরিয়ড', periodEn: '4th Period', timeBn: '১১:০০ - ১১:৪০', timeEn: '11:00 - 11:40', sunBn: 'বিরতি ১১:০০ - ১১:২০', sunEn: 'Tiffin Break', monBn: 'বিরতি ১১:০০ - ১১:২০', monEn: 'Tiffin Break', tueBn: 'বিরতি ১১:০০ - ১১:২০', tueEn: 'Tiffin Break', wedBn: 'বিরতি ১১:০০ - ১১:২০', wedEn: 'Tiffin Break', thuBn: 'বিরতি ১১:০০ - ১১:২০', thuEn: 'Tiffin Break', friBn: 'বিরতি ১১:০০ - ১১:২০', friEn: 'Tiffin Break', isBreak: true },
      { periodBn: '৫ম পিরিয়ড', periodEn: '5th Period', timeBn: '১১:৪০ - ১২:২০', timeEn: '11:40 - 12:20', sunBn: 'পদার্থবিজ্ঞান', sunEn: 'Physics', monBn: 'বাংলা ২য়', monEn: 'Bangla 2nd', tueBn: 'জীববিজ্ঞান', tueEn: 'Biology', wedBn: 'পদার্থবিজ্ঞান', wedEn: 'Physics', thuBn: 'উচ্চতর গণিত', thuEn: 'Higher Math', friBn: 'আইসিটি', friEn: 'ICT', isBreak: false },
      { periodBn: '৬ষ্ঠ পিরিয়ড', periodEn: '6th Period', timeBn: '১২:২০ - ০১:০০', timeEn: '12:20 - 01:00', sunBn: 'আইসিটি', sunEn: 'ICT', monBn: 'জীববিজ্ঞান', monEn: 'Biology', tueBn: 'রসায়ন', tueEn: 'Chemistry', wedBn: 'বাংলা ১ম', wedEn: 'Bangla 1st', thuBn: 'আইসিটি', thuEn: 'ICT', friBn: 'জীববিজ্ঞান', friEn: 'Biology', isBreak: false },
    ],
  };

  const currentRoutine = routinesByClass[selectedClass] || routinesByClass['6'];

  // Handle professional printable timetable download / print (Bilingual based on page language, strictly single A4 page)
  const handleDownloadTimetable = () => {
    const isBn = language === 'bn';
    const className = isBn 
      ? (selectedClass === '6' ? '৬ষ্ঠ শ্রেণি' : selectedClass === '7' ? '৭ম শ্রেণি' : selectedClass === '8' ? '৮ম শ্রেণি' : selectedClass === '9' ? '৯ম শ্রেণি' : '১০ম শ্রেণি')
      : `Class ${selectedClass}`;
    
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
        <title>${isBn ? `ক্লাস রুটিন - ${className}` : `Class Timetable - ${className}`} - SOS Hermann Gmeiner School Khulna</title>
        <style>
          @page { 
            size: A4 landscape; 
            margin: 7mm 10mm; 
          }
          * { 
            box-sizing: border-box; 
            margin: 0; 
            padding: 0; 
            font-family: ${isBn ? "'SolaimanLipi', 'Kalpurush', 'Hind Siliguri', 'Segoe UI', Arial, sans-serif" : "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"}; 
          }
          html, body { 
            background: #fff; 
            color: #0f172a; 
            width: 100%;
            height: 100%;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .border-wrapper { 
            border: 2px solid #00704A; 
            border-radius: 8px; 
            padding: 10px 16px; 
            position: relative; 
            background: #fff;
            page-break-inside: avoid;
          }
          
          .header { 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            border-bottom: 2px solid #00704A; 
            padding-bottom: 6px; 
            margin-bottom: 8px; 
          }
          .header-left { 
            display: flex; 
            align-items: center; 
            gap: 12px; 
          }
          .logo { 
            width: 52px; 
            height: 52px; 
            object-fit: contain; 
          }
          .school-title-main { 
            font-size: 19px; 
            font-weight: 900; 
            color: #00704A; 
            line-height: 1.15; 
          }
          .school-info { 
            font-size: 10px; 
            color: #475569; 
            margin-top: 2px; 
            font-weight: 500; 
          }
          .header-right { 
            text-align: right; 
          }
          .eiin-badge { 
            display: inline-block; 
            background: #eaf7f0; 
            color: #00704A; 
            border: 1px solid #bbf7d0; 
            padding: 2px 7px; 
            border-radius: 4px; 
            font-size: 10.5px; 
            font-weight: 800; 
            margin-bottom: 2px; 
          }
          
          .doc-banner { 
            background: #f8fafc; 
            border: 1px solid #e2e8f0; 
            border-radius: 5px; 
            padding: 5px 12px; 
            margin-bottom: 8px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
          }
          .doc-title { 
            font-size: 13.5px; 
            font-weight: 800; 
            color: #0f172a; 
          }
          .doc-meta { 
            font-size: 10.5px; 
            color: #475569; 
            display: flex; 
            gap: 14px; 
            font-weight: 600; 
          }
          .doc-meta strong { 
            color: #00704A; 
            font-weight: 800; 
          }
          
          table { 
            width: 100%; 
            border-collapse: collapse; 
            margin-bottom: 8px; 
            font-size: 10.5px; 
          }
          th, td { 
            border: 1px solid #cbd5e1; 
            padding: 5px 6px; 
            text-align: center; 
          }
          th { 
            background-color: #00704A !important; 
            color: #ffffff !important; 
            font-weight: 800; 
            font-size: 10.5px; 
            text-transform: uppercase; 
            letter-spacing: 0.3px; 
          }
          th.time-col, td.time-col { 
            text-align: left; 
            padding-left: 8px; 
            width: 15%; 
          }
          td.time-col .period { 
            font-weight: 800; 
            color: #0f172a; 
            display: block; 
            font-size: 10.5px; 
          }
          td.time-col .time { 
            font-size: 9px; 
            color: #64748b; 
            font-family: monospace; 
            font-weight: 600; 
          }
          td { 
            font-weight: 600; 
            color: #334155; 
          }
          tr:nth-child(even) { 
            background-color: #f8fafc; 
          }
          tr.break-row { 
            background-color: #fef3c7 !important; 
            color: #92400e; 
            font-weight: 800; 
          }
          tr.break-row td { 
            color: #92400e; 
            font-weight: 800; 
          }
          
          .notes-box { 
            border: 1px dashed #94a3b8; 
            border-radius: 5px; 
            padding: 5px 8px; 
            margin-bottom: 12px; 
            font-size: 9px; 
            color: #475569; 
            background: #fafafa; 
            line-height: 1.3;
          }
          .notes-title { 
            font-weight: 800; 
            color: #0f172a; 
            margin-bottom: 2px; 
          }
          
          .signatures { 
            display: flex; 
            justify-content: space-between; 
            margin-top: 14px; 
            padding: 0 10px; 
          }
          .sig-box { 
            text-align: center; 
            width: 160px; 
          }
          .sig-line { 
            border-top: 1.2px solid #475569; 
            margin-bottom: 3px; 
            width: 100%; 
          }
          .sig-title { 
            font-size: 10px; 
            font-weight: 800; 
            color: #1e293b; 
          }
          .sig-sub { 
            font-size: 8.5px; 
            color: #64748b; 
          }
          
          .footer-print { 
            text-align: center; 
            font-size: 8px; 
            color: #94a3b8; 
            margin-top: 8px; 
            border-top: 1px solid #e2e8f0; 
            padding-top: 3px; 
          }
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
                  ${isBn 
                    ? 'গল্লামারী, খুলনা - ৯২০৮ | ফোন: ০২৪-৭৭৭২৬৭৭৫ | ইমেইল: soshgskhulna@sos-bangladesh.org' 
                    : 'Gollamari, Khulna - 9208 | Phone: 024-77726775 | Email: soshgskhulna@sos-bangladesh.org'}
                </div>
              </div>
            </div>
            <div class="header-right">
              <div class="eiin-badge">EIIN: ${EIIN_CODE}</div>
              <div class="school-info">${isBn ? `স্থাপিত: ${ESTABLISHED_YEAR} ইং` : 'Established: 1987'}</div>
              <div class="school-info">${isBn ? 'ওয়েবসাইট: www.soshgskhulna.edu.bd' : 'Website: www.soshgskhulna.edu.bd'}</div>
            </div>
          </div>

          <div class="doc-banner">
            <div class="doc-title">${isBn ? 'একাডেমিক দৈনিক শ্রেণি ক্লাস রুটিন - ২০২৬' : 'ACADEMIC DAILY CLASS TIMETABLE - 2026'}</div>
            <div class="doc-meta">
              <span>${isBn ? 'শ্রেণি:' : 'Class:'} <strong>${className}</strong></span>
              <span>${isBn ? 'শিক্ষাবর্ষ:' : 'Session:'} <strong>${isBn ? '২০২৬' : '2026'}</strong></span>
              <span>${isBn ? 'কার্যকর:' : 'Effective:'} <strong>${isBn ? '০১ জানুয়ারি, ২০২৬' : 'January 01, 2026'}</strong></span>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th class="time-col">${isBn ? 'সময় ও পিরিয়ড' : 'Time & Period'}</th>
                <th>${isBn ? 'রবিবার' : 'Sunday'}</th>
                <th>${isBn ? 'সোমবার' : 'Monday'}</th>
                <th>${isBn ? 'মঙ্গলবার' : 'Tuesday'}</th>
                <th>${isBn ? 'বুধবার' : 'Wednesday'}</th>
                <th>${isBn ? 'বৃহস্পতিবার' : 'Thursday'}</th>
                <th>${isBn ? 'শুক্রবার' : 'Friday'}</th>
              </tr>
            </thead>
            <tbody>
              ${currentRoutine.map(row => `
                <tr class="${row.isBreak ? 'break-row' : ''}">
                  <td class="time-col">
                    <span class="period">${isBn ? row.periodBn : row.periodEn}</span>
                    <span class="time">${isBn ? row.timeBn : row.timeEn}</span>
                  </td>
                  ${row.isBreak 
                    ? `<td colspan="6">${isBn ? 'টিফিন বিরতি (১১:০০ - ১১:২০)' : 'Tiffin Break (11:00 - 11:20 AM)'}</td>`
                    : `
                      <td>${isBn ? row.sunBn : row.sunEn}</td>
                      <td>${isBn ? row.monBn : row.monEn}</td>
                      <td>${isBn ? row.tueBn : row.tueEn}</td>
                      <td>${isBn ? row.wedBn : row.wedEn}</td>
                      <td>${isBn ? row.thuBn : row.thuEn}</td>
                      <td>${isBn ? row.friBn : row.friEn}</td>
                    `
                  }
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="notes-box">
            <div class="notes-title">${isBn ? 'সাধারণ নির্দেশনাবলি:' : 'General Instructions:'}</div>
            ${isBn ? `
              <div>১. শিক্ষার্থীদের প্রাত্যহিক সমাবেশে অংশগ্রহণের জন্য সকাল ৮:০০ ঘটিকার মধ্যে বিদ্যালয়ে উপস্থিত হতে হবে।</div>
              <div>২. প্রতিটি পিরিয়ড শুরুর পূর্বে নির্ধারিত শ্রেণিকক্ষে যথাসময়ে আসন গ্রহণ করতে হবে।</div>
              <div>৩. অনিবার্য কারণে কর্তৃপক্ষ যেকোনো সময় এই ক্লাস রুটিন সংশোধন বা পরিমার্জন করার অধিকার সংরক্ষণ করে।</div>
            ` : `
              <div>1. Students must arrive at school before 8:00 AM daily to attend the morning national assembly.</div>
              <div>2. Students must be seated in their respective classrooms before the start of each period.</div>
              <div>3. School authority reserves the right to modify or adjust this schedule when necessary.</div>
            `}
          </div>

          <div class="signatures">
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'শ্রেণি শিক্ষক / রুটিন প্রণয়নকারী' : 'Class Teacher / Timetable In-charge'}</div>
              <div class="sig-sub">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'একাডেমিক কো-অর্ডিনেটর' : 'Academic Coordinator'}</div>
              <div class="sig-sub">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
            </div>
            <div class="sig-box">
              <div class="sig-line"></div>
              <div class="sig-title">${isBn ? 'অধ্যক্ষ / প্রধান শিক্ষক' : 'Principal / Head of Institution'}</div>
              <div class="sig-sub">${isBn ? SCHOOL_NAME : SCHOOL_NAME_EN}</div>
            </div>
          </div>

          <div class="footer-print">
            ${isBn 
              ? `অফিসিয়াল ক্লাস রুটিন • এস ও এস হারম্যান মেইনার স্কুল খুলনা • জেনারেট তারিখ: ${new Date().toLocaleDateString('bn-BD')}` 
              : `Official Timetable Document • SOS Hermann Gmeiner School Khulna Portal • Generated: ${new Date().toLocaleDateString('en-US')}`}
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
      
      {/* 1. HERO SECTION WITH BREADCRUMB & CAMPUS ILLUSTRATION */}
      <div className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-12 mb-6">
        
        {/* Background School Linework Illustration on Right Side (Hidden on Mobile) */}
        <div className="hidden md:flex absolute right-0 top-0 bottom-0 md:w-2/5 lg:w-1/3 pointer-events-none overflow-hidden select-none items-center justify-end">
          <img 
            src="/campus_illustration.jpg" 
            alt="School Campus Illustration"
            className="w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.3)_25%,rgba(0,0,0,0.95)_55%,black_100%)] opacity-85 mix-blend-multiply"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link to="/" className="hover:text-emerald-700 flex items-center gap-1">
              <Home size={14} className="text-emerald-700" />
              <span>{language === 'bn' ? 'হোম' : 'Home'}</span>
            </Link>
            <span>&gt;</span>
            <span className="text-slate-800 font-bold">
              {language === 'bn' ? 'একাডেমিক তথ্য ও নীতিমালা' : 'Academic Policies & Routine'}
            </span>
          </div>

          {/* Center Hero Heading & Subtitle */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {language === 'bn' ? 'একাডেমিক তথ্য ও নীতিমালা' : 'Academic Policies & Routine'}
            </h1>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              {language === 'bn' 
                ? 'ক্লাস রুটিন, একাডেমিক নীতিমালা এবং শিক্ষার্থীদের জন্য প্রয়োজনীয় তথ্য।' 
                : 'Class routine, academic policies and essential student guidelines.'}
            </p>
            
            <div className="w-12 h-1 bg-emerald-600 rounded-full mx-auto mt-2" />
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 2. DAILY CLASS ROUTINE CARD */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
          
          {/* Section Header & Download Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900">
                  {language === 'bn' ? 'দৈনিক শ্রেণি কার্যক্রম ও ক্লাস রুটিন' : 'Daily Class Schedule & Routine'}
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {language === 'bn' ? 'শ্রেণি অনুযায়ী সময়সূচি দেখুন' : 'View daily timetable by class'}
                </p>
              </div>
            </div>

            {/* Professional Timetable Download/Print Button */}
            <button 
              onClick={handleDownloadTimetable}
              className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/90 px-4 py-2 rounded-2xl text-xs font-bold transition shadow-2xs cursor-pointer active:scale-95"
            >
              <Download size={14} className="text-emerald-700" />
              <span>{language === 'bn' ? 'রুটিন ডাউনলোড করুন' : 'Download Timetable'}</span>
            </button>
          </div>

          {/* Class Selector Dropdown */}
          <div className="flex items-center gap-3">
            <label className="text-xs sm:text-sm font-bold text-slate-700">
              {language === 'bn' ? 'শ্রেণি নির্বাচন করুন' : 'Select Class'}
            </label>
            <div className="relative w-40 sm:w-48">
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full pl-3.5 pr-8 py-1.5 bg-slate-50 border border-slate-200/90 focus:border-emerald-600 focus:bg-white rounded-xl text-xs sm:text-sm font-bold text-slate-800 outline-none transition appearance-none cursor-pointer"
              >
                <option value="6">{language === 'bn' ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
                <option value="7">{language === 'bn' ? '৭ম শ্রেণি' : 'Class 7'}</option>
                <option value="8">{language === 'bn' ? '৮ম শ্রেণি' : 'Class 8'}</option>
                <option value="9">{language === 'bn' ? '৯ম শ্রেণি' : 'Class 9'}</option>
                <option value="10">{language === 'bn' ? '১০ম শ্রেণি' : 'Class 10'}</option>
              </select>
              <ChevronDown size={15} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Routine Timetable Grid */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200/80">
            <table className="w-full text-center text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/90 text-slate-700 uppercase font-black tracking-wider text-[11px] border-b border-slate-200/80">
                  <th className="p-3 sm:p-4 text-left pl-5">{language === 'bn' ? 'সময়' : 'Time'}</th>
                  <th className="p-3 sm:p-4">{language === 'bn' ? 'রবিবার' : 'Sunday'}</th>
                  <th className="p-3 sm:p-4">{language === 'bn' ? 'সোমবার' : 'Monday'}</th>
                  <th className="p-3 sm:p-4">{language === 'bn' ? 'মঙ্গলবার' : 'Tuesday'}</th>
                  <th className="p-3 sm:p-4">{language === 'bn' ? 'বুধবার' : 'Wednesday'}</th>
                  <th className="p-3 sm:p-4">{language === 'bn' ? 'বৃহস্পতিবার' : 'Thursday'}</th>
                  <th className="p-3 sm:p-4 pr-5">{language === 'bn' ? 'শুক্রবার' : 'Friday'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentRoutine.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors ${
                      row.isBreak 
                        ? 'bg-amber-50/70 font-bold text-amber-900' 
                        : 'hover:bg-slate-50/70'
                    }`}
                  >
                    <td className="p-3.5 sm:p-4 text-left pl-5">
                      <span className="font-black text-slate-900 block leading-tight">
                        {language === 'bn' ? row.periodBn : row.periodEn}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        {language === 'bn' ? row.timeBn : row.timeEn}
                      </span>
                    </td>
                    
                    {row.isBreak ? (
                      <td colSpan={6} className="p-3.5 sm:p-4 text-center font-bold text-amber-800 text-xs">
                        {language === 'bn' ? 'টিফিন বিরতি (১১:০০ - ১১:২০)' : 'Tiffin Break: 11:00 AM - 11:20 AM'}
                      </td>
                    ) : (
                      <>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">{language === 'bn' ? row.sunBn : row.sunEn}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">{language === 'bn' ? row.monBn : row.monEn}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">{language === 'bn' ? row.tueBn : row.tueEn}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">{language === 'bn' ? row.wedBn : row.wedEn}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-slate-700">{language === 'bn' ? row.thuBn : row.thuEn}</td>
                        <td className="p-3.5 sm:p-4 pr-5 font-semibold text-slate-700">{language === 'bn' ? row.friBn : row.friEn}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Routine Note */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
            <Info size={14} className="text-emerald-700 flex-shrink-0" />
            <span>
              {language === 'bn' 
                ? 'উল্লেখ্য: সময়সূচি প্রয়োজনে পরিবর্তন হতে পারে। নোটিশ বোর্ড দেখুন।' 
                : 'Note: Schedule may be subject to changes upon administrative requirements. Please check notice board.'}
            </span>
          </div>

        </div>

        {/* 3. UNIFORM & DRESS CODE CARDS (2-COLUMN GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Boys Dress Card */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Shirt size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {language === 'bn' ? 'ছাত্রদের পোশাক (ছেলে)' : "Boys' School Uniform"}
              </h3>
            </div>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা রঙের হাফ/ফুল হাতা শার্ট (স্কুলের নকশা অনুযায়ী)' : 'White half/full sleeve shirt (as per school design)'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'নেভি ব্লু রঙের ফুল প্যান্ট ও কালো বেল্ট' : 'Navy blue formal trousers with black belt'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা মোজা ও কালো জুতা' : 'White socks and black school shoes'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'স্কুলের ব্যাজ বাধ্যতামূলক' : 'Official school crest/badge is mandatory'}</span>
              </li>
            </ul>
          </div>

          {/* Girls Dress Card */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Shirt size={18} />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                {language === 'bn' ? 'ছাত্রীদের পোশাক (মেয়ে)' : "Girls' School Uniform"}
              </h3>
            </div>
            
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'নেভি ব্লু রঙের স্কুল ফ্রক/সালোয়ার ও সাদা ওড়না/হিজাব' : 'Navy blue school salwar/frock with white dupatta/hijab'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা স্কার্ফ / ওয়ান-পিস শার্ট (স্কুলের নকশা অনুযায়ী)' : 'White scarf / one-piece shirt (as per school design)'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাদা মোজা ও কালো জুতা' : 'White socks and black school shoes'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'স্কুলের ব্যাজ বাধ্যতামূলক' : 'Official school crest/badge is mandatory'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4. DISCIPLINE & CODE OF CONDUCT CARD */}
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {language === 'bn' ? 'শৃঙ্খলা ও আচরণবিধি' : 'Discipline & Code of Conduct'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'প্রতিদিন সকাল ৮:০০ ঘটিকার মধ্যে বিদ্যালয়ে উপস্থিত হওয়া বাধ্যতামূলক।' : 'Students must arrive at school by 8:00 AM daily.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'অনুপস্থিতির ক্ষেত্রে অভিভাবকের স্বাক্ষরসহ আবেদনপত্র জমা দিতে হবে।' : 'Absence requires a written application signed by parents.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'বিদ্যালয় চত্বরে মোবাইল ফোন বা ইলেকট্রনিক ডিভাইস বহন সম্পূর্ণ নিষিদ্ধ।' : 'Mobile phones and electronic gadgets are strictly prohibited on campus.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'শ্রেণিকক্ষ ও বিদ্যালয় প্রাঙ্গণের পরিচ্ছন্নতা বজায় রাখতে হবে।' : 'Students must maintain classroom and campus cleanliness.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'শিক্ষক ও সহপাঠীদের সাথে মার্জিত ও শ্রদ্ধাশীল আচরণ বজায় রাখা আবশ্যক।' : 'Show respect and courteous behavior towards teachers and peers.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'বিদ্যালয়ের সম্পদ ও আসবাবপত্রের কোনো প্রকার ক্ষতিসাধন করা যাবে না।' : 'Any damage to school property and furniture is strictly punishable.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'সকল পরীক্ষায় অংশগ্রহণ ও নিয়মানুবর্তিতা বজায় রাখা বাধ্যতামূলক।' : 'Participation in all scheduled exams and evaluations is mandatory.'}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{language === 'bn' ? 'শ্রেণি কার্যক্রম চলাকালীন অনুমতি ব্যতিরেকে ক্লাসরুম ত্যাগ নিষেধ।' : 'Leaving classroom during session without permission is not allowed.'}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Academic;
