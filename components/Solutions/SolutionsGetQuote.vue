<template>
  <div id="SolutionsGetQuote">
    <div>
      <div class="d-none d-lg-block">
        <div style="background: #F2F3F5">
          <div style="padding: 40px 80px 40px 80px">
            <div class="row">
              <div class="col-7">
                <div class="font-wght text-s-44" style="color:#373737">{{ $t('form.H1') }}</div>
                <hr style="width: 100%;height: 2px;color:#373737">
                <h2 style="font-weight: 400;font-size: 24px;color:#373737">{{ $t('form.H2') }}</h2>
                <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-24 text-text-dark">{{ $t("form.FirstName") }}*</label>
                      <input v-model="form.fname" name="name" id="name" type="text" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.fname }"
                        :placeholder="$t('form.placeholderFirstName')">
                      <div v-if="validate">
                        <p v-if="!form.fname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-24 text-dark">{{ $t("form.LastName") }}*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.lname }"
                        :placeholder="$t('form.placeholderLastName')">
                      <div v-if="validate">
                        <p v-if="!form.lname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Email") }}*</label>
                      <input v-model="form.email" name="email" id="email" type="email" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.email }"
                        :placeholder="$t('form.placeholderEmail')">
                      <div v-if="validate">
                        <p v-if="!form.email" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Tel") }}*</label>
                      <input v-model="form.tel" type="text" name="phone" id="phone" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.tel }"
                        :placeholder="$t('form.placeholderTel')">
                      <div v-if="validate">
                        <p v-if="!form.tel" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Brand") }}*</label>
                      <input v-model="form.brand" type="text" name="brand" id="brand" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.brand }"
                        :placeholder="$t('form.placeholderBrand')">
                      <div v-if="validate">
                        <p v-if="!form.brand" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-24 text-dark">{{ $t("form.interestedabout") }}*</label>
                      <select v-model="form.interested" name="interested" id="interested" class="form-select mt-2" disabled
                        :class="{ 'border border-danger': validate && !form.interested }" placeholder="interested about*">
                        <option disabled value="">interested about*</option>
                        <option value="Fuse">
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
                      <label class="text-s-24 text-dark">{{ $t("form.Message") }}*</label>
                      <textarea v-model="form.message" name="message" id="message" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.message }" style="height:130px"
                        :placeholder="$t('form.placeholderMessage')"></textarea>
                      <div v-if="validate">
                        <p v-if="!form.message" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-solution text-s-24 button" :class="{
                      'fuse-color': type === 'Fuse',
                      'line-color': type === 'Line',
                      'akita-color': type === 'Akita',
                      'beary-color': type === 'Beary',
                      'kaikong-color': type === 'Kaikong',
                      'shipmunk-color': type === 'Shipmunk',
                      'oc2plus-color': type === 'Oc2plus',
                    }"><span>Submit</span></button>
                  </div>
                </form>
              </div>
              <div class="col-5 text-center">
                <div v-if="type === 'Fuse'">
                  <img class="item-center cover-img" width="190" height="90"
                    src="./../../assets/SolutionsFuse/logo.webp" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsFuse/Fuse-qrcode.webp"
                    alt="Fuse-qrcode">
                  <img class="position-bu mt-5" src="./../../assets/SolutionsFuse/Fuse-bu.webp" alt="Fuse-bu">
                </div>
                <div v-if="type === 'Line'">
                  <img class="item-center cover-img" width="320" height="45" src="./../../assets/SolutionsLine/logo.svg"
                    alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsLine/Line-qrcode.webp"
                    alt="Line-qrcode">
                  <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.webp" alt="">
                </div>
                <div v-if="type === 'Akita'">
                  <img class="item-center cover-img" width="250" height="90"
                    src="./../../assets/SolutionsAkita/logo.webp" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsAkita/Akita-qrcode.webp"
                    alt="Akita-qrcode">
                  <img class="position-bu" width="220" src="./../../assets/SolutionsAkita/Akita-bu.webp" alt="Akita-bu">
                </div>
                <div v-if="type === 'Beary'">
                  <img class="item-center cover-img" width="190" height="90"
                    src="./../../assets/SolutionsBeary/logo.svg" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsBeary/Beary-qrcode.webp"
                    alt="Beary-qrcode">
                  <img class="position-bu" width="220" src="./../../assets/SolutionsBeary/Beary-bu.webp" alt="Beary-bu">
                </div>
                <div v-if="type === 'Kaikong'">
                  <img class="item-center" src="./../../assets/SolutionsKaikong/logo.webp" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/SolutionsKaikong/Kaikong-qrcode.webp"
                    alt="Kaikong-qrcode">
                  <img class="position-bu" width="220" src="./../../assets/SolutionsKaikong/Kaikong-bu.webp"
                    alt="Kaikong-bu">
                </div>
                <div v-if="type === 'Shipmunk'">
                  <img class="item-center cover-img" width="190" height="100"
                    src="./../../assets/SolutionsShipmunk/logo.svg" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.webp"
                    alt="qr-code-sellsuki">
                  <img class="position-bu mt-4" width="220" src="./../../assets/SolutionsShipmunk/Shipmunk-bu.webp"
                    alt="Shipmunk-bu">
                </div>
                <div v-if="type === 'Oc2plus'">
                  <img class="item-center cover-img" width="210" height="80"
                    src="./../../assets/SolutionsOc2plus/logo.svg" alt="logo">
                  <p class="text-s-24 mt-3" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
                  <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.webp"
                    alt="qr-code-sellsuki">
                  <img class="position-bu mt-3" width="300" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp"
                    alt="Oc2plus-bu">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-lg-none">
        <div class="p-3">
          <div class="card-mobile">
            <div class="bg" style="padding: 20px 20px 20px 20px">
              <div class="row ps-5 pe-5 pt-4 pb-2">
                <div class="col-12 text-center">
                  <div class="font-wght text-s-700 text-s-24" style="color:#373737">{{ $t('form.H1') }}</div>
                  <hr class="ms-auto me-auto" style="width: 70%;height: 2px;color:#373737">
                  <div class="text-s-24 mt-2" style="color:#373737">{{ $t('form.H2') }}</div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
                    <div class="form-group col-12">
                      <label class="text-s-24 text-text-dark">{{ $t("form.FirstName") }}*</label>
                      <input v-model="form.fname" name="name" id="name" type="text" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.fname }"
                        :placeholder="$t('form.placeholderFirstName')">
                      <div v-if="validate">
                        <p v-if="!form.fname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.LastName") }}*</label>
                      <input v-model="form.lname" type="text" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.lname }"
                        :placeholder="$t('form.placeholderLastName')">
                      <div v-if="validate">
                        <p v-if="!form.lname" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Email") }}*</label>
                      <input v-model="form.email" type="email" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.email }"
                        :placeholder="$t('form.placeholderEmail')">
                      <div v-if="validate">
                        <p v-if="!form.email" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Tel") }}*</label>
                      <input v-model="form.tel" type="text" name="phone" id="phone" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.tel }"
                        :placeholder="$t('form.placeholderTel')">
                      <div v-if="validate">
                        <p v-if="!form.tel" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.Brand") }}*</label>
                      <input v-model="form.brand" type="text" name="brand" id="brand" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.brand }"
                        :placeholder="$t('form.placeholderBrand')">
                      <div v-if="validate">
                        <p v-if="!form.brand" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-24 text-text-dark">{{ $t("form.interestedabout") }}*</label>
                      <select v-model="form.interested" name="interested" id="interested" class="form-select mt-2" disabled
                        :class="{ 'border border-danger': validate && !form.interested }" placeholder="interested about*">
                        <option disabled value="">interested about*</option>
                        <option value="Fuse">
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
                      <label class="text-s-24 text-text-dark">{{ $t("form.Message") }}*</label>
                      <textarea v-model="form.message" name="message" id="message" class="form-control mt-2"
                        :class="{ 'border border-danger': validate && !form.message }" style="height:130px"
                        :placeholder="$t('form.placeholderMessage')"></textarea>
                      <div v-if="validate">
                        <p v-if="!form.message" class="text-danger mb-0">{{ $t('form.Pleasespecify') }}</p>
                      </div>
                    </div>
                    <div class="text-center mt-4 mb-2" style="width: 100%">
                      <button type="submit" class="btn-solution text-s-24 button" :class="{
                        'fuse-color': type === 'Fuse',
                        'line-color': type === 'Line',
                        'akita-color': type === 'Akita',
                        'beary-color': type === 'Beary',
                        'kaikong-color': type === 'Kaikong',
                        'shipmunk-color': type === 'Shipmunk',
                        'oc2plus-color': type === 'Oc2plus',
                      }"><span>Submit</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4" style="height: 655px;">
          <div v-if="type === 'Fuse'">
            <img class="item-center" src="./../../assets/SolutionsFuse/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/SolutionsFuse/Fuse-qrcode.webp" alt="Fuse-qrcode">
            <img class="position-bu mt-5" src="./../../assets/SolutionsFuse/Fuse-bu.webp" alt="Fuse-bu">
          </div>
          <div v-if="type === 'Line'">
            <img class="item-center" src="./../../assets/SolutionsLine/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/SolutionsLine/Line-qrcode.webp" alt="Line-qrcode">
            <img class="position-bu" src="./../../assets/SolutionsLine/Line-bu.webp" alt="Line-bu">
          </div>
          <div v-if="type === 'Akita'">
            <img class="item-center cover-img" width="230" height="75" src="./../../assets/SolutionsAkita/logo.webp"
              alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/SolutionsAkita/Akita-qrcode.webp"
              alt="Akita-qrcode">
            <img class="position-bu" src="./../../assets/SolutionsAkita/Akita-bu.webp" alt="Akita-bu">
          </div>
          <div v-if="type === 'Beary'">
            <img class="item-center" src="./../../assets/SolutionsBeary/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/SolutionsBeary/Beary-qrcode.webp"
              alt="Beary-qrcode.webp">
            <img class="position-bu" src="./../../assets/SolutionsBeary/Beary-bu.webp" alt="Beary-bu">
          </div>
          <div v-if="type === 'Kaikong'">
            <img class="item-center" src="./../../assets/SolutionsKaikong/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/SolutionsKaikong/Kaikong-qrcode.webp"
              alt="Kaikong-qrcode">
            <img class="position-bu" width="120" src="./../../assets/SolutionsKaikong/Kaikong-bu.webp" alt="Kaikong-bu">
          </div>
          <div v-if="type === 'Shipmunk'">
            <img class="item-center" src="./../../assets/SolutionsShipmunk/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.webp" alt="qr-code-sellsuki">
            <img class="position-bu" width="180" src="./../../assets/SolutionsShipmunk/Shipmunk-bu.webp"
              alt="Shipmunk-bu">
          </div>
          <div v-if="type === 'Oc2plus'">
            <img class="item-center" src="./../../assets/SolutionsOc2plus/logo.webp" alt="logo">
            <p class="text-s-24 mt-4" style="color:#23243D">ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่</p>
            <img class="item-center" width="320" src="./../../assets/qr-code-sellsuki.webp" alt="qr-code-sellsuki">
            <img class="position-bu" width="120" src="./../../assets/SolutionsOc2plus/Oc2plus-bu.webp" alt="Oc2plus-bu">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionsGetQuote',
  props: ['type', 'blog'],
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        tel: '',
        email: '',
        brand: '',
        interested: this.type,
        message: ''
      },
      validate: false,
      referrer: '',
      path: '',
      ads: '',
    }
  },
  mounted() {
    const ads = sessionStorage.getItem('ads')
    this.ads = ads
    this.path = window.location.origin + window.location.pathname
    if (this.type === "e-dis") {
      this.form.interested = "WizemovesEdis"
    }
    const cookieReferrer = this.$cookies.get('cookie-referrer')
    if (cookieReferrer == '' || cookieReferrer == undefined) {
      this.referrer = "Direct"
    }
    else {
      this.referrer = cookieReferrer
    }
    //console.log("SolutionsGetQuote = " + this.referrer)
  },
  methods: {
    submitForm() {
      if (this.form.fname == '' || this.form.lname == '' || this.form.tel == '' || this.form.email == '' || this.form.brand == '' || this.form.interested == '' || this.form.message == '') {
        this.validate = true
        return false
      }
      if (this.form.fname != '' && this.form.lname != '' && this.form.tel != '' && this.form.email != '' && this.form.brand != '' && this.form.interested != '' && this.form.message != '') {
        let interested = "";
        if (this.form.interested == "Fuse") {
          interested = "Ads"
        } else if (this.form.interested == "LINEAgency") {
          interested = "Line agency"
        } else if (this.form.interested == "WizemovesMartech") {
          interested = "Martech"
        } else if (this.form.interested == "WizemovesContent") {
          interested = "Content"
        } else if (this.form.interested == "WizemovesEdis") {
          interested = "eDis"
        } else if (this.form.interested == "WizemovesConsult") {
          interested = "Consult"
        } else if (this.form.interested == "WizemovesInfluence") {
          interested = "Influ"
        } else if (this.form.interested == "WizemovesData") {
          interested = "Data"
        } else if (this.form.interested == "Oc2plus") {
          interested = "Oc2plus"
        } else if (this.form.interested == "Akita") {
          interested = "Akita"
        } else if (this.form.interested == "Patona") {
          interested = "Patona"
        }
        let ads = this.ads ? 'Ads' : 'Org';

        let origin;

        if (this.blog) {
            origin = `Blog - ${this.blog}`;
        } else {
            const interested = this.form.interested;
            const isSpecial = ['Oc2plus', 'Akita', 'Patona', 'LINEAgency'].includes(interested);
            origin = `${isSpecial ? interested : 'WM ' + interested}-${ads}`;
        }
        this.success = true
        this.$router.push({ path: '/thankyou/' + this.type })
      }
    }
  }
}
</script>

<style scoped>
.btn-solution {
  width: 184px !important;
  height: 40px !important;
  color: #FFFFFF !important;
  box-sizing: border-box !important;
  border-radius: 20px !important;
}

.card-mobile {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: #F2F3F5
}

.fuse-color {
  background-color: #542D84 !important;
  border: 1px solid #542D84 !important
}

.line-color {
  background-color: #2AAF5F !important;
  border: 1px solid #2AAF5F !important
}

.akita-color {
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.beary-color {
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.kaikong-color {
  background-color: #0D3050 !important;
  border: 1px solid #0D3050 !important
}

.shipmunk-color {
  background-color: #B1151B !important;
  border: 1px solid #B1151B !important
}

.oc2plus-color {
  background-color: #54ACDD !important;
  border: 1px solid #54ACDD !important
}

.position-bu {
  margin-bottom: -120px;
  margin-top: 65px;
  position: relative;
  z-index: 1;
}
</style>