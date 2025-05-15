import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


export default function Layout({ children }) {
  const location = useLocation();

  const rotasSemLayout = ['/em-construcao'];

  const esconderLayout = rotasSemLayout.includes(location.pathname);  
    

    return (
      <>
        {!esconderLayout && <Header />}
        <main>{children}</main>
        {!esconderLayout && <Footer />}
      </>
    );
  }