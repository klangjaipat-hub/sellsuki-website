<template>
  <section class="bg-c" style="margin-top: 140px">
    <div class="container">
      <div class="row fade-in-up" v-intersect>
        <div class="col-12 mt-5 mb-4 text-center color-1F2937">
          <h2 class="text-s-60 text-w-700">ลูกค้าที่วางใจให้เราช่วยดูแล</h2>
        </div>
      </div>
      <div class=" d-none d-md-block">
        <div class="row mt-5 mb-5 text-center fade-in-up" v-intersect>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
              class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/1.png"
              alt="1.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
              class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/2.png"
              alt="2.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/3.png"
              alt="3.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/4.png"
              alt="4.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/5.png"
              alt="5.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/6.png"
              alt="6.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/7.png"
              alt="7.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/8.png"
              alt="8.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/9.png"
              alt="9.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/10.png"
              alt="10.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/11.png"
              alt="11.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/12.png"
              alt="12.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/13.png"
              alt="13.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/14.png"
              alt="14.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/15.png"
              alt="15.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/16.png"
              alt="16.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/17.png"
              alt="17.png"
            />
          </div>
          <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4 mb-5">
            <img
            class="img-fluid"
              src="../../../assets/SolutionsWizemoves/customer/18.png"
              alt="18.png"
            />
          </div>
        </div>
      </div>
      <div class="d-block d-md-none pb-5 fade-in-up" v-intersect>
        <KeenSliderCustomer/>
      </div>
      <CardContact page="Wizemoves"/>
    </div>
  </section>
</template>

<script>
import KeenSliderCustomer from '@/components/Solutions/Wizemoves/KeenSliderCustomer'
import CardContact from '@/components/Solutions/Wizemoves/CardContact'

export default {
  components: {
    KeenSliderCustomer,
    CardContact
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
.card {
  background: linear-gradient(253.51deg, #d4d1ec 38.63%, #fde68a 81.8%);
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
    0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
    0px 32px 9px 0px #7b64af00;
}
.last .card {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;
  box-shadow: 0px 1px 3px 0px #6783BC12,0px 5px 5px 0px #6783BC0F,0px 12px 7px 0px #6783BC0A,0px 20px 8px 0px #6783BC03,0px 32px 9px 0px #6783BC00;
}
.last .card-body {
  padding: 24px;
}
.dot-carousel-active{
    width: 32px;
    height: 8px;
    background-color: #8B5CF6;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}
.dot-carousel{
    width: 16px;
    height: 8px;
    background-color: #C4B5FD;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}
a {
  color: unset;
}
a:hover {
  color: none !important;
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
    background-image: url(../../../assets/SolutionsWizemoves/BG_2.png);
    background-repeat: no-repeat;
    background-position: bottom;
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
    background-image: url(../../../assets/SolutionsWizemoves/BG_2.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
