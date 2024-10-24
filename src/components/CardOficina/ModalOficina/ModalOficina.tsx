import { secFontFamily } from '@/app/fonts';
import React from 'react';

type ModalOficinaProps = {
  isOpen: boolean;
  children: React.ReactNode;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ModalOficina({
  isOpen,
  children,
  setModalOpen,
}: ModalOficinaProps) {
  if (isOpen) {
    return (
      <div className="flex flex-col absolute bg-gray-200 rounded-lg border-t-2 border-blue-500 shadow-lg p-4 text-center w-1/2 gap-4">
        {children}
        <button
          className={`${secFontFamily.className} border-0 bg-transparent text-xl cursor-pointer transition duration-200 ease-in hover:opacity-70 hover:text-red-500`}
          onClick={setModalOpen}
        >
          Fechar
        </button>
      </div>
    );
  }

  return null;
}
