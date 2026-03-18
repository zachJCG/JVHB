'use client';
import CaseShell from '../components/CaseShell';

const counts = [
  {
    id: 1,
    name: 'Wrongful Termination in Violation of Public Policy',
    status: 'Active',
    preFile: '$175,000',
    postFile: '$350,000',
    color: 'risk-red',
    basis: 'Terminated for whistleblowing on payroll compliance failures affecting employee wages and tax withholdings',
  },
  {
    id: 2,
    name: 'Retaliation — Whistleblower Protection (Sarbanes-Oxley / State Law)',
    status: 'Active',
    preFile: '$125,000',
    postFile: '$275,000',
    color: 'risk-red',
    basis: 'Escalated payroll processing failures, data integrity issues, and compliance risks to management; terminated within weeks of escalation',
  },
  {
    id: 3,
    name: 'Breach of Implied Contract / Promissory Estoppel',
    status: 'Active',
    preFile: '$75,000',
    postFile: '$150,000',
    color: 'risk-amber',
    basis: 'Relied on representations of continued employment, relocation support, and career trajectory; terminated without cause or notice',
  },
  {
    id: 4,
    name: 'Intentional Infliction of Emotional Distress (IIED)',
    status: 'Potential',
    preFile: '$50,000',
    postFile: '$175,000',
    color: 'risk-amber',
    basis: 'Pattern of extreme conduct: gaslighting re: performance, abrupt termination during active client work, withholding final pay information',
  },
  {
    id: 5,
    name: 'Wage & Hour Violations (FLSA / OH Rev. Code §4113)',
    status: 'Potential',
    preFile: '$40,000',
    postFile: '$120,000',
    color: 'risk-amber',
    basis: 'Unpaid overtime for weekend/after-hours payroll processing work; misclassification of exempt status given actual duties',
  },
  {
    id: 6,
    name: 'Fraud / Negligent Misrepresentation',
    status: 'Potential',
    preFile: '$35,000',
    postFile: '$100,000',
    color: 'jcg-gold',
    basis: 'Material misrepresentations about role scope, team support, and product readiness during recruiting process',
  },
];

const totalPreFile = 500000;
const totalPostFile = 1170000;

export default function DashboardPage() {
  return (
    <CaseShell>
      <div className="max-w-7xl mx-auto fade-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Case Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Joseph v. HiBob, Inc. &mdash; Pre-Filing Phase</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-risk-amber/10 text-risk-amber text-xs font-medium rounded-full border border-risk-amber/20">
              Pre-Filing
            </span>
            <span className="px-3 py-1.5 bg-jcg-gold/10 text-jcg-gold text-xs font-medium rounded-full border border-jcg-gold/20">
              6 Counts Identified
            </span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="kpi-card rounded-xl p-5">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Demand</div>
            <div className="text-2xl font-bold text-jcg-gold">$500,000</div>
            <div className="text-xs text-gray-500 mt-1">Pre-filing settlement</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Post-Filing Max</div>
            <div className="text-2xl font-bold text-risk-red">$1,170,000</div>
            <div className="text-xs text-gray-500 mt-1">If complaint is filed</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Active Counts</div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-xs text-gray-500 mt-1">+ 3 potential counts</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Evidence Items</div>
            <div className="text-2xl font-bold text-white">140+</div>
            <div className="text-xs text-gray-500 mt-1">Transcripts, docs, emails</div>
          </div>
        </div>

        {/* Settlement Range Visual */}
        <div className="bg-jcg-navy border border-jcg-border rounded-xl p-6 mb-8">
          <h2 className="text-sm font-semibold text-white mb-4">Settlement Range</h2>
          <div className="relative">
            <div className="settlement-bar w-full mb-3" />
            <div className="flex justify-between text-xs text-gray-400">
              <div className="text-center">
                <div className="font-semibold text-risk-green">$300K</div>
                <div>Floor</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-jcg-gold">$500K</div>
                <div>Current Demand</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-risk-amber">$750K</div>
                <div>Likely (Filed)</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-risk-red">$1.17M</div>
                <div>Maximum</div>
              </div>
            </div>
            {/* Current position marker */}
            <div className="absolute top-0 left-[35%] -translate-x-1/2">
              <div className="w-4 h-4 bg-jcg-gold rounded-full border-2 border-white -mt-1 pulse-gold" />
            </div>
          </div>
        </div>

        {/* Counts Table */}
        <div className="bg-jcg-navy border border-jcg-border rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-jcg-border flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">Counts & Valuation</h2>
            <div className="text-xs text-gray-500">Pre-File → Post-File Range</div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 uppercase tracking-wider border-b border-jcg-border">
                <th className="text-left px-6 py-3">#</th>
                <th className="text-left px-6 py-3">Count</th>
                <th className="text-left px-6 py-3">Status</th>
                <th className="text-right px-6 py-3">Pre-File</th>
                <th className="text-right px-6 py-3">Post-File</th>
              </tr>
            </thead>
            <tbody>
              {counts.map((c) => (
                <tr key={c.id} className="border-b border-jcg-border/50 hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-400">{c.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white font-medium">{c.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 max-w-lg">{c.basis}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      c.status === 'Active'
                        ? 'bg-risk-green/10 text-risk-green border border-risk-green/20'
                        : 'bg-risk-amber/10 text-risk-amber border border-risk-amber/20'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-300">{c.preFile}</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-jcg-gold">{c.postFile}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-jcg-bg/50">
                <td colSpan="3" className="px-6 py-4 text-sm font-semibold text-white">Total Valuation</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-white">$500,000</td>
                <td className="px-6 py-4 text-right text-sm font-bold text-jcg-gold">$1,170,000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Strategy Note */}
        <div className="mt-6 bg-jcg-gold/5 border border-jcg-gold/20 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-jcg-gold text-lg">⚡</span>
            <div>
              <div className="text-sm font-semibold text-jcg-gold mb-1">Settlement Strategy</div>
              <div className="text-sm text-gray-300">
                Current position is <strong className="text-white">$500,000</strong> pre-filing demand.
                If HiBob does not settle, filing the complaint activates all 6 counts with a maximum
                exposure of <strong className="text-jcg-gold">$1,170,000</strong>. The additional counts
                (IIED, Wage & Hour, Fraud) significantly increase leverage and litigation cost for defendant.
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseShell>
  );
}
