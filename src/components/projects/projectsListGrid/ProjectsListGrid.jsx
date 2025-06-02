import ProjectItemCard from '@/components/projects/projectItemCard/ProjectItemCard'
import usePortfolioContext from "@/hooks/usePortfolioContext";
import ArticleEmptyView from '@/views/projects/articles/ArticleEmptyView';
import { useTranslation } from 'react-i18next';

const ProjectsListGrid = ({ maxProjectsToShow, selectedCategoryId="" }) => {
  const [ t ] = useTranslation("global");
  
  const { projectsJSON: { categories } } = usePortfolioContext();
  
  // si se ha seleccionado una categoría, se muestran solo los proyectos de esa categoría
  let displayedProjects = (categories.find( c => c.id === selectedCategoryId )?.projects || [])
    .slice(0, maxProjectsToShow)
    .map(project => ({ ...project, categoryId: selectedCategoryId }))
  
  // si no se ha seleccionado ninguna categoría, se muestran todos  
  if (!selectedCategoryId) {
    displayedProjects = categories.flatMap(({ c, projects }) =>
      projects.map(project => ({ ...project, categoryId: c })));
  } 
  
  if (displayedProjects.length === 0) return <ArticleEmptyView noun={t(`article_empty_view.noun_category`)} />;
  
  return (
    <div className="grid grid-cols-1 gap-4 lg:max-w-screen-lg mx-auto">
    {/* listado de proyectos */}
      {displayedProjects.map((project, index) => (
        // card de cada proyecto individual
        <ProjectItemCard
          key = { index }
          projectData = {{ ...project }}
        />
      ))}
    </div>
  );
};

export default ProjectsListGrid;
