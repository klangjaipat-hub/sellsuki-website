<template>
  <section class="padding-section">
    <div class="container">
      <div class="row d-md-flex d-none">
        <div class="col-12 text-center">
          <div class="m-auto text-section text-center mb-4 pt-1">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">FAQs</span>
          </div>
        </div>
        <div class="col-5 mt-5">
          <p class="text-s-60 font-bd color-1F2937 mt-2 mb-0">คำถามที่พบบ่อยเกี่ยวกับ <br />WizeMoves Ads</p>
        </div>
        <div class="col-7 mt-5">
          <div class="accordion" id="accordionQuestion">
            <div class="accordion-item" v-for="(item, idx) in questions" :key="idx">
              <h2 class="accordion-header" :id="`heading${idx}`">
                <button class="accordion-button text-s-28 font-md" :class="{ collapsed: idx !== 0 }" type="button"
                  data-bs-toggle="collapse" :data-bs-target="`#collapse${idx}`"
                  :aria-expanded="idx === 0 ? 'true' : 'false'" :aria-controls="`collapse${idx}`">
                  {{ item.q }}
                </button>
              </h2>
              <div :id="`collapse${idx}`" class="accordion-collapse collapse" :class="{ show: idx === 0 }"
                :aria-labelledby="`heading${idx}`" data-bs-parent="#accordionQuestion">
                <div class="accordion-body pt-0">
                  <p class="text-s-24 font-df color-6B7280 mb-0" v-html="item.a">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-block d-md-none">
        <div class="col-12 text-center">
          <div class="m-auto text-section text-center mb-4 pt-1">
            <span class="text-ranbow text-s-24 font-bd m-0 p-1">FAQs</span>
          </div>
        </div>
        <div class="col-12 text-center">
          <p class="text-s-60 font-bd color-1F2937 mt-2 mb-0">คำถามที่พบบ่อยเกี่ยวกับ <br />WizeMoves Ads</p>
        </div>
        <div class="col-12">
          <div class="accordion mt-md-5 mt-4" id="accordionQuestionMobile">
            <div class="accordion-item" v-for="(item, idx) in questions" :key="'mobile-' + idx">
              <h2 class="accordion-header" :id="`headingMobile${idx}`">
                <button class="accordion-button text-s-28 font-md" :class="{ collapsed: idx !== 0 }" type="button"
                  data-bs-toggle="collapse" :data-bs-target="`#collapseMobile${idx}`"
                  :aria-expanded="idx === 0 ? 'true' : 'false'" :aria-controls="`collapseMobile${idx}`">
                  {{ item.q }}
                </button>
              </h2>
              <div :id="`collapseMobile${idx}`" class="accordion-collapse collapse" :class="{ show: idx === 0 }"
                :aria-labelledby="`headingMobile${idx}`" data-bs-parent="#accordionQuestionMobile">
                <div class="accordion-body pt-0">
                  <p class="text-s-24 font-df color-6B7280 mb-0" v-html="item.a"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          q: 'ถ้าเราเป็นแค่ SME เราจะต่อกรกับคู่แข่งรายใหญ่ได้ยังไง?',
          a: 'คุณไม่จำเป็นต้องเป็น “ยักษ์ใหญ่” เพื่อชนะในตลาดแค่คุณมี กลยุทธ์ที่เฉียบคมและเหมาะกับคุณจริงๆ ซึ่งนั่นหมายถึงการวางแผนที่อิงจากตัวตน จุดแข็ง และทรัพยากรที่คุณมีอยู่จริง ไม่ใช่การลอกสูตรจากคนอื่น แต่เป็นกลยุทธ์ที่ “ใช่” สำหรับธุรกิจของคุณโดยเฉพาะ สำหรับกลยุทธ์ที่ว่านี้ต้องสามารถพาคุณเติบโตอย่างมีทิศทาง และแข่งขันได้แม้ในสนามที่มีผู้เล่นรายใหญ่<br/>ซึ่ง Sellsuki สามารถช่วยคุณวางแผนการตลาดโดยใช้จุดแข็งของ SME อย่าง “ความเร็ว ความยืดหยุ่น และความจริงใจ” เข้าสู้ พร้อมทั้งดึงเครื่องมือการตลาดและมีทีมงานคุณภาพมาช่วยเสริมพลังให้คุณแข็งแกร่งแบบยักษ์ใหญ่แต่ลงทุนน้อยกว่า เราไม่ได้แค่ช่วยคุณขาย แต่เราช่วยคุณ ยืนหนึ่งในกลุ่มเป้าหมายของคุณจริงๆ'
        },
        {
          q: 'อยากโตแบบยั่งยืน ไม่อยากแค่ปังแค่คืนเดียว ควรทำยังไงดี?',
          a: '"แผนการตลาดที่ดี ไม่ใช่แค่สวยหรู แต่ต้องพิสูจน์ได้ด้วยตัวเลข แต่ต้องวัดผลได้จริงด้วยตัวเลข"<br/>ดังนั้นแผนการตลาดที่ดีต้องกำหนดเป้าหมายที่ชัดเจน ระบุกลุ่มเป้าหมายอย่างแม่นยำ <br/>พร้อมวางกลยุทธ์ที่สร้างสรรค์และเหมาะสม อีกทั้งดำเนินการอย่างมีประสิทธิภาพ และสามารถวัดผลลัพธ์ได้จริงเพื่อปรับปรุงอย่างต่อเนื่อง<br/>Sellsuki ใช้เครื่องมือวิเคราะห์แบบเรียลไทม์ ช่วยติดตามว่ายอดขายมาจากตรงไหน งบแต่ละบาททำงานมีที่มาที่ไปยังไง และจะปรับปรุงตรงไหนให้ดีขึ้นได้ เราไม่มีทางปล่อยให้แบรนด์ของคุณเดินตามแผนลอยๆ แต่เราพร้อมที่จะ “ก้าวเดินไปพร้อมกับแบรนด์ของคุณ” แบบมีข้อมูลรองรับและพร้อมปรับให้ทันทุกการเปลี่ยนแปลง'
        },
        {
          q: 'ตั้งราคาขายยังไงดี? ให้ลูกค้ายอมซื้อ แต่แบรนด์ไม่ขาดทุน?',
          a: 'การตั้งราคาที่ดีไม่ใช่แค่ “ถูก” หรือ “แพง” แต่คือการทำให้ลูกค้า รู้สึกว่าคุ้ม<br/>การตั้งราคาควรเริ่มจากเข้าใจว่า “ลูกค้าตัดสินใจซื้อจากอะไร” บางคนต้องการประหยัด บางคนต้องการความพรีเมียม และบางคนซื้อเพราะ เรื่องราวหรือคุณค่า จากนั้นแบรนด์จึงค่อยวิเคราะห์ต้นทุน กำไรที่ต้องการ และเปรียบเทียบกับราคาของคู่แข่งในตลาด รวมถึงพฤติกรรมของลูกค้าเป้าหมาย เพื่อหาจุดสมดุลระหว่างความคุ้มค่าสำหรับลูกค้า และรายได้ที่ธุรกิจสามารถเติบโตได้จริง<br/>Sellsuki จะช่วยคุณวิเคราะห์ต้นทุน กำไร คู่แข่ง และพฤติกรรมผู้บริโภค แล้วคำนวณราคาที่เหมาะสมทั้งในมุมของความคุ้มค่าของลูกค้าที่จะซื้อสินค้าของคุณ และกระแสเงินสดของแบรนด์คุณ พร้อมเสนอวิธีทำโปรโมชั่นให้ดูน่าสนใจโดยไม่ต้องลดราคาเสมอไป เพราะบางครั้งสิ่งที่ทำให้ลูกค้าตัดสินใจซื้อไม่ใช่ราคา...แต่คือ “คุณค่าที่พวกเขารู้สึกได้”'
        },
        {
          q: 'ถ้าเพิ่งเริ่มขายออนไลน์ ยังไม่มีคนรู้จัก จะเริ่มยังไงให้มียอด?',
          a: 'คุณไม่จำเป็นต้อง “ดังมาก่อน” ถึงจะขายได้ แต่สิ่งที่คุณต้องมีคือ “จุดยืนที่ชัด และวิธีสื่อสารที่โดนใจกลุ่มเป้าหมายและว่าที่ลูกค้าของคุณ”<br/>เริ่มจากเข้าใจว่าแบรนด์ของคุณ ต้องการเป็นที่จดจำแบบไหน และ ใครคือลูกค้าที่คุณอยากให้จำคุณได้ จากนั้นค่อยวางเนื้อหา แนวทางการสื่อสาร และภาพลักษณ์ให้สอดคล้องกันบนทุกช่องทาง เพราะแบรนด์ที่แข็งแกร่งและคนจดจำได้ จะสามารถสร้างยอดขายได้โดยไม่ต้องพึ่งพาการลดราคา<br/>Sellsuki สามารถช่วยคุณสร้างแบรนด์ให้ดูน่าเชื่อถือได้ตั้งแต่วันแรก เรามีกลยุทธ์ในการวางแผนคอนเทนต์ที่ทำให้คนอยากรู้จัก พร้อมลงโฆษณาให้ตรงกลุ่มเป้าหมาย เพิ่มยอดโดยไม่ต้องเผางบ เพราะเราไม่ได้จะช่วยคุณแค่ "ยิงแอดแล้วจบ" แต่เราจะช่วยคุณ "สร้างความผูกพัน" ให้ลูกค้าของคุณจดจำแบรนด์คุณในทางที่ดีและกลับมาซื้อซ้ำอย่างต่อเนื่อง'
        },
        {
          q: 'จะรู้ได้ยังไงว่าแผนการตลาดของเราดีจริง?',
          a: '"แผนการตลาดที่ดี ไม่ใช่แค่สวยหรู แต่ต้องพิสูจน์ได้ด้วยตัวเลข แต่ต้องวัดผลได้จริงด้วยตัวเลข"<br/>ดังนั้นแผนการตลาดที่ดีต้องกำหนดเป้าหมายที่ชัดเจน ระบุกลุ่มเป้าหมายอย่างแม่นยำ พร้อมวางกลยุทธ์ที่สร้างสรรค์และเหมาะสม ดำเนินการอย่างมีประสิทธิภาพ และสามารถวัดผลลัพธ์ได้จริงเพื่อปรับปรุงอย่างต่อเนื่อง<br/>Sellsuki ใช้เครื่องมือวิเคราะห์แบบเรียลไทม์ ช่วยติดตามว่ายอดขายมาจากตรงไหน งบแต่ละบาททำงานมีที่มาที่ไปยังไง และจะปรับปรุงตรงไหนให้ดีขึ้นได้ เราไม่มีทางปล่อยให้แบรนด์ของคุณเดินตามแผนลอยๆ แต่เราพร้อมที่จะ “ก้าวเดินไปพร้อมกับแบรนด์ของคุณ” แบบมีข้อมูลรองรับและพร้อมปรับให้ทันทุกการเปลี่ยนแปลง'
        },
        {
          q: 'ยิงแอดไปเยอะแล้ว แต่ทำไมยังไม่มียอดขายกลับมีสักที?',
          a: 'การยิงแอดก็เหมือนการเปิดไมค์ในห้องใหญ่ ถ้าสื่อสารได้ไม่โดนใจ หรือสื่อสารกับคนผิดกลุ่ม ยังไงก็ไม่มีใครฟัง<br/>การยิงแอดที่ดี ไม่ใช่แค่ลงเงินให้ระบบทำงาน แต่คือการวางแผนทุกจุดให้สอดประสานกัน ต้องรู้ว่าใครคือลูกค้าเป้าหมายจริงๆ พูดกับเขาด้วยภาษาที่เขาอยากฟัง ผ่านการใช้ภาพหรือวิดีโอที่ดึงดูดในเสี้ยววินาที และส่งเขาไปยังหน้าที่มีโอกาสซื้อสูงสุด<br/>Sellsuki จะช่วยคุณวิเคราะห์ให้ครบทั้ง กลุ่มเป้าหมาย ข้อความโฆษณา ครีเอทีฟ และหน้าเพจปลายทาง เพื่อให้ทุกขั้นตอนต่อกันเป็นสายพานที่พาลูกค้าไปสู่ยอดขาย ไม่ใช่แค่ยิงแอด แต่ “ยิงอย่างมีแผนและมียอดกลับมาสู่อ้อมอกของแบรนด์คุณจริงๆ”'
        },
        {
          q: 'ควรขายบนช่องทางไหนบ้าง? จำเป็นต้องมีครบทุกแพลตฟอร์มหรือเปล่า?',
          a: 'ไม่จำเป็นต้องอยู่ทุกที่...แต่อยู่ให้ถูกที่ดีกว่า<br/>ในโลกออนไลน์ ไม่ใช่ทุกแพลตฟอร์มจะเหมาะกับแบรนด์ของคุณ และไม่ใช่ทุกกลุ่มเป้าหมายจะกระจายตัวอยู่ทั่วทุกที่ สิ่งสำคัญคือการรู้ว่า<br/>ลูกค้าของคุณ “อยู่ที่ไหน ใช้แพลตฟอร์มไหน และตัดสินใจซื้อจากตรงไหน” เพราะฉะนั้นควรวางกลยุทธ์ให้แม่นยำตั้งแต่ต้นทาง เพราะจะช่วยให้ทุกบาทที่คุณลงทุนไปไม่เสียเปล่า และได้ผลลัพธ์ที่คุ้มค่า<br/>Sellsuki จะช่วยคุณวิเคราะห์และเลือกช่องทางที่เหมาะสมกับแบรนด์ของคุณที่สุด จากนั้นวางแผนการขาย การตลาด และโฆษณาให้ “ถูกคน ถูกที่ ถูกจังหวะ” ไม่เปลืองแรง ไม่เปลืองงบ แต่ได้ยอดจริงเพราะบางทีในโลกของธุรกิจ การที่ "แม่นยำแต่ตรงเป้า" ย่อมชนะ "กระจายแต่ไร้ทิศทาง"'
        },
      ]
    }
  }
}
</script>

