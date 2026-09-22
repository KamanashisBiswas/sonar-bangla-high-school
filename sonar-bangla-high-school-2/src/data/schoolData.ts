export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  subjectCategory: string; // for filtering: 'Science' | 'English' | 'Math' | 'Physics' | 'Bangla' | 'Biology' | 'Islamic Studies' | 'ICT'
  qualifications: string;
  image: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

export interface Leader {
  name: string;
  title: string;
  roleTag: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  type: string;
  image: string;
}

export const SCHOOL_INFO = {
  name: "SOS HERMANN GMEINER SCHOOL KHULNA",
  nameBn: "এস ও এস হারম্যান মেইনার স্কুল খুলনা",
  address: "Gollamari, Khulna - 9208",
  addressBn: "গল্লামারী, খুলনা - ৯২০৮",
  tagline: "A LOVING HOME FOR A BRIGHTER TOMORROW",
  phone: "024-77726775",
  email: "soshgskhu@sos-bangladesh.org",
  eiin: "117188",
  established: "1987",
  logo: "https://soshgskhulna.edu.bd/media/logos/pwBMbDcPDZICD8s6Qth6PeVgtctkHPIXssgMRyZf.png",
  favicon: "https://soshgskhulna.edu.bd/media/logos/NUtfNkRmi06Nt5RS26h6sS7TrSc7OuNIx0Wr261V.png",
  campusImage: "/campus_main.png",
  drHermannGmeinerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&fit=crop&q=80",
};

export const STATS = [
  { value: "1987", label: "Established", sub: "38+ Years of Heritage" },
  { value: "117188+", label: "EIIN Number", sub: "Lives Touched" },
  { value: "25+", label: "Qualified Teachers", sub: "Dedicated Educators" },
  { value: "1200+", label: "Students", sub: "Total Enrolled" },
  { value: "100%", label: "Pass Tradition", sub: "Heart for Children" },
];

export const TEACHERS: Teacher[] = [
  {
    id: "1",
    name: "Indrajit Kumar Mondal",
    designation: "Assistant Teacher",
    subject: "Chemistry / Science",
    subjectCategory: "Science",
    qualifications: "M.Sc (Chemistry), B.Ed",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Mst. Rehana Parveen",
    designation: "Assistant Professor",
    subject: "English",
    subjectCategory: "English",
    qualifications: "MA (English), M.Ed",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Md. Zahirul Haque",
    designation: "Senior Teacher",
    subject: "General & Higher Math",
    subjectCategory: "Math",
    qualifications: "M.Sc (Mathematics), B.Ed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Tanzila Rahman",
    designation: "Senior Teacher",
    subject: "Physics",
    subjectCategory: "Physics",
    qualifications: "M.Sc (Physics), B.Ed",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&fit=crop&q=80",
  },
  {
    id: "5",
    name: "Abdul Karim Sheikh",
    designation: "Assistant Teacher",
    subject: "Bangla Literature",
    subjectCategory: "Bangla",
    qualifications: "MA (Bangla), B.Ed",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
  },
  {
    id: "6",
    name: "Subarna Das",
    designation: "Assistant Teacher",
    subject: "Biology & Environment",
    subjectCategory: "Biology",
    qualifications: "M.Sc (Botany)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
  },
  {
    id: "7",
    name: "Mawlana Md. Saiful Islam",
    designation: "Assistant Teacher",
    subject: "Islamic Studies",
    subjectCategory: "Islamic Studies",
    qualifications: "MA (Islamic Studies)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
  },
  {
    id: "8",
    name: "Engr. Amit Roy",
    designation: "Assistant Teacher",
    subject: "Information Technology",
    subjectCategory: "ICT",
    qualifications: "B.Sc in CSE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
  },
];

export const ADMINISTRATIVE_STAFF: Staff[] = [
  {
    id: "1",
    name: "Md. Rafiqul Islam",
    role: "Office Superintendent",
    email: "office.super@sos-bangladesh.org",
    phone: "01712-112233",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Sumaiya Akter",
    role: "Senior Accountant",
    email: "accounts@sos-bangladesh.org",
    phone: "01713-223344",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Md. Hasanuzzaman",
    role: "Head Librarian",
    email: "library@sos-bangladesh.org",
    phone: "01714-334455",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Rakibul Islam",
    role: "ICT Assistant & Network In-charge",
    email: "ict.support@sos-bangladesh.org",
    phone: "01715-445566",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
  },
];

