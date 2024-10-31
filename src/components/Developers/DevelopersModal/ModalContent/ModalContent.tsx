import Image from "next/image";
import logoInsta from "@/public/img/Instagram92.png";
import logoLinkedin from "@/public/img/LinkedIn92.png";
import logoGitHub from "@/public/img/GitHub92.png";
import { mainFontFamily, secFontFamily } from "@/app/fonts";

type ModalContentProps = {
  picture: string;
  alt: string;
  name: string;
  role: string;
  linkedin: string;
  github: string;
  instagram: string;
};

export default function ModalContent({
  picture,
  alt,
  name,
  role,
  github,
  instagram,
  linkedin,
}: ModalContentProps) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg border-t-2 border-sec-color shadow-md p-4 gap-2">
        <section className="flex justify-center items-center">
          <Image
            src={picture}
            alt={alt}
            width={100}
            height={100}
            className="rounded-full w-1/2 border-2 border-transparent shadow-md"
          />
          <div>
            <h1 className={`${mainFontFamily.className} text-black text-xl`}>{name}</h1>
            <p className={`${secFontFamily.className} text-gray-800`}>{role}</p>
          </div>
        </section>
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
    </>
  );
}
