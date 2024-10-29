import Inputs from "@/components/Inputs/Inputs";
import { secFontFamily } from "@/app/fonts";

export default function AdressForm() {

  return (
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
  );
}
