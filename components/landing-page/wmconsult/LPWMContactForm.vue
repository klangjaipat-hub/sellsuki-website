<template>
  <div :id="sectionId">
    <!-- Form Section -->
    <div class="py-section px-3 d-flex align-items-center justify-content-center">
      <div class="w-100 bg-white rounded-4 shadow overflow-hidden d-flex flex-column flex-md-row" style="max-width:72rem">

        <!-- Left: Value Prop -->
        <div class="col-md-5 contact-left">
          <div class="bg-img">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" alt="Business Meeting" />
            <div class="overlay"></div>
          </div>
          <div class="content d-flex flex-column h-100">
            <div>
              <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border mb-4" style="background:rgba(252,182,22,.1);border-color:rgba(252,182,22,.2)!important;font-size:.875rem;font-weight:500;color:#FCB616">
                <span class="rounded-circle bg-brand-yellow" style="width:.5rem;height:.5rem;animation:pulse 2s ease-in-out infinite"></span>
                ด่วน! ปรึกษาตอนนี้
              </div>

              <h2 class="fw-bold lh-sm mb-4" style="font-size:clamp(1.75rem,3vw,2.25rem)">
                เปลี่ยนยอดขายหลักล้าน <br /> สู่ <span class="text-brand-yellow">100 ล้าน+</span>
              </h2>

              <p class="fs-5 mb-4 lh-lg" style="color:#e2e8f0;font-weight:500">
                ยอดขายโต…แต่กำไรไม่โต? <br />
                ให้ WizeMoves <span class="text-brand-yellow fw-bold">พาโตและเพิ่มยอดขาย</span> ด้วยกลยุทธ์ที่พิสูจน์แล้วว่าได้ผลจริง
              </p>

              <div class="d-flex flex-column gap-3 mb-5">
                <div v-for="(item, i) in valuePoints" :key="i" class="d-flex align-items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FCB616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>
                  </svg>
                  <span style="color:#e2e8f0">{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="mt-auto pt-4 border-top border-white-10">
              <div class="d-flex align-items-center gap-3">
                <div class="d-flex" style="margin-left:-.75rem">
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="rounded-circle border border-2 overflow-hidden"
                    style="width:2.5rem;height:2.5rem;border-color:#412F5E!important;margin-left:-.75rem"
                  >
                    <img :src="`https://i.pravatar.cc/150?u=${i}`" alt="Client" class="w-100 h-100 object-cover" style="opacity:.8" />
                  </div>
                </div>
                <p class="mb-0 fw-semibold text-white">ได้รับความไว้วางใจจากกว่า 8,000 แบรนด์</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="col-md-7 p-4 p-md-5 bg-white">
          <h3 class="fw-bold fs-4 mb-1">ลงทะเบียนปรึกษากลยุทธ์</h3>
          <p class="text-muted mb-4">กรอกข้อมูลเพื่อขอนัดหมายปรึกษากับ Strategy Director ของเรา</p>

          <form @submit.prevent="handleSubmit">
            <div class="row g-3 mb-3">
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  ชื่อบริษัท
                </label>
                <input v-model="formData.companyName" type="text" required placeholder="บริษัท ของคุณ จำกัด" class="form-control contact-form-input" />
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  ชื่อผู้ติดต่อ
                </label>
                <input v-model="formData.contactName" type="text" required placeholder="ชื่อ-นามสกุล" class="form-control contact-form-input" />
              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark">ตำแหน่ง</label>
                <select v-model="formData.position" required class="form-select contact-form-input">
                  <option value="">เลือกตำแหน่ง</option>
                  <option value="Owner / CEO">เจ้าของกิจการ / CEO</option>
                  <option value="C-Level Executive">ผู้บริหารระดับสูง (C-Level)</option>
                  <option value="Marketing Director">ผู้อำนวยการฝ่ายการตลาด</option>
                  <option value="Other">อื่นๆ</option>
                </select>
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark">รายได้ต่อปี</label>
                <select v-model="formData.revenue" required class="form-select contact-form-input">
                  <option value="">เลือกช่วงรายได้</option>
                  <option value="< 50 MB">น้อยกว่า 50 ล้านบาท</option>
                  <option value="50 - 100 MB">50 - 100 ล้านบาท</option>
                  <option value="100 - 500 MB">100 - 500 ล้านบาท</option>
                  <option value="500 MB+">500 ล้านบาทขึ้นไป</option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-medium text-dark">ความท้าทายหลัก</label>
              <select v-model="formData.challenge" required class="form-select contact-form-input">
                <option value="">ความท้าทายหลักของคุณคืออะไร?</option>
                <option value="Market Expansion">ต้องการขยายตลาด</option>
                <option value="Stagnant Growth">ยอดขายไม่เติบโต</option>
                <option value="CRM & Data">การบริหารจัดการข้อมูลลูกค้า</option>
                <option value="Other">อื่นๆ</option>
              </select>
            </div>

            <div class="row g-3 mb-4">
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark">อีเมล</label>
                <input v-model="formData.email" type="email" required placeholder="name@company.com" class="form-control contact-form-input" />
              </div>
              <div class="col-12 col-md-6">
                <label class="form-label fw-medium text-dark">เบอร์โทรศัพท์</label>
                <input v-model="formData.phone" type="tel" required placeholder="081-234-5678" class="form-control contact-form-input" />
              </div>
            </div>

            <button type="submit" :disabled="isLoading" class="btn btn-warning text-brand-purple fw-bold w-100 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2 fs-5">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
              {{ isLoading ? 'กำลังส่ง...' : 'ลงทะเบียนนัดหมายปรึกษา' }}
              <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>

            <p class="text-center text-muted mt-3" style="font-size:.75rem">
              การส่งแบบฟอร์มนี้ถือว่าคุณยอมรับนโยบายความเป็นส่วนตัว ข้อมูลของคุณจะถูกเก็บเป็นความลับ
            </p>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPWMContactForm',
  props: {
    sectionId: { type: String, default: 'contact-form' }
  },
  data() {
    return {
      isLoading: false,
      formData: { companyName: '', contactName: '', position: '', revenue: '', challenge: '', email: '', phone: '' },
      valuePoints: [
        'แผนกลยุทธ์เพื่อการเติบโตที่ยั่งยืน',
        'ขยายตลาดด้วยข้อมูลเชิงลึก',
        'รักษาฐานลูกค้าและสร้างความภักดี',
        'วิจัยและแผนการตลาดครบวงจร'
      ],
      ads: '',
      path: '',
      referrer: '',
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.ads = sessionStorage.getItem('ads')
      this.path = window.location.origin + window.location.pathname
      const cookieReferrer = this.$cookies?.get('cookie-referrer')
      this.referrer = cookieReferrer || 'Direct'
    }
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      const now = new Date()
      const pad = n => String(n).padStart(2, '0')
      const entryId = `WMCONSULT${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`

      // GTM
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({ event: 'form_submit_success', service: 'SP-WMConsult', entry_id: entryId })
      }

      this.isLoading = false
      this.$router.push('/landing-page/wmconsult/thank-you')
    },
  }
}
</script>
