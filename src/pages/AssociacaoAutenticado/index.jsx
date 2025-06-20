import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

import Button from '../../components/Button/index.jsx';
import Tittle from "../../components/Tittle/index.jsx";
import API from "../../Api.js"; 
import AssociacaoForm from "../../components/AssociationForm/index.jsx"; 

const AssociacoesAutenticadas = () => {
    const [associacoes, setAssociacoes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAssoc, setEditingAssoc] = useState(null); 

    const fetchAssociacoes = async () => {
        try {
            setLoading(true);
            const response = await API.get("/associacoes");
            setAssociacoes(response.data);
        } catch (err) {
            setError("Não foi possível carregar os dados das associações.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssociacoes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta associação? Esta ação não pode ser desfeita.")) {
            try {
                await API.delete(`/associacoes/${id}`);
                setAssociacoes(associacoes.filter(a => a.id !== id));
            } catch (err) {
                console.error("Falha ao deletar associação", err);
                alert("Erro ao deletar. Você pode não ter permissão para esta ação.");
            }
        }
    };

    
    const handleSave = () => {
        setIsModalOpen(false); 
        setEditingAssoc(null);
        fetchAssociacoes();   
    };

    
    const openModal = (assoc = null) => {
        setEditingAssoc(assoc); 
        setIsModalOpen(true);
    };

    const handleSalvar = () => {
        navigate("/");
    }

    const associacoesFiltradas = associacoes.filter(
        (item) =>
            item.nome.toLowerCase().includes(search.toLowerCase()) ||
            (item.cidade && item.cidade.toLowerCase().includes(search.toLowerCase()))
    );

    if (loading) {
        return <div className="pt-[50px]"><div className="text-center mt-28">Carregando associações...</div></div>;
    }

    if (error) {
        return <div className="pt-[50px]"><div className="text-center mt-28 text-red-500">{error}</div></div>;
    }

    return (
        <div className="min-h-screen w-screen flex justify-center items-start py-8 px-4">
            <div className="flex flex-col items-center w-full max-w-[900px] bg-gray-300 p-8 rounded shadow-lg mt-32">
                <Tittle>Gerenciar Associações</Tittle>

                <div className="w-full flex justify-between items-center mb-8 gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Pesquisar por nome ou cidade..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <Button onClick={() => openModal()}>
                        Adicionar Nova
                    </Button>
                </div>

                <div className="w-full flex flex-col gap-6">
                    {associacoesFiltradas.length > 0 ? (
                        associacoesFiltradas.map((assoc) => (
                            <div key={assoc.id} className="bg-white w-full rounded-lg p-6 shadow-md">
                                <h2 className="text-xl font-bold mb-1">{assoc.nome}</h2>
                                <h3 className="text-md text-gray-600 mb-3">{assoc.cidade}</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Descricao:</strong> {assoc.descricao}
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Representante:</strong> {assoc.representante}
                                </p>
                                <p className="text-sm text-gray-700"><strong>CNPJ:</strong> {assoc.cnpj}</p>
                                <p className="text-sm text-gray-700"><strong>Email:</strong> {assoc.email || "Não informado"}</p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Telefone:</strong> {assoc.telefone || "Não informado"}
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Endereço:</strong> {assoc.endereco || "Não informado"}
                                </p>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Data de Fundação:</strong> {new Date(assoc.data_fundacao).toLocaleDateString()}
                                </p>
                                <div className="flex gap-2 mt-4 border-t pt-4">
                                    <Button onClick={() => openModal(assoc)}>Editar</Button>
                                    <Button onClick={() => handleDelete(assoc.id)} className="bg-red-600 hover:bg-red-700">Deletar</Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-8">Nenhuma associação encontrada.</p>
                    )}
                </div>

                 {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-start z-50 p-4 overflow-y-auto">
                        <div className="bg-white p-8 rounded-lg shadow-xl relative max-w-lg w-full my-8">
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
                                <X size={24} />
                            </button>
                            <AssociacaoForm 
                                associacaoToEdit={editingAssoc} 
                                onSave={handleSave} 
                            />
                        </div>
                    </div>
                )}
            </div>
            <Button onClick={() =>  handleSalvar}>
                Voltar
            </Button>
        </div>
    );
};

export default AssociacoesAutenticadas;