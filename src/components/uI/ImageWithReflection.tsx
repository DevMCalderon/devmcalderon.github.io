import clsx from 'clsx';
import React from 'react';

interface ImageWithReflectionProps {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  bothClassName?: string;
  reflectionWidth?: string;
}

const ImageWithReflection = ({ src, alt = 'image', className = '', imageClassName = '', bothClassName='bothClassName-lg', reflectionWidth = 'h-20' }: ImageWithReflectionProps) => {
  return (
    <div className={clsx("relative w-fit", className)}>
      {/* Imagen principal */}
      <img src={src} alt={alt} className={clsx("block w-full", imageClassName, bothClassName)} />

      {/* Contenedor del reflejo */}
      <div className={clsx('relative w-full overflow-hidden', reflectionWidth)}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0) 100%)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        {/* Reflejo con máscara de degradado */}
        <img
          src={src}
          alt={`${alt}`}
          className={clsx("block w-full transform scale-y-[-1] opacity-100 blur-[0.12rem] pointer-events-none", bothClassName)}
        />
      </div>
    </div>
  );
};

export default ImageWithReflection;
