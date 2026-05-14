<template>
  <div id="LINESmartChannel">
    <div class="bg-img mt-4 d-none d-xl-block">
      <div class="pb-lg-0 pb-5 bg-color">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
              <table class="align-middle banner-main" style="width: 100%">
                <td class="banner-height">
                  <ol class="font-md" style="margin-top: -40px;">
                    <ul class="breadcrumb">
                      <li>
                        <img class="mb-1 me-1" src="../../../assets/SolutionsLine/home.png" /><nuxt-link
                          @click="scrollToTop" :to="localePath('/')"
                          data-tag="smartchannel-breadcrumb-business-link"><span
                            class="text-s-20 color-1F2937 ms-1">Business</span></nuxt-link> <img class="mb-1 ms-1"
                          src="../../../assets/SolutionsLine/chevron-right.png" />
                      </li>
                      <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/solutions/lineagency')"
                          data-tag="smartchannel-breadcrumb-lineagency-link"><span
                            class="text-s-20 color-1F2937 ms-1">LINE Agency</span></nuxt-link> <img class="mb-1 ms-1"
                          src="../../../assets/SolutionsLine/chevron-right.png" />
                      </li>
                      <li>
                        <span class="text-s-20 color-6B7280 ms-1">LINE Smart Channel</span>
                      </li>
                    </ul>
                  </ol>
                  <div class="d-flex" style="margin-top: 140px;">
                    <img height="48" width="48"
                      src="../../../assets/SolutionsLine/LineSmartChannel/ICON_LINE_BANNER.png"
                      alt="ICON_LINE_BANNER.png" />
                    <h1 class="font-wght text-s-52 color-1F2937 ms-3">
                      LINE Smart Channel
                    </h1>
                  </div>
                  <p class="text-s-24 mt-3 color-1F2937">
                    เป็น LINE Ads Platform รูปแบบหนึ่ง ที่มีตำแหน่งโฆษณาด้านบนหน้ารายการ Chat ของ LINE ซึ่งเป็นหน้าที่
                    มีการเข้าใช้งานสูงที่สุดบน LINE และมีโอกาสเข้าถึงกลุ่มผู้ใช้จำนวนมาก โดยแสดงผลได้ทั้ง Mobile และ
                    Desktop เพื่อแสดงข่าวสารหรือประชาสัมพันธ์ต่างๆ สามารถดึงดูดความสนใจจากผู้พบเห็น เข้าถึงได้กว่า 38
                    ล้านคน/วัน
                  </p>
                  <div class="row mt-4">
                    <div class="col-12 text-center d-flex">
                      <a href="https://lineagency.sellsuki.com/" target="_blank" rel="noopener" class="button-color"
                        data-tag="lineoa-banner-apply-package-button"><span>สมัครแพ็กเกจ</span></a>
                      <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="button-transparent ms-3"
                        data-tag="lineoa-banner-chat-admin-button"><span>แชทกับแอดมิน</span></a>
                    </div>
                  </div>
                </td>
              </table>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex">
              <img class="img-fluid mt-auto" src="../../../assets/SolutionsLine/LineSmartChannel/banner.png"
                alt="banner.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img d-none d-xl-none d-md-block">
      <div class="bg-color">
        <div class="container">
          <div class="row">
            <div class="col-7">
              <table class="align-middle" style="width: 100%;height: 500px;">
                <td>
                  <ol class="font-md mt-4">
                    <ul class="breadcrumb">
                      <li>
                        <img class="mb-1 me-1" src="../../../assets/SolutionsLine/home.png" /><nuxt-link
                          @click="scrollToTop" :to="localePath('/')"
                          data-tag="smartchannel-breadcrumb-business-link"><span
                            class="text-s-20 color-1F2937 ms-1">Business</span></nuxt-link> <img class="mb-1 ms-1"
                          src="../../../assets/SolutionsLine/chevron-right.png" />
                      </li>
                      <li>
                        <nuxt-link @click="scrollToTop" :to="localePath('/solutions/lineagency')"
                          data-tag="smartchannel-breadcrumb-lineagency-link"><span
                            class="text-s-20 color-1F2937 ms-1">LINE Agency</span></nuxt-link> <img class="mb-1 ms-1"
                          src="../../../assets/SolutionsLine/chevron-right.png" />
                      </li>
                      <li>
                        <span class="text-s-20 color-6B7280 ms-1">LINE Smart Channel</span>
                      </li>
                    </ul>
                  </ol>
                  <div class="d-flex">
                    <img height="48" width="48"
                      src="../../../assets/SolutionsLine/LineSmartChannel/ICON_LINE_BANNER.png"
                      alt="ICON_LINE_BANNER.png" />
                    <h1 class="font-wght text-s-44 color-1F2937 ms-3">
                      LINE Smart Channel
                    </h1>
                  </div>
                  <p class="text-s-24 mt-3 color-1F2937">
                    เป็น LINE Ads Platform รูปแบบหนึ่ง ที่มีตำแหน่งโฆษณาด้านบนหน้า
                    รายการ Chat ของ LINE ซึ่งเป็นหน้าที่ มีการเข้าใช้งานสูงที่สุดบน LINE
                    และมีโอกาสเข้าถึงกลุ่มผู้ใช้จำนวนมาก โดยแสดงผลได้ทั้ง Mobile และ
                    Desktop เพื่อแสดงข่าวสารหรือประชาสัมพันธ์ต่างๆ สามารถดึงดูด
                    ความสนใจจากผู้พบเห็น เข้าถึงได้กว่า 38 ล้านคน/วัน
                  </p>
                  <div class="row mt-4">
                    <div class="col-12 text-center d-flex">
                      <a href="https://lineagency.sellsuki.com/" target="_blank" rel="noopener" class="button-color"
                        data-tag="lineoa-banner-apply-package-button"><span>สมัครแพ็กเกจ</span></a>
                      <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="button-transparent ms-3"
                        data-tag="lineoa-banner-chat-admin-button"><span>แชทกับแอดมิน</span></a>
                    </div>
                  </div>
                </td>
              </table>
            </div>
            <div class="col-5 d-flex">
              <img class="img-fluid mt-auto" src="../../../assets/SolutionsLine/LineSmartChannel/banner-t.png"
                alt="banner-t.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img-mobile d-block d-md-none" style="height: auto;margin-top:64px">
      <div class="container p-4">
        <ol class="font-md mb-4 mt-2">
          <ul class="breadcrumb">
            <li>
              <img class="mb-1 me-1" src="../../../assets/SolutionsLine/home.png" /><nuxt-link @click="scrollToTop"
                :to="localePath('/')" data-tag="smartchannel-breadcrumb-business-link"><span
                  class="text-s-20 color-1F2937 ms-1">Business</span></nuxt-link> <img class="mb-1 ms-1"
                src="../../../assets/SolutionsLine/chevron-right.png" />
            </li>
            <li>
              <nuxt-link @click="scrollToTop" :to="localePath('/solutions/lineagency')"
                data-tag="smartchannel-breadcrumb-lineagency-link"><span class="text-s-20 color-1F2937 ms-1">LINE
                  Agency</span></nuxt-link> <img class="mb-1 ms-1"
                src="../../../assets/SolutionsLine/chevron-right.png" />
            </li>
            <li>
              <span class="text-s-20 color-6B7280 ms-1">LINE Smart Channel</span>
            </li>
          </ul>
        </ol>
        <div class="row">
          <div class="col-12">
            <h1 class="font-bd text-s-44 color-1F2937">
              <img height="32" class="me-3 mb-1"
                src="../../../assets/SolutionsLine/LineSmartChannel/ICON_LINE_BANNER.png"
                alt="ICON_LINE_BANNER.png" /><span>LINE Smart Channel</span>
            </h1>
            <p class="text-s-20 color-1F2937 mt-4">
              เป็น LINE Ads Platform รูปแบบหนึ่ง ที่มีตำแหน่งโฆษณาด้านบนหน้า
              รายการ Chat ของ LINE ซึ่งเป็นหน้าที่ มีการเข้าใช้งานสูงที่สุดบน LINE
              และมีโอกาสเข้าถึงกลุ่มผู้ใช้จำนวนมาก โดยแสดงผลได้ทั้ง Mobile และ
              Desktop เพื่อแสดงข่าวสารหรือประชาสัมพันธ์ต่างๆ สามารถดึงดูด
              ความสนใจจากผู้พบเห็น เข้าถึงได้กว่า 38 ล้านคน/วัน
            </p>
            <div class="row mt-4">
              <div class="col-12 text-center d-flex">
                <a href="https://lineagency.sellsuki.com/" target="_blank" rel="noopener" class="button-color"
                  data-tag="lineoa-banner-apply-package-button"><span>สมัครแพ็กเกจ</span></a>
                <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="button-transparent ms-3"
                  data-tag="lineoa-banner-chat-admin-button"><span>แชทกับแอดมิน</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="img-fluid" src="../../../assets/SolutionsLine/LineSmartChannel/banner-m.png" alt="banner-m.png"
        style="margin-top: -190px;">
    </div>
    <section class="scroll-div animate__animated  animate__fadeIn" v-if="showDiv"
      style="position: fixed;top: 0px;z-index: 999;width: 100%;background: #22C55E;">
      <nav class="navbar navbar-expand-lg ps-md-0 pe-md-0 ps-3 pe-3 p-0"
        style="z-index: 9999;box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;">
        <div class="container">
          <div class="ml-2 d-lg-block d-none">
            <ul class="navbar-nav text-s-24 text-w-500">
              <div v-for="(button, index) in buttons" :key="index"
                :class="{ 'nav-active': activeSection === button.name }" @click="setActiveButton(index)">
                <a :href="button.id">
                  <li class="nav-item d-flex ps-3 pe-3" style="padding-top: 19px;padding-bottom: 19px;">
                    <div class="nav-link p-0 text-s-24 m-auto">{{ button.label }}</div>
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div class="ml-2 d-lg-none d-block">
            <select @change="handleChange(activeSection)" v-model="activeSection"
              class="form-select custom-select mt-3 mb-3 text-s-24 font-md" aria-label="Default select example">
              <option v-for="(button, index) in buttons" :key="index" :value="button.name">{{ button.label }}</option>
            </select>
          </div>
          <div class="mt-1">
            <nuxt-link :to="{ path: '/solutions/lineagency/form/line-smart-channel' }"
              class="btn-Line-White text-s-24 font-df p-1 ps-3 pe-3"
              data-tag="smartchannel-stickybar-consultation-button"><img class="me-2"
                src="../../../assets/SolutionsLine/chat-bubble-left-right.png"
                alt="chat-bubble-left-right.png" />ปรึกษาฟรี
            </nuxt-link>
          </div>
        </div>

      </nav>
    </section>
    <section id="Features" class="pb-md-5 pb-0 section-active">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-5">
          <div class="col-12 mt-md-5 mt-0 text-center fade-in-up" v-intersect>
            <div class="m-auto" style="
                  width: 95px;
                  border: 1px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Features</p>
            </div>
            <h2 class="text-s-60 text-w-700 color-1F2937 mt-3 d-none d-md-block">
              รูปแบบโฆษณาบน LINE Smart Channel Ads
            </h2>
            <h2 class="text-s-44 text-w-700 color-1F2937 mt-3 d-block d-md-none">
              รูปแบบโฆษณาบน <br />LINE Smart Channel Ads
            </h2>
          </div>
          <div class="row mt-md-5 mt-5 mb-md-3 mb-5 text-center fade-in-up" v-intersect>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-md-3 p-0">
              <div class="card-1">
                <div class="card-body p-4 mt-md-3 mt-0">
                  <p class="text-s-36 font-bd color-1F2937 mb-md-4 mb-0">Static Banner</p>
                  <img class="img-fluid" src="../../../assets/SolutionsLine/LineSmartChannel/card-1.png"
                    alt="card-1.png">
                  <div class="row mt-md-3 mt-0 mb-md-5 mb-3">
                    <div class="col-6 pe-2">
                      <div class="btn-gray d-flex"><span class="color-1F2937 text-s-24 font-md m-auto">OLD
                          VERSION</span></div>
                    </div>
                    <div class="col-6 ps-2">
                      <div class="btn-green d-flex"><span class="color-1F2937 text-s-24 font-md m-auto">MIDDLE
                          SIZE</span></div>
                    </div>
                  </div>
                  <p class="text-s-24 color-1F2937">การลงโฆษณาแบบภาพนิ่ง เพียงคลิกเดียวก็สามารถ Landing ไปตามลิงก์ต่างๆ
                    ที่แบรนด์ ต้องการ ซึ่งมีความสะดวกและง่ายต่อการ Lead ลูกค้าไปสู่ช่องทาง Owned Media ต่างๆ มาก</p>
                </div>
              </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 p-md-3 p-0 mt-md-0 mt-4">
              <div class="card-1">
                <div class="card-body p-4 mt-md-3 mt-0">
                  <p class="text-s-36 font-bd color-1F2937 mb-md-4 mb-0">VDO Expandable Ads</p>
                  <img class="img-fluid" src="../../../assets/SolutionsLine/LineSmartChannel/card-2.png"
                    alt="card-2.png">
                  <div class="row mt-3">
                    <div class="col-12 mb-md-5 mb-3">
                      <div class="btn-green d-flex"><span class="color-1F2937 text-s-24 font-md m-auto">MIDDLE SIZE
                          AUTOPLAY</span></div>
                    </div>
                    <div class="col-12">
                      <p class="text-s-24 color-1F2937">การลงโฆษณาแบบ VDO เพื่อให้ลูกค้าคลิกขยาย และดู VDO
                        โฆษณาได้ทันทีช่วยสร้าง
                        ประสบการณ์ลูกค้าในการรับข้อมูลได้อย่างน่าสนใจ ก่อนจะสามารถคลิกไปยังปลายทาง ที่แบรนด์ต้องการได้
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="KeyReasons" class="pt-5"></div>
    <section id="KeyReasons" class="bg-img-3 section-active">
      <div class="bg-color-2">
        <div class="container pb-5 p-lg-0 p-4">
          <div class="d-none d-lg-block">
            <div class="row py-80">
              <div class="col-12 text-center mb-5">
                <div class="border-ranbow d-inline-flex">
                  <span class="text-ranbow text-s-24 text-w-700 m-0">Why Us</span>
                </div>
              </div>
              <div class="col-6 col-6-custom-1 color-FFFFFF d-flex fade-in-up" v-intersect>
                <div class="text-start">
                  <h2 class="text-s-60 font-bd mb-0">
                    ทำไมต้องใช้บริการ<br />
                    LINE Smart Channel Ads
                  </h2>
                </div>
              </div>
              <div class="col-6 col-6-custom-2 fade-in-up" v-intersect>
                <CardBgImg type="LINESmartChannel" />
              </div>
            </div>
          </div>
          <div class="row d-block d-xl-none">
            <div class="col-12 text-center pb-5 pt-4">
              <div class="border-ranbow d-inline-flex">
                <span class="text-ranbow text-s-24 text-w-700 m-0">Why Us</span>
              </div>
            </div>
            <div class="col-12 color-FFFFFF fade-in-up" v-intersect>
              <div class="text-start">
                <h2 class="text-s-44 font-bd mb-5">
                  <h2 class="text-s-44 font-bd mb-0">
                    ทำไมต้องใช้บริการ<br />
                    LINE Smart Channel Ads
                  </h2>
                </h2>
              </div>
            </div>
            <div class="col-12 fade-in-up" v-intersect>
              <CardBgImg type="LINESmartChannel" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="Pricing" class="pb-md-5 pb-0 section-active">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-5">
          <div class="col-12 mt-md-5 mt-0 text-center fade-in-up" v-intersect>
            <div class="m-auto" style="
                  width: 95px;
                  border: 1px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Pricing</p>
            </div>
            <h2 class="text-s-60 text-w-700 color-1F2937 mt-3 mb-3 d-none d-md-block">
              ราคาแพ็กเกจ LINE Smart Channel
            </h2>
            <h2 class="text-s-44 text-w-700 color-1F2937 mt-3 d-block d-md-none">
              ราคาแพ็กเกจ LINE Smart Channel
            </h2>
          </div>
          <CardPrice type="50,000" />
        </div>
      </div>
    </section>
    <section class="container margin-section">
      <AfterfooterSub service="line-smart-channel" />
    </section>
  </div>
