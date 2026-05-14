<template>
  <div class="container container-custom padding-section">
    <div class="row">
      <div class="col-12 text-center">
        <div class="m-auto text-section text-center mb-2 pt-1">
          <span class="text-ranbow text-s-24 font-bd m-0">Clients</span>
        </div>
        <div class="mt-3 mt-md-4">
            <p class="text-s-60 font-bd color-1F2937 mb-0">
                ความสำเร็จที่ลูกค้าของเรา<br class="d-block d-md-none"/>อยาก “บอกต่อ”
            </p>
            <p class="text-s-24 font-df color-1F2937 mb-0 mt-3 mt-md-4">
                ลูกค้ามากกว่า 9,000 ราย <br class="d-block d-md-none"/>ไว้วางใจให้ทีมงานผู้เชี่ยวชาญของเราคอยดูแล
            </p>
        </div>
      </div>
    </div>

    <div class="d-none d-md-block">
      <div class="row align-items-stretch mt-5">
        <div class="col-md-4 d-flex flex-column gap-4">
          <div class="card  text-dark flex-fill" 
            :style="{ backgroundImage: `url(${bgBlue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
          >
            <p class="text-s-24 color-1F2937 ">“รู้ลึก รู้จริง! ให้คำแนะนำที่ดี เป็นผู้ช่วยสำคัญ ที่ช่วย พัฒนาธุรกิจให้โตได้ไว แบบก้าวกระโดด”</p>
            <div class="d-flex align-items-center text-position-bottom">
              <img src="~/assets/New/Home/Clients/profile-image-1.svg" alt="profile-image-2.svg" width="48" height="48">
              <div class="ms-3">
                <div class="text-s-24 color-1F2937">เกษมสันต์ สัตยารักษ์</div>
                <small class="text-s-20 color-1F2937">Copper Beyond Buffet</small>
              </div>
            </div>
          </div>

          <div class="card  text-dark flex-fill"
            :style="{ backgroundImage: `url(${bgOrange})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
          >
            <p class="text-s-24 color-1F2937 ">“บริการดี แก้ปัญหาไว ติดต่อสะดวก”</p>
            <div class="d-flex align-items-center text-position-bottom">
              <img src="~/assets/New/Home/Clients/profile-image-3.svg" alt="profile-image-2.svg" width="48" height="48">
              <div class="ms-2">
                <div class="text-s-24 color-1F2937">ศิริเพ็ญ บำรุงจิตต์</div>
                <small class="text-s-20 color-1F2937">Siriraj Foundation</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex">
          <img src="~/assets/New/Home/Clients/Image-center.webp" loading="lazy"
               alt="Person"
               class="w-100 h-100 rounded"
               style="object-fit: cover;">
        </div>

        <div class="col-md-4 d-flex flex-column gap-4">
          <div class="card  text-dark flex-fill"
            :style="{ backgroundImage: `url(${bgOrange})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
          >
            <p class="text-s-24 color-1F2937 ">“รู้สึกประทับใจ มีการให้คำปรึกษาเรื่องการ Run Ads โฆษณา ใน Objective ที่แตกต่างกันตามเนื้องาน เวลามี ปัญหาสามารถช่วยสนับสนุนแก้ไขปัญหาได้อย่างรวดเร็ว”</p>
            <div class="d-flex align-items-center text-position-bottom">
              <img src="~/assets/New/Home/Clients/profile-image-2.svg" alt="profile-image-3.svg" width="48" height="48">
              <div class="ms-2">
                <div class="text-s-24 color-1F2937">ศิรินทิพย์ จริยคุณ</div>
                <small class="text-s-20 color-1F2937">BEST Express Thailand</small>
              </div>
            </div>
          </div>

          <div class="card  text-dark flex-fill"
            :style="{ backgroundImage: `url(${bgBlue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
          >
            <p class="text-s-24 color-1F2937 ">“ระบบเว็บไซต์มีประสิทธิภาพมากค่ะ”</p>
            <div class="d-flex align-items-center text-position-bottom">
              <img src="~/assets/New/Home/Clients/profile-image-4.svg" alt="profile-image-4.svg" width="48" height="48">
              <div class="ms-2">
                <div class="text-s-24 color-1F2937">อารีรัตน์ ใจแจ้ง</div>
                <small class="text-s-20 color-1F2937">MAYA Chiang Mai</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-block d-md-none">
      <div class="col-12 mt-4">
        <img class="w-100" src="~/assets/New/Home/Clients/Image-center-m.png" loading="lazy" alt="Image-center-m.png">
      </div>
      <div class="col-12 mt-4">
        <div class="card  text-dark flex-fill" 
          :style="{ backgroundImage: `url(${bgBlue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
        >
          <p class="text-s-24 color-1F2937 ">“รู้ลึก รู้จริง! ให้คำแนะนำที่ดี เป็นผู้ช่วยสำคัญ ที่ช่วย พัฒนาธุรกิจให้โตได้ไว แบบก้าวกระโดด”</p>
          <div class="d-flex align-items-center text-position-bottom">
            <img src="~/assets/New/Home/Clients/profile-image-1.svg" alt="profile-image-2.svg" width="48" height="48">
            <div class="ms-3">
              <div class="text-s-24 color-1F2937">เกษมสันต์ สัตยารักษ์</div>
              <small class="text-s-20 color-1F2937">Copper Beyond Buffet</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-4">
        <div class="card  text-dark flex-fill" 
          :style="{ backgroundImage: `url(${bgOrange})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
        >
          <p class="text-s-24 color-1F2937 ">“บริการดี แก้ปัญหาไว ติดต่อสะดวก”</p>
          <div class="d-flex align-items-center text-position-bottom">
            <img src="~/assets/New/Home/Clients/profile-image-2.svg" alt="profile-image-2.svg" width="48" height="48">
            <div class="ms-3">
              <div class="text-s-24 color-1F2937">ศิริเพ็ญ บำรุงจิตต์</div>
              <small class="text-s-20 color-1F2937">Siriraj Foundation</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-4">
        <div class="card  text-dark flex-fill" 
          :style="{ backgroundImage: `url(${bgBlue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
        >
          <p class="text-s-24 color-1F2937 ">“ระบบเว็บไซต์มีประสิทธิภาพมากค่ะ”</p>
          <div class="d-flex align-items-center text-position-bottom">
            <img src="~/assets/New/Home/Clients/profile-image-3.svg" alt="profile-image-3.svg" width="48" height="48">
            <div class="ms-3">
              <div class="text-s-24 color-1F2937">อารีรัตน์ ใจแจ้ง</div>
              <small class="text-s-20 color-1F2937">MAYA Chiang Mai</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mt-4">
        <div class="card  text-dark flex-fill" 
          :style="{ backgroundImage: `url(${bgOrange})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
        >
          <p class="text-s-24 color-1F2937 ">“รู้สึกประทับใจ มีการให้คำปรึกษา เรื่องการ Run Ads โฆษณา ใน Objective ที่แตกต่างกันตามเนื้องานเวลามีปัญหาสามารถ ช่วย สนับสนุนแก้ไขปัญหาได้อย่างรวดเร็ว”</p>
          <div class="d-flex align-items-center text-position-bottom">
            <img src="~/assets/New/Home/Clients/profile-image-4.svg" alt="profile-image-4.svg" width="48" height="48">
            <div class="ms-3">
              <div class="text-s-24 color-1F2937">ศิรินทิพย์ จริยคุณ</div>
              <small class="text-s-20 color-1F2937">BEST Express Thailand</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="success-card">
          <span class="card-text text-s-36 font-bd color-1F2937">
            ก้าวแรกสู่ความสำเร็จ! <br class="d-block d-md-none"/>คลิกเพื่อรับคำปรึกษาฟรีทันที!
          </span>
          <a target="_blank" rel="noopener" href="" 
             data-bs-target="#exampleModalToggle" 
             data-bs-toggle="modal"
             data-tag="homepage-clients-free-consultation-button"
             class="btn-gradient text-s-28">
            <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg" alt="cursor-arrow-rays.svg"
                 class="icon me-2" />
            <span class="text">ปรึกษาฟรี</span>
          </a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const bgBlue   = require('~/assets/New/Home/Clients/Bg-blue.webp')
const bgOrange = require('~/assets/New/Home/Clients/Bg-orange.webp')

export default {
  data() {
    return {
      bgBlue,
      bgOrange,
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

@media (max-width: 767px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-36 {
        font-size: 20px !important;
        line-height: 20px !important; 
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }
    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }
    .card {
      padding: 24px;
      min-height: 220px;
    }
    .success-card {
      padding: 24px 32px;
    }
    .padding-section {
      padding-top: 60px !important;
    }
    .img-size {
        height: 46px;
    }
    .text-position-bottom {
      position: absolute;
      bottom: 40px;
    }
}

@media (min-width: 768px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-36 {
        font-size: 24px !important;
        line-height: 24px !important; 
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }
    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }
    .card {
      padding: 24px;
      min-height: 280px;
    }
    .success-card {
      padding: 24px 32px;
    }
    .padding-section {
      padding-top: 80px !important;
    }
    .img-size {
        height: 46px;
    }
    .text-position-bottom {
      position: absolute;
      bottom: 60px;
    }
}

@media (min-width: 1200px) {
    .text-s-28 {
        font-size: 28px !important;
        line-height: 28px !important;
    }

    .text-s-36 {
        font-size: 36px !important;
        line-height: 36px !important; 
    }

    .text-s-60 {
        font-size: 60px !important;
        line-height: 60px !important;
    }

    .text-s-24 {
        font-size: 24px !important;
        line-height: 24px !important;
    }
    .btn-gradient {
        height: 48px;
        font-family: 'Heavent-med'
    }
    .card {
      padding: 40px;
      min-height: 330px;
    }
    .success-card {
      padding: 58px 64px;
    }
    .padding-section {
      padding-top: 120px !important;
    }
    .img-size {
        height: 100%;
    }
    .text-position-bottom {
      position: absolute;
      bottom: 70px;
    }
}

.text-ranbow,
.text-ranbow>* {
    background: linear-gradient(84.92deg, #F35C20 41.14%, #FB923C 50.69%, #58C6FF 57.79%, #01B1F5 68.43%);
    -webkit-background-clip: text;
  background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

.btn-gradient {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: #fff !important;
  background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
  width: auto;
  white-space: nowrap;
}

.card {
  border-radius: 16px;
  border: 1px solid #00000008 !important;
  backdrop-filter: blur(4px);
}

.success-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.success-card {
  background-color: #F9FAFB;
  background: url('~/assets/New/Home/Clients/Bg-card.webp') no-repeat center/cover;
}
</style>
