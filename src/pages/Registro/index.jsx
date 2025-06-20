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
        <div className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-10 font-sans">
            <div className="flex flex-col justify-center items-center w-full max-w-xl bg-gray-300 px-6 sm:px-10 py-10 rounded-lg shadow-md">
              <Tittle>
                Cadastro
              </Tittle>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-sm">

                <FormInput
                  id="nome"
                  type="text"
                  label="Nome Completo"

                  {...register("nome", {
                    required: "O nome é obrigatório",
                    minLength: {
                      value: 3,
                      message: "O nome deve ter no máximo 50 caracteres",
                    },
                  })}

                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mb-2">{errors.nome.message}</p>
                )}


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
                  label="Senha"
                  {...register("password", {
                    required: "Senha é obrigatória",
                    minLength: {
                      value: 6,
                      message: "A senha deve conter letras e números."
                    }
                  })}
                />

                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}

                <FormInput
                  id="funçao"
                  type="text"
                  label="Função"
                  {...register("funcao", {
                    required: "A função é obrigatória",
                    minLength: {
                      value: 2,
                      message: "A função deve ter pelo menos 2 caracteres."

                    }
                  })}
                />
                {errors.funcao && (
                  <p className="text-red-500 text-sm">{errors.funcao.message}</p>
                )}

                <Button
                  type="submit"
                  className="w-full sm:w-[150px] h-10 self-center mt-4"
                >
                  Cadastrar
                </Button>
              </form>
              <p className="mt-4 text-center text-sm">
                Já tem conta? <Link to="/login" className="font-bold text-blue-600 hover:underline">Entrar</Link>
              </p>
            </div>
          </div>
      </>
      );
}

export default Registro;