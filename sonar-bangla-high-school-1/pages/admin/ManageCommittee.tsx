import React, { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { CommitteeMember } from '../../types';
import { Plus, Edit, Trash2, Users, X } from 'lucide-react';

const ManageCommittee: React.FC = () => {
  const { committee, deleteCommitteeMember, addCommitteeMember } = useData();
  const { language, toBanglaNum } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    position: 'সদস্য',
    type: 'অভিভাবক প্রতিনিধি',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80'
  });

  const handleDelete = (id: string) => {
    if(window.confirm(language === 'bn' ? 'আপনি কি এই সদস্যকে তালিকা থেকে মুছে ফেলতে চান?' : 'Are you sure you want to remove this committee member?')) {
      deleteCommitteeMember(id);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMember.name) {
      addCommitteeMember({
        id: Date.now().toString(),
        name: newMember.name,
        position: newMember.position,
        type: newMember.type,
        image: newMember.image
      });
      setShowModal(false);
      setNewMember({ name: '', position: 'সদস্য', type: 'অভিভাবক প্রতিনিধি', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80' });
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
            <Users className="text-emerald-700" size={26} /> 
            {language === 'bn' ? 'পরিচালনা পর্ষদ (কমিটি)' : 'Managing Committee'}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            {language === 'bn' ? 'ম্যানেজিং কমিটির সদস্যবৃন্দ ও তাদের পদবি পরিচালনা করুন' : 'Manage governing body and committee members'}
          </p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-800/20 transition cursor-pointer"
        >
          <Plus size={18}/> {language === 'bn' ? 'নতুন সদস্য যুক্ত করুন' : 'Add New Member'}
        </button>
      </div>

      {/* Add Member Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 cursor-pointer">
              <X size={18} />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3">
              {language === 'bn' ? 'নতুন কমিটির সদস্য যোগ' : 'Add New Committee Member'}
            </h3>
            
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className={labelClass}>{language === 'bn' ? 'সদস্যের নাম *' : 'Member Name *'}</label>
                <input required value={newMember.name} onChange={e => setNewMember({...newMember, name: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: মোঃ শফিকুল ইসলাম" : "e.g. Shafiqul Islam"} />
              </div>
              <div>
                <label className={labelClass}>{language === 'bn' ? 'পদবি' : 'Designation'}</label>
                <input value={newMember.position} onChange={e => setNewMember({...newMember, position: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: সভাপতি / সহ-সভাপতি" : "e.g. Chairman / Vice-Chairman"} />
              </div>
              <div>
                <label className={labelClass}>{language === 'bn' ? 'সদস্যের ধরন' : 'Member Type'}</label>
                <input value={newMember.type} onChange={e => setNewMember({...newMember, type: e.target.value})} className={inputClass} placeholder={language === 'bn' ? "উদা: দাতা সদস্য / অভিভাবক সদস্য" : "e.g. Donor Member / Parent Representative"} />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-100 font-bold text-xs text-slate-600 cursor-pointer">{language === 'bn' ? 'বাতিল' : 'Cancel'}</button>
                <button type="submit" className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md cursor-pointer">{language === 'bn' ? 'সংরক্ষণ করুন' : 'Save Member'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="font-bold text-slate-800 text-sm">
             {language === 'bn' ? 'বর্তমান কমিটির সদস্য তালিকা' : 'Current Committee Members'} ({toBanglaNum(committee.length)})
           </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-600 uppercase font-bold tracking-wider text-[11px] border-b border-slate-200">
                <th className="p-4 sm:p-5">{language === 'bn' ? 'সদস্যের ছবি ও নাম' : 'Member Photo & Name'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'পদবি' : 'Designation'}</th>
                <th className="p-4 sm:p-5">{language === 'bn' ? 'সদস্যের ধরন' : 'Member Role / Type'}</th>
                <th className="p-4 sm:p-5 text-right">{language === 'bn' ? 'অ্যাকশন' : 'Action'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {committee.map(c => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-3">
                    <img src={c.image} className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-sm" alt=""/>
                    <span>{c.name}</span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-800">{c.position}</td>
                  <td className="p-4 sm:p-5">
                    <span className="bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold">
                      {c.type}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    <button 
                      onClick={() => handleDelete(c.id)} 
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

    </div>
  );
};

export default ManageCommittee;
