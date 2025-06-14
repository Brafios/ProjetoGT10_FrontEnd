import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [nome, setNome] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [funcao, setFuncao] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { nome, usuario, email, funcao, senha };
    console.log(formData);
  };
    return ( 
        <>
            <main className=" h-screen w-screen flex flex-col justify-between font-sans mt-20">
        <div className="flex flex-col justify-center items-center flex-1 py-10 ">
          <div className="flex flex-col justify-center items-center w-[800px] bg-gray-300 p-8 rounded">
            <h1 className="text-3xl text-center font-bold font-sans mb-6">Cadastro</h1>

            <form className="flex flex-col w-[400px] gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="font-sans font-semibold mb-1 block">Nome Completo*</label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="bg-white text-center h-9 mb-2 rounded w-full"
                />
              </div>

              <div>
                <label className="font-sans font-semibold mb-1 block">Usuário*</label>
                <input
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
                  className="bg-white text-center h-9 mb-2 rounded w-full"
                />
              </div>

              <div>
                <label className="font-sans font-semibold mb-1 block">E-mail*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-center h-9 mb-2 rounded w-full"
                />
              </div>

              <div>
                <label className="font-sans font-semibold mb-1 block">Função*</label>
                <input
                  type="text"
                  value={funcao}
                  onChange={(e) => setFuncao(e.target.value)}
                  required
                  className="bg-white text-center h-9 mb-2 rounded w-full"
                />
              </div>

              <div>
                <label className="font-sans font-semibold mb-1 block">Senha*</label>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  className="bg-white text-center h-9 mb-2 rounded w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-gray-500 text-white font-bold rounded-md w-[150px] h-10 self-center"
                
              >
                Cadastrar
              </button>

              <p className="mt-4 text-center">
                Já tem conta? <Link to="/" className="font-bold text-blue-600">Entrar</Link>
              </p>
            </form>
          </div>
        </div>

        
      </main>
        </>
     );
}
 
export default Registro;