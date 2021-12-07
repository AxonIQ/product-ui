const production = !process.env.ROLLUP_WATCH;
const defaultConf = require('../../tailwind.config');

module.exports = {
  ...defaultConf,
  purge: {
    content: [
      "../core/src/**/*.svelte",
      "./src/**/*.svelte",
    ],
    safelist: [
      /data-theme$/,
    ],
    enabled: production // disable purge in dev
  },
}
