import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BreadCrumb from "@/components/Breadcrumb/Breadcrumb";
import { routes } from '@/routes';
import ProjectsListGrid from "@/components/Projects/ProjectsListGrid/ProjectsListGrid";
import ProjectImage from "@/components/Projects/ProjectImage/ProjectImage";

const ProjectsCategoryCommon = ({ title, description, categories, projects, projectInfo, projectCategory }) => {
  const [ t] = useTranslation("global");

  return (
    <>
      <div className="pb-[150px] min-h-screen shadow-2xl text-white fondoxd">
        {/* header */}
        <div className="w-full pt-20 pb-8 bg_projects_category_common mb-5">
          <h1 className="text-center font-bold text-white text-[2.6rem] ">{ title }</h1>
        </div>
        
        {/* main content */}
        <div className="w-9/12 mx-auto">
          
          {/* breadcrumb */}
          <div className="mb-7">
            <BreadCrumb />
          </div>
          { !projectInfo &&
          <>
            <p className="mx-auto text-white mb-7 w-[90%] md:w-4/5 lg:mx-30">
              {description}
            </p>
          </>
          }
          {/* content */}
          <div className="justify-center text-center">
              
              {/* categories links list */}
              { categories &&
                <div className="flex justify-center">
                  <div className="w-full">
                    <span className="text-[1.78rem] text-white mb-2">Categories:</span>
                    <hr className="mb-3 w-1/3 mx-auto"/>
                    <ul className="w-fit mx-auto mt-2 list-disc text-white">
                      {categories.map((category, index)=> (
                        <li className="py-2 px-3" key={index}>
                          <Link
                            to={`${routes[category.category]}`}
                            className="text-link_color hover:text-link_color_hover hover:underline"
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))} 
                    </ul>
                  </div>
                </div>
              }
                
              {/* project items list */}
              {projects && (
                <>
                  <h3 className="text-[1.78rem] text-white mb-2">Projects list:</h3>
                  <hr className="mb-6 w-1/3 mx-auto" />
                  <ProjectsListGrid
                    projects={projects}
                    category={title}
                  />
                </>
              )}
              
              {/* Project detail */}
              {projectInfo &&
                <div className="">
                  <h2 className="text-4xl text-white">{t(`projectDetail.subtitle`)+':'}</h2>
                    <div className="w-full md:w-3/4 mx-auto my-6">
                      <ProjectImage
                        imgPath = { projectInfo.imgPath }
                        title = { projectInfo.title }
                        classes="rounded-[2.2rem]"
                      />
                    </div>
              
                  <div>
                    <h3 className="text-3xl">
                      {t(`projectDetail.Description`)+':'}
                    </h3>
                    <p className="text-white">
                      {projectInfo.description}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl">
                      {t(`projectDetail.Category`)+':'}
                    </h3>
                    <p className="text-white">
                      {projectCategory}
                    </p>
                  </div>
                  
                  
                </div>
              }
         </div>
        </div>

        
      </div>
    </>
  );
};

export default ProjectsCategoryCommon;