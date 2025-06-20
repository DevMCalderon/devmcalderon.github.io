import { useTranslation } from 'react-i18next';

import CustomHeader from '@/components/uI/customHeader/CustomHeader';
import imgSkillsJson from '@/data/skills/skills.json';

const Skills = () => {
  const [ t ] = useTranslation("global");
  
  const skills_description =
    <span>
      {t(`skills.description1`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2`)}</strong>
      {t(`skills.description2_2`)}
      <strong className="text-highlighted_text_color">{t(`skills.description2_3`)}</strong>
      {t(`skills.description3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description4`)}</strong>
      {t(`skills.description5`)}
      <strong className="text-highlighted_text_color">{t(`skills.description5_2`)}</strong>
      {t(`skills.description5_3`)}
      <strong className="text-highlighted_text_color">{t(`skills.description6`)}</strong>
      {t(`skills.description7`)}
      <strong className="text-highlighted_text_color">{t(`skills.description7_1`)}</strong>
      {t(`skills.description7_2`)}
      <strong className="text-highlighted_text_color">{t(`skills.description7_3`)}</strong>
    </span>
  ;
  
  return(
    <>
      <section 
        className='pb-20 bg-[linear-gradient(180deg,rgba(36,31,128,0)_90%,rgba(51,29,140,0.8)_98%,rgb(51,29,140)_100%)]'
        id='skills'
      >
        <div
          className='containerShadow1 shadow-2xl pt-12 md:pb-3 px-5 md:px-10 lg:px-24 rounded-[3.8rem]
            text-center mt-[-60px] bg-container_color2 bg-opacity-[85%] xl:max-w-screen-3xl mx-auto w-[95vw]'
        >
        
          <CustomHeader
            align='center'
            emoji='📚'
            text={t(`skills.skills`)}
          />
          
          {/* description */}
          <p className='text-left text-lgbase mx-auto mt-[14px] mb-8 lg:mb-7'>{skills_description}</p>
          
          <div className='flex flex-wrap gap-x-0 md:gap-4 gap-y-5 md:gap-y-7 justify-center mx-auto pb-14 lg:mb-0'>
            {imgSkillsJson.map((item, index) => (
              <div
                className='flex flex-col md:flex-row items-center basis-[calc(100%/4)] md:basis-[calc(100%/5)]
                lg:basis-[calc(100%/8)]'
                key={index}
              >
                <img
                  className='rounded-lg w-7 h-7 md:w-9 md:h-9 mx-auto md:mx-0 md:mr-3'
                  src={item.img_path}
                  alt={item.label}
                />
                  
                <h5 className='max-w-[4rem] text-center mt-1.5 md:mt-0'>
                  {/* extrae la clave dentro de t('...') y la traduce */}
                  {item.label.startsWith("t(")
                    ? t(item.label.slice(3, -2)) //extrae la clave dentro de t('...')
                    : item.label
                  }
                </h5>
              </div>
            ))}
          </div>
        
        </div>
      </section>

    </>
  );
}

export default Skills;