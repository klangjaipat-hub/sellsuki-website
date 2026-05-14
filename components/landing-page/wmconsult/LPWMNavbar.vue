<template>
  <nav
    :class="[
      'navbar navbar-expand-md fixed-top transition-all',
      isScrolled ? 'navbar-scrolled py-2' : 'navbar-transparent py-3'
    ]"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          :src="isScrolled ? consultLogo : consultLogoWhite"
          alt="Consult Logo"
          height="40"
          class="transition"
          style="transition: transform .3s"
          @mouseover="$event.target.style.transform='scale(1.05)'"
          @mouseleave="$event.target.style.transform='scale(1)'"
        />
      </a>

      <!-- Mobile Toggle -->
      <button class="navbar-toggler border-0 p-2" type="button" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg v-if="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>

      <!-- Desktop Nav -->
      <div class="d-none d-md-flex align-items-center gap-3 ms-auto">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="nav-link px-2"
        >
          {{ link.name }}
        </a>
        <a
          href="#contact-form"
          class="btn btn-warning text-brand-purple rounded-pill fw-bold px-4 py-2 d-flex align-items-center gap-2"
        >
          ปรึกษาฟรี
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isMobileMenuOpen" class="d-md-none bg-white border-top overflow-hidden">
        <div class="container py-4 d-flex flex-column gap-2">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="py-2 border-bottom text-dark text-decoration-none fw-medium"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <a
            href="#contact-form"
            class="btn btn-warning text-brand-purple rounded-3 fw-bold py-3 mt-2 text-center"
            @click="isMobileMenuOpen = false"
          >
            รับแผนและคำปรึกษาฟรี
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'LPWMNavbar',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      navLinks: [
        { name: 'หน้าแรก',          href: '#'        },
        { name: 'บริการของเรา',      href: '#services' },
        { name: 'ทำไมต้องเรา',       href: '#why-us'   },
        { name: 'ขั้นตอนการทำงาน',   href: '#process'  }
      ]
    }
  },
  computed: {
    consultLogo()      { return require('@/assets/landing-page/wmconsult/Consult.png')       },
    consultLogoWhite() { return require('@/assets/landing-page/wmconsult/White-Consult.png') }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    beforeEnter(el) {
      el.style.height  = '0'
      el.style.opacity = '0'
    },
    enter(el, done) {
      el.style.transition = 'height .3s ease, opacity .3s ease'
      el.style.height     = el.scrollHeight + 'px'
      el.style.opacity    = '1'
      el.addEventListener('transitionend', done, { once: true })
    },
    leave(el, done) {
      el.style.height  = el.scrollHeight + 'px'
      el.offsetHeight
      el.style.transition = 'height .3s ease, opacity .3s ease'
      el.style.height     = '0'
      el.style.opacity    = '0'
      el.addEventListener('transitionend', done, { once: true })
    }
  }
}
</script>
