import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout({ children }) {
  const location = useLocation();
  const rotasSemLayout = ['/em-construcao'];
  const esconderLayout = rotasSemLayout.includes(location.pathname);

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }

    const interval = setInterval(() => {
      const newTheme = localStorage.getItem('theme');
      if (newTheme !== theme) {
        setTheme(newTheme);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [theme]);

  return (
    <>
      {!esconderLayout && <Header />}
      <main className={theme === 'dark' ? 'dark bg-[#121212] text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        {children}
      </main>
      {!esconderLayout && <Footer />}
    </>
  );
}