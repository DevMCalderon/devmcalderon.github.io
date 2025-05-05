import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";
import ExternalLink from "@/components/UI/ExternalLink";
import { IconGitHub } from "@/components/UI/Icons";

const dependencies = {
  hasDependencies: false,
  plugins: [
    "Tailwindcss",
  ],
  backend: {
    composerJSON: [
      "Fakerphp/faker",
    ],
    packageJSON: [
     "Axios",
    ]
  },
  frontend: {
    packageJSON: [
      "@tailwindcss/forms",
    ],
  },
};

const template = {
  Links: () => {
    const [t] = useTranslation("global");
    return (
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`projectDetail.repository_link_text`)}
        href={import.meta.env.VITE_UPLOAD_IMAGES_REPOSITORY_URL}
      />
    )
  },
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  ExtendedDescription: () => (
    <>
      <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">Plataforma.</Heading>
      <p className="article-description-paragraph">
        Sistema <HighlightText>Herramienta</HighlightText>
      </p>
      <Heading tag="h5">Contribuciones en Backend:</Heading>
      <ul className="article-description-list">
        <li></li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend:</Heading>
      <ul className="article-description-list">
        <li>.</li>
      </ul>
    </>
  ),
  Features: () => (
    <>
      <ArticleVideoSection
        labelledby="product-index"
        title="Listado de Productos por Categoría:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273607/categories_obcoab.mp4"
      />
    </>
  ),
};

export default template;
