<template>
    <section class="banner-section position-relative overflow-hidden mt-5 mt-xl-0">
        <div class="container p-0">
            <div class="row space-top">
                <div class="col-12 text-center z-1 p-0">
                    <div class="px-0">
                        <h1 class="font-bd banner-title color-1F2937 mb-0">
                            More Than a <br class="d-block d-sm-none" />
                            <span class="gradient-text-orange">Business</span>
                            <span class="gradient-text-blue">Partner</span>
                        </h1>
                        <h2 class="font-bd banner-title color-1F2937 mb-0">
                            Drive Your Business <br class="d-block d-sm-none" />Beyond Limits
                        </h2>
                        <p class="font-md banner-subtitle mt-3 mb-0 mt-xl-4 mb-xl-4 color-1F2937">
                            Sellsuki เป็นให้คุณได้มากกว่าแค่คำว่าพาร์ทเนอร์ธุรกิจ <br
                                class="d-block d-sm-none" />เราพร้อมจะพา SMEs ไทย<br class="d-none d-sm-block" />
                            เติบโตไปไกลกว่าเดิมด้วย<br class="d-block d-sm-none" />แพลตฟอร์มและบริการที่ครบ จบ
                            ในที่เดียว
                        </p>

                        <div class="d-flex flex-wrap justify-content-center mt-xl-5 mt-sm-4 mt-5">
                            <a href="#Solution" class="btn-white banner-btn" data-tag="our-services-anchor">
                                <img width="24px" height="24px" src="~/assets/New/Home/hand-coins.svg"
                                    alt="hand-coins.svg" class="icon me-2" />
                                <span class="text">บริการของเรา</span>
                            </a>
                            <a target="_blank" rel="noopener" href="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                                class="btn-gradient banner-btn ms-md-4 ms-3" data-tag="start-free-modal">
                                <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg"
                                    alt="cursor-arrow-rays.svg" class="icon me-2" />
                                <span class="text">เริ่มใช้งานฟรี</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center justify-content-center mt-xl-4 mt-sm-5 mt-5 p-0">
                    <img class="img-fluid d-none d-xl-block" src="~/assets/New/Home/Hero.webp" alt="Hero.webp">

                    <img class="img-fluid d-none d-sm-block d-xl-none" src="~/assets/New/Home/Hero-t.webp"
                        alt="Hero-t.webp">

                    <img class="img-fluid d-block d-sm-none" src="~/assets/New/Home/Hero-m.webp" alt="Hero-m.webp">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
@media only screen and (min-width: 1580px) {
    .row>* {
        padding-right: 0px !important;
        padding-left: 0px !important;
    }
}

.btn-gradient {
    display: inline-block;
    padding: 0;
    font-size: 28px;
    line-height: 100%;
    font-family: 'Heavent-med', sans-serif;
    color: #fff !important;
    background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
    border: none;
    border-radius: 32px;
    box-shadow: 0 2px 8px 0 #ec5e2a22;
    cursor: pointer;
    transition: background 0.3s, box-shadow 0.3s;
}

.btn-white {
    display: inline-block;
    padding: 0;
    font-size: 28px;
    line-height: 100%;
    font-family: 'Heavent-med', sans-serif;
    color: #1F2937 !important;
    background: #fff;
    border: none;
    border-radius: 32px;
    box-shadow: 0 2px 8px 0 #ec5e2a22;
    cursor: pointer;
    transition: background 0.3s, box-shadow 0.3s;
}

/* === Main Background === */
.banner-section {
    background-image: url('~@/assets/New/Home/BG.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.gradient-text-orange {
    background: linear-gradient(87.52deg, #F35C20 50.36%, #FB923C 60.17%);
    -webkit-background-clip: text;
  background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
}

.gradient-text-blue {
    background: linear-gradient(87.52deg, #58C6FF 67.47%, #1B8BF5 78.4%);
    -webkit-background-clip: text;
  background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    display: inline-block;
}

@media screen and (max-width: 400px) {
    .bg-height {
        padding: 32px 24px !important;
        min-height: 700px;
    }

    .banner-section {
        background-size: cover !important;
        margin-top: 70px;
    }

    .margin-mobile {
        margin-right: 12px !important;
        margin-left: 0px !important;
        height: 14px;
    }
}

/* === Background for mobile === */
@media (max-width: 767px) {
    .banner-section {
        background-image: url('~@/assets/New/Home/BG.webp');
        background-size: cover;
        margin-top: 70px;
    }
}

/* === Height control === */
.bg-height {
    padding: 64px 24px;
    min-height: 632px;
}

.space-top {
    margin-top: 60px;
}

.btn-gradient {
    width: auto;
    padding-left: 12px;
    padding-right: 12px;
    height: 36px;
}

.btn-white {
    width: auto;
    padding-left: 12px;
    padding-right: 12px;
    height: 36px;
}

@media (min-width: 768px) {
    .bg-height {
        padding: 0;
        min-height: 400px;
    }

    .space-top {
        margin-top: 80px;
    }

    .btn-gradient {
        width: 182px;
        height: 48px;
    }

    .btn-white {
        width: 182px;
        height: 48px;
    }
}

@media (min-width: 1200px) {
    .bg-height {
        padding: 0;
        min-height: 990px;
    }

    .space-top {
        margin-top: 180px;
    }

    .btn-gradient {
        width: 182px;
        height: 48px;
    }

    .btn-white {
        width: 182px;
        height: 48px;
    }
}

@media (min-width: 1920px) {
    .bg-height {
        padding: 0;
        min-height: 990px;
    }

    .space-top {
        margin-top: 180px;
    }
}

/* === Typography responsive === */
.banner-title {
    font-size: 44px;
    line-height: 1;
}

.banner-subtitle {
    font-size: 20px;
    line-height: 1;
}

.partner-title {
    font-size: 16px;
    line-height: 1;
}

.banner-btn {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 768px) {
    .banner-title {
        font-size: 44px;
        line-height: 1;
    }

    .banner-subtitle {
        font-size: 20px;
        line-height: 1;
    }

    .partner-title {
        font-size: 16px;
        line-height: 1;
    }

    .banner-btn {
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: 1200px) {
    .banner-title {
        font-size: 72px;
        line-height: 1;
    }

    .banner-subtitle {
        font-size: 28px;
        line-height: 1;
    }

    .partner-title {
        font-size: 28px;
        line-height: 1;
    }

    .banner-btn {
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* === Video === */
.banner-video {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
}

@media (max-width: 767px) {
    .banner-video {
        width: 100%;
        max-width: 100%;
    }
}

@media (min-width: 768px) {
    .banner-video {
        width: 110%;
        max-width: 110%;
        margin-left: -80px;
    }
}

@media (min-width: 1200px) {
    .banner-video {
        margin-left: -115px;
        width: 125%;
        max-width: 125%;
    }
}

@media (min-width: 1920px) {
    .banner-video {
        margin-left: -115px;
        width: 125%;
        max-width: 125%;
    }
}

/* === Partner Logos positioning === */

.partner-logos {
    text-align: left;
    position: absolute;
    bottom: 20px;
}

.partner-logos img {
    max-height: 16px;
}

@media (min-width: 768px) {
    .partner-logos {
        text-align: left;
        position: absolute;
        bottom: 20px;
    }
}

@media (min-width: 1200px) {
    .partner-logos {
        text-align: left;
        position: absolute;
        bottom: 50px;
    }

    .partner-logos img {
        max-height: 28px;
    }
}
</style>
