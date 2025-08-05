export default defineNuxtPlugin(() => {
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = (this as HTMLAnchorElement).getAttribute('href')
        if (href && href.length > 1 && document.querySelector(href)) {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

          const nav = document.querySelector('.nav-links')
          const burger = document.querySelector('.burger')
          if (nav?.classList.contains('nav-active')) {
            nav.classList.remove('nav-active')
            burger?.classList.remove('toggle')
          }
        }
      })
    })
  })
})
