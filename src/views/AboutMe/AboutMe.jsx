import { useTranslation } from "react-i18next";

import CustomHeader from '@/components/UI/CustomHeader/CustomHeader';

const AboutMe = () => {
  const [t] = useTranslation("global");

  const linkStyles = 'text-link_color hover:text-link_color_hover hover:underline textShadow cursor-pointer'
  const paragraphStyles = 'mb-2 textShadow text-[#ccc]'

  return (
    <section className="bg_semitransparent bg-container_color2 bg-opacity-90 text-center md:text-start mt-0" id="aboutMe">
      
      {/* separador */}
      <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto"/>
        
      {/* main content */}
      <div className="max-w-screen-2xl pt-0 pb-16 mx-auto">

        {/* left side */}
        <div className="flex flex-wrap-reverse pt-14">
          <div className="w-full lg:w-5/12 lg:px-8 my-auto flex justify-center">
            <div className="w-64 md:w-80 lg:w-[24rem]">
              {/* text of img */}
              <img
                className="rounded-[3rem] opacity-90 border-[0.15rem] border-border_color1"
                src={'https://camo.githubusercontent.com/bc425a5c4e99161dca81a32820bad4d14290d90de6308f16eb8e1d904526f5ab/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f44353631324151474f6d77664945356d6c57412f61727469636c652d636f7665725f696d6167652d736872696e6b5f3732305f313238302f302f313637343631373934373232383f653d3231343734383336343726763d6265746126743d4654555f697351365659665635445f7565464850577654385a716744654a47337972384d69386c70666b30'} 
                alt="Header Img2"
              />
              <p className={`mt-4 text-2xl font-bold text-center ${paragraphStyles}`}>{t(`about_me.img_description`)}</p>
            </div>

          </div>

          {/* right side */}
          <div className="w-full lg:w-7/12 text-center lg:text-left mb-5 lg:mb-0">
            <CustomHeader
              align='left'
              emoji='🚀'
              text={t(`about_me.more_about_me`)}
            />

            <div className="w-[90%] mx-auto lg:ml-0 text-left">
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph1_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph1_2`)}</strong>
                {'.'}
              </p>
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph2_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph2_2`)}</strong>
                {t(`about_me.paragraph2_3`)}
                {'.'}
              </p>
              <p className={`${paragraphStyles} pb-4`}>
                {t(`about_me.paragraph3_1`)}
                <strong className="text-highlighted_text_color">{t(`about_me.paragraph3_2`)}</strong>
                {t(`about_me.paragraph3_3`)}
                {'.'}
              </p>
            </div>

            <p className={`flex w-full ${paragraphStyles}`}>
              <a 
                className={`mx-auto ${linkStyles}`}
                target="_blank" rel="noreferrer"
                href={import.meta.env.VITE_DISC_URL}
              >
                DISC: DC
              </a>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMe;