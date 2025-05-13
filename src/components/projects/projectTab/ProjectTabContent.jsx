import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { routes } from '@/routes.js';
import ProjectsListGrid from "@/components/projects/projectsListGrid/ProjectsListGrid";
import MainButton from "@/components/uI/MainButton";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

// este componente se encarga de renderizar el contenido de cada categoría de las tabs cuando se hace click en una de ellas
const ProjectTabContent = ({activeTab, index, categoryData}) => {
  const [ t ] = useTranslation("global");
  let navigate = useNavigate();
  const maxProjectsToShow = 6;

  const { category: categoryName, description, projects } = categoryData;
  
  const toggleDisplayMore = (e) => {
    e.preventDefault();
    // console.log(categoryName);
    navigate(routes[categoryName]); // Perform navigation immediately
  };

  return (
    <>
      { (
        <motion.div
          animate={activeTab === index+1 ? "open" : "closed"}
          variants={variants} transition={{ duration: 0.8 }}
          id={`panel-${index+1}`}
          className={`
            lg:max-w-screen-lg mx-auto
            ${activeTab === index+1 ? '' : 'hidden'} `
          }
        >
          {/* categoryname */}
          <h3 className="pb-4 lg:pb-5 text-highlighted_text_color">{categoryName}</h3>
          
          {/* description */}
          <p className="text-center m-auto pb-6 text-start lg:pb-9">{description}</p>
          
          {/* project list */}
          <ProjectsListGrid
            selectedCategoryName = { categoryName }
            maxProjectsToShow = { maxProjectsToShow }
          />
          
          {/* display more button */}
          <div>
            {projects && projects.length > maxProjectsToShow && (
              <MainButton
                className="mt-4"
                onClick={toggleDisplayMore}
                text={t(`TabPanelItem.display_more`)}
              />
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectTabContent;
