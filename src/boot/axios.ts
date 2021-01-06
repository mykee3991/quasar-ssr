import Vue from 'vue'
import axios, { AxiosInstance } from 'axios';
import { Cookies, uid } from 'quasar'
const api = "https://jsonplaceholder.typicode.com/"

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

// let axiosInstance = axios.create({
//   baseURL: 'https://api.example.com'
// })

export default async function ({ app, store, router, ssrContext }: { app: any, store: any, router: any, ssrContext: any }) {
  let instance: any = axios.create({
    baseURL: api
  })

  const cookies: any = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  instance.interceptors.request.use(function (config: any) {
    const token = cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, function (error: any) {
    return Promise.reject(error)
  })

  app.axios = instance
  store.$axios = instance
  router.$axios = instance
}
