

// function to find the name (id) inside the array using the URL
export const getNameByURL = (urlToFind, language) => {
  let routesData=null
  // find the correct language for the data;
  if(language==='en') routesData=routes
  else if(language==='es') routesData=routesES
  
  // find id looking for url
  for (const name in routesData) {
    if (routesData[name] === urlToFind) {
      return name;
    } 
  }
  return null; // default value
};

export const getParentURLByCurrentURL = (URL) => {
  const parts = URL.split('/'); // Divide la URL en partes usando "/" como separador
  return parts.slice(0, -1).join('/'); // Elimina la última parte y vuelve a unirla
}

// function that returns the last part of the URL: it splits url into different parts using '/' as separator and then extracts the last part of the URL array
export const getSlugFromURL = (URL) => {
  const parts = URL.split('/'); 
  return 'slug', parts[parts.length - 1]
}

// p
export const getURLFromSlug = (slug) => {
  for (const key in routes) {
    if (routes[key].endsWith(`/${slug}`)) {
      console.log(`La URL correspondiente al slug "${slug}" es: ${routes[key]}`);
      return key;
    }
  }
  console.log(`No se encontró una URL para el slug "${slug}"`);
  return null; // Devuelve null si el slug no se encuentra en las rutas
}

// p
export const urlRoutes = [
  {URL : '/', label : 'Home'},
  {URL : '/projects', label : 'Projects'},
]

// routes.js
export const routes = {
  'Home': '/',
  'Projects': '/projects',
    'Web Platforms & Applications': '/projects/apps-y-plataformas-web',
    'Apps y Plataformas Web': '/projects/apps-y-plataformas-web',
    'Community Contributions': '/projects/contribuciones-a-comunidad',
    'Contribuciones a Comunidad': '/projects/contribuciones-a-comunidad',
    'Interface Design': '/projects/interfaces-y-prototipos',
    'Diseño de Interfaces': '/projects/interfaces-y-prototipos'
};


// export const routesES = {
//   'Home': '/',
//   'Projects': '/projects',
//     'Apps y Plataformas Web': '/projects/apps-y-plataformas-web',
//     'Diseño de Interfaces': '/projects/designs',
//     'Contribuciones a Comunidad': '/projects/community',
// };

export const articleSlugPathMap = {
  'vetcore-pro': 'veterinary', 
  'smartorder': 'coffeeShop',
  'jobmatch': 'jobVacancies',
  'picconnect': 'uploadImages',
  'edulink': 'schoolTutoring',
  'dasc-uabcs': 'universityInfo',
  'learnplay': 'educationalGames',
}

export const NavbarRoutesHome = [
  {URL: '/#top', name: 'Home'},
  {URL: '/#skills', name: 'Skills'},
  {URL: '/#projects', name: 'Projects'},
  {URL: '/#aboutMe', name: 'About Me'},
]

export const NavbarRoutes = [
  {URL: routes['Home'], name: 'Home'},
  {URL: routes['Projects'], name: 'Projects'},
]
