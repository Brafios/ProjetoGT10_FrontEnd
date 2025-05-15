import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';


export default function Layout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    );
  }