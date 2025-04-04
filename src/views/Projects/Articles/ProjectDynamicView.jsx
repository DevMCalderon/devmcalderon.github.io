import { useParams } from "react-router-dom"

import Veterinary from "@/views/Projects/Articles/Veterinary"
import ArticleEmptyView from "@/views/Projects/Articles/ArticleEmptyView"
import { articleSlugMap } from "@/routes.js"
import CoffeeShop from "@/views/Projects/Articles/CoffeeShop"

const articleViews = {
  [articleSlugMap.veterinary]: <Veterinary />,
  [articleSlugMap.coffeeShop]: <CoffeeShop />,
};

const ProjectDynamicView = () => {
  const { idProject } = useParams();
  
  // if the slug is in the articleViews object return the view, otherwise return the fallback
  return articleViews[idProject] || <ArticleEmptyView />;
  
};

export default ProjectDynamicView;