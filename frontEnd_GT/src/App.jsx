import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import './App.css'
import './components/Footer/Footer.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
// import Home from "./pages/home";
// import Associacao from "./pages/associacao";
import Login from "./pages/login";
import Register from "./pages/Register";
import Recuperar from "../src/pages/Recuperar"
import Contato from './pages/contato';
import Associacoes from './pages/Associacoes/index';
import './App.css'
import Home from './pages/Home/home';



function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("");

  return (



    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={< Home />} />
          {/* <Route path="/associacao" element={<Associacao />} /> */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/associacoes' element={< Associacoes/>}/>
          <Route path='/home' element={< Home />}/>
          <Route path="/recuperar" element={<Recuperar />} />
        </Routes>
      </Layout>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
