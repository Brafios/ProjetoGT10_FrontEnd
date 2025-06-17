import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import API from '../../Api'; 
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import { Link } from 'react-router-dom';
import Tittle from "../../components/Tittle";

const Registro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
        const response = await API.post("/auth/register", {
          email: data.email,
          password: data.password,
          nome: data.nome,
          funcao: data.funcao
        });

        console.log("Registro bem-sucedido:", response.data);
        navigate("/login");
      } catch (err) {
        console.error("Erro ao registrar:", err.response?.data?.error || err.message);
      }
    };


    return ( 
        <>
        <div className=" h-screen w-screen flex flex-col justify-between font-sans mt-20">
          <div className="flex flex-col justify-center items-center flex-1 py-10 ">
            <div className="flex flex-col justify-center items-center w-[800px] bg-gray-300 p-8 rounded">
              <Tittle>
                Cadastro
              </Tittle>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[400px]">

                <FormInput 
                id="nome"
                type="text"
                label="Nome Completo" 
                {...register("nome", { required: "O nome é obrigatório" })} // CORRIGIDO
                />

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

                <FormInput 
                  id="senha" 
                  type="password" 
                  label="senha" 
                  {...register("password", { required: "Senha é obrigatória" })}
                />

                <FormInput 
                id="funçao"
                type="text"
                label="Função" 
                {...register("funcao", { required: "A função é obrigatória" })} // CORRIGIDO
                />

               <Button
                type="submit"
                className="w-[150px] h-10 self-center"
              >
                Cadastrar
              </Button>
            </form>
            <p className="mt-4 text-center">
                Já tem conta? <Link to="/login" className="font-bold text-blue-600">Entrar</Link>
            </p>
          </div>
        </div>

        
      </div>
        </>
     );
}
 
export default Registro;