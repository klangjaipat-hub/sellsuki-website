<template>
  <section class="bg-c mt-140">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5 mb-4 text-center color-1F2937">
          <h2 class="text-s-60 text-w-700 fade-in-up" v-intersect>ลูกค้าที่วางใจให้เราช่วยดูแล</h2>
        </div>
      </div>
      <div class="pb-4 fade-in-up" v-intersect>
        <div class="row justify-content-center mt-md-5 mb-md-5 mt-2 mb-0 text-center pd-row">
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
              class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/1.png"
              alt="1.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
              class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/2.png"
              alt="2.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/3.png"
              alt="3.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/4.png"
              alt="4.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/5.png"
              alt="5.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/6.png"
              alt="6.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/7.png"
              alt="7.png"
            />
          </div>
          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 mb-md-5 mb-3">
            <img
            class="img-fluid p-2"
              src="../../../assets/SolutionsLine/customer/8.png"
              alt="8.png"
            />
          </div>
        </div>
      </div>
      <Afterfooter/>
    </div>
  </section>
</template>

<script>
import Afterfooter from '@/components/Solutions/Lineagency/Afterfooter'
export default {
  components: {
    Afterfooter
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
a {
  color: unset;
}
a:hover {
  color: #FFF !important;
}
.cart-img {
  position: absolute;
  backdrop-filter: blur(7px);
  box-shadow: -1px -6px 4px 0px #ffffff59 inset, 1px 1px 4px 0px #ffffff59 inset,
    0px 3px 10px 0px #0000000d;
  background: #ffffff59;
  border-radius: 32px;
  padding: 17px;
  left: -38px;
  top: 30px;
}

@media only screen and (max-width: 600px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px;
  }
  .card-body {
    padding: 55px 40px; 
    position: relative;
    z-index: 9;
  }
  .bg-c{
    background-image: url(../../../assets/SolutionsLine/BG_2.png);
    background-repeat: no-repeat;
    background-position: bottom;
  }
  .pd-row{
    padding-left: 24px;
    padding-right: 24px;
  }
  .button-color{
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 8px 12px;
    border-radius: 32px;
  }

  .button-color span{
    font-size: 24px;
    line-height: 24px;
  }
  .mt-140{
    margin-top: 16px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px;
  }
  .card-body {
    padding: 55px 40px; 
    position: relative;
    z-index: 9;
  }
  .bg-c{
    background-image: url(../../../assets/SolutionsLine/BG_2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pd-row{
    padding-left: 34px;
    padding-right: 34px;
  }
  .button-color{
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 8px 12px;
    border-radius: 32px;
  }

  .button-color span{
    font-size: 24px;
    line-height: 24px;
  }
  .mt-140{
    margin-top: 60px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .card-body {
    padding: 112px;
    position: relative;
    z-index: 9;
  }
  .bg-c{
    background-image: url(../../../assets/SolutionsLine/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pd-row{
    padding-left: 50px;
    padding-right: 50px;
  }
  .button-color{
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 20px;
    border-radius: 32px;
  }

  .button-color span{
    font-size: 28px;
    line-height: 28px;
  }
  .mt-140{
    margin-top: 80px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .card-body {
    padding: 112px;
    position: relative;
    z-index: 9;
  }
  .bg-c{
    background-image: url(../../../assets/SolutionsLine/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pd-row{
    padding-left: 300px;
    padding-right: 300px;
  }
  .button-color{
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 20px;
    border-radius: 32px;
  }

  .button-color span{
    font-size: 28px;
    line-height: 28px;
  }
  .mt-140{
    margin-top: 140px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
  .card-body {
    padding: 112px;
    position: relative;
    z-index: 9;
  }
  .bg-c{
    background-image: url(../../../assets/SolutionsLine/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .pd-row{
    padding-left: 300px;
    padding-right: 300px;
  }
  .button-color{
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 20px;
    border-radius: 32px;
  }

  .button-color span{
    font-size: 28px;
    line-height: 28px;
  }
  .mt-140{
    margin-top: 140px;
  }
}
</style>
