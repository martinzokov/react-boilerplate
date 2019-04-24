// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
module.exports = module.exports = withCss(withTypescript(withSass({
    cssModules: true,
    webpack: (config) => {
       return config
    }
   })))