<style scoped>
.text-ranbow,
.text-ranbow>* {
  background: linear-gradient(51.93deg, #8B5CF6 -8.45%, #FACC15 113.97%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 30px;
}

.text-section {
  padding-left: 12px;
  padding-right: 12px;
  display: inline-block;
  width: auto;
  border: 1px solid #00000008;
  backdrop-filter: blur(10px);
  border-radius: 32px;
  background: #fff;
}

.card {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 34.05%), linear-gradient(0deg, #A1CFE6, #A1CFE6);
  border-radius: 16px;
}

.card-body {
  padding: 24px;
  padding-bottom: 0px;
}

.img-pd {
  padding-left: 75px;
  padding-right: 75px;
}

.accordion-item {
  margin-bottom: 24px;
  border: 1px solid #00000008;
  border-radius: 8px;
  box-shadow: 0px 0px 0px 0px #1118270d, 0px 0px 1px 0px #1118270d,
    0px 1px 1px 0px #1118270a, 0px 3px 2px 0px #11182705,
    0px 6px 2px 0px #11182700, 0px 9px 3px 0px #11182700;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.accordion-button:not(.collapsed) {
  color: #1f2937;
  background-color: #ffffff;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236B7280' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-size: 16px 16px;
  /* ปรับขนาดตามต้องการ */
  width: 16px;
  height: 16px;
}

.accordion-button:focus {
  box-shadow: none;
  outline: none;
}

.accordion-button {
  line-height: 22px;
}

.accordion-button {
  border-bottom: none !important;
  box-shadow: none !important;
}

.accordion-body p {
  width: 95%;
}

.accordion-body li {
  width: 95%;
}

.list-dot {
  list-style: none;
  padding-left: 0;
  margin-left: 14px;
  margin-bottom: 0;
}

.list-dot li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 12px;
  padding-top: 1px !important;
  padding-bottom: 1px !important;
  display: flex;
  align-items: flex-start;
  /* เปลี่ยนจาก center เป็น flex-start */
}

