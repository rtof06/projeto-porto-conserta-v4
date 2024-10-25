import Background from "@/components/Background/Background";
import CardOficina from "@/components/CardOficina/CardOficina";
import { oficinas } from "../data/oficinasInfo";
import Header from "@/components/Header/Header";

export default function Oficina() {
  return (
    <>
      <Header page="OFICINAS" path="/oficinas" page2="LOGIN" path2="/login" />
      <div className="flex justify-center bg-white-5-opacity">
        <Background title="OFICINAS">
          <div className="grid grid-cols-4 max-sm:grid-cols-1">
            {oficinas.map((oficina) => (
              <CardOficina
                key={oficina.id}
                title={oficina.name}
                neighbourhood={oficina.neighbourhood}
                uf={oficina.uf}
                adress={oficina.street}
                phone={oficina.phone}
                info={oficina.atendimento}
              />
            ))}
          </div>
        </Background>
      </div>
    </>
  );
}
