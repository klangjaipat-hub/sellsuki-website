 <template>
    <div id="NavMobile">
        
            <nav class="navbar fixed-top" style="background-color: #F6ECE0;">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" @click="display_manu = !display_manu" >
                        <i class="bi bi-list" style="font-size: 35px;"></i>
                    </button>
                    <img src="../assets/logo-Sellsuki-v2.svg" width="130" height="55" alt="sellsuki-logo" loading="lazy">
                    <a href="tel:0900967526" target="_blank" rel="noopener"><img class="shadow" src="./../assets/mobile/Vector.webp" width="40" height="40" alt="Vector" loading="lazy" style="background-color: #FFFFFF;border-radius: 50px;"></a>
                </div>
            </nav>
            <div v-if="display_manu == true" class="side-bg"></div>
            <div v-if="display_manu == true" class="sidenav animate__animated" :class="{'animate__fadeInLeft':display_manu,'animate__fadeOutLeft':!display_manu}">
                <div class="row p-3">
                    <div class="col-5">
                    <div class="p-1" style="background: #50151C;border-radius: 2px;">
                        <div class="row text-center">
                        <div class="col-6">
                            <nuxt-link @click.native="display_manu = false" :to="switchLocalePath('en')" :class="{'active-lang':$i18n.locale == 'en'}" class="text-s-18 p-1" style="color:#FFFFFF">EN</nuxt-link>
                        </div>
                        <div class="col-6">
                            <nuxt-link @click.native="display_manu = false" :to="switchLocalePath('th-TH')" :class="{'active-lang':$i18n.locale == 'th-TH'}" class="text-s-18 p-1" style="color:#FFFFFF">ไทย</nuxt-link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-7">
                    <nuxt-link class="closebtn" style="cursor:pointer;float: right" @click="display_manu = false"><i class="bi bi-x"></i></nuxt-link>
                    </div>
                </div>
                <div class="row p-3 menu">
                    <div class="col-12">
                        <div v-if="component == ''">
                            <a href="/">{{$t("Menu.Home")}}</a>
                            <!-- <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'ServicesMenu'" class="d-flex" >
                            <a href="#">Services</a>
                            <i class="ms-auto bi bi-chevron-right"></i>
                            </div> -->
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'SolutionsMenu'" class="d-flex" >
                            <a href="#">{{$t("Menu.Solution")}}</a>
                            <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/about-us">{{$t("Menu.AboutUs")}}</a>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/portfolio">{{$t("Menu.Portfolio")}}</a>
                        
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/blog" target="_blank" rel="noopener">{{$t("Menu.Blog")}}</a>

                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/contact-us">{{$t("Menu.ContactUs")}}</a>
                            
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/join-us">{{$t("Menu.JoinUs")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>

                        <div v-if="component == 'SolutionsMenu'">
                            <nuxt-link @click="component = ''"><i class="bi bi-chevron-left me-2"></i> {{$t("Menu.Back")}}</nuxt-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <div class="text-w-700 text-s-18" style="color:#50151C;">{{$t("Menu.Solution")}}</div>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'Group'" class="d-flex" >
                                <span class="text-s-18" style="color:#50151C;"><img class="me-2" src="./../assets/icon/icon-menu3.webp" alt="icon-menu3"> {{$t("Menu.Group")}}</span>
                                <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <div @click="component = 'BU'" class="d-flex" >
                                <span class="text-s-18" style="color:#50151C;"><img class="me-2" src="./../assets/icon/icon-menu2.webp" alt="icon-menu2"> {{$t("Menu.BU")}}</span>
                                <i class="ms-auto bi bi-chevron-right"></i>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                        <div v-if="component == 'Group'">
                            <nuxt-link @click="component = 'SolutionsMenu'"><i class="bi bi-chevron-left me-2"></i> {{$t("Menu.Back")}}</nuxt-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <span class="text-w-700 text-s-18" style="color:#50151C;"><img class="me-2" src="./../assets/icon/icon-menu3.webp" alt="icon-menu3"> {{$t("Menu.Group")}}</span>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/types-of-business/business-owner">{{$t("Menu.Solutions.BusinessOwner")}}</a>                           
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/types-of-business/online-merchant">{{$t("Menu.Solutions.OnlineMerchant")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/types-of-business/corporate">{{$t("Menu.Solutions.Corporate")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                        <div v-if="component == 'BU'">
                            <nuxt-link @click="component = 'SolutionsMenu'"><i class="bi bi-chevron-left me-2"></i> {{$t("Menu.Back")}}</nuxt-link>
                            <hr style="border: 1px solid #50151C;"/>
                            <div class="d-flex" >
                                <span class="text-w-700 text-s-18" style="color:#50151C;"><img class="me-2" src="./../assets/icon/icon-menu2.webp" alt="icon-menu1"> {{$t("Menu.BU")}}</span>
                            </div>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/fuse">{{$t("Menu.Solutions.FuseAdvertising")}}</a>                           
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/lineagency">{{$t("Menu.Solutions.LINEAgency")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/kaikong">{{$t("Menu.Solutions.KaikongContentMarketing")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/beary">{{$t("Menu.Solutions.BearyWebTechService")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/akita">{{$t("Menu.Solutions.AkitaFulfillment")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/shipmunk">{{$t("Menu.Solutions.ShipmunkDropshipping")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                            <a href="/solutions/oc2plus">{{$t("Menu.Solutions.Oc2PlusCustomerDataPlatform")}}</a>
                            <hr style="border: 1px solid #50151C;"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'NavMobile',
    data () {
        //const lang = localStorage.getItem('lang') || 'th-TH';
        return {
            component: '',
            display_manu: false,
            lang: this.$i18n.locale || 'th-TH'
        }
    },
    methods:{
        langChange(){
            //window.location.reload();
            window.scrollTo(0,0);
        },
        scrollToTop() {
            window.scrollTo(0,0);
        },
    },
    
}
</script>

<style scoped>
a {
    text-decoration: none;
    font-size: 18px;
    color: #50151C;
    display: block;
    transition: 0.3s;
}

a:hover {
    color: #50151C;
}

.sidenav {
  height: 100%;
  width: 80%;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 15px;
}

.side-bg {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: #000000;
  overflow-x: hidden;
  transition: 0.5s;
  opacity: 0.5;
}

.sidenav .closebtn {
  font-size: 36px;
  bottom: 5px;
  position: relative;
}

.active-lang{
  background: #F6ECE0;
  color:#50151C !important;
  font-family: 'PromptBold', sans-serif !important;
  font-weight: bold !important;
}
</style>