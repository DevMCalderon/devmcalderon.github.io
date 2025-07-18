import { useTranslation } from 'react-i18next';

import SocialIconsSmall from '@/components/socialIconsSmall/SocialIconsSmall';

import logo from '@/assets/img/logo.png';

const Footer = () => {
  const [t] = useTranslation("global");
  
  return (
    <footer className='footer px-6 md:px-14 lg:px-20'>
      <div className='container mx-auto pt-16 pb-16 lg:max-w-screen-3xl mx-auto flex flex-wrap items-center'>
        
        <div className='w-full md:w-1/2 flex'>
          <img className='max-w-[4rem] max-h-auto mr-4' src={logo} alt="logo-image" />
          <span className='text-lg self-center'>{t(`footer.copyright`)}</span>
        </div>
        
        <div className='w-full md:w-1/2 text-end'>
          <SocialIconsSmall />
          
          <p className="text-base mt-3 md:mt-5"> {t(`footer.technologies_used`)}</p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer; 