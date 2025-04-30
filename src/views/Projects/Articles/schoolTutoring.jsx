import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
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
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Plataforma de reclutamiento y postulación a empleos.
    </h4>
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Desarrollada utilizando <HighlightText>Laravel</HighlightText> para el backend, combinándolo con <HighlightText>Livewire</HighlightText>, <HighlightText>Blade</HighlightText> y <HighlightText>TailwindCSS</HighlightText> en el frontend. Permite a usuarios registrarse como recruiters o desarrolladores, publicar vacantes y aplicar a ellas. Se integró un sistema de búsqueda avanzada de vacantes por nombre, categoría y salario, además de confirmación de cuenta vía correo electrónico.
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
    <div className="mb-10">
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
    </div>
  ),
};

export default schoolTutoring;
