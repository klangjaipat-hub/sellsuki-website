<template>
  <div id="BusinessConsulting">

    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content modal-custom-size">
          <div class="modal-header p-0">
            <span id="exampleModalLabel" class="header-model">
              สนใจรับคำปรึกษา
            </span>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              data-tag="close_modal_button"></button>
          </div>
          <div class="modal-body p-0">
            <FormDataUser :interested="interested" :blog="this.$route.query.blog" />
          </div>
        </div>
      </div>
    </div>
    <SuccessForm bu="Martech" />
    <section class="hero-section">
      <div class="bg-img d-none d-md-block" style="margin-top: 62px;">
        <div class="pb-md-0 pb-5 bg-color">
          <div class="container">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-6 col-6" style="z-index: 1;">
                <table class="align-middle banner-main" style="width: 100%">
                  <td class="banner-height">
                    <ol class="font-md">
                      <ul class="breadcrumb">
                        <li>
                          <img class="mb-1 me-1" src="~/assets/SolutionsWizemoves/home.png" /><nuxt-link
                            :to="localePath('/')" data-tag="breadcrumb_business"><span
                              class="text-s-20 color-FFFFFF ms-1">Business</span></nuxt-link>
                          <img class="mb-1 ms-1" src="~/assets/SolutionsWizemoves/chevron-right.png" />
                        </li>
                        <li>
                          <nuxt-link :to="localePath('/solutions/wizemoves')" data-tag="breadcrumb_wizemoves"><span
                              class="text-s-20 color-FFFFFF ms-1">WizeMoves</span></nuxt-link>
                          <img class="mb-1 ms-1" src="~/assets/SolutionsWizemoves/chevron-right.png" />
                        </li>
                        <li>
                          <span class="text-s-20 color-FFFFFF ms-1">WizeMoves MarTech</span>
                        </li>
                      </ul>
                    </ol>
                    <div class="mt-4 pt-3">
                      <h1 class="font-bd text-s-52 color-FFFFFF">
                        WizeMoves MarTech
                      </h1>
                    </div>
                    <p class="font-bd text-s-36 mt-3 color-FFFFFF">
                      เปลี่ยนโอกาสทางการตลาดเป็นความสำเร็จ<br/>
                      ด้วยเทคโนโลยีที่ใช่สำหรับธุรกิจคุณ
                    </p>
                    <p class="text-s-24 mt-3 color-FFFFFF">
                      WizeMoves MarTech ผู้เชี่ยวชาญด้าน MarTech ที่ได้รับความไว้วางใจจากกว่า 500+ แบรนด์<br/>
                      ด้วยโซลูชันที่ช่วยให้การตลาดของคุณมีประสิทธิภาพสูงสุด
                    </p>
                    <div class="d-flex flex-wrap mt-2 mt-xl-3">
                      <div class="badge-wizemoves">
                        <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png"
                          class="icon" />
                        <span class="text text-s-20 font-df">เครื่องมือการตลาด</span>
                      </div>
                      <div class="badge-wizemoves ms-2">
                        <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png"
                          class="icon" />
                        <span class="text text-s-20 font-df">จัดการร้านค้าออนไลน์</span>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap mt-3 mt-xl-4">
                      <nuxt-link :to="{ path: '/solutions/wizemoves/form/martech' }"
                        class="btn-gradient text-s-24 font-md py-2" data-tag="hero_get_free_consultation">
                        <img src="~/assets/SolutionsWizemoves/Consulting/cursor-arrow-rays.png"
                          alt="cursor-arrow-rays.png" class="icon" />
                        <span class="text">รับแผนและคำปรึกษาฟรี</span>
                      </nuxt-link>
                      <a href="tel:0900967526" class="btn-white-violet text-s-24 font-bd py-2 ms-3"
                        data-tag="hero_call_button"><img class="me-2"
                          src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right-color.png"
                          alt="chat-bubble-left-right-color.png.png" />090 096 7526
                      </a>
                    </div>
                  </td>
                </table>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 d-flex" style="z-index: 0;">
                <img class="m-auto d-block d-xl-none img-fluid" src="~/assets/SolutionsWizemoves/Martech/hero-t.png"
                  alt="hero-t.png">
                <img class="img-fluid m-auto d-none d-xl-block" src="~/assets/SolutionsWizemoves/Martech/hero.png"
                  alt="hero.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-img-mobile d-block d-md-none" style="height: auto;margin-top:64px">
        <div class="bg-color-mobile">
          <div class="container p-4 pb-0 p-s-360">
            <div class="row">
              <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <ol class="font-md mt-2">
                  <ul class="breadcrumb">
                    <li>
                      <img class="mb-1 me-1" src="~/assets/SolutionsWizemoves/home.png" /><nuxt-link
                        @click="scrollToTop" :to="localePath('/')" data-tag="breadcrumb_business_mobile"><span
                          class="text-s-20 color-FFFFFF">Business</span></nuxt-link> <img class="mb-1"
                        src="~/assets/SolutionsWizemoves/chevron-right.png" />
                    </li>
                    <li>
                      <nuxt-link @click="scrollToTop" :to="localePath('/solutions/wizemoves')"
                        data-tag="breadcrumb_wizemoves_mobile"><span
                          class="text-s-20 color-FFFFFF ms-1">WizeMoves</span></nuxt-link> <img class="mb-1"
                        src="~/assets/SolutionsWizemoves/chevron-right.png" />
                    </li>
                    <li>
                      <span class="text-s-20 color-FFFFFF ms-1">WizeMoves MarTech</span>
                    </li>
                  </ul>
                </ol>
                <div class="mt-3">
                  <h1 class="font-bd text-s-44 mb-0 color-FFFFFF">
                    WizeMoves MarTech
                  </h1>
                </div>
                <p class="font-bd text-s-24 mt-2 mb-2 color-FFFFFF">
                  เปลี่ยนโอกาสทางการตลาดเป็นความสำเร็จ<br/>
                  ด้วยเทคโนโลยีที่ใช่สำหรับธุรกิจคุณ
                </p>
                <p class="text-s-20 mb-1 color-FFFFFF">
                  WizeMoves MarTech ผู้เชี่ยวชาญด้าน MarTech ที่ได้รับความไว้วางใจจากกว่า 500+ แบรนด์<br/>
                  ด้วยโซลูชันที่ช่วยให้การตลาดของคุณมีประสิทธิภาพสูงสุด
                </p>
                <div class="d-flex flex-wrap mt-2">
                  <div class="badge-wizemoves">
                    <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png" class="icon" />
                    <span class="text text-s-18 font-df">เครื่องมือการตลาด</span>
                  </div>
                  <div class="badge-wizemoves ms-2">
                    <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png" class="icon" />
                    <span class="text text-s-18 font-df">จัดการร้านค้าออนไลน์</span>
                  </div>
                </div>
                <div class="d-flex flex-wrap mt-md-4 mt-3">
                  <nuxt-link :to="{ path: '/solutions/wizemoves/form/martech' }"
                    class="btn-gradient text-s-20 font-md py-2" data-tag="hero_get_free_consultation_mobile">
                    <img src="~/assets/SolutionsWizemoves/Consulting/cursor-arrow-rays.png" alt="cursor-arrow-rays.png"
                      class="icon" />
                    <span class="text">รับแผนและคำปรึกษาฟรี</span>
                  </nuxt-link>
                  <a href="tel:0900967526" class="btn-white-violet text-s-20 font-bd py-2 ms-3"
                    data-tag="hero_call_button_mobile"><img class="me-2"
                      src="~/assets/SolutionsWizemoves/Edis/phone.png" alt="phone.png" />090 096 7526
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center" style="min-height: 300px;">
                  <img class="img-fluid mx-auto d-block p-3" src="~/assets/SolutionsWizemoves/Martech/hero-m.png"
                    alt="hero-m.png" style="max-width: 100%; height: auto;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="scroll-div animate__animated  animate__fadeIn" v-if="showDiv"
      style="position: fixed;top: 0px;z-index: 999;width: 100%;background: #7C3AED;">
      <nav class="navbar navbar-expand-lg ps-md-0 pe-md-0 ps-3 pe-3 p-0"
        style="z-index: 9999;box-shadow: 0px 1px 3px 0px #7B64AF12,0px 5px 5px 0px #7B64AF0F,0px 12px 7px 0px #7B64AF0A,0px 20px 8px 0px #7B64AF03,0px 32px 9px 0px #7B64AF00;">
        <div class="container">
          <div class="ml-2 d-lg-block d-none">
            <ul class="navbar-nav text-s-24 text-w-500">
              <div v-for="(button, index) in buttons" :key="index"
                :class="{ 'nav-active': activeSection === button.name }" @click="setActiveButton(index)"
                :data-tag="`navbar_scroll_${button.name}`">
                <a :href="button.id">
                  <li class="nav-item d-flex ps-3 pe-3" style="padding-top: 19px;padding-bottom: 19px;">
                    <div class="nav-link p-0 text-s-24 m-auto">{{ button.label }}</div>
                  </li>
                </a>
              </div>
            </ul>
          </div>
          <div class="ml-2 d-lg-none d-block">
            <select @change="handleChange(activeSection)" v-model="activeSection"
              class="form-select custom-select mt-3 mb-3 text-s-24 font-md custom-select"
              aria-label="Default select example" data-tag="navbar_scroll_dropdown">
              <option v-for="(button, index) in buttons" :key="index" :value="button.name">{{ button.label }}</option>
            </select>
          </div>
          <div class="mt-1">
            <nuxt-link :to="{ path: '/solutions/wizemoves/form/martech' }" class="btn-violet-white text-s-24 font-df p-1 ps-3 pe-3"
              data-tag="navbar_scroll_free_consultation"><img class="me-2"
                src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right-color.png"
                alt="chat-bubble-left-right-color.png.png" />ปรึกษาฟรี</nuxt-link>
          </div>
        </div>
      </nav>
    </section>

    <section id="PainPoints" class="section-active pb-xl-5 pb-0">
      <div class="container pb-0 p-md-0 p-4">
        <div class="row pt-5 justify-content-center">
          <div class="col-12 mt-md-5 mt-0 text-center fade-in-up" v-intersect>
            <div class="m-auto" style="
                  width: 115px;
                  border: 2px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Pain Points</p>
            </div>
            <h2 class="text-s-60 text-w-700 color-1F2937 mt-5 d-none d-md-block">
              กำลังเผชิญ ปัญหาเหล่านี้อยู่หรือเปล่า?
            </h2>
            <h2 class="text-s-36 text-w-700 color-1F2937 mt-5 d-block d-md-none">
              กำลังเผชิญ<br />ปัญหาเหล่านี้อยู่หรือเปล่า?
            </h2>
            <p class="text-s-24 mt-3">การทำให้ร้านค้าออนไลน์เติบโต ไม่ได้ขึ้นอยู่กับแค่การมีสินค้า แต่ต้องอาศัย <span
                class="font-bd">การจัดการร้านค้า</span> ที่รอบด้าน <span class="font-bd">การตลาดที่เข้าถึง</span>
              และ<span class="font-bd">ทีมงานที่มีความเชี่ยวชาญ</span></p>
          </div>
          <div class="row mt-md-5 mt-2 mb-3 justify-content-center fade-in-up" v-intersect>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-xl-3 p-2">
              <div class="card-1 d-none d-md-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Martech/icon-1.svg" alt="icon-1.svg">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-xl-3 mt-xl-4 mb-0 mt-3 text-height">ข้อมูลลูกค้ากระจัดกระจาย</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">ข้อมูลลูกค้าไม่ได้อยู่ในที่เดียวกัน ทำให้ดูแลไม่ทั่วถึงและเอามาใช้ ต่อไม่ได้เต็มที่</p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Martech/icon-1.svg"
                    alt="icon-1.svg">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">ข้อมูลลูกค้ากระจัดกระจาย</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ข้อมูลลูกค้าไม่ได้อยู่ในที่เดียวกัน ทำให้ดูแลไม่ทั่วถึงและเอามาใช้ ต่อไม่ได้เต็มที่</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-xl-3 p-2">
              <div class="card-1 d-none d-md-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Martech/icon-2.svg" alt="icon-2.svg">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-xl-3 mt-xl-4 mb-0 mt-3 text-height">
                    ไม่เข้าใจลูกค้า</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">
                    ไม่รู้ว่าลูกค้าจริงๆ แล้วคือใคร มาจากไหน และมีพฤติกรรมอย่างไรทำให้ไม่สามารถรับมือกับความต้องการที่ซับซ้อน
                  </p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Martech/icon-2.svg"
                    alt="icon-2.svg">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">ไม่เข้าใจลูกค้า</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">
                      ไม่รู้ว่าลูกค้าจริงๆ แล้วคือใคร มาจากไหน และมีพฤติกรรมอย่างไรทำให้ไม่สามารถรับมือกับความต้องการที่ซับซ้อน
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-xl-3 p-2">
              <div class="card-1 d-none d-md-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Martech/icon-3.svg" alt="icon-3.svg">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-xl-3 mt-xl-4 mb-0 mt-3 text-height">ใช้ข้อมูลลูกค้าไม่คุ้ม
                  </p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">มีข้อมูลแต่เอามาใช้ประโยชน์ไม่ได้ ทั้งในแง่ของการเชื่อมโยงการ ตลาดกับยอดขายหรือการปรับตัวให้ทันกับเทคโนโลยีใหม่ๆ ที่จะ ช่วยให้ธุรกิจเติบโตได้มากกว่านี้</p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Martech/icon-3.svg"
                    alt="icon-3.svg">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">ใช้ข้อมูลลูกค้าไม่คุ้ม</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">มีข้อมูลแต่เอามาใช้ประโยชน์ไม่ได้ ทั้งในแง่ของการเชื่อมโยงการ ตลาดกับยอดขายหรือการปรับตัวให้ทันกับเทคโนโลยีใหม่ๆ ที่จะ ช่วยให้ธุรกิจเติบโตได้มากกว่านี้</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fade-in-up" v-intersect>
          <div class="row pb-5">
            <div class="col-12 text-center">
              <nuxt-link :to="{ path: '/solutions/wizemoves/form/martech' }"
                class="btn-gradient text-s-24 font-md" data-tag="pain_points_get_free_consultation">
                <span class="text">ปรึกษากลยุทธ์กับทีมฟรี</span>
              </nuxt-link>
            </div>
          </div>
          <div class="row mt-5 pt-5">
            <div class="col-md-6 col-12">
              <img class="img-fluid d-none d-xl-block" 
                  src="~/assets/SolutionsWizemoves/Martech/website.png" 
                  alt="Desktop Version" />

              <img class="img-fluid d-none d-md-block d-xl-none" 
                  src="~/assets/SolutionsWizemoves/Martech/website-t.png" 
                  alt="Tablet Version" />

              <img class="img-fluid d-block d-md-none" 
                  src="~/assets/SolutionsWizemoves/Martech/website-m.png" 
                  alt="Mobile Version" />
            </div>
            <div class="col-md-6 col-12 mt-md-0 mt-5">
              <p class="text-s-44 font-bd mb-0">เปลี่ยนเว็บไซต์ธรรมดา ให้กลายเป็น<br/>เครื่องมือการตลาดอัจฉริยะ</p>
              <p class="text-s-24 font-df mt-4 mb-2 mb-xl-3">
                <b class="font-bd">MarTech</b> หรือ <b class="font-bd">Marketing Technology</b> เทคโนโลยีที่ทำให้การตลาดแม่นยำ อัตโนมัติ และขับเคลื่อนด้วย
                ข้อมูล เพื่อเพิ่มยอดขาย ยกระดับประสบการณ์ลูกค้า และสร้างการเติบโตที่ยั่งยืน
              </p>
              <p class="text-s-24 font-df">
                ในยุคที่พฤติกรรมผู้บริโภคเปลี่ยนแปลงอย่างรวดเร็ว การตัดสินใจด้วยข้อมูลที่แม่นยำคือกุญแจสำคัญสู่ ความสำเร็จ
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 mb-xl-5 mb-md-4 mb-4">
              <p class="text-s-44 font-bd mb-0">MarTech จะช่วยให้คุณ...</p>
            </div>
            <div class="col-md-3 col-6">
              <img class="icon-size mb-xl-4 mb-3" src="~/assets/SolutionsWizemoves/Martech/icon/Icon-1.svg"
                alt="Icon-1.svg" />
              <p class="text-s-24 font-bd mb-xl-3 mb-2">รู้จักลูกค้าในเชิงลึก</p>
              <p class="text-s-24 font-df">วิเคราะห์พฤติกรรม ความสนใจ และความต้องการ ของลูกค้าแต่ละราย เพื่อสร้างประสบการณ์ที่ตรงใจ</p>
            </div>
            <div class="col-md-3 col-6">
              <img class="icon-size mb-xl-4 mb-3" src="~/assets/SolutionsWizemoves/Martech/icon/Icon-2.svg"
                alt="Icon-1.svg" />
              <p class="text-s-24 font-bd mb-xl-3 mb-2">สื่อสารได้ตรงจุด</p>
              <p class="text-s-24 font-df">ส่งข้อความหรือข้อเสนอที่ใช่ ให้กับคนที่ใช่ ในเวลาที่ เหมาะสม ผ่านช่องทางที่ลูกค้าชอบ</p>
            </div>
            <div class="col-md-3 col-6">
              <img class="icon-size mb-xl-4 mb-3" src="~/assets/SolutionsWizemoves/Martech/icon/Icon-3.svg"
                alt="Icon-1.svg" />
              <p class="text-s-24 font-bd mb-xl-3 mb-2">วัดผลได้แม่นยำ</p>
              <p class="text-s-24 font-df">ติดตามผลลัพธ์ของแคมเปญแบบเรียลไทม์ พร้อม ปรับกลยุทธ์ให้ดีขึ้นอยู่เสมอ</p>
            </div>
            <div class="col-md-3 col-6">
              <img class="icon-size mb-xl-4 mb-3" src="~/assets/SolutionsWizemoves/Martech/icon/Icon-4.svg"
                alt="Icon-1.svg" />
              <p class="text-s-24 font-bd mb-xl-3 mb-2">ทำงานอัตโนมัติ</p>
              <p class="text-s-24 font-df">ลดงานมือ ซ้ำซ้อน เพิ่มเวลาให้ทีมไปโฟกัสกับ กลยุทธ์</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div id="WhyUS" class="pt-5"></div>
    <section id="WhyUS" class="bg-img-3 mb-md-0 mb-5 section-active">
      <div class="pt-5 pb-5">
        <div class="container">
          <div class="d-none d-md-block">
            <div class="row py-80">
              <div class="col-12 text-center mb-5">
                <div class="border-ranbow d-inline-flex mt-5">
                  <span class="text-ranbow text-s-24 text-w-700 m-0">Why Us</span>
                </div>
              </div>
              <div class="col-6 col-6-custom-1 color-FFFFFF d-flex fade-in-up" v-intersect>
                <div class="text-start">
                  <h2 class="text-s-60 font-bd mb-0 d-lg-block d-md-none">
                    ทำไมต้องเลือกบริการ<br /> WizeMoves MarTech
                  </h2>
                  <h2 class="text-s-44 font-bd mb-0 d-lg-none d-md-block">
                    ทำไมต้องเลือกบริการ<br /> WizeMoves MarTech
                  </h2>
                  <p class="text-s-24 mt-4">เว็บไซต์ที่ไม่ได้แค่ “สวย” แต่ “ฉลาด” ออกแบบมาเพื่อปิดยอดขาย <br class="d-none d-xl-block"/>วัดผลได้ และต่อยอดแคมเปญได้ทุกช่องทาง</p>
                </div>
              </div>
              <div class="col-6 col-6-custom-2 fade-in-up" v-intersect>
                <CardBgImg type="Martech" />
              </div>
            </div>
          </div>
          <div class="row ps-4 pe-4 d-block d-md-none">
            <div class="col-12 text-center pt-4 pb-4">
              <div class="border-ranbow d-inline-flex">
                <span class="text-ranbow text-s-24 text-w-700 m-0">Why Us</span>
              </div>
            </div>
            <div class="col-12 color-FFFFFF fade-in-up" v-intersect>
              <div class="text-start">
                <h2 class="text-s-44 font-bd mb-5">
                  <h2 class="text-s-44 font-bd mb-0">
                    ทำไมต้องเลือกบริการ<br /> WizeMoves MarTech
                  </h2>
                  <p class="text-s-24 mt-3">เว็บไซต์ที่ไม่ได้แค่ “สวย” แต่ “ฉลาด” ออกแบบมาเพื่อปิดยอดขาย วัดผลได้ และต่อยอดแคมเปญได้ทุกช่องทาง</p>
                </h2>
              </div>
            </div>
            <div class="col-12 fade-in-up" v-intersect>
              <CardBgImg type="Martech" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-lg-5 pt-md-5 ps-lg-2 pe-lg-2 mt-0 pt-0 ps-4 pe-4">
      <div class="cart-img-text">
        <div class="cart-color-text">
          <div class="row d-none d-md-block">
            <div class="col-12 text-center color-FFFFFF d-flex">
              <div class="mt-auto mx-auto d-lg-block d-md-none">
                <h2 class="text-s-60 mb-2 font-bd mt-auto mx-auto">
                  Martech ไม่ใช่เพียงเครื่องมือ <br class="d-block d-xl-none" />แต่เป็นการปฏิวัติวิธีการทำการตลาด<br />
                  ให้มีประสิทธิภาพและตอบโจทย์ลูกค้ายุคดิจิทัล
                </h2>
              </div>
              <div class="mt-auto mx-auto d-lg-none d-md-block">
                <h2 class="text-s-44 mb-0 font-bd mt-auto mx-auto">
                  Martech ไม่ใช่เพียงเครื่องมือ<br />แต่เป็นการปฏิวัติวิธีการทำการตลาด<br />
                  ให้มีประสิทธิภาพและตอบโจทย์ลูกค้ายุคดิจิทัล
                </h2>
              </div>
            </div>
          </div>
          <div class="row d-block d-md-none">
            <div class="col-12 text-center color-FFFFFF d-flex ps-3 pe-3">
              <div class="mt-auto mx-auto">
                <h2 class="text-s-44 mb-0 font-bd mt-auto mx-auto">
                  Martech ไม่ใช่เพียงเครื่องมือ<br />แต่เป็นการปฏิวัติวิธีการทำ<br />การตลาด
                  ให้มีประสิทธิภาพ<br />และตอบโจทย์ลูกค้ายุคดิจิทัล
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Services" class="section-spacing section-active">
      <div class="container ps-xl-0 pe-xl-0 ps-4 pe-4">
        <div class="row">
          <div class="col-12 text-center mt-5 mb-5 pb-0 mb-xl-5 pb-xl-5">
            <div class="m-auto" style="
                width: 95px;
                border: 2px solid #00000008;
                backdrop-filter: blur(10px);
                border-radius: 32px;
                background: #fff;
              ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Services</p>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <p class="text-s-60 font-bd mb-0 d-none d-xl-block" style="line-height: 120%;">
              Solution การตลาดครบวงจร</p>
            <p class="text-s-44 font-bd mb-0 d-none d-md-block d-xl-none">
              Solution <br/>การตลาดครบวงจร</p>
            <p class="text-s-44 font-bd mb-4 d-block d-md-none">Solution การตลาดครบวงจร
            </p>
          </div>
          <div class="col-md-6 col-12">
            <p class="text-s-24 font-df mb-0">เปลี่ยนข้อมูลลูกค้าให้เป็นยอดขาย ด้วยเครื่องมือ MarTech อัจฉริยะ ที่ช่วยให้คุณเข้าใจลูกค้าและทำการตลาด ได้แม่นยำในทุกขั้นตอน เครื่องมือการตลาดล้ำสมัยที่ Wizemoves MarTech ช่วยคุณได้</p>
          </div>
        </div>
        <div class="mt-5 pt-5 mt-lg-0 pt-lg-0 mt-xl-5 pt-xl-5">
          <div class="row pt-lg-5 mt-lg-5 pt-0 mt-0 ps-xl-4 pe-xl-4 ps-auto pe-auto">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-0 ps-0 pb-200">
              <div v-for="(service, index) in services" :key="service.id">
                <div v-if="index > 0" class="space-services"></div>
                <img class="img-fluid mb-4 d-block d-md-none" :src="service.image" :alt="service.heading" />
                <span class="text-s-24 font-md text-hl">{{ service.subheading }}</span>
                <p class="text-s-52 font-md color-1F2937 mb-0 mt-2 mt-xl-4">
                  {{ service.heading }}
                </p>
                <p class="text-s-24 color-1F2937 mb-0 mt-3">
                  {{ service.description }}
                </p>
                
                <div v-if="service.items.length > 0" class="row mt-4 space-tigger">
                  <div v-for="item in service.items" :key="item.title" class="col-lg-6 col-12 pe-0">
                    <div class="card card-01">
                      <div class="card-body d-flex">
                        <img :src="item.icon" :alt="item.title">
                        <span class="ms-2 m-auto">{{ item.title }}</span>
                      </div>
                      <p class="text-s-24 font-df pe-4">{{ item.description }}</p>
                    </div>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-12">
                    <nuxt-link :to="{ path: service.link }"
                      class="btn-transparent-violet text-s-24 font-md py-2"
                      data-tag="services_merchandise_free_consultation">
                      <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>


            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-none d-md-block">
              <div class="sticky-macbook">
                <transition name="fade" mode="out-in"> <img class="p-xl-4 p-0 fade-transition" :key="currentImage"
                    :src="currentImage" :alt="currentImage" />
                </transition>
                <img class="p-xl-4 p-0" src="~/assets/SolutionsWizemoves/Edis/aura.png" alt="aura"
                  style="position: absolute;max-width: 95%;width: 100%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Process" class="section-active">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pb-md-4 pb-0">
          <div class="col-12 mt-0 text-center fade-in-up" v-intersect>
            <div class="m-auto" style="
                  width: 95px;
                  border: 1px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Process</p>
            </div>
            <h2 class="text-s-60 font-bd color-1F2937 mt-3">
              ขั้นตอนการพัฒนา
            </h2>
          </div>
          <ScrollTrigger />
        </div>
      </div>
    </section>

    <section id="Pricing" class="section-spacing section-active">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pb-md-4 pb-0">
          <div class="col-12 mt-0 text-center fade-in-up" v-intersect>
            <div class="m-auto" style="
                  width: 95px;
                  border: 1px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
              <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Pricing</p>
            </div>
            <h2 class="text-s-60 font-bd color-1F2937 mt-3 mb-2">
              เริ่มต้นการเดินทางสู่ความสำเร็จ
            </h2>
            <p class="text-s-24 mb-1 color-6B7280">
              Wizemoves ให้บริการพัฒนาโซลูชัน Martech ตามความต้องการเฉพาะของธุรกิจคุณ
            </p>
          </div>
          <Package />
        </div>
      </div>
    </section>

    <section class="section-spacing">
      <BlogWizemoves :responseData="responseData" />
    </section>

    <section class="section-spacing">
      <CardContact page="Martech" />
    </section>
  </div>
