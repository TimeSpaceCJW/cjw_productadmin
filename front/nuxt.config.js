import bodyParser from 'body-parser'

export default defineNuxtConfig({

    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },

    serverMiddleware: [
        bodyParser.urlencoded({extended: true}),
    ],
})