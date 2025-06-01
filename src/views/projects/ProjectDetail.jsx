import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import usePortfolioContext from "@/hooks/usePortfolioContext";
import ImageCarousel from "@/components/imageCarousel/ImageCarousel";
import QuickViewDescriptionBox from '@/components/projects/QuickViewDescriptionBox';
import ProjectDynamicView from "./articles/ProjectDynamicView";

const ProjectDetail= () => {
  
  const navigate = useNavigate();
  const [t] = useTranslation(["global", "projects"]);
  
  const {idCategory, idProject } = useParams();
  const {projectData, setProjectData, projectsJSON} = usePortfolioContext();
  
  useEffect(() => {
    // Buscar la categoria por su slug en el JSON
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
        
  }, [idCategory, idProject, t]);
  
  return(
    <>
      {projectData && projectData.project && projectData.category && (
        <article aria-labelledby="title" className="pb-24 w-[90vw] lg:w-[70vw] mx-auto">
          <QuickViewDescriptionBox projectData={projectData} />

          <ImageCarousel
            autoPlay={false}
            arrows={true}
            containerClass="rounded-3xl border-indigo-700 group-hover:border-indigo-400 border-[0.2rem] max-w-screen-2xl mx-auto mb-9"
            imageClass="max-h-[36.8rem] h-[100%] w-full"
            imageSrcPaths={ projectData.project.images }
            imageAltTexts={ `carousel-img-${projectData.project.slug}` }
          />
          
          <h2 className="text-4xl text-white mb-4">{t(`projectDetail.documentation`)}</h2>
          
          {/* article content */}
          <ProjectDynamicView />
        </article>
      )}
    </>
  );
};

export default ProjectDetail;