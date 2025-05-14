import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import './App.css'
import './components/Footer/Footer.css'
import Layout from './Layout'
import Login from "./pages/login";
import Register from "./pages/Register";
import Contato from './pages/contato';
import Associacoes from './pages/Associacoes';
import Home from './pages/Home/home';


function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("");

  return (



    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contato" element={<Contato />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/associacoes' element={< Associacoes/>}/>
          <Route path='/home' element={< Home />}/>
        </Routes>
      </Layout>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
