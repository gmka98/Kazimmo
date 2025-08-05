<template>
  <Swiper
    :loop="true"
    effect="fade"
    :autoplay="{ delay: 4000, disableOnInteraction: false }"
    :pagination="{ clickable: true }"
    navigation
    class="hero-slider"
  >
    <SwiperSlide v-for="(slide, i) in slides" :key="i">
      <img :src="slide.image" :alt="slide.alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const slides = [
  { image: '/img/slide1.jpg', alt: 'Slide 1' },
  { image: '/img/slide2.jpg', alt: 'Slide 2' }
]
</script>
