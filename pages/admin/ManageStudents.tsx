import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { Student } from '../../types';
import { Plus, Edit, Trash2, Search, Eye, X, Droplet, Users, UserCheck } from 'lucide-react';

const ManageStudents: React.FC = () => {
  const { students, deleteStudent, addStudent } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: '',
    roll: '',
    class: '১০',
    section: 'ক',
    group: 'বিজ্ঞান',
    bloodGroup: 'A+',
    fatherName: '',
    motherName: '',
    guardianPhone: '',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80'
  });

  const handleDelete = (id: string) => {
    if(window.confirm('আপনি কি এই শিক্ষার্থীর তথ্য মুছে ফেলতে চান?')) deleteStudent(id);
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
      setNewStudent({ name: '', roll: '', class: '১০', section: 'ক', group: 'বিজ্ঞান', bloodGroup: 'A+', fatherName: '', motherName: '', guardianPhone: '', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&fit=crop&q=80' });
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.roll.includes(searchTerm) ||
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
            <Users className="text-emerald-700" size={26} /> শিক্ষার্থী ডাটাবেস ম্যানেজমেন্ট
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">সকল শ্রেণির শিক্ষার্থীদের ভর্তি, রোল ও পারিবারিক তথ্যাবলি</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition"
        >
          <Plus size={18}/> নতুন শিক্ষার্থী ভর্তি করুন
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
            placeholder="রোল, নাম বা শ্রেণি দিয়ে খুঁজুন..." 
            className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm outline-none transition font-medium"
          />
        </div>
        <span className="text-xs font-bold text-slate-500 hidden sm:inline">মোট শিক্ষার্থী: {filteredStudents.length} জন</span>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">রোল</th>
                <th className="p-4 sm:p-5">ছবি ও শিক্ষার্থীর নাম</th>
                <th className="p-4 sm:p-5 text-center">শ্রেণি</th>
                <th className="p-4 sm:p-5 text-center">শাখা</th>
                <th className="p-4 sm:p-5 text-center">গ্রুপ / বিভাগ</th>
                <th className="p-4 sm:p-5 text-right">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.length === 0 ? (
                <tr><td colSpan={6} className="p-10 text-center text-slate-400 font-semibold">কোনো শিক্ষার্থী পাওয়া যায়নি</td></tr>
              ) : (
                filteredStudents.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5 font-extrabold text-slate-900">#{s.roll}</td>
                    <td className="p-4 sm:p-5 font-medium flex items-center gap-3">
                       <img src={s.image} alt="" className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm"/>
                       <div>
                         <span className="block font-bold text-slate-900">{s.name}</span>
                         <span className="text-[11px] text-slate-400">আইডি: SB-{s.id}</span>
                       </div>
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg text-xs font-bold">
                        {s.class} শ্রেণি
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 text-center font-bold text-slate-600">{s.section}</td>
                    <td className="p-4 sm:p-5 text-center text-slate-500 font-medium">{s.group || '-'}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setSelectedStudent(s)}
                          className="bg-slate-100 hover:bg-emerald-700 text-slate-600 hover:text-white p-2 rounded-xl transition border border-slate-200" 
                          title="প্রোফাইল দেখুন"
                        >
                          <Eye size={16}/>
                        </button>
                        <button 
                          onClick={() => handleDelete(s.id)} 
                          className="bg-rose-50 hover:bg-rose-600 text-rose-600 hover:text-white p-2 rounded-xl transition border border-rose-200" 
                          title="মুছে ফেলুন"
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
            <button onClick={() => setShowAddModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">নতুন শিক্ষার্থী নিবন্ধন ফরম</h3>
            
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>শিক্ষার্থীর নাম *</label>
                  <input required value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className={inputClass} placeholder="উদা: মোঃ আরিয়ান আহমেদ" />
                </div>
                <div>
                  <label className={labelClass}>রোল নম্বর *</label>
                  <input required value={newStudent.roll} onChange={e => setNewStudent({...newStudent, roll: e.target.value})} className={inputClass} placeholder="উদা: 101" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>শ্রেণি</label>
                  <select value={newStudent.class} onChange={e => setNewStudent({...newStudent, class: e.target.value})} className={inputClass}>
                    <option value="৬ষ্ঠ">৬ষ্ঠ</option>
                    <option value="৭ম">৭ম</option>
                    <option value="৮ম">৮ম</option>
                    <option value="৯ম">৯ম</option>
                    <option value="১০">১০ম</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>শাখা</label>
                  <input value={newStudent.section} onChange={e => setNewStudent({...newStudent, section: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>গ্রুপ</label>
                  <input value={newStudent.group} onChange={e => setNewStudent({...newStudent, group: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>পিতার নাম</label>
                  <input value={newStudent.fatherName} onChange={e => setNewStudent({...newStudent, fatherName: e.target.value})} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>মাতার নাম</label>
                  <input value={newStudent.motherName} onChange={e => setNewStudent({...newStudent, motherName: e.target.value})} className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>অভিভাবকের মোবাইল নম্বর</label>
                <input value={newStudent.guardianPhone} onChange={e => setNewStudent({...newStudent, guardianPhone: e.target.value})} className={inputClass} placeholder="017XXXXXXXX" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowAddModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600">বাতিল</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md">সংরক্ষণ করুন</button>
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
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full transition"
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
              <p className="text-xs text-slate-400 font-semibold mt-0.5">আইডি: SB-{selectedStudent.id} • রোল: #{selectedStudent.roll}</p>

              <div className="grid grid-cols-2 gap-3 text-xs mt-6 text-left">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold mb-0.5">শ্রেণি</span>
                  <span className="font-extrabold text-slate-800">{selectedStudent.class} শ্রেণি</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="block text-[10px] text-slate-400 uppercase font-bold mb-0.5">শাখা ও গ্রুপ</span>
                  <span className="font-extrabold text-slate-800">{selectedStudent.section} ({selectedStudent.group || 'সাধারণ'})</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 col-span-2 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">পিতা:</span>
                    <span className="font-semibold text-slate-700">{selectedStudent.fatherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">মাতা:</span>
                    <span className="font-semibold text-slate-700">{selectedStudent.motherName || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold">মোবাইল:</span>
                    <span className="font-bold text-emerald-700">{selectedStudent.guardianPhone || '-'}</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedStudent(null)} 
                className="mt-6 w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-xs"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ManageStudents;
