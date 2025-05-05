import { useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";
import DependenciesSection from "@/components/projects/article/DependenciesSection";
import { IconGlobeWithMeridians, PageFacingUp } from "@/components/uI/Icons";
import ExternalLink from "@/components/uI/ExternalLink";
import Heading from "@/components/uI/Heading";

const dependencies = {
  hasDependencies: true,
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
  Links: () => {
    const [t] = useTranslation("global");
    return (
      <>
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
    )
  },
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  ExtendedDescription: () => (
    <>
      <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">Sitio web informativo universitario.</Heading>
      <p className="article-description-paragraph">
        Sitio web institucional desarrollado durante mis prácticas profesionales en el Departamento de Sistemas Computacionales (DASC) de la Universidad Autónoma de Baja California Sur (UABCS). Construido en <HighlightText>WordPress</HighlightText> por solicitud del personal docente, el proyecto tuvo como objetivo mejorar el acceso a información clave para estudiantes y reducir la carga administrativa de los profesores mediante un sistema de gestión de contenidos visual, rápido e intuitivo. El diseño fue realizado bajo revisión constante de los profesores y se personalizó con funcionalidades hechas a medida e integraciones específicas, optimizando así la experiencia del usuario. El sitio incluye información sobre carreras, horarios, actividades, contactos, noticias y enlaces de interés, además de herramientas de accesibilidad para usuarios con necesidades especiales.
      </p>
      <Heading tag="h5">Contribuciones en Frontend:</Heading>
        <ul className="article-description-list">
          <li>Diseño personalizado supervisado por docentes.</li>
          <li>Implementación de funcionalidades a medida.</li>
          <li>Integración de plugins optimizados y personalizados.</li>
          <li>Adaptación del sitio para accesibilidad.</li>
          <li>Mejora de la estructura visual, navegabilidad y gestión de contenidos respecto a versiones previas.</li>
        </ul>
    </>
  ),
};

export default universityInfo;
