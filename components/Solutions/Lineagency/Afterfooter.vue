<template>
  <section id="FormUser">
    <div class="row mt-md-5 mt-0  fade-in-up" v-intersect>
      <div class="col-12 p-md-0 p-4 mt-md-5 mt-0">
        <div class="card d-none d-lg-block">
          <img src="../../../assets/SolutionsLine/customer/LineOctDenoiserBeauty_002 2.png"
            alt="LineOctDenoiserBeauty_002 2.png" style="position: absolute; top: 34px; left: 0" />
          <img src="../../../assets/SolutionsLine/customer/Screen Shot 2568-01-03 at 11.58.25.png"
            alt="Screen Shot 2568-01-03 at 11.58.25.png" style="position: absolute; bottom: 0; left: 124px" />
          <img src="../../../assets/SolutionsLine/customer/Screen Shot 2568-01-03 at 11.58.30.png"
            alt="Screen Shot 2568-01-03 at 11.58.30.png" style="position: absolute; top: 60px; right: 0" />
          <img src="../../../assets/SolutionsLine/customer/LineOctDenoiserBeauty_002 3.png"
            alt="LineOctDenoiserBeauty_002 3.png" style="position: absolute; bottom: 0; right: 162px" />
          <div class="card-body text-center">
            <p class="text-s-60 text-w-700 color-1F2937 mb-5">
              เชื่อมต่อทุกโอกาสธุรกิจ เพิ่มพลังการสื่อสาร<br />
              ผ่าน LINE อย่างมั่นใจ
            </p>
            <div class="d-flex">
              <a href="tel:0900967526" class="button-color d-flex justify-content-center d-flex ms-auto me-3"
                @click="trackButtonClick('โทรศัพท์', '0900967526')" data-tag="line-solution-contact-phone-button">
                <img class="me-2" src="../../../assets/SolutionsLine/customer/phone.png" alt="phone.png" />
                <span>090 096 7526</span>
              </a>

              <a href="https://lin.ee/5ljYXPo" target="_blank" rel="noopener"
                class="button-color d-flex justify-content-center d-flex me-3"
                @click="trackButtonClick('แชทผ่านไลน์', 'lin.ee/5ljYXPo')"
                data-tag="line-solution-contact-linechat-button">
                <img class="me-2" src="../../../assets/SolutionsLine/customer/chat-bubble-oval-left-ellipsis.png"
                  alt="chat.png" />
                <span>แชทผ่านไลน์</span>
              </a>

              <a href="mailto:customersolutionteam@sellsuki.com" target="_blank" rel="noopener"
                class="button-color d-flex justify-content-center d-flex me-3"
                @click="trackButtonClick('อีเมล', 'customersolutionteam@sellsuki.com')"
                data-tag="line-solution-contact-email-button">
                <img class="me-2" src="../../../assets/SolutionsLine/customer/envelope.png" alt="envelope.png" />
                <span>ติดต่อผ่านอีเมล</span>
              </a>

              <a href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                class="button-color d-flex justify-content-center d-flex me-auto ms-0"
                @click="trackButtonClick('ขอใบเสนอราคา', 'modal:exampleModalToggle')"
                data-tag="line-solution-contact-requestquote-button">
                <img class="me-2" src="../../../assets/SolutionsLine/customer/newspaper.png" alt="newspaper.png" />
                <span>ขอใบเสนอราคา</span>
              </a>
            </div>
          </div>
        </div>
        <div class="card d-block d-lg-none">
          <div class="card-body text-center">
            <p class="text-w-700 color-1F2937 mb-md-4 mb-4" style="font-size: 36px;line-height: 36px;">
              เชื่อมต่อทุกโอกาสธุรกิจ<br /> เพิ่มพลังการสื่อสาร<br />
              ผ่าน LINE อย่างมั่นใจ
            </p>
            <div class="row justify-content-center">
              <div class="col-7">
                <a @click="trackButtonClick('โทรศัพท์', '0900967526')" href="tel:0900967526"
                  class="button-color d-flex justify-content-center mt-3" style="width: 100%;display: block;"
                  data-tag="line-solution-contact-phone-button"><img class="me-2"
                    src="../../../assets/SolutionsLine/customer/phone.png" alt="phone.png" /><span>090 096
                    7526</span></a>
              </div>
              <div class="col-7">
                <a @click="trackButtonClick('แชทผ่านไลน์', 'lin.ee/5ljYXPo')" href="https://lin.ee/5ljYXPo"
                  target="_blank" rel="noopener" class="button-color d-flex justify-content-center mt-3"
                  style="width: 100%;display: block;" data-tag="line-solution-contact-linechat-button"><img class="me-2"
                    src="../../../assets/SolutionsLine/customer/chat-bubble-oval-left-ellipsis.png"
                    alt="chat-bubble-oval-left-ellipsis.png" /><span>แชทผ่านไลน์</span></a>
              </div>
              <div class="col-7">
                <a @click="trackButtonClick('ติดต่อผ่านอีเมล', 'customersolutionteam@sellsuki.com')"
                  href="mailto:customersolutionteam@sellsuki.com" target="_blank" rel="noopener"
                  class="button-color d-flex justify-content-center mt-3" style="width: 100%;display: block;"
                  data-tag="line-solution-contact-email-button"><img class="me-2"
                    src="../../../assets/SolutionsLine/customer/envelope.png"
                    alt="envelope.png" /><span>ติดต่อผ่านอีเมล</span></a>
              </div>
              <div class="col-7">
                <a @click="trackButtonClick('ขอใบเสนอราคา', 'modal:exampleModalToggle')" href="#"
                  data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                  class="button-color d-flex justify-content-center mt-3" style="width: 100%;display: block;"
                  data-tag="line-solution-contact-requestquote-button"><img class="me-2"
                    src="../../../assets/SolutionsLine/customer/newspaper.png" alt="newspaper.png" />
                  <span>ขอใบเสนอราคา</span></a>
              </div>
            </div>
          </div>
          <img src="../../../assets/SolutionsLine/customer/mobile/LineOctDenoiserBeauty_002 1.png"
            alt="LineOctDenoiserBeauty_002 1.png" style="position: absolute; bottom: 110px; left: 0;" />
          <img src="../../../assets/SolutionsLine/customer/mobile/Screen Shot 2568-01-03 at 11.58.25.png"
            alt="Screen Shot 2568-01-03 at 11.58.25.png" style="position: absolute; bottom: 3px; left: 0;" />
          <img src="../../../assets/SolutionsLine/customer/mobile/LineOctDenoiserBeauty_002 3.png"
            alt="LineOctDenoiserBeauty_002 3.png" style="position: absolute; bottom: 0px; right: 18px;" />
          <img src="../../../assets/SolutionsLine/customer/mobile/Screen Shot 2568-01-03 at 11.58.30.png"
            alt="Screen Shot 2568-01-03 at 11.58.30.png" style="position: absolute; bottom: 108px; right: 0;" />
        </div>
      </div>
    </div>
    <div class="row d-none d-md-block" style="margin-top: 160px">
      <div class="col-12 text-center color-1F2937  fade-in-up" v-intersect>
        <h2 class="text-s-60 text-w-700">บริการอื่นๆ ที่คุณอาจสนใจ</h2>
      </div>
    </div>
    <div class="row d-block d-md-none" style="margin-top: 100px">
      <div class="col-12 text-center color-1F2937  fade-in-up" v-intersect>
        <h2 class="text-s-60 text-w-700">บริการอื่นๆ ที่คุณอาจสนใจ</h2>
      </div>
    </div>
    <div class="d-none d-lg-block">
      <div class="row fade-in-up" v-intersect style="padding-top: 80px;padding-bottom: 80px;">
        <div class="col-xxl-3 col-6 mt-xxl-0 mt-4 last color-1F2937">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1)">
              <p class="mb-2 text-s-28 font-md">Consulting</p>
              <p class="mb-2 text-s-24 text-limit-3">ผู้ช่วยวางกลยุทธ์การตลาด เพิ่มยอดขาย ครบทุกด้าน
                บริการให้คำปรึกษาและทำการตลาดแบบครบวงจร
                เป็นผู้ช่วยธุรกิจ พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน
              </p>
              <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')"
                data-tag="line-solution-otherservices-consulting-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-6 mt-xxl-0 mt-4 last color-1F2937">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (2).png">
              <p class="mb-2 text-s-28 font-md">Advertising</p>
              <p class="mb-2 text-s-24 text-limit-3">ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง
                Facebook Ads, Google Ads และ Youtube Ads รวมถึงยิง Ads ใน TikTok, LINE, X และ Instagram ให้ความแม่นยำสูง
                เข้าถึงกลุ่มเป้าหมายได้ตรงจุด กระตุ้นความต้องการต่อสินค้าและบริการของคุณ ให้กลายมาเป็นฐานลูกค้าถาวร</p>
              <nuxt-link :to="localePath('/solutions/wizemoves')"
                data-tag="line-solution-otherservices-advertising-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-6 mt-xxl-0 mt-4 last color-1F2937">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (3).png">
              <p class="mb-2 text-s-28 font-md">Influencer Marketing</p>
              <p class="mb-2 text-s-24 text-limit-3">บริการหาอินฟลูเอนเซอร์ ตอบโจทย์กลุ่ม
                เป้าหมาย คอยติดตามและวัดผลผ่านเครื่องมือ Social
                Listening และ Marketing Tool
                Visualize Data อย่างมีประสิทธิภาพ</p>
              <nuxt-link :to="localePath('/solutions/wizemoves')"
                data-tag="line-solution-otherservices-influencer-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-6 mt-xxl-0 mt-4 last color-1F2937">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (4).png">
              <p class="mb-2 text-s-28 font-md">Martech</p>
              <p class="mb-2 text-s-24 text-limit-3">พัฒนาเว็บไซต์ และ Tech เชื่อมต่อ ที่ทันสมัย พร้อมรองรับ Line
                Messaging API, CRM และ CDP เพื่อเพิ่มความน่าเชื่อถือและโอกาสในการขาย เราช่วยวิเคราะห์ข้อมูลเชิงลึก
                ให้คุณเข้าใจพฤติกรรมลูกค้า นำไปสู่การ วางแผนการตลาดที่มีประสิทธิภาพ</p>
              <nuxt-link :to="localePath('/solutions/wizemoves/martech')" data-tag="line-solution-otherservices-martech-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="last d-block d-lg-none p-4 fade-in-up" v-intersect style="padding-top: 50px;padding-bottom: 50px;">
      <ssr-carousel :slides-per-page='1' show-dots paginate-by-slide loop :autoplay-delay='5'>
        <div class="slide">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1).png">
              <p class="mb-2 text-s-28 font-md">Consulting</p>
              <p class="mb-2 text-s-24">ผู้ช่วยวางกลยุทธ์การตลาด เพิ่มยอดขาย ครบทุกด้าน
                บริการให้คำปรึกษาและทำการตลาดแบบครบวงจร
                เป็นผู้ช่วยธุรกิจ พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน</p>
              <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')"
                data-tag="line-solution-otherservices-consulting-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (2).png">
              <p class="mb-2 text-s-28 font-md">Advertising</p>
              <p class="mb-2 text-s-24">ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง Facebook Ads, Google
                Ads และ Youtube Ads รวมถึงยิง Ads ใน TikTok, LINE, X และ Instagram ให้ความแม่นยำสูง
                เข้าถึงกลุ่มเป้าหมายได้ตรงจุด กระตุ้นความต้องการต่อสินค้าและบริการของคุณ ให้กลายมาเป็นฐานลูกค้าถาวร</p>
              <nuxt-link :to="localePath('/solutions/wizemoves')"
                data-tag="line-solution-otherservices-advertising-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (3).png">
              <p class="mb-2 text-s-28 font-md">Influencer Marketing</p>
              <p class="mb-2 text-s-24">บริการหาอินฟลูเอนเซอร์ ตอบโจทย์กลุ่ม
                เป้าหมาย คอยติดตามและวัดผลผ่านเครื่องมือ Social
                Listening และ Marketing Tool
                Visualize Data อย่างมีประสิทธิภาพ</p>
              <nuxt-link :to="localePath('/solutions/wizemoves')"
                data-tag="line-solution-otherservices-influencer-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="card">
            <div class="card-body">
              <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (4).png">
              <p class="mb-2 text-s-28 font-md">Martech</p>
              <p class="mb-2 text-s-24">พัฒนาเว็บไซต์ และ Tech เชื่อมต่อ ที่ทันสมัย พร้อมรองรับ Line Messaging API, CRM
                และ CDP เพื่อเพิ่มความน่าเชื่อถือและโอกาสในการขาย เราช่วยวิเคราะห์ข้อมูลเชิงลึก
                ให้คุณเข้าใจพฤติกรรมลูกค้า นำไปสู่การ วางแผนการตลาดที่มีประสิทธิภาพ</p>
              <nuxt-link :to="localePath('/solutions/wizemoves/martech')" data-tag="line-solution-otherservices-martech-button">
                <p class="mt-5 mb-0 text-s-20 font-md">สนใจบริการ <img
                    src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png"></p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <template #dot="{ disabled }">
          <div v-if="disabled == false" class="dot-carousel"></div>
          <div v-if="disabled == true" class="dot-carousel-active"></div>
        </template>
      </ssr-carousel>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    trackButtonClick(label, value) {
      if (process.client) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'button_click',
          button_label: label,
          button_value: value,
          page_path: this.$route.path
        })
      }
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.last .card {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;
  box-shadow: 0px 1px 3px 0px #6783BC12, 0px 5px 5px 0px #6783BC0F, 0px 12px 7px 0px #6783BC0A, 0px 20px 8px 0px #6783BC03, 0px 32px 9px 0px #6783BC00;
}

