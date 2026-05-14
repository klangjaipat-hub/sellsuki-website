<template>
    <div id="blog" class="font-df">
        
        <div class="container ps-3 pe-3 ps-md-0 pe-md-0">
            <ol class="mt-3 font-md">
                <ul class="breadcrumb mb-3 pt-0 pt-sm-3" style="color:#50151C;">
                    <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="breadcrumb-text color-1F2937">{{ $t("Menu.Home") }}</span></nuxt-link> <img class="mb-1" src="../../assets/icon/ic_round-navigate-next.svg"/>  
                    </li>
                    <li>
                        <div class="text-s-24 text-w-700"><span class="breadcrumb-text">{{ $t("Menu.Blog") }}</span></div>    
                    </li>
                </ul>
            </ol>
            <div class="row mb-4">
                <div class="col-12">
                    <span class="text-s-44 text-w-700">News & Activity</span>
                </div>
            </div>
            <div class="row mt-2 d-none d-md-flex">
                <div class="col-12">
                    <div style="display: flex;justify-content: space-between;">
                    <main class="grid-item main font-med">
                        <ul class="items list__wrapper">
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '1',getBycateFilter(8)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '1'}" class="btn-df"><span class="font-df text-s-24 text-w-700">Market Place</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="2">
                                <div @click="number = '2',getBycateFilter(9)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '2'}" class="btn-df"><span class="font-df text-s-24 text-w-700">E-Commerce</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '3',getBycateFilter(10)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '3'}" class="btn-df"><span class="font-df text-s-24 text-w-700">Social Media</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '4',getBycateFilter(11)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '4'}" class="btn-df"><span class="font-df text-s-24 text-w-700">Digital Transformation</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '5',getBycateFilter(12)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '5'}" class="btn-df"><span class="font-df text-s-24 text-w-700">Martech</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '6',getBycateFilter(13)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '6'}" class="btn-df"><span class="font-df text-s-24 text-w-700">Sales & Advertising</span></div>
                            </li>
                            <li class="item item1 list__item pr-2" id="1">
                                <div @click="number = '8',getBycateFilter(14)" :class="{'border-B3E6FF color-2DA3FD bg-EBF8FF':number == '8'}" class="btn-df"><span class="font-df text-s-24 text-w-700">DATA Research</span></div>
                            </li>
                        </ul>
                    </main>
                    <Form  @submit.prevent="searchTxt" class="bg-fade" id="form-search-xl" style="width: 155px;display: flex;justify-content:end;padding-left: 50px;margin-left: -50px;transition: width 2s;">
                    <input @click="showSearchXl()" @blur="cancelSearchXl()" v-model="search" class="form-transition mt-1 font-bd" type="text" :placeholder="$t('Blog.Search')">
                    </Form>
                    </div>
                </div>
            </div>
            <div class="row mt-2 d-flex d-md-none">
                <div class="col-12">
                    <div style="display: inline-flex;width: 100%;">
                    <img id="btn-select" @click="showSelect()" class="select-button" src="../../assets/icon/down.svg" alt="">
                    <select id="form-select" @click="isActive = !isActive" @blur="isActive = !isActive" @change="getBycateFilter(catNumber)" v-model="catNumber" class="form-select" :class="{ 'icon-select-down' : isActive == true,'icon-select-up' : isActive == false }" placeholder="interested about*">
                        <option class="color-09193A text-w-700" selected value="">interested about*</option>
                        <option class="color-09193A text-w-700" value="8">Market Place</option>
                        <option class="color-09193A text-w-700" value="9">E-Commerce</option>
                        <option class="color-09193A text-w-700" value="10">บริการ LINE Agency ครบวงจร</option>
                        <option class="color-09193A text-w-700" value="11">Digital Transformation</option>
                        <option class="color-09193A text-w-700" value="12">Martech</option>
                        <option class="color-09193A text-w-700" value="13">Sales & Advertising</option>
                        <option class="color-09193A text-w-700" value="14">DATA Research</option>
                    </select>
                    <input @keyup.enter="searchTxt" v-model="search" id="form-search" class="form-search" type="text" :placeholder="$t('Blog.Search')">
                    <img id="btn-search" @click="showSearch()" class="search-button" src="../../assets/icon/magnifying-glass.svg" alt="">
                    </div>
                </div>
            </div>

            <div class="row mt-4 pt-2">
                    <div v-for="(data, index) in responseDataByCate" :key="index" :class="{'col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-3': index <= sumBlog}">
                        <nuxt-link v-if="index <= sumBlog" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})" style="color:unset !important">
                            <div class="card" style="margin-bottom: 32px;">
                                <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText"/>
                                <div v-if="data.attributes.blog_tags.data.length != 0" class="position-text-blog">
                                    <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data" :key="indexTag">
                                        <span v-if="indexTag == 0" class="tag-blog-1">{{dataTag.attributes.name}}</span>
                                        <span v-if="indexTag == 1" class="tag-blog-2">{{dataTag.attributes.name}}</span>
                                        <span v-if="indexTag == 2" class="tag-blog-3">{{dataTag.attributes.name}}</span>
                                    </div>
                                </div>
                                <div class="card-body pt-2 il-n">
                                    <p class="mb-1 text-s-18 color-64748B" style="text-transform: uppercase;">{{dateTime(data.attributes.createdAt)}}</p>
                                    <p class="text-w-700 card-title text-w-700 font-bd text-limit-2">{{data.attributes.title}}</p>
                                    <p class="text-limit-3 text-s-20 color-64748B mb-0">{{data.attributes.description}}</p>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            <div class="row mt-2 mb-5">
                <div class="col-12 text-center mb-3">
                    <button v-if="this.sumBlog <= responseDataByCate.length"  @click="ViewMore(8)" class="btn-view">
                        <span>Load more</span>
                        <!-- <span v-else>View Less</span> -->
                    </button>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import Preloader from '@/components/Preloader'
    import moment from 'moment'
    
    export default {
        name: 'news-and-activity',
        layout:"layoutV2",
        components: {
            Preloader
        },
        head() {
            return this.$headUtil({
                lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
                title: "News & Activity",
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
                },{
                    "@type": "ListItem",
                    "position": 2,
                    "name": this.$t("Menu.Blog")
                }]
            }
        },
        async asyncData({ $axios, route, i18n }) {
                return { responseData: [] };
            },
        data () {
            return {
                isActive: true,
                show:false,
                windowTop:0,
                lang: this.$i18n.locale || 'th-TH',
                //lang: 'th-TH',
                number:1,
                sumBlog:11,
                responseData: [],
                responseDataByCate:[],
                catNumber:'',
                search: '',
            }
        },
        mounted () {
            //console.log(this.responseData.length);
            //window.addEventListener('scroll', this.onShow);
            document.getElementById("btn-select").style.zIndex = "-1";
            this.catNumber = 8;
            this.responseDataByCate = this.getBycate(8)
    
            let isDown = false;
            let startX;
            let scrollLeft;
            const slider = document.querySelector('.items');
    
            const end = () => {
                isDown = false;
            slider.classList.remove('active');
            }
    
            const start = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;	
            }
    
            const move = (e) => {
                if(!isDown) return;
    
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            const dist = (x - startX);
            slider.scrollLeft = scrollLeft - dist;
            }
    
            (() => {
                slider.addEventListener('mousedown', start);
                slider.addEventListener('touchstart', start);
    
                slider.addEventListener('mousemove', move);
                slider.addEventListener('touchmove', move);
    
                slider.addEventListener('mouseleave', end);
                slider.addEventListener('mouseup', end);
                slider.addEventListener('touchend', end);
            })();
    
            /* Easing Function */
            const easeInOutCubic = step => {
                return step < .5 ? 2 * step * step : -1 + (4 - 2 * step) * step;
            };
    
            /* Displacement calculation */
            const getDelta = (container, target) => {
            const { x: tLeft, width: tWidth } = target.getBoundingClientRect();
            const { x: cLeft ,width: cWidth } = container.getBoundingClientRect();
            const targetCenter = tLeft + 0 * tWidth - 30;
            const containerCenter = 0 * cWidth + cLeft;
                return targetCenter - containerCenter;  
            };
    
            /* Scroll method/animation */
            const DEFAULT_DURATION = 1000
            const scrollTo = (container, target, duration = DEFAULT_DURATION) => {  
            let currFrame = 0;
            const endFrame = (duration/1000) * 60;
    
            const delta = getDelta(container, target);
            const {scrollLeft: scrollInitial} = container;
    
            const animate = () =>{
                currFrame += 1;
                const step = delta * easeInOutCubic(currFrame/endFrame) + scrollInitial;
                container.scrollLeft = step;
                if(currFrame < endFrame) window.requestAnimationFrame(animate);
            }
            window.requestAnimationFrame(animate);
            };
    
            /* Initialization + selectors */
    
            /* Tab click event listener */
            const SCROLL_CONTAINER_SELECTOR = '.list__wrapper'
            const container = document.querySelector(SCROLL_CONTAINER_SELECTOR)
    
            const handleClickTab = (event) => {
            const TRANSITION_MS = 500
            const { target } = event 
                scrollTo(container, target, TRANSITION_MS)
            }
    
            const SCROLL_TAB_SELECTOR = '.list__item'
            const [...listItems] = document.querySelectorAll(SCROLL_TAB_SELECTOR)
            listItems.forEach(listItem => {
                listItem.addEventListener('click', handleClickTab)
            })
        },
        methods: {
            getBycate(cateId) {
                return this.responseData.filter(s => s.attributes.blog_category.data.id === cateId && s.attributes.publishedAt != null)
            },
            getBycateFilter(cateId){
                this.responseDataByCate = this.responseData.filter(s => s.attributes.blog_category.data.id === parseInt(cateId) && s.attributes.publishedAt != null)
            },
            ViewMore(num) {
                if(this.sumBlog > this.responseDataByCate.length){
                    this.sumBlog = 11
                }else{
                    this.sumBlog = this.sumBlog + num
                }
                //this.responseData.length
            },
            searchTxt(){
                if(this.search != ''){
                    this.$router.push({ path: '/blogs/search', query: { search: this.search } })
                }
            },
            scrollToTop() {
                window.scrollTo(0,0);
            },
            dateTime(value) {
                return moment(value).format('DD MMM YYYY');
            },
            handleScroll () {
                this.show = true
            },
            showSearchXl(){
                document.getElementById("form-search-xl").style.width = "100%";
            },
            cancelSearchXl(){
                document.getElementById("form-search-xl").style.width = "155px";
            },
            showSearch(){
                document.getElementById("form-search").style.width = "100%";
                document.getElementById("form-select").style.width = "0%";
    
                document.getElementById("btn-search").style.zIndex = "-1";
                setTimeout(() => document.getElementById("btn-select").style.zIndex = "9999", 1200);
            },
            showSelect(){
                document.getElementById("form-select").style.width = "100%";
                document.getElementById("form-search").style.width = "0%";
    
                setTimeout(() => document.getElementById("btn-search").style.zIndex = "9999", 2000);
                document.getElementById("btn-select").style.zIndex = "-1";
            },
            fullForm(){
                document.getElementById("form-select").style.width = "100%";
            }
        }
    }
    </script>
    
    <style scoped>
    .bg-fade{
        z-index: 999;
        background: rgb(255,255,255);
        background: linear-gradient(270deg, rgba(255,255,255,1) 91%, rgba(0,0,0,0) 100%);
    }
    ul {
         padding: 0;
    }
     main {
         max-width: 85%;
         /* margin: 0 auto; */
    }
     .wrapper {
         position: relative;
    }
     .wrapper:before, .wrapper:after {
         position: absolute;
         top: 0;
         z-index: 1;
         content: "";
         display: block;
         width: 20px;
         height: 100%;
    }
     .wrapper:before {
         left: 0;
         background: linear-gradient(90deg, #222, transparent);
    }
     .wrapper:after {
         right: 0;
         background: linear-gradient(-90deg, #222, transparent);
    }
     .items {
         position: relative;
         width: 100%;
         overflow: scroll;
         white-space: nowrap;
         font-size: 0;
         cursor: pointer;
    }
     .items.active {
         cursor: grab;
    }
     .item {
         display: inline-block;
         margin-right: 3px;
    }
    /* .item:last-child {
         margin-right: 20px;
    } */
     @media screen and (min-width: 800px) {
         .item {
             width: auto;
        }
    }
     @media screen and (min-width: 1200px) {
         .wrapper {
             margin-left: -20px;
        }
         .item {
             width: auto;
        }
    }
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    .items::-webkit-scrollbar {
        display: none;
    }
    
    /* Hide scrollbar for IE, Edge and Firefox */
    .items {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    
    .list__wrapper{
        padding: 0 !important;
        margin: 0 !important;
    }
    .icon-select-down{
        background-image: url(../../assets/icon/down.svg) !important;
    }
    .icon-select-up{
        background-image: url(../../assets/icon/up.svg) !important;
    }
    
    input {
        outline: none;
    }
    .form-search {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
        background: #FFF url(../../assets/icon/magnifying-glass.svg) no-repeat 12px center;
        font-size: 24px !important;
        border-radius: 48px;
        border: 1px solid #E5E7EB;
        color: #1F2937;
        padding: 8px 10px 8px 40px;
        width: 0px;
        margin-right: -53px;
        transition: width 2s;
    }
    
    .form-transition {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
        background: #FFF url(../../assets/icon/magnifying-glass.svg) no-repeat 12px center;
        font-size: 24px !important;
        border-radius: 48px;
        border: 1px solid #E5E7EB;
        color: #1F2937;
        padding: 0px 10px 0px 40px;
        height: 45px;
        width: 100%;
        margin-left: -20px;
        transition: width 2s;
    }
    
    .bg-FFFFFF{
        background-color: #FFFFFF !important;
    }
    
    .form-select{
        margin-right: 16px;
        border-radius: 48px;
        border: 1px solid #B3E6FF;
        background-color: #EBF8FF;
        color: #2DA3FD;
        font-size: 24px !important;
        font-weight: 700;
        padding: 8px 24px 8px 24px;
        transition: width 2s;
        width: 100%;
    }
    .select-button{
        position: absolute;
        padding: 21px 16px;
        border: 1px solid #B3E6FF;
        border-radius: 48px;
        position: absolute;
        z-index: 9999;
        background-color: #EBF8FF;
    }
    .search-button{
        position: relative;
        right: 0;
        padding: 12px 16px;
        border: 1px solid #E5E7EB;
        border-radius: 48px;
        background-color: #FFFFFF;
    }
    ::placeholder{
        color: #6B7280 !important;
    }
    
    .text-limit-blog {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    
    .btn-view span{
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
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      padding: 0.375rem 0.75rem;
      cursor: pointer;
      padding: 8px 42px;
    }
    .mt-sp{
        margin-top: 300px;
    }
    .card{
        background: #FFFFFF !important;
        box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
        border-radius: 8px !important;
        border:0 !important;
    }
    .card-body{
        min-height: 200px;
    }
    .card-banner{
        box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
    }
    .position-text-blog{
        margin-top: -36px;
        margin-bottom: 10px;
        text-align: right;
    }
    .dot-carousel-active{
        width: 16px;
        height: 16px;
        background-color: #F35B1F;
        border-radius: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 5px;
    }
    .dot-carousel{
        width: 16px;
        height: 16px;
        background-color: #FBE2D8;
        border-radius: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 5px;
    }
    .arrow{
        display: inline-flex;
        padding: 10px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
    
        border-radius: 37px;
        border: 1px solid var(--sskv-100-ssktemp-light, #EEE);
        background: rgba(255, 255, 255, 0.30);
    }
    
    .hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active{
        opacity: 0.8 !important;
    }
    
    .lh-1{
        line-height: 1 !important
    }
    
    .display-none{
        display: none;
    }
    
    .btn-green{
        height: 30px;
        font-size: 10px;
        background: #2AAF4A;
        border-radius: 20px;
        color: #FFFFFF !important;
        box-sizing: border-box !important;
        border: none;
        border-radius: 20px !important;
    }
    
    .btn-blue{
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
    
    .carousel-indicators [data-bs-target]{
        background-color: #F76E22 !important;
    }
    
    .carousel-indicators {
        opacity: .8;
    }
    
    .mt-carousel{
        margin-top: 30px !important;
        bottom: auto !important;
    }
    
    .img-fix-size{
        width: 100%;
        height: 203px;
        object-fit: cover;
    }
    
    .img-fix-size-2{
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
    
    .bg-radius{
        background: #F2F3F5;
        padding: 32px;
        border-radius: 50%;
    }
    
    .card-img, .card-img-top{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    
    /* Extra small devices (phones, 525px and down) */
    @media only screen and (max-width: 525px) {
        .btn-crad{ 
            top: 0;
            position: relative;
            margin-left: 0;
        }
        .crad-height{
            height: 100%;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 100%;
            height:395px;
        }
        .card-img-banner{
            width: 100%;
            max-width: 100% !important;
            height: 260.04px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 8px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 0px !important;
        }
        .icon-select-down{
            background-position-x: 95%;
        }
        .card-title{
            font-size: 24px;
            line-height: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1; /* number of lines to show */
            -webkit-box-orient: vertical;
        }
        .card-body{
            min-height: 100%;
            padding: 12px 14px;
        }
    }
    
    @media only screen and (min-width: 525px) {
        .btn-crad{ 
            top: 0;
            position: relative;
            margin-left: 0;
        }
        .crad-height{
            height: 100%;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 100%;
            height:100%;
        }
        .card-img-banner{
            width: 100%;
            max-width: 100% !important;
            height: 260.04px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 8px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 0px !important;
        }
        .icon-select-down{
            background-position-x: 95%;
        }
    }
    
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        .btn-crad{ 
            top: 0;
            position: relative;
            margin-left: 0;
        }
        .crad-height{
            height: 100%;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 100%;
            height:100%;
        }
        .card-img-banner{
            width: 100%;
            max-width: 100% !important;
            height: 260.04px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 8px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 0px !important;
        }
        .card-title{
            font-size: 28px;
        }
    }
    
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        .btn-crad{ 
            top: 0;
            position: relative;
            margin-left: 0;
        }
        .crad-height{
            height: 100%;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 99.8%;
            height:249.27px;
        }
        .card-img-banner{
            width: 100%;
            max-width: 100% !important;
            height: 249.27px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .text-limit-blog {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 8px !important;
        }
        .card-title{
            font-size: 28px;
        }
    } 
    
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        .btn-crad{ 
            top: 480px;
            position: absolute;
            margin-left: 110px;
        }
        .crad-height{
            height: 490px;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 99.8%;
            height:249.27px;
        }
        .card-img-banner{
            width: 100%;
            max-width: 100% !important;
            height: 249.27px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .text-limit-blog {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 8px !important;
        }
        .card-title{
            font-size: 28px;
        }
    } 
    
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        .btn-crad{ 
            top: 485px;
            position: absolute;
            margin-left: 140px;
        }
        .crad-height{
            height: 490px;
        }
        .hr-mid{
            border: 1px solid #E5E5E5;
            width: 100%;
            /* text-align: center; */
            margin: 20px 5px 20px 5px;
        }
        .card-banner{
            width: 99.8%;
            height:284.038px;
        }
        .card-img-banner{
            width: 395px;
            max-width: 395px !important;
            height: 284.038px;
            -o-object-fit: cover;
            object-fit: cover;
        }
        .card-banner .card-img-banner{
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            border-top-left-radius: 8px !important;
            border-bottom-left-radius: 8px !important;
        }
        .card-title{
            font-size: 28px;
        }
    }
    
    </style>
    