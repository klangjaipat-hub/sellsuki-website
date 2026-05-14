<template>
<div class="font-md">
  <div class="nav-sp"></div>
  <nav v-if="statusMenu == false" class="navbar navbar-expand-lg fixed-top animate__animated animate__fadeIn" style="z-index: 9999;">
    <div class="container">
      <div class="ml-2">
        <ul class="navbar-nav text-s-24 text-w-500">
        <a @click="scrollToTop" href="/blog">
          <img src="../assets/v2/Logoblog.svg" alt="sellsuki-logo" loading="lazy" class="d-inline-block align-text-top cover-img sellsuki-logo">
        </a>
        <!-- <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/blogs/news-and-activity')">
          <li class="nav-item navbar-item margin-menu">
            <div class="nav-link text-c-menu">{{ $t("Blog.News_Activity") }}</div>
          </li>
        </nuxt-link> -->
        </ul>
      </div>
      <!-- <div id="switch" class="switch">
        <input @change="langChange()" id="language-toggle" v-model="status" class="check-toggle check-toggle-round-flat" type="checkbox">
        <label for="language-toggle"></label>
        <span class="on font-md">EN</span>
        <span class="off font-md">TH</span>
      </div> -->
    </div>
  </nav>
  <nav v-else class="nav-custom fixed-top animate__animated animate__fadeInDown" style="z-index: 999;">
    <div class="row">
      <div class="col-2 ps-5">
        <a @click="scrollToTop" class="navbar-brand" href="/blog">
          <img src="../assets/v2/Logoblog.svg" alt="sellsuki-logo" loading="lazy" class="d-inline-block align-text-top cover-img">
        </a>
      </div>
      <div class="col-8 text-center">
        <span class="text-s-36 font-bd">{{blogname}}</span>
      </div>
      <div class="col-2 pe-5 text-end">
        <img onclick="history.back()" class="icon-back me-5 cursor-pointer" src="../assets/icon/icon-back.svg" alt="icon-back">
      </div>
    </div>
  </nav>
</div>
</template>

<script>
import NavMobile from '@/components/NavMobile'

export default {
  name: 'MenuBlog',
  components: {
    NavMobile
  },
  props: ['blogname'],
  data () {
    //const lang = localStorage.getItem('lang') || 'th-TH';
    return {
      menu: '',
      component: '',
      lang:'',
      statusMenu:false,
      status:''
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onShow);
    if(this.lang == 'th-TH'){
      this.status = true
    }else{
      this.status = false
    }
  },
  methods: {
    onShow (event) {
        this.windowTop = event.target.documentElement.scrollTop;

        if(this.windowTop < 50){
            this.statusMenu = false
        }
        if(this.windowTop > 49){
            this.statusMenu = true
        }
    },
    toggle(){
        this.component = this.menu;
    },
    scrollToTop() {
        window.scrollTo(0,0);
    },
    langChange(){
      //localStorage.setItem('lang',event);
      if(this.status == false){
        this.$router.push(this.$router.app.switchLocalePath('en'));
      }else{
        this.$router.push(this.$router.app.switchLocalePath('th-TH'));
      }
      document.getElementById("language-toggle").disabled = true;
      document.getElementById("switch").classList.add("opct-02");
      setTimeout(() => {
        document.getElementById("language-toggle").disabled = false;
        document.getElementById("switch").classList.remove("opct-02");
      }, 2000)
    }
  }
}
</script>

