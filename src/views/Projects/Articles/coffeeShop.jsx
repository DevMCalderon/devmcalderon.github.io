import HighlightText from "@/components/HighlightText";
import ArticleVideoSection from "@/components/UI/ArticleVideoSection";
import Heading from "@/components/UI/Heading";
import DependenciesSection from "@/components/Projects/Article/DependenciesSection";

const dependencies = {
  backend: {
    composerJSON: [
      "Fakerphp/faker",
      "Laravel/framework",
      "Laravel/pint",
      "Laravel/sail",
      "Laravel/sanctum",
      "Laravel/tinker",
      "Mockery/mockery",
      "Nunomaduro/collision",
      "Phpunit/phpunit",
      "Spatie/laravel-ignition"
    ],
    packageJSON: [
      "Axios",
      "Laravel-vite-plugin",
      "Vite",
    ],
  },
  frontend: {
    packageJSON: [
      "Axios",
      "React",
      "React-dom",
      "React-modal",
      "React-router-dom",
      "React-toastify",
      "Swr",
      "@types/react",
      "@types/react-dom",
      "@vitejs/plugin-react",
      "Autoprefixer",
      "Eslint",
      "Eslint-plugin-react",
      "Eslint-plugin-react-hooks",
      "Eslint-plugin-react-refresh",
      "Postcss",
      "Tailwindcss",
      "Vite",
    ],
  },
};

const coffeeShop = {
  Header: () => (
    <h4 className="arrow text-2xl font-semibold mb-5">
      Sistema de realización y gestión de pedidos para restaurantes
    </h4>
  ),
  Dependencies: () => (
      <DependenciesSection dependencies={dependencies} />
  ),
  ExtendedDescription: () => (
    <>
      <p className="article-description-paragraph">
        Proyecto desarrollado de forma integral, abarcando tanto el backend con <HighlightText>Laravel</HighlightText> como el frontend con <HighlightText>React y Tailwind</HighlightText>. El sistema gestiona distintos niveles de privilegio según el tipo de usuario, redirigiendo automáticamente tras el inicio de sesión a los módulos correspondientes. Su diseño modular y escalable permite gestionar productos, compras y usuarios de forma eficiente.
      </p>
      <p className="article-description-paragraph">
        Incluye funcionalidades de e-commerce básicas, como visualización de productos disponibles, carrito con cálculo automático del total de compra, y administración de órdenes. El sistema está optimizado para operar en tiempo real gracias a técnicas de revalidación automática de datos.
      </p>
      <Heading tag="h5">Contribuciones en Backend (Laravel):</Heading>
      <ul className="article-description-list">
        <li>
          Desarrollo de API RESTful con controladores, modelos y rutas.
        </li>
        <li>
          Configuración de migraciones, seeds y validaciones con Form Requests.
        </li>
        <li>
          Implementación de políticas de acceso según roles de usuario.
        </li>
        <li>
          Organización de lógica con Resources y Collections.
        </li>
      </ul>
      <Heading tag="h5">Contribuciones en Frontend (React, Tailwind):</Heading>
      <ul className="article-description-list">
        <li>
          Diseño de vistas responsivas y layouts reutilizables.
        </li>
        <li>
          Navegación dinámica con React Router.
        </li>
        <li>
          UI modular: Desarrollo de componentes personalizados.
        </li>
        <li>
          Manejo de estado global con Context y hooks propios.
        </li>
        <li>
          Data fetching eficiente con useSWR, incluyendo caching, revalidación automática y optimización del rendimiento.
        </li>
        <li>
          Creación de helpers reutilizables para lógica de negocio.
        </li>
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
      <ArticleVideoSection 
        labelledby="pedido-create" 
        title="Añadir, Editar, Eliminar Productos en el Carrito de Compras y Realizar Pedido:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273601/crear-editar-pedido_qwp5ae.mp4"
      />
      <ArticleVideoSection 
        labelledby="register" 
        title="Registro de Usuarios y sus Validaciones:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273600/register_i0c0he.mp4"
      />
      <ArticleVideoSection 
        labelledby="login" 
        title="Inicio de Sesion de Usuarios y sus Validaciones:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273600/login-y-validaciones_o1tlin.mp4"
      />
      <ArticleVideoSection 
        labelledby="product-out-of-stock" 
        title="Un Administrador Puede Establecer un Producto Como Agotado:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273600/producto-agotado_k4byrs.mp4"
      />
      <ArticleVideoSection 
        labelledby="product-out-of-stock2" 
        title="Un Producto Agotado se Oculta para el Cliente del Listado de Productos:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273599/producto-agotado-2_bvy0ym.mp4"
      />
      <ArticleVideoSection 
        labelledby="complete-order" 
        title="Visualización de Ordenes de Compra y Completar una Orden de Compra:"
        videoSrc="https://res.cloudinary.com/detst5oqb/video/upload/v1745273599/completar-pedido_bxmgu2.mp4"
        caption="En el panel de administrador se muestran las ordenes de compra realizadas por los clientes y un administrador puede completar una orden de compra."
      />
    </div>
  ),
};

export default coffeeShop;
