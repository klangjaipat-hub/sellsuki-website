<template>
<div id="SolutionsAkita">
    
    <div class="background-main">
        <div class="pb-lg-0 pb-5" style="background: linear-gradient(180deg, #153556 0%, #055297 100%);">
            <div class="container">
                <div class="row banner-hero">
                    <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
                        <ol>
                            <ul class="breadcrumb align-items-center text-s-24 mt-150 p-xl-0 mb-xl-3 p-3 mb-0 pt-0 pt-sm-3" style="color:#FFFFFF;">
                                <li>
                                    <nuxt-link @click="scrollToTop" :to="localePath('/')"><span class="ps-2">{{ $t("Menu.Home") }}</span></nuxt-link> <i class="bi bi-chevron-right"></i>
                                     
                                </li>
                                <li>
                                    <span itemprop="item"><span class="ps-2">{{ $t("Menu.Solution") }}</span></span> <i class="bi bi-chevron-right"></i> 
                                     
                                </li>
                                <li>
                                    <span class="text-s-24 font-md"><span class="ps-2">Akita</span></span>
                                     
                                </li>
                            </ul>
                        </ol>
                        <!-- <iframe src="https://www.google.com?igu=1" noborder="0" width="830" height="800" scrolling="yes" seamless></iframe> -->
                        <div class="d-none d-lg-block">
                            <table class="align-middle" style="width: 100%;">
                                <td class="banner-height">
                                    <h1 class="font-wght text-s-60 color-FFFFFF">AKITA<br>FULFILLMENT</h1>
                                    <h2 class="text-s-24 pt-2 pb-2 text-w-700 text-s-32" style="color:#FFFFFF">“{{ $t("solution.akita.ONE_Stop_warehouse_service") }}”</h2>
                                    <p class="text-s-24 mt-3" style="color:#FFFFFF">{{ $t("solution.akita.mata") }}</p>
                                    <a href="#form" class="btn btn-orange button mt-4"><span class="text-white text-s-24">ขอใบเสนอราคา</span></a>
                                </td>
                            </table>
                        </div>
                        <div class="d-block d-lg-none text-center text-md-start ps-sm-3 pe-sm-3 ps-4 pe-4">
                            <div class="font-wght text-s-36 color-FFFFFF">AKITA<br>FULFILLMENT</div>
                            <div class="text-s-24 text-w-700 ps-md-0 pe-md-0 ps-5 pe-5 mt-4" style="color:#FFFFFF">“{{ $t("solution.akita.ONE_Stop_warehouse_service") }}”</div>
                            <p class="text-s-24 p-4 p-md-0 ps-5 pe-5 mb-0" style="color:#FFFFFF">{{ $t("solution.akita.mata") }}</p>
                            <a href="#form"  rel="noopener" class="btn btn-orange button mt-2"><span class="text-white text-s-24">ขอใบเสนอราคา</span></a>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
                        <img class="d-none d-md-block img-fluid img-banner-top" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_AKT_01_1_7c81e4748a.webp" alt="akita-fulfillment">
                        <img class="d-block d-md-none img-fluid" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_AKT_01_1_7c81e4748a.webp" alt="akita-fulfillment">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="crad">
                <div class="mt-custom p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-4 p-4">
                    <div class="row mt-5 text-center">
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/OMS.png" alt="Akita Fulfillment OMS sample"></div>
                            </div>
                            <h2 class="text-s-24 text-w-700 mt-3" style="color:#373737">Order Management System</h2>
                            <p class="text-w-500 mb-0 text text-s-24">OMS และรายงานสนับสนุนงานหลังบ้าน</p>
                            <p class="text-s-24">เชื่อมต่อทุกออเดอร์ และสต๊อคในคลังสินค้า พร้อมรายงานที่ครบจบในระบบเดียว</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Integrated-Akita.png" alt="Akita Fulfillment Storage 1"></div>
                            </div>
                            <h2 class="text-s-24 text-w-700 mt-3" style="color:#373737">Storage & Inventory</h2>
                            <p class="text-w-500 mb-0 text text-s-24">จัดเก็บในคลังสินค้ามาตรฐาน</p>
                            <p class="text-s-24">จัดเก็บสินค้าด้วยระบบ WMS <br>และทีมบริหารคลังสินค้ามืออาชีพ</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Packing.png" alt="Akita Fulfillment Working Process 2"></div>
                            </div>
                            <h2 class="text-s-24 text-w-700 mt-3" style="color:#373737">Packing</h2>
                            <p class="text-w-500 mb-0 text text-s-24">รับออเดอร์และแพ็คสินค้า</p>
                            <p class="text-s-24">เราแพ็คสินค้าด้วยมาตรฐาน มั่นใจได้ว่าสินค้าของคุณจะได้รับการปกป้องตลอดการขนส่ง</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Delivery.png" alt="Akita Fulfillment Working Process"></div>
                            </div>
                            <h2 class="text-s-24 text-w-700 mt-3" style="color:#373737">Delivery</h2>
                            <p class="text-w-500 mb-0 text text-s-24">ส่งมอบขนส่งด้วยมาตรฐาน SLA</p>
                            <p class="text-s-24">ส่งต่อขนส่งตามรอบเวลา เพื่อให้มั่นใจว่า<br>สินค้าจะส่งถึงมือลูกค้าอย่างเร็วที่สุด</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="bg-icon-single d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="bg-icon-single d-flex"><img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Customer support.png" alt="Akita Fulfillment Customer Service Cropped"></div>
                            </div>
                            <h2 class="text-s-24 text-w-700 mt-3" style="color:#373737">Customer Support</h2>
                            <p class="text-w-500 mb-0 text text-s-24">ทีมให้บริการช่วยเหลือทุกปัญหา</p>
                            <p class="text-s-24">ทีมหลังบ้านของ Akita Fulfillment <br>พร้อมดูแลทุกปัญหาอย่างเป็นระบบ</p>
                        </div>   
                    </div>
                    <div class="row mt-4 d-block d-xl-none">
                        <div class="col-12">
                            <img class="img-fluid" src="./../../assets/SolutionsAkita/02_ภาพรวม.png" alt="Akita Fulfillment Benefits">
                        </div>
                    </div>
                    <div class="d-none d-xl-block">
                        <div class="row mt-5">
                            <img class="dog-img" src="./../../assets/SolutionsAkita/akita-3D.png" alt="มาสคอต Akita Fulfillment">
                            <div class="col-12" style="margin-bottom: 20px;margin-left: 375px;"><span class="text-s-28 font-wght px-3 py-2" style="background-color: #F76D22;border-radius: 15px;color:#FFF">ประสบการณ์ที่ลูกค้าจะได้รับจาก Akita Fulfillment</span></div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="row" style="background-color: #ffbeab;padding: 0px 230px 0px 15px;">
                                    <div class="col-3">
                                        <img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/SLA.png" alt="Akita Fulfillment SLA">
                                    </div>
                                    <div class="col-3">
                                        <img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Report.png" alt="Akita Fulfillment File Download">
                                    </div>
                                    <div class="col-3">
                                        <img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Location.png" alt="icon Akita Fulfillment map">
                                    </div>
                                    <div class="col-3">
                                        <img class="m-auto img-fluid p-3 p-md-4 p-lg-0" src="./../../assets/SolutionsAkita/Special offer.png" alt="Akita Fulfillment Delivery Partner">
                                    </div>
                                </div>
                                <div class="row text-center" style="background-color: #ff914d;padding: 15px 230px 25px 15px;border-bottom-left-radius: 25px;border-bottom-right-radius: 25px;">
                                    <div class="col-3">
                                        <h2 class="text-s-24 text-w-700 mb-1" style="color:#000">บริการมาตรฐานครบวงจร (SLA)</h2>
                                        <p class="text-w-500 mb-0 text text-s-24" style="color:#000">ระบบคลังปิด แพ็คดี ส่งไว<br>ไม่ตกมาตรฐาน มุ่งสู่ร้านค้าแนะนำ</p>
                                    </div>
                                    <div class="col-3">
                                        <h2 class="text-s-24 text-w-700 mb-1" style="color:#000">รายงานที่ใช้งานได้จริง</h2>
                                        <p class="text-w-500 mb-0 text text-s-24" style="color:#000">รายงานออเดอร์และรายงานสต๊อค<br>ที่พัฒนาเพื่อธุรกิจ eCommerce</p>
                                    </div>
                                    <div class="col-3">
                                        <h2 class="text-s-24 text-w-700 mb-1" style="color:#000">ใกล้สนามบินเพียง 6 กม.</h2>
                                        <p class="text-w-500 mb-0 text text-s-24" style="color:#000">ด้วยทำเลคลังสินค้าใกล้ดอนเมือง<br>จะจัดเก็บหรือส่งสินค้าก็สะดวก</p>
                                    </div>
                                    <div class="col-3">
                                        <h2 class="text-s-24 text-w-700 mb-1" style="color:#000">บริการพิเศษจากพาร์ทเนอร์</h2>
                                        <p class="text-w-500 mb-0 text text-s-24" style="color:#000">บริการ eCommerce อื่น ๆ พร้อมอัตรา<br>ค่าบริการพิเศษจาก Sellsuki อีกมากมาย</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__zoomInLeft img-center">
                                    <h2 class="text-s-24 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                    <img class="item-center hvr-rotate img-fluid rounded-3" src="https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/DSC_03283_1_66278eb645.jpg" alt="Akita Fulfillment Working Process 3">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-24 font-wght text-lg-start text-center d-none d-lg-block animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">Fulfillment Service</span></h2>
                                    <div class=" animate__bounceInLeft animate__slow">
                                        <div class="text-center text-lg-start text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737">Akita Fulfillment ให้บริการคลังสินค้าออนไลน์ครบวงจร เหมาะกับธุรกิจทุกระดับ ไม่ว่าจะออเดอร์น้อยหรือเยอะขนาดไหนเราพร้อมให้บริการด้วยความยืดหยุ่นตามรูปแบบธุรกิจของคุณ ด้วยบริการ เก็บ แพ็ค ส่ง พร้อมระบบหลังบ้าน Fulfillment ที่พร้อมเชื่อมต่อระบบกับช่องทางการขาย ให้คุณไม่พลาดทุกออเดอร์ของคุณ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-center mt-5"><h1 class="text-s-44 font-wght theme-text-main">ประเภทสินค้าที่ Akita Fulfillment สามารถให้บริการ</h1></div>
                    </div>
                    <div class="row mt-3 mb-3 text-center">
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="d-flex"><img class="m-auto img-fluid img-cover" style="border-radius: 20px;" src="./../../assets/SolutionsAkita/1/cosmetics_supplement.jpg" alt="Akita Fulfillment sample product 2"></div>
                            </div>
                            <p class="text-s-24 text-w-300 mt-3" style="color:#373737">ผลิตภัณฑ์ Cosmetics,<br/>Skincare, อาหารเสริม</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="d-flex"><img class="m-auto img-fluid img-cover" style="border-radius: 20px;" src="./../../assets/SolutionsAkita/1/baby&mom.jpg" alt="Akita Fulfillment sample product 4"></div>
                            </div>
                            <p class="text-s-24 text-w-300 mt-3" style="color:#373737">ผลิตภัณฑ์แม่และเด็ก</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="d-flex"><img class="m-auto img-fluid img-cover" style="border-radius: 20px;" src="./../../assets/SolutionsAkita/1/gadgets.jpg" alt="Akita Fulfillment sample product 3"></div>
                            </div>
                            <p class="text-s-24 text-w-300 mt-3" style="color:#373737">ผลิตภัณฑ์ Gadget IT</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="d-flex"><img class="m-auto img-fluid img-cover" style="border-radius: 20px;" src="./../../assets/SolutionsAkita/1/Pet.jpg" alt="Akita Fulfillment sample product 5"></div>
                            </div>
                            <p class="text-s-24 text-w-300 mt-3" style="color:#373737">ผลิตภัณฑ์อาหารสัตว์เลี้ยง</p>
                        </div>
                        <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 col-cutom">
                            <div class="d-flex item-center mt-md-0 mt-2 hvr-float-shadow">
                                <div class="d-flex"><img class="m-auto img-fluid img-cover" style="border-radius: 20px;" src="./../../assets/SolutionsAkita/1/Customized item.png" alt="Akita Fulfillment sample product 1"></div>
                            </div>
                            <p class="text-s-24 text-w-300 mt-3" style="color:#373737">งานแพ็ค-ส่งตามระยะเวลา<br/> เช่น งานวิ่ง ของที่ระลึก</p>
                        </div>  
                    </div>
                    <div v-for="(data, index) in responseData" :key="index">
                        <div>
                            <div v-if="data.attributes.position == 'Left'" class="row mt-5 p-custom-2 d-flex">
                                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pt-5 animate__zoomInLeft img-center">
                                    <h2 class="text-s-24 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <img v-if="data.attributes.image != null" class="item-center hvr-rotate img-fluid rounded-3" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto">
                                    <h2 class="text-s-36 font-wght text-lg-start text-center d-none d-lg-block  animate__bounceInRight animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <div class=" animate__bounceInLeft animate__slow">
                                        <div class="text-center text-lg-start text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="row mt-4 p-custom-2 d-flex">
                                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ps-lg-5 pe-lg-5 ps-3 pe-3 m-auto ">
                                    <h2 class="text-s-24 font-wght text-lg-start text-center d-none d-lg-block animate__bounceInLeft animate__slow" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <div class=" animate__bounceInRight animate__slow">
                                        <div>
                                            <div class="text-center text-lg-start text-s-24 mt-4 p-2 pb-0 mb-0" style="color:#373737" v-html="$md.render(data.attributes.detail)"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-first order-lg-last col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  animate__zoomInRight img-center">
                                    <h2 class="text-s-24 font-wght text-lg-start text-center d-block d-lg-none pb-5" style="padding: 10px 5px;"><span class="theme-text-main theme-border" style="padding: 10px 5px">{{data.attributes.header}}</span></h2>
                                    <img v-if="data.attributes.image != null" class="item-center hvr-rotate img-fluid rounded-1" :src="data.attributes.image.data.attributes.url" :alt="data.attributes.image.data.attributes.alternativeText">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-xxl-5 p-xl-5 p-lg-5 p-md-4 p-sm-5 p-5" style="background: linear-gradient(0, rgba(247, 109, 34, 0.9) 0%, rgba(249, 158, 30, 0) 86.22%);">
                        <div class="row">
                            <div class="col-12 mt-4 mb-2 text-center animate__animated animate__fadeInDown theme-text-sub"><h1 class="text-s-44 text-w-700">{{ $t("solution.akita.brand_value") }}</h1></div>    
                        </div>
                        <div class="row mt-5 text-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-2">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-4.webp" alt="icon customer service"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                                <h2 class="text-s-36 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">{{ $t("solution.akita.listening") }}</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-5.webp" alt="icon fast delivery"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                                <h2 class="text-s-36 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">{{ $t("solution.akita.active") }}</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-6.webp"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                                <h2 class="text-s-36 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">{{ $t("solution.akita.attention") }}</h2>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                                <div class="bg-icon d-flex item-center mt-md-0 mt-5">
                                    <div class="bg-icon-main d-flex animate__animated animate__rotateIn animate__slow animate__delay-1s"><img class="m-auto" src="./../../assets/SolutionsAkita/icon-solution-akita-7.webp" alt="icon partner"></div>
                                </div>
                                <img class="item-center mt-4 animate__animated animate__fadeInDown animate__delay-1s" src="./../../assets/icon/Group163.webp">
                                <h2 class="text-s-36 mt-3 animate__animated animate__fadeInDown animate__delay-2s" style="color:#373737">{{ $t("solution.akita.reliable") }}</h2>
                            </div>       
                        </div>
                    </div>
                <!--  -->
                <div class="padding-card pt-0 text-center">
                    <Review :type="type"/>
                </div>
                <GetQuote id="form" :type="type" :blog="this.$route.query.blog"/>         
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InterestingArticles from '@/components/InterestingArticles'
import Review from '@/components/Review'
import GetQuote from '@/components/Solutions/SolutionsGetQuote'
import Preloader from '@/components/Preloader'

