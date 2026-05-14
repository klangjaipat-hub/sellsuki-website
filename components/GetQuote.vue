<template>
  <div id="GetQuote">
    <div class="d-none d-xl-block d-xxl-block">
      <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
        <div style="padding: 40px 80px 40px 80px">
          <div class="row">
            <div class="col-12">
              <div style="font-weight: 700;font-size: 44px;color:#ffffff">{{ $t('form.H1') }}</div>
              <hr style="width: 100%;height: 2px;color:#FFFFFF">
              <div style="font-weight: 400;font-size: 24px;color:#ffffff">{{ $t('form.H2') }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-7">
              <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                <div class="row mt-4">
                  <div class="form-group col-6">
                    <label class="text-s-24 text-white">{{ $t("form.FirstName") }}*</label>
                    <input v-model="form.fname" name="name" id="name" type="text" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.fname }"
                      :placeholder="$t('form.placeholderFirstName')">
                    <div v-if="validate">
                      <p v-if="!form.fname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-6">
                    <label class="text-s-24 text-white">{{ $t("form.LastName") }}*</label>
                    <input v-model="form.lname" type="text" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.lname }"
                      :placeholder="$t('form.placeholderLastName')">
                    <div v-if="validate">
                      <p v-if="!form.lname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-3">
                    <label class="text-s-24 text-white">{{ $t("form.Email") }}*</label>
                    <input v-model="form.email" type="email" name="email" id="email" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.email }"
                      :placeholder="$t('form.placeholderEmail')">
                    <div v-if="validate">
                      <p v-if="!form.email" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-3">
                    <label class="text-s-24 text-white">{{ $t("form.Tel") }}*</label>
                    <input v-model="form.tel" type="text" name="phone" id="phone" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.tel }" :placeholder="$t('form.placeholderTel')">
                    <div v-if="validate">
                      <p v-if="!form.tel" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-3">
                    <label class="text-s-24 text-white">{{ $t("form.Brand") }}*</label>
                    <input v-model="form.brand" type="text" name="brand" id="brand" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.brand }"
                      :placeholder="$t('form.placeholderBrand')">
                    <div v-if="validate">
                      <p v-if="!form.brand" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-6 mt-3">
                    <label class="text-s-24 text-white">{{ $t("form.interestedabout") }}*</label>
                    <select v-model="form.interested" name="interested" id="interested" class="form-select mt-2"
                      :class="{ 'border border-danger': validate && !form.interested }" placeholder="interested about*">
                      <option selected value="">interested about*</option>
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
                      <p v-if="!form.interested" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                  <div class="form-group col-12 mt-3">
                    <label class="text-s-24 text-white">{{ $t("form.Message") }}*</label>
                    <textarea v-model="form.message" name="message" id="message" class="form-control mt-2"
                      :class="{ 'border border-danger': validate && !form.message }" style="height:130px"
                      :placeholder="$t('form.placeholderMessage')"></textarea>
                    <div v-if="validate">
                      <p v-if="!form.message" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                    </div>
                  </div>
                </div>
                <div class="text-center" style="width: 100%;margin-top:32px">
                  <button type="submit" class="btn-orange hvr-back-pulse" :disabled="isLoading"><span v-if="isLoading">Loading...</span><span v-else>Submit</span></button>
                </div>
              </form>
            </div>
            <div class="col-5">
              <img class="mt-4"
                src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/GET_A_QUOTE_db09b3e246.webp"
                alt="GET A QUOTE" loading="lazy" style="position: relative;margin-left:-25px">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-xl-none d-xxl-none">
      <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
        <div class="bg" style="padding: 20px 20px 20px 20px">
          <div class="row ps-5 pe-5 pb-2">
            <div class="col-12 text-center">
              <div style="font-weight: 700;font-size: 24px;color:#ffffff">{{ $t('form.H1') }}</div>
              <hr style="width: 100%;height: 2px;color:#FFFFFF">
              <div style="font-weight: 400;font-size: 20px;color:#ffffff">{{ $t('form.H2') }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <form v-on:submit.prevent="submitForm">
                <div class="form-group col-12">
                  <label class="text-s-24 text-white">{{ $t("form.FirstName") }}*</label>
                  <input v-model="form.fname" type="text" name="name" id="name" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.fname }"
                    :placeholder="$t('form.placeholderFirstName')">
                  <div v-if="validate">
                    <p v-if="!form.fname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.LastName") }}*</label>
                  <input v-model="form.lname" type="text" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.lname }"
                    :placeholder="$t('form.placeholderLastName')">
                  <div v-if="validate">
                    <p v-if="!form.lname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.Email") }}*</label>
                  <input v-model="form.email" type="email" name="email" id="email" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.email }"
                    :placeholder="$t('form.placeholderEmail')">
                  <div v-if="validate">
                    <p v-if="!form.email" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.Tel") }}*</label>
                  <input v-model="form.tel" type="text" name="phone" id="phone" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.tel }" :placeholder="$t('form.placeholderTel')">
                  <div v-if="validate">
                    <p v-if="!form.tel" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.Brand") }}*</label>
                  <input v-model="form.brand" type="text" name="brand" id="brand" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.brand }"
                    :placeholder="$t('form.placeholderBrand')">
                  <div v-if="validate">
                    <p v-if="!form.brand" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.interestedabout") }}*</label>
                  <select v-model="form.interested" name="interested" id="interested" class="form-select mt-2"
                    :class="{ 'border border-danger': validate && !form.interested }" placeholder="interested about*">
                    <option selected value="">interested about*</option>
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
                    <p v-if="!form.interested" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="form-group col-12 mt-3">
                  <label class="text-s-24 text-white">{{ $t("form.Message") }}*</label>
                  <textarea v-model="form.message" name="message" id="message" class="form-control mt-2"
                    :class="{ 'border border-danger': validate && !form.message }" style="height:130px"
                    :placeholder="$t('form.placeholderMessage')"></textarea>
                  <div v-if="validate">
                    <p v-if="!form.message" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                  </div>
                </div>
                <div class="text-center mt-4 mb-2" style="width: 100%">
                  <button type="submit" class="btn-orange hvr-back-pulse"
                    style="width: 150px !important" :disabled="isLoading"><span v-if="isLoading">Loading...</span><span v-else>Submit</span></button>
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
export default {
  name: 'GetQuote',
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        tel: '',
        email: '',
        brand: '',
        interested: '',
        message: ''
      },
      validate: false,
      referrer: '',
      pageName: '',
      isLoading: false
    }
  },
  mounted() {
    if (this.$route.path.slice(1) !== "") {
      this.pageName = this.$route.path.slice(1)
    } else {
      this.pageName = 'Home'
    }
    console.log(this.pageName);
    const cookieReferrer = this.$cookies.get('cookie-referrer')
    if (cookieReferrer == '' || cookieReferrer == undefined) {
      this.referrer = "Direct"
    }
    else {
      this.referrer = cookieReferrer
    }
    //console.log("GetQuote = " + this.referrer)
  },
  methods: {
    async submitForm() {
      if (this.form.fname == '' || this.form.lname == '' || this.form.tel == '' || this.form.email == '' || this.form.brand == '' || this.form.interested == '' || this.form.message == '') {
        this.validate = true
        return false
      }
      if (this.form.fname != '' && this.form.lname != '' && this.form.tel != '' && this.form.email != '' && this.form.brand != '' && this.form.interested != '' && this.form.message != '') {
        this.isLoading = true

        // 1. สร้าง Form Entry ID
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const time = String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
        
        // กำหนด [dep] ตามเงื่อนไข (ตัวอย่าง: WM หรือ LINE)
        const dep = 'AKITA';
        const entryId = `${dep}${year}${month}${date}${time}`;

        this.success = true
          this.form.fname = ''
          this.form.lname = ''
          this.form.tel = ''
          this.form.email = ''
          this.form.message = ''
          this.form.brand = ''
          this.form.interested = ''
          this.isLoading = false

          this.$router.push({ path: '/thankyou/all' })
      }
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/GET_A_QUOTE_2_2d7a8b05a4.webp');
  background-position: center;
  background-repeat: no-repeat;
}
</style>