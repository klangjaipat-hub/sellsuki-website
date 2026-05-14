<template>
  <div id="FooterMenu" class="font-df">
      <div class="row m-0 bg">
        <div style="background: #090F27;opacity: 0.95;">
          <!-- footer desktops ------------------------------------------------------------- -->
        <div class="container d-none d-md-block">
          <div class="p-5 ps-xl-0 pe-xl-0">
            <div class="row mt-4">
              <div class="col-lg-4 col-12">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img src="../../../assets/SolutionsWizemoves/Footer/Logo with system__.png" alt="logo-footer.svg"></nuxt-link>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Address:</p>
                <p class="text-s-20 color-FFFFFF mt-2">
                  Sellsuki Co.,Ltd.<br/>4Simplex, 3rd Floor, No. 10/39<br/>Ratchadapisek Road, Chankasem,<br/>Chatuchak, Bangkok 10900<br/>Thailand
                </p>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Contact:</p>
                <p class="text-s-20 color-FFFFFF mt-2">090 096 7526</p>
                <div class="d-flex mt-4">
                  <a href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Facebook.png" alt="facebook icon" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Instagram.png" alt="Instagram.png" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/X.png" alt="X" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/LinkedIn.png" alt="LinkedIn.png" loading="lazy"></a>
                  <a class="ms-2" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Youtube.png" alt="Youtube.png" loading="lazy"></a>
                </div>
              </div>
              <div class="col-lg-8 col-12">
                <div class="row">
                  <div class="col-lg-2 col-12" style="width: 20% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="/solutions/wizemoves" class="text-white">Wizemoves</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/business-consulting" class="text-white">Business Consulting</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Digital Advertising</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Content Marketing</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/edis" class="text-white">e-Distributor</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/martech" class="text-white">Martech</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Influencer Marketing</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Data Analytics</a></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 20% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="/solutions/lineagency" class="text-white">LINE Agency</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-oa" class="text-white">LINE OA</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-oa-corporate" class="text-white">LINE OA Corporate</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-smart-channel" class="text-white">LINE Smart Channel</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-today" class="text-white">LINE Today</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-sponsored-sticker" class="text-white">Sponsored Sticker</a></p>
                    <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-my-customer" class="text-white">My Customer | CRM</a></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 20% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Sukispace</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Business Tool</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Akita</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Business Community</a></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 20% !important">
                    <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Akita</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Patona</a></p>
                    <p class="text-s-20 mb-2"><a href="#" class="text-white">Oc2plus</a></p>
                  </div>
                  <div class="col-lg-2 col-12" style="width: 20% !important">
                    <p class="text-s-20 font-bd mb-4"><a href="/about-us" class="text-white">เกี่ยวกับเรา</a></p>
                    <p class="text-s-20 mb-4"><a href="/contact-us" class="text-white">ติดต่อเรา</a></p>
                    <p class="text-s-20 mb-4"><a href="/join-us" class="text-white">ร่วมงานกับเรา</a></p>
                    <p class="text-s-20 mb-4"><a href="/portfolio" class="text-white">ผลงานของเรา</a></p>
                    <p class="text-s-20 mb-4"><a href="/blog" class="text-white">บทความที่น่าสนใจ</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 63px;">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <a href="tel:0900967526" target="_blank" rel="noopener"><p class="text-w-500 text-s-20 text-white">© 2025 sellsuki. All rights reserved.</p></a>
              </div>
              <div class="col-8 text-end">
                <nuxt-link @click="scrollToTop" :to="localePath('/policy')"><span class="text-s-20 text-white me-3" style="text-decoration: underline;">Privacy Policy</span></nuxt-link>
                <nuxt-link @click="scrollToTop" :to="localePath('/terms-of-use')"><span class="text-s-20 text-white me-3" style="text-decoration: underline;">Terms of Service</span></nuxt-link>
                <a data-bs-toggle="modal" data-bs-target="#setting"><span class="text-s-20 text-white me-3" style="text-decoration: underline;">Cookies Settings</span></a>
              </div>
            </div>
          </div>
        </div>
        <!-- footer mobile ------------------------------------------------------------- -->
        <div class="container d-block d-md-none">
          <div class="p-4 ps-xl-0 pe-xl-0">
            <div class="row mt-4">
              <div class="col-lg-4 col-12 mb-5">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img src="../../../assets/SolutionsWizemoves/Footer/Logo with system__.png" alt="logo-footer.svg"></nuxt-link>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Address:</p>
                <p class="text-s-20 color-FFFFFF mt-2">
                  Sellsuki Co.,Ltd.<br/>4Simplex, 3rd Floor, No. 10/39<br/>Ratchadapisek Road, Chankasem,<br/>Chatuchak, Bangkok 10900<br/>Thailand
                </p>
                <p class="text-s-20 font-bd color-FFFFFF mt-4">Contact:</p>
                <p class="text-s-20 color-FFFFFF mt-2">090 096 7526</p>
                <div class="d-flex mt-4">
                  <a href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Facebook.png" alt="facebook icon" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Instagram.png" alt="Instagram.png" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/X.png" alt="X" loading="lazy"></a>
                  <a class="ms-2" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/LinkedIn.png" alt="LinkedIn.png" loading="lazy"></a>
                  <a class="ms-2" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img src="../../../assets/SolutionsWizemoves/Footer/Youtube.png" alt="Youtube.png" loading="lazy"></a>
                </div>
              </div>
              <div class="col-lg-2 col-6">
                <p class="text-s-20 font-bd mb-2"><a target="_blank" rel="noopener"  href="#" class="text-white">Wizemove</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/business-consulting" class="text-white">Business Consulting</a></p>
                <p class="text-s-20 mb-2"><a href="#" class="text-white">Digital Advertising</a></p>
                <p class="text-s-20 mb-2"><a href="#" class="text-white">Content Marketing</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/edis" class="text-white">e-Distributor</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/wizemoves/martech" class="text-white">Martech</a></p>
                <p class="text-s-20 mb-2"><a href="#" class="text-white">Influencer Marketing</a></p>
                <p class="text-s-20 mb-2"><a href="#" class="text-white">Data Analytics</a></p>

                <p class="text-s-20 font-bd mb-2 mt-4"><a target="_blank" rel="noopener"  href="#" class="text-white">Sukispace</a></p>
                <p class="text-s-20 mb-2"><a target="_blank" rel="noopener"  href="#" class="text-white">Business Tool</a></p>
                <p class="text-s-20"><a target="_blank" rel="noopener"  href="#" class="text-white">Business Community</a></p>

                <p class="text-s-20 font-bd mb-2 mt-4"><a href="/about-us" class="text-white">เกี่ยวกับเรา</a></p>
                    <p class="text-s-20 font-bd mb-2"><a href="/contact-us" class="text-white">ติดต่อเรา</a></p>
                    <p class="text-s-20 font-bd mb-2"><a href="/join-us" class="text-white">ร่วมงานกับเรา</a></p>
                    <p class="text-s-20 font-bd mb-2"><a href="/portfolio" class="text-white">ผลงานของเรา</a></p>
                    <p class="text-s-20 font-bd mb-2"><a href="/blog" class="text-white">บทความที่น่าสนใจ</a></p>
              </div>
              <div class="col-lg-2 col-6">
                <p class="text-s-20 font-bd mb-2"><a href="/solutions/lineagency" class="text-white">LINE Agency</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-oa" class="text-white">LINE OA</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-oa-corporate" class="text-white">LINE OA Corporate</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-smart-channel" class="text-white">LINE Smart Channel</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-today" class="text-white">LINE Today</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-sponsored-sticker" class="text-white">Sponsored Sticker</a></p>
                <p class="text-s-20 mb-2"><a href="/solutions/lineagency/line-my-customer" class="text-white">My Customer | CRM</a></p>

                <p class="text-s-20 font-bd mb-2 mt-4"><a href="#" class="text-white">Akita</a></p>
                <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Patona</a></p>
                <p class="text-s-20 font-bd mb-2"><a href="#" class="text-white">Oc2plus</a></p>
              </div>
            </div>
            <hr class="mb-4 mt-4" style="border: 1px solid #FFFFFF;opacity: 1 !important;"/>
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <a href="tel:0900967526" target="_blank" rel="noopener"><p class="text-w-500 text-s-20 text-white">© 2025 sellsuki. All rights reserved.</p></a>
              </div>
            </div>
            <div class="row mt-4 mb-5">
              <div class="col-4">
                <nuxt-link @click="scrollToTop" :to="localePath('/policy')">
                <span class="text-s-20 text-white me-2" style="text-decoration: underline;">Privacy Policy</span>
                </nuxt-link>
              </div>
              <div class="col-4">
                <nuxt-link @click="scrollToTop" :to="localePath('/terms-of-use')">
                <span class="text-s-20 text-white me-2" style="text-decoration: underline;">Terms of Service</span>
                </nuxt-link>
              </div>
              <div class="col-4">
                <a data-bs-toggle="modal" data-bs-target="#setting">
                <span class="text-s-20 text-white me-2" style="text-decoration: underline;">Cookies Settings</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterMenu',
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
p{
  margin-bottom: 0;
}
.mb-2{
  margin-bottom: 12px !important;
}
.text-s-20{
  line-height: 28.77px;
}
.font-Heavent{
    font-family: 'Heavent';
}
.hover-manu a:hover{
  color: #FFFFFF !important;
  font-weight: 400;
}

.hover-manu a {
  color: #D1D5DB !important;
  display: inline-block;
  position: relative;
}

a{
  color: unset;
}
a:hover{
  color: #FFF !important;
}
.footer-icon{
  width: 40px;
  height: 40px;
  border-radius: 32px;
  border: 1px solid #FFFFFF;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}

.text-s-20{
  line-height: 20px;
}
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .bg{
    background-image: url(../../../assets/SolutionsWizemoves/Footer/bg.jpg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .bg{
      background-image: url(../../../assets/SolutionsWizemoves/Footer/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    }
    .hover-manu p{
      line-height: 23.97px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .bg{
    background-image: url(../../../assets/SolutionsWizemoves/Footer/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .bg{
    background-image: url(../../../assets/SolutionsWizemoves/Footer/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .bg{
    background-image: url(../../../assets/SolutionsWizemoves/Footer/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .hover-manu p{
    line-height: 28.77px;
  }
}
</style>