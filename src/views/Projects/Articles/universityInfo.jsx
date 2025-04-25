import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";
import { IconGlobeWithMeridians, PageFacingUp } from "@/components/Icons";

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
  Dependencies: () => (
      <DependenciesSection dependencies={dependencies} />
  ),
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sitio web informativo
    </h4>
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Fue desarrollado durante mi periodo de practicas profesionales para el Departamento de Sistemas Computacionales de la Universidad Autonoma de Baja California Sur, siendo yo estudiante de esta universidad. Fue hecho con <HighlightText>Wordpress</HighlightText> a petición de los docentes. Optimiza la gestión de contenidos, reduciendo la carga de trabajo de profesores y mejorando el acceso a información clave para estudiantes. Incluye herramientas de accesibilidad, diseño supervisado por administradores y desarrollo a medida con integraciones optimizadas para mejorar la experiencia del usuario en base a las funcionalidades requeridas.
      </p>
      
      <div className="mb-7">
        <p className="article-description text-xl mr-2"> 
        <IconGlobeWithMeridians />
        <a 
          className="link"
          href="https://www.uabcs.mx/dasc/"
          target="_blank"
          rel="noreferrer"
        >
          {" Haz click aquí "}
        </a>
         para visitar el sitio web.</p>
      </div>
      
      <div className="mb-7">
        <p className="article-description text-xl mr-2"> 
        <PageFacingUp />
        <a 
          className="link"
          href="https://drive.google.com/file/d/146A4ZWGmUmljx_yUOmFoxRJlAAp7_KWH/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {" Haz click aquí "}
        </a>
         para acceder a la documentación extendida.</p>
      </div>
    </>
  ),
};

export default universityInfo;
