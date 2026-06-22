<template>
  <div class="bg-main">
    <Cookie />
    <SellsukiAiChatWidget />
    <div class="d-none d-xl-block">
      <nav class="navbar navbar-expand-lg fixed-top" style="z-index: 999">
        <div class="container">
          <div class="ml-2">
            <ul class="navbar-nav text-s-24 text-w-500">
              <a href="/">
                <img src="~/assets/Logo.svg" alt="sellsuki-logo" loading="lazy"
                  class="d-inline-block align-text-top cover-img sellsuki-logo" />
              </a>
              <li id="Software" class="nav-item navbar-item margin-menu">
                <a @mouseover="menuMein = 'Akita'" class="nav-link" aria-current="page" href="#"><span
                    class="ms-2">Software</span>
                  <i class="bi bi-chevron-down" style="font-size: 16px"></i></a>
                <ul class="dropdown">
                  <div class="container">
                    <div class="row">
                      <div class="col-4" style="border-right: 1px solid #e7e7ea">
                        <nuxt-link :to="localePath('/Solutions/akita')" @mouseover.native="menuMein = 'Akita'"
                          class="row px-2 py-3 bt-col-1" :class="{ 'menuMein-1-hover': menuMein === 'Akita' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'Akita' }">
                              Akita
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'Akita' }">
                              บริการคลังสินค้าครบวงจร</p>
                          </div>
                          <!-- <div class="col-2 align-self-center">
                          <img
                            v-if="menuMein === 'Akita'"
                            src="~/assets/SolutionsWizemoves/menu/Akita/chevron-right-hover.svg"
                            alt="chevron-right.svg"
                          />
                          <img
                            v-else
                            src="~/assets/SolutionsWizemoves/menu/Akita/chevron-right.svg"
                            alt="chevron-right.svg"
                          />
                        </div> -->
                        </nuxt-link>

                        <a href="https://patona.online/" target="_blank" rel="noopener" @mouseover="menuMein = 'Patona'"
                          class="row px-2 py-3 bt-col-1" :class="{ 'menuMein-2-hover': menuMein === 'Patona' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'Patona' }">Patona</p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'Patona' }">
                              จัดการพัสดุให้เป็นเรื่องง่าย รวดเร็ว และปลอดภัย
                            </p>
                          </div>
                          <!-- <div class="col-2 align-self-center">
                          <img
                            v-if="menuMein === 'Patona'"
                            src="~/assets/SolutionsWizemoves/menu/Patona/chevron-right-hover.svg"
                            alt="chevron-right.svg"
                          />
                          <img
                            v-else
                            src="~/assets/SolutionsWizemoves/menu/Patona/chevron-right.svg"
                            alt="chevron-right.svg"
                          />
                        </div> -->
                        </a>

                        <nuxt-link :to="localePath('/Solutions/oc2plus')" @mouseover.native="menuMein = 'Oc2plus'"
                          class="row px-2 py-3 bt-col-1" :class="{ 'menuMein-1-hover': menuMein === 'Oc2plus' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'Oc2plus' }">
                              Oc2plus
                              <!-- <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span> -->
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'Oc2plus' }">
                              เครื่องมือจัดเก็บข้อมูลสำหรับวางแผนการตลาด
                            </p>
                          </div>

                        </nuxt-link>

                        <nuxt-link :to="localePath('/Solutions/shipmunk')" @mouseover.native="menuMein = 'SHIPMUNK'"
                          class="row px-2 py-3 bt-col-1" :class="{ 'menuMein-2-hover': menuMein === 'SHIPMUNK' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'SHIPMUNK' }">
                              Shipmunk
                              <!-- <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span> -->
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'SHIPMUNK' }">
                              Shipmunk บริการระบบจองขนส่ง
                            </p>
                          </div>
                        </nuxt-link>

                        <nuxt-link :to="localePath('/Solutions/wizemoves/martech')"
                          @mouseover.native="menuMein = 'Wizemoves'"
                          @click.native="pushMenuGTM('click_martech_form_new_menu')" class="row px-2 py-3 bt-col-1"
                          :class="{ 'menuMein-4-hover': menuMein === 'Wizemoves' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'Wizemoves' }">
                              MarTech
                              <!-- <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span> -->
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'Wizemoves' }">
                              เครื่องมือทางการตลาด เพิ่มยอดขายให้คุณ
                            </p>
                          </div>
                        </nuxt-link>

                      </div>
                      <div class="col-4" style="border-right: 1px solid #e7e7ea">
                        <!-- <div v-if="menuMein === 'Akita'" class="px-3 Akita">
                        <span class="text-w-700 text-s-20 color-6B7280 ms-2"
                          >บริการ</span
                        >
                        <a
                          href="#Akita1"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Akita1'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Akita1'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/home-modern.svg"
                              alt="home-modern.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/home-modern-hover.svg"
                              alt="home-modern.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Akita1' }">
                              บริการคลังสินค้า
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Akita1' }">
                              ให้บริการพื้นที่จัดเก็บสินค้า
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Akita2"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Akita2'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Akita2'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/gift.svg"
                              alt="megaphone.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/gift-hover.svg"
                              alt="megaphone.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Akita2' }">
                              บริการแพ็คสินค้า
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Akita2' }">
                              หยิบ-แพ็ค อย่างรวด เร็ว แม่นยำ
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Akita3"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Akita3'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Akita3'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/truck.svg"
                              alt="document-text.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/truck-hover.svg"
                              alt="document-text.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Akita3' }">
                              บริการส่งสินค้า
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Akita3' }">
                              พร้อมส่งมอบทุกออเดอร์ถึงมือลูกค้า
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Akita4"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Akita4'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Akita4'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/window.svg"
                              alt="globe-alt.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Akita/window-hover.svg"
                              alt="globe-alt.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Akita4' }">
                              ระบบคลังสินค้า
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Akita4' }">
                              เพิ่มโอกาสการขาย เชื่อมต่อได้ทุกช่องทาง
                            </p>
                          </div>
                        </a>
                      </div> -->
                        <!-- <div v-if="menuMein === 'Patona'" class="px-3 Patona">
                        <span class="text-w-700 text-s-20 color-6B7280 ms-2"
                          >บริการ</span
                        >
                        <a
                          href="#Patona1"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Patona1'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Patona1'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/printer.svg"
                              alt="megaphone.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/printer-hover.svg"
                              alt="megaphone.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Patona1' }">
                              ระบบขายหน้าร้าน (POS)
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Patona1' }">
                              ระบบบริหารจัดการขายหน้าร้าน
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Patona2"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Patona2'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Patona2'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/clipboard-document-check.svg"
                              alt="clipboard-document-check.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/clipboard-document-check-hover.svg"
                              alt="clipboard-document-check.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Patona2' }">
                              ระบบจัดการออเดอร์ (OMS)
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Patona2' }">
                              ระบบจัดการออเดอร์ ร้านค้าออนไลน์
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Patona3"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Patona3'"
                          class="row px-2 py-3 bt-col-2"
                        >
                          <div v-if="menu !== 'Patona3'" class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/users.svg"
                              alt="document-text.svg"
                            />
                          </div>
                          <div v-else class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/users-hover.svg"
                              alt="document-text.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{'font-md': menu === 'Patona3' }">
                              ระบบจัดการลูกค้า (CRM)
                            </p>
                            <p class="text-s-20 mb-0" :class="{'bt-col-2-hover': menu === 'Patona3' }">
                              พัฒนาระบบเพื่อให้ตอบโจทย์การขายตลอดเวลา
                            </p>
                          </div>
                        </a>
                        <a
                          href="#Patona4"
                          @mouseleave="menu = ''"
                          @mouseover="menu = 'Patona4'"
                          class="row px-2 py-3 bt-col-2 cursor-not"
                        >
                          <div class="col-2 align-self-center">
                            <img
                              src="~/assets/SolutionsWizemoves/menu/Patona/mynaui_api.svg"
                              alt="document-text.svg"
                            />
                          </div>
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0">
                              เชื่อมต่อช่องทางการขาย (API) <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span>
                            </p>
                            <p class="text-s-20 mb-0">
                              รวมคำสั่งซื้อแล้วข้อมูลสินค้าทั้งหมดในที่เดียว
                            </p>
                          </div>
                        </a>
                      </div> -->
                      </div>
                      <div class="col-4">
                        <div v-if="menuMein === 'Akita'">
                          <div v-if="menu === 'Akita1'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              บริการคลังสินค้า
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ให้บริการพื้นที่จัดเก็บสินค้า หรือที่เราอาจะเรียกว่า โกดัง เก็บของ ภายใต้คลังสินค้า
                              แบบปิดสนิทรอบ อาคาร ทำให้ลดการจับของฝุ่นบนสินค้า ซึ่งแตกต่างจากพื้นที่ของ
                              คลังสินค้าออนไลน์ทั่วไปที่มักเป็น คลังสินค้าที่ปิดไม่สนิท จึงอาจมีฝุ่นเล็ดลอดจาก ภายนอก
                              โดยลูกค้าสามารถส่งสินค้าเข้ามาจัดเก็บ ตรวจสอบสต๊อกสินค้าและจำนวน
                              การใช้พื้นที่จัดเก็บผ่านระบบจัดการออเดอร์ (OMS)
                            </p>
                          </div>
                          <div v-if="menu === 'Akita2'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              บริการแพ็คสินค้า
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              “แม่นยำ รวดเร็ว และมีคุณภาพ” วางใจให้ทีมแพ็ค Akita ดูแล เราหยิบ-แพ็ค อย่างรวด เร็ว แม่นยำ
                              ด้วยระบบตรวจสอบและป้องกันการหยิบ-แพ็คสินค้าผิด ด้วยทีมแพ็คที่ เชี่ยวชาญ เป็นไปตาม มาตรฐาน
                              (SLA) ที่แต่ละช่องทางขายกำหนด พร้อมระบบ OMS แจ้งเตือนสถานะของแต่ละออเดอร์
                              ตรวจสอบย้อนหลังได้ผ่านระบบ CCTV ในทุกขั้นตอน
                            </p>
                          </div>
                          <div v-if="menu === 'Akita3'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              บริการส่งสินค้า
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ด้วยพันธมิตรขนส่งของเรา Akita พร้อมส่งมอบทุกออเดอร์ถึงมือลูกค้า ด้วยอัตราค่าบริการสุดพิเศษ
                              ประหยัดค่าใช้จ่าย
                            </p>
                          </div>
                          <div v-if="menu === 'Akita4'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              ระบบคลังสินค้า
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ถูกออกแบบมาเพื่อบันทึกกิจกรรมภายในคลังสินค้า ตั้งแต่รับเข้าสินค้า (Inbound) บันทึกตำแหน่ง
                              จัดเก็บ การเลือกหยิบสินค้าเข้า-ออก ตามความสำคัญของสินค้า (FIFO, FEFO) การส่งต่อสินค้าให้
                              กับผู้ให้บริการขนส่ง (Outbound) และการบริหาร จัดการสต๊อกสินค้าอย่างเป็นระบบ โดยระบบ WMS
                              ของ Akita Fulfillment จะเชื่อมต่อกับระบบ OMS เพื่อให้เป็นระบบจัดการออเดอร์ และสต๊อก
                              ออนไลน์
                            </p>
                          </div>
                        </div>
                        <div v-if="menuMein === 'Patona'">
                          <div v-if="menu === 'Patona1'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              ระบบขายหน้าร้าน (POS)
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ระบบบริหารจัดการขายหน้าร้าน ด้วยระบบที่ใช้งานง่าย ครอบคลุมทุก ฟังก์ชันที่จำเป็น
                              ช่วยให้ธุรกิจของคุณสามารถให้บริการลูกค้าได้อย่าง ราบรื่นและมีประสิทธิภาพ </p>
                          </div>
                          <div v-if="menu === 'Patona2'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              ระบบจัดการออเดอร์ (OMS)
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              เป็นระบบที่ช่วยให้ธุรกิจของคุณสามารถบริหารจัดการคำสั่งซื้อจาก
                              หลายช่องทางได้อย่างมีประสิทธิภาพ ตั้งแต่การรับคำสั่งซื้อ จัดการ สต็อก
                              ไปจนถึงการประสานงานกับการจัดส่ง ช่วยลดความซับซ้อนใน กระบวน การหลังการขาย </p>
                          </div>
                          <div v-if="menu === 'Patona3'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              ระบบจัดการลูกค้า (CRM)
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              เพิ่มประสิทธิภาพการตลาดและติดตามลูกค้าอย่างง่ายดายด้วยระบบ CRM ผ่าน LINE ที่สามารถปรับใช้
                              Point System ได้ตามความเหมาะ สมของธุรกิจ จัดการข้อมูลลูกค้าอย่างมีประสิทธิภาพ
                              ช่วยให้คุณส่ง โปรโมชั่นและข่าวสารใหม่ๆ ไปยังลูกค้าได้ทันที เสริมสร้างความพึงพอใจ
                              และความผูกพันกับแบรนด์ของคุณ </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li id="Business" class="nav-item navbar-item margin-menu">
                <a @mouseover="menuMein = 'Business Solutions'" class="nav-link" aria-current="page" href="#"><span
                    class="ms-2">Business</span>
                  <i class="bi bi-chevron-down" style="font-size: 16px"></i></a>
                <ul class="dropdown">
                  <div class="container">
                    <div class="row">
                      <div class="col-4" style="border-right: 1px solid #e7e7ea">
                        <nuxt-link :to="localePath('/Solutions/wizeMoves')"
                          @mouseover.native="menuMein = 'Business Solutions'" class="row px-2 py-3 bt-col-1"
                          :class="{ 'menuMein-1-hover': menuMein === 'Business Solutions' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'Business Solutions' }">
                              Business Solutions
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'Business Solutions' }">
                              WizeMoves
                            </p>
                          </div>
                          <div class="col-2 align-self-center">
                            <img v-if="menuMein === 'Business Solutions'"
                              src="~/assets/SolutionsWizemoves/menu/Wizemove/chevron-right-hover.svg"
                              alt="chevron-right.svg" />
                            <img v-else src="~/assets/SolutionsWizemoves/menu/Wizemove/chevron-right.svg"
                              alt="chevron-right.svg" />
                          </div>
                        </nuxt-link>

                        <nuxt-link @click="trackLineAgencyClick('LINE Agency')"
                          :to="localePath('/solutions/lineagency')" @mouseover.native="menuMein = 'LINE Agency'"
                          class="row px-2 py-3 bt-col-1" :class="{ 'menuMein-2-hover': menuMein === 'LINE Agency' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menuMein === 'LINE Agency' }">
                              LINE Agency
                            </p>
                            <p class="text-s-20 mb-0" :class="{ 'bt-col-1-hover': menuMein === 'LINE Agency' }">
                              บริการรับทำ LINE OA ครบวงจร By Sellsuki
                            </p>
                          </div>
                          <div class="col-2 align-self-center">
                            <img v-if="menuMein === 'LINE Agency'"
                              src="~/assets/SolutionsWizemoves/menu/Line/chevron-right-hover.svg"
                              alt="chevron-right.svg" />
                            <img v-else src="~/assets/SolutionsWizemoves/menu/Line/chevron-right.svg"
                              alt="chevron-right.svg" />
                          </div>
                        </nuxt-link>

                        <div @mouseover="menuMein = ''" class="row px-2 py-3 bt-col-1 cursor-not"
                          :class="{ 'menuMein-3-hover': menuMein === 'Community Marketplace' }">
                          <div class="col-10">
                            <p class="text-s-24 font-df mb-0">
                              Suki Space <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span>
                            </p>
                            <p class="text-s-20 mb-0"
                              :class="{ 'bt-col-1-hover': menuMein === 'Community Marketplace' }">
                              ผู้คัดสรรเครื่องมือทางธุรกิจ
                            </p>
                          </div>
                          <div class="col-2 align-self-center">
                            <img src="~/assets/SolutionsWizemoves/menu/Marketplace/chevron-right.svg"
                              alt="chevron-right.svg" />
                          </div>
                        </div>
                      </div>
                      <div class="col-4" style="border-right: 1px solid #e7e7ea">
                        <div v-if="menuMein === 'Business Solutions'" class="px-3 business-bolutions">
                          <span class="text-w-700 text-s-20 color-6B7280 ms-2">บริการ</span>
                          <nuxt-link :to="localePath('/solutions/wizemoves/business-consulting')"
                            @mouseleave.native="menu = ''" @mouseover.native="menu = 'Business Consulting'"
                            class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'Business Consulting'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/chat-bubble-left-right.svg"
                                alt="chat-bubble-left-right.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/chat-bubble-left-right-hover.svg"
                                alt="chat-bubble-left-right.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'Business Consulting' }">
                                Business Consulting
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'Business Consulting' }">
                                ที่ปรึกษาทางธุรกิจ ผู้ช่วยวางแผนกลยุทธ์การตลาด
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link :to="localePath('/solutions/wizemoves/online-advertising')"
                            @mouseleave.native="menu = ''" @mouseover.native="menu = 'Digital Advertising'"
                            class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'Digital Advertising'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/megaphone.svg" alt="megaphone.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/megaphone-hover.svg"
                                alt="megaphone.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'Digital Advertising' }">
                                Digital Advertising
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'Digital Advertising' }">
                                รับทำโฆษณาออนไลน์บน Social Media ทุกแพลตฟอร์ม
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link :to="localePath('/solutions/wizemoves-content')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'Content Marketing'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'Content Marketing'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/document-text.svg"
                                alt="document-text.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/document-text-hover.svg"
                                alt="document-text.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'Content Marketing' }">
                                Content Marketing
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'Content Marketing' }">
                                ผู้เชี่ยวชาญในด้านการทำ Content Marketing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link :to="localePath('/solutions/wizemoves/edis')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'e-Distributor'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'e-Distributor'" class="col-2 align-self-center">
                              <img src="../assets/SolutionsWizemoves/menu/Wizemove/globe-alt.svg" alt="globe-alt.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="../assets/SolutionsWizemoves/menu/Wizemove/globe-alt-hover.svg"
                                alt="globe-alt.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'e-Distributor' }">
                                e-Distributor
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'e-Distributor' }">
                                บริหารจัดการช่องทางการขายออนไลน์
                              </p>
                            </div>
                          </nuxt-link>
                          <a href="/solutions/wizemoves/martech" @mouseleave="menu = ''"
                            @mouseover="menu = 'Website Development'"
                            @click="pushMenuGTM('click_martech_form_old_menu')" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'Website Development'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/code-bracket-square.svg"
                                alt="code-bracket-square.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/code-bracket-square-hover.svg"
                                alt="code-bracket-square.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'Website Development' }">
                                Website Development
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'Website Development' }">
                                รับพัฒนาเว็บไซต์ครบวงจร
                              </p>
                            </div>
                          </a>
                          <a href="/solutions/wizemoves#DataAnalytics" @mouseleave="menu = ''"
                            @mouseover="menu = 'Data Analytics'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'Data Analytics'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/presentation-chart-line.svg"
                                alt="presentation-chart-line.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Wizemove/presentation-chart-line-hover.svg"
                                alt="presentation-chart-line.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'Data Analytics' }">
                                Data Analytics
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'Data Analytics' }">
                                รับวิเคราะห์ข้อมูล
                              </p>
                            </div>
                          </a>
                        </div>
                        <div v-if="menuMein === 'LINE Agency'" class="px-3 line-agency">
                          <span class="text-w-700 text-s-20 color-6B7280 ms-2">บริการ</span>
                          <nuxt-link @click="trackLineAgencyClick('LINE OA')"
                            :to="localePath('/solutions/lineagency/line-oa')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'LINE OA'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'LINE OA'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/chat-bubble-left-right.svg"
                                alt="chat-bubble-left-right.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/chat-bubble-left-right-hover.svg"
                                alt="chat-bubble-left-right.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'LINE OA' }">
                                LINE OA
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'LINE OA' }">
                                ที่ปรึกษาทางธุรกิจ ผู้ช่วยวางแผนกลยุทธ์การตลาด
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link @click="trackLineAgencyClick('LINE OA Corporate')"
                            :to="localePath('/solutions/lineagency/line-oa-corporate')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'LINE OA Corporate'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'LINE OA Corporate'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/megaphone.svg" alt="megaphone.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/megaphone-hover.svg"
                                alt="megaphone.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'LINE OA Corporate' }">
                                LINE OA Corporate
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'LINE OA Corporate' }">
                                รับทำโฆษณาออนไลน์บน Social Media ทุกแพลตฟอร์ม
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link @click="trackLineAgencyClick('LINE Smart Channel')"
                            :to="localePath('/solutions/lineagency/line-smart-channel')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'LINE Smart Channel'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'LINE Smart Channel'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/document-text.svg"
                                alt="document-text.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/document-text-hover.svg"
                                alt="document-text.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'LINE Smart Channel' }">
                                LINE Smart Channel
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'LINE Smart Channel' }">
                                ผู้เชี่ยวชาญในด้านการทำ Content Marketing
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link @click="trackLineAgencyClick('LINE Today')"
                            :to="localePath('/solutions/lineagency/line-today')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'LINE Today'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'LINE Today'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/globe-alt.svg" alt="globe-alt.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/globe-alt-hover.svg"
                                alt="globe-alt.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'LINE Today' }">
                                LINE Today
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'LINE Today' }">
                                บริหารจัดการช่องทางการขายออนไลน์
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link @click="trackLineAgencyClick('LINE Sponsored Sticker')"
                            :to="localePath('/solutions/lineagency/line-sponsored-sticker')"
                            @mouseleave.native="menu = ''" @mouseover.native="menu = 'LINE Sponsored Sticker'"
                            class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'LINE Sponsored Sticker'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/code-bracket-square.svg"
                                alt="code-bracket-square.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/code-bracket-square-hover.svg"
                                alt="code-bracket-square.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0"
                                :class="{ 'font-md': menu === 'LINE Sponsored Sticker' }">
                                LINE Sponsored Sticker
                              </p>
                              <p class="text-s-20 mb-0"
                                :class="{ 'bt-col-2-hover': menu === 'LINE Sponsored Sticker' }">
                                รับพัฒนาเว็บไซต์ครบวงจร
                              </p>
                            </div>
                          </nuxt-link>
                          <nuxt-link @click="trackLineAgencyClick('My Customer | CRM')"
                            :to="localePath('/solutions/lineagency/line-my-customer')" @mouseleave.native="menu = ''"
                            @mouseover.native="menu = 'My Customer | CRM'" class="row px-2 py-3 bt-col-2">
                            <div v-if="menu !== 'My Customer | CRM'" class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/presentation-chart-line.svg"
                                alt="presentation-chart-line.svg" />
                            </div>
                            <div v-else class="col-2 align-self-center">
                              <img src="~/assets/SolutionsWizemoves/menu/Line/presentation-chart-line-hover.svg"
                                alt="presentation-chart-line.svg" />
                            </div>
                            <div class="col-10">
                              <p class="text-s-24 font-df mb-0" :class="{ 'font-md': menu === 'My Customer | CRM' }">
                                My Customer | CRM
                              </p>
                              <p class="text-s-20 mb-0" :class="{ 'bt-col-2-hover': menu === 'My Customer | CRM' }">
                                รับวิเคราะห์ข้อมูล
                              </p>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                      <div class="col-4">
                        <div v-if="menuMein === 'Business Solutions'">
                          <div v-if="menu === 'Business Consulting'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              Business Consulting
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ผู้ช่วยวางกลยุทธ์การตลาด กระตุ้นยอดขาย ครบทุกด้าน
                              บริการให้คำ ปรึกษาและ ทำการตลาดแบบครบวงจร
                              เป็นผู้ช่วยธุรกิจ พร้อมผลักดัน
                              ธุรกิจสู่ความสำเร็จที่ยั่งยืน
                            </p>
                          </div>
                          <div v-if="menu === 'Digital Advertising'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              Advertising
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่
                              รับยิง Ads Facebook, Google Ads และ Youtube
                              รวมถึงยิงแอดใน TikTok, LINE, X, Instagram
                              ให้ความแม่นยำสูง เข้าถึงกลุ่มเป้าหมายได้ตรงจุด
                              กระตุ้นความ ต้องการต่อสินค้าและบริการของคุณ
                              และกลายมาเป็นฐานลูกค้าถาวร
                            </p>
                          </div>
                          <div v-if="menu === 'Content Marketing'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              Content Marketing
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ผู้เชี่ยวชาญในด้านการทำ Content Marketing
                              รับวางแผนคอนเทนต์ รับทำคอนเทนต์โฆษณา เพื่อเพิ่มยอดขาย
                              พร้อมบริการแอดมินดูแลเพจ ครบวงจร
                              ที่จะช่วยสร้างธุรกิจของคุณให้เป็นที่น่าจดจำและเติบโตอย่างก้าว
                              กระโดด
                            </p>
                          </div>
                          <div v-if="menu === 'e-Distributor'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              e-Distributor
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              บริการจัดการช่องทางขายออนไลน์
                              ด้วยทีมงานมืออาชีพที่จะดูแลทุกขั้นตอน การขาย พร้อมวาง
                              แผนการตลาดบน Marketplace เพื่อไม่ให้พลาดทุก
                              แคมเปญสำคัญ ที่ช่วยยกระดับช่องทางขาย
                              และกระจายสินค้าบนช่องทาง ออนไลน์ เข้าถึง Customer
                              Insight และทำ Data Analytics เพื่อปรับปรุง Performance
                              ให้ตอบโจทย์ความต้องการของลูกค้าได้ตรงจุด ทำให้ธุรกิจ
                              คุณเติบโต ได้อย่างยั่งยืน
                            </p>
                          </div>
                          <div v-if="menu === 'Website Development'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              Website Development
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              รับทำและออกแบบเว็บไซต์อย่างครบวงจรพร้อมทีมซัปพอร์ตพัฒนาระบบ
                              หลังบ้านที่เข้าใจความ ต้องการของทุกกลุ่มธุรกิจ
                              ตอบโจทย์ทุกความ ต้องการด้วยบริการที่ครอบคลุมทุกขั้นตอน
                              ตั้งแต่ การออกแบบเว็บไซต์ พัฒนาระบบหลังบ้าน
                              ไปจนถึงการเชื่อมต่อ API กับระบบต่างๆ บนออนไลน์
                              เพิ่มโอกาสในการขาย และต่อยอดทุกไอเดียที่มี
                              ด้วยผลลัพธ์ที่ได้รับการันตี ทางธุรกิจที่มีการ
                              เติบโตขึ้น จากบริษัทชั้นนำ
                            </p>
                          </div>
                          <div v-if="menu === 'Data Analytics'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              Data Analytics
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ข้อมูลคือขุมทรัพย์ของคุณ เราช่วยคุณขุดหาข้อมูลสำคัญ
                              เพื่อวางแผน กลยุทธ์ทางการตลาดที่ แม่นยำ
                              ด้วยการรวบรวมข้อมูลจากทุกช่องทาง
                              และจัดสรรให้เป็นระเบียบ เข้าใจง่าย พร้อมทั้ง
                              วิเคราะห์ข้อมูลเชิงลึก เพื่อให้ คุณเข้าใจลูกค้าและตลาด
                              ช่วยให้มองเห็นโอกาสทางการตลาดใหม่ๆ ในการ
                              ต่อยอดธุรกิจให้เติบโต
                            </p>
                          </div>
                        </div>
                        <div v-if="menuMein === 'LINE Agency'">
                          <div v-if="menu === 'LINE OA'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              LINE OA
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ผู้ช่วยวางกลยุทธ์การตลาด กระตุ้นยอดขาย ครบทุกด้าน
                              บริการให้คำ ปรึกษาและ ทำการตลาดแบบครบวงจร
                              เป็นผู้ช่วยธุรกิจ พร้อมผลักดัน
                              ธุรกิจสู่ความสำเร็จที่ยั่งยืน
                            </p>
                          </div>
                          <div v-if="menu === 'LINE OA Corporate'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              LINE OA Corporate
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ทำโฆษณาออนไลน์บน Social Media ครบทุกแพลตฟอร์ม ได้แก่
                              รับยิง Ads Facebook, Google Ads และ Youtube
                              รวมถึงยิงแอดใน TikTok, LINE, X, Instagram
                              ให้ความแม่นยำสูง เข้าถึงกลุ่มเป้าหมายได้ตรงจุด
                              กระตุ้นความ ต้องการต่อสินค้าและบริการของคุณ
                              และกลายมาเป็นฐานลูกค้าถาวร
                            </p>
                          </div>
                          <div v-if="menu === 'LINE Smart Channel'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              LINE Smart Channel
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ผู้เชี่ยวชาญในด้านการทำ Content Marketing
                              รับวางแผนคอนเทนต์ รับทำคอนเทนต์โฆษณา เพื่อเพิ่มยอดขาย
                              พร้อมบริการแอดมินดูแลเพจ ครบวงจร
                              ที่จะช่วยสร้างธุรกิจของคุณให้เป็นที่น่าจดจำและเติบโตอย่างก้าว
                              กระโดด
                            </p>
                          </div>
                          <div v-if="menu === 'LINE Today'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              LINE Today
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              บริการจัดการช่องทางขายออนไลน์
                              ด้วยทีมงานมืออาชีพที่จะดูแลทุกขั้นตอน การขาย พร้อมวาง
                              แผนการตลาดบน Marketplace เพื่อไม่ให้พลาดทุก
                              แคมเปญสำคัญ ที่ช่วยยกระดับช่องทางขาย
                              และกระจายสินค้าบนช่องทาง ออนไลน์ เข้าถึง Customer
                              Insight และทำ Data Analytics เพื่อปรับปรุง Performance
                              ให้ตอบโจทย์ความต้องการของลูกค้าได้ตรงจุด ทำให้ธุรกิจ
                              คุณเติบโต ได้อย่างยั่งยืน
                            </p>
                          </div>
                          <div v-if="menu === 'LINE Sponsored Sticker'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              LINE Sponsored Sticker
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              รับทำและออกแบบเว็บไซต์อย่างครบวงจรพร้อมทีมซัปพอร์ตพัฒนาระบบ
                              หลังบ้านที่เข้าใจความ ต้องการของทุกกลุ่มธุรกิจ
                              ตอบโจทย์ทุกความ ต้องการด้วยบริการที่ครอบคลุมทุกขั้นตอน
                              ตั้งแต่ การออกแบบเว็บไซต์ พัฒนาระบบหลังบ้าน
                              ไปจนถึงการเชื่อมต่อ API กับระบบต่างๆ บนออนไลน์
                              เพิ่มโอกาสในการขาย และต่อยอดทุกไอเดียที่มี
                              ด้วยผลลัพธ์ที่ได้รับการันตี ทางธุรกิจที่มีการ
                              เติบโตขึ้น จากบริษัทชั้นนำ
                            </p>
                          </div>
                          <div v-if="menu === 'My Customer | CRM'" class="px-3 py-3 bt-col-3">
                            <h2 class="font-bd text-s-36 color-1F2937 mb-0">
                              My Customer | CRM
                            </h2>
                            <p class="text-s-24 color-6B7280 mb-0">
                              ข้อมูลคือขุมทรัพย์ของคุณ เราช่วยคุณขุดหาข้อมูลสำคัญ
                              เพื่อวางแผน กลยุทธ์ทางการตลาดที่ แม่นยำ
                              ด้วยการรวบรวมข้อมูลจากทุกช่องทาง
                              และจัดสรรให้เป็นระเบียบ เข้าใจง่าย พร้อมทั้ง
                              วิเคราะห์ข้อมูลเชิงลึก เพื่อให้ คุณเข้าใจลูกค้าและตลาด
                              ช่วยให้มองเห็นโอกาสทางการตลาดใหม่ๆ ในการ
                              ต่อยอดธุรกิจให้เติบโต
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath({ name: 'about-us' })">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.AboutUs") }}</div>
                </li>
              </nuxt-link>
              <!-- <nuxt-link
                @click="scrollToTop"
                aria-current="page"
                :to="localePath('/portfolio')"
              >
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{$t("Menu.Portfolio")}}</div>
                </li>
              </nuxt-link> -->
              <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath('/blog')">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.Blog") }}</div>
                </li>
              </nuxt-link>
              <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath({ name: 'contact-us' })">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.ContactUs") }}</div>
                </li>
              </nuxt-link>
              <nuxt-link @click="scrollToTop" aria-current="page" :to="localePath({ name: 'join-us' })">
                <li class="nav-item navbar-item margin-menu">
                  <div class="nav-link">{{ $t("Menu.JoinUs") }}</div>
                </li>
              </nuxt-link>
            </ul>
          </div>
          <!-- <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('th-TH')" href="#">
          <div
            class="d-flex align-items-center"
            style="
              border: 1px solid #ebedf3;
              background-color: #f9fafb;
              border-radius: 32px;
              padding: 0px 8px 0px 0px;
            "
          >
            <img
              src="~/assets/SolutionsWizemoves/Footer/Thumb.png"
              alt="Thumb.png"
            />
            <span class="font-md text-s-24">EN</span>
          </div>
          </nuxt-link>
          <nuxt-link v-else :to="switchLocalePath('en')" href="#">
          <div
            class="d-flex align-items-center"
            style="
              border: 1px solid #ebedf3;
              background-color: #f9fafb;
              border-radius: 32px;
              padding: 0px 8px 0px 0px;
            "
          >
            <img
              src="~/assets/SolutionsWizemoves/Footer/Thumb.png"
              alt="Thumb.png"
            />
            <span class="font-md text-s-24">TH</span>
          </div>
          </nuxt-link> -->
        </div>
      </nav>
    </div>
    <div class="d-block d-xl-none">
      <MobileMenu :visible="showMenu" @close="showMenu = false" />
      <header>
        <div class="side-bg"></div>
        <nav class="nav-bar">
          <a href="/" class="nav-branding"><img src="~/assets/SolutionsWizemoves/Logo with system__.png"
              alt="sellsuki-logo" loading="lazy" style="margin-left: -10px" /></a>

          <img @click="showMenu = true" src="~/assets/mobile/bars-3.png" alt="bars-3" />
        </nav>
      </header>
    </div>
    <nuxt />
    <FooterWizemove />
    <div id="Home" v-if="title === 'Home'">
      <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
        <div class="click-up mt-3">
          <img src="~/assets/New/Home/chevron-up.svg" alt="chevron-up.svg" />
        </div>
      </div>
      <div @mouseover="statusButton = 'line'" @mouseleave="statusButton = 'none'" class="fabs fade-in-up"
        style="margin-bottom: 86px;">
        <a target="_blank" rel="noopener" href="https://lin.ee/5ljYXPo">
          <div v-if="statusButton === 'line'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 112px;">LINE : @Sellsuki</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/New/Home/line-logo.svg" alt="line-logo.svg" />
          </div>
        </a>
      </div>
      <div @mouseover="statusButton = 'call'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-03" style="margin-bottom: 155px;">
        <a target="_blank" rel="noopener" href="tel:0900967526">
          <div v-if="statusButton === 'call'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 135px;">Call : 090 096 7526</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/New/Home/phone.svg" alt="phone.svg" />
          </div>
        </a>
      </div>
      <div @mouseover="statusButton = 'email'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-05" style="margin-bottom: 222px;">
        <a target="_blank" rel="noopener" href="mailto:customersolutionteam@sellsuki.com">
          <div v-if="statusButton === 'email'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 270px;">Email : customersolutionteam@sellsuki.com</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/New/Home/envelope.svg" alt="envelope.svg" />
          </div>
        </a>
      </div>
    </div>
    <div v-if="title === 'LineAgency'">
      <div class="fabs animate__animated animate__bounce" @click="isActive = !isActive"
        style="bottom:168px !important;z-index: 99;">
        <div class="click-up" :class="{ 'bg-white': !isActive }">
          <img v-if="isActive" src="~/assets/SolutionsLine/layout/chat-bubble-left-right.png" alt="chevron-up.png" />
          <img v-else src="~/assets/SolutionsLine/layout/x-mark.png" alt="chevron-up.png" />
        </div>
      </div>
      <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
        <div class="click-up mt-3">
          <img src="~/assets/SolutionsLine/chevron-up.png" alt="chevron-up.png" />
        </div>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'line'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up" style="margin-bottom: 155px;">
        <a @click="trackLineAgencyFabClick('LINE')" target="_blank" rel="noopener" href="https://lin.ee/5ljYXPo">
          <div v-if="statusButton === 'line'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 112px;">LINE : @Sellsuki</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/SolutionsLine/layout/line-logo.png" alt="line-logo.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'call'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-03" style="margin-bottom: 222px;">
        <a @click="trackLineAgencyFabClick('Call')" target="_blank" rel="noopener" href="tel:0900967526">
          <div v-if="statusButton === 'call'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 135px;">Call : 090 096 7526</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/SolutionsLine/layout/phone.png" alt="phone.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'email'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-05" style="margin-bottom: 289px;">
        <a @click="trackLineAgencyFabClick('Email')" target="_blank" rel="noopener"
          href="mailto:customersolutionteam@sellsuki.com">
          <div v-if="statusButton === 'email'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 270px;">Email : customersolutionteam@sellsuki.com</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up">
            <img src="~/assets/SolutionsLine/layout/envelope.png" alt="envelope.png" />
          </div>
        </a>
      </div>
    </div>
    <div v-if="title === 'Wizemoves'" class="fabs animate__animated animate__bounce" @click="scrollToTop">
      <div class="click-up">
        <img src="~/assets/SolutionsWizemoves/chevron-up.png" alt="chevron-up.png" />
      </div>
    </div>
    <div v-if="title === 'WizemovesConsult'">
      <div class="fabs animate__animated animate__bounce" @click="isActive = !isActive"
        style="bottom:168px !important;z-index: 99;">
        <div class="click-up" :class="{ 'bg-white': !isActive }" style="background: #FFFFFFBF !important;">
          <img v-if="isActive" src="~/assets/SolutionsWizemoves/Consulting/chat-bubble-left-right-c.png"
            alt="chevron-up.png" />
          <img v-else src="~/assets/SolutionsWizemoves/Consulting/x-mark.png" alt="chevron-up.png" />
        </div>
      </div>
      <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
        <div class="click-up mt-3" style="background: #FFFFFFBF !important;">
          <img src="~/assets/SolutionsWizemoves/Consulting/chevron-up.png" alt="chevron-up.png" />
        </div>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'line'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up" style="margin-bottom: 155px;">
        <a target="_blank" rel="noopener" href="https://lin.ee/5ljYXPo">
          <div v-if="statusButton === 'line'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 112px;">LINE : @Sellsuki</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up" style="background: #FFFFFFBF !important;">
            <img src="~/assets/SolutionsWizemoves/Consulting/line-logo 1.png" alt="line-logo.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'call'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-03" style="margin-bottom: 222px;">
        <a target="_blank" rel="noopener" href="tel:0900967526">
          <div v-if="statusButton === 'call'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 135px;">Call : 090 096 7526</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up" style="background: #FFFFFFBF !important;">
            <img src="~/assets/SolutionsWizemoves/Consulting/phone.png" alt="phone.png" />
          </div>
        </a>
      </div>
      <div v-if="!isActive" @mouseover="statusButton = 'email'" @mouseleave="statusButton = 'none'"
        class="fabs fade-in-up custom-delay-05" style="margin-bottom: 289px;">
        <a target="_blank" rel="noopener" href="mailto:customersolutionteam@sellsuki.com">
          <div v-if="statusButton === 'email'" class="animate__animated animate__fadeIn">
            <p class="tooltip-fabs font-md" style="width: 270px;">Email : customersolutionteam@sellsuki.com</p>
            <img class="tooltip-arrow" src="~/assets/SolutionsLine/layout/Arrow.png" alt="Arrow.png" />
          </div>
          <div class="click-up" style="background: #FFFFFFBF !important;">
            <img src="~/assets/SolutionsWizemoves/Consulting/envelope.png" alt="envelope.png" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenuMobile from '@/components/Solutions/Wizemoves/MainMenuMobile'
