import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import TypeAnimation from '@/components/banner/typeAnimation/TypeAnimation'
import SocialIcons from "@/components/socialIcons/SocialIcons";
import '@/components/banner/Banner.css';
import { IconGitHub, OpenFileFolder, IconGlobeWithMeridians } from "@/components/uI/Icons";
import ExternalLink from "@/components/uI/ExternalLink";
import ImageWithReflection from "@/components/uI/ImageWithReflection";

import arrowDown from "@/assets/img/icons/arrow-down.svg";
// import headerImg from "@/assets/img/pfp/difuminado5.png";
import headerImg from "@/assets/img/pfp/2.png";

const Banner = () => {
  const [ t ] = useTranslation("global");
  
  const words = [
    t(`banner.typeAnimation_1`),
    t(`banner.typeAnimation_2`),
    t(`banner.typeAnimation_3`),
    t(`banner.typeAnimation_4`)
  ];
  
  const [text] = useState('');
  const [fontSize, setFontSize] = useState(16); // initial font size in pixels
  
  useEffect(() => {
    // it calculates the new font size based on the length of the text
    // h,w; adjust the minimum and maximum font sizes values accordingly to your needs
    const newFontSize = Math.min(35, 700 / text.length); 
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
            <strong className="text-blue-300">
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
        <section className="flex max-w-screen-2xl mx-auto" id="banner" aria-labelledby="banner">
          <div className="items-center flex flex-wrap mx-5 md:mx-16">
            <div className="w-full lg:w-7/12">
            
              {/* welcome box */}
              <div className="tagline text-link_disabled_color text-xl">
                  {' '}
                  <IconGlobeWithMeridians className="text-sm" />
                  {t(`banner.welcome`)}
                  {' '}
                  <IconGlobeWithMeridians className="text-sm" />
              </div>
              
              {/* Name & Animated text */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl mb-3" id="banner">
                <span className="textShadow">{t(`banner.Fullname`)}</span>
                <div className="h-16 lg:h-12 mt-2" style={{ fontSize: `${fontSize}px` }}>
                  <TypeAnimation 
                    words={words}
                    className="text-highlighted_text_color"
                  />
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
                    <strong className="text-blue-300 hover:text-link_color_hover">
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
                text={t(`banner.portfolio_source_code_text`)}
                href={import.meta.env.VITE_GITHUB_PORTFOLIO_URL}
                className="mb-6"
                showDecoration={true}
              />

              {/* social networks */}
              <div className="flex">
                  <SocialIcons />
              </div>
            </div>
            
            {/* imageClassName */}
            {/* profile picture */}
            <ImageWithReflection
              className="animatedImg md:w-1/2 lg:w-5/12 mt-16 lg:mt-0 mx-auto self-start w-96 md:w-80 lg:w-[400px]"
              imageClassName="opacity-[92%] shadow-2xl ml-auto bg-gradient-to-l from-[#69008c59] to-[#35338fAA]"
              bothClassName="rounded-full border-[0.25rem] border-black"
              reflectionWidth="h-32"
              src={headerImg}
              alt="Header Img"
            />
            
          </div>
        </section>
      </section>
    </>
  );
}

export default Banner;