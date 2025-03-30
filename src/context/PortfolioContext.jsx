import { createContext, useState } from 'react';

const PortfolioContext = createContext("");

const PortfolioProvider = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [projectsData, setProjectsData] = useState([]);

  return (
    <PortfolioContext.Provider
      value={{ activeProject, projectsData, setProjectsData }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export { PortfolioProvider, PortfolioContext };