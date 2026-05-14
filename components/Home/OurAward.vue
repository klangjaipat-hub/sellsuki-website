<template>
    <div class="container padding-section">
        <div class="row">
            <div class="col-12">
                <div class="col-12 text-center">
                    <div class="m-auto text-section text-center mb-2 pt-1">
                        <span class="text-ranbow text-s-24 font-bd m-0">Our Award</span>
                    </div>
                    <p class="text-s-60 font-bd color-1F2937 mt-3 mb-4">
                        รางวัลของเรา
                    </p>
                </div>
            </div>
        </div>
        <div class="carousel-wrapper">
            <div class="fade-left"></div>
            <div class="swiper-container" ref="swiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                        <img class="img-fluid img-normal" :src="item.img" :alt="`img${index}`" loading="lazy" />
                        <img class="img-fluid img-active-state" :src="item.imgActive" :alt="`img${index}-active`" loading="lazy" />
                    </div>
                </div>
            </div>
            <div class="fade-right"></div>
        </div>
        <div class="row mt-4">
            <div class="col-12 text-center">
                <a target="_blank" rel="noopener" href="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                    class="btn-gradient text-s-28" data-tag="homepage-ouraward-free-consultation-button">
                    <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg"
                        alt="cursor-arrow-rays.svg" class="icon me-2" />
                    <span class="text text-s-28">ปรึกษาฟรี</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Autoplay]);

const BASE = [
    { img: require("~/assets/New/Home/OurAward/1.png"), imgActive: require("~/assets/New/Home/OurAward/1-active.png") },
    { img: require("~/assets/New/Home/OurAward/2.png"), imgActive: require("~/assets/New/Home/OurAward/2-active.png") },
    { img: require("~/assets/New/Home/OurAward/3.png"), imgActive: require("~/assets/New/Home/OurAward/3-active.png") },
    { img: require("~/assets/New/Home/OurAward/4.png"), imgActive: require("~/assets/New/Home/OurAward/4-active.png") },
    { img: require("~/assets/New/Home/OurAward/5.png"), imgActive: require("~/assets/New/Home/OurAward/5-active.png") },
    { img: require("~/assets/New/Home/OurAward/6.png"), imgActive: require("~/assets/New/Home/OurAward/6-active.png") },
];

export default {
    data() {
        return {
            swiper: null,
            items: [...BASE, ...BASE], // 12 slides — enough for Swiper loop with slidesPerView: 5
        };
    },
    mounted() {
        this.swiper = new Swiper(this.$refs.swiperContainer, {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
            speed: 600,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 20
                }
            },
        });
    },
    beforeDestroy() {
        if (this.swiper) {
            this.swiper.destroy(true, true);
        }
    },
};
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

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

.carousel-wrapper {
    position: relative;
}

.swiper-container {
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    height: auto !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.7);
}

.swiper-slide-active {
    transform: scale(1.5);
    opacity: 1;
    z-index: 10;
}

/* Active image swap via CSS — no JS re-render needed */
.swiper-slide .img-active-state { display: none; }
.swiper-slide-active .img-normal { display: none; }
.swiper-slide-active .img-active-state { display: block; }

/* Fade overlays */
.fade-left,
.fade-right {
    position: absolute;
    top: 0;
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

    .fade-left,
    .fade-right {
        width: 100px;
    }

    .swiper-container {
        padding-top: 20px !important;
        padding-bottom: 0px !important;
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

    .fade-left,
    .fade-right {
        width: 250px;
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
</style>
