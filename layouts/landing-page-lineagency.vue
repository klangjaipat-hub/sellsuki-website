<template>
  <div class="min-h-screen bg-white text-gray-900 overflow-x-hidden lpwm-root">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LandingPageLineagencyLayout',
  head() {
    return {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap'
        }
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com', type: 'text/javascript' },
        {
          hid: 'tailwind-config-wmconsult',
          innerHTML: `tailwind.config = {
            theme: {
              extend: {
                fontFamily: { sans: ['Kanit', 'sans-serif'] },
                colors: {
                  line: { DEFAULT: '#06C755', dark: '#05A546', light: '#E6F8EB' },
                  sellsuki: { dark: '#1E293B', gold: '#C5A065', goldLight: '#F3E5D0' }
                },
                animation: {
                  'fade-in-up': 'fadeInUp 0.8s ease-out',
                  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                },
                keyframes: {
                  fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                  }
                }
              }
            }
          }`,
          type: 'text/javascript'
        }
      ],
      style: [
        {
          hid: 'lpwm-global',
          innerHTML: `.lpwm-root { font-family: 'Kanit', sans-serif; scroll-behavior: smooth; scroll-padding-top: 5rem; }`,
          type: 'text/css'
        }
      ],
      __dangerouslyDisableSanitizers: ['script', 'style']
    }
  }
}
</script>
