<template>
  <div class="container padding-section">
    <div class="row">
      <div class="col-12 text-center">
        <div class="m-auto text-section text-center mb-2 pt-1">
          <span class="text-ranbow text-s-24 font-bd m-0">Problem Statement</span>
        </div>
        <p class="text-s-60 font-bd color-1F2937 mt-4">
          ปี 2025 แล้ว แต่ธุรกิจของคุณก็ยังคง<br class="d-block d-xl-none" />ประสบปัญหาเหล่านี้อยู่ใช่ไหม?
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4 col-12 d-flex justify-content-center mt-4" v-for="(card, index) in cards" :key="index">
        <div class="card-container">
          <div class="card-bg" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="card-overlay">
            <div class="card-icon" :class="card.iconClass">
              <img :src="card.icon" :alt="card.title" />
            </div>
            <h3 class="gradient-text-orange text-s-36 font-bd mb-0 mt-xl-4 mt-3">{{ card.title }}</h3>
            <p class="text-s-24 color-FFFFFF mb-0  mt-xl-4 mt-2">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <a target="_blank" rel="noopener" href="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
          class="btn-gradient banner-btn text-s-28" data-tag="homepage-problemstatement-free-consultation-button">
          <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg" alt="cursor-arrow-rays.svg"
            class="icon me-2" />
          <span class="text">รับคำปรึกษาเพื่อวิเคราะห์ปัญหาฟรี!</span>
        </a>
        <br />
        <p class="text-s-24 color-6B7280 mt-4">พันธมิตรที่คุณวางใจ เพื่อการเติบโตที่ไกลกว่าเดิม</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'ยอดขายลด ปั้นแบรนด์เท่าไหร่ ก็ไม่ปัง',
          description: 'เจอปัญหาเศรษฐกิจช่วงนี้แล้วยอดขายตก พยายามสร้างแบรนด์ยังไงก็ไม่เปรี้ยงสักที',
          image: require('@/assets/New/Home/ProblemStatement/1.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-1.svg'),
          iconClass: 'bg-icon-1'
        },
        {
          title: 'อยากได้พาร์ทเนอร์ธุรกิจ ที่ดีต่อใจ แต่หาไม่ได้สักที',
          description: 'พาร์ทเนอร์ธุรกิจหรือเอเจนซี่ ที่ใช้บริการอยู่ไม่ตอบโจทย์ คุยกันยังไงก็ไม่คลิ๊ก หรือยังลังเลที่จะตัดสินใจเลือก ใช้บริการ',
          image: require('@/assets/New/Home/ProblemStatement/2.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-2.png'),
          iconClass: 'bg-icon-2'
        },
        {
          title: 'โดนปิดการมองเห็น ยิง Ads เท่าไหร่ ก็ปิดดีลไม่ได้',
          description: 'ยอด Engagement บนโซเชียลมีเดียต่ำลงทุกวัน ท้อแท้กับการยิงแอดเพราะยิงไปก็ไม่ตรง กลุ่มเป้าหมาย ปิดการขายไม่ได้สักที',
          image: require('@/assets/New/Home/ProblemStatement/3.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-3.svg'),
          iconClass: 'bg-icon-1'
        },
        {
          title: 'ใช้ LINE OA แล้วแต่ก็ยังขายไม่ดี ไม่รู้ว่าพลาดตรงไหน',
          description: 'พยายามทำการตลาดบน LINE แต่ยอดขายไม่เติบโต ไม่รู้ว่าต้องแก้ตรงจุดไหน',
          image: require('@/assets/New/Home/ProblemStatement/4.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-4.svg'),
          iconClass: 'bg-icon-2'
        },
        {
          title: 'บริหารสต๊อกไม่คล่อง จัดส่ง ไม่ทัน เสียโอกาสในการขาย',
          description: 'แพ็กของ-ส่งของไม่ทัน สต๊อกสินค้าไม่เป็นระบบ ของหมด โดยไม่รู้ตัว ขาดระบบจัดการคลังสินค้าที่มีประสิทธิภาพ',
          image: require('@/assets/New/Home/ProblemStatement/5.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-5.svg'),
          iconClass: 'bg-icon-1'
        },
        {
          title: 'อยากลองใช้ระบบ CRM แต่ไม่รู้จะเริ่มยังไง',
          description: 'ได้ยินมาตลอดว่า CRM ช่วยรักษาลูกค้าได้ แต่ยังไม่เคย ลองใช้ หรือยังคงทำแบบ Manual อยู่',
          image: require('@/assets/New/Home/ProblemStatement/6.webp'),
          icon: require('@/assets/New/Home/ProblemStatement/Icon-6.svg'),
          iconClass: 'bg-icon-2'
        },
      ],
    };
  },
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

.padding-section {
  padding-top: 90px !important;
}

.btn-gradient {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  font-family: 'Heavent-med', sans-serif;
  color: #fff !important;
  background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  width: auto;
}

.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(84.92deg, #F35C20 41.14%, #FB923C 50.69%, #58C6FF 57.79%, #01B1F5 68.43%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-orange {
  background: linear-gradient(90deg, #F97316 0%, #FDBA74 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}


.text-section {
  padding-left: 12px;
  padding-right: 12px;
  display: inline-block;
  width: auto;
  border: 1px solid #00000008;
  backdrop-filter: blur(10px);
  border-radius: 32px;
  background: #fff;
}

.text-s-24 {
  line-height: 24px;
}

.card-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  color: white;
}

/* overlay content */
.card-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%),
    linear-gradient(180deg, rgba(221, 140, 59, 0.06) 0%, rgba(0, 88, 161, 0.12) 100%);
  backdrop-filter: blur(1.5px);
  display: flex;
  flex-direction: column;
}

.card-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('~@/assets/New/Home/ProblemStatement/Bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
}

.card-overlay>* {
  position: relative;
  z-index: 1;
}

.card-overlay:hover::before {
  opacity: 1;
}

/* icon fade */
.bg-icon-1,
.bg-icon-2 {
  transition: background 0.5s ease;
}

.card-overlay:hover .bg-icon-1,
.card-overlay:hover .bg-icon-2 {
  background: rgba(17, 24, 39, 1);
}

.card-overlay:hover h3,
.card-overlay:hover p {
  color: #1F2937 !important;
}

.card-overlay h3.gradient-text-orange {
  transition: all 0.5s ease;
}

.card-overlay:hover h3.gradient-text-orange {
  background: none !important;
  -webkit-background-clip: unset !important;
  -webkit-text-fill-color: #1F2937 !important;
  color: #1F2937 !important;
}

.card-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  border-radius: 16px;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  backdrop-filter: blur(30px);
  display: inline-block;
}

@media (max-width: 767px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-36 {
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

  .card-icon {
    width: 48px;
    height: 48px;
    padding: 12px;
  }

  .card-icon img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .card-container {
    height: 192px;
  }

  .card-overlay {
    padding: 24px;
  }

  .btn-gradient {
    height: 36px;
  }
}

@media (min-width: 768px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-36 {
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

  .card-icon {
    width: 48px;
    height: 48px;
    padding: 12px;
  }

  .card-icon img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .card-container {
    height: 276px;
  }

  .card-overlay {
    padding: 24px;
  }

  .btn-gradient {
    height: 36px;
  }
}

@media (min-width: 1200px) {
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

  .card-icon {
    width: 64px;
    height: 64px;
    padding: 16px;
  }

  .card-icon img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }

  .card-container {
    height: 350px;
  }

  .card-overlay {
    padding: 40px;
  }

  .btn-gradient {
    height: 48px;
  }
}
</style>
