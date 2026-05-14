 <template>
    <div id="RelatedPosts">               
        <div class="row pt-2 pb-5 p-4 p-lg-0 font-df" style="justify-content: center;">
            <div class="text-s-36 font-md mt-1 mb-3">{{ $t("Blog.More_from_category") }}</div>
            <div v-if="type == 'Portfolio'" class="row">
                <!-- <div v-for="data in responseData" :key="data.id" :class="{'hide-class':Id == data.id}" class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                    <nuxt-link @click="scrollToTop" :to="localePath({ path: '/portfolios/detail/'+data.id+'/'+data.url+''})">
                        <div class="row p-2">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <img v-if="data.illustration != null" class="img-fix-size" :src="data.illustration.url" :alt="data.illustration.alternativeText" loading="lazy">
                            </div>
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 p-2">
                                <div class="text-w-700 text-limit-3 text-s-20 color-15304E">{{data.title}}</div>
                                <hr style="margin: 10px 10px 10px 0px;opacity: 0.1 !important;"/>
                                <p class="text-s-14 text-limit-3" style="color:#373737">{{data.description}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div> -->
            </div>
            <div v-else class="row">
                <div v-for="data in responseData" :key="data.id" class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <nuxt-link @click="scrollToTop" :to="localePath({ path: '/blogs/detail/'+data.id+'/'+data.attributes.url+''})" style="color:unset !important">
                        <div class="card" style="margin-bottom: 32px;">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top" :src="data.attributes.illustration.data.attributes.url" :alt="data.attributes.illustration.data.attributes.alternativeText"/>
                            <div v-if="data.attributes.blog_tags.data.length != 0" class="position-text-blog">
                                <div class="d-inline" v-for="(dataTag, indexTag) in data.attributes.blog_tags.data" :key="indexTag">
                                    <span v-if="indexTag == 0" class="tag-blog-1">{{dataTag.attributes.name}}</span>
                                    <span v-if="indexTag == 1" class="tag-blog-2">{{dataTag.attributes.name}}</span>
                                    <span v-if="indexTag == 2" class="tag-blog-3">{{dataTag.attributes.name}}</span>
                                </div>
                            </div>
                            <div class="card-body pt-2 il-n">
                                <p class="mb-1 text-s-18 color-9CA3AF" style="text-transform: uppercase;">{{dateTime(data.attributes.createdAt)}}</p>
                                <p class="text-s-28 text-w-500 font-md text-limit-2">{{data.attributes.title}}</p>
                                <p class="text-limit-3 text-s-20 color-64748B mb-0 des">{{data.attributes.description}}</p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name: 'RelatedPosts',
    props: ['type','CategoryName','Id'],
    data() {
      return {
        responseData:[],
        url:'',
        lang: this.$i18n.locale || 'th-TH'
      }
    },
    methods : {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
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
          }
        ]
    }

}
</script>

<style scoped>
.hide-class{
    display: none;
}
.img-fix-size{
    width: 100%;
    height: 203px;
    object-fit: cover;
}
.card-img, .card-img-top{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.card-body{
    min-height: 220px;
}
.card{
    background: #FFFFFF !important;
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
    border-radius: 8px !important;
    border:0 !important;
}
.card-banner{
    box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.09), 0px 1px 2px 0px rgba(17, 24, 39, 0.07), 0px 3px 3px 0px rgba(17, 24, 39, 0.05), 0px 7px 4px 0px rgba(17, 24, 39, 0.03), 0px 12px 5px 0px rgba(17, 24, 39, 0.01), 0px 19px 5px 0px rgba(17, 24, 39, 0.00);
}
.position-text-blog{
    margin-top: -36px;
    margin-bottom: 10px;
    text-align: right;
}
</style>