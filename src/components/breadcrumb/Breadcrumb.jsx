import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = ({ classes }) => {
  const url=location.pathname;
  // p
  // console.log('slug', getSlugFromURL(url));
  
  //split the actual url using the '/' separator when crumb is not an empty string
  const crumbs = url.split('/')
    .filter(crumb => crumb !== '');
  
  // Inicializa el array de elementos del breadcrumb con el enlace a la página de inicio
  const breadcrumbItems = [{ to: '/', label: 'Home' }];
  
  let currentUrl = '';  
  // Itera sobre las partes de la URL y crea dinámicamente los elementos del breadcrumb
  crumbs.forEach((crumb, index) => { 
    // Construye la URL actual
    currentUrl += `/${crumb}`;
    
    // console.log(crumb)  
    // console.log('url from slug', getURLFromSlug(crumb))
  
    // Agrega el elemento al breadcrumb
    breadcrumbItems.push({ to: currentUrl, label: crumb });
  }, []);

 
  
  return(
    <>
      <nav className={`${classes} text-start italic mb-8 text-text_dark-gray bg-transparent px-7 py-[1.2rem] rounded-[1.2rem]
        w-fit border-solid border-[1px] border-neon_color1`}
      >
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to}
              className='text-[20.5px] text-blue-300 hover:text-link_color_hover hover:underline px-[0.8rem]'>
              {item.label}
              {/* {t(`navbar.${item.label}`)} */}
            </Link>
            { index < breadcrumbItems.length - 1 && (<span className='normal_font_family_aux text-white'> {'/'} </span>) }
            {/* {' / '} */}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}

export default BreadCrumb;