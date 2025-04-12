import { useTranslation } from "react-i18next";
import Highlight from "@/components/Highlight";


const Veterinary = () => {
  const [t] = useTranslation("global");

  const categories = [
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
  ]
  

  return(
    <>
      <div className="mb-10">
      
        {/* used dependencies */}
        <div className="mb-10">
          <h3 className="text-start text-2xl text-highlighted_text_color mb-3">
            {t(`projectDetail.used_dependencies`)}
          </h3>
          <p className="text-lg text-start"></p>

          {/*list */}
          <ul className="w-fit list-disc ml-4 text-white list-outside flex flex-wrap gap-x-10">
            {categories.map((category, index)=> (
              <li className="py-1" key={index}>
                {category}
              </li>
            ))}
          </ul>
        </div>
        
        {/* extended description */}
        <div className="mb-5">
          <h3 className="text-start text-2xl text-highlighted_text_color mb-3">
            {t(`projectDetail.extended_description`)}
          </h3>
          
          <h4 className="text-xl text-start mb-5">Sistema Integral de Gestión para Clínicas Veterinarias</h4>
          
          <p className="text-lg text-start mb-5">
            Desarrollé, junto a un equipo multidisciplinario, una solución web integral orientada a la administración eficiente de clínicas veterinarias, abarcando módulos clave como: agenda de citas, gestión de clientes, control de mascotas, administración de empresas y sucursales, así como manejo de inventario y productos. El sistema fue construido con un enfoque modular y escalable, permitiendo una experiencia administrativa fluida y centralizada.
          </p>
          
          <p className="text-lg text-start mb-5">
            <Highlight></Highlight>
            Mi participación incluyó tanto el backend como el frontend del proyecto, trabajando principalmente con <Highlight>Laravel</Highlight>, <Highlight>MySQL</Highlight>, <Highlight>Blade</Highlight> y <Highlight>Vue.Js</Highlight>. <Highlight>En menos de dos semanas</Highlight>, me adapté completamente a la arquitectura preexistente y aporté mejoras significativas en la mantenibilidad del código mediante el uso de componentes reutilizables y buenas prácticas de desarrollo.
          </p>
          
          <p className="text-lg text-start">
            En el lado del backend:
          </p>
          <ul className="text-lg text-start">
            <li>
              Diseñé y desarrollé múltiples endpoints para una API RESTful, asegurando una estructura limpia y escalable.
            </li>
          </ul>
          
          <p className="text-lg text-start"></p>
        </div>
      </div>
  
        {/* <ProjectImage
          imgPath = { data.project.imgPath }
          altText = { data.project.slug }
          classes="rounded-[1rem] w-full h-auto mb-4"
        /> */}

      
      {/* subtitle */}
      <h2 className="text-3xl mb-2">Operaciones de Clientes</h2>
      
      {/* functionality container: video and description */}
      <div className="">
        <h3 className="text-2xl mb-2 text-start">1. Creación de un Cliente</h3>
        
        <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4 "/>
        
        <video autoPlay controls loop muted playsInline  className="rounded-xl mb-2" width="100%" height="auto">
          {/* <source src={projectData.videoPath} type="video/mp4" /> */}
          <source src="https://res.cloudinary.com/detst5oqb/video/upload/v1743551200/cliente-crear_lhizi2.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
        
        <p className="bg-blue-950 rounded-2xl text-mdsm2 p-4 px-5 mb-9">
          Esta funcionalidad está diseñada para gestionar el proceso de registro de un nuevo cliente en la base de datos, asegurando una experiencia fluida y validaciones robustas tanto en el frontend como en el backend.
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl mb-2 text-start">2. Edición de un Cliente</h3>
        
        <hr className="hr1 text-indigo-500 lg:max-w-screen-2xl w-[20rem] mb-4"/>
        
        <video autoPlay controls loop muted playsInline className=" rounded-xl" width="100%" height="auto">
          {/* <source src={projectData.videoPath} type="video/mp4" /> */}
          <source src="https://res.cloudinary.com/detst5oqb/video/upload/v1743478270/ycbipkgdwuqpnrpe9uom.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div>
    </>
  );
}

export default Veterinary;