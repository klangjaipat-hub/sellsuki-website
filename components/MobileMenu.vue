<template>
  <transition name="slide">
    <div
      v-if="visible"
      class="offcanvas show"
      tabindex="-1"
      style="visibility: visible; width: 100%; height: 100vh; background: white; position: fixed; top: 0; left: 0; z-index: 1050;"
    >
      <!-- Header -->
      <div class="offcanvas-header border-bottom">
        <img src="~/assets/mobile/Logo with system__.png" alt="Sellsuki" height="44" style="margin-left: -10px;"/>
        <button type="button" class="btn-close text-reset" @click="$emit('close')"></button>
      </div>

      <!-- Body -->
      <div class="offcanvas-body overflow-auto p-4 color-1F2937">
        <ul class="list-unstyled">

          <!-- Software -->
          <li>
            <div
              class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2"
            >
              Software
              <img @click="toggle('Software')" v-if="isOpen.Software" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
              <img @click="toggle('Software')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
            </div>
            <transition name="slide-toggle">
                <ul v-show="isOpen.Software" class="ps-4">

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <nuxt-link @click.native="$emit('close')" to="/solutions/akita" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">Akita</p>
                                <span class="text-s-20 font-df color-9CA3AF">บริการคลังสินค้าครบวงจร</span>
                            </nuxt-link> 
                            <img @click="toggle('Akita')" v-if="isOpen.Akita" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
                            <img @click="toggle('Akita')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
                        </div>
                        <transition name="slide-toggle">
                        <ul v-show="isOpen.Akita" class="ps-4">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">บริการคลังสินค้า</p>
                                <span class="text-s-20 font-df color-9CA3AF">บริการพื้นที่จัดเก็บสินค้า แบบปิดสนิทรอบอาคาร</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">บริการแพ็คสินค้า</p>
                                <span class="text-s-20 font-df color-9CA3AF">หยิบ-แพ็ค อย่างรวด เร็ว แม่นยำ ด้วยระบบตรวจสอบ</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">บริการส่งสินค้า</p>
                                <span class="text-s-20 font-df color-9CA3AF">ส่งมอบทุกออเดอร์ถึงมือลูกค้า ด้วยอัตราค่าบริการสุดพิเศษ</span>
                            </li>
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">ระบบคลังสินค้า</p>
                                <span class="text-s-20 font-df color-9CA3AF">จัดการสต๊อกสินค้าอย่างเป็นระบบ โดยระบบ WMS</span>
                            </li>
                        </ul>
                        </transition>
                    </li>

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <a @click="$emit('close')" target="_blank" rel="noopener" href="https://patona.online/" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">Patona</p>
                                <span class="text-s-20 font-df color-9CA3AF">เครื่องมือการจัดการออเดอร์ ช่วยให้ผู้ขายสามารถ <br/>บริหารจัดการ คำสั่งซื้อได้อย่างมีประสิทธิภาพ</span>
                            </a> 
                            <img @click="toggle('Patona')" v-if="isOpen.Patona" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
                            <img @click="toggle('Patona')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
                        </div>
                        <transition name="slide-toggle">
                        <ul v-show="isOpen.Patona" class="ps-4">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">ผลิตภัณฑ์และบริการ</p>
                                <span class="text-s-20 font-df color-9CA3AF">จัดการข้อมูล เพื่อรองรับการขายในหลายช่องทาง</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">คำสั่งขาย</p>
                                <span class="text-s-20 font-df color-9CA3AF">ควบคุมทุกขั้นตอนของคำสั่งซื้อให้เป็นระบบ</span>
                            </li>
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">การจัดการลูกค้า</p>
                                <span class="text-s-20 font-df color-9CA3AF">ดูแลข้อมูลลูกค้า ติดตามประวัติการสั่งซื้อ</span>
                            </li>
                        </ul>
                        </transition>
                    </li>

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <nuxt-link @click.native="$emit('close')" to="/solutions/oc2plus" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">Oc2plus</p>
                                <span class="text-s-20 font-df color-9CA3AF">เครื่องมือการจัดการออเดอร์ ช่วยให้ผู้ขายสามารถ <br/>บริหารจัดการ คำสั่งซื้อได้อย่างมีประสิทธิภาพ</span>
                            </nuxt-link> 
                            <img @click="toggle('Oc2plus')" v-if="isOpen.Oc2plus" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
                            <img @click="toggle('Oc2plus')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
                        </div>
                        <transition name="slide-toggle">
                        <ul v-show="isOpen.Oc2plus" class="ps-4">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">ระบบสมาชิก</p>
                                <span class="text-s-20 font-df color-9CA3AF">สร้างความเข้าใจลูกค้าทุกคนอย่างลึกซึ้ง</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">ระบบสะสมแต้ม</p>
                                <span class="text-s-20 font-df color-9CA3AF">สร้างสภาพแวดล้อมเฉพาะแบรนด์ด้วยหน่วยแต้มที่ไม่เหมือนใคร</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">ระบบแลกเปลี่ยน</p>
                                <span class="text-s-20 font-df color-9CA3AF">จัดการ CRM ได้แบบไม่จำกัด ด้วยการแลกเปลี่ยนที่หลากหลาย</span>
                            </li>
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">ระบบส่งข้อความ</p>
                                <span class="text-s-20 font-df color-9CA3AF">จัดการข้อความแบบกลุ่ม</span>
                            </li>
                        </ul>
                        </transition>
                    </li>

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <nuxt-link @click.native="$emit('close'), pushMenuGTM('click_martech_form_new_menu')" to="/solutions/wizemoves/martech" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">MarTech</p>
                                <span class="text-s-20 font-df color-9CA3AF">เครื่องมือทางการตลาด เพิ่มยอดขายให้คุณ</span>
                            </nuxt-link> 
                        </div>
                    </li>

                </ul>
            </transition>
          </li>

          <!-- Business -->
          <li>
            <div
              class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2"
            >
              Business
              <img @click="toggle('Business')" v-if="isOpen.Business" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
              <img @click="toggle('Business')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
            </div>
            <transition name="slide-toggle">
                <ul v-show="isOpen.Business" class="ps-4">

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <nuxt-link @click.native="$emit('close')" to="/solutions/wizemoves" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">Business Solutions</p>
                                <span class="text-s-20 font-df color-9CA3AF">Wizemoves</span>
                            </nuxt-link> 
                            <img @click="toggle('BusinessSolutions')" v-if="isOpen.BusinessSolutions" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
                            <img @click="toggle('BusinessSolutions')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
                        </div>
                        <transition name="slide-toggle">
                        <ul v-show="isOpen.BusinessSolutions" class="ps-4">
                          <nuxt-link @click.native="$emit('close')" to="/solutions/wizemoves/business-consulting" class="text-decoration-none w-100">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">Business Consulting</p>
                                <span class="text-s-20 font-df color-9CA3AF">ที่ปรึกษาทางธุรกิจ ผู้ช่วยวางแผนกลยุทธ์การตลาด</span>
                            </li>
                          </nuxt-link>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">Digital Advertising</p>
                                <span class="text-s-20 font-df color-9CA3AF">รับทำโฆษณาออนไลน์บน Social Media ทุกแพลตฟอร์ม</span>
                            </li>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">Content Marketing</p>
                                <span class="text-s-20 font-df color-9CA3AF">ผู้เชี่ยวชาญในด้านการทำ Content Marketing</span>
                            </li>
                            <nuxt-link @click.native="$emit('close')" to="/solutions/wizemoves/edis" class="text-decoration-none w-100">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">e-Distributor</p>
                                <span class="text-s-20 font-df color-9CA3AF">บริหารจัดการช่องทางการขายออนไลน์</span>
                            </li>
                            </nuxt-link>
                            <nuxt-link @click.native="$emit('close'), pushMenuGTM('click_martech_form_old_menu')" to="/solutions/wizemoves/martech" class="text-decoration-none w-100">
                              <li class="mt-2 mb-4">
                                  <p class="text-s-24 font-df mb-0">Website Development</p>
                                  <span class="text-s-20 font-df color-9CA3AF">รับพัฒนาเว็บไซต์ครบวงจร</span>
                              </li>
                            </nuxt-link>
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">Data Analytics</p>
                                <span class="text-s-20 font-df color-9CA3AF">รับวิเคราะห์ข้อมูล</span>
                            </li>
                        </ul>
                        </transition>
                    </li>

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency" class="text-decoration-none w-100">
                                <p class="text-s-24 font-df mb-1">LINE Agency</p>
                                <span class="text-s-20 font-df color-9CA3AF">บริการรับทำ LINE OA ครบวงจร By Sellsuki</span>
                            </nuxt-link> 
                            <img @click="toggle('LINEAgency')" v-if="isOpen.LINEAgency" class="pe-2" src="~/assets/mobile/chevron-up.png" alt="chevron-down" />
                            <img @click="toggle('LINEAgency')" v-else class="pe-2" src="~/assets/mobile/chevron-down.png" alt="chevron-down" />
                        </div>
                        <transition name="slide-toggle">
                        <ul v-show="isOpen.LINEAgency" class="ps-4">
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-oa" class="text-decoration-none w-100">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">LINE OA</p>
                                <span class="text-s-20 font-df color-9CA3AF">ที่ปรึกษาทางธุรกิจ ผู้ช่วยวางแผนกลยุทธ์การตลาด</span>
                            </li>
                          </nuxt-link>
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-oa-corporate" class="text-decoration-none w-100">
                            <li class="mt-2 mb-4">
                                <p class="text-s-24 font-df mb-0">LINE OA Corporate</p>
                                <span class="text-s-20 font-df color-9CA3AF">รับทำโฆษณาออนไลน์บน Social Media ทุกแพลตฟอร์ม</span>
                            </li>
                          </nuxt-link>
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-smart-channel" class="text-decoration-none w-100">
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">LINE Smart Channel</p>
                                <span class="text-s-20 font-df color-9CA3AF">ผู้เชี่ยวชาญในด้านการทำ Content Marketing</span>
                            </li>
                          </nuxt-link>
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-today" class="text-decoration-none w-100">
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">LINE Today</p>
                                <span class="text-s-20 font-df color-9CA3AF">บริหารจัดการช่องทางการขายออนไลน์</span> 
                            </li>
                          </nuxt-link>
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-sponsored-sticker" class="text-decoration-none w-100">
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">LINE Sponsored Sticker</p>
                                <span class="text-s-20 font-df color-9CA3AF">รับพัฒนาเว็บไซต์ครบวงจร</span>
                            </li>
                          </nuxt-link>
                          <nuxt-link @click.native="$emit('close')" to="/solutions/lineagency/line-my-customer" class="text-decoration-none w-100">
                            <li class="mt-2 mb-2">
                                <p class="text-s-24 font-df mb-0">My Customer | CRM</p>
                                <span class="text-s-20 font-df color-9CA3AF">รับวิเคราะห์ข้อมูล</span>
                            </li>
                          </nuxt-link>
                        </ul>
                        </transition>
                    </li>

                    <li>
                        <div
                            class="w-100 text-start fw-semibold d-flex justify-content-between align-items-center py-2"
                        >
                            <div class="text-decoration-none w-100">
                                <span class="text-s-24 font-df mb-1">SukiSpace</span> <span class="ms-2 mb-1 btn-coming-soom">Coming soon</span>
                                <p class="text-s-20 font-df color-9CA3AF mb-0">ผู้แนะนำเครื่องมือทางธุรกิจ</p>
                            </div> 
                        </div>
                    </li>

                </ul>
            </transition>
          </li>
          <!-- <nuxt-link @click.native="$emit('close')" to="/portfolio" class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2"
              >
                ผลงานของเรา
              </div>
            </li>
          </nuxt-link> -->
          <nuxt-link @click.native="$emit('close')" to="/blog" class="text-decoration-none w-100">
            <li>
              <div
                class="w-100 text-start d-flex justify-content-between align-items-center text-s-24 font-df py-2 mb-2"
              >
                บทความที่น่าสนใจ
              </div>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: {
        Software: false,
        Akita: false,
        Patona: false,
        Oc2plus: false,
        Business: false,
        BusinessSolutions: false,
        LINEAgency: false
      }
    };
  },
  created() {
    // รีเซ็ตทุก menu เป็น false เมื่อ component ถูกสร้าง
    Object.keys(this.isOpen).forEach(key => {
      this.isOpen[key] = false;
    });
  },
  watch: {
    // รีเซ็ตทุก menu เป็น false เมื่อ visible เปลี่ยน
    visible(newVal) {
      if (newVal) {
        Object.keys(this.isOpen).forEach(key => {
          this.isOpen[key] = false;
        });
      }
    }
  },
  methods: {
    toggle(menu) {
      this.isOpen[menu] = !this.isOpen[menu];
    },
    pushMenuGTM(solution) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: solution,
        page_type: 'menu'
      })
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide up/down with max-height */
.slide-toggle-enter-active,
.slide-toggle-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-toggle-enter,
.slide-toggle-leave-to {
  max-height: 0;
  opacity: 0;
}

.slide-toggle-enter-to,
.slide-toggle-leave {
  max-height: 500px; /* ปรับตามความสูงของเนื้อหา */
  opacity: 1;
}

.text-s-24{
    line-height: 24px;
}

.text-s-20{
    line-height: 20px;
}

a{
    color: inherit;
    text-decoration: none;
}

li {
  padding: 0px !important;
}

.offcanvas-header{
  padding: 10px 1.5em;
}

.btn-coming-soom{
  background-color: #FFFBEB;
  border: 1px solid #FEF3C7;
  padding: 0px 8px;
  color: #D97706;
  font-size: 18px;
  font-weight: 500;
  border-radius: 16px;
}
</style>
