<template>
    <div class="mx-10">
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure class="px-10 pt-10">
                <img :src="project.image" alt="Shoes" class="rounded-xl w-80 h-40 object-cover" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ project.name }}</h2>
                <p class="line-clamp-3">{{ project.description }}</p>
                <div class="card-actions">
                    <a :href="project.link" target="_blank" class="btn btn-accent">Ver Projeto</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { project } = defineProps(['project']);
</script>

<style scoped></style>