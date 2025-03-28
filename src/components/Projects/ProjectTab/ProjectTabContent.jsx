import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { routes } from '@/routes.js';
import ProjectsListGrid from "@/components/Projects/ProjectsListGrid/ProjectsListGrid";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

// este componente se encarga de renderizar el contenido de cada categoría de las tabs cuando se hace click en una de ellas
const ProjectTabContent = (props) => {
  const [ t ] = useTranslation("global");
  let navigate = useNavigate();

  const toggleDisplayMore = (e) => {
    e.preventDefault();
    // console.log(props.category);
    
    const newURL = routes[props.category];

    navigate(newURL); // Perform navigation immediately
  };

  return (
    <>
    
      { (
        <motion.div
          animate={props.activeTab === props.index+1 ? "open" : "closed"}
          variants={variants} transition={{ duration: 0.8 }}
          id={`panel-${props.index+1}`}
          className={`${props.activeTab === props.index+1 ? '' : 'hidden'} `}
        >
          {/* texto de la categoria */}
          <h3 className="pb-[15px] lg:pb-[20px] text-highlighted_text_color">{props.category}</h3>
          <p className="text-center m-auto pb-[25px] w-[85%] md:w-[90%] lg:pb-[35px] lg:w-[70%]">
            {props.description}
          </p>
          
          {/* listado de proyectos */}
          <ProjectsListGrid
            projects={props.projects}
            category={props.category}
            maxProjectsToShow={6}
          />
          
          
          {/* Botón mostrar más */}
          <div>
            {props.projects && props.projects.length > 6 && (
              <button
                className="button_transparent_rounded shadow-sm shadow-border_color1 hover:shadow-md hover:shadow-neon_color2 flex m-auto
                  justify-center mt-6 w-fit border-[1.5px] border-solid border-border_color1 bg-[black] bg-opacity-40"
                onClick={toggleDisplayMore}
              >
                <span>
                  {t('TabPanelItem.display_more')}
                </span>
              </button>
            )}
          
          </div>
        </motion.div>
      )}
      
    </>
  );
};

export default ProjectTabContent;
