<template>
  <div id="BlogsDetail">
    
    <div
      v-if="btnActive == true"
      style="
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(5px);
      "
    ></div>
    <div class="bg-main">
      <MenuV2 :blogname="responseData.attributes.title" />
      <div class="progress-bar-container d-block d-xl-none">
        <div class="progress-bar"></div>
      </div>
      <div class="d-none d-xl-block">
        <div
          id="highlight-text"
          class="highlight-text animate__animated animate__fadeIn"
          style="margin-top: 30px; display: none"
        >
          <div v-for="(data, index) in highlight" :key="data.id">
            <ul :id="'ul' + index" :class="{ 'first-ul': index == 0 }">
              <li @click="scrollToTarget(index)" :id="'li' + index" :data-tag="'blog-toc-desktop-' + index">
                <div class="text-s-24 font-df text-in-hl color-1F2937">
                  {{ data }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="card-position bg-03193C shadow-lg animate__animated animate__fadeIn font-df d-block d-xl-none"
      >
        <div class="container pt-4 pb-4">
          <div class="row ps-2 pe-2">
            <div class="col-12">
              <div class="collapse" id="collapseExample">
                <a
                  @click="btnActive = !btnActive"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img
                    class="close-table"
                    src="../../../../../assets/icon/close-back.svg"
                    alt="mdi_eye"
                  />
                </a>
                <div v-for="(data, index) in highlight" :key="data.id">
                  <p
                    @click="scrollToTarget(index), activeText(index)"
                    :id="'text' + index"
                    class="mb-0 p-1 color-FFFFFF text-s-24 opct-08"
                    style="cursor: pointer"
                    :data-tag="'blog-toc-mobile-' + index"
                  >
                    {{ data }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 text-center mt-2 mb-2">
              <a
                @click="btnActive = !btnActive"
                class="btn bg-004F7E btn-hl"
                :class="{ 'btn-hl-active': btnActive == true }"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                data-tag="blog-toc-toggle-mobile"
              >
                <span
                  class="font-w-400 text-s-20"
                  :class="{
                    'color-1F2937': btnActive == true,
                    'color-FFFFFF': btnActive == false,
                  }"
                  >Table of contents</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="font-df">
        <div
          class="bg"
          :style="
            'background: url(' +
            responseData.attributes.illustration.data.attributes.url +
            ')'
          "
        >
          <div>
            <div class="container img-hd color-F8FAFC">
              <div style="display: flex; height: 100%">
                <div
                  class="card-hd text-center"
                  style="margin: auto auto 30px auto"
                >
                  <span class="color-0F172A text-s-20 me-4"
                    ><img
                      class="me-2"
                      src="../../../../../assets/blog/mdi_eye.svg"
                      alt="mdi_eye"
                    />
                    : {{ responseData.attributes.view }}</span
                  >
                  <span class="color-0F172A text-s-20 me-4"
                    ><img
                      class="me-2 mb-1"
                      src="../../../../../assets/blog/ph_share-bold.svg"
                      alt="ph_share-bold"
                    />
                    :
                    {{
                      responseData.attributes.share == null
                        ? 0
                        : responseData.attributes.share
                    }}</span
                  >

                  <span
                    v-if="statusVoices == true"
                    @click="onClicktransalate()"
                    class="color-0F172A text-s-20 btn-sound"
                    style="cursor: pointer"
                    data-tag="blog-listen-button"
                    ><img
                      class="me-2"
                      src="../../../../../assets/blog/charm_sound-down.svg"
                      alt="charm_sound-down"
                    />
                    <div style="display: inline-block; width: 40px">
                      {{ $t('Blog.Listen') }}
                    </div></span
                  >
                  <span
                    v-else
                    @click="cancelVoices()"
                    class="color-0F172A text-s-20 btn-sound"
                    style="cursor: pointer"
                    data-tag="blog-stop-listening-button"
                    ><img
                      class="me-2"
                      src="../../../../../assets/blog/charm_sound-down.svg"
                      alt="charm_sound-down"
                    />
                    <div style="display: inline-block; width: 40px">
                      {{ $t('Blog.Stop') }}
                    </div></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="container ps-lg-0 pe-lg-0 ps-md-5 pe-md-5 ps-3 pe-3"
          style="max-width: 860px !important"
        >
          <ol class="mt-4 font-md">
            <ul class="breadcrumb">
              <li>
                <nuxt-link @click="scrollToTop" :to="localePath('/')" data-tag="blog-detail-breadcrumb-home-link"
                  ><span class="text-w-500 text-s-20 color-8F97A8">{{
                    $t('Menu.Home')
                  }}</span></nuxt-link
                >
                <img
                  class="mb-1"
                  src="../../../../../assets/icon/ic_round-navigate-next.svg"
                />
              </li>
              <li>
                <a @click="scrollToTop" href="/blog" data-tag="blog-detail-breadcrumb-blog-link"
                  ><span class="text-w-500 text-s-20 color-8F97A8">{{
                    $t('Menu.Blog')
                  }}</span></a
                >
                <img
                  class="mb-1"
                  src="../../../../../assets/icon/ic_round-navigate-next.svg"
                />
              </li>
              <li>
                <div class="text-w-700">
                  <span class="text-w-500 text-s-20 color-8F97A8 text-truncate">{{
                    responseData.attributes.title
                  }}</span>
                </div>
              </li>
            </ul>
          </ol>
          <div class="row">
            <div id="transalate" class="col-12 pt-md-3 pt-0 img-in-blog">
              <h1 class="font-bd font-w-500 pb-4">
                {{ responseData.attributes.title }}
              </h1>
              <div v-html="responseData.attributes.content"></div>
            </div>
          </div>
          <div
            v-if="responseData.attributes.blog_tags.data.length !== 0"
            class="row mb-4"
          >
            <div class="col-12 pt-3">
              <span
                class="me-3 text-s-24 d-block d-md-inline color-1F2937 font-md"
                >{{ $t('Blog.Tag') }}</span
              >
              <span
                v-for="data in responseData.attributes.blog_tags.data"
                :key="data.id"
              >
                <span class="tag me-3">{{ data.attributes.name }}</span>
              </span>
            </div>
          </div>
          <div v-if="isValidService" class="row">
            <div class="col-12 text-center">
              <a :href="serviceLink" target="_blank" rel="noopener" :data-tag="'blog-service-banner-' + imageAlt">
                <img
                  class="img-fluid"
                  width="450"
                  :src="imageUrl"
                  :alt="imageAlt"
                >
              </a>
            </div>
          </div>
          <div id="tag" class="row">
            <div class="col-12 text-md-center text-start">
              <hr />
              <div class="item-center p-md-4 p-0">
                <span
                  class="pe-4 mb-2 text-s-24 d-block d-md-inline color-1F2937 font-md"
                  >{{ $t('Blog.Share') }}</span
                >
                <ShareNetwork
                  @close="closeSharenetwork"
                  network="facebook"
                  :url="urls"
                  :title="responseData.attributes.title"
                  :description="responseData.attributes.description"
                  quote="sellsuki"
                  hashtags="sellsuki"
                  data-tag="blog-share-facebook-button"
                >
                  <img
                    class="pe-4"
                    src="../../../../../assets/icon/bxl_facebook.png"
                  />
                </ShareNetwork>
                <ShareNetwork
                  @close="closeSharenetwork"
                  network="line"
                  :url="urls"
                  :title="responseData.attributes.title"
                  :description="responseData.attributes.description"
                  data-tag="blog-share-line-button"
                >
                  <img
                    class="pe-4"
                    src="../../../../../assets/icon/bi_line.png"
                  />
                </ShareNetwork>
                <a href="mailto:hello@sellsuki.com" data-tag="blog-share-email-button"
                  ><img
                    class="pe-4"
                    src="../../../../../assets/icon/ic_round-email.png"
                    alt=""
                /></a>
                <div class="copyLink" id="copy" tooltip="Copy to clipboard" data-tag="blog-share-copy-link-button">
                  <img
                    class="pe-4"
                    src="../../../../../assets/icon/link.png"
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12 card-center">
              <div
                @click="animateLike()"
                class="card-like text-center pt-3 pb-4 d-none d-md-block"
                data-tag="blog-like-button-desktop"
              >
                <div
                  id="activeLike"
                  class="like-icon-radius hvr-grow cursor-pointer"
                >
                  <img
                    id="animateLike"
                    width="28.125"
                    height="28.972"
                    :src="
                      this.bloglike
                        ? 'https://sellsuki-web-storage-staging.s3.ap-southeast-1.amazonaws.com/like_c_cd52c52ac7.svg'
                        : 'https://sellsuki-web-storage-staging.s3.ap-southeast-1.amazonaws.com/like_5d097375cb.svg'
                    "
                    alt="like"
                  />
                </div>
                <div class="text-s-24 color-8F97A8 mt-1">
                  บทความนี้มีประโยชน์กดชอบเป็นกำลังใจให้เราได้
                </div>
              </div>
              <div
                @click="bloglike = !bloglike"
                class="card-like text-center pt-2 pb-2 d-block d-md-none"
                data-tag="blog-like-button-mobile"
              >
                <div class="text-s-24 color-8F97A8">
                  <span>Like this article</span>
                  <div
                    class="like-icon-radius"
                    :class="{ 'like-active': this.bloglike == true }"
                    style="padding: 2px 8px"
                  >
                    <img
                      v-if="bloglike == true"
                      width="24"
                      height="24"
                      src="../../../../../assets/icon/like-a.png"
                      alt="like"
                    />
                    <img
                      v-else
                      width="24"
                      height="24"
                      src="../../../../../assets/icon/like.svg"
                      alt="like"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogNear
            :CategoryId="responseData.attributes.blog_category.data.id"
            :Id="$route.params.id"
          />
          <div class="row mb-3" id="showAds">
            <div v-if="adsFilter !== undefined" class="col-12">
              <Ads :responseDataAds="adsFilter" />
            </div>
          </div>
          <div>
            <FormDataResearch
              v-if="responseData.attributes.LinkFilePdf != null"
              :responseData="responseData"
              class="pt-2 pb-2"
            />
          </div>
        </div>
        <div class="container" style="max-width: 860px !important">
          <hr class="mt-5" style="height: 2px" />
          <RelatedPosts
            v-if="blog_category_id != ''"
            :type="'Blogs'"
            :CategoryName="blog_category_id"
            :Id="$route.params.id"
          />
          <RelatedPosts
            v-if="blog_category_id == ''"
            :type="'Blogs'"
            :CategoryName="responseData.attributes.blog_category.data.id"
            :Id="$route.params.id"
          />
        </div>
      </div>
    </div>
    <div class="fabs animate__animated animate__bounce" @click="scrollToTop" data-tag="back-to-top-button">
      <div class="click-top">
        <i
          class="bi bi-arrow-up-short"
          style="font-size: 38px; margin: 9.2px"
        ></i>
      </div>
    </div>
    <FooterV2 />
  </div>
</template>

<script>
import RelatedPosts from '@/components/RelatedPosts'
import Preloader from '@/components/Preloader'
import FormDataResearch from '@/components/FormDataResearch'
import BlogNear from '@/components/Blog/BlogNear'
import Ads from '@/components/Blog/Ads'
import MenuBlog from '@/components/MenuBlog'
import moment from 'moment'

export default {
  name: 'BlogsDetail',
  layout: null,
  components: {
    RelatedPosts,
    Preloader,
    FormDataResearch,
    BlogNear,
    Ads,
    MenuBlog,
  },
  jsonld() {
    return (
      {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: this.responseData.attributes.headline,
        image: [this.responseData.attributes.illustration.data.attributes.url],
        datePublished: this.responseData.attributes.createdAt,
        dateModified: this.responseData.attributes.createdAt,
        author: [
          {
            '@type': 'Person',
            name: 'Sellsuki Co., Ltd.',
            url: 'https://www.sellsuki.co.th/about-us',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: this.$t('Menu.Home'),
            item: 'https://www.sellsuki.co.th/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: this.$t('Menu.Blog'),
            item: 'https://www.sellsuki.co.th/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: this.responseData.attributes.title,
          },
        ],
      }
    )
  },
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
      title: this.responseData.attributes.metaTitle ?? this.responseData.attributes.title,
      description: this.responseData.attributes.metaDescription ?? this.responseData.attributes.description,
      site_name: 'Sellsuki',
      illustration:
        this.responseData.attributes.illustration.data.attributes.url,
      urls: this.urls,
      route:
        process.env.MAIN_URL +
        '/blogs/detail/' +
        this.$route.params.id +
        '/' +
        this.$route.params.name,
    })
  },
  async asyncData({ $axios, route, i18n, redirect, error }) {
    //console.log('/blogs/detail/' + route.params.id + '/' + route.params.name)
    if (
      route.path ==
      '/blogs/detail/' +
        route.params.id +
        '/' +
        route.params.name.toLowerCase() +
        '/'
    ) {
      redirect(
        301,
        '/blogs/detail/' +
          route.params.id +
          '/' +
          route.params.name.toLowerCase()
      )
    } else if (
      route.path ==
      '/en/blogs/detail/' +
        route.params.id +
        '/' +
        route.params.name.toLowerCase() +
        '/'
    ) {
      redirect(
        301,
        '/en/blogs/detail/' +
          route.params.id +
          '/' +
          route.params.name.toLowerCase()
      )
    }
    if (
      route.path ==
      '/Blogs/Detail/' + route.params.id + '/' + route.params.name.toLowerCase()
    ) {
      redirect(
        301,
        '/blogs/detail/' +
          route.params.id +
          '/' +
          route.params.name.toLowerCase()
      )
    } else if (
      route.path ==
      '/en/Blogs/Detail/' +
        route.params.id +
        '/' +
        route.params.name.toLowerCase()
    ) {
      redirect(
        301,
        '/en/blogs/detail/' +
          route.params.id +
          '/' +
          route.params.name.toLowerCase()
      )
    }

    return { responseData: null, blog_category_id: '', adsFilter: null };
  },
  data() {
    return {
      path: '../../../../../assets/icon/like.svg',
      responseData: [],
      responseDataAds: [],
      lang: this.$i18n.locale || 'th-TH',
      //lang: 'th-TH',
      sumCount: 0,
      sumShare: 0,
      email: '',
      statusMenu: false,
      blog_category_id: '',
      urls: 'https://www.sellsuki.co.th/' + this.$route.path,
      nextblog: [],
      backblog: [],
      showAds: false,
      AdsHeight: 0,
      message: '',
      statusVoices: true,
      bloglike: false,
      highlight: [],
      btnActive: false,
      adsFilter: [],
    }
  },
  methods: {
    scrollToTarget(index) {
      const nodeList = document.querySelectorAll('h2')

      window.scrollTo(0, nodeList[index].offsetTop - 100)
    },
    activeText(index) {
      const nodeList = document.querySelectorAll('h2')
      if (nodeList.length > 0) {
        for (let i = 0; i < nodeList.length; i++) {
          document.getElementById('text' + i).classList.add('opct-08')
          document.getElementById('text' + i).classList.remove('font-df')
        }
      }
      document.getElementById('text' + index).classList.remove('opct-08')
      document.getElementById('text' + index).classList.add('font-md')
    },
    closeSharenetwork() {
      if (this.responseData.attributes.share == null) {
        this.countShare(0)
      } else {
        this.countShare(this.responseData.attributes.share)
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    dateTime(value) {
      return moment(value).format('DD MMM YYYY')
    },
    countView(num) {
      this.sumCount = parseInt(num) + 1
    },
    countShare(num) {
      this.sumShare = parseInt(num) + 1
    },
    onShow(event) {
      this.windowTop = event.target.documentElement.scrollTop
      const highlight = document.getElementById('tag')
      if (this.windowTop >= 300 && this.windowTop < highlight.offsetTop) {
        document.getElementById('highlight-text').style.display = 'block'
      } else if (this.windowTop >= highlight.offsetTop) {
        document.getElementById('highlight-text').style.display = 'none'
      } else {
        document.getElementById('highlight-text').style.display = 'none'
      }

      const nodeList = document.querySelectorAll('h2')

      if (nodeList.length > 0) {
        for (let i = 0; i < nodeList.length; i++) {
          if (this.windowTop > nodeList[i].offsetTop - 150) {
            //console.log(this.windowTop+' '+ nodeList[0].offsetTop)
            document.getElementById('ul' + i).classList.add('active-text')
            document.getElementById('li' + i).classList.add('active-dot')
          } else {
            document.getElementById('ul' + i).classList.remove('active-text')
            document.getElementById('li' + i).classList.remove('active-dot')
          }
        }
      }

      if (this.windowTop < 50) {
        this.statusMenu = false
      }
      if (this.windowTop > 49) {
        this.statusMenu = true
      }
      //.log(this.AdsHeight)
      if (this.windowTop > this.AdsHeight) {
        setTimeout(() => {
          this.showAds = true
        }, 2000)
      }
    },
    onVoicesChanged() {
      const voices = speechSynthesis.getVoices()
      //console.log(voices)
      const thVoice = voices.find((voice) => voice.lang === 'th-TH')
      this.message.voice = thVoice
      this.message.rate = 0.5
    },
    onClicktransalate() {
      var node = document.getElementById('transalate'),
        //htmlContent = node.innerHTML,
        textContent = node.textContent
      //console.log(textContent)

      this.message.lang = 'th-TH'
      this.message.text = textContent
      speechSynthesis.speak(this.message)
      this.statusVoices = false
    },
    cancelVoices() {
      speechSynthesis.cancel()
      this.statusVoices = true
    },
    pauseVoices() {
      speechSynthesis.pause()
    },
    resumeVoices() {
      speechSynthesis.resume()
    },
    CookieSetting() {
      this.$cookies.set('bloglike', this.bloglike, {
        path: '/',
        maxAge: 31557600,
      })
    },
    updateProgressBar() {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const progressBar = document.querySelector('.progress-bar')
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (winScroll / totalHeight) * 100
      progressBar.style.width = progress + '%'
    },
    copyText(e) {
      navigator.clipboard.writeText(window.location.hostname + this.$route.path)
      e.currentTarget.setAttribute('tooltip', 'Copied!')
    },
    resetTooltip(e) {
      e.currentTarget.setAttribute('tooltip', 'Copy to clipboard')
    },
    animateLike() {
      this.bloglike = !this.bloglike
      if (this.bloglike == true) {
        document.getElementById('animateLike').classList.add('vert-move')
        document.getElementById('activeLike').classList.add('active-like')
      } else {
        document.getElementById('animateLike').classList.remove('vert-move')
        document.getElementById('activeLike').classList.remove('active-like')
      }
    },
  },
  //this.$route.params.id
  created() {
    if (this.responseData.attributes.view == null) {
      this.countView(0)
    } else {
      this.countView(this.responseData.attributes.view)
    }

    const bloglike = this.$cookies.get('bloglike')
    if (bloglike == true) {
      this.bloglike = bloglike
    }
  },
  mounted() {
    if (/^\?fbclid=/.test(location.search)) {
      location.replace(location.href.replace(/\?fbclid.+/, ''))
    }

    const copyButton = document.getElementById('copy')
    copyButton.addEventListener('click', (e) => this.copyText(e))
    copyButton.addEventListener('mouseover', (e) => this.resetTooltip(e))

    const arreyHighlight = document.querySelectorAll('h2')
    var result = []
    for (var i = 0; i < arreyHighlight.length; i++) {
      result.push(arreyHighlight[i].outerText)
    }
    this.highlight = result

    const element = document.getElementById('showAds')
    this.AdsHeight = element.scrollHeight + 500
    window.addEventListener('scroll', this.onShow)
    window.addEventListener('scroll', this.updateProgressBar)

    this.message = new SpeechSynthesisUtterance()
    speechSynthesis.addEventListener('voiceschanged', this.onVoicesChanged())

    //window.addEventListener('scroll', this.onShow);

    // let scrollPercentage = () => {
    // let scrollProgress = document.getElementById("progress");
    // let progressValue = document.getElementById("progress-value");
    // let pos = document.documentElement.scrollTop;
    // let heightCalc = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // let scrollValue = Math.round( pos * 100 / heightCalc);
    // //console.log(scrollValue);

    //     scrollProgress.style.background = `conic-gradient(#F35B1F ${scrollValue}%, #D9D9D9 ${scrollValue}%)`;
    //     progressValue.textContent = `${scrollValue}%`;
    // }

    // window.onscroll = scrollPercentage;
    // window.onload = scrollPercentage;
  },
  computed: {
    isValidService() {
      try {
        const service = this.responseData?.attributes?.service;
        const serviceData = service?.data;
        const attributes = serviceData?.attributes;
        const pageURL = attributes?.pageURL;

        console.log('service:', service);
        console.log('serviceData:', serviceData);
        console.log('attributes:', attributes);
        console.log('pageURL:', pageURL);

        return !!pageURL; // ถ้า pageURL มีค่า จะ return true
      } catch (e) {
        console.error('isValidService error:', e);
        return false;
      }
    },
    serviceLink() {

      const service = this.responseData?.attributes?.service?.data;
      const pageURL = service?.attributes?.pageURL;
      const title = this.responseData?.attributes?.title;
      if (pageURL && title) {
        return `${pageURL}&blog=${encodeURIComponent(title)}`;
      }
      return '';
    },
    imageUrl() {
      return (
        this.responseData?.attributes?.service?.data?.attributes?.image?.data?.attributes?.url || ''
      );
    },
    imageAlt() {
      return (
        this.responseData?.attributes?.service?.data?.attributes?.image?.data?.attributes?.alternativeText || ''
      );
    }
  }
}
</script>

<style scoped>
.progress-bar-container {
  position: fixed;
  top: 80;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: transparent;
  z-index: 99;
}

.progress-bar {
  height: 100%;
  background-color: #f35b1f;
  transition: all 0.3s ease;
}
.active-like {
  border: 1px solid #d9f2ff !important;
  background-color: #f0f9ff !important;
  transition: 1s;
}
.first-ul {
  padding: 0px 0px 0px 0px !important;
}
.highlight-text ul {
  list-style: none;
  margin: 0;
  padding: 40px 0px 0px 0px;
  margin-top: -25px !important;

  position: relative;
}
.highlight-text ul:before {
  content: '';
  display: inline-block;
  width: 2px;
  background: #d9f2ff;
  position: absolute;
  left: 4px;
  top: 5px;
  height: calc(100% - 14px);
}
.highlight-text ul li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 14px !important;
  cursor: pointer;
}
.highlight-text ul li:before {
  content: '';
  display: inline-block;
  width: 9px;
  height: 9px;
  background: #fff;
  border: 1px solid #58c6ff;
  position: absolute;
  left: 0;
  top: 5px;
  border-radius: 10px;
  z-index: 9999;
}
.highlight-text {
  z-index: 9;
  position: fixed;
}

