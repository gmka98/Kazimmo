<template>
  <span ref="counter">{{ displayedValue }}{{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  target: Number,
  speed: { type: Number, default: 200 },
  suffix: { type: String, default: '' }
})

const counter = ref(null)
const displayedValue = ref(0)

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.8 })

  if (counter.value) observer.observe(counter.value)
})

function animate() {
  const inc = Math.ceil(props.target / props.speed)
  const update = () => {
    if (displayedValue.value < props.target) {
      displayedValue.value = Math.min(displayedValue.value + inc, props.target)
      setTimeout(update, 10)
    } else {
      displayedValue.value = props.target
    }
  }
  update()
}
</script>
