<template>
  <div id="SolutionsWizemovesagency">
    <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content modal-custom-size">
            <div class="modal-header p-0">
              <span id="exampleModalLabel" class="header-model">
                ขอใบเสนอราคา
              </span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-0">
              <FormDataUser interested="LINEAgency" page="LINEAgency" :blog="this.$route.query.blog"/>
            </div>
          </div>
        </div>
      </div>
      <SuccessForm bu="LineAgency"/>
    <div class="bg-img d-none d-md-block">
      <div class="pb-lg-0 pb-5 bg-color">
        <div class="container">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <table class="align-middle banner-main" style="width: 100%">
                <td class="banner-height">
                  <img class="mb-3" src="../../../assets/SolutionsLine/log-edit.svg" alt="Logo-White1.svg" />
                  <h1 class="font-wght" style="font-size: 52px; color: #FFFFFF">
                    บริการรับทำ LINE Official Account<br />
                    ครบวงจร
                  </h1>
                  <p class="text-s-24 mt-3" style="color: #FFFFFF">
                    LINE Agency ผู้เชี่ยวชาญอันดับ 1 ได้รับความไว้วางใจจากเจ้าของธุรกิจกว่า 8,000 บัญชี<br />
                    ให้เราช่วยดูแลตลอดอายุการใช้งาน เพิ่มการเข้าถึงลูกค้าด้วยบริการต่างๆจาก LINE
                  </p>
                  <br />
                  <a ref="autoClickButton" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                    class="btn-banner text-s-24 px-4 py-2"
                    data-tag="lineagency-banner-consultation-button">สนใจรับคำปรึกษา</a>
                  <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="btn-banner-w text-s-24 px-4 py-2 ms-3"
                    data-tag="linecorp-banner-chat-admin-button"><span>แชทกับแอดมิน</span></a>
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
              <img height="28" class="mb-3" src="../../../assets/SolutionsLine/log-edit.svg" alt="Logo-White1.svg" />
              <h1 class="font-bd text-s-44 color-FFFFFF">
                บริการรับทำ LINE Official Account ครบวงจร
              </h1>
              <p class="text-s-20 mt-3" style="color: #FFFFFF">
                LINE Agency ผู้เชี่ยวชาญอันดับ 1 ได้รับความไว้วางใจจากเจ้าของ <br />
                ธุรกิจกว่า 8,000 บัญชี ให้เราช่วยดูแลตลอดอายุการใช้งาน <br />
                เพิ่มการเข้าถึงลูกค้าด้วยบริการต่างๆจาก LINE
              </p>
              <br />
              <a href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" class="btn-banner px-3 py-1"
                data-tag="lineagency-banner-consultation-button"><span class="text-s-24">สนใจรับคำปรึกษา</span></a>
              <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="btn-banner-w px-3 py-1 ms-2"
                data-tag="linecorp-banner-chat-admin-button"><span class="text-s-24">แชทกับแอดมิน</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-1">
      <Section00 />
      <section class="bg-img-2">
        <div class="bg-color-2">
          <div class="container p-lg-0">
            <div class="row d-none d-md-block">
              <div class="col-12 text-center color-FFFFFF d-flex" style="height: 400px">
                <h2 class="text-s-60 text-w-700 m-auto">
                  ขยายธุรกิจไปกับ LINE Agency
                </h2>
              </div>
            </div>
            <div class="row d-block d-md-none">
              <div class="col-12 text-center color-FFFFFF d-flex" style="height: 312px">
                <h2 class="text-s-36 text-w-700 m-auto">
                  ขยายธุรกิจไปกับ LINE Agency
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-md-5 pb-0">
        <div class="container pb-md-5 pb-0 p-lg-0 p-4">
          <div class="row pt-md-5 pt-3">
            <div class="col-12 mt-md-5 mt-0 text-center fade-in-up" v-intersect>
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
                บริการของ LINE Agency
              </h2>
              <h2 class="text-s-44 text-w-700 color-1F2937 mt-3 d-block d-md-none">
                บริการของ LINE Agency
              </h2>
            </div>
            <div class="row mt-md-5 mt-2 mb-3 text-center fade-in-up" v-intersect>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-oa')" class="ggg"
                  data-tag="lineagency-service-line-oa-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1 card-1-body">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-07 LINE OA.png" alt="โลโก้ Line Official Account"/>
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      LINE OA
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-oa-corporate')"
                  data-tag="lineagency-service-line-oa-corporate-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-08 Corporate.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-2 mb-0 color-1F2937 font-md">
                      LINE OA<br />Corporate
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-smart-channel')"
                  data-tag="lineagency-service-smart-channel-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-09 Smart Channel.png" />
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-2 mb-0 color-1F2937 font-md">
                      LINE Smart<br />Channel
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-today')"
                  data-tag="lineagency-service-line-today-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-10 LINE Today.png" alt="โลโก้ Line Today"/>
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-3 mb-0 color-1F2937 font-md">
                      LINE Today
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-sponsored-sticker')"
                  data-tag="lineagency-service-sponsored-sticker-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-11 Sponsored Sticker.png" alt="โลโก้ Line Sponsored Sticker"/>
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-2 mb-0 color-1F2937 font-md">
                      <span class="d-none d-md-block">LINE Sponsored<br />Sticker</span>
                      <span class="d-block d-md-none">Sponsored<br />Sticker</span>
                    </p>
                  </div>
                </nuxt-link>
              </div>
              <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 p-2">
                <nuxt-link :to="localePath('/solutions/lineagency/line-my-customer')"
                  data-tag="lineagency-service-my-customer-crm-button">
                  <div class="d-flex item-center mt-md-0 mt-2 card-1">
                    <a class="btn-green d-none">ไปที่บริการ <img class="ms-2"
                        src="../../../assets/SolutionsLine/Vector (Stroke).svg" alt="Vector (Stroke).svg"></a>
                    <div class="d-flex img-icon">
                      <img class="m-auto img-fluid img-cover"
                        src="./../../../assets/SolutionsLine/00/ICON_LINE-12 Customer CRM.png" alt="โลโก้ Line My Customer CRM"/>
                    </div>
                    <p class="text-card-service text-w-300 mt-md-3 mt-2 mb-0 color-1F2937 font-md">
                      My Customer<br />CRM
                    </p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <select @change="handleChange(activeSection)" v-model="activeSection"
              class="form-select mt-3 mb-3 text-s-24 font-md" aria-label="Default select example">
              <option v-for="(button, index) in buttons" :key="index" :value="button.name">{{ button.label }}</option>
            </select>
          </div>
          <div class="mt-1">
            <a href="#" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
              class="btn-Line text-s-24 font-df p-1 ps-3 pe-3" data-tag="lineagency-stickybar-consultation-button"><img
                class="me-2" src="../../../assets/SolutionsLine/chat-bubble-left-right-w.png"
                alt="chat-bubble-left-right.png" />ปรึกษาฟรี
            </a>
          </div>
        </div>

      </nav>
    </section>
    <section id="LINEOA" class="section-active margin-section">
      <div class="container pb-5 p-lg-0 p-4">
        <div class="row margin-img-res">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/01/01.png" alt="01.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/01/ICON_LINE-07 LINE OA.png" alt="โลโก้ Line Official Account"
              class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              LINE OA
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              LINE Official Account
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              LINE Official Account สร้างความสัมพันธ์ที่ดีกับลูกค้าผ่านการสื่อสาร และทำการตลาดอย่างมีประสิทธิภาพ
              บริการแพ็กเกจสำหรับ Broadcast ข้อความบน LINE OA แจ้งข่าวสารถึงกลุ่มลูกค้าของคุณ
            </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">ทำไมต้องใช้ LINE Official Account (LINE OA)</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/01/fluent_content-view-20-regular.svg"
                          alt="fluent_content-view-20-regular.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">สร้างคอนเทนต์ในรูปแบบของธุรกิจคุณได้</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">ครีเอทคอนเทนต์ส่งให้ผู้ติดตามได้ง่าย โดยจะแจ้งเตือน
                          บน LINE เหมือนได้รับข้อความจากเพื่อน</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/01/shake-hand.png" alt="shake-hand.png">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มยอดขายด้วยการรักษาความสัมพันธ์ที่ดี</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">กระตุ้นยอดขายผ่าน Broadcast โดยลูกค้าสามารถ
                          ตอบกลับผ่านแชทหรือคลิกไปยังเว็บไซต์เพื่อสั่งซื้อก็ได้</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/01/hugeicons_target-02.svg"
                          alt="hugeicons_target-02.png">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เข้าถึงกลุ่มลูกค้า 100%</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">การ Broadcast หนึ่งครั้งสามารถเข้าถึง Target Reach
                          ได้ 100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <a href="https://lineagency.sellsuki.com/" target="_blank" rel="noopener" class="button-color"
                  data-tag="lineagency-lineoa-apply-package-button"><img
                    src="../../../assets/SolutionsLine/01/cursor-arrow-rays.svg" alt="cursor-arrow-rays.svg"><span
                    class="ms-2">สมัครแพ็กเกจ</span></a>
                <nuxt-link :to="localePath('/solutions/lineagency/line-oa')" class="button-transparent ms-3"
                  data-tag="lineagency-lineoa-details-button"><span class="me-2">รายละเอียดเพิ่มเติม</span><img
                    src="../../../assets/SolutionsLine/01/arrow-up-right.svg" alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-last order-first">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/01/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -55px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="LINEOACorporate" class="section-active section-right pb-5" style="background-color: #F0FDF4;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row" style="margin-top: 100px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/02/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -80px" />
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/02/02.png" alt="02.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/02/ICON_LINE-08 Corporate.png" alt="ICON_LINE-08 Corporate.png"
              class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              LINE OA Corporate
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              บัญชีพรีเมียม
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              บริการแพ็กเกจ LINE OA บัญชีพรีเมียม (บัญชีโล่สีเขียว) สำหรับธุรกิจหรือองค์กรขนาดใหญ่ ยอดการใช้งานหลักล้าน
              ประหยัดกว่าการซื้อใช้งานเองปกติ</p>
            <p class="text-s-28 color-1F2937 text-w-700 mb-0 mt-4">ทำไมต้องอัปเกรดเป็น บัญชีพรีเมียม (PREMIUM)</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/02/arrow-trending-down.svg"
                          alt="arrow-trending-down.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มฐานลูกค้าผู้ติดตามเป็นหลักล้าน</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เพิ่มโอกาสให้ลูกค้าค้นหาเราเจอได้ง่ายขึ้น
                          ทั้งจากการค้นหาเพื่อน และการ Search Engine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/02/chat-bubble-left-ellipsis.svg"
                          alt="chat-bubble-left-ellipsis.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">ราคาข้อความต่อข้อความถูกลง</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">กรณีใช้จำนวนข้อความหลักล้านต่อเดือน หากสมัคร
                          แพ็คเกจบัญชีพรีเมียมจะช่วยให้ราคาต่อข้อความถูกลง</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/02/star.svg" alt="star.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">สร้างความน่าเชื่อถือ</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">สร้างความมั่นใจ และความน่าเชื่อถือว่าเป็นบัญชี
                          ธุรกิจจริง</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <nuxt-link :to="localePath('/solutions/lineagency/line-oa-corporate')" class="button-transparent"
                  data-tag="lineagency-lineoa-corporate-details-button"><span
                    class="me-2">รายละเอียดเพิ่มเติม</span><img style="margin-top:-6px"
                    src="../../../assets/SolutionsLine/01/arrow-up-right.svg" alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="LINESmartChannel" class="section-active margin-section">
      <div class="container p-lg-0 p-4">
        <div class="row margin-img-res">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/03/03.png" alt="03.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/03/ICON_LINE-09 Smart Channel.png"
              alt="ICON_LINE-09 Smart Channel.png" class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              LINE Smart Channel
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              พื้นที่โฆษณาบนช่อง Chat
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              LINE Smart Channel โฆษณาบนไลน์ เข้าถึงผู้ใช้งาน LINE กว่า 56 ล้านคน บริการทำโฆษณาผ่าน LINE สามารถ
              เข้าถึงกลุ่มเป้าหมายได้อย่างแม่นยำ และหากลุ่มลูกค้าเป้าหมายใหม่ได้ถูกกลุ่ม
            </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">ทำไมต้องใช้ LINE Smart Channel Ads</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/03/arrow-trending-down.svg"
                          alt="arrow-trending-down.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มฐานลูกค้าผู้ติดตามให้เพิ่มมากขึ้น</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เพราะการโฆษณาแบบ Smart Channel สามารถเข้าถึง
                          ผู้ใช้งานได้สูงสุด 56 ล้านคนตลอดทั้งวัน</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/03/cursor-arrow-rays.svg" alt="cursor-arrow-rays.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">สร้างการมีส่วนร่วมได้มากขึ้น</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">สามารถสร้างการมีส่วนร่วมกับลูกค้าหรือเพิ่มการเข้า
                          ถึงเว็บไซต์ได้มากขึ้น จากการ Lead ให้คลิกบนโฆษณา</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/03/signal.svg" alt="signal.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">สร้างการรับรู้ของแบรนด์ได้ในวงกว้าง</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">
                          สามารถสร้างการรับรู้ให้ผู้ใช้งานรู้จักและจดจำแบรนด์ได้</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-s-36 color-1F2937 text-w-700 mb-4 mt-4">เริ่มต้น 50,000 บาท</p>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <nuxt-link :to="localePath('/solutions/lineagency/line-smart-channel')" class="button-transparent"
                  data-tag="lineagency-smart-channel-details-button"><span class="me-2">รายละเอียดเพิ่มเติม</span><img
                    style="margin-top:-6px" src="../../../assets/SolutionsLine/01/arrow-up-right.svg"
                    alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-last order-first">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/03/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -110px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="LINEToday" class="section-active section-right pb-5" style="background-color: #F0FDF4;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row" style="margin-top: 100px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/04/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -80px" />
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/04/04.png" alt="04.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/04/ICON_LINE-10 LINE Today.png" alt="โลโก้ Line Today"
              class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              LINE Today
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              การลงโฆษณา LINE TODAY
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              บริการโฆษณาบนหน้าต่างของ ไลน์ทูเดย์ (LINE Today) เพิ่มความน่าเชื่อถือให้แบรนด์ธุรกิจ
            </p>
            <p class="text-s-28 color-1F2937 text-w-700 mb-0 mt-4">ทำไมต้องใช้ LINE TODAY Ads</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/04/cursor-arrow-rays.svg" alt="cursor-arrow-rays.sv4">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">สร้างการรับรู้และการมีส่วนร่วมได้มาก</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เข้าถึงผู้ใช้งานได้สูงถึง 40 ล้านคน โดย 60% ของยอด
                          เข้าชม เป็นการอ่านคอนเทนต์ตั้งแต่เริ่มจนจบ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/04/arrow-trending-up.svg" alt="arrow-trending-up.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มยอดขายได้อย่างทรงพลัง</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">มี CTR% เฉลี่ย 200% เมื่อเทียบกับสื่อออนไลน์อื่นๆ
                          และ 86% เป็นผู้ที่มีความตั้งใจซื้อ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-s-36 color-1F2937 text-w-700 mb-4 mt-4">เริ่มต้น 50,000 บาท</p>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <nuxt-link :to="localePath('/solutions/lineagency/line-today')" class="button-transparent"
                  data-tag="lineagency-line-today-details-button"><span class="me-2">รายละเอียดเพิ่มเติม</span><img
                    style="margin-top:-6px" src="../../../assets/SolutionsLine/01/arrow-up-right.svg"
                    alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="LINESponsoredSticker" class="section-active margin-section">
      <div class="container p-lg-0 p-4">
        <div class="row margin-img-res">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pe-0 ps-0 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/05/05.png" alt="05.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/05/ICON_LINE-11 Sponsored Sticker.png"
              alt="โลโก้ Line Sponsored Sticker" class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              LINE Sponsored Sticker
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              สติกเกอร์ไลน์
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-5">
              เพิ่มจำนวนผู้ติดตามบน LINE OA สูงถึง 2-4 ล้านคนต่อสติกเกอร์ 1 ชุดและสร้างการรับรู้ให้แก่แบรนด์ได้อย่างมาก
            </p>
            <p class="text-s-24 text-w-700 color-1F2937 mb-0 mt-5">ทำไมต้องใช้บริการ Sponsored Sticker</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/05/user-plus.svg" alt="user-plus.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มเพื่อนหรือผู้ติดตามได้เร็ว</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เพิ่มเพื่อนใหม่ได้เร็วกว่า 60 เท่า
                          เมื่อเทียบกับช่องทาง <br />แบบออร์แกนิคหรือช่องทางแบบออฟไลน์</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/05/user-group.svg" alt="user-group.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">เพิ่มจำนวนผู้ติดตามจำนวนมาก</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">สามารถเพิ่มจำนวนผู้ติดตาม LINE Official Account
                          ได้ถึง 2-4 ล้านคน ต่อสติกเกอร์ 1 ชุด</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-01">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/05/hand-coins.png" alt="hand-coins.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">ประหยัดต้นทุนในการเพิ่มผู้ติดตาม</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">การเพิ่มจำนวนผู้ติดตาม เกิดต้นทุนเพียง 2 - 4 บาทต่อ
                          1 คนหรือต่อ 1 ครั้งการดาวน์โหลดเท่านั้น</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <nuxt-link :to="localePath('/solutions/lineagency/line-sponsored-sticker')" class="button-transparent"
                  data-tag="lineagency-sponsored-sticker-details-button"><span
                    class="me-2">รายละเอียดเพิ่มเติม</span><img style="margin-top:-6px"
                    src="../../../assets/SolutionsLine/01/arrow-up-right.svg" alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-last order-first">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/05/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -110px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="MyCustomerCRM" class="section-active section-right pb-5" style="background-color: #F0FDF4;">
      <div class="container pb-md-5 pb-0 p-lg-0 p-4">
        <div class="row pt-4">
        </div>
        <div class="row" style="margin-top: 100px">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="position-sticky" style="top: 100px;">
              <img class="img-fluid mb-4" src="../../../assets/SolutionsLine/06/image-2-c.png" alt="image-2-c.png"
                style="margin-top: -80px" />
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 fade-in-up" v-intersect>
            <img src="../../../assets/SolutionsLine/06/06.png" alt="06.png" class="img-number" />
            <img src="../../../assets/SolutionsLine/06/ICON_LINE-12 Customer CRM.png"
              alt="โลโก้ Line My Customer CRM" class="position-relative" />
            <p class="text-s-60 text-w-700 color-1F2937 mb-0 mt-2" style="line-height: 72px">
              My Customer CRM
            </p>
            <p class="text-s-36 text-w-700 color-22C55E mb-0">
              การจัดการข้อมูลลูกค้า
            </p>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">
              ระบบสมาชิก และสะสมแต้มบน LINE OA ช่วยเก็บข้อมูลลูกค้า
              ธุรกิจสามารถนำไปต่อยอดวิเคราะห์ลูกค้าวางแผนกลยุทธ์ต่อได้
            </p>
            <p class="text-s-28 color-1F2937 text-w-700 mb-0 mt-4">ทำไมต้องใช้ My Customer CRM</p>

            <div class="row">
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/06/fluent-mdl2_recruitment-management.svg"
                          alt="fluent-mdl2_recruitment-management.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">ระบบเดียวจัดการได้ทั้งฝั่งพนักงาน
                          และดูแลสมาชิก</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">ออกแบบมาให้ง่ายต่อการใช้งาน มอบสิทธิ์ให้พนักงาน
                          และลูกค้าจัดการเรื่องการให้พอยท์และของรางวัลเองได้</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/06/identification.svg" alt="identification.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">Dashboard ข้อมูลสมาชิก และการใช้งานพอยท์</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เข้าถึงข้อมูลทั้งหมดของระบบ ทำให้ง่ายต่อการนำข้อมูล
                          ไปพัฒนาและวางแผนการตลาดเพิ่มยอดขาย</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 pe-0">
                <div class="card card-02">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-12 col-md-1 col-2">
                        <img src="../../../assets/SolutionsLine/06/document-arrow-up.svg" alt="document-arrow-up.svg">
                      </div>
                      <div class="col-lg-12 col-10">
                        <p class="text-s-24 text-w-700 mt-lg-2 mt-0 mb-0">นำเข้า หรือโอนย้ายข้อมูลพอยท์ได้ง่าย</p>
                        <p class="text-s-24 text-w-300 font-df mb-0">เพิ่มพอยท์ให้สมาชิกจำนวนมากหรือโอนย้าย
                          ข้อมูลด้วยการนำเข้าข้อมูลได้ง่าย</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-md-start text-center">
                <nuxt-link :to="localePath('/solutions/lineagency/line-my-customer')" class="button-transparent"
                  data-tag="lineagency-my-customer-crm-details-button"><span class="me-2">รายละเอียดเพิ่มเติม</span><img
                    style="margin-top:-6px" src="../../../assets/SolutionsLine/01/arrow-up-right.svg"
                    alt="arrow-up-right.svg"></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-img-3">
      <div class="bg-color-2">
        <div class="container pb-5 p-lg-0 p-4">
          <div class="d-none d-lg-block">
            <div class="row" style="height: 720px">
              <div class="col-6 color-FFFFFF d-flex justify-content-center align-items-center">
                <div class="text-start fade-in-up" v-intersect>
                  <h2 class="text-s-52 text-w-700 mb-0">
                    Sellsuki ให้บริการ LINE Service มากว่า 8 ปี<br /> ได้รับความไว้วางใจ จากลูกค้าให้ดูแลกว่า
                  </h2>
                  <span class="text-s-158 font-bd">8,000+ </span><span class="text-s-52 font-bd"> ราย</span>
                </div>
              </div>
              <div class="col-6 d-flex justify-content-center align-items-center fade-in-up" v-intersect>
                <img class="img-fluid" src="../../../assets/SolutionsLine/Frame 427319582.png"
                  alt="Frame 427319582.png">
              </div>
            </div>
          </div>
          <div class="row d-block d-lg-none">
            <div class="col-12 color-FFFFFF d-flex justify-content-center align-items-center" style="height: 700px">
              <div class="text-center fade-in-up" v-intersect>
                <h2 class="text-s-36 text-w-700 mb-0">
                  Sellsuki ให้บริการ LINE Service<br /> มากว่า 8 ปี ได้รับความไว้วางใจ<br />จากลูกค้าให้ดูแลกว่า
                </h2>
                <span class="text-s-86 font-bd">8,000+ </span><span class="text-s-36 font-bd"> ราย</span>
                <img class="img-fluid mt-3" src="../../../assets/SolutionsLine/Frame 427319582.png"
                  alt="Frame 427319582.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BlogLine :responseData="responseData" />
    <section>
      <Customer />
    </section>
  </div>
