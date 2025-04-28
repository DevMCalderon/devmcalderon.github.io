import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import TypeAnimation from '@/components/Banner/TypeAnimation/TypeAnimation'
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import '@/components/Banner/Banner.css';

import arrowDown from "@/assets/img/icons/arrow-down.svg";
import headerImg from "@/assets/img/pfp/difuminado5.png";
import ExternalLink from "@/components/UI/ExternalLink";
import { IconGitHub, OpenFileFolder } from "@/components/Icons";

const Banner = () => {
  const [ t ] = useTranslation("global");
  
  const typeAnimationArray = [
    t(`banner.typeAnimation_1`),
    t(`banner.typeAnimation_2`),
    t(`banner.typeAnimation_3`),
    t(`banner.typeAnimation_4`)
  ];
  
  const [text] = useState('');
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial en píxeles
  
  useEffect(() => {
    // Calcula el nuevo tamaño de fuente basado en la longitud del texto
    const newFontSize = Math.min(35, 700 / text.length); // h,w; Ajusta los valores mínimo y máximo según tus necesidades
    setFontSize(newFontSize);
  }, [text]);

  return(
    <>
      <section
        className="banner text-center md:text-start mt-0 pb-[160px]
          bg-[linear-gradient(0deg,rgba(70,111,149,0)_0%,rgba(39,32,94,0.28)_20%,rgba(50,27,124,0.28)_55%,rgba(49,25,122,0.5)_95%)]"
        id="home"
      >
        
        {/* slogan section */}
        <section className="h-screen flex mx-auto items-center mb-10 lg:max-w-screen-xl">
          <h2 className={`paragraphStyles2 text-5xl lg:text-[3.7rem] lg:w-[90%] mx-auto`}>
            {'"'}
            {t(`banner.slogan1`)}
            <strong className="text-link_color">
              {t(`banner.slogan2`)}
            </strong>
            {t(`banner.slogan3`)}
            <strong className="text-highlighted_text_color underline underline-offset-8">
              {t(`banner.slogan4`)}
            </strong>
            {'."'}
          </h2>
        </section>
          
        {/* arrow down */}
        <div className="flex justify-center">
          <a href="/#banner">
            <img
              src={arrowDown}
              className="animatedImg w-10 mt-[-34vw] md:mt-[-18vw] lg:mt-[-10vw] hover:w-12 transition-all duration-150"
              alt="arrow-down"
            />
          </a>
        </div>
          
        {/* personal info section */}
        <section className="flex max-w-screen-2xl mx-auto" id="banner">
          <div className="items-center flex flex-wrap mx-5 md:mx-16">
            <div className="w-full lg:w-7/12">
                
              <span className="tagline text-link_disabled_color text-xl">
                <span className="text-sm">
                  {'🌐 '}
                </span>
                  {t(`banner.welcome`)}
                <span className="text-sm">
                  {' 🌐'}
                </span>
              </span>
              
              {/* Name & Animated text */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl mb-3">
                <span className="textShadow">{t(`banner.Fullname`)}</span>
                <div className="h-16 lg:h-12 mt-2">
                  <span className="wrap text-highlighted_text_color" style={{ fontSize: `${fontSize}px` }}>
                    { <TypeAnimation {...typeAnimationArray}/>}
                  </span>
                </div>
              </h1>
                
              {/* main description paragraph */}
              <p className="paragraphStyles">
                {t(`banner.main_paragraph1`)}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:decoration-link_color_hover"
                  href={import.meta.env.VITE_FULLSTACK_URL}
                  >
                    <strong className="text-link_color hover:text-link_color_hover">
                      {t(`banner.full_stack`)}
                    </strong>
                </a>
                {t(`banner.main_paragraph3`)}
                <strong className="text-highlighted_text_color">{t(`banner.description_aprendio`)}</strong>
              </p>
                
              {/* list */}
              <ul className="ml-6 lista-flecha text-start mb-5">
                <li className="paragraphStyles bannerList">
                    {t(`banner.description_enfocado_en`)}
                    <strong className="text-highlighted_text_color">{t(`banner.description_enfocado_en2`)}</strong>
                    {t(`banner.p7`)}
                </li>
                
                <li className="paragraphStyles bannerList">
                  <span>
                      {t(`banner.p4`)}
                      <strong className="text-highlighted_text_color">{t(`banner.description_tecnologias1`)}</strong>
                      {t(`banner.description_tecnologias2`)}
                  </span>
                </li>
                
                <li className="paragraphStyles bannerList">
                  {t(`banner.description_mision`)}
                </li>
              </ul>
                
              {/* cv */}
              <ExternalLink
                icon={<OpenFileFolder />}
                text={t(`banner.cv2`)}
                href=""
                className="mb-6"
                showDecoration={true}
              />
              
              {/* portfolio source code */}
              <ExternalLink
                icon={<IconGitHub />}
                text="Este sitio fue construido por mí mismo — Ver código fuente"
                href={import.meta.env.VITE_GITHUB_PORTFOLIO_URL}
                className="mb-6"
                showDecoration={true}
              />

              {/* social networks */}
              <div className="flex">
                  <SocialIcons />
              </div>
            </div>
            
            
            
            {/* profile picture */}
            <div className=" md:w-1/2 lg:w-5/12 mt-16 lg:mt-0 mx-auto self-start">
                <img className="animatedImg w-96 md:w-80 lg:w-[400px] rounded-full opacity-[92%] shadow-2xl ml-auto" src={headerImg} alt="Header Img" />
            </div>
            
          </div>
        </section>
      </section>
    </>
  );
}

export default Banner;