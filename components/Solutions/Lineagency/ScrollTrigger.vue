<template>
<div>
  <div class="container d-lg-block d-none fade-in-up" v-intersect>
    <div ref="stickyBox" class="sticky-box" @wheel="handleScroll">
      <div class="row mt-md-5 mt-2 mb-3 text-start">
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div class="col-xxl-2 col-3 text-center">
            <div v-if="type === 'Sponsored Sticker'">
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Misc icon.png"
                alt="solar_sticker-smile-square-linear.png"
              />
              <img
                style="margin-top: 16px;"
                src="~/assets/SolutionsLine/LineSponsoredSticker/long.png"
                alt="long.png"
              />
            </div>
            <div v-else>
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Content.png"
                alt="Content.png"
              />
            </div>
          </div>
          <div class="col-xxl-10 col-9">
            <div class="ms-3">
              <p class="text-s-44 font-bd mt-1">Sponsored Sticker</p>
              <div v-if="type === 'Sponsored Sticker'">
                <p class="text-s-24">
                  ผู้ใช้ต้องเพิ่มเพื่อนบัญชีทางการเพื่อนได้รับสติกเกอร์
                  หรือทางแบรนด์<br />
                  สามารถแจกโดย ไม่มีข้อกำหนดได้เช่นกัน
                </p>
                <p class="text-s-24 mb-1">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />ระยะเวลาการดาวน์โหลด 30 วัน
                </p>
                <p class="text-s-24 mb-0">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                    alt="clock.png"
                  />ระยะเวลาการใช้งาน 90 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-xxl-2 col-3 text-center">
            <div v-if="type === 'Mission Sticker'">
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Misc icon.png"
                alt="solar_sticker-smile-square-linear.png"
              />
              <img
                style="margin-top: 16px;"
                src="~/assets/SolutionsLine/LineSponsoredSticker/long.png"
                alt="long.png"
              />
            </div>
            <div v-else>
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Content.png"
                alt="Content.png"
              />
            </div>
          </div>
          <div class="col-xxl-10 col-9">
            <div class="ms-3">
              <p class="text-s-44 font-bd mt-1">Mission Sticker</p>
              <div v-if="type === 'Mission Sticker'">
                <p class="text-s-24">
                  ผู้ใช้ต้องทำ Mission เช่น ตอบแบบสอบถาม หรือ กรอกประวัติก่อนเพื่อ <br/>จะมีสิทธิ์ในการ ดาวน์โหลดสติกเกอร์ประเภทนี้
                </p>
                <p class="text-s-24 mb-1">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />ระยะเวลาการดาวน์โหลด 90 วัน
                </p>
                <p class="text-s-24 mb-0">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                    alt="clock.png"
                  />ระยะเวลาการใช้งาน 180 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-xxl-2 col-3 text-center">
            <div v-if="type === 'Must View Sticker'">
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Misc icon.png"
                alt="solar_sticker-smile-square-linear.png"
              />
              <img
                class="img-fluid"
                style="margin-top: 16px;"
                src="~/assets/SolutionsLine/LineSponsoredSticker/shot.png"
                alt="shot.png"
              />
            </div>
            <div v-else>
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Content.png"
                alt="Content.png"
              />
            </div>
          </div>
          <div class="col-xxl-10 col-9">
            <div class="ms-3">
              <p class="text-s-44 font-bd mt-1">Must View Sticker</p>
              <div v-if="type === 'Must View Sticker'">
                <p class="text-s-24">
                  ผู้ใช้ต้องดูวิดีโอก่อนเพื่อที่จะมีสิทธิ์ในการดาวน์โหลด Sponsored Sticker ประเภทนี้
                </p>
                <p class="text-s-24 mb-1">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />ระยะเวลาการดาวน์โหลด 30 วัน
                </p>
                <p class="text-s-24 mb-0">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                    alt="clock.png"
                  />ระยะเวลาการใช้งาน 90 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-xxl-2 col-3 text-center">
            <div v-if="type === 'Secret/Direct Sticker'">
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/Misc icon.png"
                alt="solar_sticker-smile-square-linear.png"
              />
            </div>
            <div v-else>
              <img
                class="img-fluid"
                src="~/assets/SolutionsLine/LineSponsoredSticker/solar_sticker-smile-square-linear.png"
                alt="Misc icon.png"
              />
            </div>
          </div>
          <div class="col-xxl-10 col-9">
            <div class="ms-3">
              <p class="text-s-44 font-bd mt-1">Secret/Direct Sticker</p>
              <div v-if="type === 'Secret/Direct Sticker'">
                <p class="text-s-24">
                  ผู้ใช้จะได้รับลิงก์ดาวน์โหลดสติกเกอร์จากทางแบรนด์เท่านั้น <br/>โดยสติกเกอร์เหล่านี้ไม่มีใน Sticker Shop
                </p>
                <p class="text-s-24 mb-1">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />ระยะเวลาการดาวน์โหลด 90 วัน
                </p>
                <p class="text-s-24 mb-0">
                  <img
                    class="me-2"
                    src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                    alt="clock.png"
                  />ระยะเวลาการใช้งาน 180 วัน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <img
          v-if="type === 'Sponsored Sticker'"
          class="img-fluid animate__animated  animate__fadeIn"
          src="~/assets/SolutionsLine/LineSponsoredSticker/image.png"
          alt="image.png"
        />
        <img
          v-if="type === 'Mission Sticker'"
          class="img-fluid animate__animated  animate__fadeIn"
          src="~/assets/SolutionsLine/LineSponsoredSticker/Image(1).png"
          alt="image.png"
        />
        <img
          v-if="type === 'Must View Sticker'"
          class="img-fluid animate__animated  animate__fadeIn"
          src="~/assets/SolutionsLine/LineSponsoredSticker/Image(2).png"
          alt="image.png"
        />
        <img
          v-if="type === 'Secret/Direct Sticker'"
          class="img-fluid animate__animated  animate__fadeIn"
          src="~/assets/SolutionsLine/LineSponsoredSticker/Image(3).png"
          alt="image.png"
        />
      </div>
    </div>
    </div>
    <div class="content">
      <p v-for="i in 1" :key="i"></p>
    </div>
  </div>
  <div class="d-block d-lg-none mt-5">
    <ssr-carousel :slides-per-page='1' show-dots paginate-by-slide loop :autoplay-delay='5'>
      <div class="slide">
        <div class="card">
          <div class="card-body">
            <p class="text-s-28 font-bd text-center">Sponsored Sticker</p>
            <img
              class="img-fluid"
              src="~/assets/SolutionsLine/LineSponsoredSticker/image.png"
              alt="image.png"
            />
            <div>
              <p class="text-s-20 mt-3 mb-2">
                ผู้ใช้ต้องเพิ่มเพื่อนบัญชีทางการเพื่อนได้รับสติกเกอร์ หรือทางแบรนด์ สามารถแจกโดย ไม่มีข้อกำหนดได้เช่นกัน
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                  alt="arrow-down-tray.png"
                />ระยะเวลาการดาวน์โหลด 30 วัน
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                  alt="clock.png"
                />ระยะเวลาการใช้งาน 90 วัน
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="card">
          <div class="card-body">
            <p class="text-s-28 font-bd text-center">Mission Sticker</p>
            <img
              class="img-fluid"
              src="~/assets/SolutionsLine/LineSponsoredSticker/Image(1).png"
              alt="image.png"
            />
            <div>
              <p class="text-s-20 mt-3 mb-2">
                ผู้ใช้ต้องทำ Mission เช่น ตอบแบบสอบถาม หรือ กรอกประวัติก่อนเพื่อ จะมีสิทธิ์ในการ ดาวน์โหลดสติกเกอร์ประเภทนี้
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                  alt="arrow-down-tray.png"
                />ระยะเวลาการดาวน์โหลด 90 วัน
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                  alt="clock.png"
                />ระยะเวลาการใช้งาน 180 วัน
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="card">
          <div class="card-body">
            <p class="text-s-28 font-bd text-center">Must View Sticker</p>
            <img
              class="img-fluid"
              src="~/assets/SolutionsLine/LineSponsoredSticker/Image(2).png"
              alt="image.png"
            />
            <div>
              <p class="text-s-20 mt-3 mb-2">
                ผู้ใช้ต้องดูวิดีโอก่อนเพื่อที่จะมีสิทธิ์ในการดาวน์โหลด Sponsored Sticker ประเภทนี้
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                  alt="arrow-down-tray.png"
                />ระยะเวลาการดาวน์โหลด 30 วัน
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                  alt="clock.png"
                />ระยะเวลาการใช้งาน 90 วัน
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="card">
          <div class="card-body">
            <p class="text-s-28 font-bd text-center">Secret/Direct Sticker</p>
            <img
              class="img-fluid"
              src="~/assets/SolutionsLine/LineSponsoredSticker/Image(3).png"
              alt="image.png"
            />
            <div>
              <p class="text-s-20 mt-3 mb-2">
                ผู้ใช้จะได้รับลิงก์ดาวน์โหลดสติกเกอร์จากทางแบรนด์เท่านั้น โดยสติกเกอร์เหล่านี้ไม่มีใน Sticker Shop
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/arrow-down-tray.png"
                  alt="arrow-down-tray.png"
                />ระยะเวลาการดาวน์โหลด 90 วัน
              </p>
              <p class="text-s-20 mb-0">
                <img
                  class="me-2"
                  src="~/assets/SolutionsLine/LineSponsoredSticker/clock.png"
                  alt="clock.png"
                />ระยะเวลาการใช้งาน 180 วัน
              </p>
            </div>
          </div>
        </div>
      </div>
      <template #dot="{disabled}">
          <div v-if="disabled == false" class="dot-carousel"></div>
          <div v-if="disabled == true" class="dot-carousel-active"></div>
      </template>
    </ssr-carousel>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      type: 'Sponsored Sticker',
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const box = this.$refs.stickyBox;
      console.log(window.scrollY);
      if(window.scrollY > 2700 && window.scrollY < 2900){
        this.type = "Sponsored Sticker"
      } else if (window.scrollY > 2900 && window.scrollY < 3100) {
        this.type = "Mission Sticker"
      } else if (window.scrollY > 3100 && window.scrollY < 3300) {
        this.type = "Must View Sticker"
      } else if (window.scrollY > 3300) {
        this.type = "Secret/Direct Sticker"
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.sticky-box {
  position: sticky;
  top: 150px;
  width: 100%;
}

.content {
  height: 100vh;
  padding: 20px;
}
.text-s-28{
  line-height: 28px;
}
.text-s-24{
  line-height: 24px;
}
.text-s-20{
  line-height: 20px;
}
.card {
  background: #fff !important;
  border-radius: 16px !important;
  border: 2px solid #F3F4F6 !important;
  box-shadow: 0px 1px 2px 0px #64AF7712,0px 6px 4px 0px #64AF7705,0px 5px 3px 0px #64AF7708,0px 10px 5px 0px #64AF7703,0px 16px 6px 0px #64AF7700;

}
.card-body {
  padding: 24px;
}
.dot-carousel-active{
    width: 32px;
    height: 8px;
    background-color: #22C55E;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}
.dot-carousel{
    width: 16px;
    height: 8px;
    background-color: #86EFAC;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}
</style>
