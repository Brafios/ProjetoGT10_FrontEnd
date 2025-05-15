import emConstrucaoImg from "../assets/img/em-construcao.png";
import { useNavigate } from "react-router-dom";

export default function EmConstrucao() {

  const navegate = useNavigate()

  const voltar = () => {
    navegate('/')
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <div>
        <img src={emConstrucaoImg} alt="" />
      </div>
      <h1 className="text-2xl font-bold text-gray-700">Página em construção</h1>
      <div className="mt-10">
        <button
          type="button"
          onClick={voltar}
          className="bg-black text-white font-bold rounded-md w-[150px] h-10 self-center"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}