import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";

import API from '../../Api.js';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Tittle from "../../components/Tittle";

const Recuperar = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    
    const onSubmit = async (data) => {
       setLoading(true);
       setMessage("");

       try{
        const response = await API.post('auth/request-password-reset', { email: data.email});

        setMessage(response.data.message);
        reset();
       } catch(err){
        const errorMessage = err.response?.data?.error || "Ocorreu um erro ao conectar ao servidor. Tente Novamente";
        setMessage(errorMessage);
        console.error(err);
        } finally{
            setLoading(false);
        }
    };

    return ( 
        
    <div className="min-h-screen w-full flex justify-center items-center px-4">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-xl py-10 bg-gray-300 px-6 sm:px-10 rounded-lg shadow-md">
          <Tittle>Recuperar Senha</Tittle>

          <p className="text-center mb-4 text-gray-600 text-sm sm:text-base">
            Digite seu e-mail para receber um link de recuperação.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-sm">
            <FormInput
              label="E-mail"
              id="email"
              type="email"
              {...register("email", {
                required: "O email é obrigatório.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Formato de email inválido.",
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
            )}

            
            {message && (
              <p className="text-center font-bold my-2 text-gray-800">
                {message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full sm:w-[200px] h-10 self-center mt-4"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Link"}
            </Button>
          </form>
          
          <p className="mt-6 text-sm text-center">
            Lembrou a senha? <Link to="/login" className="font-bold text-blue-600 hover:underline">Fazer Login</Link>
          </p>
        </div>
      </div>
    </div>

     );
}
 
export default Recuperar;

