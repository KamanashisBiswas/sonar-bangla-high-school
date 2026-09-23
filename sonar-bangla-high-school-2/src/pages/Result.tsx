import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  BarChart3,
  Landmark,
  User,
  Calendar,
  FileText,
  Users,
  Search,
  Printer,
  Download,
  CheckCircle2,
  TrendingUp,
  Star,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SCHOOL_INFO } from '../data/schoolData';
import {
  ScrollReveal,
  ScrollScale,
  ScrollStaggerContainer,
  ScrollStaggerItem,
  HoverCard
} from '../components/ui/MotionComponents';

interface SubjectMark {
  code: string;
  name: string;
  fullMarks: number;
  obtained: number;
  grade: string;
  gpa: string;
}

interface StudentResult {
  roll: string;
  name: string;
  avatarLetter: string;
  avatarColor: string;
  groupSec: string;
  group: string;
  totalMarks: number;
  maxMarks: number;
  gpa: string;
  grade: string;
  status: 'Passed' | 'Failed';
  subjects: SubjectMark[];
}

const RESULTS_DATABASE: StudentResult[] = [
  {
    roll: '101',
    name: 'Abdullah Al Mamun',
    avatarLetter: 'A',
    avatarColor: 'bg-indigo-100 text-indigo-700',
    groupSec: 'Science (A)',
    group: 'Science',
    totalMarks: 672,
    maxMarks: 700,
    gpa: '5.00',
    grade: 'A+',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 95, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 92, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 89, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 48, grade: 'A+', gpa: '5.00' },
    ],
  },
  {
    roll: '102',
    name: 'Sumaiya Akter',
    avatarLetter: 'S',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Business Studies (A)',
    group: 'Business Studies',
    totalMarks: 658,
    maxMarks: 700,
    gpa: '5.00',
    grade: 'A+',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 90, grade: 'A+', gpa: '5.00' },
      { code: '146', name: 'Accounting', fullMarks: 100, obtained: 94, grade: 'A+', gpa: '5.00' },
      { code: '147', name: 'Business Org', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '148', name: 'Finance & Banking', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 47, grade: 'A+', gpa: '5.00' },
    ],
  },
  {
    roll: '103',
    name: 'Tanvir Hasan',
    avatarLetter: 'T',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Science (A)',
    group: 'Science',
    totalMarks: 642,
    maxMarks: 700,
    gpa: '4.88',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 91, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 83, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '104',
    name: 'Fatema Tuz Zohra',
    avatarLetter: 'F',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Science (B)',
    group: 'Science',
    totalMarks: 630,
    maxMarks: 700,
    gpa: '4.75',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 79, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '136', name: 'Physics', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '137', name: 'Chemistry', fullMarks: 100, obtained: 76, grade: 'A', gpa: '4.00' },
      { code: '138', name: 'Biology', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '105',
    name: 'Mehedi Hasan Rony',
    avatarLetter: 'M',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Humanities (B)',
    group: 'Humanities',
    totalMarks: 615,
    maxMarks: 700,
    gpa: '4.60',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '150', name: 'History of Bangladesh', fullMarks: 100, obtained: 82, grade: 'A+', gpa: '5.00' },
      { code: '151', name: 'Civics & Citizenship', fullMarks: 100, obtained: 74, grade: 'A', gpa: '4.00' },
      { code: '152', name: 'Geography', fullMarks: 100, obtained: 75, grade: 'A', gpa: '4.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 42, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '106',
    name: 'Nusrat Jahan Tisha',
    avatarLetter: 'N',
    avatarColor: 'bg-blue-100 text-blue-700',
    groupSec: 'Business Studies (B)',
    group: 'Business Studies',
    totalMarks: 640,
    maxMarks: 700,
    gpa: '4.85',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 86, grade: 'A+', gpa: '5.00' },
      { code: '146', name: 'Accounting', fullMarks: 100, obtained: 88, grade: 'A+', gpa: '5.00' },
      { code: '147', name: 'Business Org', fullMarks: 100, obtained: 79, grade: 'A', gpa: '4.00' },
      { code: '148', name: 'Finance & Banking', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 44, grade: 'A', gpa: '4.00' },
    ],
  },
  {
    roll: '107',
    name: 'Ariful Islam Sakib',
    avatarLetter: 'A',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    groupSec: 'Humanities (A)',
    group: 'Humanities',
    totalMarks: 605,
    maxMarks: 700,
    gpa: '4.50',
    grade: 'A',
    status: 'Passed',
    subjects: [
      { code: '101', name: 'Bangla', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
      { code: '107', name: 'English', fullMarks: 100, obtained: 75, grade: 'A', gpa: '4.00' },
      { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 78, grade: 'A', gpa: '4.00' },
      { code: '150', name: 'History of Bangladesh', fullMarks: 100, obtained: 81, grade: 'A+', gpa: '5.00' },
      { code: '151', name: 'Civics & Citizenship', fullMarks: 100, obtained: 76, grade: 'A', gpa: '4.00' },
      { code: '152', name: 'Geography', fullMarks: 100, obtained: 74, grade: 'A', gpa: '4.00' },
      { code: '154', name: 'ICT', fullMarks: 50, obtained: 41, grade: 'A', gpa: '4.00' },
    ],
  },
];

