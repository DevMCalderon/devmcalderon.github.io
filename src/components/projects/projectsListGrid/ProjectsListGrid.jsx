import ProjectItemCard from '@/components/projects/projectItemCard/ProjectItemCard'
import usePortfolioContext from "@/hooks/usePortfolioContext";

const ProjectsListGrid = ({ maxProjectsToShow=6, selectedCategoryName="all" }) => {
  
  const { projectsJSON: categoriesData } = usePortfolioContext();
  
  let displayedProjects = [];

  if (selectedCategoryName !== "all") {
    // display only projects from the selected category
    const category = categoriesData.categories.find(
      category => category.category === selectedCategoryName
    );
    displayedProjects = category?.projects.slice(0, maxProjectsToShow) || [];
  } else {
    // display all projects from all categories
    displayedProjects = categoriesData.categories.flatMap( category =>
      category.projects.map(project => ({ 
        ...project, 
        categoryName: category.category 
      }))
    ).slice(0, 9999);
    
  }
  
  return (
    <div className="grid grid-cols-1 gap-4 lg:max-w-screen-lg mx-auto">
    {/* listado de proyectos */}
      {displayedProjects.map((project, index) => {

        return (
          // card de cada proyecto individual
          <ProjectItemCard
            key = { index }
            projectData = {{ ...project }}
          />
          //  border-slate-600 group-hover:border-slate-500
        )
      })}
    </div>
  )
}

export default ProjectsListGrid;
