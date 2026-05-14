<template>
<div id="AboutUs">
    
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#50151C;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2 text-s-24">{{ $t("page.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li   itemscope itemtype="https://schema.org/ListItem">
                                    <font class="text-s-24 text-w-700"><span class="ps-2">{{ $t("Menu.AboutUs") }}</span></font>
                                     
                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-md-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght text-s-64" style="color:#50151C">{{ $t("page.ABOUTUS.ABOUTUS") }}</h1>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-md-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36" style="color:#50151C">{{ $t("page.ABOUTUS.ABOUTUS") }}</div>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_about_us_01_1_5dfa225de9.webp" alt="Header about us">
                        <img class="d-block d-md-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_about_us_01_1_5dfa225de9.webp" alt="Header about us">
                    </div>
                </div>
            <div class="crad mt-5">
                <div class="row p-xxl-5 p-xl-5 p-lg-4 p-md-4 p-sm-4 p-3">
                    <div class="col-12 text-center mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-3 mt-sm-4 mt-4">
                        <p class="text-s-44 text-w-700" style="margin-bottom: 10px !important">ประวัติความเป็นมาของ</p>
                    </div>
                    <div class="col-12 mb-4">
                        <img class="item-center" width="193" height="82" src="../assets/logo-Sellsuki.webp" alt="sellsuki-logo">
                    </div>
                    <div class="d-none d-xl-block d-xxl-block">
                        <div class="col-12 mt-4" :style="'height:'+ height_colum +'px'">
                            <img src="./../assets/icon/Line28.webp" alt="icon Line" :style="'left: 50%;position: absolute;margin-top: 20px;height:'+ height_border +'px'">
                            <img class="item-center-absolute pt-2" src="./../assets/icon/Ellipse14.webp" alt="icon Ellipse14" :style="'margin-top:'+height_border+'px'">
                                <div class="row">
                                    <div class="col-6 text-end" style="padding-right: 55px">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'top':index != 0}">
                                            <div v-if="data.attributes.position_left == true">
                                                <img class="item-center-absolute" src="./../assets/icon/Ellipse14.webp" alt="Ellipse14.webp" style="margin-top: 20px;">
                                                <p class="text-s-44 text-w-700" style="color:#50151C">{{data.attributes.year}}</p>
                                                <p style="font-size:24px" v-html="$md.render(data.attributes.message)"></p>
                                                <img v-if="data.attributes.image != null" class="iem-center img-fluid" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText" style="margin-top: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 text-start" style="padding-left: 55px;margin-top:64px">
                                        <div v-for="(data, index) in responseData" :key="index" :class="{'top':index != 0}">
                                            <div v-if="data.attributes.position_left == false">
                                                <img class="item-center-absolute" src="./../assets/icon/Ellipse14.webp" alt="Ellipse14.webp" style="margin-top: 20px;">
                                                <p class="text-s-44 text-w-700" style="color:#50151C">{{data.attributes.year}}</p>
                                                <p style="font-size:24px" v-html="$md.render(data.attributes.message)"></p>
                                                <img v-if="data.attributes.image != null" class="iem-center img-fluid" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText" style="margin-top: 20px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- --------------------------------- mobile size ------------------------------------ -->
                        <div class="d-block d-xl-none d-xxl-none">
                            <div class="col-12 mt-2">
                                <div class="row text-center">
                                    <div v-for="(data, index) in responseData" :key="index" class="col-12 mt-3">
                                        <img v-if="index != 0" src="./../assets/icon/Line53.webp" alt="Line.webp">
                                        <img class="item-center" src="./../assets/icon/Ellipse14.webp" alt="Ellipse14.webp">
                                        <img src="./../assets/icon/Line53.webp" alt="Line.webp">
                                        <p class="text-s-44 text-w-700" style="color:#50151C">{{data.attributes.year}}</p>
                                        <p style="font-size:24" v-html="$md.render(data.attributes.message)"></p>
                                        <img v-if="data.attributes.image != null" class="iem-center img-fluid" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText" style="margin-top: 20px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="padding-aboutus" style="background: linear-gradient(180deg, #FAC59E 0%, #459AE7 100%);">
                    <div class="row bg  p-xxl-0 p-xl-0 p-lg-0 p-md-2 p-sm-4 p-4" style="z-index: 1;position: relative;">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="crad text-center crad-aboutus" style="border-radius: 10px;box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);">
                                <p class="text-w-700 pt-xl-0 pt-lg-4 pt-md-4 pt-sm-5 pt-4" style="font-size:48px;color:#E48724">VISION</p>
                                <p class="text-w-400" style="font-size:24px">Sellsuki ผู้ช่วยที่ 'ครบเครื่อง' ที่สุด ช่วยผลักดัน <br>ธุรกิจออนไลน์ในไทยให้เติบโต</p>
                            </div>
                            <div class="crad text-center crad-aboutus mt-4" style="border-radius: 10px;padding: 38px;box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);">
                                <p class="text-w-700" style="font-size:48px;color:#1B4485">MISSION</p>
                                <p class="text-w-400" style="font-size:24px">Sellsuki มองหานวัตกรรมและแนวทางใหม่ๆ พร้อมพัฒนา ศักยภาพทีมงาน นำข้อมูลทางการตลาดเข้ามาใช้ในการวาง กลยุทธ์รวมทั้ง ขยายเครือข่าย Partner ให้ครอบคลุมทุก บริการที่ส่งเสริมธุรกิจเพื่อพาธุรกิจของคุณเติบโตไป พร้อมกับเราอย่างมั่นคงและยั่งยืนในอนาคต</p>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img class="img-fluid mt-3 img-size-inpage" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/SSK_Vision_5ce59bff5b.webp" alt="SSK_Vision_1" style="max-width: 100%;">
                        </div>
                    </div>
                </div>
                
                <GetQuote :blog="this.$route.query.blog"/>
            </div>
        </div>
    </div>
