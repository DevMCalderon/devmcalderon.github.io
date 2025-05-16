import { useTranslation } from "react-i18next";

import CustomHeader from '@/components/uI/customHeader/CustomHeader';

import AboutMeImg from '@/assets/img/about-me.gif'
import ImageWithReflection from "../../components/uI/ImageWithReflection";

const AboutMe = () => {
  const [t] = useTranslation("global");

  const linkStyles = 'text-blue-300 hover:text-link_color_hover hover:underline textShadow cursor-pointer'
  const paragraphStyles = 'mb-2 textShadow text-[#ccc]'

  return (
    <section className="bg_semitransparent bg-container_color2 bg-opacity-90 text-center md:text-start mt-0" id="aboutMe">
      
      {/* separador */}
      <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto"/>
        
      {/* main content */}
      <div className="max-w-screen-2xl pt-0 pb-16 mx-auto">

        {/* left side */}
        <div className="flex flex-wrap-reverse pt-14">
          <div className="w-full lg:w-5/12 lg:px-8 my-auto flex justify-center flex-col">
            <p className={`mt-4 text-2xl font-bold text-center text-[#bbe2ff] ${paragraphStyles}`}>
              {t(`about_me.img_description`)}
            </p>
            <ImageWithReflection
              className="opacity-[0.93] w-full md:w-72 mx-auto"
              imageClasses="border-[0.12rem] border-border_color1"
              rounded="md:rounded-[4rem] "
              src={AboutMeImg}
              alt="About-me-image"
            />
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