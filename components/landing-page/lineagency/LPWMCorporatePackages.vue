<template>
  <section id="services" class="py-24 bg-white relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-1/2 bg-gray-50 skew-y-3 transform -translate-y-20 z-0"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-2 bg-sellsuki-gold/10 text-sellsuki-gold border border-sellsuki-gold/20 rounded-full px-4 py-1.5 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
          <span class="text-sm font-semibold uppercase tracking-wider">Interactive Broadcasting Solutions</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          แพ็กเกจบรอดแคสต์ที่ตอบโจทย์ทุกขนาดธุรกิจ
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          เลือกแพ็กเกจที่เหมาะสมกับธุรกิจของคุณ ตั้งแต่ SME ไปจนถึงองค์กรขนาดใหญ่
        </p>

        <!-- Toggle Switch -->
        <div class="inline-flex bg-gray-100 p-1 rounded-xl mb-8 relative z-20" role="tablist" aria-label="Package Types">
          <button
            role="tab"
            :aria-selected="activeTab === 'standard'"
            :class="[
              'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-line',
              activeTab === 'standard' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            ]"
            @click="activeTab = 'standard'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Standard Package (SME)
          </button>
          <button
            role="tab"
            :aria-selected="activeTab === 'corporate'"
            :class="[
              'px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sellsuki-gold',
              activeTab === 'corporate' ? 'bg-sellsuki-gold text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
            ]"
            @click="activeTab = 'corporate'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
            Corporate+ Solution
          </button>
        </div>
      </div>

      <!-- Standard Packages -->
      <div v-if="activeTab === 'standard'" id="standard-packages" role="tabpanel" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto animate-fade-in-up">
        <!-- Basic Package -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Basic</h3>
            <div class="text-sm text-gray-600 mb-6">สำหรับธุรกิจเริ่มต้น</div>
            <div class="text-4xl font-bold text-line mb-2">15,360<span class="text-2xl text-gray-600 font-normal">.-</span></div>
            <div class="text-gray-500 text-sm">ต่อปี</div>
          </div>
          <div class="border-t border-gray-100 py-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Broadcast <strong class="text-gray-900">15,000</strong> ข้อความ/เดือน</span>
            </div>
          </div>
          <button class="w-full mt-6 py-3 border border-line text-line font-semibold rounded-lg hover:bg-line hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line">
            เลือกแพ็กเกจนี้
          </button>
        </div>

        <!-- Pro Package -->
        <div class="bg-white rounded-2xl p-8 border-2 border-line shadow-xl relative transform md:-translate-y-4">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-line text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Popular
          </div>
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Pro</h3>
            <div class="text-sm text-gray-600 mb-6">สำหรับธุรกิจที่กำลังเติบโต</div>
            <div class="text-4xl font-bold text-line mb-2">21,360<span class="text-2xl text-gray-600 font-normal">.-</span></div>
            <div class="text-gray-500 text-sm">ต่อปี</div>
          </div>
          <div class="border-t border-gray-100 py-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Broadcast <strong class="text-gray-900">35,000</strong> ข้อความ/เดือน</span>
            </div>
          </div>
          <button class="w-full mt-6 py-4 bg-line text-white font-bold rounded-lg hover:bg-line-dark transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line">
            เลือกแพ็กเกจนี้
          </button>
        </div>
      </div>

      <!-- Corporate Packages -->
      <div v-if="activeTab === 'corporate'" id="corporate-packages" role="tabpanel" class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto animate-fade-in-up">
        <!-- Starter Package -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <div class="text-sm text-gray-600 mb-6">สำหรับธุรกิจเริ่มต้นที่ต้องการความพรีเมียม</div>
            <div class="text-4xl font-bold text-line mb-2">2.6<span class="text-2xl text-gray-600 font-normal"> MB</span></div>
            <div class="text-gray-500 text-sm">ต่อปี (เฉลี่ย 216,666)</div>
          </div>
          <div class="border-t border-gray-100 py-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Broadcast <strong class="text-gray-900">5.1 ล้าน</strong> ข้อความ/เดือน</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">โล่สีเขียว (Verified Badge)</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Premium ID ฟรี</span>
            </div>
          </div>
          <button class="w-full mt-6 py-3 border border-line text-line font-semibold rounded-lg hover:bg-line hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line">
            เลือกแพ็กเกจนี้
          </button>
        </div>

        <!-- Corporate A Package - Highlighted -->
        <div class="bg-gray-900 rounded-2xl p-8 border-2 border-sellsuki-gold shadow-2xl relative transform md:-translate-y-4">
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sellsuki-gold text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Best Value
          </div>
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-white mb-2">Corporate A</h3>
            <div class="text-sm text-gray-300 mb-6">ความคุ้มค่าสูงสุดสำหรับธุรกิจขนาดกลาง</div>
            <div class="text-5xl font-bold text-sellsuki-gold mb-2">4.53<span class="text-3xl text-gray-300 font-normal"> MB</span></div>
            <div class="text-gray-400 text-sm">ต่อปี (เฉลี่ย 378,000)</div>
          </div>
          <div class="border-t border-gray-800 py-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-sellsuki-gold p-1 rounded-full text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-200">Broadcast <strong class="text-white">12 ล้าน</strong> ข้อความ/เดือน</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-sellsuki-gold p-1 rounded-full text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-200">โล่สีเขียว (Verified Badge)</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-sellsuki-gold p-1 rounded-full text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-200">Premium ID ฟรี</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-sellsuki-gold p-1 rounded-full text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <span class="text-sellsuki-gold">สิทธิ์การใช้งาน LINE Ads ตำแหน่งพิเศษ</span>
            </div>
          </div>
          <button class="w-full mt-6 py-4 bg-sellsuki-gold text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sellsuki-gold">
            ติดต่อปรึกษาผู้เชี่ยวชาญ
          </button>
        </div>

        <!-- Corporate B Package -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 relative group">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Corporate B</h3>
            <div class="text-sm text-gray-600 mb-6">พลังการสื่อสารไร้ขีดจำกัดสำหรับองค์กรใหญ่</div>
            <div class="text-4xl font-bold text-line mb-2">6.04<span class="text-2xl text-gray-600 font-normal"> MB</span></div>
            <div class="text-gray-500 text-sm">ต่อปี (เฉลี่ย 504,000)</div>
          </div>
          <div class="border-t border-gray-100 py-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Broadcast <strong class="text-gray-900">48 ล้าน</strong> ข้อความ/เดือน</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">โล่สีเขียว (Verified Badge)</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span class="text-gray-700">Premium ID ฟรี</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="bg-green-100 p-1 rounded-full text-line mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
              <span class="text-gray-700">ผู้ดูแลส่วนตัว (Dedicated Support)</span>
            </div>
          </div>
          <button class="w-full mt-6 py-3 border border-line text-line font-semibold rounded-lg hover:bg-line hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line">
            เลือกแพ็กเกจนี้
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMCorporatePackages',
  data() {
    return {
      activeTab: 'corporate'
    }
  }
}
</script>
