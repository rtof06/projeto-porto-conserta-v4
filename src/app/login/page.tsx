'use client'

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/app/data/users';
import Buttons from '@/components/Buttons/Buttons';
import Header from '@/components/Header/Header';
import Inputs from '@/components/Inputs/Inputs';
import { secFontFamily } from '../fonts';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return email?.includes('@') && email?.includes('.');
  };

  const validatePassword = (password: string) => {
    return password?.length >= 4 && password?.length < 16;
  };

  const validateInputs = () => {
    return validateEmail(username) && validatePassword(password);
  };

  const validateLogin = () => {
    return users.some((user) => username === user.email && password === user.password);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (validateLogin()) {
        router.push('/diagnostico');
      } else {
        alert('Usuário ou senha incorretos');
      }
      setLoading(false);
    } catch (err) {
      alert('Algo deu errado.' + err);
    }
  };

  return (
    <>
      <Header page="" path="/"/>
      <div className={`${secFontFamily.className} h-screen flex flex-col items-center bg-white bg-opacity-50 p-8 rounded-lg`}>
        <h1 className="text-center font-normal text-gray-700 pb-4">FAZER LOGIN</h1>
        <form className="flex flex-col gap-4 max-sm:w-full xl:w-1/2" onSubmit={handleSubmit}>
          <div>
            <Inputs
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <Inputs
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="appearance-none bg-white w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-blue-500 checked:border-transparent transition duration-200"
              />
              Lembre-se de mim
            </label>
            <a href="/esqueciMinhaSenha" className="w-fit text-gray-700 hover:border-b-2 hover:border-gray-700">
              Esqueceu a senha?
            </a>
          </div>
          <Buttons
            type="submit"
            id="btnLogin"
            title={loading ? 'Login' : 'Termine seu login'}
            disabled={loading || !validateInputs()}
          >
            LOGIN
          </Buttons>
        </form>
        <div className="mt-10 text-center">
          <a href="/cadastro" className="p-4 rounded-lg bg-main-color shadow-md text-white transition duration-200 hover:bg-main-color-low-opacity hover:text-blue-500">
            Não possui cadastro? <strong>Cadastre-se aqui!</strong>
          </a>
        </div>
      </div>
    </>
  );
}
