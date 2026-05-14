<template>
  <div>
    <div class="bg-blog-ads d-none d-lg-block">
      <div class="card-blog-ads" style="padding: 50px">
        <div class="row">
          <div class="col-6">
            <div
              class="text-s-36 text-w-500 color-FDFDFD font-bd"
              style="line-height: 36px"
            >
              Unlock the Power of Data
            </div>
            <div class="text-s-24 text-w-500 color-FDFDFD line-height-24 mt-3">
              ดาวน์โหลดฟรี! คู่มือการวิจัยข้อมูล<br />
              เรียนรู้กลยุทธ์ เครื่องมือ และเคล็ดลับ
            </div>
          </div>
          <div class="col-6 mt-auto mb-0">
            <div class="mt-3 d-inline">
              <button
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                class="btn-download text-center"
              >
                <p
                  class="font-md text-s-24 line-height-24 line-height-24 mb-0 color-FFFFFF"
                >
                  ลงทะเบียนเพื่อดาวน์โหลด E-Book
                  <img
                    src="../assets/icon/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-blog-ads d-block d-lg-none">
      <div class="card-blog-ads" style="padding: 15px">
        <div class="row">
          <div class="col-12">
            <div
              class="text-s-36 text-w-500 color-FDFDFD font-bd"
              style="line-height: 36px"
            >
              Unlock the Power of Data
            </div>
            <div class="text-s-24 text-w-500 color-FDFDFD line-height-24 mt-3">
              ดาวน์โหลดฟรี! คู่มือการวิจัยข้อมูล<br />
              เรียนรู้กลยุทธ์ เครื่องมือ และเคล็ดลับ
            </div>
          </div>
          <div class="col-12 mt-auto mb-0">
            <div class="mt-3 d-inline">
              <button
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                class="btn-download text-center"
              >
                <p
                  class="font-md text-s-24 line-height-24 line-height-24 mb-0 color-FFFFFF"
                >
                  ลงทะเบียนเพื่อดาวน์โหลด E-Book
                  <img
                    src="../assets/icon/arrow-down-tray.png"
                    alt="arrow-down-tray.png"
                  />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
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
              <img
                src="../assets/icon/pencil-square.png"
                class="me-3"
                alt="pencil-square.png"
              />
              <span id="exampleModalLabel" class="header-model">
                ลงทะเบียน
              </span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body p-0">
              <p class="text-s-28 text-w-400 color-6B7280">
                กรุณากรอกข้อมูลลงในแบบฟอร์มลงทะเบียนเพื่อดาวน์โหลด E-Book
              </p>
              <div class="row">
                <div class="col-12">
                  <form
                    method="post"
                    autocomplete="off"
                    name="hello-sheet"
                    @submit="handleFormSubmit"
                  >
                    <div class="row">
                      <div
                        class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >ชื่อ<span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="ชื่อ"
                          :class="{
                            'border border-danger': validate && !firstName,
                          }"
                          v-model="firstName"
                          id="ชื่อ"
                          name="ชื่อ"
                        />
                        <div v-if="validate">
                          <p
                            v-if="!firstName"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุชื่อของคุณ
                          </p>
                        </div>
                      </div>
                      <div
                        class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >นามสกุล<span class="text-danger">*</span></label
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="นามสกุล"
                          :class="{
                            'border border-danger': validate && !lastName,
                          }"
                          v-model="lastName"
                          id="นามสกุล"
                          name="นามสกุล"
                        />
                        <div v-if="validate">
                          <p
                            v-if="!lastName"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุนามสกุลของคุณ
                          </p>
                        </div>
                      </div>
                      <div
                        class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >เบอร์โทร<span class="text-danger">*</span></label
                        >
                        <input
                          type="tel"
                          pattern="[0-9]{10}"
                          maxlength="10"
                          class="form-control"
                          placeholder="เบอร์โทร"
                          :class="{
                            'border border-danger': validate && !phone,
                          }"
                          v-model="phone"
                          id="เบอร์โทร"
                          name="เบอร์โทร"
                        />
                        <div v-if="validate">
                          <p
                            v-if="!phone"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุเบอร์โทรของคุณ
                          </p>
                        </div>
                      </div>
                      <div
                        class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >Email<span class="text-danger">*</span></label
                        >
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          :class="{
                            'border border-danger': validate && !email,
                          }"
                          v-model="email"
                          id="Email"
                          name="Email"
                        />
                        <div v-if="validate">
                          <p
                            v-if="!email"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุ E-mail ของคุณ
                          </p>
                        </div>
                      </div>
                      <div
                        class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-4"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >ลักษณะธุรกิจ<span class="text-danger">*</span></label
                        >
                        <select
                          class="form-select"
                          :class="{
                            'border border-danger': validate && !jobfunction,
                          }"
                          placeholder="เลือกลักษณะธุรกิจ"
                          v-model="jobfunction"
                          id="ลักษณะธุรกิจ"
                          name="ลักษณะธุรกิจ"
                        >
                          <option selected value="">เลือกลักษณะธุรกิจ</option>
                          <option value="ธุรกิจมุ่งเน้นการพัฒนาสินค้าและบริการ">
                            ธุรกิจมุ่งเน้นการพัฒนาสินค้าและบริการ
                          </option>
                          <option
                            value="ธุรกิจอยู่ในช่วงกำลังเติบโต และต้องการขยายธุรกิจ"
                          >
                            ธุรกิจอยู่ในช่วงกำลังเติบโต และต้องการขยายธุรกิจ
                          </option>
                          <option
                            value="ธุรกิจมุ่งเน้นในการรักษาฐานลูกค้าที่มี"
                          >
                            ธุรกิจมุ่งเน้นในการรักษาฐานลูกค้าที่มี
                          </option>
                          <option value="ธุรกิจต้องเปลี่ยนแปลงองค์กรให้ทันสมัย">
                            ธุรกิจต้องเปลี่ยนแปลงองค์กรให้ทันสมัย
                          </option>
                        </select>
                        <div v-if="validate">
                          <p
                            v-if="!jobfunction"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุลักษณะธุรกิจของคุณ
                          </p>
                        </div>
                      </div>
                      <div
                        class="form-group col-xxl-12 col-xxl-12 col-lg-12 col-md-12 col-12 mt-4"
                      >
                        <label
                          class="text-s-24 line-height-24 text-w-500"
                          style="color: #373737"
                          >จุดประสงค์ในการอ่านบทความนี้คืออะไร?<span
                            class="text-danger"
                            >*</span
                          ></label
                        >
                        <select
                          class="form-select"
                          :class="{
                            'border border-danger':
                              validate && !businessCategory,
                          }"
                          placeholder="เลือกจุดประสงค์ในการอ่านบทความนี้"
                          v-model="businessCategory"
                          id="จุดประสงค์ในการอ่านบทความ"
                          name="จุดประสงค์ในการอ่านบทความ"
                        >
                          <option selected value="">
                            เลือกจุดประสงค์ในการอ่านบทความนี้
                          </option>
                          <option value="เพื่อนำไปใช้พัฒนาตนเอง">
                            เพื่อนำไปใช้พัฒนาตนเอง
                          </option>
                          <option
                            value="เพื่อนำไปใช้พัฒนาหน้าที่งานที่รับผิดชอบ"
                          >
                            เพื่อนำไปใช้พัฒนาหน้าที่งานที่รับผิดชอบ
                          </option>
                          <option value="เพื่อนำไปใช้พัฒนาองค์กรและการตลาด">
                            เพื่อนำไปใช้พัฒนาองค์กรและการตลาด
                          </option>
                        </select>
                        <div v-if="validate">
                          <p
                            v-if="!businessCategory"
                            class="text-danger mb-0 text-s-24 line-height-24 text-w-500"
                          >
                            โปรดระบุจุดประสงค์ในการอ่านบทความของคุณ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col-12">
                        <p
                          class="text-s-24 line-height-24 text-w-500 color-6B7280"
                        >
                          Sellsuki
                          จะใช้ข้อมูลนี้ในการส่งข้อมูลและข่าวสารความรู้ในด้าน
                          Digital Marketing และ
                          <a href="https://www.sellsuki.co.th/">Sellsuki</a>
                          พาร์ทเนอร์ของเราจะใช้ข้อมูลนี้ในการสื่อสารการตลาดกับคุณต่อไป
                          เราจะสื่อสารและรักษาความเป็นส่วนตัวของข้อมูลของคุณอย่างโปร่งใส
                          กรุณาเลือกให้ความยินยอมด้านล่างของแบบฟอร์มลงทะเบียน
                          เพื่อรับทราบและยินยอมให้เก็บข้อมูลส่วนบุคคลของคุณ
                        </p>
                      </div>
                      <div class="col-12">
                        <!-- Button trigger modal -->
                        <a
                          href=""
                          class="text-s-24 line-height-24 text-w-500"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          style="text-decoration: underline !important"
                          >ดูรายละเอียด Privacy Notice.</a
                        >
                      </div>
                      <div class="col-12 mt-3 color-6B7280">
                        <div class="form-check">
                          <input
                            class="form-check-input mt-2"
                            type="checkbox"
                            v-model="checkbox"
                            id="flexCheckChecked"
                          />
                          <label
                            class="form-check-label text-s-24 text-w-500"
                            for="flexCheckChecked"
                          >
                            ยินยอมให้ Sellsuki
                            ใช้ข้อมูลของคุณในด้านการตลาดหรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                          </label>
                        </div>
                        <div v-if="validate">
                          <p
                            v-if="!checkbox"
                            class="text-danger text-s-24 text-w-500"
                          >
                            กรุณายินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคล
                          </p>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="text-center mt-4">
                          <button
                            type="submit"
                            @click="submit()"
                            class="btn btn-orange button"
                          >
                            <span
                              class="text-white text-w-500"
                              style="font-size: 24px; line-height: 24px"
                              >ดาวน์โหลด</span
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <section>
                <div class="container p-3">
                  <h1 class="title2">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h1>

                  <div class="text1">
                    <p>
                      Sellsuki
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
                      <span
                        >สิทธิขอถอนความยินยอม (right to withdraw consent)</span
                      >
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
                      <span
                        >สิทธิขอถ่ายโอนข้อมูล (right to data portability)</span
                      >
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
                      <span
                        >สิทธิขอให้ลบหรือทำลายข้อมูล (right to
                        erasure/destruction)</span
                      >
                      คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้
                      หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้
                      หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้
                      หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
                    </p>
                    <p>
                      <span
                        >สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of
                        processing)</span
                      >
                      คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
                    </p>
                    <p>
                      <span
                        >สิทธิขอให้แก้ไขข้อมูล (right to rectification)</span
                      >
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
  </div>
