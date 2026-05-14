<template>
  <nav
    aria-label="Main Navigation"
    :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img
          src="~/assets/SolutionsLine/Logo with system__.png"
          alt="Sellsuki Logo"
          class="h-8 md:h-10 w-auto"
        />
        <div class="h-6 w-px bg-gray-300" aria-hidden="true"></div>
        <span class="text-base md:text-lg font-bold text-sellsuki-dark tracking-wide pt-0.5">LINE AGENCY</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#services" @click.prevent="handleNavClick('services')" class="text-gray-600 hover:text-line transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-line rounded px-2 py-1">บริการของเรา</a>
        <a href="#growth" @click.prevent="handleNavClick('growth')" class="text-gray-600 hover:text-line transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-line rounded px-2 py-1">บริการเสริม</a>
        <a href="#trust" @click.prevent="handleNavClick('trust')" class="text-gray-600 hover:text-line transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-line rounded px-2 py-1">ความน่าเชื่อถือ</a>
        <button
          @click="scrollToForm"
          class="bg-line hover:bg-line-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-green-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line"
        >
          ปรึกษาผู้เชี่ยวชาญ
        </button>
      </div>

      <!-- Mobile Toggle -->
      <div class="md:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="text-gray-800 focus:outline-none focus:ring-2 focus:ring-line rounded p-1"
          :aria-expanded="isMobileMenuOpen"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-4 border-t border-gray-100">
      <a href="#services" @click.prevent="handleNavClick('services')" class="text-gray-600 py-2 focus:outline-none focus:ring-2 focus:ring-line rounded px-2">บริการของเรา</a>
      <a href="#growth" @click.prevent="handleNavClick('growth')" class="text-gray-600 py-2 focus:outline-none focus:ring-2 focus:ring-line rounded px-2">บริการเสริม</a>
      <a href="#trust" @click.prevent="handleNavClick('trust')" class="text-gray-600 py-2 focus:outline-none focus:ring-2 focus:ring-line rounded px-2">ความน่าเชื่อถือ</a>
      <button
        @click="scrollToForm"
        class="bg-line w-full text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line"
      >
        ปรึกษาผู้เชี่ยวชาญ
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LPWMNavbar',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
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
    handleNavClick(id) {
      const element = document.getElementById(id)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - navbarHeight
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        this.isMobileMenuOpen = false
      }
    },
    scrollToForm() {
      const formElement = document.getElementById('contact-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
        this.isMobileMenuOpen = false
      }
    }
  }
}
</script>
