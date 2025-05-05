import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import BreadCrumb from "@/components/Breadcrumb/Breadcrumb";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const ArticleLayout = () => {
  return(
    <>
      {/* auxiliary container to return to top */}
      <div className="app-container bg-container_color7" id="top">
        {/* header */}
        <NavBar hasBackgroundColor={true} />
        
        {/* container */}
        <div className="min-h-screen shadow-2xl text-white mt-5">
        
          {/* container to center content */}
          <div className="w-9/12 mx-auto">
          
          <BreadCrumb />

          <Outlet />
          
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