import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  Notice, Teacher, Staff, CommitteeMember, Student, 
  EventImage, DownloadItem, AdmissionRequest, WebsiteSettings, Result 
} from '../types';
import { 
  MOCK_NOTICES, TEACHERS, OFFICE_STAFF, COMMITTEE_MEMBERS, 
  MOCK_STUDENTS, GALLERY_IMAGES, DOWNLOAD_ITEMS, SCHOOL_NAME,
  SCHOOL_ADDRESS, EIIN_CODE, ESTABLISHED_YEAR, SCHOOL_LOGO
} from '../constants';

interface DataContextType {
  notices: Notice[];
  addNotice: (notice: Notice) => void;
  deleteNotice: (id: string) => void;
  
  teachers: Teacher[];
  addTeacher: (teacher: Teacher) => void;
  deleteTeacher: (id: string) => void;

  staff: Staff[];
  addStaff: (staff: Staff) => void;
  deleteStaff: (id: string) => void;

  students: Student[];
  addStudent: (student: Student) => void;
  deleteStudent: (id: string) => void;

  admissionRequests: AdmissionRequest[];
  submitAdmission: (request: AdmissionRequest) => void;
  updateAdmissionStatus: (id: string, status: 'Approved' | 'Rejected') => void;

  results: Result[];
  addResult: (result: Result) => void;
  deleteResult: (id: string) => void;

  committee: CommitteeMember[];
  addCommitteeMember: (member: CommitteeMember) => void;
  deleteCommitteeMember: (id: string) => void;

  gallery: EventImage[];
  addGalleryImage: (image: EventImage) => void;
  deleteGalleryImage: (id: string) => void;

  downloads: DownloadItem[];
  addDownload: (item: DownloadItem) => void;
  deleteDownload: (id: string) => void;

  settings: WebsiteSettings;
  updateSettings: (settings: WebsiteSettings) => void;
}

const DataContext = createContext<DataContextType>(null!);

const CURRENT_DATA_VERSION = 'v9_soshgs_more_notices_scroll';

// Clean outdated localStorage data on version mismatch
if (typeof window !== 'undefined') {
  try {
    const version = localStorage.getItem('soshgs_data_version');
    if (version !== CURRENT_DATA_VERSION) {
      localStorage.clear();
      localStorage.setItem('soshgs_data_version', CURRENT_DATA_VERSION);
    }
  } catch (e) {
    // ignore
  }
}

