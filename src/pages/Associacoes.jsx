import { useState } from "react";
import { Search } from "lucide-react";

export default function Associacoes() {
  const [search, setSearch] = useState("");

  const associacoes = [
    {
      cidade: "Fortaleza",
      nome: "Associação Comercial do Ceará - Fortaleza",
      descricao:
        "Associação mais antiga de classe empresarial em atividade no Estado.",
    },
    {
      cidade: "Fortaleza",
      nome: "Associação Cultural Nordeste",
      descricao:
        "Organização dedicada à preservação da cultura nordestina.",
    },
    {
      cidade: "Sobral",
      nome: "Associação Jovens do Futuro",
      descricao:
        "Iniciativa para capacitação profissional de jovens em Sobral.",
    },
    {
      cidade: "Juazeiro",
      nome: "Associação de Agricultores Locais",
      descricao:
        "Apoio e incentivo à agricultura familiar na região do Cariri.",
    },
  ];

  const associacoesFiltradas = associacoes.filter(
    (item) =>
      item.nome.toLowerCase().includes(search.toLowerCase()) ||
      item.cidade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-screen  flex justify-center items-center py-8 px-4 mt-28">
      <div className="flex flex-col items-center w-full max-w-[900px] bg-gray-300 p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold font-serif mb-6 text-center">Associações</h1>

        {/* Campo de busca */}
        <div className="relative w-full max-w-[400px] mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Pesquisar por nome ou cidade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Lista de associações */}
        <div className="w-full flex flex-col gap-6">
          {associacoesFiltradas.length > 0 ? (
            associacoesFiltradas.map((assoc, index) => (
              <div
                key={index}
                className="bg-white w-full rounded-lg p-6 shadow-md flex flex-col gap-2"
              >
                <div className="text-sm text-gray-700 font-semibold">{assoc.cidade}</div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{assoc.nome}</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {assoc.descricao}
                  </p>
                </div>
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
