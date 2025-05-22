/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom, theme("colors.container_color5"), #0d0436)',
      },
      boxShadow: {
        'large1': '0 20px 25px -20px rgba(0, 0, 0, 0.3)',
        'large2': '0 20px 20px -20px rgba(0, 0, 0, 0.3)',
        'shadowTop': '0px 0px 50px 20px rgba(0, 0, 0, 1)',
      },
      fontSize: {
        'xs': '0.75rem',
        'xxsm': '0.79rem',
        'sm': '0.875rem',
        'mdsm': '0.91rem',
        'base': '1rem',
        'smmd': '1.05rem',
        'lgbase': '1.09rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'neon_green': '#a5ff91',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'highlighted_text_color': '#fcffab',
        'link_color_hover': '#faff5c',
        'border_color1': '#0062ff',
        'link_disabled_color': '#ff8fff',
        'link_disabled_color2': '#cdfbff',
        'container_color7': '#1a2444',
        'container_color2': 'rgb(15, 18, 56)',
        'container_color3': 'rgb(224, 224, 233)',
        'container_color4': '#b9b9e7',
        'container_color5': '#15193e',
        'container_color6': 'rgb(16, 17, 46)',
        
        'border_color2': 'var(--border_color2)',
        'bg_color1': 'var(--bg_color1)',
        'text_dark-gray': 'var(--text_dark-gray',
        'dark_link_color': 'var(--dark_link_color)',
        'dark_link_color_hover': 'var(--dark_link_color_hover)',
        'dark_link_color_hover2': 'var(--dark_link_color_hover2)',
        'pink_color2': 'var(--pink_color2)',
        'default_md_text_size': 'var(--default_md_text_size)',
        'gradient_color1': 'var(--gradient_color1)',
        'gradient_color2': 'var(--gradient_color2)',
        'neon_color1': 'var(--neon_color1)',
        'neon_color2': 'var(--neon_color2)',
        
      },
      fonts: {
        'normal-font-family': 'var(--normal-font-family)',
        'styled-font-family1': 'var(--styled-font-family1)',
        'terminal-font': 'var(--terminal-font)',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
              
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xlNavbar': '1300px',
        // => @media (min-width: 1300px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        
        '3xl': '1800px',
        // => @media (min-width: 1800px) { ... }

        '4xl': '2100px',
        // => @media (min-width: 2100px) { ... }

        '5xl': '2560px', //2k
        // => @media (min-width: 2560px) { ... }
            },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.word-spacing': {
          'word-spacing': '0.2rem',
        },
      })
    }
  ],
}


