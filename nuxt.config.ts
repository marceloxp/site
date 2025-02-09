// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,
    },
    app: {
        head: {
            title: 'MarceloXP - Desenvolvedor Full Stack',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'MarceloXP - Desenvolvedor Full Stack' },
            ],
        },
    },
})
