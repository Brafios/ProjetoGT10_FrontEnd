import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Layout';
import Login from "./pages/login";
import Register from "./pages/Register";
import Recuperar from "./pages/Recuperar";
import Contato from "./pages/Contato";
import Associacoes from "./pages/Associacoes";
import Home from "./pages/Home";
import EmConstrucao from "./pages/EmConstrucao";
import { AuthProvider } from "./pages/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/associacoes" element={<Associacoes />} />
            <Route path="/recuperar" element={<Recuperar />} />
            <Route path="/em-construcao" element={<EmConstrucao />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

