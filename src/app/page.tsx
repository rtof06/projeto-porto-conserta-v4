"use client";
import { mainFontFamily, secFontFamily, titleFontFamily } from "@/app/fonts";
import Developers from "@/components/Developers/Developers";
import Header from "@/components/Header/Header";
import { developers } from "@/app/data/developersInfo";

export default function Home() {
  return (
    <>
      <Header page="LOGIN" path="/login" />
      <div className="flex flex-col items-center justify-center text-center mx-14 2xl:px-44">
        <h1 className={`${titleFontFamily.className} mt-4 text-title-color`}>Porto Conserta</h1>
        <h3 className={secFontFamily.className}>
          Um jeito fácil de manter o seu carro <span>sempre</span> saudável.
        </h3>
        <p className={mainFontFamily.className}>
          A Porto Conserta é uma plataforma de fácil manipulação que gera um
          autodiagnóstico do seu veículo a partir de um scanner OBD II,
          sinalizando quando há necessidade de reparo e conectando o usuário com
          as oficinas pareiras Porto.
        </p>
      </div>
      <section className="my-4 text-center text-white">
        <h2 className={`${titleFontFamily.className} text-title-amplexus-color text-2xl p-5`}>
          Time Amplexus Technology
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {developers.map((dev) => (
            <Developers
              key={dev.rm}
              name={dev.name}
              rm={dev.rm}
              role={dev.role}
              img={dev.image}
              alt={dev.alt}
              github={dev.github}
              instagram={dev.insta}
              linkedin={dev.linkedin}
            />
          ))}
        </div>
      </section>
    </>
  );
}
