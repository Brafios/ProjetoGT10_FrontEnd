import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; 

const mockUsers = [{ email: "geraçao@tech.com", password: "GT10" }];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = () => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      login(foundUser); 
      navigate("/");
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col justify-center items-center w-[750px] h-[400px] bg-gray-300 p-8 rounded">
          <h1 className="text-3xl text-center font-bold font-sans mb-6">Login</h1>

          <div className="flex flex-col w-[400px]">
          <label className="font-serif font-bold mb-1">Usuário ou E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white text-center h-10 mb-4 rounded"
          />

          <div className="flex justify-between items-center mb-1">
            <label className="font-serif font-semibold">Senha</label>
            <a href="/recuperar" className="text-sm text-blue-500 font-bold hover:underline">
              Esqueceu a senha?
            </a>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white text-center h-10 mb-4 rounded"
          />

          <button
            onClick={handleLogin}
            className="bg-gray-500 text-white font-bold rounded-md w-[150px] h-10 self-center"
          >
            Entrar
          </button>
        </div>
        <p className="mt-4 font-sans">
        Não tem conta? <a href="/register" className="font-bold font-sans">Cadastre-se</a>
        </p>
      </div>

      </div>
    </div>
  );
}