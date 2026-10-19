import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL;

export default function App() {
  const [status, setStatus] = useState('Checking backend…');

  useEffect(() => {
    fetch(`${API}/health/db`)
      .then((r) => r.json())
      .then((d) =>
        setStatus(d.status === 'ok' ? 'Backend + Supabase connected' : 'Backend error')
      )
      .catch(() => setStatus('Backend unreachable'));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F5F1]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#1E1B4B]">PREP</h1>
        <p className="mt-2 text-stone-600">{status}</p>
      </div>
    </div>
  );
}