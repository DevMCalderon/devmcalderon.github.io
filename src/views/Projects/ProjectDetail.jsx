import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { getNameByURL, getParentURLByCurrentURL } from '../../routes';
import useControl from "@/hooks/useControl";
import projectsJSON_en from "../../data/en/projects.json";
import projectsJSON_es from "../../data/es/projects.json";
import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

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
        // main container
        <div className="pb-24">
          
          {/* project table description */}
          <div className="text-xl text-bread border-2 border-indigo-700 rounded-3xl py-3 px-24 mb-7 xd text-center">
            {/* title */}
            <div className="mb-4">
              <span className="text-2xl text-highlighted_text_color">Proyecto:</span>
              <h1 className="text-5xl text-link_disabled_color2 text-center">{projectData.title}</h1>
            </div>
            
            {/* separator */}
            <hr className="hr5 text-border_color1 lg:max-w-screen-2xl mx-auto mb-4 "/>
            
            {/* category */}
            <div className="mb-3">
              <h3 className="text-xl text-start text-highlighted_text_color">
                {t(`projectDetail.Category`)+':'}
              </h3>
              <p className="text-xl text-start">{idCategory}</p>
            </div>
          
            {/* description */}
            <div className="mb-3">
              <h3 className="text-start text-xl text-highlighted_text_color">
                {t(`projectDetail.Description`)+':'}
              </h3>
              <p className="text-base text-start">
                {/* {projectsInfo.description} */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus veritatis modi quae! Earum explicabo voluptas maxime nemo et qui, quam soluta cupiditate at ad iure sed molestiae quisquam excepturi doloribus?
              </p>
            </div>
          </div>
              
              
          {/* <h2 className="text-4xl text-white">{t(`projectDetail.subtitle`)+':'}</h2> */}
                
          {/* project image */}
          <ImageCarousel containerclasses="mb-6" imageClasses="border-indigo-700 group-hover:border-indigo-600" />
      
            <ProjectImage
              imgPath = { projectData.imgPath }
              title = { projectData.title }
              classes="rounded-[1rem] w-full h-auto mb-4"
            />
    
          {/* separator */}
          <hr className="hr5 text-indigo-500 lg:max-w-screen-2xl mx-auto mb-4"/>
          
          {/* subtitle */}
          <h2 className="text-4xl mb-2">Operaciones de Clientes</h2>
          
          {/* functionality container: video and description */}
          <div className="">
            <h3 className="text-2xl mb-2 text-start">1. Creación de un Cliente</h3>
            
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
            
            <video autoPlay controls loop muted playsInline width="100%" className="rounded-xl mb-2" height="auto">
              {/* <source src={projectData.videoPath} type="video/mp4" /> */}
              <source src="https://res.cloudinary.com/detst5oqb/video/upload/v1743551200/cliente-crear_lhizi2.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento <code>video</code>.
            </video>
            
            <p className="bg-blue-950 rounded-2xl text-mdsm2 p-4 px-5 mb-9">
              Esta funcionalidad está diseñada para gestionar el proceso de registro de un nuevo cliente en la base de datos, asegurando una experiencia fluida y validaciones robustas tanto en el frontend como en el backend.
            </p>
          </div>
                
          <h3 className="text-2xl mb-2 text-start">2. Edición de un Cliente</h3>
          
          <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
          
          <video autoPlay controls loop muted playsInline width="100%" className=" rounded-xl" height="auto">
            {/* <source src={projectData.videoPath} type="video/mp4" /> */}
            <source src="https://res.cloudinary.com/detst5oqb/video/upload/v1743478270/ycbipkgdwuqpnrpe9uom.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento <code>video</code>.
          </video>
          
        </div>

    
      )}
    </>
  );
};

export default ProjectDetail;