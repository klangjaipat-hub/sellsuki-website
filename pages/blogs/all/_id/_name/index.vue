<template>
    <div id="blogAll" class="font-df">
        <div class="container">
            <ol class="mt-4 font-md">
                <ul class="breadcrumb p-xl-0 p-3 mb-0 pt-0 pt-sm-3" style="color:#50151C;">
                    <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="breadcrumb-text">{{ $t("Menu.Home") }}</span></nuxt-link> <img class="mb-1" src="../../../../../assets/icon/ic_round-navigate-next.svg"/>  
                    </li>
                    <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="breadcrumb-text">{{ $t("Menu.Blog") }}</span></nuxt-link> <img class="mb-1" src="../../../../../assets/icon/ic_round-navigate-next.svg"/>
                    </li>
                    <li>
                        <div class="text-s-24 text-w-700"><span class="breadcrumb-text">{{ responseData[0].attributes.blog_category.data.attributes.name }}</span></div>    
                    </li>
                </ul>
            </ol>
            <div class="row">
                <div class="col-6">
                    <span class="text-s-56 text-w-700">{{ responseData[0].attributes.blog_category.data.attributes.name }}</span>
                </div>
                <div class="col-6 text-end">
                    <a class="btn-df color-F35B1F border-F35B1F mt-2"><span class="font-md color-F35B1F text-s-24 text-w-500 ps-2 pe-2">ดูทั้งหมด</span></a>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-12">
                    <a class="btn-df color-00B3F4 border-00B3F4 me-3"><span class="font-md color-00B3F4 text-s-24 text-w-500 ps-2 pe-2">ดูทั้งหมด</span></a>
                    <a class="btn-df me-3"><span class="font-md text-s-24 text-w-500 ps-2 pe-2">Stocks</span></a>
                    <a class="btn-df me-3"><span class="font-md text-s-24 text-w-500 ps-2 pe-2">AI</span></a>
                </div>
            </div>
            <div class="row mt-3">
                <div v-for="(data, index) in getBycate()" :key="index" :class="{'col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-3': index <= sumBlog}">
                    <nuxt-link v-if="index <= sumBlog" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})" style="color:unset !important">
                        <div class="card mt-4">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText"/>
                            <div v-if="data.attributes.blog_tags.data.length != 0" class="position-text-blog">
                                <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data" :key="indexTag">
                                    <span v-if="indexTag == 0" class="tag-blog-1">{{dataTag.attributes.name}}</span>
                                    <span v-if="indexTag == 1" class="tag-blog-2">{{dataTag.attributes.name}}</span>
                                    <span v-if="indexTag == 2" class="tag-blog-3">{{dataTag.attributes.name}}</span>
                                </div>
                            </div>
                            <div v-else class="position-text-blog">
                                <div class="d-inline">
                                    <span class="tag-blog-1"></span>
                                </div>
                            </div>
                            <div class="card-body pt-2 il-n">
                                <p class="mb-1 text-s-18 color-64748B">{{dateTime(data.attributes.createdAt)}}, by Admin</p>
                                <p class="text-w-700 text-s-24 text-w-700 font-bd text-limit-2">{{data.attributes.title}}</p>
                                <p class="text-limit-3 text-s-20 color-64748B mb-0">{{data.attributes.description}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-12 text-center">
                <button @click="ViewMore(8)" class="btn-view">
                    <span v-if="this.sumBlog <= this.responseData.length">View More</span>
                    <span v-else>View Less</span>
                </button>
                </div>
            </div>
            <div class="mt-sp">

            </div>
        </div>
    </div>
</template>

<script>
import Preloader from '@/components/Preloader'
import moment from 'moment'

export default {
    name: 'BlogsAll',
    layout:"layoutV2",
    components: {
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
            title: this.$route.params.name,
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    data() {
      return {
        responseData:[],
        lang: this.$i18n.locale || 'th-TH',
        //lang: 'th-TH',
        paramsId: this.$route.params.id,
        sumBlog:11,
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
                "name": this.$t("Menu.Blog"),
                "item": "https://www.sellsuki.co.th/blog"
            },{
                "@type": "ListItem",
                "position": 3,
                "name": this.$route.params.name
            }]
        }
    },
    async asyncData({ $axios, route, i18n, redirect }) {
        if(route.path == '/blogs/all/' + route.params.id + '/' + route.params.name + '/'){
            redirect(301, '/blogs/all/' + route.params.id + '/' + route.params.name)
        } else if (route.path == '/en/blogs/all' + route.params.id + '/' + route.params.name + '/'){
            redirect(301, '/en/blogs/all/' + route.params.id + '/' + route.params.name)
        }
        if(route.path == '/Blogs/All/' + route.params.id + '/' + route.params.name){
            redirect(301, '/blogs/all/' + route.params.id + '/' + route.params.name)
        } else if (route.path == '/en/Blogs/All/' + route.params.id + '/' + route.params.name){
            redirect(301, '/en/blogs/all/' + route.params.id + '/' + route.params.name)
        }
        return { responseData: [] };
    },
    //this.$route.params.id
    mounted () {
        
    },
    methods:{
        getBycate() {
            return this.responseData.filter(s => s.attributes.publishedAt != null)
        },
        ViewMore(num) {
            if(this.sumBlog > this.responseData.length){
                this.sumBlog = 11
            }else{
                this.sumBlog = this.sumBlog + num
            }
            //this.responseData.length
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
.btn-view span{
    background: linear-gradient(85deg, #FF6603 4.64%, #FF0101 97.73%);
    background-clip: text;
    -webkit-background-clip: text;
  background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
.btn-view {
  border: 1.5px solid #FF6603;
  background: transparent;
  border-radius: 8px !important;
  display: inline-block;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  padding: 0.375rem 0.75rem;
  cursor: pointer;
  padding: 8px 42px;
}
.mt-sp{
    margin-top: 100px;
}
.card{
    background: #FFFFFF !important;
    box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.03), 0px 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-radius: 8px !important;
    border:0 !important;
}
.card-img, .card-img-top{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.card-body{
    min-height: 200px;
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

p {
    color: #373737;
    font-size: 16px;
}

.img-fix-size{
    width: 100%;
    height: 203px;
    object-fit: cover;
}

.hide-col{
    display: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .btn-crad{ 
        top: 0;
        position: relative;
        margin-left: 0;
    }
    .crad-height{
        height: 100%;
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
}
</style>
