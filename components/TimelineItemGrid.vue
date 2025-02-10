<template>
    <div v-if="index % 2 !== 0" class="grid grid-cols-[250px_1fr] gap-4">
        <img :src="tech.imageUrl" class="w-full h-auto" />
        <div class="text-left">{{ tech.description }}</div>
    </div>

    <div v-if="index % 2 === 0" class="grid grid-cols-[1fr_250px] gap-4">
        <div class="text-right">{{ tech.description }}</div>
        <img :src="tech.imageUrl" class="w-full h-auto" />
    </div>
</template>

<script setup>
const { tech, index } = defineProps(['tech', 'index'])
</script>
