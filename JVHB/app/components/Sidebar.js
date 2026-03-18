'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const nav = [
  { href: '/dashboard', label: 'Dashboard', icon: '◉' },
  { href: '/timeline', label: 'Timeline', icon: '◷' },
  { href: '/valuation', label: 'Valuation', icon: '◈' },
  { href: '/documents', label: 'Documents', icon: '◫' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('jvhb_auth');
    router.push('/');
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-jcg-navy border-r border-jcg-border flex flex-col z-50">
      {/* Brand header */}
      <div className="p-6 border-b border-jcg-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-jcg-bg border border-jcg-border flex items-center justify-center">
            <span className="text-jcg-gold font-bold text-sm">JCG</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Joseph v. HiBob</div>
            <div className="text-gray-500 text-xs">Case Tracker</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-3">
          Case Management
        </div>
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 text-sm transition-all ${
                active
                  ? 'bg-jcg-gold/10 text-jcg-gold border border-jcg-gold/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Status footer */}
      <div className="p-4 border-t border-jcg-border">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-risk-amber pulse-gold" />
          <span className="text-xs text-gray-400">Pre-Filing &mdash; $500K Demand</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-xs text-gray-500 hover:text-gray-300 py-2 border border-jcg-border rounded-lg transition-colors"
        >
          Lock Session
        </button>
      </div>
    </aside>
  );
}
