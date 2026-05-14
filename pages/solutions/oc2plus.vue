<template>
<div id="SolutionsOc2plus">
    
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #4A91C9 0%, #54B2A6 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb align-items-center mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#FFFFFF;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2 text-s-24">{{ $t("Menu.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li>
                                    <span itemprop="item"><span class="ps-2 text-s-24">{{ $t("Menu.Solution") }}</span></span> <i class="bi bi-chevron-right"></i> 
                                     
                                </li>
                                <li>
                                    <font class="text-s-24 text-w-500"><span class="ps-2">Oc2plus</span></font>
                                     
                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-lg-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:62px;color:#FFFFFF">OC2PLUS</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#FFFFFF">“{{ $t("solution.oc2plus.text_banner") }}”</h2>
                                    <p class="text-s-24 mt-3 mb-lg-4 mb-xl-0" style="color:#FFFFFF;width: 470px;" v-html="$t('solution.oc2plus.mata')"></p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36" style="color:#FFFFFF">OC2PLUS</div>
                            <div class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#FFFFFF">“{{ $t("solution.oc2plus.text_banner") }}”</div>
                            <p class="text-s-24 p-4 p-md-0 ps-4 pe-4 pb-4" style="color:#FFFFFF" v-html="$t('solution.oc2plus.mata')"></p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top m-auto" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp" alt="oc2plus-customer-data-platform">
                        <img class="d-block d-md-none img-fluid img-banner-top m-auto pb-5" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp" alt="oc2plus-customer-data-platform">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div v-if="animation1" class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4 ps-5 pe-5">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-01-รวบรวมข้อมูลจากทุกช่องทาง.webp" alt="Oc2Plus-01-รวบรวมข้อมูลจากทุกช่องทาง.webp">
                            <h2 class="text-s-24 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h1") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-02-จัดเก็บไว้ในที่เดียว.webp" alt="Oc2Plus-02-จัดเก็บไว้ในที่เดียว.webp">
                            <h2 class="text-s-24 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h2") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-5 mt-lg-0">
                            <img class="item-center animate__animated animate__rotateIn animate__slow animate__delay-1s" src="./../../assets/SolutionsOc2plus/Oc2Plus-03-ง่ายต่อการนำไปใช้งาน.webp" alt="Oc2Plus-03-ง่ายต่อการนำไปใช้งาน.webp">
                            <h2 class="text-s-24 text-w-700 mt-4 ps-3 pe-3 theme-text-main animate__animated animate__fadeInDown animate__delay-2s">{{ $t("solution.oc2plus.h3") }}</h2>
                        </div>      
                    </div>
                </div>
                    <div v-if="animation2" class="row p-custom-2 d-flex ms-5 me-5">
                        <div class="col-12 text-center mt-4 mt-lg-5 mb-5 animate__animated animate__fadeInDown"><h1 class="text-s-44 text-w-700 theme-text-main">{{ $t("solution.oc2plus.header") }}</h1></div>
                        <!-- <div class="col-12 col-lg-6 ps-lg-5 mt-3"><img src="./../../assets/SolutionsOc2plus/Oc2Plus-04-CDP-View.wbp" alt="Oc2Plus-04-CDP-View.webp"></div>
                        <div class="col-12 col-lg-6 ps-lg-5 mt-3"><img src="./../../assets/SolutionsOc2plus/Oc2Plus-05-CRM-View.wbp" alt="Oc2Plus-05-CRM-View.webp"></div> -->
                
                        <div class="col-md-6 col-12 view animate__animated animate__slideInLeft animate__slow">
                            <div class="card item-center">
                                <div class="card-view theme-background-main d-flex">
                                    <h2 class="m-auto text-s-24 text-w-700 text-white">CDP VIEW</h2>
                                </div>
                                <div class="triangle-down-main"></div>
                                <div class="mt-2 text-center text-s-24 text-w-700 text-drak">SELLSUKI</div>
                                <hr class="ms-auto me-auto m-0" style="width: 110px;color:#708090">
                                <div class="text-s-24">
                                    <div class="row p-4">
                                        <div class="col-5 mt-1 text-w-700">Age : </div><div class="col-7 mt-1">7 yrs</div>
                                        <div class="col-5 mt-1 text-w-700">Location : </div><div class="col-7 mt-1">10, 39 Ratchadaphisek Rd, Chan Kasem, Chatuchak, Bangkok</div>
                                        <div class="col-5 mt-1 text-w-700">Opened mail : </div><div class="col-7 mt-1">25 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Visit Website : </div><div class="col-7 mt-1">27 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Browser : </div><div class="col-7 mt-1">Chrome</div>
                                        <div class="col-5 mt-1 text-w-700">Occupation : </div><div class="col-7 mt-1">Business partner</div>
                                        <div class="col-5 mt-1 text-w-700">Postal Code : </div><div class="col-7 mt-1">10900</div>
                                        <div class="col-5 mt-1 text-w-700">Email : </div><div class="col-7 mt-1">Hello@sellsuki.com</div>
                                        <div class="col-5 mt-1 text-w-700">Tell : </div><div class="col-7 mt-1">090 096 7526</div>
                                        <div class="col-5 mt-1 text-w-700">Interest in : </div><div class="col-7 mt-1">Digital Marketing</div>
                                    </div>
                                </div>
                                <hr class="ms-auto me-auto mt-auto mb-4" style="width: 110px;color:#708090">
                            </div>
                        </div>
                        <div class="col-md-6 col-12 mt-md-0 mt-5 view animate__animated animate__slideInRight animate__slow">
                            <div class="card item-center">
                                <div class="card-view theme-background-sub d-flex">
                                    <h2 class="m-auto text-s-24 text-w-700 text-white">CRM VIEW</h2>
                                </div>
                                <div class="triangle-down-sub"></div>
                                <div class="mt-2 text-center text-s-24 text-w-700 text-drak">SELLSUKI</div>
                                <hr class="ms-auto me-auto m-0" style="width: 110px;color:#708090">
                                <div class="text-s-24">
                                    <div class="row p-4">
                                        <div class="col-5 mt-1 text-w-700">Opened mail : </div><div class="col-7 mt-1">25 sep 21</div>
                                        <div class="col-5 mt-1 text-w-700">Browser : </div><div class="col-7 mt-1">Chrome</div>
                                        <div class="col-5 mt-1 text-w-700">Email : </div><div class="col-7 mt-1">Hello@sellsuki.com</div>
                                        <div class="col-5 mt-1 text-w-700">Tell : </div><div class="col-7 mt-1">090 096 7526</div>
                                    </div>
                                </div>
                                <hr class="ms-auto me-auto mt-auto mb-4" style="width: 110px;color:#708090">
                            </div>
                        </div>
                    </div>
                    <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, #E0EFFE 0%, rgba(227, 240, 254, 0) 100%);">
                    <div class="row">
                        <div class="col-12 mt-4 mb-2 text-center"><h1 class="text-s-44 text-w-700" style="color:#182E9C">{{ $t("solution.oc2plus.why") }}</h1></div>    
                    </div>
                    <div class="row mt-2 justify-content-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-24 text-w-700 mb-0">{{ $t("solution.oc2plus.why1") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-24 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why2") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-24 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why3") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 view-2">
                            <div class="card mt-3">
                                <div class="card-body d-flex">
                                    <div class="d-flex mt-auto mb-auto">
                                        <img class=" ms-2 me-3" width="20" height="20" src="./../../assets/icon/Group163.webp">
                                        <p class="text-s-24 text-w-700 mb-0 ps-2 pe-2">{{ $t("solution.oc2plus.why4") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                
                <div class="padding-card pt-0 text-center">
                    <Review :type="type"/>
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
import GetQuote from '@/components/Solutions/SolutionsGetQuote'
import Preloader from '@/components/Preloader'

export default {
    name: 'SolutionsOc2plus',
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
            title: "บริการแพลตฟอร์มจัดเก็บข้อมูล",
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    data () {
            return {
                type: 'Oc2plus',
                isHidden: false,
                lang: this.$i18n.locale || 'th-TH',
                animation1:true,
                animation2:true
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
                "name": "Oc2plus"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "CDP คืออะไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CDP หรือ Customer Data Platform เป็นระบบที่จะคอยช่วยรวบรวมข้อมูลต่าง ๆ ของลูกค้าที่เข้ามาใช้บริการจากทุก ๆ ช่องทาง ซึ่งเราสามารถกำหนดในส่วนของประเภทข้อมูลให้เหมาะสมกับรูปแบบธุรกิจ เพื่อนำมาวิเคราะห์ต่อยอดและใช้ในด้านการตลาด"
                    }
                },
                {
                    "@type": "Question",
                    "name": "CDP ต่างจาก CRM อย่างไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "CRM เป็นเครื่องมือที่เน้นสร้างความประทับใจอย่างบริการหลังการขาย โดยจะดูลูกค้าได้ทีละชาแนล ถ้าหากลูกค้าเคยสั่งซื้อสินค้าทางออนไลน์และเกิดมาซื้อสินค้าแบบออฟไลน์ผ่านหน้าร้านค้า ระบบจะไม่สามารถรับรู้ได้ว่าคือคน ๆ เดียวกัน ระบบ CDP (Customer Data Platform) จึงเข้ามาช่วยแก้จุดอ่อนในส่วนของปัญหาตรงนี้นั่นเอง"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ระบบ CDP มีความสำคัญอย่างไรกับธุรกิจ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ระบบ CDP เหมาะกับธุรกิจขนาดเล็กที่เริ่มมียอดขายเพิ่มขึ้นเรื่อย ๆ ไปจนถึงขนาดกลางและขนาดใหญ่ เนื่องจากมีปริมาณฐานข้อมูลของลูกค้าเยอะ จึงจำเป็นจะต้องใช้ระบบ CDP เข้ามาช่วยรวบรวมข้อมูลในส่วนนี้ไว้ เพื่อให้ธุรกิจนั้น ๆ สามารถหยิบข้อมูลที่มีมาใช้ให้เกิดประโยชน์สูงสุด"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ประโยชน์ของการใช้ CDP",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. การจัดการ และจัดเก็บข้อมูลของลูกค้า ให้ตรงตามจุดประสงค์ มีความเป็นระเบียน สามารถเรีกยใช้งานได้อย่างถูกต้อง\n2. ทำให้คุณสามารถนำข้อมูลที่จัดเก็บเอาไว้ มาวิเคราะห์ข้อมูล Insigh ได้ดีมากยิ่งขึ้น\n3. เป็นการดูแล และเพิ่มการปกป้องข้อมูลและความเป็นส่วนตัวของข้อมูลลูกค้า\n4. และสามารถตอบสนองต่อความต้องการของลูกค้าได้ตรงจุด ผลลัพธ์มีความแม่นยำ และเกิดประสิทธิภาพสูงสุด"
                    }
                },
                {
                    "@type": "Question",
                    "name": "บริการ Oc2Plus ช่วยอะไรในธุรกิจคุณ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. ช่วยรวบรวมข้อมูลจากทุกช่องทางขาย\n2. สามารถแบ่งประเภทลูกค้าออกเป็นกลุ่ม ๆ ตามข้อมูลที่กำหนดได้\n3. ให้คุณอยู่เหนือคู่แข่งด้วยฐานข้อมูลของลูกค้าแบบละเอียด\n4. สามารถนำข้อมูลในแต่ละส่วนมากวิเคราะห์แนวทางการตลาดได้แม่นยำขึ้น\n5. ต่อยอดพัฒนาสินค้าหรือบริการได้ตรงกลุ่มเป้าหมาย"
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": "Oc2Plus",
            "image": "",
            "description": "“เครื่องมือจัดเก็บข้อมูล สำหรับวางแผนการตลาด ที่เจ้าของธุรกิจต้องมี” บริการน้องใหม่จาก Sellsuki เป็นบริการ Customer Data Platform (CDP) หรือพื้นที่ในการจัดเก็บข้อมูลของลูกค้า ซึ่งมีความจำเป็นอย่างมากต่อการทำธุรกิจในยุคปัจจุบันที่เราต้องใช้ข้อมูล โดยหน้าที่ของ CDP คือ การรวบรวมข้อมูลของลูกค้าจากทุกช่องทาง ไม่ว่าจะเป็นเว็บไซต์ หรือ Social Media ต่าง ๆ มาไว้ในที่เดียว เพื่อให้ง่าย ต่อการนำมาใช้งานต่อ",
            "brand": {
                "@type": "Brand",
                "name": "Sellsuki"
            },
            "sku": "Oc2Plus",
            "offers": {
                "@type": "Offer",
                "url": "https://www.sellsuki.co.th/solutions/oc2plus",
                "priceCurrency": "THB",
                "price": "0",
                "availability": "https://schema.org/InStock"
            }
        }
    ]
    },
    mounted () {

        //window.addEventListener('scroll', this.onShow);
    },
    methods:{
        scrollToTop() {
            window.scrollTo(0,0);
        },
        onShow (e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if(this.windowTop > 200){
                this.animation1 = true
            }
            if(this.windowTop > 500){
                this.animation2 = true
            }
        }
    }
}
</script>