</template>

<script>
export default {
  name: 'FormDataResearch',
  props: ['responseData'],
  data() {
    return {
      lang: this.$i18n.locale || 'th-TH',
      validate: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      jobfunction: '',
      businessCategory: '',
      checkbox: false,
      success: false,
    }
  },
  methods: {
    submit() {
      if (
        this.firstName == '' ||
        this.lastName == '' ||
        this.phone == '' ||
        this.email == '' ||
        this.jobfunction == '' ||
        this.businessCategory == ''
      ) {
        this.validate = true
        return false
      }
      if (this.checkbox != true) {
        this.validate = true
        return false
      }
    },
    handleFormSubmit() {
      if (
        this.checkbox == true &&
        this.firstName != '' &&
        this.lastName != '' &&
        this.phone != '' &&
        this.email != '' &&
        this.jobfunction != '' &&
        this.businessCategory != ''
      ) {
        const scriptURL = this.responseData.attributes.LinkGoogleSheet
        const form = document.forms['hello-sheet']

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((this.success = true))
          .catch((error) => console.error('Error!', error.message))
        //window.open('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/'+ this.$route.params.name, '_blank');
        window.open(this.responseData.attributes.LinkFilePdf, '_blank')
      }

      if (this.success == true) {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.jobfunction = ''
        this.businessCategory = ''
        this.checkbox = false
        this.validate = false
        this.success = false
      }
    },
  },
}
</script>

