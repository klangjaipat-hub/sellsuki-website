<template>
  <section id="process" class="py-section bg-white overflow-hidden">
    <div class="container">
      <div v-animate-on-scroll class="animate-fade-up text-center mb-5">
        <h2 class="fw-bold mb-3" style="font-size:clamp(2rem,4vw,3rem)">ขั้นตอนการให้คำปรึกษา</h2>
        <p class="fs-5 text-muted">กระบวนการทำงานที่เป็นระบบ เพื่อผลลัพธ์ที่ชัดเจนและยั่งยืน</p>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div
          v-for="(step, index) in steps"
          :key="index"
          v-animate-on-scroll
          :class="['col animate-fade-up', `delay-${index + 1}`]"
        >
          <div class="process-step">
            <div class="step-outer">
              <div class="step-inner">
                <component :is="step.icon" style="width:2.5rem; height:2.5rem" />
              </div>
            </div>

            <div v-if="index < steps.length - 1" class="step-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>

            <h3 class="fw-bold fs-5 mb-2">{{ step.title }}</h3>
            <p class="text-muted lh-lg mb-0" style="max-width:16rem">{{ step.desc }}</p>
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

const ClipboardListIcon = mkIcon([
  ['rect', { width: '8', height: '4', x: '8', y: '2', rx: '1', ry: '1' }],
  ['path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }],
  ['path', { d: 'M12 11h4' }],
  ['path', { d: 'M12 16h4' }],
  ['path', { d: 'M8 11h.01' }],
  ['path', { d: 'M8 16h.01' }]
])
const MapIcon = mkIcon([
  ['polygon', { points: '3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21' }],
  ['line', { x1: '9', x2: '9', y1: '3', y2: '18' }],
  ['line', { x1: '15', x2: '15', y1: '6', y2: '21' }]
])
const ZapIcon = mkIcon([
  ['path', { d: 'M13 2 3 14h9l-1 8 10-12h-9l1-8z' }]
])
const LineChartIcon = mkIcon([
  ['path', { d: 'M3 3v18h18' }],
  ['path', { d: 'm19 9-5 5-4-4-3 3' }]
])

export default {
  name: 'LPWMProcess',
  data() {
    return {
      steps: [
        { icon: ClipboardListIcon, title: '1. รับบรีฟ',          desc: 'ทีมที่ปรึกษาและธุรกิจประชุมร่วมกันเพื่อรับโจทย์และวิเคราะห์สถานการณ์ปัจจุบัน' },
        { icon: MapIcon,           title: '2. วางแผนกลยุทธ์',    desc: 'ศึกษาธุรกิจเชิงลึก วางแผนกลยุทธ์และจัดทำแผนงานอย่างละเอียด' },
        { icon: ZapIcon,           title: '3. ดำเนินการ',         desc: 'ลงมือปฏิบัติตามแผนงานด้วยทีมงานมืออาชีพ พร้อมติดตามผลอย่างใกล้ชิด' },
        { icon: LineChartIcon,     title: '4. วัดผลและปรับปรุง',  desc: 'อัปเดตผลลัพธ์รายสัปดาห์ วัดผลตามเป้าหมาย และปรับปรุงกลยุทธ์ให้ดียิ่งขึ้น' }
      ]
    }
  }
}
</script>
