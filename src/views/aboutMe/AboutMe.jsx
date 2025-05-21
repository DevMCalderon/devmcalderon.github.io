import { useTranslation } from "react-i18next";

import TypeAnimation from '@/components/banner/typeAnimation/TypeAnimation'
import CustomHeader from '@/components/uI/customHeader/CustomHeader';
import AsciiArt from "@/components/AsciiArt";

const AboutMe = () => {
  const [t] = useTranslation("global");
  
  const words = [''];

  return (
    <section className="bg-[#0b1525e8] bg-opacity-100 text-center md:text-start mt-0" id="aboutMe">
      
      {/* separador */}
      <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto"/>
        
      {/* main content */}
      <div className="max-w-screen-2xl pt-0 pb-16 mx-auto">

        {/* left side */}
        <div className="flex flex-wrap-reverse pt-14">
          <div className="w-full lg:w-5/12 lg:px-8 my-auto flex justify-center flex-col">
            <p className={`mb-4 text-2xl font-bold text-center terminal_text text-green-300 py-0`}>
              {t(`about_me.img_description`)}
            </p>

            <AsciiArt />
          </div>

          {/* right side */}
          <div className="w-full lg:w-7/12 text-center lg:text-left mb-5 lg:mb-0 font-terminal text-green-300 ">
            <CustomHeader
              align='left'
              emoji='🚀'
              text={t(`about_me.more_about_me`)}
            />

            <div className="w-[90%] mx-auto lg:ml-0 text-left">
              <p className={`terminal_text pb-4`}>
                {t(`about_me.paragraph1_1`)}
                <strong className="text-green-300">{t(`about_me.paragraph1_2`)}</strong>
              </p>
              <p className={`terminal_text pb-4`}>
                {t(`about_me.paragraph2_1`)}
                <strong className="text-green-300">{t(`about_me.paragraph2_2`)}</strong>
                {t(`about_me.paragraph2_3`)}
                <strong className="text-green-300">{t(`about_me.paragraph2_4`)}</strong>
              </p>
              <p className={`terminal_text pb-4`}>
                {t(`about_me.paragraph3_1`)}
                <strong className="text-green-300">{t(`about_me.paragraph3_2`)}</strong>
              </p>
              <p className={`terminal_text pb-4`}>
                {t(`about_me.paragraph2_5`)}
              </p>
              
              <p className="h-16 lg:h-12 text-lg">
                <TypeAnimation 
                 words={words}
                 className="text-green-600 terminal_text"
                />
              </p>
            </div>
            
            <p className={`flex w-full `}>
              <a 
                className={`mx-auto text-green-200 hover:text-link_color_hover hover:underline textShadow cursor-pointer terminal_text`}
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