const defaultTheme = require('tailwindcss/defaultTheme');

function colorWithOpacity(variableName) {
  return ({ opacityValue }) => {
    if (!opacityValue) {
      return `rgb(var(${variableName}))`;
    }
    return `rgba(var(${variableName}), ${opacityValue})`;
  };
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        nunito: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      width: {
        110: '28rem',
        124: '32rem',
      },
      colors: {
        primary: colorWithOpacity('--primary'),
        secondary: colorWithOpacity('--secondary'),
        "youtube-black-primary":colorWithOpacity('--youtube-black-primary'),
        "youtube-black-secondary":colorWithOpacity('--youtube-black-secondary'),
        "youtube-red":colorWithOpacity('--youtube-red'),
        "youtube-accent-grey":colorWithOpacity('--youtube-accent-grey'),
        "youtube-highlight-grey":colorWithOpacity('--youtube-highlight-grey'),
        accent: {
          orange: colorWithOpacity('--accent-orange'),
          grey: colorWithOpacity('--accent-grey'),
        },
      },
      fontSize: {
        '10xl': ['16rem', '1'],
        '2xs': ['0.65rem', '0.75rem'],
        '3xs': ['0.50rem', '0.65rem'],
       
      },
      backgroundImage: {
        'money-pattern': "url('/src/assets/emilio-takas-_GNVwZJv-Jo-unsplash-lg.jpg')",
      },
      animation: {
        'click-ping': 'click-ping 0.75s linear',
      },
      keyframes: {
        'click-ping': {
          '0%': { 'border-color': 'rgb(70 70 70)' },
          '100%': { 'border-color': 'transparent' },
        }
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
      textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
      translate: ["responsive", "hover", "focus", "group-hover", "group-focus"],
      scale: ["responsive", "hover", "focus", "group-hover", "group-focus"],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide'), require("tailwindcss-nested-groups"), function ({addUtilities}) {
    const extendLineThrough = {
        '.line-through': {
            'textDecoration': 'line-through',
            'text-decoration-color': '#3854a6',
            'text-decoration-thickness': '2px'
        },
    }
    addUtilities(extendLineThrough)
}],
}
