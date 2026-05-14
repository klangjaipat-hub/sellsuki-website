<template>
  <div>
    <p class="text-s-28 text-w-400 color-6B7280">
      กรุณากรอกข้อมูลลงในแบบฟอร์มเพื่อขอรับคำปรึกษาฟรี<br />
      พร้อมรับ Promotion พิเศษ!
    </p>
    <div class="row">
      <div class="col-12">
        <form method="post" autocomplete="off" name="hello-sheet" v-on:submit.prevent="submitForm">
          <div class="row">
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">ชื่อ - นามสกุล<span
                  class="text-danger">*</span></label>
              <input type="text" class="form-control" placeholder="กรอกชื่อ - นามสกุล" :class="{
                'border border-danger': validate && !form.name,
              }" v-model="form.name" id="name" name="name" />
              <div v-if="validate">
                <p v-if="!form.name || form.name.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                  โปรดระบุชื่อของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">Email<span
                  class="text-danger">*</span></label>
              <input type="email" class="form-control" placeholder="กรอกอีเมล" :class="{
                'border border-danger': validate && !form.email,
              }" v-model="form.email" id="email" name="email" />
              <div v-if="validate">
                <p v-if="!form.email || form.email.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                  โปรดระบุ E-mail ของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">เบอร์โทร<span
                  class="text-danger">*</span></label>
              <input type="tel" pattern="[0-9]{10}" maxlength="10" class="form-control" placeholder="กรอกเบอร์โทรศัพท์"
                :class="{
                  'border border-danger': validate && !form.phone,
                }" v-model="form.phone" id="phone" name="phone" />
              <div v-if="validate">
                <p v-if="!form.phone || form.phone.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                  โปรดระบุเบอร์โทรของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">เว็บไซต์ หรือ Facebook
                Page</label>
              <input type="text" class="form-control" placeholder="กรอกเว็บไซต์ หรือ Facebook Page" v-model="form.brand"
                id="brand" name="brand" />
            </div>
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">เลือกความต้องการ<span
                  class="text-danger">*</span></label>
              <select class="form-select" :class="{
                'border border-danger': validate && !form.interested,
              }" v-model="form.interested" id="interested" name="interested">
                <option value="" disabled selected>เลือกลักษณะธุรกิจ</option>
                <option value="WizemovesAdvertising">
                  บริการ Online Advertising
                </option>
                <option value="LINEAgency">
                  บริการ LINE Agency ครบวงจร
                </option>
                <option value="WizemovesMartech">
                  บริการ MarTech Solution
                </option>
                <option value="WizemovesContent">
                  บริการ Content Marketing
                </option>
                <option value="WizemovesEdis">
                  e-commerce solution (e-Dis)
                </option>
                <option value="WizemovesConsult">
                  บริการ Business Consulting
                </option>
                <option value="WizemovesInfluence">
                  บริการ Influencer Marketing
                </option>
                <option value="WizemovesData">
                  บริการ Data Analysis
                </option>
                <option value="Oc2plus">
                  บริการระบบ CRM เพื่อธุรกิจยุคใหม่
                </option>
                <option value="Akita">
                  บริการ Fulfillment เก็บ แพ็ก ส่ง
                </option>
                <option value="Patona">
                  บริการระบบจัดการร้านค้าครบวงจร
                </option>
              </select>
              <div v-if="validate">
                <p v-if="!form.interested || form.interested.startsWith(' ')"
                  class="text-danger mb-0 text-s-24 line-height-24 text-w-500">
                  โปรดระบุลักษณะธุรกิจของคุณให้ถูกต้อง
                </p>
              </div>
            </div>
            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
              <label class="text-s-24 line-height-24 text-w-500" style="color: #373737">งบประมาณต่อเดือน</label>
              <input type="text" class="form-control" placeholder="กรอกงบประมาณต่อเดือน" v-model="form.budget"
                id="budget" name="budget" />
            </div>
          </div>
          <div class="form-group mt-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="form.acceptPolicy" id="acceptPolicy" />
              <label class="form-check-label text-s-24" for="acceptPolicy">
                ข้าพเจ้าได้อ่านและยอมรับ <a href="#" @click.prevent="showPolicyModal">นโยบายความเป็นส่วนตัว</a>
              </label>
            </div>
            <div v-if="validate && !form.acceptPolicy">
              <p class="text-danger text-s-24 mt-1">กรุณายอมรับ Privacy Policy ก่อนส่งข้อมูล</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12">
              <div class="col-12">
                <div class="text-center mt-4">
                  <button v-if="isFormValid" type="submit" class="btn btn-main" data-bs-target="#sussessModal"
                    data-bs-toggle="modal" data-bs-dismiss="modal" data-tag="free-consultation-form-submit-button">
                    <span class="text-white text-w-500 text-s-24">ส่งข้อมูล</span>
                  </button>
                  <button v-else type="submit" class="btn btn-main" data-tag="free-consultation-form-submit-button">
                    <span class="text-white text-w-500 text-s-24">ส่งข้อมูล</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 text-center">
              <p class="text-s-24 color-6B7280 mt-4">
                Sellsuki จะปกป้องข้อมูลและความเป็นส่วนตัวของคุณ<br />
                และติดต่อคุณเฉพาะตามความยิมยอม
                <a class="color-6B7280" href="/policy" target="_blank" rel="noopener">Privacy Policy</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>



    <div class="modal fade" id="policyModal" tabindex="-1" aria-hidden="true" ref="policyModal">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" @click="closePolicyModal"></button>
          </div>
          <div class="modal-body">
            <section>
              <div class="container p-3">
                <h1 class="title2">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h1>

                <div class="text1">
                  <p>
                    บริษัท Sellsuki
                    ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ
                    โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม
                    ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ
                    ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                  </p>
                </div>

                <h1 class="title2">การเก็บรวบรวมข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง
                    ดังต่อไปนี้

                    <br />- การสมัครสมาชิก <br />- อีเมล
                  </p>
                </div>

                <h1 class="title2">ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</h1>
                <div class="text1">
                  <p>
                    <span>ข้อมูลบัญชี</span> เช่น บัญชีผู้ใช้งาน
                    ประวัติการใช้งาน เป็นต้น
                    <br />
                    <span>ข้อมูลทางเทคนิค</span> เช่น IP address, Cookie ID,
                    ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น
                  </p>
                </div>

                <h1 class="title2">ผู้เยาว์</h1>
                <div class="text1">
                  <p>
                    หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย
                    เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                    เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้
                    หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง
                    เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา
                  </p>
                </div>

                <h1 class="title2">วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์<br />
                    เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้<br />
                    - ผู้ให้บริการเซิร์ฟเวอร์ในประเทศไทย
                  </p>
                </div>

                <h1 class="title2">การประมวลผลข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    เราจะเก็บรวบรวม ใช้
                    หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้<br />

                    - เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน<br />
                    - เพื่อการบริหารจัดการภายในบริษัท<br />
                    - เพื่อการตลาดและการส่งเสริมการขาย<br />
                    - เพื่อการบริการหลังการขาย<br />
                    - เพื่อรวบรวมข้อเสนอแนะ
                  </p>
                </div>

                <h1 class="title2">การเปิดเผยข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้
                    ดังต่อไปนี้
                  </p>
                  <span>การบริหารจัดการภายในองค์กร</span>
                  <p>
                    เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา
                    เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ
                    ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น
                  </p>
                  <span>พันธมิตรทางธุรกิจ</span>
                  <p>
                    เราอาจเปิดเผยข้อมูลบางอย่างกับพันธมิตรทางธุรกิจเพื่อติดต่อและประสานงานในการให้บริการสินค้าหรือบริการ
                    และให้ข้อมูลเท่าที่จำเป็นเกี่ยวกับความพร้อมใช้งานของสินค้าหรือบริการ
                  </p>
                </div>

                <h1 class="title2">ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้
                    ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น
                    หากมีกฎหมายกำหนดไว้ เราจะลบ ทำลาย
                    หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้
                    เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
                  </p>
                </div>

                <h1 class="title2">สิทธิของเจ้าของข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล
                    คุณมีสิทธิในการดำเนินการดังต่อไปนี้
                  </p>
                  <p>
                    <span>สิทธิขอถอนความยินยอม (right to withdraw consent)</span>
                    หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้
                    หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                    ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น
                    คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา
                  </p>
                  <p>
                    <span>สิทธิขอเข้าถึงข้อมูล (right to access)</span>
                    คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ
                    รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
                  </p>
                  <p>
                    <span>สิทธิขอถ่ายโอนข้อมูล (right to data portability)</span>
                    คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ
                    รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ
                    และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง
                    เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค
                  </p>
                  <p>
                    <span>สิทธิขอคัดค้าน (right to object)</span>
                    คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้
                    หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้
                    หากการเก็บรวบรวม ใช้
                    หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น
                    โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์
                  </p>
                  <p>
                    <span>สิทธิขอให้ลบหรือทำลายข้อมูล (right to
                      erasure/destruction)</span>
                    คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้
                    หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้
                    หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้
                    หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
                  </p>
                  <p>
                    <span>สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of
                      processing)</span>
                    คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
                  </p>
                  <p>
                    <span>สิทธิขอให้แก้ไขข้อมูล (right to rectification)</span>
                    คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง
                    เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด
                  </p>
                  <p>
                    <span>สิทธิร้องเรียน (right to lodge a complaint)</span>
                    คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง
                    หากคุณเชื่อว่าการเก็บรวบรวม ใช้
                    หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                    เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
                  </p>
                  <p>
                    คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้
                    โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้
                    เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน
                    นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ
                    ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้
                    หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง
                    ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
                  </p>
                </div>

                <h1 class="title2">เทคโนโลยีติดตามตัวบุคคล (Cookies)</h1>
                <div class="text1">
                  <p>
                    เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น
                    เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน
                    เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม
                    และติดตามการใช้งานของคุณ
                    เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา
                    หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ
                    คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้
                  </p>
                </div>

                <h1 class="title2">
                  การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล
                </h1>
                <div class="text1">
                  <p>
                    เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ
                    การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน
                    (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้
                    เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข
                    หรือเปิดเผย
                    นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล
                    ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ
                    (administrative safeguard) มาตรการป้องกันด้านเทคนิค
                    (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical
                    safeguard)
                    ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล
                    (access control)
                  </p>
                </div>

                <h1 class="title2">การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</h1>
                <div class="text1">
                  <p>
                    ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น
                    เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน
                    72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้
                    ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ
                    เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง
                    ๆ เช่น เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย
                    เป็นต้น
                  </p>
                </div>

                <h1 class="title2">
                  การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว
                </h1>
                <div class="text1">
                  <p>
                    เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว
                    โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา
                    <br />
                    นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 17
                    มีนาคม 2564
                  </p>
                </div>

                <h1 class="title2">นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น</h1>
                <div class="text1">
                  <p>
                    นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ
                    และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น
                    หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา
                    การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ
                    จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น
                    ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormMain',
  props: ['page', 'blog'],
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        brand: '',
        interested: '',
        budget: '',
        acceptPolicy: false
      },
      lang: this.$i18n.locale || 'th-TH',
      validate: false,
      checkbox: false,
      success: false,
      referrer: '',
      path: '',
      ads: '',
    }
  },
  mounted() {
    const ads = sessionStorage.getItem('ads')
    this.ads = ads
    this.path = window.location.origin + window.location.pathname
    const cookieReferrer = this.$cookies.get('cookie-referrer')
    if (cookieReferrer == '' || cookieReferrer == undefined) {
      this.referrer = 'Direct'
    } else {
      this.referrer = cookieReferrer
    }

  },
  computed: {
    isFormValid() {
      if (this.form.name != '' && this.form.phone != '' && this.form.email != '' && this.form.interested != '' && this.form.acceptPolicy != false) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    showPolicyModal() {
      const modalEl = this.$refs.policyModal
      let modalInstance = bootstrap.Modal.getInstance(modalEl)
      if (!modalInstance) {
        modalInstance = new bootstrap.Modal(modalEl)
      }
      modalInstance.show()
    },
    closePolicyModal() {
      const modalEl = this.$refs.policyModal
      const modalInstance = bootstrap.Modal.getInstance(modalEl)
      if (modalInstance) modalInstance.hide()
    },
    submitForm() {
      if (
        this.form.name.startsWith(' ') ||
        this.form.phone.startsWith(' ') ||
        this.form.email.startsWith(' ') ||
        this.form.interested.startsWith(' ')
      ) {
        this.validate = true
        return false
      }
      if (
        this.form.name == '' ||
        this.form.phone == '' ||
        this.form.email == '' ||
        this.form.interested == ''
      ) {
        this.validate = true
        return false
      }
      if (!this.form.acceptPolicy) {
        return
      }
      let interested = "";
      if (this.form.interested == "WizemovesAdvertising") {
        interested = "Ads"
      } else if (this.form.interested == "LINEAgency") {
        interested = "Line agency"
      } else if (this.form.interested == "WizemovesMartech") {
        interested = "Martech"
      } else if (this.form.interested == "WizemovesContent") {
        interested = "Content"
      } else if (this.form.interested == "WizemovesEdis") {
        interested = "eDis"
      } else if (this.form.interested == "WizemovesConsult") {
        interested = "Consult"
      } else if (this.form.interested == "WizemovesInfluence") {
        interested = "Influ"
      } else if (this.form.interested == "WizemovesData") {
        interested = "Data"
      } else if (this.form.interested == "Oc2plus") {
        interested = "Oc2plus"
      } else if (this.form.interested == "Akita") {
        interested = "Akita"
      } else if (this.form.interested == "Patona") {
        interested = "Patona"
      }
      let ads = this.ads ? 'Ads' : 'Org';

      let origin;

      if (this.blog) {
          origin = `Blog - ${this.blog}`;
      } else {
          const interested = this.form.interested;
          const isSpecial = ['Oc2plus', 'Akita', 'Patona', 'LINEAgency'].includes(interested);
          origin = `${isSpecial ? interested : 'WM ' + interested}-${ads}`;
      }
      this.success = true
      this.form.name = ''
      this.form.phone = ''
      this.form.email = ''
      this.form.brand = ''
      this.form.interested = ''

    },
  },
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');

.text-s-24 {
  line-height: 24px;
}

.form-control {
  font-size: 24px;
  color: #1F2937;
}

.form-select {
  font-size: 24px;
  color: #1F2937;
}

.btn-main {
  width: 184px !important;
  height: 40px !important;
  color: #FFFFFF !important;
  background-color: #32A9FF !important;
  border: 1px solid #32A9FF !important;
  box-sizing: border-box !important;
  border-radius: 20px !important;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .text-s-28 {
    font-size: 20px !important;
    line-height: 20px;
  }

  .text-s-24 {
    font-size: 20px !important;
    line-height: 20px;
  }

  .card-blog-ads {
    height: 100%;
  }

  .card-blog-ads {
    border-radius: 8px !important;
  }

  .form-control {
    font-size: 20px !important;
  }

  .form-select {
    font-size: 20px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-blog-ads {
    height: 100%;
  }

  .card-blog-ads {
    border-radius: 8px !important;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .card-blog-ads {
    height: 100%;
  }

  .card-blog-ads {
    border-radius: 8px !important;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .card-blog-ads {
    height: 100%;
  }

  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card-blog-ads {
    height: 200px;
  }

  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}

@media only screen and (min-width: 1650px) {
  .card-blog-ads {
    height: 200px;
  }

  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
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

.modal-content {
  border-radius: 16px;
}

.modal-header {
  border-bottom: 0px;
}

.modal-body {
  padding-top: 20px;
  padding-bottom: 30px;
}

.modal-custom-size {
  border-radius: 16px;
  background-color: #F0FDF4;
}

.btn-close {
  margin-right: 0px;
  margin-top: 10px;
}

.modal-dialog {
  max-width: 750px;
}

.title1 {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  line-height: 24px;
}

.title2 {
  font-size: 36px;
  font-weight: 500;
}

.text1 {
  display: block;
  font-size: 24px;
  font-weight: 300;
}

a {
  color: #1B8BF5 !important;
}
</style>
