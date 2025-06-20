import React from "react";

const NoticiaCard = ({ noticia }) => {
    return (
        <div className="bg-white w-full rounded-lg p-6 shadow-md flex flex-col gap-2">
            <h2 className="text-xl text-gray-600 mb-1">{noticia.titulo}</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Autor:</strong> {noticia.autor || "Não informado"}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Data de Publicação:</strong> {new Date(noticia.data_publicacao).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Conteúdo:</strong> {noticia.conteudo}
            </p>
            {noticia.imagem_url && (
                <img src={noticia.imagem_url} alt="Imagem da Notícia" className="mt-4 rounded" />
            )}
        </div>
    );
};

export default NoticiaCard;