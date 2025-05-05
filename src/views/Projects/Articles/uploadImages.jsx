import { useTranslation } from "react-i18next";

import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";
import ExternalLink from "@/components/UI/ExternalLink";
import { IconGitHub } from "@/components/UI/Icons";

const dependencies = {
  hasDependencies: true,
  backend: {
    composerJSON: [
      "Fakerphp/faker",
      "Intervention/image",
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
      "Autoprefixer",
      "Axios",
      "Dropzone",
      "Laravel-vite-plugin",
      "Postcss",
      "Tailwindcss",
      "Vite"
    ],
  },
};

const uploadImages = {
  Links: () => {
    const [t] = useTranslation("global");
    return (
      <ExternalLink
        icon={<IconGitHub />}
        text={t(`projectDetail.repository_link_text`)}
        href={import.meta.env.VITE_UPLOAD_IMAGES_REPOSITORY_URL}
      />
    )
  },
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  ExtendedDescription: () => (
    <>
      <Heading tag="h4" className="text-2xl font-semibold mb-5 text-white">Red social para compartir imágenes.</Heading>
      <p className="article-description-paragraph">
        Implementa una funcionalidad de creación de url dinámicas para perfiles, publicación de posts, sistema de seguidores y likes. Permite subir imágenes, comentar publicaciones y personalizar el perfil con foto. Incluye un feed interactivo que muestra contenido de usuarios seguidos, optimizando la experiencia de interacción y descubrimiento de contenidos.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>Desarrollé múltiples endpoints para una <HighlightText>API RESTful</HighlightText>, asegurando una estructura limpia y escalable.</li>
        <li>Creé controladores, modelos, migraciones con relaciones, factories, seeders y form requests para validar y estructurar los datos eficientemente.</li>
        <li>Definí la arquitectura de base de datos, enfocándome en la integridad referencial y la eficiencia en las consultas.</li>
        <li>Creación de Policies de autorización para control de acceso de los endpoints de la RESTful API.</li>
        <li>Subida de imágenes utilizando la libreria de <HighlightText>Dropzone</HighlightText>.</li>
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
    <>
      <ArticleVideoSection
        labelledby="create-post-create-comment-show-posts-by-profile"
        title="Crear, comentar y ver posts de un perfil:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745386132/create-post-create-comment-show-posts-by-profile_doc7ht.mp4"
      />
      <ArticleVideoSection
        labelledby="upload-profile-image-edit-username"
        title="Subir imagen de perfil y editar username:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745386132/upload-profile-image-edit-username_wfl6kj.mp4"
      />
      <ArticleVideoSection
        labelledby="like-undo-like"
        title="Dar y quitar me gusta a una publicación:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745386133/like-dislike_khx43q.mp4"
      />
      <ArticleVideoSection
        labelledby="follow-undo-follow"
        title="Dar y quitar seguir a un perfil:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745386132/follow-unfollow_pl7lax.mp4"
      />
    </>
  ),
};

export default uploadImages;
