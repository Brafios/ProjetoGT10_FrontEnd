import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Layout from "../../Layout"
import About from "../../pages/About"
import Login from "../../pages/Login"
import NotFound from "../../pages/NotFound";
import EmConstrucao from "../../pages/EmConstrucao"
import Registro from "../../pages/Registro";
import Recuperar from "../../pages/Recuperar";
import Associacoes from "../../pages/Associacoes"
import Contato from "../../pages/Contato"
import AtualizarSenha from "../../pages/AtualizarSenha"; 
import Noticias from "../../pages/Noticias";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registro" element={<Registro/>}/>
                    <Route path="/recuperar" element={<Recuperar/>}/>
                    <Route path="/associacoes" element={<Associacoes/>}/>
                    <Route path="/noticias" element={<Noticias/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                    <Route path="/update-password" element={<AtualizarSenha />} />
                </Route>
                <Route path="/EmConstrucao" element={<EmConstrucao/>}/>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;