.last .card-body {
  padding: 24px;
}

.dot-carousel-active {
  width: 32px;
  height: 8px;
  background-color: #22C55E;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 5px;
}

.dot-carousel {
  width: 16px;
  height: 8px;
  background-color: #86EFAC;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 5px;
}

.card {
  background: linear-gradient(248.12deg, #BBF7D0 33.01%, rgba(188, 232, 255, 0.7) 70.93%);
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
}

a {
  color: unset;
}

a:hover {
  color: #FFF !important;
}

.color-1F2937 a:hover {
  color: #1F2937 !important;
}

@media only screen and (max-width: 430px) {
  .col-7 {
    width: 100% !important;
  }
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

  .button-color {
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 8px 12px;
    border-radius: 32px;
    white-space: nowrap;
    align-items: center;
  }

  .button-color span {
    font-size: 24px;
    line-height: 24px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }

  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px;
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

  .button-color {
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 8px 12px;
    border-radius: 32px;
    white-space: nowrap;
    align-items: center;
  }

  .button-color span {
    font-size: 24px;
    line-height: 24px;
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

  .button-color {
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 20px;
    border-radius: 32px;
    white-space: nowrap;
    align-items: center;
  }

  .button-color span {
    font-size: 24px;
    line-height: 24px;
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
    padding: 70px;
    position: relative;
    z-index: 9;
  }

  .button-color {
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 12px;
    border-radius: 32px;
    white-space: nowrap;
    align-items: center;
  }

  .button-color span {
    font-size: 28px;
    line-height: 28px;
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

  .button-color {
    color: #FFFFFF;
    background-color: #22C55E;
    padding: 12px 20px;
    border-radius: 32px;
    white-space: nowrap;
    align-items: center;
  }

  .button-color span {
    font-size: 28px;
    line-height: 28px;
  }
}
</style>