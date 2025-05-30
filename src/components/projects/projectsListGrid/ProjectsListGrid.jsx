import ProjectItemCard from '@/components/projects/projectItemCard/ProjectItemCard'
import usePortfolioContext from "@/hooks/usePortfolioContext";
import ArticleEmptyView from '@/views/projects/articles/ArticleEmptyView';
import { useTranslation } from 'react-i18next';

const ProjectsListGrid = ({ maxProjectsToShow=6, selectedCategoryName="all" }) => {
  const [ t ] = useTranslation("global");
  
  const { projectsJSON: { categories } } = usePortfolioContext();
  
  const displayedProjects = selectedCategoryName === "all"
    ? categories.flatMap(({category, projects}) => 
        projects.map(project => ({ ...project, categoryName: category }))
      )
    : (categories.find(({ category }) => category === selectedCategoryName)?.projects || [])
      .slice(0, maxProjectsToShow)
      .map(project => ({ ...project, categoryName: selectedCategoryName }));
  
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
