<template>
  <section class="pb-3">
    <div class="container pb-md-5 pb-0 p-lg-0 p-4">
      <div class="row pt-4 fade-in-up" v-intersect>
        <div class="col-12 mt-5 mb-4 text-center color-1F2937">
          <h2 class="text-s-60 text-w-700 d-none d-lg-block">
            ใช้บริการ LINE Service กับ Sellsuki ดียังไง
          </h2>
          <h2 class="text-s-44 text-w-700 d-block d-lg-none">
            ใช้บริการ LINE Service<br/> กับ Sellsuki ดียังไง
          </h2>
        </div>
      </div>
      <div class="row mt-5 mb-5 ps-md-0 ps-5 fade-in-up" v-intersect>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-01.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                น่าเชื่อถือและไว้ใจได้
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                เราเป็น LINE Agency Partner อันดับ 1 ของประเทศ โดยมีจำนวนผู้ใช้มากกว่า 8,000 ราย
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-02.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                อัพเดทความรู้ และสอน เทคนิคการใช้ LINE ฟรี
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                มี Course Training LINE ขั้นเทพฟรี
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-03.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                ช่วยหา Solutions และรับปรึกษาตลอดการใช้งาน
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                โดย LINE Certified Coach<br/> และทีมงานผู้เชี่ยวชาญที่ผ่านการอบรม
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-04.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                ซื้อข้อความเพิ่มเติมได้ ไม่จำกัด
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                ซื้อข้อความเพิ่มเติมได้ไม่จำกัดจำนวน
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-05.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                รองรับทุกระบบการชำระเงิน
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                ชำระเงินหลากหลายช่องทาง ทั้ง QR Code<br/> บัตรเครดิต และเงินสด
              </p>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body">
              <div class="cart-img">
                <img
                  src="../../../assets/SolutionsLine/ICON_LINE-06.png"
                  alt="uil_line.png"
                />
              </div>
              <p class="text-s-36 text-w-700 color-1F2937 m-auto">
                สามารถออกใบกำกับ ภาษีได้
              </p>
              <p class="text-s-24  color-1F2937 mb-0">
                ออกเอกสารทางบัญชีได้
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
a {
  color: #7c3aed;
}
a:hover {
  color: #7c3aed !important;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .cart-img img {
    width: 48px;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -20px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 430px;
    margin-bottom: 32px;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .card-body {
    padding: 32px 32px 32px 40px;
  }
  .card-body .text-s-24{
    margin-top: 8px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .cart-img img {
    width: 48px;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 430px;
    min-height: 224px;
    margin-bottom: 32px;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .card-body {
    padding: 32px 32px 32px 40px;
  }
  .card-body .text-s-24{
    margin-top: 8px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .cart-img img {
    width: 48px;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 100%;
    min-height: 100px;
    margin-bottom: 32px;
  }
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }
  .card-body {
    padding: 32px 32px 32px 80px;
  }
  .card-body .text-s-24{
    margin-top: 8px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .cart-img img {
    width: 100%;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 430px;
    min-height: 224px;
    margin-bottom: 80px;
  }
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .card-body {
    padding: 40px 40px 40px 100px;
  }
  .card-body .text-s-24{
    top: 128px;
    position: absolute;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .cart-img img {
    width: 100%;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 430px;
    min-height: 224px;
    margin-bottom: 80px;
  }
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .card-body {
    padding: 40px 40px 40px 100px;
  }
  .card-body .text-s-24{
    top: 128px;
    position: absolute;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 2000px) {
  .cart-img img {
    width: 100%;
  }
  .cart-img {
    position: absolute;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    box-shadow: -1px -6px 4px 0px #ffffff59 inset,
      1px 1px 4px 0px #ffffff59 inset, 0px 3px 10px 0px #0000000d;
    background: #ffffff59;
    border-radius: 32px;
    padding: 17px;
    left: -38px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .card {
    background-color: #ffffff99;
    backdrop-filter: blur(4px);
    border: 1px solid #00000008 !important;
    border-radius: 16px;
    max-width: 430px;
    min-height: 224px;
    margin-bottom: 80px;
  }
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }
  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }
  .card-body {
    padding: 40px 40px 40px 100px;
  }
  .card-body .text-s-24{
    top: 128px;
    position: absolute;
  }
}
</style>
