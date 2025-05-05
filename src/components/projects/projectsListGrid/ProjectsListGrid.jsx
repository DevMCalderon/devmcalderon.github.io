import ProjectItemCard from '@/components/projects/projectItemCard/ProjectItemCard'
import usePortfolioContext from "@/hooks/usePortfolioContext";

const ProjectsListGrid = ({ maxProjectsToShow }) => {
  
  const { projectsJSON: categoriesData } = usePortfolioContext();
  
  let displayedProjects = [];
  
  const allProjects = categoriesData.categories.flatMap( category =>
    category.projects.map(project => ({ ...project, categoryName: category.category }))
  );
  
  displayedProjects = allProjects.slice(0, maxProjectsToShow);
  
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
