'use client'
import Image from "next/image";
import logoAmplexus from "@/public/img/logo-amplexus.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <header className="flex justify-between">
      <Link href={"/"}>
        <Image
          src={logoAmplexus}
          alt="Logo AmplexusTech"
          title="Página inicial"
        />
      </Link>
      <nav>
        <ul>
          <li className="flex">
            {page === "VOLTAR" ? (
              <Link href="#" onClick={handleGoBack}>
                {page}
              </Link>
            ) : (
              <div>
                <Link href={path2}>{page2}</Link>
                <Link href={path}>{page}</Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
