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

      <div className="relative z-10 w-full max-w-md px-6 text-center fade-in">
        {/* Logo / Brand */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-jcg-navy border border-jcg-border mb-6">
          <span className="text-3xl font-bold text-jcg-gold font-display">JCG</span>
        </div>

        <div className="bg-jcg-navy border border-jcg-border rounded-xl p-8 shadow-2xl">
          <div className="text-6xl font-bold text-jcg-gold mb-4">404</div>
          <h1 className="text-xl font-bold text-white mb-2">Page Not Found</h1>
          <p className="text-gray-400 text-sm mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard"
              className="w-full py-3 bg-jcg-gold text-jcg-navy font-semibold rounded-lg hover:bg-jcg-gold-light transition-colors text-center block"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="w-full py-3 bg-transparent border border-jcg-border text-gray-300 font-medium rounded-lg hover:border-jcg-gold hover:text-jcg-gold transition-colors text-center block"
            >
              Back to Login
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          Joseph Carter Group &mdash; Attorney Work Product
        </p>
      </div>
    </div>
  );
}
