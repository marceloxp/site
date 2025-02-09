<template>
    <div class="tech-icon h-32 w-32 p-3 rounded-lg shadow text-center flex flex-col items-center justify-center">
        <img :src="`https://cdn.simpleicons.org/${tech.toLowerCase()}`" alt="`${tech} Logo`" class="w-12 h-12 mb-2" />
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