</template>

<script>
import GetQuote from '@/components/GetQuote'
import InterestingArticles from '@/components/InterestingArticles'
import Preloader from '@/components/Preloader'

export default {
    name: 'AboutUs',
    layout:"Layout",
      components: {
        GetQuote,
        InterestingArticles,
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
            title: "เกี่ยวกับเรา",
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    data(){
        return{
            height_colum: 300,
            height_border: 280,
            lang: this.$i18n.locale || 'th-TH',
            type:'All',
            responseData:[]
      }
    },
    jsonld() {
      return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": this.$t("Menu.Home"),
                "item": "https://www.sellsuki.co.th/"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": this.$t("Menu.AboutUs")
            }]
        }
    },
    async asyncData({ $axios, route, i18n }) {
        return {
          responseData: [
            { id: 1, attributes: { position_left: true, year: "2016", message: "**ก่อตั้ง Sellsuki** — เริ่มต้นให้บริการ E-Commerce Solution", image: { data: { attributes: { url: "https://placehold.co/600x400/FF6603/FFFFFF/png?text=2016", alternativeText: "" } } } } },
            { id: 2, attributes: { position_left: false, year: "2018", message: "**ขยายบริการ** — เพิ่มทีมงานและบริการใหม่", image: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=2018", alternativeText: "" } } } } },
            { id: 3, attributes: { position_left: true, year: "2020", message: "**1,000+ ลูกค้า** — เติบโตอย่างก้าวกระโดด", image: { data: { attributes: { url: "https://placehold.co/600x400/7B64AF/FFFFFF/png?text=2020", alternativeText: "" } } } } }
          ],
          height_colum: 1400,
          height_border: 700
        };
    },
    //this.$route.params.id
    mounted () {

    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
    }
}
</script>

<style scoped>
.bg{
  background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/GET_A_QUOTE_2_2d7a8b05a4.webp');
  background-position: center;
  background-repeat: no-repeat;
}

.top{
    margin-top:100px !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .crad-aboutus{
    padding: 40px;
    width: 100%;
    height: 300px;
  }
  .padding-contact{
    padding:30px 20px 30px 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .crad-aboutus{
    padding: 30px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:20px 40px 20px 40px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .crad-aboutus{
    padding: 50px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:20px 40px 20px 40px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .crad-aboutus{
    padding: 40px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:30px 60px 30px 60px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .crad-aboutus{
    padding: 70px;
    width: 100%;
    height: 300px;
  }
  .padding-aboutus{
    padding:30px 80px 30px 80px;
  }
  .img-size-inpage{
      max-width: 120% !important;
  }
}
</style>