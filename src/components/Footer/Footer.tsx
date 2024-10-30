import Image from 'next/image';
import Instagram from "@/public/img/InstagramP.png";
import Twitter from "@/public/img/TwitterX.png";
import TikTok from "@/public/img/TikTok.png";
import Linkedin from "@/public/img/LinkedInP.png";
import Youtube from "@/public/img/YouTube.png";
import Facebook from "@/public/img/Facebook.png";
import logoAmplexus from "@/public/img/logo-amplexus.png";
import logoPorto from "@/public/img/porto-seguro-novo-logo.png";

export default function Footer() {
  const redesSociais = [
    { id: "instagram", link: "https://instagram.com/porto", img: Instagram, alt: "Logo Instagram" },
    { id: "twitter", link: "https://twitter.com/portoseguro", img: Twitter, alt: "Logo X" },
    { id: "tiktok", link: "https://tiktok.com/@portoseguro", img: TikTok, alt: "Logo TikTok" },
    { id: "linkedin", link: "https://linkedin.com/company/porto", img: Linkedin, alt: "Logo LinkedIn" },
    { id: "youtube", link: "https://youtube.com/portoseguro", img: Youtube, alt: "Logo Youtube" },
    { id: "facebook", link: "https://www.facebook.com/porto", img: Facebook, alt: "Logo Facebook" }
  ];

  return (
    <div className="flex justify-between max-sm:flex-col max-sm:items-center p-5 bg-gray-100 text-center">
      <div className="mb-5">
        <p className="text-lg font-bold">Siga nas redes sociais:</p>
        <ul className="list-none p-0 flex justify-center">
          {redesSociais.map((rede) => (
            <li key={rede.id} className="inline-block mx-2">
              <a href={rede.link} className="inline-block">
                <Image src={rede.img} alt={rede.alt} width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-4 mb-2">
          <Image src={logoPorto} alt="Logo da Porto" width={35} height={35} className="rounded-full shadow-lg" />
          <Image src={logoAmplexus} alt="Logo da Amplexus" width={35} height={35} className="rounded-full shadow-lg" />
        </div>
        <p className="text-sm text-gray-600">© 2024 Porto & FIAP</p>
      </div>
    </div>
  );
}
