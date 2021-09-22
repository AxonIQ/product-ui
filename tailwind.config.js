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
      peacock: '#0F53B8',
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
      'button': `0 0 0 2px #fff, 0 0 4px 3px #434A56`
    }
  },
  variants: {
    extend: {
      textDecoration: ['focus-visible']
    },
  },
  plugins: [],
}
