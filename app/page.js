'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password === 'jcg2026!') {
      sessionStorage.setItem('jvhb_auth', 'true');
      router.push('/dashboard');
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: '#19314A' }}>
      {/* Background radial effects — matches JCG hero */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(58, 124, 165, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(200, 169, 81, 0.08) 0%, transparent 60%)
        `
      }} />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Brand — JCG + Duwel Law */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6" style={{ background: '#0F2035', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span className="text-2xl font-extrabold tracking-wider" style={{ color: '#C8A951' }}>JCG</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Joseph v. HiBob</h1>
          <p className="text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>Case Tracker</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#C8A951' }}>Joseph Carter Group</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>+</span>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#3A7CA5' }}>Duwel Law</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-xl p-8" style={{ background: '#0F2035', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter case access code"
              className="w-full px-4 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
              style={{
                background: '#19314A',
                border: error ? '1px solid #C44' : '1px solid rgba(255,255,255,0.1)',
                focusRingColor: error ? '#C44' : '#3A7CA5',
              }}
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm fade-in" style={{ color: '#C44' }}>
                Invalid access code. Try again.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 font-bold rounded-md transition-all disabled:opacity-50"
              style={{ background: '#19314A', color: 'white', border: '2px solid rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.borderColor = 'rgba(255,255,255,0.8)'; }}
              onMouseLeave={(e) => { e.target.style.background = '#19314A'; e.target.style.borderColor = 'rgba(255,255,255,0.5)'; }}
            >
              {loading ? 'Accessing...' : 'Enter Case Tracker'}
            </button>
          </form>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <span className="inline-flex items-center px-3 py-2 rounded-full text-xs" style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.84)' }}>
            Privileged & Confidential
          </span>
          <span className="inline-flex items-center px-3 py-2 rounded-full text-xs" style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.84)' }}>
            Attorney Work Product
          </span>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
          &copy; 2026 Joseph Carter Group + Duwel Law
        </p>
      </div>
    </div>
  );
}