export const LEADERSHIP = {
  chairman: {
    name: "Maksuda Sultana",
    title: "Chairman",
    roleTag: "CHAIRMAN",
    subtitle: "Project Director, SOS Children's Village Khulna",
    description: "Providing strategic direction and continuous support for the academic and overall development of the school.",
    quote: "SOS Hermann Gmeiner School Khulna is dedicated to delivering exemplary education in a peaceful and supportive environment. We remain committed to nurturing compassionate, confident and responsible citizens.",
    image: "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg",
  },
  principal: {
    name: "Indrajit Kumar Mondal",
    title: "Principal",
    roleTag: "PRINCIPAL",
    subtitle: "Principal & Member Secretary, Governing Body",
    description: "Leading with dedication to foster a safe, inclusive and inspiring learning environment for all students.",
    quote: "Here we believe education is a journey of self-discovery. Our goal is to inspire students to think, learn, and grow into empathetic, capable and future-ready individuals.",
    image: "https://soshgskhulna.edu.bd/media/163/P.sir...jpg",
  }
};

export const GOVERNING_BODY: CommitteeMember[] = [
  {
    id: "1",
    name: "Maksuda Sultana",
    role: "President (Chairman)",
    type: "PRESIDENT",
    image: "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg",
  },
  {
    id: "2",
    name: "Indrajit Kumar Mondal",
    role: "Member Secretary (Acting)",
    type: "MEMBER",
    image: "https://soshgskhulna.edu.bd/media/163/P.sir...jpg",
  },
  {
    id: "3",
    name: "Representative,",
    role: "SOS Children's Village",
    type: "EXECUTIVE MEMBER",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Guardian Member",
    role: "Guardian Representative",
    type: "MEMBER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
  }
];

export const PROGRAMS = [
  {
    id: "1",
    title: "Academic Programs",
    desc: "Strong foundation with modern teaching methods.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&fit=crop&q=80",
    tag: "ACADEMIC",
  },
  {
    id: "2",
    title: "Sports & Athletics",
    desc: "Building discipline through sports and teamwork.",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&fit=crop&q=80",
    tag: "SPORTS",
  },
  {
    id: "3",
    title: "Cultural Activities",
    desc: "Nurturing creativity and talent in every child.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&fit=crop&q=80",
    tag: "CULTURE",
  },
  {
    id: "4",
    title: "Clubs & Societies",
    desc: "Leadership through engagement and service.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&fit=crop&q=80",
    tag: "CLUBS",
  }
];

export const CAMPUS_FACILITIES = [
  {
    title: "Digital Computer Lab",
    desc: "High-speed internet & 30+ PCs",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&fit=crop&q=80",
  },
  {
    title: "Modern Science Lab",
    desc: "Physics, Chemistry, Biology Kits",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&fit=crop&q=80",
  },
  {
    title: "School Library",
    desc: "Wide collection of books & reading corner",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&fit=crop&q=80",
  },
  {
    title: "Green Athletic Grounds",
    desc: "Sports, athletics & co-curricular area",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&fit=crop&q=80",
  }
];

export const CAMPUS_LIFE_PHOTOS = [
  { url: "/campus_main.png", title: "Campus Architecture" },
  { url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600&fit=crop&q=80", title: "Football Match" },
  { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&fit=crop&q=80", title: "Cultural Performance" },
  { url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&fit=crop&q=80", title: "Library Reading" },
  { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&fit=crop&q=80", title: "Science Experiment" },
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&fit=crop&q=80", title: "Award Ceremony" },
];

export const NEWS_EVENTS = [
  { day: "18", month: "SEP", category: "General", title: "Summer Vacation & Holiday Notice", date: "12 Sep 2025" },
  { day: "12", month: "SEP", category: "Exam", title: "SSC Examination 2025 Results Published", date: "10 Sep 2025" },
  { day: "01", month: "SEP", category: "Admission", title: "Online Admission Open for Class 1 (2026)", date: "01 Sep 2025" },
  { day: "28", month: "AUG", category: "Event", title: "International Mother Language Day Celebration", date: "28 Aug 2025" },
];

export const UPCOMING_EVENTS = [
  { day: "20", month: "SEP", title: "Annual Sports & Cultural Program 2025" },
  { day: "05", month: "OCT", title: "Science Fair & Exhibition" },
  { day: "16", month: "OCT", title: "Parents Teachers Meeting" },
  { day: "21", month: "FEB", title: "International Mother Language Day" },
  { day: "01", month: "MAR", title: "Art & Painting Exhibition" },
];
