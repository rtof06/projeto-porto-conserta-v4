'use client'
import Header from "@/components/Header/Header";
import Background from "@/components/Background/Background";
import Buttons from "@/components/Buttons/Buttons";
import { Servico } from "../types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Diagnostico() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [servico, setServico] = useState<Servico[]>([]);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const resonse = await fetch(`${apiUrl}/servicos`);
        const data = await resonse.json();
        setServico(data);
      } catch(err) {
        console.error("Serviço não encontrado", err);
      }
    };

    fetchServicos();
  }, []);

  return (
    <>
      <Header page="" path="#" />
      <div className="flex justify-center py-8">
        <Background title="DIAGNÓSTICO DO CARRO">
          <div className="max-sm:flex max-sm:flex-col grid grid-cols-2 items-center p-4">
            {servico.map((diagnostic) => (
              <Link href={`/agendamento/${diagnostic.id}`} key={diagnostic.id}>
                <Buttons type="button" id="diagnostico" key={diagnostic.id}>
                  {diagnostic.nome}
                </Buttons>
              </Link>
            ))}
          </div>
        </Background>
      </div>
    </>
  );
}
