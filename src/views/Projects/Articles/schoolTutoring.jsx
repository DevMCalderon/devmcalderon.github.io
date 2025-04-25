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
        labelledby="product-index"
        title="Listado de Productos por Categoría:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273607/categories_obcoab.mp4"
      />
    </div>
  ),
};

export default schoolTutoring;
