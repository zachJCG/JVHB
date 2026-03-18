'use client';
import AuthGuard from './AuthGuard';
import Sidebar from './Sidebar';

export default function CaseShell({ children }) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen" style={{ background: '#F5F6F8' }}>
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
