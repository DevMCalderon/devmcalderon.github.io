import { useTranslation } from 'react-i18next';

import loadingImg from '@/assets/img/loading1.svg';

const Loading = () => {
  const [ t ] = useTranslation("global");
  
  return(
    <div className='bgBannerLowQuality'>
      <div className='backdrop-blur-2xl w-full h-screen flex flex-col h-screen justify-center items-center'>
          <span className='text-5xl text-center text-sky-300'>
            {t(`default.loading`)}
          </span>
          <img className='mx-auto' src={loadingImg} alt='loading-img' />
      </div>
    </div>
  );
}

export default Loading;