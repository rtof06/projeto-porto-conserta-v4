import Inputs from "@/components/Inputs/Inputs"
import { secFontFamily } from "@/app/fonts"

export default function CarInformationForm() {
  return (
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
  )
}
