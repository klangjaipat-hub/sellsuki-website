<template>
<div id="Portfolio">
    
    <div class="background-main">
        <div class="container">
            <div class="row banner-hero">
                <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                        <p class="text-s-24 mt-150" style="color:#50151C;">
                            <nuxt-link @click="scrollToTop" to="/">{{ $t("page.Home") }}</nuxt-link> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-24 text-w-700" style="color:#50151C"><nuxt-link @click="scrollToTop" to="/Portfolio"> {{ $t("page.PORTFOLIO.Portfolio") }}</nuxt-link></font>
                        </p>
                        <table class="align-middle" style="width: 100%;">
                            <td class="banner-height">
                                <h1 class="font-wght" style="font-size:64px;color:#50151C">{{ $t("page.PORTFOLIO.PORTFOLIO") }}</h1>
                                <p class="text-s-24 text-start" style="color:#50151C">{{ $t("page.PORTFOLIO.mata") }}</p>
                            </td>
                        </table>
                    </div>
                    <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                        <p class="text-s-24 text-start" style="color:#50151C;margin-top:95px !important">
                            <nuxt-link @click="scrollToTop" to="/" style="color:#50151C">{{ $t("page.Home") }}</nuxt-link> <i class="bi bi-chevron-right"></i>
                            <font class="text-s-24 text-w-700"><nuxt-link @click="scrollToTop" to="/Portfolio" style="color:#50151C"> {{ $t("page.PORTFOLIO.Portfolio") }}</nuxt-link></font>
                        </p>
                        <div class="font-wght mt-3" style="font-size:36px;color:#50151C">{{ $t("page.PORTFOLIO.PORTFOLIO") }}</div>
                        <p class="text-s-24" style="color:#50151C">{{ $t("page.PORTFOLIO.mata") }}</p>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                    <img class="d-none d-xl-block d-xxl-block img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_Portfolio_01_1_939e49f0a2.webp" alt="มาสคอตของ Sellsuki ยืนถือถ้วยรางวัล สื่อถึงความสำเร็จและความน่าเชื่อถือของแบรนด์" style="margin-top: 80px;">
                    <img class="d-block d-xl-none d-xxl-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_Portfolio_01_1_939e49f0a2.webp" alt="มาสคอตของ Sellsuki ยืนถือถ้วยรางวัล สื่อถึงความสำเร็จและความน่าเชื่อถือของแบรนด์">
                </div>
            </div>
            <div class="crad mt-5">
                <div class="d-block d-xl-none d-xxl-none">
                    <div class="row p-4" style="padding-top: 35px !important;">
                        <div class="col-12">
                            <select v-model="type" class="form-select" aria-label="Default select example">
                                <option value="Akita">Akita Fulfillment</option>
                                <option value="Fuse">Fuse</option>
                                <option value="Line">Line</option>
                                <option value="Beary">Beary tech</option>
                                <option value="Kaikong">Kaikong</option>
                                <!-- <option value="Shipmunk">Shipmunk</option>
                                <option value="Oc2Plus">Oc2Plus</option> -->
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <component :is="'Portfolio'+type"/>
                    </div>
                </div>
                <GetQuote :blog="this.$route.query.blog"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import GetQuote from '@/components/GetQuote'
import PortfolioAkita from '@/components/Portfolio/Akita'
import PortfolioFuse from '@/components/Portfolio/Fuse'
import PortfolioKaikong from '@/components/Portfolio/Kaikong'
import PortfolioLine from '@/components/Portfolio/Line'
import PortfolioBeary from '@/components/Portfolio/Beary'
import Preloader from '@/components/Preloader'

export default {
    name: 'Portfolio',
    layout:"Layout",
      components: {
        GetQuote,
        PortfolioAkita,
        PortfolioFuse,
        PortfolioKaikong,
        PortfolioLine,
        PortfolioBeary,
        Preloader
    },
    head() {
      return this.$headUtil({
        lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
        title: "ผลงานของเรา",
        route: process.env.MAIN_URL + this.$route.path
      });
    },
    data () {
        return {
            buText: '',
            bu: this.$route.query.bu,
            isActive: true,
            Akita: false,
            Fuse: true,
            Line: true,
            Beary: true,
            Kaikong: true,
            Shipmunk: true,
            Oc2Plus: true,
            type: 'Akita'
    }
  },
  mounted(){
        liff.init({
            liffId: process.env.LINELIFF_PORTFOLIO
        }).then(() =>{
            if(liff.isLoggedIn()){
                liff.getProfile().then(profile => {
                    console.log(profile)
                    this.profile = profile
                    this.email = liff.getDecodedIDToken().email
                })
            }else{
                //liff.login()
            }
        })
        if(this.bu != null){
            this.type = this.bu
        }
        else{
            this.type ="Akita"
        }
  },
      methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
    .filter-gray{
        filter: grayscale(100%);
        opacity: 0.5;
    }

    a .hover-logo:hover{
        filter: none;
        opacity: 1;
    }
</style>
