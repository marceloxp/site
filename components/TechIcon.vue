<template>
    <div class="tech-icon w-24 h-24  md:h-32 md:w-32 rounded-lg shadow text-center flex flex-col items-center justify-center">
        <img :src="`https://cdn.simpleicons.org/${tech.toLowerCase()}`" alt="`${tech} Logo`" class="w-12 h-12 mb-1 md:mb-2" />
        <span>{{ tech }}</span>
    </div>
</template>

<script setup>
const { tech } = defineProps(['tech']);
</script>

<style scoped>
.tech-icon {
    background-color: #27252573;
}
</style>