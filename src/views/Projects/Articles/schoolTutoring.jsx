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
        Desarrollé una plataforma de reclutamiento y postulación a empleos utilizando <HighlightText>Laravel</HighlightText> para el backend, combinándolo con <HighlightText>Livewire</HighlightText>, <HighlightText>Blade</HighlightText> y <HighlightText>TailwindCSS</HighlightText> en el frontend. Permite a usuarios registrarse como recruiters o desarrolladores, publicar vacantes y aplicar a ellas. Se integró un sistema de búsqueda avanzada de vacantes por nombre, categoría y salario, además de confirmación de cuenta vía correo electrónico.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>Desarrollo de controladores, modelos, migraciones y seeders.</li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend (React, Tailwind):</Heading>
      <ul className="article-description-list">
        <li>Implementación de layouts dinámicos con Blade y TailwindCSS.</li>
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