.list-dot li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 13px;
  /* ขยับ dot ลงมาให้กลางบรรทัดแรก */
  width: 5px;
  height: 5px;
  background: #6b7280;
  border-radius: 50%;
  transform: translateY(-50%);
}

@media (max-width: 767px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .text-s-60 {
    font-size: 36px !important;
    line-height: 36px !important;
  }

  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-24 {
    font-size: 18px !important;
    line-height: 18px !important;
  }

  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }

  .accordion-item {
    margin-bottom: 16px;
  }

  .padding-section {
    padding-top: 60px !important;
    padding-bottom: 40px !important;
  }
}

@media (min-width: 768px) {
  .p-spacing {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .text-s-60 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-44 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px !important;
  }

  .text-s-24 {
    font-size: 18px !important;
    line-height: 18px !important;
  }

  .text-s-18 {
    font-size: 16px !important;
    line-height: 16px !important;
  }

  .accordion-item {
    margin-bottom: 16px;
  }

  .padding-section {
    padding-top: 80px !important;
  }
}

@media (min-width: 1200px) {
  .p-spacing {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .text-s-60 {
    font-size: 60px !important;
    line-height: 60px !important;
  }

  .text-s-44 {
    font-size: 44px !important;
    line-height: 44px !important;
  }

  .text-s-28 {
    font-size: 28px !important;
    line-height: 28px !important;
  }

  .text-s-24 {
    font-size: 24px !important;
    line-height: 24px !important;
  }

  .text-s-18 {
    font-size: 18px !important;
    line-height: 18px !important;
  }

  .accordion-item {
    margin-bottom: 24px;
  }

  .padding-section {
    padding-top: 120px !important;
  }
}
</style>