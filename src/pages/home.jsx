import { Search } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

import noticia1 from '../assets/img/img_noticia_1.jpg';
import noticia2 from '../assets/img/img_noticia_2.jpg';
import noticia3 from '../assets/img/img_noticia_3.jpg';
import benf1 from '../assets/img/img_beneficios_1.jpg';
import benf2 from '../assets/img/img_beneficios_2.jpg';
import benf3 from '../assets/img/img_beneficios_3.jpg';
import adsense from '../assets/img/ad-sense.jpg';

export default function Home() {
    const navigate = useNavigate();

    const manutencao = () => {
        navigate('/em-construcao');
    };

    return (
        <div className="flex w-full px-4">
            
            {/* Sidebar */}
            <div className="sticky top-24 h-fit w-[18%]">
                <div className="relative w-full mb-3 mt-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="Pesquisar" 
                        className="w-[100%] pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                </div>
                <div className="flex flex-col text-center">
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 1</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 2</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 3</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 4</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 5</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 6</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 7</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 8</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 9</div>
                    <div className="socios flex justify-center items-center text-2xl h-[50px] border-b-4 border-color: #C9CCCD">Associação 10</div>
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="w-[62%] px-4">
                <div className="p-4">
                    <ImageCarousel />
                </div>

                <div className="p-4">
                    <hr className="bg-[#263238] h-1 my-4 rounded-lg" />
                    <h1 className="text-2xl font-bold">Nossas Notícias</h1>

                    {/* Grid de Notícias */}
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {[noticia1, noticia2, noticia3, noticia1, noticia2, noticia3].map((img, index) => (
                            <div 
                                key={index} 
                                onClick={manutencao} 
                                className="cursor-pointer"
                            >
                                <img src={img} alt={`noticia ${index + 1}`} className="w-full rounded-md" />
                                <p className="mt-3 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero.
                                </p>
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

                {/* Parcerias */}
                <div className="p-4">
                    <hr className="bg-[#263238] h-1 my-4 rounded-lg" />
                    <h1 className="text-2xl font-bold">Parcerias</h1>

                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {[benf1, benf2, benf3, benf1, benf2, benf3].map((img, index) => (
                            <div 
                                key={index} 
                                onClick={manutencao} 
                                className="cursor-pointer"
                            >
                                <img src={img} alt={`parceria ${index + 1}`} className="w-full rounded-md" />
                                <p className="mt-3 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto necessitatibus delectus quam commodi vero.
                                </p>
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

            {/*  */}
            <div className="w-[19%]">
                <div className="flex justify-center mt-4">
                    <img src={adsense} alt="Adsense" className="rounded-md" />
                </div>
            </div>
        </div>
    );
}