.active-text:before {
  content: '';
  display: inline-block;
  width: 2px;
  background: #32a9ff !important;
  position: absolute;
  left: 4px;
  top: 5px;
  height: calc(100% - 10px);
}

.active-dot:before {
  content: '';
  background: #32a9ff !important;
  border: 1px solid #32a9ff !important;
}

.active-dot div {
  color: #1b8bf5 !important;
}

.tag {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 16px 3px 16px;
  grid-gap: 4px;
  gap: 4px;
  background: #eeeeee;
  color: #464646;
  font-weight: 500;
  font-size: 24px;
  border-radius: 16px;
  margin-right: 10px;
  margin-top: 10px;
}
div::v-deep h1 {
  font-size: 36px !important;
  font-family: 'Heavent-med' !important;
  margin-left: 0px !important;
  margin-bottom: 0px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
}

div::v-deep h2 {
  font-size: 36px !important;
  font-family: 'Heavent-med' !important;
  margin-left: 0px !important;
  margin-bottom: 0px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
}

div::v-deep h3 {
  font-size: 36px !important;
  font-family: 'Heavent-med' !important;
  margin-left: 0px !important;
  margin-bottom: 0px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
}

div::v-deep h4 {
  font-size: 36px !important;
  font-family: 'Heavent-med' !important;
  margin-left: 0px !important;
  margin-bottom: 0px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
}

