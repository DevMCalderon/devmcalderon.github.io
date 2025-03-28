import { Link } from "react-router-dom";
import { routes } from "@/routes";

import { useContext } from "react";
import { ArticleProjectsContext } from "../../contexts/ArticleProjectsContext";
import ProjectsCategoryCommon from '../../components/Projects/ProjectsCategoryCommon'

const title = 'Projects';
const ProjectsCategoriesIndex = () => {

  const { URL, projectsJSON} = useContext(ArticleProjectsContext);
  const { categories, description } = projectsJSON; 


  // return <ProjectsCategoryCommon title={title} description={description} categories={categories} URL={URL} />;
  
  return (
    <>
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
    </>
  )
  
};

export default ProjectsCategoriesIndex;