export const Result: React.FC = () => {
  const { language, toBanglaNum } = useLanguage();
  const isBn = language === 'bn';

  const [activeTab, setActiveTab] = useState<'institute' | 'individual'>('institute');

  // Filters for Institute Result
  const [instSession, setInstSession] = useState('2025');
  const [instExam, setInstExam] = useState('Annual Examination');
  const [instClass, setInstClass] = useState('Class 10');
  const [instGroup, setInstGroup] = useState('All Groups');

  // Filters for Individual Result
  const [indSession, setIndSession] = useState('2025');
  const [indExam, setIndExam] = useState('Annual Examination');
  const [indClass, setIndClass] = useState('Class 10');
  const [rollInput, setRollInput] = useState('101');

  // Active individual result
  const [activeStudent, setActiveStudent] = useState<StudentResult>(RESULTS_DATABASE[0]);

  const getSubjectName = (name: string) => {
    if (!isBn) return name;
    const map: Record<string, string> = {
      'Bangla': 'বাংলা',
      'English': 'ইংরেজি',
      'Mathematics': 'সাধারণ গণিত',
      'Physics': 'পদার্থবিজ্ঞান',
      'Chemistry': 'রসায়ন',
      'Biology': 'জীববিজ্ঞান',
      'ICT': 'তথ্য ও যোগাযোগ প্রযুক্তি',
      'Accounting': 'হিসাববিজ্ঞান',
      'Business Org': 'ব্যবসায় উদ্যোগ',
      'Finance & Banking': 'ফিন্যান্স ও ব্যাংকিং',
      'History of Bangladesh': 'বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা',
      'Civics & Citizenship': 'পৌরনীতি ও নাগরিকতা',
      'Geography': 'ভূগোল ও পরিবেশ',
      'Science / Studies': 'সাধারণ বিজ্ঞান',
    };
    return map[name] || name;
  };

  const getGroupSec = (groupSec: string) => {
    if (!isBn) return groupSec;
    return groupSec
      .replace('Science', 'বিজ্ঞান')
      .replace('Business Studies', 'ব্যবসায় শিক্ষা')
      .replace('Humanities', 'মানবিক')
      .replace('General', 'সাধারণ')
      .replace('(A)', '(এ)')
      .replace('(B)', '(বি)');
  };

  const getStudentName = (name: string) => {
    if (!isBn) return name;
    const map: Record<string, string> = {
      'Abdullah Al Mamun': 'আব্দুল্লাহ আল মামুন',
      'Sumaiya Akter': 'সুমাইয়া আক্তার',
      'Tanvir Hasan': 'তানভীর হাসান',
      'Fatema Tuz Zohra': 'ফাতেমা তুজ জোহরা',
      'Mehedi Hasan Rony': 'মেহেদী হাসান রনি',
      'Nusrat Jahan Tisha': 'নুসরাত জাহান তিশা',
      'Ariful Islam Sakib': 'আরিফুল ইসলাম সাকিব',
    };
    return map[name] || name;
  };

  const getClassName = (cls: string) => {
    if (!isBn) return cls;
    const num = cls.replace('Class ', '');
    return `${toBanglaNum(num)} শ্রেণি`;
  };

  const getExamName = (exam: string) => {
    if (!isBn) return exam;
    const map: Record<string, string> = {
      'Annual Examination': 'বার্ষিক পরীক্ষা',
      'Half Yearly Examination': 'অর্ধ-বার্ষিক পরীক্ষা',
      'Model Test Examination': 'নির্বাচনী পরীক্ষা',
    };
    return map[exam] || exam;
  };

  const getGroupName = (grp: string) => {
    if (!isBn) return grp;
    const map: Record<string, string> = {
      'All Groups': 'সকল বিভাগ',
      'Science': 'বিজ্ঞান',
      'Business Studies': 'ব্যবসায় শিক্ষা',
      'Humanities': 'মানবিক',
      'General': 'সাধারণ',
    };
    return map[grp] || grp;
  };

  const getStatusName = (status: string) => {
    if (!isBn) return status;
    return status === 'Passed' ? 'উত্তীর্ণ' : 'অনুত্তীর্ণ';
  };

  const handleSearchIndividual = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRoll = rollInput.replace(/\D/g, '') || '101';
    const found = RESULTS_DATABASE.find((s) => s.roll === cleanRoll);
    if (found) {
      setActiveStudent(found);
    } else {
      // Create custom student if not found in default 7
      setActiveStudent({
        roll: cleanRoll,
        name: isBn ? `শিক্ষার্থী (রোল ${toBanglaNum(cleanRoll)})` : `Student (Roll ${cleanRoll})`,
        avatarLetter: cleanRoll.charAt(0),
        avatarColor: 'bg-emerald-100 text-emerald-700',
        groupSec: isBn ? 'সাধারণ' : 'General',
        group: isBn ? 'সাধারণ' : 'General',
        totalMarks: 620,
        maxMarks: 700,
        gpa: '4.70',
        grade: 'A',
        status: 'Passed',
        subjects: [
          { code: '101', name: 'Bangla', fullMarks: 100, obtained: 85, grade: 'A+', gpa: '5.00' },
          { code: '107', name: 'English', fullMarks: 100, obtained: 80, grade: 'A+', gpa: '5.00' },
          { code: '109', name: 'Mathematics', fullMarks: 100, obtained: 90, grade: 'A+', gpa: '5.00' },
          { code: '136', name: 'Science / Studies', fullMarks: 100, obtained: 84, grade: 'A+', gpa: '5.00' },
          { code: '154', name: 'ICT', fullMarks: 50, obtained: 45, grade: 'A+', gpa: '5.00' },
        ],
      });
    }
  };

  const handleSelectStudentTranscript = (student: StudentResult) => {
    setActiveStudent(student);
    setRollInput(student.roll);
    setActiveTab('individual');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const filteredInstituteResults = RESULTS_DATABASE.filter((s) => {
    if (instGroup === 'All Groups') return true;
    return s.group === instGroup;
  });

  const handlePrintResultSheet = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert(
        isBn
          ? 'অনুগ্রহ করে প্রাতিষ্ঠানিক ফলাফল শিট প্রিন্ট বা ডাউনলোড করার জন্য পপআপ অনুমতি দিন।'
          : 'Please allow popups to print or download the institutional result sheet.'
      );
      return;
    }

    const currentDateStr = isBn
      ? new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const totalStudentsCount = filteredInstituteResults.length;
    const passedCount = filteredInstituteResults.filter((s) => s.status === 'Passed').length;
    const passRateStr = totalStudentsCount > 0 ? Math.round((passedCount / totalStudentsCount) * 100) : 100;

    const rowsHtml = filteredInstituteResults
      .map((student, idx) => {
        const rollDisplay = isBn ? `#${toBanglaNum(student.roll)}` : `#${student.roll}`;
        const nameDisplay = getStudentName(student.name);
        const groupDisplay = getGroupSec(student.groupSec);
        const marksDisplay = isBn
          ? `${toBanglaNum(student.totalMarks)} / ${toBanglaNum(student.maxMarks)}`
          : `${student.totalMarks} / ${student.maxMarks}`;
        const gpaDisplay = isBn ? toBanglaNum(student.gpa) : student.gpa;
        const statusDisplay = getStatusName(student.status);
        const slDisplay = isBn ? toBanglaNum(idx + 1) : String(idx + 1);

        return `
          <tr>
            <td style="text-align: center; font-weight: 700; color: #64748b;">${slDisplay}</td>
            <td style="text-align: center; font-weight: 800; color: #004d34;">${rollDisplay}</td>
            <td style="font-weight: 800; color: #0f172a; padding-left: 12px;">${nameDisplay}</td>
            <td style="color: #475569; font-weight: 600;">${groupDisplay}</td>
            <td style="text-align: center; font-weight: 800; color: #059669;">${marksDisplay}</td>
            <td style="text-align: center; font-weight: 800; color: #0f172a;">${gpaDisplay}</td>
            <td style="text-align: center;">
              <span class="grade-badge">${student.grade}</span>
            </td>
            <td style="text-align: center; font-weight: 700; color: #059669;">
              ${statusDisplay}
            </td>
          </tr>
        `;
      })
      .join('');

    const htmlContent = `<!DOCTYPE html>
<html lang="${isBn ? 'bn' : 'en'}">
<head>
  <meta charset="UTF-8" />
  <title>${
    isBn
      ? `প্রাতিষ্ঠানিক ফলাফল বিবরণী - ${getClassName(instClass)} - ${getExamName(instExam)} - ${SCHOOL_INFO.nameBn}`
      : `Institutional Result Sheet - ${instClass} - ${instExam} - ${SCHOOL_INFO.name}`
  }</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      padding: 12px 16px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .print-frame {
      border: 2px solid #004d34;
      border-radius: 4px;
      padding: 14px 18px 12px 18px;
      min-height: calc(100vh - 24px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media print {
      body {
        padding: 0 !important;
        margin: 0 !important;
      }
      .print-frame {
        border: 2px solid #004d34 !important;
        border-radius: 0 !important;
        min-height: 100% !important;
        padding: 8mm 10mm !important;
      }
    }

    /* Header */
    .header-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 4px;
    }
    .header-logo-cell {
      width: 55px;
      vertical-align: middle;
    }
    .header-info-cell {
      vertical-align: middle;
      padding-left: 12px;
    }
    .header-meta-cell {
      vertical-align: middle;
      text-align: right;
      white-space: nowrap;
    }
    .school-logo {
      width: 52px;
      height: 52px;
      object-fit: contain;
      display: block;
    }
    .school-title {
      font-size: 17px;
      font-weight: 900;
      color: #004d34;
      margin: 0;
      line-height: 1.2;
    }
    .school-contact {
      font-size: 9.5px;
      color: #475569;
      margin-top: 3px;
      font-weight: 500;
    }
    .eiin-box {
      display: inline-block;
      border: 1px solid #004d34;
      background: #e8f7ee;
      color: #004d34;
      font-weight: 800;
      font-size: 10px;
      padding: 2px 7px;
      border-radius: 3px;
      margin-bottom: 2px;
    }
    .school-meta-line {
      font-size: 9px;
      color: #64748b;
      font-weight: 600;
      margin-top: 1px;
    }

    /* Divider */
    .green-divider {
      height: 2px;
      background: #004d34;
      margin: 6px 0 10px 0;
    }

    /* Document Title Banner */
    .doc-banner {
      background: #004d34;
      color: #ffffff;
      text-align: center;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    /* Info Grid */
    .info-grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
    }
    .info-grid td {
      padding: 5px 10px;
      font-size: 10px;
      border-bottom: 1px solid #e2e8f0;
    }
    .info-label {
      font-weight: 800;
      color: #334155;
      width: 15%;
    }
    .info-value {
      font-weight: 600;
      color: #0f172a;
      width: 35%;
    }

    /* Tabulation Table */
    .results-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      font-size: 10.5px;
    }
    .results-table th {
      background: #f1f8f4;
      color: #004d34;
      font-weight: 800;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
    }
    .results-table td {
      border: 1px solid #cbd5e1;
      padding: 5.5px 8px;
      font-size: 10px;
    }
    .results-table tbody tr:nth-child(even) {
      background: #fcfdfd;
    }
    .grade-badge {
      display: inline-block;
      background: #e8f7ee;
      color: #059669;
      font-weight: 800;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #a7f3d0;
      font-size: 9.5px;
    }

    /* Grading Scale Legend */
    .grading-bar {
      border: 1px dashed #cbd5e1;
      background: #f8fafc;
      border-radius: 4px;
      padding: 6px 10px;
      margin-top: 6px;
    }
    .grading-title {
      font-weight: 800;
      font-size: 9.5px;
      color: #1e293b;
      margin-bottom: 3px;
    }
    .grading-items {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 9px;
      font-weight: 600;
      color: #475569;
    }

    /* Signatures */
    .signatures-row {
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
      padding: 0 16px;
    }
    .sig-col {
      width: 190px;
      text-align: center;
    }
    .sig-line {
      border-top: 1.5px solid #0f172a;
      margin-bottom: 4px;
    }
    .sig-role {
      font-weight: 800;
      font-size: 10px;
      color: #0f172a;
    }
    .sig-school {
      font-size: 8.5px;
      font-weight: 600;
      color: #64748b;
      margin-top: 1px;
    }

    /* Footer */
    .doc-footer {
      text-align: center;
      font-size: 8.5px;
      color: #94a3b8;
      font-weight: 500;
      margin-top: 10px;
      border-top: 1px solid #f1f5f9;
      padding-top: 5px;
    }
  </style>
</head>
<body>
  <div class="print-frame">
    <div>
      <!-- Header -->
      <table class="header-table">
        <tr>
          <td class="header-logo-cell">
            <img src="${SCHOOL_INFO.logo}" alt="Logo" class="school-logo" onerror="this.style.display='none'" />
          </td>
          <td class="header-info-cell">
            <h1 class="school-title">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</h1>
            <div class="school-contact">
              ${isBn ? SCHOOL_INFO.addressBn : SCHOOL_INFO.address} | ${isBn ? 'ফোন' : 'Phone'}: ${toBanglaNum(SCHOOL_INFO.phone)} | ${isBn ? 'ইমেইল' : 'Email'}: ${SCHOOL_INFO.email}
            </div>
          </td>
          <td class="header-meta-cell">
            <div class="eiin-box">EIIN: ${toBanglaNum(SCHOOL_INFO.eiin)}</div>
            <div class="school-meta-line">${isBn ? 'স্থাপিত' : 'Estd'}: ${toBanglaNum(SCHOOL_INFO.established)}</div>
            <div class="school-meta-line">www.soshgskhulna.edu.bd</div>
          </td>
        </tr>
      </table>

      <!-- Green Divider -->
      <div class="green-divider"></div>

      <!-- Banner -->
      <div class="doc-banner">
        ${isBn ? 'প্রাতিষ্ঠানিক ফলাফল বিবরণী (TABULATION / RESULT SHEET)' : 'INSTITUTIONAL RESULT TABULATION SHEET'}
      </div>

      <!-- Info Grid -->
      <table class="info-grid">
        <tr>
          <td class="info-label">${isBn ? 'শ্রেণি:' : 'Class:'}</td>
          <td class="info-value">${getClassName(instClass)}</td>
          <td class="info-label">${isBn ? 'শিক্ষাবর্ষ:' : 'Academic Session:'}</td>
          <td class="info-value">${isBn ? toBanglaNum(instSession) : instSession}</td>
        </tr>
        <tr>
          <td class="info-label">${isBn ? 'পরীক্ষার নাম:' : 'Examination:'}</td>
          <td class="info-value">${getExamName(instExam)}</td>
          <td class="info-label">${isBn ? 'বিভাগ / শাখা:' : 'Group / Track:'}</td>
          <td class="info-value">${getGroupName(instGroup)}</td>
        </tr>
        <tr>
          <td class="info-label">${isBn ? 'মোট পরীক্ষার্থী:' : 'Total Students:'}</td>
          <td class="info-value">${isBn ? `${toBanglaNum(totalStudentsCount)} জন` : `${totalStudentsCount} Students`}</td>
          <td class="info-label">${isBn ? 'উত্তীর্ণ ও পাসের হার:' : 'Passed & Rate:'}</td>
          <td class="info-value" style="color: #059669; font-weight: 800;">
            ${isBn ? `${toBanglaNum(passedCount)} জন (পাসের হার: ${toBanglaNum(passRateStr)}%)` : `${passedCount} (${passRateStr}% Pass Rate)`}
          </td>
        </tr>
        <tr>
          <td class="info-label">${isBn ? 'ফলাফল প্রকাশের তারিখ:' : 'Publication Date:'}</td>
          <td class="info-value" colspan="3">${currentDateStr}</td>
        </tr>
      </table>

      <!-- Tabulation Table -->
      <table class="results-table">
        <thead>
          <tr>
            <th style="width: 7%;">${isBn ? 'ক্রমিক' : 'SL'}</th>
            <th style="width: 10%;">${isBn ? 'রোল' : 'ROLL'}</th>
            <th style="width: 28%; text-align: left; padding-left: 12px;">${isBn ? 'শিক্ষার্থীর নাম' : 'STUDENT NAME'}</th>
            <th style="width: 20%;">${isBn ? 'বিভাগ ও শাখা' : 'GROUP & SEC'}</th>
            <th style="width: 13%;">${isBn ? 'মোট নম্বর' : 'TOTAL MARKS'}</th>
            <th style="width: 8%;">${isBn ? 'জিপিএ' : 'GPA'}</th>
            <th style="width: 7%;">${isBn ? 'গ্রেড' : 'GRADE'}</th>
            <th style="width: 7%;">${isBn ? 'ফলাফল' : 'STATUS'}</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <!-- Grading Scale Reference -->
      <div class="grading-bar">
        <div class="grading-title">${isBn ? 'গ্রেডিং স্কেল নির্দেশিকা:' : 'Grading Scale Reference:'}</div>
        <div class="grading-items">
          <span>${isBn ? '৮০-১০০: A+ (৫.০০)' : '80-100: A+ (5.00)'}</span>
          <span>${isBn ? '৭০-৭৯: A (৪.০০)' : '70-79: A (4.00)'}</span>
          <span>${isBn ? '৬০-৬৯: A- (৩.৫০)' : '60-69: A- (3.50)'}</span>
          <span>${isBn ? '৫০-৫৯: B (৩.০০)' : '50-59: B (3.00)'}</span>
          <span>${isBn ? '৪০-৪৯: C (২.০০)' : '40-49: C (2.00)'}</span>
          <span>${isBn ? '৩৩-৩৯: D (১.০০)' : '33-39: D (1.00)'}</span>
          <span>${isBn ? '০-৩২: F (০.০০)' : '0-32: F (0.00)'}</span>
        </div>
      </div>
    </div>

    <div>
      <!-- Signatures Row -->
      <div class="signatures-row">
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'শ্রেণি শিক্ষক' : 'Class Teacher'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'পরীক্ষা নিয়ন্ত্রক' : 'Controller of Examinations'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'অধ্যক্ষ / প্রতিষ্ঠান প্রধান' : 'Principal / Head of Institution'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="doc-footer">
        ${
          isBn
            ? `এটি একটি কম্পিউটার জেনারেটেড অফিসিয়াল প্রাতিষ্ঠানিক ফলাফল শিট • ${SCHOOL_INFO.nameBn} • প্রিন্ট / ডাউনলোড: ${currentDateStr}`
            : `Official Computer Generated Institutional Result Sheet • ${SCHOOL_INFO.name} • Printed/Generated: ${currentDateStr}`
        }
      </div>
    </div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.print();
      }, 350);
    });
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const handleDownloadTranscript = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert(
        isBn
          ? 'অনুগ্রহ করে একাডেমিক ট্রান্সক্রিপ্ট প্রিন্ট বা ডাউনলোড করার জন্য পপআপ অনুমতি দিন।'
          : 'Please allow popups to print or download the academic transcript.'
      );
      return;
    }

    const currentDateStr = isBn
      ? new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const subjectRowsHtml = activeStudent.subjects
      .map((sub, idx) => {
        const slDisplay = isBn ? toBanglaNum(idx + 1) : String(idx + 1);
        const codeDisplay = isBn ? toBanglaNum(sub.code) : sub.code;
        const nameDisplay = getSubjectName(sub.name);
        const fullMarksDisplay = isBn ? toBanglaNum(sub.fullMarks) : String(sub.fullMarks);
        const obtainedDisplay = isBn ? toBanglaNum(sub.obtained) : String(sub.obtained);
        const gpaDisplay = isBn ? toBanglaNum(sub.gpa) : sub.gpa;

        return `
          <tr>
            <td style="text-align: center; color: #64748b;">${slDisplay}</td>
            <td style="text-align: center; font-weight: 700;">${codeDisplay}</td>
            <td style="font-weight: 700; color: #0f172a; padding-left: 10px;">${nameDisplay}</td>
            <td style="text-align: center;">${fullMarksDisplay}</td>
            <td style="text-align: center; font-weight: 800; color: #059669;">${obtainedDisplay}</td>
            <td style="text-align: center;"><span class="grade-badge">${sub.grade}</span></td>
            <td style="text-align: center; font-weight: 800; color: #0f172a;">${gpaDisplay}</td>
          </tr>
        `;
      })
      .join('');

    const htmlContent = `<!DOCTYPE html>