import FooterWizemove from '@/components/Solutions/Wizemoves/FooterWizemove'
import MobileMenu from '~/components/MobileMenu.vue'
import SellsukiAiChatWidget from '~/components/SellsukiAiChatWidget.vue'
export default {
  layout: null,
  components: {
    MainMenuMobile,
    FooterWizemove,
    MobileMenu,
    SellsukiAiChatWidget
  },
  data() {
    return {
      isActive: true,
      status: true,
      menu: '',
      menuMein: 'Business Solutions',
      activeMainMenu: 'Business Solutions',
      statusButton: 'none',
      showMenu: false
    }
  },
  computed: {
    title() {
      return this.$store.state.title
    }
  },
  mounted() {
    if (this.lang == 'th-TH') {
      this.status = true
    } else {
      this.status = false
    }
  },
  jsonld() {
    return [{
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Sellsuki',
      image: 'https://www.sellsuki.co.th/nuxt/img/logo-Sellsuki.0b4477c.svg',
      description:
        'Sellsuki เป็น Business Enabler หรือผู้ให้บริการ e-Commerce Solution Service อย่างครอบคลุมสำหรับผู้ประกอบการหรือเจ้าของธุรกิจออนไลน์ในไทย มีบริการที่หลากหลายตั้งแต่บริการทำโฆษณาออนไลน์ ขยายช่องทางการขาย ช่วยทำ Content Marketing และระบบ Customer Data Platform ไปจนถึงบริการ Fulfillment ทำให้ Sellsuki เป็นคำตอบสำหรับการทำธุรกิจออนไลน์ที่ครอบคลุมที่สุด',
      '@id': '',
      url: 'https://www.sellsuki.co.th/',
      telephone: '+6620263250',
      email: 'mailto:hello@sellsuki.com',
      priceRange: '$$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          '10/39 4Simplex Building, 3rd Floor, Ratchadaphisek Rd, Chan Kasem',
        addressLocality: 'Bangkok',
        postalCode: '10900',
        addressCountry: 'TH',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.801901,
        longitude: 100.5751,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      sameAs: [
        'https://www.facebook.com/Sellsuki/',
        'https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ',
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "ถ้าเราเป็นแค่ SME เราจะต่อกรกับคู่แข่งรายใหญ่ได้ยังไง?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "คุณไม่จำเป็นต้องเป็น “ยักษ์ใหญ่” เพื่อชนะในตลาดแค่คุณมี กลยุทธ์ที่เฉียบคมและเหมาะกับคุณจริงๆ ซึ่งนั่นหมายถึงการวางแผนที่อิงจากตัวตน จุดแข็ง และทรัพยากรที่คุณมีอยู่จริง ไม่ใช่การลอกสูตรจากคนอื่น แต่เป็นกลยุทธ์ที่ “ใช่” สำหรับธุรกิจของคุณโดยเฉพาะ สำหรับกลยุทธ์ที่ว่านี้ต้องสามารถพาคุณเติบโตอย่างมีทิศทาง และแข่งขันได้แม้ในสนามที่มีผู้เล่นรายใหญ่ ซึ่ง Sellsuki สามารถช่วยคุณวางแผนการตลาดโดยใช้จุดแข็งของ SME อย่าง “ความเร็ว ความยืดหยุ่น และความจริงใจ” เข้าสู้ พร้อมทั้งดึงเครื่องมือการตลาดและมีทีมงานคุณภาพมาช่วยเสริมพลังให้คุณแข็งแกร่งแบบยักษ์ใหญ่แต่ลงทุนน้อยกว่า เราไม่ได้แค่ช่วยคุณขาย แต่เราช่วยคุณ ยืนหนึ่งในกลุ่มเป้าหมายของคุณจริงๆ"
        }
      }, {
        "@type": "Question",
        "name": "อยากโตแบบยั่งยืน ไม่อยากแค่ปังแค่คืนเดียว ควรทำยังไงดี?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "\"แผนการตลาดที่ดี ไม่ใช่แค่สวยหรู แต่ต้องพิสูจน์ได้ด้วยตัวเลข แต่ต้องวัดผลได้จริงด้วยตัวเลข\"ดังนั้นแผนการตลาดที่ดีต้องกำหนดเป้าหมายที่ชัดเจน ระบุกลุ่มเป้าหมายอย่างแม่นยำพร้อมวางกลยุทธ์ที่สร้างสรรค์และเหมาะสม อีกทั้งดำเนินการอย่างมีประสิทธิภาพ และสามารถวัดผลลัพธ์ได้จริงเพื่อปรับปรุงอย่างต่อเนื่องSellsuki ใช้เครื่องมือวิเคราะห์แบบเรียลไทม์ ช่วยติดตามว่ายอดขายมาจากตรงไหน งบแต่ละบาททำงานมีที่มาที่ไปยังไง และจะปรับปรุงตรงไหนให้ดีขึ้นได้ เราไม่มีทางปล่อยให้แบรนด์ของคุณเดินตามแผนลอยๆ แต่เราพร้อมที่จะ “ก้าวเดินไปพร้อมกับแบรนด์ของคุณ” แบบมีข้อมูลรองรับและพร้อมปรับให้ทันทุกการเปลี่ยนแปลง"
        }
      }, {
        "@type": "Question",
        "name": "ตั้งราคาขายยังไงดี? ให้ลูกค้ายอมซื้อ แต่แบรนด์ไม่ขาดทุน?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "การตั้งราคาที่ดีไม่ใช่แค่ “ถูก” หรือ “แพง” แต่คือการทำให้ลูกค้า รู้สึกว่าคุ้มการตั้งราคาควรเริ่มจากเข้าใจว่า “ลูกค้าตัดสินใจซื้อจากอะไร” บางคนต้องการประหยัด บางคนต้องการความพรีเมียม และบางคนซื้อเพราะ เรื่องราวหรือคุณค่า จากนั้นแบรนด์จึงค่อยวิเคราะห์ต้นทุน กำไรที่ต้องการ และเปรียบเทียบกับราคาของคู่แข่งในตลาด รวมถึงพฤติกรรมของลูกค้าเป้าหมาย เพื่อหาจุดสมดุลระหว่างความคุ้มค่าสำหรับลูกค้า และรายได้ที่ธุรกิจสามารถเติบโตได้จริงSellsuki จะช่วยคุณวิเคราะห์ต้นทุน กำไร คู่แข่ง และพฤติกรรมผู้บริโภค แล้วคำนวณราคาที่เหมาะสมทั้งในมุมของความคุ้มค่าของลูกค้าที่จะซื้อสินค้าของคุณ และกระแสเงินสดของแบรนด์คุณ พร้อมเสนอวิธีทำโปรโมชั่นให้ดูน่าสนใจโดยไม่ต้องลดราคาเสมอไป เพราะบางครั้งสิ่งที่ทำให้ลูกค้าตัดสินใจซื้อไม่ใช่ราคา...แต่คือ “คุณค่าที่พวกเขารู้สึกได้”"
        }
      }, {
        "@type": "Question",
        "name": "ถ้าเพิ่งเริ่มขายออนไลน์ ยังไม่มีคนรู้จัก จะเริ่มยังไงให้มียอด?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "คุณไม่จำเป็นต้อง “ดังมาก่อน” ถึงจะขายได้ แต่สิ่งที่คุณต้องมีคือ “จุดยืนที่ชัด และวิธีสื่อสารที่โดนใจกลุ่มเป้าหมายและว่าที่ลูกค้าของคุณ” เริ่มจากเข้าใจว่าแบรนด์ของคุณ ต้องการเป็นที่จดจำแบบไหน และ ใครคือลูกค้าที่คุณอยากให้จำคุณได้ จากนั้นค่อยวางเนื้อหา แนวทางการสื่อสาร และภาพลักษณ์ให้สอดคล้องกันบนทุกช่องทาง เพราะแบรนด์ที่แข็งแกร่งและคนจดจำได้ จะสามารถสร้างยอดขายได้โดยไม่ต้องพึ่งพาการลดราคา Sellsuki สามารถช่วยคุณสร้างแบรนด์ให้ดูน่าเชื่อถือได้ตั้งแต่วันแรก เรามีกลยุทธ์ในการวางแผนคอนเทนต์ที่ทำให้คนอยากรู้จัก พร้อมลงโฆษณาให้ตรงกลุ่มเป้าหมาย เพิ่มยอดโดยไม่ต้องเผางบ เพราะเราไม่ได้จะช่วยคุณแค่ \"ยิงแอดแล้วจบ\" แต่เราจะช่วยคุณ \"สร้างความผูกพัน\" ให้ลูกค้าของคุณจดจำแบรนด์คุณในทางที่ดีและกลับมาซื้อซ้ำอย่างต่อเนื่อง"
        }
      }, {
        "@type": "Question",
        "name": "จะรู้ได้ยังไงว่าแผนการตลาดของเราดีจริง?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "\"แผนการตลาดที่ดี ไม่ใช่แค่สวยหรู แต่ต้องพิสูจน์ได้ด้วยตัวเลข แต่ต้องวัดผลได้จริงด้วยตัวเลข\" ดังนั้นแผนการตลาดที่ดีต้องกำหนดเป้าหมายที่ชัดเจน ระบุกลุ่มเป้าหมายอย่างแม่นยำ พร้อมวางกลยุทธ์ที่สร้างสรรค์และเหมาะสม ดำเนินการอย่างมีประสิทธิภาพ และสามารถวัดผลลัพธ์ได้จริงเพื่อปรับปรุงอย่างต่อเนื่อง Sellsuki ใช้เครื่องมือวิเคราะห์แบบเรียลไทม์ ช่วยติดตามว่ายอดขายมาจากตรงไหน งบแต่ละบาททำงานมีที่มาที่ไปยังไง และจะปรับปรุงตรงไหนให้ดีขึ้นได้ เราไม่มีทางปล่อยให้แบรนด์ของคุณเดินตามแผนลอยๆ แต่เราพร้อมที่จะ “ก้าวเดินไปพร้อมกับแบรนด์ของคุณ” แบบมีข้อมูลรองรับและพร้อมปรับให้ทันทุกการเปลี่ยนแปลง"
        }
      }, {
        "@type": "Question",
        "name": "ยิงแอดไปเยอะแล้ว แต่ทำไมยังไม่มียอดขายกลับมีสักที?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "การยิงแอดก็เหมือนการเปิดไมค์ในห้องใหญ่ ถ้าสื่อสารได้ไม่โดนใจ หรือสื่อสารกับคนผิดกลุ่ม ยังไงก็ไม่มีใครฟังการยิงแอดที่ดี ไม่ใช่แค่ลงเงินให้ระบบทำงาน แต่คือการวางแผนทุกจุดให้สอดประสานกัน ต้องรู้ว่าใครคือลูกค้าเป้าหมายจริงๆ พูดกับเขาด้วยภาษาที่เขาอยากฟัง ผ่านการใช้ภาพหรือวิดีโอที่ดึงดูดในเสี้ยววินาที และส่งเขาไปยังหน้าที่มีโอกาสซื้อสูงสุด Sellsuki จะช่วยคุณวิเคราะห์ให้ครบทั้ง กลุ่มเป้าหมาย ข้อความโฆษณา ครีเอทีฟ และหน้าเพจปลายทาง เพื่อให้ทุกขั้นตอนต่อกันเป็นสายพานที่พาลูกค้าไปสู่ยอดขาย ไม่ใช่แค่ยิงแอด แต่ “ยิงอย่างมีแผนและมียอดกลับมาสู่อ้อมอกของแบรนด์คุณจริงๆ”"
        }
      }, {
        "@type": "Question",
        "name": "ควรขายบนช่องทางไหนบ้าง? จำเป็นต้องมีครบทุกแพลตฟอร์มหรือเปล่า?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ไม่จำเป็นต้องอยู่ทุกที่...แต่อยู่ให้ถูกที่ดีกว่าในโลกออนไลน์ ไม่ใช่ทุกแพลตฟอร์มจะเหมาะกับแบรนด์ของคุณ และไม่ใช่ทุกกลุ่มเป้าหมายจะกระจายตัวอยู่ทั่วทุกที่ สิ่งสำคัญคือการรู้ว่าลูกค้าของคุณ “อยู่ที่ไหน ใช้แพลตฟอร์มไหน และตัดสินใจซื้อจากตรงไหน” เพราะฉะนั้นควรวางกลยุทธ์ให้แม่นยำตั้งแต่ต้นทาง เพราะจะช่วยให้ทุกบาทที่คุณลงทุนไปไม่เสียเปล่า และได้ผลลัพธ์ที่คุ้มค่า Sellsuki จะช่วยคุณวิเคราะห์และเลือกช่องทางที่เหมาะสมกับแบรนด์ของคุณที่สุด จากนั้นวางแผนการขาย การตลาด และโฆษณาให้ “ถูกคน ถูกที่ ถูกจังหวะ” ไม่เปลืองแรง ไม่เปลืองงบ แต่ได้ยอดจริงเพราะบางทีในโลกของธุรกิจ การที่ \"แม่นยำแต่ตรงเป้า\" ย่อมชนะ \"กระจายแต่ไร้ทิศทาง\""
        }
      }]
    }]
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    trackLineAgencyClick(menuName) {
      if (process.client) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'menu_click',
          menu_name: menuName,
          page_path: this.$route.path
        })
      }
    },
    trackLineAgencyFabClick(action) {
      if (process.client) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: 'fab_click',
          action: action,
          page_path: this.$route.path
        })
      }
    },
    pushMenuGTM(solution) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: solution,
        page_type: 'menu'
      })
    }
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

