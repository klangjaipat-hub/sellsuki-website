<template>
    <div class="row">
        <div class="col-12">
            <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">ชื่อ - นามสกุล<span
                                class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="กรอกชื่อ - นามสกุล" :class="{
                            'border border-danger': validate && !form.name,
                        }" v-model="form.name" id="name" name="name" />
                        <div v-if="validate">
                            <p v-if="!form.name || form.name.startsWith(' ')"
                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                โปรดระบุชื่อของคุณให้ถูกต้อง
                            </p>
                        </div>
                    </div>
                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">Email<span
                                class="text-danger">*</span></label>
                        <input type="email" class="form-control" placeholder="กรอกอีเมล" :class="{
                            'border border-danger': validate && !form.email,
                        }" v-model="form.email" id="email" name="email" />
                        <div v-if="validate">
                            <p v-if="!form.email || form.email.startsWith(' ') || !isEmailValid"
                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                โปรดระบุ E-mail ของคุณให้ถูกต้อง
                            </p>
                        </div>
                    </div>
                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">เบอร์โทร<span
                                class="text-danger">*</span></label>
                        <input type="tel" pattern="[0-9]{10}" maxlength="10" class="form-control"
                            placeholder="กรอกเบอร์โทรศัพท์" :class="{
                                'border border-danger': validate && !form.phone,
                            }" v-model="form.phone" id="phone" name="phone" />
                        <div v-if="validate">
                            <p v-if="!form.phone || form.phone.startsWith(' ')"
                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                โปรดระบุเบอร์โทรของคุณให้ถูกต้อง
                            </p>
                        </div>
                    </div>
                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">ชื่อแบรนด์ของคุณ?<span
                                class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="กรอกชื่อแบรนด์" :class="{
                            'border border-danger': validate && !form.brand,
                        }" v-model="form.brand" id="brand" name="brand" />
                        <div v-if="validate">
                            <p v-if="!form.brand || form.brand.startsWith(' ')"
                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                โปรดระบุ E-mail ของคุณให้ถูกต้อง
                            </p>
                        </div>
                    </div>
                    <div class="form-group col-xxl-6 col-lg-6 col-md-6 col-12 mt-4" v-if="page === 'LINEAgency'">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">
                            เลือกความต้องการ<span class="text-danger">*</span>
                        </label>
                        <select class="form-select" v-model="form.interested" id="interested" name="interested" disabled>
                            <option value="WizemovesAdvertising">บริการ Online Advertising</option>
                            <option value="LINEAgency" selected>บริการ LINE Agency ครบวงจร</option>
                            <option value="WizemovesMartech">บริการ MarTech Solution</option>
                            <option value="WizemovesContent">บริการ Content Marketing</option>
                            <option value="WizemovesEdis">e-commerce solution (e-Dis)</option>
                            <option value="WizemovesConsult">บริการ Business Consulting</option>
                            <option value="WizemovesInfluence">บริการ Influencer Marketing</option>
                            <option value="WizemovesData">บริการ Data Analysis</option>
                            <option value="Oc2plus">บริการระบบ CRM เพื่อธุรกิจยุคใหม่</option>
                            <option value="Akita">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                            <option value="Patona">บริการระบบจัดการร้านค้าครบวงจร</option>
                        </select>
                    </div>

                    <!-- ถ้าไม่ใช่ LINEAgency ให้ใช้ select ตัวเดิม -->
                    <div class="form-group col-xxl-6 col-lg-6 col-md-6 col-12 mt-4" v-else>
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">
                            เลือกความต้องการ<span class="text-danger">*</span>
                        </label>
                        <select class="form-select" v-model="form.interested" id="interested" name="interested">
                            <option value="WizemovesAdvertising">บริการ Online Advertising</option>
                            <option value="LINEAgency">บริการ LINE Agency ครบวงจร</option>
                            <option value="WizemovesMartech">บริการ MarTech Solution</option>
                            <option value="WizemovesContent">บริการ Content Marketing</option>
                            <option value="WizemovesEdis">e-commerce solution (e-Dis)</option>
                            <option value="WizemovesConsult">บริการ Business Consulting</option>
                            <option value="WizemovesInfluence">บริการ Influencer Marketing</option>
                            <option value="WizemovesData">บริการ Data Analysis</option>
                            <option value="Oc2plus">บริการระบบ CRM เพื่อธุรกิจยุคใหม่</option>
                            <option value="Akita">บริการ Fulfillment เก็บ แพ็ก ส่ง</option>
                            <option value="Patona">บริการระบบจัดการร้านค้าครบวงจร</option>
                        </select>
                    </div>
                    <div class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-4">
                        <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">ข้อความ</label>
                        <textarea v-model="form.message" class="form-control mt-2"
                            :class="{ 'border border-danger': validate && !form.message }" style="height: 130px"
                            placeholder="กรอกข้อความ" id="message" name="message"></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <div class="col-12">
                            <div class="text-center mt-4">
                                <button v-if="isFormValid && isEmailValid" type="submit" class="btn" data-bs-target="#sussessModal"
                                    data-bs-toggle="modal" data-bs-dismiss="modal" :class="{
                                        'btn-wizemoves': page === 'Wizemoves',
                                        'btn-line': page === 'LINEAgency',
                                    }">
                                    <span class="text-white text-w-500 text-s-24">ส่งข้อมูล</span>
                                </button>
                                <button v-else type="submit" class="btn" :class="{
                                    'btn-wizemoves': page === 'Wizemoves',
                                    'btn-line': page === 'LINEAgency',
                                }">
                                    <span class="text-white text-w-500 text-s-24">ส่งข้อมูล</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <p class="text-s-24 color-6B7280 mt-4">
                            Wizemoves จะปกป้องข้อมูลและความเป็นส่วนตัวของคุณ<br />
                            และติดต่อคุณเฉพาะตามความยิมยอม
                            <a class="color-6B7280" href="/policy" target="_blank" rel="noopener">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormMain',
    props: ['interested', 'page', 'blog'],
    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                brand: '',
                interested: '',
                message: '',
            },
            lang: this.$i18n.locale || 'th-TH',
            validate: false,
            checkbox: false,
            success: false,
            referrer: '',
            path: '',
            ads: '',
        }
    },
    mounted() {
        const ads = sessionStorage.getItem('ads')
        this.ads = ads
        this.path = window.location.origin + window.location.pathname
        const cookieReferrer = this.$cookies.get('cookie-referrer')
        this.referrer = cookieReferrer || 'Direct'
        if (this.interested === undefined) {
            this.form.interested = 'WizemovesAdvertising'
        } else if (this.interested === "LINEAgency") {
            this.form.interested = this.interested
        } else {
            this.form.interested = this.interested
        }

    },
    computed: {
        isFormValid() {
            return (
                this.form.name &&
                this.form.phone &&
                this.form.email &&
                this.form.brand &&
                this.form.interested &&
                this.form.message
            )
        },
        isEmailValid() {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(this.form.email).toLowerCase());
        },
    },
    methods: {
        async submitForm() {
            this.validate = true;
            const fields = ['name', 'phone', 'email', 'brand', 'interested', 'message']
            for (const field of fields) {
                if (!this.form[field] || (typeof this.form[field] === 'string' && this.form[field].trim() === '')) {
                    return false
                }
            }

            if (!this.isEmailValid) {
                return false
            }

            // 1. สร้าง Form Entry ID
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const date = String(now.getDate()).padStart(2, '0');
            const time = String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
            
            // กำหนด [dep] ตามเงื่อนไข (ตัวอย่าง: WM หรือ LINE)
            const dep = this.page === 'LINEAgency' ? 'LINEAGENCY' : 'WIZEMOVES';
            const entryId = `${dep}${year}${month}${date}${time}`;

            // คำนวณ origin
            let ads = this.ads ? 'Ads' : 'Org'
            let origin
            if (this.blog) {
                origin = `Blog - ${this.blog}`
            } else {
                const isSpecial = ['Oc2plus', 'Akita', 'Patona', 'LINEAgency'].includes(this.form.interested)
                origin = `${isSpecial ? this.form.interested : 'WM ' + this.form.interested}-${ads}`
            }

            if (this.page) {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                    event: 'form_submit_success',
                    service: this.page,
                    name: this.$route.name,
                    page_path: this.$route.path,
                    entry_id: entryId
                })
            }
            if (this.page === 'LineAgency' && typeof _lt === 'function') {
                _lt('send', 'cv', { type: 'Purchase' }, ['57ac2111-e9e7-4ca5-95cf-3ed6e4b48590'])
            }

            this.success = true
            this.form = {
                name: '',
                phone: '',
                email: '',
                brand: '',
                interested: '',
                message: ''
            }
        }
    }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.text-s-24 {
    line-height: 24px;
}

