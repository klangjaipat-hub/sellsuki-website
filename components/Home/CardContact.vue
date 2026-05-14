<template>
    <div class="container padding-section">
        <div class="row">
            <div class="col-12">
                <div class="success-card">
                    <img src="~/assets/New/Home/FORM_02.png" alt="FORM_02.png"
                        style="position: absolute; left: 0;top:0">
                    <img src="~/assets/New/Home/FORM_03.png" alt="FORM_03.png"
                        style="position: absolute; right: 0;bottom:0">
                    <div class="row" style="z-index: 1;">
                        <div class="col-xl-6 col-12 ps-0 order-last order-xl-first">
                            <img class="img-fluid pe-xl-4 pe-0" src="~/assets/New/Home/Character.svg"
                                alt="Character.svg" />
                        </div>
                        <div class="col-xl-6 col-12">
                            <span class="font-bd text-s-60 mt-2">
                                เริ่มต้นความสำเร็จ ด้วยทีมผู้เชี่ยวชาญ
                            </span>
                            <p class="text-s-24 pt-2 text-w-400 color-6B7280">
                                กรุณากรอกข้อมูลลงในแบบฟอร์มเพื่อขอรับคำปรึกษาฟรี พร้อมรับ Promotion พิเศษ!
                            </p>
                            <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                                <div class="row">
                                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-xl-0 mt-4">
                                        <input type="text" class="form-control" placeholder="กรอกชื่อ - นามสกุล*"
                                            :class="{
                                                'border border-danger': validate && !form.name,
                                            }" v-model="form.name" id="name" name="name" />
                                        <div v-if="validate">
                                            <p v-if="!form.name || form.name.startsWith(' ')"
                                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                                โปรดระบุชื่อของคุณให้ถูกต้อง
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-xl-0 mt-4">
                                        <input type="email" class="form-control" placeholder="กรอกอีเมล*" :class="{
                                            'border border-danger': validate && !form.email,
                                        }" v-model="form.email" id="email" name="email" />
                                        <div v-if="validate">
                                            <p v-if="!form.email || form.email.startsWith(' ')"
                                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                                โปรดระบุ E-mail ของคุณให้ถูกต้อง
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                        <input type="tel" pattern="[0-9]{10}" maxlength="10" class="form-control"
                                            placeholder="กรอกเบอร์โทรศัพท์*" :class="{
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
                                        <input type="text" class="form-control"
                                            placeholder="กรอกเว็บไซต์ หรือ Facebook Page" :class="{
                                                'border border-danger': validate && !form.brand,
                                            }" v-model="form.brand" id="brand" name="brand" />
                                        <div v-if="validate">
                                            <p v-if="!form.brand || form.brand.startsWith(' ')"
                                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                                โปรดระบุแบรนด์ของคุณให้ถูกต้อง
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                        <select class="form-select" :class="{
                                            'border border-danger': validate && !form.interested,
                                        }" placeholder="บริการที่สนใจ*" v-model="form.interested" id="interested"
                                            name="interested">
                                            <option value="" disabled selected>เลือกลักษณะธุรกิจ</option>
                                            <option value="WizemovesAdvertising">
                                                บริการ Online Advertising
                                            </option>
                                            <option value="LINEAgency">
                                                บริการ LINE Agency ครบวงจร
                                            </option>
                                            <option value="WizemovesMartech">
                                                บริการ MarTech Solution
                                            </option>
                                            <option value="WizemovesContent">
                                                บริการ Content Marketing
                                            </option>
                                            <option value="WizemovesEdis">
                                                e-commerce solution (e-Dis)
                                            </option>
                                            <option value="WizemovesConsult">
                                                บริการ Business Consulting
                                            </option>
                                            <option value="WizemovesInfluence">
                                                บริการ Influencer Marketing
                                            </option>
                                            <option value="WizemovesData">
                                                บริการ Data Analysis
                                            </option>
                                            <option value="Oc2plus">
                                                บริการระบบ CRM เพื่อธุรกิจยุคใหม่
                                            </option>
                                            <option value="Akita">
                                                บริการ Fulfillment เก็บ แพ็ก ส่ง
                                            </option>
                                            <option value="Patona">
                                                บริการระบบจัดการร้านค้าครบวงจร
                                            </option>
                                        </select>
                                        <div v-if="validate">
                                            <p v-if="!form.interested || form.interested.startsWith(' ')"
                                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                                โปรดระบุลักษณะธุรกิจของคุณให้ถูกต้อง
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                        <input type="text" class="form-control" placeholder="เลือกงบประมาณต่อเดือน*"
                                            :class="{
                                                'border border-danger': validate && !form.budget,
                                            }" v-model="form.budget" id="budget" name="budget" />
                                        <div v-if="validate">
                                            <p v-if="!form.budget || form.budget.startsWith(' ')"
                                                class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                                                โปรดระบุงบประมาณของคุณให้ถูกต้อง
                                            </p>
                                        </div>
                                    </div>
                                    <div class="form-group mt-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="form.acceptPolicy"
                                                id="acceptPolicy" />
                                            <label class="form-check-label text-s-24" for="acceptPolicy">
                                                ข้าพเจ้าได้อ่านและยอมรับ <a href="#"
                                                    @click.prevent="showPolicyModal">นโยบายความเป็นส่วนตัว</a>
                                            </label>
                                        </div>
                                        <div v-if="validate && !form.acceptPolicy">
                                            <p class="text-danger text-s-24 mt-1">กรุณายอมรับ Privacy Policy
                                                ก่อนส่งข้อมูล</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-3">
                                    <div class="col-12  d-flex justify-content-md-start justify-content-center">
                                        <button v-if="isFormValid" type="submit" class="btn-gradient font-md text-s-28"
                                            data-bs-target="#sussessModal" data-bs-toggle="modal"
                                            data-bs-dismiss="modal">
                                            ส่งข้อมูล <img class="ms-2" src="~/assets/New/Home/paper-airplane.svg"
                                                alt="paper-airplane.svg">
                                        </button>
                                        <button v-else type="submit" class="btn-gradient font-md text-s-28">
                                            ส่งข้อมูล <img class="ms-2" src="~/assets/New/Home/paper-airplane.svg"
                                                alt="paper-airplane.svg">
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SuccessForm from '@/components/Solutions/SuccessForm'
export default {
    components: {
        SuccessForm
    },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                email: '',
                brand: '',
                interested: 'WizemovesAdvertising',
                budget: '',
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
        if (cookieReferrer == '' || cookieReferrer == undefined) {
            this.referrer = 'Direct'
        } else {
            this.referrer = cookieReferrer
        }
        //console.log("GetQuote = " + this.referrer)
    },
    computed: {
        isFormValid() {
            if (
                this.form.name != '' &&
                this.form.phone != '' &&
                this.form.email != '' &&
                this.form.brand != '' &&
                this.form.interested != '' &&
                this.form.budget != ''
            ) {
                return true
            } else {
                return false
            }
        },
    },
    methods: {
        async submitForm() {
            // validate form
            const fields = ['name', 'phone', 'email', 'brand', 'interested', 'budget']
            for (const field of fields) {
                if (!this.form[field] || this.form[field].startsWith(' ')) {
                    this.validate = true
                    return false
                }
            }

            let changeName
            if (this.form.interested === 'WizemovesAdvertising') {
                changeName = 'Ads'
            } else if (this.form.interested === 'WizemovesMartech') {
                changeName = 'MarTech'
            } else if (this.form.interested === 'WizemovesContent') {
                changeName = 'Content'
            } else if (this.form.interested === 'WizemovesEdis') {
                changeName = 'e-Dis'
            } else if (this.form.interested === 'WizemovesConsult') {
                changeName = 'Consulting'
            } else if (this.form.interested === 'WizemovesInfluence') {
                changeName = 'Influencer'
            } else if (this.form.interested === 'WizemovesData') {
                changeName = 'Data'
            } else {
                changeName = this.form.interested
            }

            // คำนวณ origin
            let ads = this.ads ? 'Ads' : 'Org'
            let origin
            if (this.blog) {
                origin = `Blog - ${this.blog}`
            } else {
                const isSpecial = ['Oc2plus', 'Akita', 'Patona', 'LINEAgency'].includes(this.form.interested)
                origin = `${isSpecial ? this.form.interested : 'WM ' + changeName}-${ads}`
            }

            // 1. สร้าง Form Entry ID
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const date = String(now.getDate()).padStart(2, '0');
            const time = String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
            
            // กำหนด [dep] ตามเงื่อนไข (ตัวอย่าง: WM หรือ LINE)
            const dep = 'HOME';
            const entryId = `${dep}${year}${month}${date}${time}`;

            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
                event: 'form_submit_success',
                name: this.$route.name,
                page_path: this.$route.path,
                entry_id: entryId
            })

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
    },
}
</script>
<style scoped>
@import url('~/assets/styles/css/customNew.css');