a {
  color: unset !important;
}

.custom-delay-03 {
  animation-delay: 0.3s !important;
}

.custom-delay-05 {
  animation-delay: 0.5s !important;
}

.custom-delay-07 {
  animation-delay: 0.7s !important;
}

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.nav-item p a {
  color: #FFFFFF !important;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#progress {
  display: none;
}

.bg-white {
  background-color: #FFFFFF !important;
}

ul li:hover>ul,
ul li ul:hover {
  height: 530px !important;
}

.dropdown {
  top: 50px !important;
  padding: 24px 64px !important;
  width: 100%;
  left: 50%;
  border-radius: 0 !important;
}

.tooltip-arrow {
  margin-top: 23px;
  position: absolute;
  right: 68px;
}

.tooltip-fabs {
  font-family: 'Heavent-med';
  position: absolute;
  z-index: 99999;
  right: 72px;
  padding: 6px 10px;
  background-color: #FFFFFF;
  border-radius: 4px;
  margin-top: 12px;
  font-size: 18px;
  line-height: 18px;
  color: #1F2937;
  box-shadow: 0px 0px 0px 0px #11182717, 0px 1px 2px 0px #11182712, 0px 3px 3px 0px #1118270D, 0px 7px 4px 0px #11182708, 0px 12px 5px 0px #11182703, 0px 19px 5px 0px #11182700;

}

