import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export default function Contato (props) {
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
    <div>
      <div id="contact">
        <div className="h-40 flex flex-col items-center justify-center bg-gray-300">
            <h2 className="">Fale Conosco</h2>
        </div>
        <div className="container flex flex-col items-center">
            
          <div className="col-md-10">
            <div className="row">
              <div className="section-title">
                
                <p className="mt-10">
                  Utilize o formulário abaixo para se comunicar com a Federação das Associações Comerciais do Ceará (FACC).
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row flex flex-col w-full">
                  <div className="w-full">
                    <div className="form-group w-full">
                        <p>Nome</p>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                            <p>Email</p>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                        <p className="help-block text-danger"></p>
                        </div>
                    <div className="form-group">
                            <p>Telefone</p>
                                <input
                                type="phone"
                                id="phone"
                                name="phone"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                        <p className="help-block text-danger"></p>
                        </div>

                    

                    <div className="form-group">
                        <p>Mensagem</p>
                        <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="3"
                        required
                        onChange={handleChange}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                    </div>

                  </div>

                  
                </div>
                
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};