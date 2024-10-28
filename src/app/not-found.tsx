import Header from "@/components/Header/Header";
import Image from "next/image";
import brokenCar from "@/public/img/broken-car.png";
import { titleFontFamily } from "./fonts";
import React from "react";

export default function notFound() {
  return (
    <>
      <Header page="OFICINAS" path="/oficinas" page2="LOGIN" path2="/login" />
      <div className="flex flex-col items-center justify-center">
        <h1 className={titleFontFamily.className}>Vixi... Página não encontrada!</h1>
        <Image src={brokenCar} alt="imagem carro quebrado" className="w-1/3 p-4"/>
      </div>
    </>
  );
}
