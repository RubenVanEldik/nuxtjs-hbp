import { createClient } from 'nhost-js-sdk'

export default function (context, inject) {
  const options = {
    baseURL: '<%= options.base_url %>',
    use_cookies: '<%= options.use_cookies %>' === 'true',
    refresh_interval_time: +'<%= options.refresh_interval_time %>' || null,
    client_storage_type: '<%=options.client_storage_type %>' || undefined
  }

  const { auth, storage } = createClient(options)

  inject('auth', auth)
  inject('storage', storage)
}
