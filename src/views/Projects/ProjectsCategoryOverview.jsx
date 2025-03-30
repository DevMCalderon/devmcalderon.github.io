import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import ProjectsCategoryCommon from "../../components/Projects/ProjectsCategoryCommon";

const ProjectsCategoryOverview = (props) => {
  const { projectsJSON, URL } = useContext(PortfolioContext);
  const { categories } = projectsJSON;
  const Selectedcategory = categories[props.categoryIndex];
  const { category, description, projects } = Selectedcategory;

  return <ProjectsCategoryCommon title={category} description={description} projects={projects} URL={URL} />;
};

export default ProjectsCategoryOverview;