#Software .menuMein-1-hover {
  background-color: #D9E7F2 !important;
}

#Software .menuMein-2-hover {
  background-color: #F9DDCE !important;
}

#Software .menuMein-3-hover {
  background-color: #CCFBF1 !important;
}

#Software .menuMein-4-hover {
  background-color: #ede9fe !important;
}

#Business .menuMein-1-hover {
  background-color: #ede9fe !important;
}

#Business .menuMein-2-hover {
  background-color: #DCFCE7 !important;
}

#Business .menuMein-3-hover {
  background-color: #D9F2FF !important;
}

.bt-col-1 {
  background-color: #ffffff;
  margin-right: 24px;
  border-radius: 4px;
}

.bt-col-1 .text-s-24 {
  color: #1f2937;
}

.bt-col-1 .text-s-20 {
  color: #9ca3af;
}

.bt-col-1 {
  cursor: pointer;
}

.bt-col-2 {
  cursor: pointer;
}

.cursor-not {
  cursor: default;
  background-color: unset !important;
}

.bt-col-2:hover {
  background-color: #ede9fe;
  border-radius: 4px;
}

.business-bolutions .bt-col-2:hover {
  background-color: #ede9fe;
  border-radius: 4px;
}

.line-agency .bt-col-2:hover {
  background-color: #DCFCE7;
  border-radius: 4px;
}

