<template>
    <div class="card bg-base-100 md:w-96 shadow-sm items-center">
        <NuxtImg :src="project.image" :alt="project.name" class="px-5 py-5 rounded-[2.0rem]" />
        <div class="card-body items-center text-center px-5 py-0 pb-8">
            <h1 class="card-title text-xl">{{ project.name }}</h1>
            <p class="line-clamp-3">{{ project.description }}</p>
            <div class="card-actions">
                <a :href="project.link" target="_blank" class="btn btn-accent">Ver Projeto</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped></style>