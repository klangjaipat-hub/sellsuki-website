<template>
  <div id="NavMobile">
      <header>
          <div class="side-bg"></div>
          <nav class="nav-bar">
              <a href="/blog" class="nav-branding"><img src="../../../assets/SolutionsWizemoves/Logo with system__.png" alt="sellsuki-logo" loading="lazy" style="margin-left: -10px;margin-top: 6px;"></a>
              <ul class="nav-menu">
                <div class="row mt-3 mb-3">
                  <div class="col-8"><a href="/blog" class="nav-branding"><img class="" src="../../../assets/v2/Logo-mobile.svg" alt="sellsuki-logo" loading="lazy"></a></div>
                  <div class="col-4">
                    <!-- <div id="switch" class="switch mt-3">
                      <input @change="langChange()" id="language-toggle-m" v-model="status" class="check-toggle check-toggle-round-flat" type="checkbox">
                      <label for="language-toggle-m"></label>
                      <span class="on font-md">EN</span>
                      <span class="off font-md">TH</span>
                    </div> -->
                  </div>
                </div>
                <div class="m-1">
                  <!-- <li class="nav-item">
                    <a class="navbar-brand font-df" href="/blogs/news-and-activity">News & Activity</a>
                  </li>
                  <li class="nav-item">
                    <a @click="scrollToTop" class="btn btn-account font-df mt-3" :to="localePath('/blog')">Create account</a>
                  </li> -->
                  <hr style="border: 1px solid #68758A;"/>
                  <li class="nav-item">
                    <div class="row">
                      <div class="col-6">
                        <a href="/" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.Our_Solution") }}</p></a>
                        <a href="/about-us" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.About") }}</p></a>
                        <a href="/blog" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.Blog") }}</p></a>
                      </div>
                      <div class="col-6">
                        <a href="/join-us" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.Team") }}</p></a>
                        <a href="/" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.FAQs") }}</p></a>
                        <a href="/contact-us" class="text-s-24 color-FFFFFF font-df"><p>{{ $t("Blog.Contact") }}</p></a>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
              
              <div @click="display_manu = !display_manu" class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
          </nav>
      </header>
  </div>
</template>

<script>
export default {
  name: 'NavMobile',
  data () {
      //const lang = localStorage.getItem('lang') || 'th-TH';
      return {
          display_manu: false,
          lang: this.$i18n.locale || 'th-TH',
          status:''
      }
  },
  mounted(){
    if(this.lang == 'th-TH'){
      this.status = true
    }else{
      this.status = false
    }
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const sideBg = document.querySelector(".side-bg");

      hamburger.addEventListener("click", () => {

      /* Toggle active class */
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      sideBg.classList.toggle("active");

      let menuOpen = navMenu.classList.contains("active");
      let newMenuOpenStatus = menuOpen;
      hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
      })
  },
  methods:{
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
      document.getElementById("language-toggle-m").disabled = true;
      document.getElementById("switch").classList.add("opct-02");
      setTimeout(() => {
        document.getElementById("language-toggle-m").disabled = false;
        document.getElementById("switch").classList.remove("opct-02");
      }, 2000)
    }
  },
  
}
</script>

<style scoped>
header {
background-color: #262626;
}

.btn-account{
background-color: #32A9FF;
width: 100%;
color: #FFF;
font-size: 24px;
border-radius: 8px;
}

.opct-02
{
  opacity: 0.5 !important;
}

/* need a solution for the next 2 properties */
li {
list-style: none;
}

a {
color: #262626;
text-decoration: none;
}
a:hover{
color: #F36F25 !important;
}

ol, ul{
padding-left: 16px !important;
padding-right: 16px !important;
}

.side-bg.active {
height: 100%;
width: 100%;
position: fixed;
z-index: 99;
top: 0;
right: 0;
background-color: #000000;
overflow-x: hidden;
transition: 0.5s;
opacity: 0.5;
}

.active-lang{
background: #F6ECE0;
color:#50151C !important;
font-weight: bold !important;
}

.nav-bar {
min-height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1.5em;
z-index: 999;
  position: fixed;
  top: 0px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  box-shadow: 0 0 0 0 rgba(17,24,39,.1), 0 1px 2px 0 rgba(17,24,39,.1), 0 4px 4px 0 rgba(17,24,39,.09), 0 10px 6px 0 rgba(17,24,39,.05), 0 18px 7px 0 rgba(17,24,39,.01), 0 27px 8px 0 rgba(17,24,39,0), 0 0 1px 0 rgba(17,24,39,.3);
}

.nav-branding {
font-size: 2rem;
font-weight: 600;
transition: color 500ms ease;
}

.nav-branding:hover, .nav-branding:focus {
color: dodgerblue;
}

.nav-menu {
position: fixed;
left: -100%;
top: 0;
flex-direction: column;
background-color: #03193C;
width: 100%;
height: 100%;
transition: 750ms;
z-index: 9999;
margin-top: 0;
}

.nav-menu.active {
left: 0;
}

.nav-item {
margin: 0;
padding: 8px 0px;
}

.navbar-brand{
font-size: 24px !important;
color: #FFF !important;
}

.nav-link {
transition: 400ms ease;
}

.nav-link:hover, .nav-link:focus {
color: dodgerblue;

}

.hamburger {
cursor: pointer;
z-index: 9999;
margin-top: 5px;
}

.bar {
display: block;
background-color:#212529;
width: 24px;
/* The following 2 properties are essential in creating the "X" when the hamburger is clicked. If you change just 1 of the 2, then you need to find the proper combination for the other one */
height: 2px;
margin: 6px auto;

/*    -webkit-transition: all 300ms ease;  */
transition: all 300ms ease-in-out;
}

.hamburger.active .bar:nth-child(2) {
opacity: 0
}

.hamburger.active .bar:nth-child(1) {
transform: translateY(8px) rotate(45deg);
background-color:#FFF;
}

.hamburger.active .bar:nth-child(3) {
transform: translateY(-8px) rotate(-45deg);
background-color:#FFF;
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
color: #FFF;
}

.switch{
border: 1px solid #F35B1F80;
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
color: #FFF;
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
width: 77px;
height: 25px;
background-color: #03193C;
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
background-color: #03193C;
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

@media (min-width: 768px) {

.nav-menu {
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  width: auto;
}

.hamburger {
  display: none;
}
}

.container {
width: 80%;
margin: 0 auto;
}
</style>