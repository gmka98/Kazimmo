import { defineNuxtPlugin } from '#app'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export default defineNuxtPlugin(() => {
  if (process.server) return

  window.addEventListener('DOMContentLoaded', () => {
    // Menu burger
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    if (burger && nav) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
          link.style.animation = link.style.animation
            ? ''
            : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        })

        burger.classList.toggle('toggle')
      })
    }

    // Inject keyframes
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes navLinkFade {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    `
    document.head.appendChild(style)

    // Swiper slider
    new Swiper('.hero-slider', {
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

    // Scroll-triggered animation
    const scrollObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el)
    })

    // Animated counters
    const speed = 200
    const counters = document.querySelectorAll('.counter')

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target
            const animate = () => {
              const target = +counter.getAttribute('data-target')!
              const count = +counter.textContent!
              const inc = Math.ceil(target / speed)

              if (count < target) {
                counter.textContent = `${Math.min(count + inc, target)}`
                setTimeout(animate, 10)
              } else {
                counter.textContent = `${target}`
              }
            }
            animate()
            observer.unobserve(counter)
          }
        })
      },
      { threshold: 0.8 }
    )

    counters.forEach(counter => {
      counterObserver.observe(counter)
    })

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')!
        if (href.length > 1 && document.querySelector(href)) {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

          if (nav?.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            burger?.classList.remove('toggle')
          }
        }
      })
    })
  })
})
