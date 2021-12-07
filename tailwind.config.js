const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      ox: '#21252B',
      rhino: '#434A56',
      elephant: '#A1A4AA',
      seal: '#F5F6F6',
      dove: '#FFFFFF',
      fox: '#F35C00',
      peacock: '#1374CF',

      "primary-disabled": "#89b9e7",
      "secondary-disabled": "#f5f6f6"
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'button': '130px',
    },
    boxShadow: {
      'button': `0 0 0 2px #fff, 0 0 4px 3px #434A56`,

      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'light': {
          'primary': '#1374CF',
          'primary-focus': '#4e97db',
          'primary-content': '#F5F6F6',
          'primary-disabled': '#89b9e7',

          'secondary': '#F5F6F6',         /* Secondary color */
          'secondary-focus': '#F5F6F6',   /* Secondary color - focused */
          'secondary-content': '#434A56', /* Foreground content color to use on secondary color */

          'accent': '#37cdbe',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#434A56',           /* Neutral color */
          'neutral-focus': '#434A56',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#e5e5e5',          /* Base color of page, used for blank backgrounds */
          'base-200': '#f9fafb',          /* Base color, a little darker */
          'base-300': '#d1d5db',          /* Base color, even more darker */
          'base-content': '#434A56',      /* Foreground content color to use on base color */
        }
      }
    ]
  }
}
