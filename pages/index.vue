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

        <Footer :lang="lang" :labels="data.labels" />
    </div>

    <ScrollToTop />
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const lang = (route.name === 'home-pt') ? 'pt' : 'en'
const api_url = `/api/content/${lang}`

const { data } = await useFetch(api_url)

const url = useRequestURL();
const currentUrl = `${url.origin}${url.pathname}`;
const baseUrl = config.public.baseURL;
const meta_image_src = `${baseUrl}/images/nose-3.png`;

useHead({
    link: [
        { rel: 'preload', href: `${baseUrl}/images/background.png`, as: 'image' },
        { rel: 'preload', href: `${baseUrl}/images/site-header-bg.jpg`, as: 'image' },
    ],
    meta: [
        { name: 'title', content: data.value?.meta?.title },
        { name: 'description', content: data.value?.meta?.description },

        { property: 'og:title', content: data.value?.meta?.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: currentUrl },
        { property: 'og:description', content: data.value?.meta?.description },
        { property: 'og:image', content: meta_image_src },
        
        { property: 'twitter:title', content: data.value?.meta?.title },
        { property: 'twitter:description', content: data.value?.meta?.description },
        { property: 'twitter:image:src', content: meta_image_src },
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
</style>