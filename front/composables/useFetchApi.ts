// @ts-ignore
import type { UseFetchOptions } from 'nuxt/app'
// @ts-ignore
import { defu } from 'defu'
import {useFetch, useRuntimeConfig} from "../.nuxt/imports";

export function useFetchApi<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {

    const config = useRuntimeConfig()

    const defaults: UseFetchOptions<T> = {
        baseURL: config.baseUrl ?? 'http://localhost:8080',
        mode: 'cors',
        redirect: "follow",
        cache: "no-store",

        onRequest({ request, options }) {
            options.headers = {...options.headers, "Access-Control-Allow-Origin": "*"};
            //아직 의문점이 있는 요소. 작동 여부가 제대로 파악이 안됨.
        },

        onResponse (_ctx) {
            // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
        },

        onResponseError (_ctx) {
            // throw new myBusinessError()
        }
    }

    // for nice deep defaults, please use unjs/defu
    const params = defu(options, defaults)

    return useFetch(url, params)
}