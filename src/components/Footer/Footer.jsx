import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

import MailchimpForm from "@/components/MailchimpForm/MailchimpForm";
import '@/components/Footer/Footer.css'
import logo from '@/assets/img/logo.png';
import SocialIconsSmall from '@/components/SocialIconsSmall/SocialIconsSmall.jsx';

const smTextSize = 'text-[18.5px]'

const Footer = () => {
  const [ t] = useTranslation("global");
  let location = useLocation();
  // console.log(location.pathname)
  return(
    <footer className='footer px-6 md:px-14 lg:px-20 footer_shadow'>
      <div className='container mx-auto pt-16 pb-16'>
        <div className='flex flex-wrap items-center'>
          {location.pathname==='/' && <MailchimpForm />}
          <div className='w-full md:w-1/2 flex'>
            <img className='max-w-[80px] max-h-auto mr-4' src={logo} alt="logo" />
            <span className='text-3xl self-center'>Martín Calderón</span>
          </div>
          <div className='w-full md:w-1/2 text-end'>
            <SocialIconsSmall />
            <p className={smTextSize}> {t(`footer.copyright`)}.</p>
            <p className={smTextSize}> {t(`footer.technologies_used`)}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 