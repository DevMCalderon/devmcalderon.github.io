import { Trans, useTranslation } from "react-i18next";

import TypeAnimation from '@/components/banner/typeAnimation/TypeAnimation'
import CustomHeader from '@/components/uI/customHeader/CustomHeader';
import AsciiArt from "@/components/AsciiArt";
import HighlightText from "@/components/HighlightText";

const AboutMe = () => {
  const [t] = useTranslation("global");
  
  const words = [''];

  return (
    <section className=" bg-[#0b1525e8] bg-opacity-100 text-center md:text-start mt-0" id="aboutMe">
      
      {/* separador */}
      <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto"/>
        
      {/* main content */}
      <div className="max-w-screen-2xl pt-0 pb-16 mx-auto md:max-w-screen-2xl">

        {/* left side */}
        <div className="flex flex-wrap-reverse md:flex-nowrap pt-14 w-[90%] mx-auto">
          <div className="border-animation w-full md:w-5/12 lg:w-4/12 md:mr-0 my-auto md:mr-10 xl:mr-16 rounded-3xl p-4 flex justify-center flex-col overflow-hidden">
            <p className={`rgb-animation mb-4 text-base xl:text-xl font-bold text-center terminal_text py-0`}>
              {t(`about_me.img_description`)}
            </p>
            <AsciiArt />
          </div>

          {/* right side */}
          <div className="w-full md:w-7/12 text-center lg:text-left mb-5 lg:mb-0 text-blue-300 font-terminal">
            <CustomHeader
              className="contact-header"
              align='left'
              emoji='🚀'
              text={t(`about_me.more_about_me`)}
            />

            <div className="text-left">
              <p className={`terminal_text pb-4`}>
                <Trans
                  i18nKey={t('about_me.paragraphs.0')}
                  components={[ <HighlightText className="text-blue-300"/> ]}
                />
              </p>
              <p className={`terminal_text pb-4`}>
                <Trans
                  i18nKey={t('about_me.paragraphs.1')}
                  components={[ <HighlightText className="text-blue-300"/> ]}
                />
              </p>
              <p className={`terminal_text pb-4`}>
                <Trans
                  i18nKey={t('about_me.paragraphs.2')}
                  components={[ <HighlightText className="text-blue-300"/> ]}
                />
              </p>
              <p className={`terminal_text pb-4`}>
                <Trans
                  i18nKey={t('about_me.paragraphs.3')}
                  components={[ <HighlightText className="text-blue-300"/> ]}
                />
              </p>
              <p className={`terminal_text pb-4`}>
                <Trans
                  i18nKey={t('about_me.paragraphs.4')}
                  components={[ <HighlightText className="text-blue-300"/> ]}
                />
              </p>
              
              <TypeAnimation
                words={words}
                className="text-blue-600 terminal_text text-lg flex flex-wrap"
              />
            </div>
            
            <p className={`flex w-full `}>
              <a 
                className={`link terminal_text py-0 mx-auto text-blue-200 textShadow`}
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