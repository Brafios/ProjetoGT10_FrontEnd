
import { Instagram, Facebook, X, Youtube, Twitch } from 'lucide-react';
import logo from '../assets/img/logo_oficial_sf.png'
import logoofical from '../assets/img/logo_oficial_footer_sf.png'

export default function Footer() {

  return (
    <footer className="bg-[--tertiary-color] text-white flex px-60  h-[225px] gap-[10px] text-sm ">
      <div id="footer" className="">
      <div className="flex items-center gap-[20px] h-full w-full ">
        <div className="flex flex-col items-center gap-2 w-[34%] -ml-64">
          <div className="w-[75%] h-[75%] m-auto flex">
            <img
              src={logoofical}
              alt="Logo da FACC"
              className="w-auto h-auto"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Instagram />
            <Facebook />
            <X />
            <Youtube />
            <Twitch />
          </div>
        </div>
        <div className="flex flex-col gap-[3px] w-[22%] h-[75%] mt-10 ml-4">
          <h1 className="text-[25px]">Contato</h1>
          <p className="leading-[12px] my-[3px]"><strong>Endereço:</strong> <br />Rua Dr. João Moreira, 207, Centro. <br />Fortaleza, Ceará - Cep: 60000-000 </p>
          <p className="leading-[12px] my-[3px]"><strong>Telefone:</strong>  (85) 3252-2052</p>
          <p className="leading-[12px] my-[3px]"><strong>Horário de funcionamento:</strong> <br /> De segunda a sexta, das 8h às 17h.</p>
          <p className="leading-[12px] my-[3px]"><strong>E-mail:</strong> email@email.org.br</p>
        </div>

        <div className="flex flex-col mt-10 gap-[3px] w-[22%] h-[75%] text-left ml-40">
          <h1 className="text-[25px]">Sobre</h1>
          <a href="/em-construcao">Sobre</a>
          <a href="/associacoes">Associações</a>
          <a href="/em-construcao">Filia-se</a>
          <a href="/em-construcao">Serviços</a>
          <a href="/contato">Contato</a>
        </div>

        <div className="flex flex-col mt-10 gap-[3px] w-[22%] h-[75%]">
          <h1 className="text-[25px]">Suporte</h1>
          <a href="/em-construcao">Central de ajuda</a>
          <a href="/em-construcao">Termos de serviços</a>
          <a href="/em-construcao">Jurídico</a>
          <a href="/em-construcao">Políticas de privacidade</a>
          <a href="/em-construcao">Status</a>
        </div>
      </div>
    </div>
    </footer>
    
  );
};
