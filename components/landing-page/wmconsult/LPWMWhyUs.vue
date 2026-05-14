<template>
  <section id="why-us" class="why-us-section py-section">
    <div class="decor-bg"></div>

    <div class="container position-relative z-10">
      <div class="row align-items-center g-5">

        <div v-animate-on-scroll class="col-12 animate-scale-in">
          <div class="position-relative">
            <div class="carousel-glow"></div>
            <div class="carousel-wrapper">
              <LPWMCarousel />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import LPWMCarousel from '~/components/landing-page/wmconsult/LPWMCarousel.vue'

export default {
  name: 'LPWMWhyUs',
  components: { LPWMCarousel },
  data() {
    return {
      items: [
        { title: 'Data-Driven Strategy',  desc: 'ใช้ Social Listening และ Data Visualization เพื่อเข้าใจตลาดและลูกค้าอย่างแม่นยำ' },
        { title: 'Measurable Results',    desc: 'สร้างยอดขายที่วัดผลได้จริง ไม่ใช่แค่ยอด Engagement ทุกบาทที่ลงทุนต้องคุ้มค่า' },
        { title: 'Experience & Trust',    desc: 'ได้รับความไว้วางใจจากกว่า 8,000 แบรนด์ ด้วยประสบการณ์กว่า 10 ปี' }
      ]
    }
  }
}
</script>
