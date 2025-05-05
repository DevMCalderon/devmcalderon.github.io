import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import './TypeAnimation.css'

function TypedText(typeAnimationArray) {
  const typedRef = useRef(null);
  
  const Textarray = Object.values(typeAnimationArray);
  
  useEffect(() => {
    const options = {
      strings: [... Textarray],
      typeSpeed: 80, // Velocidad de escritura en milisegundos
      backSpeed: 25, // Velocidad de borrado en milisegundos
      loop: true, // Repetir el ciclo
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // Destruir Typed.js al desmontar el componente
      };
    }
  }, [typeAnimationArray]);

  return <span className='wrap text-highlighted_text_color' ref={typedRef} ></span>;
}

function App(typeAnimationArray) {
  return (
    <div className="App">
      <TypedText {... typeAnimationArray}/>
    </div>
  );
}

export default App;