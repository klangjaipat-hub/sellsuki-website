<template>
    <div id="blog" class="font-df">

        <div class="container ps-3 pe-3 ps-md-0 pe-md-0">
            <ol class="mt-4 font-md">
                <ul class="breadcrumb mb-0 pt-0 pt-sm-3" style="color:#50151C;">
                    <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="breadcrumb-text">{{
                                $t("Menu.Home") }}</span></nuxt-link> <img class="mb-1"
                            src="../../assets/icon/ic_round-navigate-next.svg" />
                    </li>
                    <li>
                        <div class="text-s-24 text-w-700"><span class="breadcrumb-text">{{ $t("Menu.Blog") }}</span>
                        </div>
                    </li>
                </ul>
            </ol>
            <div class="row">
                <div class="col-12">
                    <span class="text-s-44 text-w-700">{{ $t("Blog.Search_Results") }}</span>
                </div>
            </div>
            <div class="row mt-2 justify-content-center">
                <div class="col-12 col-lg-8">
                    <Form>
                        <div id="search-wrapper">
                            <img class="btn-search" src="../../assets/icon/magnifying-glass-2.svg" alt="glass">
                            <input v-model="search" type="text" id="search" placeholder="Title Content SSK">
                            <img v-if="search != ''" @click="search = ''" class="btn-search cursor-pointer"
                                src="../../assets/icon/x-mark-2.svg" alt="clear">
                        </div>
                    </Form>
                </div>
            </div>
            <div v-for="(data, index) in responseData" :key="index" class="row">
                <nuxt-link @click="scrollToTop"
                    :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                    style="color:unset !important">
                    <div class="card mt-4">
                        <div class="row no-gutters">
                            <div class="col-md-4 col-img">
                                <img v-if="data.attributes.illustration != null" class="card-img card-img-banner"
                                    :src="data.attributes.illustration.data.attributes.url"
                                    :alt="data.attributes.illustration.data.attributes.alternativeText">
                                <div v-if="data.attributes.blog_tags.data.length != 0"
                                    class="position-text-blog d-block d-md-none">
                                    <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data"
                                        :key="indexTag">
                                        <span v-if="indexTag == 0" class="tag-blog-1">{{ dataTag.attributes.name }}</span>
                                        <span v-if="indexTag == 1" class="tag-blog-2">{{ dataTag.attributes.name }}</span>
                                        <span v-if="indexTag == 2" class="tag-blog-3">{{ dataTag.attributes.name }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="mb-1 text-s-18 color-64748B" style="text-transform: uppercase;">
                                        {{ dateTime(data.attributes.createdAt) }}</p>
                                    <h2 class="color-1F2937 card-title text-s-28 text-w-500">{{ data.attributes.title }}
                                    </h2>
                                    <h5 class="color-6B7280 card-text text-s-20">{{ data.attributes.description }}</h5>
                                    <div v-if="data.attributes.blog_tags.data.length != 0" class="d-none d-md-block">
                                        <div class="d-inline"
                                            v-for="(dataTag, indexTag) in data.attributes.blog_tags.data"
                                            :key="indexTag">
                                            <span v-if="indexTag == 0"
                                                class="tag-blog-1">{{ dataTag.attributes.name }}</span>
                                            <span v-if="indexTag == 1"
                                                class="tag-blog-2">{{ dataTag.attributes.name }}</span>
                                            <span v-if="indexTag == 2"
                                                class="tag-blog-3">{{ dataTag.attributes.name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="mt-sp">

            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader'
import moment from 'moment'
import _ from 'lodash';

export default {
    name: 'search',
    layout: "layoutV2",
    components: {
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
            title: "บทความ",
            route: process.env.MAIN_URL + this.$route.path
        });
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
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": this.$t("Menu.Blog")
            }]
        }
    },
    async asyncData({ $axios, route }) {
        return { responseData: [] };
    },
    data() {
        return {
            isActive: true,
            show: false,
            windowTop: 0,
            lang: this.$i18n.locale || 'th-TH',
            //lang: 'th-TH',
            number: 1,
            sumBlog: 11,
            responseData: [],
            responseDataByCate: [],
            blogHighlight: [],
            search: this.$route.query.search,
        }
    },
    watch: {
        search: _.debounce(async function (val) {
            this.responseData = [];
        }, 300) // 300ms delay
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        handleScroll() {
            this.show = true
        },
    }
}
</script>

<style scoped>
p {
    margin-bottom: 0px !important;
}

::placeholder {
    color: #1F2937 !important;
    font-size: 24px !important;
    font-weight: 400;
    line-height: 24px;
}

