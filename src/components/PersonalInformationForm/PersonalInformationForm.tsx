import Inputs from "@/components/Inputs/Inputs"
import { secFontFamily } from "@/app/fonts"

export default function PersonalInformationForm() {
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
  )
}
