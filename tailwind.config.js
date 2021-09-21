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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}