<template>
    <div class="container container-custom padding-section">
        <div class="row">
            <div class="col-xl-6 col-md-7 col-12 text-start">
                <div class="m-auto text-section text-center mb-2 pt-1">
                    <span class="text-ranbow text-s-24 font-bd m-0">How We Work</span>
                </div>
                <div class="mt-xl-4 mt-2">
                    <p class="text-s-60 font-bd color-1F2937 mb-0">
                        <img class="img-size" src="~/assets/New/Home/Solutions/Sellsuki.svg" alt="Sellsuki.svg"
                            style="margin-top: -5px;">
                        's Distinct Approach
                    </p>
                    <p class="text-s-24 font-df color-1F2937 mb-0 mt-2">
                        ในโลกของธุรกิจที่เปลี่ยนแปลงทุกวินาที การใช้ “Data”
                        อย่างมีเทคนิคและชั้นเชิงคืออาวุธลับสู่ความสำเร็จ
                        Sellsuki นำความเชี่ยวชาญที่มีความลึกซึ้ง + ข้อมูลอย่างแม่นยำ มาสร้าง Data-Driven Strategy
                        ที่ไม่เพียงแค่ทำให้คุณ “ก้าวทัน” เทรนด์ แต่จะช่วยให้คุณกลายเป็น “ผู้นำตลาด” และสร้างการเติบโต
                        ที่เหนือกว่าให้กับแบรนด์ของคุณ
                    </p>
                </div>
                <a target="_blank" rel="noopener" href="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                    data-tag="homepage-howwework-free-consultation-button"
                    class="btn-gradient banner-btn text-s-28 mt-4">
                    <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg"
                        alt="cursor-arrow-rays.svg" class="icon me-1" />
                    <span class="text">ปรึกษากลยุทธ์สำหรับธุรกิจของคุณฟรี</span>
                </a>
            </div>
            <div class="col-xl-6 col-md-5 col-12 d-flex justify-content-center align-items-center">
                <img class="img-fluid mt-md-0 mt-1 d-none d-xl-block"
                    src="~/assets/New/Home/HowWeWork/image after delay.svg" alt="image after delay.svg">
                <img class="img-fluid mt-md-0 mt-1 d-none d-md-block d-xl-none"
                    src="~/assets/New/Home/HowWeWork/image after delay-t.svg" alt="image after delay.svg">
                <img class="img-fluid mt-md-0 mt-1 d-block d-md-none"
                    src="~/assets/New/Home/HowWeWork/image after delay.svg" alt="image after delay.svg">
            </div>
        </div>
        <CardHowWeWork />
    </div>
</template>

<script>
import CardHowWeWork from '@/components/Home/HowWeWork/CardHowWeWork'
export default {
    components: {
        CardHowWeWork
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

    .img-size {
        height: 46px;
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

    .img-size {
        height: 46px;
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

    .img-size {
        height: 100%;
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
</style>
