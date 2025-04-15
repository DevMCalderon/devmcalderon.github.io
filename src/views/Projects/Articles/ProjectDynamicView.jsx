import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ArticleEmptyView from "@/views/Projects/Articles/ArticleEmptyView"
import { articleSlugMap } from "@/routes.js"
import Heading from "@/components/UI/Heading";

// Function to get the project data dynamically depending on its name
const loadProject = async (projectName) => {
  switch (projectName) {
    case articleSlugMap.veterinary:
      return (await import("@/views/Projects/Articles/veterinary")).default;
    case articleSlugMap.coffeeShop:
      return (await import("@/views/Projects/Articles/coffeeShop")).default;
    default:
      throw new Error("Proyecto no encontrado: " + projectName);
  }
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
          
          <section aria-labelledby="features" className="mb-10">
            <Heading tag="h3" id='features'>
              {t(`projectDetail.features`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
            
            <p className="text-lg text-start mb-5">
              A continuación se presenta una selección de características clave del proyecto en formato multimedia, que reflejan mi participación directa como desarrollador. Cada componente fue diseñado e implementado con un enfoque estratégico en la eficiencia, la escalabilidad y la experiencia del usuario. Esta sección ilustra no solo las funcionalidades desarrolladas, sino también mi capacidad para traducir requerimientos técnicos y de negocio en soluciones concretas y visualmente integradas.
            </p>
            
            <projectData.Features />
          </section>
        </>
      )}
    </>
  );
  
};

export default ProjectDynamicView;