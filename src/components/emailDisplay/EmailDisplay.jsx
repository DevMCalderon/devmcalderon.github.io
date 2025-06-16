import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import MainButton from "@/components/uI/MainButton";
import CustomHeader from '@/components/uI/customHeader/CustomHeader';

import emailImg from '@/assets/img/icons/email.png'

const EmailDisplay = () => { 
  const [ t] = useTranslation("global");
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const emailRef = useRef(null);
  
  const mostrarNotificacion = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };


  const copyToClipboard = () => {
    // seleccionar el input y copiar el contenido
    emailRef.current.select();
    document.execCommand('copy');
    
    mostrarNotificacion(t(`contact.email_copied`));
    
    // deseleccionar el input y quitar el focus
    emailRef.current.blur();
    window.getSelection()?.removeAllRanges();
  };
  
  return(
    <section className='w-full lg:w-10/12 mx-auto'>
      <div 
        className="bg-gradient-to-t from-[#0f0f222a] to-[#0303466d] mt-11 pt-7 pb-8 rounded-[6rem] text-center px-0 lg:px-10
          border-[1.5px] border-solid border-border_color1 backdrop-blur-[0.15rem]"
      >
        {/* title */}
        <CustomHeader
          align={"center"}
          className={"text-[#91d3ff]"}
          text={t(`contact.copy_email_header`)}
        />
        
        <img src={emailImg} alt="email_img" className='h-40 mx-auto mb-6' />
        
        {/* description */}
        <p className='w-10/12 mx-auto text-md mb-5'>{t(`contact.copy_email`)} 😉</p>
      
        {/* email input and copy button */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4">
          <div className='md:w-6/12'>
  
            {/* email input */}
            <input
              className='text-center overflow-hidden text-ellipsis bg-[#16104d] text-[#dcfaff] cursor-default w-full border-1 border-solid border-[#fff]
              rounded-[20px] py-4 px-6 font-normal text-lgbase tracking-[0.8px] transition-all duration-300 ease-in-out'
              name={'contactEmail'}
              readOnly
              ref={emailRef}
              type={'text'}
              value={contactEmail}
            />
          </div>
            
          {/* copy button */}
          <div className='mt-3 lg:mt-0'>
            <MainButton 
              onClick={copyToClipboard}
              text={t(`default.copy`)}
            />
          </div>
            
        </div>
      </div>
    </section>
  );
}

export default EmailDisplay;