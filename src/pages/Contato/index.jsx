import { useState } from "react";
import emailjs from "emailjs-com";

// Constantes de configuração do EmailJS
const  SERVICE_ID = "service_poh07dp";
const  TEMPLATE_ID = "template_8gu6iie";
const  PUBLIC_KEY = "i1tB6IHlvHuPEcMyH";

// Estado inicial do formulário
const initialState = {
  name: "",
  email: "",
  numphone: "",
  subject: "",
  message: "",
};

const Contato = () => {
  const [{ name, email, numphone, message }, setState] = useState(initialState);

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Limpa os campos do formulário
  const clearState = () => setState({ ...initialState });
  
  // Envia o formulário com EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, numphone, subject, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          alert ( 'Mensagem enviada com sucesso' );
          clearState();
        },
        (error) => {
          console.log(error.text);
          alert ( 'Algo deu errado!' );
        }
      );
    e.target.reset(); 
  };
    return (
    <div className="min-h-screen w-full flex justify-center items-start px-4 bg-gray-100">
      <div className="w-full max-w-2xl bg-gray-300 p-6 md:p-8 rounded shadow-lg mt-40">
        <h2 className="text-2xl md:text-3xl text-center font-bold font-serif mb-6">Fale Conosco</h2>
        <p className="text-center font-serif mb-6 text-sm md:text-base">
          Utilize o formulário abaixo para se comunicar com a Federação das Associações Comerciais do Ceará (FACC).
        </p>

        {/* Formulário responsivo */}
        <form name="sentMessage" onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="font-serif font-semibold mb-1">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-white text-center h-10 mb-4 rounded text-sm"
            required
            onChange={handleChange}
          />

          <label className="font-serif font-semibold mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-white text-center h-10 mb-4 rounded text-sm"
            required
            onChange={handleChange}
          />

          <label className="font-serif font-semibold mb-1">Telefone</label>
          <input
            type="text"
            id="numphone"
            name="numphone"
            className="bg-white text-center h-10 mb-4 rounded text-sm"
            required
            onChange={handleChange}
          />

          <label className="font-serif font-semibold mb-1">Assunto</label>
          <textarea
            type="text"
            name="subject"
            id="subject"
            className="bg-white text-center h-10 mb-4 rounded text-sm resize-none"
            required
            onChange={handleChange}
          ></textarea>

          <label className="font-serif font-semibold mb-1">Mensagem</label>
          <textarea
            name="message"
            id="message"
            className="bg-white text-center h-24 mb-4 rounded text-sm resize-none"
            required
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-gray-500 text-white font-bold rounded-md w-[150px] h-10 self-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default Contato;

