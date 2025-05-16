import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {

    const navegate = useNavigate()

    const manutencao = () => {
        navegate('/em-construcao')
    }

    return(

        
        
        <div className="flex">
            <div className="side-bar justify-items-center mt-4 mx-4 w-[35%]">
                <div className="relative w-full max-w-[100%] mb-9 ml-12">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input type="text" placeholder="Pesquisar" className="w-[80%] pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"/>
                </div>
                <div className="ml-5">
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
            <div className="ml-2 w-[75%]">
                <div className="p-4">
                    <ImageCarousel />
                </div>
                <div className="p-4">
                    
                    <hr className="bg-[#263238] w-100 h-1 mx-auto my-2 mb-4  rounded-lg"></hr>
                    
                    <h1> <strong>Nossas Notícias</strong></h1>
                    <div className="grid mt-6">
                        <div className='flex grid-cols-3 gap-20'>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 1" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%] justify-items-center">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 2" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 3" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                        
                        <div className='flex grid-cols-3 gap-20 mt-9'>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_noticia_1.jpg" alt="noticia 4" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%] justify-items-center">
                                <img src="./src/assets/img/img_noticia_2.jpg" alt="noticia 5" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_noticia_3.jpg" alt="noticia 6" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-items-center'>
                        <button 
                            type='button'
                            onClick={manutencao}
                            className='text-white bg-[#263238] hover:bg-[#212b30] font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4'>
                                Veja mais
                        </button>
                    </div>
                    
                </div>
                <div className="adsense">
                    
                </div>
                <div className="p-4">
                    <hr className="bg-[#263238] w-100 h-1 mx-auto my-2 mb-4 rounded-lg"></hr>
                    <h1><strong>Parcerias</strong></h1>
                    <div className="grid mt-6">
                        <div className='flex grid-cols-3 gap-20'>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 1" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 2" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 3" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>

                        <div className='flex grid-cols-3 gap-20 mt-9'>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_1.jpg" alt="parceria 4" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_2.jpg" alt="parceria 5" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                            <div type='button' onClick={manutencao} className="w-[50%]">
                                <img src="./src/assets/img/img_beneficios_3.jpg" alt="parceria 6" className='w-[100%] rounded-md'/>
                                <p className='mt-3 text-shadow-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero, a quisquam voluptates cum repudiandae alias quibusdam quo odit ea beatae magnam cumque voluptas, laborum similique!</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-items-center'>
                        <button
                        type='button'
                        onClick= {manutencao}
                        className='text-white bg-[#263238] hover:bg-[#212b30] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 mt-3'>
                            Veja mais
                    </button>
                    </div>
                </div>
            </div>
            <div className="ads w-[35%]"></div>
        </div>
    )
}