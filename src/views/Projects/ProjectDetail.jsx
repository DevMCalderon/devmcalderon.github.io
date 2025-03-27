import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { getNameByURL, getParentURLByCurrentURL } from '../../routes';
import { ArticleProjectsContext } from "../../contexts/ArticleProjectsContext";

import projectsJSON_en from "../../data/en/projects.json";
import projectsJSON_es from "../../data/es/projects.json";
import NotFound from "../NotFound/NotFound";
import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";

const ProjectDetail= () => {
  const navigate = useNavigate();
  const [ t] = useTranslation("global");
  const { URL } = useContext(ArticleProjectsContext);
  
  let storedLanguage = localStorage.getItem('language');
  
  // get category name from url
  const { idProject } = useParams();
  const categoryName = getNameByURL(getParentURLByCurrentURL(URL),storedLanguage);
  
  let categories;
  let category;
  
  const [projectInfo, setProjectInfo] = useState("null");
  
  if(storedLanguage === 'es') {
    categories=projectsJSON_es.categories
  }
  else {
    categories=projectsJSON_en.categories
  }

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

  useEffect(() => {
    const fetchProjectData = () => {
      // encuentra la categoria por su nombre
      const categoryData = categories.find((category) => category.category === categoryName);
      
      console.log(categoryData);
    }
    
    
    if (projectInfo===null || projectInfo===undefined) {
      navigate("/not-found");
    }
    
    fetchProjectData();
  }, [categories, categoryName, navigate]);

  return(
    <>
      {projectInfo && (
          <div className="">
            {/* <h2 className="text-4xl text-white">{t(`projectDetail.subtitle`)+':'}</h2> */}
              
              {/* project image */}
              <div className="w-full mx-auto my-6">
                {/* <ProjectImage
                  imgPath = { projectsInfo.imgPath }
                  title = { projectsInfo.title }
                  classes="rounded-[1rem] w-full h-auto"
                /> */}
              </div>
        
            <div>
              <h3 className="text-3xl">
                {t(`projectsDetail.Description`)+':'}
              </h3>
              <p className="text-white">
                {/* {projectsInfo.description} */}
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl">
                {/* {t(`projectsDetail.Category`)+':'} */}
              </h3>
              <p className="text-white">
                {/* {projectsInfo.Category} */}
              </p>
            </div>
            
            
          </div>

        
        )}
    </>
  );
};

export default ProjectDetail;