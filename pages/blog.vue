<template>
    <div id="blog">

        <div class="container font-df ps-3 pe-3 ps-md-0 pe-md-0">
            <ol class="mt-3 font-md">
                <ul class="breadcrumb mb-3 pt-0 pt-sm-3" style="color:#50151C;">
                    <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/')" data-tag="blog-breadcrumb-home-link"><span
                                class="breadcrumb-text color-1F2937">{{ $t("Menu.Home") }}</span></nuxt-link> <img
                            class="mb-1" src="../assets/icon/ic_round-navigate-next.svg" />
                    </li>
                    <li>
                        <div class="text-s-24 text-w-700"><span class="breadcrumb-text">{{ $t("Menu.Blog") }}</span>
                        </div>
                    </li>
                </ul>
            </ol>
            <div class="row mt-4 mb-3 d-none d-xl-block">
                <div class="col-12">
                    <span class="text-s-52 text-w-700">{{ $t("Menu.Blog") }}</span>
                </div>
            </div>
            <div class="row mt-4 mb-3 d-block d-xl-none">
                <div class="col-12">
                    <span class="text-s-36 text-w-500 font-md">{{ $t("Menu.Blog") }}</span>
                </div>
            </div>
            <ssr-carousel v-if="blogHighlight && blogHighlight.length" :slides-per-page='1' show-dots paginate-by-slide loop
                :autoplay-delay='5'>
                <div v-for="(data, index) in blogHighlight" :key="index" class="slide">
                    <div class="card mb-3 card-banner">
                        <div class="row no-gutters">
                            <div class="col-md-5 col-xl-4">
                                <nuxt-link @click="scrollToTop"
                                    :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                                    style="color:unset !important"
                                    :data-tag="'blog-highlight-card-' + data.attributes.url">
                                    <img v-if="data.attributes.illustration != null" class="img-fluid card-img-banner"
                                        :src="data.attributes.illustration.data.attributes.url"
                                        :alt="data.attributes.illustration.data.attributes.alternativeText">
                                    <div v-if="data.attributes.blog_tags.data.length != 0"
                                        class="position-text-blog d-block d-md-none">
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
                                </nuxt-link>
                            </div>
                            <div class="col-md-7 col-xl-8 ps-0 ps-xl-4 ps-xxl-3 m-auto">
                                <div class="card-body">
                                    <p class="mb-0 text-s-18 color-9CA3AF font-df" style="text-transform: uppercase;">
                                        {{ dateTime(data.attributes.createdAt) }}</p>
                                    <nuxt-link @click="scrollToTop"
                                        :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                                        style="color:unset !important"
                                        :data-tag="'blog-highlight-card-' + data.attributes.url">
                                        <h2 class="color-1F2937 card-title text-w-500">{{ data.attributes.title }}</h2>
                                    </nuxt-link>
                                    <h5 class="color-6B7280 card-text text-s-20 text-limit-blog">
                                        {{ data.attributes.description }}</h5>
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
                </div>
                <template #dot="{ disabled }">
                    <div v-if="disabled == false" class="dot-carousel"></div>
                    <div v-if="disabled == true" class="dot-carousel-active"></div>
                </template>
                <template #back-arrow>
                    <div class="arrow"><img src="../assets/icon/back-arrow.svg" /></div>
                </template>

                <template #next-arrow>
                    <div class="arrow"><img src="../assets/icon/next-arrow.svg" /></div>
                </template>
            </ssr-carousel>
            <div class="row mt-2 d-none d-md-flex">
                <div class="col-12">
                    <div style="display: flex;justify-content: space-between;">
                        <main class="grid-item main font-med">
                            <img v-if="left" @click="scrollToStart()" width="24" class="cursor-pointer"
                                src="../assets/icon/chevron-l.svg" alt="chevron-l.svg"
                                style="position: absolute;z-index: 999;margin-top: 16px;margin-left: -8px;">
                            <ul class="items list__wrapper">
                                <li v-for="(cat) in blogCategories" :key="cat.id" class="item item1 list__item pr-2" :id="cat.id">
                                    <div @click="number = String(cat.attributes.order), catNumber = cat.id, searchBlogs(cat.id)"
                                        :class="{ 'border-B3E6FF color-2DA3FD bg-EBF8FF': number == String(cat.attributes.order) }" class="btn-df"
                                        :data-tag="'blog-category-filter-' + (cat.attributes && cat.attributes.url ? cat.attributes.url : cat.id)">
                                        <span class="font-df text-s-24 text-w-700">{{ cat.attributes.name }}</span>
                                    </div>
                                </li>
                            </ul>
                            <img v-if="right" @click="scrollToEnd()" width="24" class="cursor-pointer"
                                src="../assets/icon/chevron-r.svg" alt="chevron-r.svg"
                                style="position: relative;z-index: 999;margin-top: -40px;margin-right: -20px;float: inline-end;">
                        </main>
                        <Form @submit.prevent="searchTxt" class="bg-fade" id="form-search-xl"
                            style="width: 155px;display: flex;justify-content:end;padding-left: 50px;margin-left: -50px;transition: width 2s;">
                            <input @click="showSearchXl()" @blur="cancelSearchXl()" v-model="search"
                                class="form-transition font-bd" type="text" :placeholder="$t('Blog.Search')">
                        </Form>
                    </div>
                </div>
            </div>
            <div class="row mt-2 d-flex d-md-none">
                <div class="col-12 font-df">
                    <div style="display: inline-flex;width: 100%;">
                        <img id="btn-select" @click="showSelect()" class="select-button" src="../assets/icon/down.svg"
                            alt="">
                        <select id="form-select" @click="isActive = !isActive" @blur="isActive = !isActive"
                            @change="getBycateFilter(catNumber)" v-model="catNumber" class="form-select"
                            :class="{ 'icon-select-down': isActive == true, 'icon-select-up': isActive == false }"
                            placeholder="interested about*">
                            <option class="color-09193A text-w-700" selected value="">{{ $t("form.interestedabout") }}*
                            </option>
                            <option v-for="cat in blogCategories" :key="cat.id" class="color-09193A text-w-700" :value="cat.id">
                                {{ (cat.attributes && cat.attributes.name) || cat.name || cat.title }}
                            </option>
                        </select>
                        <input @keyup.enter="searchTxt" v-model="search" id="form-search" class="form-search"
                            type="text" :placeholder="$t('Blog.Search')">
                        <img id="btn-search" @click="showSearch()" class="search-button"
                            src="../assets/icon/magnifying-glass.svg" alt="" data-tag="blog-search-button-mobile">
                    </div>
                </div>
            </div>
            <div v-if="loading">กำลังโหลด...</div>
            <div v-else class="row mt-4 pt-2">
                <div v-for="(data) in displayedBlogs" :key="data.id"
                    class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-lg-0 mt-3">
                    <nuxt-link @click="scrollToTop"
                        :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url })"
                        style="color: unset !important" :data-tag="'blog-list-card-' + data.attributes.url">
                        <div class="card" style="margin-bottom: 32px;">
                            <img v-if="data.attributes.illustration && data.attributes.illustration.data && data.attributes.illustration.data.attributes"
                                class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.alternativeText" />
                            <div v-if="data.attributes.blog_tags && data.attributes.blog_tags.data && data.attributes.blog_tags.data.length"
                                class="position-text-blog">
                                <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data"
                                    :key="indexTag">
                                    <span v-if="indexTag == 0" class="tag-blog-1"
                                        :class="{ 'ellipsis-text': data.attributes.blog_tags.data.length >= 3 }">
                                        {{ dataTag.attributes.name }}
                                    </span>
                                    <span v-if="indexTag == 1" class="tag-blog-2"
                                        :class="{ 'ellipsis-text': data.attributes.blog_tags.data.length >= 3 }">
                                        {{ dataTag.attributes.name }}
                                    </span>
                                    <span v-if="indexTag == 2" class="tag-blog-3"
                                        :class="{ 'ellipsis-text': data.attributes.blog_tags.data.length >= 3 }">
                                        {{ dataTag.attributes.name }}
                                    </span>
                                </div>
                            </div>
                            <div class="card-body pt-2 il-n">
                                <p class="mb-1 text-s-18 color-9CA3AF" style="text-transform: uppercase;">
                                    {{ dateTime(data.attributes.createdAt) }}
                                </p>
                                <p class="card-title text-w-500 color-1F2937 text-limit-2">
                                    {{ data.attributes.title }}
                                </p>
                                <p class="text-limit-3 text-s-20 color-64748B mb-0 des">
                                    {{ data.attributes.description }}
                                </p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <div class="row mt-2 mb-5">
                <div class="col-12 text-center mb-3">
                    <button v-if="this.sumBlog < blogs.length" @click="ViewMore(8)" class="btn-view"
                        data-tag="blog-load-more-button">
                        <span>{{ $t("Blog.Load_more") }}</span>
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
    name: 'sales-and-advertising',
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
    async asyncData({ store }) {
        await Promise.allSettled([
            store.dispatch('blogs/fetchBlogs', { name: 18 }),
            store.dispatch('blog-highlight/fetchBlogHighlight'),
            store.dispatch('blog-categoy/fetchBlogCategoy')
        ])
    },

    computed: {
        // ข้อมูลจาก blogs store
        blogs() {
            return this.$store.state.blogs.blogs
        },
        loading() {
            return this.$store.state.blogs.loading
        },
        blogsCount() {
            return this.$store.getters['blogs/blogsCount']
        },
        blogHighlight() {
            return this.$store.state['blog-highlight'].blogHighlight
        },
        highlightLoading() {
            return this.$store.state['blog-highlight'].loading
        },
        displayedBlogs() {
            return this.blogs
                .filter(blog => blog.attributes)
                .slice(0, this.sumBlog + 1)
        },
        blogCategories() {
            return this.$store.getters['blog-categoy/getBlogCategoy'] || []
        }
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
            catNumber: '',
            search: '',
            left: false,
            right: true,
            hasError: false
        }
    },
    mounted() {
        if (this.hasError && !sessionStorage.getItem('retry')) {
            sessionStorage.setItem('retry', '1')
            window.location.reload()
        } else {
            sessionStorage.removeItem('retry')
        }
        //console.log(this.responseData.length);
        //window.addEventListener('scroll', this.onShow);
        document.getElementById("btn-select").style.zIndex = "-1";
        this.catNumber = 18;
        this.responseDataByCate = this.getBycate(18)

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

        const scroll = (e) => {
            if (slider.scrollLeft > 0) {
                this.left = true
            } else {
                this.left = false
            }
        }

        const move = (e) => {
            if (!isDown) return;

            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            const dist = (x - startX);
            slider.scrollLeft = scrollLeft - dist;
        }

        (() => {
            slider.addEventListener('mousedown', start);
            slider.addEventListener('touchstart', start);
            slider.addEventListener('scroll', scroll);

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
            const { x: cLeft, width: cWidth } = container.getBoundingClientRect();
            const targetCenter = tLeft + 0 * tWidth - 30;
            const containerCenter = 0 * cWidth + cLeft;
            return targetCenter - containerCenter;
        };

        /* Scroll method/animation */
        const DEFAULT_DURATION = 1000

        const scrollTo = (container, target, duration = DEFAULT_DURATION) => {
            let currFrame = 0;
            const endFrame = (duration / 1000) * 60;

            const delta = getDelta(container, target);
            const { scrollLeft: scrollInitial } = container;

            const animate = () => {
                currFrame += 1;
                const step = delta * easeInOutCubic(currFrame / endFrame) + scrollInitial;
                container.scrollLeft = step;
                if (currFrame < endFrame) window.requestAnimationFrame(animate);
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
        // Method สำหรับเรียกใช้ fetchBlogs
        async searchBlogs(categoryId) {
            try {
                await this.$store.dispatch('blogs/fetchBlogs', {
                    name: categoryId
                })
            } catch (error) {
                console.error('Error loading blogs:', error)
            }
        },

        // Method สำหรับเรียกใช้ fetchBlogHighlight
        async loadHighlightBlogs() {
            try {
                await this.$store.dispatch('blog-highlight/fetchBlogHighlight')
            } catch (error) {
                console.error('Error loading highlight blogs:', error)
            }
        },
        scrollToEnd() {
            const slider = document.querySelector('.items');
            slider.scrollTo({
                left: 1000,
                behavior: 'smooth',
            })
        },
        scrollToStart() {
            const slider = document.querySelector('.items');
            slider.scrollTo({
                left: 0,
                behavior: 'smooth',
            })
        },
        getBycate(cateId) {
            console.log(cateId)
            this.catNumber = cateId
            const cat = this.blogCategories && this.blogCategories.find(c => String(c.id) === String(cateId))
            if (cat && cat.attributes && cat.attributes.order !== undefined) {
                this.number = String(cat.attributes.order)
            }
            this.searchBlogs(cateId)
        },
        getBycateFilter(cateId) {
            console.log(cateId)
            this.catNumber = cateId
            const cat = this.blogCategories && this.blogCategories.find(c => String(c.id) === String(cateId))
            if (cat && cat.attributes && cat.attributes.order !== undefined) {
                this.number = String(cat.attributes.order)
            }
            this.searchBlogs(cateId)
        },
        ViewMore(num) {
            if (this.sumBlog > this.blogs.length) {
                this.sumBlog = 11
            } else {
                this.sumBlog = this.sumBlog + num
            }
            //this.responseData.length
        },
        searchTxt() {
            if (this.search != '') {
                this.$router.push({ path: '/blogs/search', query: { search: this.search } })
            }
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        handleScroll() {
            this.show = true
        },
        showSearchXl() {
            document.getElementById("form-search-xl").style.width = "100%";
        },
        cancelSearchXl() {
            document.getElementById("form-search-xl").style.width = "155px";
        },
        showSearch() {
            document.getElementById("form-search").style.width = "100%";
            document.getElementById("form-select").style.width = "0%";

            document.getElementById("btn-search").style.zIndex = "-1";
            setTimeout(() => document.getElementById("btn-select").style.zIndex = "9999", 1200);
        },
        showSelect() {
            document.getElementById("form-select").style.width = "100%";
            document.getElementById("form-search").style.width = "0%";

            setTimeout(() => document.getElementById("btn-search").style.zIndex = "9999", 2000);
            document.getElementById("btn-select").style.zIndex = "-1";
        },
        fullForm() {
            document.getElementById("form-select").style.width = "100%";
        }
    }
}
</script>

<style scoped>
.bg-fade {
    z-index: 999;
    background: rgb(255, 255, 255);
    background: linear-gradient(270deg, rgba(255, 255, 255, 1) 91%, rgba(0, 0, 0, 0) 100%);
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

.wrapper:before,
.wrapper:after {
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
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.list__wrapper {
    padding: 0 !important;
    margin: 0 !important;
}

.icon-select-down {
    background-image: url(../assets/icon/down.svg) !important;
}

.icon-select-up {
    background-image: url(../assets/icon/up.svg) !important;
}

input {
    outline: none;
}

.form-search {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    background: #FFF url(../assets/icon/magnifying-glass.svg) no-repeat 12px center;
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
    margin-top: 0px;
    margin-bottom: auto;
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    background: #FFF url(../assets/icon/magnifying-glass.svg) no-repeat 12px center;
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

.bg-FFFFFF {
    background-color: #FFFFFF !important;
}

.form-select {
    margin-right: 16px;
    border-radius: 48px;
    border: 1px solid #B3E6FF;
    background-color: #EBF8FF;
    color: #2DA3FD;
    font-size: 24px !important;
    font-weight: 700 !important;
    padding: 8px 24px 8px 24px;
    transition: width 2s;
    width: 100%;
}

.select-button {
    position: absolute;
    padding: 21px 16px;
    border: 1px solid #B3E6FF;
    border-radius: 48px;
    position: absolute;
    z-index: 9999;
    background-color: #EBF8FF;
}

.search-button {
    position: relative;
    right: 0;
    padding: 12px 16px;
    border: 1px solid #E5E7EB;
    border-radius: 48px;
    background-color: #FFFFFF;
}

::placeholder {
    color: #9CA3AF !important;
}

.text-limit-blog {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* number of lines to show */
    -webkit-box-orient: vertical;
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
    margin-top: 300px;
}

.card {
    background: #FFFFFF !important;
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.07),
        0px 1px 2px 0px rgba(17, 24, 39, 0.07),
        0px 3px 3px 0px rgba(17, 24, 39, 0.05),
        0px 7px 4px 0px rgba(17, 24, 39, 0.03),
        0px 12px 5px 0px rgba(17, 24, 39, 0.01),
        0px 19px 5px 0px rgba(17, 24, 39, 0);
    border-radius: 8px !important;
}

.card:hover {
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09),
        0px 1px 2px 0px rgba(17, 24, 39, 0.09),
        0px 3px 3px 0px rgba(17, 24, 39, 0.08),
        0px 7px 4px 0px rgba(17, 24, 39, 0.04),
        0px 12px 5px 0px rgba(17, 24, 39, 0.0),
        0px 19px 5px 0px rgba(17, 24, 39, 0);
}

.card-body {
    min-height: 200px;
}

.card-banner {
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09),
        0px 1px 2px 0px rgba(17, 24, 39, 0.07),
        0px 3px 3px 0px rgba(17, 24, 39, 0.05),
        0px 7px 4px 0px rgba(17, 24, 39, 0.03),
        0px 12px 5px 0px rgba(17, 24, 39, 0.01),
        0px 19px 5px 0px rgba(17, 24, 39, 0);
    border-radius: 8px !important;
    border: 1px solid rgba(249, 250, 251, 1) !important;
    margin-top: 2px;
}

.position-text-blog {
    margin-top: -36px;
    margin-bottom: 10px;
    text-align: right;
}

.dot-carousel-active {
    width: 32px;
    height: 8px;
    background-color: #F97316;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.dot-carousel {
    width: 24px;
    height: 8px;
    background-color: #FFEDD5;
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

.card-img,
.card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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

    .card-banner {
        width: 100%;
        height: 395px;
    }

    .card-img-banner {
        width: 100%;
        max-width: 100% !important;
        height: 260.04px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-banner .card-img-banner {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }

    .icon-select-down {
        background-position-x: 95%;
    }

    .card-title {
        font-size: 24px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    .card-body {
        min-height: 100%;
        padding: 12px 14px;
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

    .card-banner {
        width: 100%;
        height: 100%;
    }

    .card-img-banner {
        width: 100%;
        max-width: 100% !important;
        height: 260.04px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-banner .card-img-banner {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }

    .icon-select-down {
        background-position-x: 95%;
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

    .card-banner {
        width: 100%;
        height: 100%;
    }

    .card-img-banner {
        width: 100%;
        max-width: 100% !important;
        height: 260.04px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-banner .card-img-banner {
        border-top-right-radius: 8px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 0px !important;
    }

    .card-title {
        font-size: 28px;
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

    .card-banner {
        width: 99.8%;
        height: 249.27px;
    }

    .card-img-banner {
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
        -webkit-line-clamp: 2;
        /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    .card-banner .card-img-banner {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
    }

    .card-title {
        font-size: 28px;
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

    .card-banner {
        width: 99.8%;
        height: 249.27px;
    }

    .card-img-banner {
        width: 100%;
    }

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

    .card-banner {
        width: 99.8%;
        height: 284.038px;
    }

    .card-img-banner {
        width: 395px;
        max-width: 395px !important;
        height: 284.038px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .card-banner .card-img-banner {
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        border-top-left-radius: 8px !important;
        border-bottom-left-radius: 8px !important;
    }

    .card-title {
        font-size: 28px;
    }
}
</style>
