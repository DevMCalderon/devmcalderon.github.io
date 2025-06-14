import { Tooltip } from 'react-tooltip';

import { IconYouTube, IconLinkedIn, IconGitHub } from '@/components/uI/Icons';
import './SocialIconsSmall.css'

const SocialIconsSmall = () => {
  const imagesArray = [
    {
      id: 1,
      Icon: () => <IconLinkedIn className='mr-0' />,
      dataTooltip: 'LinkedIn',
      href: 'https://www.linkedin.com/in/martin-calderon-dev'
    },
    {
      id: 2,
      Icon: () => <IconGitHub className='mr-0' />,
      dataTooltip: 'GitHub',
      href: 'https://github.com/DevMCalderon'
    },
    {
      id: 3,
      Icon: () => <IconYouTube className='mr-0' />,
      dataTooltip: 'Programación para Todos',
      href: 'https://www.youtube.com/channel/UCNy0OJqXOCyhThyXTcLLCJA?sub_confirmation=1'
    },
  ];
  
  return(
    <>
      <div className='socialIconSmall'>
        {imagesArray.map((item, index) => (
          <a 
          key={index}
          className="w-9 h-9 xl:w-11 xl:h-11 mx-1.5 lg:mx-1 xl:mx-[0.3rem]"
          data-tooltip-id='myTooltip'
            data-tooltip-content={item.dataTooltip}
            href={item.href}
            target='_blank'
            rel='noreferrer'
          >
            <item.Icon />
          </a>
        ))}
        <Tooltip id={'myTooltip'} place='top' type='dark' effect='solid' style={{fontSize:'1.05rem'}}/>
    </div>
    </>
  );
};

export default SocialIconsSmall;