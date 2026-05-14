<template>
    <div id="Review" v-if="responseData.length != 0">
        <div class="mt-5 text-s-44 text-w-700 text-center">เรื่องเล่าจากลูกค้าเรา</div>
        <div class="row mt-4 mb-2 p-3">
            <div class="col-12">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-for="(data, index) in responseData" :key="index" class="carousel-item" :class="{'active': index == 0}">
                        <nuxt-link @click="scrollToTop" :to="localePath({ path: '/portfolios/detail/'+data.id+'/'+data.url+''})">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"><img v-if="data.illustration != null" class="d-block image-review" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy"></div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-xxl-5 p-lg-5 p-sm-3 p-3">
                                <div itemscope class="ps-sm-2 pe-sm-2 ps-2 pe-0">
                                    <p style="color:#FF773B">-- TESTIMONIALS</p>
                                    <div itemprop="name" class="text-review text-limit-1">{{data.title}}</div>
                                    <p itemprop="desc" class="mt-3 text-limit-7">{{data.description}}</p>
                                    <p class="mt-xxl-5 mt-4" style="color:#FF773B">{{data.name}}<br>{{data.position}}</p>
                                </div>
                            </div>
                        </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="d-none d-xl-block d-xxl-block">
                    <button class="carousel-control-prev-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style="padding: 12px !important;background-color: #FF773B !important;width: 55px;;buttom:none">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style="padding: 12px !important;background-color: #FF773B !important;width: 55px;buttom:none">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="d-block d-xl-none d-xxl-none text-center mt-4 show-hover">
                    <a class="me-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="" aria-hidden="true"><i class="me-1 bi bi-chevron-left" style="font-size: 26px;"></i></span>
                    </a>
                    <a class="ms-1" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="" aria-hidden="true"><i class="ms-1 bi bi-chevron-right" style="font-size: 26px;"></i></span>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Review',
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH'
      }
    },
    //this.$route.params.id
    mounted () {
        this.responseData = [
          { id: 1, url: "review-1", illustration: { url: "https://placehold.co/400x300/FF6603/FFFFFF/png?text=Review+1", alternativeText: "review" }, title: "ผลลัพธ์ดีเกินคาด", description: "ทีมงาน Sellsuki ช่วยให้ยอดขายออนไลน์เพิ่มขึ้น 300% ภายใน 3 เดือน", name: "คุณสมชาย ใจดี", position: "CEO, Brand XYZ" },
          { id: 2, url: "review-2", illustration: { url: "https://placehold.co/400x300/0F225A/FFFFFF/png?text=Review+2", alternativeText: "review" }, title: "บริการมืออาชีพ", description: "ประทับใจมากกับทีมงานที่ใส่ใจและให้คำปรึกษาอย่างตรงจุด", name: "คุณวารินทร์ สุขใจ", position: "Marketing Director, Company ABC" },
          { id: 3, url: "review-3", illustration: { url: "https://placehold.co/400x300/06C755/FFFFFF/png?text=Review+3", alternativeText: "review" }, title: "แนะนำอย่างยิ่ง", description: "LINE OA ที่ Sellsuki ทำให้ช่วยเพิ่มการมีส่วนร่วมกับลูกค้าได้มาก", name: "คุณนภา ทรัพย์สิน", position: "Owner, Shop DEF" }
        ]
    },
    methods:{
      scrollToTop() {
            window.scrollTo(0,0);
        },
    }
    
}
</script>

<style scoped>
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .image-review{
    height:350px;
    width:500px;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
  .text-review{
      font-size:32px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 0px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .image-review{
        height:350px;
        width:500px;
        object-fit: cover;
        border-radius: 0px 25px 25px 0px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .image-review{
    height:350px;
    width:100%;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .image-review{
    height:450px;
    width:100%;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
    .text-review{
      font-size:45px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 1.5;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .image-review{
    height:500px;
    width:450px;
    object-fit: cover;
    border-radius: 0px 25px 25px 0px;
  }
    .text-review{
      font-size:45px;
      font-weight:700;
      position: relative;
      color:#23233C;
      line-height: 1.5;
  }
}

a{
    color: #50151C;
    padding: 5px 10px;
}
.show-hover a:hover{
    background: #FF773B;
    border-radius: 50%;
}

a:hover{
    color: #50151C !important;
}

</style>