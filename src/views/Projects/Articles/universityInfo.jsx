import HighlightText from "@/components/HighlightText";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";
import { IconGlobeWithMeridians, PageFacingUp, IconGitHub } from "@/components/Icons";
import ExternalLink from "@/components/UI/ExternalLink";

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
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sitio web informativo universitario.
    </h4>
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Fue desarrollado cuando era yo un estudiante en esta universidad durante mi periodo de practicas profesionales para el Departamento de Sistemas Computacionales de la Universidad Autonoma de Baja California Sur. Construido con <HighlightText>Wordpress</HighlightText> a petición de los docentes. Optimiza la gestión de contenidos, reduciendo la carga de trabajo de profesores y mejorando el acceso a información clave para estudiantes. Incluye herramientas de accesibilidad, diseño supervisado por administradores y desarrollo a medida con integraciones optimizadas para mejorar la experiencia del usuario en base a las funcionalidades requeridas.
      </p>
      
      <ExternalLink
        icon={<IconGlobeWithMeridians className="mr-2" />}
        text="Visita el sitio web"
        href={import.meta.env.VITE_DASC_URL}
      />
      
      <ExternalLink
        icon={<PageFacingUp className="mr-2" />}
        text="Accede a la documentación extendida"
        href={import.meta.env.VITE_DASC_DOCS_URL}
      />
    </>
  ),
};

export default universityInfo;
