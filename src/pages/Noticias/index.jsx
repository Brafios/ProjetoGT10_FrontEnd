import { useEffect, useState } from "react";
import Tittle from "../../components/Tittle";
import API from "../../Api.js"; 
import NoticiaCard from "../../components/NoticiaCard/index.jsx";

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await API.get("/noticias");
                setNoticias(response.data);
            } catch (err) {
                setError("Não foi possível carregar as notícias.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticias();
    }, []);

    if (loading) {
        return <div className="pt-[50px]"> <div className="text-center mt-40">Carregando notícias...</div></div>;
    }

    if (error) {
        return <div className="pt-[50px]"> <div className="text-center mt-40 text-red-500">{error}</div></div>;
    }

    return (
        <div className="min-h-screen w-screen flex justify-center items-start py-8 px-4 mt-20">
            <div className="flex flex-col items-center w-full max-w-[900px] bg-gray-300 p-8 rounded shadow-lg mt-16">
                <Tittle>Notícias</Tittle>

                <div className="w-full flex flex-col gap-6">
                    {noticias.length > 0 ? (
                        noticias.map((noticia) => (
                            <NoticiaCard key={noticia.id} noticia={noticia} />
                        ))
                    ) : (
                        <p className="text-gray-600 text-sm italic">Nenhuma notícia encontrada.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Noticias;