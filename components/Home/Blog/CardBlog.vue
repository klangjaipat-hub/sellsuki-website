<template>
    <div class="container">
        <div class="d-none d-xl-block">
            <div class="row">
                <div v-for="data in responseData" :key="data.id"
                    class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                    <nuxt-link :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                        style="color:unset !important" :data-tag="'select-blog-desktop-' + data.id">
                        <div class="card" style="margin-bottom: 32px;">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.alternativeText" />
                            <div v-if="data.attributes.blog_tags.data.length != 0" class="position-text-blog">
                                <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data"
                                    :key="indexTag">
                                    <span v-if="indexTag == 0" class="tag-blog-1">{{ dataTag.attributes.name }}</span>
                                    <span v-if="indexTag == 1" class="tag-blog-2">{{ dataTag.attributes.name }}</span>
                                    <span v-if="indexTag == 2" class="tag-blog-3">{{ dataTag.attributes.name }}</span>
                                </div>
                            </div>
                            <div class="card-body pt-2 il-n">
                                <p class="mb-1 text-s-18 color-9CA3AF" style="text-transform: uppercase;">
                                    {{ dateTime(data.attributes.createdAt) }}</p>
                                <p class="text-s-28 text-w-500 font-md text-limit-2">{{ data.attributes.title }}</p>
                                <p class="text-limit-3 text-s-20 color-64748B mb-0 des">{{ data.attributes.description
                                }}
                                </p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="row d-block d-xl-none">
            <div class="col-12 text-center">
                <ssr-carousel v-if="responseData.length" :slides-per-page="1" :loop="true" :autoplay-delay="5" show-dots
                    paginate-by-slide :breakpoints="{
                        0: { slidesPerPage: 1 },      // Mobile < 768px
                        768: { slidesPerPage: 2.5 },  // Tablet 768px - 991px
                        992: { slidesPerPage: 3 }     // Desktop >= 992px
                    }">
                    <div class="slide" v-for="data in responseData" :key="data.id">
                        <nuxt-link
                            :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                            style="color:unset !important" :data-tag="'select-blog-mobile-' + data.id">
                            <div class="card" style="margin-bottom: 0px;">
                                <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                    :src="data.attributes.illustration.data.attributes.url"
                                    :alt="data.attributes.illustration.data.attributes.alternativeText" />

                                <div v-if="data.attributes.blog_tags.data.length != 0" class="position-text-blog">
                                    <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data"
                                        :key="indexTag">
                                        <span v-if="indexTag == 0" class="tag-blog-1">{{ dataTag.attributes.name
                                            }}</span>
                                        <span v-if="indexTag == 1" class="tag-blog-2">{{ dataTag.attributes.name
                                            }}</span>
                                        <span v-if="indexTag == 2" class="tag-blog-3">{{ dataTag.attributes.name
                                            }}</span>
                                    </div>
                                </div>

                                <div class="card-body pt-2 il-n">
                                    <p class="mb-1 text-s-18 color-9CA3AF" style="text-transform: uppercase;">
                                        {{ dateTime(data.attributes.createdAt) }}
                                    </p>
                                    <p class="text-s-28 text-w-500 font-md text-limit-2">{{ data.attributes.title }}</p>
                                    <p class="text-limit-3 text-s-20 color-64748B mb-0 des">
                                        {{ data.attributes.description }}
                                    </p>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>

                    <template #dot="{ disabled }">
                        <div v-if="disabled == false" class="dot-carousel"></div>
                        <div v-if="disabled == true" class="dot-carousel-active"></div>
                    </template>
                </ssr-carousel>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            responseData: [],
            url: '',
            lang: this.$i18n.locale || 'th-TH'
        }
    },
    methods: {
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
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
    }
}
</script>

<style scoped>
.hide-class {
    display: none;
}

.img-fix-size {
    width: 100%;
    height: 183px;
    object-fit: cover;
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

.card-img,
.card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card-body {
    min-height: 200px;
}

.card {
    background: #FFFFFF !important;
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
    border-radius: 8px !important;
    border: 0 !important;
}

.card-banner {
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
}

.position-text-blog {
    margin-top: -36px;
    margin-bottom: 10px;
    text-align: right;
}
</style>