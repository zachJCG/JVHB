'use client';
import CaseShell from '../components/CaseShell';
import { useState } from 'react';

const initialCounts = [
  {
    id: 1,
    name: 'Wrongful Termination in Violation of Public Policy',
    status: 'active',
    preFile: 175000,
    postFile: 350000,
    category: 'Core',
    description: 'Terminated for whistleblowing on payroll compliance failures affecting employee wages and tax withholdings. Greeley anchor — primary count.',
    evidence: 'Call transcripts (escalation meetings), U.S. Payroll Stabilization Plan, termination timing, HiBob internal status reports confirming issues post-termination.',
    legalBasis: 'Ohio Rev. Code §4113.52 (Whistleblower Protection); Public policy exception to at-will employment',
  },
  {
    id: 2,
    name: 'Retaliation — Whistleblower Protection',
    status: 'active',
    preFile: 125000,
    postFile: 275000,
    category: 'Core',
    description: 'Escalated payroll processing failures, data integrity issues, and compliance risks to management. Terminated within weeks of final escalation.',
    evidence: 'Timeline of escalations vs. termination date, shift in management tone, absence of PIP or warning, prior positive performance indicators.',
    legalBasis: 'Sarbanes-Oxley §806 (if applicable); Ohio Whistleblower Protection Act; Common law wrongful discharge',
  },
  {
    id: 3,
    name: 'Breach of Implied Contract / Promissory Estoppel',
    status: 'active',
    preFile: 75000,
    postFile: 150000,
    category: 'Core',
    description: 'Relied on representations of continued employment, relocation support, and career trajectory. Purchased home in Dec 2024 based on these assurances.',
    evidence: 'Offer letter, recruiting call transcripts, relocation timeline, home purchase closing docs (Dec 2024).',
    legalBasis: 'Promissory estoppel; Implied contract under Ohio law; Detrimental reliance',
  },
  {
    id: 4,
    name: 'Intentional Infliction of Emotional Distress (IIED)',
    status: 'potential',
    preFile: 50000,
    postFile: 175000,
    category: 'Supplemental',
    description: 'Pattern of extreme conduct: gaslighting re: performance, abrupt termination during active client work, withholding final pay information.',
    evidence: '1:1 meeting transcripts showing tone shift, abruptness of termination, post-termination offboarding failures.',
    legalBasis: 'Ohio common law IIED — requires outrageous conduct beyond all bounds of decency',
  },
  {
    id: 5,
    name: 'Wage & Hour Violations',
    status: 'potential',
    preFile: 40000,
    postFile: 120000,
    category: 'Supplemental',
    description: 'Unpaid overtime for weekend/after-hours payroll processing work. Potential misclassification of exempt status given actual duties performed.',
    evidence: 'Call transcripts showing weekend work sessions, client-facing meeting records outside business hours, job description vs. actual duties analysis.',
    legalBasis: 'FLSA §207 (overtime); Ohio Rev. Code §4111.03; Potential misclassification claim',
  },
  {
    id: 6,
    name: 'Fraud / Negligent Misrepresentation',
    status: 'potential',
    preFile: 35000,
    postFile: 100000,
    category: 'Supplemental',
    description: 'Material misrepresentations about role scope, team support, product readiness, and growth trajectory during recruiting process.',
    evidence: 'Interview/recruiting call transcripts, actual vs. represented team structure, product capability gaps documented in implementation records.',
    legalBasis: 'Ohio fraud elements: false representation, knowledge of falsity, intent to induce reliance, justifiable reliance, resulting damage',
  },
];

