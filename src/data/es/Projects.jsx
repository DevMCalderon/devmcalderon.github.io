
import HighlightText from "@/components/HighlightText";

export const veterinary = {
  header: (
    <h4 className="text-2xl font-semibold mb-5">
      Sistema Integral de Gestión para Clínicas Veterinarias
    </h4>
  ),
  dependencies: [
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
  paragraphs: [
    <p className="text-lg text-start mb-5">
      Mi participación incluyó tanto el backend como el frontend del proyecto, trabajando principalmente con <HighlightText>Laravel</HighlightText>, <HighlightText>MySQL</HighlightText>, <HighlightText>Blade</HighlightText>, <HighlightText>Vue.Js</HighlightText> y <HighlightText>Bootstrap</HighlightText>. <HighlightText>En menos de dos semanas</HighlightText>, aprendí y me adapté completamente a las tecnologias utilizadas en la arquitectura preexistente y <HighlightText>aporté mejoras significativas</HighlightText> en la mantenibilidad del código mediante el uso de componentes reutilizables y buenas prácticas de desarrollo.
    </p>,
    <p className="text-lg text-start mb-5">
      Desarrollé, junto a un equipo multidisciplinario, una solución web integral orientada a la administración eficiente de clínicas veterinarias, abarcando módulos clave como: agenda de citas, gestión de clientes, control de mascotas, administración de empresas y sucursales, así como manejo de inventario y productos. El sistema fue construido con un enfoque modular y escalable, permitiendo una experiencia administrativa fluida y centralizada.
    </p>,
    <h5 className="text-xl font-semibold mt-6 mb-2">Contribuciones en Backend:</h5>,
    <ul className="text-lg text-start list-disc ml-6 space-y-2">
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
    </ul>,
    <h5 className="text-xl font-semibold mt-6 mb-2">Contribuciones en Frontend:</h5>,
    <ul className="text-lg text-start list-disc ml-6 space-y-2">
      <li>
        Desarrollé interfaces reactivas e intuitivas utilizando Vue.js, Blade, Bootstrap, priorizando la experiencia del usuario con un diseño UI/UX centrado en la claridad y usabilidad.
      </li>
      <li>
        Integré componentes reutilizables que facilitaron el mantenimiento del sistema y aceleraron el desarrollo de nuevas funcionalidades.
      </li>
    </ul>,
    <h5 className="text-xl font-semibold mt-6 mb-2">Desde el punto de vista organizacional:</h5>,
    <ul>
      <li>
        Aplicamos la metodología SCRUM, realizando reuniones diarias, planificación de sprints y revisiones periódicas del backlog.
      </li>
      <li>
        Cumplí consistentemente con las tareas asignadas dentro de los plazos establecidos, demostrando compromiso, autonomía y responsabilidad en cada entrega.
      </li>
    </ul>
  ],
}
