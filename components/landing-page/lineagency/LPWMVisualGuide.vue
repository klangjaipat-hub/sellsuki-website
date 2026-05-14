<template>
  <section class="py-24 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row gap-16 items-center">

        <!-- Content Side -->
        <div class="w-full lg:w-1/2">
          <div class="inline-flex items-center gap-2 bg-line-light text-line-dark border border-line-light rounded-full px-4 py-1.5 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            <span class="text-sm font-semibold uppercase tracking-wider">The Prime Location</span>
          </div>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            ครอบครองตำแหน่ง<br/>
            <span class="text-line">บนสุดของหน้าแชท</span><br/>
            (Smart Channel)
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            พื้นที่โฆษณาที่มีอิทธิพลสูงสุด เข้าถึงสายตาคนไทยกว่า <strong class="text-gray-900">56 ล้านคนต่อวัน</strong> อยู่ในจุดที่ผู้ใช้งานมองเห็นบ่อยที่สุด (Top of Mind)
          </p>

          <!-- Mobile Phone Mockup -->
          <div class="flex lg:hidden justify-center my-10" aria-hidden="true">
            <LPWMPhoneMockup :active-tab="activeTab" />
          </div>

          <div class="space-y-6" role="tablist" aria-label="Ad Formats">
            <!-- Option A: Static Banner -->
            <div
              role="tab"
              tabindex="0"
              :aria-selected="activeTab === 'static'"
              :class="[
                'cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-line',
                activeTab === 'static' ? 'border-line bg-white shadow-xl scale-[1.02]' : 'border-transparent bg-white/50 hover:bg-white'
              ]"
              @click="activeTab = 'static'"
              @keydown.enter.prevent="activeTab = 'static'"
              @keydown.space.prevent="activeTab = 'static'"
            >
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-3">
                  <div :class="['p-2 rounded-lg', activeTab === 'static' ? 'bg-line text-white' : 'bg-gray-200 text-gray-600']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">Static Banner</h3>
                </div>
                <span class="text-sm font-semibold text-line-dark bg-line-light px-3 py-1 rounded-full">เริ่มต้น 50,000.-</span>
              </div>
              <p class="text-gray-600 pl-[3.25rem]">
                ภาพนิ่งชัดเจน สื่อสารตรงประเด็น เน้น Call-to-Action ที่รวดเร็ว เหมาะกับโปรโมชั่นระยะสั้น
              </p>
            </div>

            <!-- Option B: VDO Ads -->
            <div
              role="tab"
              tabindex="0"
              :aria-selected="activeTab === 'vdo'"
              :class="[
                'cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-line',
                activeTab === 'vdo' ? 'border-line bg-white shadow-xl scale-[1.02]' : 'border-transparent bg-white/50 hover:bg-white'
              ]"
              @click="activeTab = 'vdo'"
              @keydown.enter.prevent="activeTab = 'vdo'"
              @keydown.space.prevent="activeTab = 'vdo'"
            >
              <div class="flex justify-between items-start mb-2">
                <div class="flex items-center gap-3">
                  <div :class="['p-2 rounded-lg', activeTab === 'vdo' ? 'bg-line text-white' : 'bg-gray-200 text-gray-600']">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">VDO Expandable Ads</h3>
                </div>
                <span class="text-sm font-semibold text-line-dark bg-line-light px-3 py-1 rounded-full">เริ่มต้น 50,000.-</span>
              </div>
              <p class="text-gray-600 pl-[3.25rem]">
                วิดีโอเล่นอัตโนมัติเมื่อกดขยาย สร้าง Storytelling และ Impact สูงสุด ดึงดูดความสนใจได้มากกว่า
              </p>
            </div>
          </div>
        </div>

        <!-- Desktop Phone Mockup -->
        <div class="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end" aria-hidden="true">
          <LPWMPhoneMockup :active-tab="activeTab" />
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import LPWMPhoneMockup from '~/components/landing-page/lineagency/LPWMPhoneMockup.vue'

export default {
  name: 'LPWMVisualGuide',
  components: { LPWMPhoneMockup },
  data() {
    return {
      activeTab: 'static'
    }
  }
}
</script>
