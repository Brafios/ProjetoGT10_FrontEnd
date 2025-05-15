
import { Instagram, Facebook, X, Youtube, Twitch } from 'lucide-react';


export default function Footer() {

  return (
    <div
      id="footer"
      className="bg-[#263238] text-white flex p-5 h-[240px] gap-[100px] text-xs"
    >
      <div className="flex flex-col items-center gap-2 w-1/4">
        <div className="w-[95%] h-[95%] m-auto flex justify-center">
          <img
            src="./src/assets/img/LogoSimples.png"
            alt="Logo da FACC"
            className="w-1/2"
          />
        </div>

        <div className="flex justify-center gap-5">
          <Instagram />
          <Facebook />
          <X />
          <Youtube />
          <Twitch />
        </div>
      </div>

      <div className="flex items-center gap-[100px] h-full w-3/4">
        <div className="flex flex-col gap-[3px] w-[250px] h-[75%]">
          <h1 className="text-[25px]">Contato</h1>
          <p className="leading-[12px] my-[5px]">Endereço: Dr. João Moreira, 207, Fortaleza – CE</p>
          <p className="leading-[12px] my-[5px]">Cep: 60000-000</p>
          <p className="leading-[12px] my-[5px]">Telefone: (85) 3252-2052</p>
          <p className="leading-[12px] my-[5px]">Horário de funcionamento: Das 8h às 17h, de segunda a sexta-feira.</p>
          <p className="leading-[12px] my-[5px]">Contato: email@email.org.br</p>
        </div>

        <div className="flex flex-col gap-[3px] w-[250px] h-[75%] text-left">
          <h1 className="text-[25px]">Sobre</h1>
          <a href="#">Sobre</a>
          <a href="#">Associações</a>
          <a href="#">Filia-se</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </div>

        <div className="flex flex-col gap-[3px] w-[250px] h-[75%]">
          <h1 className="text-[25px]">Support</h1>
          <a href="#">Central de ajuda</a>
          <a href="#">Termos de serviços</a>
          <a href="#">Jurídico</a>
          <a href="#">Políticas de privacidade</a>
          <a href="#">Status</a>
        </div>
      </div>
    </div>
  );
};