<html lang="${isBn ? 'bn' : 'en'}">
<head>
  <meta charset="UTF-8" />
  <title>${
    isBn
      ? `একাডেমিক ট্রান্সক্রিপ্ট - ${getStudentName(activeStudent.name)} (রোল: ${toBanglaNum(activeStudent.roll)}) - ${SCHOOL_INFO.nameBn}`
      : `Academic Transcript - ${activeStudent.name} (Roll: ${activeStudent.roll}) - ${SCHOOL_INFO.name}`
  }</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      color: #0f172a;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    body {
      padding: 12px 16px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .print-frame {
      border: 2px solid #004d34;
      border-radius: 4px;
      padding: 14px 18px 12px 18px;
      min-height: calc(100vh - 24px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media print {
      body {
        padding: 0 !important;
        margin: 0 !important;
      }
      .print-frame {
        border: 2px solid #004d34 !important;
        border-radius: 0 !important;
        min-height: 100% !important;
        padding: 8mm 10mm !important;
      }
    }

    /* Header */
    .header-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 4px;
    }
    .header-logo-cell {
      width: 55px;
      vertical-align: middle;
    }
    .header-info-cell {
      vertical-align: middle;
      padding-left: 12px;
    }
    .header-meta-cell {
      vertical-align: middle;
      text-align: right;
      white-space: nowrap;
    }
    .school-logo {
      width: 52px;
      height: 52px;
      object-fit: contain;
      display: block;
    }
    .school-title {
      font-size: 17px;
      font-weight: 900;
      color: #004d34;
      margin: 0;
      line-height: 1.2;
    }
    .school-contact {
      font-size: 9.5px;
      color: #475569;
      margin-top: 3px;
      font-weight: 500;
    }
    .eiin-box {
      display: inline-block;
      border: 1px solid #004d34;
      background: #e8f7ee;
      color: #004d34;
      font-weight: 800;
      font-size: 10px;
      padding: 2px 7px;
      border-radius: 3px;
      margin-bottom: 2px;
    }
    .school-meta-line {
      font-size: 9px;
      color: #64748b;
      font-weight: 600;
      margin-top: 1px;
    }

    .green-divider {
      height: 2px;
      background: #004d34;
      margin: 6px 0 10px 0;
    }

    .doc-banner {
      background: #004d34;
      color: #ffffff;
      text-align: center;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 12px;
      font-weight: 900;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    /* Student Info Box */
    .student-info-grid {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
    }
    .student-info-grid td {
      padding: 5px 10px;
      font-size: 10px;
      border-bottom: 1px solid #e2e8f0;
    }
    .info-label {
      font-weight: 800;
      color: #334155;
      width: 18%;
    }
    .info-value {
      font-weight: 700;
      color: #0f172a;
      width: 32%;
    }

    /* Subjects Table */
    .marks-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      font-size: 10.5px;
    }
    .marks-table th {
      background: #f1f8f4;
      color: #004d34;
      font-weight: 800;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
    }
    .marks-table td {
      border: 1px solid #cbd5e1;
      padding: 5.5px 8px;
      font-size: 10px;
    }
    .marks-table tbody tr:nth-child(even) {
      background: #fcfdfd;
    }
    .grade-badge {
      display: inline-block;
      background: #e8f7ee;
      color: #059669;
      font-weight: 800;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid #a7f3d0;
      font-size: 9.5px;
    }

    /* Summary Stat Cards */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin: 10px 0;
    }
    .summary-card {
      border: 1px solid #cbd5e1;
      background: #f8fafc;
      border-radius: 4px;
      padding: 8px 10px;
      text-align: center;
    }
    .summary-card-title {
      font-size: 9.5px;
      font-weight: 700;
      color: #475569;
      margin-bottom: 2px;
    }
    .summary-card-val {
      font-size: 14px;
      font-weight: 900;
      color: #0f172a;
    }

    /* Grading Scale Legend */
    .grading-bar {
      border: 1px dashed #cbd5e1;
      background: #f8fafc;
      border-radius: 4px;
      padding: 6px 10px;
      margin-top: 6px;
    }
    .grading-title {
      font-weight: 800;
      font-size: 9.5px;
      color: #1e293b;
      margin-bottom: 3px;
    }
    .grading-items {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 9px;
      font-weight: 600;
      color: #475569;
    }

    /* Signatures */
    .signatures-row {
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
      padding: 0 16px;
    }
    .sig-col {
      width: 190px;
      text-align: center;
    }
    .sig-line {
      border-top: 1.5px solid #0f172a;
      margin-bottom: 4px;
    }
    .sig-role {
      font-weight: 800;
      font-size: 10px;
      color: #0f172a;
    }
    .sig-school {
      font-size: 8.5px;
      font-weight: 600;
      color: #64748b;
      margin-top: 1px;
    }

    .doc-footer {
      text-align: center;
      font-size: 8.5px;
      color: #94a3b8;
      font-weight: 500;
      margin-top: 10px;
      border-top: 1px solid #f1f5f9;
      padding-top: 5px;
    }
  </style>
