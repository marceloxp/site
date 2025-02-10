<template>
        <Carousel v-bind="carouselConfig">
            <Slide v-for="project in projects" :key="project.name">
                <Project :project="project" />
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const { projects } = defineProps(['projects'])

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    breakpoints: {
        1360: {
            itemsToShow: 3
        },
        1064: {
            itemsToShow: 2
        }
    }
}
</script>

<style>
.carousel__icon {
    fill: white;
}
</style>