import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  backend: {
    composerJSON: [
      "Fakerphp/faker",
      "Laravel/breeze",
      "Laravel/framework",
      "Laravel/pint",
      "Laravel/sail",
      "Laravel/tinker",
      "Livewire/livewire",
      "Mockery/mockery",
      "Nunomaduro/collision",
      "Phpunit/phpunit",
      "Spatie/laravel-ignition"
  ],
  },
  frontend: {
    packageJSON: [
      "@tailwindcss/forms",
      "Alpinejs",
      "Autoprefixer",
      "Axios",
      "Laravel-vite-plugin",
      "Postcss",
      "Tailwindcss",
      "Vite"
    ],
  },
};

const jobVacancies = {
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
      <p className="article-description-paragraph">
        Los desarrolladores pueden subir su CV en formato PDF al postularse, mientras que los recruiters reciben notificaciones automáticas de nuevas aplicaciones. Se crearon componentes dinámicos reutilizables con Livewire y Blade. Se implementó gestión de archivos, autenticación personalizada, control de roles y permisos, validación avanzada y personalización de notificaciones de correo.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>Desarrollo de controladores, modelos, migraciones y seeders.</li>
        <li>Creación de middlewares y policies de autorización.</li>
        <li>Implementación de roles y permisos para control de acceso.</li>
        <li>Desarrollo de notificaciones automáticas y personalización de emails de verificación.</li>
        <li>Validación avanzada de datos mediante Form Requests.</li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend (React, Tailwind):</Heading>
      <ul className="article-description-list">
        <li>Implementación de layouts dinámicos con Blade y TailwindCSS.</li>
        <li>Creación de componentes reutilizables con Livewire.</li>
        <li>Diseño responsivo y optimización de experiencia de usuario (UX).</li>
        <li>Integración de subida y previsualización de archivos (PDF, imágenes).</li>
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

export default jobVacancies;
