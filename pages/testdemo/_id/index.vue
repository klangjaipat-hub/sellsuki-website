<template>
    <div class="font-inpage" style="background: linear-gradient(180deg, #FFFFFF 11.26%, #FFF6ED 100%);">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6>
                        <ol>
                            <ul class="breadcrumb mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#8F97A8;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2">{{ $t("Menu.Home") }}</span></nuxt-link>  <img src="../../../assets/icon/ic_round-navigate-next.png" alt="">
                                </li>
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/blog')"><span class="ps-2">{{ $t("Menu.Blog") }}</span></nuxt-link> <img src="../../../assets/icon/ic_round-navigate-next.png" alt="">
                                </li>
                                <li>
                                    <span class="ps-2">{{responseData.attributes.title}}</span>                              
                                </li>
                            </ul>
                        </ol>
                    </h6>
                </div>
            </div>
            <div class="mt-md-4 mt-0 text-color-this-page">
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2">
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12"><h4 class="text-s-44 font-weight-500">{{responseData.attributes.title}}</h4></div>
                            <div class="col-12">
                                <h6 style="color:#807F7F !important">
                                    <span class="pe-24">by Admin</span>
                                    <span class="pe-24">{{dateTime(responseData.attributes.createdAt)}}</span>
                                    <span class="pe-24" style="color: #464646 !important;"><img class="pe-2" src="../../../assets/icon/mdi_eye.png" alt="">views : 12,654</span>
                                    <span class="pe-24" style="color: #464646 !important;"><img class="pe-2" src="../../../assets/icon/ph_share-bold.png" alt="">shares : 280</span>
                                    <span class="pe-24" style="color: #464646 !important;"><img class="pe-2" src="../../../assets/icon/charm_sound-down.png" alt="">Listen</span>
                                </h6>
                            </div>             
                        </div>
                        <div class="row">
                            <div class="col-12 pt-3">
                                <div v-html="responseData.attributes.content"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 pt-3">
                                <span>Tag : </span>
                                <span v-for="data in responseData.attributes.tags.data" :key="data.id">
                                    <span class="tag pt-1">{{data.attributes.name}}</span>
                                </span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <hr style="border: 1px solid #EEEEEE;"/>
                                <div class="item-center p-4">
                                    <span>Share</span>
                                    <img class="pe-2" src="../../../assets/icon/bxl_facebook.png" alt=""/>
                                    <img class="pe-2" src="../../../assets/icon/akar-icons_youtube-fill.png" alt=""/>
                                    <img class="pe-2" src="../../../assets/icon/bi_line.png" alt=""/>
                                    <img class="pe-2" src="../../../assets/icon/ic_round-email.png" alt=""/>
                                </div>
                                <hr style="border: 1px solid #EEEEEE;"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <h4>Tag</h4>
                        <span v-for="data in responseData.attributes.tags.data" :key="data.id">
                            <span class="tag pt-1">{{data.attributes.name}}</span>
                        </span>
                        <div class="pt-3">
                            <img src="../../../assets/Rectangle-20.png" style="margin-left: -20px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
            </div>
        </div>
    </div>
</template>
    
    <script>
    import moment from 'moment'
    export default {
        name: 'BlogsDemo',
        layout: null,
        components:{

        },
        data() {
        return {
            responseData:[],
            lang: this.$i18n.locale || 'th-TH',
            //lang: 'th-TH',
            urls: process.env.MAIN_URL + this.$route.path
        }
        },
        methods: {
            scrollToTop() {
                window.scrollTo(0,0);
            },
            dateTime(value) {
                return moment(value).format('DD MMM YYYY');
            },
        },
        async asyncData({ $axios, route, i18n }) {
            return {}
        },
    }
    </script>
    
    <style scoped>

/* Webfont: DBHeaventRounded-Med */@font-face {
  font-family: 'Heavent';
  src: url('../../../assets/fonts/HeaventRounded/DB HeaventRounded Med v3.2.1.woff2') format('woff2'), /* Modern Browsers */
       url('../../../assets/fonts/HeaventRounded/DB HeaventRounded Med v3.2.1.otf') format('opentype'); /* Safari, Android, iOS */
           font-style: normal;
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

span{
    font-family: 'Heavent' !important;
}

.footer{
    height: 500px;
}

.tag{
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3px 10px;
    grid-gap: 10px;
    gap: 10px;
    background: #EEEEEE;
    border-radius: 8px;
    margin-right: 10px;
    margin-top: 10px;
}


  
  /* -------------------------#css code------------------------ */
  
    .font-inpage {
        font-family: 'Heavent', sans-serif !important;
    }

    .container{
        max-width: 1320px !important;
    }

    h1{
        font-size: 78px !important;
    }
    h2{
        font-size: 68px !important;
    }
    h3{
        font-size: 58px !important;
    }
    h4{
        font-size: 48px !important;
    }
    h5{
        font-size: 38px !important;
    }
    h6{
        font-size: 28px !important;
    }

    p {
        font-size: 28px !important;
    }

    span {
        font-size: 28px !important;
    }

    .item-center{
        justify-content: center;
        align-items: center;
        display: flex;
    }
    

    .font-weight-300{
        font-weight: 300 !important;
    }

    .font-weight-500{
        font-weight: 500 !important;
    }

    .font-weight-700{
        font-weight: 700 !important;
    }

    .pe-24{
        padding-right: 24px;
    }

    .show-text-color a{
        color: #0d6efd !important;
    }
    
    .img-cover {
      width: 100% !important;
      /* height: 600px;
      object-fit: cover; */
    }
    
    div::v-deep h1{
        font-size: 78px !important;
        font-family: 'Heavent', sans-serif !important;
    }
    
    div::v-deep h2{
        font-size: 68px !important;
    }
    
    div::v-deep h3{
        font-size: 58px !important;
    }
    
    div::v-deep h4{
        font-size: 48px !important;
    }
    
    ::v-deep p{
        font-size: 28px !important;
        margin: 0 !important;
        line-height: 34px;
    }
    
    ::v-deep li{
        font-size: 28px !important;
    }

    div::v-deep tr{
        border: 0 !important;
    }
    div::v-deep td figure{
        position: relative !important;
    }

    div::v-deep td{
        vertical-align: top;
        padding: 0px 20px;
    }

    div::v-deep blockquote {
        display: block;
        padding: 15px 24px 15px;
        font-style: italic;
        margin: 20px 0;
        position: relative;
        font-family: 'Heavent', sans-serif !important;
        line-height: 34px;
        /* text-align: justify; */
        border-left: 8px solid #ccc;
    }
    
    </style>
    