<template>
    <div id="RelatedPosts">
        <div class="row mt-5 mb-5">
            <div class="col-6 pe-4">
                <div v-for="(data, index) in back()" :key="index">
                    <div v-if="index == 0" class="d-inline">
                        <nuxt-link class="d-inline d-md-none" @click="scrollToTop"
                            :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                            style="color:unset !important" data-tag="previous-post-mobile">
                            <img class="mb-1" src="../../assets/icon/navigate-back.svg" /> <span
                                class="text-s-24 ms-2">Previous</span>
                        </nuxt-link>
                        <nuxt-link @click="scrollToTop" class="text-limit-2 d-flex"
                            :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                            style="color:unset !important" data-tag="previous-post-desktop">
                            <img class="d-none d-md-inline" src="../../assets/icon/navigate-back.svg" />
                            <span class="text-s-24 text-w-700">{{ data.attributes.title }}</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="col-6 ps-4 text-end">
                <div v-for="(data, index) in next()" :key="index">
                    <nuxt-link v-if="index === 0" class="d-inline d-md-none" @click="scrollToTop"
                        :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                        style="color:unset !important" data-tag="next-post-mobile">
                        <span class="text-s-24 me-2">Next</span><img class="mb-1"
                            src="../../assets/icon/navigate-next.svg" />
                    </nuxt-link>
                    <div v-if="index == 0" class="d-inline">
                        <nuxt-link @click="scrollToTop" class="text-limit-2 d-flex"
                            :to="localePath({ path: '/blogs/detail/' + data.id + '/' + data.attributes.url + '' })"
                            style="color:unset !important" data-tag="next-post-desktop">
                            <span class="text-s-24 text-w-700">{{ data.attributes.title }}</span>
                            <img class="d-none d-md-inline" src="../../assets/icon/navigate-next.svg" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RelatedPosts',
    props: ['CategoryId', 'Id'],
    data() {
        return {
            responseData: [],
            url: '',
            lang: this.$i18n.locale || 'th-TH'
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        getBycate() {
            const res = this.responseData.filter(s => s.id != this.Id)
            return res
        },
        next() {
            const res = this.responseData.filter(s => s.id > this.Id)
            console.log(res);
            return res
        },
        back() {
            const res = this.responseData.filter(s => s.id < this.Id)
            return res
        }
    },
    //this.$route.params.id
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
    height: 203px;
    object-fit: cover;
}

.card {
    background: #FFFFFF !important;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.20);
    border-radius: 8px !important;
    border: 0 !important;
}

.card-img,
.card-img-top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.card-body {
    min-height: 200px;
}

.position-text-blog {
    margin-top: -36px;
    margin-bottom: 10px;
    text-align: right;
}
</style>