import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import TypeAnimation from '@/components/banner/typeAnimation/TypeAnimation'
import '@/components/banner/Banner.css';
import { IconGlobeWithMeridians } from "@/components/uI/Icons";
import ImageWithReflection from "@/components/uI/ImageWithReflection";
import HighlightText from "@/components/HighlightText";
import Slogan from "@/components/banner/Slogan";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

import headerImg from "@/assets/img/pfp/pfp.png";
import BannerLinks from "@/components/banner/BannerLinks";

const Banner = () => {
  const [ t ] = useTranslation("global");
  
  const words = [
    t(`banner.typeAnimation_1`),
    t(`banner.typeAnimation_2`),
    t(`banner.typeAnimation_3`),
    t(`banner.typeAnimation_4`),
    t(`banner.typeAnimation_5`)
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
      <div
        className="banner text-center md:text-start mt-0 pb-16 lg:pb-32
          bg-[linear-gradient(0deg,rgba(70,111,149,0)_0%,rgba(39,32,94,0.28)_20%,rgba(50,27,124,0.28)_55%,rgba(49,25,122,0.5)_95%)]
          "
        id="home"
      >

        <Slogan t={t} />

        {/* personal info section */}
        <section className="flex max-w-screen-2xl mx-auto" id="banner" aria-labelledby="banner">
          <div className="items-center mx-5 md:mx-16 flex flex-wrap w-full">
          
            <AnimatedOnScroll variant="fadeLeft" className="w-full lg:w-7/12">
              {/* welcome box */}
              <div className="tagline text-link_disabled_color text-xl rounded-md">
                  <IconGlobeWithMeridians className="mr-2 hidden md:inline text-sm" />
                  {t(`banner.welcome`)}
                  <IconGlobeWithMeridians className="ml-2 text-sm hidden md:inline" />
              </div>
              
              {/* Name & Animated text */}
              <h1 className="text-4xl md:text-5xl lg:text-[2.7rem] mb-3" id="banner">
                <span className="textShadow">{t(`banner.Fullname`)}</span>
                <div className="h-16 lg:h-12 mt-2" style={{ fontSize: `${fontSize}px` }}>
                  <TypeAnimation
                    words={words}
                    className="text-highlighted_text_color text-2xl md:text-3xl"
                  />
                </div>
              </h1>
                
              {/* main description paragraph */}
              <p className="paragraphStyles text-left">
                <strong className="font-normal">
                  <Trans
                    i18nKey={t('banner.main_paragraph1')}
                    components={[ 
                      <a
                        key="link"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline text-sky-300 hover:text-link_color_hover"
                        href={import.meta.env.VITE_FULLSTACK_URL}
                        >
                    </a>,
                      <HighlightText className="text-amber-100"/>,
                    ]}
                    values={{ linkText: t(`banner.x`) }}
                    />
                  </strong>
              </p>

              {/* paragraph list */}
              <ul className="ml-6 lista-flecha text-start">
                <li className="paragraphStyles bannerList">
                  <Trans
                    i18nKey={t('banner.paragraph1')}
                    components={[ <HighlightText className="text-amber-100"/> ]}
                  />
                </li>
                <li className="paragraphStyles bannerList">
                  <Trans
                    i18nKey={t('banner.paragraph2')}
                    components={[ <HighlightText className="text-amber-100"/> ]}
                  />
                </li>
                <li className="paragraphStyles bannerList">
                  <Trans
                    i18nKey={t('banner.paragraph3')}
                    components={[ <HighlightText className="text-amber-100"/> ]}
                  />
                </li>
              </ul>
              
              <BannerLinks t={t} />
            </AnimatedOnScroll>
              
            <AnimatedOnScroll variant="fadeRight" className="w-full md:w-1/2 lg:w-[23rem] mx-auto">
              {/* profile picture */}
              <ImageWithReflection
                className="animatedImg md:w-1/2 lg:w-[23rem] mt-16 lg:mt-0 mx-auto self-start w-[70%]"
                imageClassName="opacity-[92%] shadow-2xl ml-auto bg-gradient-to-l from-[#69008c59] to-[#35338fAA]"
                bothClassName="rounded-full border-[0.25rem] border-black"
                reflectionWidth="h-16 lg:h-32"
                src={headerImg}
                alt="Header Img"
              />
            </AnimatedOnScroll>
          </div>
          
        </section>
      </div>
    </>
  );
};

export default Banner;