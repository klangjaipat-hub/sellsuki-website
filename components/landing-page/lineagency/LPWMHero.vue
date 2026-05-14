<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50/30">
    <!-- Decorative Elements -->
    <div class="absolute top-20 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-line animate-pulse"></span>
          <span class="text-sm font-medium text-gray-600">Sellsuki เป็น Partner อย่างเป็นทางการของ LINE ประเทศไทย</span>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
          จองทำเลทองบนหน้า Chat LINE<br />
          เข้าถึง <span class="text-gray-900">56 ล้านคน</span> ทั่วไทย
        </h1>

        <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up">
          ตำแหน่งโฆษณาที่ทรงพลังที่สุด (Smart Channel) บริหารจัดการโดยทีมผู้เชี่ยวชาญ Certified Coach
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up">
          <button
            @click="scrollToForm"
            class="w-full sm:w-auto bg-line hover:bg-line-dark text-white text-lg font-semibold px-8 py-3 rounded-full shadow-xl shadow-green-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line"
          >
            จองสิทธิ์ปรึกษา Certified Coach ฟรี
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>

        <!-- Social Media & Contact Links -->
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in-up">
          <a
            href="https://page.line.me/linebysellsuki"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 text-gray-600 hover:text-[#06C755] transition-colors focus:outline-none focus:ring-2 focus:ring-line rounded p-1"
            aria-label="Add LINE Friend"
          >
            <div class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform text-[#06C755]">
              <img src="~/assets/landing-page/lineagency/line-svgrepo-com.svg" alt="LINE" width="26" height="26">
            </div>
            <span class="font-medium hidden sm:inline group-hover:underline decoration-[#06C755]/30 underline-offset-4">LINE Official</span>
          </a>

          <a
            href="https://web.facebook.com/lineagency.sellsuki/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 text-gray-600 hover:text-[#1877F2] transition-colors focus:outline-none focus:ring-2 focus:ring-line rounded p-1"
            aria-label="Visit Facebook Page"
          >
            <div class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform text-[#1877F2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </div>
            <span class="font-medium hidden sm:inline group-hover:underline decoration-[#1877F2]/30 underline-offset-4">Facebook</span>
          </a>

          <a
            href="https://www.sellsuki.co.th/solutions/lineagency"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 text-gray-600 hover:text-sellsuki-dark transition-colors focus:outline-none focus:ring-2 focus:ring-line rounded p-1"
            aria-label="Visit Website"
          >
            <div class="w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform text-sellsuki-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <span class="font-medium hidden sm:inline group-hover:underline decoration-sellsuki-dark/30 underline-offset-4">Website</span>
          </a>
        </div>

        <div class="mt-12 flex items-center justify-center gap-8 text-gray-500 grayscale opacity-80 animate-fade-in-up" aria-label="Trusted Partners">
          <div class="font-bold text-xl">LINE</div>
          <div class="font-bold text-xl">Google</div>
          <div class="font-bold text-xl">Meta</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMHero',
  methods: {
    scrollToForm() {
      const formElement = document.getElementById('contact-form')
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>
