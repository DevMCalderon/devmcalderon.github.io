import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioContext = createContext(null);

const PortfolioProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [projectData, setProjectData] = useState({
    category: null,
    project: null,
  });

  const [projectsJSON, setProjectsJSON] = useState(
    i18n.getResource(i18n.language, 'projects')
  );

  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      const data = i18n.getResource(lng, 'projects');
      setProjectsJSON(data);
    };

    i18n.on('languageChanged', handleLanguageChanged);
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  // Para breadcrumb
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <PortfolioContext.Provider
      value={{ projectData, setProjectData, projectsJSON, currentURL }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioProvider, PortfolioContext };
