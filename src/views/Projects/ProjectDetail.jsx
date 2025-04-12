import React from 'react';
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import usePortfolioContext from "@/hooks/usePortfolioContext";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { veterinary } from "@/data/es/Projects";
import QuickViewDescriptionBox from '@/components/Projects/QuickViewDescriptionBox';

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
        <article aria-labelledby="title" className="pb-24">
          
          <QuickViewDescriptionBox projectData={projectData} />

          {/* project image */}
          <ImageCarousel
            containerClass="rounded-3xl border-indigo-700 group-hover:border-indigo-400 border-[0.2rem] max-w-screen-2xl mx-auto mb-9"
            imageClass=""
            imageSrcPaths={ projectData.project.images }
            imageAltTexts={ `carousel-img-${projectData.project.slug}` }
          />
          
          <h2 className="text-4xl text-white mb-4">{t(`projectDetail.documentation`)}</h2>
          
          {/* article content */}
          <div className="mb-10">
            {/* dependencies */}
            <section aria-labelledby='dependencies' className="mb-10">
              <h3 id='dependencies' className="text-start text-2xl text-highlighted_text_color mb-3">
                {t(`projectDetail.used_dependencies`)}
              </h3>
              {/*list */}
              <ul className="w-fit list-disc ml-4 text-white list-outside flex flex-wrap gap-x-10">
                {veterinary.dependencies.map((dep, idx) => <li className="py-1" key={idx}>{dep}</li>)}
              </ul>
            </section>
            
            {/* content */}
            <section aria-labelledby="extended-description" className="mb-5">
              <h3 id="extended-description" className="text-start text-2xl text-highlighted_text_color mb-3">
                {t(`projectDetail.extended_description`)}
              </h3>
              <section>
                {veterinary.header}
                {veterinary.paragraphs.map((el, idx) => <React.Fragment key={idx}>{el}</React.Fragment>)}
              </section>
            </section>
          </div>
          
          <Outlet />
        </article>
      )}
    </>
  );
};

export default ProjectDetail;