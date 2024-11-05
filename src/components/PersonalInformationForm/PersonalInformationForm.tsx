import Inputs from "@/components/Inputs/Inputs";
import { secFontFamily } from "@/app/fonts";

type PersonalInformationFormProps = {
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  setNome: (value: string) => void;
  setSobrenome: (value: string) => void;
  setEmail: (value: string) => void;
  setTelefone: (value: string) => void;
};

export default function PersonalInformationForm({
  name,
  lastName,
  mail,
  phone,
  setNome,
  setSobrenome,
  setEmail,
  setTelefone,
}: PersonalInformationFormProps) {
  return (
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
          value={name}
          onChange={(e) => setNome(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <Inputs
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Sobrenome"
          value={lastName}
          onChange={(e) => setSobrenome(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <Inputs
          type="date"
          id="birthday"
          name="birthday"
          placeholder="DD/MM/AAAA"
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
          value={mail}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <Inputs
          type="tel"
          name="phone"
          id="phone"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setTelefone(e.target.value)}
          required={true}
        />
      </div>
      <div>
        <Inputs
          type="string"
          name="cpf"
          id="CPF"
          placeholder="CPF"
          required={true}
        />
      </div>
    </section>
  );
}
