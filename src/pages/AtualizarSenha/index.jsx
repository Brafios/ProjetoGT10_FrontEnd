import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from '../../Api';

import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Tittle from "../../components/Tittle";

const AtualizarSenha = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [tokens, setTokens] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [errorType, setErrorType] = useState("");

  useEffect(() => {
    console.log("Componente AtualizarSenha montou. Verificando URL...");
    
    const hash = window.location.hash;
    console.log("Fragmento da URL (hash) encontrado:", hash);

    if (!hash) {
      console.error("Nenhum fragmento (#) encontrado na URL.");
      setMessage("Token de acesso não encontrado. O link pode ser inválido.");
      setErrorType("error");
      return;
    }

    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    console.log("Token de Acesso extraído:", accessToken);
    console.log("Token de Refresh extraído:", refreshToken);

    if (accessToken && refreshToken) {
      console.log("Tokens encontrados e salvos no estado!");
      setTokens({ accessToken, refreshToken });
    } else {
      console.error("Não foi possível extrair os tokens do fragmento da URL.");
      setMessage("Token de acesso não encontrado. O link pode ser inválido ou ter expirado.");
      setErrorType("error");
    }
  }, []);

  const onSubmit = async (data) => {
    if (!tokens) {
      setMessage("Não é possível atualizar a senha sem um token válido.");
      setErrorType("error");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      const response = await API.post('/auth/update-password', {
        password: data.password,
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken 
      });

      setMessage(response.data.message + " Redirecionando...");
      setErrorType("success");
      setTimeout(() => navigate("/login"), 3000);

    } catch (err) {
      setMessage(err.response?.data?.error || "Ocorreu um erro.");
      setErrorType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-screen">
        <div className="flex flex-col justify-center items-center w-[800px] h-auto py-10 bg-gray-300 p-8 rounded">
          <Tittle>Criar Nova Senha</Tittle>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[400px]">
            <FormInput id="NovaSenha" type="password" label="Nova Senha" {...register("password", { required: "A nova senha é obrigatória.", minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres." } })} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            <FormInput id="NovaSenhaConfirma" type="password" label="Confirme a Nova Senha" {...register("confirmPassword", { required: "A confirmação da senha é obrigatória.", validate: (value) => value === getValues("password") || "As senhas não coincidem." })} />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            {message && <p className={`text-center font-bold my-2 ${errorType === 'error' ? 'text-red-500' : 'text-green-600'}`}>{message}</p>}
            <Button type="submit" className="w-[200px] h-10 self-center mt-4" disabled={loading || !tokens}>
              {loading ? "Atualizando..." : "Atualizar Senha"}
            </Button>
          </form>
          <p className="mt-6"><Link to="/login" className="font-bold text-blue-600 hover:underline">Voltar para o Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default AtualizarSenha;