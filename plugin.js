import nhost from 'nhost-js-sdk'

export default function (context, inject) {
  const options = {
    base_url: '<%= options.base_url %>',
    use_cookies: '<%= options.use_cookies %>' === 'true',
    refresh_interval_time: +'<%= options.refresh_interval_time %>' || null,
    client_storage_type: '<%=options.client_storage_type %>' || undefined
  }

  nhost.initializeApp(options)

  inject('auth', nhost.auth())
  inject('storage', nhost.storage())
}
