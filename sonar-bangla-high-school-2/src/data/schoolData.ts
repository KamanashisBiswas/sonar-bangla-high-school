export interface EducationItem {
  degree: string;
  institution: string;
  result: string;
  year: string;
}

export interface PublicationItem {
  title: string;
  publisher?: string;
  journal?: string;
  year: string;
  url?: string;
}

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  subject: string;
  subjectCategory: string; // for filtering: 'Science' | 'English' | 'Math' | 'Physics' | 'Bangla' | 'Biology' | 'Islamic Studies' | 'ICT'
  qualifications: string;
  image: string;
  email?: string;
  phone?: string;
  experience?: string;
  studentsMentored?: string;
  bioQuote?: string;
  mottoQuote?: string;
  about?: string;
  officeLocation?: string;
  officeHours?: string;
  professionalQualifications?: string;
  education?: EducationItem[];
  certifications?: string[];
  publications?: PublicationItem[];
  responsibilities?: string[];
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
    image: "https://soshgskhulna.edu.bd/media/163/P.sir...jpg",
    email: "indrajit.mondal@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "08+ Years",
    studentsMentored: "240+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Inspiring analytical curiosity and scientific rigor through practical chemistry experiments and experiential learning.",
    about: "Mr. Indrajit Kumar Mondal is an enthusiastic Chemistry and General Science educator. With extensive laboratory experience and pedagogy certifications, he mentors students to achieve GPA-5.00 in board examinations and guides young innovators at national science fairs.",
    officeLocation: "Science Building, Lab 01",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "B.Ed, Training in Advanced Chemical Safety & Modern STEM Labs",
    education: [
      { degree: "Master of Science (M.Sc) in Chemistry", institution: "Khulna University", result: "First Class", year: "2016" },
      { degree: "Bachelor of Science (B.Sc Hons) in Chemistry", institution: "Khulna University", result: "First Class", year: "2014" },
      { degree: "Bachelor of Education (B.Ed)", institution: "Govt. Teachers' Training College, Khulna", result: "First Class", year: "2018" }
    ],
    certifications: [
      "National Curriculum Science Trainer Certification",
      "Chemical Laboratory Hazardous Waste Safety Protocols",
      "Modern Interactive Classroom Teaching"
    ],
    publications: [
      { title: "Effective Hands-on Chemistry Lab Methodologies for Secondary Level", publisher: "Khulna Science Education Review", year: "2021" }
    ],
    responsibilities: [
      "Chemistry Theory & Practical (Classes 9, 10)",
      "General Science (Classes 7, 8)",
      "Science Club Co-Moderator"
    ]
  },
  {
    id: "2",
    name: "Mst. Rehana Parveen",
    designation: "Assistant Professor",
    subject: "English",
    subjectCategory: "English",
    qualifications: "MA (English), M.Ed",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80",
    email: "rehana.parveen@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "09+ Years",
    studentsMentored: "280+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Dedicated and passionate educator with strong commitment to academic excellence, English communicative competence, and holistic student personality development.",
    about: "Mst. Rehana Parveen is a dedicated Assistant Professor (English) at SOS Hermann Gmeiner School Khulna. She brings a strong academic background and a deep passion for teaching English Literature and Communicative Language skills. Her teaching methodology empowers students with confident public speaking, creative composition, and critical literary appreciation.",
    officeLocation: "Teachers' Room, 2nd Floor, Academic Building",
    officeHours: "Sunday - Thursday: 9:00 AM - 4:00 PM",
    professionalQualifications: "British Council CELT, B.Ed, ICT Integration Trainer",
    education: [
      { degree: "Master of Arts (MA) in English", institution: "University of Dhaka", result: "First Class", year: "2015" },
      { degree: "Bachelor of Arts (BA Hons) in English", institution: "University of Dhaka", result: "First Class", year: "2013" },
      { degree: "Master of Education (M.Ed)", institution: "Institute of Education and Research (IER)", result: "CGPA 3.85", year: "2017" }
    ],
    certifications: [
      "British Council Certificate in English Language Teaching (CELT)",
      "B.Ed, Training in Modern Teaching Methods & Micro-teaching",
      "Certified in ICT Integration in Language Education (TQI-SEP)",
      "Youth Leadership & Debating Coach Certification"
    ],
    publications: [
      { title: "Communicative English Language Teaching Techniques in Rural and Semi-Urban High Schools", publisher: "Bangladesh English Language Teachers Association (BELTA) Journal", year: "2020" },
      { title: "Fostering Creative Writing and Critical Reading Habits among High School Learners", publisher: "Language & Literacy Forum", year: "2022" }
    ],
    responsibilities: [
      "English 1st Paper: Reading Comprehension & Literature (Classes 8, 9, 10)",
      "English 2nd Paper: Applied Grammar & Writing Composition (Classes 9, 10)",
      "Spoken English & English Language Club Facilitation"
    ]
  },
  {
    id: "3",
    name: "Md. Zahirul Haque",
    designation: "Senior Teacher",
    subject: "General & Higher Math",
    subjectCategory: "Math",
    qualifications: "M.Sc (Mathematics), B.Ed",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
    email: "zahirul.haque@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "12+ Years",
    studentsMentored: "350+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Demystifying complex mathematical structures into intuitive logical problem-solving frameworks.",
    about: "Md. Zahirul Haque has served over a decade guiding students in General Mathematics and Higher Mathematics. Known for his patience and structured step-by-step methodologies, his students routinely secure GPA 5.00 in board exams.",
    officeLocation: "Academic Building, Room 204",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "B.Ed, Olympiad Problem Setter & Mathematical Coach",
    education: [
      { degree: "Master of Science (M.Sc) in Applied Mathematics", institution: "University of Rajshahi", result: "First Class", year: "2012" },
      { degree: "Bachelor of Science (B.Sc Hons) in Mathematics", institution: "University of Rajshahi", result: "First Class", year: "2010" }
    ],
    certifications: [
      "Bangladesh Mathematical Olympiad Regional Coach",
      "Secondary Curriculum Assessment Methodology"
    ],
    publications: [
      { title: "Simplifying Trigonometric Formulations for Secondary Learners", publisher: "Bangladesh Math Educators Society", year: "2019" }
    ],
    responsibilities: [
      "Higher Mathematics (Classes 9, 10 Science)",
      "General Mathematics (Classes 8, 10)",
      "Math Olympiad Squad Training"
    ]
  },
  {
    id: "4",
    name: "Tanzila Rahman",
    designation: "Senior Teacher",
    subject: "Physics",
    subjectCategory: "Physics",
    qualifications: "M.Sc (Physics), B.Ed",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&fit=crop&q=80",
    email: "tanzila.rahman@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "10+ Years",
    studentsMentored: "310+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Connecting fundamental physical laws of the universe with real-world technological innovations.",
    about: "Tanzila Rahman is a passionate Physics educator who blends classroom demonstrations with computational simulations. She actively trains students for physics olympiads and science exhibition competitions.",
    officeLocation: "Physics Laboratory, 1st Floor",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "B.Ed, Training in Modern STEM Pedagogy",
    education: [
      { degree: "Master of Science (M.Sc) in Physics", institution: "Jahangirnagar University", result: "First Class", year: "2014" },
      { degree: "Bachelor of Science (B.Sc Hons) in Physics", institution: "Jahangirnagar University", result: "First Class", year: "2012" }
    ],
    certifications: [
      "Advanced Experimental Physics for High School Laboratories",
      "Digital Multimedia Content Developer (A2i)"
    ],
    publications: [
      { title: "Interactive Physics Simulations in Bangladeshi Secondary Classrooms", publisher: "Physics Education Forum", year: "2021" }
    ],
    responsibilities: [
      "Physics Theory & Practicals (Classes 9, 10)",
      "Physics Lab Safety In-Charge",
      "Science Fair Organizing Committee"
    ]
  },
  {
    id: "5",
    name: "Abdul Karim Sheikh",
    designation: "Assistant Teacher",
    subject: "Bangla Literature",
    subjectCategory: "Bangla",
    qualifications: "MA (Bangla), B.Ed",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80",
    email: "info@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "07+ Years",
    studentsMentored: "220+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Passionate about education and dedicated to nurturing young minds. Committed to creating an engaging and inclusive learning environment.",
    about: "Mr. Abdul Karim Sheikh is a dedicated Assistant Teacher at SOS Hermann Gmeiner School Khulna. He brings a strong academic background and a deep passion for teaching Bangla Literature. His teaching approach focuses on student-centered learning and creative expression, helping students build strong language skills and cultural understanding.",
    officeLocation: "Admin Building",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "B.Ed, Training in Modern Teaching Methods",
    education: [
      { degree: "Master of Arts (MA) in Bangla Literature", institution: "University of Rajshahi", result: "First Class", year: "2015" },
      { degree: "Bachelor of Arts (BA Hons) in Bangla", institution: "University of Rajshahi", result: "First Class", year: "2013" },
      { degree: "Bachelor of Education (B.Ed)", institution: "Govt. Teachers' Training College", result: "First Class", year: "2017" }
    ],
    certifications: [
      "NCTB Bangla Curriculum Master Trainer",
      "Creative Writing and Declamation Mentorship",
      "Wall Magazine ('Dewalika') Chief Advisor"
    ],
    publications: [
      { title: "Folk Traditions in Modern Bangla Secondary Curriculum", publisher: "Sahitya Bhabna", year: "2021" }
    ],
    responsibilities: [
      "Bangla 1st Paper: Literature & Poetry (Classes 8, 9, 10)",
      "Bangla 2nd Paper: Grammar & Composition (Classes 9, 10)",
      "School Wall Magazine Editorial In-charge"
    ]
  },
  {
    id: "6",
    name: "Subarna Das",
    designation: "Assistant Teacher",
    subject: "Biology & Environment",
    subjectCategory: "Biology",
    qualifications: "M.Sc (Botany)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
    email: "subarna.das@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "06+ Years",
    studentsMentored: "200+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Cultivating respect for bio-diversity, plant ecology, and sustainable environmental stewardship.",
    about: "Ms. Subarna Das brings extensive botanical research and passionate environmental activism into her biology curriculum, inspiring students to pursue biological sciences and eco-conservation.",
    officeLocation: "Biology Laboratory, Ground Floor",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "Training in Plant Physiology & Practical Microscopy",
    education: [
      { degree: "Master of Science (M.Sc) in Botany", institution: "University of Dhaka", result: "First Class", year: "2017" },
      { degree: "Bachelor of Science (B.Sc Hons) in Botany", institution: "University of Dhaka", result: "First Class", year: "2015" }
    ],
    certifications: [
      "Environmental Sustainability in Schools (IUCN)",
      "Microscopic Dissection & Specimen Preservation"
    ],
    publications: [
      { title: "Plant Diversity of Khulna Coastal Belt: An Educational Case Study", publisher: "Biodiversity Bangladesh", year: "2022" }
    ],
    responsibilities: [
      "Biology Theory & Lab (Classes 9, 10)",
      "General Science (Class 6)",
      "Eco & Nature Conservation Club Lead"
    ]
  },
  {
    id: "7",
    name: "Mawlana Md. Saiful Islam",
    designation: "Assistant Teacher",
    subject: "Islamic Studies",
    subjectCategory: "Islamic Studies",
    qualifications: "MA (Islamic Studies)",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
    email: "saiful.islam@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "11+ Years",
    studentsMentored: "320+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Inculcating profound moral character, honesty, empathy, and universal humanitarian ethics.",
    about: "Mawlana Md. Saiful Islam is a respected teacher of Islamic Studies & Moral Education. He guides students with compassion, emphasizing ethical integrity, interfaith respect, and community service.",
    officeLocation: "Academic Wing, Room 108",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "Kamil (Hadith), Training in Ethics & Moral Pedagogy",
    education: [
      { degree: "Master of Arts (MA) in Islamic Studies", institution: "Islamic University, Kushtia", result: "First Class", year: "2013" },
      { degree: "Bachelor of Arts (BA Hons) in Islamic Studies", institution: "Islamic University, Kushtia", result: "First Class", year: "2011" }
    ],
    certifications: [
      "Moral Education & Character Building in Secondary Schools",
      "Quranic Tajweed & Calligraphy Mastery"
    ],
    publications: [
      { title: "Ethics in Modern Secondary Schooling: An Islamic Perspective", publisher: "Al-Huda Journal", year: "2020" }
    ],
    responsibilities: [
      "Islamic Studies & Moral Education (Classes 6-10)",
      "School Prayer & Assembly Conduct",
      "Social Welfare Activities Coordinator"
    ]
  },
  {
    id: "8",
    name: "Engr. Amit Roy",
    designation: "Assistant Teacher",
    subject: "Information Technology",
    subjectCategory: "ICT",
    qualifications: "B.Sc in CSE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
    email: "amit.roy@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "05+ Years",
    studentsMentored: "190+",
    mottoQuote: "Education is the foundation for a brighter tomorrow.",
    bioQuote: "Empowering students with 21st-century digital literacy, algorithm design, and coding confidence.",
    about: "Engr. Amit Roy manages the school ICT computer lab and delivers computer science coursework across Classes 6 to 10. He mentors students in robotics, web development basics, and Python programming.",
    officeLocation: "ICT Computer Lab, 1st Floor",
    officeHours: "Sunday - Thursday: 8:00 AM - 4:00 PM",
    professionalQualifications: "Cisco Certified Network Associate (CCNA), Python Certified",
    education: [
      { degree: "Bachelor of Science (B.Sc) in Computer Science & Engineering", institution: "Khulna University of Engineering & Technology (KUET)", result: "First Class", year: "2019" }
    ],
    certifications: [
      "Robotics & Embedded Systems Trainer",
      "Cyber Safety & Digital Ethics for Youth",
      "A2i Digital Content Developer"
    ],
    publications: [
      { title: "Introducing Practical Computational Thinking in High Schools", publisher: "TechEd Review", year: "2023" }
    ],
    responsibilities: [
      "ICT Theory & Lab Work (Classes 6-10)",
      "Science & ICT Club Moderator",
      "School Web Portal & IT Systems Administration"
    ]
  }
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

