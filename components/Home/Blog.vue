<template>
        <div class="container container-custom padding-section">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="m-auto text-section text-center mb-2 pt-1">
                        <span class="text-ranbow text-s-24 font-bd m-0">Blog</span>
                    </div>
                    <p class="text-s-60 font-bd color-1F2937 mt-2 mb-0">
                        <img class="img-size" src="~/assets/New/Home/Solutions/Sellsuki.svg" alt="Sellsuki.svg" style="margin-top: -5px;">
                        Blogs
                    </p>
                    <p class="text-s-24 color-1F2937 mt-2 mb-0">แหล่งรวบรวมบทความที่น่าสนใจจากทีมงาน Sellsuki</p>
                </div>
            </div>
            <CardBlog class="mt-5" />
        </div>
</template>

<script>
import CardBlog from '@/components/Home/Blog/CardBlog'
export default {
    components: {
        CardBlog
    }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

@media only screen and (min-width: 1440px) {
    .container-custom {
        max-width: 1790px !important;
    }
}
@media only screen and (min-width: 1580px) {
    .row>* {
        padding-right: 0px !important;
        padding-left: 0px !important;
    }
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

@media (min-width: 768px) and (max-width: 1200px) {
    .container-custom {
        max-width: 736px !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
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
