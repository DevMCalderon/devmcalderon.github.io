import { routes } from '@/routes.js'
import ProjectItemCard from '@/components/Projects/ProjectItemCard/ProjectItemCard'

const ProjectsListGrid = ({ projectsData, maxProjectsToShow }) => {
  const { projects, categoryName } = projectsData; 
  const displayedProjects = projects.slice(0, maxProjectsToShow);
  
  return (
    <div className="grid grid-cols-1 gap-4 lg:max-w-screen-lg mx-auto">
    {/* listado de proyectos */}
      {displayedProjects.map((project, index) => {
        
        return (
          // card de cada proyecto individual
          <ProjectItemCard
            key = { index }
            projectData = {{ ...project, categoryName }}
          />
        )
      })}
    </div>
  )
}

export default ProjectsListGrid;
