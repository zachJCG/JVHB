'use client';
import CaseShell from '../components/CaseShell';

const counts = [
  {
    id: 1,
    name: 'Wrongful Termination in Violation of Public Policy',
    status: 'Active',
    preFile: '$175,000',
    postFile: '$350,000',
    color: 'red',
    basis: 'Terminated for whistleblowing on payroll compliance failures affecting employee wages and tax withholdings',
  },
  {
    id: 2,
    name: 'Retaliation — Whistleblower Protection (Sarbanes-Oxley / State Law)',
    status: 'Active',
    preFile: '$125,000',
    postFile: '$275,000',
    color: 'red',
    basis: 'Escalated payroll processing failures, data integrity issues, and compliance risks to management; terminated within weeks of escalation',
  },
  {
    id: 3,
    name: 'Breach of Implied Contract / Promissory Estoppel',
    status: 'Active',
    preFile: '$75,000',
    postFile: '$150,000',
    color: 'amber',
    basis: 'Relied on representations of continued employment, relocation support, and career trajectory; terminated without cause or notice',
  },
  {
    id: 4,
    name: 'Intentional Infliction of Emotional Distress (IIED)',
    status: 'Potential',
    preFile: '$50,000',
    postFile: '$175,000',
    color: 'amber',
    basis: 'Pattern of extreme conduct: gaslighting re: performance, abrupt termination during active client work, withholding final pay information',
  },
  {
    id: 5,
    name: 'Wage & Hour Violations (FLSA / OH Rev. Code §4113)',
    status: 'Potential',
    preFile: '$40,000',
    postFile: '$120,000',
    color: 'amber',
    basis: 'Unpaid overtime for weekend/after-hours payroll processing work; misclassification of exempt status given actual duties',
  },
  {
    id: 6,
    name: 'Fraud / Negligent Misrepresentation',
    status: 'Potential',
    preFile: '$35,000',
    postFile: '$100,000',
    color: 'gold',
    basis: 'Material misrepresentations about role scope, team support, and product readiness during recruiting process',
  },
];

export default function DashboardPage() {
  return (
    <CaseShell>
      <div className="max-w-7xl mx-auto fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#19314A' }}>Case Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: '#5C6370' }}>Joseph v. HiBob, Inc. &mdash; Pre-Filing Phase</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge badge-amber">Pre-Filing</span>
            <span className="badge badge-accent">6 Counts Identified</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow mb-1" style={{ marginBottom: '4px' }}>Current Demand</div>
            <div className="text-2xl font-bold" style={{ color: '#C8A951' }}>$500,000</div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>Pre-filing settlement</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow mb-1" style={{ marginBottom: '4px' }}>Post-Filing Max</div>
            <div className="text-2xl font-bold" style={{ color: '#C44' }}>$1,170,000</div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>If complaint is filed</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow mb-1" style={{ marginBottom: '4px' }}>Active Counts</div>
            <div className="text-2xl font-bold" style={{ color: '#19314A' }}>3</div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>+ 3 potential counts</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow mb-1" style={{ marginBottom: '4px' }}>Evidence Items</div>
            <div className="text-2xl font-bold" style={{ color: '#19314A' }}>140+</div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>Transcripts, docs, emails</div>
          </div>
        </div>

        {/* Settlement Range Visual */}
        <div className="bg-white border rounded-xl p-6 mb-8" style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}>
          <h2 className="text-sm font-semibold mb-4" style={{ color: '#19314A' }}>Settlement Range</h2>
          <div className="relative">
            <div className="settlement-bar w-full mb-3" />
            <div className="flex justify-between text-xs" style={{ color: '#88939F' }}>
              <div className="text-center">
                <div className="font-semibold" style={{ color: '#2D8A4E' }}>$300K</div>
                <div>Floor</div>
              </div>
              <div className="text-center">
                <div className="font-semibold" style={{ color: '#C8A951' }}>$500K</div>
                <div>Current Demand</div>
              </div>
              <div className="text-center">
                <div className="font-semibold" style={{ color: '#E8960C' }}>$750K</div>
                <div>Likely (Filed)</div>
              </div>
              <div className="text-center">
                <div className="font-semibold" style={{ color: '#C44' }}>$1.17M</div>
                <div>Maximum</div>
              </div>
            </div>
            <div className="absolute top-0 left-[35%] -translate-x-1/2">
              <div className="w-4 h-4 rounded-full border-2 border-white -mt-1 pulse-accent" style={{ background: '#3A7CA5' }} />
            </div>
          </div>
        </div>

        {/* Counts Table */}
        <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}>
          <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid #E0E2E6' }}>
            <h2 className="text-sm font-semibold" style={{ color: '#19314A' }}>Counts & Valuation</h2>
            <div className="text-xs" style={{ color: '#88939F' }}>Pre-File → Post-File Range</div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs uppercase tracking-wider" style={{ color: '#88939F', borderBottom: '1px solid #E0E2E6' }}>
                <th className="text-left px-6 py-3">#</th>
                <th className="text-left px-6 py-3">Count</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-right px-6 py-3">Pre-File</th>
                <th className="text-right px-6 py-3">Post-File</th>
              </tr>
            </thead>
            <tbody>
              {counts.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50 transition-colors" style={{ borderBottom: '1px solid #ECEDF0' }}>
                  <td className="px-6 py-4 text-sm" style={{ color: '#88939F' }}>{c.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium" style={{ color: '#19314A' }}>{c.name}</div>
                    <div className="text-xs mt-0.5 max-w-lg" style={{ color: '#88939F' }}>{c.basis}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`badge ${c.status === 'Active' ? 'badge-green' : 'badge-amber'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm" style={{ color: '#5C6370' }}>{c.preFile}</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold" style={{ color: '#3A7CA5' }}>{c.postFile}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ background: '#F5F6F8' }}>
                <td colSpan="3" className="px-6 py-4 text-sm font-semibold" style={{ color: '#19314A' }}>Total Valuation</td>
                <td className="px-6 py-4 text-right text-sm font-bold" style={{ color: '#19314A' }}>$500,000</td>
                <td className="px-6 py-4 text-right text-sm font-bold" style={{ color: '#3A7CA5' }}>$1,170,000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Strategy Note */}
        <div className="mt-6 rounded-xl p-5" style={{ background: 'rgba(58, 124, 165, 0.06)', border: '1px solid rgba(58, 124, 165, 0.15)' }}>
          <div className="flex items-start gap-3">
            <span style={{ color: '#3A7CA5' }} className="text-lg">⚡</span>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: '#3A7CA5' }}>Settlement Strategy</div>
              <div className="text-sm" style={{ color: '#5C6370' }}>
                Current position is <strong style={{ color: '#19314A' }}>$500,000</strong> pre-filing demand.
                If HiBob does not settle, filing the complaint activates all 6 counts with a maximum
                exposure of <strong style={{ color: '#3A7CA5' }}>$1,170,000</strong>. The additional counts
                (IIED, Wage & Hour, Fraud) significantly increase leverage and litigation cost for defendant.
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseShell>
  );
}
