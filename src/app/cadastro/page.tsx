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
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!checkPassword(password, secPassword)) {
      alert("As senhas não coincidem!");
      return;
    }

    const cliente = {
      nome,
      sobrenome,
      email,
      telefone,
      password,
    };

    try {
      const response = await fetch(`${apiUrl}/clientes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        router.push("/diagnostico");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (err) {
      console.log(nome, sobrenome, email, telefone, password);
      alert("Erro ao cadastrar cliente: " + err);
    }
  };

  return (
    <>
      <Header page="LOGIN" path="/login" />
      <div className="flex flex-col items-center font-secFontFamily overflow-x-hidden">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg m-8">
          <h1
            className={`${secFontFamily.className} text-center font-normal text-gray-700`}
          >
            FAZER CADASTRO
          </h1>
          <form className="text-center" onSubmit={handleSubmit}>
            <PersonalInformationForm
              name={nome}
              lastName={sobrenome}
              mail={email}
              phone={telefone}
              setNome={setNome}
              setSobrenome={setSobrenome}
              setEmail={setEmail}
              setTelefone={setTelefone}
            />
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
