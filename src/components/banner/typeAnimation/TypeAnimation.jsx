import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import clsx from 'clsx';

import './TypeAnimation.css';

function TypeAnimation({ words, className }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 80,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [words]);

  return (
    <div className={clsx(className)}>
      <span ref={typedRef} />
    </div>
  )
}

export default TypeAnimation;
