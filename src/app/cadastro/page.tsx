"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header/Header";
import Inputs from "../../components/Inputs/Inputs";
import Buttons from "../../components/Buttons/Buttons";
import { secFontFamily } from "../fonts";

export default function Cadastro() {
  const router = useRouter();

  const checkPassword = (pw: string, secPw: string) => {
    if (pw !== secPw) {
      alert("As senhas não coincidem. Por favor cheque novamente!");
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    checkPassword(password, secPassword);
    router.push("/diagnostico");
  }

  //   const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");

  return (
    <>
      <Header page="OFICINAS" path="/oficinas" page2="LOGIN" path2="/login" />
      <div className="flex flex-col items-center font-secFontFamily overflow-x-hidden">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg m-8">
          <h1
            className={`${secFontFamily.className} text-center font-normal text-gray-700`}
          >
            FAZER CADASTRO
          </h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <h2
                className={`${secFontFamily.className} font-normal text-gray-700 text-lg text-left pt-2 col-span-full`}
              >
                INFORMAÇÕES PESSOAIS
              </h2>
              <div>
                <Inputs
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Sobrenome"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="date"
                  id="birthday"
                  name="birthday"
                  placeholder="Data de nascimento"
                  inputMode="numeric"
                  pattern="\d{2}/\d{2}/\d{4}"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  //  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Telefone"
                  required={true}
                />
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <h2
                className={`${secFontFamily.className} font-normal text-gray-700 text-lg text-left pt-2 col-span-full`}
              >
                ENDEREÇO
              </h2>
              <div>
                <Inputs
                  type="text"
                  name="cep"
                  id="cep"
                  placeholder="CEP"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Rua e número"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Cidade"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Estado"
                  required={true}
                />
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <h2
                className={`${secFontFamily.className} font-normal text-gray-700 text-lg text-left pt-2 col-span-full`}
              >
                DADOS DO VEÍCULO
              </h2>
              <div>
                <Inputs
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Marca"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Modelo"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="number"
                  name="year"
                  id="year"
                  min={1900}
                  max={2025}
                  placeholder="Ano"
                  required={true}
                />
              </div>
              <div>
                <Inputs
                  type="text"
                  name="plate"
                  id="plate"
                  placeholder="Placa"
                  required={true}
                />
              </div>
            </section>
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
