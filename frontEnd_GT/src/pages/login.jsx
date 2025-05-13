import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockUsers = [
  
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      alert("Login bem-sucedido!");
      navigate("/home"); // rota a ser criada no desafio
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    
    <div className="h-screen w-screen bg-white flex justify-center items-center">
        <div className="flex flex-col items-center w-screen ">
            <div className="flex  flex-col justify-center -mt-30 w-500 ">
                <h1 className="text-3xl text-center font-bold font-serif mb-3">Login</h1>
                <div className="flex flex-col w-[500px]">
                    <label htmlFor="" className="font-serif  font-semibold">Usuário ou E-mail</label>
                    <input  value={email} className=" bg-gray-300 text-center h-7 mp-1 mb-3 " onChange={(e) => setEmail(e.target.value)} />
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="font-serif  font-semibold ">Senha</label>
                        <a href="/recuperar" className="text-sm text-blue-500 hover:underline">Esqueceu a senha?</a>
                    </div>
                    <input  type="password" value={password} className="bg-gray-300 text-center h-7  mb-3" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button className="bg-blue-500 text-white font-bold rounded-md mb-2 w-40 h-8" onClick={handleLogin}>Entrar</button>
            <p>Não tem conta? <a href="/register" className="font-bold">Cadastre-se</a></p>
        </div>
    </div>
  );
}