// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', '@nuxt/image'],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
    runtimeConfig: {
        public : {
            baseURL: process.env.NUXT_BASE_URL || 'https://marceloxp.github.io/site',
        },
    },
    app: {
        baseURL: '/site/',
        head: {
            title: 'MarceloXP - Desenvolvedor Full Stack',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },
    },
    nitro: {
        preset: 'github_pages'
    }
})