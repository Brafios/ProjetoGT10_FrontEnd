import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import Tittle from "../../components/Tittle";
import API from "../../Api.js"; 

const Associacoes = () => {

    const [associacoes, setAssociacoes] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchAssociacoes = async () => {
        try{
          const response = await API.get("/associacoes");
          setAssociacoes(response.data);
        } catch (err) {
          setError("Não foi possivel carregar os dados das associações.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      }

      fetchAssociacoes();
    }, [])

    const associacoesFiltradas = associacoes.filter(
      (item) => 
        item.nome.toLowerCase().includes(search.toLowerCase()) ||
        item.cidade.toLowerCase().includes(search.toLowerCase())
    )

    if (loading){
      return <div className="pt-[50px]"> <div className="text-center mt-28">Carregando associações...</div> </div>
    }

    if (error) {
      return <div className="pt-[50px]"> <div className="text-center mt-28 text-red-500">{error}</div></div>
    }

    return ( 
    <div className="min-h-screen w-screen flex justify-center items-start py-8 px-4 mt-20">
        <div className="flex flex-col items-center w-full max-w-[900px] bg-gray-300 p-8 rounded shadow-lg mt-16">
          <Tittle>Associações</Tittle>

          <div className="relative w-full max-w-[600px] mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Pesquisar por nome ou cidade..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="w-full flex flex-col gap-6">
            {associacoesFiltradas.length > 0 ? (
              associacoesFiltradas.map((assoc) => (
                <div
                  key={assoc.id}
                  className="bg-white w-full rounded-lg p-6 shadow-md flex flex-col gap-2"
                >
                  <h2 className="text-xl text-gray-600 mb-1">{assoc.cidade}</h2>
                  <h4 className="text-xl font-bold mb-1">{assoc.nome}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Descricao:</strong> {assoc.descricao}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Representante:</strong> {assoc.representante}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>CNPJ:</strong> {assoc.cnpj}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Email:</strong> {assoc.email || "Não informado"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Telefone:</strong> {assoc.telefone || "Não informado"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Endereço:</strong> {assoc.endereco || "Não informado"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Data de Fundação:</strong> {new Date(assoc.data_fundacao).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-sm italic">Nenhuma associação encontrada.</p>
            )}
          </div>
        </div>
      </div>
     );
}
 
export default Associacoes;