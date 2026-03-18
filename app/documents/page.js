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
            <h1 className="text-2xl font-bold text-white">Documents</h1>
            <p className="text-gray-400 text-sm mt-1">{totalDocs} indexed items across {documentIndex.length} categories</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-jcg-navy border border-jcg-border rounded-lg overflow-hidden">
              <button
                onClick={() => setView('index')}
                className={`px-4 py-2 text-sm transition-colors ${
                  view === 'index' ? 'bg-jcg-gold text-jcg-navy font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                Index
              </button>
              <button
                onClick={() => setView('drive')}
                className={`px-4 py-2 text-sm transition-colors ${
                  view === 'drive' ? 'bg-jcg-gold text-jcg-navy font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                Google Drive
              </button>
            </div>
            <a
              href={GDRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-jcg-navy border border-jcg-border rounded-lg text-gray-300 hover:text-white hover:border-jcg-gold transition-colors"
            >
              Open in Drive ↗
            </a>
          </div>
        </div>

        {view === 'drive' ? (
          /* Google Drive Embed */
          <div className="bg-jcg-navy border border-jcg-border rounded-xl overflow-hidden">
            <div className="px-6 py-3 border-b border-jcg-border flex items-center justify-between">
              <span className="text-sm text-gray-400">Google Drive — Case Files</span>
              <a
                href={GDRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-jcg-gold hover:underline"
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
          /* Document Index */
          <>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-jcg-navy border border-jcg-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-jcg-gold"
              />
            </div>

            <div className="space-y-6">
              {filteredDocs.map((cat, ci) => (
                <div key={ci} className="bg-jcg-navy border border-jcg-border rounded-xl overflow-hidden">
                  <div className="px-6 py-3 border-b border-jcg-border bg-jcg-bg/30 flex items-center gap-3">
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-semibold text-white">{cat.category}</span>
                    <span className="text-xs text-gray-500 ml-auto">{cat.docs.length} items</span>
                  </div>
                  <div className="divide-y divide-jcg-border/50">
                    {cat.docs.map((doc, di) => (
                      <div key={di} className="px-6 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                          {doc.critical && (
                            <span className="w-1.5 h-1.5 rounded-full bg-jcg-gold" />
                          )}
                          <div>
                            <div className="text-sm text-white">{doc.name}</div>
                            {doc.detail && (
                              <div className="text-xs text-gray-500 mt-0.5">{doc.detail}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-500 font-mono uppercase">{doc.type}</span>
                          <span className="px-2 py-0.5 text-xs bg-jcg-bg border border-jcg-border rounded text-gray-400">
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
