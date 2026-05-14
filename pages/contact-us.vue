<template>
    <div id="ContactUs">

        <div class="background-main">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#50151C;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span
                                            class="ps-2 text-s-24">{{ $t("Menu.Home") }}</span></nuxt-link> <i
                                        class="bi bi-chevron-right"></i>

                                </li>
                                <li itemscope itemtype="https://schema.org/ListItem">
                                    <font class="text-s-24 text-w-700"><span class="ps-2">{{ $t("Menu.ContactUs")
                                            }}</span></font>

                                </li>
                            </ul>
                        </ol>
                        <div class="d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght" style="font-size:64px;color:#50151C">{{
                                        $t("page.CONTACTUS.CONTACTUS") }}</h1>
                                    <p class="text-s-24" style="color:#50151C">{{ $t("page.CONTACTUS.mata") }}</p>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-md-none d-lg-none d-xl-none d-xxl-none text-center ps-4 pe-4">
                            <div class="font-wght mt-3" style="font-size:36px;color:#50151C">{{
                                $t("page.CONTACTUS.CONTACTUS") }}</div>
                            <p class="text-s-24" style="color:#50151C">{{ $t("page.CONTACTUS.mata") }}</p>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-xl-block d-xxl-block img-fluid"
                            src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_Contact_Us_01_1_69a79d2720.webp"
                            alt="Header Contact Us" style="margin-top: 80px;">
                        <img class="d-block d-xl-none d-xxl-none img-fluid"
                            src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_Contact_Us_01_1_69a79d2720.webp"
                            alt="Header Contact Us ">
                    </div>
                </div>
                <div class="crad mt-5">
                    <p class="d-block d-xl-none d-xxl-none text-center text-s-44 font-wght pt-4" style="color:#50151C">
                        {{ $t("page.CONTACTUS.CONTACTUS") }}</p>
                    <div class="row padding-contact">
                        <div
                            class="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 pe-xxl-5 pe-xl-5 border-contact">
                            <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                                <div class="row">
                                    <div class="form-group col-12">
                                        <label class="text-s-24" style="color: #373737;">Name<span
                                                class="text-danger">*</span></label>
                                        <input v-model="form.name" id="name" name="name" type="text"
                                            class="form-control mt-2"
                                            :class="{ 'border border-danger': validate && !form.name }">
                                        <div v-if="validate">
                                            <p v-if="!form.name" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 mt-4">
                                        <label class="text-s-24" style="color: #373737;">Phone Number<span
                                                class="text-danger">*</span></label>
                                        <input v-model="form.phone_number" name="phone" id="phone" type="text"
                                            class="form-control mt-2"
                                            :class="{ 'border border-danger': validate && !form.phone_number }">
                                        <div v-if="validate">
                                            <p v-if="!form.phone_number" class="text-danger mb-0 mb-0">
                                                {{ $t('form.Pleasespecify') }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 mt-4">
                                        <label class="text-s-24" style="color: #373737;">Email<span
                                                class="text-danger">*</span></label>
                                        <input v-model="form.email" name="email" id="email" type="email"
                                            class="form-control mt-2"
                                            :class="{ 'border border-danger': validate && !form.email }">
                                        <div v-if="validate">
                                            <p v-if="!form.email" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 mt-4">
                                        <label class="text-s-24" style="color: #373737;">Message<span
                                                class="text-danger">*</span></label>
                                        <textarea v-model="form.message" name="message" id="message"
                                            class="form-control mt-2"
                                            :class="{ 'border border-danger': validate && !form.message }"
                                            style="height:180px"></textarea>
                                        <div v-if="validate">
                                            <p v-if="!form.message" class="text-danger mb-0">
                                                {{ $t('form.Pleasespecify') }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center" style="width: 100%;margin-top:32px">
                                    <button type="submit" class="btn-orange hvr-back-pulse text-s-24"><span><i
                                                class="bi bi-cursor-fill"></i> Send</span></button>
                                </div>
                            </form>
                        </div>
                        <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                            <img class="item-center mt-5 cover-img" width="193" height="82"
                                src="../assets/logo-Sellsuki.svg" alt="sellsuki-logo">
                            <p class="text-s-24 mt-4" style="color:#23243D">Sellsuki Co,. Ltd. อาคาร 4 Simplex <br>ชั้น
                                3 เลขที่ 10/39 ถนนรัชดาภิเษก <br>แขวงจันทรเกษม เขตจตุจักร กรุงเทพมหานคร 10900</p>
                            <p class="text-s-24 mt-5" style="color:#23243D">โทรศัพท์ : 02-026-3250</p>
                            <img class="item-center mt-4"
                                src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/sellsuki_actor_2_0237634e46.webp"
                                alt="sellsuki actor">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <GMapMap :center="{ lat: 13.8019328, lng: 100.5751006 }" :zoom="20" map-type-id="terrain"
                                style="width: 100%; height: 400px">
                                <GMapCluster>
                                    <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position"
                                        :clickable="true" :draggable="true" @click="center = m.position" />
                                </GMapCluster>
                            </GMapMap>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader'
export default {
    name: 'ContactUs',
    layout: "Layout",
    components: {
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
            title: "ติดต่อเรา",
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    data() {
        return {
            referrer: '',
            dataToken: [],
            validate: false,
            form: {
                name: '',
                phone_number: '',
                email: '',
                message: ''
            },
            center: { lat: 13.8019328, lng: 100.5751006 },
            markers: [
                {
                    position: {
                        lat: 13.8019328, lng: 100.5751006
                    },
                }
                , // Along list of clusters
            ]
        }
    },
    jsonld() {
        return [
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": this.$t("Menu.Home"),
                        "item": "https://www.sellsuki.co.th/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": this.$t("Menu.ContactUs"),
                        "item": "https://www.sellsuki.co.th/contact-us"
                    }
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Sellsuki สำนักงาน",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "10, 39 ถ. รัชดาภิเษก แขวง จันทรเกษม เขตจตุจักร กรุงเทพมหานคร 10900\n<a href='https://goo.gl/maps/h4JKB1dFBi1H91AK9'>https://goo.gl/maps/h4JKB1dFBi1H91AK9</a>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "สนใจบริการของเรา ",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<a href='https://www.sellsuki.co.th/contact-us'>https://www.sellsuki.co.th/contact-us</a>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "ช่องทางการติดต่อทาง Facebook YouTube TikTok LINE ",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "<a href='https://www.facebook.com/Sellsuki'>https://www.facebook.com/Sellsuki</a>\n<a href='https://www.youtube.com/@Sellsuki'>https://www.youtube.com/@Sellsuki</a>\n<a href='https://www.tiktok.com/@sellsuki.official'>https://www.tiktok.com/@sellsuki.official</a>\n<a href='https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true'>https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true</a>"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Sellsuki วันและเวลาทำการ",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "จันทร์ - ศุกร์ เวลา 10:00 - 19:00 น."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "เบอร์โทรติดต่อ",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "02-026-3250"
                        }
                    }
                ]
            }
        ];
    },
    mounted() {
        const cookieReferrer = this.$cookies.get('cookie-referrer')
        if (cookieReferrer == '' || cookieReferrer == undefined) {
            this.referrer = "Direct"
        }
        else {
            this.referrer = cookieReferrer
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        submitForm() {
            if (this.form.name == '' || this.form.phone_number == '' || this.form.email == '' || this.form.message == '') {
                this.validate = true
                return false
            }
            if (this.form.name != '' && this.form.phone_number != '' && this.form.email != '' && this.form.message != '') {
                this.success = true
            }
        }
    }
}
</script>

<style scoped>
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .padding-contact {
        padding: 30px 30px 40px 30px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .padding-contact {
        padding: 30px 30px 40px 30px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .padding-contact {
        padding: 30px 50px 30px 50px;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .padding-contact {
        padding: 40px 60px 40px 60px;
    }

    .border-contact {
        border-right: 1px solid #E5E5E5;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .padding-contact {
        padding: 60px 80px 80px 80px;
    }

    .border-contact {
        border-right: 1px solid #E5E5E5;
    }
}
</style>