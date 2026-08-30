import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Student } from '../../types';
import { Plus, Edit, Trash2, Search, Eye, X, Droplet, Users, UserCheck } from 'lucide-react';

const ManageStudents: React.FC = () => {
  const { students, deleteStudent, addStudent } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: '',
    roll: '',
    class: '১০',
    section: 'A',
    group: 'বিজ্ঞান',
    bloodGroup: 'A+',
    fatherName: '',
    motherName: '',
    guardianPhone: '',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80'
  });

  const handleDelete = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি এই শিক্ষার্থীর তথ্য মুছে ফেলতে চান?' : 'Are you sure you want to delete this student record?')) {
      deleteStudent(id);
    }
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStudent.name && newStudent.roll) {
      addStudent({
        id: Date.now().toString(),
        name: newStudent.name,
        roll: newStudent.roll,
        class: newStudent.class,
        section: newStudent.section,
        group: newStudent.group,
        bloodGroup: newStudent.bloodGroup,
        fatherName: newStudent.fatherName,
        motherName: newStudent.motherName,
        guardianPhone: newStudent.guardianPhone,
        image: newStudent.image
      });
      setShowAddModal(false);
      setNewStudent({ name: '', roll: '', class: '১০', section: 'A', group: 'বিজ্ঞান', bloodGroup: 'A+', fatherName: '', motherName: '', guardianPhone: '', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80' });
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    String(s.roll).includes(searchTerm) ||
    s.class.includes(searchTerm)
  );

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white p-3 rounded-xl focus:ring-2 focus:ring-emerald-500/20 outline-none transition text-slate-800 font-semibold text-xs sm:text-sm";
  const labelClass = "block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider";

  return (
    <div className="space-y-8 animate-fade-in text-slate-800 relative">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Users className="text-emerald-700" size={26} /> 
            {language === 'bn' ? 'শিক্ষার্থী ডাটাবেস ম্যানেজমেন্ট' : 'Student Database Management'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            {language === 'bn' ? 'সকল শ্রেণির শিক্ষার্থীদের ভর্তি, রোল ও পারিবারিক তথ্যাবলি' : 'Student enrollment, roster, roll numbers and contact profiles'}
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition cursor-pointer"
        >
          <Plus size={18}/> {language === 'bn' ? 'নতুন শিক্ষার্থী ভর্তি করুন' : 'Enroll New Student'}
        </button>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder={language === 'bn' ? "রোল, নাম বা শ্রেণি দিয়ে খুঁজুন..." : "Search by roll, name or class..."}
            className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition font-medium"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">
          {language === 'bn' ? `মোট শিক্ষার্থী: ${toBanglaNum(filteredStudents.length)} জন` : `Total Students: ${filteredStudents.length}`}
        </span>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">{language === 'bn' ? 'রোল' : 'Roll'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'ছবি ও শিক্ষার্থীর নাম' : 'Student Name'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'শ্রেণি' : 'Class'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'শাখা' : 'Section'}</th>
                <th className="p-4 sm:p-5 text-center">{language === 'bn' ? 'গ্রুপ / বিভাগ' : 'Group'}</th>
                <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr><td colSpan={6} className="p-10 text-center text-slate-400 font-semibold">{language === 'bn' ? 'কোনো শিক্ষার্থী পাওয়া যায়নি' : 'No students found'}</td></tr>
              ) : (
                filteredStudents.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-extrabold text-slate-900">#{toBanglaNum(s.roll)}</td>
                    <td className="p-4 sm:p-5 font-medium flex items-center gap-3">
                       <img src={s.image} alt="" className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"/>
                       <div>
                         <span className="block font-bold text-slate-900">{s.name}</span>
                         <span className="text-[11px] text-slate-400">{language === 'bn' ? 'আইডি' : 'ID'}: SOS-{s.id}</span>
                       </div>
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold">
                        {language === 'bn' ? `${s.class} শ্রেণি` : `Class ${s.class}`}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center font-bold text-slate-600">{s.section}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-500 font-medium">{s.group || '-'}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setSelectedStudent(s)}
                          className="bg-slate-100 hover:bg-emerald-700 text-slate-600 hover:text-white p-2 rounded-xl transition border border-slate-200 cursor-pointer" 
                          title={language === 'bn' ? "প্রোফাইল দেখুন" : "View Profile"}
                        >
                          <Eye size={16}/>
                        </button>
                        <button 
                          onClick={() => handleDelete(s.id)} 
                          className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200 cursor-pointer" 
                          title={language === 'bn' ? "মুছে ফেলুন" : "Delete"}
                        >
                          <Trash2 size={16}/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 cursor-pointer">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
              {language === 'bn' ? 'নতুন শিক্ষার্থী নিবন্ধন ফরম' : 'New Student Registration Form'}
            </h3>
            
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'শিক্ষার্থীর নাম *' : 'Student Name *'}</label>
                  <input required value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: মোঃ আরিয়ান আহমেদ" : "e.g. Arian Ahmed"} />
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'রোল নম্বর *' : 'Roll Number *'}</label>
                  <input required value={newStudent.roll} onChange={e => setNewStudent({...newStudent, roll: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: 101" : "e.g. 101"} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'শ্রেণি' : 'Class'}</label>
                  <select value={newStudent.class} onChange={e => setNewStudent({...newStudent, class: e.target.value})} className={inputClass}>
                    <option value="৬ষ্ঠ">{language === 'bn' ? '৬ষ্ঠ' : 'Class 6'}</option>
                    <option value="৭ম">{language === 'bn' ? '৭ম' : 'Class 7'}</option>
                    <option value="৮ম">{language === 'bn' ? '৮ম' : 'Class 8'}</option>
                    <option value="৯ম">{language === 'bn' ? '৯ম' : 'Class 9'}</option>
                    <option value="১০">{language === 'bn' ? '১০ম' : 'Class 10'}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'শাখা' : 'Section'}</label>
                  <input value={newStudent.section} onChange={e => setNewStudent({...newStudent, section: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'গ্রুপ' : 'Group'}</label>
                  <input value={newStudent.group} onChange={e => setNewStudent({...newStudent, group: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'পিতার নাম' : "Father's Name"}</label>
                  <input value={newStudent.fatherName} onChange={e => setNewStudent({...newStudent, fatherName: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{language === 'bn' ? 'মাতার নাম' : "Mother's Name"}</label>
                  <input value={newStudent.motherName} onChange={e => setNewStudent({...newStudent, motherName: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>{language === 'bn' ? 'অভিভাবকের মোবাইল নম্বর' : "Guardian Phone"}</label>
                <input value={newStudent.guardianPhone} onChange={e => setNewStudent({...newStudent, guardianPhone: e.target.value})} className={inputClass} placeholder="017XXXXXXXX" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600 cursor-pointer">{language === 'bn' ? 'বাতিল' : 'Cancel'}</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md cursor-pointer">{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Record'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Details View Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedStudent(null)}>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative border border-slate-200" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedStudent(null)} 
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full transition cursor-pointer"
            >
              <X size={18} />
            </button>
            
            <div className="bg-emerald-800 h-28 relative">
               <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={selectedStudent.image} 
                    alt={selectedStudent.name} 
                    className="w-20 h-20 rounded-2xl border-4 border-white shadow-md object-cover bg-white"
                  />
               </div>
            </div>

            <div className="px-6 pb-6 pt-14 text-center">
              <h2 className="text-xl font-extrabold text-slate-900">{selectedStudent.name}</h2>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                {language === 'bn' ? 'আইডি' : 'ID'}: SOS-{selectedStudent.id} • {language === 'bn' ? 'রোল' : 'Roll'}: #{toBanglaNum(selectedStudent.roll)}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs mt-6 text-left">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold mb-0.5">{language === 'bn' ? 'শ্রেণি' : 'Class'}</span>
                  <span className="font-extrabold text-slate-800">{language === 'bn' ? `${selectedStudent.class} শ্রেণি` : `Class ${selectedStudent.class}`}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold mb-0.5">{language === 'bn' ? 'শাখা ও গ্রুপ' : 'Section & Group'}</span>
                  <span className="font-extrabold text-slate-800">{selectedStudent.section} ({selectedStudent.group || (language === 'bn' ? 'সাধারণ' : 'General')})</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 col-span-2 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">{language === 'bn' ? 'পিতা:' : "Father:"}</span>
                    <span className="font-semibold text-slate-700">{selectedStudent.fatherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">{language === 'bn' ? 'মাতা:' : "Mother:"}</span>
                    <span className="font-semibold text-slate-700">{selectedStudent.motherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">{language === 'bn' ? 'মোবাইল:' : "Mobile:"}</span>
                    <span className="font-bold text-emerald-700">{toBanglaNum(selectedStudent.guardianPhone) || '-'}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedStudent(null)} 
                className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-bold text-xs cursor-pointer transition"
              >
                {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageStudents;
