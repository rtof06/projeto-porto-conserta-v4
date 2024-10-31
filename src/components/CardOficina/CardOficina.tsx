"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ModalOficina from "./ModalOficina/ModalOficina";
import { secFontFamily } from "@/app/fonts";

type CardOficinaProps = {
  title: string;
  neighbourhood: string;
  uf: string;
  adress: string;
  phone: string;
  info: string;
};

export default function CardOficina({
  title,
  neighbourhood,
  uf,
  adress,
  phone,
  info,
}: CardOficinaProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        className={`${secFontFamily.className} bg-white rounded-lg border-t-2 border-blue-500 p-4 m-3 cursor-pointer transition duration-200 ease-in hover:bg-blue-500 hover:text-gray-200 w-56 h-full`}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        {title} - {neighbourhood}/{uf}
      </button>
      <ModalOficina
        isOpen={isModalVisible}
        setModalOpen={() => setIsModalVisible(!isModalVisible)}
      >
        <motion.div
          className={`${secFontFamily.className}`}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg">{adress}</p>
          <p className="text-lg">{phone}</p>
          <p className="text-base">{info}</p>
        </motion.div>
      </ModalOficina>
    </div>
  );
}