.Marketplace .bt-col-2 {
  background-color: #D9F2FF;
  border-radius: 4px;
}

.Akita .bt-col-2:hover {
  background-color: #D9E7F2;
  border-radius: 4px;
}

.Patona .bt-col-2:hover {
  background-color: #F9DDCE;
  border-radius: 4px;
}

.Oc2plus .bt-col-2:hover {
  background-color: #CCFBF1;
  border-radius: 4px;
}

.bt-col-2 .text-s-24 {
  color: #1f2937;
}

.bt-col-2 .text-s-20 {
  color: #9ca3af;
}

/* .bt-col-1:hover .text-s-24{
  color: #FFFFFF;
} */

.bt-col-1-hover {
  color: #6b7280 !important;
}

.bt-col-2-hover {
  color: #6b7280 !important;
}

.bt-col-1 .text-s-24 {
  line-height: 24px;
}

.bt-col-2 .text-s-24 {
  line-height: 24px;
}

.bt-col-3 .text-s-24 {
  line-height: 24px !important;
}

.bt-col-3 .text-s-36 {
  line-height: 36px !important;
}

.btn-coming-soom {
  background-color: #FFFBEB;
  border: 1px solid #FEF3C7;
  padding: 0px 8px;
  color: #D97706;
  font-size: 18px;
  font-weight: 500;
  border-radius: 16px;
}