export const LEADERSHIP_PROFILES: Record<string, Teacher> = {
  chairman: {
    id: "chairman",
    name: "Maksuda Sultana",
    designation: "Chairman, Governing Body",
    subject: "School Governance & Administration",
    subjectCategory: "Administration",
    qualifications: "MSS (Social Sciences), Child Development Leadership",
    image: "https://soshgskhulna.edu.bd/media/180/Picture_PP.jpg",
    email: "chairman@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "15+ Years",
    studentsMentored: "1200+ Students",
    mottoQuote: "Dedicated to delivering exemplary education in a peaceful and supportive environment.",
    bioQuote: "Nurturing compassionate, confident and responsible future-ready citizens through holistic education and care.",
    about: "Maksuda Sultana serves as the Project Director of SOS Children's Village Khulna and Chairman of the School Governing Body. With over 15 years of dedicated leadership in child welfare, educational governance, and institution building, she provides strategic direction to ensure that every student at SOS Hermann Gmeiner School Khulna thrives academically, socially, and emotionally.",
    officeLocation: "Administrative Wing, Office of the Chairman",
    officeHours: "Sunday - Thursday: 9:00 AM - 4:00 PM",
    professionalQualifications: "Executive Leadership in Child Protection & Educational Institution Governance",
    education: [
      { degree: "Master of Social Sciences (MSS)", institution: "University of Dhaka", result: "First Class", year: "2008" },
      { degree: "Bachelor of Social Sciences (BSS Hons)", institution: "University of Dhaka", result: "First Class", year: "2006" }
    ],
    certifications: [
      "Child Rights & Holistic Development Leadership - SOS Kinderdorf International",
      "Strategic Governance & Educational Leadership Certification",
      "Institutional Child Safeguarding & Safety Management"
    ],
    publications: [
      { title: "Empowering Underprivileged Children Through Community Learning Models", journal: "Journal of Child Welfare & Education", year: "2021" },
      { title: "Strengthening Primary and Secondary Education in Suburban Bangladesh", journal: "Educational Leadership Review", year: "2018" }
    ],
    responsibilities: [
      "Chairman, School Governing Body",
      "Project Director, SOS Children's Village Khulna",
      "Strategic Policy Formation and Institutional Development",
      "Safeguarding & Student Welfare Oversight"
    ]
  },
  principal: {
    id: "principal",
    name: "Indrajit Kumar Mondal",
    designation: "Principal & Member Secretary",
    subject: "Institutional Leadership & Science",
    subjectCategory: "Administration",
    qualifications: "M.Sc, B.Ed (Advanced Educational Management)",
    image: "https://soshgskhulna.edu.bd/media/163/P.sir...jpg",
    email: "principal@soshgskhulna.edu.bd",
    phone: "024-77726775",
    experience: "18+ Years",
    studentsMentored: "3000+ Students",
    mottoQuote: "Education is a journey of self-discovery, character building, and academic excellence.",
    bioQuote: "Inspiring students to think, learn, and grow into empathetic, capable and future-ready individuals.",
    about: "Mr. Indrajit Kumar Mondal serves as the Principal and Member Secretary of the Governing Body at SOS Hermann Gmeiner School Khulna. A veteran educator and academic administrator with over 18 years of service, he has steered the institution towards consistent 100% SSC pass rates and national recognitions. His student-centric philosophy emphasizes intellectual rigor, moral values, and inclusive learning.",
    officeLocation: "Main Administration Building, Principal's Secretariat",
    officeHours: "Sunday - Thursday: 8:30 AM - 4:30 PM",
    professionalQualifications: "Advanced Institutional Management, Secondary Curriculum Specialist, STEM Pedagogy",
    education: [
      { degree: "Master of Science (M.Sc)", institution: "Khulna University", result: "First Class", year: "2006" },
      { degree: "Bachelor of Education (B.Ed)", institution: "Teachers' Training College", result: "Distinction", year: "2008" },
      { degree: "Bachelor of Science (B.Sc Hons)", institution: "Khulna University", result: "First Class", year: "2004" }
    ],
    certifications: [
      "National Curriculum & Textbook Board (NCTB) Master Trainer",
      "Continuous Assessment & Modern Pedagogy (Ministry of Education)",
      "Digital Classroom Management & ICT in Secondary Education"
    ],
    publications: [
      { title: "Innovative Methodologies in Science Education for High Schools", journal: "Bangladesh Journal of Secondary Education", year: "2020" },
      { title: "Fostering Critical Thinking and Creativity in School Curricula", journal: "National Education Review", year: "2022" }
    ],
    responsibilities: [
      "Principal & Academic Head of the Institution",
      "Member Secretary, School Governing Body",
      "Supervision of Teaching Faculty & Academic Affairs",
      "Liaison with Education Board and Directorate of Secondary Education"
    ]
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
  { url: "/gallery/album_sports.jpg", title: "Annual Athletic Meet" },
  { url: "/gallery/album_fair.jpg", title: "Cultural Festival & Fair" },
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
