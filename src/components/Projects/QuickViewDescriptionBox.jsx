import { useTranslation } from "react-i18next";

import ProjectTechnologiesDisplay from "@/components/Projects/ProjectTechnologiesDisplay";
import ExternalLink from "@/components/UI/ExternalLink";
import { IconGitHub } from "@/components/UI/Icons";

const QuickViewDescriptionBox = ({ projectData }) => {
  const [t] = useTranslation("global");
  
  return (
    <div
      className="text-xl text-bread border-2 border-indigo-700 rounded-3xl pt-3 pb-4 px-24 mb-6 text-center
        bg-[linear-gradient(0deg,_rgb(27,30,68)_-5%,_rgb(46,38,133)_100%)]"
    >
      {/* title */}
      <section aria-labelledby="title" className="mb-4">
        <span className="text-2xl text-highlighted_text_color">Proyecto:</span>
        <h1 
          id="title"
          className="text-5xl text-link_disabled_color2 text-center"
        >
          {projectData.project.title}
        </h1>
      </section>
      
      {/* separator */}
      <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto mb-4 "/>
      
      {/* category */}
      <section aria-labelledby="category" className="mb-3">
        <h3 id="category" className="text-xl text-start text-highlighted_text_color mb-1">
          {t(`projectDetail.Category`)}
        </h3>
        <p className="text-lg text-start">{ projectData.category.category }</p>
      </section>
      
      {/* GitHub */}
      <section aria-labelledby="category" className="mb-3">
        <h3 id="category" className="text-xl text-start text-highlighted_text_color mb-2">{t(`projectDetail.repository`)}</h3>
        <ExternalLink
          icon={<IconGitHub />}
          text={t(`projectDetail.repository_link_text`)}
          href={""}
        />
      </section>
    
      {/* technologies */}
      <section aria-labelledby='technologies' className="mb-3">
        <h3 id='technologies' className="text-start text-xl text-highlighted_text_color mb-2">
          {t(`projectDetail.used_technologies`)}
        </h3>
        <ProjectTechnologiesDisplay technologies_used={projectData.project.technologies_used} />
      </section>
    </div>
  );
};
export default QuickViewDescriptionBox;