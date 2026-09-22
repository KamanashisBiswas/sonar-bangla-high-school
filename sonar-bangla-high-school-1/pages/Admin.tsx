import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  LayoutDashboard, Users, FileText, ImagePlus, LogOut, 
  Plus, Trash2, Edit, Save, Download, Search, UserCog,
  GraduationCap, Briefcase, Bell, Menu, X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  MOCK_NOTICES, TEACHERS, OFFICE_STAFF, 
  COMMITTEE_MEMBERS, MOCK_STUDENTS, GALLERY_IMAGES, DOWNLOAD_ITEMS 
} from '../constants';
import { Notice, Teacher, Staff, CommitteeMember, Student, EventImage, DownloadItem } from '../types';

// Mock Data for Charts
const attendanceData = [
  { name: 'Jan', attendance: 85 },
  { name: 'Feb', attendance: 88 },
  { name: 'Mar', attendance: 92 },
  { name: 'Apr', attendance: 80 },
  { name: 'May', attendance: 85 },
  { name: 'Jun', attendance: 90 },
];

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Local State for Data Management (Simulating Database) ---
  const [notices, setNotices] = useState<Notice[]>(MOCK_NOTICES);
  const [teachers, setTeachers] = useState<Teacher[]>(TEACHERS);
  const [staff, setStaff] = useState<Staff[]>(OFFICE_STAFF);
  const [committee, setCommittee] = useState<CommitteeMember[]>(COMMITTEE_MEMBERS);
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [downloads, setDownloads] = useState<DownloadItem[]>(DOWNLOAD_ITEMS);
  const [gallery, setGallery] = useState<EventImage[]>(GALLERY_IMAGES);

  // --- Delete Handlers (Mock) ---
  const handleDelete = (id: string, type: string) => {
    if(!window.confirm('আপনি কি নিশ্চিত যে আপনি এটি মুছে ফেলতে চান?')) return;
    
    switch(type) {
      case 'notice': setNotices(notices.filter(i => i.id !== id)); break;
      case 'teacher': setTeachers(teachers.filter(i => i.id !== id)); break;
      case 'staff': setStaff(staff.filter(i => i.id !== id)); break;
      case 'committee': setCommittee(committee.filter(i => i.id !== id)); break;
      case 'student': setStudents(students.filter(i => i.id !== id)); break;
      case 'download': setDownloads(downloads.filter(i => i.id !== id)); break;
      case 'gallery': setGallery(gallery.filter(i => i.id !== id)); break;
    }
  };

  const handleLogout = () => {
    navigate('/admin-login');
  };

  // --- Render Functions for Each Section ---

  const renderDashboard = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Stats Cards */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-blue-500">
           <h4 className="text-3xl font-bold text-gray-800">{students.length}</h4>
           <p className="text-gray-500 text-sm">মোট শিক্ষার্থী</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-green-500">
           <h4 className="text-3xl font-bold text-gray-800">{teachers.length + staff.length}</h4>
           <p className="text-gray-500 text-sm">শিক্ষক ও স্টাফ</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-purple-500">
           <h4 className="text-3xl font-bold text-gray-800">{notices.length}</h4>
           <p className="text-gray-500 text-sm">প্রকাশিত নোটিশ</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-l-4 border-l-orange-500">
           <h4 className="text-3xl font-bold text-gray-800">৯৮%</h4>
           <p className="text-gray-500 text-sm">উপস্থিতির হার</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <FileText size={20} />
          <h3 className="text-lg font-bold">শিক্ষার্থী উপস্থিতি (২০২৪)</h3>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="attendance" fill="#22c55e" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
         <h3 className="text-lg font-bold text-gray-700 mb-4">দ্রুত অ্যাকশন</h3>
         <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setActiveTab('notices')} className="p-4 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition flex flex-col items-center gap-2">
               <Bell size={24}/> <span>নোটিশ যোগ করুন</span>
            </button>
            <button onClick={() => setActiveTab('students')} className="p-4 bg-green-50 text-green-700 rounded hover:bg-green-100 transition flex flex-col items-center gap-2">
               <Users size={24}/> <span>শিক্ষার্থী ভর্তি</span>
            </button>
            <button onClick={() => setActiveTab('downloads')} className="p-4 bg-orange-50 text-orange-700 rounded hover:bg-orange-100 transition flex flex-col items-center gap-2">
               <Download size={24}/> <span>ফাইল আপলোড</span>
            </button>
            <button onClick={() => setActiveTab('gallery')} className="p-4 bg-pink-50 text-pink-700 rounded hover:bg-pink-100 transition flex flex-col items-center gap-2">
               <ImagePlus size={24}/> <span>গ্যালারি আপডেট</span>
            </button>
         </div>
      </div>
    </div>
  );

  const renderNotices = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        <h3 className="font-bold text-gray-700">নোটিশ তালিকা</h3>
        <button className="bg-school-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-school-700">
          <Plus size={16}/> নতুন নোটিশ
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase border-b">
            <tr>
              <th className="p-4">তারিখ</th>
              <th className="p-4">শিরোনাম</th>
              <th className="p-4">ধরন</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {notices.map(notice => (
              <tr key={notice.id} className="hover:bg-gray-50">
                <td className="p-4">{notice.date}</td>
                <td className="p-4 font-medium">{notice.title}</td>
                <td className="p-4"><span className="bg-gray-100 px-2 py-1 rounded text-xs">{notice.type}</span></td>
                <td className="p-4 flex justify-end gap-2">
                  <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16}/></button>
                  <button onClick={() => handleDelete(notice.id, 'notice')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="space-y-6 animate-fade-in">
       {/* Teachers Section */}
       <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-gray-700 flex items-center gap-2"><GraduationCap size={18}/> শিক্ষক তালিকা</h3>
          <button className="bg-school-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-school-700">
            <Plus size={16}/> শিক্ষক যোগ করুন
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase border-b">
              <tr>
                <th className="p-4">ছবি</th>
                <th className="p-4">নাম</th>
                <th className="p-4">পদবি</th>
                <th className="p-4">বিষয়</th>
                <th className="p-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {teachers.map(t => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="p-4"><img src={t.image} alt="" className="w-8 h-8 rounded-full object-cover"/></td>
                  <td className="p-4 font-medium">{t.name}</td>
                  <td className="p-4">{t.designation}</td>
                  <td className="p-4">{t.subject}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16}/></button>
                    <button onClick={() => handleDelete(t.id, 'teacher')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Staff Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-gray-700 flex items-center gap-2"><Briefcase size={18}/> অফিস স্টাফ</h3>
          <button className="bg-gray-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-gray-700">
            <Plus size={16}/> স্টাফ যোগ করুন
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase border-b">
              <tr>
                <th className="p-4">ছবি</th>
                <th className="p-4">নাম</th>
                <th className="p-4">পদবি</th>
                <th className="p-4 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staff.map(s => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="p-4"><img src={s.image} alt="" className="w-8 h-8 rounded-full object-cover"/></td>
                  <td className="p-4 font-medium">{s.name}</td>
                  <td className="p-4">{s.designation}</td>
                  <td className="p-4 flex justify-end gap-2">
                    <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16}/></button>
                    <button onClick={() => handleDelete(s.id, 'staff')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCommittee = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        <h3 className="font-bold text-gray-700">ম্যানেজিং কমিটি</h3>
        <button className="bg-school-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-school-700">
          <Plus size={16}/> সদস্য যোগ করুন
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase border-b">
            <tr>
              <th className="p-4">নাম</th>
              <th className="p-4">পদবি</th>
              <th className="p-4">সদস্যের ধরন</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {committee.map(c => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium flex items-center gap-3">
                  <img src={c.image} className="w-8 h-8 rounded-full" alt=""/>
                  {c.name}
                </td>
                <td className="p-4">{c.position}</td>
                <td className="p-4"><span className="bg-gray-100 px-2 py-1 rounded text-xs">{c.type}</span></td>
                <td className="p-4 flex justify-end gap-2">
                  <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16}/></button>
                  <button onClick={() => handleDelete(c.id, 'committee')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50">
        <div className="flex items-center gap-4 w-full sm:w-auto">
           <h3 className="font-bold text-gray-700">শিক্ষার্থী</h3>
           <div className="relative">
              <Search size={14} className="absolute left-2 top-2.5 text-gray-400"/>
              <input type="text" placeholder="রোল বা নাম খুঁজুন..." className="pl-8 pr-3 py-1.5 border rounded text-sm focus:outline-none focus:border-school-500"/>
           </div>
        </div>
        <button className="bg-school-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-school-700 w-full sm:w-auto justify-center">
          <Plus size={16}/> ভর্তি করুন
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase border-b">
            <tr>
              <th className="p-4">রোল</th>
              <th className="p-4">নাম</th>
              <th className="p-4">শ্রেণী</th>
              <th className="p-4">শাখা</th>
              <th className="p-4">গ্রুপ</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="p-4 font-bold">{s.roll}</td>
                <td className="p-4 font-medium flex items-center gap-2">
                   <img src={s.image} alt="" className="w-6 h-6 rounded-full"/>
                   {s.name}
                </td>
                <td className="p-4">{s.class}</td>
                <td className="p-4">{s.section}</td>
                <td className="p-4">{s.group || '-'}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button className="text-blue-500 hover:bg-blue-50 p-1 rounded"><Edit size={16}/></button>
                  <button onClick={() => handleDelete(s.id, 'student')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDownloads = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b flex justify-between items-center bg-gray-50">
        <h3 className="font-bold text-gray-700">ডাউনলোড আইটেম</h3>
        <button className="bg-school-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1 hover:bg-school-700">
          <Plus size={16}/> ফাইল আপলোড
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase border-b">
            <tr>
              <th className="p-4">শিরোনাম</th>
              <th className="p-4">ক্যাটাগরি</th>
              <th className="p-4">তারিখ</th>
              <th className="p-4">সাইজ</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {downloads.map(d => (
              <tr key={d.id} className="hover:bg-gray-50">
                <td className="p-4 font-medium">{d.title}</td>
                <td className="p-4"><span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">{d.category}</span></td>
                <td className="p-4">{d.date}</td>
                <td className="p-4 text-gray-500">{d.size}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button onClick={() => handleDelete(d.id, 'download')} className="text-red-500 hover:bg-red-50 p-1 rounded"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
         <h3 className="font-bold text-gray-700">গ্যালারি ইমেজ</h3>
         <button className="bg-pink-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-pink-700">
            <Plus size={16}/> ছবি আপলোড করুন
         </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {gallery.map(img => (
           <div key={img.id} className="relative group rounded overflow-hidden border">
              <img src={img.url} alt={img.caption} className="w-full h-32 object-cover"/>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                 <button onClick={() => handleDelete(img.id, 'gallery')} className="bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700"><Trash2 size={14}/></button>
              </div>
              <div className="p-2 text-xs text-center bg-gray-50 truncate">{img.caption}</div>
           </div>
         ))}
         {/* Upload Placeholder */}
         <div className="border-2 border-dashed border-gray-300 rounded h-32 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50 transition">
            <ImagePlus size={24}/>
            <span className="text-xs mt-1">Upload New</span>
         </div>
      </div>
    </div>
  );

  const MenuButton = ({ id, label, icon: Icon }: any) => (
    <button 
      onClick={() => { setActiveTab(id); setMobileMenuOpen(false); }} 
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition text-sm font-medium ${activeTab === id ? 'bg-school-700 text-white shadow-md' : 'text-school-100 hover:bg-school-800'}`}
    >
      <Icon size={18}/> {label}
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-school-900 text-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         <div className="p-6 border-b border-school-800 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">অ্যাডমিন প্যানেল</h2>
              <p className="text-xs text-school-300 mt-1">সুপার অ্যাডমিন</p>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-gray-300"><X size={20}/></button>
         </div>
         <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
            <MenuButton id="dashboard" label="ড্যাশবোর্ড" icon={LayoutDashboard} />
            <MenuButton id="notices" label="নোটিশ ম্যানেজমেন্ট" icon={Bell} />
            <MenuButton id="committee" label="কমিটি" icon={UserCog} />
            <MenuButton id="teachers" label="শিক্ষক ও স্টাফ" icon={Users} />
            <MenuButton id="students" label="শিক্ষার্থী" icon={GraduationCap} />
            <MenuButton id="downloads" label="ডাউনলোড জোন" icon={Download} />
            <MenuButton id="gallery" label="গ্যালারি" icon={ImagePlus} />
            
            <div className="pt-8 mt-4 border-t border-school-800">
               <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 text-red-300 transition text-sm font-medium">
                  <LogOut size={18}/> লগআউট
               </button>
            </div>
         </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
         {/* Top Header */}
         <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-gray-600"><Menu size={24}/></button>
            <h2 className="text-xl font-bold text-gray-800 hidden md:block">
              {activeTab === 'dashboard' && 'ড্যাশবোর্ড ওভারভিউ'}
              {activeTab === 'notices' && 'নোটিশ বোর্ড ম্যানেজমেন্ট'}
              {activeTab === 'teachers' && 'শিক্ষক ও কর্মচারী'}
              {activeTab === 'students' && 'শিক্ষার্থী তথ্য'}
              {activeTab === 'committee' && 'কমিটি ম্যানেজমেন্ট'}
              {activeTab === 'downloads' && 'ফাইল ও রুটিন'}
              {activeTab === 'gallery' && 'ফটো গ্যালারি'}
            </h2>
            <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-gray-700">Admin User</p>
                  <p className="text-xs text-green-600">Online</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-school-100 border border-school-200 flex items-center justify-center text-school-700 font-bold">
                  A
               </div>
            </div>
         </header>

         {/* Content Area */}
         <main className="flex-grow p-4 md:p-8 overflow-y-auto bg-gray-50/50">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'notices' && renderNotices()}
            {activeTab === 'teachers' && renderTeachers()}
            {activeTab === 'committee' && renderCommittee()}
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'downloads' && renderDownloads()}
            {activeTab === 'gallery' && renderGallery()}
         </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {mobileMenuOpen && (
        <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/50 z-40 md:hidden"></div>
      )}
    </div>
  );
};

export default Admin;