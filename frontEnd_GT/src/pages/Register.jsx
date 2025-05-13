
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <>
      <main className="bg-white min-h-screen flex flex-col justify-between font-sans">
    
        <div className="bg-gray-200 py-6">
          <h1 className="text-3xl font-bold font-serif mb-3 text-center">Cadastro</h1>
        </div>

  
        <div className="flex-1 px-4 py-10">
          <div className="w-[750px] mx-auto">
            <form className="flex flex-col gap-6">
              {[
                
                { label: "Nome Completo", type: "text"  },
                { label: "Usuário", type: "text" },
                { label: "E-mail", type: "email" },
                { label: "Função", type: "text" },
                { label: "Senha", type: "password" },
            
              ].map((field, index) => (
                
                <div key={index}>
                   <br />
                  <label className="text-font-serif  font-semibold  block mb-1">{field.label} * </label> <br />
                  <input
                    type={field.type}
                    required
                    className="bg-gray-300 text-black placeholder:text-gray-600 w-[700px] h-[54px] block px-3"
                  />
                </div>
              ))}
              <br />

        
              <button
                type="submit"
                className="bg-sky-500 text-white text-xs px-4 py-1 w-[50px] mt-15"
              >
                Enviar
              </button>

          
              <p className="text-sm text-center mt-4">
                Já tem conta?{' '}
                <Link to="/" className="text-blue-600 underline">
                  Entrar
                </Link>
              </p>
            </form>
          </div>
        </div>

      </main>
    </>
  );
}