export const checkPassword = (pw: string, secPw: string) => {
   if (pw !== secPw) {
     alert("As senhas não coincidem. Por favor cheque novamente!");
   }
 };