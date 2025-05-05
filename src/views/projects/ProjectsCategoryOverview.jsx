import { useContext } from "react";

import { PortfolioContext } from "../../context/PortfolioContext";

const ProjectsCategoryOverview = ({ categoryIndex }) => {
  const { projectsJSON, URL } = useContext(PortfolioContext);
  const { categories } = projectsJSON;
  const Selectedcategory = categories[categoryIndex];
  const { category, description, projects } = Selectedcategory;
  
  console.log(categoryIndex);

  // return <ProjectsCategoryCommon title={category} description={description} projects={projects} URL={URL} />;
  return (
    <>
      a
    </>
  );
};

export default ProjectsCategoryOverview;