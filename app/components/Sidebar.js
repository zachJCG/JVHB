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
    <aside className="fixed left-0 top-0 h-full w-64 flex flex-col z-50" style={{ background: '#19314A', borderRight: '1px solid #E0E2E6' }}>
      {/* Brand header */}
      <div className="p-6" style={{ borderBottom: '1px solid #E0E2E6' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#0F2035' }}>
            <span className="font-extrabold text-sm" style={{ color: '#C8A951', letterSpacing: '1.5px' }}>JCG</span>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Joseph v. HiBob</div>
            <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>JCG + Duwel Law</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3">
        <div className="text-xs font-semibold uppercase tracking-wider px-3 mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Case Management
        </div>
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md mb-1 text-sm transition-all"
              style={active ? {
                background: 'rgba(58, 124, 165, 0.15)',
                color: '#3A7CA5',
                fontWeight: 600,
              } : {
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Status footer */}
      <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full pulse-accent" style={{ background: '#E8960C' }} />
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Pre-Filing &mdash; $500K Demand</span>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-xs py-2 rounded-md transition-colors"
          style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          Lock Session
        </button>
      </div>
    </aside>
  );
}
