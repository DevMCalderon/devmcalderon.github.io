import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  backend: {
    composerJSON: [
      "Fakerphp/faker",
  ],
  },
  frontend: {
    packageJSON: [
      "@tailwindcss/forms",
    ],
  },
};

const uploadImages = {
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
        Red social para compartir imágenes, con creaión de url dinámicas para perfiles, publicación de posts, sistema de seguidores y likes. Permite subir imágenes, comentar publicaciones y personalizar el perfil con foto. Incluye un feed interactivo que muestra contenido de usuarios seguidos, optimizando la experiencia de interacción y descubrimiento.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>Desarrollé múltiples endpoints para una <HighlightText>API RESTful</HighlightText>, asegurando una estructura limpia y escalable.</li>
        <li>Creé controladores, modelos, migraciones con relaciones, factories, seeders y form requests para validar y estructurar los datos eficientemente.</li>
        <li>Definí la arquitectura de base de datos, enfocándome en la integridad referencial y la eficiencia en las consultas.</li>
        <li>Creación de Policies de autorización para control de acceso de los endpoints de la RESTful API.</li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend (Livewire, Blade, Tailwind):</Heading>
      <ul className="article-description-list">
        <li>Desarrollé interfaces reactivas e intuitivas utilizando Livewire, Blade, Tailwind, priorizando la experiencia del usuario con un diseño UI/UX centrado en la claridad y usabilidad.</li>
        <li>Estructuré el código de manera modular en componentes reutilizables y layouts dinámicos que facilitaron el mantenimiento del sistema y aceleraron el desarrollo de nuevas funcionalidades.</li>
        <li></li>
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

export default uploadImages;
