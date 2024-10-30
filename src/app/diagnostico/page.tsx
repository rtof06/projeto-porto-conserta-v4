import Header from "@/components/Header/Header";
import Background from "@/components/Background/Background";
import Buttons from "@/components/Buttons/Buttons";
import { services } from "../data/serviceList";
import Link from "next/link";

export default function Diagnostico() {
  return (
    <>
      <Header page="" path="#" />
      <div className="flex justify-center py-8">
        <Background title="DIAGNÓSTICO DO CARRO">
          <div className="max-sm:flex max-sm:flex-col grid grid-cols-2 items-center p-4">
            {services.map((diagnostic) => (
              <Link href={`/agendamento/${diagnostic.id}`} key={diagnostic.id}>
                <Buttons type="button" id="diagnostico" key={diagnostic.id}>
                  {diagnostic.service}
                </Buttons>
              </Link>
            ))}
          </div>
        </Background>
      </div>
    </>
  );
}
