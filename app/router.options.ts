import type { RouterConfig } from '@nuxt/schema'

export default {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue')
        },
        {
            name: 'home-pt',
            path: '/pt',
            component: () => import('~/pages/index.vue')
        }
    ],
} satisfies RouterConfig
