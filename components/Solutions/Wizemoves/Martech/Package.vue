<template>
  <div class="pricing-section container py-5 font-df">
    <div class="row justify-content-center mb-5">
      <div class="col-auto">
        <div class="tab-switcher d-flex">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="btn btn-switcher text-s-28 font-md rounded-pill px-4 py-2"
            :class="{ active: currentTab === tab.id, 'm-10': tab.id === 'website' }"
            @click="currentTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </div>

    <div class="row g-4 align-items-stretch">
      <div 
        class="col-12 col-md-4 col-lg-4" 
        v-for="(pkg, index) in currentData" 
        :key="index"
      >
        <div class="pricing-card h-100 p-xl-5 p-4 d-flex flex-column" :class="{ 'highlight-card': pkg.isHighlight }">
          
          <div class="header-group">
            <h5 class="text-s-36 color-1F2937 font-bd mb-2">{{ pkg.title }}</h5>
            <p class="text-s-24 color-1F2937 mb-0">{{ pkg.subtitle }}</p>
          </div>
          
          <div class="mb-0">
            <span class="text-s-36 color-6B7280 mb-0 me-1">เริ่มต้นที่</span>
            <span class="text-s-72 color-1F2937 font-bd mb-0">฿{{ formatPrice(pkg.price) }}</span>
          </div>

          <nuxt-link
            :to="{ path: '/solutions/wizemoves/form/martech' }" 
            class="btn-gray text-s-24 font-md text-center mt-xl-4 mt-3 mb-3"
          >
            <span class="text-s-28">ติดต่อสอบถาม</span>
          </nuxt-link>

          <hr class="custom-hr mt-xl-4 mb-xl-4 mt-2 mb-3">
          <div v-for="(feature, fIndex) in pkg.features" :key="fIndex" class="d-flex align-items-start mb-xl-2 mb-1 mt-xl-2 mt-0">
            <img src="~/assets/SolutionsWizemoves/Martech/icon/Check-Icon.svg" alt="Check-Icon.svg" class="me-xl-3 me-2 check-icon">
            <div class="feature-content">
              <template v-if="isMulti(feature)">
                <p class="feature-title text-s-24 font-df color-1F2937">{{ parseLines(feature)[0] }}</p>
                <ul class="feature-list text-s-24 font-df color-1F2937 mb-0">
                  <li v-for="(line, liIndex) in parseLines(feature).slice(1)" :key="liIndex">{{ line }}</li>
                </ul>
              </template>
              <template v-else>
                <span class="text-s-24 font-df color-1F2937">{{ feature }}</span>
              </template>
            </div>
          </div>

          <div class="mt-auto pt-xl-5 pt-4">
            <div class="duration-container">
              <span class="text-s-24 color-1F2937">ระยะเวลา: {{ pkg.duration }}</span>
              
              <span v-if="pkg.badge" class="badge-custom rounded-pill px-2 text-s-24 font-md">
                <img src="~/assets/SolutionsWizemoves/Martech/icon/gift.svg" alt="gift.svg"> 
                {{ pkg.badge }}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 text-center">
        <p class="text-s-24 color-1F2937">*เป็นเพียงราคาประมาณการเท่านั้น ขึ้นอยู่กับขอบเขตและความซับซ้อนของงาน</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingSection',
  data() {
    return {
      currentTab: 'website', 
      tabs: [
        { id: 'website', label: 'Website Development' },
        { id: 'specialized', label: 'Specialized Services' }
      ],
      servicesData: {
        website: [
          {
            title: 'Info / Landing Page Website',
            subtitle: 'เหมาะสำหรับ: ธุรกิจขนาดเล็กที่ต้องการเริ่มต้นใช้ MarTech',
            price: 10000,
            isHighlight: true,
            features: [
              'UX/UI Design',
              'รองรับการแสดงผลบนมือถือ (Responsive Design)',
              'เชื่อมต่อ Social media',
              'เชื่อมต่อแผนที่จาก Google Maps',
              'ติดตั้ง Google Analytics หรือ Meta Pixel สำหรับเก็บข้อมูล',
              'ทำ SEO เบื้องต้น'
            ],
            duration: '2 สัปดาห์',
            badge: 'บำรุงรักษาฟรี 3 เดือน'
          },
          {
            title: 'E-Commerce Website',
            subtitle: 'เหมาะสำหรับ: ธุรกิจขนาดเล็กที่ต้องการเริ่มต้นใช้ MarTech',
            price: 75000,
            isHighlight: true,
            features: [
              'ครอบคลุมทุกฟังก์ชันสำหรับร้านค้าออนไลน์ ขนาดเล็ก',
              'ระบบสมาชิก/ล็อกอิน',
              'UX/UI Design',
              'รองรับการแสดงผลบนมือถือ (Responsive Design)',
              'เชื่อมต่อ Social media',
              'เชื่อมต่อแผนที่จาก Google Maps',
              'ติดตั้ง Google Analytics หรือ Meta Pixel สำหรับเก็บข้อมูล',
              'ทำ SEO เบื้องต้น'
            ],
            duration: '3-4 เดือน',
            badge: 'บำรุงรักษาฟรี 3 เดือน'
          },
          {
            title: 'Custom Website',
            subtitle: 'เหมาะสำหรับ: องค์กรขนาดใหญ่ที่ต้องการโซลูชันแบบครบวงจร',
            price: 100000,
            isHighlight: true,
            features: [
              'พัฒนาตามความต้องการขององค์กร (Custom)',
              'ต้องการความปลอดภัยด้านข้อมูลหรือระบบที่มี ความซับซ้อน',
              'บริการบำรุงรักษาระยะยาว'
            ],
            duration: 'ขึ้นอยู่กับขนาดงาน',
            badge: 'บำรุงรักษาฟรี'
          }
        ],
        specialized: [
           {
            title: 'Website/App Design',
            subtitle: 'เหมาะสำหรับ: ลูกค้าที่ต้องการเพียงแค่งานออกแบบ UX/UI',
            price: 7000,
            isHighlight: true,
            features: [
              'UX/UI Design',
              'รองรับมือถือ (Responsive Design)',
              'ออกแบบโครงสร้างเพื่อเพิ่ม Conversion',
              'ไฟล์ต้นฉบับและคู่มือการใช้งาน'
            ],
            duration: 'เริ่มต้น 2 สัปดาห์',
            badge: null
          },
          {
            title: 'Software Requirements Specification',
            subtitle: 'เหมาะสำหรับ: องค์กรที่ต้องการจัดทำเอกสารเพื่อใช้ใน การพัฒนาหรือยื่นเสนอราคา (RFP)',
            price: 25000,
            isHighlight: true,
            features: [
              'บริการออกแบบ Software Requirements Specification (SRS)',
              'Business Requirement Analysis',
              'เอกสาร SRS ครบถ้วนตามมาตรฐาน',
              'รองรับทีมพัฒนา ทั้ง In-house และ Outsource',
              'รองรับมือถือ (Responsive Design)',
              'แพ็กเกจ SRS:\nMini SRS – สำหรับ MVP หรือโปรเจกต์ เริ่มต้น\nFull SRS – สำหรับระบบซับซ้อน เช่น ERP, CRM, Marketplace\nUX-Driven SRS – เพิ่ม wireframe และ journey map เต็มรูปแบบ'
            ],
            duration: 'ขึ้นอยู่กับขนาดงาน',
            badge: null
          },
          {
            title: 'Line back office API',
            subtitle: 'เหมาะสำหรับ: องค์กรที่ต้องการสร้างและเชื่อมต่อ ระบบกับ Line',
            price: 10000,
            isHighlight: true,
            features: [
              'จัดการ Rich Menu & Dynamic Rich Menu',
              'ดูข้อมูลแบบเรียลไทม์',
              'จัดการลูกค้าและรายงานผล',
              'จัดการ Flex Message และรอดแคสต์',
              'จัดการมีเดียและสื่อ',
              'LON Broadcast',
              'จัดการหลาย LINE OA ได้ในระบบเดียว',
              'จัดการแอดมินและแจ้งเตือนภายใน'
            ],
            duration: 'ขึ้นอยู่กับขนาดงาน',
            badge: 'บำรุงรักษาฟรี 3 ปี'
          }
        ]
      }
    }
  },
  computed: {
    currentData() {
      return this.servicesData[this.currentTab] || []
    }
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    parseLines(feature) {
      if (typeof feature !== 'string') return [String(feature)]
      return feature.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
    },
    isMulti(feature) {
      return this.parseLines(feature).length > 1
    }
  }
}
</script>

