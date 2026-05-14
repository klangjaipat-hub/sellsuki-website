<template>
<div id="SolutionsBeary">
    
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #0CBC93 0%, #5BCCB5 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#FFFFFF;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2">{{ $t("Menu.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li>
                                    <span itemprop="item"><span class="ps-2">{{ $t("Menu.Solution") }}</span></span> <i class="bi bi-chevron-right"></i> 
                                     
                                </li>
                                <li>
                                    <font class="text-s-24 text-w-700"><span class="ps-2">Beary Tech</span></font>
                                     
                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-lg-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:36px;color:#FFFFFF">{{ $t("solution.beary.h1") }}</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#FFFFFF">“{{ $t("solution.beary.text_banner") }}”</h2>
                                    <p class="text-s-24 mt-3" style="color:#FFFFFF">{{ $t("solution.beary.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36" style="color:#FFFFFF">{{ $t("solution.beary.h1") }}</div>
                            <div class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-4 pe-4 mt-4" style="color:#FFFFFF">“{{ $t("solution.beary.text_banner") }}”</div>
                            <p class="text-s-24 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#FFFFFF">{{ $t("solution.beary.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Beary_3e18907016.webp" alt="Beary Tech บริการสร้างเว็บไซต์ และรับทําแอปพลิเคชัน แบบครบวงจร">
                        <img class="d-block d-md-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Beary_3e18907016.webp" alt="Beary Tech บริการสร้างเว็บไซต์ และรับทําแอปพลิเคชัน แบบครบวงจร">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row text-center justify-content-center mb-4">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #0BBD92;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-1.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">Website</h2>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #030303;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-2.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">LINE API Messaging</h2>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #0BBD92;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-3.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">LINE OA</h2>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #030303;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-4.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">CRM Software</h2>
                        </div>  
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #0BBD92;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-5.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">Web Application</h2>
                        </div>  
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 mt-3 mt-md-4">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow" style="background-color: #030303;">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsBeary/icon-solution-beary-6.webp"></div>
                            </div>
                            <h2 class="text-s-20 mt-3" style="color:#0A0909">Mobile Application</h2>
                        </div>       
                    </div>
                    <div class="col-12 text-center mt-5"><h2 class="text-s-44 font-wght theme-text-sub">Beary Tech รับเขียนโปรแกรมและพัฒนาเว็บไซต์</h2></div>
                    <div v-for="(data, index) in responseData" :key="index">
                        <div :id="'contant' + (index + 1)">
                            <div v-if="data.attributes.position == 'Left'" class="row mt-4 p-custom-2 d-flex">
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
                <div v-if="animation1" class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, #6AD5C0 0%, rgba(106, 213, 192, 0) 100%);">
                    <div class="row">
                        <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 animate__animated animate__zoomInRight">
                            <h2 class="text-s-24 font-wght text-center d-block d-lg-none theme-text-sub-2" style="text-transform: uppercase;">Beary Tech รับทำเว็บไซต์สำหรับ E-Commerce</h2>
                            <img class="item-center img-fluid hvr-rotate c-size" src="../../assets/SolutionsBeary/sell.webp" alt="sell.webp">
                        </div>
                        <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-3 pe-lg-3 ps-3 pe-3 m-auto ">
                            <h2 class="text-s-24 font-wght text-center d-none d-lg-block theme-text-sub-2" style="text-transform: uppercase;">Beary Tech รับทำเว็บไซต์สำหรับ E-Commerce</h2>
                            <div class="animate__animated animate__bounceInRight animate__slow card-shadow p-4 mt-5 bg-w">
                                <h2 class="text-s-20 font-wght text-center theme-text-sub" style="text-transform: uppercase;">“บริการพัฒนาและรับออกแบบเว็บไซต์ทุกรูปแบบ”</h2>
                                <div class="text-s-24 pb-0 mb-0" style="color:#373737">สำหรับใครที่กำลังมองหาบริษัททำเว็บไซต์ เราขอแนะนำ Beary Tech ผู้ให้บริการ รับเขียนเว็บไซต์และรับทำแอปพลิเคชันครบวงจร ที่สามารถรองรับธุรกิจ E-Commerce ได้อย่างมีประสิทธิภาพ ตอบโจทย์ทุกความต้องการของผู้ใช้งาน เพื่อส่งมอบ ประสบการณ์ที่ดีที่สุด</div>
                            </div>
                            <!-- <div class="text-center">
                                <a itemprop="tel" href="tel:0900967526" target="_blank" rel="noopener" class="btn btn-radius theme-background-sub ps-4 pe-4 mt-4"><span class="text-white font-wght" style="font-size:16px">สอบถามเพิ่มเติม 02-026-3250</span></a>
                            </div> -->
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 mt-4 mb-2 text-center animate__animated animate__fadeInDown theme-text-sub"><h2 class="text-s-44 text-w-700">{{ $t("solution.beary.brand_value") }}</h2></div>    
                    </div>
                    <div class="row mt-5 text-center">
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-2">
                                <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-1.webp"></div>
                            </div>
                            <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                            <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737" v-html="$t('solution.beary.1')"></h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-2.webp"></div>
                            </div>
                            <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                            <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737" v-html="$t('solution.beary.2')"></h2>
                        </div>
                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                            <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsLine/icon-solution-Line-3.webp"></div>
                            </div>
                            <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                            <h2 class="text-s-20 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737" v-html="$t('solution.beary.3')"></h2>
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
    name: 'SolutionsBeary',
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
            title: "Beary รับเขียนโปรแกรม บริการสร้างเว็บไซต์ครบวงจร",
            route: process.env.MAIN_URL + this.$route.path,
            description: "Beary Tech บริการรับเขียนเว็บไซต์ รับทำแอปพลิเคชัน และบริการสร้างเว็บไซต์ครบวงจร รองรับการขายสินค้าและคลังสินค้าสำหรับคนทำธุรกิจออนไลน์"
        });
    },
    data () {
        return {
            type: 'Beary',
            isHidden: false,
            lang: this.$i18n.locale || 'th-TH',
            animation1:false,
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
                "name": "Beary"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "ทำไมต้องทำเว็บไซต์",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "เพราะเว็บไซต์เป็นช่องทางที่ใช้ในการเผยแพร่ ข้อมูล ข่าวสาร โปรโมชั่นและบริการต่าง ๆ ในแต่ละธุรกิจ ซึ่งยังเพิ่มความน่าเชื่อถือให้กับผู้ที่เข้ามาใช้ และยังสามารถขายสินค้าทางออนไลน์บนหน้าเว็บสร้างรายได้โดยไม่ต้องมีหน้าร้าน พร้อมทำ SEO อย่างบทความให้เว็บไซต์ของเราติดหน้าแรกบน Google ได้อีกด้วย"
                    }
                },
                {
                    "@type": "Question",
                    "name": "อยากทำเว็บไซต์เตรียมตัวยังไง",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. ระบุกลุ่มลูกค้า หรือเป้าหมายที่ต้องการ โดยการวางแผนสร้างเว็บไซต์จะต้องสอดคล้องการแผนการลาดที่ได้กำหนดไว้ ไม่ว่าจะเป็นเพศ อายุ อาชีพ รายได้ ฯลฯ และกำหนดหัวข้อตามความชื่นชอบ หรือไลฟืสไตล์ที่สามารถเกี่ยวข้องกับบริการของคุณ ดังนั้นจะต้องมีการระบุกลุ่มเป้าหมายที่ชัดเจน\n2. การวางแผนเว็บไซต์ จัดโครงสร้างเว็บไซต์ให้เหมาะสม รวมไปถึง Action ต่างๆที่มีบนตัวเว็บไซต์ หากเป็นการขายของออนไลน์ ก็ควรจะมีระบบการกดสั่งซื้อสินค้าเป็นต้น และมีการหาเครื่องมือเข้ามาช่วยวิเคราะห์ประเมินผลเว็บไซต์ โดยสามารถใช้ Google Analytic หรือ Google Serach Console เองก็ตาม\n3. ความพร้อมด้านการทำ SEO เพื่อดันยอดค้นหาบน Google เสิร์ชเอนจิน ซึ่งคุณจะต้องทราบถึง คำ หรือคีย์เวิร์ดที่กลุ่มเป้าหมายของคุณทำการค้นหา ผ่านการ Keyword Research \n4. การทำ Website Copy ในส่วนของหน้าเมนุต่างๆ บนเว็บไซต์ ไม่ว่าจะเป็นหน้าโฮม เกี่ยวกับเรา บล็อก หรือต่างๆ ที่คุณเลือก โดยจะต้องสอดคล้องกับประเภทเว็บไซต์ที่คุณต้องการ \n5. รูปภาพและวิดีโอบนเว็บ ขนาด หรือไซสืของรูปภาพและวิดีโอที่คุณเลือกอัปโหลด จะมีผลต่อการใช้งานบนเว็บไซต์ \n6. ข้อมูลด้านอื่น ๆ ไม่ว่าจะเป็น PDPA อีเมล หรือ LINK ต่างๆ ล้วนมีความจำเป้นในการทำเว็บไซต์เช่นกัน "
                    }
                },
                {
                    "@type": "Question",
                    "name": "Domain คืออะไร?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Domain name (โดเมน) คือชื่อเว็บไซต์ ที่อยู่หลัง www. \nตัวอย่าง www.Sellsuki.co.th (Sellsuki.co.th คือชื่อโดเมน) \n\nและโดเมน มีกี่ประเภท\n1. โดเมน 2 ระดับ เช่น www.youtube.com (1.ชื่อโดเมน, 2.ประเภทของโดเมน)\n2. โดเมน 3 ระดับ เช่น www.Sellsuki.co.th (1.ชื่อโดเมน, 2.ประเภทของโดเมน, 3.ชื่อประเทศ)"
                    }
                },
                {
                    "@type": "Question",
                    "name": "Hosting คืออะไร?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hosting คือพื้นที่ที่ใช้สำหรับเก็บข้อมูลเว็บไซต์ทั้งหมด ซึ่งเจ้าของเว็บไซต์ทุกเว็บไซต์จำเป็นต้องมี Hosting \nส่วน บริการเว็บโฮสดิ้ง คือบริการให้เช่าพื้นที่สำหรับจัดเก็บข้อมูล สามารถเช่าใช้บริการรายปี หรือเลือกตามขนาดพื้นที่ตามความต้องการในการใช้งานจริงของแต่ละเว็บไซต์ เป็นหนึ่งในพื้นที่ให้บริการฝากข้อมูลเว็บไซต์ "
                    }
                }
            ]
        }
    ]
    },
    async asyncData({ $axios, route, i18n }) {
        return {
          responseData: [
            { id: 1, attributes: { position: "Left", header: "พัฒนาเว็บไซต์ครบวงจร", image: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Beary+Service", alternativeText: "" } } }, detail: "บริการสร้างเว็บไซต์และแอปพลิเคชันที่ตอบโจทย์ธุรกิจ" } },
            { id: 2, attributes: { position: "Right", header: "บริการ LINE API & OA", image: { data: { attributes: { url: "https://placehold.co/600x400/06C755/FFFFFF/png?text=LINE+OA", alternativeText: "" } } }, detail: "เชื่อมต่อ LINE API และพัฒนา LINE OA ให้ธุรกิจของคุณ" } }
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
            if(this.windowTop > 500){
                document.querySelector('#contant1').style.display = "block";
            }
            if(this.windowTop > 900){
                document.querySelector('#contant2').style.display = "block";
            }
            if(this.windowTop > 1300){
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

.theme-text-main{
    color: #171515;
}

.theme-text-sub{
    color: #0DB991;
}

.theme-text-sub-2{
    color: #0B9B9B;
}

.theme-background-sub{
    background-color: #030303;
}

.theme-border{
    border-bottom: 1px solid #0DB991 !important;
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
    .c-size{
        max-width: 450px;
    }
}
</style>
