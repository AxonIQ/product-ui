const production = !process.env.ROLLUP_WATCH;
const defaultConf = require('../../tailwind.config');

module.exports = {
  ...defaultConf,
  content: [
    "../core/src/**/*.svelte",
    './src/**/*.{html,js,svelte,ts}',
  ],
  plugins: [
    require('tailwindcss-global-dark')
  ],
}
