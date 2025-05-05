import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routes } from "@/routes";
import ProjectsListGrid from "@/components/projects/projectsListGrid/ProjectsListGrid";

const AllProjectCategoryList = () => {
  const maxProjectsToShow = 9999;
  
  const [ t ] = useTranslation("global");
  
  return (
    <>
      {/* title */}
      <h1 className="text-center font-bold text-white text-[2.6rem] mb-4">{t(`projects.project_categories`)}</h1>
      
      <hr className="my-4 w-10/12 mx-auto"/>
      
      <p className="mx-auto text-white mb-5 w-[90%] md:w-4/5">
        {t(`projects.description`)}
      </p>
      
      {/* categories links list */}
      {/* <ul className="w-fit mx-auto mt-2 list-disc text-white space-y-2">
        {categories.map((category, index)=> (
          <li className="pl-3" key={index}>
            <Link
              to={`${routes[category.category]}`}
              className="text-blue-300 hover:text-link_color_hover hover:underline"
            >
              {category.category}
            </Link>
          </li>
        ))}
      </ul> */}
          
      <ProjectsListGrid
        projectsData = {{ selectedCategoryName: "all" }}
        maxProjectsToShow = { maxProjectsToShow }
      />
    </>
  )
  
};

export default AllProjectCategoryList;