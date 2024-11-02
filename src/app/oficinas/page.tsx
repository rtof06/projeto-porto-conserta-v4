"use client";
import Background from "@/components/Background/Background";
import CardOficina from "@/components/CardOficina/CardOficina";
import { CentrosAutomotivos } from "../types";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";

export default function Oficina() {
  const [oficina, setOficina] = useState<CentrosAutomotivos[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await fetch(`${apiUrl}/oficinas`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setOficina(data);
      } catch (err) {
        setError("Oficina não encontrada.");
        console.error("Erro ao buscar oficinas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOficinas();
  }, []);

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/oficinas`);
        const data = await response.json();
        setOficina(data);
      } catch (err) {
        console.error("Oficina não encontrada.", err);
      }
    };

    fetchOficinas();
  }, []);

  return (
    <>
      <Header page="VOLTAR" path="#" />
      <div className="flex justify-center bg-white-5-opacity py-8">
        <Background title="OFICINAS">
          {loading ? (
            <p>Carregando oficinas...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-4 max-sm:grid-cols-1">
              {oficina.map((oficina) => (
                <CardOficina
                  key={oficina.id}
                  title={oficina.name}
                  neighbourhood={oficina.neighbourhood}
                  uf={oficina.uf}
                  adress={oficina.street}
                  phone={oficina.phone}
                  info={oficina.atendimento}
                />
              ))}
            </div>
          )}
        </Background>
      </div>
    </>
  );
}