</head>
<body>
  <div class="print-frame">
    <div>
      <!-- Header -->
      <table class="header-table">
        <tr>
          <td class="header-logo-cell">
            <img src="${SCHOOL_INFO.logo}" alt="Logo" class="school-logo" onerror="this.style.display='none'" />
          </td>
          <td class="header-info-cell">
            <h1 class="school-title">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</h1>
            <div class="school-contact">
              ${isBn ? SCHOOL_INFO.addressBn : SCHOOL_INFO.address} | ${isBn ? 'ফোন' : 'Phone'}: ${toBanglaNum(SCHOOL_INFO.phone)} | ${isBn ? 'ইমেইল' : 'Email'}: ${SCHOOL_INFO.email}
            </div>
          </td>
          <td class="header-meta-cell">
            <div class="eiin-box">EIIN: ${toBanglaNum(SCHOOL_INFO.eiin)}</div>
            <div class="school-meta-line">${isBn ? 'স্থাপিত' : 'Estd'}: ${toBanglaNum(SCHOOL_INFO.established)}</div>
            <div class="school-meta-line">www.soshgskhulna.edu.bd</div>
          </td>
        </tr>
      </table>

      <div class="green-divider"></div>

      <!-- Banner -->
      <div class="doc-banner">
        ${isBn ? 'অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট ও নম্বরপত্র (ACADEMIC TRANSCRIPT)' : 'OFFICIAL ACADEMIC TRANSCRIPT & MARKSHEET'}
      </div>

      <!-- Student Particulars -->
      <table class="student-info-grid">
        <tr>
          <td class="info-label">${isBn ? 'শিক্ষার্থীর নাম:' : 'Student Name:'}</td>
          <td class="info-value" style="font-size: 11px; color: #004d34;">${getStudentName(activeStudent.name)}</td>
          <td class="info-label">${isBn ? 'রোল নম্বর:' : 'Roll Number:'}</td>
          <td class="info-value">#${isBn ? toBanglaNum(activeStudent.roll) : activeStudent.roll}</td>
        </tr>
        <tr>
          <td class="info-label">${isBn ? 'শ্রেণি:' : 'Class:'}</td>
          <td class="info-value">${getClassName(indClass)}</td>
          <td class="info-label">${isBn ? 'বিভাগ / শাখা:' : 'Group / Sec:'}</td>
          <td class="info-value">${getGroupSec(activeStudent.groupSec)}</td>
        </tr>
        <tr>
          <td class="info-label">${isBn ? 'শিক্ষাবর্ষ / সেশন:' : 'Academic Session:'}</td>
          <td class="info-value">${isBn ? toBanglaNum(indSession) : indSession}</td>
          <td class="info-label">${isBn ? 'পরীক্ষার নাম:' : 'Examination:'}</td>
          <td class="info-value">${getExamName(indExam)}</td>
        </tr>
      </table>

      <!-- Marks Table -->
      <table class="marks-table">
        <thead>
          <tr>
            <th style="width: 7%;">${isBn ? 'ক্রমিক' : 'SL'}</th>
            <th style="width: 12%;">${isBn ? 'বিষয় কোড' : 'CODE'}</th>
            <th style="width: 33%; text-align: left; padding-left: 10px;">${isBn ? 'বিষয়ের নাম' : 'SUBJECT NAME'}</th>
            <th style="width: 12%;">${isBn ? 'পূর্ণমান' : 'FULL MARKS'}</th>
            <th style="width: 12%;">${isBn ? 'প্রাপ্ত নম্বর' : 'OBTAINED'}</th>
            <th style="width: 12%;">${isBn ? 'লেটার গ্রেড' : 'GRADE'}</th>
            <th style="width: 12%;">${isBn ? 'গ্রেড পয়েন্ট' : 'GPA'}</th>
          </tr>
        </thead>
        <tbody>
          ${subjectRowsHtml}
        </tbody>
      </table>

      <!-- Summary Stat Cards -->
      <div class="summary-grid">
        <div class="summary-card">
          <div class="summary-card-title">${isBn ? 'মোট প্রাপ্ত নম্বর' : 'Total Obtained'}</div>
          <div class="summary-card-val" style="color: #059669;">
            ${isBn ? `${toBanglaNum(activeStudent.totalMarks)} / ${toBanglaNum(activeStudent.maxMarks)}` : `${activeStudent.totalMarks} / ${activeStudent.maxMarks}`}
          </div>
        </div>
        <div class="summary-card">
          <div class="summary-card-title">${isBn ? 'জিপিএ (৫.০০ স্কেলে)' : 'GPA (5.00 Scale)'}</div>
          <div class="summary-card-val" style="color: #004d34;">
            ${isBn ? toBanglaNum(activeStudent.gpa) : activeStudent.gpa}
          </div>
        </div>
        <div class="summary-card">
          <div class="summary-card-title">${isBn ? 'চূড়ান্ত লেটার গ্রেড' : 'Letter Grade'}</div>
          <div class="summary-card-val">
            <span class="grade-badge" style="font-size: 12px; padding: 2px 8px;">${activeStudent.grade}</span>
          </div>
        </div>
        <div class="summary-card">
          <div class="summary-card-title">${isBn ? 'চূড়ান্ত ফলাফল' : 'Result Status'}</div>
          <div class="summary-card-val" style="color: #059669;">
            ${getStatusName(activeStudent.status)}
          </div>
        </div>
      </div>

      <!-- Grading Scale Reference -->
      <div class="grading-bar">
        <div class="grading-title">${isBn ? 'গ্রেডিং স্কেল নির্দেশিকা:' : 'Grading Scale Reference:'}</div>
        <div class="grading-items">
          <span>${isBn ? '৮০-১০০: A+ (৫.০০)' : '80-100: A+ (5.00)'}</span>
          <span>${isBn ? '৭০-৭৯: A (৪.০০)' : '70-79: A (4.00)'}</span>
          <span>${isBn ? '৬০-৬৯: A- (৩.৫০)' : '60-69: A- (3.50)'}</span>
          <span>${isBn ? '৫০-৫৯: B (৩.০০)' : '50-59: B (3.00)'}</span>
          <span>${isBn ? '৪০-৪৯: C (২.০০)' : '40-49: C (2.00)'}</span>
          <span>${isBn ? '৩৩-৩৯: D (১.০০)' : '33-39: D (1.00)'}</span>
          <span>${isBn ? '০-৩২: F (০.০০)' : '0-32: F (0.00)'}</span>
        </div>
      </div>
    </div>

    <div>
      <!-- Signatures Row -->
      <div class="signatures-row">
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'শ্রেণি শিক্ষক' : 'Class Teacher'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'পরীক্ষা নিয়ন্ত্রক' : 'Controller of Examinations'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
        <div class="sig-col">
          <div class="sig-line"></div>
          <div class="sig-role">${isBn ? 'অধ্যক্ষ / প্রতিষ্ঠান প্রধান' : 'Principal / Head of Institution'}</div>
          <div class="sig-school">${isBn ? SCHOOL_INFO.nameBn : SCHOOL_INFO.name}</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="doc-footer">
        ${
          isBn
            ? `এটি একটি অফিসিয়াল কম্পিউটার জেনারেটেড ট্রান্সক্রিপ্ট • ${SCHOOL_INFO.nameBn} • ইস্যুর তারিখ: ${currentDateStr}`
            : `Official Computer Generated Academic Transcript • ${SCHOOL_INFO.name} • Issued: ${currentDateStr}`
        }
      </div>
    </div>
  </div>

  <script>
    window.addEventListener('load', function() {
      setTimeout(function() {
        window.print();
      }, 350);
    });
  </script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="bg-[#fcfdfd] pb-20 overflow-hidden">
      {/* 1. Hero Section: Full-Width Real Campus Background with Left-to-Right White Fade */}
      <div className="relative w-full bg-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex flex-col justify-between border-b border-slate-100">
        {/* Full-bleed Real Campus Photo Background */}
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
              <span>{isBn ? 'মূলপাতা' : 'Home'}</span>
            </Link>
            <span className="text-slate-400">›</span>
            <Link
              to="/result"
              className="hover:text-emerald-800 transition-colors text-slate-600"
            >
              {isBn ? 'ফলাফল' : 'Result'}
            </Link>
            <span className="text-slate-400">›</span>
            <span className="text-slate-800 font-bold">
              {isBn ? 'একাডেমিক ফলাফল ও মার্কশিট' : 'Academic Results & Marksheet'}
            </span>
          </div>

          {/* Left Narrative Block */}
          <ScrollReveal duration={0.6} distance={25} className="max-w-xl space-y-3 pt-12 sm:pt-16 lg:pt-20">
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e8f7ee] text-[#059669] border border-emerald-100/90 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs">
              <BarChart3 size={15} />
              <span>{isBn ? 'একাডেমিক ফলাফল পোর্টাল' : 'ACADEMIC RESULT PORTAL'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08]">
              {isBn ? (
                <>
                  একাডেমিক ফলাফল ও <br />
                  মার্কশিট
                </>
              ) : (
                <>
                  Academic Results & <br />
                  Marksheet
                </>
              )}
            </h1>

            {/* Short Green Accent Line Under Title */}
            <div className="w-12 h-1 bg-[#059669] rounded-full mt-3 mb-2" />

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-[14px] leading-relaxed font-normal max-w-lg">
              {isBn
                ? 'শিক্ষার্থীর রোল ও শ্রেণি নির্বাচন করে ফলাফল অনুসন্ধান ও অফিসিয়াল মার্কশিট সংগ্রহ করুন।'
                : 'Search results and generate official academic transcripts using student Roll and Class.'}
            </p>
          </ScrollReveal>

          {/* Floating White Quote Card on the Right (Common across all pages) */}
          <div className="hidden lg:block absolute bottom-12 right-8 xl:right-16 max-w-[340px]">
            <ScrollScale delay={0.2} className="bg-white/95 backdrop-blur-xs p-5 rounded-2xl shadow-xl border border-slate-200/90">
              <div className="flex items-start gap-3">
                <span className="text-3xl font-serif text-[#059669] leading-none select-none font-bold">
                  “
                </span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm sm:text-[15px] leading-snug">
                    {isBn ? 'আজকের শিক্ষা, আগামীর সম্ভাবনা' : 'Education today for a brighter tomorrow'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                    — {isBn ? 'এস ও এস হারম্যান মেইনার স্কুল' : 'SOS Hermann Gmeiner School'}
                  </p>
                </div>
              </div>
            </ScrollScale>
          </div>
        </div>
      </div>

      {/* 2. Search & Tab Filter Card (Overlapping Bottom of Hero Banner) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-7 sm:-mt-8 relative z-20">
        <ScrollReveal duration={0.65} distance={30} className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-7 space-y-6">
          {/* Top Tabs: Institute Result vs Individual Student Result */}
          <div className="flex items-center gap-6 border-b border-slate-100 pb-3">
            {/* Tab 1: Institute Result */}
            <button
              type="button"
              onClick={() => setActiveTab('institute')}
              className={`inline-flex items-center gap-2 pb-2 text-xs sm:text-sm font-bold transition cursor-pointer relative ${
                activeTab === 'institute'
                  ? 'text-[#004d34] after:content-[""] after:block after:h-[2.5px] after:bg-[#004d34] after:w-full after:absolute after:bottom-[-13px] after:left-0'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Landmark size={17} />
              <span>{isBn ? 'প্রাতিষ্ঠানিক ফলাফল' : 'Institute Result'}</span>
            </button>

            {/* Tab 2: Individual Student Result */}
            <button
              type="button"
              onClick={() => setActiveTab('individual')}
              className={`inline-flex items-center gap-2 pb-2 text-xs sm:text-sm font-bold transition cursor-pointer relative ${
                activeTab === 'individual'
                  ? 'text-[#004d34] after:content-[""] after:block after:h-[2.5px] after:bg-[#004d34] after:w-full after:absolute after:bottom-[-13px] after:left-0'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <User size={17} />
              <span>{isBn ? 'একক শিক্ষার্থী ফলাফল' : 'Individual Student Result'}</span>
            </button>
          </div>

          {/* TAB 1 FILTERS: Institute Result */}
          {activeTab === 'institute' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Session */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'শিক্ষাবর্ষ' : 'SESSION'}
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instSession}
                    onChange={(e) => setInstSession(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="2025">{isBn ? toBanglaNum('2025') : '2025'}</option>
                    <option value="2024">{isBn ? toBanglaNum('2024') : '2024'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Examination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'পরীক্ষার নাম' : 'EXAMINATION'}
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instExam}
                    onChange={(e) => setInstExam(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Annual Examination">{isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination'}</option>
                    <option value="Half Yearly Examination">{isBn ? 'অর্ধ-বার্ষিক পরীক্ষা' : 'Half Yearly Examination'}</option>
                    <option value="Model Test Examination">{isBn ? 'নির্বাচনী পরীক্ষা' : 'Model Test Examination'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'শ্রেণি' : 'CLASS'}
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instClass}
                    onChange={(e) => setInstClass(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Class 10">{isBn ? '১০ম শ্রেণি' : 'Class 10'}</option>
                    <option value="Class 9">{isBn ? '৯ম শ্রেণি' : 'Class 9'}</option>
                    <option value="Class 8">{isBn ? '৮ম শ্রেণি' : 'Class 8'}</option>
                    <option value="Class 7">{isBn ? '৭ম শ্রেণি' : 'Class 7'}</option>
                    <option value="Class 6">{isBn ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Group (Optional) */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'গ্রুপ / বিভাগ (ঐচ্ছিক)' : 'GROUP (OPTIONAL)'}
                </label>
                <div className="relative">
                  <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={instGroup}
                    onChange={(e) => setInstGroup(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="All Groups">{isBn ? 'সকল বিভাগ' : 'All Groups'}</option>
                    <option value="Science">{isBn ? 'বিজ্ঞান' : 'Science'}</option>
                    <option value="Business Studies">{isBn ? 'ব্যবসায় শিক্ষা' : 'Business Studies'}</option>
                    <option value="Humanities">{isBn ? 'মানবিক' : 'Humanities'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Search Result Button */}
              <div>
                <button
                  type="button"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Search size={14} />
                  <span>{isBn ? 'ফলাফল দেখুন' : 'Search Result'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2 FILTERS: Individual Student Result */}
          {activeTab === 'individual' && (
            <form onSubmit={handleSearchIndividual} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
              {/* Session */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'শিক্ষাবর্ষ' : 'SESSION'}
                </label>
                <div className="relative">
                  <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indSession}
                    onChange={(e) => setIndSession(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="2025">{isBn ? toBanglaNum('2025') : '2025'}</option>
                    <option value="2024">{isBn ? toBanglaNum('2024') : '2024'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Examination */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'পরীক্ষার নাম' : 'EXAMINATION'}
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indExam}
                    onChange={(e) => setIndExam(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Annual Examination">{isBn ? 'বার্ষিক পরীক্ষা' : 'Annual Examination'}</option>
                    <option value="Half Yearly Examination">{isBn ? 'অর্ধ-বার্ষিক পরীক্ষা' : 'Half Yearly Examination'}</option>
                    <option value="Model Test Examination">{isBn ? 'নির্বাচনী পরীক্ষা' : 'Model Test Examination'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Class */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'শ্রেণি' : 'CLASS'}
                </label>
                <div className="relative">
                  <FileText size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    value={indClass}
                    onChange={(e) => setIndClass(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-8 py-2.5 text-xs font-semibold text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[#004d34] cursor-pointer shadow-2xs"
                  >
                    <option value="Class 10">{isBn ? '১০ম শ্রেণি' : 'Class 10'}</option>
                    <option value="Class 9">{isBn ? '৯ম শ্রেণি' : 'Class 9'}</option>
                    <option value="Class 8">{isBn ? '৮ম শ্রেণি' : 'Class 8'}</option>
                    <option value="Class 7">{isBn ? '৭ম শ্রেণি' : 'Class 7'}</option>
                    <option value="Class 6">{isBn ? '৬ষ্ঠ শ্রেণি' : 'Class 6'}</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Student Roll Number */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {isBn ? 'শিক্ষার্থীর রোল নম্বর *' : 'STUDENT ROLL NUMBER *'}
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                    #
                  </span>
                  <input
                    type="text"
                    required
                    value={rollInput}
                    onChange={(e) => setRollInput(e.target.value)}
                    placeholder={isBn ? '১০১' : '101'}
                    className="w-full bg-white border border-slate-200 rounded-xl pl-8 pr-4 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004d34] shadow-2xs"
                  />
                </div>
              </div>

              {/* Search Result Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#004d34] hover:bg-[#003826] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xs hover:shadow cursor-pointer"
                >
                  <Search size={14} />
                  <span>{isBn ? 'ফলাফল দেখুন' : 'Search Result'}</span>
                </button>
              </div>
            </form>
          )}
        </ScrollReveal>
      </div>

      {/* 3. MAIN RESULTS CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <ScrollReveal duration={0.65} distance={30}>
        {/* VIEW 1: Institute Result Table (Matching media_1790108298733.png) */}
        {activeTab === 'institute' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {isBn
                      ? `${toBanglaNum(instClass.replace('Class ', ''))} শ্রেণি প্রাতিষ্ঠানিক ফলাফলের সারাংশ`
                      : `${instClass} Institutional Result Summary`}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    {isBn
                      ? `শিক্ষাবর্ষ: ${toBanglaNum(instSession)} | পরীক্ষা: ${
                          instExam === 'Annual Examination'
                            ? 'বার্ষিক পরীক্ষা'
                            : instExam === 'Half Yearly Examination'
                            ? 'অর্ধ-বার্ষিক পরীক্ষা'
                            : 'নির্বাচনী পরীক্ষা'
                        }`
                      : `Session: ${instSession} | Exam: ${instExam}`}
                  </p>
                </div>
              </div>

              {/* Right Badges */}
              <div className="flex items-center gap-2.5">
                <div className="inline-flex items-center gap-1.5 bg-[#e8f7ee] border border-emerald-100 px-3 py-1.5 rounded-xl text-xs font-bold text-[#059669]">
                  <BarChart3 size={14} />
                  <span>{isBn ? `পাসের হার: ${toBanglaNum('100%')}` : 'Pass Rate: 100%'}</span>
                </div>
                <button
                  type="button"
                  onClick={handlePrintResultSheet}
                  className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer"
                >
                  <Printer size={14} />
                  <span>{isBn ? 'রেজাল্ট শিট প্রিন্ট' : 'Print Result Sheet'}</span>
                </button>
              </div>
            </div>

            {/* Results Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-100">
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'রোল' : 'ROLL'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'শিক্ষার্থীর নাম' : 'STUDENT NAME'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'বিভাগ ও শাখা' : 'GROUP & SEC'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'মোট নম্বর' : 'TOTAL MARKS'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'জিপিএ' : 'GPA'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'গ্রেড' : 'GRADE'}</th>
                    <th className="py-3.5 px-4 sm:px-6">{isBn ? 'স্ট্যাটাস' : 'STATUS'}</th>
                    <th className="py-3.5 px-4 sm:px-6 text-center">{isBn ? 'মার্কশিট' : 'MARKSHEET'}</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {filteredInstituteResults.map((student) => (
                    <tr
                      key={student.roll}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Roll */}
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                        #{isBn ? toBanglaNum(student.roll) : student.roll}
                      </td>

                      {/* Student Name */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${student.avatarColor}`}
                          >
                            {student.avatarLetter}
                          </div>
                          <span className="font-extrabold text-slate-900 leading-tight">
                            {getStudentName(student.name)}
                          </span>
                        </div>
                      </td>

                      {/* Group & Sec */}
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-medium">
                        {getGroupSec(student.groupSec)}
                      </td>

                      {/* Total Marks */}
                      <td className="py-3.5 px-4 sm:px-6 font-extrabold text-[#059669]">
                        {isBn ? toBanglaNum(student.totalMarks) : student.totalMarks}
                      </td>

                      {/* GPA */}
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                        {isBn ? toBanglaNum(student.gpa) : student.gpa}
                      </td>

                      {/* Grade Badge */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#e8f7ee] text-[#059669]">
                          {student.grade}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          <span>{isBn ? 'উত্তীর্ণ' : 'Passed'}</span>
                        </span>
                      </td>

                      {/* Marksheet / Transcript CTA */}
                      <td className="py-3.5 px-4 sm:px-6 text-center">
                        <button
                          type="button"
                          onClick={() => handleSelectStudentTranscript(student)}
                          className="inline-flex items-center gap-1.5 bg-[#e8f7ee] hover:bg-[#d1fae5] text-[#004d34] border border-emerald-200/80 px-3 py-1 rounded-lg text-xs font-bold transition shadow-2xs cursor-pointer"
                        >
                          <FileText size={13} />
                          <span>{isBn ? 'মার্কশিট' : 'Transcript'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note Below Table */}
            <div className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <span className="text-blue-500 font-bold shrink-0">ⓘ</span>
              <span>
                {isBn
                  ? 'বিশেষ দ্রষ্টব্য: এটি প্রাতিষ্ঠানিক ফলাফলের সংক্ষিপ্ত বিবরণ। বিষয়ের বিস্তারিত নম্বর ও গ্রেড দেখতে একক শিক্ষার্থী ফলাফল অপশন ব্যবহার করুন।'
                  : 'Note: This is the institutional result summary. For detailed individual subject marks, please use the Individual Student Result option above.'}
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: Individual Student Result & Marksheet (Matching media_1790108309383.png) */}
        {activeTab === 'individual' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs p-5 sm:p-8 space-y-6">
            {/* Header: Student Identity & Download Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 font-black text-xl flex items-center justify-center shrink-0 shadow-2xs">
                  {activeStudent.avatarLetter}
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#059669] tracking-wider uppercase">
                    {isBn ? 'অফিসিয়াল একাডেমিক ট্রান্সক্রিপ্ট' : 'OFFICIAL ACADEMIC TRANSCRIPT'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    {getStudentName(activeStudent.name)}
                  </h2>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    {isBn
                      ? `রোল: ${toBanglaNum(activeStudent.roll)} | শ্রেণি: ${toBanglaNum(
                          indClass.replace('Class ', '')
                        )} | বিভাগ: ${getGroupSec(activeStudent.group)} | শিক্ষাবর্ষ: ${toBanglaNum(
                          indSession
                        )}`
                      : `Roll: ${activeStudent.roll} | Class: ${indClass.replace(
                          'Class ',
                          ''
                        )} | Group: ${activeStudent.group} | Session: ${indSession}`}
                  </p>
                </div>
              </div>

              {/* Download Transcript Button */}
              <button
                type="button"
                onClick={handleDownloadTranscript}
                className="inline-flex items-center gap-2 bg-[#e8f7ee] hover:bg-[#d1fae5] border border-emerald-300 text-[#004d34] px-4 py-2 rounded-xl text-xs font-bold transition shadow-2xs cursor-pointer self-start sm:self-auto"
              >
                <Download size={15} />
                <span>{isBn ? 'ট্রান্সক্রিপ্ট ডাউনলোড' : 'Download Transcript'}</span>
              </button>
            </div>

            {/* 4 Summary Stat Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Box 1: Total Obtained */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {isBn ? 'মোট প্রাপ্ত নম্বর' : 'Total Obtained'}
                  </div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {isBn ? toBanglaNum(activeStudent.totalMarks) : activeStudent.totalMarks}{' '}
                    <span className="text-xs text-slate-400 font-normal">
                      {isBn ? `(মোট ${toBanglaNum(activeStudent.maxMarks)})` : `out of ${activeStudent.maxMarks}`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 2: GPA */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {isBn ? 'জিপিএ (৫.০০ স্কেল)' : 'GPA (5.00 Scale)'}
                  </div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {isBn ? toBanglaNum(activeStudent.gpa) : activeStudent.gpa}
                  </div>
                </div>
              </div>

              {/* Box 3: Letter Grade */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <Star size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {isBn ? 'লেটার গ্রেড' : 'Letter Grade'}
                  </div>
                  <div className="text-xl font-black text-slate-900 leading-tight">
                    {activeStudent.grade}
                  </div>
                </div>
              </div>

              {/* Box 4: Result Status */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {isBn ? 'ফলাফল স্ট্যাটাস' : 'Result Status'}
                  </div>
                  <div className="text-xl font-black text-emerald-700 leading-tight">
                    {isBn ? 'উত্তীর্ণ' : 'Passed'}
                  </div>
                </div>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-100">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#f4f9f6] text-slate-700 font-bold uppercase tracking-wider text-[11px] border-b border-slate-100">
                    <th className="py-3 px-4 sm:px-6">#</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'বিষয় কোড' : 'Subject Code'}</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'বিষয়ের নাম' : 'Subject Name'}</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'পূর্ণমান' : 'Full Marks'}</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'প্রাপ্ত নম্বর' : 'Obtained Marks'}</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'লেটার গ্রেড' : 'Letter Grade'}</th>
                    <th className="py-3 px-4 sm:px-6">{isBn ? 'গ্রেড পয়েন্ট' : 'Grade Point'}</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {activeStudent.subjects.map((sub, idx) => (
                    <tr key={sub.code} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 text-slate-500 font-bold">
                        {isBn ? toBanglaNum(idx + 1) : idx + 1}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-semibold">
                        {isBn ? toBanglaNum(sub.code) : sub.code}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                        {getSubjectName(sub.name)}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-slate-600">
                        {isBn ? toBanglaNum(sub.fullMarks) : sub.fullMarks}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-extrabold text-[#059669]">
                        {isBn ? toBanglaNum(sub.obtained) : sub.obtained}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#e8f7ee] text-[#059669]">
                          {sub.grade}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-800">
                        {isBn ? toBanglaNum(sub.gpa) : sub.gpa}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note Below Table */}
            <div className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-blue-900 font-medium">
              <span className="text-blue-500 font-bold shrink-0">ⓘ</span>
              <span>
                {isBn
                  ? 'বিশেষ দ্রষ্টব্য: এটি শিক্ষার্থীর একক ফলাফল বিবরণী। শ্রেণিভিত্তিক ফলাফল ও পরিসংখ্যান দেখতে উপরের প্রাতিষ্ঠানিক ফলাফল অপশন নির্বাচন করুন।'
                  : 'Note: This is the individual student result. For class-wise results and detailed statistics, please use the Institute Result option above.'}
              </span>
            </div>
          </div>
        )}
        </ScrollReveal>
      </div>

      {/* 4. Bottom 2 Quick Action Cards (Matching media_1790108298733.png & media_1790108309383.png) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 1: Institute Result */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 flex items-center justify-between gap-4 hover:shadow-xs transition h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0 border border-emerald-100">
                      <Landmark size={20} />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900">
                      {isBn
                        ? (activeTab === 'institute' ? 'প্রাতিষ্ঠানিক ফলাফল' : 'প্রাতিষ্ঠানিক ফলাফল দেখুন')
                        : (activeTab === 'institute' ? 'Institute Result' : 'View Institute Result')}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium max-w-sm">
                    {isBn
                      ? 'শ্রেণিভিত্তিক ফলাফল, বিষয়ভিত্তিক পরিসংখ্যান, পাসের হার ও একাডেমিক অর্জনের বিবরণ দেখুন।'
                      : 'Check class-wise results, subject statistics, pass rates and academic performance summary.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('institute');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004d34] hover:text-emerald-800 transition cursor-pointer"
                  >
                    <span>
                      {isBn
                        ? (activeTab === 'institute' ? 'প্রাতিষ্ঠানিক ফলাফল দেখুন' : 'প্রাতিষ্ঠানিক ফলাফলে যান')
                        : (activeTab === 'institute' ? 'View Institute Result' : 'Go to Institute Result')}
                    </span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                {/* Decorative Minimal Bar Chart Graphic */}
                <div className="hidden sm:flex items-end gap-1.5 h-16 opacity-25 text-emerald-600 shrink-0 pr-4">
                  <div className="w-3 bg-emerald-600 rounded-t h-8" />
                  <div className="w-3 bg-emerald-600 rounded-t h-12" />
                  <div className="w-3 bg-emerald-600 rounded-t h-16" />
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>

          {/* Card 2: Individual Student Result / Search Another Student */}
          <ScrollStaggerItem>
            <HoverCard className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs p-6 flex items-center justify-between gap-4 hover:shadow-xs transition h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <User size={20} />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900">
                      {isBn
                        ? (activeTab === 'institute' ? 'একক শিক্ষার্থী ফলাফল' : 'অন্য শিক্ষার্থীর ফলাফল অনুসন্ধান')
                        : (activeTab === 'institute' ? 'Individual Student Result' : 'Search Another Student')}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium max-w-sm">
                    {isBn
                      ? (activeTab === 'institute'
                          ? 'রোল নম্বর দিয়ে শিক্ষার্থীর পূর্ণাঙ্গ মার্কশিট ও একাডেমিক ট্রান্সক্রিপ্ট দেখুন।'
                          : 'অন্য কোনো শিক্ষার্থীর মার্কশিট দেখতে ভিন্ন রোল নম্বর লিখুন।')
                      : (activeTab === 'institute'
                          ? 'Search and view individual student marksheet and academic transcript.'
                          : "Enter a different roll number to view another student's marksheet.")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('individual');
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer"
                  >
                    <span>
                      {isBn
                        ? (activeTab === 'institute' ? 'শিক্ষার্থীর ফলাফল দেখুন' : 'আবার অনুসন্ধান করুন')
                        : (activeTab === 'institute' ? 'View Student Result' : 'Search Again')}
                    </span>
                    <ArrowRight size={13} />
                  </button>
                </div>

                {/* Decorative Minimal Document / Magnifying Graphic */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-400 opacity-50 shrink-0 mr-4">
                  {activeTab === 'institute' ? <FileText size={30} /> : <Search size={30} />}
                </div>
              </div>
            </HoverCard>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </div>
    </div>
  );
};
