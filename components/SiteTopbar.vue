<template>
    <nav class="site-topbar">
        <div class="topbar-inner">

            <div class="topbar-links">
                <a href="mailto:marceloxp@gmail.com" class="topbar-link" title="marceloxp@gmail.com">
                    <svg class="topbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M2 7l10 7 10-7"/>
                    </svg>
                    <span class="topbar-link-label">marceloxp@gmail.com</span>
                </a>

                <span class="topbar-sep"></span>

                <a href="https://www.linkedin.com/in/marceloxp" target="_blank" rel="noopener noreferrer" class="topbar-link" title="LinkedIn">
                    <svg class="topbar-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span class="topbar-link-label">LinkedIn</span>
                </a>
            </div>

            <div class="topbar-lang">
                <NuxtLink to="/" class="topbar-flag" :class="{ 'topbar-flag--active': lang === 'en' }" :title="labels?.change_language_pt || 'English'">🇺🇸</NuxtLink>
                <NuxtLink to="/pt" class="topbar-flag" :class="{ 'topbar-flag--active': lang === 'pt' }" :title="labels?.change_language_en || 'Português'">🇧🇷</NuxtLink>
            </div>

        </div>
    </nav>
</template>

<script setup>
defineProps(['lang', 'labels'])
</script>

<style scoped>
.site-topbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.topbar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.topbar-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.topbar-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.15s;
}

.topbar-link:hover { color: rgba(255, 255, 255, 0.9); }

.topbar-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
}

.topbar-sep {
    width: 1px;
    height: 16px;
    background: rgba(255, 255, 255, 0.15);
}

.topbar-lang {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.topbar-flag {
    font-size: 1.25rem;
    opacity: 0.3;
    text-decoration: none;
    transition: opacity 0.15s, transform 0.15s;
    line-height: 1;
}

.topbar-flag:hover   { opacity: 0.75; transform: scale(1.1); }
.topbar-flag--active { opacity: 1; }

@media (max-width: 520px) {
    .topbar-link-label { display: none; }
    .topbar-icon { width: 16px; height: 16px; }
}
</style>