.align-self-center {
  text-align: center;
}

.text-s-20 {
  line-height: 20px;
}

.click-up {
  cursor: pointer;
  border-radius: 32px;
  padding: 12px;
  background: #ffffff40;
  backdrop-filter: blur(7px);
  box-shadow: -1px -6px 4px 0px #ffffff59 inset, 1px 1px 4px 0px #ffffff59 inset,
    0px 3px 10px 0px #0000000d;
}

#Home .click-up {
  background: #FFFFFFB2 !important;
}

.icon-back {
  border-radius: 27px;
  border: 1px solid #ff6603;
  background: #ffefe5;
  display: inline-flex;
  padding: 7.5px 10.5px;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 12px;
}

.nav-custom {
  padding-top: 9px;
  padding-bottom: 9px;
  background: #fff;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.1),
    0px 1px 2px 0px rgba(17, 24, 39, 0.1),
    0px 4px 4px 0px rgba(17, 24, 39, 0.09),
    0px 10px 6px 0px rgba(17, 24, 39, 0.05),
    0px 18px 7px 0px rgba(17, 24, 39, 0.01),
    0px 27px 8px 0px rgba(17, 24, 39, 0), 0px 0px 1px 0px rgba(17, 24, 39, 0.3);
}

.hover-manu a p:hover {
  color: #f38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151c !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}

.hover-manu a p:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  background: #f38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.hover-manu a p:hover:after {
  width: 100%;
}

