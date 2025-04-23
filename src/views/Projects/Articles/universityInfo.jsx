import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  plugins: [
    "3D FlipBook - Lite Edition",
    "Accessibility by UserWay",
    "Advanced Custom Fields",
    "Better Font Awesome",
    "Collapse-O-Matic",
    "Modal Builder Block",
    "Presto Player",
    "Responsive WordPress Slider - Soliloquy Lite",
    "Staff List",
    "Starter Templates",
    "TablePress",
    "TranslatePress - Multilingual",
    "UpdraftPlus - Backup/Restore",
    "What The File",
    "WPForms Lite",
    "WPIDE - File Manager & Code Editor"
  ],
};

const universityInfo = {
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sistema
    </h4>
  ),
  Dependencies: () => (
      <DependenciesSection dependencies={dependencies} />
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Sistema <HighlightText>Herramienta</HighlightText>
      </p>
      <div className="mb-7">
        <p className="article-description text-xl mr-2"> 
        <a 
          className="text-link_color hover:text-link_color_hover hover:underline"
          href="https://drive.google.com/file/d/146A4ZWGmUmljx_yUOmFoxRJlAAp7_KWH/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {"Haz click aquí "}
        </a>
         para acceder a la documentación extendida.</p>
      </div>
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

export default universityInfo;
