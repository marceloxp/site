<template>
    <div class="container mx-auto px-6 py-4">

        <div id="top-hero" class="hero">
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-left">
                <div class="max-w-3xl">
                    <div class="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                        <!-- Avatar -->
                        <div class="flex justify-center sm:justify-start">
                            <div class="avatar">
                                <div class="rounded-xl overflow-hidden w-48 h-48">
                                    <img src="/images/nose-3.png" class="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <!-- Texto -->
                        <div class="text-center sm:text-left">
                            <h1 class="text-3xl font-bold">MarceloXP</h1>
                            <h2 class="mb-2 text-xl sm:text-xl font-bold">Desenvolvedor Full Stack</h2>
                            <p class="text-xs sm:text-sm md:text-base">
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
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-around justify-items-center">
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

        <footer class="text-center mt-10 text-gray-500">
            <p>Entre em contato: <a href="mailto:marceloxp@gmail.com" class="text-blue-500">marceloxp@gmail.com</a>
            </p>
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