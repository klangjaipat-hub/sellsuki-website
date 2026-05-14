<template>
  <div class="container">
    <div class="row mt-160">
      <div class="col-12 col-xl-6 px-4 pe-xl-5">
        <span class="font-bd text-s-60">
            สนใจรับคำปรึกษา
        </span>
        <p class="text-s-28 text-w-400 color-6B7280">
          กรุณากรอกข้อมูลลงในแบบฟอร์มเพื่อขอรับคำปรึกษาฟรี<br />
          พร้อมรับ Promotion พิเศษ!
        </p>
        <form 
            method="post"
            autocomplete="off"
            name="hello-sheet"
            v-on:submit.prevent="submitForm"
        >
          <div class="row pt-3">
            <div
              class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12"
            >
              <label
                class="text-s-24 color-1F2937 line-height-24 text-w-500"
                >ชื่อ - นามสกุล<span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                placeholder="กรอกชื่อ - นามสกุล"
                :class="{
                  'border border-danger': validate && !form.name,
                }"
                v-model="form.name"
                id="name"
                name="name"
              />
              <div v-if="validate">
                <p
                  v-if="!form.name || form.name.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500"
                >
                  โปรดระบุชื่อของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div
              class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3"
            >
              <label
                class="text-s-24 color-1F2937 line-height-24 text-w-500"
                >อีเมล</label
              >
              <input
                type="email"
                class="form-control"
                placeholder="กรอกอีเมล" 
                v-model="form.email"
                id="email"
                name="email"
              />
              <!-- <div v-if="validate">
                <p
                  v-if="!form.email || form.email.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500"
                >
                  โปรดระบุ E-mail ของคุณให้ถูกต้อง
                </p>
              </div> -->
            </div>
            <div
              class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-3"
            >
              <label
                class="text-s-24 color-1F2937 line-height-24 text-w-500"
                >เบอร์โทรศัพท์<span class="text-danger">*</span></label
              >
              <input
                type="tel"
                pattern="[0-9]{10}"
                maxlength="10"
                class="form-control"
                placeholder="กรอกเบอร์โทรศัพท์"
                :class="{
                  'border border-danger': validate && !form.phone,
                }"
                v-model="form.phone"
                id="phone"
                name="phone"
              />
              <div v-if="validate">
                <p
                  v-if="!form.phone || form.phone.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500"
                >
                  โปรดระบุเบอร์โทรของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div
              class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-3"
            >
              <label
                class="text-s-24 color-1F2937 line-height-24 text-w-500"
                >ชื่อแบรนด์ของคุณ?<span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                placeholder="กรอกชื่อแบรนด์"
                :class="{
                  'border border-danger': validate && !form.brand,
                }"
                v-model="form.brand"
                id="brand"
                name="brand"
              />
              <div v-if="validate">
                <p
                  v-if="!form.brand || form.brand.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 color-1F2937 line-height-24 text-w-500"
                >
                  โปรดระบุแบรนด์ของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div
              class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-3"
            >
              <label
                class="text-s-24 color-1F2937 line-height-24 text-w-500"
                >ข้อความ</label
              >
              <textarea
                v-model="form.message"
                class="form-control"
                style="height: 130px"
                placeholder="กรอกข้อความ"
                name="message"
                id="message"
              ></textarea>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12  d-flex justify-content-center mt-3">
              <button 
                v-if="isFormValid"
                type="submit"
                class="btn-center font-md text-s-24"
                data-bs-target="#sussessModal" data-bs-toggle="modal" data-bs-dismiss="modal"
              >
                ส่งข้อมูล
              </button>
              <button 
                v-else
                type="submit"
                class="btn-center font-md text-s-24"
              >
                ส่งข้อมูล
              </button>
            </div>
            <div class="col-12 text-center">
              <p class="text-s-24 color-1F2937 color-6B7280 mt-5">
                Sellsuki จะปกป้องข้อมูลและความเป็นส่วนตัวของคุณ<br />
                และติดต่อคุณเฉพาะตามความยิมยอม
                <a class="color-6B7280" href="/policy" target="_blank" rel="noopener"
                  >Privacy Policy</a
                >
              </p>
            </div>
          </div>
        </form>
      </div>
      <div class="col-6 d-none d-xl-block">
        <img class="img-fluid" src="~/assets/event/problem.png" alt="problem" style="margin-left: -30px;">
      </div>
    </div>
    <SuccessForm bu="event"/>
  </div>
</template>

<script>
import SuccessForm from '@/components/Solutions/SuccessForm'
export default {
  name: 'event',
  layout: null,
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
        message: '',
      },
      lang: this.$i18n.locale || 'th-TH',
      validate: false,
      checkbox: false,
      success: false,
      referrer: '',
      dataToken: [],
      path: ''
    }
  },
  mounted() {
    this.path = window.location.origin + window.location.pathname
    const cookieReferrer = this.$cookies.get('cookie-referrer')
    if (cookieReferrer == '' || cookieReferrer == undefined) {
      this.referrer = 'Direct'
    } else {
      this.referrer = cookieReferrer
    }
  },
  computed: {
    isFormValid() {
      if (
        this.form.name != '' &&
        this.form.phone != '' &&
        this.form.brand != '' &&
        this.form.interested != ''
      ) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    submitForm() {
      if (
        this.form.name.startsWith(' ') ||
        this.form.phone.startsWith(' ') ||
        this.form.email.startsWith(' ') ||
        this.form.brand.startsWith(' ') ||
        this.form.interested.startsWith(' ') ||
        this.form.message.startsWith(' ')
      ) {
        this.validate = true
        return false
      }
      if (
        this.form.name == '' ||
        this.form.phone == '' ||
        this.form.brand == '' ||
        this.form.interested == ''
      ) {
        this.validate = true
        return false
      }
      this.success = true
    },
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
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

.btn-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 40px;
  background: #32A9FF;
  color: #fff;
  border-radius: 24px;
  text-decoration: none;
  border: none;
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
