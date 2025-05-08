import ProjectItemCard from '@/components/projects/projectItemCard/ProjectItemCard'
import usePortfolioContext from "@/hooks/usePortfolioContext";

const ProjectsListGrid = ({ maxProjectsToShow=6, selectedCategoryName="all" }) => {
  
  const { projectsJSON: { categories } } = usePortfolioContext();
  
  const displayedProjects = selectedCategoryName === "all"
    ? categories.flatMap(({category, projects}) => 
        projects.map(project => ({ ...project, categoryName: category }))
      )
    : (categories.find(({ category }) => category === selectedCategoryName)?.projects || [])
      .slice(0, maxProjectsToShow)
      .map(project => ({ ...project, categoryName: selectedCategoryName }));
  
  return (
    <div className="grid grid-cols-1 gap-4 lg:max-w-screen-lg mx-auto">
    {/* listado de proyectos */}
      {displayedProjects.map((project, index) => (
        // card de cada proyecto individual
        <ProjectItemCard
          key = { index }
          projectData = {{ ...project }}
        />
          //  border-slate-600 group-hover:border-slate-500
      ))}
    </div>
  );
};

export default ProjectsListGrid;
