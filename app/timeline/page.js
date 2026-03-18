'use client';
import CaseShell from '../components/CaseShell';
import { useState } from 'react';

const timelineEvents = [
  {
    date: 'Aug 2024',
    title: 'Recruited & Hired by HiBob',
    detail: 'Zach Joseph recruited as Customer Experience Specialist (Payroll). Representations made about role scope, team support, product readiness, and career trajectory. Relocated based on these assurances.',
    category: 'employment',
    significance: 'high',
    counts: [3, 6],
  },
  {
    date: 'Sep–Oct 2024',
    title: 'Onboarding & IT Setup',
    detail: 'Completed IT onboarding, received equipment and system access. Began training on HiBob U.S. Payroll platform. Initial exposure to platform limitations and staffing gaps.',
    category: 'employment',
    significance: 'low',
    counts: [],
  },
  {
    date: 'Oct 2024',
    title: 'First Client Implementations Begin',
    detail: 'Assigned to multiple simultaneous U.S. Payroll implementations including Nuix, MagmaMath, Monarch Money, Planhat, ZeroAvia, and others. Immediately overwhelmed by volume and platform issues.',
    category: 'employment',
    significance: 'medium',
    counts: [5],
  },
  {
    date: 'Nov 2024',
    title: 'Payroll Compliance Issues Identified',
    detail: 'Discovered systemic payroll processing failures, data integrity issues, and tax withholding calculation errors affecting multiple client companies and their employees.',
    category: 'whistleblower',
    significance: 'critical',
    counts: [1, 2],
  },
  {
    date: 'Dec 2024',
    title: 'Escalations to Management Begin',
    detail: 'Formally escalated payroll compliance risks, employee data integrity concerns, and platform reliability failures to direct management and cross-functional leadership.',
    category: 'whistleblower',
    significance: 'critical',
    counts: [1, 2],
  },
  {
    date: 'Dec 2024',
    title: 'Home Purchase Closes — Dayton, OH',
    detail: 'Closed on home at 1380 Obie St, Dayton OH based on continued employment expectations and HiBob representations. Significant financial commitment based on reliance.',
    category: 'personal',
    significance: 'high',
    counts: [3],
  },
  {
    date: 'Jan 2025',
    title: 'Weekend & After-Hours Payroll Processing',
    detail: 'Required to work weekends and after-hours to process payroll runs for multiple clients due to platform failures and staffing shortfalls. No overtime compensation.',
    category: 'wage',
    significance: 'high',
    counts: [5],
  },
  {
    date: 'Jan–Feb 2025',
    title: 'Continued Escalations — Payroll Stabilization Plan',
    detail: 'Authored "U.S. Payroll Stabilization and Scale Plan" documenting systemic failures. Continued raising concerns about employee wage accuracy and compliance risks.',
    category: 'whistleblower',
    significance: 'critical',
    counts: [1, 2],
  },
  {
    date: 'Feb 2025',
    title: 'Retaliation Indicators Begin',
    detail: 'Shift in management tone following escalations. Performance narratives introduced despite no prior issues. Gaslighting regarding workload and platform limitations.',
    category: 'retaliation',
    significance: 'critical',
    counts: [1, 2, 4],
  },
  {
    date: 'Mar 2025',
    title: 'Termination — Wrongful Termination',
    detail: 'Abruptly terminated while actively managing client payroll implementations. No performance improvement plan, no warning. Terminated within weeks of final escalation.',
    category: 'termination',
    significance: 'critical',
    counts: [1, 2, 4],
  },
  {
    date: 'Mar 2025',
    title: 'Post-Termination — Offboarding & Final Pay Issues',
    detail: 'Experienced delays and lack of transparency regarding final paycheck, COBRA information, and return of personal property. HiBob offboarding process failures documented.',
    category: 'wage',
    significance: 'medium',
    counts: [4, 5],
  },
  {
    date: 'Apr–Sep 2025',
    title: 'Evidence Collection & Case Development',
    detail: 'Compiled 140+ call transcripts, internal documents, emails, and policies documenting the pattern of conduct. Retained counsel and prepared case materials.',
    category: 'legal',
    significance: 'high',
    counts: [],
  },
  {
    date: 'Oct 2025',
    title: 'U.S. Payroll Status Report Filed Internally',
    detail: 'Internal HiBob status report from Oct 6, 2025 confirms ongoing payroll platform issues — validating prior escalation concerns that led to termination.',
    category: 'evidence',
    significance: 'high',
    counts: [1, 2],
  },
  {
    date: 'Feb 2026',
    title: 'Prior Demand Letter Sent (Duwel Law)',
    detail: 'Initial demand letter sent by prior counsel. Established baseline negotiation position and put HiBob on formal notice of claims.',
    category: 'legal',
    significance: 'high',
    counts: [],
  },
  {
    date: 'Mar 2026',
    title: 'Amended Complaint & Supplemental Evidence Brief',
    detail: 'New counsel intake completed. Amended complaint drafted with expanded counts. Supplemental evidence brief compiled. Current demand: $500,000 pre-filing.',
    category: 'legal',
    significance: 'critical',
    counts: [1, 2, 3, 4, 5, 6],
  },
  {
    date: 'TBD',
    title: 'Filing Decision Point',
    detail: 'If settlement is not reached at $500K, complaint will be filed activating all counts with maximum exposure of $1.17M. Filing triggers discovery, depositions, and significant defense costs for HiBob.',
    category: 'legal',
    significance: 'critical',
    counts: [1, 2, 3, 4, 5, 6],
  },
];