</template>

<script>
import CardBgImg from '@/components/Solutions/Wizemoves/CardBgImg'
import BlogWizemoves from '@/components/Solutions/Wizemoves/BlogWizemoves'
import CardContact from '@/components/Solutions/Wizemoves/CardContact'
import FormDataUser from '@/components/Solutions/Wizemoves/FormDataUser'
import SuccessForm from '@/components/Solutions/SuccessForm'
import ScrollTrigger from '@/components/Solutions/Wizemoves/Martech/ScrollTrigger'
import Package from '@/components/Solutions/Wizemoves/Martech/Package'

export default {
  name: 'Martech',

  layout: 'layoutV2',
  components: {
    CardBgImg,
    BlogWizemoves,
    CardContact,
    FormDataUser,
    SuccessForm,
    ScrollTrigger,
    Package
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
      responseData: [
        { id: 1, attributes: { title: "5 กลยุทธ์การตลาดออนไลน์ที่ได้ผลในปี 2024", description: "เรียนรู้กลยุทธ์การตลาดดิจิทัลที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน", url: "5-digital-marketing-strategies-2024", createdAt: "2024-03-15T00:00:00.000Z", publishedAt: "2024-03-15T00:00:00.000Z", illustration: { data: { attributes: { url: "https://placehold.co/600x400/FF6603/FFFFFF/png?text=Blog+1", alternativeText: "blog image 1" } } }, blog_tags: { data: [{ attributes: { name: "Digital Marketing" } }] }, blog_category: { data: { id: 1, attributes: { name: "Marketing" } } } } },
        { id: 2, attributes: { title: "วิธีเพิ่มยอดขายออนไลน์ด้วย Social Commerce", description: "Social Commerce คืออะไรและทำไมถึงสำคัญต่อธุรกิจออนไลน์ของคุณ", url: "social-commerce-boost-sales", createdAt: "2024-02-20T00:00:00.000Z", publishedAt: "2024-02-20T00:00:00.000Z", illustration: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Blog+2", alternativeText: "blog image 2" } } }, blog_tags: { data: [{ attributes: { name: "E-Commerce" } }] }, blog_category: { data: { id: 2, attributes: { name: "E-Commerce" } } } } },
        { id: 3, attributes: { title: "LINE OA สำหรับธุรกิจ: คู่มือฉบับสมบูรณ์", description: "เปิดร้านค้าบน LINE OA และเชื่อมต่อกับลูกค้าได้อย่างมีประสิทธิภาพ", url: "line-oa-business-complete-guide", createdAt: "2024-01-10T00:00:00.000Z", publishedAt: "2024-01-10T00:00:00.000Z", illustration: { data: { attributes: { url: "https://placehold.co/600x400/06C755/FFFFFF/png?text=Blog+3", alternativeText: "blog image 3" } } }, blog_tags: { data: [{ attributes: { name: "LINE" } }] }, blog_category: { data: { id: 3, attributes: { name: "LINE Agency" } } } } },
        { id: 4, attributes: { title: "Data Analytics เพื่อการตัดสินใจทางธุรกิจ", description: "ใช้ข้อมูลเพื่อขับเคลื่อนธุรกิจและเพิ่มประสิทธิภาพการทำงาน", url: "data-analytics-business-decisions", createdAt: "2023-12-05T00:00:00.000Z", publishedAt: "2023-12-05T00:00:00.000Z", illustration: { data: { attributes: { url: "https://placehold.co/600x400/7B64AF/FFFFFF/png?text=Blog+4", alternativeText: "blog image 4" } } }, blog_tags: { data: [{ attributes: { name: "Analytics" } }] }, blog_category: { data: { id: 4, attributes: { name: "Technology" } } } } }
      ],
      animation1: false,
      showDiv: false,
      activeSection: "PainPoints",
      active: "รับบรีฟ",
      buttons: [
        { label: "Pain Points", id: "#PainPoints", name: "PainPoints" },
        { label: "Why Us", id: "#WhyUS", name: "WhyUS" },
        { label: "Services", id: "#Services", name: "Services" },
        { label: "Customers", id: "#Customers", name: "Customers" },
        { label: "Pricing", id: "#Pricing", name: "Pricing" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None",
      interested: !this.$route.query.bu ? 'WizemovesConsult' : this.$route.query.bu,
      currentImage: require('~/assets/SolutionsWizemoves/Martech/img-service-1.png'),
      images: {
        strategic: require('~/assets/SolutionsWizemoves/Martech/img-service-1.png'),
        loyalty: require('~/assets/SolutionsWizemoves/Martech/img-service-2.png'),
        media: require('~/assets/SolutionsWizemoves/Martech/img-service-3.png'),
      },
      services: [
        {
          id: 1,
          image: require('~/assets/SolutionsWizemoves/Martech/img-service-1.png'),
          subheading: 'ที่ปรึกษาด้านการพัฒนาแพลตฟอร์มธุรกิจออนไลน์',
          heading: 'บริการพัฒนาเว็บไซต์สำหรับธุรกิจ',
          description: 'สร้างและยกระดับแพลตฟอร์มดิจิทัลให้กับธุรกิจ ออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์การใช้งานเฉพาะทาง ไม่ว่าจะเป็นการขายสินค้าออนไลน์ การนำเสนอข้อมูล หรือการสร้างแอปพลิเคชันเพื่อช่วยจัดการกระบวนการ ภายในองค์กรได้อย่างครบวงจร',
          link: '/solutions/wizemoves/form/martech',
          items: [
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/01/1.svg'),
              title: 'Information / Corporate Website',
              description: 'เว็บไซต์สำหรับธุรกิจทั่วไป ที่ช่วยนำเสนอข้อมูลหรือ บริการของแบรนด์และเก็บข้อมูลผู้เยี่ยมชม, วัดผล การมีส่วนร่วม เพิ่มการรับรู้แบรนด์ สร้างความ น่าเชื่อถือและรองรับการเติบโตของธุรกิจในยุคดิจิทัล'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/01/2.svg'),
              title: 'e-Commerce Website',
              description: 'เว็บไซต์ขายสินค้าออนไลน์ที่รองรับการเก็บและวิเคราะห์ข้อมูลลูกค้า พร้อมระบบ OMS จัดการออเดอร์ แบบอัตโนมัติ ช่วยให้ปิดการขายได้เร็วขึ้น ดูแลลูกค้า ได้แม่นยำขึ้น และเพิ่มยอดขายอย่างยั่งยืน'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/01/3.svg'),
              title: 'Website Campaign / Landing Page',
              description: 'บริการพัฒนาเว็บไซต์เพื่อรองรับแคมเปญการ ตลาด โดยออกแบบให้สอดคล้องกับกลยุทธ์โฆษณา และการโปรโมท เก็บข้อมูลพฤติกรรมผู้เยี่ยมชม นำ ไปเพิ่มประสิทธิภาพของแคมเปญ'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/01/4.svg'),
              title: 'Website Application',
              description: 'เว็บไซต์ที่ออกแบบเฉพาะตามโจทย์ธุรกิจ ช่วยจัด การกระบวนการทำงาน การตลาด และการให้ บริการลูกค้าในที่เดียว พร้อมระบบจัดเก็บข้อมูล วัดผล และเชื่อมต่อการสื่อสารอย่างเป็นระบบ'
            }
          ]
        },
        {
          id: 2,
          image: require('~/assets/SolutionsWizemoves/Martech/img-service-2.png'),
          subheading: 'ที่ปรึกษาด้านการตลาดดิจิทัลและสร้างฐานลูกค้า',
          heading: 'สร้างความสัมพันธ์และเพิ่มยอดขาย',
          description: 'สร้างปฏิสัมพันธ์กับลูกค้าโดยตรงและช่วยกระตุ้นการขายอย่างมีประสิทธิภาพ',
          link: '/solutions/wizemoves/form/martech',
          items: [
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/02/1.svg'),
              title: 'Line Messaging API',
              description: 'เพิ่มประสิทธิภาพ LINE OA ด้วย Chatbot และ ระบบอัตโนมัติ ตอบลูกค้า 24 ชั่วโมง พร้อมฟีเจอร์ สะสมแต้มและแจ้งเตือนอัตโนมัติ เพื่อเพิ่มยอดขาย และสร้างความสัมพันธ์กับลูกค้า'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/02/2.svg'),
              title: 'CRM ระบบบริหารจัดการลูกค้า',
              description: 'จัดเก็บและวิเคราะห์ข้อมูลลูกค้าอย่างเป็นระบบ รอง รับบริการหลังการขาย และช่วยพัฒนากลยุทธ์ ทาง การตลาดเพื่อสร้างความสัมพันธ์ระยะยาวกับลูกค้า'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/02/3.svg'),
              title: 'Marketing Automation',
              description: 'บริการออกแบบระบบการตลาดอัตโนมัติ ช่วยให้ธุร-กิจสามารถส่งอีเมล แจ้งเตือน หรือโปรโมชั่นให้ลูกค้า ได้แบบแม่นยำ ช่วยลดงานที่ซ้ำซ้อน เพิ่มยอดขาย และดูแลลูกค้าได้อย่างต่อเนื่อง'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/02/4.svg'),
              title: 'Conversion Optimization',
              description: 'ปรับแต่งคอนเทนต์ให้ส่งเสริมการขายและสร้าง โอกาสปิดการขายได้มากขึ้น'
            }
          ]
        },
        {
          id: 3,
          image: require('~/assets/SolutionsWizemoves/Edis/img-service-3.png'),
          subheading: 'ที่ปรึกษาด้านการวิเคราะห์ข้อมูลและวางแผนธุรกิจ',
          heading: 'ดูแลและพัฒนาเว็บไซต์พร้อมการวัดผล',
          description: 'ปรับปรุงและดูแลเว็บไซต์ให้ทำงานได้อย่างราบรื่นและมีประสิทธิภาพ เพื่อสร้างโอกาสในการเข้าถึงลูกค้าใหม่ๆ',
          link: '/solutions/wizemoves/form/martech',
          items: [
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/03/1.svg'),
              title: 'SEO เพิ่มอันดับเว็บไซต์บน Google',
              description: 'ปรับแต่งเว็บไซต์ให้ติดอันดับบน Google เพิ่มการ เข้าถึงจากลูกค้าเป้าหมาย สร้างโอกาสทางการ ตลาด และช่วยให้ธุรกิจเติบโตบนโลกออนไลน์'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/03/2.svg'),
              title: 'Website Maintenance',
              description: 'ดูแลและปรับปรุงเว็บไซต์ให้พร้อมใช้งานอยู่เสมอ แก้ไขข้อผิดพลาด อัปเดตเนื้อหา และปรับโครงสร้าง ให้เหมาะสม เพื่อให้ธุรกิจของคุณดำเนินไปอย่าง ราบรื่น'
            },
            {
              icon: require('~/assets/SolutionsWizemoves/Martech/Service/03/3.svg'),
              title: 'Analytics Tools',
              description: 'บริการติดตั้งและเชื่อมต่อเครื่องมือวิเคราะห์ข้อมูล เพื่อให้คุณมองเห็นพฤติกรรมของผู้ใช้งานบนเว็บ ไซต์ วิเคราะห์ผลแคมเปญ และวัดผลการตลาดได้ อย่างแม่นยำ พร้อมข้อมูลเชิงลึกที่ช่วยตัดสินใจได้ ดีขึ้น'
            }
          ]
        }
      ]
    }
  },

  async asyncData({ $axios, store }) {
    store.commit('setTitle', 'WizemovesConsult')
    return {}
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.1],
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);
    const sections = document.querySelectorAll('.section-active');
    sections.forEach((section) => observer.observe(section));

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(() => {
            const section = entry.target;
            if (section.classList.contains('strategic-section')) {
              this.currentImage = this.images.strategic;
            } else if (section.classList.contains('loyalty-section')) {
              this.currentImage = this.images.loyalty;
            } else if (section.classList.contains('media-section')) {
              this.currentImage = this.images.media;
            }
          }, 100);
        }
      });
    }, {
      threshold: 0.3, // ปรับจาก 1 → 0.3 เพื่อให้ trigger smooth กว่า
      rootMargin: '-50px 0px -50px 0px',
    });

    // เพิ่ม class ให้แต่ละ section ตามลำดับ
    document.querySelectorAll('.space-tigger').forEach((section, index) => {
      if (index === 0) section.classList.add('strategic-section');
      if (index === 1) section.classList.add('loyalty-section');
      if (index === 2) section.classList.add('media-section');
      imageObserver.observe(section);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Clean up the listener
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          this.activeSection = entry.target.id;
        }
      });
    },
    setActiveButton(index) {
      this.activeButtonIndex = index; // Set the active button index
    },
    handleScroll() {
      const scrollY = window.scrollY; // Get the current scroll position
      const threshold = 650; // Define the scroll threshold
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
    handleChange(sectionId) {
      // รับ element ของ section ที่ต้องการ scroll ไป
      const element = document.getElementById(sectionId)

      if (element) {
        // คำนวณระยะห่างจากด้านบน
        const offset = 80 // ปรับตามความสูงของ navbar หรือ header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        // ทำการ scroll แบบ smooth
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  width: 100%;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sticky-macbook {
  margin-top: 245px;
  position: sticky;
  top: 52%;
  /* เปลี่ยนจาก 100px เป็น 50% */
  transform: translateY(-50%);
  /* เพิ่ม transform เพื่อจัดให้อยู่กึ่งกลาง */
  height: 600px;
  overflow: hidden;
  display: flex;
  /* เพิ่ม flex เพื่อจัดการ alignment */
  align-items: center;
  /* จัดให้เนื้อหาอยู่กึ่งกลางแนวตั้ง */
  justify-content: center;
  /* จัดให้เนื้อหาอยู่กึ่งกลางแนวนอน */
}

.fade-transition {
  position: relative;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  max-width: 95%;
  height: auto;
  z-index: 2;
}

/* เพิ่ม media query สำหรับหน้าจอขนาดเล็ก */
@media only screen and (max-width: 600px) {
  .btn-white-violet img {
    width: 20px;
    height: 20px;
  }

  .sticky-macbook {
    position: relative;
    /* ยกเลิก sticky บนมือถือ */
    transform: none;
    height: auto;
  }
}

.accordion-button {
  background-color: #fbfbfb !important;
  padding: 5px;
}

.form-select {
  border: 0 !important;
  background-color: #7C3AED !important;
  /* สีเดียวกับ navbar */
  color: #FFFFFF !important;
  /* สีตัวอักษรเป็นสีขาว */
}

/* ปรับสี dropdown arrow */
.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") !important;
}

/* ปรับ style ตอน focus */
.form-select:focus {
  border-color: #FFFFFF !important;
  box-shadow: none !important;
}

/* ปรับสี option ใน dropdown */
.form-select option {
  background-color: #7C3AED;
  color: #FFFFFF;
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

.btn-transparent-violet {
  display: inline-flex;
  align-items: center;
  color: #8B5CF6 !important;
  border: 1px solid #8B5CF6;
  background: white;
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-white-violet {
  display: inline-flex;
  align-items: center;
  color: #8B5CF6 !important;
  background: white;
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-white-violet .icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.btn-gradient .icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.btn-gradient {
  display: inline-flex;
  align-items: center;
  color: white !important;
  background: linear-gradient(82.53deg, #6D28D9 7.45%, #FBBF24 113.56%);
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-gradient .icon {
  width: 24px;
  height: 24px;
  margin-right: 6px;
}

.badge-wizemoves {
  display: inline-flex;
  align-items: center;
  background-color: #F5F3FF1A;
  color: white;
  border-radius: 999px;
  border: 1px solid #DDD6FE33;
  padding: 4px 16px 4px 10px;
}

.badge-wizemoves .icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  display: block;
  width: 100%;
  height: auto;
}

.col-6-custom-1 {
  width: 43% !important;
}

.col-6-custom-2 {
  width: 57% !important;
}

.centered-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card-01 img {
  padding: 0px;
}

.card-01 div {
  font-family: "Heavent-body" !important;
  font-size: 24px;
  line-height: 24px;
  color: #1F2937;
}

.text-hl {
  background-color: #F5F3FF;
  border: 1px solid #DDD6FE;
  color: #7C3AED;
  border-radius: 24px;
  padding: 4px 13px 3px 13px;
  margin-top: 8px;
}

.text-hl-blue {
  background-color: #F0F9FF;
  border: 1px solid #D9F2FF;
  color: #32A9FF;
  border-radius: 24px;
  padding: 4px 13px 3px 13px;
  margin-top: 8px;
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
  background-image: url(~/assets/SolutionsWizemoves/Martech/banner.webp);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-img-2 {
  background-image: url(~/assets/SolutionsWizemoves/Martech/img-bg-1.webp);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-img-3 {
  background-image: url(~/assets/SolutionsWizemoves/Edis/whyus.png);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
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
  background: linear-gradient(51.93deg, #8B5CF6 -8.45%, #FACC15 113.97%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.border-ranbow {
  background: #FFF;
  border-radius: 32px;
  padding: 4px 16px;
}

.cart-img-text {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  z-index: 1;
}

.cart-img-text::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  
  background-image: url(~/assets/SolutionsWizemoves/Martech/img-bg-1.webp);
  background-position: bottom;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  z-index: -1;
}

.bg-1 {
  background-size: cover;
}

.nav-active {
  border-bottom: 5px solid #FFFFFF;
  color: #FFFFFF !important;
}

.nav-link {
  color: #FFFFFF !important;
}

.nav-active .nav-link {
  color: #FFFFFF !important;
}

.text-s-158 {
  font-size: 158px;
  line-height: 94.8px;
}

.text-s-86 {
  font-size: 86px;
  line-height: 86px;
}

.text-s-52 {
  line-height: 52px;
}

.img-Process {
  min-height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
}

.card-1 .card-body {
  padding: 24px 24px;
}


@media only screen and (max-width: 420px) {
  .btn-white-violet img {
    width: 16px;
    height: 16px;
  }

  .btn-gradient img {
    width: 16px;
    height: 16px;
  }

  .p-s-360 {
    padding: 12px 12px 0px 12px !important;
  }

  .btn-gradient {
    padding: 4px 12px 4px 12px;
  }

  .btn-white-violet {
    padding: 4px 12px 4px 12px;
  }

  .icon-size {
    width: 32px;
    height: 32px;
  }
}

@media only screen and (max-width: 768px) {
  .cart-img-text {
    height: 550px;
  }
  .cart-img-text::before {
    transform: scale(1);
  }
  .bg-color-mobile {
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(180deg, rgba(109, 40, 217, 0.56) 0%, rgba(139, 92, 246, 0.48) 49.5%, rgba(167, 139, 250, 0) 100%),
      linear-gradient(180deg, rgba(92, 92, 118, 0.4) 0%, rgba(209, 200, 195, 0.4) 78.13%),
      url('~/assets/SolutionsWizemoves/Martech/banner.webp') center/cover no-repeat;
  }

  .card-01 .card-body {
    padding: 0.5rem 0 0.5rem 0;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-44 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .card-1 {
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .cart-color-text {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    padding: 40px 0px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .space-services {
    margin-top: 50px !important;
    padding-bottom: 20px !important;
  }

  #Services .text-s-52 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .section-spacing {
    padding-top: 0px;
  }

  .hero-section .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .pb-200 {
    padding-bottom: 100px;
  }

  .icon-size {
    width: 32px;
    height: 32px;
  }
}

@media only screen and (max-width: 420px) {
  .text-s-44 {
    font-size: 32px !important;
    line-height: 32px !important;
  }
}

@media only screen and (max-width: 340px) {
  .badge-wizemoves {
    padding: 4px 12px 4px 8px;
  }
  .btn-white-violet img {
    width: 12px;
    height: 12px;
  }

  .btn-gradient img {
    width: 12px;
    height: 12px;
  }

  .p-s-360 {
    padding: 8px 8px 0px 8px !important;
  }

  .hero-section .btn-gradient {
    padding: 0px 12px 0px 12px;
  }

  .hero-section .btn-white-violet {
    padding: 0px 12px 0px 12px;
  }

  .hero-section .py-2 {
    padding-top: 4px !important;
    padding-bottom: 4px !important;
  }

  .icon-size {
    width: 24px;
    height: 24px;
  }
  .text-s-20 {
      font-size: 16px !important;
      line-height: 16px;
  }
  .text-s-44 {
      font-size: 28px !important;
      line-height: 28px !important;
  }
  .text-hl {
      font-size: 16px !important;
      line-height: 16px !important;
  }
}

@media only screen and (min-width: 768px) {
  .cart-img-text {
    height: 400px;
  }
  .cart-img-text::before {
    transform: scale(1);
  }
  .bg-color {
    background: 
      linear-gradient(180deg, rgba(109, 40, 217, 0.56) 0%, rgba(63, 45, 117, 0.32) 59.44%, rgba(63, 45, 117, 0) 100%),  
      linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      linear-gradient(180deg, rgba(92, 92, 118, 0.4) 0%, rgba(209, 200, 195, 0.4) 78.13%);
  }

  .card-01 .card-body {
    padding: 0.5rem 0 0.5rem 0;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-44 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .card-1 {
    height: 248px;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .card-1 .text-height {
    height: 40px;
  }

  .cart-color-text {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    padding: 40px 40px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .section-spacing {
    padding-top: 0px;
  }

  .space-services {
    margin-top: 50px !important;
    padding-bottom: 20px !important;
  }

  #Services .text-s-52 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .hero-section .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .banner-main {
    height: 470px;
  }

  .bg-img {
    background-image: url(~/assets/SolutionsWizemoves/Martech/banner.webp);
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .icon-process {
    width: 60%;
  }

  .pb-200 {
    padding-bottom: 100px;
  }

  .m-120 {
    margin-top: -280px;
  }

  .btn-gradient {
    padding: 4px 12px 4px 12px;
  }

  .icon-size {
    width: 32px;
    height: 32px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .cart-img-text {
    height: 500px;
  }
  .cart-img-text::before {
    transform: scale(1);
  }
  .bg-color {
    background: linear-gradient(
      90deg,
      rgba(77, 20, 166, 1) 0%,
      rgba(63, 45, 117, 0.82) 37%,
      rgba(63, 45, 117, 0.32) 69%,
      rgba(63, 45, 117, 0) 100%
    ), linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    linear-gradient(90deg, rgba(92, 92, 118, 0.4) 0%, rgba(155, 152, 170, 0.4) 100%);
  }

  .card-01 .card-body {
    padding: 1rem 1rem;
  }

  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
  }
  
  .text-s-44 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-60 {
    font-size: 56px !important;
    line-height: 56px !important;
  }

  .card-1 .text-height {
    height: 75px;
  }

  .card-1 {
    height: 285px;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .card-01 .card-body {
    padding: 14px 0px 14px 0px;
  }

  .cart-color-text {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    padding: 40px 40px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .section-spacing {
    padding-top: 80px;
  }

  .banner-main {
    height: 550px;
  }

  .bg-img {
    background-image: url(~/assets/SolutionsWizemoves/Martech/banner.webp);
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .icon-process {
    width: 74%;
  }

  .space-services {
    padding-top: 100px !important;
    padding-bottom: 20px !important;
  }

  .pb-200 {
    padding-bottom: 200px;
  }

  .btn-gradient {
    padding: 12px 20px 12px 20px;
  }

  .icon-size {
    width: 40px;
    height: 40px;
  }
}

@media only screen and (min-width: 1440px) {
  .card-1 .text-height {
    height: auto;
  }

  .card-1 {
    height: 228px;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }
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
