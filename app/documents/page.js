'use client';
import CaseShell from '../components/CaseShell';
import { useState } from 'react';

const GDRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1nxzoAQ1YySAiJIYhCTHVibtxfJ09D4B8';
const GDRIVE_EMBED_URL = 'https://drive.google.com/embeddedfolderview?id=1nxzoAQ1YySAiJIYhCTHVibtxfJ09D4B8#list';

const documentIndex = [
  {
    category: 'Pleadings & Complaints',
    icon: '⚖',
    docs: [
      { name: 'Amended Complaint — Joseph v. HiBob, Inc.', type: 'docx', round: 'Active', critical: true },
      { name: 'Draft Complaint (Round 3)', type: 'docx', round: 'Round 3' },
      { name: 'New Counsel Intake Memo', type: 'docx', round: 'Round 3' },
      { name: 'Key Issues and Evidence Brief', type: 'docx', round: 'Round 3' },
    ],
  },
  {
    category: 'Demand & Settlement',
    icon: '◈',
    docs: [
      { name: 'Prior Demand Letter (Duwel Law — Feb 2026)', type: 'pdf', round: 'Round 1', critical: true },
      { name: 'Settlement Demand Valuation', type: 'gdoc', round: 'Misc' },
      { name: 'Supplemental Evidence Brief (Updated)', type: 'docx', round: 'Active' },
    ],
  },
  {
    category: 'Employment Records',
    icon: '◫',
    docs: [
      { name: 'Offer Letter', type: 'pdf', round: 'Round 1' },
      { name: 'Zach Joseph Resume', type: 'docx', round: 'Round 1' },
      { name: 'US Employee Personal Information Form (TriNet)', type: 'pdf', round: 'Round 1' },
      { name: 'RETENTION Documentation', type: 'doc', round: 'Round 1' },
      { name: 'HiBob US Offboarding Guide 2026', type: 'pdf', round: 'Round 1' },
    ],
  },
  {
    category: 'HiBob Internal Policies',
    icon: '◰',
    docs: [
      { name: 'HiBob Code of Conduct', type: 'pdf', round: 'Round 1' },
      { name: 'Equality & Anti-Harassment Policy (NY, Oct 2020)', type: 'pdf', round: 'Round 1' },
      { name: 'Whistleblowing Policy', type: 'pdf', round: 'Round 1' },
      { name: 'HiBob Hybrid Work Model 2025', type: 'pdf', round: 'Misc' },
    ],
  },
  {
    category: 'Evidence — Internal Reports',
    icon: '⚡',
    docs: [
      { name: 'U.S. Payroll Stabilization and Scale Plan', type: 'pdf', round: 'Round 1', critical: true },
      { name: 'US Payroll SIT REP — 06 Oct 2025', type: 'pdf', round: 'Round 1', critical: true },
      { name: 'US Pay/Ben Services Status (10.06.25)', type: 'docx', round: 'Round 1' },
    ],
  },
  {
    category: 'Evidence — Call Transcripts',
    icon: '◷',
    docs: [
      { name: '140+ Call Transcripts', type: 'folder', round: 'Misc', critical: true,
        detail: 'Client implementation calls, internal meetings, 1:1s, escalation calls, and recruiting interviews' },
      { name: 'Joseph-Mormon Interview Transcript', type: 'docx', round: 'Misc' },
      { name: 'Ryan & Zach 1:1 Transcript', type: 'txt', round: 'Misc' },
      { name: 'Zach 1:1 Meeting Notes', type: 'docx', round: 'Round 1' },
    ],
  },
  {
    category: 'Correspondence',
    icon: '✉',
    docs: [
      { name: 'Re: HiBob Offboarding Next Steps (Email)', type: 'eml', round: 'Misc' },
      { name: 'HiBob Response Notes', type: 'txt', round: 'Misc' },
    ],
  },
  {
    category: 'Strategy & Analysis',
    icon: '◉',
    docs: [
      { name: 'HiBob Strategy Notes', type: 'txt', round: 'Misc' },
      { name: 'Independent Adjudication — David Strategy', type: 'pdf', round: 'Misc' },
      { name: 'Case Research', type: 'gdoc', round: 'Misc' },
      { name: 'Timeline of Events', type: 'docx', round: 'Round 1' },
    ],
  },
];

