import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MainButton from "@/components/uI/MainButton";

import NotFoundTranparentImg from '../../assets/img/404/404_transparent.png'

const NotFound = () => {
  const [ t ] = useTranslation("global");
  
  return(
    <>
      <div className="simple_background flex h-screen justify-center items-center text-[white]">
        <div>
          <h2 className='text-link_disabled_color text-5xl mb-5'>
            {t('default.not_found_title')}
          </h2>
   
          <img src={NotFoundTranparentImg} alt='Not_Found_Image' className="w-[450px] mx-auto mb-6" />
     
          <p className='text-center text-[#ddd] mb-6'>{t('default.not_found_message')}</p>
  
          <Link
          to="/"
          >
            <MainButton 
              onClick={() => {}}
              text= {t('default.not_found_button')}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;