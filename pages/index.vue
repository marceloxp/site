<template>
    <div class="container mx-auto px-6 py-4">
        <div id="top-hero" class="hero">
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-left">
                <div class="max-w-3xl">
                    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                        <div class="flex justify-center sm:justify-start">
                            <div class="avatar">
                                <div class="rounded-xl overflow-hidden w-48 h-48">
                                    <NuxtImg src="/images/nose-3.png" class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div class="text-center sm:text-left">
                            <h1 class="text-3xl font-bold">MarceloXP</h1>
                            <h2 class="mb-2 text-xl sm:text-xl font-bold">{{ data.labels.developer }}</h2>
                            <p class="text-sm md:text-base">
                                {{ data.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section v-if="data" class="mt-6">
            <h1 class="text-2xl font-semibold text-center mb-8">{{ data.labels.habilities }}</h1>
            <ul v-if="data.skills"
                class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-around justify-items-center">
                <li v-for="tech in data.skills" :key="tech">
                    <TechIcon :tech="tech" />
                </li>
            </ul>
        </section>

        <section v-if="data" class="mt-10">
            <h1 class="text-2xl font-semibold text-center mb-8">{{ data.labels.projects }}</h1>
            <Projects :projects="data.projects" />
        </section>

        <section v-if="data" class="mt-10 mb-10">
            <h1 class="text-2xl font-semibold text-center mb-8">{{ data.labels.journey }}</h1>
            <ul v-for="(tech, index) in data.history" :key="tech.period"
                class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
                <TimelineItem :tech="tech" :index="index" />
            </ul>
        </section>

        <footer class="rounded-b-lg p-5">
            <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 w-6/12 mx-auto">
                <div class="flex justify-center sm:justify-start">
                    <p><a href="mailto:marceloxp@gmail.com" class="text-blue-500">marceloxp@gmail.com</a>
                    </p>
                </div>
                <div class="text-center md:text-right">
                    <p>
                        <NuxtLink v-if="lang === 'en'" to="/pt" class="tooltip text-xl" data-tip="Mudar Linguagem">🇧🇷
                        </NuxtLink>
                        <NuxtLink v-if="lang === 'pt'" to="/" class="tooltip text-xl" data-tip="Change Language">🇺🇸
                        </NuxtLink>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const route = useRoute()

const lang = (route.name === 'home-pt') ? 'pt' : 'en'
const api_url = `/api/content/${lang}`

const { data } = await useFetch(api_url)

useHead({
    link: [
        { rel: 'preload', href: '/images/background.png', as: 'image' },
        { rel: 'preload', href: '/images/site-header-bg.jpg', as: 'image' },
    ],
    htmlAttrs: [{ 'data-theme': 'dark' }],
})
</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #000;
    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
}

#top-hero {
    background-image: url(/images/site-header-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

footer {
    background-color: #27252573;
}
</style>