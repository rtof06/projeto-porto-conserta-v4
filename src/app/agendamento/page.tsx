'use client';

import BackgroundBox from '@/components/Background/Background';
import Buttons from '@/components/Buttons/Buttons';
import Header from '@/components/Header/Header';
import Inputs from '@/components/Inputs/Inputs';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { oficinas } from '../data/oficinasInfo'; // Ajuste o caminho conforme necessário
import { Service, services } from '../data/servicesInfo'; // Ajuste o caminho conforme necessário

export default function Agendamento() {
    const [buscaOficina, setBuscaOficina] = useState('');
    const [showOficinas, setShowOficinas] = useState(false);
    const [servico, setServico] = useState<Service | null>(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const foundService = services.find((service) => service.id === Number(id));
            setServico(foundService || null);
        }
    }, [id]);

    const buscaOficinaLowerCase = buscaOficina.toLowerCase();
    const listaOficinas = oficinas.filter((oficina) =>
        oficina.name.toLowerCase().includes(buscaOficinaLowerCase)
    );

    const fillSearch = (name: string) => {
        setBuscaOficina(name);
    };

    const handleAgendar = (e: FormEvent) => {
        e.preventDefault();
        alert('Serviço agendado!');
        router.push('/diagnostico');
    };

    return (
        <>
            <Header page="OFICINAS" path="/oficinas" path2="/" />
            <div className="flex justify-center font-secondary h-full mt-[150px]">
                <BackgroundBox title="AGENDAMENTO DE SERVIÇO">
                    <h2 className="font-normal bg-aux rounded-lg border-t-2 border-primary shadow-md m-4">
                        Serviço selecionado: {servico?.service}
                    </h2>
                    <div className="flex flex-col items-center">
                        <Inputs
                            type="search"
                            name="oficina"
                            id="idOficina"
                            placeholder="Filtrar por oficina"
                            value={buscaOficina}
                            onFocus={() => setShowOficinas(true)}
                            onChange={(e) => setBuscaOficina(e.target.value)}
                            required={true}
                        />
                        <ul className={`flex-col gap-[0.3em] bg-aux-low-opacity rounded-b-lg list-none p-[0.8em] border-b-2 border-primary ${showOficinas ? 'flex' : 'hidden'}`}>
                            {listaOficinas.map((oficina) => (
                                <li key={oficina.id}>
                                    <p onClick={() => fillSearch(oficina.name)} className="border-t-2 border-primary bg-aux rounded p-[0.3em] text-base cursor-pointer hover:bg-primary hover:border-t-2 hover:border-aux hover:text-aux">
                                        {oficina.name}
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <label htmlFor="idDate" className="block mt-4 mb-2 text-xl text-grey">
                            Escolha o dia que deseja agendar
                        </label>
                        <Inputs
                            type="date"
                            name="date"
                            id="idDate"
                            onChange={() => { }}
                            required={true}
                        />
                        <Buttons
                            type="submit"
                            id="btnAgendar"
                            onClick={handleAgendar}
                        >
                            AGENDAR
                        </Buttons>
                    </div>
                </BackgroundBox>
            </div>
        </>
    );
}
