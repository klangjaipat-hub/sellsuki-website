<template>
    <div class="row mt-xl-5 mt-2 mb-3 fade-in-up" v-intersect>
        <div class="col-xl-2 align-self-center d-none d-xl-block">
            <p class="text-s-44 font-bd mb-0">ขั้นตอนการทำงาน</p>
            <p class="text-s-44 font-bd mb-0"><span class="text-ranbow">หลังเซ็นสัญญา</span></p>
        </div>
        <div class="col-12 text-center d-block d-xl-none">
            <p class="text-s-36 font-bd mb-4 mt-4">ขั้นตอนการทำงาน<span class="text-ranbow">หลังเซ็นสัญญา</span></p>
        </div>
        <div class="col-xl-10 col-12 d-none d-md-block">
            <div class="row">
                <div class="col-3" v-for="(process, index) in processes" :key="process.id">
                    <div class="d-flex justify-content-start margin-15">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === process.name }">
                            <img @mouseover="active = process.name"
                                :src="process.image" alt="profile"
                                class="inner-circle" :class="{ 'inner-circle-hover': active === process.name }" />
                        </div>
                        <img v-if="index < processes.length - 1" class="img-fluid ms-2 icon-process" src="~/assets/SolutionsWizemoves/Consulting/Line.png"
                            alt="Line.png">
                    </div>
                    <p class="text-s-36 font-md mt-4 mb-2">{{ process.name }}</p>
                    <p class="text-s-24 font-df">{{ process.description }}</p>
                </div>
            </div>
        </div>
        <div class="col-12 d-block d-md-none">
            <div class="row">
                <div class="col-12" v-for="(process, index) in processes" :key="process.id">
                    <div class="d-flex align-items-center" :class="{ 'mt-2': index > 0 }">
                        <div class="d-flex flex-column align-items-center">
                            <div class="outer-circle" :class="{ 'outer-circle-hover': active === process.name }">
                                <img @mouseover="active = process.name"
                                    :src="process.image"
                                    alt="profile" class="inner-circle"
                                    :class="{ 'inner-circle-hover': active === process.name }" />
                            </div>
                            <img v-if="index < processes.length - 1" class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/Consulting/Line-m.png"
                                alt="Line.png">
                        </div>
                        <div class="ms-3" style="margin-top: -12px;">
                            <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">{{ process.name }}</p>
                            <p class="text-s-20 font-df">{{ process.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-4">
            <img class="img-fluid img-Process" src="~/assets/SolutionsWizemoves/Ads/process.webp"
                alt="process.webp">
        </div>
        <div class="col-12 text-center mt-5 pt-4">
            <nuxt-link :to="{ path: '/solutions/wizemoves/form/online-advertising' }"
                class="btn-gradient text-s-24 font-md py-2" data-tag="process_get_free_consultation">
                <span class="text">รับคำปรึกษากับผู้เชี่ยวชาญฟรี</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 'Business Diagnosis',
            processes: [
                {
                    id: 1,
                    name: 'Business Diagnosis',
                    image: require('~/assets/SolutionsWizemoves/Ads/Process/1.svg'),
                    description: 'วิเคราะห์ธุรกิจ, ลูกค้า, จุดรั่วของ Funnel, ข้อมูลในอดีต'
                },
                {
                    id: 2,
                    name: 'Ad Strategy Blueprint',
                    image: require('~/assets/SolutionsWizemoves/Ads/Process/2.png'),
                    description: 'กำหนด Funnel, Segment, Creative Angle, Offer, Platform Mix'
                },
                {
                    id: 3,
                    name: 'Campaign Execution',
                    image: require('~/assets/SolutionsWizemoves/Ads/Process/3.svg'),
                    description: 'ตั้งค่าแคมเปญครบทุกแพลตฟอร์ม พร้อม Tracking ที่แม่นยำ'
                },
                {
                    id: 4,
                    name: 'Optimize & Scale',
                    image: require('~/assets/SolutionsWizemoves/Ads/Process/4.svg'),
                    description: 'รายงานแบบเข้าใจง่าย พร้อมแผนพัฒนาอย่างเป็นระบบ'
                }
            ]
        }
    },
}
</script>

<style scoped>
.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(88.65deg, #8B5CF6 32.64%, #FACC15 97.14%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.border-ranbow {
  background: #FFF;
  border-radius: 32px;
  padding: 4px 16px;
}

.outer-circle {
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  /* ชั้นที่ 1 */
  border: 2px solid transparent;
  /* ชั้นที่ 2 */
}

.inner-circle {
  padding: 8px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  /* ชั้นด้านในสุด */
}

.outer-circle-hover {
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  /* ชั้นที่ 1 */
  border: 2px solid #8B5CF61A !important;
  /* ชั้นที่ 2 */
}

.inner-circle-hover {
  padding: 8px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #8B5CF64D !important;
  /* ชั้นด้านในสุด */
}

.btn-gradient .icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.btn-gradient {
  display: inline-flex;
  align-items: center;
  color: white !important;
  background: linear-gradient(82.53deg, #6D28D9 7.45%, #FBBF24 113.56%);
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-gradient .icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.img-Process {
  min-height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .inner-circle {
    width: 44px;
    height: 44px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .icon-process {
    width: 60%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .icon-process {
    width: 60%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .icon-process {
    width: 74%;
  }
  .margin-15 {
    margin-left: -15px;
  }
  .col-xl-10 {
    width: 78%;
  }
  .col-xl-2 {
    width: 22%;
  }
}
</style>