div::v-deep h5 {
  font-size: 28px !important;
  font-family: 'Heavent-med' !important;
  margin-left: 0px !important;
  margin-bottom: 0px !important;
  font-weight: 300 !important;
  line-height: 1 !important;
}

div::v-deep #transalate p {
  font-size: 16px !important;
  font-family: 'Tahoma' !important;
  margin-left: 0px !important;
}

::v-deep #transalate li {
  font-size: 16px !important;
  font-family: 'Tahoma' !important;
  margin-left: 0px !important;
}

::v-deep #transalate ol {
  padding-left: 18px !important;
}

::v-deep .img-in-blog img {
  width: 100%;
}

ol,
.breadcrumb {
  padding-left: 0px !important;
}

div::v-deep tr {
  border: 0 !important;
}
div::v-deep td figure {
  position: relative !important;
}

div::v-deep td {
  vertical-align: top;
  padding: 0px 20px;
}
div::v-deep blockquote {
  display: block;
  padding: 15px 24px 15px;
  font-style: italic;
  margin: 20px 0;
  position: relative;
  font-family: 'Tahoma', sans-serif !important;
  line-height: 34px;
  /* text-align: justify; */
  border-left: 8px solid #ccc;
}
#progress {
  height: 70px;
  width: 70px;
  background-color: #f35b1f;
  border-radius: 50%;
  position: fixed;
  top: 100px;
  right: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  z-index: 9;
}

