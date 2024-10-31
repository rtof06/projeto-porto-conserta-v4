"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useParams } from "next/navigation";
import { services } from "@/app/data/serviceList";
import { oficinas } from "@/app/data/oficinas";
import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";
import Inputs from "@/components/Inputs/Inputs";
import Buttons from "@/components/Buttons/Buttons";
import { secFontFamily } from "@/app/fonts";

export default function Agendamento() {
  const router = useRouter();
  const [selectedOficina, setSelectedOficina] = useState("");
  const { id } = useParams();
  const servico = services.find((service) => service.id === Number(id));

  const handleAgendar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (selectedOficina != "Escolha uma oficina") {
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
            Serviço selecionado: {servico?.service}
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
              {oficinas.map((oficina) => (
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
