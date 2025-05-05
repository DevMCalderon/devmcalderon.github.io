import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

import MailchimpForm from "@/components/mailchimpForm/MailchimpForm";
import '@/components/footer/Footer.css'
import SocialIconsSmall from '@/components/socialIconsSmall/SocialIconsSmall';

import logo from '@/assets/img/logo.png';

const Footer = () => {
  const [ t] = useTranslation("global");
  let location = useLocation();
  // console.log(location.pathname)
  return(
    <footer className='footer bg-container_color6 px-6 md:px-14 lg:px-20'>
      <div className='container mx-auto pt-16 pb-16 lg:max-w-screen-3xl mx-auto'>
        <div className='flex flex-wrap items-center'>
          {location.pathname==='/' && <MailchimpForm />}
          <div className='w-full md:w-1/2 flex'>
            <img className='max-w-[80px] max-h-auto mr-4' src={logo} alt="logo-image" />
            <span className='text-3xl self-center'>Martín Calderón</span>
          </div>
          <div className='w-full md:w-1/2 text-end'>
            <SocialIconsSmall />
            <p className="text-lg"> {t(`footer.copyright`)}.</p>
            <p className="text-lgbase"> {t(`footer.technologies_used`)}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 