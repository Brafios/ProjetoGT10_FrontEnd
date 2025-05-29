import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockUsers = [
  { email: "geraçao@tech.com"}
];

export default function Recuperar(){
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRecuperar = () => {
        const foundUser = mockUsers.find(
          (user) => user.email === email 
        );
        if (foundUser) {
          alert("Email de recuperação enviado");
          navigate("/login");
        } else {
          alert("Email não encontrado");
        }
      };

    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col items-center w-screen">
                <div className="flex flex-col justify-center items-center w-[750px] h-[400px] bg-gray-300 p-8 rounded">
                    <h1 className="text-3xl text-center font-bold font-serif mb-6">Recuperar Senha</h1>
        
                    <div className="flex flex-col w-[400px]">
                    <label className="font-serif font-semibold mb-1">Usuário ou E-mail</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-center h-10 mb-4 rounded"
                    />
                    <button
                    onClick={handleRecuperar}
                    className="bg-gray-500 text-white font-bold rounded-md w-[150px] h-10 self-center"
                    >
                    Confirmar
                    </button>
                </div>
                <p className="mt-4">
                Não tem conta? <a href="/register" className="font-bold">Cadastre-se</a>
                </p>
                </div>
    
            </div>
        </div>
    )

}