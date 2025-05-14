import './associacao.css'
import { Search } from 'lucide-react';

export default function Associacoes(){
    return (
        <div id="associacoes">
            <div className="title">
                <h1>Associações</h1>
            </div>
            <div className="corpo">

                <div className="input">
                    <Search style={{position: 'absolute', left: '220px', color:'grey'}}/>
                    <input type="text" name="" id="" />
                </div>
                <div className="associacao">
                    <div id='cidade'>
                    <p>Fortaleza</p>
                    </div>
                    <div id="conteudo" >
                        <h1>Nome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat nihil nostrum aut iste harum tempora fugiat porro qui, rem totam quos voluptatum impedit, amet, vero repellat dolores accusamus fugit veniam! Corporis debitis officia rerum optio vel eius libero similique, quo quos deserunt eos amet aut hic doloribus fuga sapiente!</p>
                    </div>
                </div>
                <div className="associacao">
                    <div id='cidade'>
                    <p>Fortaleza</p>
                    </div>
                    <div id="conteudo" >
                        <h1>Nome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat nihil nostrum aut iste harum tempora fugiat porro qui, rem totam quos voluptatum impedit, amet, vero repellat dolores accusamus fugit veniam! Corporis debitis officia rerum optio vel eius libero similique, quo quos deserunt eos amet aut hic doloribus fuga sapiente!</p>
                    </div>
                </div>
                <div className="associacao">
                    <div id='cidade'>
                    <p>Fortaleza</p>
                    </div>
                    <div id="conteudo" >
                        <h1>Nome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti placeat nihil nostrum aut iste harum tempora fugiat porro qui, rem totam quos voluptatum impedit, amet, vero repellat dolores accusamus fugit veniam! Corporis debitis officia rerum optio vel eius libero similique, quo quos deserunt eos amet aut hic doloribus fuga sapiente!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}