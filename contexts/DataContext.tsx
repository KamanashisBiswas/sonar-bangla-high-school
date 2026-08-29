import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  Notice, Teacher, Staff, CommitteeMember, Student, 
  EventImage, DownloadItem, AdmissionRequest, WebsiteSettings, Result 
} from '../types';
import { 
  MOCK_NOTICES, TEACHERS, OFFICE_STAFF, COMMITTEE_MEMBERS, 
  MOCK_STUDENTS, GALLERY_IMAGES, DOWNLOAD_ITEMS, SCHOOL_NAME,
  SCHOOL_ADDRESS, EIIN_CODE, ESTABLISHED_YEAR
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

// Helper to load from localStorage
const loadData = <T,>(key: string, defaultData: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultData;
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
  const [results, setResults] = useState<Result[]>(loadData('results', []));
  const [admissionRequests, setAdmissionRequests] = useState<AdmissionRequest[]>(loadData('admissionRequests', []));

  const defaultSettings: WebsiteSettings = {
    schoolName: SCHOOL_NAME,
    schoolAddress: SCHOOL_ADDRESS,
    eiinCode: EIIN_CODE,
    establishedYear: ESTABLISHED_YEAR,
    contactEmail: 'info@sonarbanglahighschool.edu.bd',
    contactPhone: '+880 1234 567890',
    headmasterName: TEACHERS.find(t => t.designation === 'প্রধান শিক্ষক')?.name || 'প্রধান শিক্ষক',
    headmasterMessage: 'সম্মানিত অভিভাবক ও প্রিয় শিক্ষার্থীবৃন্দ, আসসালামু আলাইকুম। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মেধা বিকাশের পাশাপাশি তাদের নৈতিক ও মানবিক গুণাবলী সম্পন্ন সুনাগরিক হিসেবে গড়ে তোলা।',
    headmasterImage: TEACHERS.find(t => t.designation === 'প্রধান শিক্ষক')?.image || 'https://picsum.photos/200/200',
    heroTitle: 'জ্ঞানের আলোয় উদ্ভাসিত আগামীর প্রজন্ম',
    heroSubtitle: 'আদর্শ মানুষ গড়ার কারিগর আমাদের এই বিদ্যাপীঠ। শিক্ষার পরিবেশ ও মান উন্নয়নে আমরা অঙ্গীকারবদ্ধ।',
    heroImage: 'https://picsum.photos/1600/900?grayscale&blur=2',
    aboutUsText: 'সোনার বাংলা উচ্চ বিদ্যালয় একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। আমরা বিশ্বাস করি শিক্ষাই জাতির মেরুদণ্ড। আমাদের লক্ষ্য হলো শিক্ষার্থীদের মেধা বিকাশের পাশাপাশি তাদের নৈতিক ও মানবিক গুণাবলী সম্পন্ন সুনাগরিক হিসেবে গড়ে তোলা। বর্তমান তথ্য প্রযুক্তির যুগে নিজেকে যোগ্য করে গড়ে তুলতে পাঠ্যপুস্তকের পাশাপাশি প্রযুক্তিগত জ্ঞান অর্জন অপরিহার্য। আমাদের বিদ্যালয়ে রয়েছে আধুনিক ল্যাব ও অভিজ্ঞ শিক্ষক মণ্ডলী।'
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

  // Actions
  const addNotice = (notice: Notice) => setNotices([notice, ...notices]);
  const deleteNotice = (id: string) => setNotices(notices.filter(n => n.id !== id));

  const addTeacher = (teacher: Teacher) => setTeachers([...teachers, teacher]);
  const deleteTeacher = (id: string) => setTeachers(teachers.filter(t => t.id !== id));

  const addStaff = (s: Staff) => setStaff([...staff, s]);
  const deleteStaff = (id: string) => setStaff(staff.filter(s => s.id !== id));

  const addStudent = (student: Student) => setStudents([...students, student]);
  const deleteStudent = (id: string) => setStudents(students.filter(s => s.id !== id));

  const submitAdmission = (req: AdmissionRequest) => setAdmissionRequests([...admissionRequests, req]);
  const updateAdmissionStatus = (id: string, status: 'Approved' | 'Rejected') => {
    setAdmissionRequests(prev => prev.map(req => req.id === id ? { ...req, status } : req));
    
    // Auto-add to student list if approved
    if (status === 'Approved') {
      const request = admissionRequests.find(r => r.id === id);
      if (request) {
        const newStudent: Student = {
          id: Date.now().toString(),
          name: request.studentNameBn,
          class: request.desiredClass.split(' ')[0], // Extract class name
          roll: 0, // Placeholder, admin should edit later
          section: 'ক', // Default
          image: request.image || 'https://picsum.photos/200',
          fatherName: request.fatherName,
          motherName: request.motherName,
          guardianPhone: request.mobile,
          group: request.desiredClass.includes('বিজ্ঞান') ? 'বিজ্ঞান' : request.desiredClass.includes('ব্যবসায়') ? 'ব্যবসায় শিক্ষা' : request.desiredClass.includes('মানবিক') ? 'মানবিক' : undefined 
        };
        addStudent(newStudent);
      }
    }
  };

  const addResult = (result: Result) => setResults([...results, result]);
  const deleteResult = (id: string) => setResults(results.filter(r => r.id !== id));

  const addCommitteeMember = (m: CommitteeMember) => setCommittee([...committee, m]);
  const deleteCommitteeMember = (id: string) => setCommittee(committee.filter(c => c.id !== id));

  const addGalleryImage = (img: EventImage) => setGallery([...gallery, img]);
  const deleteGalleryImage = (id: string) => setGallery(gallery.filter(g => g.id !== id));

  const addDownload = (item: DownloadItem) => setDownloads([...downloads, item]);
  const deleteDownload = (id: string) => setDownloads(downloads.filter(d => d.id !== id));

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