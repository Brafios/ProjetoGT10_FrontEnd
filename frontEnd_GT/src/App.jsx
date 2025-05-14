import { useState } from 'react'
import './App.css'
import './components/Footer/Footer.css'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './Layout'
import Login from "./pages/login";
import Register from "./pages/Register";
import { Footer } from './components/Footer';
// import Meunome from  "./pages/Register";
import Contato from './pages/contato';
import './App.css'

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
          <Route path='/associacoes' element/>
        </Routes>
      </Layout>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
