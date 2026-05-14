<template>
    <div id="test">
        <div class="bg-blog-ads d-none d-md-block"
            :style="'background: url(' + responseDataAds.attributes.illustration.data.attributes.url + ')'">
            <div class="card-blog-ads p-4 ps-5 pe-5 ps-md-4 pe-md-4">
                <div class="text-s-44 text-w-500 color-FDFDFD font-bd mt-1">{{ responseDataAds.attributes.header }}</div>
                <div class="text-s-24 text-w-500 color-FDFDFD">{{ responseDataAds.attributes.description }}</div>
                <div v-if="status == false" class="mt-3 d-inline">
                    <form method="post" autocomplete="off" name="ads-sheet" @submit.prevent="handleFormSubmit">
                        <div class="form-group d-inline-block me-2" style="width: 460px;">
                            <input type="text" placeholder="เบอร์โทร" class="form-control mt-2 " v-model="email"
                                id="email" name="email" style="border-radius: 8px !important;">
                        </div>
                        <div class="form-group" style="display: none">
                            <input type="text" class="form-control" :value="responseDataAds.attributes.header"
                                id="title" name="title">
                        </div>
                        <button type="submit" class="btn-register" data-tag="submit-ads-desktop">
                            <span class="font-md text-s-24 text-w-500 ps-2 pe-2">รับคำปรึกหษาฟรี</span>
                        </button>
                    </form>
                </div>
                <div v-else class="mt-3">
                    <div class="me-2 mt-2 animate__animated animate__fadeIn"
                        style="width: 460px;background-color: #FFFFFF;border: 1px solid #E5E7EB;border-radius: 8px;">
                        <p class="font-md text-s-28 mb-0" style="padding: 8px 12px;line-height:28px;color:#F97316">
                            ขอบคุณ! เราจะส่งอีเมลแจ้งขั้นตอนถัดไปถึงคุณ</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-blog-ads d-block d-md-none"
            :style="'background: url(' + responseDataAds.attributes.illustration.data.attributes.url + ')'">
            <div class="card-blog-ads p-5 ps-3 pe-3">
                <div class="text-s-44 text-w-500 color-FDFDFD font-bd mt-1">{{ responseDataAds.attributes.header }}</div>
                <div class="text-s-24 text-w-500 color-FDFDFD">{{ responseDataAds.attributes.description }}</div>

                <div v-if="status == false" class="mt-3 mb-4">
                    <form method="post" autocomplete="off" name="ads-sheet-mobile" @submit.prevent="handleFormSubmit">
                        <div class="row">
                            <div class="col-12">
                                <input type="text" placeholder="เบอร์โทร" class="form-control mt-2" v-model="email"
                                    name="email" style="border-radius: 8px !important;">
                                <input type="text" class="form-control" :value="responseDataAds.attributes.header"
                                    name="title" style="display: none">
                            </div>
                            <div class="col-12 mt-3">
                                <button type="submit" class="btn btn-register-m w-100" data-tag="submit-ads-mobile">
                                    <span class="font-md text-s-24 text-w-500">รับคำปรึกหษาฟรี</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div v-else class="row mt-3 mb-4">
                    <div class="col-12">
                        <div class="me-2 animate__animated animate__fadeIn"
                            style="width: 100%;background-color: #FFFFFF;border: 1px solid #E5E7EB;border-radius: 8px;">
                            <p class="font-md text-s-28 mb-0" style="padding: 8px 12px;line-height:28px;color:#F97316">
                                ขอบคุณ! เราจะส่งอีเมลแจ้งขั้นตอนถัดไปถึงคุณ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Ads',
    props: ['responseDataAds'],
    data() {
        return {
            lang: this.$i18n.locale || 'th-TH',
            status: false,
            email: '',

        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        handleFormSubmit() {
            const scriptURL = "https://script.google.com/macros/s/AKfycbx9AiY8jk4FHYkxlTIOyWa9H2bRl9Iu4sBnboQNITyRhXBx5UyQBScnh0B1P9-3dUg/exec"
            const form = document.forms['ads-sheet']

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(this.status = true)
                .catch(error => console.error('Error!', error.message))
            //window.open('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/'+ this.$route.params.name, '_blank');

            if (this.status == true) {
                this.email = ''
            }
        }
    },
    //this.$route.params.id

}
</script>

<style scoped>
::placeholder {
    color: #9CA3AF !important;
}

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

.bg-blog-ads {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 8px !important;
}

.btn-register span {
    font-size: 24px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}

.btn-register {
    border: 1.5px solid #F35B1F;
    background: #F35B1F;
    border-radius: 8px !important;
    display: inline-block;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;
    padding: 13px 24px 11px 24px;
    display: inline;
}

.btn-register-m span {
    font-size: 24px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}

.btn-register-m {
    background: #F35B1F;
    border-radius: 8px !important;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    cursor: pointer;
    padding: 8px 30px;
    width: 100%;
}

.form-control {
    font-size: 24px !important;
    padding: 4px 14px !important;
}

.card-blog-ads {
    background: linear-gradient(180deg, rgba(138, 60, 24, 0.5) 0%, rgba(75, 42, 26, 0.3) 41.15%, rgba(255, 255, 255, 0) 100%);
    border-radius: 8px !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .card-blog-ads {
        height: 100%;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .card-blog-ads {
        height: 100%;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .card-blog-ads {
        height: 100%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .card-blog-ads {
        height: 100%;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card-blog-ads {
        height: 286px;
    }
}

@media only screen and (min-width: 1650px) {
    .card-blog-ads {
        height: 286px;
    }
}
</style>