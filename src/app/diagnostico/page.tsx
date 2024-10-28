'use client'
import Background from '@/components/Background/Background';
import Header from '@/components/Header/Header';
import { useRouter } from 'next/navigation';
import { services } from '../data/servicesInfo';

export default function Diagnostico() {
    const router = useRouter();
    document.title = "Diagnóstico";

    return (
        <>
            <Header page="OFICINAS" path="/oficinas" path2="/" />
            <div className="flex flex-col items-center bg-white bg-opacity-50 p-8 rounded-lg">
                <Background title="DIAGNÓSTICO DO CARRO">
                    <div className="flex flex-col items-center gap-4 p-4">
                        {services.map((diagnostic) => (
                            <button
                                key={diagnostic.id}
                                type="button"
                                className="w-1/2 btn-primary"
                                onClick={() => router.push(`/agendamento/${diagnostic.id}`)}
                            >
                                {diagnostic.service}
                            </button>
                        ))}
                    </div>
                </Background>
            </div>
        </>
    );
}
