import Inputs from "@/components/Inputs/Inputs"
import { secFontFamily } from "@/app/fonts"
import { ChangeEventHandler} from "react";

interface PasswordConfirmationProps {
   setPass: ChangeEventHandler;
   setSecPass: ChangeEventHandler;
}

export default function PasswordConfirmation({setPass, setSecPass}: PasswordConfirmationProps) {

  return (
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
       onChange={setPass}
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
      onChange= {setSecPass}//{(e) => setSecPassword(e.target.value)}
       required={true}
     />
   </div>
 </section>
  )
}
