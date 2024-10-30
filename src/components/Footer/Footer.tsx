import Image from 'next/image';
import Instagram from "@/public/img/InstagramP.png";
import Twitter from "@/public/img/TwitterX.png";
import TikTok from "@/public/img/TikTok.png";
import Linkedin from "@/public/img/LinkedInP.png";
import Youtube from "@/public/img/YouTube.png";
import Facebook from "@/public/img/Facebook.png";
import logoAmplexus from "@/public/img/logo-amplexus.png";
import logoPorto from "@/public/img/porto-seguro-novo-logo.png"


export default function Footer() {
  const redesSociais = [
    {
      id: "instagram",
      link: "https://instagram.com/porto",
      img: Instagram,
      alt: "Logo Instagram"
    },
    {
      id: "twitter",
      link: "https://twitter.com/portoseguro",
      img: Twitter,
      alt: "Logo X"
    },
    {
      id: "tiktok",
      link: "https://tiktok.com/@portoseguro",
      img: TikTok,
      alt: "Logo TikTok"
    },
    {
      id: "linkedin",
      link: "https://linkedin.com/company/porto",
      img: Linkedin,
      alt: "Logo LinkedIn"
    },
    {
      id: "youtube",
      link: "https://youtube.com/portoseguro",
      img: Youtube,
      alt: "Logo Youtube"
    },
    {
      id: "facebook",
      link: "https://www.facebook.com/porto",
      img: Facebook,
      alt: "Logo Facebook"
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f1f1f1', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Siga nas redes sociais:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {redesSociais.map((rede) => (
            <li key={rede.id} style={{ display: 'inline-block', margin: '0 10px' }}>
              <a href={rede.link} style={{ display: 'inline-block' }}>
                <Image src={rede.img} alt={rede.alt} width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <Image src={logoPorto} alt="Logo da Porto" width={64} height={64} />
          <Image src={logoAmplexus} alt="Logo da Amplexus" width={64} height={64} />
        </div>
        <p style={{ fontSize: '14px', color: '#555' }}>© 2024 Porto & FIAP</p>
      </div>
    </div>
  );
}
