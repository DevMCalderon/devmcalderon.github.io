import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const useInitLanguage = () => {
  const [ t, i18n ] = useTranslation("global");
  
  // get navigator default langugage & convert it to a compatible code to set it as the app language
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    
    // if doesn't exist
    if(!storedLanguage) {
      const languageCode = navigator.language;
      const parts = languageCode.split('-');
      const newLng = parts[0];
      
      i18n.changeLanguage(newLng);
      localStorage.setItem('language', newLng);
      
    } else {
      i18n.changeLanguage(storedLanguage);
    }
  }, []); 

};

export default useInitLanguage;