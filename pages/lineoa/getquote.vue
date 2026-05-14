<template>
    <div class="container">
        <div class="row mt-160">
            <div class="col-12 col-xl-6 px-4 px-xl-5">
                <span class="font-bd text-s-60"> สนใจรับคำปรึกษา </span>
                <p class="text-s-28 text-w-400 color-6B7280">
                    กรุณากรอกข้อมูลลงในแบบฟอร์มเพื่อขอรับใบเสนอราคา
                </p>
                <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                    <div class="row pt-3">
                        <div class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">ชื่อ - นามสกุล<span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="กรอกชื่อ - นามสกุล" :class="{
                                'border border-danger': validate && !form.name,
                            }" v-model="form.name" id="name" name="name" />
                            <div v-if="validate">
                                <p v-if="!form.name || form.name.startsWith(' ')"
                                    class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500">
                                    โปรดระบุชื่อของคุณให้ถูกต้อง
                                </p>
                            </div>
                        </div>
                        <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">อีเมล<span
                                    class="text-danger">*</span></label>
                            <input type="email" class="form-control" placeholder="กรอกอีเมล" :class="{
                                'border border-danger': validate && !form.email,
                            }" v-model="form.email" id="email" name="email" />
                            <div v-if="validate">
                                <p v-if="!form.email || form.email.startsWith(' ')"
                                    class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500">
                                    โปรดระบุ E-mail ของคุณให้ถูกต้อง
                                </p>
                            </div>
                        </div>
                        <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">เบอร์โทรศัพท์<span
                                    class="text-danger">*</span></label>
                            <input type="tel" pattern="[0-9]{10}" maxlength="10" class="form-control"
                                placeholder="กรอกเบอร์โทรศัพท์" :class="{
                                    'border border-danger': validate && !form.phone,
                                }" v-model="form.phone" id="phone" name="phone" />
                            <div v-if="validate">
                                <p v-if="!form.phone || form.phone.startsWith(' ')"
                                    class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500">
                                    โปรดระบุเบอร์โทรของคุณให้ถูกต้อง
                                </p>
                            </div>
                        </div>
                        <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">ชื่อแบรนด์ของคุณ?<span
                                    class="text-danger">*</span></label>
                            <input type="text" class="form-control" placeholder="กรอกชื่อแบรนด์" :class="{
                                'border border-danger': validate && !form.brand,
                            }" v-model="form.brand" id="brand" name="brand" />
                            <div v-if="validate">
                                <p v-if="!form.brand || form.brand.startsWith(' ')"
                                    class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500">
                                    โปรดระบุ E-mail ของคุณให้ถูกต้อง
                                </p>
                            </div>
                        </div>
                        <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">เลือกความต้องการ<span
                                    class="text-danger">*</span></label>
                            <select class="form-select" disabled :class="{
                                'border border-danger': validate && !form.interested,
                            }" placeholder="เลือกลักษณะธุรกิจ" v-model="form.interested" id="interested" name="interested">
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
                            <div v-if="validate">
                                <p v-if="!form.interested || form.interested.startsWith(' ')"
                                    class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500">
                                    โปรดระบุลักษณะธุรกิจของคุณให้ถูกต้อง
                                </p>
                            </div>
                        </div>
                        <div class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-3">
                            <label class="text-s-24 color-1F2937 line-height-24 text-w-500">ข้อความ</label>
                            <textarea v-model="form.message" class="form-control"
                                :class="{ 'border border-danger': validate && !form.message }" style="height: 130px"
                                placeholder="กรอกข้อความ" name="message" id="message"></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 d-flex justify-content-center mt-3">
                            <button v-if="isFormValid" type="submit" class="btn-center font-md text-s-24"
                                data-bs-target="#sussessModal" data-bs-toggle="modal" data-bs-dismiss="modal"
                                :class="{
                                    'btn-wizemoves': type === 'Wizemoves' || type === 'WizemovesMartech' || type === 'WizemovesConsult' || type === 'WizemovesContent' || type === 'WizemovesEdis' || type === 'WizemovesInfluence' || type === 'WizemovesData',
                                    'btn-line': type === 'LINEAgency',
                                    'btn-sellsuki': type === 'Akita' || type === 'Oc2plus' || type === 'Patona',
                                }"
                            >
                                ส่งข้อมูล
                            </button>
                            <button v-else type="submit" class="btn-center font-md text-s-24"
                                :class="{
                                    'btn-wizemoves': type === 'Wizemoves' || type === 'WizemovesMartech' || type === 'WizemovesConsult' || type === 'WizemovesContent' || type === 'WizemovesEdis' || type === 'WizemovesInfluence' || type === 'WizemovesData',
                                    'btn-line': type === 'LINEAgency',
                                    'btn-sellsuki': type === 'Akita' || type === 'Oc2plus' || type === 'Patona',
                                }"
                            >
                                ส่งข้อมูล
                            </button>
                        </div>
                        <div class="col-12 text-center">
                            <p class="text-s-24 color-1F2937 color-6B7280 mt-5">
                                Sellsuki จะปกป้องข้อมูลและความเป็นส่วนตัวของคุณ<br />
                                และติดต่อคุณเฉพาะตามความยิมยอม
                                <a class="color-6B7280" href="/policy" target="_blank" rel="noopener">Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-6 d-none d-xl-block">
                <div v-if="type === 'WizemovesMartech' || type === 'WizemovesConsult' || type === 'WizemovesContent' || type === 'WizemovesEdis' || type === 'WizemovesInfluence' || type === 'WizemovesData'">
                    <img class="img-fluid" src="~/assets/SolutionsWizemoves/problem.png" alt="problem" />
                </div>
                <div v-if="type === 'LINEAgency'">
                    <img class="img-fluid" src="~/assets/SolutionsLine/problem.png" alt="problem">
                </div>
                <div v-if="type === 'Akita'">
                    <img class="img-fluid" src="~/assets/event/problem.png" alt="problem">
                </div>
                <div v-if="type === 'Oc2plus'">
                    <img class="img-fluid" src="~/assets/event/problem.png" alt="problem">
                </div>
                <div v-if="type === 'Patona'">
                    <img class="img-fluid" src="~/assets/event/problem.png" alt="problem">
                </div>
            </div>
        </div>
        <SuccessForm :bu="type" />
    </div>
