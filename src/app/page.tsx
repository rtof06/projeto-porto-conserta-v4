'use client'
import {mainFontFamily, secFontFamily, titleFontFamily} from "@/app/fonts"
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header page="LOGIN" path="/login" page2="OFICINAS PORTO" path2="/oficinas" />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className={titleFontFamily.className}>Porto Conserta</h1>
        <h3 className={secFontFamily.className}>Um jeito fácil de manter o seu carro <span>sempre</span> saudável.</h3>
        <p className={mainFontFamily.className}>A Porto Conserta é uma plataforma de fácil manipulação que gera um autodiagnóstico do seu veículo a partir de um scanner OBD II, sinalizando quando há necessidade de reparo e conectando o usuário com as oficinas pareiras Porto.</p>
      </div>
    </>
  );
}
