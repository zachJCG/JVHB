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
    if (password === 'JCG2026!') {
      sessionStorage.setItem('jvhb_auth', 'true');
      router.push('/dashboard');
    } else {
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-jcg-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #c9a84c 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #c9a84c 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-jcg-navy border border-jcg-border mb-6">
            <span className="text-3xl font-bold text-jcg-gold font-display">JCG</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Joseph v. HiBob</h1>
          <p className="text-gray-400 text-sm">Case Tracker &mdash; Privileged & Confidential</p>
        </div>

        {/* Login Card */}
        <div className="bg-jcg-navy border border-jcg-border rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter case access code"
              className={`w-full px-4 py-3 bg-jcg-bg border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                error
                  ? 'border-risk-red focus:ring-risk-red'
                  : 'border-jcg-border focus:ring-jcg-gold'
              }`}
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-risk-red fade-in">
                Invalid access code. Try again.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3 bg-jcg-gold text-jcg-navy font-semibold rounded-lg hover:bg-jcg-gold-light transition-colors disabled:opacity-50"
            >
              {loading ? 'Accessing...' : 'Enter Case Tracker'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Joseph Carter Group &mdash; Attorney Work Product
        </p>
      </div>
    </div>
  );
}
