<template>
    <footer class="py-5 rounded-2xl">
        <div class="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] grid-rows-[1fr] gap-y-[10px] gap-x-[10px]">
            <div class="row-1 row-2 col-1 col-2 text-center">
                <p>
                    {{ labels.contact }}
                </p>
                <p>
                    <a href="mailto:marceloxp@gmail.com" class="text-blue-500">marceloxp@gmail.com</a>
                </p>
            </div>
            <div class="row-1 row-2 col-2 col-3 text-center">
                <p>
                    {{ labels.change_language }}
                </p>
                <p>
                    <NuxtLink v-if="lang === 'en'" to="/pt" class="tooltip text-xl" :data-tip="labels.change_language_en">🇧🇷
                    </NuxtLink>
                    <NuxtLink v-if="lang === 'pt'" to="/" class="tooltip text-xl" :data-tip="labels.change_language_pt">🇺🇸
                    </NuxtLink>
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const { lang, labels } = defineProps(['lang', 'labels'])
</script>

<style scoped>
footer {
    background-color: #27252573;
}
</style>