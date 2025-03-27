import { Outlet, useLocation } from "react-router-dom";

import { ArticleProjectsContext } from '@/contexts/ArticleProjectsContext'
import projectsJSON from '@/data/en/projects'
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const ArticleLayout = () => {
  const location = useLocation();  
  const URL = location.pathname; // Obtén la URL actual

  return(
    <>
      <NavBar />
      <div className="app-container" id="top">
        <ArticleProjectsContext.Provider value={{ projectsJSON, URL }}>
          <Outlet />
        </ArticleProjectsContext.Provider>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}

export default ArticleLayout;