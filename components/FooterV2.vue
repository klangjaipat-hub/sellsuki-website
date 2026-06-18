<template>
  <div id="FooterMenu" class="font-df">
      <div style="background: #09193A;">
        <div class="row m-0 bg" style="z-index: 1;position: relative;">
          <!-- footer desktops ------------------------------------------------------------- -->
        <div class="container d-none d-xl-block">
          <div class="p-5 ps-xl-0 pe-xl-0">
            <div class="row mt-4">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img width="221.519" height="100" src="../assets/v2/logo-footer.svg" alt="logo-footer.svg"></nuxt-link>
                <div class="row" style="margin-top: 100px;">
                    <div class="col-3"><a class="hvr-pop footer-icon" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img width="9.336px" height="17.997px" src="../assets/icon/footer-facebook.svg" alt="facebook icon" loading="lazy"></a></div>
                    <div class="col-3" style="margin-left: -15px;"><a class="hvr-pop footer-icon" href="https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ" target="_blank" rel="noopener"><img width="20.004px" height="13.342px" src="../assets/icon/footer-youtube.svg" alt="line icon" loading="lazy"></a></div>
                    <div class="col-3" style="margin-left: -15px;"><a class="hvr-pop footer-icon" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img width="20px" height="19.056px" src="../assets/icon/footer-line.svg" alt="youtube icon" loading="lazy"></a></div>
                    <div class="col-3" style="margin-left: -15px;"><a class="hvr-pop footer-icon" href="mailto:hello@sellsuki.com" target="_blank" rel="noopener"><img width="16px" height="13px" src="../assets/icon/footer-mail.svg" alt="mail icon" loading="lazy"></a></div>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu" style="margin-top: -16px;">
                  <div class="row">
                    <div class="col-6 mt-2">
                      <p class="text-w-500 text-s-28 text-white mt-3 mb-3 font-md">{{ $t("footer.Service") }}</p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/fuse" class="text-white">{{ $t("footer.OnlineAdvertising") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/akita" class="text-white">{{ $t("footer.Fulfillment") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/lineagency" class="text-white">{{ $t("footer.LINEAgency") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/beary" class="text-white">{{ $t("footer.DevelopWebsite") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/wizemoves-content" class="text-white">{{ $t("footer.ContentMarketing") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/shipmunk" class="text-white">{{ $t("footer.DeliveryCompare") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/solutions/oc2plus" class="text-white">{{ $t("footer.CustomerDataPlatform") }}</a></p>
                    </div>
                    <div class="col-6 mt-2">
                      <p class="text-w-500 text-s-28 text-white mt-3 mb-3 font-md">{{ $t("Menu.Solution") }}</p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/types-of-business/business-owner" class="text-white">{{ $t("Menu.Solutions.BusinessOwner") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/types-of-business/online-merchant" class="text-white">{{ $t("Menu.Solutions.OnlineMerchant") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener"  href="/types-of-business/corporate" class="text-white">{{ $t("Menu.Solutions.Corporate") }}</a></p>
                    </div>
                  </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 hover-manu" style="margin-top: -16px;">
                  <div class="row">
                    <div class="col-6 mt-2">
                      <p class="text-w-500 text-s-28 text-white mt-3 mb-3 font-md">{{ $t("Blog.Blog") }}</p>
                      <!-- <p class="text-w-400 text-s-24"><nuxt-link @click="scrollToTop" :to="localePath('/blog')" class="text-white">{{ $t("Blog.News_Activity") }}</nuxt-link></p> -->
                    </div>
                    <div class="col-6 mt-2">
                      <p class="text-w-500 text-s-28 text-white mt-3 mb-3 font-md">{{ $t("Blog.Company") }}</p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener" href="/join-us" class="text-white">{{ $t("Menu.JoinUs") }}</a></p>
                      <p class="text-w-400 text-s-24 mb-1"><a target="_blank" rel="noopener" href="/portfolio" class="text-white">{{ $t("Menu.Portfolio") }}</a></p>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row" style="margin-top: 63px;">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <a href="tel:0900967526" target="_blank" rel="noopener"><p class="text-w-500 text-s-24 text-white">Call Center : 090 096 7526</p></a>
              </div>
              <div class="col-8 text-end">
                <p class="text-w-500 text-s-24 text-white">© Sellsuki Co.,Ltd. (c) All Rights Reserved
                  <!-- <span style="opacity: 0.2;">Theme by Sellsuki</span> -->
                </p>
              </div>
            </div>
          </div>
        </div>

          <!-- footer taplet ------------------------------------------------------------- -->
          <div class="container d-none d-md-block d-lg-block d-xl-none">
          <div class="p-5 ps-5 pe-5 ps-lg-0 pe-lg-0">
            <div class="row mt-4">
              <div class="col-4">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img width="140.46px" height="44px" src="../assets/v2/logo-footer-md.png" alt="logo-footer"></nuxt-link>
                <div class="row">
                    <div class="col-12">
                      <a href="tel:0900967526" target="_blank" rel="noopener"><p class="text-w-500 text-s-24 text-white mt-3">Call Center : 090 096 7526</p></a>
                    </div>
                </div>
              </div>
              <div class="col-8">
                <div class="row">
                  <div class="col-4 hover-manu" style="margin-top: -16px;">
                    <p class="text-w-500 text-s-24 text-white mt-3 mb-2 font-md">{{ $t("footer.Service") }}</p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/fuse" class="text-white">{{ $t("footer.OnlineAdvertising") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/akita" class="text-white">{{ $t("footer.Fulfillment") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/lineagency" class="text-white">{{ $t("footer.LINEAgency") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/beary" class="text-white">{{ $t("footer.DevelopWebsite") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/wizemoves-content" class="text-white">{{ $t("footer.ContentMarketing") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/shipmunk" class="text-white">{{ $t("footer.DeliveryCompare") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/oc2plus" class="text-white">{{ $t("footer.CustomerDataPlatform") }}</a></p>
                  </div>
                  <div class="col-4 hover-manu" style="margin-top: -16px;">
                    <p class="text-w-500 text-s-24 text-white mt-3 mb-2 font-md">{{ $t("Menu.Solution") }}</p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/business-owner" class="text-white">{{ $t("Menu.Solutions.BusinessOwner") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/online-merchant" class="text-white">{{ $t("Menu.Solutions.OnlineMerchant") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/corporate" class="text-white">{{ $t("Menu.Solutions.Corporate") }}</a></p>
                  </div>
                  <div class="col-4 hover-manu" style="margin-top: -16px;">
                    <p class="text-w-500 text-s-24 text-white mt-3 mb-2 font-md">{{ $t("Blog.Blog") }}</p>
                      <!-- <p class="text-w-400 text-s-20"><nuxt-link @click="scrollToTop" :to="localePath('/blog')" class="text-white">{{ $t("Blog.News_Activity") }}</nuxt-link></p> -->
                      <p class="text-w-500 text-s-24 text-white mt-3 font-md">{{ $t("Blog.Company") }}</p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener" href="/join-us" class="text-white">{{ $t("Menu.JoinUs") }}</a></p>
                      <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener" href="/portfolio" class="text-white">{{ $t("Menu.Portfolio") }}</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style="margin-top: 63px;">
              <div class="col-8">
                <p class="text-w-500 text-s-24 text-white mt-3">© Sellsuki Co.,Ltd. (c) All Rights Reserved</p>
              </div>
              <div class="col-4">
                <p class="text-w-500 text-s-24 text-white">Follow us</p>
                <div class="row justify-content-start mt-1">
                    <div class="col-2"><a class="hvr-pop" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img width="9.336px" height="17.997px" src="../assets/icon/footer-facebook.svg" alt="facebook icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop" href="https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ" target="_blank" rel="noopener"><img width="20.004px" height="13.342px" src="../assets/icon/footer-youtube.svg" alt="line icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img width="20px" height="19.056px" src="../assets/icon/footer-line.svg" alt="youtube icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop" href="mailto:hello@sellsuki.com" target="_blank" rel="noopener"><img width="16px" height="13px" src="../assets/icon/footer-mail.svg" alt="mail icon" loading="lazy"></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>


                  <!-- footer mobile ------------------------------------------------------------- -->
        <div class="container d-block d-md-none">
          <div class="p-3">
            <div class="row mt-5">
              <div class="col-12 mb-4">
                <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/')"><img class="logo-img" src="../assets/v2/logo-footer-md.png" alt="logo-footer.svg"></nuxt-link>
                <div class="row mt-4">
                    <div class="col-2"><a class="hvr-pop footer-icon" href="https://www.facebook.com/Sellsuki/" target="_blank" rel="noopener"><img width="9.336px" height="17.997px" src="../assets/icon/footer-facebook.svg" alt="facebook icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop footer-icon" href="https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ" target="_blank" rel="noopener"><img width="20.004px" height="13.342px" src="../assets/icon/footer-youtube.svg" alt="line icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop footer-icon" href="https://page.line.me/pld0867p?oat__id=1510902&openQrModal=true" target="_blank" rel="noopener"><img width="20px" height="19.056px" src="../assets/icon/footer-line.svg" alt="youtube icon" loading="lazy"></a></div>
                    <div class="col-2"><a class="hvr-pop footer-icon" href="mailto:hello@sellsuki.com" target="_blank" rel="noopener"><img width="16px" height="13px" src="../assets/icon/footer-mail.svg" alt="mail icon" loading="lazy"></a></div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 hover-manu">
                  <p class="text-w-500 text-s-24 text-white mt-3 mb-2 mb-2 font-md">{{ $t("footer.Service") }}</p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/fuse" class="text-white">{{ $t("footer.OnlineAdvertising") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/akita" class="text-white">{{ $t("footer.Fulfillment") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/lineagency" class="text-white">{{ $t("footer.LINEAgency") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/beary" class="text-white">{{ $t("footer.DevelopWebsite") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/wizemoves-content" class="text-white">{{ $t("footer.ContentMarketing") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/shipmunk" class="text-white">{{ $t("footer.DeliveryCompare") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/solutions/oc2plus" class="text-white">{{ $t("footer.CustomerDataPlatform") }}</a></p>
                </div>
                <div class="col-6 hover-manu">
                  <p class="text-w-500 text-s-24 text-white mt-3 mb-2 mb-2 font-md">{{ $t("Menu.Solution") }}</p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/business-owner" class="text-white">{{ $t("Menu.Solutions.BusinessOwner") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/online-merchant" class="text-white">{{ $t("Menu.Solutions.OnlineMerchant") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener"  href="/types-of-business/corporate" class="text-white">{{ $t("Menu.Solutions.Corporate") }}</a></p>
                </div>
              </div>
              <div class="row">
                <div class="col-6 hover-manu">
                  <p class="text-w-500 text-s-24 text-white mt-3 mb-2 mb-2 font-md">{{ $t("Blog.Blog") }}</p>
                  <!-- <p class="text-w-400 text-s-20"><nuxt-link @click="scrollToTop" :to="localePath('/blog')" class="text-white">{{ $t("Blog.News_Activity") }}</nuxt-link></p> -->
                </div>
                <div class="col-6 hover-manu">
                  <p class="text-w-500 text-s-24 text-white mt-3 mb-2 mb-2 font-md">{{ $t("Blog.Company") }}</p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener" href="/join-us" class="text-white">{{ $t("Menu.JoinUs") }}</a></p>
                  <p class="text-w-400 text-s-20"><a target="_blank" rel="noopener" href="/portfolio" class="text-white">{{ $t("Menu.Portfolio") }}</a></p>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <a href="tel:0900967526" target="_blank" rel="noopener"><p class="text-w-500 text-s-24 text-white">Call Center : 090 096 7526</p></a>
              </div>
              <div class="col-12 mt-4 mb-5">
                <p class="text-w-500 text-s-20 text-white">© Sellsuki Co.,Ltd. (c) All Rights Reserved</p>
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
p{
  margin-bottom: 0;
}
.text-s-24{
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
/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .bg{
    background-image: url(../assets/v2/bg-footer-sm.png);
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
      background-image: url(../assets/v2/bg-footer-sm.png);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .hover-manu p{
      line-height: 23.97px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .bg{
    background-image: url(../assets/v2/bg-footer-md.png);
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .bg{
    background-image: url(../assets/v2/bg-footer-md.png);
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .hover-manu p{
    line-height: 23.97px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .bg{
    background-image: url(../assets/v2/bg-footer.png);
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .hover-manu p{
    line-height: 28.77px;
  }
}
</style>