</template>

<script>
import Preloader from '@/components/Preloader'
import FormDataUser from '@/components/Solutions/Lineagency/FormDataUser'
import Section00 from '@/components/Solutions/Lineagency/Section00'
import Customer from '@/components/Solutions/Lineagency/Customer'
import BlogLine from '@/components/Solutions/Lineagency/BlogLine'
import SuccessForm from '@/components/Solutions/SuccessForm'
export default {
  name: 'SolutionsWizemoves',
  layout: 'layoutV2',
  components: {
    Preloader,
    FormDataUser,
    Section00,
    Customer,
    BlogLine,
    SuccessForm
  },
  head() {
    const baseHead = this.$headUtil({
      lang: this.$i18n.locale === 'th-TH' ? 'th-TH' : 'en-TH',
      title: 'บริการรับทำ LINE Official Account ครบวงจร',
      route: process.env.MAIN_URL + this.$route.path,
      description:
        'LINE Agency ผู้เชี่ยวชาญอันดับ 1 ได้รับความไว้วางใจจากเจ้าของธุรกิจกว่า 8,000 บัญชี ให้เราช่วยดูแลตลอดอายุการใช้งาน เพิ่มการเข้าถึงลูกค้าด้วยบริการต่างๆจาก LINE',
    })

    return {
      ...baseHead,
      script: [
        {
          hid: 'line-tag',
          innerHTML: `(function(g,d,o){
            g._ltq=g._ltq||[];g._lt=g._lt||function(){g._ltq.push(arguments)};
            var h=location.protocol==='https:'?'https://d.line-scdn.net':'http://d.line-cdn.net';
            var s=d.createElement('script');s.async=1;
            s.src=o||h+'/n/line_tag/public/release/v1/lt.js';
            var t=d.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
          })(window, document);
          _lt('init', {
            customerType: 'lap',
            tagId: '57ac2111-e9e7-4ca5-95cf-3ed6e4b48590'
          });
          _lt('send', 'pv', ['57ac2111-e9e7-4ca5-95cf-3ed6e4b48590']);
          _lt('send', 'cv', { type: 'SellsukiLINEAgency' }, ['57ac2111-e9e7-4ca5-95cf-3ed6e4b48590']);
        `,
          type: 'text/javascript',
          charset: 'utf-8'
        },
        {
          hid: 'gtag-js',
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-847077456',
          async: true
        },
        {
          hid: 'gtag-init',
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-847077456');
        `,
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      noscript: [
        {
          hid: 'line-tag-noscript',
          innerHTML: `<img height="1" width="1" style="display:none"
            src="https://tr.line.me/tag.gif?c_t=lap&t_id=57ac2111-e9e7-4ca5-95cf-3ed6e4b48590&e=pv&noscript=1" />`
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'line-tag': ['innerHTML'],
        'line-tag-noscript': ['innerHTML'],
        'gtag-init': ['innerHTML']
      }
    }
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
      activeSection: "LINEOA",
      buttons: [
        { label: "LINE OA", id: "#LINEOA", name: "LINEOA" },
        { label: "LINE OA Corporate", id: "#LINEOACorporate", name: "LINEOACorporate" },
        { label: "LINE Smart Channel", id: "#LINESmartChannel", name: "LINESmartChannel" },
        { label: "LINE Today", id: "#LINEToday", name: "LINEToday" },
        { label: "Sponsored Sticker", id: "#LINESponsoredSticker", name: "LINESponsoredSticker" },
        { label: "My Customer CRM", id: "#MyCustomerCRM", name: "MyCustomerCRM" },
      ],
      activeButtonIndex: null,
      lastScrollY: 0,
      scrollDirection: "None"
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
            name: 'Line Agency',
            item: 'https://www.sellsuki.co.th/solutions/lineagency',
          }
        ],
      },
      {
        "@context": "https://schema.org/", 
        "@type": "Service", 
        "name": "LINE Agency",
        "image": "",
        "description": "บริการรับทำ LINE Official Account ครบวงจร LINE Agency ผู้เชี่ยวชาญอันดับ 1 ได้รับความไว้วางใจจากเจ้าของธุรกิจกว่า 8,000 บัญชี ให้เราช่วยดูแลตลอดอายุการใช้งาน เพิ่มการเข้าถึงลูกค้าด้วยบริการต่างๆจาก LINE",
        "brand": {
          "@type": "Brand",
          "name": "Sellsuki"
        },
        "sku": "LINE Agency",
        "offers": {
          "@type": "Offer",
          "url": "https://www.sellsuki.co.th/solutions/lineagency",
          "priceCurrency": "THB",
          "price": "0",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  },
  async asyncData({ $axios, store }) {
    store.commit('setTitle', 'LineAgency')
    return {}
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
    handleChange(i) {
      var text = "#" + i
      this.$router.push({ hash: text })
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


.button-transparent:hover {
  color: #22C55E !important;
}

a {
  color: #FFFFFF;
}

a:hover {
  color: #FFFFFF !important;
}

.bg {
  background: url('./../../../assets/image94.webp');
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
  background-repeat: no-repeat !important;
  background-size: 140%;
  background-position: bottom right -20px !important;
  background-image: url(../../../assets/SolutionsLine/banner.png);
}

.bg-img {
  background-position: 0px 0px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(../../../assets/SolutionsLine/banner.png);
}

.bg-img-2 {
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(../../../assets/SolutionsLine/img-bg-1.png);
}

.bg-img-3 {
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-image: url(../../../assets/SolutionsLine/img-bg-2.png);
}

.bg-color-2 {
  background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(0deg, rgba(20, 83, 45, 0.6), rgba(20, 83, 45, 0.6));

}


.bg-color {
  background: linear-gradient(90deg, rgba(65, 114, 235, 0.6) 0%, rgba(54, 239, 122, 0.4) 41.47%, rgba(54, 239, 122, 0) 82.94%),
    linear-gradient(90deg, #000000 36.98%, rgba(0, 0, 0, 0) 60.65%);
}

.bg-color-mobile {
  background: linear-gradient(180deg, rgba(65, 114, 235, 0.6) 0%, rgba(54, 239, 122, 0.4) 30.81%, rgba(54, 239, 122, 0) 65.59%), linear-gradient(179.81deg, #000000 44.95%, rgba(0, 0, 0, 0) 78.13%);

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
  margin-top: 100px !important;
}

.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(115.12deg, #22C55E 3.72%, #99CC66 94.36%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.banner-main {
  height: 550px;
  margin-top: 55px;
}

.btn-banner {
  height: 48px !important;
  color: #FFFFFF !important;
  background: linear-gradient(115.12deg, #22C55E 3.72%, #99CC66 94.36%);
  box-sizing: border-box !important;
  border-radius: 32px !important;
  font-size: 28px;
  font-family: 'Heavent-med';
}

.btn-banner-w {
  height: 48px !important;
  color: #22C55E !important;
  background: #FFFFFF;
  box-sizing: border-box !important;
  border-radius: 32px !important;
  font-size: 28px;
  font-family: 'Heavent-med';
}

.btn-banner-w:hover {
  color: #22C55E !important;
}

.bg-1 {
  background-size: cover;
}

.button-transparent {
  padding: 8px 18px;
}

.button-color {
  padding: 8px 18px;
}

/* -------------------------#Responsive------------------------ */

@media only screen and (max-width: 360px) {
  .padding-size-360 {
    padding: 6px !important;
  }

  .form-select {
    width: 124px !important;
  }

  .p-4 {
    padding: 10px !important;
  }

  .button-transparent {
    font-size: 20px !important;
  }

  .button-color {
    font-size: 20px !important;
  }
}

@media only screen and (max-width: 430px) {
  .bg-img-mobile {
    height: 650px !important;
  }

  .button-transparent {
    padding: 8px 18px !important;
  }

  .button-color {
    padding: 8px 18px !important;
  }

  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 18px;
    line-height: 18px;
    width: 85%;
    z-index: 999;
    padding: 4px 6px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG_1.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 18px;
    line-height: 18px;
    width: 85%;
    z-index: 999;
    padding: 4px 6px;
  }

  .margin-img-res {
    margin-top: 100px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG_1.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F0FDF4;
    height: 104px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 15px !important;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 24px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 18px;
    line-height: 18px;
    width: 85%;
    z-index: 999;
    padding: 4px 6px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG_1.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F0FDF4;
    height: 104px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 15px !important;
  }

  .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: 0;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 24px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 20px;
    line-height: 20px;
    width: 85%;
    z-index: 999;
    padding: 6px 12px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
    background-repeat: no-repeat;
    background-size: cover;
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
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F0FDF4;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 24px;
    line-height: 24px;
    width: 72%;
    z-index: 999;
    padding: 10px 20px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
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
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F0FDF4;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card-01 img {
    width: 50px;
  }

  .card-02 img {
    width: 50px;
  }

  .btn-green {
    background: #22C55E;
    border: 1px solid #22C55E;
    border-radius: 32px;
    font-family: 'Heavent-med';
    font-size: 24px;
    line-height: 24px;
    width: 72%;
    z-index: 999;
    padding: 10px 20px;
  }

  .bg-1 {
    background-image: url(../../../assets/SolutionsLine/BG.png);
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
    box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
    border-radius: 16px;
    border: 2px solid #F0FDF4;
    height: 226px;
    background-color: #FFFFFF;
  }

  .card-1 img {
    margin-top: 32px !important;
  }

  .img-number {
    position: absolute;
    margin-left: -34px;
    margin-top: -38px
  }

  .section-right .img-number {
    position: absolute;
    margin-left: -12px;
    margin-top: -38px
  }

  .img-logo-04 {
    height: 100%;
  }

  .bg-img {
    background-position: 0px -200px;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-image: url(../../../assets/SolutionsLine/banner.png);
  }
}

@media only screen and (min-width: 3000px) {
  .bg-img {
    background-position: 0px -675px !important;
  }
}

.card {
  background-color: transparent;
}

.btn-green img {
  margin-top: 0 !important;
}

.card-1 {
  position: relative;
}

.card-1:hover {
  background: #86EFAC59;
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

.card-1:hover .img-icon img {
  box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
  filter: blur(10px);
}

.card-1:hover p {
  box-shadow: 0px 1px 3px 0px #64AF7712, 0px 5px 5px 0px #64AF770F, 0px 12px 7px 0px #64AF770A, 0px 20px 8px 0px #64AF7703, 0px 32px 9px 0px #64AF7700;
  filter: blur(10px);
}

.card-01 .card-body {
  padding: 20px 0px;
}

.card-01 img {
  background-color: #F0FDF4;
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
  padding: 20px 0px;
}

.card-02 img {
  background-color: #DCFCE7;
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

.nav-active {
  border-bottom: 5px solid #22C55E;
  color: #22C55E !important;
}

.nav-link {
  color: #1F2937 !important;
}

.nav-active .nav-link {
  color: #22C55E !important;
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
  background-color: #F0FDF4;
}
</style>