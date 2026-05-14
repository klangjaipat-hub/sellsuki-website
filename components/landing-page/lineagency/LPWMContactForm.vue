<template>
  <section id="contact-form" class="py-24 bg-gradient-to-b from-white to-green-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        <!-- Left Side: Info -->
        <div class="w-full md:w-2/5 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-line opacity-10"></div>
          <div class="relative z-10">
            <h3 class="text-2xl font-bold mb-6">ยกระดับธุรกิจบน LINE วันนี้</h3>
            <p class="text-gray-300 mb-8 leading-relaxed">
              รับคำปรึกษาจากทีมงาน Certified Coach เพื่อเลือกโซลูชันที่ตอบโจทย์เป้าหมายของคุณ ไม่ว่าจะเป็น Smart Channel หรือ Corporate Account
            </p>
            <ul class="space-y-4 mb-12">
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-line shrink-0 mt-1" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span class="text-sm text-gray-300">วิเคราะห์โอกาสทางธุรกิจบน Platform LINE ฟรี</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-line shrink-0 mt-1" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span class="text-sm text-gray-300">แนะนำแพ็กเกจ Corporate+ ลดต้นทุน Broadcast</span>
              </li>
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-line shrink-0 mt-1" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span class="text-sm text-gray-300">วางแผนโฆษณา Smart Channel ให้คุ้มค่าที่สุด</span>
              </li>
            </ul>
          </div>
          <div class="relative z-10 text-xs text-gray-400">
            *ข้อมูลของคุณจะถูกเก็บเป็นความลับเพื่อการติดต่อกลับเท่านั้น
          </div>
        </div>

        <!-- Right Side: Form -->
        <div class="w-full md:w-3/5 p-10 md:p-12" aria-live="polite">
          <!-- Form -->
          <div v-if="!submitted">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-2">ลงทะเบียนปรึกษาผู้เชี่ยวชาญ</h2>
              <p class="text-gray-600">กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับพร้อมข้อเสนอพิเศษ</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="lpwm-name" class="text-sm font-medium text-gray-700">ชื่อผู้ติดต่อ <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">จำเป็น</span></label>
                  <input
                    type="text"
                    id="lpwm-name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all"
                    placeholder="ชื่อ-นามสกุล"
                  />
                </div>
                <div class="space-y-2">
                  <label for="lpwm-phone" class="text-sm font-medium text-gray-700">เบอร์โทรศัพท์ <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">จำเป็น</span></label>
                  <input
                    type="tel"
                    id="lpwm-phone"
                    v-model="form.phone"
                    required
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all"
                    placeholder="081-234-5678"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="lpwm-email" class="text-sm font-medium text-gray-700">อีเมล <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">จำเป็น</span></label>
                <input
                  type="email"
                  id="lpwm-email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div class="space-y-2">
                <label for="lpwm-business" class="text-sm font-medium text-gray-700">ชื่อธุรกิจ/แบรนด์ <span class="text-red-500" aria-hidden="true">*</span><span class="sr-only">จำเป็น</span></label>
                <input
                  type="text"
                  id="lpwm-business"
                  v-model="form.business"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all"
                  placeholder="เช่น Sellsuki Co., Ltd."
                />
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="lpwm-service" class="text-sm font-medium text-gray-700">บริการที่สนใจ</label>
                  <div class="relative">
                    <select
                      id="lpwm-service"
                      v-model="form.service"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>เลือกบริการ</option>
                      <option value="smart-channel">LINE Smart Channel</option>
                      <option value="corporate">LINE OA Corporate+</option>
                      <option value="standard">Standard Package</option>
                      <option value="growth">Growth Services</option>
                      <option value="all">สนใจภาพรวม/อื่นๆ</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" aria-hidden="true">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="lpwm-budget" class="text-sm font-medium text-gray-700">งบประมาณต่อเดือน</label>
                  <div class="relative">
                    <select
                      id="lpwm-budget"
                      v-model="form.budget"
                      class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-line focus:ring-2 focus:ring-green-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>เลือกงบประมาณ</option>
                      <option value="20k-50k">20,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k-300k">100,000 - 300,000</option>
                      <option value="300k+">มากกว่า 300,000</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" aria-hidden="true">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="w-full bg-gradient-to-r from-line to-line-dark hover:from-line-dark hover:to-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-line"
              >
                <span v-if="loading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></span>
                <template v-else>
                  ลงทะเบียนรับสิทธิ์
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </template>
              </button>

              <p class="text-center text-xs text-gray-500 mt-4">
                ที่ปรึกษาของเราจะติดต่อกลับภายใน 24 ชั่วโมงทำการ
              </p>
            </form>
          </div>

          <!-- Success State -->
          <div v-else class="h-full flex flex-col items-center justify-center text-center py-10">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-line mb-6 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">ส่งข้อมูลสำเร็จ!</h3>
            <p class="text-gray-600 mb-6">
              ขอบคุณที่สนใจบริการของเรา<br/>ทีมงาน Sellsuki จะติดต่อกลับเพื่อนำเสนอโซลูชันที่ดีที่สุดสำหรับคุณ
            </p>
            <button
              @click="submitted = false"
              class="text-line font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-line rounded px-2 py-1"
            >
              กลับสู่หน้าหลัก
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMContactForm',
  data() {
    return {
      submitted: false,
      loading: false,
      form: { name: '', phone: '', email: '', business: '', service: '', budget: '' },
      ads: '',
      path: '',
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.ads = sessionStorage.getItem('ads')
      this.path = window.location.origin + window.location.pathname
    }
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      const now = new Date()
      const pad = n => String(n).padStart(2, '0')
      const entryId = `LINEAGENCY${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`

      // GTM
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'form_submit_success', service: 'SP-LINEAgency', entry_id: entryId })
      }

      this.submitted = true
      this.form = { name: '', phone: '', email: '', business: '', service: '', budget: '' }
      this.loading = false
    }
  }
}
</script>
