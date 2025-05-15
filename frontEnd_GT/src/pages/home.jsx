import { Search } from 'lucide-react';
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
    return(
        
        <div className="flex w-screen h-screen">
            <div className="side-bar w-[15%] mt-4 mx-3">
                <div className="relative w-full max-w-[400px] mb-8">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Pesquisar por associação..." className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                </div>
                <div className="ml-12 ">
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
            <div className="copro-home w-[70%]">
                <div className="p-4">
                    <ImageCarousel />
                </div>
                <div className="p-4">
                    <h1>Últimas notícias</h1>
                    <div className="flex flex-wrap">
                        <div className='flex'>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 1" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 2" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 3" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                        
                        <div className='flex'>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 4" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 5" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 6" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <button>Mais notícias</button>
                    <div className="adsense"></div>
                </div>
                <div className="p-4">
                    <h1>Parcerias</h1>
                    <div className="flex flex-wrap">
                        <div className='flex'>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 1" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 2" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 3" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 4" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 5" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div className="w-[10%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 6" className='w-[80%]'/>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <button>Mais parceiros</button>
                </div>
            </div>
            <div className="ads w-[15%]"></div>
        </div>
    )
}