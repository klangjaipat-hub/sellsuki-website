import Vue from 'vue'

Vue.directive('countup', {
  inserted(el, binding) {
    const end = Number(binding.value) || 1000
    const duration = 2000
    const start = 0
    const easeOutQuad = (t) => t * (2 - t)
    const formatNumber = (n) => n.toLocaleString('en-US')

    function startCounting() {
      const startTime = performance.now()

      function animate(now) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(start + (end - start) * easeOutQuad(progress))
        el.textContent = formatNumber(current)

        if (elapsed < duration) {
          requestAnimationFrame(animate)
        } else {
          el.textContent = formatNumber(end)
        }
      }

      requestAnimationFrame(animate)
    }

    // ✅ Trigger เมื่อ scroll ถึง
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCounting()
        observer.unobserve(el)
      }
    }, { threshold: 0.3 })

    observer.observe(el)
  },
})
