<template>
  <div class="animate-on-scroll" ref="element">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const element = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, {
    rootMargin: '0px 0px -100px 0px'
  })

  if (element.value) observer.observe(element.value)
})
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
