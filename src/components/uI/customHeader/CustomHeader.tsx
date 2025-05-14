import clsx from "clsx";

type CustomHeaderProps = {
  emoji?: string;
  text: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const CustomHeader = ({ emoji, text, align, className }: CustomHeaderProps) => (
    <h2
      className={clsx('text-3xl mb-3',
        {
          'lg:text-left': align==='left',
          'lg:text-center': align==='center',
          'lg:text-right': align==='right',
        },
        className
      )}
    >
      {emoji ? (
        <>
          <span className='emoji_size'>{emoji} </span>
          {text}
          <span className='emoji_size'> {emoji}</span>
        </>
      ) : (
        <>{text}</>
      )}
    </h2>
  );

export default CustomHeader;