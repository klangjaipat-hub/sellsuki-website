<template>
  <div id="SolutionsKaikong">

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
    <SuccessForm bu="Kaikong" />
        <section class="hero-section">
      <!-- Desktop -->
      <div class="kk-bg-img d-none d-md-block mt-5">
        <div class="kk-bg-color">
          <div class="container">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-7 col-sm-6 col-6">
                <table class="align-middle banner-main" style="width:100%">
                  <td class="banner-height">
                    <ol class="font-md">
                      <ul class="breadcrumb">
                        <li>
                          <i class="bi bi-house-fill color-FFFFFF me-1"></i>
                          <nuxt-link :to="localePath('/')"><span class="text-s-20 color-FFFFFF">{{ $t("Menu.Home") }}</span></nuxt-link>
                          <i class="bi bi-chevron-right color-FFFFFF ms-1"></i>
                        </li>
                        <li>
                          <span class="text-s-20 color-FFFFFF ms-1">{{ $t("Menu.Solution") }}</span>
                          <i class="bi bi-chevron-right color-FFFFFF ms-1"></i>
                        </li>
                        <li>
                          <span class="text-s-20 color-FFFFFF ms-1">WizeMoves Content</span>
                        </li>
                      </ul>
                    </ol>
                    <div class="mt-5">
                      <h1 class="font-bd text-s-52 color-FFFFFF">{{ $t("solution.kaikong.h1") }}</h1>
                    </div>
                    <p class="font-bd text-s-36 mt-3 color-FFFFFF">{{ $t("solution.kaikong.text_banner") }}</p>
                    <p class="text-s-24 mt-3 color-FFFFFF">{{ $t("solution.kaikong.mata") }}</p>
                    <div class="d-flex flex-wrap mt-3">
                      <div class="kk-badge">
                        <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                        <span class="text text-s-20 font-df">{{ $t("solution.kaikong.content_marketing") }}</span>
                      </div>
                      <div class="kk-badge ms-2">
                        <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                        <span class="text text-s-20 font-df">{{ $t("solution.kaikong.graphic_production") }}</span>
                      </div>
                      <div class="kk-badge ms-2">
                        <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                        <span class="text text-s-20 font-df">{{ $t("solution.kaikong.admin_page") }}</span>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap mt-4">
                      <a href="tel:0900967526" class="kk-btn-main text-s-24 font-md py-2">
                        <i class="bi bi-telephone-fill me-2"></i>
                        <span>สอบถามเพิ่มเติม 02-026-3250</span>
                      </a>
                    </div>
                  </td>
                </table>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-5 col-sm-6 col-6 d-flex">
                <img class="img-fluid mt-auto" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp" alt="Kaikong Content Marketing">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="kk-bg-img-mobile d-block d-md-none" style="margin-top:64px">
        <div class="kk-bg-color-mobile">
          <div class="container p-4">
            <div class="row">
              <div class="col-12">
                <ol class="font-md mt-2">
                  <ul class="breadcrumb">
                    <li>
                      <i class="bi bi-house-fill color-FFFFFF me-1"></i>
                      <nuxt-link :to="localePath('/')"><span class="text-s-20 color-FFFFFF">{{ $t("Menu.Home") }}</span></nuxt-link>
                      <i class="bi bi-chevron-right color-FFFFFF ms-1"></i>
                    </li>
                    <li>
                      <span class="text-s-20 color-FFFFFF ms-1">{{ $t("Menu.Solution") }}</span>
                      <i class="bi bi-chevron-right color-FFFFFF ms-1"></i>
                    </li>
                    <li>
                      <span class="text-s-20 color-FFFFFF ms-1">WizeMoves Content</span>
                    </li>
                  </ul>
                </ol>
                <div class="mt-3">
                  <h1 class="font-bd text-s-44 mb-0 color-FFFFFF">{{ $t("solution.kaikong.h1") }}</h1>
                </div>
                <p class="font-bd text-s-24 mt-2 mb-2 color-FFFFFF">{{ $t("solution.kaikong.text_banner") }}</p>
                <p class="text-s-20 mb-1 color-FFFFFF">{{ $t("solution.kaikong.mata") }}</p>
                <div class="d-flex flex-wrap mt-3">
                  <div class="kk-badge">
                    <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                    <span class="text text-s-18 font-df">{{ $t("solution.kaikong.content_marketing") }}</span>
                  </div>
                  <div class="kk-badge ms-2">
                    <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                    <span class="text text-s-18 font-df">{{ $t("solution.kaikong.graphic_production") }}</span>
                  </div>
                </div>
                <div class="d-flex flex-wrap mt-2">
                  <div class="kk-badge">
                    <i class="bi bi-check-circle-fill kk-badge-icon"></i>
                    <span class="text text-s-18 font-df">{{ $t("solution.kaikong.admin_page") }}</span>
                  </div>
                </div>
                <div class="d-flex flex-wrap mt-4">
                  <a href="tel:0900967526" class="kk-btn-main text-s-20 font-md py-2">
                    <i class="bi bi-telephone-fill me-2"></i>
                    <span>02-026-3250</span>
                  </a>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center align-items-center mt-3">
                <img class="img-fluid mx-auto d-block" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp" alt="Kaikong Content Marketing" style="max-width:100%;height:auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="scroll-div animate__animated  animate__fadeIn" v-if="showDiv"
      style="position: fixed;top: 0px;z-index: 999;width: 100%;background: #7C3AED;">
      <nav class="navbar navbar-expand-lg ps-md-0 pe-md-0 ps-3 pe-3 p-0"
        style="z-index: 9999;box-shadow: 0px 1px 3px 0px #D4A01712,0px 5px 5px 0px #D4A0170F,0px 12px 7px 0px #D4A0170A,0px 20px 8px 0px #D4A01703,0px 32px 9px 0px #D4A01700;">
        <div class="container">
          <div class="ml-2 d-lg-block d-none">
            <ul class="navbar-nav text-s-24 text-w-500">
              <div v-for="(button, index) in buttons" :key="index"
                :class="{ 'nav-active': activeSection === button.name }" @click="setActiveButton(index)">
                <a :href="button.id" :data-tag="`navbar_scroll_${button.name}`">
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
            <a href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
              class="btn-wm-white text-s-24 font-df p-1 ps-3 pe-3" data-tag="navbar_scroll_free_consultation"><img
                class="me-2" src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right-color.png"
                alt="chat-bubble-left-right-color.png.png" />ปรึกษาฟรี
            </a>
          </div>
        </div>
      </nav>
    </section>

    <section id="PainPoints" class="section-active pb-lg-5 pb-0">
      <div class="container pb-0 p-md-0 p-4">
        <div class="row pt-5">
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
            <h2 class="text-s-60 text-w-700 color-1F2937 mt-5 d-none d-lg-block">
              รับดูแลเพจ เขียนคอนเทนต์ สร้างธุรกิจให้เป็นที่จดจำ
            </h2>
            <h2 class="text-s-44 text-w-700 color-1F2937 mt-5 d-block d-lg-none">
              รับดูแลเพจ เขียนคอนเทนต์<br />สร้างธุรกิจให้เป็นที่จดจำ
            </h2>

            <p class="text-s-24 mt-3 d-none d-lg-block">ทีมงานมืออาชีพพร้อมให้คำปรึกษาและรับวางแผนคอนเทนต์ ผลิตสื่อโฆษณาทั้งภาพนิ่งและวิดีโอ ควบคู่กับบริการแอดมินตอบแชทช่วยปิดการขาย เพื่อขับเคลื่อนธุรกิจให้เติบโตอย่างมีประสิทธิภาพ</p>
            <p class="text-s-24 mt-3 text-md-center text-start mt-3 d-block d-lg-none">ทีมงานมืออาชีพพร้อมให้คำปรึกษาและรับวางแผนคอนเทนต์ ผลิตสื่อโฆษณาทั้งภาพนิ่งและวิดีโอ ควบคู่กับบริการแอดมินตอบแชทช่วยปิดการขาย เพื่อขับเคลื่อนธุรกิจให้เติบโตอย่างมีประสิทธิภาพ</p>
          </div>
          <div class="row mt-md-5 mt-2 mb-3 fade-in-up" v-intersect>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-3">
              <div class="card-1 p-1 d-none d-lg-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/arrow-trending-down.png" alt="arrow-trending-down.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-2 mt-4">เพจร้าง ยอดเงียบ</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">ธุรกิจประสบปัญหาด้านการสื่อสารบนสื่อออนไลน์ ส่งผลให้เพจขาดความเคลื่อนไหว และยอดการมีส่วนร่วมต่ำ</p>
                </div>
              </div>
              <div class="card-1 d-block d-lg-none">
                <div class="card-body p-3 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" height="100%"
                    src="~/assets/SolutionsWizemoves/Consulting/arrow-trending-down.png" alt="arrow-trending-down.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">เพจร้าง ยอดเงียบ</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ธุรกิจประสบปัญหาด้านการสื่อสารบนสื่อออนไลน์ ส่งผลให้เพจขาดความเคลื่อนไหว และยอดการมีส่วนร่วมต่ำ</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-3">
              <div class="card-1 p-1 d-none d-lg-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/ICON4 1.png" alt="ICON4 1.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-2 mt-4">คอนเทนต์ไม่โดน แบรนด์ไม่จำ</p>
                  <p class="text-s-24 font-df color-1F2937 mb-0">เนื้อหาที่เผยแพร่ไม่สามารถดึงดูดกลุ่มเป้าหมาย ทำให้ไม่เกิดการแชร์และขาดการรับรู้แบรนด์</p>
                </div>
              </div>
              <div class="card-1 d-block d-lg-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/ICON4 1.png"
                    alt="ICON4 1.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">คอนเทนต์ไม่โดน แบรนด์ไม่จำ</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">เนื้อหาที่เผยแพร่ไม่สามารถดึงดูดกลุ่มเป้าหมาย ทำให้ไม่เกิดการแชร์และขาดการรับรู้แบรนด์</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-3">
              <div class="card-1 p-1 d-none d-lg-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/ICON6 1.png" alt="ICON6 1.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-2 mt-4">แอดมินไม่โปร ตอบช้า</p>
                  <p class="text-s-24 font-df color-1F2937 mt-4 pt-3 mb-0">ขาดบุคลากรที่มีความเชี่ยวชาญในการดูแลเพจ ทำให้การตอบกลับลูกค้าล่าช้าหรือไม่ครบถ้วน</p>
                </div>
              </div>
              <div class="card-1 d-block d-lg-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/ICON6 1.png"
                    alt="ICON6 1.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">แอดมินไม่โปร ตอบช้า</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ขาดบุคลากรที่มีความเชี่ยวชาญในการดูแลเพจ ทำให้การตอบกลับลูกค้าล่าช้าหรือไม่ครบถ้วน</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 p-3">
              <div class="card-1 p-1 d-none d-lg-block">
                <div class="card-body">
                  <img class="img-fluid px-md-0 px-4 py-md-0 py-2 pt-3"
                    src="~/assets/SolutionsWizemoves/Consulting/user-group.png" alt="user-group.png">
                  <p class="text-s-36 font-bd color-1F2937 mb-2 mt-4">เจ้าของงานล้น จนเสียเวลา</p>
                  <p class="text-s-24 font-df color-1F2937 mt-4 pt-3 mb-0">ผู้ประกอบการต้องจัดการงานด้านคอนเทนต์และการสื่อสารเองทั้งหมด ส่งผลให้เสียเวลาและกระทบประสิทธิภาพธุรกิจ</p>
                </div>
              </div>
              <div class="card-1 d-block d-lg-none">
                <div class="card-body p-3 d-flex align-items-center">
                  <img class="img-fluid" height="100%" src="~/assets/SolutionsWizemoves/Consulting/user-group.png"
                    alt="user-group.png">
                  <div class="ms-3">
                    <p class="text-s-24 font-bd color-1F2937 mb-1">เจ้าของงานล้น จนเสียเวลา</p>
                    <p class="text-s-20 font-df color-1F2937 mb-1">ผู้ประกอบการต้องจัดการงานด้านคอนเทนต์และการสื่อสารเองทั้งหมด ส่งผลให้เสียเวลาและกระทบประสิทธิภาพธุรกิจ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5 fade-in-up" v-intersect>
          <div class="col-12 text-center">
            <p class="text-s-24">หากปัญหาเหล่านี้ตรงกับธุรกิจของคุณ นี่ไม่ใช่ปัญหาเชิงการจัดการ แต่<span
                class="font-bd">เป็นปัญหาเชิงกลยุทธ์...</span></p>
          </div>
          <div class="col-12 text-center mt-3">
            <nuxt-link :to="{ path: '/solutions/wizemoves-content' }"
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
                    ทำไมต้องเลือกบริการ<br /> WizeMoves Content
                  </h2>
                  <h2 class="text-s-44 font-bd mb-0 d-lg-none d-md-block">
                    ทำไมต้องเลือกบริการ<br /> WizeMoves Content
                  </h2>
                </div>
              </div>
              <div class="col-6 col-6-custom-2 fade-in-up" v-intersect>
                <CardBgImg type="WizmovesContent" />
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
                    ทำไมต้องเลือกบริการ<br /> WizeMoves Content
                  </h2>
                </h2>
              </div>
            </div>
            <div class="col-12 fade-in-up" v-intersect>
              <CardBgImg type="WizmovesContent" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mt-lg-5 pt-md-5 ps-lg-4 pe-lg-4 mt-0 pt-0 ps-4 pe-4">
      <div class="cart-img-text">
        <div class="cart-color-text">
          <div class="row d-none d-md-block">
            <div class="col-12 text-center color-FFFFFF d-flex" style="height: 370px">
              <div class="mt-auto mx-auto d-lg-block d-md-none">
                <h2 class="text-s-60 mb-0 font-bd mt-auto mx-auto">
                  ให้ WizeMoves Content ช่วยวางแผนคอนเทนต์และดูแลเพจครบวงจร
                </h2>
                <p class="text-s-28 mb-0">สร้างธุรกิจให้เป็นที่จดจำ พร้อมบริการแอดมินดูแลลูกค้าเพื่อผลักดันยอดขาย
                </p>
              </div>
              <div class="mt-auto mx-auto d-lg-none d-md-block">
                <h2 class="text-s-44 mb-0 font-bd mt-auto mx-auto">
                  ให้ WizeMoves Content<br />ช่วยวางแผนคอนเทนต์และดูแลเพจครบวงจร
                </h2>
                <p class="text-s-20 mb-0 mt-3">สร้างธุรกิจให้เป็นที่จดจำ พร้อมบริการแอดมินดูแลลูกค้าเพื่อผลักดันยอดขาย</p>
              </div>
            </div>
          </div>
          <div class="row d-block d-md-none">
            <div class="col-12 text-center color-FFFFFF d-flex ps-3 pe-3" style="height: 500px">
              <div class="mt-auto mx-auto">
                <h2 class="text-s-44 mb-0 font-bd mt-auto mx-auto">
                  ให้ WizeMoves Content<br />ช่วยวางแผนคอนเทนต์<br />และดูแลเพจครบวงจร
                </h2>
                <p class="text-s-20 mt-3 mb-0">สร้างธุรกิจให้เป็นที่จดจำ<br />พร้อมบริการแอดมินดูแลลูกค้าเพื่อผลักดันยอดขาย</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Services" class="section-spacing section-active">
      <div class="container ps-md-0 pe-md-0 ps-4 pe-4">
        <div class="row">
          <div class="col-12 text-center mt-5 mb-5 pb-5">
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
              คอนเทนต์ตรงใจ<br />ปิดการขายไวด้วยแอดมิน</p>
            <p class="text-s-44 font-bd mb-0 d-none d-md-block d-xl-none">
              คอนเทนต์ตรงใจ<br />ปิดการขายไว<br />ด้วยแอดมิน</p>
            <p class="text-s-44 font-bd mb-0 d-block d-md-none">คอนเทนต์ตรงใจ<br />ปิดการขายไวด้วยแอดมิน
            </p>
          </div>
          <div class="col-md-6 col-12">
            <div class="d-none d-xl-block">
              <p class="text-s-24 font-df mb-0 mt-3">ขับเคลื่อนแบรนด์ให้เติบโต ด้วยการผลิตและวางแผนคอนเทนต์จากทีมงานมืออาชีพ</p>
              <p class="text-s-24 font-df mb-0 mt-4">หมดปัญหาเพจเงียบ ไร้ Engagement! เราพร้อมให้คำปรึกษาและรับผลิตคอนเทนต์โฆษณาทุกรูปแบบ ทั้งภาพนิ่ง คลิปสั้น และวิดีโอ โดยปรับแต่งให้เหมาะสมกับแต่ละแพลตฟอร์ม เพื่อสื่อสารกับกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพสูงสุด</p>
            </div>
            <div class="d-block d-xl-none">
              <p class="text-s-20 font-df mb-0 mt-2">ขับเคลื่อนแบรนด์ให้เติบโต ด้วยการผลิตและวางแผนคอนเทนต์จากทีมงานมืออาชีพ</p>
              <p class="text-s-20 font-df mb-0 mt-4">หมดปัญหาเพจเงียบ ไร้ Engagement! เราพร้อมให้คำปรึกษาและรับผลิตคอนเทนต์โฆษณาทุกรูปแบบ ทั้งภาพนิ่ง คลิปสั้น และวิดีโอ โดยปรับแต่งให้เหมาะสมกับแต่ละแพลตฟอร์ม เพื่อสื่อสารกับกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพสูงสุด</p>
            </div>
          </div>
        </div>
        <div class="mt-5 pt-5">
          <div class="row pt-lg-5 mt-lg-5 pt-0 mt-0">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-0 ps-0 pb-200">

              <img class="img-fluid mb-4 d-block d-md-none"
                src="~/assets/SolutionsWizemoves/image-wizemoves-content/content service_wmz content.jpg" alt="content service_wmz content.jpg" />
              <span class="text-s-24 font-md text-hl">บริการด้าน Content Marketing</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-4">
                บริการด้าน Content Marketing
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                สร้างสรรค์และยกระดับการสื่อสารของแบรนด์ผ่านกลยุทธ์เนื้อหาเชิงรุก เพื่อสร้างความน่าเชื่อถือและกระตุ้นการตัดสินใจของผู้บริโภค ครอบคลุมตั้งแต่การวางรากฐานแนวคิด การผลิตสื่อมัลติมีเดียคุณภาพสูง ไปจนถึงการให้คำปรึกษาเพื่อสร้างความได้เปรียบทางการแข่งขันในโลกดิจิทัลอย่างยั่งยืน
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/carbon_model-builder.png"
                        alt="carbon_model-builder.png">
                      <span class="ms-2 m-auto">วางกลยุทธ์ด้านเนื้อหาอย่างเป็นระบบ</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">วางแผนการสื่อสารครบวงจรให้ตรงเป้าหมายธุรกิจ เพื่อสร้างภาพจำที่ชัดเจนในทุกแพลตฟอร์ม และเปลี่ยนกลุ่มเป้าหมายให้เป็นลูกค้าประจำในระยะยาว</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/icon-park-outline_user-positioning.png"
                        alt="icon-park-outline_user-positioning.png">
                      <span class="ms-2 m-auto">ผลิตคอนเทนต์บน Facebook, Instagram</span>
                    </div>
                    <p class="text-s-24 font-df">ผลิตสื่อโฆษณาภาพและวิดีโอที่โดดเด่นบน Facebook และ Instagram เน้นความสะดุดตาเพื่อกระตุ้นการมีส่วนร่วม และขับเคลื่อนยอดขายผ่านโซเชียลมีเดียยอดนิยม</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/Icon.png" alt="Icon.png">
                      <span class="ms-2 m-auto">วิเคราะห์จุดเด่นของแบรนด์</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ชูจุดเด่นของแบรนด์ผ่านคอนเทนต์ที่ตรงใจลูกค้า เปลี่ยนเอกลักษณ์ของธุรกิจให้เป็นเรื่องราวที่ทรงพลังและสร้างผลลัพธ์ที่วัดผลได้จริง</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/chat.png" alt="chat.png">
                      <span class="ms-2 m-auto">ให้คำปรึกษาเกี่ยวกับ Content Marketing</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ให้คำปรึกษาเชิงลึกโดยผู้เชี่ยวชาญ เพื่อแก้ปัญหาการสื่อสารและเพิ่มศักยภาพคอนเทนต์ พร้อมอัปเดตเทรนด์ใหม่ให้ธุรกิจนำหน้าคู่แข่งเสมอ</p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves-content' }"
                    class="btn-transparent-violet text-s-24 font-md py-2"
                    data-tag="services_strategic_planning_free_consultation">
                    <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                  </nuxt-link>
                </div>
              </div>


              <div class="space-services"></div>
              <img class="img-fluid mb-4 d-block d-md-none"
                src="~/assets/SolutionsWizemoves/image-wizemoves-content/production_wmz content.jpg" alt="production_wmz content.jpg" />
              <span class="text-s-24 font-md text-hl">บริการด้านออกแบบและผลิตสื่อ</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-4">
                บริการด้านออกแบบและผลิตสื่อ
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                ยกระดับภาพลักษณ์แบรนด์ผ่านงานดีไซน์และสื่อมัลติมีเดียคุณภาพสูง ออกแบบและผลิตเนื้อหาที่สร้างสรรค์ เพื่อสื่อสารตัวตนของธุรกิจให้โดดเด่น เข้าถึงกลุ่มเป้าหมายในทุกแพลตฟอร์มดิจิทัล พร้อมกระตุ้นการรับรู้ และส่งเสริมกลยุทธ์การตลาดให้มีประสิทธิภาพสูงสุดอย่างครบวงจร
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/search.png" alt="search.png">
                      <span class="ms-2 m-auto">ออกแบบงานกราฟิกให้เหมาะสมแบรนด์</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ออกแบบสื่อกราฟิกให้สะท้อนตัวตนแบรนด์และสื่อสารข้อความอย่างชัดเจน เพื่อสร้างความจดจำและความแตกต่างที่ยั่งยืนในตลาด</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/view-columns.png" alt="view-columns.png">
                      <span class="ms-2 m-auto">ถ่ายภาพนิ่ง วิดีโอโฆษณา</span>
                    </div>
                    <p class="text-s-24 font-df">บริการถ่ายภาพและวิดีโอโฆษณาที่ปรับโทนได้ตามเอกลักษณ์ของแบรนด์ เพื่อนำเสนอสินค้าให้น่าสนใจและสร้างผลลัพธ์ทางการตลาดที่จับต้องได้</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/chat.png" alt="chat.png">
                      <span class="ms-2 m-auto">ผลิตคลิปสั้นเพื่อลงใน TikTok หรือ Reels</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">สร้างสรรค์วิดีโอสั้นทันกระแส (TikTok, Reels, Instagram) เพื่อเพิ่มการเข้าถึง (Reach) และสร้างการรับรู้แบรนด์ไปยังกลุ่มเป้าหมายในวงกว้าง</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/copy.png" alt="copy.png">
                      <span class="ms-2 m-auto">ผลิตคอนเทนต์ Album Post บน Facebook</span>
                    </div>
                    <p class="text-s-24 font-df">ผลิตคอนเทนต์อัลบั้มภาพที่ร้อยเรียงเป็นเรื่องราว ให้ข้อมูลครบถ้วนและน่าติดตาม เพื่อเพิ่มประสิทธิภาพในการมีส่วนร่วม (Engagement) กับแบรนด์อย่างสูงสุด</p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves-content' }"
                    class="btn-transparent-violet text-s-24 font-md py-2"
                    data-tag="services_market_expansion_free_consultation">
                    <span class="text">ปรึกษากลยุทธ์ฟรี</span>
                  </nuxt-link>
                </div>
              </div>



              <div class="space-services"></div>
              <img class="img-fluid mb-4 d-block d-md-none"
                src="~/assets/SolutionsWizemoves/image-wizemoves-content/admin_wmz content.jpg" alt="admin_wmz content.jpg" />
              <span class="text-s-24 font-md text-hl">บริการดูแลเพจและแอดมินตอบแชท</span>
              <p class="text-s-52 font-md color-1F2937 mb-0 mt-4">
                บริการดูแลเพจและแอดมินตอบแชท
              </p>
              <p class="text-s-24 color-1F2937 mb-0 mt-3">
                ยกระดับมาตรฐานการสื่อสารและสร้างภาพลักษณ์ที่น่าเชื่อถือให้กับแบรนด์บนสื่อสังคมออนไลน์ ด้วยทีมงานมืออาชีพที่พร้อมดูแลลูกค้าและบริหารจัดการเพจอย่างเป็นระบบ ช่วยลดภาระงานของผู้ประกอบการ พร้อมเปลี่ยนทุกบทสนทนาให้กลายเป็นโอกาสทางธุรกิจอย่างมีประสิทธิภาพ
              </p>
              <div class="row mt-4 space-tigger">
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/trophy.png" alt="trophy.png">
                      <span class="ms-2 m-auto">ตอบคำถามลูกค้าอย่างมืออาชีพ</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">ทีมแอดมินดูแลลูกค้ามืออาชีพสแตนด์บายตั้งแต่ 09.00 - 24.00 น. ทุกวันไม่มีวันหยุด เพื่อลดการรอคอยและสร้างความพึงพอใจสูงสุดในทุกการติดต่อสื่อสาร</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/jigsaw.png" alt="jigsaw.png">
                      <span class="ms-2 m-auto">ให้ข้อมูลสินค้าและเงื่อนไขอย่างครบถ้วน</span>
                    </div>
                    <p class="text-s-24 font-df">ให้ข้อมูลสินค้าและเงื่อนไขบริการอย่างแม่นยำ พร้อมจัดการทุกข้อสงสัยอย่างเป็นระบบเพื่อสร้างความน่าเชื่อถือและภาพลักษณ์ที่ดีให้กับแบรนด์ของคุณ</p>
                  </div>
                </div>
                <div class="col-lg-6 col-12 pe-0">
                  <div class="card card-01">
                    <div class="card-body d-flex">
                      <img src="~/assets/SolutionsWizemoves/Consulting/view-columns.png" alt="view-columns.png">
                      <span class="ms-2 m-auto">สนับสนุนการปิดการขาย</span>
                    </div>
                    <p class="text-s-24 font-df pe-4">เน้นเทคนิคการสื่อสารเชิงรุกเพื่อกระตุ้นการตัดสินใจซื้อและปิดการขายอย่างมีประสิทธิภาพ ช่วยเปลี่ยนผู้สนใจให้กลายเป็นยอดขายจริง เพื่อสร้างการเติบโตให้ธุรกิจ</p>
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-12">
                  <nuxt-link :to="{ path: '/solutions/wizemoves-content' }"
                    class="btn-transparent-violet text-s-24 font-md py-2"
                    data-tag="services_customer_loyalty_free_consultation">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="OurSolution" class="section-active">
      <div class="container">
        <div class="container pb-md-5 pb-0 p-md-0 p-4">
          <div class="row">
            <div class="col-12 mt-0 text-center fade-in-up" v-intersect>
              <div class="m-auto" style="
                  width: 110px;
                  border: 2px solid #00000008;
                  backdrop-filter: blur(10px);
                  border-radius: 32px;
                  background: #fff;
                ">
                <p class="text-ranbow text-s-24 text-w-700 m-0 p-1">Process</p>
              </div>
              <h2 class="text-s-60 text-w-700 color-1F2937 mt-3 d-none d-xl-block">
                วิธีการทำงานของเรา
              </h2>
              <h2 class="text-s-44 text-w-700 color-1F2937 mt-3 d-block d-xl-none">
                วิธีการทำงานของเรา
              </h2>
              <p class="text-s-24 mt-3 d-none d-lg-block">WizeMoves Content เป็นมากกว่าผู้รับทำคอนเทนต์ แต่เราคือทีมงานมืออาชีพที่สร้างแบรนด์ของคุณให้เป็นที่จดจำ</p>
              <p class="text-s-24 mt-3 d-block d-lg-none">WizeMoves Content เป็นมากกว่าผู้รับทำคอนเทนต์ แต่เราคือทีมงานมืออาชีพที่สร้างแบรนด์ของคุณให้เป็นที่จดจำ</p>
            </div>
            <div class="row mt-xl-5 mt-2 mb-3 fade-in-up" v-intersect>
              <div class="col-3 align-self-center d-none d-xl-block">
                <p class="text-s-44 font-bd mb-0">ขั้นตอนการ</p>
                <p class="text-s-44 font-bd mb-0">ทำงาน<span class="text-ranbow">หลังเซ็นสัญญา</span></p>
              </div>
              <div class="col-12 text-center d-block d-xl-none">
                <p class="text-s-36 font-bd mb-4 mt-4">ขั้นตอนการทำงาน<span class="text-ranbow">หลังเซ็นสัญญา</span></p>
              </div>
              <div class="col-xl-9 col-12 d-none d-md-block">
                <div class="row">
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วิเคราะห์ธุรกิจ' }">
                        <img @mouseover="active = 'วิเคราะห์ธุรกิจ'"
                          src="~/assets/SolutionsWizemoves/Consulting/clipboard-document-list.png" alt="profile"
                          class="inner-circle" :class="{ 'inner-circle-hover': active === 'วิเคราะห์ธุรกิจ' }" />
                      </div>
                      <img class="img-fluid ms-2 icon-process" src="~/assets/SolutionsWizemoves/Consulting/Line.png" alt="Line.png">
                    </div>
                    <p class="text-s-24 font-md mt-4 mb-2">วิเคราะห์ธุรกิจและ<br />กลุ่มเป้าหมาย</p>
                    <p class="text-s-18 font-df">เริ่มจากการรวบรวมข้อมูลและทำความเข้าใจธุรกิจของลูกค้าอย่างละเอียด</p>
                  </div>
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วางกลยุทธ์' }">
                        <img @mouseover="active = 'วางกลยุทธ์'"
                          src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right.png" alt="profile"
                          class="inner-circle" :class="{ 'inner-circle-hover': active === 'วางกลยุทธ์' }" />
                      </div>
                      <img class="img-fluid ms-2 icon-process" src="~/assets/SolutionsWizemoves/Consulting/Line.png" alt="Line.png">
                    </div>
                    <p class="text-s-24 font-md mt-4 mb-2">วางกลยุทธ์</p>
                    <p class="text-s-18 font-df">กำหนดทิศทางคอนเทนต์ ปฏิทินโพสต์ และแนวทางการสื่อสาร</p>
                  </div>
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'ผลิตและเผยแพร่' }">
                        <img @mouseover="active = 'ผลิตและเผยแพร่'"
                          src="~/assets/SolutionsWizemoves/Consulting/cube-transparent.png" alt="profile"
                          class="inner-circle" :class="{ 'inner-circle-hover': active === 'ผลิตและเผยแพร่' }" />
                      </div>
                      <img class="img-fluid ms-2 icon-process" src="~/assets/SolutionsWizemoves/Consulting/Line.png" alt="Line.png">
                    </div>
                    <p class="text-s-24 font-md mt-4 mb-2">ผลิตและเผยแพร่<br />เนื้อหา</p>
                    <p class="text-s-18 font-df">สร้างคอนเทนต์ที่สอดคล้องกับกลยุทธ์ พร้อมเผยแพร่ในแพลตฟอร์มที่เหมาะสม</p>
                  </div>
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'ดูแลเพจ' }">
                        <img @mouseover="active = 'ดูแลเพจ'"
                          src="~/assets/SolutionsWizemoves/Consulting/user-group.png" alt="profile"
                          class="inner-circle" :class="{ 'inner-circle-hover': active === 'ดูแลเพจ' }" />
                      </div>
                      <img class="img-fluid ms-2 icon-process" src="~/assets/SolutionsWizemoves/Consulting/Line.png" alt="Line.png">
                    </div>
                    <p class="text-s-24 font-md mt-4 mb-2">ดูแลเพจและตอบ<br />ลูกค้า</p>
                    <p class="text-s-18 font-df">ทีมแอดมินดูแลการตอบข้อความ รวมถึงให้ข้อมูลที่ถูกต้องแก่ลูกค้า</p>
                    <p class="text-s-14 font-df color-6B7280 mt-1">*ในกรณีที่ลูกค้าเลือกใช้บริการทีมแอดมิน</p>
                  </div>
                  <div class="col">
                    <div class="d-flex justify-content-start">
                      <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วัดผลและปรับปรุง' }">
                        <img @mouseover="active = 'วัดผลและปรับปรุง'"
                          src="~/assets/SolutionsWizemoves/Consulting/presentation-chart-bar.png" alt="profile"
                          class="inner-circle" :class="{ 'inner-circle-hover': active === 'วัดผลและปรับปรุง' }" />
                      </div>
                    </div>
                    <p class="text-s-24 font-md mt-4 mb-2">วัดผลและปรับปรุง</p>
                    <p class="text-s-18 font-df">รายงานผลการดำเนินงาน พร้อมเสนอแนวทางการปรับปรุงเพื่อเพิ่มประสิทธิภาพอย่างต่อเนื่อง</p>
                  </div>
                </div>
              </div>
              <div class="col-12 d-block d-md-none">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center">
                      <div class="d-flex flex-column align-items-center">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วิเคราะห์ธุรกิจ' }">
                          <img @mouseover="active = 'วิเคราะห์ธุรกิจ'"
                            src="~/assets/SolutionsWizemoves/Consulting/clipboard-document-list.png" alt="profile"
                            class="inner-circle" :class="{ 'inner-circle-hover': active === 'วิเคราะห์ธุรกิจ' }" />
                        </div>
                        <img class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/Consulting/Line-m.png" alt="Line.png">
                      </div>
                      <div class="ms-3" style="margin-top: -12px;">
                        <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">วิเคราะห์ธุรกิจและกลุ่มเป้าหมาย</p>
                        <p class="text-s-20 font-df">เริ่มจากการรวบรวมข้อมูลและทำความเข้าใจธุรกิจของลูกค้าอย่างละเอียด</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-2">
                      <div class="d-flex flex-column align-items-center">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วางกลยุทธ์' }">
                          <img @mouseover="active = 'วางกลยุทธ์'"
                            src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right.png" alt="profile"
                            class="inner-circle" :class="{ 'inner-circle-hover': active === 'วางกลยุทธ์' }" />
                        </div>
                        <img class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/Consulting/Line-m.png" alt="Line.png">
                      </div>
                      <div class="ms-3" style="margin-top: -12px;">
                        <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">วางกลยุทธ์</p>
                        <p class="text-s-20 font-df">กำหนดทิศทางคอนเทนต์ ปฏิทินโพสต์ และแนวทางการสื่อสาร</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-2">
                      <div class="d-flex flex-column align-items-center">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'ผลิตและเผยแพร่' }">
                          <img @mouseover="active = 'ผลิตและเผยแพร่'"
                            src="~/assets/SolutionsWizemoves/Consulting/cube-transparent.png" alt="profile"
                            class="inner-circle" :class="{ 'inner-circle-hover': active === 'ผลิตและเผยแพร่' }" />
                        </div>
                        <img class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/Consulting/Line-m.png" alt="Line.png">
                      </div>
                      <div class="ms-3" style="margin-top: -12px;">
                        <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">ผลิตและเผยแพร่เนื้อหา</p>
                        <p class="text-s-20 font-df">สร้างคอนเทนต์ที่สอดคล้องกับกลยุทธ์ พร้อมเผยแพร่ในแพลตฟอร์มที่เหมาะสม</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-2">
                      <div class="d-flex flex-column align-items-center">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'ดูแลเพจ' }">
                          <img @mouseover="active = 'ดูแลเพจ'"
                            src="~/assets/SolutionsWizemoves/Consulting/user-group.png" alt="profile"
                            class="inner-circle" :class="{ 'inner-circle-hover': active === 'ดูแลเพจ' }" />
                        </div>
                        <img class="img-fluid mt-2" src="~/assets/SolutionsWizemoves/Consulting/Line-m.png" alt="Line.png">
                      </div>
                      <div class="ms-3" style="margin-top: -12px;">
                        <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">ดูแลเพจและตอบลูกค้า</p>
                        <p class="text-s-20 font-df">ทีมแอดมินดูแลการตอบข้อความ รวมถึงให้ข้อมูลที่ถูกต้องแก่ลูกค้า</p>
                        <p class="text-s-14 font-df color-6B7280">*ในกรณีที่ลูกค้าเลือกใช้บริการทีมแอดมิน</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="d-flex align-items-center mt-2">
                      <div class="d-flex flex-column align-items-center">
                        <div class="outer-circle" :class="{ 'outer-circle-hover': active === 'วัดผลและปรับปรุง' }">
                          <img @mouseover="active = 'วัดผลและปรับปรุง'"
                            src="~/assets/SolutionsWizemoves/Consulting/presentation-chart-bar.png" alt="profile"
                            class="inner-circle" :class="{ 'inner-circle-hover': active === 'วัดผลและปรับปรุง' }" />
                        </div>
                      </div>
                      <div class="ms-3" style="margin-top: -12px;">
                        <p class="font-md mb-2" style="font-size: 24px;line-height: 24px;">วัดผลและปรับปรุง</p>
                        <p class="text-s-20 font-df">รายงานผลการดำเนินงาน พร้อมเสนอแนวทางการปรับปรุงเพื่อเพิ่มประสิทธิภาพอย่างต่อเนื่อง</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mt-4">
                <img class="img-fluid img-Process" src="~/assets/SolutionsWizemoves/Consulting/ImageGG.png"
                  alt="ImageGG.png">
              </div>
              <div class="col-12 text-center mt-5 pt-4">
                <nuxt-link :to="{ path: '/solutions/wizemoves-content' }"
                  class="btn-gradient text-s-24 font-md py-2" data-tag="process_get_free_consultation">
                  <span class="text">รับคำปรึกษากับผู้เชี่ยวชาญฟรี</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-spacing">
      <BlogWizemoves :responseData="responseData" />
    </section>

    <section class="section-spacing">
      <CardContact page="Kaikong" />
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
  name: 'SolutionsKaikong',

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
      title: 'WizeMoves Content รับทำคอนเทนต์โฆษณาและบริการแอดมินดูแลเพจครบวงจร',
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
        { label: "Our Solution", id: "#OurSolution", name: "OurSolution" },
        // { label: "Customers", id: "#Customers", name: "Customers" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None",
      interested: !this.$route.query.bu ? 'Kaikong' : this.$route.query.bu,
      currentImage: require('~/assets/SolutionsWizemoves/image-wizemoves-content/content service_wmz content.jpg'),
      images: {
        strategic: require('~/assets/SolutionsWizemoves/image-wizemoves-content/content service_wmz content.jpg'),
        market: require('~/assets/SolutionsWizemoves/image-wizemoves-content/production_wmz content.jpg'),
        loyalty: require('~/assets/SolutionsWizemoves/image-wizemoves-content/admin_wmz content.jpg'),
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
            name: 'business consulting',
            item: 'https://www.sellsuki.co.th/solutions/wizemoves/business-consulting',
          },
        ],
      },
      {
        "@context": "https://schema.org/", 
        "@type": "Service", 
        "name": "WizeMoves Consult",
        "image": "",
        "description": "ที่ปรึกษาธุรกิจด้านกลยุทธ์ ผู้ช่วยเพิ่มยอดขายให้เป้าหมายของคุณเป็นจริง เราคือที่ปรึกษาด้านกลยุทธ์ที่ช่วยเพิ่มยอดขาย 100 % ภายในเวลา 1 ปี เราพร้อมเติบโตไปกับลูกค้า ที่ปรึกษาที่พร้อมสร้างกลยุทธ์ให้เกิดขึ้นจริงและเปลี่ยนเป็นยอดขายได้",
        "brand": {
          "@type": "Brand",
          "name": "Sellsuki"
        },
        "sku": "WizeMoves Consult",
        "offers": {
          "@type": "Offer",
          "url": "https://www.sellsuki.co.th/solutions/wizemoves/business-consulting",
          "priceCurrency": "THB",
          "price": "0",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  },
  async asyncData({ $axios, store }) {
    store.commit('setTitle', 'Kaikong')
    return {}
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Add the scroll event listener
    const options = {
      root: null, // Uses the viewport as the container
      rootMargin: '0px',
      threshold: [0.1], // เพิ่ม threshold หลายค่า
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);

    const sections = document.querySelectorAll('.section-active');
    sections.forEach((section) => observer.observe(section));

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // เพิ่มเงื่อนไขให้เข้มงวดขึ้น
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(() => {
            const section = entry.target;
            if (section.classList.contains('strategic-section')) {
              this.currentImage = this.images.strategic;
            } else if (section.classList.contains('market-section')) {
              this.currentImage = this.images.market;
            } else if (section.classList.contains('loyalty-section')) {
              this.currentImage = this.images.loyalty;
            }
          }, 100); // delay 100ms
        }
      });
    }, {
      // ปรับค่า options
      threshold: 1, // ต้องเห็น element 80% ขึ้นไปถึงจะทริกเกอร์
      rootMargin: '-50px 0px -50px 0px' // เพิ่มระยะห่างจากขอบบนและล่าง
    });

    // เพิ่ม class ให้แต่ละ section
    document.querySelectorAll('.space-tigger').forEach((section, index) => {
      if (index === 0) section.classList.add('strategic-section');
      if (index === 1) section.classList.add('market-section');
      if (index === 2) section.classList.add('loyalty-section');
      if (index === 3) section.classList.add('media-section');
      if (index === 4) section.classList.add('influencer-section');

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
  height: 400px;
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
  /* ป้องกันรูปล้นพื้นที่ */
  height: auto;
  /* ให้ความสูงปรับตามสัดส่วน */
  border-radius: 16px;
}

/* เพิ่ม media query สำหรับหน้าจอขนาดเล็ก */
@media only screen and (max-width: 600px) {
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
  background-color: #8B5CF6 !important;
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
  border: 1px solid #7C3AED;
  background: white;
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-white-yellow {
  display: inline-flex;
  align-items: center;
  color: #8B5CF6 !important;
  background: white;
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
}

.btn-white-yellow .icon {
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
  background-color: #FFF9E61A;
  color: white;
  border-radius: 999px;
  border: 1px solid #F7D87A33;
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

.card-01 .card-body {
  padding: 14px 0px 14px 0px;
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
  background-color: #FFF9E6;
  border: 1px solid #F7D87A;
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
  background-color: #7C3AED;
  border-radius: 50%;
  left: 8px;
  position: relative;
}

.bg-img-mobile {
  background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
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
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    linear-gradient(rgba(139, 92, 246, 0.07), rgba(139, 92, 246, 0.07)),
    url('~/assets/SolutionsWizemoves/image-wizemoves-content/admin_wmz content.jpg');
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.bg-color {
  background: linear-gradient(90deg,
      rgba(77, 20, 166, 0.56) 14.45%,
      rgba(104, 51, 201, 0.45549) 30.75%,
      rgba(139, 92, 246, 0.32) 47.62%,
      rgba(167, 139, 250, 0) 64.3%);
}

.bg-color-mobile {
  background: linear-gradient(180deg, rgba(109, 40, 217, 0.56) 0%, rgba(139, 92, 246, 0.32) 59.44%, rgba(167, 139, 250, 0) 100%);

}

.bg-icon-main {
  margin-left: -10px !important;
  margin-top: -10px !important;
  background-color: #7C3AED;
  width: 146px;
  height: 146px;
  border-radius: 50%;
}

.theme-background-main {
  background-color: #7C3AED;
}

.theme-background-sub {
  background-color: #7C3AED;
}

.theme-text-main {
  color: #7C3AED;
}

.theme-text-sub {
  color: #7C3AED;
}

.theme-border {
  border-bottom: 1px solid #6D28D9 !important;
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
  background-image: url('~/assets/SolutionsWizemoves/image-wizemoves-content/รูปก่อนถึง service.jpg');
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

.text-s-18 {
  line-height: 18px;
}

.img-Process {
  min-height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .card-1 {
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
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

  #Services .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .section-spacing {
    padding-top: 0px;
  }

  .hero-section .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .hero-section .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .hero-section .text-s-20 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .pb-200 {
    padding-bottom: 100px;
  }
}

@media only screen and (max-width: 380px) {
  .btn-gradient {
    padding: 0px 12px 0px 12px;
  }
  .btn-white-yellow {
    padding: 0px 12px 0px 12px;
  }
  .hero-section .text-s-20 {
    font-size: 16px !important;
    line-height: 16px !important;
    padding: 4px 10px !important;
  }
  .hero-section .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }
  .breadcrumb .text-s-20 {
    font-size: 16px !important;
    padding: 0px !important;
  }
  .img-360 {
    margin-top: 40px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-1 {
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .cart-color-text {
    border-radius: 16px;
    padding: 40px 0px;
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

  #Services .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .hero-section .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .hero-section .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .hero-section .text-s-20 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .banner-main {
    height: 400px;
  }

  .bg-img {
    background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
    background-position: -550px center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .pb-200 {
    padding-bottom: 100px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .card-1 {
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
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

  #Services .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  #OurSolution .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  #OurSolution .text-s-24 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .hero-section .text-s-52 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .hero-section .text-s-36 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .hero-section .text-s-20 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .banner-main {
    height: 470px;
  }

  .bg-img {
    background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
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

  .card-1 .card-body {
    height: 115px;
  }

  .btn-gradient {
    padding: 4px 12px 4px 12px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .card-1 {
    height: 240px;
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
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
    padding-top: 100px !important;
    padding-bottom: 20px !important;
  }

  .banner-main {
    height: 550px;
  }

  .bg-img {
    background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
  }

  .icon-process {
    width: 60%;
  }

  #Services .text-s-52 {
    font-size: 52px !important;
    line-height: 52px !important;
  }

  #Services .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  #OurSolution .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  #OurSolution .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .hero-section .text-s-52 {
    font-size: 52px !important;
    line-height: 52px !important;
  }

  .hero-section .text-s-36 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .hero-section .text-s-20 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .pb-200 {
    padding-bottom: 80px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card-1 {
    height: 280px;
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
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
    background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
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
}

@media only screen and (min-width: 1280px) and (max-width: 1440px) {
  .text-s-36 {
    font-size: 30px !important;
    line-height: 30px !important;
  }

  .text-s-44 {
    font-size: 40px !important;
    line-height: 40px !important;
  }
}

@media only screen and (min-width: 1578px) {
  .card-1 {
    height: 240px;
    box-shadow: 0px 1px 3px 0px #D4A01712, 0px 5px 5px 0px #D4A0170F, 0px 12px 7px 0px #D4A0170A, 0px 20px 8px 0px #D4A01703, 0px 32px 9px 0px #D4A01700;
    border-radius: 16px;
    border: 2px solid #F3F4F6;
    background-color: #FFFFFF;
  }
}

.btn-wm-white {
  display: inline-flex;
  align-items: center;
  color: #7C3AED !important;
  border: 1px solid #7C3AED;
  background: white;
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
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

/* ---- Kaikong Hero Banner ---- */
.kk-bg-img {
  background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
}
.kk-bg-color {
  background: linear-gradient(90deg,
    rgba(77, 20, 166, 0.56) 14.45%,
    rgba(104, 51, 201, 0.45549) 30.75%,
    rgba(139, 92, 246, 0.32) 47.62%,
    rgba(167, 139, 250, 0) 64.3%);
  padding-bottom: 0;
}
.kk-bg-img-mobile {
  background-image: url('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/banner_Kaikong_bbb52fcfe4.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
}
.kk-bg-color-mobile {
  background: linear-gradient(180deg, rgba(109, 40, 217, 0.56) 0%, rgba(139, 92, 246, 0.32) 59.44%, rgba(167, 139, 250, 0) 100%);
}
.kk-badge {
  display: inline-flex;
  align-items: center;
  background-color: #F5F3FF1A;
  color: white;
  border-radius: 999px;
  border: 1px solid #DDD6FE33;
  padding: 4px 16px 4px 10px;
}
.kk-badge-icon {
  font-size: 16px;
  margin-right: 6px;
  color: #7C3AED;
}
.kk-btn-main {
  display: inline-flex;
  align-items: center;
  color: white !important;
  background: linear-gradient(82.53deg, #6D28D9 7.45%, #FBBF24 113.56%);
  border-radius: 999px;
  padding: 4px 22px 4px 18px;
  text-decoration: none;
}

</style>
