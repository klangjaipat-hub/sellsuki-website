<template>
<div>
  <div class="container pb-5  d-lg-block d-none" style="margin-top: 160px;">
    <h2 class="text-center text-s-60 text-w-700 color-1F2937 mb-5 pb-5">ความสำเร็จของคุณคือความภูมิใจของเรา</h2>
    <div class="size-up-1580">
      <TestimonialPc/>
    </div>
    <div class="size-down-1580">
      <TestimonialTablet/>
    </div>
  </div>
  <div class="container d-lg-none d-block">
    <h2 class="text-center text-s-44 text-w-700 color-1F2937 mt-5 mb-5 pb-5">ความสำเร็จของคุณคือความภูมิใจของเรา</h2>
    <TestimonialMobile/>
  </div>
</div>
</template>

<script>
import TestimonialPc from '@/components/Solutions/Wizemoves/TestimonialPc'
import TestimonialTablet from '@/components/Solutions/Wizemoves/TestimonialTablet'
import TestimonialMobile from '@/components/Solutions/Wizemoves/TestimonialMobile'
export default {
  components: {
    TestimonialPc,
    TestimonialMobile,
    TestimonialTablet
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
.text-s-28{
  line-height: 28px;
}

@media screen and (min-width: 900px) and (max-width: 1579px) {
  .size-up-1580{
    display: none;
  }
  .size-down-1580{
    display: block;
  }
}
@media screen and (min-width: 1580px) {
  .size-down-1580{
    display: none;
  }
  .size-up-1580{
    display: block;
  }
}
</style>
