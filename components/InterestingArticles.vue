<template>
    <div id="InterestingArticles" v-if="responseData.length != 0">
        <div class="p-5" style="padding-top: 40px !important;padding-bottom: 40px !important;background: linear-gradient(110.74deg, #52B8E2 0%, #3D90DD 75.34%);">
          <div class="row">
            <div class="d-none d-lg-block d-xl-block">
            <div class="text-center">
              <div style="font-size:30px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</div>
            </div>
            <carousel v-bind="options" :perPage="3">
              <slide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                <nuxt-link @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})" style="color:unset !important">
                    <div class="card">
                      <img v-if="data.attributes.illustration != null" class="card-img-top img-fix-size" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText" loading="lazy">
                      <div itemscope class="card-body">
                        <div itemprop="name" class="card-title text-limit-2" style="font-weight: bold;font-size: 20px;">{{data.attributes.title}}</div>
                        <p itemprop="desc" style="margin-bottom: 0rem;" class="card-text text-s-24 text-limit-3">{{data.attributes.description}}</p>
                        <nuxt-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})"><span class="m-auto">Read More</span></nuxt-link>
                      </div>
                    </div>
                </nuxt-link>
              </slide>
            </carousel>
            </div>
            <div class="d-block d-lg-none d-xl-none">
              <div class="text-center">
                <div style="font-size:26px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</div>
              </div>
              <carousel v-bind="options" :perPage="1">
                <slide v-for="(data, index) in responseData" :key="index" class="col-4 d-flex justify-content-center ps-2 pe-2" style="padding-top: 30px !important;">
                  <nuxt-link @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})" style="color:unset !important">
                      <div class="card">
                        <img v-if="data.attributes.illustration != null" class="card-img-top img-fix-size" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText" loading="lazy">
                        <div itemscope class="card-body">
                          <div itemprop="name" class="card-title text-limit-2" style="font-weight: bold;font-size: 20px;">{{data.attributes.title}}</div>
                          <p itemprop="desc" style="margin-bottom: 0rem;" class="card-text text-s-24 text-limit-3">{{data.attributes.description}}</p>
                          <nuxt-link class="btn btn-transparent hvr-back-pulse position-btn mt-1" @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})"><span class="m-auto">Read More</span></nuxt-link>
                        </div>
                      </div>
                  </nuxt-link>
                </slide>
              </carousel>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InterestingArticles',
    props: ['type'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH',
        //lang: 'th-TH',
        options: {
          loop: true,
          //perPage: 3,
          paginationEnabled: true,
          autoplay:true,
          autoplayTimeout: 5000
        }
      }
    },
    //this.$route.params.id
    mounted () {
        this.responseData = [
          {
            id: 1,
            attributes: {
              title: "5 กลยุทธ์การตลาดออนไลน์ที่ได้ผลในปี 2024",
              description: "เรียนรู้กลยุทธ์การตลาดดิจิทัลที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน",
              url: "5-digital-marketing-strategies-2024",
              createdAt: "2024-03-15T00:00:00.000Z",
              publishedAt: "2024-03-15T00:00:00.000Z",
              illustration: { data: { attributes: { url: "https://placehold.co/600x400/FF6603/FFFFFF/png?text=Blog+1", alternativeText: "blog image 1" } } },
              blog_tags: { data: [{ attributes: { name: "Digital Marketing" } }] },
              blog_category: { data: { id: 1, attributes: { name: "Marketing" } } }
            }
          },
          {
            id: 2,
            attributes: {
              title: "วิธีเพิ่มยอดขายออนไลน์ด้วย Social Commerce",
              description: "Social Commerce คืออะไรและทำไมถึงสำคัญต่อธุรกิจออนไลน์ของคุณ",
              url: "social-commerce-boost-sales",
              createdAt: "2024-02-20T00:00:00.000Z",
              publishedAt: "2024-02-20T00:00:00.000Z",
              illustration: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Blog+2", alternativeText: "blog image 2" } } },
              blog_tags: { data: [{ attributes: { name: "E-Commerce" } }] },
              blog_category: { data: { id: 2, attributes: { name: "E-Commerce" } } }
            }
          },
          {
            id: 3,
            attributes: {
              title: "LINE OA สำหรับธุรกิจ: คู่มือฉบับสมบูรณ์",
              description: "เปิดร้านค้าบน LINE OA และเชื่อมต่อกับลูกค้าได้อย่างมีประสิทธิภาพ",
              url: "line-oa-business-complete-guide",
              createdAt: "2024-01-10T00:00:00.000Z",
              publishedAt: "2024-01-10T00:00:00.000Z",
              illustration: { data: { attributes: { url: "https://placehold.co/600x400/06C755/FFFFFF/png?text=Blog+3", alternativeText: "blog image 3" } } },
              blog_tags: { data: [{ attributes: { name: "LINE" } }] },
              blog_category: { data: { id: 3, attributes: { name: "LINE Agency" } } }
            }
          },
          {
            id: 4,
            attributes: {
              title: "Data Analytics เพื่อการตัดสินใจทางธุรกิจ",
              description: "ใช้ข้อมูลเพื่อขับเคลื่อนธุรกิจและเพิ่มประสิทธิภาพการทำงาน",
              url: "data-analytics-business-decisions",
              createdAt: "2023-12-05T00:00:00.000Z",
              publishedAt: "2023-12-05T00:00:00.000Z",
              illustration: { data: { attributes: { url: "https://placehold.co/600x400/7B64AF/FFFFFF/png?text=Blog+4", alternativeText: "blog image 4" } } },
              blog_tags: { data: [{ attributes: { name: "Analytics" } }] },
              blog_category: { data: { id: 4, attributes: { name: "Technology" } } }
            }
          }
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
.card{
    background: #FFFFFF !important;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.20);
    border-radius: 8px !important;
    border:0 !important;
}
.card-img, .card-img-top{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.card-body{
    min-height: 230px;
}
.position-btn{
    margin-left: auto;
    margin-right: 10px;
    display: flex;
}

.img-fix-size{
    width: 100%;
    height: 250px !important;
    object-fit: cover;
}

.card-img, .card-img-top{
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .card{
      height: 400px !important;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card{
      height: 100% !important;
    }
}
</style>