.form-control {
    font-size: 24px;
    color: #1F2937;
}

.form-select {
    font-size: 24px;
    color: #1F2937;
}

.btn-wizemoves {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #7C3AED !important;
    border: 1px solid #7C3AED !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}

.btn-line {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #22C55E !important;
    border: 1px solid #22C55E !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .text-s-28 {
        font-size: 20px !important;
        line-height: 20px;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px;
    }

    .card-blog-ads {
        height: 100%;
    }

    .card-blog-ads {
        border-radius: 8px !important;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .card-blog-ads {
        height: 100%;
    }

    .card-blog-ads {
        border-radius: 8px !important;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .card-blog-ads {
        height: 100%;
    }

    .card-blog-ads {
        border-radius: 8px !important;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .card-blog-ads {
        height: 100%;
    }

    .card-blog-ads {
        border-radius: 8px !important;
        background: linear-gradient(90deg,
                #0c0e15 29.35%,
                rgba(12, 14, 21, 0) 38.46%),
            linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .card-blog-ads {
        height: 200px;
    }

    .card-blog-ads {
        border-radius: 8px !important;
        background: linear-gradient(90deg,
                #0c0e15 29.35%,
                rgba(12, 14, 21, 0) 38.46%),
            linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
    }
}

@media only screen and (min-width: 1650px) {
    .card-blog-ads {
        height: 200px;
    }

    .card-blog-ads {
        border-radius: 8px !important;
        background: linear-gradient(90deg,
                #0c0e15 29.35%,
                rgba(12, 14, 21, 0) 38.46%),
            linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
    }
}
</style>