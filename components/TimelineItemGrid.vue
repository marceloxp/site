<template>
    <div v-if="index % 2 !== 0" class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        <img :src="tech.imageUrl" class="order-2 md:order-1 md:w-full md:h-auto" />
        <div class="order-1 md:order-2 text-left">{{ tech.description }}</div>
    </div>

    <div v-if="index % 2 === 0" class="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-4">
        <div class="order-1 text-left md:text-right">{{ tech.description }}</div>
        <img :src="tech.imageUrl" class="order-2 md:w-full md:h-auto" />
    </div>
</template>

<script setup>
const { tech, index } = defineProps(['tech', 'index'])
</script>