const loadData = <T,>(key: string, defaultData: T): T => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return defaultData;
    const parsed = JSON.parse(saved);
    if (key === 'notices' && Array.isArray(parsed)) {
      const mockMap = new Map((defaultData as Notice[]).map(n => [n.id, n]));
      return parsed.map((item: Notice) => {
        const mockItem = mockMap.get(item.id);
        if (mockItem) {
          return {
            ...item,
            titleEn: item.titleEn || mockItem.titleEn,
            contentEn: item.contentEn || mockItem.contentEn
          };
        }
        return item;
      }) as unknown as T;
    }
    if (key === 'gallery' && Array.isArray(parsed)) {
      const mockMap = new Map((defaultData as EventImage[]).map(g => [g.id, g]));
      const existingUrls = new Set(parsed.map((g: EventImage) => g.url));
      const newItems = (defaultData as EventImage[]).filter(g => !existingUrls.has(g.url));
      
      const updatedExisting = parsed.map((item: EventImage) => {
        const mockItem = mockMap.get(item.id);
        if (mockItem) {
          return {
            ...item,
            photos: (item.photos && item.photos.length > 1) ? item.photos : mockItem.photos,
            caption: item.caption || mockItem.caption,
            category: item.category || mockItem.category
          };
        }
        return item;
      });

      return [...newItems, ...updatedExisting] as unknown as T;
    }
    return parsed as unknown as T;
  } catch (e) {
    return defaultData;
  }
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notices, setNotices] = useState<Notice[]>(loadData('notices', MOCK_NOTICES));
  const [teachers, setTeachers] = useState<Teacher[]>(loadData('teachers', TEACHERS));
  const [staff, setStaff] = useState<Staff[]>(loadData('staff', OFFICE_STAFF));
  const [students, setStudents] = useState<Student[]>(loadData('students', MOCK_STUDENTS));
  const [committee, setCommittee] = useState<CommitteeMember[]>(loadData('committee', COMMITTEE_MEMBERS));
  const [gallery, setGallery] = useState<EventImage[]>(loadData('gallery', GALLERY_IMAGES));
  const [downloads, setDownloads] = useState<DownloadItem[]>(loadData('downloads', DOWNLOAD_ITEMS));
  const [results, setResults] = useState<Result[]>(loadData('results', [
    {
      id: 'res-1',
      studentName: 'আব্দুল্লাহ আল মামুন',
      roll: '101',
      class: '10',
      year: '2025',
      examName: 'বার্ষিক পরীক্ষা ২০২৪',
      totalMarks: 672,
      gpa: 5.00,
      grade: 'A+',
      status: 'Passed',
      fatherName: 'মোঃ রফিকুল ইসলাম',
      subjects: [
        { code: '101', subject: 'বাংলা (আবশ্যিক)', fullMarks: 100, obtained: 88, grade: 'A+', gpa: 5.0 },
        { code: '107', subject: 'ইংরেজি (আবশ্যিক)', fullMarks: 100, obtained: 84, grade: 'A+', gpa: 5.0 },
        { code: '109', subject: 'গণিত (সাধারণ)', fullMarks: 100, obtained: 95, grade: 'A+', gpa: 5.0 },
        { code: '136', subject: 'পদার্থবিজ্ঞান', fullMarks: 100, obtained: 92, grade: 'A+', gpa: 5.0 },
        { code: '137', subject: 'রসায়ন', fullMarks: 100, obtained: 86, grade: 'A+', gpa: 5.0 },
        { code: '138', subject: 'জীববিজ্ঞান', fullMarks: 100, obtained: 89, grade: 'A+', gpa: 5.0 },
        { code: '154', subject: 'তথ্য ও যোগাযোগ প্রযুক্তি (ICT)', fullMarks: 50, obtained: 48, grade: 'A+', gpa: 5.0 },
      ]
    }
  ]));
  const [admissionRequests, setAdmissionRequests] = useState<AdmissionRequest[]>(loadData('admissionRequests', []));

  const defaultSettings: WebsiteSettings = {
    schoolName: SCHOOL_NAME,
    schoolAddress: SCHOOL_ADDRESS,
    eiinCode: EIIN_CODE,
    establishedYear: ESTABLISHED_YEAR,
    contactEmail: 'soshgskhu@sos-bangladesh.org',
    contactPhone: '024-77726775',
    schoolLogo: SCHOOL_LOGO,
    headmasterName: 'ইন্দ্রজিৎ কুমার মন্ডল',
    headmasterMessage: `এস ও এস হারম্যান মেইনার স্কুল খুলনা মানসম্মত শিক্ষা নিশ্চিতকরণের প্রতিশ্রুতি নিয়ে ১৯৮৭ সালে প্রতিষ্ঠিত হয়। বিদ্যালয়টি পরিচালনায় রয়েছে দক্ষ গভর্নিং বডি ও প্রশিক্ষণপ্রাপ্ত নিবেদিতপ্রাণ শিক্ষকবৃন্দ।

বিদ্যালয়ে শিক্ষার্থীবান্ধব ও আনন্দময় পাঠদান উপযোগী পরিবেশ নিশ্চিত করা হয়েছে। শিক্ষক, শিক্ষার্থী, অভিভাবক ও শুভানুধ্যায়ীদের সহযোগিতায় নৈতিক মূল্যবোধসম্পন্ন, সৎ, যোগ্য, দক্ষ ও দেশপ্রেমিক মানবসম্পদ সৃষ্টিই আমাদের মূল লক্ষ্য।`,
    headmasterImage: 'https://soshgskhulna.edu.bd/media/163/P.sir...jpg',
    chairmanName: 'মাকসুদা সুলতানা',
    chairmanTitle: 'সভাপতি (Chairman) ও প্রকল্প পরিচালক, এস ও এস চিলড্রেন্স ভিলেজ খুলনা',
    chairmanImage: 'https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg',
    chairmanMessage: `এস ও এস হারম্যান মেইনার স্কুল খুলনা এস ও এস চিলড্রেন্স ভিলেজ খুলনার সবুজ আঙিনায় প্রতিষ্ঠিত। মানসম্মত শিক্ষা ও শিক্ষার পরিবেশ নিশ্চিত করার লক্ষ্যে বিদ্যালয়টি প্রতিষ্ঠিত।

বিদ্যালয়ের সার্বিক কার্যক্রম পরিচালিত হচ্ছে সেই অভিলক্ষ্যে। শিক্ষার্থীদের মানবিক চেতনায় উদ্বুদ্ধ করতে সহপাঠ্যক্রম চর্চার প্রতি বিশেষ গুরুত্বারোপ করা হয়। দেশপ্রেমিক মানবসম্পদ সৃষ্টির লক্ষ্যে বিদ্যালয়ের কর্মপরিকল্পনা সংশোধিত হয়ে থাকে। দক্ষ শিক্ষকমণ্ডলী, শিক্ষার্থীবান্ধব পরিবেশ ও শিশু সুরক্ষা নীতিমালা অনুসরণের মাধ্যমে শিক্ষার্থী ও শিক্ষকের প্রীতিমধুর সম্পর্ক বিদ্যালয়ের ঐতিহ্য।`,
    heroTitle: 'শিক্ষা • শৃঙ্খলা • সততা — আলোকিত ভবিষ্যতের অঙ্গীকার',
    heroSubtitle: '১৯৮৭ সাল থেকে মানসম্মত শিক্ষা, সুশৃঙ্খল পরিবেশ ও আধুনিক মাল্টিমিডিয়া ক্লাসরুমের মাধ্যমে ভবিষ্যৎ প্রজন্ম গড়ে তোলাই আমাদের লক্ষ্য।',
    heroImage: 'https://soshgskhulna.edu.bd/media/158/Slider-3.jpeg',
    aboutUsText: `The very name of the School bears the name of the founder father of SOS Children's Village International, Dr. Hermann Gmeiner. The School was established in 1987 with a view to imparting quality education to the Students of both inside and outside of the SOS Children's Village, Khulna.

The main criteria for entry is merit, discipline and Integrity. The motto of the school is "Honesty is education, education is peace and peace is progress." The institution follows the normal syllabus of National Text Book Board and Education Board, Jessore. The medium of instruction is Bengali but the School gives special emphasis on English. The Classes range from Prep-1 to Class X.

The School emphasizes on liberal education. It provides an environment that helps the students grow individually. It also offers an extensive range of extra-curricular activities.`
  };
  const [settings, setSettings] = useState<WebsiteSettings>(loadData('settings', defaultSettings));

  // Save to localStorage whenever state changes
  useEffect(() => { localStorage.setItem('notices', JSON.stringify(notices)); }, [notices]);
  useEffect(() => { localStorage.setItem('teachers', JSON.stringify(teachers)); }, [teachers]);
  useEffect(() => { localStorage.setItem('staff', JSON.stringify(staff)); }, [staff]);
  useEffect(() => { localStorage.setItem('students', JSON.stringify(students)); }, [students]);
  useEffect(() => { localStorage.setItem('committee', JSON.stringify(committee)); }, [committee]);
  useEffect(() => { localStorage.setItem('gallery', JSON.stringify(gallery)); }, [gallery]);
  useEffect(() => { localStorage.setItem('downloads', JSON.stringify(downloads)); }, [downloads]);
  useEffect(() => { localStorage.setItem('results', JSON.stringify(results)); }, [results]);
  useEffect(() => { localStorage.setItem('admissionRequests', JSON.stringify(admissionRequests)); }, [admissionRequests]);
  useEffect(() => { localStorage.setItem('settings', JSON.stringify(settings)); }, [settings]);

  const addNotice = (notice: Notice) => setNotices(prev => [notice, ...prev]);
  const deleteNotice = (id: string) => setNotices(prev => prev.filter(n => n.id !== id));

  const addTeacher = (teacher: Teacher) => setTeachers(prev => [...prev, teacher]);
  const deleteTeacher = (id: string) => setTeachers(prev => prev.filter(t => t.id !== id));

  const addStaff = (s: Staff) => setStaff(prev => [...prev, s]);
  const deleteStaff = (id: string) => setStaff(prev => prev.filter(s => s.id !== id));

  const addStudent = (student: Student) => setStudents(prev => [...prev, student]);
  const deleteStudent = (id: string) => setStudents(prev => prev.filter(s => s.id !== id));

  const submitAdmission = (request: AdmissionRequest) => setAdmissionRequests(prev => [request, ...prev]);
  const updateAdmissionStatus = (id: string, status: 'Approved' | 'Rejected') => {
    setAdmissionRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
  };

  const addResult = (res: Result) => setResults(prev => [res, ...prev]);
  const deleteResult = (id: string) => setResults(prev => prev.filter(r => r.id !== id));

  const addCommitteeMember = (member: CommitteeMember) => setCommittee(prev => [...prev, member]);
  const deleteCommitteeMember = (id: string) => setCommittee(prev => prev.filter(c => c.id !== id));

  const addGalleryImage = (img: EventImage) => setGallery(prev => [...prev, img]);
  const deleteGalleryImage = (id: string) => setGallery(prev => prev.filter(g => g.id !== id));

  const addDownload = (item: DownloadItem) => setDownloads(prev => [...prev, item]);
  const deleteDownload = (id: string) => setDownloads(prev => prev.filter(d => d.id !== id));

  const updateSettings = (newSettings: WebsiteSettings) => setSettings(newSettings);

  return (
    <DataContext.Provider value={{
      notices, addNotice, deleteNotice,
      teachers, addTeacher, deleteTeacher,
      staff, addStaff, deleteStaff,
      students, addStudent, deleteStudent,
      admissionRequests, submitAdmission, updateAdmissionStatus,
      results, addResult, deleteResult,
      committee, addCommitteeMember, deleteCommitteeMember,
      gallery, addGalleryImage, deleteGalleryImage,
      downloads, addDownload, deleteDownload,
      settings, updateSettings
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
