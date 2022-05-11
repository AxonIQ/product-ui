const production = !process.env.ROLLUP_WATCH;

module.exports = {
  content: [
    "./src/**/*.svelte",
  ],
  theme: {
    fontSize: {
      'sm': ['.875rem', '24px'],
      'base': ['1rem', '24px'],
      'lg': ['1.125rem', '24px'],
      'xl': ['1.25rem', '24px'],
      '2xl': ['1.5rem', '24px']
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
      gecko: '#00B7BF',
      mouse: '#ECEDEE',
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
      'toggle-focus': '0 0 0 2px #ffffff, 0 0 4px 3px #434A56',
      'radio-focus': '0 0 0 7px #fff, 0 0 4px 8px #434A56',

      DEFAULT: 'inset 0px 1px 2px rgba(0, 0, 0, 0.25)',
      float: '0px 1px 3px rgba(0, 0, 0, 0.2), 6px 7px 14px rgba(0, 0, 0, 0.1);',
      none: 'none',
    }
  },
  plugins: [],
}
