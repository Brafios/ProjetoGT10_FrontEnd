import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0)
  const [texto, setTexto] = useState("");

  return (
    <BrowserRouter>
      <>
        <header className='w-screen h-20 bg-gray-400'>
          {/* Conteúdo do header */}
        </header>

        <main className=''>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <footer className="w-screen h-20 bg-black">
          <div className='logoCompleta'>
            <img src="./assets/img/LogoCompleta.png" alt="" />
          </div>
        </footer>
      </>
    </BrowserRouter>
  )
}

export default App
