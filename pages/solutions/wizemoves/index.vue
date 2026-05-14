<template>
  <div id="SolutionsWizemoves">

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content modal-custom-size">
          <div class="modal-header p-0">
            <span id="exampleModalLabel" class="header-model">
              สนใจรับคำปรึกษา
            </span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <FormDataUser 
                :interested="interested" 
                :blog="this.$route.query.blog" 
                @on-success="openSuccessModal" 
            />
            <button id="btnSwitchToSuccess" type="button" class="d-none" 
                data-bs-target="#sussessModal" 
                data-bs-toggle="modal">
            </button>
          </div>
        </div>
      </div>
    </div>
    <SuccessForm bu="Wizemoves" />
    <div class="bg-img d-none d-md-block">
      <div class="pb-lg-0 pb-5 bg-color">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <table class="align-middle banner-main" style="width: 100%">
                <td class="banner-height">
                  <img class="mb-3" src="~/assets/SolutionsWizemoves/Logo-White 1.svg" alt="Logo-White1.svg" />
                  <h1 class="font-wght" style="font-size: 52px; color: #FFFFFF">
                    ผู้เชี่ยวชาญด้านธุรกิจออนไลน์และที่ปรึกษาการตลาด
                  </h1>
                  <p class="text-s-24 mt-3" style="color: #FFFFFF">
                    ครบวงจรตั้งแต่การวางแผน การทำโฆษณาออนไลน์ รวมถึงรับทำโฆษณา
                    Facebook และช่องทางต่างๆ<br />
                    รับทำ Content Marketing ที่น่าสนใจ การจ้าง Influencer
                    เพื่อเพิ่มการเข้าถึง พร้อมทั้งบริการ<br />
                    รับทำเว็บไซต์ และ CRM เพื่อเพิ่มประสิทธิภาพธุรกิจ
                    ครบจบในที่เดียว เพื่อให้ธุรกิจของคุณเติบโต
                  </p>
                  <br />
                  <a @click="eventContactGTM()" id="btnSwitchToSuccess" ref="autoClickButton" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                    class="btn-banner text-s-24 px-4 py-2"
                    data-tag="wizemoves-banner-consultation-button">สนใจรับคำปรึกษา</a>
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img-mobile d-block d-md-none" style="height: 700px;margin-top:64px">
      <div class="bg-color-mobile" style="height: 700px">
        <div class="container p-4">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <img height="28" class="mb-3" src="~/assets/SolutionsWizemoves/Logo-White 1.svg" alt="Logo-White1.svg" />
              <h1 class="font-wght text-s-44" style="font-size: 44px; color: #FFFFFF">
                ผู้เชี่ยวชาญด้านธุรกิจออนไลน์และที่ปรึกษาการตลาด
              </h1>
              <p class="text-s-20 mt-3" style="color: #FFFFFF">
                ครบวงจรตั้งแต่การวางแผน การทำโฆษณาออนไลน์ <br />
                รวมถึงรับทำโฆษณา Facebook และช่องทางต่างๆ รับทำ Content <br />
                Marketing ที่น่าสนใจ การจ้าง Influencer เพื่อเพิ่มการเข้าถึง <br />
                พร้อมทั้งบริการ รับทำเว็บไซต์ และ CRM เพื่อเพิ่มประสิทธิภาพธุรกิจ <br />
                ครบจบในที่เดียว เพื่อให้ธุรกิจของคุณเติบโต
              </p>
              <br />
              <a @click="eventContactGTM()" href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" class="btn-banner px-3 py-1"
                data-tag="wizemoves-banner-consultation-button"><span class="text-s-24">สนใจรับคำปรึกษา</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="scroll-div animate__animated  animate__fadeIn" v-if="showDiv"
      style="position: fixed;top: 0px;z-index: 999;width: 100%;background: #FFFFFF;">
      <nav class="navbar navbar-expand-lg ps-md-0 pe-md-0 ps-3 pe-3 p-0"
        style="z-index: 9999;box-shadow: 0px 1px 3px 0px #7B64AF12,0px 5px 5px 0px #7B64AF0F,0px 12px 7px 0px #7B64AF0A,0px 20px 8px 0px #7B64AF03,0px 32px 9px 0px #7B64AF00;">
        <div class="container">
          <div class="ml-2 d-xl-block d-none">
            <ul class="navbar-nav text-s-24 text-w-500">
              <div v-for="(button, index) in buttons" :key="index"
                :class="{ 'nav-active': activeSection === button.name }" @click="setActiveButton(index)">
                <a :href="button.id">
                  <li class="nav-item d-flex ps-3 pe-3" style="padding-top: 19px;padding-bottom: 19px;">
                    <div class="nav-link p-0 text-s-24 m-auto">{{ button.label }}</div>
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div class="ml-2 d-xl-none d-block">
            <select class="form-select mt-3 mb-3 text-s-24 font-md" aria-label="Default select example">
              <option v-for="(button, index) in buttons" :key="index">{{ button.label }}</option>
            </select>
          </div>
          <div class="mt-1">
            <a @click="eventContactGTM()" href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
              class="btn-violet text-s-24 font-df p-1 ps-3 pe-3" data-tag="wizemoves-stickybar-consultation-button"><img
                class="me-2" src="~/assets/SolutionsWizemoves/Footer/chat-bubble-left-right.png"
                alt="chat-bubble-left-right.png" />ปรึกษาฟรี
            </a>
          </div>
        </div>

      </nav>
    </section>
    <div class="bg-1">
      <Section00 />
      <section class="bg-img-2">
        <div class="bg-color-2">
          <div class="container p-lg-0">
            <div class="row d-none d-md-block">
              <div class="col-12 text-center color-FFFFFF d-flex" style="height: 400px">
                <h2 class="text-s-60 text-w-700 m-auto">
                  เติบโตอย่างยั่งยืนไปกับเพื่อนคู่คิดทางธุรกิจที่เชี่ยวชาญ
                </h2>
              </div>
            </div>
            <div class="row d-block d-md-none">
              <div class="col-12 text-center color-FFFFFF d-flex" style="height: 312px">
                <h2 class="text-s-36 text-w-700 m-auto">
                  เติบโตอย่างยั่งยืนไปกับ<br />เพื่อนคู่คิดทางธุรกิจที่เชี่ยวชาญ
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-md-5 pb-0">
        <div class="container pb-md-5 pb-0 p-lg-0 p-4">
          <div class="row pt-5">
            <div class="col-12 mt-md-5 mt-0 text-center">
              <div class="m-auto" style="
                  width: 95px;
                  border: 1px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
                <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Services</p>
              </div>
              <h2 class="text-s-60 text-w-700 color-1F2937 mt-3 d-none d-md-block">
                ให้เราช่วยคุณด้วยบริการ
              </h2>
              <h2 class="text-s-44 text-w-700 color-1F2937 mt-3 d-block d-md-none">
                ให้เราช่วยคุณด้วยบริการ
              </h2>
            </div>
            <div class="row mt-md-5 mt-2 mb-3 text-center">
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')"
                  data-tag="wizemoves-service-consulting-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="~/assets/SolutionsWizemoves/chat-bubble-left-right.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      Business<br />Consulting
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/fuse')" data-tag="wizemoves-service-advertising-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="~/assets/SolutionsWizemoves/code-bracket-square.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      Digital<br />Advertising
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/kaikong')" data-tag="wizemoves-service-content-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover" src="~/assets/SolutionsWizemoves/document-text.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      Content<br />Marketing
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/wizemoves/edis')" data-tag="wizemoves-service-edistributor-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover" src="~/assets/SolutionsWizemoves/globe-alt.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      e-Distributor
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/wizemoves/martech')" data-tag="wizemoves-service-website-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover" src="~/assets/SolutionsWizemoves/megaphone.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      Website<br />Development
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <a href="#DataAnalytics" data-tag="wizemoves-service-data-analytics-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-card-1 d-none">ไปที่บริการ <img class="ms-2"
                        src="~/assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="~/assets/SolutionsWizemoves/presentation-chart-line.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      Data Analytics
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section id="BusinessConsulting" class="section-active" style="margin-top: 160px">
      <div class="container pb-5 p-lg-0 p-4">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0">
            <img src="~/assets/SolutionsWizemoves/01.png" alt="01.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/chat-bubble-left-right-t.png" alt="01.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              Business Consulting
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              ที่ปรึกษาทางธุรกิจ
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              ผู้ช่วยวางกลยุทธ์การตลาด กระตุ้นยอดขาย ครบทุกด้าน
              บริการให้คำปรึกษาและ ทำการตลาดแบบครบวงจร เป็นผู้ช่วยธุรกิจ
              พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              ความสำเร็จทางธุรกิจไม่ใช่เรื่องยาก หากมีทีมสนับสนุนที่เหมาะสม
              ทีมของเราเชี่ยวชาญ ด้านการวิเคราะห์ การจัดการ
              และการพัฒนากลยุทธ์เพื่อแก้ไขปัญหาและขับเคลื่อนการเติบโต
              เราเคยช่วยธุรกิจสร้างยอดขายกว่า 1,000 ล้านบาท และเติบโต 100%
              ภายในเวลาเพียง 1 ปี สำหรับธุรกิจที่มีช่องทางการขายจำกัด
              เรามีโซลูชันที่ยั่งยืนผ่านเครือข่ายพันธมิตรกว่า 10,000 ร้านค้า
              เราใช้เทคนิคการตลาด ที่ขับเคลื่อนด้วยข้อมูล (Data-Driven) และ
              Social Listening เพื่อค้นหาสินค้าที่ใช่ และลูกค้าที่ เหมาะสม
              เพื่อผลลัพธ์ที่มีประสิทธิภาพ
            </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-4">Influencer Marketing</p>
            <ul>
              <li class="text-s-24 p-0">วางกลยุทธ์และออกแบบแผนการตลาด</li>
              <li class="text-s-24 p-0">บริการหาอินฟลูเอนเซอร์ โดยมีให้เลือก มากกว่า 1000 รายชื่อ</li>
              <li class="text-s-24 p-0">ติดตามและวัดผลผ่าน Social Listening และ Marketing Tool Visualize Data</li>
            </ul>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0">Digital Marketing </p>
            <ul>
              <li class="text-s-24 p-0">วางแผนทำคอนเทนท์ต่อยอดจากอินฟลูเอนเซอร์เพื่อตอบโจทย์การยิงโฆษณา</li>
              <li class="text-s-24 p-0">ติดตาม Performance Marketing Report รายงานสรุปผลการดำเนินงาน</li>
            </ul>
            <p class="text-s-24 text-w-700 color-1F2937 mb-4 mt-4">ผลงานของเรา</p>
            <KeenSliderPortfolio01 />
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/iconoir_agile.png" alt="iconoir_agile.png">
                    <span class="ms-2 m-auto">Agile Marketing</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/carbon_data-vis-1.png" alt="carbon_data-vis-1.png">
                    <span class="ms-2 m-auto">Channel Marketing</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/presentation-chart-bar.png"
                      alt="presentation-chart-bar.png">
                    <span class="ms-2 m-auto">Data-Driven Marketing</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/streamline_ear-hearing.png"
                      alt="streamline_ear-hearing.png">
                    <span class="ms-2 m-auto">Social Listening</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/sparkles.png" alt="sparkles.png">
                    <span class="ms-2 m-auto">Influencer / KOL</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/chart-pie.png" alt="chart-pie.png">
                    <span class="ms-2 m-auto">Visualize Data</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/services/clipboard-document-list.png"
                      alt="clipboard-document-list.png">
                    <span class="ms-2 m-auto">Performance Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-md-last order-first">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/image-2-c.png" alt="image-2-c.png"
              style="margin-top: -55px" />
          </div>
        </div>
      </div>
    </section>
    <section id="DigitalAdvertising" class="section-active pb-5" style="background-color: #FAF5FF;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row pb-md-5 pb-0" style="margin-top: 80px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/02/image-02.png" alt="image-02.png"
              style="margin-top: -80px" />
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img src="~/assets/SolutionsWizemoves/02/02.png" alt="01.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/02/megaphone.png" alt="01.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              Digital Advertising
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              รับทำโฆษณาออนไลน์
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง Ads Facebook, Google Ads และ Youtube
              รวมถึงยิงแอดใน TikTok, LINE, X, Instagram ให้ความแม่นยำสูง เข้าถึงกลุ่มเป้าหมายได้ตรงจุด กระตุ้นความต้อง
              การต่อสินค้าและบริการของคุณ และกลายมาเป็นฐานลูกค้าถาวร
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">โดยมีพาร์ทเนอร์ที่ร่วมงานกับเรา</p>
            <img class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/02/Frame_427319508.png"
              alt="Frame 427319508.png">
            <p class="text-s-24 color-1F2937 text-w-700 mb-4 mt-5">ผลงานของเรา</p>
            <KeenSliderPortfolio02 />
            <p class="text-s-24 color-1F2937 text-w-700 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/02/ic_baseline-facebook.png" alt="ic_baseline-facebook.png">
                    <span class="ms-2 m-auto">Facebook Ads</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/02/ri_google-fill.png" alt="ri_google-fill.png">
                    <span class="ms-2 m-auto">Google Ads</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/02/ic_baseline-tiktok.png" alt="ic_baseline-tiktok.png">
                    <span class="ms-2 m-auto">TikTok Ads</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/02/jam_youtube.png" alt="jam_youtube.png">
                    <span class="ms-2 m-auto">Youtube Ads</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/02/uil_line.png" alt="uil_line.png">
                    <span class="ms-2 m-auto">Line Ads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="ContentMarketing" class="section-active">
      <div class="container p-lg-0 p-4">
        <div class="row pb-5" style="margin-top: 100px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0">
            <img src="~/assets/SolutionsWizemoves/03/03.png" alt="03.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/03/document-text.png" alt="document-text.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              Content Marketing
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              รับทำคอนเทนต์โฆษณา
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              ผู้เชี่ยวชาญในด้านการทำ Content Marketing รับวางแผนคอนเทนต์ รับทำคอนเทนต์โฆษณา เพื่อเพิ่มยอดขาย
              พร้อมบริการแอดมินดูแลเพจครบวงจร ที่จะช่วยสร้างธุรกิจของคุณให้เป็นที่น่า จดจำและเติบโตอย่างก้าวกระโดด
            </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/03/rectangle-group.png" alt="rectangle-group.png">
                    <span class="ms-3 m-auto">Segment Tactic</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/03/user.png" alt="user.png">
                    <span class="ms-3 m-auto">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-md-last order-first">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/image-2-c.png" alt="image-2-c.png"
              style="margin-top: -110px" />
          </div>
        </div>
      </div>
    </section>
    <section id="eDistributor" class="section-active pb-5" style="background-color: #FAF5FF;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row pb-md-5 pb-0" style="margin-top: 80px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/04/image-2-c.png" alt="image-2-c.png"
              style="margin-top: -80px" />
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img src="~/assets/SolutionsWizemoves/04/04.png" alt="04.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/04/globe-alt.png" alt="04.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              e-Distributor
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              รับจัดการช่องทางขายออนไลน์
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              บริการจัดการช่องทางขายออนไลน์ ด้วยทีมงานมืออาชีพที่จะดูแลทุกขั้นตอนการขาย พร้อมวาง แผนการตลาดบน
              Marketplace เพื่อไม่ให้พลาดทุกแคมเปญสำคัญ ที่ช่วยยกระดับช่องทางขาย และกระจายสินค้าบนช่องทางออนไลน์ เข้าถึง
              Customer Insight และทำ Data Analytics เพื่อปรับปรุง Performance ให้ตอบโจทย์ความต้องการของลูกค้า ได้ตรงจุด
              ทำให้ธุรกิจคุณเติบโต ได้อย่างยั่งยืน
            </p>
            <ul class="mt-4">
              <li class="text-s-24 p-0"><span class="font-bd">Order Management System :</span>
                รวบรวมออเดอร์จากทุกช่องทางมาไว้ ในที่เดียว เก็บรวบรวมข้อมูลเป็นหนึ่ง เดียว พร้อมจัดการออเดอร์และสต็อก
                อย่างง่ายดาย</li>
              <li class="text-s-24 p-0"><span class="font-bd">Fulfillment :</span> เก็บ แพ็ค ส่งให้ถึงมือลูกค้า ลดระยะ
                เวลาการทำงานให้คุณได้โฟกัสการ เติบโตของธุรกิจได้อย่างเต็มที่</li>
              <li class="text-s-24 p-0"><span class="font-bd">Online Advertising :</span> เพิ่มการเข้าถึงสินค้า
                และร้านค้าของ คุณบนช่องทาง Marketplace และ Social Media</li>
              <li class="text-s-24 p-0"><span class="font-bd">Business Consult :</span>
                ไม่ใช่แค่ขายแต่พัฒนากลยุทธ์การตลาด และการขายให้ธุรกิจเติบโต อย่างยั่งยืน</li>
            </ul>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">การันตีด้วยประสบการณ์ ความเชี่ยวชาญบนตลาด E-Commerce</p>
            <div class="row mt-2 align-items-center">
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Webflow.png" alt="Webflow.png">
              </div>
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Black-3.png" alt="Black-3.png">
              </div>
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Webflow-2.png" alt="Webflow-2.png">
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Webflow-3.png" alt="Webflow-3.png">
              </div>
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Black-2.png" alt="Black-2.png">
              </div>
              <div class="col-md-3 col-4">
                <img class="img-logo-04" src="~/assets/SolutionsWizemoves/04/Black.png" alt="Black.png">
              </div>
            </div>
            <p class="text-s-24 color-1F2937 text-w-700 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/ic_baseline-insights.png" alt="ic_baseline-insights.png">
                    <span class="ms-2 m-auto">Customer Insight</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/chart-bar.png" alt="chart-bar.png">
                    <span class="ms-2 m-auto">Data Analytics</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/shopping-bag-cog.png" alt="shopping-bag-cog.png">
                    <span class="ms-2 m-auto">OMS</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/cube.png" alt="cube.png">
                    <span class="ms-2 m-auto">Fulfillment</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/megaphone.png" alt="megaphone.png">
                    <span class="ms-2 m-auto">Online Advertising</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/04/chat-bubble-left-right.png"
                      alt="chat-bubble-left-right.png">
                    <span class="ms-2 m-auto">Business Consult</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="WebsiteDevelopment" class="section-active pb-5">
      <div class="container pb-5 p-lg-0 p-4">
        <div class="row pb-5" style="margin-top: 100px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0">
            <img src="~/assets/SolutionsWizemoves/05/05.png" alt="05.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/05/code-bracket-square.png" alt="code-bracket-square.png.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              Website Development
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              รับพัฒนาเว็บไซต์
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              รับทำและออกแบบเว็บไซต์อย่างครบวงจรพร้อมทีมซัปพอร์ตพัฒนาระบบหลังบ้านที่เข้าใจความต้องการของทุกกลุ่ม ธุรกิจ
              ตอบโจทย์ทุกความต้องการด้วยบริการที่ครอบคลุมทุกขั้นตอน ตั้งแต่ การออกแบบเว็บไซต์ พัฒนาระบบหลัง บ้าน
              ไปจนถึงการเชื่อมต่อ API กับระบบต่างๆ บนออนไลน์ เพิ่มโอกาสในการขาย และต่อยอดทุกไอเดียที่มีด้วยผลลัพธ์
              ที่ได้รับการันตีทางธุรกิจที่มีการเติบโตขึ้น จากบริษัทชั้นนำ </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/05/rectangle-group.png" alt="rectangle-group.png">
                    <span class="ms-3 m-auto">UX/UI</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/05/mynaui_api.png" alt="mynaui_api.png">
                    <span class="ms-3 m-auto">API</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-01">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/05/circle-stack.png" alt="circle-stack.png">
                    <span class="ms-3 m-auto">Back-end Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-md-last order-first">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/image-2-c.png" alt="image-2-c.png"
              style="margin-top: -110px" />
          </div>
        </div>
      </div>
    </section>
    <section id="DataAnalytics" class="section-active pb-5" style="background-color: #FAF5FF;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row pb-md-5 pb-0" style="margin-top: 80px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img class="img-fluid" src="~/assets/SolutionsWizemoves/06/image-2-c.png" alt="image-2-c.png"
              style="margin-top: -80px" />
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img src="~/assets/SolutionsWizemoves/06/06.png" alt="06.png" class="img-number" />
            <img src="~/assets/SolutionsWizemoves/06/presentation-chart-line.png" alt="06.png" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              Data Analytics
            </p>
            <p class="text-s-36 text-w-700 color-8B5CF6 mb-0">
              รับวิเคราะห์ข้อมูล
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              ข้อมูลคือขุมทรัพย์ของคุณ เราช่วยคุณขุดหาข้อมูลสำคัญ เพื่อวางแผนกลยุทธ์ทางการตลาดที่ แม่นยำ ด้วยการรวบ
              รวมข้อมูลจากทุกช่องทาง และจัดสรรให้เป็นระเบียบ เข้าใจง่าย พร้อมทั้ง วิเคราะห์ข้อมูลเชิงลึก
              เพื่อให้คุณเข้าใจลูกค้า และตลาด ช่วยให้มองเห็นโอกาสทางการตลาดใหม่ๆ ในการต่อยอดธุรกิจให้เติบโต ไม่ว่าจะเป็น
            </p>
            <ul>
              <li class="text-s-24 p-0">เชื่อมต่อข้อมูล Facebook Ads Manager แสดงผลลัพธ์ได้ทุกรูปแบบ</li>
              <li class="text-s-24 p-0">นำข้อมูลมาแสดงเป็นภาพให้สามารถ เห็นโอกาสทางธุรกิจ และต่อยอดได้</li>
            </ul>
            <p class="text-s-24 color-1F2937 text-w-700 mb-4 mt-5">ผลงานของเรา</p>
            <KeenSliderPortfolio06 />
            <p class="text-s-24 color-1F2937 text-w-700 mb-0 mt-5">เครื่องมือที่ใช้</p>
            <div class="row">
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/06/ic_baseline-facebook.png" alt="ic_baseline-facebook.png">
                    <span class="ms-2 m-auto">Facebook Ads API</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/06/carbon_dashboard.png" alt="carbon_dashboard.png">
                    <span class="ms-2 m-auto">Dashboard Design</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-6 pe-0">
                <div class="card card-02">
                  <div class="card-body d-flex">
                    <img src="~/assets/SolutionsWizemoves/06/circle-stack.png" alt="circle-stack.png">
                    <span class="ms-2 m-auto">Big Data Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-img-3">
      <div class="bg-color-2">
        <div class="container pb-5 p-lg-0 p-4">
          <div class="row d-none d-md-block">
            <div class="col-12 text-center color-FFFFFF d-flex" style="height: 400px">
              <h2 class="text-s-60 text-w-700 m-auto">
                เราเข้าใจ อยู่เคียงข้างธุรกิจด้วยประสบการณ์<br /> การทำการตลาดออนไลน์มามากกว่า 10 ปี
              </h2>
            </div>
          </div>
          <div class="row d-block d-md-none">
            <div class="col-12 text-center color-FFFFFF d-flex" style="height: 312px">
              <h2 class="text-s-36 text-w-700 m-auto">
                เราเข้าใจ อยู่เคียงข้างธุรกิจด้วย<br /> ประสบการณ์การทำการตลาด<br />ออนไลน์มามากกว่า 10 ปี
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Success />
    </section>
    <section>
      <Customer />
    </section>
  </div>
