import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ArticleEmptyView from "@/views/Projects/Articles/ArticleEmptyView"
import { articleSlugPathMap } from "@/routes.js"
import Heading from "@/components/UI/Heading";

// Function to get the project data dynamically depending on its slug
const loadProject = async (projectSlug) => {
  return (await import(articleSlugPathMap[projectSlug])).default;
};

const ProjectDynamicView = () => {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);
  
  const { idProject } = useParams();
  const [t] = useTranslation("global");
  
  
  useEffect(() => {
    loadProject(idProject)
      .then((data) => setProjectData(data))
      .catch((err) => setError(err.message));
  }, [idProject]);
  
  // if the slug is in the articleViews object return the view, otherwise return the fallback
  if (!projectData || error) return <ArticleEmptyView />;
      
  return (
    <>
      {projectData && (
        <>
          {/* dependencies */}
          <section aria-labelledby='dependencies' className="mb-10">
            <Heading tag="h3" id='dependencies'> 
              {t(`projectDetail.used_dependencies`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
            
            <projectData.Dependencies />
          </section>
          
          {/* content */}
          <section aria-labelledby="extended-description" className="mb-10">
            <Heading tag="h3" id="extended-description">
              {t(`projectDetail.extended_description`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
            
            <projectData.Header />
            <projectData.ExtendedDescription />
          </section>
          
          { projectData.Features && (
              <section aria-labelledby="features" className="mb-10">
              <Heading tag="h3" id='features'>
                {t(`projectDetail.features`)}
              </Heading>
              <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
              
              <p className="text-lg text-start mb-5">
                Esta sección presenta una muestra multimedia de las principales características del proyecto, desarrolladas e implementadas por mí con un enfoque estratégico en eficiencia, escalabilidad y experiencia de usuario. Refleja mi capacidad para convertir requerimientos técnicos y de negocio en soluciones funcionales y visualmente integradas.
              </p>
              
              <projectData.Features />
            </section>
          )}

        </>
      )}
    </>
  );
  
};

export default ProjectDynamicView;