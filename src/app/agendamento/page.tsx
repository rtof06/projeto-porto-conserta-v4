'use client'
import Buttons from "@/components/Buttons/Buttons";
import Header from "@/components/Header/Header";
import { useRouter } from "next/navigation";
import { mainFontFamily } from "../fonts";

export default function Agendamento() {
  const navigate = useRouter();

  return (
    <>
    <Header page="" path="" />
      <div className="max-sm:mx-10 mx-24 text-center">
        <h1 className={mainFontFamily.className}>Parece que você não selecionou nenhum tipo de serviço.</h1>
        <Buttons id="voltar" onClick={navigate.back}>Voltar</Buttons>
      </div>
    </>
  );
}
