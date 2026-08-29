import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Teacher, Staff } from '../../types';
import { Plus, Edit, Trash2, GraduationCap, Briefcase, X, UserCheck } from 'lucide-react';

const ManageTeachers: React.FC = () => {
  const { teachers, deleteTeacher, addTeacher, staff, deleteStaff, addStaff } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [activeTab, setActiveTab] = useState<'teachers' | 'staff'>('teachers');
  const [showModal, setShowModal] = useState(false);
  
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    designation: 'সহকারী শিক্ষক',
    subject: 'বাংলা',
    qualifications: 'বি.এ (অনার্স), এম.এ',
    phone: '',
    email: '',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&fit=crop&q=80'
  });

  const handleDeleteTeacher = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি এই শিক্ষককে তালিকা থেকে মুছে ফেলতে চান?' : 'Are you sure you want to remove this faculty member?')) {
      deleteTeacher(id);
    }
  };
  
  const handleDeleteStaff = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি এই কর্মচারীকে তালিকা থেকে মুছে ফেলতে চান?' : 'Are you sure you want to remove this staff member?')) {
      deleteStaff(id);
    }
  };

  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTeacher.name) {
      addTeacher({
        id: Date.now().toString(),
        name: newTeacher.name,
        designation: newTeacher.designation,
        subject: newTeacher.subject,
        qualifications: newTeacher.qualifications,
        image: newTeacher.image,
        phone: newTeacher.phone,
        email: newTeacher.email
      });
      setShowModal(false);
      setNewTeacher({ name: '', designation: 'সহকারী শিক্ষক', subject: 'বাংলা', qualifications: 'বি.এ (অনার্স), এম.এ', phone: '', email: '', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&fit=crop&q=80' });
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <GraduationCap className="text-emerald-700" size={26} /> 
            {language === 'bn' ? 'শিক্ষক ও স্টাফ ম্যানেজমেন্ট' : 'Faculty & Staff Directory'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            {language === 'bn' ? 'সম্মানিত শিক্ষক ও কর্মচারীদের প্রোফাইল ও তথ্য হালনাগাদ করুন' : 'Manage and update teachers and administrative staff profiles'}
          </p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition cursor-pointer"
        >
          <Plus size={18}/> {language === 'bn' ? 'নতুন শিক্ষক যোগ করুন' : 'Add New Faculty'}
        </button>
      </div>

      {/* Toggle Tabs */}
      <div className="flex gap-2">
        <button 
          onClick={() => setActiveTab('teachers')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'teachers' 
              ? 'bg-emerald-700 text-white shadow-sm' 
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <GraduationCap size={16} /> {language === 'bn' ? 'শিক্ষকবৃন্দ' : 'Teachers'} ({toBanglaNum(teachers.length)})
        </button>
        <button 
          onClick={() => setActiveTab('staff')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer ${
            activeTab === 'staff' 
              ? 'bg-emerald-700 text-white shadow-sm' 
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Briefcase size={16} /> {language === 'bn' ? 'অফিস স্টাফ' : 'Office Staff'} ({toBanglaNum(staff.length)})
        </button>
      </div>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 cursor-pointer">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
              {language === 'bn' ? 'নতুন শিক্ষক প্রোফাইল তৈরি' : 'Create New Faculty Profile'}
            </h3>
            
            <form onSubmit={handleAddTeacher} className="space-y-4">
              <div>
                <label className={labelClass}>{language === 'bn' ? 'শিক্ষকের নাম *' : "Teacher's Name *"}</label>
                <input required value={newTeacher.name} onChange={e => setNewTeacher({...newTeacher, name: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: ড. আহমেদ উল্লাহ" : "e.g. Dr. Ahmed Ullah"} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'পদবি' : 'Designation'}</label>
                  <input value={newTeacher.designation} onChange={e => setNewTeacher({...newTeacher, designation: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'পাঠদানের বিষয়' : 'Teaching Subject'}</label>
                  <input value={newTeacher.subject} onChange={e => setNewTeacher({...newTeacher, subject: e.target.value})} className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>{language === 'bn' ? 'শিক্ষাগত যোগ্যতা' : 'Qualifications'}</label>
                <input value={newTeacher.qualifications} onChange={e => setNewTeacher({...newTeacher, qualifications: e.target.value})} className={inputClass} />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600 cursor-pointer">{language === 'bn' ? 'বাতিল' : 'Cancel'}</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md cursor-pointer">{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Profile'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Teachers Table */}
      {activeTab === 'teachers' && (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'ছবি' : 'Photo'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'নাম' : 'Name'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'পদবি' : 'Designation'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'বিষয়' : 'Subject'}</th>
                  <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teachers.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5">
                      <img src={t.image} alt="" className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"/>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{t.name}</td>
                    <td className="p-4 sm:p-5 text-emerald-800 font-semibold">{t.designation}</td>
                    <td className="p-4 sm:p-5 font-semibold text-slate-600">{t.subject}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <button 
                        onClick={() => handleDeleteTeacher(t.id)} 
                        className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200 cursor-pointer"
                        title={language === 'bn' ? "মুছে ফেলুন" : "Delete"}
                      >
                        <Trash2 size={16}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Staff Table */}
      {activeTab === 'staff' && (
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'ছবি' : 'Photo'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'নাম' : 'Name'}</th>
                  <th className="p-4 sm:p-5">{language === 'bn' ? 'পদবি' : 'Designation'}</th>
                  <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {staff.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5">
                      <img src={s.image} alt="" className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"/>
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{s.name}</td>
                    <td className="p-4 sm:p-5 text-slate-600 font-semibold">{s.designation}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <button 
                        onClick={() => handleDeleteStaff(s.id)} 
                        className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200 cursor-pointer"
                        title={language === 'bn' ? "মুছে ফেলুন" : "Delete"}
                      >
                        <Trash2 size={16}/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageTeachers;