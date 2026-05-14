<template>
  <div class="container container-custom padding-section">
    <div class="row">
      <div class="col-12 text-center">
        <div class="m-auto text-section text-center mb-2 pt-1">
          <span class="text-ranbow text-s-24 font-bd m-0">Our Works</span>
        </div>
        <div class="mt-4">
          <p class="text-s-60 font-bd color-1F2937 mb-0">
            ผลงานของเรา
          </p>
        </div>
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col-4 d-flex justify-content-center mt-4">
        <div class="card-container card1">
          <div class="card-bg" :style="{ backgroundImage: `url(${require('~/assets/New/Home/OurWorks/1.webp')})` }">
          </div>
          <div class="card-overlay">
            <div class="card-icon">
              <img src="~/assets/New/Home/OurWorks/Icon-Container-1.png" alt="Icon-Container-1" />
            </div>
            <h3 class="text-s-36 font-bd mb-0 mt-4">หัวข้อผลงาน</h3>
            <p class="text-s-24 color-FFFFFF mb-0 mt-5 text-limit-3">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex justify-content-center mt-4">
        <div class="card-container card2">
          <div class="card-bg" :style="{ backgroundImage: `url(${require('~/assets/New/Home/OurWorks/2.webp')})` }">
          </div>
          <div class="card-overlay">
            <div class="card-icon">
              <img src="~/assets/New/Home/OurWorks/Icon-Container-2.png" alt="Icon-Container-2" />
            </div>
            <h3 class="text-s-36 font-bd mb-0 mt-4">หัวข้อผลงาน</h3>
            <p class="text-s-24 color-FFFFFF mb-0 mt-5 text-limit-3">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex justify-content-center mt-4">
        <div class="card-container card3">
          <div class="card-bg" :style="{ backgroundImage: `url(${require('~/assets/New/Home/OurWorks/3.webp')})` }">
          </div>
          <div class="card-overlay">
            <div class="card-icon">
              <img src="~/assets/New/Home/OurWorks/Icon-Container-3.png" alt="Icon-Container-3" />
            </div>
            <h3 class="text-s-36 font-bd mb-0 mt-4">หัวข้อผลงาน</h3>
            <p class="text-s-24 color-FFFFFF mb-0 mt-5 text-limit-3">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div class="col-4 d-flex justify-content-center mt-4">
        <div class="card-container card4">
          <div class="card-bg" :style="{ backgroundImage: `url(${require('~/assets/New/Home/OurWorks/4.webp')})` }">
          </div>
          <div class="card-overlay">
            <div class="card-icon">
              <img src="~/assets/New/Home/OurWorks/Icon-Container-3.png" alt="Icon-Container-3" />
            </div>
            <h3 class="text-s-36 font-bd mb-0 mt-4">หัวข้อผลงาน</h3>
            <p class="text-s-24 color-FFFFFF mb-0 mt-5 text-limit-3">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>

      <div class="col-8 d-flex justify-content-center mt-4">
        <div class="success-card">
          <span class="card-text text-s-36 font-bd color-1F2937">
            ยังมีอีกหลายผลงานที่คุณอาจสนใจ และตรงกับความต้องการ
          </span>
          <a target="_blank" rel="noopener" href="" data-tag="homepage-ourworks-explore-more-button">
            <span class="text text-s-28">สำรวจผลงานเพิ่มเติม</span>
            <img width="24px" height="24px" src="~/assets/New/Home/hand-raised.svg" alt="hand-raised.svg"
              class="icon ms-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

@media (max-width: 767px) {
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px !important;
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

  .padding-section {
    padding-top: 60px !important;
  }
}

@media (min-width: 768px) {
  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px !important;
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

  .padding-section {
    padding-top: 80px !important;
  }
}

@media (min-width: 1200px) {
  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
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

  .padding-section {
    padding-top: 120px !important;
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
}

.success-card {
  display: flex;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.success-card {
  background: url('~/assets/New/Home/Clients/Bg-success-card.png') no-repeat center/cover;
}

.card-container {
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  color: white;
  border: 1px solid #00000008;
}

.card-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.card-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%),
    linear-gradient(180deg, rgba(221, 140, 59, 0.06) 0%, rgba(0, 88, 161, 0.12) 100%);
  backdrop-filter: blur(1.5px);
  display: flex;
  flex-direction: column;
  padding: 40px;
  transition: all 0.4s ease;
}

.card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  display: inline-block;
}

.card-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  transition: all 0.4s ease;
}

.card-container:hover .card-bg {
  background:
    linear-gradient(0deg, #BCE8FF, #BCE8FF),
    linear-gradient(0deg, #FFFFFF, #FFFFFF),
    linear-gradient(0deg, #BCE8FF, #BCE8FF) !important;
}

.card-container:hover .card-overlay {
  background:
    linear-gradient(0deg, #BCE8FF, #BCE8FF),
    linear-gradient(0deg, #FFFFFF, #FFFFFF),
    linear-gradient(0deg, #BCE8FF, #BCE8FF) !important;
}

.card-container:hover h3,
.card-container:hover p {
  color: #1F2937 !important;
}

/* Icon hover แต่ละอัน */
.card1:hover .card-icon img {
  content: url('~/assets/New/Home/OurWorks/Icon-Container-hover-1.png');
}

.card2:hover .card-icon img {
  content: url('~/assets/New/Home/OurWorks/Icon-Container-hover-2.png');
}

.card3:hover .card-icon img {
  content: url('~/assets/New/Home/OurWorks/Icon-Container-hover-3.png');
}

.card4:hover .card-icon img {
  content: url('~/assets/New/Home/OurWorks/Icon-Container-hover-3.png');
}
</style>