<style scoped>
.m-10  {
  margin-right: -10px;
}
.pricing-section {
  color: #333;
}

.custom-hr {
  color: #E5E7EB;
  height: 2px;
}

/* --- Tab Switcher --- */
.tab-switcher {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 50rem; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.btn-switcher {
  border: none;
  font-weight: 500;
  color: #888;
  transition: all 0.3s ease;
}

.btn-switcher.active {
  background-color: #8B5CF6; 
  color: #fff;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
}

/* --- Cards --- */
.pricing-card {
  background: #F9FAFB;
  border-radius: 24px;
  border: 1px solid #E5E7EB;
  box-shadow: 0px 0px 0px 0px #11182717,0px 0px 1px 0px #11182717,0px 1px 1px 0px #11182714,0px 3px 2px 0px #1118270A,0px 6px 2px 0px #11182700,0px 9px 3px 0px #11182700;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.highlight-card {
  border-radius: 24px;
  border: none;
  background: #F9FAFB;
  box-shadow: 0px 0px 0px 0px #11182717,0px 0px 1px 0px #11182717,0px 1px 1px 0px #11182714,0px 3px 2px 0px #1118270A,0px 6px 2px 0px #11182700,0px 9px 3px 0px #11182700;
  position: relative;
  overflow: visible;
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: -3px; left: -3px; right: -3px; bottom: -3px;
  border-radius: calc(24px + 3px);
  background: linear-gradient(90deg, #FCD34D 0%, #A78BFA 50%, #FCD34D 100%);
  background-size: 200% 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease;
  z-index: 0;
}

.highlight-card::after {
  content: '';
  position: absolute;
  inset: 0; 
  border-radius: 24px;
  background: #F9FAFB;
  z-index: 2;
  pointer-events: none;
}

.highlight-card > * {
  position: relative;
  z-index: 3;
}

.highlight-card:hover::before {
  opacity: 1;
  animation: gradient-slide 3.5s linear infinite;
}

@keyframes gradient-slide {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* --- Buttons & Badges --- */
.btn-contact {
  background-color: #fff;
  border: 2px solid #eee;
  color: #555;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-contact:hover {
  background-color: #f8f9fa;
  border-color: #ddd;
}

.btn-gray {
  display: inline-block;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 28px;
  line-height: 100%;
  font-family: 'Heavent-med', sans-serif;
  color: #1F2937 !important;
  background: #FFF;
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0px 2px 4px 0px rgba(16,24,40,0.05), 0px 0px 0px 8px rgba(152,162,179,0.14);
}

.btn-gray:hover {
  box-shadow: 0 6px 18px rgba(167,139,250,0.5), 0 0 0 10px rgba(252,211,77,0.3);
}

.badge-custom {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid transparent;
  background: 
    linear-gradient(85.42deg, #F4F4FA 30.7%, #FFFBEB 69.22%) padding-box,
    linear-gradient(85.91deg, #A78BFA 30.23%, #FCD34D 72.08%) border-box;
  border-radius: 50rem;
  color: #7C3AED;
}

.check-icon {
  display: inline-block;
  margin-top: 2px;
}

li::marker {
  font-size: 16px;
}

.feature-content {
  min-width: 0;
}
.feature-title {
  margin: 0 0 6px 0;
}
.feature-list {
  margin: 0;
  padding-left: 34px;
}

.badge-custom img {
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
}

.duration-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* --- Header Group Styles (NEW) --- */
.header-group {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1400px) {
  .duration-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .badge-custom {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
}

@media (min-width: 992px) {
  .badge-custom {
    display: inline-flex;
    width: auto;
  }
}

/* Mobile */
@media only screen and (max-width: 768px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-72 {
    font-size: 40px !important;
    line-height: 40px;
  }

  .btn-gray {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  
  .header-group {
    min-height: auto;
  }
}

/* Tablet (>= 768px) */
@media only screen and (min-width: 768px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-72 {
    font-size: 40px !important;
    line-height: 40px;
  }

  .btn-gray {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  /* ควบคุมความสูง Title+Subtitle บน Tablet */
  .header-group {
    min-height: 120px;
  }
}

/* Desktop (>= 1200px) */
@media only screen and (min-width: 1200px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .text-s-72 {
    font-size: 64px !important;
    line-height: 64px;
  }

  /* ควบคุมความสูง Title+Subtitle บน Desktop */
  .header-group {
    min-height: 160px;
  }
}

@media only screen and (min-width: 1400px) {
  .pricing-card {
    padding: 36px !important;
  }
  .text-s-72 {
    font-size: 72px !important;
    line-height: 72px;
  }
  .header-group {
    min-height: 140px;
  }
}

@media only screen and (min-width: 1441px) {
  .pricing-card {
    padding: 48px !important;
  }
}
</style>