import React, { useState } from 'react';
import { InnerHero } from '../components/InnerHero';
import { Download, FileText, Search, FileSpreadsheet, ArrowDownToLine, CheckCircle2 } from 'lucide-react';

interface DocItem {
  id: string;
  title: string;
  category: 'Academic' | 'Forms' | 'Syllabus' | 'Routine' | 'Regulations';
  fileType: 'PDF' | 'DOCX' | 'XLSX';
  fileSize: string;
  publishDate: string;
  downloadsCount: number;
}

export const Downloads: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const documents: DocItem[] = [
    {
      id: '1',
      title: 'Class 6 - 10 Complete Syllabus & Booklist Session 2025',
      category: 'Syllabus',
      fileType: 'PDF',
      fileSize: '3.4 MB',
      publishDate: '10 Jan 2025',
      downloadsCount: 1420,
    },
    {
      id: '2',
      title: 'Admission Application Form (Offline Printed Version)',
      category: 'Forms',
      fileType: 'PDF',
      fileSize: '540 KB',
      publishDate: '01 Aug 2025',
      downloadsCount: 980,
    },
    {
      id: '3',
      title: 'Annual Academic Calendar & Holiday List 2025',
      category: 'Academic',
      fileType: 'PDF',
      fileSize: '820 KB',
      publishDate: '01 Jan 2025',
      downloadsCount: 2150,
    },
    {
      id: '4',
      title: 'Secondary Section Master Class Routine 2025 (Class 6 - 10)',
      category: 'Routine',
      fileType: 'PDF',
      fileSize: '620 KB',
      publishDate: '15 Jan 2025',
      downloadsCount: 1650,
    },
    {
      id: '5',
      title: 'Student Code of Conduct & School Disciplinary Policies',
      category: 'Regulations',
      fileType: 'PDF',
      fileSize: '410 KB',
      publishDate: '05 Jan 2025',
      downloadsCount: 430,
    },
    {
      id: '6',
      title: 'Half-Yearly Examination Routine & Practical Exam Schedule',
      category: 'Routine',
      fileType: 'PDF',
      fileSize: '750 KB',
      publishDate: '20 May 2025',
      downloadsCount: 1890,
    },
    {
      id: '7',
      title: 'Transfer Certificate (TC) Application Form Template',
      category: 'Forms',
      fileType: 'DOCX',
      fileSize: '120 KB',
      publishDate: '15 Feb 2025',
      downloadsCount: 310,
    },
    {
      id: '8',
      title: 'Fee Structure & Online Payment Portal Instructions',
      category: 'Academic',
      fileType: 'PDF',
      fileSize: '380 KB',
      publishDate: '08 Jan 2025',
      downloadsCount: 1120,
    },
  ];

  const categories = ['All', 'Syllabus', 'Routine', 'Forms', 'Academic', 'Regulations'];

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'All' || doc.category === selectedCategory;
    const matchesQuery = doc.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-50/60 pb-16">
      <InnerHero
        breadcrumb="Downloads"
        badge="STUDENT & PARENT RESOURCE CENTER"
        badgeIcon={<Download size={13} className="text-[#059669]" />}
        title="Official Downloads & Documents"
        description="Access syllabuses, daily class routines, examination schedules, printable admission forms, and guidelines."
        features={[
          { icon: <FileText size={16} />, title: 'Curriculum', subtitle: 'Class Syllabuses' },
          { icon: <Download size={16} />, title: 'Forms', subtitle: 'Printable Applications' },
          { icon: <ArrowDownToLine size={16} />, title: 'Verified', subtitle: 'Authentic Documents' },
        ]}
        buildingQuote={{
          text: 'Empowering students with seamless access to learning resources.',
          author: 'SOS Hermann Gmeiner School Khulna',
        }}
      />

      <div className="container mx-auto pt-10 space-y-8">
        {/* Category and Search Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
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

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#004d34] transition"
            />
          </div>
        </div>

        {/* Downloads Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#004d34] text-white">
                  <th className="py-3.5 px-6 font-bold">Document Title</th>
                  <th className="py-3.5 px-4 font-bold">Category</th>
                  <th className="py-3.5 px-4 font-bold">Format</th>
                  <th className="py-3.5 px-4 font-bold">Size</th>
                  <th className="py-3.5 px-4 font-bold">Published</th>
                  <th className="py-3.5 px-6 text-right font-bold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-emerald-50/40 transition-colors group"
                    >
                      <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#004d34] flex items-center justify-center shrink-0">
                          <FileText size={16} />
                        </div>
                        <div>
                          <span className="block font-bold text-sm text-slate-800 group-hover:text-[#004d34] transition-colors">
                            {doc.title}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal">
                            Downloaded {doc.downloadsCount.toLocaleString()} times
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-600">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px]">
                          {doc.category}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`font-black text-[10px] px-2 py-0.5 rounded ${
                            doc.fileType === 'PDF'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : doc.fileType === 'DOCX'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          }`}
                        >
                          {doc.fileType}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-500">
                        {doc.fileSize}
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-500">
                        {doc.publishDate}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#004d34] hover:bg-[#064e3b] shadow-xs transition cursor-pointer"
                        >
                          <Download size={13} />
                          Download
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      No documents found matching your filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
