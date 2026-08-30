<template>
    <div class="tech-icon w-24 h-24  md:h-32 md:w-32 rounded-lg shadow text-center flex flex-col items-center justify-center">
        <NuxtImg :src="iconSrc" :alt="`${tech} Logo`" class="w-12 h-12 mb-1 md:mb-2" />
        <span>{{ tech }}</span>
    </div>
</template>

<script setup>
const { tech } = defineProps(['tech']);

const lightIcons = new Set(['cursor', 'ollama'])

const iconSrc = computed(() => {
    const slug = tech.toLowerCase()
    const color = lightIcons.has(slug) ? '/ffffff' : ''
    return `https://cdn.simpleicons.org/${slug}${color}`
})
</script>

<style scoped>
.tech-icon {
    background-color: #27252573;
}
</style>