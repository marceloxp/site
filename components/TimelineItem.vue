<template>
    <li>
        <hr v-if="index > 0" />
        <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div :class="item_class">
            <time class="font-mono italic">{{ tech.period }}</time>
            <div class="text-lg font-black">{{ tech.name }}</div>
            {{ tech.description }}
        </div>
        <hr />
    </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['tech', 'index'])

const class_left = 'timeline-start mb-10 md:text-end'
const class_right = 'timeline-end md:mb-10'

const item_class = computed(() => (props.index % 2 === 0 ? class_left : class_right))
</script>

<style scoped></style>
