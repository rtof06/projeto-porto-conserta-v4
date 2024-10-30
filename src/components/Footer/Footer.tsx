import Image from 'next/image';
import style from './Footer.module.css';

export default function Footer() {
  const redesSociais = [
    {
      id: "instagram",
      link: "https://instagram.com/porto",
      img: "/Facebook F.png",
      alt: "Logo Instagram"
    },
    {
      id: "twitter",
      link: "https://twitter.com/portoseguro",
      img: "/InstagramP.png",
      alt: "Logo X"
    },
    {
      id: "tiktok",
      link: "https://tiktok.com/@portoseguro",
      img: "/TikTok.png",
      alt: "Logo TikTok"
    },
    {
      id: "linkedin",
      link: "https://linkedin.com/company/porto",
      img: "/LinkedInP.png",
      alt: "Logo LinkedIn"
    },
    {
      id: "youtube",
      link: "https://youtube.com/portoseguro",
      img: "/YouTube.png",
      alt: "Logo Youtube"
    },
    {
      id: "facebook",
      link: "https://www.facebook.com/porto",
      img: "/TwitterX.png",
      alt: "Logo Facebook"
    }
  ];

  return (
    <div className={style.footer}>
      <div className={style['social-media']}>
        <p className={style.title}>Siga nas redes sociais:</p>
        <ul>
          {redesSociais.map((rede) => (
            <li key={rede.id} className={style['social-media__list']}>
              <a href={rede.link} className={style.social}>
                <Image src={rede.img} alt={rede.alt} width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.copyright}>
        <div className={style['copyright__company']}>
          <Image src="/logoPorto.png" alt="Logo da Porto" className={style['company-logo']} width={64} height={64} />
          <Image src="/logoAmplexus.png" alt="Logo da Amplexus" className={style['company-logo']} width={64} height={64} />
        </div>
        <p className={style.copyright__text}>© 2024 Porto & FIAP</p>
      </div>
    </div>
  );
}