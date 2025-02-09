<template>
    <div class="container mx-auto p-6">
        <header class="text-center">
            <h1 class="text-3xl font-bold">MarceloXP - Desenvolvedor Full Stack</h1>
            <p class="text-lg">
                Profissional com mais de 20 anos de experiência em desenvolvimento de software, especializado em PHP,
                Laravel, Node.js, MySQL e PostgreSQL. Foco em soluções escaláveis, segurança e eficiência, com expertise
                em sistemas complexos e integrados. Atuação em logística, TI e publicidade, sempre buscando inovação e
                alto desempenho.
            </p>
        </header>

        <section v-if="data" class="mt-10">
            <ul
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4 justify-center">
                <li v-for="tech in data.skills" :key="tech"
                    class="tech-icon h-32 w-32 p-3 rounded-lg shadow text-center flex flex-col justify-center items-center">
                    <img :src="`https://cdn.simpleicons.org/${tech.toLowerCase()}`" alt="Logo" class="w-12 h-12 mb-2" />
                    <span>{{ tech }}</span>
                </li>
            </ul>
        </section>

        <section v-if="data" class="mt-10">
            <div class="grid md:grid-cols-2 gap-6 mt-4">
                <div v-for="project in data.projects" :key="project.name" class="base-300 p-4 rounded-lg shadow">
                    <h3 class="text-xl font-bold">{{ project.name }}</h3>
                    <p class="text-gray-600">{{ project.description }}</p>
                    <a :href="project.link" target="_blank" class="text-blue-500 mt-2 inline-block"
                        v-if="project.link">Ver Projeto</a>
                </div>
            </div>
        </section>

        <section v-if="data" class="mt-10">
            <div class="grid gap-6 mt-4">
                <div v-for="tech in data.history" :key="tech.period" class="p-4 rounded-lg shadow">
                    <h3 class="text-xl font-bold">{{ tech.period }} | {{ tech.name }}</h3>
                    <p class="text-gray-600">{{ tech.description }}</p>
                </div>
            </div>
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
        { rel: 'preload', href: '/images/background.png', as: 'image' }
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

.tech-icon {
    background-color: #27252573;
}
</style>