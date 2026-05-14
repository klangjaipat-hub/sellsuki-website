<template>
    <div>
        <div class="pt-4">
            <div class="text-center" style="background: rgba(0, 0, 0, 0.0);">
                <img class="mb-2 img-fluid" src="./../../../assets/Everyday_Sellsuki_logo.png" style="max-width: 290px;">
                <div class="container" ><span class="font-wght" style="font-size:25px;color:#000000;">ลงทะเบียนเพื่อดาวน์โหลด E-Book</span></div>
            </div>
        </div>
        <div class="container">
            <div class="crad mt-4 text-color-this-page">
                <div class="row pt-xxl-1 pt-xl-1 pt-lg-1 pt-2 p-xxl-5 pb-xxl-2 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                  <div class="col-12 ps-xxl-4 ps-xl-4 ps-1 pe-xxl-4 pe-xl-4 pe-1">
                    <form method="post" autocomplete="off" name="hello-sheet" @submit.prevent="handleFormSubmit">
                        <div class="row">
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">ชื่อ<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" placeholder="ชื่อ" :class="{'border border-danger': validate && !firstName}" v-model="firstName" id="ชื่อ" name="ชื่อ">
                                <div v-if="validate">
                                    <p v-if="!firstName" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุชื่อของคุณ</p>
                                </div>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">นามสกุล<span class="text-danger">*</span></label>
                                <input type="text" class="form-control mt-2" placeholder="นามสกุล" :class="{'border border-danger': validate && !lastName}" v-model="lastName" id="นามสกุล" name="นามสกุล">
                                <div v-if="validate">
                                    <p v-if="!lastName" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุนามสกุลของคุณ</p>
                                </div>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">เบอร์โทร<span class="text-danger">*</span></label>
                                <input type="tel" pattern="[0-9]{10}" maxlength="10" class="form-control mt-2" placeholder="เบอร์โทร" :class="{'border border-danger': validate && !phone}" v-model="phone" id="เบอร์โทร" name="เบอร์โทร">
                                <div v-if="validate">
                                    <p v-if="!phone" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุเบอร์โทรของคุณ</p>
                                </div>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-6 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">Email<span class="text-danger">*</span></label>
                                <input type="email" class="form-control mt-2" placeholder="Email" :class="{'border border-danger': validate && !email}" v-model="email" id="Email" name="Email">
                                <div v-if="validate">
                                    <p v-if="!email" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุ E-mail ของคุณ</p>
                                </div>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6  col-md-12 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">ลักษณะธุรกิจ<span class="text-danger">*</span></label>
                                <select class="form-select mt-2" :class="{'border border-danger': validate && !jobfunction}" placeholder="เลือกลักษณะธุรกิจ" v-model="jobfunction" id="ลักษณะธุรกิจ" name="ลักษณะธุรกิจ">
                                    <option selected value="">เลือกลักษณะธุรกิจ</option>
                                    <option value="ธุรกิจมุ่งเน้นการพัฒนาสินค้าและบริการ">ธุรกิจมุ่งเน้นการพัฒนาสินค้าและบริการ</option>
                                    <option value="ธุรกิจอยู่ในช่วงกำลังเติบโต และต้องการขยายธุรกิจ">ธุรกิจอยู่ในช่วงกำลังเติบโต และต้องการขยายธุรกิจ</option>
                                    <option value="ธุรกิจมุ่งเน้นในการรักษาฐานลูกค้าที่มี">ธุรกิจมุ่งเน้นในการรักษาฐานลูกค้าที่มี</option>
                                    <option value="ธุรกิจต้องเปลี่ยนแปลงองค์กรให้ทันสมัย">ธุรกิจต้องเปลี่ยนแปลงองค์กรให้ทันสมัย</option>
                                </select>
                                <div v-if="validate">
                                    <p v-if="!jobfunction" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุลักษณะธุรกิจของคุณ</p>
                                </div>
                            </div>
                            <div class="form-group col-xxl-6 col-xxl-6 col-lg-6 col-md-12 col-12 mt-4">
                                <label class="text-s-24 text-w-500" style="color: #373737;">จุดประสงค์ในการอ่านบทความนี้คืออะไร?<span class="text-danger">*</span></label>
                                <select class="form-select mt-2" :class="{'border border-danger': validate && !businessCategory}" placeholder="เลือกจุดประสงค์ในการอ่านบทความนี้" v-model="businessCategory" id="จุดประสงค์ในการอ่านบทความ" name="จุดประสงค์ในการอ่านบทความ">
                                    <option selected value="">เลือกจุดประสงค์ในการอ่านบทความนี้</option>
                                    <option value="เพื่อนำไปใช้พัฒนาตนเอง">เพื่อนำไปใช้พัฒนาตนเอง</option>
                                    <option value="เพื่อนำไปใช้พัฒนาหน้าที่งานที่รับผิดชอบ">เพื่อนำไปใช้พัฒนาหน้าที่งานที่รับผิดชอบ</option>
                                    <option value="เพื่อนำไปใช้พัฒนาองค์กรและการตลาด">เพื่อนำไปใช้พัฒนาองค์กรและการตลาด</option>
                                </select>
                                <div v-if="validate">
                                    <p v-if="!businessCategory" class="text-danger mb-0 text-s-14 text-w-500">โปรดระบุจุดประสงค์ในการอ่านบทความของคุณ</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 mb-5">
                            <div class="col-12"><p class="text-s-14 text-w-500">การตลาดวันละตอน จะใช้ข้อมูลนี้ในการส่งข้อมูลและข่าวสารความรู้ในด้าน Digital Marketing และ <a href="https://www.sellsuki.co.th/">Sellsuki</a> พาร์ทเนอร์ของเราจะใช้ข้อมูลนี้ในการสื่อสารการตลาดกับคุณต่อไป เราจะสื่อสารและรักษาความเป็นส่วนตัวของข้อมูลของคุณอย่างโปร่งใส กรุณาเลือกให้ความยินยอมด้านล่างของแบบฟอร์มลงทะเบียน เพื่อรับทราบและยินยอมให้เก็บข้อมูลส่วนบุคคลของคุณ</p></div>
                            <div class="col-12"><!-- Button trigger modal -->
                                <a href="" class="text-s-14 text-w-500" data-bs-toggle="modal" data-bs-target="#Modaldis" style="color:#1D6BF6 !important;text-decoration: underline !important;">ดูรายละเอียด Privacy Notice.</a>
                            </div>
                            
                            
                            <!-- Modal -->
                            <div class="modal fade" id="Modaldis" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title title1" id="exampleModalLabel">บริษัท การตลาดวันละตอน จำกัด</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <section>
                                                <div class="container p-3">

                                                <h1 class="title2">นโยบายความเป็นส่วนตัวสำหรับลูกค้า</h1>

                                                <div class="text1">
                                                    <p>
                                                        บริษัท การตลาดวันละตอน จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล รวมถึงสิทธิต่าง ๆ ของเจ้าของข้อมูลส่วนบุคคล ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
                                                    </p>
                                                </div>

                                                <h1 class="title2">การเก็บรวบรวมข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง ดังต่อไปนี้

                                                        <br/>- การสมัครสมาชิก
                                                        <br/>- อีเมล
                                                    </p>
                                                </div>

                                                <h1 class="title2">ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</h1>
                                                <div class="text1">
                                                    <p>
                                                        <span>ข้อมูลบัญชี</span> เช่น บัญชีผู้ใช้งาน ประวัติการใช้งาน เป็นต้น <br/>
                                                        <span>ข้อมูลทางเทคนิค</span> เช่น IP address, Cookie ID, ประวัติการใช้งานเว็บไซต์ (Activity Log) เป็นต้น
                                                    </p>
                                                </div>

                                                <h1 class="title2">ผู้เยาว์</h1>
                                                <div class="text1">
                                                    <p>
                                                        หากคุณมีอายุต่ำกว่า 20 ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย เราอาจเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้ หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา
                                                    </p>
                                                </div>

                                                <h1 class="title2">วิธีการเก็บรักษาข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์<br/>
                                                        เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ ดังต่อไปนี้<br/>
                                                        - ผู้ให้บริการเซิร์ฟเวอร์ในประเทศไทย
                                                    </p>
                                                </div>

                                                <h1 class="title2">การประมวลผลข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้<br/>

                                                        - เพื่อปรับปรุงสินค้า บริการ หรือประสบการณ์การใช้งาน<br/>
                                                        - เพื่อการบริหารจัดการภายในบริษัท<br/>
                                                        - เพื่อการตลาดและการส่งเสริมการขาย<br/>
                                                        - เพื่อการบริการหลังการขาย<br/>
                                                        - เพื่อรวบรวมข้อเสนอแนะ
                                                    </p>
                                                </div>

                                                <h1 class="title2">การเปิดเผยข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้ ดังต่อไปนี้ 
                                                    </p>
                                                    <span>การบริหารจัดการภายในองค์กร</span>
                                                    <p>เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณภายในบริษัทเท่าที่จำเป็นเพื่อปรับปรุงและพัฒนาสินค้าหรือบริการของเรา เราอาจรวบรวมข้อมูลภายในสำหรับสินค้าหรือบริการต่าง ๆ ภายใต้นโยบายนี้เพื่อประโยชน์ของคุณและผู้อื่นมากขึ้น</p>
                                                    <span>พันธมิตรทางธุรกิจ</span>
                                                    <p>เราอาจเปิดเผยข้อมูลบางอย่างกับพันธมิตรทางธุรกิจเพื่อติดต่อและประสานงานในการให้บริการสินค้าหรือบริการ และให้ข้อมูลเท่าที่จำเป็นเกี่ยวกับความพร้อมใช้งานของสินค้าหรือบริการ</p>
                                                </div>

                                                <h1 class="title2">ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้ ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น หากมีกฎหมายกำหนดไว้ เราจะลบ ทำลาย หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้ เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
                                                    </p>
                                                </div>

                                                <h1 class="title2">สิทธิของเจ้าของข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล คุณมีสิทธิในการดำเนินการดังต่อไปนี้
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอถอนความยินยอม (right to withdraw consent)</span> หากคุณได้ให้ความยินยอม เราจะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอเข้าถึงข้อมูล (right to access)</span> คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอถ่ายโอนข้อมูล (right to data portability)</span> คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอคัดค้าน (right to object)</span> คุณมีสิทธิขอคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้ หากการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอให้ลบหรือทำลายข้อมูล (right to erasure/destruction)</span> คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้ หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้ หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอให้ระงับการใช้ข้อมูล (right to restriction of processing)</span> คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
                                                    </p>
                                                    <p>
                                                        <span>สิทธิขอให้แก้ไขข้อมูล (right to rectification)</span> คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด
                                                    </p>
                                                    <p>
                                                        <span>สิทธิร้องเรียน (right to lodge a complaint)</span> คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง หากคุณเชื่อว่าการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
                                                    </p>
                                                    <p>
                                                        คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้ โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้ เราจะแจ้งผลการดำเนินการภายในระยะเวลา 30 วัน นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ ตามแบบฟอร์มหรือวิธีการที่เรากำหนด ทั้งนี้ หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง ๆ เช่น ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
                                                    </p>
                                                </div>

                                                <h1 class="title2">เทคโนโลยีติดตามตัวบุคคล (Cookies)</h1>
                                                <div class="text1">
                                                    <p>
                                                        เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น เราใช้คุกกี้ (Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ โฆษณาที่เหมาะสม และติดตามการใช้งานของคุณ เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้
                                                    </p>
                                                </div>

                                                <h1 class="title2">การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ การรักษาความลับ (confidentiality) ความถูกต้องครบถ้วน (integrity) และสภาพพร้อมใช้งาน (availability) ทั้งนี้ เพื่อป้องกันการสูญหาย เข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือเปิดเผย นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ (administrative safeguard) มาตรการป้องกันด้านเทคนิค (technical safeguard) และมาตรการป้องกันทางกายภาพ (physical safeguard) ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล (access control)
                                                    </p>
                                                </div>

                                                <h1 class="title2">การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</h1>
                                                <div class="text1">
                                                    <p>
                                                        ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน 72 ชั่วโมง นับแต่ทราบเหตุเท่าที่สามารถกระทำได้ ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง ๆ เช่น เว็บไซต์ ข้อความ (SMS) อีเมล โทรศัพท์ จดหมาย เป็นต้น
                                                    </p>
                                                </div>

                                                <h1 class="title2">การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</h1>
                                                <div class="text1">
                                                    <p>
                                                        เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา
                                                        <br/>
                                                        นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่ 17 มีนาคม 2564
                                                    </p>
                                                </div>

                                                <h1 class="title2">นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น</h1>
                                                <div class="text1">
                                                    <p>
                                                        นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า บริการ และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา การคุ้มครองข้อมูลส่วนบุคคลต่าง ๆ จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย
                                                    </p>
                                                </div>

                                                <h1 class="title2">รายละเอียดการติดต่อ</h1>
                                                <div class="text1">
                                                    <p>
                                                        หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้ รวมถึงการขอใช้สิทธิต่าง ๆ คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้ ดังนี้
                                                    </p>
                                                    <p>
                                                        <span>ผู้ควบคุมข้อมูลส่วนบุคคล</span><br/>
                                                        บริษัท การตลาดวันละตอน จำกัด<br/>
                                                        9/244 ซอยศาลธนบุรี 29/2 บางหว้า ภาษีเจริญ กรุงเทพมหานคร 10160<br/>

                                                        อีเมล nattapon@everydaymarketing.co<br/>

                                                        เว็บไซต์ www.everydaymarketing.co<br/>

                                                        หมายเลขโทรศัพท์ 0856665380
                                                    </p>
                                                    <p>
                                                        <span>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</span><br/>
                                                        ทีม DPO<br/>
                                                        9/244 ซอยศาลธนบุรี 29/2 บางหว้า ภาษีเจริญ กรุงเทพมหานคร 10160<br/>

                                                        อีเมล assistant@everydaymarketing.co<br/>

                                                        หมายเลขโทรศัพท์ 0856665380
                                                    </p>
                                                </div>
                                            </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-3">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="checkbox" id="flexCheckChecked">
                                    <label class="form-check-label text-s-14 text-w-500" for="flexCheckChecked">
                                        ยินยอมให้ การตลาดวันละตอน และ <a href="https://www.sellsuki.co.th/">Sellsuki</a> ใช้ข้อมูลของคุณในด้านการตลาดหรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
                                    </label>
                                </div>
                                <div v-if="validate">
                                    <p v-if="!checkbox" class="text-danger text-s-14 text-w-500">กรุณายินยอมให้ใช้หรือเปิดเผยข้อมูลส่วนบุคคล</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="text-center mt-4">
                                    <button type="submit" @click="submit()" class="btn btn-orange button"><span class="text-white text-w-500" style="font-size:18px">DOWNLOAD</span></button>
                                </div>
                            </div>                    
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'everydaymarketing',
        layout:null,
        components:{

        },
        data() {
          return {
            responseData:[],
            lang: this.$i18n.locale || 'th-TH',
            validate:false,
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            jobfunction:'',
            businessCategory:'',
            checkbox:false,
            success:false
          }
        },
        methods: {
            submit(){
                if(this.firstName == '' || this.lastName == '' || this.phone == '' || this.email == '' || this.jobfunction == '' || this.businessCategory == ''){
                    this.validate = true
                    return false
                }
                if(this.checkbox != true){
                    this.validate = true
                    return false
                }
            },
            handleFormSubmit(){
                if(this.checkbox == true && this.firstName != '' && this.lastName != '' && this.phone != '' && this.email != '' && this.jobfunction != '' && this.businessCategory != ''){
                    const scriptURL1 = this.responseData.ScriptURL1
                    const form1 = document.forms['hello-sheet']
                
                    fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
                    .then(this.success = true)
                    .catch(error => console.error('Error!', error.message))
                    //https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Journey_Updated_2_40f57a2f66.pdf

                    const scriptURL2 = this.responseData.ScriptURL2
                    const form2 = document.forms['hello-sheet']
                
                    fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
                    .then(this.success = true)
                    .catch(error => console.error('Error!', error.message))
                    //https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Journey_Updated_2_40f57a2f66.pdf
                    //window.open('https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/'+ this.$route.params.name, '_blank');
                    window.open(this.responseData.Filename, '_blank');
                }

                if(this.success == true){
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
            }

        },
        //this.$route.params.id
        mounted () {
            this.responseData = null
        }
    }
    </script>
    
    <style scoped>
.crad {
    background: #FBFBFB;
    border: 1px solid #E5E5E5 !important;
    box-sizing: border-box;
    border-radius: 20px;
}

.title1{
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    line-height: 20px;
}

.title2{
    font-size: 20px;
    font-weight: 700;
}

.text1{
    display: block;
    font-size: 16px;
    font-weight: 300;
}

span{
    font-weight: 500;
}
    </style>
    