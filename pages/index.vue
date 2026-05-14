<template>
  <div class="home">

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content modal-custom-size">
          <div class="modal-header p-0">
            <span id="exampleModalLabel" class="header-model">
              รับคำปรึกษา
            </span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              data-tag="close_modal_button"></button>
          </div>
          <div class="modal-body p-0">
            <FormDataUser page="home" :blog="this.$route.query.blog" />
          </div>
        </div>
      </div>
    </div>
    <SuccessForm bu="Home" />

    <section>
      <BannerAnimetion />
    </section>

    <section>
      <OurPartners />
    </section>

    <section class="fade-in-up" v-intersect>
      <OurClients />
    </section>

    <section class="fade-in-up" v-intersect>
      <ProblemStatement />
    </section>

    <section class="fade-in-up" v-intersect>
      <CardPortfolio />
    </section>

    <section id="Solution" class="fade-in-up" v-intersect>
      <Solutions />
    </section>

    <section>
      <HowWeWork />
    </section>

    <section class="fade-in-up" v-intersect>
      <Question />
    </section>

    <section class="fade-in-up" v-intersect>
      <Clients />
    </section>

    <section class="fade-in-up" v-intersect>
    </section>

    <section class="fade-in-up" v-intersect>
      <OurAward />
    </section>

    <div
      :style="{ backgroundImage: `url(${bgBottom})`, backgroundSize: 'cover', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }">
      <div style="background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);">
        <section class="fade-in-up" v-intersect>
          <Blog />
        </section>

        <section class="fade-in-up" v-intersect>
          <CardContact />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// Above-fold: static import
import BannerAnimetion from '@/components/Home/BannerAnimetion'
import OurPartners    from '@/components/Home/OurPartners'
import FormDataUser   from '@/components/Home/FormDataUser'
import SuccessForm    from '@/components/Solutions/SuccessForm'

// Below-fold: dynamic import (code-split)
const Banner           = () => import('@/components/Home/Banner')
const OurClients       = () => import('@/components/Home/OurClients')
const ProblemStatement = () => import('@/components/Home/ProblemStatement')
const CardPortfolio    = () => import('@/components/Home/CardPortfolio')
const Solutions        = () => import('@/components/Home/Solutions')
const HowWeWork        = () => import('@/components/Home/HowWeWork')
const Question         = () => import('@/components/Home/Question')
const Clients          = () => import('@/components/Home/Clients')
const OurWorks         = () => import('@/components/Home/OurWorks')
const OurAward         = () => import('@/components/Home/OurAward')
const Blog             = () => import('@/components/Home/Blog')
const CardContact      = () => import('@/components/Home/CardContact')

const bgBottom = require('~/assets/New/Home/BG-bottom.webp')

export default {
  layout: "layoutV2",
  name: 'home',
  components: {
    Banner,
    OurPartners,
    OurClients,
    ProblemStatement,
    CardPortfolio,
    Solutions,
    HowWeWork,
    Question,
    Clients,
    OurWorks,
    OurAward,
    Blog,
    CardContact,
    FormDataUser,
    SuccessForm,
    BannerAnimetion
  },
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
      title: "หน้าหลัก",
      route: process.env.MAIN_URL + this.$route.path
    });
  },
  async asyncData({ store }) {
    store.commit('setTitle', 'Home')
  },
  data() {
    return {
      isActive: true,
      bgBottom,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.row>* {
  padding-right: 0px !important;
  padding-left: 0px !important;
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
  background-color: #F0F9FF;
  border: none;
  box-shadow: 0px 0px 0px 0px #11182717, 0px 1px 2px 0px #11182712, 0px 3px 3px 0px #1118270D, 0px 7px 4px 0px #11182708, 0px 12px 5px 0px #11182703, 0px 19px 5px 0px #11182700;

}
</style>
