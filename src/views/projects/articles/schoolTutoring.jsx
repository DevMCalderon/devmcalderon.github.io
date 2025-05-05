import { useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/uI/ArticleVideoSection";
import Heading from "@/components/uI/Heading";
import DependenciesSection from "@/components/projects/article/DependenciesSection";
import ExternalLink from "@/components/uI/ExternalLink";
import { IconGitHub } from "@/components/uI/Icons";

const dependencies = {
  hasDependencies: true,
  backend: {
    composerJSON: [
      "Guzzlehttp/guzzle",
      "Laravel/framework",
      "Laravel/sanctum",
      "Laravel/tinker",
      "Laravel/ui",
      "Fakerphp/faker",
      "Laravel/pint",
      "Laravel/sail",
      "Mockery/mockery",
      "Nunomaduro/collision",
      "Phpunit/phpunit",
      "Spatie/laravel-ignition"
    ],
    packageJSON: [
      "@Popperjs/core",
      "@Vitejs/plugin-vue",
      "Axios",
      "Bootstrap",
      "Laravel-vite-plugin",
      "Lodash",
      "Postcss",
      "Sass",
      "Vite",
      "Jquery",
      "Sweetalert2",
      "Vue",
      "Vue-loader"
    ],
  },
};

const schoolTutoring = {
  Links: () => {
    const [t] = useTranslation("global");
    return (
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`projectDetail.repository_link_text`)}
        href={import.meta.env.VITE_SCHOOL_TUTORING_REPOSITORY_URL}
      />
    )
  },
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  ExtendedDescription: () => (
    <>
      <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">Plataforma de tutorías en línea.</Heading>
      <p className="article-description-paragraph">
        Integrada a la API de Zoom, diseñada para facilitar la conexión entre estudiantes y tutores mediante una experiencia accesible, automatizada y colaborativa. Optimiza la gestión de tutorías al permitir a los alumnos crear o inscribirse en sesiones, mientras que los profesores administradores pueden revisar, aprobar o rechazar solicitudes de creación de tutoria desde una interfaz intuitiva. Al programar una tutoría, el sistema genera automáticamente una videollamada en Zoom con los datos ingresados. Esta solución promueve un entorno de aprendizaje cercano y flexible, mejorando la organización académica y fomentando la el aprendizaje y la interacciónen tiempo real entre alumnos.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
        <ul className="article-description-list">
          <li>Integración de API de Zoom para creación y agendamiento de conferencias virtuales según los datos establecidos por el usuario.</li>
          <li>Desarrollé múltiples endpoints para una <HighlightText>API RESTful</HighlightText>, asegurando una estructura limpia y escalable.</li>
          <li>Creé controladores, modelos, migraciones con relaciones, factories, seeders y form requests para validar y estructurar los datos eficientemente.</li>
          <li>Definí la arquitectura de base de datos, enfocándome en la integridad referencial y la eficiencia en las consultas.</li>
        </ul>
    </>
  ),
  Features: () => (
    <>
      <ArticleVideoSection
        labelledby="alumno-activar-tutor"
        title="Activación de tutor por parte del alumno:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388791/alumno-activar-tutor_dol5c4.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-solicitar"
        title="Solicitar como alumno tutor impartir una tutoria a un profesor administrador:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388790/tutoria-solicitar_gqgisz.mp4"
      />
      <ArticleVideoSection
        labelledby="profesor-login-tutoria-aprobar"
        title="Inicio de sesión de profesor administrador y aprobación de solicitudes de tutorias:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388793/profesor-login-tutoria-aprobar_ciclsc.mp4"
      />
      <ArticleVideoSection
        labelledby="profesor-tutoria-rechazar"
        title="Rechazar una solicitud de tutoria como profesor administrador:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388784/profesor-tutoria-rechazar_dafnhs.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-crear"
        title="Crear una tutoria aprobada como alumno tutor:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388786/tutoria-crear_vtmtw7.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-detalle-y-tutoria-zoom-url"
        title="Detalle de una tutoria y abrir el URL de la conferencia de Zoom:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388789/tutoria-detalle-y-tutoria-zoom-url_zkrv1z.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-join"
        title="Unirse a una tutoria:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388788/tutoria-join_goxmk4.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-detalle-alumnos-inscritos"
        title="Inicio de sesión de alumno y visualizar información de una tutoria con alumnos inscritos:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388787/tutoria-detalle-alumnos-inscritos_dfyex2.mp4"
      />
      <ArticleVideoSection
        labelledby="tutoria-buscar"
        title="Buscar tutorias por nombre:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388785/tutoria-buscar_jgdi1r.mp4"
      />
      <ArticleVideoSection
        labelledby="registrar-alumno"
        title="Registrar alumno:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745388785/registrar-alumno_cxdj2w.mp4"
      />
    </>
  ),
};

export default schoolTutoring;
