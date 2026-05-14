<template>
<div id="SolutionsKaikong">
    
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #F7BC49 0%, #F4CC49 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#0B0404;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2">{{ $t("Menu.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li>
                                    <span itemprop="item"><span class="ps-2">{{ $t("Menu.Solution") }}</span></span> <i class="bi bi-chevron-right"></i> 
                                     
                                </li>
                                <li>
                                    <font class="text-s-24 text-w-700"><span class="ps-2">Kaikong</span></font>
                                     
                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-lg-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:45px;color:#0B0404">{{ $t("solution.kaikong.h1") }}</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-24" style="color:#0B0404">“{{ $t("solution.kaikong.text_banner") }}”</h2>
                                    <p class="text-s-24 mt-3" style="color:#0B0404">{{ $t("solution.kaikong.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36" style="color:#0B0404">{{ $t("solution.kaikong.h1") }}</div>
                            <div class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-5 pe-5 mt-4" style="color:#0B0404">“{{ $t("solution.kaikong.text_banner") }}”</div>
                            <p class="text-s-24 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#0B0404">{{ $t("solution.kaikong.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp" alt="Kaikong รับทำคอนเทนต์โฆษณาและบริการแอดมินดูแลเพจครบวงจร">
                        <img class="d-block d-md-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp" alt="Kaikong รับทำคอนเทนต์โฆษณาและบริการแอดมินดูแลเพจครบวงจร">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom mb-4 p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4 ">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-sub hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-1.webp"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;">{{ $t("solution.kaikong.content_marketing") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-main hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-2.webp"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-3 pe-3" style="color:#0A0909;line-height: 1.5;">{{ $t("solution.kaikong.graphic_production") }}</h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 theme-background-sub hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsKaikong/icon-solution-kaikong-3.webp"></div>
                            </div>
                            <h2 class="text-s-18 mt-4 ps-5 pe-5" style="color:#0A0909;line-height: 1.5;">{{ $t("solution.kaikong.admin_page") }}</h2>
                        </div>     
                    </div>
                    <div class="col-12 text-center mt-5"><h2 class="text-s-44 font-wght theme-text-sub">KAIKONG รับทำ Content Marketing จากทีมงานมืออาชีพ</h2></div>
                    <div v-for="(data, index) in responseData" :key="index">
                        <div :id="'contant' + (index + 1)">
                            <div v-if="data.attributes.position_left == true" class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__animated animate__zoomInLeft">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <img v-if="data.attributes.image != null" class="item-center hvr-rotate" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <div class="animate__animated animate__bounceInLeft animate__slow">
                                        <div>
                                            <div class="text-center text-lg-start text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <div class="animate__animated animate__bounceInRight animate__slow">
                                        <div>
                                            <div class="text-center text-lg-start text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                                    <h2 class="text-s-20 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <img v-if="data.attributes.image != null" class="item-center hvr-rotate" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4" style="background: linear-gradient(0, #FFCE82 0%, rgba(255, 207, 122, 0) 100%);">
                    <div class="row">
                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                            <h2 class="text-s-24 font-wght text-center d-none d-lg-block animate__animated animate__bounceInLeft animate__slow theme-text-sub" style="text-transform: uppercase;">Kaikong รับทำ Content Marketing</h2>
                            <div class="animate__animated animate__bounceInRight animate__slow card-shadow p-4 mt-5 bg-w">
                                <div class="text-s-24 p-3 p-lg-0" style="color:#373737">Kaikong บริการรับทำคอนเทนต์แบบครบวงจร ทุกแพลตฟอร์ม ไม่ว่าจะเป็น การรับทำคอนเทนต์โฆษณาบน Facebook, Instagram พร้อมให้คำแนะนำและ คำปรึกษาทุกเรื่องเกี่ยวกับ Content Marketing</div>
                            </div>
                            <div class="text-center">
                                <a itemprop="tel" href="tel:0900967526" target="_blank" rel="noopener" class="btn btn-radius theme-background-main ps-4 pe-4 mt-4"><span class="text-white font-wght" style="font-size:16px">สอบถามเพิ่มเติม 02-026-3250</span></a>
                            </div>
                        </div>
                        <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                            <h2 class="text-s-24 font-wght text-center d-block d-lg-none theme-text-sub" style="text-transform: uppercase;line-height: normal;">Kaikong รับทำ <br>Content Marketing</h2>
                            <img class="item-center hvr-rotate img-section-1" src="../../assets/SolutionsKaikong/sell.webp" alt="sell.webp">
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
    name: 'SolutionsKaikong',
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
            title: "Kaikong รับทำ Content Marketing ดูแลเพจครบวงจร",
            route: process.env.MAIN_URL + this.$route.path,
            description: "Kaikong  รับทำ Content Marketing รับวางแผนคอนเทนต์ รับทำคอนเทนต์โฆษณา เพื่อเพิ่มยอดขาย พร้อมบริการแอดมินดูแลเพจ ตอบโจทย์คนทำธุรกิจออนไลน์"
        });
    },
    data () {
            return {
                type: 'Kaikong',
                isHidden: false,
                lang: this.$i18n.locale || 'th-TH',
                windowTop:'',
                responseData:[]
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
                "name": "Kaikong"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Content Marketing มีความสำคัญอย่างไรกับธุรกิจ",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. สามารถสื่อสารระหว่างแบรนด์กับกลุ่มลูกค้าได้โดยตรง  \n2. สร้างการรับรู้ จุดยืน และตัวตนของแบรนด์ให้ชัดเจนมากขึ้น\n3. เพิ่มยอดขาย สร้างรายได้ให้แบรนด์เติบโต\n4. ลูกค้ามีความเชื่อมั่น และมั่นใจในแบรนด์ของคุณ\n5. เลือกใช้ช่องทางในการนำเสนออย่างถูกต้อง"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ทำไมต้องจ้างทำคอนเทนต์",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "เพราะการรับทำคอนเทนต์ ดูแลเพจ เขียนคอนเทนต์ จะช่วยให้คุณสามารถเข้าถึงกลุ่มลูกค้าที่คุณต้องการได้อย่างตรงจุด\n✅ พร้อมให้คำปรึกษาและวางแผนการทำคอนเทนต์ และหาข้อมูล insigh ที่สามารถเจาะกลุ่มลูกค้าได้ตรงจุด \n✅ เนื้อหาคอนเทนต์มีคุณภาพ เชื่อถือได้ ลูกค้าให้การยอมรับ \n✅ การันตีความมืออาชีพ จากทีมผู้เชี่ยวชาญมากประสบการณ์ในการทำงาน"
                    }
                },
                {
                    "@type": "Question",
                    "name": "คอนเทนต์มีกี่ประเภท",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. Educate (เพื่อให้ความรู้) อาจจะเป็นคอนเทนต์ How to , เทคนิค หรือเคล็ดลับ ซึ่งอาจจะนำเสนอเป็นอินโฟกราฟิก หรือคลิปสอนสั้นๆ ให้สามารถเข้าใจได้ง่ายในทันที\n2. Entertain (เพื่อให้ความบันเทิง) คอนเทนต์ที่สร้างการรับรู้ ที่มีการกระตุ้นอารมณ์ ผ่านรูปแบบการแข่งขัน Duet หรือVideo Viral\n3. Inspire (เพื่อสร้างแรงบันดาลใจ) ผู้ที่มีชื่อเสียงอย่าง Celeb, Influencer จะสามารถสร้างแรงดึงดูดใจ และกระตุ้นการตัดสินใจซื้อได้ง่ายขึ้น ผ่านการทำตาม หรือของมันต้องมีนั่นเอง\n4. Convince (เพื่อโน้มน้าว) สามารถนำเสนอในรูปแบบของการเปรียบเทียบสินค้า รีวิวจากผู้ใช้งานจริง จะสามารถโน้มน้าวและเป็นตัวเลือกในการตัดสินใจของลูกค้าได้ "
                    }
                },
                {
                    "@type": "Question",
                    "name": "แอดมินตอบแชท คืออะไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "แอดมินตอบแชต พูดคุยโต้ตอบแบบธรรมชาติ\nเพราะการเข้าใจลูกค้า หรือสามารถให้ข้อมูลได้ตรงประเด็น จะช่วยให้ลูกค้ามีประสบการณ์ร่วมที่ดีต่อร้านค้าของคุณ แน่นอนว่าบางคำถาม จนเข้ามารีวิวการใช้งาน ให้ดาวว่า ร้านนี้บริการดี ซึ่งบางคำ หรือประโยค อาจจะไม่ได้ตรงตามข้อมูลที่คีย์ไว้สำหรับแชตอัตโนมัติได้ ดังนั้นหน้าที่ของแอดมินตอบแชต จึงเป็นอีกหนึ่งตัวช่วย ที่จะให้บริการแก่ลูกค้าที่ทักเข้ามา สามารถรับรู้ได้ถึงความเป็นจริง ที่มีความธรรมชาติมากกว่าระบบอัตโนมัติ สามารถพูดคุยได้ครบทุกเรื่องราวที่ต้องการจะสอบถามนั่นเอง จึงถือว่า Admin ยังคงครองใจแม่ค้าออนไลน์อยู่เช่นกัน"
                    }
                },
                {
                    "@type": "Question",
                    "name": "แอดมินดูแลเพจ ทำอะไรบ้าง?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. แอดมินดูแลเพจ จะมีหน้าที่คอยให้ข้อมูลเกี่ยวกับสินค้าและบริการของคุณ \n2. ตอบทุกปัญหาและข้อสงสัย อีกทั้งยังให้คำแนะนำทางเลือกที่ดีที่สุดให้แก่ลูกค้า \n3. จูงใจลูกค้าด้วยการเสนอขายอย่างมืออาชีพ เพื่อให้แบรนด์สามารถปิดการขาย และสามารถสร้างยอดขายได้มากยิ่งขึ้น"
                    }
                }
            ]
        }
    ]
    },
    async asyncData({ $axios, route, i18n }) {
        return {
          responseData: [
            { id: 1, attributes: { position_left: true, header: "Content Marketing ครบวงจร", image: { data: { attributes: { url: "https://placehold.co/600x400/F35B1F/FFFFFF/png?text=Kaikong+Service", alternativeText: "" } } }, detail: "วางแผนและสร้างคอนเทนต์ที่ตรงกลุ่มเป้าหมาย" } },
            { id: 2, attributes: { position_left: false, header: "แอดมินดูแลเพจมืออาชีพ", image: { data: { attributes: { url: "https://placehold.co/600x400/F7BC49/000000/png?text=Admin+Page", alternativeText: "" } } }, detail: "บริการแอดมินดูแลเพจและตอบแชทลูกค้าตลอด 24 ชั่วโมง" } }
          ]
        }
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
            if(this.windowTop > 400){
                document.querySelector('#contant1').style.display = "block";
            }
            if(this.windowTop > 800){
                document.querySelector('#contant2').style.display = "block";
            }
            if(this.windowTop > 1200){
                document.querySelector('#contant3').style.display = "block";
            }
        }
    }
}
</script>

<style scoped>
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

.item-center{
    display: block !important;
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

.img-banner-top{
    margin-top: 80px !important;
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
    .img-section-1{
        width: 100%;
        margin-bottom: -95px;
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
    .img-section-1{
        width: 100%;
        margin-bottom: -95px;
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
    .img-section-1{
        width: 100%;
        margin-bottom: -110px;
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
    .img-section-1{
        margin-left: -182px;
        margin-bottom: 0;
        width: auto;
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
    .img-section-1{
        margin-left: -182px;
        margin-bottom: 0;
        width: auto;
    }
}
</style>
