<template>
    <div class="container padding-section">
        <div class="row">
            <div class="col-12 text-center">
                <div class="m-auto text-section text-center mb-2 pt-1">
                    <span class="text-ranbow text-s-24 font-bd m-0">Our Partners</span>
                </div>
                <p class="text-s-60 mt-4 font-bd color-1F2937 d-none d-xl-block">
                    ลูกค้าของเรา
                </p>
            </div>
            <!-- Desktop view -->
            <div class="col-12 text-start d-none d-md-block mt-3">
                <!-- First row - slides right -->
                <div class="logos-slider">
                    <div class="logos-track slide-right">
                        <img v-for="(item, index) in [...items.slice(0, 12), ...items.slice(0, 12)]"
                             :key="`top-${index}`"
                             :src="item.img"
                             class="logo-img"
                             loading="lazy"
                             :alt="`Brand-${index + 1}`">
                    </div>
                </div>

                <!-- Second row - slides left -->
                <div class="logos-slider">
                    <div class="logos-track slide-left">
                        <img v-for="(item, index) in [...items.slice(12), ...items.slice(12)]"
                             :key="`bottom-${index}`"
                             :src="item.img"
                             class="logo-img"
                             loading="lazy"
                             :alt="`Brand-${index + 13}`">
                    </div>
                </div>
            </div>

            <div class="col-12 d-block d-md-none">
                    <div class="carousel-wrapper mt-4">
                        <div class="fade-left"></div>

                        <div class="swiper-container" ref="swiperPartners">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                                    <img class="img-fluid" :src="item.img" :alt="`img${index}`" loading="lazy" />
                                </div>
                            </div>
                        </div>

                        <div class="fade-right"></div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Swiper, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Autoplay]);
export default {
    data() {
        return {
            items: [
                { img: require("~/assets/New/Home/Clients/Brand.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-1.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-2.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-3.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-4.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-5.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-6.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-7.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-8.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-9.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-10.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-11.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-12.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-13.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-14.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-15.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-16.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-17.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-18.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-19.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-20.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-21.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-22.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-23.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-24.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-25.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-26.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-27.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-28.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-29.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-30.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-31.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-32.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-33.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-34.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-35.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-36.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-37.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-38.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-39.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-40.svg") },
                { img: require("~/assets/New/Home/Clients/Brand-41.svg") },
            ],
        };
    },
    mounted() {
        new Swiper(this.$refs.swiperPartners, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 600,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        })
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

.carousel-wrapper {
    position: relative;
}

.swiper-container, .swiper-wrapper, .swiper-slide {
    display: flex;
    align-items: center;
}

.swiper-slide img {
    margin: 0 auto; /* กลางแนวนอน */
}

/* Fade overlays */
.fade-left,
.fade-right {
    position: absolute;
    top: 0;
    width: 50px;
    height: 100%;
    z-index: 20;
    pointer-events: none;
}

.fade-left {
    left: 0;
    background: linear-gradient(to right, white, transparent);
}

.fade-right {
    right: 0;
    background: linear-gradient(to left, white, transparent);
}

.logos-slider {
    position: relative;
    overflow: hidden;
    padding: 20px 0;
}

/* Add fade overlays for desktop sliding logos */
.logos-slider::before,
.logos-slider::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
}

.logos-slider::before {
    left: 0;
    background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
}

.logos-slider::after {
    right: 0;
    background: linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
}

/* Adjust width of fade effect for different screen sizes */
@media (max-width: 1200px) {
    .logos-slider::before,
    .logos-slider::after {
        width: 100px;
    }
}

@media (max-width: 992px) {
    .logos-slider::before,
    .logos-slider::after {
        width: 80px;
    }
}

.logos-track {
    display: flex;
    width: fit-content;
}

.slide-right {
    animation: slideRight 40s linear infinite;
}

.slide-left {
    animation: slideLeft 70s linear infinite;
}

.logo-img {
    height: 40px;
    width: auto;
    margin: 0 20px;
    object-fit: contain;
}

@keyframes slideRight {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

@keyframes slideLeft {
    0% {
        transform: translateX(-50%);
    }
    100% {
        transform: translateX(0);
    }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
    .logos-row {
        gap: 15px;
    }
    .logo-img {
        height: 30px;
        margin: 0 15px;
    }
}

@media (max-width: 992px) {
    .logos-row {
        gap: 10px;
    }
    .logo-img {
        height: 25px;
        margin: 0 10px;
    }
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
    font-size: 44px !important;
    line-height: 44px !important;
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
  .padding-section {
    padding-top: 80px !important;
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
  .padding-section {
    padding-top: 120px !important;
  }
  .logo-img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    border: 1px solid #F3F4F6;
    background: #FFF;

    /* elevation/elevation-1 */
    box-shadow: 0 9px 3px 0 rgba(17, 24, 39, 0.00), 0 6px 2px 0 rgba(17, 24, 39, 0.00), 0 3px 2px 0 rgba(17, 24, 39, 0.04), 0 1px 1px 0 rgba(17, 24, 39, 0.08), 0 0 1px 0 rgba(17, 24, 39, 0.09), 0 0 0 0 rgba(17, 24, 39, 0.09);
  }
}
</style>
