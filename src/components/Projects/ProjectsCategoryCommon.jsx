import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import BreadCrumb from "@/components/Breadcrumb/Breadcrumb";
import { routes } from '@/routes';
import ProjectsListGrid from "@/components/Projects/ProjectsListGrid/ProjectsListGrid";

const ProjectsCategoryCommon = ({ projectInfo,title, description, categories, projects, projectCategory }) => {
  const [ t] = useTranslation("global");

  return (
    <>
      <div className="pb-36 min-h-screen shadow-2xl text-white bg-container_color1">
        {/* header */}
        <div className="w-full pt-24 bg-container_color6 mb-5"></div>
        
        {/* main content */}
        <div className="w-9/12 mx-auto">
          
          {/* title */}
          <h1 className="text-center font-bold text-white text-[2.6rem]">{ title }</h1>
          
          {/* breadcrumb */}
          <BreadCrumb />
          
          
          { !projectInfo &&
          <>
            <p className="mx-auto text-white mb-7 w-[90%] md:w-4/5 lg:mx-30">
              {description}
            </p>
          </>
          }
          
          {/* content */}
          <div className="justify-center text-center">
            <Outlet />
              
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
              
         </div>
        </div>
        
      </div>
    </>
  );
};

export default ProjectsCategoryCommon;