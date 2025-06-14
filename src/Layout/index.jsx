
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"; 
import Header from "../components/Header";

const Layout = () => {
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
            <Header/>
            <div className={theme === 'dark' ? 'dark bg-gray-800 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
            <Outlet />
            </div>
            <Footer/>
        </>
     );
}
 
export default Layout;