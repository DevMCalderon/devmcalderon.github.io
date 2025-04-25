import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  plugins: [
    "Tailwindcss",
  ]
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
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sistema.
    </h4>
  ),
  ExtendedDescription: () => (
    <>
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
    <div className="mb-10">
      <ArticleVideoSection
        labelledby="product-index"
        title="Listado de Productos por Categoría:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273607/categories_obcoab.mp4"
      />
    </div>
  ),
};

export default template;
