const defaultConf = require('../../tailwind.config');

module.exports = {
  ...defaultConf,
  content: [
    "../core/src/**/*.svelte",
    "./src/**/*.svelte",
  ],
}