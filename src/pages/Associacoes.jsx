import { useState } from "react";
import { Search } from "lucide-react";

export default function Associacoes() {
  const [search, setSearch] = useState("");

  const associacoes = [
    {
      cidade: "Fortaleza",
      nome: "Comércio Fortaleza",
      diretoria: "Presidente: Julio César, Vice: Brutus",
      mandato: "Mandato: 12/02/2025 - 12/02/2027",
      contato: "Contato: (85)99999-9999",
      descricao:
        "Comércio de Fortaleza e associados",
      cnpj: "CNPJ: 00.000.000/0000-00",
    },
    {
      cidade: "João Pessoa",
      nome: "Comércio João Pessoa",
      diretoria: "Presidente: Fagundes, Vice: Maria",
      mandato: "Mandato: 12/06/2023 - 12/06/2025",
      contato: "Contato: (83)99999-9999",
      descricao:
        "Comércio João Pessoa e associados",
      cnpj: "CNPJ: 00.000.000/0000-00",
    },
    {
      cidade: "Porto Velho",
      nome: "Comércio Porto Velho",
      diretoria: "Presidente: Ana Lucia, Vice: José",
      mandato: "Mandato: 20/08/2024 - 20/08/2026",
      contato: "Contato: (69)99999-9999",
      descricao:
        "Comércio Porto Velho e associados",
      cnpj: "CNPJ: 00.000.000/0000-00",
    },
    {
      cidade: "São Paulo",
      nome: "Comércio São Paulo",
      diretoria: "Presidente: Paulo, Vice: Paula",
      mandato: "Mandato: 29/11/2023 - 29/11/2025",
      contato: "Contato: (11)99999-9999",
      descricao:
        "Comércio de São Paulo Associados",
      cnpj: "CNPJ: 00.000.000/0000-00",
    },
  ];

  const associacoesFiltradas = associacoes.filter(
    (item) =>
      item.nome.toLowerCase().includes(search.toLowerCase()) ||
      item.cidade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-screen  flex justify-center items-center py-8 px-4 mt-32">
      <div className="flex flex-col items-center w-full max-w-[900px] bg-gray-300 p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold font-serif mb-6 text-center">Associações</h1>

        
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
                    {assoc.diretoria}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {assoc.mandato}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {assoc.contato}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {assoc.descricao}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {assoc.cnpj}
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
