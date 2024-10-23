"use client";
import Image from "next/image";
import logoAmplexus from "@/public/img/logo-amplexus.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mainFontFamily } from "@/app/fonts";

type HeaderProps = {
  page: string;
  page2?: string;
  path: string;
  path2: string;
};

export default function Header({ page, path, page2, path2 }: HeaderProps) {
  const navigate = useRouter();

  const handleGoBack = () => {
    navigate.back();
  };

  return (
    <header
      className={`${mainFontFamily.className} flex flex-col items-center justify-between p-3 bg-main-color text-white`}
    >
      <Link href={"/"} className="flex justify-center p-2">
        <Image
          src={logoAmplexus}
          alt="Logo AmplexusTech"
          title="Página inicial"
          className="w-1/2"
        />
      </Link>
      <nav>
        <ul className="itens flex gap-4">
          {page === "VOLTAR" ? (
            <li>
              <Link href="#" onClick={handleGoBack}>
                {page}
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href={path2}>{page2}</Link>
              </li>
              <li>
                <Link href={path}>{page}</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
