import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
//require('dotenv').config();

const  SERVICE_ID = "service_poh07dp";
const  TEMPLATE_ID = "template_8gu6iie";
const  PUBLIC_KEY = "i1tB6IHlvHuPEcMyH";

const initialState = {
  name: "",
  email: "",
  numphone: "",
  message: "",
};

const Contato = () => {
  const [{ name, email, numphone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, numphone, message);
    
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
        <>
            <div className="h-screen w-screen flex justify-center items-center mt-16">
                <div className="flex flex-col items-center w-screen">
                    <div className="flex flex-col justify-center items-center w-[800px] bg-gray-300 p-8 rounded shadow-lg">
                        <h2 className="text-3xl text-center font-bold font-serif mb-6">Fale Conosco</h2>
                        <p className="text-center font-serif mb-6">
                        Utilize o formulário abaixo para se comunicar com a Federação das Associações Comerciais do Ceará (FACC).
                        </p>
                
                        <form name="sentMessage" onSubmit={handleSubmit} className="flex flex-col w-[400px]">
                            <label className="font-serif font-semibold mb-1">Nome</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-white text-center h-10 mb-4 rounded"
                            required
                            onChange={handleChange}
                            />

                            <label className="font-serif font-semibold mb-1">Email</label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-white text-center h-10 mb-4 rounded"
                            required
                            onChange={handleChange}
                            />

                            <label className="font-serif font-semibold mb-1">Telefone</label>
                            <input
                            type="numphone"
                            id="numphone"
                            name="numphone"
                            className="bg-white text-center h-10 mb-4 rounded"
                            required
                            onChange={handleChange}
                            />

                            <label className="font-serif font-semibold mb-1">Mensagem</label>
                            <textarea
                            name="message"
                            id="message"
                            className="bg-white text-center h-24 mb-4 rounded"
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
            </div>
        </>
     );
}
 
export default Contato;