.menu-bar li:hover div {
  color: #ffffff !important;
  border: 0;
}

.navbar-nav {
  flex-direction: row !important;
}

.opct-02 {
  opacity: 0.5 !important;
}

.switch {
  position: relative;
  display: inline-block;
}

.switch>span {
  position: absolute;
  top: -3px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked~.off {
  color: #fff;
}

input.check-toggle-round-flat:checked~.on {
  color: #f36f25;
}

.switch {
  border: 1px solid rgba(243, 91, 31, 0.2);
  border-radius: 16px;
}

.switch>span.on {
  left: 0;
  padding-left: 0px;
  color: #fff;
}

.switch>span.off {
  right: 0;
  padding-right: 4px;
  color: #f36f25;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.check-toggle+label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat+label {
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

input.check-toggle-round-flat+label:before,
input.check-toggle-round-flat+label:after {
  display: block;
  position: absolute;
  content: '';
}

input.check-toggle-round-flat+label:before {
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

input.check-toggle-round-flat+label:after {
  top: 0px;
  left: -2px;
  bottom: 0px;
  width: 40px;
  background-color: #f36f25;
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

input.check-toggle-round-flat:checked+label {}

input.check-toggle-round-flat:checked+label:after {
  margin-left: 38px;
}

.nav-link {
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.btn-lang span {
  color: #f35b1f !important;
}

.btn-lang {
  background: #ffffff;

  border: 1px solid rgba(243, 91, 31, 0.2);
  border-radius: 20px;
  line-height: 0.5 !important;
  position: relative;
  padding: 1px 10px 0px 0px;
}

.nav-sp {
  height: 78px;
}

.navbar {
  padding-top: 3px;
  padding-bottom: 3px;
  background: #fff;
  box-shadow: 0px 0px 0px 0px rgba(17, 24, 39, 0.1),
    0px 1px 2px 0px rgba(17, 24, 39, 0.1),
    0px 4px 4px 0px rgba(17, 24, 39, 0.09),
    0px 10px 6px 0px rgba(17, 24, 39, 0.05),
    0px 18px 7px 0px rgba(17, 24, 39, 0.01),
    0px 27px 8px 0px rgba(17, 24, 39, 0), 0px 0px 1px 0px rgba(17, 24, 39, 0.3);
}

.nav-link {
  font-size: 24px;
  color: #09193a !important;
}

.hover-manu a p:hover {
  color: #f38100 !important;
  font-weight: 700;
}

.hover-manu a p {
  color: #50151c !important;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
  padding-bottom: 5px !important;
  margin-bottom: 10px !important;
}

.hover-manu a p:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  background: #f38100;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

.hover-manu a p:hover:after {
  width: 100%;
}

.menu-bar li:hover div {
  color: #ffffff !important;
  border: 0;
}

/* Extra small devices (phones, 525px and down) */
@media only screen and (max-width: 525px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .sellsuki-logo {
    margin-right: 0px;
    margin-top: 0px;
  }

  .margin-menu {
    padding-right: 12px;
    padding-left: 12px;
  }

  .navbar-nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .sellsuki-logo {
    margin-right: 0px;
    margin-top: 0px;
  }

  .margin-menu {
    padding-right: 12px;
    padding-left: 12px;
  }

  .navbar-nav {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .sellsuki-logo {
    margin-right: 65px;
    margin-top: 0px;
  }

  .margin-menu {
    padding-right: 12px;
    padding-left: 12px;
  }
}

header {
  background-color: #262626;
}

.btn-account {
  background-color: #32a9ff;
  width: 100%;
  color: #fff;
  font-size: 24px;
  border-radius: 8px;
}

.opct-02 {
  opacity: 0.5 !important;
}

/* need a solution for the next 2 properties */
li {
  list-style: none;
}

a {
  text-decoration: none;
}

ol,
ul {
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

.active-lang {
  background: #f6ece0;
  color: #50151c !important;
  font-weight: bold !important;
}

.nav-bar {
  min-height: 64px;
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
  box-shadow: 0 0 0 0 rgba(17, 24, 39, 0.1), 0 1px 2px 0 rgba(17, 24, 39, 0.1),
    0 4px 4px 0 rgba(17, 24, 39, 0.09), 0 10px 6px 0 rgba(17, 24, 39, 0.05),
    0 18px 7px 0 rgba(17, 24, 39, 0.01), 0 27px 8px 0 rgba(17, 24, 39, 0),
    0 0 1px 0 rgba(17, 24, 39, 0.3);
}

.nav-branding {
  font-size: 2rem;
  font-weight: 600;
  transition: color 500ms ease;
}

.nav-branding:hover,
.nav-branding:focus {
  color: dodgerblue;
}

.nav-menu {
  position: fixed;
  left: -100%;
  top: 0;
  flex-direction: column;
  background-color: #03193c;
  width: 100%;
  height: 100%;
  transition: 750ms;
  z-index: 9999;
  margin-top: 0;
}

.nav-menu.active {
  left: 0;
}

.navbar-brand {
  font-size: 24px !important;
  color: #fff !important;
}

.nav-link {
  transition: 400ms ease;
}

.hamburger {
  cursor: pointer;
  z-index: 9999;
  margin-top: 5px;
}

.bar {
  display: block;
  background-color: #212529;
  width: 24px;
  /* The following 2 properties are essential in creating the "X" when the hamburger is clicked. If you change just 1 of the 2, then you need to find the proper combination for the other one */
  height: 2px;
  margin: 6px auto;

  /*    -webkit-transition: all 300ms ease;  */
  transition: all 300ms ease-in-out;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: #fff;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: #fff;
}

.switch {
  position: relative;
  display: inline-block;
}

.switch>span {
  position: absolute;
  top: -3px;
  pointer-events: none;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  width: 50%;
  text-align: center;
}

input.check-toggle-round-flat:checked~.off {
  color: #fff;
}

input.check-toggle-round-flat:checked~.on {
  color: #fff;
}

.switch {
  border: 1px solid #f35b1f80;
  border-radius: 16px;
}

.switch>span.on {
  left: 0;
  padding-left: 0px;
  color: #fff;
}

.switch>span.off {
  right: 0;
  padding-right: 4px;
  color: #fff;
}

.check-toggle {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.check-toggle+label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input.check-toggle-round-flat+label {
  padding: 2px;
  width: 77px;
  height: 25px;
  background-color: #03193c;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:before,
input.check-toggle-round-flat+label:after {
  display: block;
  position: absolute;
  content: '';
}

input.check-toggle-round-flat+label:before {
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: #03193c;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  -ms-border-radius: 60px;
  -o-border-radius: 60px;
  border-radius: 60px;
}

input.check-toggle-round-flat+label:after {
  top: 0px;
  left: -2px;
  bottom: 0px;
  width: 40px;
  background-color: #f36f25;
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

input.check-toggle-round-flat:checked+label {}

input.check-toggle-round-flat:checked+label:after {
  margin-left: 38px;
}

@media (min-width: 1200px) {
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
</style>