"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import { secFontFamily } from "../fonts";
import { checkPassword } from "../utils/passwordValidation";
import PersonalInformationForm from "@/components/PersonalInformationForm/PersonalInformationForm";
import AdressForm from "@/components/AdressForm/AdressForm";
import CarInformationForm from "@/components/CarInformationForm/CarInformationForm";

export default function Cadastro() {
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    checkPassword(password, secPassword);
    alert("Cadastro realizado com sucesso!")
    router.push("/diagnostico");
  }

  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");

  return (
    <>
      <Header page="LOGIN" path="/login"/>
      <div className="flex flex-col items-center font-secFontFamily overflow-x-hidden">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg m-8">
          <h1
            className={`${secFontFamily.className} text-center font-normal text-gray-700`}
          >
            FAZER CADASTRO
          </h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <PersonalInformationForm />
            <AdressForm />
            <CarInformationForm />
            <section className="flex flex-col gap-4 mb-4">
              <h2
                className={`${secFontFamily.className} font-normal text-gray-700 text-lg text-left pt-2`}
              >
                Crie uma senha (mín. de 3 caracteres e máximo de 8):
              </h2>
              <div>
                <Inputs
                  type="password"
                  name="password"
                  id="password"
                  minLength={3}
                  maxLength={8}
                  placeholder="Digite sua senha"
                  title="Digite sua senha (mín. de 3 caracteres e máximo de 8)"
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="password"
                  name="password"
                  id="CheckPassword"
                  placeholder="Confirme sua senha"
                  title="Confirme sua senha (mín. de 3 caracteres e máximo de 8)"
                  onChange={(e) => setSecPassword(e.target.value)}
                  required={true}
                />
              </div>
            </section>
            <Buttons type="submit" id="btnSingup">
              CADASTRAR
            </Buttons>
          </form>
        </div>
      </div>
    </>
  );
}
