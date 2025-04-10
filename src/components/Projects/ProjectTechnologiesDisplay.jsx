import imgSkillsJson from '@/data/skills/skills.json';
import { useTranslation } from "react-i18next";

const ProjectTechnologiesDisplay = ({ technologies_used }) => {
  const [t] = useTranslation("global");

  return(
    <div className="flex flex-wrap h-auto gap-y-2 gap-x-3 mb-1.5">
      {technologies_used && technologies_used.map((technologyName, index) => {
        // search for technology in imgSkillsJson.json
        const tech = imgSkillsJson.find(item => item.id === technologyName) || {};
        return (
          // display technology icon and name
          <div
            className='flex md:flex-row items-center text-blue-300 rounded-xl px-2.5 py-1 border-[0.01rem] border-solid
            border-blue-900 bg-blue-950'
            key={index}
          >
            <img
              className='rounded-sm w-5 h-[1.2rem] mx-auto mr-1.5'
              src={tech ? tech.img_path : ''}
              alt={technologyName}
            />
            <h5 className='text-xs lg:text-sm mt-1.5 md:mt-0'>
              {/* extrae la clave dentro de t('...') y la traduce */}
              {tech.label && tech.label.startsWith("t(")
                ? t(tech.label.slice(3, -2)) //extrae la clave dentro de t('...')
                : tech.label
              }
            </h5>
          </div>
        );
      })}
    </div>
);
}

export default ProjectTechnologiesDisplay;