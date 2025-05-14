import './home.css'

import { Search } from 'lucide-react';


export default function Home() {
    return(
        <div className="home">
            <div className="side-bar">
                <div className="input">
                    <Search style={{position: 'absolute', left: '150px', color:'grey'}}/>
                    <input type="text" name="" id="" />
                </div>
                <div className="itens">
                    <div className="socios">Associação 01</div>
                    <div className="socios">Associação 2</div>
                    <div className="socios">Associação 3</div>
                    <div className="socios">Associação 4</div>
                    <div className="socios">Associação 5</div>
                    <div className="socios">Associação 6</div>
                    <div className="socios">Associação 7</div>
                    <div className="socios">Associação 8</div>
                    <div className="socios">Associação 9</div>
                    <div className="socios">Associação 10</div>
                </div>
            </div>
            <div className="copro-home">
                <div className="carrossel">
                    <div className="img-carrossel">
                        <img src="#" alt="image 01" />
                        <img src="#" alt="image 02" />
                        <img src="#" alt="image 03" />
                    </div>
                    <div className="btn-carrossel">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                </div>
                <div className="noticias">
                    <h1>Últimas notícias</h1>
                    <div className="grid-noticias">
                        <div className="noticia">
                            <img src="#" alt="noticia 1"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="noticia">
                            <img src="#" alt="noticia 2"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="noticia">
                            <img src="#" alt="noticia 3"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="noticia">
                            <img src="#" alt="noticia 4"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="noticia">
                            <img src="#" alt="noticia 5"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="noticia">
                            <img src="#" alt="noticia 6"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                    </div>
                    <button>Mais notícias</button>
                    <div className="adsense"></div>
                </div>
                <div className="parcerias">
                    <h1>Parcerias</h1>
                    <div className="grid-parcerias">
                        <div className="parceria">
                            <img src="#" alt="parceria 1"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="parceria">
                            <img src="#" alt="parceria 2"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="parceria">
                            <img src="#" alt="parceria 3"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="parceria">
                            <img src="#" alt="parceria 4"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="parceria">
                            <img src="#" alt="parceria 5"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                        <div className="parceria">
                            <img src="#" alt="parceria 6"/>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                        </div>
                    </div>
                    <button>Mais parceiros</button>
                </div>
            </div>
        </div>
    )
}