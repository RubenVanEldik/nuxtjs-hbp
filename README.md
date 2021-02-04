# @nuxtjs/hbp

Nuxt.js wrapper for [nhost-js-sdk](https://github.com/nhost/nhost-js-sdk). This wrapper creates global `$auth` and `$storage` methods which make it possible to easily handle auth and storage with [hasura-backend-plus](https://nhost.github.io/hasura-backend-plus/) from everywhere in the app.

## Setup

### Installation

`$ npm install @nuxtjs/hbp`

or

`$ yarn add @nuxtjs/hbp`

### Nuxt.config

Add the module to the modules section and add any


```js
// nuxt.config.js

export default {
  modules: [
    '@nuxtjs/hbp',
  ],
  hbp: {
    base_url: '', // Required
    use_cookies: true, // Optional, default is false
    refresh_interval_time: 30 * 60 * 1000, // Optional
    client_storage_type: 'web' // Optional
  }
}
```


## Usage
All nhost-js-sdk methods are gloabally available via `this.$auth` and `this.$storage`. For example, use `this.$auth.login(email, password)` to login.

See the [auth](https://docs.nhost.io/libraries/nhost-js-sdk#auth) and [storage](https://docs.nhost.io/libraries/nhost-js-sdk#storage) section on the nhost-js-sdk site for all available methods.

## Documentation

[https://docs.nhost.io/libraries/nhost-js-sdk](https://docs.nhost.io/libraries/nhost-js-sdk)
