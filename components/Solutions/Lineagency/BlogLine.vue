<template>
    <div class="container mt-160">
        <div class="row fade-in-up" v-intersect>
            <div class="col-12">
                <h3 class="text-s-60 font-bd text-center color-main d-md-block d-none">บทความที่เกี่ยวข้องกับบริการ</h3>
                <h3 class="text-s-44 font-bd text-center color-main d-md-none d-block">บทความที่เกี่ยวข้องกับบริการ</h3>
            </div>
        </div>
        <div class="d-md-block d-none fade-in-up" v-intersect>
            <div class="row mt-5">
                <div v-for="data in responseData" :key="data.id"
                    class="col-lg-3 col-md-6 col-sm-6 col-12 mt-lg-0 mt-3 p-3">
                    <a :href="'https://www.sellsuki.co.th/blogs/detail/' + data.id + '/' + data.attributes.url"
                        target="_blank" rel="noopener" :data-tag="'related-article-card-' + data.attributes.url">
                        <div class="card">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.url" />
                            <div class="card-body pt-2">
                                <p class="text-s-18 color-9CA3AF">{{ dateTime(data.attributes.createdAt) }}, by Admin</p>
                                <p class="font-bd text-s-28 text-limit-2 color-1F2937">{{ data.attributes.title }}</p>
                                <p class="text-limit-3 text-s-20" style="color:#64748B;">{{ data.attributes.description }}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="responseData && responseData.length" class="d-block d-md-none p-4 fade-in-up" v-intersect style="padding-top: 50px;padding-bottom: 50px;">
            <ssr-carousel :slides-per-page='1' show-dots paginate-by-slide loop :autoplay-delay='5'>
                <div v-for="data in responseData" :key="data.id" class="slide">
                    <a :href="'https://www.sellsuki.co.th/blogs/detail/' + data.id + '/' + data.attributes.url"
                        target="_blank" rel="noopener" :data-tag="'related-article-card-' + data.attributes.url">
                        <div class="card">
                            <img v-if="data.attributes.illustration != null" class="img-fix-size card-img-top"
                                :src="data.attributes.illustration.data.attributes.url"
                                :alt="data.attributes.illustration.data.attributes.url" />
                            <div class="card-body pt-2">
                                <p class="text-s-18 color-9CA3AF">{{ dateTime(data.attributes.createdAt) }}, by Admin</p>
                                <p class="font-bd text-s-28 text-limit-2 color-1F2937">{{ data.attributes.title }}</p>
                                <p class="text-limit-3 text-s-20" style="color:#64748B;">{{ data.attributes.description }}
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
    name: 'BlogLine',
    props: ['responseData'],
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        dateTime(value) {
            return moment(value).format('DD MMM YYYY');
        },
    },
    mounted() {

    }
}
</script>

<style scoped>
.card {
    background: #FFFFFF !important;
    box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
    border-radius: 8px !important;
    border: 0 !important;
}

.ssr-carousel-slides {
    box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
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
    background-color: #22C55E;
    border-radius: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 5px;
}

.dot-carousel {
    width: 16px;
    height: 8px;
    background-color: #86EFAC;
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