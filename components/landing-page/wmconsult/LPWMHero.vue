<template>
  <section :class="['hero-section', { 'hero-loaded': isLoaded }]">
    <!-- Background -->
    <div class="hero-bg">
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        alt="Business Strategy Workshop"
      />
      <div class="hero-overlay-purple"></div>
      <div class="hero-overlay-dark"></div>
    </div>
    <div class="hero-grid-pattern"></div>

    <div class="container position-relative z-10">
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="ping-dot">
                <span class="ping"></span>
                <span class="dot"></span>
              </span>
              Strategic Growth Partner
            </div>

            <h1 class="fw-bold text-white mb-4" style="font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1">
              ที่ปรึกษาธุรกิจ <br />
              <span class="gradient-text">เพิ่มยอดขาย</span>
              ให้ทะลุเป้า
            </h1>

            <p class="text-white mb-5 fs-5" style="opacity:.8; max-width:40rem; line-height:1.7">
              หยุดเสี่ยงกับการลองผิดลองถูก! เราคือที่ปรึกษาที่การันตีผลลัพธ์
              ช่วยคุณวางแผนกลยุทธ์ เพิ่มยอดขาย และขยายตลาดให้เติบโตแบบก้าวกระโดด
            </p>

            <a
              href="#contact-form"
              class="btn btn-warning text-brand-purple fw-bold px-5 py-3 rounded-4 fs-5 d-inline-flex align-items-center gap-2 shadow"
            >
              รับแผนและคำปรึกษาฟรี
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMHero',
  data() {
    return { isLoaded: false }
  },
  mounted() {
    this.$nextTick(() => { this.isLoaded = true })
  }
}
</script>
