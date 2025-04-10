import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import usePortfolioContext from "@/hooks/usePortfolioContext";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import ProjectTechnologiesDisplay from "@/components/Projects/ProjectTechnologiesDisplay";

const ProjectDetail= () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");
  
  const {idCategory, idProject } = useParams();
  const {projectData, setProjectData, projectsJSON} = usePortfolioContext();
  
  useEffect(() => {
    // Buscar la categoria por su nombre en el JSON
    const category = projectsJSON.categories.find(
      cat => cat.slug ==idCategory
    );
 
    if (category) {
      // Buscar el proyecto dentro de la categoria
      const project = category.projects.find(
        proj => proj.slug == idProject
      );
      
      if (project) {
        setProjectData({
          category: {
            category: category.category,
            slug: category.slug
          },
          project,
        });
      } else {
        navigate("/not-found");
      }
    } else {
      navigate("/not-found");
    }
    
  }, [idCategory, idProject]);
  
  const [data, setData] = useState({
    category: null,
    project: null
  });
  
  // const project = projects.find(p => p.category === idCategory && p.id === idProject);
  
  // let storedLanguage = localStorage.getItem('language');
  

  // if(storedLanguage === 'es') {
  //   categories=projectsJSON_es.categories
  // }
  // else {
  //   categories=projectsJSON_en.categories
  // }

  // const getProjectsDataByCategoryName = () => {
  //   categoryData = categories.find((category) => category.category === categoryName);
  //   if (!categoryData) {
  //     console.error(new Error("No se encontró la categoria."))
  //   }
  //   projectsInfo = categoryData.projects[idProject-1]
    
  //   console.log(categoryData.category)
    
  //   category = categoryData.category
  // }
  
  // getProjectsDataByCategoryName();

  // no hace falta hacer todo esto aqui, sacarlo
  
  
  
  
  // useEffect(() => {
  //   const fetchProjectData = () => {
  //     // encuentra la categoria por su nombre
      
  //     console.log(categoryData);
  //   }
    
    
    // if (projectData===null || projectData===undefined) {
    //   navigate("/not-found");
    // }
    
  //   fetchProjectData();
  // }, [categories, categoryName, navigate]);

  return(
    <>
      {projectData && projectData.project && projectData.category && (
        // main container
        <div className="pb-24">
          
          {/* project short description box */}
          <div
            className="text-xl text-bread border-2 border-indigo-700 rounded-3xl py-3 px-24 mb-6 text-center
              bg-[linear-gradient(0deg,_rgb(27,30,68)_-5%,_rgb(46,38,133)_100%)]"
          >
            {/* title */}
            <div className="mb-4">
              <span className="text-2xl text-highlighted_text_color">Proyecto:</span>
              <h1 className="text-5xl text-link_disabled_color2 text-center">{projectData.project.title}</h1>
            </div>
            
            {/* separator */}
            <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto mb-4 "/>
            
            {/* category */}
            <div className="mb-3">
              <h3 className="text-xl text-start text-highlighted_text_color">
                {t(`projectDetail.Category`)}
              </h3>
              <p className="text-lg text-start">{ projectData.category.category }</p>
            </div>
          
            {/* used technologies */}
            <div className="mb-3">
              <h3 className="text-start text-xl text-highlighted_text_color">
                {t(`projectDetail.used_technologies`)}
              </h3>
              <ProjectTechnologiesDisplay technologies_used={projectData.project.technologies_used}/ >
            </div>
            {/* used dependencies */}
            <div className="mb-3">
              <h3 className="text-start text-xl text-highlighted_text_color">
                {t(`projectDetail.used_dependencies`)}
              </h3>
              <p className="text-lg text-start">
                { projectData.project.used_dependencies }
              </p>
            </div>
          </div>

          {/* project image */}
          <ImageCarousel
            containerClass="rounded-3xl border-indigo-700 group-hover:border-indigo-400 border-[0.2rem] max-w-screen-2xl mx-auto mb-9"
            imageClass=""
            imageSrcPaths={ projectData.project.images }
            imageAltTexts={ `carousel-img-${projectData.project.slug}` }
          />
          
          <h2 className="text-4xl text-white mb-5">{t(`projectDetail.subtitle`)+':'}</h2>
          
          <Outlet />
          
        </div>

    
      )}
    </>
  );
};

export default ProjectDetail;