export default function DocumentsPage() {
  const [view, setView] = useState('index');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = documentIndex.map((cat) => ({
    ...cat,
    docs: cat.docs.filter((d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => cat.docs.length > 0);

  const totalDocs = documentIndex.reduce((a, c) => a + c.docs.length, 0);

  return (
    <CaseShell>
      <div className="max-w-6xl mx-auto fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#19314A' }}>Documents</h1>
            <p className="text-sm mt-1" style={{ color: '#5C6370' }}>{totalDocs} indexed items across {documentIndex.length} categories</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-white border rounded-md overflow-hidden" style={{ borderColor: '#E0E2E6' }}>
              <button
                onClick={() => setView('index')}
                className="px-4 py-2 text-sm font-semibold transition-colors"
                style={view === 'index' ? { background: '#19314A', color: 'white' } : { color: '#5C6370' }}
              >
                Index
              </button>
              <button
                onClick={() => setView('drive')}
                className="px-4 py-2 text-sm font-semibold transition-colors"
                style={view === 'drive' ? { background: '#19314A', color: 'white' } : { color: '#5C6370' }}
              >
                Google Drive
              </button>
            </div>
            <a
              href={GDRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-md transition-colors"
              style={{ border: '1px solid #E0E2E6', color: '#5C6370' }}
            >
              Open in Drive ↗
            </a>
          </div>
        </div>

        {view === 'drive' ? (
          <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}>
            <div className="px-6 py-3 flex items-center justify-between" style={{ borderBottom: '1px solid #E0E2E6' }}>
              <span className="text-sm" style={{ color: '#88939F' }}>Google Drive — Case Files</span>
              <a
                href={GDRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline"
                style={{ color: '#3A7CA5' }}
              >
                Open in new tab ↗
              </a>
            </div>
            <iframe
              src={GDRIVE_EMBED_URL}
              className="w-full border-0"
              style={{ height: 'calc(100vh - 220px)', minHeight: '600px' }}
              title="Case Documents — Google Drive"
            />
          </div>
        ) : (
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                style={{ borderColor: '#E0E2E6', color: '#353535' }}
              />
            </div>

            <div className="space-y-6">
              {filteredDocs.map((cat, ci) => (
                <div key={ci} className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}>
                  <div className="px-6 py-3 flex items-center gap-3" style={{ borderBottom: '1px solid #E0E2E6', background: '#F5F6F8' }}>
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-semibold" style={{ color: '#19314A' }}>{cat.category}</span>
                    <span className="text-xs ml-auto" style={{ color: '#88939F' }}>{cat.docs.length} items</span>
                  </div>
                  <div>
                    {cat.docs.map((doc, di) => (
                      <div key={di} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors" style={{ borderBottom: di < cat.docs.length - 1 ? '1px solid #ECEDF0' : 'none' }}>
                        <div className="flex items-center gap-3">
                          {doc.critical && (
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3A7CA5' }} />
                          )}
                          <div>
                            <div className="text-sm" style={{ color: '#19314A' }}>{doc.name}</div>
                            {doc.detail && (
                              <div className="text-xs mt-0.5" style={{ color: '#88939F' }}>{doc.detail}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono uppercase" style={{ color: '#88939F' }}>{doc.type}</span>
                          <span className="px-2 py-0.5 text-xs rounded" style={{ background: '#F5F6F8', border: '1px solid #E0E2E6', color: '#5C6370' }}>
                            {doc.round}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </CaseShell>
  );
}
