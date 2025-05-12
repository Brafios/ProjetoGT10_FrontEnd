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
            {/* <Route path="/recuperar" element={<Recuperar />} /> */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/contato" element={<Contato />} /> */}
            {/* <Route path="/associacao" element={<Associaco />} /> */}
          </Routes>
        </main>

        <footer className="w-screen h-40 bg-gray-300 text-white">
          <div className='logoCompleta'>
            <img src="./src/assets/img/LogoCompleta(1).png" alt="" />
            <p className='text-sm'>Copyright: @ 2020 Landify Ui kit <br></br> All rights reserved</p>
            <div className='icones '>

            </div>
          </div>
        </footer>
      </>
    </BrowserRouter>
  )
}

export default App
