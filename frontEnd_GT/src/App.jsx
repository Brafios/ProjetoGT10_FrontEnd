import { useState } from 'react'
import './App.css'
import './components/Footer/Footer.css'
import Layout from './Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Recuperar from "./pages/Recuperar";
import { Footer } from './components/Footer';
// import Meunome from  "./pages/Register";

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("");

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recuperar" element={<Recuperar />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
