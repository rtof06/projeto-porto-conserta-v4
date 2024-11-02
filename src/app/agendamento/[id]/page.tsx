"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CentrosAutomotivos, Servico } from "@/app/types";
import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";
import Inputs from "@/components/Inputs/Inputs";
import Buttons from "@/components/Buttons/Buttons";
import { secFontFamily } from "@/app/fonts";

export default function Agendamento() {
  const router = useRouter();
  const { id } = useParams(); // Extrai o parâmetro 'id' diretamente
  const [selectedOficina, setSelectedOficina] = useState("");
  const [servico, setServico] = useState<Servico[]>([]);
  const [oficina, setOficina] = useState<CentrosAutomotivos[]>([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await fetch(`${apiUrl}/oficinas`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setOficina(data);
      } catch (err) {
        console.error("Erro ao buscar oficinas:", err);
      }
    };
    fetchOficinas();
  }, []);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await fetch(`${apiUrl}/servicos/${id}`);
        const data = await response.json();
        console.log("Dados do serviço:", data);
        setServico([data]);
      } catch (err) {
        console.error("Serviço não encontrado", err);
      }
    };

    if (id) {
      fetchServicos();
    }
  }, [id]);

  const handleAgendar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedOficina !== "Escolha uma oficina") {
      alert("Serviço agendado!");
      router.push("/diagnostico");
    }
  };

  return (
    <>
      <Header page="DIAGNÓSTICO" path="/diagnostico" />
      <div
        className={`${secFontFamily.className} flex justify-center h-full py-8`}
      >
        <Background title="AGENDAMENTO DE SERVIÇO">
          <h2 className="bg-gray-200 rounded-lg border-t-2 border-blue-500 shadow-md m-4 p-4">
            Serviço selecionado: {servico.length > 0 ? servico[0].nome : "Carregando..."}
          </h2>
          <div className="flex flex-col items-center">
            <label htmlFor="oficina" className="text-lg text-gray-700 mb-2">
              Selecione a oficina
            </label>
            <select
              id="oficina"
              name="oficina"
              value={selectedOficina}
              onChange={(e) => setSelectedOficina(e.target.value)}
              className="w-11/12 mb-4 p-2 rounded-lg bg-gray-200"
              required
            >
              <option value="" disabled>
                Escolha uma oficina
              </option>
              {oficina.map((oficina) => (
                <option key={oficina.id} value={oficina.name}>
                  {oficina.name}
                </option>
              ))}
            </select>
            <label htmlFor="idDate" className="text-lg text-gray-700 mb-2">
              Escolha o dia que deseja agendar
            </label>
            <Inputs type="date" name="date" id="idDate" required={true} />
            <Buttons type="submit" id="btnAgendar" onClick={handleAgendar}>
              AGENDAR
            </Buttons>
          </div>
        </Background>
      </div>
    </>
  );
}
