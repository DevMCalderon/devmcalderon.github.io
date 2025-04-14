import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import usePortfolioContext from "@/hooks/usePortfolioContext";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import QuickViewDescriptionBox from '@/components/Projects/QuickViewDescriptionBox';
import ProjectDynamicView from "./Articles/ProjectDynamicView";


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
            <ProjectDynamicView />
          </div>
        </article>
      )}
    </>
  );
};

export default ProjectDetail;