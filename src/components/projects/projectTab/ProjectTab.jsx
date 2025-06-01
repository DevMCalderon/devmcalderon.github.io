import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

import ProjectTabContent from './ProjectTabContent';
import projectsJSON_en from "@/data/en/projects.json";
import projectsJSON_es from "@/data/es/projects.json";

// componente de pestañas (tabs)
const ProjectTab = () => {
  const [ t ] = useTranslation("global");
  const [activeTab, setActiveTab] = useState(1);
  const indicatorRef = useRef(null);
  
  
  const storedLanguage = localStorage.getItem('language');
  
  const [categoryData, setCategoryData] = useState([]);
  
  // establece el contenido de la descripcion y las categorias segun el idioma
  useEffect(() => {
    if (storedLanguage === 'es') {
      setCategoryData(projectsJSON_es.categories);
    } else {
      setCategoryData(projectsJSON_en.categories);
    }
  },[storedLanguage]);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  const updateIndicator = (index) => {
    // Get the indicator element and the clicked tab
    const indicator = indicatorRef.current;
    const clickedTab = document.getElementById(`tab-${index}`);
        
    if(indicator && clickedTab) {
      // Calculate the indicator width and left position
      const tabRect = clickedTab.getBoundingClientRect();
      const parentRect = clickedTab.parentElement.getBoundingClientRect();
      
      indicator.style.width = `${tabRect.width}px`;
      indicator.style.height = `${tabRect.height}px`;
      indicator.style.left = `${tabRect.left - parentRect.left}px`;
      indicator.style.top = `${tabRect.top - parentRect.top}px`;
    }
  
  // p
    // Remove 'texto_blanco' class from all tabs
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("text-white");
    });

    // Add 'texto_blanco' class to the clicked tab
    if (clickedTab) {
      clickedTab.classList.add("text-white");
    }
  };
  
  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño de la pantalla
    const handleResize = () => {
      updateIndicator(activeTab);
    };
    // Agregar un event listener al evento 'resize' del objeto window
    window.addEventListener("resize", handleResize);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    updateIndicator(activeTab);
  });
  
  return(
    <>
      {/* instructions */}
      <p className="mt-5 mb-7 mx-auto text-center w-[90%] font-bold text-pink_color2">
        {t('projects.select_category')}:
      </p>

      {/* Tabs */}
      <div
        className="relative flex space-x-4 shadow-2xl shadow-900/20 nav nav-pills h-[180px] my-0 mx-auto rounded-[50px]
        bg-container_color4 overflow-hidden md:h-[4.7rem] lg:max-w-screen-lg"
      >
        <div className="flex w-full flex-wrap md:flex-nowrap">
        
          {/* Floating active tab Indicador */}
          <div ref={indicatorRef} className="indicator rounded-full shadow-md"></div>
          
          {/* Tab buttons */}
          {categoryData.map((category, index) => {
            return (
              <button
                key={index}
                id={`tab-${index + 1}`}
                className="w-full tab nav-item nav-link hover:underline hover:decoration-link_color_hover text-dark_link_color
                  hover:text-dark_link_color_hover transition-all duration-300"
                onClick={() => handleTabClick(index+1)}
              >
                <span className="text-lg md:text-base lg:text-xl font-bold md:font-bold">
                  {category.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenido de las pestañas */}
      <div className='mt-8'>
      
        {categoryData.map((category, index) => {
          return (
            // contenido de cada categoria de tabs
            <ProjectTabContent
              key = { index }
              index = { index }
              activeTab = { activeTab }
              categoryData = { category }
            />
          )
        })}
        
      </div>

    </>
  );
}

export default ProjectTab;