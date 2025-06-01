import { Trans, useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";

import arrowDown from "@/assets/img/icons/arrow-down.svg";

const Slogan = ({ t }) => {
  
  return (
    <>
      {/* slogan section */}
      <section className="h-screen flex mx-auto items-center mb-10 lg:max-w-screen-xl">
        <h2 className={`paragraphStyles2 text-5xl lg:text-[3.7rem] lg:w-[90%] mx-auto`}>
           <Trans
            i18nKey={t('banner.slogan')}
            components={[ 
              <HighlightText className="text-blue-400"/>,
              <HighlightText className="text-amber-200 underline underline-offset-8"/>
            ]}
          />
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
    </>
  );
};

export default Slogan;