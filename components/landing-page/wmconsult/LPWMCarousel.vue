<template>
  <div class="carousel-inner-wrap position-relative w-100 overflow-hidden rounded-3xl">
    <!-- Reserve height with invisible placeholder -->
    <img :src="slides[0]" alt="" aria-hidden="true" class="w-100 h-auto placeholder-img" />

    <!-- Slides -->
    <img
      v-for="(src, i) in slides"
      :key="i"
      :src="src"
      :alt="`slide ${i + 1}`"
      class="position-absolute w-100 h-100 object-cover rounded-3xl slide-img"
      :style="{ opacity: i === current ? 1 : 0 }"
    />

    <!-- Prev -->
    <button class="carousel-btn carousel-btn-prev" @click="prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
      </svg>
    </button>

    <!-- Next -->
    <button class="carousel-btn carousel-btn-next" @click="next">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>

    <!-- Dots -->
    <div class="carousel-dots d-flex">
      <button
        v-for="(_, i) in slides"
        :key="i"
        :class="['dot', i === current ? 'dot-active' : '']"
        @click="current = i"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPWMCarousel',
  data() {
    return {
      current: 0,
      timer: null,
      slides: [
        require('@/assets/landing-page/wmconsult/carousel/wm-slide-1.png'),
        require('@/assets/landing-page/wmconsult/carousel/wm-slide-2.png'),
        require('@/assets/landing-page/wmconsult/carousel/wm-slide-3.png'),
        require('@/assets/landing-page/wmconsult/carousel/wm-slide-4.png')
      ]
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.current = (this.current + 1) % this.slides.length
    }, 3500)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    prev() {
      this.current = (this.current - 1 + this.slides.length) % this.slides.length
    },
    next() {
      this.current = (this.current + 1) % this.slides.length
    }
  }
}
</script>