.text-ranbow,
.text-ranbow>* {
    background: linear-gradient(84.92deg, #F35C20 41.14%, #FB923C 50.69%, #58C6FF 57.79%, #01B1F5 68.43%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* .text-danger {
    position: absolute;
} */

.text-section {
    padding-left: 12px;
    padding-right: 12px;
    display: inline-block;
    width: auto;
    border: 1px solid #00000008;
    backdrop-filter: blur(10px);
    border-radius: 32px;
    background: #fff;
}

.form-control {
    font-size: 24px;
    color: #1F2937;
    height: 40px;
}

.form-select {
    font-size: 24px;
    color: #1F2937;
    height: 40px;
    padding: 2px 2.25rem .375rem .75rem;
}

.form-control::placeholder {
    font-size: 24px;
    color: #9CA3AF;
}

.form-select::placeholder {
    font-size: 24px;
    color: #9CA3AF;
    padding: 2px 2.25rem .375rem .75rem;
}

.btn-gradient {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px 0 24px;
    color: #fff !important;
    background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
    border: none;
    border-radius: 32px;
    box-shadow: 0 2px 8px 0 #ec5e2a22;
    cursor: pointer;
    transition: background 0.3s, box-shadow 0.3s;
    width: auto;
}

.success-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 16px;
}

.success-card {
    background: linear-gradient(260deg, #FED7AA 0%, #FFF 49.51%, #BCE8FF 99.02%);
}

a {
    color: #1B8BF5 !important;
}

@media (max-width: 767px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }

    .padding-section {
        padding-top: 48px;
        padding-bottom: 48px;
    }

    .success-card {
        padding: 50px 24px;
        min-height: 500px;
    }
}

@media (min-width: 768px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }

    .padding-section {
        padding-top: 120px !important;
        padding-bottom: 120px !important;
    }

    .success-card {
        padding: 40px 40px;
        min-height: 300px;
    }
}

@media (min-width: 1200px) {
    .text-s-28 {
        font-size: 28px !important;
        line-height: 28px !important;
    }

    .text-s-60 {
        font-size: 60px !important;
        line-height: 60px !important;
    }

    .text-s-24 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .btn-gradient {
        height: 48px;
        font-family: 'Heavent-med'
    }

    .padding-section {
        padding-top: 120px !important;
        padding-bottom: 120px !important;
    }

    .success-card {
        padding: 40px 40px;
        min-height: 465px;
    }
}
</style>
