import emConstrucaoImg from "../assets/img/em-construcao.png";

export default function EmConstrucao() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <div>
        <img src={emConstrucaoImg} alt="" />
      </div>
      <h1 className="text-2xl font-bold text-gray-700">Página em construção</h1>
    </div>
  );
}