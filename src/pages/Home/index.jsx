import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../components/ImageCarrousel"

import noticia1 from '../../assets/img/img_noticia_0.jpg';
import noticia2 from '../../assets/img/img_noticia_00.jpg';
import noticia3 from '../../assets/img/img_noticia_000.jpg';
import benf1 from '../../assets/img/img_beneficios_1.jpg';
import benf2 from '../../assets/img/img_beneficios_2.jpg';
import benf3 from '../../assets/img/img_beneficios_3.jpg';
import adsense from '../../assets/img/ad-sense.jpg';

const Home = () => {
    const navigate = useNavigate();

    const manutencao = () => {
        navigate('/em-construcao');
    };

    return ( 
        <>
        <div className="flex flex-col md:flex-row w-full px-4">
                    
                    
                    <div className="md:sticky h-fit w-full md:w-[18%] mb-4 md:mb-1">
                        <div className="relative w-full mb-3 mt-32">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input 
                                type="text" 
                                placeholder="Pesquisar" 
                                className="w-[100%] pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            />
                        </div>
                        <div className="flex flex-col text-center">
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Fortaleza</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio João Pessoa</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Porto Velho</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio São Paulo</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Rio de Janeiro</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Vitória</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Boa Vista</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Cuiabá</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Bahia</div>
                            <div onClick={manutencao} className="cursor-pointer socios flex justify-center items-center text-xl h-[50px] border-b-4 border-color: #C9CCCD">Comércio Campo Grande</div>
                        </div>
                    </div>
        
                    
                    <div className="w-full md:w-[62%] md:px-4 md:ml-14 mb-4 md:mb-0">
                        <div className="p-4 mt-4">
                            <ImageCarousel />
                        </div>
        
                        <div className="p-4 mt-20">
                            <hr className="bg-[#263238] h-1 my-4 rounded-lg" />
                            <h1 className="text-2xl font-bold">Nossas Notícias</h1>
        
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                {[noticia1, noticia2, noticia3, noticia1, noticia2, noticia3].map((img, index) => (
                                    <div 
                                        key={index} 
                                        onClick={manutencao} 
                                        className="cursor-pointer"
                                    >
                                        <img src={img} alt={`noticia ${index + 1}`} className="w-full rounded-md object-contain" />
                                        <p className="mt-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                        <div className='justify-start items-center flex mt-2'>
                                            <p className="text-sm underline underline-offset-2">Saiba Mais</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
        
                            <div className="flex justify-center mt-6">
                                <button 
                                    onClick={manutencao}
                                    className="text-white bg-[#263238] hover:bg-[#212b30] font-medium rounded-full text-sm px-5 py-2.5"
                                >
                                    Veja mais
                                </button>
                            </div>
                        </div>
        
                        
                        <div className="p-4">
                            <hr className="bg-[#263238] h-1 my-4 rounded-lg" />
                            <h1 className="text-2xl font-bold">Serviços</h1>
        
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                {[benf1, benf2, benf3, benf1, benf2, benf3].map((img, index) => (
                                    <div 
                                        key={index} 
                                        onClick={manutencao} 
                                        className="cursor-pointer"
                                    >
                                        <img src={img} alt={`parceria ${index + 1}`} className="w-full rounded-md" />
                                        <p className="mt-3 text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                        <div className='justify-start items-center flex mt-2'>
                                            <p className="text-sm underline underline-offset-2">Saiba Mais</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
        
                            <div className="flex justify-center mt-6">
                                <button 
                                    onClick={manutencao}
                                    className="text-white bg-[#263238] hover:bg-[#212b30] font-medium rounded-full text-sm px-5 py-2.5"
                                >
                                    Veja mais
                                </button>
                            </div>
                        </div>
                    </div>
        
                    
                    <div className="w-full md:w-[19%]">
                        <div className="flex justify-center mt-6 md:mt-32">
                            <img src={adsense} alt="Adsense" className="rounded-md" />
                        </div>
                    </div>
                </div>
        </>
     );
}
 
export default Home;