#progress-value {
  display: block;
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  background-color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-weight: 500;
}
.btn-sound {
  border-radius: 17px;
  border: 1px solid #eee;
  background: #fff;
  padding: 2px 16px 2px 2px;
}
.card-hd {
  padding: 8px 16px;
  border-radius: 46px;
  border: 1.5px solid #fff;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(28px);
}
.card-body {
  min-height: 100%;
}
.show-text-color a {
  color: #0d6efd !important;
}
.form-control {
  padding: 10px 10px !important;
}
.like-icon-radius {
  border-radius: 60px;
  border: 1px solid #eee;
  padding: 11px 11px;
  gap: 10px;
  display: inline-table;
}
.card-like {
  border-radius: 8px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.1),
    0px 1px 2px 0px rgba(17, 24, 39, 0.1),
    0px 3px 3px 0px rgba(17, 24, 39, 0.09),
    0px 7px 4px 0px rgba(17, 24, 39, 0.05),
    0px 12px 5px 0px rgba(17, 24, 39, 0.01),
    0px 19px 5px 0px rgba(17, 24, 39, 0), 0px 0px 1px 0px rgba(17, 24, 39, 0.3);
}
.like-active {
  border: 1px solid #009dfc !important;
}
.card-center {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.card-blog-ads {
  border-radius: 8px;
  border: 2px solid rgba(255, 234, 225, 0.2);
  background: linear-gradient(
    180deg,
    rgba(138, 60, 24, 0.5) 0%,
    rgba(75, 42, 26, 0.3) 41.15%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
  flex-shrink: 0;
}

.card-port {
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  height: 230px;
}

p {
  color: #373737;
  font-size: 16px;
}

.img-cover {
  width: 100% !important;
  /* height: 600px;
  object-fit: cover; */
}

/* ::v-deep .img-in-blog img{
    margin: 0px -12px 1rem !important;
} */

.copyLink {
  cursor: pointer;
  display: inline-block;
  transform: translateY(0%);
}
.copyLink:hover:after {
  opacity: 1;
  transform: translateY(0) translateX(-60%);
}
.copyLink:after {
  content: attr(tooltip);
  width: 100px;
  bottom: -40px;
  left: 50%;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  background-color: #000;
  color: #fff;
  transform: translateY(-10px) translateX(-50%);
  transition: all 300ms ease;
  text-align: center;
}

.card-position {
  position: fixed;
  z-index: 999;
  background-color: white;
  width: 100%;
  bottom: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.btn-hl {
  width: 300px;
  border-radius: 8px;
  padding: 4px 24px 4px 24px;
}

.btn-hl-active {
  background-color: white !important;
}

.text-hd {
  font-size: 44px;
  line-height: 60px;
}

hr {
  color: #eeeeee;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .img-hd {
    display: block;
    height: 250px;
  }
  .card-like {
    width: 100%;
  }
  .highlight-text {
    display: none;
  }
  .none-text {
    display: none;
  }
  .card-hd {
    width: 330px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
}

@media only screen and (max-width: 390px) {
  .btn-hl {
    width: 100%;
  }
  .text-truncate {
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
  div::v-deep h1 {
    font-size: 24px !important;
  }
  div::v-deep h2 {
    font-size: 24px !important;
  }
  div::v-deep h3 {
    font-size: 24px !important;
  }
  .card-hd {
    padding: 8px 10px;
  }
  .img-hd {
    display: block;
    height: 220px;
  }
  .card-like {
    width: 100%;
  }
  .highlight-text {
    display: none;
  }
  .none-text {
    display: none;
  }
  .card-hd {
    max-width: 306px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .img-hd {
    display: block;
    height: 400px;
  }
  .card-like {
    width: 530px;
  }
  .highlight-text {
    display: none;
  }
  .card-hd {
    max-width: 375px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .img-hd {
    display: block;
    height: 400px;
  }
  .card-like {
    width: 530px;
  }
  .highlight-text {
    display: none;
  }
  .mt-130 {
    margin-top: 150px !important;
  }
  .mt-110 {
    margin-top: 95px !important;
  }
  .card-hd {
    max-width: 375px;
  }
  .progress-bar-container {
    top: 74px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: 250% !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .img-hd {
    display: block;
    height: 400px;
  }
  .card-like {
    width: 530px;
  }
  .highlight-text {
    display: none;
  }
  .mt-130 {
    margin-top: 150px !important;
  }
  .mt-110 {
    margin-top: 95px !important;
  }
  .card-hd {
    max-width: 375px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: 195% !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .img-hd {
    display: block;
    height: 400px;
  }
  .card-like {
    width: 530px;
  }
  .mt-130 {
    margin-top: 130px !important;
  }
  .mt-110 {
    margin-top: 110px !important;
  }
  .highlight-text {
    position: fixed;
    top: 145px;
    right: 15px;
    width: max-content;
  }
  .card-hd {
    max-width: 375px;
  }
  .text-in-hl {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* word-break: break-word; */
    line-height: 1;
    height: 22px;
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: 160% !important;
  }
}
@media only screen and (min-width: 1380px) {
  .text-in-hl {
    width: 245px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* word-break: break-word; */
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: 100% !important;
  }
}

@media only screen and (min-width: 1650px) {
  .card-like {
    width: 530px;
  }
  .mt-130 {
    margin-top: 130px !important;
  }
  .mt-110 {
    margin-top: 110px !important;
  }
  .highlight-text {
    position: fixed;
    top: 145px;
    right: 15px;
    width: max-content;
  }
  .card-hd {
    max-width: 375px;
  }
  .text-in-hl {
    width: 275px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* word-break: break-word; */
  }
  .bg {
    /* background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: auto !important; */
    background-attachment: fixed !important;
    background-position: center 72px !important;
    background-repeat: no-repeat !important;
    background-size: 100% !important;
  }
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  transform: scale(1.2);
}
img.vert-move {
  -webkit-animation: mover 1s alternate;
  animation: mover 1s alternate;
  animation-iteration-count: 1;
}
img.vert-move {
  -webkit-animation: mover 1s alternate;
  animation: mover 1s alternate;
  animation-iteration-count: 1;
}
@-webkit-keyframes mover {
  0% {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(25deg);
  }
  100% {
    transform: rotate(0);
  }
}
@keyframes mover {
  0% {
    transform: rotate(0);
  }
  30% {
    transform: rotate(25deg) scale(1.1);
  }
  60% {
    transform: rotate(-25deg) scale(1.2);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}
</style>
