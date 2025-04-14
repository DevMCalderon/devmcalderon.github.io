import React from 'react';
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from 'react-router-dom';
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
  
  return(
    <>
      {projectData && projectData.project && projectData.category && (
        // main container
        <article aria-labelledby="title" className="pb-24">
          
          <QuickViewDescriptionBox projectData={projectData} />

          <ImageCarousel
            autoPlay={false}
            arrows={true}
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
              <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
              
              {/*list */}
              <ul className="w-fit list-disc ml-4 text-white list-outside flex flex-wrap gap-x-10">
                {veterinary.dependencies.map((dep, idx) => <li className="py-1" key={idx}>{dep}</li>)}
              </ul>
            </section>
            
            {/* content */}
            <section aria-labelledby="extended-description" className="mb-10">
              <h3 id="extended-description" className="text-start text-2xl text-highlighted_text_color mb-3">
                {t(`projectDetail.extended_description`)}
              </h3>
              <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
              
              <section>
                {veterinary.header}
                {veterinary.extendedDescription.map((el, idx) => <React.Fragment key={idx}>{el}</React.Fragment>)}
              </section>
            </section>
            
            <section aria-labelledby="features" className="mb-10">
              <h3 id='features' className="text-start text-2xl text-highlighted_text_color mb-3">
                {t(`projectDetail.features`)}
              </h3>
              <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
              
              <p className="text-lg text-start mb-5">
                A continuación se presenta una selección de características clave del proyecto en formato multimedia, que reflejan mi participación directa como desarrollador. Cada componente fue diseñado e implementado con un enfoque estratégico en la eficiencia, la escalabilidad y la experiencia del usuario. Esta sección ilustra no solo las funcionalidades desarrolladas, sino también mi capacidad para traducir requerimientos técnicos y de negocio en soluciones concretas y visualmente integradas.
              </p>
              
              {veterinary.features.map((el, idx) => <React.Fragment key={idx}>{el}</React.Fragment>)}
            </section>
            
          </div>
          
          <Outlet />
        </article>
      )}
    </>
  );
};

export default ProjectDetail;