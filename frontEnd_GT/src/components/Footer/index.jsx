
// import insta from "../../assets/icons/instagram.png"
import { Instagram } from 'lucide-react'
import { Facebook } from 'lucide-react';
import { X } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Twitch } from 'lucide-react';


export const Footer = () => {
    return (
        <div id="footer">
            <div id='div1'>
                <div className="logo">
                    <img src="./src/assets/img/LogoCompleta.png" alt="Logo da FACC" />
                </div>

                <div id="icones">
                    <Instagram />
                    <Facebook />
                    <X />
                    <Youtube />
                    <Twitch />
                </div>

            </div>
            <div id="content">
                <div id="company">
                    <h1>Contato</h1>
                        <p>Endereço: Dr. João Moreira, 207, Fortaleza – CE</p>
                        <p>Cep: 60000-000</p>
                    <p>Telefone: (85) 3252-2052</p>
                    <p>Horário de funcionamento: Das 8h às 17h, de segunda a sexta-feira.</p>
                    <p>Contato: email@email.org.br</p>
                </div>
                <div id="sobre">
                    <h1>Sobre</h1>
                    <a href="#">Sobre</a>
                    <a href="#">Associações</a>
                    <a href="#">Filia-se</a>
                    <a href="#">Serviços</a>
                    <a href="#">Contato</a>
                </div>
                <div id="support">
                    <h1>Support</h1>
                    <a href="#">Central de ajuda</a>
                    <a href="#">Termos de serviços</a>
                    <a href="#">Jurídico</a>
                    <a href="#">Políticas de privacidade</a>
                    <a href="#">Status</a>
                </div>
            </div>
        </div>
    )
}