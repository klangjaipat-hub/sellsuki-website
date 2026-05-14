<template>
  <div class="floating-btns">
    <!-- Email -->
    <div class="floating-btn-wrap">
      <span class="tooltip-label">customersolutionteam@sellsuki.com</span>
      <a href="mailto:customersolutionteam@sellsuki.com" class="floating-btn">
        <img :src="iconEnvelope" alt="Email" width="28" height="28" />
      </a>
    </div>

    <!-- Phone -->
    <div class="floating-btn-wrap">
      <span class="tooltip-label">Call : 090 096 7526</span>
      <a href="tel:0900967526" class="floating-btn">
        <img :src="iconPhone" alt="Phone" width="28" height="28" />
      </a>
    </div>

    <!-- LINE -->
    <div class="floating-btn-wrap">
      <span class="tooltip-label">LINE : @Sellsuki</span>
      <a href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener noreferrer" class="floating-btn">
        <img :src="iconLine" alt="LINE" width="32" height="32" />
      </a>
    </div>

    <!-- Scroll to top -->
    <div class="floating-btn-wrap">
      <button class="floating-btn" @click="scrollToTop">
        <img :src="iconChevronUp" alt="Scroll to top" width="32" height="32" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPWMFloatingButtons',
  data() {
    return {
      iconEnvelope:  require('@/assets/landing-page/wmconsult/icon/envelope.svg'),
      iconPhone:     require('@/assets/landing-page/wmconsult/icon/phone.svg'),
      iconLine:      require('@/assets/landing-page/wmconsult/icon/line-logo.svg'),
      iconChevronUp: require('@/assets/landing-page/wmconsult/icon/chevron-up.svg')
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
