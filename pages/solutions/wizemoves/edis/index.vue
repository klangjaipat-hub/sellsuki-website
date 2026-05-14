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
    <SuccessForm bu="Wizemoves" />
    <section class="hero-section">
      <div class="bg-img d-none d-md-block mt-5">
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
                          <span class="text-s-20 color-FFFFFF ms-1">e-Distributor</span>
                        </li>
                      </ul>
                    </ol>
                    <div class="mt-5">
                      <h1 class="font-bd text-s-52 color-FFFFFF">
                        e-Distributor
                      </h1>
                    </div>
                    <p class="font-bd text-s-36 mt-3 color-FFFFFF">
                      ผู้เชี่ยวชาญด้าน Marketplace
                    </p>
                    <p class="text-s-24 mt-3 color-FFFFFF">
                      เราคือที่ปรึกษาที่จะเปลี่ยนทุกโอกาสเป็นยอดขายให้เติบโตได้อย่างยั่งยืน
                    </p>
                    <div class="d-flex flex-wrap mt-2 mt-xl-3">
                      <div class="badge-wizemoves">
                        <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png"
                          class="icon" />
                        <span class="text text-s-20 font-df">วางแผนธุรกิจ</span>
                      </div>
                      <div class="badge-wizemoves ms-2">
                        <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png"
                          class="icon" />
                        <span class="text text-s-20 font-df">การตลาดออนไลน์</span>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap mt-3 mt-xl-4">
                      <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
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
                <img class="mt-auto d-block d-xl-none" src="~/assets/SolutionsWizemoves/Edis/hero-t.png"
                  alt="hero-t.png" style="width: 130%;margin-left: -110px;">
                <img class="img-fluid mt-auto d-none d-xl-block" src="~/assets/SolutionsWizemoves/Edis/hero.png"
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
                      <span class="text-s-20 color-FFFFFF ms-1">e-Distributor</span>
                    </li>
                  </ul>
                </ol>
                <div class="mt-3">
                  <h1 class="font-bd text-s-44 mb-0 color-FFFFFF">
                    e-Distributor
                  </h1>
                </div>
                <p class="font-bd text-s-24 mt-2 mb-2 color-FFFFFF">
                  ผู้เชี่ยวชาญด้าน Marketplace
                </p>
                <p class="text-s-20 mb-1 color-FFFFFF">
                  เราคือที่ปรึกษาที่จะเปลี่ยนทุกโอกาสเป็นยอดขายให้เติบโตได้อย่างยั่งยืน
                </p>
                <div class="d-flex flex-wrap mt-2">
                  <div class="badge-wizemoves">
                    <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png" class="icon" />
                    <span class="text text-s-18 font-df">วางแผนธุรกิจ</span>
                  </div>
                  <div class="badge-wizemoves ms-2">
                    <img src="~/assets/SolutionsWizemoves/Consulting/Subtract.png" alt="Subtract.png" class="icon" />
                    <span class="text text-s-18 font-df">การตลาดออนไลน์</span>
                  </div>
                </div>
                <div class="d-flex flex-wrap mt-md-4 mt-3">
                  <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
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
                  <img class="img-fluid mx-auto d-block" src="~/assets/SolutionsWizemoves/Edis/hero-m.png"
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
            <nuxt-link to="/solutions/wizemoves/edis/af" class="btn-violet-white text-s-24 font-df p-1 ps-3 pe-3"
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
                    src="~/assets/SolutionsWizemoves/Consulting/ICON4 1.png" alt="ICON4 1.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-3 mt-4 text-height">คิดกลยุทธ์การขายไม่ออก</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">ขาดกลยุทธ์การตลาดและการตั้งราคาที่เหมาะสม</p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/ICON6 1.png"
                    alt="ICON6 1.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">คิดกลยุทธ์การขายไม่ออก</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ขาดกลยุทธ์การตลาดและการตั้งราคาที่เหมาะสม</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-xl-3 p-2">
              <div class="card-1 d-none d-md-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/ICON6 1.png" alt="ICON6 1.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-3 mt-4 text-height">
                    ยอดขายตกเพราะสินค้าไม่เป็นที่รู้จัก</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">ขาดข้อมูลหรือกลยุทธ์เชิงลึกที่ช่วยลดความเสี่ยงในการขยาย
                    ธุรกิจ</p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/ICON6 1.png"
                    alt="ICON6 1.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">ยอดขายตกเพราะสินค้าไม่เป็นที่รู้จัก</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">
                      ขาดข้อมูลหรือกลยุทธ์เชิงลึกที่ช่วยลดความเสี่ยงในการขยาย ธุรกิจ</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-xl-3 p-2">
              <div class="card-1 d-none d-md-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/user-group.png" alt="user-group.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-xl-2 mb-3 mt-4 text-height">ขายหลายแพลตฟอร์มแต่จัดการยาก
                  </p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">ขาดกลยุทธ์ Performance Marketing</p>
                </div>
              </div>
              <div class="card-1 d-block d-md-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/user-group.png"
                    alt="user-group.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">ขายหลายแพลตฟอร์มแต่จัดการยาก</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ขาดกลยุทธ์ Performance Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row fade-in-up" v-intersect>
          <div class="col-12 text-center">
            <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
              class="btn-gradient text-s-24 font-md py-2" data-tag="pain_points_get_free_consultation">
              <span class="text">ปรึกษากลยุทธ์กับทีมฟรี</span>
            </nuxt-link>
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
                    ทำไมต้องเลือกบริการ<br /> e-Distributor
                  </h2>
                  <h2 class="text-s-44 font-bd mb-0 d-lg-none d-md-block">
                    ทำไมต้องเลือกบริการ<br /> e-Distributor
                  </h2>
                </div>
              </div>
              <div class="col-6 col-6-custom-2 fade-in-up" v-intersect>
                <CardBgImg type="Edis" />
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
                    ทำไมต้องเลือกบริการ<br /> e-Distributor
                  </h2>
                </h2>
              </div>
            </div>
            <div class="col-12 fade-in-up" v-intersect>
              <CardBgImg type="Edis" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-lg-5 pt-md-5 ps-lg-2 pe-lg-2 mt-0 pt-0 ps-4 pe-4">
      <div class="cart-img-text">
        <div class="cart-color-text">
          <div class="row d-none d-md-block">
            <div class="col-12 text-center color-FFFFFF d-flex" style="height: 370px">
              <div class="mt-auto mx-auto d-lg-block d-md-none">
                <h2 class="text-s-60 mb-2 font-bd mt-auto mx-auto">
                  e-Distributor ผู้เชี่ยวชาญด้าน Marketplace
                </h2>
                <p class="text-s-28 mb-0">ที่จะเปลี่ยนทุกโอกาศเป็นยอดขาย ให้เติบโตได้อย่างยั่งยืน</p>
              </div>
              <div class="mt-auto mx-auto d-lg-none d-md-block">
                <h2 class="text-s-44 mb-0 font-bd mt-auto mx-auto">
                  e-Distributor <br />ผู้เชี่ยวชาญด้าน Marketplace
                </h2>
                <p class="text-s-20 mb-0 mt-3">ที่จะเปลี่ยนทุกโอกาศเป็นยอดขาย <br />ให้เติบโตได้อย่างยั่งยืน</p>
              </div>
            </div>
          </div>
          <div class="row d-block d-md-none">
            <div class="col-12 text-center color-FFFFFF d-flex ps-3 pe-3" style="height: 470px">
              <div class="mt-auto mx-auto">
                <h2 class="text-s-36 mb-0 font-bd mt-auto mx-auto">
                  e-Distributor<br /> ผู้เชี่ยวชาญด้าน Marketplace
                </h2>
                <p class="text-s-20 mt-3 mb-0">ที่จะเปลี่ยนทุกโอกาศเป็นยอดขาย<br />ให้เติบโตได้อย่างยั่งยืน</p>
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
            <p class="text-s-60 font-bd mb-0 d-none d-xl-block" style="line-height: 120%;">ยอดขายโตไว
              จัดการง่ายในที่เดียว</p>
            <p class="text-s-44 font-bd mb-0 d-none d-md-block d-xl-none">ยอดขายโตไว <br />จัดการง่ายในที่เดียว</p>
            <p class="text-s-36 font-bd mb-0 d-block d-md-none text-center mb-3">ยอดขายโตไว จัดการง่ายในที่เดียว</p>
          </div>
          <div class="col-md-6 col-12">
            <p class="text-s-24 font-df mb-0"><span
                class="font-bd">เพิ่มยอดขายออนไลน์</span>ให้โตแบบไม่ต้องเหนื่อยกับบริการ <span
                class="font-bd">e-Distributor</span> จาก Sellsuki ตัวช่วยมืออาชีพ สำหรับแบรนด์ที่อยากโฟกัสที่ “การขาย”
              มากกว่า “การจัดการ”</p>
            <p class="text-s-24 font-df mb-0 mt-4">เพราะเราเข้าใจทุกจุดอ่อน
              และรู้วิธีเปลี่ยนมันให้เป็นยอดขายให้ร้านค้าออนไลน์ของคุณสามารถเติบโต ได้อย่างยั่งยืน</p>
          </div>
        </div>
        <div class="mt-5 pt-5 mt-lg-0 pt-lg-0 mt-xl-5 pt-xl-5">
          <div class="row pt-lg-5 mt-lg-5 pt-0 mt-0 ps-xl-4 pe-xl-4 ps-auto pe-auto">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-0 ps-0 pb-200">

              <img class="img-fluid mb-4 d-block d-md-none" src="~/assets/SolutionsWizemoves/Edis/img-service-1.png"
                alt="img-service-.png" />
              <span class="text-s-24 font-md text-hl">ที่ปรึกษาบริการด้านสินค้า</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-2 mt-xl-4">
                Merchandise Service
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                เราช่วยดูแลร้านค้าของคุณด้วยทีมงานมืออาชีพที่เชี่ยวชาญด้าน Marketplace ไม่ว่าจะเป็น Shopee, Lazada,
                Tiktok Shop และ LINE MyShop โดยเราพร้อมให้บริการตั้งแต่
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/carbon_model-builder.png"
                        alt="carbon_model-builder.png">
                      <span class="ms-2 m-auto">Set up ร้านค้า</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">วางโครงสร้างร้านค้าออนไลน์ให้มีความน่าเชื่อถือ และพร้อมขาย</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/icon-park-outline_user-positioning.png"
                        alt="icon-park-outline_user-positioning.png">
                      <span class="ms-2 m-auto">Listing & SEO</span>
                    </div>
                    <p class="text-s-24 font-df">ลงสินค้า พร้อมปรับแต่ง Marketplace SEO เพื่อให้ร้านค้าติดอันดับการค้นหา
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/Icon.png" alt="Icon.png">
                      <span class="ms-2 m-auto">Order Management</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ประสานงานจัดการออเดอร์ เพื่อรักษาร้านค้าให้ อยู่ในมาตรฐานที่ดี</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/Icon.png" alt="Icon.png">
                      <span class="ms-2 m-auto">Sales Strategy & Promotion</span>
                    </div>
                    <p class="text-s-24 font-df">วางกลยุทธ์การขาย และโปรโมชั่นที่เหมาะสม เพื่อกระตุ้นยอดขาย</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/Icon.png" alt="Icon.png">
                      <span class="ms-2 m-auto">Marketplace Ads</span>
                    </div>
                    <p class="text-s-24 font-df">ยิงโฆษณาภายใน Marketplace ให้ร้านค้าเป็นที่รู้จัก
                      และเพิ่มโอกาสปิดการขาย</p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
                    class="btn-transparent-violet text-s-24 font-md py-2"
                    data-tag="services_merchandise_free_consultation">
                    <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                  </nuxt-link>
                </div>
              </div>



              <div class="space-services"></div>
              <img class="img-fluid mb-4 d-block d-md-none" src="~/assets/SolutionsWizemoves/Edis/img-service-2.png"
                alt="img-service-.png" />
              <span class="text-s-24 font-md text-hl">ที่ปรึกษาบริการด้านเนื้อหาการตลาด</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-2 mt-xl-4">
                Content Marketing Service
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                เราจะช่วยสร้างสรรค์คอนเทนต์ที่น่าสนใจ เพิ่มการรับรู้แบรนด์และกระตุ้นยอดขายผ่าน Social Media Marketing
                ด้วยบริการ
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/search.png" alt="search.png">
                      <span class="ms-2 m-auto">Content Strategy</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">วางกลยุทธ์คอนเทนต์ให้สอดคล้องกับแบรนด์และเป้าหมายทางธุรกิจ</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/view-columns.png" alt="view-columns.png">
                      <span class="ms-2 m-auto">Social Media Content</span>
                    </div>
                    <p class="text-s-24 font-df">ผลิตคอนเทนต์สำหรับ Facebook, Instagram, TikTok และแพลตฟอร์มอื่นๆ</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/chat.png" alt="chat.png">
                      <span class="ms-2 m-auto">Social Media Management</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ดูแลและบริหารจัดการ Social Media ของแบรนด์
                      ให้มีความต่อเนื่องและสร้างการมีส่วนร่วมกับลูกค้า</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/copy.png" alt="copy.png">
                      <span class="ms-2 m-auto">Conversion Optimization</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ปรับแต่งคอนเทนต์ให้ส่งเสริมการขายและสร้าง โอกาสปิดการขายได้มากขึ้น
                    </p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
                    class="btn-transparent-violet text-s-24 font-md py-2" data-tag="services_content_free_consultation">
                    <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                  </nuxt-link>
                </div>
              </div>



              <div class="space-services"></div>
              <img class="img-fluid mb-4 d-block d-md-none" src="~/assets/SolutionsWizemoves/Edis/img-service-3.png"
                alt="img-service-.png" />
              <span class="text-s-24 font-md text-hl">ที่ปรึกษาด้านการตลาดบน LINE</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-2 mt-xl-4">
                Other Services
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                LINE Official Account Setup & Management
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/cub.png" alt="cub.png">
                      <span class="ms-2 m-auto">Set up LINE OA</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ตั้งแต่สร้างบัญชีไปจนถึง Set up Auto Message และเมนูต่างๆ</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Edis/Service/view-columns.png" alt="view-columns.png">
                      <span class="ms-2 m-auto">LINE OA Management</span>
                    </div>
                    <p class="text-s-24 font-df">ดูแลบัญชี บรอดแคสต์แคมเปญ พร้อมจัดทำรีพอร์ต รายงานผลลัพท์</p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves/edis/af' }"
                    class="btn-transparent-violet text-s-24 font-md py-2" data-tag="services_lineoa_free_consultation">
                    <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                  </nuxt-link>
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

    <section class="section-spacing m-120">
      <BlogWizemoves :responseData="responseData" />
    </section>

    <section class="section-spacing">
      <CardContact page="Edis" />
    </section>
  </div>
