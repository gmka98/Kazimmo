<template>
  <div class="burger" @click="toggleNav">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <ul class="nav-links" :class="{ 'nav-active': navActive }">
    <li v-for="(link, index) in links" :key="index" :style="getLinkStyle(index)">
      <a :href="link.href">{{ link.text }}</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const navActive = ref(false)
const links = ref([
  { href: '#section1', text: 'Section 1' },
  { href: '#section2', text: 'Section 2' },
  { href: '#section3', text: 'Section 3' }
])

const toggleNav = () => {
  navActive.value = !navActive.value
}

const getLinkStyle = (index) => {
  if (!navActive.value) return ''
  return `animation: navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
}
</script>

<style scoped>
.burger { /* your burger style */ }
.nav-links.nav-active { /* your nav open style */ }

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
