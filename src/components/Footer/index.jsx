import { Instagram, Facebook, X, Youtube, Twitch } from 'lucide-react';
import logo from '../../assets/img/Federaçao_footer.png'

const Footer = () => {
  return (
    <footer className="bg-[--tertiary-color] text-white px-6 py-10 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Logo e redes sociais */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/4 w-full">
          <img src={logo} alt="Logo da FACC" className="h-20 w-auto" />
          <div className="flex gap-4">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><X /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><Youtube /></a>
            <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer"><Twitch /></a>
          </div>
        </div>

        {/* Contato */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold mb-2">Contato</h1>
          <p className="mb-2 leading-relaxed">
            <strong>Endereço:</strong><br />
            Rua Dr. João Moreira, 207, Centro.<br />
            Fortaleza, Ceará - CEP: 60000-000
          </p>
          <p className="mb-2"><strong>Telefone:</strong> (85) 3252-2052</p>
          <p className="mb-2"><strong>Horário:</strong> Segunda à sexta, 8h às 17h</p>
          <p><strong>Email:</strong> email@email.org.br</p>
        </div>

        {/* Sobre */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold mb-2">Sobre</h1>
          <ul className="space-y-1">
            <li><a href="/em-construcao">Sobre</a></li>
            <li><a href="/associacoes">Associações</a></li>
            <li><a href="/em-construcao">Filie-se</a></li>
            <li><a href="/em-construcao">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        {/* Suporte */}
        <div className="w-full md:w-1/4">
          <h1 className="text-lg font-semibold mb-2">Suporte</h1>
          <ul className="space-y-1">
            <li><a href="/em-construcao">Central de ajuda</a></li>
            <li><a href="/em-construcao">Termos de serviços</a></li>
            <li><a href="/em-construcao">Jurídico</a></li>
            <li><a href="/em-construcao">Políticas de privacidade</a></li>
            <li><a href="/em-construcao">Status</a></li>
          </ul>
        </div>
        
      </div>
      {/* Direitos Autorais */}
      <div className="mt-10 border-t border-gray-400 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Federação dos Comércios. Todos os direitos reservados.
      </div>
    </footer>
  );
}
 
export default Footer;