const categoryColors = {
  employment: { bg: '#EBF5FB', text: '#3A7CA5', border: '#B8D9ED', dot: '#3A7CA5' },
  whistleblower: { bg: '#FDE8E8', text: '#C44', border: '#F5B7B7', dot: '#C44' },
  retaliation: { bg: '#FEF3E2', text: '#E8960C', border: '#FDD99B', dot: '#E8960C' },
  termination: { bg: '#FDE8E8', text: '#C44', border: '#F5B7B7', dot: '#C44' },
  wage: { bg: '#F0E6FA', text: '#7C3AED', border: '#D4B5F5', dot: '#7C3AED' },
  personal: { bg: 'rgba(200,169,81,0.1)', text: '#B59541', border: 'rgba(200,169,81,0.3)', dot: '#C8A951' },
  legal: { bg: 'rgba(58,124,165,0.08)', text: '#3A7CA5', border: 'rgba(58,124,165,0.2)', dot: '#3A7CA5' },
  evidence: { bg: 'rgba(45,138,78,0.08)', text: '#2D8A4E', border: 'rgba(45,138,78,0.2)', dot: '#2D8A4E' },
};

const categoryLabels = {
  employment: 'Employment',
  whistleblower: 'Whistleblower',
  retaliation: 'Retaliation',
  termination: 'Termination',
  wage: 'Wage & Hour',
  personal: 'Personal',
  legal: 'Legal',
  evidence: 'Evidence',
};

export default function TimelinePage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? timelineEvents
    : timelineEvents.filter((e) => e.category === filter);

  return (
    <CaseShell>
      <div className="max-w-4xl mx-auto fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#19314A' }}>Case Timeline</h1>
            <p className="text-sm mt-1" style={{ color: '#5C6370' }}>Chronological record of events</p>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              style={{ borderColor: '#E0E2E6', color: '#353535' }}
            >
              <option value="all">All Events</option>
              {Object.entries(categoryLabels).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          <div className="timeline-line" />

          {filtered.map((event, i) => {
            const colors = categoryColors[event.category];
            return (
              <div key={i} className="relative mb-6 fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                {/* Dot */}
                <div
                  className={`absolute left-[-25px] top-5 w-3 h-3 rounded-full ${event.significance === 'critical' ? 'pulse-accent ring-2 ring-offset-2 ring-blue-200' : ''}`}
                  style={{ background: colors.dot }}
                />

                {/* Card */}
                <div
                  className="bg-white border rounded-xl p-5 card-hover"
                  style={{
                    borderColor: event.significance === 'critical' ? colors.border : '#E0E2E6',
                    borderLeftWidth: event.significance === 'critical' ? '3px' : '1px',
                    borderLeftColor: event.significance === 'critical' ? colors.dot : '#E0E2E6',
                    boxShadow: '0 2px 8px rgba(25,49,74,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono" style={{ color: '#88939F' }}>{event.date}</span>
                    <span
                      className="px-2 py-0.5 text-xs rounded-full font-semibold"
                      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                    >
                      {categoryLabels[event.category]}
                    </span>
                    {event.significance === 'critical' && (
                      <span className="badge badge-red" style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                        Critical
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: '#19314A' }}>{event.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5C6370' }}>{event.detail}</p>
                  {event.counts.length > 0 && (
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xs" style={{ color: '#88939F' }}>Relevant:</span>
                      {event.counts.map((c) => (
                        <span key={c} className="px-2 py-0.5 text-xs rounded font-medium" style={{ background: '#F5F6F8', border: '1px solid #E0E2E6', color: '#5C6370' }}>
                          Count {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CaseShell>
  );
}