export default {
    name: 'SolutionsAkita',
    layout:"Layout",
    components: {
        InterestingArticles,
        Review,
        GetQuote,
        Preloader
    },
    head() {
        return this.$headUtil({
            lang: this.$i18n.locale == 'th-TH' ? 'th-TH'  : 'en-TH',
            title: "บริการระบบคลังสินค้า เก็บ แพ็ก ส่ง Akita",
            route: process.env.MAIN_URL + this.$route.path
        });
    },
    jsonld() {
      return [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": this.$t("Menu.Home"),
                "item": "https://www.sellsuki.co.th/"
            },{
                "@type": "ListItem",
                "position": 2,
                "name": this.$t("Menu.Solution"),
                "item": "https://www.sellsuki.co.th/"
            },{
                "@type": "ListItem",
                "position": 3,
                "name": "Akita"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "คลังสินค้าครบวงจร คืออะไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ระบบคลังสินค้าครบวงจร คอยดูแลตั้งแต่ขั้นตอนเก็บ แพ็ก ส่งสินค้า ให้เจ้าของธุรกิจทำงานได้ง่ายและสะดวกมากขึ้น หมดกังวลเรื่องสินค้าหรือออเดอร์ตกค้าง พัสดุหล่น และยังสามารถช่วยควบคุมต้นทุนในการจัดส่งสินค้าด้วยระบบการจัดการต่างๆ ที่สามารถรองรับบนทุกอุปกรณ์ออนไลน์ เชื่อมต่อได้ทุกที่ต่อเนื่องตลอด 24 ชั่วโมง "
                    }
                },
                {
                    "@type": "Question",
                    "name": "ระบบจัดการออเดอร์ OMS คืออะไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ระบบจัดการออเดอร์ (Order Management System) ที่ทำการรวบรวมออเดอร์การสั่งซื้อของคุณ เข้ามาอยู่ภายในระบบของ Akita Fulfillment เหมาะสำหรับธุรกิจที่มีคลังสินค้าเป็นของตัวเองแต่ยังไม่มีระบบการจัดการภายใน สามารถใช้งานผ่านระบบของเรา เพื่อเป็นการเพิ่มประสิทธิภาพในการจัดการดูแลออเดอร์ และคลังสินค้า"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ระบบ Akita Fulfillment เชื่อมต่อบนแพลตฟอร์ม Marketplace ใดได้บ้าง?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ระบบ Akita Fulfillment สามารถเชื่อมต่อผ่านระบบ Shopee, Lazada และ LINE Shopping สะดวก และรวดเร็ว ตอบโจทย์ครบทุกออเดอร์ของคุณ"
                    }
                },
                {
                    "@type": "Question",
                    "name": "ประเภทระบบคลังสินค้า Akita Fulfillment มีอะไรบ้าง",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "1. คลังสินค้าทั่วไป เหมาะสำหรับธุรกิจเสื้อผ้าแฟชั่น เครื่องประดับ สินค้าแม่และเด็ก อุปกรณ์เครื่องใช้ไฟฟ้า ฯลฯ\n2. คลังสินค้าควบคุมอุณหภูมิ เหมาะสำหรับธุรกิจที่ต้องการควบคุมในเรื่องของอุณหภูมิ จำพวกเครื่องสำอางค์ สกินแคร์ อาหารเสริม หรือเครื่องดื่ม ฯลฯ"
                    }
                },
                {
                    "@type": "Question",
                    "name": "OMS คือระบบอะไร",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "OMS  : Order Management System ระบบจัดการออเดอร์ ที่จะเข้ามาช่วยบริหารจัดการเกี่ยวกับการขาย และรายการคำสั่งซื้อ ให้คุณสามารถติดตามรายการคำสั่งซื้อต่างๆ แบบครบจบในที่เดียว แบบ Real-Time ตลอด 24 ชม. ผ่านระบบออนไลน์ เหมาะสำหรับธุรกิจที่มีคลังสินค้าเป็นของตัวเอง แต่ยังไม่มีระบบการจัดการภายใน หรือแม่ค้าที่ออเดอร์ล้นมือ ไม่มีเวลามาติดตามรายการสินค้าทั้งหมดด้วยตัวเอง "
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org/", 
            "@type": "Service", 
            "name": "Akita Fulfillment",
            "image": "https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Header_AKT_01_1_7c81e4748a.webp",
            "description": "Akita Fulfillment ให้บริการคลังสินค้าออนไลน์ครบวงจร เหมาะกับธุรกิจทุกระดับ ไม่ว่าจะออเดอร์น้อยหรือเยอะขนาดไหนเราพร้อมให้บริการด้วยความยืดหยุ่นตามรูปแบบธุรกิจของคุณ ด้วยบริการ เก็บ แพ็ค ส่ง พร้อมระบบหลังบ้าน Fulfillment ที่พร้อมเชื่อมต่อระบบกับช่องทางการขาย ให้คุณไม่พลาดทุกออเดอร์ของคุณ",
            "brand": {
                "@type": "Brand",
                "name": "Sellsuki"
            },
            "sku": "Akita Fulfillment",
            "offers": {
                "@type": "Offer",
                "url": "https://www.sellsuki.co.th/solutions/akita",
                "priceCurrency": "THB",
                "price": "0",
                "availability": "https://schema.org/InStock"
            }
        }
    ]
    },
    data () {
            return {
                type: 'Akita',
                isHidden: false,
                lang: this.$i18n.locale || 'th-TH',
                animation1:false,
                responseData:[]
        }
    },
    async asyncData({ $axios, route, i18n }) {
        return {
          responseData: [
            { id: 1, attributes: { position: "Left", header: "บริหารจัดการสินค้าครบวงจร", image: { data: { attributes: { url: "https://placehold.co/600x400/FF6603/FFFFFF/png?text=Akita+Service", alternativeText: "" } } }, detail: "ระบบจัดการสินค้าที่ครอบคลุมทุกช่องทางการขาย" } },
            { id: 2, attributes: { position: "Right", header: "เชื่อมต่อ Marketplace ชั้นนำ", image: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Marketplace", alternativeText: "" } } }, detail: "เชื่อมต่อกับ Shopee, Lazada, TikTok Shop และอีกมากมาย" } }
          ]
        }
    },
    mounted () {
            //window.addEventListener('scroll', this.onShow);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        onShow (event) {
            this.windowTop = event.target.documentElement.scrollTop;
            //if(this.windowTop > 300){
            //    document.querySelector('#contant1').style.display = "block";
            //}
            //if(this.windowTop > 600){
            //    document.querySelector('#contant2').style.display = "block";
            //}
            if(this.windowTop > 1200){
                //this.animation1 = true
            }
        },
    }
}
</script>