</template>

<script>
import CardBgImg from '@/components/Solutions/Wizemoves/CardBgImg'
import BlogWizemoves from '@/components/Solutions/Wizemoves/BlogWizemoves'
import CardContact from '@/components/Solutions/Wizemoves/CardContact'
import FormDataUser from '@/components/Solutions/Wizemoves/FormDataUser'
import SuccessForm from '@/components/Solutions/SuccessForm'

export default {
  name: 'BusinessConsulting',

  layout: 'layoutV2',
  components: {
    CardBgImg,
    BlogWizemoves,
    CardContact,
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
        // { label: "Customers", id: "#Customers", name: "Customers" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None",
      interested: !this.$route.query.bu ? 'WizemovesConsult' : this.$route.query.bu,
      currentImage: require('~/assets/SolutionsWizemoves/Edis/img-service-1.png'),
      images: {
        strategic: require('~/assets/SolutionsWizemoves/Edis/img-service-1.png'),
        loyalty: require('~/assets/SolutionsWizemoves/Edis/img-service-2.png'),
        media: require('~/assets/SolutionsWizemoves/Edis/img-service-3.png'),
      }
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
            name: 'WizeMoves',
            item: 'https://www.sellsuki.co.th/solutions/wizemoves',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'e-Distributor',
            item: 'https://www.sellsuki.co.th/solutions/wizemoves/edis',
          },
        ],
      },
      {
        "@context": "https://schema.org/", 
        "@type": "Service", 
        "name": "WizeMoves e-Distributor",
        "image": "",
        "description": "ผู้เชี่ยวชาญด้าน Marketplace เราคือที่ปรึกษาที่จะเปลี่ยนทุกโอกาสเป็นยอดขายให้เติบโตได้อย่างยั่งยืน",
        "brand": {
          "@type": "Brand",
          "name": "Sellsuki"
        },
        "sku": "WizeMoves e-Distributor",
        "offers": {
          "@type": "Offer",
          "url": "https://www.sellsuki.co.th/solutions/wizemoves/edis",
          "priceCurrency": "THB",
          "price": "0",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
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

.space-services {
  margin-top: 160px !important;
  /* เพิ่มจาก 80px เป็น 160px */
  padding-bottom: 80px !important;
  /* เพิ่ม padding ด้านล่าง */
  position: relative;
}

.outer-circle {
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  /* ชั้นที่ 1 */
  border: 2px solid transparent;
  /* ชั้นที่ 2 */
}

.inner-circle {
  padding: 8px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid transparent;
  /* ชั้นด้านในสุด */
}

.outer-circle-hover {
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  /* ชั้นที่ 1 */
  border: 2px solid #8B5CF61A !important;
  /* ชั้นที่ 2 */
}

.inner-circle-hover {
  padding: 8px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #8B5CF64D !important;
  /* ชั้นด้านในสุด */
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
  border-radius: 8px;
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
  padding: 4px 16px 3px 16px;
  margin-top: 8px;
}

.text-hl-blue {
  background-color: #F0F9FF;
  border: 1px solid #D9F2FF;
  color: #32A9FF;
  border-radius: 24px;
  padding: 4px 16px 3px 16px;
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
  background-image: url(~/assets/SolutionsWizemoves/Edis/banner.jpg);
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
  border-radius: 16px;
  background-image: url(~/assets/SolutionsWizemoves/Edis/img-bg-1.jpg);
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
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
    padding: 2px 12px 2px 12px;
  }

  .btn-white-violet {
    padding: 2px 12px 2px 12px;
  }
}

@media only screen and (max-width: 768px) {
  .bg-color-mobile {
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(180deg, rgba(109, 40, 217, 0.56) 0%, rgba(139, 92, 246, 0.48) 49.5%, rgba(167, 139, 250, 0) 100%),
      url('~/assets/SolutionsWizemoves/Edis/banner.jpg') center/cover no-repeat;
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
    border-radius: 16px;
    padding: 40px 0px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
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
}

@media only screen and (min-width: 768px) {
  .bg-color {
    background: linear-gradient(180deg, rgba(109, 40, 217, 0.63) 0%, rgba(63, 45, 117, 0.36) 59.44%, rgba(63, 45, 117, 0) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .card-1 {
    height: 208px;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .card-1 .text-height {
    height: 40px;
  }

  .cart-color-text {
    border-radius: 16px;
    padding: 40px 40px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
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
    background-image: url(~/assets/SolutionsWizemoves/Edis/banner.jpg);
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .icon-process {
    width: 60%;
  }

  .pb-200 {
    padding-bottom: 380px;
  }

  .m-120 {
    margin-top: -280px;
  }

  .btn-gradient {
    padding: 4px 12px 4px 12px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .bg-color {
    background: linear-gradient(90deg, rgba(77, 20, 166, 0.56) 14.45%, rgba(63, 45, 117, 0.45549) 46.4%, rgba(63, 45, 117, 0.32) 73.51%, rgba(63, 45, 117, 0) 100%),
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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

  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }

  .card-1 .text-height {
    height: 75px;
  }

  .card-1 {
    height: 245px;
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .card-01 .card-body {
    padding: 14px 0px 14px 0px;
  }

  .cart-color-text {
    border-radius: 16px;
    padding: 40px 40px;
    background: linear-gradient(180deg, rgba(46, 21, 89, 0) 43.78%, rgba(21, 10, 40, 0.8) 100%);
  }

  .section-spacing {
    padding-top: 80px;
  }

  .banner-main {
    height: 550px;
  }

  .bg-img {
    background-image: url(~/assets/SolutionsWizemoves/Edis/banner.jpg);
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
    padding-bottom: 350px;
  }
}

@media only screen and (min-width: 1440px) {
  .card-1 .text-height {
    height: auto;
  }

  .card-1 {
    height: 205px;
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
