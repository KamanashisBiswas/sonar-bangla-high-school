export interface Notice {
  id: string;
  title: string;
  date: string;
  type: 'General' | 'Exam' | 'Admission' | 'Event';
  content?: string;
  pdfUrl?: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  image: string;
  qualifications: string;
}

export interface Staff {
  id: string;
  name: string;
  designation: string;
  image: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  image: string;
  type: 'President' | 'Member' | 'Donor';
}

export interface SubjectResult {
  code: string;
  subject: string;
  fullMarks: number;
  obtained: number;
  grade: string;
  gpa: number;
}

export interface Result {
  id: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  roll: string;
  class: string;
  section: string;
  year: string;
  examName: string;
  group: string;
  dob: string;
  gpa: number;
  grade: string;
  status: 'Passed' | 'Failed';
  totalMarks: number;
  subjects: SubjectResult[];
}

export interface Student {
  id: string;
  name: string;
  class: string;
  roll: number;
  section: string;
  image: string;
  group?: string;
  bloodGroup?: string;
  fatherName?: string;
  motherName?: string;
  guardianPhone?: string;
}

export interface AdmissionRequest {
  id: string;
  studentNameBn: string;
  studentNameEn: string;
  dob: string;
  desiredClass: string;
  fatherName: string;
  motherName: string;
  mobile: string;
  nid?: string;
  image?: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submissionDate: string;
}

export interface WebsiteSettings {
  schoolName: string;
  schoolAddress: string;
  eiinCode: string;
  establishedYear: string;
  contactEmail: string;
  contactPhone: string;
  headmasterName: string;
  headmasterMessage: string;
  headmasterImage: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  aboutUsText: string;
}

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface EventImage {
  id: string;
  url: string;
  caption: string;
  date: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Form' | 'Syllabus' | 'Routine' | 'Prospectus';
  date: string;
  size: string;
}