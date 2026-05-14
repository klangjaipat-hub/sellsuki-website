<template>
  <section class="py-section bg-white overflow-hidden">
    <div class="container">
      <div v-animate-on-scroll class="animate-fade-up text-center mb-5" style="max-width:48rem; margin-inline:auto">
        <h2 class="fw-bold mb-4" style="font-size:clamp(2rem,4vw,3rem)">
          ธุรกิจของคุณกำลัง <span class="text-brand-pink">โตช้ากว่าที่ควร</span> หรือไม่?
        </h2>
        <p class="fs-5 text-muted lh-lg">
          หากปัญหาเหล่านี้ตรงกับธุรกิจของคุณ <br class="d-none d-md-block" />
          นี่ไม่ใช่ปัญหาเชิงการจัดการ แต่เป็น <span class="fw-bold text-brand-purple">"ปัญหาเชิงกลยุทธ์"</span>
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div
          v-for="(pain, index) in pains"
          :key="index"
          v-animate-on-scroll
          :class="['col animate-fade-up', `delay-${index + 1}`]"
        >
          <div class="pain-card">
            <div class="pain-icon">
              <component :is="pain.icon" style="width:2rem; height:2rem; color:#DD80DA" />
            </div>
            <h3 class="fw-bold fs-5 mb-3">{{ pain.title }}</h3>
            <p class="text-muted lh-lg mb-0">{{ pain.desc }}</p>
          </div>
        </div>
      </div>

      <div v-animate-on-scroll class="animate-scale-in mt-5 text-center">
        <div class="pain-highlight">
          <p class="fw-bold text-brand-purple lh-lg mb-0 fs-5">
            WizeMoves Consult ช่วยคุณแก้ปัญหาเหล่านี้ได้ <br class="d-none d-md-block" />
            ด้วยกลยุทธ์ที่ขับเคลื่อนด้วย
            <span class="text-brand-pink text-decoration-underline" style="text-underline-offset:.5rem;text-decoration-thickness:2px">Data-Driven Strategy</span>
          </p>
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

const TrendingDownIcon = mkIcon([
  ['polyline', { points: '22 17 13.5 8.5 8.5 13.5 2 7' }],
  ['polyline', { points: '16 17 22 17 22 11' }]
])
const TargetIcon = mkIcon([
  ['circle', { cx: '12', cy: '12', r: '10' }],
  ['circle', { cx: '12', cy: '12', r: '6' }],
  ['circle', { cx: '12', cy: '12', r: '2' }]
])
const UsersIcon = mkIcon([
  ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' }],
  ['circle', { cx: '9', cy: '7', r: '4' }],
  ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87' }],
  ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }]
])
const SearchIcon = mkIcon([
  ['circle', { cx: '11', cy: '11', r: '8' }],
  ['path', { d: 'm21 21-4.3-4.3' }]
])

export default {
  name: 'LPWMPainPoints',
  data() {
    return {
      pains: [
        { icon: TrendingDownIcon, title: 'ยอดขายไม่เป็นไปตามเป้าหมาย', desc: 'แม้จะลงทุนเพิ่ม แต่ผลตอบแทนกลับไม่คุ้มค่า หรือเติบโตช้ากว่าที่ควรจะเป็น' },
        { icon: TargetIcon,       title: 'ขาดกลยุทธ์ที่แม่นยำ',         desc: 'การตลาดและการตั้งราคาไม่เหมาะสม ทำให้เสียโอกาสในการทำกำไร' },
        { icon: UsersIcon,        title: 'Influencer Marketing ไม่เห็นผล', desc: 'จ้างคนดังแต่ยอดขายไม่ขยับ ได้แค่ยอดไลก์แต่ไม่ได้ยอดซื้อ' },
        { icon: SearchIcon,       title: 'ขยายตลาดได้ช้า',               desc: 'ขาดข้อมูลเชิงลึก ทำให้มีความเสี่ยงสูงในการลงทุนขยายธุรกิจ' }
      ]
    }
  }
}
</script>
