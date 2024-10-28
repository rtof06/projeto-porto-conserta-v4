'use client'
import Buttons from '@/components/Buttons/Buttons';
import Header from '@/components/Header/Header';
import Inputs from '@/components/Inputs/Inputs';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { secFontFamily } from '../fonts';

export default function EsqueceuASenha() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const emailBackup = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            alert("Cheque seu email!");
            router.push("/");
            setLoading(false);
        } catch (err) {
            alert('Algo deu errado.' + err);
        }
    };

    return (
        <>
            <Header page="LOGIN" path="/login" path2="/" />
            <div className={`${secFontFamily.className} flex flex-col items-center bg-white bg-opacity-50 p-8 rounded-lg max-sm:py-20`}>
                <h1 className="text-center font-normal text-gray-700 pb-4">Recuperar minha senha</h1>
                <form className="flex flex-col gap-4 max-sm:w-full xl:w-1/2" onSubmit={emailBackup}>
                    <div>
                        <Inputs
                            type="email"
                            placeholder="Digite seu email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            className="mb-4 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <Buttons
                        type="submit"
                        id="btnBackup"
                        title={loading ? 'Recuperando...' : 'Recuperar'}
                        disabled={loading || email === ''}
                    >
                        Recuperar
                    </Buttons>
                </form>
            </div>
        </>
    );
}
