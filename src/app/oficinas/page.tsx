import Background from "@/components/Background/Background";
import CardOficina from "@/components/CardOficina/CardOficina";
import { CentrosAutomotivos } from "../types";
import Header from "@/components/Header/Header";
import { useEffect, useState } from "react";

export default function Oficina() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [oficina, setOficina] = useState<CentrosAutomotivos[]>([]);

  useEffect(() => {
    const fetchOficinas = async () => {
      try {
        const response = await fetch(`${apiUrl}/oficinas`);
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
        </Background>
      </div>
    </>
  );
}