</template>

<script>
import InterestingArticles from '@/components/InterestingArticles'
import Preloader from '@/components/Preloader'
import KeenSliderPortfolio01 from '@/components/Solutions/Wizemoves/KeenSliderPortfolio01'
import KeenSliderPortfolio02 from '@/components/Solutions/Wizemoves/KeenSliderPortfolio02'
import KeenSliderPortfolio06 from '@/components/Solutions/Wizemoves/KeenSliderPortfolio06'
import Section00 from '@/components/Solutions/Wizemoves/Section00'
import Success from '@/components/Solutions/Wizemoves/Success'
import Customer from '@/components/Solutions/Wizemoves/Customer'
import FormDataUser from '@/components/Solutions/Wizemoves/FormDataUser'
import SuccessForm from '@/components/Solutions/SuccessForm'
export default {
  name: 'SolutionsWizemoves',
  layout: 'layoutV2',
  components: {
    InterestingArticles,
    Preloader,
    KeenSliderPortfolio01,
    KeenSliderPortfolio02,
    KeenSliderPortfolio06,
    Section00,
    Success,
    Customer,
    FormDataUser,
    SuccessForm
  },
  head() {
    return this.$headUtil({
      lang: this.$i18n.locale == 'th-TH' ? 'th-TH' : 'en-TH',
      title: 'รับทำการตลาดออนไลน์ โฆษณาออนไลน์ Social Media',
      route: process.env.MAIN_URL + this.$route.path,
      description:
        'Sellsuki รับทำโฆษณาออนไลน์ การตลาดออนไลน์ และ Social Media Marketing ครอบคลุมการยิงแอดบน Facebook, TikTok, Google และแพลตฟอร์มอื่น ๆ',
    })
  },
  data() {
    return {
      isHidden: false,
      lang: this.$i18n.locale || 'th-TH',
      responseData: [],
      animation1: false,
      showDiv: false,
      activeSection: "BusinessConsulting",
      buttons: [
        { label: "Business Consulting", id: "#BusinessConsulting", name: "BusinessConsulting" },
        { label: "Digital Advertising", id: "#DigitalAdvertising", name: "DigitalAdvertising" },
        { label: "Content Marketing", id: "#ContentMarketing", name: "ContentMarketing" },
        { label: "e-Distributor", id: "#eDistributor", name: "eDistributor" },
        { label: "Website Development", id: "#WebsiteDevelopment", name: "WebsiteDevelopment" },
        { label: "Data Analytics", id: "#DataAnalytics", name: "DataAnalytics" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None",
      interested: this.$route.query.bu
    }
  },
  jsonld() {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: this.$t('Menu.Home'),
            item: 'https://www.sellsuki.co.th/',
          },
          {
            '@type': 'ListItem',
            position: 1,
            name: this.$t('Menu.Solution'),
            item: 'https://www.sellsuki.co.th/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'wizemoves',
            item: 'https://www.sellsuki.co.th/solutions/wizemoves',
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'เริ่มต้นทำโฆษณาออนไลน์ ต้องรู้อะไรบ้าง',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1. ใครคือกลุ่มเป้าหมาย หรือกลุ่มลูกค้าของธุรกิจ  \n2. เลือก Social Media Platform ที่เหมาะสมกับกลุ่มเป้าหมายของธุรกิจ\n3. วางวัตถุประสงค์ในการตีตลาด เช่น ทำให้เป็นที่รู้จัก หรือสร้างยอดขาย \n4. งบประมาณที่จะใช้ในการทำแคมเปญนั้นๆ \n5. ระยะเวลาในการทำแคมเปญ',
            },
          },
          {
            '@type': 'Question',
            name: 'ทำโฆษณาออนไลน์ สำหรับขายของออนไลน์ ต้องใช้งบประมาณเท่าไหร่',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'สำหรับการจัดสรรงบประมาณที่จะนำมาใช้เพื่อทำการโฆษณาออนไลน์ แบ่งตามปัจจัยในการทำโฆษณา ดังนี้\n- วัตถุประสงค์ในการทำโฆษณา\n- ขนาดกลุ่มเป้าหมายที่ต้องการ ซึ่งแบ่งตามความสนใจของกลุ่มเป้าหมาย\n- ตำแหน่งการทำโฆษณา\n- ระดับการแข่งขันในตลาด',
            },
          },
          {
            '@type': 'Question',
            name: 'การทำโฆษณาแต่ละแพลตฟอร์ม ต่างกันอย่างไร',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'เพราะในแต่ละแพลตฟอร์มต่างก็มีฐานลูกค้าที่แตกต่างกัน ดังนั้นหากต้องการทำโฆษณาออนไลน์บนช่องทาง Social Media ต่างๆ คุณจะต้องมีการวางวัตถุประสงค์ หรือมีการวางแผนการตลาดเกี่ยวกับการทำแอดโฆษณา เพื่อให้สอดคล้อง และตรงตามเป้าหมายที่คุณต้องการให้ตอบโจทย์  อีกทั้งยังต้องมีความเข้าใจถึงเงื่อนไขนโยบาย ข้อห้ามต่างๆ ที่อาจจะเกิดข้อผิดพลาดต่อการทำโฆษณาบนออนไลน์ได้',
            },
          },
          {
            '@type': 'Question',
            name: 'ทำไมการทำโฆษณาออนไลน์ถึงสำคัญกับธุรกิจ',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'จาก Offline สู่ Online เมื่อโลกออนไลน์เข้ามามีบทบาทมากขึ้น การทำโฆษณาออนไลน์จึงมีความสำคัญอย่างมาก ที่จะช่วยให้ธุรกิจของคุณไปต่อได้  ไม่ว่าจะเป็นเพิ่มยอดขาย กระตุ้นการมองเห็น สร้างการรับรู้ตัวตนของแบรนด์ ก็สามารทำได้ง่าย ๆ ผ่านการโฆษณา ในการทำธุรกิจออนไลน์จะรอดหรือไม่ ก็ขึ้นอยู่กับว่า คุณจะสร้างประสบการณ์ที่ดีให้ลูกค้าประทับใจได้หรือไม่ เพราะความเชื่อมั่นในเรื่องของภาพลักษณ์ จะเปิดโอกาสธุรกิจสู่อนาคตได้อย่างแน่นอน',
            },
          },
          {
            '@type': 'Question',
            name: 'อยากขายของออนไลน์ให้ปัง ทำไมต้องยิงแอดโฆษณาออนไลน์ ',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'การทำแอดโฆษณา หรือที่เรียกกันว่า <b>ยิงแอด</b> ถือว่าเป็นหนึ่งช่องทางที่สามารถช่วยกระตุ้นให้ธุรกิจขายของออนไลน์ดีขึ้นได้ โดยที่ไม่ต้องเสียเวลาไปนั่งขายแบบวันต่อวันไร้จุดหมาย เพราะการยิงแอด เป็นการทำโฆษณา ผ่านช่องทางออนไลน์ต่าง ๆ เพื่อเป็นการโปรโมทสินค้าและบริการไปยังกลุ่มเป้าหมายที่คุณต้องการได้โดยตรง เป็นการเพิ่มโอกาสให้กลุ่มเป้าหมายที่ต้องการกลายมาเป็นลูกค้าของคุณ เพิ่มยอดขายให้แก่ธุรกิจได้มากขึ้น',
            },
          },
        ],
      },
      {
        "@context": "https://schema.org/", 
        "@type": "Service", 
        "name": "WizeMoves",
        "image": "",
        "description": "ผู้เชี่ยวชาญด้านธุรกิจออนไลน์และที่ปรึกษาการตลาดครบวงจรตั้งแต่การวางแผน การทำโฆษณาออนไลน์ รวมถึงรับทำโฆษณา Facebook และช่องทางต่างๆ รับทำ Content Marketing ที่น่าสนใจ การจ้าง Influencer เพื่อเพิ่มการเข้าถึง พร้อมทั้งบริการ รับทำเว็บไซต์ และ CRM เพื่อเพิ่มประสิทธิภาพธุรกิจ ครบจบในที่เดียว เพื่อให้ธุรกิจของคุณเติบโต",
        "brand": {
          "@type": "Brand",
          "name": "Sellsuki"
        },
        "sku": "WizeMoves",
        "offers": {
          "@type": "Offer",
          "url": "https://www.sellsuki.co.th/solutions/wizemoves",
          "priceCurrency": "THB",
          "price": "0",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  },
  async asyncData({ $axios, store }) {
    store.commit('setTitle', 'Wizemoves')
    //const responseData = await $axios.$get('https://sskadmin.sellsuki.co.th/api/blogs?populate=*&sort[0]=createdAt:desc&pagination[limit]=4');
    //return { responseData : responseData.data }
  },
  mounted() {
    if (this.$route.query.bu !== undefined) {
      this.$nextTick(() => {
        this.$refs.autoClickButton.click();
      });
    }
    if (this.$route.query.blog !== undefined) {
      this.$nextTick(() => {
        this.$refs.autoClickButton.click();
      });
    }
    window.addEventListener("scroll", this.handleScroll); // Add the scroll event listener
    const options = {
      root: null, // Uses the viewport as the container
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    const sections = document.querySelectorAll('.section-active');
    sections.forEach((section) => observer.observe(section));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up the listener
  },
  methods: {
    openSuccessModal() {
      const btn = document.getElementById('btnSwitchToSuccess');
      if (btn) {
        btn.click();
      }
    },
    eventContactGTM() {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
          event: 'click_btn_consult',
          service_name: 'Wizemoves'
      })
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    },
    setActiveButton(index) {
      this.activeButtonIndex = index; // Set the active button index
    },
    handleScroll() {
      const scrollY = window.scrollY; // Get the current scroll position
      const threshold = 2200; // Define the scroll threshold
      this.showDiv = scrollY > threshold; // Show the div if scrolled beyond the threshold

      let currentScrollY = window.scrollY;

      if (currentScrollY > this.lastScrollY) {
        this.scrollDirection = "Down";
      } else if (currentScrollY < this.lastScrollY) {
        this.scrollDirection = "Up";
        this.showDiv = false;
      }
      this.lastScrollY = currentScrollY;
    },
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.accordion-button {
  background-color: #fbfbfb !important;
  padding: 5px;
}

.form-select {
  border: 0 !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed) {
  box-shadow: none;
}

.item-center {
  display: block !important;
}

.bg {
  background: url('~/assets/image94.webp');
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
}

.bg-icon {
  width: 146px;
  height: 146px;
  background-color: #7c3aed;
  border-radius: 50%;
  left: 8px;
  position: relative;
}

.bg-img-mobile {
  background-image: url(~/assets/SolutionsWizemoves/banner.jpg);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: 75% 200px !important;
}

.bg-img {
  background-image: url(~/assets/SolutionsWizemoves/banner.jpg);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-img-2 {
  background-image: url(~/assets/SolutionsWizemoves/img-bg-1.jpg);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-img-3 {
  background-image: url(~/assets/SolutionsWizemoves/img-bg-2.jpg);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-color-2 {
  background: radial-gradient(50% 50% at 50% 50%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.56) 100%),
    linear-gradient(0deg, rgba(76, 29, 149, 0.2), rgba(76, 29, 149, 0.2));
}

.bg-color {
  background: linear-gradient(90deg,
      rgba(82, 21, 177, 0.5) 0%,
      rgba(82, 21, 177, 0) 100%),
    linear-gradient(90deg, #000000 15.49%, rgba(0, 0, 0, 0) 64.19%);
}

.bg-color-mobile {
  background: linear-gradient(180deg, rgba(82, 21, 177, 0.5) 24.43%, rgba(82, 21, 177, 0) 88.04%), linear-gradient(179.81deg, #000000 41.18%, rgba(0, 0, 0, 0) 66.53%);
}

.bg-icon-main {
  margin-left: -10px !important;
  margin-top: -10px !important;
  background-color: #fcd34d;
  width: 146px;
  height: 146px;
  border-radius: 50%;
}

.theme-background-main {
  background-color: #7c3aed;
}

.theme-background-sub {
  background-color: #fcd34d;
}

.theme-text-main {
  color: #7c3aed;
}

.theme-text-sub {
  color: #fcd34d;
}

.theme-border {
  border-bottom: 1px solid #fcd34d !important;
}

.img-banner-top {
  margin-top: 80px !important;
}

.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(76.62deg, #8b5cf6 33.68%, #f3c307 72.8%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.banner-main {
  height: 550px;
  margin-top: 72px;
}

.btn-banner {
  height: 48px !important;
  color: #4c1d95 !important;
  background-color: #fcd34d !important;
  border: 1px solid #fcd34d !important;
  box-sizing: border-box !important;
  border-radius: 32px !important;
  font-size: 28px;
  font-family: 'Heavent-body';
}

.bg-1 {
  background-size: cover;
}

.card-1 {
  position: relative;
}

.card-1:hover {
  background: #FFFFFF;
  border: 0 !important;
}

.card-1:hover a {
  display: block !important;
}

.card-1 img {
  transition: filter 0.3s ease;
}

.card-1 p {
  transition: filter 0.3s ease;
}

.card-1 a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-1 a:hover {
  color: #FFFFFF !important;
}

.card-1:hover .img-icon img {
  box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
  filter: blur(10px);
}

.card-1:hover p {
  box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
  filter: blur(10px);
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .bg-1 {
    background-image: url(~/assets/SolutionsWizemoves/BG_1.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: -35px !important;
  }

  .bg-icon-single {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -140px;
    margin-top: -55px;
    width: 360px;
    height: 360px;
  }

  .text-card-service {
    font-size: 20px;
    line-height: 20px;
  }

  .img-cover {
    width: 26px;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
      0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
      0px 32px 9px 0px #7b64af00;
    border-radius: 16px;
    border: 1px solid #f5f3ff;
    height: 104px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 15px !important;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -32px
  }

  .img-logo-04 {
    height: 24px;
  }
  .text-s-36 {
    font-size: 32px !important;
    line-height: 32px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .bg-1 {
    background-image: url(~/assets/SolutionsWizemoves/BG_1.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: -35px !important;
  }

  .bg-icon-single {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -140px;
    margin-top: -55px;
    width: 360px;
    height: 360px;
  }

  .text-card-service {
    font-size: 20px;
    line-height: 20px;
  }

  .img-cover {
    width: 26px;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
      0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
      0px 32px 9px 0px #7b64af00;
    border-radius: 16px;
    border: 1px solid #f5f3ff;
    height: 104px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 15px !important;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -32px
  }

  .img-logo-04 {
    height: 24px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .bg-1 {
    background-image: url(~/assets/SolutionsWizemoves/BG.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-bottom: -150px;
    margin-top: -55px;
    width: 380px;
    height: 380px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
      0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
      0px 32px 9px 0px #7b64af00;
    border-radius: 16px;
    border: 1px solid #f5f3ff;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -32px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .bg-1 {
    background-image: url(~/assets/SolutionsWizemoves/BG.png);
    background-repeat: no-repeat;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 146px;
    height: 146px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-left: -170px;
    margin-bottom: -100px;
    margin-top: -35px;
    width: 450px;
    height: 450px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
      0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
      0px 32px 9px 0px #7b64af00;
    border-radius: 16px;
    border: 1px solid #f5f3ff;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -32px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .btn-card-1 {
    background: #7C3AED;
    border: 1px solid #7C3AED;
    color: #FFFFFF;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 24px;
    line-height: 24px;
    width: 72%;
    z-index: 999;
    padding: 10px 20px;
  }

  .bg-1 {
    background-image: url(~/assets/SolutionsWizemoves/BG.png);
    background-repeat: no-repeat;
  }

  .p-custom {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }

  .p-custom-2 {
    padding-left: 65px !important;
    padding-right: 65px !important;
  }

  .mt-custom {
    margin-top: 3rem !important;
  }

  .bg-icon-single {
    width: 146px;
    height: 146px;
    border-radius: 50%;
  }

  .img-section-1 {
    margin-left: -170px;
    margin-bottom: -100px;
    margin-top: -80px;
    width: 450px;
    height: 450px;
  }

  .text-card-service {
    font-size: 36px;
    line-height: 36px;
  }

  .img-cover {
    width: 64px;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
      0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
      0px 32px 9px 0px #7b64af00;
    border-radius: 16px;
    border: 1px solid #f5f3ff;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -32px
  }

  .img-logo-04 {
    height: 100%;
  }
}

.btn-card-1 img {
  margin-top: 0 !important;
}

.card {
  background-color: transparent;
}

.card-01 .card-body {
  padding: 24px 0px;
}

.card-01 img {
  background-color: #F5F3FF;
  border-radius: 8px;
  padding: 8px;
}

.card-01 div {
  font-family: "Heavent-body" !important;
  font-size: 24px;
  line-height: 24px;
  color: #1F2937;
}

.card-02 .card-body {
  padding: 24px 0px;
}

.card-02 img {
  background-color: #EDE9FE;
  border-radius: 8px;
  padding: 8px;
  margin-right: 8px;
}

.card-02 div {
  font-family: "Heavent-body" !important;
  font-size: 24px;
  line-height: 24px;
  color: #1F2937;
}

a {
  color: #7C3AED;
}

a:hover {
  color: #7C3AED !important;
}

.nav-active {
  border-bottom: 5px solid #8B5CF6;
  color: #8B5CF6 !important;
}

.nav-link {
  color: #1F2937 !important;
}

.nav-active .nav-link {
  color: #8B5CF6 !important;
}

.text-s-44 {
  line-height: 44px;
}

.text-s-24 {
  line-height: 24px;
}

.text-s-36 {
  line-height: 36px;
}

.text-s-20 {
  line-height: 20px;
}

/* ----------------------- model ----------------- */
.header-model {
  font-weight: 700;
  line-height: 72px;
  text-align: center;
}

.modal-footer {
  border-top: 0px;
}

.modal-header {
  border-bottom: 0px;
}

.modal-custom-size {
  border-radius: 16px;
  background-color: #FAF5FF;
}
</style>
