import emConstrucaoImg from "../../assets/img/em-construcao.png";
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';
const EmConstrucao = () => {
  const navegate = useNavigate()

  const voltar = () => {
    navegate('/')
  }
    return ( 
        <>
            <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
                <div>
                    <img src={emConstrucaoImg} alt="" />
                </div>
                <h1 className="text-2xl font-bold text-gray-700">Página em construção</h1>
                <div className="mt-10">
                    <Button
                        type="button"
                        onClick={voltar}
                        className="w-[150px] h-10 self-center"
                    >
                        Voltar
                    </Button>
                </div>
            </div>
        </>
     );
}
 
export default EmConstrucao;