 <template>
    <div id="NavMobile">
        <header>
            <div class="side-bg"></div>
            <nav class="nav-bar">
                <a href="/blog" class="nav-branding"><img src="../assets/v2/Logoblog.svg" alt="sellsuki-logo" loading="lazy" style="margin-left: -10px;margin-top: 6px;"></a>
                <ul class="nav-menu">
                  <div class="row mt-3 mb-3">
                    <div class="col-8"><a href="/blog" class="nav-branding"><img class="" src="../assets/v2/Logo-mobile.svg" alt="sellsuki-logo" loading="lazy"></a></div>
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
              
                <div @click="display_manu = true" v-if="display_manu === false" class="hamburger">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.4759 17.5237H6.85682C6.01524 17.5237 5.33301 16.8415 5.33301 15.9999C5.33301 15.1583 6.01524 14.4761 6.85682 14.4761H14.4759L17.5235 14.4764L25.1425 14.4761C25.9841 14.4761 26.6663 15.1583 26.6663 15.9999C26.6663 16.8415 25.9841 17.5237 25.1426 17.5237H17.5235H14.4759Z" fill="#0F225A"/>
                  <path d="M14.4759 11.0476H6.85682C6.01524 11.0476 5.33301 10.3654 5.33301 9.52381C5.33301 8.68223 6.01524 8 6.85682 8H14.4759L17.5235 8.00028L25.1425 8.00005C25.9841 8.00002 26.6663 8.68225 26.6663 9.52383C26.6663 10.3654 25.9841 11.0476 25.1426 11.0476H17.5235H14.4759Z" fill="#0F225A"/>
                  <path d="M14.4759 24.3811H6.85682C6.01524 24.3811 5.33301 23.6989 5.33301 22.8573C5.33301 22.0157 6.01524 21.3335 6.85682 21.3335H14.4759L17.5235 21.3338L25.1425 21.3335C25.9841 21.3335 26.6663 22.0157 26.6663 22.8573C26.6663 23.6989 25.9841 24.3811 25.1426 24.3811H17.5235H14.4759Z" fill="#0F225A"/>
                </svg>
                </div>
                <div @click="display_manu = false" v-else class="hamburger">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 24L24 8M8 8L24 24" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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