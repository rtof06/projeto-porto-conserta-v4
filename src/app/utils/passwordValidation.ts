export const checkPassword = (pw: string, secPw: string): boolean => {
  if (pw !== secPw) {
    alert("As senhas não coincidem. Por favor cheque novamente!");
    return false;
  }
  return true;
};
