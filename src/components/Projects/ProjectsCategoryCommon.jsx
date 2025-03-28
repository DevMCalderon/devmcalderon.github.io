import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routes } from '@/routes';
import ProjectsListGrid from "@/components/Projects/ProjectsListGrid/ProjectsListGrid";

const ProjectsCategoryCommon = ({ projectInfo,title, description, categories, projects, projectCategory }) => {
  const [ t] = useTranslation("global");

  return (
    <>
          {/* title */}
          <h1 className="text-center font-bold text-white text-[2.6rem]">{ title }</h1>
          
          
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
          </div>
         
        
    </>
  );
};

export default ProjectsCategoryCommon;