import { useState } from "react";
import { secFontFamily } from "@/app/fonts";
import Image from "next/image";
import logoInsta from "@/public/img/Instagram92.png";
import logoLinkedin from "@/public/img/LinkedIn92.png";
import logoGitHub from "@/public/img/GitHub92.png";
import DevelopersModal from "./DevelopersModal/DevelopersModal";

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
    <section className="flex flex-col items-center">
      <div
        className={`flex flex-col ${secFontFamily.className} text-lg font-normal text-center shadow-lg`}
        key={rm}
      >
        <Image
          src={img}
          alt={alt}
          className="rounded-full w-1/2 border-2 border-transparent shadow-md transition duration-200 ease-in hover:shadow-xl cursor-pointer"
          onClick={() => {
            setIsModalVisible(true);
          }}
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
            <div className="flex flex-col rounded-lg border-t-2 border-sec-color shadow-md p-4 gap-2">
              <h2 className="text-black">Redes sociais</h2>
              <div className="flex flex-row justify-center items-center gap-4">
                <a
                  href={instagram}
                  className="transition duration-200 ease-in hover:opacity-80"
                >
                  <Image
                    src={logoInsta}
                    alt="Instagram"
                    className="w-12 md:w-16"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href={github}
                  className="transition duration-200 ease-in hover:opacity-80"
                >
                  <Image
                    src={logoGitHub}
                    alt="GitHub"
                    className="w-12 md:w-16"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href={linkedin}
                  className="transition duration-200 ease-in hover:opacity-80"
                >
                  <Image
                    src={logoLinkedin}
                    alt="LinkedIn"
                    className="w-12 md:w-16"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </DevelopersModal>
        </div>
      )}
    </section>
  );
}
