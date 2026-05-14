<template>
    <div v-if="responseData.length" class="container mt-5">
        <div class="row fade-in-up" v-intersect>
            <div class="col-12">
                <h3 class="text-s-60 font-bd text-center color-main d-xl-block d-none">บทความที่เกี่ยวข้องกับบริการ</h3>
                <h3 class="text-s-44 font-bd text-center color-main d-xl-none d-block">บทความที่เกี่ยวข้องกับบริการ</h3>
            </div>
        </div>
        <div class="d-xl-block d-none fade-in-up" v-intersect>
            <div class="row mt-5">
                <div v-for="data in responseData" :key="data.id"
                    class="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-3 p-3">
                    <a :href="'https://www.sellsuki.co.th/blogs/detail/' + data.id + '/' + data.attributes.url"
                        :data-tag="'related-article-' + data.attributes.url" target="_blank" rel="noopener">
                        <div class="card">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.url" />
                            <div class="card-body pt-2">
                                <p class="text-s-18 color-9CA3AF">{{ dateTime(data.attributes.createdAt) }}, by Admin
                                </p>
                                <p class="font-bd text-s-28 text-limit-2 color-1F2937">{{ data.attributes.title }}</p>
                                <p class="text-limit-3 text-s-20" style="color:#64748B;">{{ data.attributes.description
                                    }}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="d-block d-xl-none fade-in-up" v-intersect style="padding-top: 50px;padding-bottom: 50px;">
            <ssr-carousel :slides-per-page="slidesPerPage" :breakpoints="{
                '768': {
                    slidesPerPage: 2
                },
                '320': {
                    slidesPerPage: 1
                }
            }" show-dots paginate-by-slide loop :autoplay-delay='5'>
                <div v-for="data in responseData" :key="data.id" class="slide p-4">
                    <a :href="'https://www.sellsuki.co.th/blogs/detail/' + data.id + '/' + data.attributes.url"
                        :data-tag="'related-article-' + data.attributes.url" target="_blank" rel="noopener">
                        <div class="card">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.url" />
                            <div class="card-body pt-2">
                                <p class="text-s-18 color-9CA3AF">{{ dateTime(data.attributes.createdAt) }}, by Admin
                                </p>
                                <p class="font-bd text-s-28 text-limit-2 color-1F2937">{{ data.attributes.title }}</p>
                                <p class="text-limit-3 text-s-20" style="color:#64748B;">{{ data.attributes.description
                                    }}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <template #dot="{ disabled }">
                    <div v-if="disabled == false" class="dot-carousel"></div>
                    <div v-if="disabled == true" class="dot-carousel-active"></div>
                </template>
            </ssr-carousel>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'BlogWizemoves',
    data() {
        return {
            windowWidth: 0,
            responseData: []
        }
    },
    computed: {
        slidesPerPage() {
            return this.windowWidth <= 576 ? 1 : 2
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
        handleResize() {
            this.windowWidth = window.innerWidth
        }
    },
    mounted() {
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
        this.windowWidth = window.innerWidth
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style scoped>
.card {
    background: #FFFFFF !important;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 8px !important;
    border: 0 !important;
}

.ssr-carousel-slides {
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
}

.card-img,
.card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card-body {
    min-height: 206px;
}

.dot-carousel-active {
    width: 32px;
    height: 8px;
    background-color: #6B7280;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.dot-carousel {
    width: 16px;
    height: 8px;
    background-color: #E5E7EB;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.mt-160 {
    margin-top: 160px;
}

.btn-transparent {
    border: 1px solid #FF0101;
}

a span {
    background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
    -webkit-background-clip: text;
  background-clip: text;
    background-clip: text;
}

.text-sellsuki-blog {
    background: linear-gradient(85.07deg, #FF6603 4.64%, #FF0101 97.73%);
    border-radius: 50px;
    padding: 0px 8px;
    gap: 8px;
    font-size: 16px !important;
    display: inline-block;
    margin-right: 8px;
    color: #F8FAFC !important;
    font-style: italic !important
}

.text-oc2plus-blog {
    background: linear-gradient(90deg, #1769E2 8.81%, #0FFFA9 105.74%);
    border-radius: 50px;
    padding: 0px 8px;
    gap: 8px;
    font-size: 16px !important;
    display: inline-block;
    margin-right: 8px;
    color: #F8FAFC;
    font-style: italic !important;
}

.position-text-blog {
    margin-top: -32px;
    margin-bottom: 10px;
    text-align: right;
}

.img-fix-size {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

a {
    color: #0F225A;
}

a:hover {
    color: #0F225A;
    -webkit-text-decoration: unset;
    text-decoration: unset;
}

.text-s-20 {
    line-height: 20px;
}

.text-s-18 {
    line-height: 18px;
}

.text-s-28 {
    line-height: 28px;
}

@media only screen and (max-width: 600px) {
    .mt-160 {
        margin-top: 60px !important;
    }
}
</style>