<style scoped>
.icon-back{
  border-radius: 27px;
  border: 1px solid #FF6603;
  background: #FFEFE5;
  display: inline-flex;
  padding: 7.5px 10.5px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
}
.nav-custom{
  padding-top: 9px;
  padding-bottom: 9px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.10), 0px 1px 2px 0px rgba(17, 24, 39, 0.10), 0px 4px 4px 0px rgba(17, 24, 39, 0.09), 0px 10px 6px 0px rgba(17, 24, 39, 0.05), 0px 18px 7px 0px rgba(17, 24, 39, 0.01), 0px 27px 8px 0px rgba(17, 24, 39, 0.00), 0px 0px 1px 0px rgba(17, 24, 39, 0.30);
}
.nav-link{
  font-size: 24px;
  color: #09193A !important;
}
.hover-manu a p:hover{
  color: #F38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151C !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
.hover-manu a p:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #F38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.hover-manu a p:hover:after { 
  width: 100%; 
}

.menu-bar li:hover div {
  color:#FFFFFF !important;
  border: 0;
}

.navbar-nav{
  flex-direction: row !important;
}

.opct-02
{
    opacity: 0.5 !important;
}
.switch {
  position: relative;
  display: inline-block;
}

.switch > span {
  position: absolute;
  top: -3px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
  color: #fff;
}

input.check-toggle-round-flat:checked ~ .on {
  color: #F36F25;
}

.switch{
  border: 1px solid rgba(243, 91, 31, 0.20);
  border-radius: 16px;
}

.switch > span.on {
  left: 0;
  padding-left: 0px;
  color: #fff;
}

.switch > span.off {
  right: 0;
  padding-right: 4px;
  color: #F36F25;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
.check-toggle + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat + label {
  padding: 2px;
  width: 75px;
  height: 23px;
  background-color: #fff;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
  display: block;
  position: absolute;
  content: "";
}

input.check-toggle-round-flat + label:before {
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: #fff;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
  top: 0px;
  left: -2px;
  bottom: 0px;
  width: 40px;
  background-color: #F36F25;
  -webkit-border-radius: 52px;
  -moz-border-radius: 52px;
  -ms-border-radius: 52px;
  -o-border-radius: 52px;
  border-radius: 52px;
  -webkit-transition: margin 0.2s;
  -moz-transition: margin 0.2s;
  -o-transition: margin 0.2s;
  transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label {
}

input.check-toggle-round-flat:checked + label:after {
  margin-left: 38px;
}
.nav-link{
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.btn-lang span{
  color:#F35B1F !important;
}

.btn-lang{
  background: #FFFFFF;

  border: 1px solid rgba(243, 91, 31, 0.2);
  border-radius: 20px;
  line-height: 0.5 !important;
  position: relative;padding: 1px 10px 0px 0px;
}
.nav-sp{
  height: 78px;
}
.navbar{
  padding-top: 3px;
  padding-bottom: 3px;
  height: 64px;
  background: #FFF;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.10), 0px 1px 2px 0px rgba(17, 24, 39, 0.10), 0px 4px 4px 0px rgba(17, 24, 39, 0.09), 0px 10px 6px 0px rgba(17, 24, 39, 0.05), 0px 18px 7px 0px rgba(17, 24, 39, 0.01), 0px 27px 8px 0px rgba(17, 24, 39, 0.00), 0px 0px 1px 0px rgba(17, 24, 39, 0.30);
}
.nav-link{
  font-size: 24px;
  color: #09193A !important;
}
.hover-manu a p:hover{
  color: #F38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151C !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}
.hover-manu a p:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  position: absolute;
  background: #F38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.hover-manu a p:hover:after { 
  width: 100%; 
}

.menu-bar li:hover div {
  color:#FFFFFF !important;
  border: 0;
}

/* Extra small devices (phones, 525px and down) */
@media only screen and (max-width: 525px) {

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sellsuki-logo{
    margin-right: 40px;
    margin-top: 2px;
  }
  .margin-menu{
    margin-right: 32px;
  }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .sellsuki-logo{
    margin-right: 40px;
    margin-top: 2px;
  }
  .margin-menu{
    margin-right: 32px;
  }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .sellsuki-logo{
    margin-right: 141px;
    margin-top: 2px;
  }
  .margin-menu{
    margin-right: 48px;
  }
}
</style>