<style scoped>

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

.view .card{
    border-radius: 20px;
    filter: drop-shadow(10px 10px 30px rgba(55, 55, 55, 0.2));
    width: 374.08px;
    height: 475px;
}

.view-2 .card{
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgb(229 233 246 / 70%);
    height: 105px;
}

.card-view{
    border-radius: 20px 20px 0 0;
    background-color: black;
    height: 50px;
}

.triangle-down-main {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #4570B1;
    margin-left: auto;
    margin-right: auto;
}

.triangle-down-sub {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #54B2A6;
    margin-left: auto;
    margin-right: auto;
}

.theme-background-main{
    background-color: #4570B1;
}

.theme-background-sub{
    background-color: #54B2A6;
}

.theme-text-main{
    color: #4570B1;
}

.theme-text-sub{
    color: #54B2A6;
}

.theme-border{
    border-bottom: 1px solid #54B2A6 !important;
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
    .img-banner-top{
        width: 80%;
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
    .img-banner-top{
        width: 80%;
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
    .img-banner-top{
        margin-top:270px !important;
        width: 100%;
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
    .img-banner-top{
        margin-top: 145px !important;
        width: 100%;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .p-custom{
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
    .p-custom-2{
        padding-left: 65px !important;
        padding-right: 65px !important;
    }
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
    .img-banner-top{
        margin-top: 240px !important;
        width: 80%;
    }
}
</style>
