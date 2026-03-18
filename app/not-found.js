import Link from 'next/link';

export default function NotFound() {
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

      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Logo / Brand */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-jcg-navy border border-jcg-border mb-6">
          <span className="text-3xl font-bold text-jcg-gold font-display">JCG</span>
        </div>

        <div className="bg-jcg-navy border border-jcg-border rounded-xl p-10 shadow-2xl fade-in">
          <p className="text-6xl font-bold text-jcg-gold mb-4">404</p>
          <h1 className="text-xl font-semibold text-white mb-2">Page Not Found</h1>
          <p className="text-gray-400 text-sm mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-jcg-gold text-jcg-navy font-semibold rounded-lg hover:bg-jcg-gold-light transition-colors"
          >
            Return to Case Tracker
          </Link>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Joseph Carter Group &mdash; Attorney Work Product
        </p>
      </div>
    </div>
  );
}
