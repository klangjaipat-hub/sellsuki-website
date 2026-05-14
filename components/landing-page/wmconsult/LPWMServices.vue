<template>
  <section id="services" class="py-section bg-light overflow-hidden">
    <div class="container">
      <div v-animate-on-scroll class="animate-fade-up text-center mb-5" style="max-width:48rem;margin-inline:auto">
        <h2 class="fw-bold mb-4" style="font-size:clamp(2rem,4vw,3rem)">
          บริการที่ปรึกษาเชิงกลยุทธ์ครบวงจร
        </h2>
        <p class="fs-5 text-muted">
          ปลดล็อกศักยภาพธุรกิจด้วยแนวทางที่ปรึกษาเชิงกลยุทธ์ เพื่อการเติบโตที่ยั่งยืน
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-animate-on-scroll
          :class="['col animate-fade-up', `delay-${index + 1}`]"
        >
          <div class="service-card">
            <div class="service-icon">
              <component :is="service.icon" style="width:2.5rem; height:2.5rem; color:#FCB616" />
            </div>
            <h3 class="fw-bold mb-3" style="font-size:1.75rem">{{ service.title }}</h3>
            <p class="text-muted lh-lg flex-grow-1 mb-4">{{ service.desc }}</p>
            <div class="pt-3 border-top d-flex flex-column gap-3">
              <div v-for="(f, i) in service.features" :key="i" class="service-feature">{{ f }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
function mkIcon(paths) {
  return {
    functional: true,
    render(h, ctx) {
      return h('svg', {
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        },
        class: ctx.data.staticClass,
        style: ctx.data.staticStyle
      }, paths.map(([tag, attrs]) => h(tag, { attrs })))
    }
  }
}

const BarChart3Icon = mkIcon([
  ['path', { d: 'M3 3v18h18' }],
  ['path', { d: 'M18 17V9' }],
  ['path', { d: 'M13 17V5' }],
  ['path', { d: 'M8 17v-3' }]
])
const GlobeIcon = mkIcon([
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' }],
  ['path', { d: 'M2 12h20' }]
])
const HeartIcon = mkIcon([
  ['path', { d: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' }]
])
const MegaphoneIcon = mkIcon([
  ['path', { d: 'M3 11l18-5v12L3 14v-3z' }],
  ['path', { d: 'M11.6 16.8a3 3 0 1 1-5.8-1.6' }]
])

export default {
  name: 'LPWMServices',
  data() {
    return {
      services: [
        {
          icon: BarChart3Icon,
          title: 'วางแผนกลยุทธ์และขยายธุรกิจ',
          desc: 'อย่าปล่อยให้ธุรกิจโตแบบไร้ทิศทาง! เราช่วยวาง Business Roadmap ที่ชัดเจน ปิดจุดอ่อน เสริมจุดแข็ง เพื่อสร้างกำไรที่ยั่งยืนและวัดผลได้จริง',
          features: ['ออกแบบแผนธุรกิจ (Business Roadmap)', 'วิเคราะห์กลุ่มเป้าหมาย (Target Analysis)', 'โมเดลการขยายธุรกิจ (Expansion Model)']
        },
        {
          icon: GlobeIcon,
          title: 'ขยายตลาดและพัฒนาสินค้าใหม่',
          desc: 'ลดความเสี่ยงในการลงทุนด้วยข้อมูลจริง! วางแผนตั้งแต่ Market Research จนถึง Product Launch ให้สินค้าของคุณติดตลาดและทำยอดขายได้ทันที',
          features: ['วิจัยตลาดและวิเคราะห์ช่องว่าง (Market Research)', 'วิเคราะห์ 3C (Customer, Company, Competitor)', 'แผนการเปิดตัวสินค้า (Launch Roadmap)']
        },
        {
          icon: HeartIcon,
          title: 'รักษาฐานลูกค้าและสร้างยอดขายซ้ำ',
          desc: 'เปลี่ยนลูกค้าขาจรให้เป็นลูกค้าประจำ! สร้างกลยุทธ์ CRM ที่ทรงพลัง ดึงลูกค้าเก่ากลับมาซื้อซ้ำ เพิ่ม Lifetime Value ให้ธุรกิจของคุณ',
          features: ['วิเคราะห์พฤติกรรมลูกค้า (Behavior Analysis)', 'เพิ่มประสิทธิภาพ CRM (CRM Optimization)', 'จุดสัมผัสและสัญญาณเลิกใช้ (Touchpoints & Exit Triggers)']
        },
        {
          icon: MegaphoneIcon,
          title: 'กลยุทธ์ Influencer Marketing',
          desc: 'เลิกจ้าง Influencer แบบหว่านแห! เราคัดเลือกคนที่ใช่ วางกลยุทธ์ที่ตรงกลุ่มเป้าหมาย เพื่อสร้างยอดขายจริง ไม่ใช่แค่ยอดไลก์',
          features: ['คัดเลือก Influencer กว่า 1,000 รายชื่อ', 'กลยุทธ์แคมเปญจากข้อมูลจริง (Insight-based)', 'Social Listening และการวัดผล']
        }
      ]
    }
  }
}
</script>