.btn-search {
    padding: 8px 14px;
}

.btn-view span {
    color: #32A9FF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.btn-view {
    border: 1.5px solid #DBEAFE;
    background: #F0F9FF;
    border-radius: 8px !important;
    display: inline-block;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    padding: 8px 42px;
}

.mt-sp {
    margin-top: 240px;
}

.card {
    background: #FFFFFF !important;
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
    border-radius: 8px !important;
    border: 0 !important;
}

.card-body {
    min-height: 200px;
}

.card-banner {
    width: 100%;
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
}

.card-img-banner {
    width: 100%;
    max-width: 100% !important;
    height: 225px;
    -o-object-fit: cover;
    object-fit: cover;
}

.position-text-blog {
    margin-top: -36px;
    margin-bottom: 10px;
    text-align: right;
}

.dot-carousel-active {
    width: 16px;
    height: 16px;
    background-color: #F35B1F;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.dot-carousel {
    width: 16px;
    height: 16px;
    background-color: #FBE2D8;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.arrow {
    display: inline-flex;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 37px;
    border: 1px solid var(--sskv-100-ssktemp-light, #EEE);
    background: rgba(255, 255, 255, 0.30);
}

.hvr-back-pulse:hover,
.hvr-back-pulse:focus,
.hvr-back-pulse:active {
    opacity: 0.8 !important;
}

.lh-1 {
    line-height: 1 !important
}

.display-none {
    display: none;
}

.btn-green {
    height: 30px;
    font-size: 10px;
    background: #2AAF4A;
    border-radius: 20px;
    color: #FFFFFF !important;
    box-sizing: border-box !important;
    border: none;
    border-radius: 20px !important;
}

.btn-blue {
    height: 30px;
    font-size: 10px;
    background: #15304E;
    border-radius: 20px;
    color: #FFFFFF !important;
    box-sizing: border-box !important;
    border: none;
    border-radius: 20px !important;
}

.carousel-indicators .active {
    background-color: #F76E22 !important;
}

.carousel-indicators [data-bs-target] {
    background-color: #F76E22 !important;
}

.carousel-indicators {
    opacity: .8;
}

.mt-carousel {
    margin-top: 30px !important;
    bottom: auto !important;
}

.img-fix-size {
    width: 100%;
    height: 203px;
    object-fit: cover;
}

.img-fix-size-2 {
    width: 100%;
    height: 160px;
    object-fit: cover;
}

.bg-radius {
    background: #F2F3F5;
    padding: 32px;
    border-radius: 50%;
}

#search-wrapper {
    display: flex;
    border: 1px solid #E5E7EB;
    align-items: center;
    border-radius: 50px;
    background-color: #fff;
    overflow: hidden;
    max-width: 100%;
    height: 44px;

}

#search {
    border: none;
    width: 100%;
    font-size: 24px;
}

#search:focus {
    outline: none;
}

.search-icon {
    margin: 10px;
    color: rgba(0, 0, 0, 0.564);
}

#search-button {
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: #1dbf73;
    padding: 0px 10px;
}

/* Extra small devices (phones, 525px and down) */
@media only screen and (max-width: 525px) {
    .btn-crad {
        top: 0;
        position: relative;
        margin-left: 0;
    }

    .crad-height {
        height: 100%;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .card-img {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }
}

@media only screen and (min-width: 525px) {
    .btn-crad {
        top: 0;
        position: relative;
        margin-left: 0;
    }

    .crad-height {
        height: 100%;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .card-img {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .btn-crad {
        top: 0;
        position: relative;
        margin-left: 0;
    }

    .crad-height {
        height: 100%;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .card-img {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .btn-crad {
        top: 0;
        position: relative;
        margin-left: 0;
    }

    .crad-height {
        height: 100%;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .col-img {
        padding: 0 !important;
    }

    .card-img {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .btn-crad {
        top: 480px;
        position: absolute;
        margin-left: 110px;
    }

    .crad-height {
        height: 490px;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .col-img {
        padding: 0 !important;
    }

    .card-img {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .btn-crad {
        top: 485px;
        position: absolute;
        margin-left: 140px;
    }

    .crad-height {
        height: 490px;
    }

    .hr-mid {
        border: 1px solid #E5E5E5;
        width: 100%;
        /* text-align: center; */
        margin: 20px 5px 20px 5px;
    }

    .col-img {
        width: 343px !important;
        max-width: 343px !important;
        padding: 0 !important;
    }

    .card-img {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
    }
}
</style>