<style scoped>
.fade:not(.show) {
  opacity: 1;
}
.modal.fade .modal-dialog{
  transform: none;
}
.header-model {
  font-size: 60px !important;
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
  padding: 40px 64px;
}
.crad {
  background: #fbfbfb;
  border: 1px solid #e5e5e5 !important;
  box-sizing: border-box;
  border-radius: 20px;
}

.title1 {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 20px;
}

.title2 {
  font-size: 20px;
  font-weight: 700;
}

.text1 {
  display: block;
  font-size: 20px;
  font-weight: 300;
}

span {
  font-weight: 500;
}

.img-fix-size {
  width: 100%;
  height: 203px;
  object-fit: cover;
}
.card {
  background: #ffffff !important;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px !important;
  border: 0 !important;
}
.card-img,
.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.card-body {
  min-height: 200px;
}
.position-text-blog {
  margin-top: -36px;
  margin-bottom: 10px;
  text-align: right;
}

.btn-register span {
  font-size: 24px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.btn-register {
  border: 1.5px solid #f35b1f;
  background: #f35b1f;
  border-radius: 8px !important;
  display: inline-block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  padding: 13px 24px 11px 24px;
  display: inline;
}
.btn-register-m span {
  font-size: 24px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
.btn-register-m {
  background: #f35b1f;
  border-radius: 8px !important;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  padding: 8px 30px;
  width: 100%;
}

.form-control {
  font-size: 22px !important;
  padding: 4px 16px !important;
}

.form-select {
  font-size: 22px;
}

a {
  color: #32a9ff !important;
}

.btn-download {
  width: 100%;
  color: #ffffff !important;
  background-color: #f38100 !important;
  border: 1px solid #f38100 !important;
  box-sizing: border-box !important;
  border-radius: 8px !important;
  padding: 10px;
}

.modal-content {
  border-radius: 16px;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .card-blog-ads {
    height: 100%;
  }
  .bg-blog-ads {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
  }
  .card-blog-ads {
    border-radius: 8px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-blog-ads {
    height: 100%;
  }
  .bg-blog-ads {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
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
  .bg-blog-ads {
    background-position: center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
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
  .bg-blog-ads {
    background-position: 220px;
    background-repeat: no-repeat !important;
    background-size: 445px 254px !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
  }
  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card-blog-ads {
    height: 200px;
  }
  .bg-blog-ads {
    background-position: 220px;
    background-repeat: no-repeat !important;
    background-size: 445px 254px !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
  }
  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}

@media only screen and (min-width: 1650px) {
  .card-blog-ads {
    height: 200px;
  }
  .bg-blog-ads {
    background-position: 220px;
    background-repeat: no-repeat !important;
    background-size: 445px 254px !important;
    border-radius: 8px !important;
    background-image: url(../assets/blog/c763669c597949b3a2197f25ffe49959.png);
  }
  .card-blog-ads {
    border-radius: 8px !important;
    background: linear-gradient(
        90deg,
        #0c0e15 29.35%,
        rgba(12, 14, 21, 0) 38.46%
      ),
      linear-gradient(90deg, rgba(12, 14, 21, 0) 67.73%, #0c0e15 77.16%);
  }
}
</style>
