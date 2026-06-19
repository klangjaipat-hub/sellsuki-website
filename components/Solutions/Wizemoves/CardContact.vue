<template>
  <div class="container">
    <div class="row fade-in-up" v-intersect>
      <div class="col-12 p-md-0 p-2">
        <div class="card d-none d-md-block">
          <div class="d-block d-xl-none">
            <img src="~/assets/SolutionsWizemoves/customer/30 3-t.png" alt="30 3.png"
              style="position: absolute; bottom: 0; right: 0" />
            <img src="~/assets/SolutionsWizemoves/customer/30 2-t.png" alt="30 2.png"
              style="position: absolute; bottom: 0; left: 0" />
            <img src="~/assets/SolutionsWizemoves/customer/30 4.png" alt="30 4.png" style="
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
              " />
          </div>
          <div class="d-none d-xl-block">
            <img src="~/assets/SolutionsWizemoves/customer/30 3.png" alt="30 3.png"
              style="position: absolute; bottom: 0; right: 0" />
            <img src="~/assets/SolutionsWizemoves/customer/30 2.png" alt="30 2.png"
              style="position: absolute; bottom: 0; left: 0" />
            <img src="~/assets/SolutionsWizemoves/customer/30 4.png" alt="30 4.png" style="
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, 0);
              " />
          </div>
          <div class="card-body text-center">
            <p v-if="page === 'Martech'" class="text-s-60 text-w-700 color-1F2937 mb-md-5 mb-4">
              พร้อมเปลี่ยนเว็บไซต์ให้เป็นเครื่องมือการตลาดเต็มรูปแบบหรือยัง?<br />
              ให้ Wizemoves MarTech ช่วยพาธุรกิจของคุณเติบโตไกลไปอีกขั้น
            </p>
            <p v-else-if="page === 'Kaikong'" class="text-s-60 text-w-700 color-1F2937 mb-md-5 mb-4">
              เปลี่ยนเพจเงียบให้มียอดขาย<br />
              ด้วยคอนเทนต์ที่สร้างภาพจำอย่างยั่งยืน
            </p>
            <p v-else class="text-s-60 text-w-700 color-1F2937 mb-md-5 mb-4">
              Wizemoves เคียงข้างทุกก้าวที่สำคัญ<br />
              เติบโตพร้อมธุรกิจของคุณไปอีกขั้น
            </p>
            <div class="d-flex">
              <a @click="eventTelGTM()" href="tel:0900967526" class="btn-violet p-1 ps-3 pe-3 ms-auto me-3"
                style="padding-top: 2px !important;"><img class="me-2"
                  src="~/assets/SolutionsWizemoves/customer/phone.png" alt="phone.png" />090 096 7526</a>
              <a @click="eventLineGTM()" href="https://lin.ee/5ljYXPo" target="_blank" rel="noopener"
                class="btn-violet pb-1 ps-4 pe-4 me-3" style="padding-top: 2px !important;"><img class="me-2"
                  src="~/assets/SolutionsWizemoves/customer/chat-bubble-oval-left-ellipsis.png"
                  alt="phone.png" />แชทผ่านไลน์</a>
              <a @click="eventContactGTM()" v-if="page === 'Wizemoves'" href="#" data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal" class="btn-violet p-1 ps-3 pe-3 me-auto ms-0"
                style="padding-top: 2px !important;"><img class="me-1"
                  src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                ขอใบเสนอราคา</a>
              <nuxt-link v-if="page === 'BusinessConsulting'" to="/solutions/wizemoves/business-consulting/af"
                class="btn-violet p-1 ps-3 pe-3 me-auto ms-0" style="padding-top: 2px !important;"><img class="me-1"
                  src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                ขอใบเสนอราคา</nuxt-link>
              <nuxt-link v-if="page === 'Edis'" to="/solutions/wizemoves/edis/af"
                class="btn-violet p-1 ps-3 pe-3 me-auto ms-0" style="padding-top: 2px !important;"><img class="me-1"
                  src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                ขอใบเสนอราคา</nuxt-link>
              <nuxt-link v-if="page === 'Martech'" to="/solutions/wizemoves/form/martech"
                class="btn-violet p-1 ps-3 pe-3 me-auto ms-0" style="padding-top: 2px !important;"><img class="me-1"
                  src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                ขอใบเสนอราคา</nuxt-link>
              <nuxt-link v-if="page === 'Kaikong'" to="/solutions/wizemoves/business-consulting/af"
                class="btn-violet p-1 ps-3 pe-3 me-auto ms-0" style="padding-top: 2px !important;"><img class="me-1"
                  src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                ขอใบเสนอราคา</nuxt-link>
            </div>
          </div>
        </div>
        <div class="card d-block d-md-none">
          <div class="card-body text-center">
            <p v-if="page === 'Martech'" class="text-s-60 text-w-700 color-1F2937 mb-5">
              พร้อมเปลี่ยนเว็บไซต์ให้เป็นเครื่องมือการตลาดเต็มรูปแบบหรือยัง?
              ให้ Wizemoves MarTech ช่วยพาธุรกิจของคุณเติบโตไกลไปอีกขั้น
            </p>
            <p v-else-if="page === 'Kaikong'" class="text-s-60 text-w-700 color-1F2937 mb-5">
              เปลี่ยนเพจเงียบให้มียอดขาย<br />
              ด้วยคอนเทนต์ที่สร้างภาพจำ<br />อย่างยั่งยืน
            </p>
            <p v-else class="text-s-60 text-w-700 color-1F2937 mb-5">
              Wizemoves <br />เคียงข้างทุกก้าวที่สำคัญ<br />
              เติบโตพร้อมธุรกิจ<br />ของคุณไปอีกขั้น
            </p>
            <div class="row justify-content-center">
              <div class="col-12 col-md-4 d-flex flex-column align-items-center gap-3">
                <a @click="eventTelGTM()" href="tel:0900967526"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"
                  style="max-width: 200px;">
                  <img src="~/assets/SolutionsWizemoves/customer/phone.png" alt="phone.png"
                    class="position-absolute start-0 ms-3" style="height: 20px;" />
                  <span class="ms-3">090 096 7526</span>
                </a>

                <a @click="eventLineGTM()" href="https://lin.ee/5ljYXPo" target="_blank" rel="noopener"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"
                  style="max-width: 200px;">
                  <img src="~/assets/SolutionsWizemoves/customer/chat-bubble-oval-left-ellipsis.png" alt="chat.png"
                    class="position-absolute start-0 ms-3" style="height: 20px;" />
                  <span class="ms-3">แชทผ่านไลน์</span>
                </a>

                <a @click="eventContactGTM()" v-if="page === 'Wizemoves'" href="#" data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"
                  style="max-width: 200px;">
                  <img src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png"
                    class="position-absolute start-0 ms-3" style="height: 20px;" />
                  <span class="ms-3">ขอใบเสนอราคา</span>
                </a>
                <nuxt-link v-if="page === 'BusinessConsulting'" to="/solutions/wizemoves/business-consulting/af"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"><img
                    class="position-absolute start-0 ms-3" style="height: 20px;"
                    src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                  <span class="ms-3">ขอใบเสนอราคา</span></nuxt-link>
                <nuxt-link v-if="page === 'Edis'" to="/solutions/wizemoves/edis/af"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"><img
                    class="position-absolute start-0 ms-3" style="height: 20px;"
                    src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                  <span class="ms-3">ขอใบเสนอราคา</span></nuxt-link>
                <nuxt-link v-if="page === 'Martech'" :to="{ path: '/solutions/wizemoves/form/martech' }"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"><img
                    class="position-absolute start-0 ms-3" style="height: 20px;"
                    src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                  <span class="ms-3">ขอใบเสนอราคา</span></nuxt-link>
                <nuxt-link v-if="page === 'Kaikong'" to="/solutions/wizemoves/business-consulting/af"
                  class="btn-violet position-relative d-flex align-items-center justify-content-center px-4 py-2 w-100"><img
                    class="position-absolute start-0 ms-3" style="height: 20px;"
                    src="~/assets/SolutionsWizemoves/customer/newspaper.png" alt="newspaper.png" />
                  <span class="ms-3">ขอใบเสนอราคา</span></nuxt-link>
              </div>
            </div>
          </div>
          <img src="~/assets/SolutionsWizemoves/customer/30 3.png" alt="30 3.png"
            style="position: absolute; bottom: 0; right: 0; height: 159px" />
          <img src="~/assets/SolutionsWizemoves/customer/30 2.png" alt="30 2.png"
            style="position: absolute; bottom: 0; left: 0; height: 159px" />
          <img src="~/assets/SolutionsWizemoves/customer/30 4.png" alt="30 4.png" style="
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translate(-50%, 0);
              height: 35px;
            " />
        </div>
      </div>
    </div>
    <div class="row d-none d-xl-block" style="margin-top: 160px">
      <div class="col-12 text-center color-1F2937">
        <h2 class="text-s-60 text-w-700">บริการอื่นๆ ที่คุณอาจสนใจ</h2>
      </div>
    </div>
    <div class="row d-block d-xl-none" style="margin-top: 100px">
      <div class="col-12 text-center color-1F2937">
        <h2 class="text-s-44 text-w-700">บริการอื่นๆ ที่คุณอาจสนใจ</h2>
      </div>
    </div>
    <div v-if="page === 'Wizemoves' || page === 'BusinessConsulting' || page === 'Edis' || page === 'Martech' || page === 'BusinessConsultingX'" >
      <div class="d-none d-xl-block">
        <div class="row" style="padding-top: 80px; padding-bottom: 80px">
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1)" />
                <p class="mb-2 text-s-28 font-md">Consulting</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ผู้ช่วยวางกลยุทธ์การตลาด เพิ่มยอดขาย ครบทุกด้าน
                  บริการให้คำปรึกษาและทำการตลาดแบบครบวงจร เป็นผู้ช่วยธุรกิจ
                  พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (2).png" />
                <p class="mb-2 text-s-28 font-md">Advertising</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง
                  Facebook Ads, Google Ads และ Youtube Ads รวมถึงยิง Ads ใน
                  TikTok, LINE, X และ Instagram ให้ความแม่นยำสูง
                  เข้าถึงกลุ่มเป้าหมายได้ตรงจุด
                  กระตุ้นความต้องการต่อสินค้าและบริการของคุณ
                  ให้กลายมาเป็นฐานลูกค้าถาวร
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (3).png" />
                <p class="mb-2 text-s-28 font-md">Influencer Marketing</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  บริการหาอินฟลูเอนเซอร์ ตอบโจทย์กลุ่ม เป้าหมาย
                  คอยติดตามและวัดผลผ่านเครื่องมือ Social Listening และ Marketing
                  Tool Visualize Data อย่างมีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (4).png" />
                <p class="mb-2 text-s-28 font-md">Martech</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  พัฒนาเว็บไซต์ และ Tech เชื่อมต่อ ที่ทันสมัย พร้อมรองรับ Line
                  Messaging API, CRM และ CDP
                  เพื่อเพิ่มความน่าเชื่อถือและโอกาสในการขาย
                  เราช่วยวิเคราะห์ข้อมูลเชิงลึก ให้คุณเข้าใจพฤติกรรมลูกค้า
                  นำไปสู่การ วางแผนการตลาดที่มีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves/martech')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last d-block d-xl-none p-4" style="padding-top: 50px; padding-bottom: 50px">
        <ssr-carousel :slides-per-page="slidesPerPage" :breakpoints="{
          '768': {
            slidesPerPage: 2
          },
          '320': {
            slidesPerPage: 1
          }
        }" show-dots paginate-by-slide loop :autoplay-delay="5">
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1).png" />
                <p class="mb-2 text-s-28 font-md">Consulting</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ผู้ช่วยวางกลยุทธ์การตลาด เพิ่มยอดขาย ครบทุกด้าน
                  บริการให้คำปรึกษาและทำการตลาดแบบครบวงจร เป็นผู้ช่วยธุรกิจ
                  พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (2).png" />
                <p class="mb-2 text-s-28 font-md">Advertising</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง
                  Facebook Ads, Google Ads และ Youtube Ads รวมถึงยิง Ads ใน
                  TikTok, LINE, X และ Instagram ให้ความแม่นยำสูง
                  เข้าถึงกลุ่มเป้าหมายได้ตรงจุด
                  กระตุ้นความต้องการต่อสินค้าและบริการของคุณ
                  ให้กลายมาเป็นฐานลูกค้าถาวร
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (3).png" />
                <p class="mb-2 text-s-28 font-md">Influencer Marketing</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  บริการหาอินฟลูเอนเซอร์ ตอบโจทย์กลุ่ม เป้าหมาย
                  คอยติดตามและวัดผลผ่านเครื่องมือ Social Listening และ Marketing
                  Tool Visualize Data อย่างมีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (4).png" />
                <p class="mb-2 text-s-28 font-md">Martech</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  พัฒนาเว็บไซต์ และ Tech เชื่อมต่อ ที่ทันสมัย พร้อมรองรับ Line
                  Messaging API, CRM และ CDP
                  เพื่อเพิ่มความน่าเชื่อถือและโอกาสในการขาย
                  เราช่วยวิเคราะห์ข้อมูลเชิงลึก ให้คุณเข้าใจพฤติกรรมลูกค้า
                  นำไปสู่การ วางแผนการตลาดที่มีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves/martech')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <template #dot="{ disabled }">
            <div v-if="disabled == false" class="dot-carousel"></div>
            <div v-if="disabled == true" class="dot-carousel-active"></div>
          </template>
        </ssr-carousel>
      </div>
    </div>
    <div v-else>
      <div class="d-none d-lg-block">
        <div class="row" style="padding-top: 80px; padding-bottom: 80px">
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1)" />
                  <div class="ms-3">
                    <p class="mb-0 text-s-28 font-md">Consulting</p>
                    <p class="mb-0 text-s-24 font-df">by Wizemoves</p>
                  </div>
                </div>
                <p class="mt-3 mb-2 text-s-24 text-limit-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-4 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (1)" />
                  <div class="ms-3">
                    <p class="mb-0 text-s-28 font-md">Warehouse</p>
                    <p class="mb-0 text-s-24 font-df">by Akita</p>
                  </div>
                </div>
                <p class="mt-3 mb-2 text-s-24 text-limit-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-4 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (1)" />
                  <div class="ms-3">
                    <p class="mb-0 text-s-28 font-md">OMS</p>
                    <p class="mb-0 text-s-24 font-df">by Patona</p>
                  </div>
                </div>
                <p class="mt-3 mb-2 text-s-24 text-limit-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-4 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-3 col-3 mt-xxl-0 mt-4 last color-1F2937">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (1)" />
                  <div class="ms-3">
                    <p class="mb-0 text-s-28 font-md">CRM</p>
                    <p class="mb-0 text-s-24 font-df">by Oc2plus</p>
                  </div>
                </div>
                <p class="mt-3 mb-2 text-s-24 text-limit-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-4 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last d-block d-lg-none p-4" style="padding-top: 50px; padding-bottom: 50px">
        <ssr-carousel :slides-per-page="slidesPerPage" :breakpoints="{
          '768': {
            slidesPerPage: 2
          },
          '320': {
            slidesPerPage: 1
          }
        }" show-dots paginate-by-slide loop :autoplay-delay="5">
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (1).png" alt="Icon (1).png" />
                <p class="mb-2 text-s-28 font-md">Consulting</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ผู้ช่วยวางกลยุทธ์การตลาด เพิ่มยอดขาย ครบทุกด้าน
                  บริการให้คำปรึกษาและทำการตลาดแบบครบวงจร เป็นผู้ช่วยธุรกิจ
                  พร้อมผลักดันธุรกิจสู่ความสำเร็จที่ยั่งยืน
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (2).png" alt="Icon (2).png" />
                <p class="mb-2 text-s-28 font-md">Advertising</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่ รับยิง
                  Facebook Ads, Google Ads และ Youtube Ads รวมถึงยิง Ads ใน
                  TikTok, LINE, X และ Instagram ให้ความแม่นยำสูง
                  เข้าถึงกลุ่มเป้าหมายได้ตรงจุด
                  กระตุ้นความต้องการต่อสินค้าและบริการของคุณ
                  ให้กลายมาเป็นฐานลูกค้าถาวร
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (3).png" alt="Icon (3).png" />
                <p class="mb-2 text-s-28 font-md">Influencer Marketing</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  บริการหาอินฟลูเอนเซอร์ ตอบโจทย์กลุ่ม เป้าหมาย
                  คอยติดตามและวัดผลผ่านเครื่องมือ Social Listening และ Marketing
                  Tool Visualize Data อย่างมีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="slide">
            <div class="card">
              <div class="card-body">
                <img class="mb-2" src="../../../assets/SolutionsLine/customer/Icon (4).png" alt="Icon (4).png" />
                <p class="mb-2 text-s-28 font-md">Martech</p>
                <p class="mb-2 text-s-24 text-limit-3">
                  พัฒนาเว็บไซต์ และ Tech เชื่อมต่อ ที่ทันสมัย พร้อมรองรับ Line
                  Messaging API, CRM และ CDP
                  เพื่อเพิ่มความน่าเชื่อถือและโอกาสในการขาย
                  เราช่วยวิเคราะห์ข้อมูลเชิงลึก ให้คุณเข้าใจพฤติกรรมลูกค้า
                  นำไปสู่การ วางแผนการตลาดที่มีประสิทธิภาพ
                </p>
                <nuxt-link :to="localePath('/solutions/wizemoves/martech')">
                  <p class="mt-5 mb-0 text-s-20 font-md">
                    สนใจบริการ
                    <img src="../../../assets/SolutionsWizemoves/customer/chevron-right.png" alt="chevron-right.png" />
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
          <template #dot="{ disabled }">
            <div v-if="disabled == false" class="dot-carousel"></div>
            <div v-if="disabled == true" class="dot-carousel-active"></div>
          </template>
        </ssr-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      windowWidth: 0
    }
  },
  computed: {
    slidesPerPage() {
      return this.windowWidth <= 576 ? 1 : 2
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    eventContactGTM() {
      if (this.page === 'Wizemoves') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'click_btn_consult',
          service_name: 'Wizemoves'
        })
      }
    },
    eventTelGTM() {
      if (this.page === 'Wizemoves') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'click_btn_contact_call',
          service_name: 'Wizemoves'
        })
      }
    },
    eventLineGTM() {
      if (this.page === 'Wizemoves') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'click_btn_contact_line',
          service_name: 'Wizemoves'
        })
      }
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.card {
  background: linear-gradient(253.51deg, #d4d1ec 38.63%, #fde68a 81.8%);
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px #7b64af12, 0px 5px 5px 0px #7b64af0f,
    0px 12px 7px 0px #7b64af0a, 0px 20px 8px 0px #7b64af03,
    0px 32px 9px 0px #7b64af00;
}

.last .card {
  background: #fff !important;
  border: 1px solid #e5e7eb !important;
  box-shadow: 0px 1px 3px 0px #6783bc12, 0px 5px 5px 0px #6783bc0f,
    0px 12px 7px 0px #6783bc0a, 0px 20px 8px 0px #6783bc03,
    0px 32px 9px 0px #6783bc00;
}

.last .card-body {
  padding: 24px;
}

.dot-carousel-active {
  width: 32px;
  height: 8px;
  background-color: #6B7280;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 5px;
}

.dot-carousel {
  width: 16px;
  height: 8px;
  background-color: #E5E7EB;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 5px;
}

a {
  color: unset;
}

a:hover {
  color: none !important;
}

.cart-img {
  position: absolute;
  backdrop-filter: blur(7px);
  box-shadow: -1px -6px 4px 0px #ffffff59 inset, 1px 1px 4px 0px #ffffff59 inset,
    0px 3px 10px 0px #0000000d;
  background: #ffffff59;
  border-radius: 32px;
  padding: 17px;
  left: -38px;
  top: 30px;
}

.text-s-28 {
  line-height: 28px;
}

@media only screen and (max-width: 600px) {
  .btn-violet {
    width: 200px !important;
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }

  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }

  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .card-body {
    padding: 55px 40px;
    position: relative;
    z-index: 9;
  }

  .bg-c {
    background-image: url(../../../assets/SolutionsWizemoves/BG_2.png);
    background-repeat: no-repeat;
    background-position: bottom;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }

  .text-s-36 {
    font-size: 28px !important;
    line-height: 28px;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px;
  }

  .card-body {
    padding: 55px 40px;
    position: relative;
    z-index: 9;
  }

  .bg-c {
    background-image: url(../../../assets/SolutionsWizemoves/BG_2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-body .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .text-s-28 {
    font-size: 24px !important;
    line-height: 24px;
  }

  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .card-body {
    padding: 70px;
    position: relative;
    z-index: 9;
  }

  .card-body .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .bg-c {
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }

  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }

  .card-body {
    padding: 70px;
    position: relative;
    z-index: 9;
  }

  .card-body .text-s-60 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .bg-c {
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px;
  }

  .text-s-36 {
    font-size: 36px !important;
    line-height: 36px;
  }

  .text-s-60 {
    font-size: 50px !important;
    line-height: 64px;
  }

  .card-body {
    padding: 112px;
    position: relative;
    z-index: 9;
  }

  .card-body .text-s-60 {
    font-size: 50px !important;
    line-height: 64px;
  }

  .bg-c {
    background-image: url(../../../assets/SolutionsWizemoves/BG2.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media only screen and (min-width: 1400px) {
  .text-s-60 {
    font-size: 60px !important;
    line-height: 64px;
  }
  .card-body .text-s-60 {
    font-size: 60px !important;
    line-height: 72px;
  }
}
</style>
