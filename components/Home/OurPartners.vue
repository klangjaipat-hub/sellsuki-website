<template>
  <div class="container padding-section">
    <div class="row">
      <div class="col-md-3 col-12 text-start d-none d-md-block">
        <div class="m-auto text-section text-start mb-2 pt-1">
          <span class="text-ranbow text-s-24 font-bd m-0">Our Partners</span>
        </div>
        <p class="text-s-36 font-bd color-1F2937">
          พาร์ทเนอร์ที่ร่วมงานกับเรา
        </p>
      </div>
      <div class="col-md-9 col-12 text-start">
        <div
          class="ps-4 d-flex justify-content-between align-items-center flex-nowrap w-100"
        >
          <img
            v-for="i in 5"
            :key="i"
            :src="require(`~/assets/New/Home/logo-partner-${i}.svg`)"
            class="logo-img align-self-center grayscale"
            :alt="`logo-partner-${i}`"
            ref="logos"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const options = { threshold: 0.3 } // เห็น 30% ก็ทำงาน
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("colored")
        }
      })
    }, options)

    this.$refs.logos.forEach((el) => observer.observe(el))
  }
}
</script>

<style scoped>

@import url('~/assets/styles/css/customNew.css');
@media only screen and (min-width: 1580px) {
  .row>* {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}
.padding-section{
    padding-top: 70px !important;
}

.logo-img {
  max-height: 60px;
  transition: filter 3s ease;
  transition-delay: 0.5s;
}

.logo-img.grayscale {
  filter: grayscale(100%);
}

.logo-img.colored {
  filter: grayscale(0%);
}

.text-ranbow,
.text-ranbow > * {
  background: linear-gradient(84.92deg, #F35C20 41.14%, #FB923C 50.69%, #58C6FF 57.79%, #01B1F5 68.43%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-section{
  padding-left: 12px;
  padding-right: 12px;
  display: inline-block;
  width: auto;
  border: 1px solid #00000008;
  backdrop-filter: blur(10px);
  border-radius: 32px;
  background: #fff;
}

.logo-img {
    flex: 1 1 auto;
    max-width: 20%;
    height: 90px;
    object-fit: contain;
    padding: 0 8px;
}

.text-s-24 {
    line-height: 24px;
}

@media (max-width: 576px) {
    .logo-img {
        max-width: 18%;
        padding: 0 4px;
    }
}

@media (max-width: 767px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .m-size {
    width: 34px;
    height: 34px;
  }
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-24 {
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 768px) {
  .m-size {
    width: 45px;
    height: 45px;
  }
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .text-s-24 {
    font-size: 18px !important;
    line-height: 18px !important;
  }
  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }
}

@media (min-width: 1200px) {
  .m-size {
    width: 80px;
    height: 80px;
  }
  .p-spacing {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }
  .text-s-44 {
    font-size: 44px !important;
    line-height: 44px !important;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
  }
  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }
  .text-s-18 {
    font-size: 18px !important;
    line-height: 18px !important;
  }
}
</style>
