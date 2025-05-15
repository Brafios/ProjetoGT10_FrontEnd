import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Footer from './components/Footer'
import Header from './components/Header'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recuperar from "./pages/Recuperar";
import Contato from './pages/Contato';
import Associacoes from './pages/Associacoes';
import Home from './pages/Home';
import EmConstrucao from './pages/EmConstrucao';


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
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/em-construcao" element={<EmConstrucao />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
