import { Outlet, useLocation } from "react-router-dom";

import { ArticleProjectsContext } from '@/contexts/ArticleProjectsContext'
import projectsJSON from '@/data/en/projects'
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import BreadCrumb from "@/components/Breadcrumb/Breadcrumb";

const ArticleLayout = () => {
  const location = useLocation();
  const URL = location.pathname; // Obtén la URL actual

  console.log("provider", URL, projectsJSON);

  return(
    <>
      
      {/* auxiliary container to return to top */}
      <div className="app-container bg-container_color1" id="top">
        {/* header */}
        <NavBar hasBackgroundColor={true} />
        
        {/* container */}
        <div className="min-h-screen shadow-2xl text-white mt-5">
        
          {/* container to center content */}
          <div className="w-9/12 mx-auto">
          
          <BreadCrumb />
            
          <ArticleProjectsContext.Provider value={{ projectsJSON, URL }}>
            <Outlet />
          </ArticleProjectsContext.Provider>
          
          {/* floating button to return to top */}
          <ScrollToTop />
            
          </div>
          
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default ArticleLayout;