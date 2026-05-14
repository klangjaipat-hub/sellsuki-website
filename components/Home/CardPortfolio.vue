<template>
  <div class="container padding-section">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xl-5 col-md-3 col-12 mt-xl-4 mt-0">
                <p class="text-s-60 font-md mb-0 scroll-text-container">
                  <span class="reveal-text">Sellsuki เป็นให้คุณได้ มากกว่าแค่คำว่า </span>
                  <span class="reveal-text">พาร์ทเนอร์ธุรกิจ </span>
                  <span class="reveal-text">เราพร้อมจะพา SMEs ไทย </span>
                  <span class="reveal-text">เติบโตไปไกลกว่าเดิม </span>
                  <span class="reveal-text">ด้วยแพลตฟอร์มและบริการ </span>
                  <span class="reveal-text"><br/>ที่ครบ จบ ในที่เดียว</span>
                </p>
              </div>
              <div class="col-xl-7 col-md-9 col-12 mt-4 mt-md-0 mb-2 mb-md-0">
                <div class="stats-grid ps-xl-4 pe-xl-2 ps-sm-2 pe-sm-0 ps-0 pe-0">
                  <div class="stat-box">
                    <div class="text-s-24 color-6B7280 text-start text-space">มีประสบการณ์ดูแล SMEs<br /> ไทยกว่า</div>
                    <div class="fuzzy-text font-md text-start" v-countup="10"></div>
                    <div class="text-s-24 color-1F2937 text-end">ปี</div>
                  </div>

                  <div class="stat-box">
                    <div class="text-s-24 color-6B7280 text-start text-space">ช่วยลูกค้าพิชิตยอดขายกว่า</div>
                    <div class="fuzzy-text font-md text-start" v-countup="1000"></div>
                    <div class="text-s-24 color-1F2937 text-end">ล้านบาท</div>
                  </div>

                  <div class="stat-box highlight">
                    <div class="text-s-24 color-6B7280 text-start text-space">ยอดขายของลูกค้าเติบโต</div>
                    <div class="fuzzy-text font-md text-start" v-countup="120"></div>
                    <div class="text-s-24 color-1F2937 text-end">เปอร์เซ็นต์</div>
                  </div>

                  <div class="stat-box">
                    <div class="text-s-24 color-6B7280 text-start text-space">ROAS กลับคืนสู่ลูกค้า</div>
                    <div class="fuzzy-text font-md text-start" v-countup="10"></div>
                    <div class="text-s-24 color-1F2937 text-end">เท่า</div>
                  </div>

                  <div class="stat-box">
                    <div class="text-s-24 color-6B7280 text-start text-space">ลูกค้าไว้ใจให้เราดูแลมากกว่า</div>
                    <div class="fuzzy-text font-md text-start" v-countup="9000"></div>
                    <div class="text-s-24 color-1F2937 text-end">ราย</div>
                  </div>

                  <div class="stat-box">
                    <div class="text-s-24 color-6B7280 text-start text-space">LINE Broadcast แล้วมากกว่า</div>
                    <div class="fuzzy-text font-md text-start" v-countup="30000"></div>
                    <div class="text-s-24 color-1F2937 text-end">ล้านข้อความ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0  // Changed from -1 to 0 to make first item active by default
    }
  },
  mounted() {
    this.initScrollObservers();
  },
  methods: {
    initScrollObservers() {
      const container = document.querySelector('.scroll-text-container');
      const texts = container?.querySelectorAll('.reveal-text');
      
      if (!texts) return;

      // Activate first text by default
      texts[0].classList.add('active');

      // Start observing from second text
      texts.forEach((text, index) => {
        if (index === 0) return; // Skip first text

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              texts.forEach((t, i) => {
                t.classList.remove('active');
              });
              this.activeIndex = index;
              text.classList.add('active');
            } else if (this.activeIndex === index) {
              text.classList.remove('active');
              // When scrolling away, keep first text active
              this.activeIndex = 0;
              texts[0].classList.add('active');
            }
          });
        }, {
          threshold: 0.2, // Reduced threshold for earlier trigger
          rootMargin: "-30% 0px -30% 0px" // Increased margin for more scroll area
        });

        observer.observe(text);
      });
    }
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

