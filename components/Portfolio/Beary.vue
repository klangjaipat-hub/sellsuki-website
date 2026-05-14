<template>
    <div id="PortfolioBeary">
      <div class="row ps-xxl-4 ps-xl-4">
        <div class="col-12 mb-3 d-block d-xl-none d-xxl-none"><img class="item-center" src="./../../assets/mobile/Beary-logo.webp" alt="Beary-logo.webp"></div>
        <div v-for="data in responseData" :key="data.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 p-xxl-0 p-xl-0 p-lg-5 p-md-5 p-sm-4 p-4 mb-4 hvr-hang">
            <nuxt-link class="hvr-hang" @click="scrollToTop" :to="localePath({ path: '/portfolios/detail/'+data.id+'/'+data.attributes.url+''})">
                <div class="row ps-lg-2 pe-lg-2 ps-0 pe-0">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"><img v-if="data.attributes.illustration != null" class="mb-2 img-fix-size" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText"></div>
                    <div class="col-col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="text-w-700 text-limit-2 text-s-14 color-373737">{{data.attributes.title}}</div>
                        <div style="border: 1px solid #E5E5E5;margin: 10px 10px 10px 0px;"></div>
                        <p class="text-s-14 text-limit-3 color-373737">{{data.attributes.description}}</p>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'PortfolioBeary',
    data () {
        return {
            lang: this.$i18n.locale || 'th-TH',
            responseData:[]
        }
    },
    methods : {
        getData(){
            this.responseData = [
              { id: 1, attributes: { title: "Beary Portfolio 1", description: "ตัวอย่างผลงาน Beary", url: "beary-portfolio-1", illustration: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Beary+1", alternativeText: "beary portfolio" } } } } },
              { id: 2, attributes: { title: "Beary Portfolio 2", description: "ตัวอย่างผลงาน Beary อีกชิ้น", url: "beary-portfolio-2", illustration: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Beary+2", alternativeText: "beary portfolio" } } } } }
            ]
        },
        scrollToTop() {
            window.scrollTo(0,0);
        }
    },
    mounted () {
        this.getData();
    }
}
</script>

<style scoped>
.img-fix-size{
    width: 100%;
    height: 203px;
    object-fit: contain;
    object-position: center;
}
</style>