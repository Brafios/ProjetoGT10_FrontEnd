import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Tittle from "../../components/Tittle";

const mockUsers = [{ email: "geraçao@tech.com", password: "GT10" }];

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const foundUser = mockUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/");
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col justify-center items-center w-[800px] h-[400px] bg-gray-300 p-8 rounded">
          <Tittle>
            Login
          </Tittle>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[400px]">

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
                <a
                  href="/recuperar"
                  className="text-sm text-blue-500 font-bold hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </>
            </FormInput>
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
            )}

            <Button
              type="submit"
              className="w-[150px] h-10 self-center"
            >
              Entrar
            </Button>
          </form>

          <p className="mt-4 font-sans">
            Não tem conta?{" "}
            <a href="/registro" className="font-bold font-sans">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