export default function ValuationPage() {
  const [counts] = useState(initialCounts);
  const [expandedId, setExpandedId] = useState(null);
  const [phase, setPhase] = useState('pre');

  const totalPreFile = counts.reduce((a, c) => a + c.preFile, 0);
  const totalPostFile = counts.reduce((a, c) => a + c.postFile, 0);

  return (
    <CaseShell>
      <div className="max-w-6xl mx-auto fade-in">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#19314A' }}>Valuation & Settlement Strategy</h1>
            <p className="text-sm mt-1" style={{ color: '#5C6370' }}>Count-by-count breakdown with filing leverage analysis</p>
          </div>
          <div className="flex bg-white border rounded-md overflow-hidden" style={{ borderColor: '#E0E2E6' }}>
            <button
              onClick={() => setPhase('pre')}
              className="px-4 py-2 text-sm font-semibold transition-colors"
              style={phase === 'pre' ? { background: '#19314A', color: 'white' } : { color: '#5C6370' }}
            >
              Pre-Filing
            </button>
            <button
              onClick={() => setPhase('post')}
              className="px-4 py-2 text-sm font-semibold transition-colors"
              style={phase === 'post' ? { background: '#C44', color: 'white' } : { color: '#5C6370' }}
            >
              Post-Filing
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>
              {phase === 'pre' ? 'Current Demand' : 'Filing Demand'}
            </div>
            <div className="text-3xl font-bold" style={{ color: phase === 'pre' ? '#C8A951' : '#C44' }}>
              ${phase === 'pre' ? totalPreFile.toLocaleString() : totalPostFile.toLocaleString()}
            </div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>
              {phase === 'pre' ? 'Settlement target' : 'Maximum exposure for defendant'}
            </div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>Filing Multiplier</div>
            <div className="text-3xl font-bold" style={{ color: '#19314A' }}>
              {(totalPostFile / totalPreFile).toFixed(1)}x
            </div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>Increase if complaint is filed</div>
          </div>
          <div className="kpi-card rounded-xl p-5">
            <div className="section-eyebrow" style={{ marginBottom: '4px' }}>Defendant Litigation Cost</div>
            <div className="text-3xl font-bold" style={{ color: '#E8960C' }}>$200K+</div>
            <div className="text-xs mt-1" style={{ color: '#88939F' }}>Estimated defense costs through trial</div>
          </div>
        </div>

        {/* Leverage Analysis */}
        <div className="bg-white border rounded-xl p-6 mb-8" style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}>
          <h2 className="text-sm font-semibold mb-4" style={{ color: '#19314A' }}>Settlement Leverage Analysis</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3" style={{ color: '#88939F' }}>Why HiBob Should Settle Now</h3>
              <ul className="space-y-2">
                {[
                  'Avoid discovery exposing internal payroll compliance failures',
                  'Prevent depositions of management who made termination decision',
                  'Limit reputational risk — payroll compliance failures affect B2B trust',
                  'Defense costs alone ($200K+) approach pre-filing settlement',
                  'Filing adds 3 additional counts increasing max exposure to $1.17M',
                  'Strong whistleblower timeline — escalation-to-termination gap is narrow',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#5C6370' }}>
                    <span style={{ color: '#2D8A4E' }} className="mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider mb-3" style={{ color: '#88939F' }}>Risk Factors (Our Side)</h3>
              <ul className="space-y-2">
                {[
                  'At-will employment is default under Ohio law — need clear public policy hook',
                  'IIED has a high bar in Ohio — "beyond all bounds of decency"',
                  'SOX applicability depends on HiBob\'s reporting obligations',
                  'Wage & hour claims require detailed hour tracking documentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#5C6370' }}>
                    <span style={{ color: '#E8960C' }} className="mt-0.5">⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Count Details */}
        <div className="space-y-3">
          <h2 className="text-sm font-semibold mb-2" style={{ color: '#19314A' }}>Count Details</h2>

          {['Core', 'Supplemental'].map((cat) => (
            <div key={cat}>
              <div className="text-xs uppercase tracking-wider mb-2 mt-4" style={{ color: '#88939F' }}>{cat} Counts</div>
              {counts.filter((c) => c.category === cat).map((count) => (
                <div
                  key={count.id}
                  className="bg-white border rounded-xl mb-3 overflow-hidden card-hover"
                  style={{ borderColor: '#E0E2E6', boxShadow: '0 2px 8px rgba(25,49,74,0.06)' }}
                >
                  <button
                    onClick={() => setExpandedId(expandedId === count.id ? null : count.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold w-8" style={{ color: '#88939F' }}>#{count.id}</span>
                      <div>
                        <div className="text-sm font-medium" style={{ color: '#19314A' }}>{count.name}</div>
                        <div className="text-xs mt-0.5" style={{ color: '#88939F' }}>{count.description.slice(0, 80)}...</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={`badge ${count.status === 'active' ? 'badge-green' : 'badge-amber'}`}>
                        {count.status === 'active' ? 'Active' : 'Potential'}
                      </span>
                      <div className="text-right">
                        <div className="text-sm font-bold" style={{ color: phase === 'pre' ? '#C8A951' : '#C44' }}>
                          ${phase === 'pre' ? count.preFile.toLocaleString() : count.postFile.toLocaleString()}
                        </div>
                      </div>
                      <span style={{ color: '#88939F' }} className="text-sm">{expandedId === count.id ? '▲' : '▼'}</span>
                    </div>
                  </button>

                  {expandedId === count.id && (
                    <div className="px-6 pb-5 pt-4 fade-in" style={{ borderTop: '1px solid #E0E2E6' }}>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#88939F' }}>Description</div>
                          <p className="text-sm leading-relaxed" style={{ color: '#5C6370' }}>{count.description}</p>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#88939F' }}>Legal Basis</div>
                          <p className="text-sm leading-relaxed" style={{ color: '#5C6370' }}>{count.legalBasis}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#88939F' }}>Key Evidence</div>
                        <p className="text-sm leading-relaxed" style={{ color: '#5C6370' }}>{count.evidence}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-6">
                        <div>
                          <div className="text-xs" style={{ color: '#88939F' }}>Pre-Filing</div>
                          <div className="text-lg font-bold" style={{ color: '#C8A951' }}>${count.preFile.toLocaleString()}</div>
                        </div>
                        <div style={{ color: '#E0E2E6' }}>→</div>
                        <div>
                          <div className="text-xs" style={{ color: '#88939F' }}>Post-Filing</div>
                          <div className="text-lg font-bold" style={{ color: '#C44' }}>${count.postFile.toLocaleString()}</div>
                        </div>
                        <div style={{ color: '#E0E2E6' }}>→</div>
                        <div>
                          <div className="text-xs" style={{ color: '#88939F' }}>Multiplier</div>
                          <div className="text-lg font-bold" style={{ color: '#19314A' }}>{(count.postFile / count.preFile).toFixed(1)}x</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Decision Matrix */}
        <div className="mt-8 rounded-xl p-6" style={{ background: 'rgba(58,124,165,0.06)', border: '1px solid rgba(58,124,165,0.15)' }}>
          <h2 className="text-sm font-semibold mb-4" style={{ color: '#3A7CA5' }}>Decision Matrix: Settle vs. File</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-lg p-4" style={{ background: '#F5F6F8' }}>
              <div className="text-sm font-semibold mb-2" style={{ color: '#2D8A4E' }}>✓ Settle at $500K</div>
              <ul className="space-y-1 text-xs" style={{ color: '#5C6370' }}>
                <li>• Immediate resolution, no litigation risk</li>
                <li>• Avoids 12–18 month litigation timeline</li>
                <li>• Confidential settlement preserves both parties</li>
                <li>• No discovery exposure for either side</li>
              </ul>
            </div>
            <div className="rounded-lg p-4" style={{ background: '#F5F6F8' }}>
              <div className="text-sm font-semibold mb-2" style={{ color: '#C44' }}>⚡ File — Escalate to $1.17M</div>
              <ul className="space-y-1 text-xs" style={{ color: '#5C6370' }}>
                <li>• All 6 counts become active at maximum valuation</li>
                <li>• Discovery forces production of internal communications</li>
                <li>• Depositions of decision-makers</li>
                <li>• Public filing creates reputational pressure</li>
                <li>• Attorney fees petition if prevailing on statutory claims</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CaseShell>
  );
}
