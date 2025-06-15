import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Tittle from "../../components/Tittle";

const Recuperar = () => {

    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = () => {
        const foundUser = mockUsers.find(
            (user) => user.email === email 
        );
        if (foundUser) {
            alert("Email de recuperação enviado");
            navigate("/login");
        } else {
            alert("Email não encontrado");
        }
    };
    return ( 
        
         <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col items-center w-screen">
                <div className="flex flex-col justify-center items-center w-[800px] h-[400px] bg-gray-300 p-8 rounded">
                    <Tittle>
                        Recuperar Senha
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
                        <Button
                            type="submit"
                            className="w-[150px] h-10 self-center"
                        >
                            Entrar
                        </Button>
                    </form>
                    <p className="mt-4">
                        Não tem conta? <a href="/register" className="font-bold">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
   
     );
}
 
export default Recuperar;

