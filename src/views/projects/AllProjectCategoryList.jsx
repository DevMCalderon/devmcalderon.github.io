import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import usePortfolioContext from "@/hooks/usePortfolioContext";
import ProjectsListGrid from "@/components/projects/projectsListGrid/ProjectsListGrid";
import ProjectsCategoryOverview from "./ProjectsCategoryOverview";
import { routes } from "@/routes";
import Heading from "../../components/uI/Heading";

const AllProjectCategoryList = ({ selectedCategoryId }) => {
  const [ t ] = useTranslation("global");
  const {projectsJSON} = usePortfolioContext();
  
  const categories = projectsJSON.categories;
  const [categoryData, setCategoryData] = useState([]);
  
  useEffect(() => {
    const selectedCategory = categories.find((category) => category.id === selectedCategoryId);
    
    if (selectedCategory) {
      setCategoryData({... selectedCategory, selectedCategoryName: selectedCategory.category});
    } else {
      setCategoryData({
        category: t(`projects.all_projects`),
        description: t(`projects.description`),
        selectedCategoryName: "all"
      });
    }
  }, [selectedCategoryId]);
  
  return (
    <div className="mb-12">
      <div>
        {/* categories links list */}
        <Heading tag="h2" className="text-center text-4xl mb-3">
        {t(`projects.project_categories`)}
        </Heading>
        
        <ul className="w-fit mx-auto mb-7 list-disc text-white space-y-2">
          <li className="pl-3">
            <Link
              to={`${routes['Projects']}`}
              className="link"
            >
              {t(`projects.all_projects`)}
            </Link>
          </li>
          {categories.map((category, index) => (
            <li className="pl-3" key={index}>
              <Link
                to={`${routes[category.category]}`}
                className="link"
              >
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <ProjectsCategoryOverview categoryData={categoryData} />

      <ProjectsListGrid selectedCategoryName={categoryData.selectedCategoryName} />
    </div>
  );
};

export default AllProjectCategoryList;