

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

// routes.js
export const routes = {
  'Inicio': '/',
  'Home': '/',
  'Projectos': '/proyectos',
  'Projects': '/proyectos',
    "projects-web": '/proyectos/apps-y-plataformas-web',
    "projects-interfaces": '/proyectos/interfaces',
    "projects-contributions": '/proyectos/contribuciones-a-comunidad',
};

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
