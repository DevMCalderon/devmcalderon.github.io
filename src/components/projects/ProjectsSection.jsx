import { useTranslation } from "react-i18next";

import CustomHeader from "@/components/uI/customHeader/CustomHeader";
import ProjectTab from "@/components/projects/projectTab/ProjectTab";
import "./Projects.css"
import AnimatedOnScroll from "@/components/AnimatedOnScroll";

const ProjectsSection = () => {
  const [ t ] = useTranslation("global");
  
  return (
    <>
      <section
        className="project bg-container_color2 bg-opacity-90 px-6 md:px-14 pt-12 pb-16 lg:pb-16 min-w-screen"
        id="projects"
      >
        <AnimatedOnScroll variant="fadeDown">
          <div className="lg:max-w-screen-lg mx-auto">
            {/* titulo */}
            <CustomHeader
              align='center'
              emoji='🗂️'
              text={t(`projects.title`)}
            />
        </div>
        
        {/* componente de tabs con categorias de proyectos */}
        </AnimatedOnScroll>
        <ProjectTab />
          
      </section>
    </>
  );
};

export default ProjectsSection;
