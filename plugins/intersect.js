import Vue from 'vue'

Vue.directive('intersect', {
  inserted(el) {
    if (!(el instanceof Element)) {
      console.warn('v-intersect: element not valid', el)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(el)
  }
})