</template>

<script>
import SuccessForm from '@/components/Solutions/SuccessForm'

export default {
    name: 'lineoa-getquote',
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
                interested: this.$route.query.bu,
                message: '',
            },
            lang: this.$i18n.locale || 'th-TH',
            validate: false,
            checkbox: false,
            success: false,
            dataToken: [],
            path: '',
            type: this.$route.query.bu,
        }
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
            title: "form",
            route: process.env.MAIN_URL + this.$route.path,
            noindex: true
        });
    },
    mounted() {
        this.path = window.location.origin + window.location.pathname
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
        }
    },
    methods: {
        async submitForm() {
            // validate form
            const fields = ['name', 'phone', 'email', 'brand', 'interested', 'message']
            for (const field of fields) {
                if (!this.form[field] || this.form[field].startsWith(' ')) {
                    this.validate = true
                    return false
                }
            }

            let origin

            const interested = this.form.interested;
            const isSpecial = ['Oc2plus', 'Akita', 'Patona', 'LINEAgency'].includes(interested);
            origin = `${isSpecial ? interested : 'WM ' + interested}-LineOA`;

            // 1. สร้าง Form Entry ID
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const date = String(now.getDate()).padStart(2, '0');
            const time = String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
            
            // กำหนด [dep] ตามเงื่อนไข (ตัวอย่าง: WM หรือ LINE)
            const dep = 'LINEOA';
            const entryId = `${dep}${year}${month}${date}${time}`;

            this.success = true
        }
    }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

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

.btn-sellsuki {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #32A9FF !important;
    border: 1px solid #32A9FF !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}


.text-s-24 {
  line-height: 24px;
}
.text-s-28 {
  line-height: 100%;
}
.text-s-60 {
  line-height: 120%;
}
.text-danger {
  color: #dc2626 !important;
}
.mt-160 {
  margin-top: 100px;
}
.form-control {
  font-size: 24px;
  color: #1f2937;
}
.form-select {
  font-size: 24px;
  color: #1f2937;
}

input,
select {
  height: 40px !important;
  min-height: 40px !important;
  line-height: 40px !important;
  box-sizing: border-box;
}
select {
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .text-s-24 color-1F2937 {
    font-size: 20px !important;
    line-height: 20px;
  }
  .card-blog-ads {
    height: 100%;
  }
  .card-blog-ads {
    border-radius: 8px !important;
  }
  .mt-160{
    padding-bottom: 120px;
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
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
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
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}

@media only screen and (min-width: 1650px) {
  .card-blog-ads {
    height: 200px;
  }
  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}
</style>