<style scoped>
.accordion-button{
    background-color: #FBFBFB !important;
    padding: 5px;
}

.accordion-button:not(.collapsed)::after{
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.accordion-button:not(.collapsed){
    box-shadow:none;
}

.item-center{
    display: block !important;
}

.bg-icon{
    width: 146px;
    height: 146px;
    background-color: #2E69A1;
    border-radius: 50%;
    left: 8px;
    position: relative;
}

.bg-icon-main{
    margin-left: -10px !important;
    margin-top: -10px !important;
    background-color: #143555;
    width: 146px;
    height: 146px;
    border-radius: 50%;
}

.theme-text-main{
    color: #F76D22;
}

.theme-text-sub{
    color: #143555;
}

.theme-border{
    border-bottom: 1px solid #143555 !important;
}

.img-cover{
    object-fit: cover;
    object-position: left;
    width: 100%;
    height: 170px;
}

div::v-deep p{
    margin-bottom: 0px !important;
}
div::v-deep ul{
    margin-bottom: 0px !important;
}
div::v-deep pre{
    margin-bottom: 0px !important;
}
.img-banner-top{
    margin-top: 30px !important;
    margin-left: 45px;
    width: 90%;
}

.dog-img{
    width: 320px;
    position: relative;
    margin-right: -60px;
    margin-left: auto;
    margin-bottom: -375px;
}

/* -------------------------#Responsive------------------------ */

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .img-center{
        display: block;
        align-items: center;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .mt-custom{
        margin-top: -35px !important;
    }
    .bg-icon-single{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .img-center{
        display: block;
        align-items: center;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .img-center{
        display: block;
        align-items: center;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 146px;
        height: 146px;
        border-radius: 50%;
    }
    .img-center{
        display: flex;
        align-items: center;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .p-custom{
        padding-left: 50px !important;
        padding-right: 50px !important;
    }
    .p-custom-2{
        padding-left: 65px !important;
        padding-right: 65px !important;
    }
    .mt-custom{
        margin-top: 3rem!important;
    }
    .bg-icon-single{
        width: 230px;
        height: auto;
        border-radius: 50%;
    }
    .col-cutom{
        width: 20% !important;
    }
    .img-center{
        display: flex;
        align-items: center;
    }
}
</style>
