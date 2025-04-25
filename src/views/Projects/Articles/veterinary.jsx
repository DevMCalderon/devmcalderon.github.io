import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  backend: {
    composerJSON: [
      "Barryvdh/laravel-dompdf",
      "Doctrine/dbal",
      "Facade/ignition",
      "Fakerphp/faker",
      "Fruitcake/laravel-cors",
      "Guzzlehttp/guzzle",
      "Intervention/image",
      "Laravel/framework",
      "Laravel/sail",
      "Laravel/sanctum",
      "Laravel/socialite",
      "Laravel/tinker",
      "Laravel/ui",
      "Mockery/mockery",
      "Nunomaduro/collision",
      "Phpunit/phpunit",
      "Socialiteproviders/facebook",
    ],
  },
  frontend: {
    packageJSON: [
      "Axios" ,
      "Bootstrap",
      "Laravel-mix",
      "Lodash",
      "Postcss",
      "Resolve-url-loader",
      "Sass",
      "Sass-loader",
      "Vue",
      "Vue-loader",
      "Vue-template-compiler",
      "Jquery",
      "Sweetalert2",
    ],
  },
};

const veterinary = {
  Dependencies: () => <DependenciesSection dependencies={dependencies} />,
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sistema Integral de Gestión para Clínicas Veterinarias.
    </h4>
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Mi participación incluyó tanto el backend como el frontend del proyecto, trabajando principalmente con <HighlightText>Laravel</HighlightText>, <HighlightText>MySQL</HighlightText>, <HighlightText>Blade</HighlightText>, <HighlightText>Vue.Js</HighlightText> y <HighlightText>Bootstrap</HighlightText>. <HighlightText>En menos de dos semanas</HighlightText>, aprendí y me adapté completamente a las tecnologias utilizadas en la arquitectura preexistente y <HighlightText>aporté mejoras significativas</HighlightText> en la mantenibilidad del código mediante el uso de componentes reutilizables y buenas prácticas de desarrollo.
      </p>
      <p className="article-description-paragraph">
        Desarrollé, junto a un equipo multidisciplinario, una solución web integral orientada a la administración eficiente de clínicas veterinarias, abarcando módulos clave como: agenda de citas, gestión de clientes, control de mascotas, administración de empresas y sucursales, así como manejo de inventario y productos. El sistema fue construido con un enfoque modular y escalable, permitiendo una experiencia administrativa fluida y centralizada.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>
          Desarrollé múltiples endpoints para una <HighlightText>API RESTful</HighlightText>, asegurando una estructura limpia y escalable.
        </li>
        <li>
          Implementé middleware para la gestión de roles y permisos, fortaleciendo la seguridad del sistema.
        </li>
        <li>
          Creé controladores, modelos, migraciones con relaciones complejas, seeders y form requests para validar y estructurar los datos eficientemente.
        </li>
        <li>
        Colaboré en la definición y optimización de la arquitectura de base de datos, enfocándome en la integridad referencial y la eficiencia en las consultas.
        </li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend (Vue.Js, Bootstrap, Blade):</Heading>
      <ul className="article-description-list">
        <li>
          Desarrollé interfaces reactivas e intuitivas utilizando Vue.js, Blade, Bootstrap, priorizando la experiencia del usuario con un diseño UI/UX centrado en la claridad y usabilidad.
        </li>
        <li>
          Integré componentes reutilizables que facilitaron el mantenimiento del sistema y aceleraron el desarrollo de nuevas funcionalidades.
        </li>
      </ul>
      <Heading tag="h5">Desde el punto de vista organizacional:</Heading>
      <ul className="article-description-list">
        <li>
          Aplicamos la metodología SCRUM, realizando reuniones diarias, planificación de sprints y revisiones periódicas del backlog.
        </li>
        <li>
          Cumplí consistentemente con las tareas asignadas dentro de los plazos establecidos, demostrando compromiso, autonomía y responsabilidad en cada entrega.
        </li>
      </ul>
    </>
  ),
  Features: () => (
    <div className="mb-10">
      <ArticleVideoSection 
        labelledby="client-create" 
        title="Creación de un Cliente:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1743551200/cliente-crear_lhizi2.mp4"
        caption="Esta funcionalidad está diseñada para gestionar el proceso de registro de un nuevo cliente en la base de datos, asegurando una experiencia fluida y validaciones robustas tanto en el frontend como en el backend."
      />
      <ArticleVideoSection 
        labelledby="client-edit"
        title="Edición de un Cliente:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1743478270/ycbipkgdwuqpnrpe9uom.mp4"
      />
      <ArticleVideoSection 
        labelledby="client-show"
        title="Visualización de un Cliente:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745197274/cliente-detalle_befbzl.mp4"
      />
      <ArticleVideoSection 
        labelledby="client-destroy"
        title="Eliminación de un Cliente:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/portfolio_videos/veterinary/cliente-eliminar.mp4"
      />
      <ArticleVideoSection 
        labelledby="empresa-edit"
        title="Edición de una Empresa:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745209407/portfolio_videos/veterinary/zpbidilyvla2ei3eoxtm.mp4"
      />
      <ArticleVideoSection 
        labelledby="pet-create"
        title="Creación de una Mascota:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745209627/portfolio_videos/veterinary/cdbg6z29qymilhxuthxu.mp4"
      />
      <ArticleVideoSection 
        labelledby="pet-destoy"
        title="Eliminación de una Mascota y Contador de Mascotas:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745211407/portfolio_videos/veterinary/ralnmtfoytilmgg8becy.mp4"
      />
      <ArticleVideoSection 
        labelledby="register-create-empresa"
        title="Registro, Middleware Validador de Empresa y Creación de Empresa:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745211520/portfolio_videos/veterinary/joaojdbthvi8embyeifr.mp4"
      />
    </div>
  ),
};

export default veterinary;