.fuzzy-text {
  color: #1F2937;
  transition: text-shadow 0.3s ease;
}

.fuzzy-text:hover {
  text-shadow:
    0 0 60px rgba(0, 136, 255, 1),
    0 0 80px rgba(0, 136, 255, 0.4),
    0 0 120px rgba(0, 136, 255, 0.2);
}

.text-space {
  min-height: 50px;
}

.card {
  background-color: #FFFFFF;
  border: 1px solid #0000001A !important;
  border-radius: 16px;
  position: relative;
  width: 100%;
}

.stats-grid > div:nth-child(1):hover {
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-image-source: radial-gradient(100% 112.14% at 100% 100%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;
}

.stats-grid > div:nth-child(2):hover {
  border-width: 0px 1px 1px 1px;
  border-style: solid;

  border-image-source: radial-gradient(100% 112.14% at 50% 100%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;

  border-bottom-color: #32A9FF;
}

.stats-grid > div:nth-child(3):hover {
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  border-image-source: radial-gradient(100% 112.14% at 0% 100%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;
}

.stats-grid > div:nth-child(4):hover {
  border-width: 1px 1px 0 0; /* top right bottom left */
  border-style: solid;
  border-image-source: radial-gradient(100% 112.14% at 100% 0%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;
}

.stats-grid > div:nth-child(5):hover {
  border-width: 1px 1px 0 1px; /* top right bottom left */
  border-style: solid;

  border-image-source: radial-gradient(100% 112.14% at 50% 0%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;
}

.stats-grid > div:nth-child(6):hover {
  border-width: 1px 0 0 1px; /* top right bottom left */
  border-style: solid;
  border-image-source: radial-gradient(100% 112.14% at 0% 0%, #32A9FF 0%, #FFFFFF 100%);
  border-image-slice: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  width: 100%;
  border-collapse: collapse;
}

.stat-box {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* เส้นแบ่งเฉพาะด้านขวาและล่างของช่องด้านใน */
.stat-box:not(:nth-child(3)):not(:nth-child(6)) {
  border-right: 1px solid #ccc;
}

.stat-box:nth-child(-n+3) {
  border-bottom: 1px solid #ccc;
}

.highlight {
  position: relative;
}

.icon {
  position: absolute;
  bottom: 50px;
  right: 25px;
  width: 40px;
  height: 40px;
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

  .fuzzy-text {
    font-size: 44px;
    line-height: 44px;
  }
  .card .card-body {
    padding: 24px;
  }
  .stat-box {
    padding: 16px 8px;
  }
  .padding-section {
    padding-top: 60px !important;
  }
}

@media (min-width: 768px) {
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

  .fuzzy-text {
    font-size: 56px;
    line-height: 56px;
  }
  .card .card-body {
    padding: 45px 24px;
  }
  .stat-box {
    padding: 20px 16px;
  }
  .padding-section {
    padding-top: 80px !important;
  }
  .stat-box {
    min-width: 155px;
  }
  .col-md-9 {
    width: 70%;
  }
  .col-md-3 {
    width: 30%;
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
  .fuzzy-text {
    font-size: 96px;
    line-height: 66px;
  }
  .card .card-body {
    padding: 75px 40px;
  }
  .stat-box {
    padding: 24px;
  }
  .padding-section {
    padding-top: 120px !important;
  }
  .stat-box {
    min-width: auto;
  }
  .col-md-9 {
    width: 58%;
  }
  .col-md-3 {
    width: 42%;
  }
}

@media (min-width: 1400px) {
  .stat-box {
    min-width: auto;
  }
}

@media (min-width: 1580px) {
  .stat-box {
    min-width: 250px;
  }
}

.scroll-text-container {
  display: inline;
  white-space: normal;
}

.reveal-text {
  color: #9CA3AF;
  transition: color 0.4s ease;
  display: inline;
  margin-right: 0;
}

.reveal-text.active {
  color: #EA580C;
}
</style>
