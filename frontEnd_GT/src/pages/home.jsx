import { Search } from 'lucide-react';
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
    return(
        
        <div className="flex">
            <div className="side-bar">
                <div className="input">
                    <Search style={{position: 'absolute', left: '50px', color:'grey'}}/>
                    <input type="text" name="" id="" />
                </div>
                <div className="ml-12">
                    <div className="socios text-2xl">Associação 1</div>
                    <div className="socios text-2xl">Associação 2</div>
                    <div className="socios text-2xl">Associação 3</div>
                    <div className="socios text-2xl">Associação 4</div>
                    <div className="socios text-2xl">Associação 5</div>
                    <div className="socios text-2xl">Associação 6</div>
                    <div className="socios text-2xl">Associação 7</div>
                    <div className="socios text-2xl">Associação 8</div>
                    <div className="socios text-2xl">Associação 9</div>
                    <div className="socios text-2xl">Associação 10</div>
                </div>
            </div>
            <div className="copro-home">
                <div className="p-4">
                    <ImageCarousel />
                </div>
                <div className="p-4 noticias">
                    <h1>Últimas notícias</h1>
                    <div className="columns-3">
                        <div className='flex'>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 1" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 2" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 3" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                        
                        <div className='flex'>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 4" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 5" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 6" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <button>Mais notícias</button>
                    <div className="adsense"></div>
                </div>
                <div className="p-4 parcerias">
                    <h1>Parcerias</h1>
                    <div className="columns-3">
                        <div className='flex'>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 1" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 2" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 3" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>

                        <div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 4" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 5" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[30%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 6" className='w-[50%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <button>Mais parceiros</button>
                </div>
            </div>
        </div>
    )
}