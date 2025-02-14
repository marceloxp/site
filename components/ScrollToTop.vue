<template>
    <Transition>
        <div class="relative" v-if="isVisible">
            <button @click="scrollToTop" class="btn btn-active btn-primary rounded-full w-16 h-16 fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform duration-200">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#ffffff"></path> </g></svg>
            </button>
        </div>
    </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const setIsVisible = () => {
    isVisible.value = window.scrollY > 400;
};

// Função de scroll suave
const scrollToTop = () => {
    const easeOutCubic = (t) => (--t) * t * t + 1;
    const startY = window.scrollY;
    const duration = 600;
    const startTime = performance.now();

    const step = () => {
        const progress = (performance.now() - startTime) / duration;
        const amount = easeOutCubic(progress);
        window.scrollTo({ top: startY * (1 - amount) });

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    step();
};

onMounted(() => {
    window.addEventListener('scroll', setIsVisible);
    setIsVisible();
});

onUnmounted(() => {
    window.removeEventListener('scroll', setIsVisible);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
