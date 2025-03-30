import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { getNameByURL, getParentURLByCurrentURL } from '../../routes';
import useControl from "@/hooks/useControl";
import projectsJSON_en from "../../data/en/projects.json";
import projectsJSON_es from "../../data/es/projects.json";
import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";

const ProjectDetail= () => {
  const navigate = useNavigate();
  
  const [ t] = useTranslation("global");
  
  const {idCategory, idProject } = useParams();
  
  const { URL } = useControl();
  
  // const projectsData = projectsJSON_es.categories[idCategory-1].projects[idProject-1];
  
  useEffect(() => {
    // Buscar la categoria por su nombre en el JSON
    console.log(projectsJSON_es.categories)
    const category = projectsJSON_es.categories.find(
      cat => cat.slug ==idCategory
    );

    if (category) {
      // Buscar el proyecto dentro de la categoria
      const project = category.projects.find(
        proj => proj.slug == idProject
      );
      
      if (project && category) {
        setProjectData(project);
      } else {
        navigate("/not-found");
      }
    }
    
  }, [idCategory, idProject]);
  
  
  // const project = projects.find(p => p.category === idCategory && p.id === idProject);
  
  // let storedLanguage = localStorage.getItem('language');
  
  // get category name from url
  // const categoryName = getNameByURL(getParentURLByCurrentURL(URL),storedLanguage);
  
  // let categories;
  // let category;
  
  const [projectData, setProjectData] = useState([]);


  
  
  // if(storedLanguage === 'es') {
  //   categories=projectsJSON_es.categories
  // }
  // else {
  //   categories=projectsJSON_en.categories
  // }

  let categoryData = null, projectsInfo = null;
  
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
      {projectData && (
          <div className="pb-24">
            <h1 className="text-4xl text-white">{projectData.title}</h1>
            {/* <h2 className="text-4xl text-white">{t(`projectDetail.subtitle`)+':'}</h2> */}
              
              {/* project image */}
              <div className="w-full mx-auto my-6">
                <ProjectImage
                  imgPath = { projectData.imgPath }
                  title = { projectData.title }
                  classes="rounded-[1rem] w-full h-auto"
                />
              </div>
        
            <div>
              <h3 className="text-3xl">
                {t(`projectDetail.Description`)+':'}
              </h3>
              <p className="text-white">
                {/* {projectsInfo.description} */}
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl">
                {t(`projectDetail.Category`)+':'}
              </h3>
              <p className="text-white">
                {idCategory}
              </p>
            </div>
            
            
          </div>

        
        )}
    </>
  );
};

export default ProjectDetail;