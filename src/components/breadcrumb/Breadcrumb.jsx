import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BreadCrumb = ({ classes }) => {
  const location = useLocation();
  const url=location.pathname;
  
  //split the actual url using the '/' separator when crumb is not an empty string
  const crumbs = url.split('/')
    .filter(crumb => crumb !== '');
  
  // Inicializa el array de elementos del breadcrumb con el enlace a la página de inicio
  const breadcrumbItems = [{ to: '/', label: 'inicio' }];
  
  let currentUrl = '';  
  
  // Itera sobre las partes de la URL y crea dinámicamente los elementos del breadcrumb
  crumbs.forEach((crumb, index) => { 
    // Construye la URL actual
    currentUrl += `/${crumb}`;
    
    // Agrega el elemento al breadcrumb
    breadcrumbItems.push({ to: currentUrl, label: crumb });
  }, [location.pathname]);
 
  return (
    <>
      <nav className={`${classes} text-start italic mb-8 text-text_dark-gray bg-transparent px-7 py-[1.2rem] rounded-[1.2rem]
        w-fit border-solid border-[1px] border-neon_color1`}
      >
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.to}>
            <Link to={item.to}
              className='link px-2'>
              {item.label}
            </Link>
            { index < breadcrumbItems.length - 1 && (<span className='normal_font_family_aux text-white'> {'/'} </span>) }
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}

export default BreadCrumb;