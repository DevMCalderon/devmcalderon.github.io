import VeterinaryArticle from '@/views/projects/articles/veterinary';
import CoffeeShopArticle  from '@/views/projects/articles/coffeeShop';
import JobVacanciesArticle from '@/views/projects/articles/jobVacancies';
import UploadImagesArticle from '@/views/projects/articles/uploadImages';
import SchoolTutoringArticle from '@/views/projects/articles/schoolTutoring';
import UniversityInfoArticle from '@/views/projects/articles/universityInfo';
import EducationalGamesArticle from '@/views/projects/articles/educationalGames';

export const articleComponentMap = {
  'vetcore-pro': VeterinaryArticle,
  'smartorder': CoffeeShopArticle,
  'jobmatch': JobVacanciesArticle,
  'picconnect': UploadImagesArticle,
  'edulink': SchoolTutoringArticle,
  'dasc-uabcs': UniversityInfoArticle,
  'learnplay': EducationalGamesArticle,
};

export const getArticleComponent = slug => 
  articleComponentMap[slug] || null ;