import { Link } from "react-router-dom";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { routes } from "@/routes";
import { ArticleProjectsContext } from "@/contexts/ArticleProjectsContext";

const AllProjectCategoryList = () => {
  const [ t ] = useTranslation("global");

  const { categories, description} = useContext(ArticleProjectsContext).projectsJSON;

  return (
    <>
      { categories && description &&
        <>
          {/* title */}
          <h1 className="text-center font-bold text-white text-[2.6rem] mb-4">{t(`projects.project_categories`)}</h1>
          
          <hr className="my-4 w-10/12 mx-auto"/>
          
          <p className="mx-auto text-white mb-5 w-[90%] md:w-4/5">
            {description}
          </p>
          
          {/* categories links list */}
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
              
        </>
      }
    </>
  )
  
};

export default AllProjectCategoryList;