import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ArticleEmptyView from "@/views/projects/articles/ArticleEmptyView"
import { articleSlugPathMap } from "@/routes.js"
import Heading from "@/components/uI/Heading";

// Function to get the project data dynamically depending on its slug
const loadProject = async (projectSlug) => {
  return (await import("/src/views/projects/articles/"+articleSlugPathMap[projectSlug])).default;
};

const ProjectDynamicView = () => {
  const [t] = useTranslation("global");
  
  const { idProject } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);
  
    
  useEffect(() => {
    loadProject(idProject)
      .then((data) => setProjectData(data))
      .catch((err) => setError(err.message));
    }, [idProject]);
    
  // if the slug is in the articleViews object return the view, otherwise return the fallback
  if (!projectData || error) return <ArticleEmptyView />;
  
  return (
    <div className="mb-10">
      {projectData && (
        <>
          {/* GitHub */}
          <section aria-labelledby="category" className="mb-10">
            <Heading tag="h3" id='features'>
              {t(`projectDetail.links`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
            <projectData.Links />
          </section>
        
          {/* dependencies */}
          <section aria-labelledby='dependencies' className="mb-10">
            <Heading tag="h3" id='dependencies'> 
              {t(`projectDetail.used_dependencies`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
            
            <projectData.Dependencies />
          </section>
          
          {/* content */}
          <section aria-labelledby="extended-description" className="mb-10">
            <Heading tag="h3" id="extended-description">
              {t(`projectDetail.extended_description`)}
            </Heading>
            <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
            
            <projectData.ExtendedDescription />
          </section>
          
          { projectData.Features && (
              <section aria-labelledby="features" className="mb-10">
              <Heading tag="h3" id='features'>
                {t(`projectDetail.features`)}
              </Heading>
              <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
              
              <p className="text-lg text-start mb-5">{t(`projectDetail.features_description`)}</p>
              
              <div className="mb-10">
                <projectData.Features />
              </div>
            </section>
          )}

        </>
      )}
    </div>
  );
  
};

export default ProjectDynamicView;