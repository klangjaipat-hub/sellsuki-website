<template>
<div id="BusinessOwner">
    
    <div class="background-main">
        <div class="pb-lg-0 pb-5">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#50151C;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2">{{ $t("Menu.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li>
                                    <span itemprop="item"><span class="ps-2">{{ $t("Menu.Solution") }}</span></span> <i class="bi bi-chevron-right"></i> 
                                     
                                </li>
                                <li>
                                    <font class="text-s-24 text-w-700"><span class="ps-2">{{ $t("Menu.Solutions.BusinessOwner") }}</span></font>
                                     
                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-md-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:55px;color:#50151C;width: 600px;">BUSINESS OWNER</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#50151C;width: 420px;">“{{ $t("type_of_business.business_owner.text_banner") }}”</h2>
                                    <p class="text-s-24 mt-3" style="color:#50151C;width: 460px">{{ $t("type_of_business.business_owner.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-md-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36" style="color:#50151C">BUSINESS OWNER</div>
                            <div class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#50151C">“{{ $t("type_of_business.business_owner.text_banner") }}”</div>
                            <p class="text-s-24 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#50151C">{{ $t("type_of_business.business_owner.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Business_Owner_8d95a489f3.webp" alt="business-owner-banner">
                        <img class="d-block d-md-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Business_Owner_8d95a489f3.webp" alt="business-owner-banner">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-4 p-xl-4 p-lg-5 p-md-4 p-sm-5 p-5" style="margin-bottom: 40px;">
                    <div v-for="(data, index) in responseData" :key="index">
                        <div :id="'contant' + (index + 1)">
                            <div v-if="data.attributes.position_left" class="row p-custom-2 mt-5">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div class="text-lg-start text-center d-block d-md-none animate__animated animate__bounceInRight animate__slow">
                                        <span class="text-s-44 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px;">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-44 text-w-700">{{data.attributes.header}}</p>
                                    </div>
                                    <img v-if="data.attributes.image.data != null" class="item-center mt-4 animate__animated animate__zoomInLeft animate__slow" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 mt-5">
                                    <div class="text-lg-start text-center d-none d-md-block animate__animated animate__bounceInRight animate__slow">
                                        <span class="text-s-44 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-5 text-s-44 text-w-700">{{data.attributes.header}}</p>
                                    </div>    
                                    <div class="animate__animated animate__bounceInLeft animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                        </div>
                                        <!-- <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a> -->
                                    </div>
                                </div>
                            </div>
                            <div v-else class="row p-custom-2 mt-5">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 mt-5">
                                    <div class="text-lg-start text-center d-none d-md-block animate__animated animate__bounceInLeft animate__slow">
                                        <span class="text-s-44 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-44 text-w-700 mt-5">{{data.attributes.header}}</p>
                                    </div>
                                    <div class="animate__animated animate__bounceInRight animate__slow">
                                        <div class="show collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMin'+data.id">
                                            <div class="text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                        </div>
                                        <!-- <div class="collapse animate__animated animate__flipInX" :class="'multi-collapse'+data.id" :id="'showCollapseMix'+data.id">
                                            <div class="text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.detail)"></div>
                                        </div>
                                        <a v-if="data.detail.length>180" class="accordion-button collapsed cursor-pointer ms-auto me-0" style="width: 30px;" data-bs-toggle="collapse" :data-bs-target="'.multi-collapse'+data.id" aria-expanded="false" :aria-controls="'showCollapseMin'+data.id+' showCollapseMix'+data.id"></a> -->
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                                    <div class="text-lg-start text-center d-block d-md-none animate__animated animate__bounceInLeft animate__slow">
                                        <span class="text-s-44 font-wght text-white" style="background: #F47530;border-radius: 10px;padding: 5px 15px">STEP {{index + 1}}</span>
                                        <p class="mt-4 text-s-44 text-w-700">{{data.attributes.header}}</p>
                                    </div>
                                    <img v-if="data.attributes.image.data != null" class="item-center mt-4 animate__animated animate__zoomInRight animate__slow" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="padding-card pt-0 text-center">
                    <Review/>
                </div>
                <GetQuote :type="type" :blog="this.$route.query.blog"/>         
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InterestingArticles from '@/components/InterestingArticles'
import Review from '@/components/Review'
import GetQuote from '@/components/GetQuote'
import Preloader from '@/components/Preloader'

export default {
    name: 'BusinessOwner',
    layout:"Layout",
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
            title: "บริการสร้างแบรนด์ เริ่มต้นทำธุรกิจ",
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    data () {
        return {
            type: 'All',
            isHidden: false,
            lang: this.$i18n.locale || 'th-TH',
            responseData:[],
            animation1:false,
            message:''
        }
    },
    jsonld() {
      return [
        {
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
                "name": this.$t("Menu.Solution"),
                "item": "https://www.sellsuki.co.th/"
            },{
                "@type": "ListItem",
                "position": 3,
                "name": this.$t("Menu.Solutions.BusinessOwner")
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "อยากเป็นเจ้าของธุรกิจออนไลน์ เริ่มต้นอย่างไรดี",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. คุณจะต้องมีไอเดียสำหรับการทำธุรกิจ \n2. สำรวจความคิดเห็นของลูกค้าหรือกลุ่มเป้าหมายที่ต้องการ \n3. วางแผนและกลยุทธ์การทำธุรกิจ  \n4. เลือกขายสินค้าที่ตรงตามความต้องการของตลาดและกลุ่มเป้าหมาย\n5. เลือกช่องทางการขายสินค้าที่เหมาะสมกับธุรกิจของคุณ"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ลงทุนทำธุรกิจอะไรดี",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "- ธุรกิจขายของออนไลน์ \n- ธุรกิจการขนส่ง \n- ธุรกิจด้านเทคโนโลยี \n- ธุรกิจด้านทำโฆษณาและการตลาดออนไลน์"
                    }
                },
                {
                    "@type": "Question",
                    "name": "อยากสร้างแบรนด์ตัวเอง ให้แตกต่างจากคู่แข่ง  ต้องทำยังไง",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ลองศึกษาหาข้อมูลของตลาดที่แบรนด์กำลังเข้าไปแข่งขันว่าเป็นอย่างไร\nคู่แข่งนำเสนอจุดขายอะไร และมีจุดไหนที่สินค้าของแบรนด์จะเข้าไปสร้างความแตกต่าง\nที่ตอบโจทย์ให้กลุ่มเป้าหมายได้มากกว่าคู่แข่งแบรนด์อื่น ๆ "
                    }
                },
                {
                    "@type": "Question",
                    "name": "ถ้าจะทำแบรนด์ให้ดัง ต้องรู้อะไรบ้าง",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "เพิ่มการรับรู้ สร้างตัวตนบน Social Media \nแบรนด์เป็นใคร? ขายอะไร? ผ่านคอนเทนต์เล่าเรื่องราว Storytelling \nเพื่อพูดคุยตอบคำถามกับลูกค้าได้ โดยให้ความรู้สึกเป็นกันเอง ไม่รู้สึกว่าขายของมากเกินไป"
                    }
                },
                {
                    "@type": "Question",
                    "name": "เป็นเจ้าของแบรนด์ จะเลือกขายออนไลน์บนช่องทางไหนดี?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "แบรนด์ของคุณขายสินค้าประเภทไหน กลุ่มเป้าหมายคือใคร\nซึ่งแต่ละช่องทางการขายบนโลก Online จะมีกลุ่มลูกค้าที่แตกต่างกันไปตามการใช้งานแต่ละ Platform รวมถึงช่วยอายุและ Generation ไม่ว่าจะเป็น Social Media หรือ  Marketplace "
                    }
                }
            ]
        }
    ]
    },
    async asyncData({ $axios, route, i18n }) {
        return {}
    },
    mounted () {
        //window.addEventListener('scroll', this.onShow);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        onShow (event) {
            this.windowTop = event.target.documentElement.scrollTop;
            if(this.windowTop > 200){
                document.querySelector('#contant1').style.display = "block";
            }
            if(this.windowTop > 600){
                document.querySelector('#contant2').style.display = "block";
            }
            if(this.windowTop > 1000){
                document.querySelector('#contant3').style.display = "block";
            }
            if(this.windowTop > 1500){
                this.animation1 = true
            }
        },

    }
}
</script>

<style scoped>
a{
    color: #171515 !important;
}

.accordion-button{
    background-color: #FBFBFB !important;
    padding: 5px;
}

.accordion-button:not(.collapsed)::after{
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed){
    box-shadow:none;
}

.bg-icon{
    width: 146px;
    height: 146px;
    background-color: #0DB991;
    border-radius: 50%;
    left: 8px;
    position: relative;
}

.bg-icon-main{
    margin-left: -10px !important;
    margin-top: -10px !important;
    background-color: #171515;
    width: 146px;
    height: 146px;
    border-radius: 50%;
}

.theme-background-main{
    background-color: #F7BD49;
}

.theme-background-sub{
    background-color: #5D391A;
}

.theme-text-main{
    color: #F7BD49;
}

.theme-text-sub{
    color: #5D391A;
}

.theme-border{
    border-bottom: 1px solid #5D391A !important;
}

a{
  color: #007bff;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .p-custom{
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
    .p-custom-2{
        padding-left: 30px !important;
        padding-right: 30px !important;
    }
    .mt-custom{
        margin-top: 3rem!important;
    }
    .img-banner-top{
        margin-top: 145px !important;;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
}
</style>