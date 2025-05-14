import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export default function Home (props) {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col justify-center items-center w-[750px] bg-gray-300 p-8 rounded">
          <h2 className="text-3xl text-center font-bold font-serif mb-6">Home Provisorio</h2>
          <p className="text-center font-serif mb-6">
          Utilize o formulário abaixo para se comunicar com a Federação das Associações Comerciais do Ceará (FACC).
          </p>
      
          <form name="sentMessage" validate onSubmit={handleSubmit} className="flex flex-col w-[400px]">
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
          type="phone"
          id="phone"
          name="phone"
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

  );
};