import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import global_es from '@/translations/es/global.json'
import global_en from '@/translations/en/global.json'

import projectsJSON_en from '@/data/en/projects.json'
import projectsJSON_es from '@/data/es/projects.json'

import veterinaryJSON_es from '@/translations/es/projectArticles/veterinary.json'
import veterinaryJSON_en from '@/translations/en/projectArticles/veterinary.json'



i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    // lng: 'en', // Establece el idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo en caso de que falte una traducción
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        global: global_es,
        projects: projectsJSON_es,
        projectVeterinary: veterinaryJSON_es
      },
      en: {
        global: global_en,
        projects: projectsJSON_en,
        projectVeterinary: veterinaryJSON_en
      }
    }
  });

export default i18n;