import { defineNuxtPlugin } from '#app'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

export default defineNuxtPlugin(() => {
  if (process.server) return

  if (typeof window === 'undefined') return

  window.addEventListener('DOMContentLoaded', () => {
    // Menu burger
    const burger = document.querySelector('.burger') as HTMLElement | null
    const nav = document.querySelector('.nav-links') as HTMLElement | null
    const navLinks = document.querySelectorAll('.nav-links li')

    if (burger && nav) {
      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
          const el = link as HTMLElement
          el.style.animation = el.style.animation
            ? ''
            : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        })

        burger.classList.toggle('toggle')
      })
    }

    // Inject keyframes for menu animation
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

    // Initialize Swiper slider
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

    // Scroll-triggered animations
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
            const counter = entry.target as HTMLElement
            const target = +counter.getAttribute('data-target')!
            let count = +counter.textContent!

            const updateCounter = () => {
              const increment = Math.ceil(target / speed)
              if (count < target) {
                count = Math.min(count + increment, target)
                counter.textContent = `${count}`
                setTimeout(updateCounter, 10)
              } else {
                counter.textContent = `${target}`
              }
            }

            updateCounter()
            observer.unobserve(counter)
          }
        })
      },
      { threshold: 0.8 }
    )

    counters.forEach(counter => {
      counterObserver.observe(counter)
    })

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = (this as HTMLAnchorElement).getAttribute('href')
        if (href && href.length > 1 && document.querySelector(href)) {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

          // Close mobile menu if open
          if (nav?.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            burger?.classList.remove('toggle')
          }
        }
      })
    })
  })
})
