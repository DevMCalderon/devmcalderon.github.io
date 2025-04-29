import { Tooltip } from 'react-tooltip';

import { IconYouTube, IconLinkedIn, IconGitHub } from '@/components/UI/Icons';
import './SocialIconsSmall.css'

const SocialIcons = () => {
  const imagesArray = [
    {
      id: 1,
      Icon: () => <IconLinkedIn />,
      dataTooltip: 'LinkedIn',
      href: 'https://www.linkedin.com/in/martin-calderon-dev'
    },
    {
      id: 2,
      Icon: () => <IconGitHub />,
      dataTooltip: 'GitHub',
      href: 'https://github.com/DevMCalderon'
    },
    {
      id: 3,
      Icon: () => <IconYouTube />,
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
          className="w-9 h-9 xl:w-11 xl:h-11 mx-1.5 lg:mx-[3px] xl:mx-[3px]"
          data-tooltip-id='myTooltip'
          data-tooltip-content={item.dataTooltip}
          href={item.href}
          target='_blank'
          rel='noreferrer'
        >
          <item.Icon />
        </a>
      ))}
      <Tooltip id={'myTooltip'} place='top' type='dark' effect='solid' style={{fontSize:'17px'}}/>
      </div>
      
    </>
  );
}

export default SocialIcons;