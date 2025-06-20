import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Axios chama o backend
import API from '../../Api';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Tittle from "../../components/Tittle";
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  // a rota auth/login do backend é chamada
  const onSubmit = async (data) => {
    try {
      // Faz a chamada POST para o servidor
      const response = await API.post('/auth/login', {
        email: data.email,
        password: data.password,
      });

      //  se backend aceita status 200
      if (response.data.session){
        localStorage.setItem('supabase.session', JSON.stringify(response.data.session));
      } 

      
       window.location.href = "/";

    } catch (err) {
   
      const errorMessage = err.response?.data?.error
        ? "Credenciais inválidas. Verifique seu e-mail e senha."
        : "Não foi possível conectar ao servidor. Tente novamente.";

      setError("root.serverError", {
        type: "manual",
        message: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-xl h-auto py-10 bg-gray-300 px-6 sm:px-10 rounded-lg shadow-md">
          <Tittle>
            Login
          </Tittle>

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

            <FormInput id="senha" type="password" label="" {...register("password", { required: "Senha é obrigatória" })}>
              <>
                <label htmlFor="senha" className="font-serif font-semibold">
                  Senha
                </label>
                <Link
                  to="/recuperar"
                  className="text-sm text-blue-600 font-bold hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </>
            </FormInput>
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
            )}

            {errors.root?.serverError && (
              <p className="text-red-500 text-sm mb-2 text-center font-bold">
                {errors.root.serverError.message}
              </p>
            )}

            <Button
              type="submit"
              className="w-full sm:w-[150px] h-10 self-center mt-4"
            >
              Entrar
            </Button>
          </form>

          <p className="mt-4 text-sm text-center font-sans">
            Não tem conta?{" "}
            <Link to="/registro" className="font-bold font-sans text-blue-600 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;