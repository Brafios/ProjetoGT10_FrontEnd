
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
      <main className="bg-white min-h-screen flex flex-col justify-between font-sans">
        
        <div className="flex flex-col justify-center items-center flex-1 py-10 bg-white">
          <div className="flex flex-col justify-center items-center w-[750px] bg-gray-300 p-8 rounded">
            <h1 className="text-3xl text-center font-bold font-serif mb-6">Cadastro</h1>

            <form className="flex flex-col w-[400px] gap-4">
              {[
                { label: "Nome Completo", type: "text" },
                { label: "Usuário", type: "text" },
                { label: "E-mail", type: "email" },
                { label: "Função", type: "text" },
                { label: "Senha", type: "password" },
              ].map((field, index) => (
                <div key={index}>
                  <label className="font-serif font-semibold mb-1 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    className="bg-white text-center h-10 mb-2 rounded w-full"
                  />
                </div>
              ))}

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