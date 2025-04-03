import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import projectsJSON_es from '@/data/es/projects'

const PortfolioContext = createContext(null);

const PortfolioProvider = ({ children }) => {
  const [projectData, setProjectData] = useState({
    category: null,
    project: null,
  });
  
  const location = useLocation();
  // currentURL
  const currentURL = location.pathname;
  
  const projectsJSON = projectsJSON_es;
  
  return (
    <PortfolioContext.Provider
      value={{ projectData, setProjectData, projectsJSON, currentURL }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export { PortfolioProvider, PortfolioContext };