import { useTranslation } from "react-i18next";



const Veterinary = () => {
  const [t] = useTranslation("global");

  return(
    <>
      <div className="mb-10">
        <h3 className="text-start text-xl text-highlighted_text_color">
          {t(`projectDetail.extended_description`)+':'}
        </h3>
        <p className="text-lg text-start">
          {/* {projectsInfo.description} */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus veritatis modi quae! Earum explicabo voluptas maxime nemo et qui, quam soluta cupiditate at ad iure sed molestiae quisquam excepturi doloribus?
        </p>
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