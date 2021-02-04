const { join } = require('path')

export default function (moduleOptions) {
  const options = this.options.hbp || moduleOptions

  if (!options.base_url) {
    throw new Error('No base_url defined in nuxt.config.hbp')
  }

  // Set use_cookies as a string, because the plugin can't read boolean values
  options.use_cookies = options.use_cookies ? 'true' : 'false'

  this.addPlugin({
    src: join(__dirname, './plugin.js'),
    filename: 'hbp-module.js',
    options
  })
}
