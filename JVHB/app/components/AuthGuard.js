'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }) {
  const [authed, setAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('jvhb_auth') === 'true') {
      setAuthed(true);
    } else {
      router.push('/');
    }
  }, [router]);

  if (!authed) return null;
  return children;
}
