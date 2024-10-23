import Image from "next/image";
import logoInsta from "@/public/img/Instagram92.png";
import logoLinkedin from "@/public/img/LinkedIn92.png";
import logoGitHub from "@/public/img/GitHub92.png";

type ModalContentProps = {
  linkedin: string;
  github: string;
  instagram: string;
};

export default function ModalContent({
  github,
  instagram,
  linkedin,
}: ModalContentProps) {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-lg border-t-2 border-sec-color shadow-md p-4 gap-2">
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
    </div>
  );
}