</template>

<script>
import Preloader from '@/components/Preloader'
import FormDataUser from '@/components/Solutions/Lineagency/FormDataUser'
import Section00 from '@/components/Solutions/Lineagency/Section00'
import AfterfooterSub from '@/components/Solutions/Lineagency/AfterfooterSub'
import BlogLine from '@/components/Solutions/Lineagency/BlogLine'
import CardBgImg from '@/components/Solutions/Lineagency/CardBgImg'
import CardPrice from '~/components/Solutions/Lineagency/CardPrice'
import SuccessForm from '@/components/Solutions/SuccessForm'
export default {
  name: 'LINESmartChannel',
  layout: 'layoutV2',
  components: {
    Preloader,
    FormDataUser,
    Section00,
    AfterfooterSub,
    BlogLine,
    CardBgImg,
    CardPrice,
    SuccessForm
  },
  head() {
    const baseHead = this.$headUtil({
      lang: this.$i18n.locale === 'th-TH' ? 'th-TH' : 'en-TH',
      title: 'LINE Smart Channel',
      route: process.env.MAIN_URL + this.$route.path,
      description:
        'เป็น LINE Ads Platform รูปแบบหนึ่ง ที่มีตำแหน่งโฆษณาด้านบนหน้ารายการ Chat ของ LINE ซึ่งเป็นหน้าที่ มีการเข้าใช้งานสูงที่สุดบน LINE และมีโอกาสเข้าถึงกลุ่มผู้ใช้จำนวนมาก',
    })

    return {
      ...baseHead,
      script: [
        {
          hid: 'line-tag',
          innerHTML: `(function(g,d,o){
            g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
            var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
            var s=d.createElement('script');s.async=1;
            s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
            var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
          })(window, document);
          _lt('init', {
            customerType: 'lap',
            tagId: '57ac2111-e9e7-4ca5-95cf-3ed6e4b48590'
          });
          _lt('send', 'pv', ['57ac2111-e9e7-4ca5-95cf-3ed6e4b48590']);
          _lt('send', 'cv', { type: 'SellsukiLINEAgency' }, ['57ac2111-e9e7-4ca5-95cf-3ed6e4b48590']);
        `,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          hid: 'gtag-js',
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-847077456',
          async: true
        },
        {
          hid: 'gtag-init',
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-847077456');
        `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      noscript: [
        {
          hid: 'line-tag-noscript',
          innerHTML: `<img height="1" width="1" style="display:none"
            src="https://tr.line.me/tag.gif?c_t=lap&t_id=57ac2111-e9e7-4ca5-95cf-3ed6e4b48590&e=pv&noscript=1" />`
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'line-tag': ['innerHTML'],
        'line-tag-noscript': ['innerHTML'],
        'gtag-init': ['innerHTML']
      }
    }
  },
  data() {
    return {
      isHidden: false,
      lang: this.$i18n.locale || 'th-TH',
      responseData: [],
      animation1: false,
      showDiv: false,
      activeSection: "Features",
      buttons: [
        { label: "Features", id: "#Features", name: "Features" },
        { label: "Key Reasons", id: "#KeyReasons", name: "KeyReasons" },
        { label: "Pricing", id: "#Pricing", name: "Pricing" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None"
    }
  },
  asyncData({ store }) {
    store.commit('setTitle', 'LineAgency')
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Add the scroll event listener
    const options = {
      root: null, // Uses the viewport as the container
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    const sections = document.querySelectorAll('.section-active');
    sections.forEach((section) => observer.observe(section));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up the listener
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    },
    setActiveButton(index) {
      this.activeButtonIndex = index; // Set the active button index
    },
    handleScroll() {
      const scrollY = window.scrollY; // Get the current scroll position
      const threshold = 650; // Define the scroll threshold
      this.showDiv = scrollY > threshold; // Show the div if scrolled beyond the threshold

      let currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        this.scrollDirection = "Down";
      } else if (currentScrollY < this.lastScrollY) {
        this.scrollDirection = "Up";
        this.showDiv = false;
      }
      this.lastScrollY = currentScrollY;
    },
    handleChange(i) {
      var text = "#" + i
      this.$router.push({ hash: text })
    },
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.form-select {
  background-color: #22C55E;
  color: #FFF;
}

.custom-select {
  appearance: none;
  /* ซ่อน UI ดั้งเดิมของ select */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #22C55E;
  /* สีพื้นหลัง */
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 16px;
  padding-right: 2rem;
  /* เว้นที่ให้ไอคอน */
}

.accordion-button {
  background-color: #fbfbfb !important;
  padding: 5px;
}

.text-s-60 {
  line-height: 72px;
}

table {
  table-layout: fixed;
  width: 100%;
}

.form-select {
  border: 0 !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed) {
  box-shadow: none;
}

.item-center {
  display: block !important;
}

.col-6-custom-1 {
  width: 45% !important;
}

.col-6-custom-2 {
  width: 55% !important;
}

.button-transparent:hover {
  color: #22C55E !important;
}

a {
  color: #FFFFFF;
}

a:hover {
  color: #FFFFFF !important;
}

.bg {
  background: url('./../../../assets/image94.webp');
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
}

.bg-icon {
  width: 146px;
  height: 146px;
  background-color: #7c3aed;
  border-radius: 50%;
  left: 8px;
  position: relative;
}

.bg-img-mobile {
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: 180% !important;
  background-position: -150px -500px !important;
  background-image: url(../../../assets/SolutionsLine/BG_1.png);
}

.bg-img {
  background-position: 0px -200px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(../../../assets/SolutionsLine/BG-sub.png);
}

.bg-img-2 {
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(../../../assets/SolutionsLine/img-bg-1.png);
}

.bg-img-3 {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat !important;
  background-image: url(../../../assets/SolutionsLine/LineSmartChannel/img-bg-2.png);
}

.bg-color-mobile {
  background: linear-gradient(180deg, rgba(65, 114, 235, 0.6) 0%, rgba(54, 239, 122, 0.4) 30.81%, rgba(54, 239, 122, 0) 65.59%), linear-gradient(179.81deg, #000000 44.95%, rgba(0, 0, 0, 0) 78.13%);

}

.bg-icon-main {
  margin-left: -10px !important;
  margin-top: -10px !important;
  background-color: #fcd34d;
  width: 146px;
  height: 146px;
  border-radius: 50%;
}

.theme-background-main {
  background-color: #7c3aed;
}

.theme-background-sub {
  background-color: #fcd34d;
}

.theme-text-main {
  color: #7c3aed;
}

.theme-text-sub {
  color: #fcd34d;
}

.theme-border {
  border-bottom: 1px solid #fcd34d !important;
}

.img-banner-top {
  margin-top: 100px !important;
}

.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(115.12deg, #22C55E 3.72%, #99CC66 94.36%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.border-ranbow {
  background: #FFFFFF;
  border-radius: 32px;
  border: 1px solid #00000008;
  padding: 4px 12px;
  backdrop-filter: blur(10px)
}

.banner-main {
  height: 600px;
}

.btn-banner {
  height: 48px !important;
  color: #FFFFFF !important;
  background: linear-gradient(115.12deg, #22C55E 3.72%, #99CC66 94.36%);
  box-sizing: border-box !important;
  border-radius: 32px !important;
  font-size: 28px;
  font-family: 'Heavent-med';
}

.btn-gray:hover {
  color: #1F2937 !important;
}

.py-80 {
  padding-bottom: 80px;
  padding-top: 80px;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .btn-green {
    height: 36px !important;
    background: #DCFCE7 !important;
    border: 1px solid #DCFCE7 !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .btn-gray {
    height: 36px !important;
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  #Features .text-s-24 {
    font-size: 20px !important;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG_1.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: -35px !important;
  }

  .bg-icon-single {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -140px;
    margin-top: -55px;
    width: 360px;
    height: 360px;
  }

  .text-card-service {
    font-size: 20px;
    line-height: 20px;
  }

  .img-cover {
    width: 26px;
  }

  .card-1 {
    height: auto;
    box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 24px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .btn-green {
    height: 36px !important;
    background: #DCFCE7 !important;
    border: 1px solid #DCFCE7 !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .btn-gray {
    height: 36px !important;
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG_1.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: -35px !important;
  }

  .bg-icon-single {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -140px;
    margin-top: -55px;
    width: 360px;
    height: 360px;
  }

  .text-card-service {
    font-size: 20px;
    line-height: 20px;
  }

  .img-cover {
    width: 26px;
  }

  .card-1 {
    height: auto;
    box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 24px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .btn-green {
    height: 56px !important;
    background: #DCFCE7 !important;
    border: 1px solid #DCFCE7 !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .btn-gray {
    height: 56px !important;
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -150px;
    margin-top: -55px;
    width: 380px;
    height: 380px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    height: auto;
    box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .btn-green {
    height: 56px !important;
    background: #DCFCE7 !important;
    border: 1px solid #DCFCE7 !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .btn-gray {
    height: 56px !important;
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 146px;
    height: 146px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-left: -170px;
    margin-bottom: -100px;
    margin-top: -35px;
    width: 450px;
    height: 450px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    height: 672px;
    box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .btn-green {
    height: 56px !important;
    background: #DCFCE7 !important;
    border: 1px solid #DCFCE7 !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .btn-gray {
    height: 56px !important;
    background: #E5E7EB !important;
    border: 1px solid #E5E7EB !important;
    border-radius: 8px !important;
    font-family: 'Heavent-med';
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
    background-repeat: no-repeat;
  }

  .p-custom {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }

  .p-custom-2 {
    padding-left: 65px !important;
    padding-right: 65px !important;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 146px;
    height: 146px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-left: -170px;
    margin-bottom: -100px;
    margin-top: -80px;
    width: 450px;
    height: 450px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    height: 672px;
    box-shadow: 0px 6px 4px 0px #64AF7705.0px 5px 3px 0px #64AF7708.0px 10px 5px 0px #64AF7703.0px 16px 6px 0px #64AF7700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }
}

.card {
  background-color: transparent;
}

.card-01 .card-body {
  padding: 20px 0px;
}

.card-01 img {
  background-color: #F3F4F6;
  border-radius: 8px;
  padding: 8px;
}

.card-01 div {
  font-family: "Heavent-body" !important;
  font-size: 24px;
  line-height: 24px;
  color: #1F2937;
}

.card-02 .card-body {
  padding: 20px 0px;
}

.card-02 img {
  background-color: #DCFCE7;
  border-radius: 8px;
  padding: 8px;
  margin-right: 8px;
}

.card-02 div {
  font-family: "Heavent-body" !important;
  font-size: 24px;
  line-height: 24px;
  color: #1F2937;
}

.nav-active {
  border-bottom: 5px solid #FFFFFF;
  color: #FFFFFF !important;
}

.nav-link {
  color: #FFFFFF !important;
}

.nav-active .nav-link {
  color: #FFFFFF !important;
}

.text-s-158 {
  font-size: 158px;
  line-height: 94.8px;
}

.text-s-86 {
  font-size: 86px;
  line-height: 86px;
}

.text-s-52 {
  line-height: 52px;
}

.text-s-44 {
  line-height: 44px;
}

.text-s-24 {
  line-height: 24px;
}

.text-s-36 {
  line-height: 36px;
}

.text-s-20 {
  line-height: 20px;
}

/* ----------------------- model ----------------- */
.header-model {
  font-weight: 700;
  line-height: 72px;
  text-align: center;
}

.modal-footer {
  border-top: 0px;
}

.modal-header {
  border-bottom: 0px;
}

.modal-custom-size {
  border-radius: 16px;
  background-color: #F0FDF4;
}
</style>
