import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import EmailDisplay from '@/components/emailDisplay/EmailDisplay';
import CustomHeader from '@/components/uI/customHeader/CustomHeader';
import '@/components/contact/Contact.css'
import ImageWithReflection from "@/components/uI/ImageWithReflection";

import AboutMeImg from '@/assets/img/about-me.gif'

const Contact = () => {
  const [ t] = useTranslation("global");
  
  return(
    
    <section className='bgBannerContacto'>
      <div
        className='contact degradado4 px-6 md:px-6 lg:px-6 xl:px-28 pt-[4rem] pb-[6rem]'
        id="contact"
      >
        <div className='lg:max-w-screen-2xl mx-auto w-full h-full flex flex-wrap items-center'>
            
            {/* contact text */}
            <section className='w-full mt-10 md:mt-0 lg:w-7/12 xl:w-6/12'>
              {/* title and description */}
              <CustomHeader
                align='center'
                emoji='📧'
                text={t(`contact.header`)}
              />
              <p className='mb-5 text-center'> {t(`contact.description`)}</p>
              
              {/* copy email component */}
              <EmailDisplay />
            </section>
          
          {/* contact image */}
          <div className='w-full lg:w-5/12 xl:w-1/2'>
            {/* <img src={contactImg} alt="contact_image" className='contact-img' /> */}
            <ImageWithReflection
              className="opacity-[0.93] w-full md:w-8/12 mx-auto"
              bothClassName="md:rounded-lg border-[0.2rem] border-white"
              reflectionWidth="h-20"
              src={AboutMeImg}
              alt="contact-me-image"
            />
          </div>
          
          {/* thanks for visiting */}
          <section className="mb-[-12rem] w-full mx-auto">
            <div className="bg-container_color3 py-2 md:py-8 px-8 md:px-24 rounded-full w-fit mx-auto">
              <p className="text-2xl text-sky-900 font-bold text-center w-full">{t(`contact.thanks_for_visiting`)}</p>
            </div>
          </section>
        </div>
      </div>
      
      {/* copy email notification */}
      <ToastContainer />
    </section>
  );
}

export default Contact;