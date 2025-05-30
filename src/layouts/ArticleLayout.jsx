import { Outlet } from "react-router-dom";

import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import BreadCrumb from "@/components/breadcrumb/Breadcrumb";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

const ArticleLayout = () => (
  <>
    {/* auxiliary container to return to top */}
    <div className="app-container bg-container_color7" id="top">
      {/* header */}
      <NavBar hasBackgroundColor={true} />
      
      {/* container */}
      <div className="shadow-2xl text-white mt-5">
      
        {/* container to center content */}
        <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto">
        
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

export default ArticleLayout;