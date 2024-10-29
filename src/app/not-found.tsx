import Header from "@/components/Header/Header";
import Image from "next/image";
import brokenCar from "@/public/img/broken-car.png";
import { mainFontFamily, titleFontFamily } from "./fonts";
import React from "react";
import Link from "next/link";

export default function notFound() {
  return (
    <>
      <Header page="LOGIN" path="/LOGIN" />
      <div className="flex flex-col items-center justify-center">
        <h1 className={titleFontFamily.className}>
          Vixi... Página não encontrada!
        </h1>
        <Image
          src={brokenCar}
          alt="imagem carro quebrado"
          className="w-1/3 p-4"
        />
        <Link href="/">
          <p className={mainFontFamily.className}>
            Volte para o menu principal por aqui
          </p>
        </Link>
      </div>
    </>
  );
}
