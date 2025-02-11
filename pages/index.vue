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
                            <h2 class="mb-2 text-xl sm:text-xl font-bold">Desenvolvedor Full Stack</h2>
                            <p class="text-sm md:text-base">
                                Profissional com mais de 20 anos de experiência em desenvolvimento de software,
                                especializado em PHP, Laravel, Node.js, MySQL e PostgreSQL. Foco em soluções escaláveis,
                                seguras e eficientes, com expertise no desenvolvimento de sistemas complexos e
                                integrados. Atuação nos setores de logística, TI e publicidade, sempre buscando inovação
                                e alto desempenho.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section v-if="data" class="mt-6">
            <h1 class="text-2xl font-semibold text-center mb-8">Habilidades e Tecnologias</h1>
            <ul v-if="data.skills"
                class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-around justify-items-center">
                <li v-for="tech in data.skills" :key="tech">
                    <TechIcon :tech="tech" />
                </li>
            </ul>
        </section>

        <section v-if="data" class="mt-10">
            <h1 class="text-2xl font-semibold text-center mb-8">Projetos</h1>
            <Projects :projects="data.projects" />
        </section>

        <section v-if="data" class="mt-10">
            <h1 class="text-2xl font-semibold text-center mb-8">Jornada Tecnológica</h1>
            <ul v-for="(tech, index) in data.history" :key="tech.period"
                class="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical">
                <TimelineItem :tech="tech" :index="index" />
            </ul>
        </section>

        <footer class="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content items-center p-4 mt-10 text-gray-500">
            <aside class="grid-flow-col items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 8.90027C4.62072 10.7352 8.0418 12 12 12C15.9582 12 19.3793 10.7352 21 8.90027M3 8.90027V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.90027M3 8.90027V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.07989 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V8.90027"
                        stroke="#e7e3e4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p>Entre em contato: <a href="mailto:marceloxp@gmail.com" class="text-blue-500">marceloxp@gmail.com</a>
                </p>
            </aside>
        </footer>
    </div>
</template>

<script setup>
const { data } = await useFetch("/api/site");

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
</style>