import { useState } from "react";
import { secFontFamily } from "@/app/fonts";
import Image from "next/image";
import DevelopersModal from "./DevelopersModal/DevelopersModal";
import ModalContent from "./DevelopersModal/ModalContent/ModalContent";

type DevelopersProps = {
  name: string;
  rm: string;
  img: string;
  alt: string;
  linkedin: string;
  github: string;
  instagram: string;
};

export default function Developers({
  name,
  rm,
  img,
  alt,
  github,
  instagram,
  linkedin,
}: DevelopersProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section className="flex flex-col items-center mb-10">
      <div
        className={`${secFontFamily.className} flex flex-col text-lg items-center font-normal text-center cursor-pointer border-t-2 p-2 bg-white-5-opacity shadow-xl border-sec-color rounded-lg hover:shadow-2xl hover:animate-pulse transition duration-200 ease-in`}
        onClick={() => {
          setIsModalVisible(true);
        }}
        key={rm}
      >
        <Image
          src={img}
          alt={alt}
          className="rounded-full w-1/2 border-2 border-transparent shadow-md"
          width={200}
          height={200}
        />
        <p className="text-lg text-black">{name}</p>
        <p className="text-base text-black">{rm}</p>
      </div>
      {isModalVisible && (
        <div className="absolute z-50">
          <DevelopersModal
            isOpen={isModalVisible}
            setModalOpen={() => setIsModalVisible(!isModalVisible)}
          >
            <ModalContent
              github={github}
              instagram={instagram}
              linkedin={linkedin}
              key={rm}
            />
          </DevelopersModal>
        </div>
      )}
    </section>
  );
}
