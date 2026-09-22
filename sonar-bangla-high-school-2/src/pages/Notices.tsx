import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Bell, Search, Calendar, Download, Eye, Tag, ArrowRight } from 'lucide-react';

interface NoticeItem {
  id: string;
  title: string;
  category: 'Academic' | 'Exam' | 'Admission' | 'General' | 'Event';
  date: string;
  day: string;
  month: string;
  fileSize: string;
  isImportant?: boolean;
}

export const Notices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const notices: NoticeItem[] = [
    {
      id: '1',
      title: 'Summer Vacation & Eid Holidays Notification 2025',
      category: 'General',
      date: '18 September 2025',
      day: '18',
      month: 'SEP',
      fileSize: '420 KB',
      isImportant: true,
    },
    {
      id: '2',
      title: 'SSC Examination 2025 Official Result Published & Marksheet Collection',
      category: 'Exam',
      date: '12 September 2025',
      day: '12',
      month: 'SEP',
      fileSize: '850 KB',
      isImportant: true,
    },
    {
      id: '3',
      title: 'Online Admission Application Open for Class 1 to Class 9 (Session 2026)',
      category: 'Admission',
      date: '01 September 2025',
      day: '01',
      month: 'SEP',
      fileSize: '1.2 MB',
      isImportant: true,
    },
    {
      id: '4',
      title: 'Half-Yearly Examination 2025 Schedule & Seat Plan for Secondary Section',
      category: 'Academic',
      date: '28 August 2025',
      day: '28',
      month: 'AUG',
      fileSize: '640 KB',
    },
    {
      id: '5',
      title: 'Parents-Teachers Meeting (PTM) for Classes 6-10 on Saturday at 10:00 AM',
      category: 'Event',
      date: '20 August 2025',
      day: '20',
      month: 'AUG',
      fileSize: '310 KB',
    },
    {
      id: '6',
      title: 'Annual Science Fair & Mathematics Olympiad 2025 Registration Guidelines',
      category: 'Event',
      date: '15 August 2025',
      day: '15',
      month: 'AUG',
      fileSize: '580 KB',
    },
    {
      id: '7',
      title: 'Revised Class Routine for Classes 9 & 10 Effective from Next Week',
      category: 'Academic',
      date: '05 August 2025',
      day: '05',
      month: 'AUG',
      fileSize: '490 KB',
    },
    {
      id: '8',
      title: 'Instructions regarding Monthly Fee Clearance through Digital Portal',
      category: 'General',
      date: '01 August 2025',
      day: '01',
      month: 'AUG',
      fileSize: '290 KB',
    },
  ];

  const categories = ['All', 'Academic', 'Exam', 'Admission', 'General', 'Event'];

  const filteredNotices = notices.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Notices"
        badge="INSTITUTIONAL ANNOUNCEMENTS"
        badgeIcon={<Bell size={13} className="text-[#059669]" />}
        title="Notice Board & Circulars"
        description="Stay informed with official notifications, exam timetables, holiday announcements, and academic updates."
        features={[
          { icon: <Bell size={16} />, title: 'Real-time', subtitle: 'Live Circulars' },
          { icon: <Calendar size={16} />, title: 'Archived', subtitle: 'Academic Year 2025' },
          { icon: <Download size={16} />, title: 'PDF Downloads', subtitle: 'Official Signatures' },
        ]}
        buildingQuote={{
          text: 'Timely communication fosters transparency and accountability.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-8">
        {/* Search and Category Filter Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#004d34] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#004d34] transition"
            />
          </div>
        </div>

        {/* Notice List */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs divide-y divide-slate-100 overflow-hidden">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="p-5 sm:p-6 hover:bg-emerald-50/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  {/* Calendar Date Badge */}
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center text-center">
                    <span className="text-lg font-black text-[#004d34] leading-tight">
                      {notice.day}
                    </span>
                    <span className="text-[10px] font-black text-emerald-600 tracking-wider">
                      {notice.month}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                          IMPORTANT
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-medium">
                        Published: {notice.date}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-slate-500">File size: {notice.fileSize} • Format: PDF</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                  >
                    <Eye size={14} />
                    View
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#004d34] hover:bg-[#064e3b] shadow-xs transition cursor-pointer"
                  >
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500 text-sm">
              No notices match your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
