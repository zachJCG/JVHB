'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
    <div className="min-h-screen flex items-center justify-center bg-jcg-bg-light relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #19314A 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #19314A 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-6">
            <Image
              src="/jcg-logo.png"
              alt="Joseph Carter Group"
              width={200}
              height={60}
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-jcg-navy mb-1">Joseph v. HiBob</h1>
          <p className="text-sm font-medium text-jcg-text-light mb-1">Case Tracker</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-xs font-bold uppercase tracking-widest text-jcg-gold">Joseph Carter Group</span>
            <span className="text-jcg-border">+</span>
            <span className="text-xs font-bold uppercase tracking-widest text-jcg-accent">Duwel Law</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-jcg-border rounded-xl p-8 shadow-jcg-lg">
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-jcg-charcoal mb-2">
              Access Code
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter case access code"
              className={`w-full px-4 py-3 bg-jcg-bg-light border rounded-lg text-jcg-text placeholder-jcg-steel focus:outline-none focus:ring-2 transition-all ${
                error
                  ? 'border-risk-red focus:ring-risk-red'
                  : 'border-jcg-border focus:ring-jcg-accent'
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
              className="mt-6 w-full py-3 bg-jcg-navy text-white font-bold rounded-lg hover:bg-jcg-navy-dark transition-colors disabled:opacity-50"
            >
              {loading ? 'Accessing...' : 'Enter Case Tracker'}
            </button>
          </form>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <span className="badge badge-accent">Privileged & Confidential</span>
          <span className="badge badge-gold">Attorney Work Product</span>
        </div>

        <p className="text-center text-jcg-steel text-xs mt-6">
          &copy; 2026 Joseph Carter Group + Duwel Law
        </p>
      </div>
    </div>
  );
}
