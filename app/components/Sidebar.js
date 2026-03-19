'use client';
import Link from 'next/link';
import Image from 'next/image';
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
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col z-50 bg-jcg-navy" style={{ borderRight: '1px solid #E0E2E6' }}>
      {/* Brand header */}
      <div className="p-6 border-b border-white/10">
        <div className="mb-3">
          <Image
            src="/jcg-logo-reversed.png"
            alt="Joseph Carter Group"
            width={140}
            height={42}
          />
        </div>
        <div>
          <div className="text-white font-semibold text-sm">Joseph v. HiBob</div>
          <div className="text-xs text-white/50">JCG + Duwel Law</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <div className="text-xs font-semibold uppercase tracking-wider px-3 mb-3 text-white/40">
          Case Management
        </div>
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md mb-1 text-sm transition-all ${
                active
                  ? 'bg-jcg-accent/15 text-jcg-accent font-semibold'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Status footer */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-risk-amber pulse-accent" />
          <span className="text-xs text-white/50">Pre-Filing &mdash; $500K Demand</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-xs text-white/40 py-2 border border-white/10 rounded-md transition-colors hover:text-white/60"
        >
          Lock Session
        </button>
      </div>
    </aside>
  );
}
