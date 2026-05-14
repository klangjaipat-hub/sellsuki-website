<template>
    <div>
        <div class="row" v-for="(section, index) in sections" :key="index">
            <div class="col-12 text-start mtmd-5 mt-4 p-0">
                <div class="card bg" :class="`sections-${index}`" :style="{ backgroundImage: `url(${section.bg})` }">
                    <div class="card-body pb-0">
                        <img class="img-bg d-none d-xl-block" :src="section.image" alt="Image placeholder.svg" />

                        <img class="img-bg d-none d-md-block d-xl-none" :src="section.imageMobile"
                            alt="Image placeholder.svg" />
                        <div style="position: relative; z-index: 1;">
                            <p class="text-s-60 font-bd color-1F2937 mb-0">{{ section.title }}</p>
                            <p class="text-s-24 font-df color-1F2937 mb-0 mt-4 w-text" v-html="section.subtitle"></p>

                            <p v-for="(item, i) in section.highlights" :key="i"
                                class="text-s-24 font-df color-1F2937 mb-0 mt-4 d-flex align-items-center">
                                <img :src="item.icon" class="me-2" />
                                {{ item.text }}
                            </p>

                            <a target="_blank" rel="noopener" :href="section.button.link" class="btn-gradient banner-btn mt-4"
                                :data-tag="'cta-solution-' + index">
                                <span class="text">สนใจใช้บริการ</span>
                                <img width="24px" height="24px" src="~/assets/New/Home/Solutions/arrow-right.svg"
                                    alt="arrow-right.svg" class="icon ms-2" />
                            </a>
                        </div>
                    </div>
                    <img class="img-bg d-block d-md-none mt-4" :src="`${section.imageMobile}`"
                        alt="Image placeholder.svg" />
                    <div class="card-body mt-xl-5 mt-0 pt-0">
                        <div style="position: relative; z-index: 1;">
                            <div class="scroll-fade-container mt-xl-5 mt-md-0 mt-3">
                                <div class="scroll-wrapper">
                                    <div class="card-container">
                                        <div v-for="(card, i) in section.cards" :key="i" class="line-card">
                                            <div class="icon-group">
                                                <div class="icon-aura"></div>
                                                <div class="icon"><img class="heroicons-outline" :src="card.icon" :alt="card.title" /></div>
                                            </div>
                                            <div class="line-title text-s-28 font-md mt-3 mb-2">{{ card.title }}</div>
                                            <div class="line-title text-s-24">{{ card.desc }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                {
                    bg: require("~/assets/New/Home/Solutions/BG.png"),
                    image: require("~/assets/New/Home/Solutions/Image placeholder-1.svg"),
                    imageMobile: require("~/assets/New/Home/Solutions/Image placeholder-1-m.svg"),
                    title: "บริการ LINE Agency ครบวงจร",
                    subtitle:
                        "LINE Agency partner ที่รับความไว้วางใจจากผู้ประกอบการไทยมากที่สุดเป็นอันดับ 1 ของประเทศ",
                    highlights: [
                        {
                            icon: require("~/assets/New/Home/Solutions/Icon-check.svg"),
                            text: "มีจำนวนผู้ใช้มากกว่า 9,000 ราย",
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/Icon-check.svg"),
                            text: "มี LINE Certified Coach ที่ได้รับตำแหน่ง 4 ปีซ้อนคอยให้คำแนะนำ",
                        },
                    ],
                    button: {
                        text: "สนใจใช้บริการ",
                        link: "/solutions/lineagency",
                        icon: require("~/assets/New/Home/Solutions/arrow-right.svg"),
                    },
                    cards: [
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-1.svg"),
                            title: "LINE Official Account",
                            desc: "ขยายธุรกิจผ่าน LINE ส่งตรงทุกข้อความถึงใจลูกค้าและ กลุ่มเป้าหมายแบบมืออาชีพ",
                            active: true,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-2.svg"),
                            title: "LINE OA Corporate",
                            desc: "บัญชี LINE ทางการ สำหรับองค์กรขนาดใหญ่ ตัวเลือกที่ใช่ เหมาะสำหรับองค์กรที่มีลูกค้าหลักล้าน",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-3.svg"),
                            title: "My Customer | CRM",
                            desc: "รวมข้อมูลลูกค้า วิเคราะห์ พัฒนา พร้อมเชื่อม LINE OA และระบบสะสมแต้มในคลิกเดียว",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-4.svg"),
                            title: "Sponsored Sticker / Theme / Emoji",
                            desc: "มัดใจลูกค้าเก่า ดึงดูดลูกค้าใหม่ ด้วยสติ๊กเกอร์ไลน์ ธีม และ อิโมจิ ที่ออกแบบมาเพื่อแบรนด์ของคุณโดยเฉพาะ",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-5.svg"),
                            title: "LINE Official Notification (LON)",
                            desc: "เพิ่มประสิทธิภาพให้การสื่อสารกับลูกค้าของคุณด้วยการแจ้งเตือนผ่าน LINE Official Account",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-6.svg"),
                            title: "LINE Smart Channel",
                            desc: "โฆษณาบนหน้าแชท LINE ตำแหน่ง Top View โอกาสทอง ในการเข้าถึงกว่า 38 ล้านคน/วัน",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/1/Icon-aura-7.svg"),
                            title: "LINE Today",
                            desc: "เข้าถึงกลุ่มเป้าหมายผ่านพื้นที่โฆษณาบน LINE Today เห็นชัดตลอด 24 ชม.",
                            active: false,
                        },
                    ],
                },
                {
                    bg: require("~/assets/New/Home/Solutions/BG2.png"),
                    image: require("~/assets/New/Home/Solutions/Image placeholder-2.svg"),
                    imageMobile: require("~/assets/New/Home/Solutions/Image placeholder-2-m.svg"),
                    title: "บริการ Business Solution ครบวงจร",
                    subtitle: "ผู้เชี่ยวชาญด้านธุรกิจตัวจริง ที่เป็นมากกว่าเอเจนซี่การตลาดที่พร้อมจะติดปีกให้ธุรกิจของคุณ<br class='d-none d-xl-block'/>ทะยานสู่ความสำเร็จที่เหนือกว่า ด้วย 7 บริการย่อยดังนี้",
                    highlights: [],
                    button: {
                        text: "ดูรายละเอียด",
                        link: "/solutions/wizemoves",
                        icon: require("~/assets/New/Home/Solutions/arrow-right.svg"),
                    },
                    cards: [
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-1.svg"),
                            title: "Business Consulting",
                            desc: "บริการที่ปรึกษาธุรกิจและการตลาดที่คร่ำควอดอยู่ใน วงการมานานกว่า 10 ปี",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-2.svg"),
                            title: "Influencer Marketing",
                            desc: "บริการจัดหาและเลือกสรร Influencer และ KOL ทุกแพลตฟอร์ม",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-3.svg"),
                            title: "Advertising",
                            desc: "บริการรับทำโฆษณาออนไลน์บน social media ทุกแพลตฟอร์ม",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-4.svg"),
                            title: "Content Marketing",
                            desc: "บริการให้คำปรึกษา วางแผนคอนเทนต์ และ บริการแอดมินตอบแชท",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-5.svg"),
                            title: "e-Distributor",
                            desc: "บริการดูแลร้านค้าและเพิ่มยอดขายบน Marketplace",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-6.svg"),
                            title: "MarTech Solution",
                            desc: "บริการออกแบบเว็บไซต์ แอป พร้อมเชื่อม API ให้ตอบโจทย์ ทุกธุรกิจ",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/2/Icon-aura-7.svg"),
                            title: "Data Analytics",
                            desc: "บริการจัดการและวิเคราะห์ข้อมูลสำหรับธุรกิจ",
                            active: false,
                        }
                    ],
                },
                {
                    bg: require("~/assets/New/Home/Solutions/BG.png"),
                    image: require("~/assets/New/Home/Solutions/Image placeholder-3.svg"),
                    imageMobile: require("~/assets/New/Home/Solutions/Image placeholder-3-m.svg"),
                    title: "บริการคลังสินค้าครบวงจร",
                    subtitle: "บริการคลังสินค้าและจัดส่งครบวงจร สำหรับธุรกิจอีคอมเมิร์ซ พร้อมทีมซัพพอร์ตที่พร้อมแก้ปัญหา <br class='d-none d-xl-block'/>อย่างรวดเร็ว หมดกังวลเรื่องระบบหลังบ้านที่ยุ่งยาก เพิ่มโอกาสในการต่อยอดทางธุรกิจของคุณ",
                    highlights: [],
                    button: {
                        text: "ดูรายละเอียด",
                        link: "/solutions/akita",
                        icon: require("~/assets/New/Home/Solutions/arrow-right.svg"),
                    },
                    cards: [
                        {
                            icon: require("~/assets/New/Home/Solutions/3/Icon-aura-1.svg"),
                            title: "Fulfillment",
                            desc: "การ เก็บ แพ็ก ส่ง สินค้า ครบจบในที่เดียว",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/3/Icon-aura-2.svg"),
                            title: "Cold Storage Warehouse",
                            desc: "คลังสินค้าระบบปิด มีการรักษาความปลอดภัย และควบคุม อุณหภูมิตลอด 24 ชั่วโมง",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/3/Icon-aura-3.svg"),
                            title: "ระบบ OMS และ WMS",
                            desc: "มีระบบ OMS และ WMS ที่ล้ำสมัย ใช้งานง่าย สามารถเข้า ถึงข้อมูลการขายจากช่องทาง Marketplace",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/3/Icon-aura-4.svg"),
                            title: "Customer Service ",
                            desc: "มีทีม Customer Service ที่มากประสบการณ์และจริงใจ คอยให้บริการ",
                            active: false,
                        },
                    ],
                },
                {
                    bg: require("~/assets/New/Home/Solutions/BG2.png"),
                    image: require("~/assets/New/Home/Solutions/Image placeholder-4.svg"),
                    imageMobile: require("~/assets/New/Home/Solutions/Image placeholder-4-m.svg"),
                    title: "บริการ CRM/CDP เพื่อธุรกิจยุคใหม่",
                    subtitle: "บริการให้คำปรึกษาและพัฒนาระบบ CRM และ CDP ที่พร้อมจะช่วยรวบรวม วิเคราะห์ และจัดการข้อมูลลูกค้า <br class='d-none d-xl-block'/>เพื่อสร้างความสัมพันธ์ที่ดีและพัฒนาการสื่อสารของแบรนด์อย่างมีประสิทธิภาพ",
                    highlights: [],
                    button: {
                        text: "ดูรายละเอียด",
                        link: "/solutions/oc2plus",
                        icon: require("~/assets/New/Home/Solutions/arrow-right.svg"),
                    },
                    cards: [
                        {
                            icon: require("~/assets/New/Home/Solutions/4/Icon-aura-1.svg"),
                            title: "CRM/CDP สำหรับ Modern Businesses",
                            desc: "ระบบ CRM/CDP ที่ออกแบบมาเพื่อธุรกิจยุคใหม่พร้อมแคมเปญหลากหลายประเภทให้ธุรกิจเลือกใช้",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/4/Icon-aura-2.svg"),
                            title: "Personalized Marketing",
                            desc: "รองรับการทำ CRM แบบ Personalized Marketing ราย Segment ของลูกค้า",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/4/Icon-aura-3.svg"),
                            title: "Point System",
                            desc: "ระบบสะสมแต้มที่จะช่วยให้คุณเข้าใจลูกค้าอย่างลึกซึ้ง เปลี่ยนทุกการซื้อให้เป็นโอกาสในการเติบโต",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/4/Icon-aura-4.svg"),
                            title: "Omnichannel CRM Integration",
                            desc: "เชื่อมต่อข้อมูลลูกค้าได้ทุกที่เพราะระบบของเรารองรับการทำ CRM จากทั้งช่องทางออนไลน์และออฟไลน์",
                            active: false,
                        },
                        {
                            icon: require("~/assets/New/Home/Solutions/4/Icon-aura-5.svg"),
                            title: "LINE OA Integration",
                            desc: "เติบโตเหนือคู่แข่งด้วยระบบ Multi Line OA ที่ทรงพลัง",
                            active: false,
                        }
                    ],
                },
            ],
        };
    },
    mounted() {
        const sliders = this.$el.querySelectorAll('.scroll-wrapper');

        sliders.forEach(slider => {
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5; // ความเร็วเลื่อน
                slider.scrollLeft = scrollLeft - walk;
            });
        });
    }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
@media only screen and (min-width: 1580px) {
    .row>* {
        padding-right: 0px !important;
        padding-left: 0px !important;
    }
}

.icon-group .heroicons-outline {
  position: absolute;
  top: calc(50% - 16px);
  left: calc(50% - 16px);
  width: 32px;
  height: 32px;
  aspect-ratio: 1;
  transition: filter 0.1s ease; /* Add smooth transition */
}

.line-card:hover .heroicons-outline {
  filter: brightness(0) invert(1); /* This makes the icon white */
}

.icon-group .icon-aura {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  background-color: transparent;
  border-radius: 16px;
  aspect-ratio: 1;
}

.icon-group {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  position: relative;
  border-radius: 20px;
  border: 1px solid;
  border-color: #22C55E1A;
}

.icon-group .icon {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  border: 1px solid;
  border-color: #22C55EB2;
  background: transparent;
}

.line-card:hover .icon-aura {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  background-color: #22C55EB2;
  border-radius: 16px;
  filter: blur(10px);
  aspect-ratio: 1;
}

.line-card:hover .icon {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #22C55EB2;
}

.bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.text-ranbow,
.text-ranbow>* {
    background: linear-gradient(84.92deg, #F35C20 41.14%, #FB923C 50.69%, #58C6FF 57.79%, #01B1F5 68.43%);
    -webkit-background-clip: text;
  background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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

.btn-gradient {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    color: #fff !important;
    background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
    border: none;
    border-radius: 32px;
    box-shadow: 0 2px 8px 0 #ec5e2a22;
    cursor: pointer;
    transition: background 0.3s, box-shadow 0.3s;
    width: auto;
}

.card {
    border: 1px solid #00000008 !important;
    border-radius: 16px;
}

.scroll-fade-container {
    position: relative;
    width: 100%;
}

/* ✅ ถ้าต้องการฟุ้งซ้ายด้วย เพิ่ม block นี้ได้เลย
.scroll-fade-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, white 60%, transparent);
    z-index: 10;
}
*/

.scroll-wrapper {
    overflow-x: auto;
    padding-right: 55px !important;
    padding: 40px 0px;
    /* scroll-snap-type: x mandatory; */
}

.scroll-wrapper::after {
    display: none !important;
}

.card-container {
    display: flex;
    width: max-content;
}

.line-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    scroll-snap-align: start;
    border: 1px solid #e5e7eb;
    transition: 0.3s;
}

.line-card.active {
    border: 2px solid #32A9FF;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 70%, rgba(50, 169, 255, 0.1));
}

.icon-circle {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.line-title text-s-28 {
    color: #1F2937;
    margin-top: 16px;
}

.line-title text-s-24 {
    color: #6b7280;
    margin-top: 16px;
}

/* Scrollbar */
.scroll-wrapper::-webkit-scrollbar {
    height: 6px;
}

.scroll-wrapper::-webkit-scrollbar-track {
    background: #FFFFFF80;
    border-radius: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    height: 10px;
}

.scroll-wrapper::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 8px;
    height: 6px;
}

.scroll-wrapper.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
}

.scroll-wrapper {
    cursor: grab;
}

@media (max-width: 767px) {
    .card-body {
        padding: 32px 0px 32px 24px;
        position: relative;
        z-index: 9;
    }

    .img-bg {
        position: relative;
        z-index: 0;
        width: 100%;
    }

    .btn-gradient {
        font-size: 24px !important;
    }

    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .line-card {
        flex: 0 0 320px;
        min-height: 172px;
        padding: 24px;
    }

    .line-card img {
        width: 48px;
        height: 48px;
    }

    .card-container {
        gap: 24px;
    }

    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }
}

@media (min-width: 768px) {
    .card-body {
        padding: 32px 0px 32px 24px;
        position: relative;
        z-index: 9;
    }

    .img-bg {
        position: absolute;
        z-index: 0;
        right: 24px;
        top: 32px;
        object-fit: cover;
        width: 344px;
        height: 234px;
    }

    .btn-gradient {
        font-size: 24px !important;
    }

    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .line-card {
        flex: 0 0 320px;
        min-height: 172px;
        padding: 24px;
    }

    .line-card img {
        width: 48px;
        height: 48px;
    }

    .card-container {
        gap: 24px;
    }

    .btn-gradient {
        height: 36px;
        font-family: 'Heavent'
    }

    /* ✅ เอฟเฟกต์ฟุ้งด้านขวา (ไม่เลื่อนตามเนื้อหา) */
    .scroll-fade-container::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 100%;
        pointer-events: none;
        background: linear-gradient(90deg, rgba(241, 244, 247, 0) 0%, #F1F4F7 50%);
        z-index: 10;
    }

    .w-text {
        width: 350px;
    }
}

@media (min-width: 1200px) {
    .card-body {
        padding: 120px 0px 120px 60px;
        position: relative;
        z-index: 9;
    }

    .img-bg {
        position: absolute;
        z-index: 0;
        right: 0px;
        top: 120px;
        height: 220px;
        width: 600px;
        object-fit: contain;
    }

    .btn-gradient {
        font-size: 28px !important;
    }

    .text-s-24 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-28 {
        font-size: 28px !important;
        line-height: 28px !important;
    }

    .text-s-60 {
        font-size: 60px !important;
        line-height: 60px !important;
    }

    .line-card {
        flex: 0 0 450px;
        min-height: 268px;
        padding: 40px;
    }

    .line-card img {
        width: 80px;
        height: 80px;
    }

    .card-container {
        gap: 40px;
    }

    .btn-gradient {
        height: 48px;
        font-family: 'Heavent-med'
    }

    .w-text {
        width: 100%;
    }
}

@media (min-width: 1400px) {
    .card-body {
        padding: 120px 0px 120px 176px;
        position: relative;
        z-index: 9;
    }
}

@media (min-width: 1500px) {
    .card-body {
        padding: 120px 0px 120px 176px;
        position: relative;
        z-index: 9;
    }

    .img-bg {
        position: absolute;
        z-index: 0;
        right: 95px;
        top: 120px;
        height: 300px;
        width: 700px;
        object-fit: contain;
    }
}

/* LINE Agency Section - Green */
.sections-0 .line-card:hover{
    border-radius: 16px;
    border: 1px solid #4ADE80;
    background: #FFF;

    box-shadow: 0 0 10px 7px rgba(34, 197, 94, 0.10);
}

.sections-0 .icon-group {
  border-color: rgba(34, 197, 94, 0.1); /* #22C55E1A */
}

.sections-0 .icon-group .icon {
  border-color: rgba(34, 197, 94, 0.7); /* #22C55EB2 */
}

.sections-0 .line-card:hover .icon-aura,
.sections-0 .line-card:hover .icon {
  background-color: rgba(34, 197, 94, 0.7); /* #22C55EB2 */
}

/* Business */
.sections-1 .line-card:hover{
    border-radius: 16px;
    border: 1px solid #A78BFA;
    background: #FFF;

    box-shadow: 0 0 10px 7px rgba(11, 50, 82, 0.10);
}

.sections-1 .icon-group {
  border-color: #8B5CF61A;
}

.sections-1 .icon-group .icon {
  border-color: #8B5CF6;
}

.sections-1 .line-card:hover .icon-aura,
.sections-1 .line-card:hover .icon {
  background-color: #8B5CF6;
}

/* Warehouse */
.sections-2 .line-card:hover{
    border-radius: 16px;
    border: 1px solid #3C688C;
    background: #FFF;

    box-shadow: 0 0 10px 7px rgba(11, 50, 82, 0.10);
}

.sections-2 .icon-group {
  border-color: #0B32521A;
}

.sections-2 .icon-group .icon {
  border-color: #0B3252B2;
}

.sections-2 .line-card:hover .icon-aura,
.sections-2 .line-card:hover .icon {
  background-color: #0B3252B2;
}

/* CRM/CDP */
.sections-3 .line-card:hover{
    border-radius: 16px;
    border: 1px solid #58C6FF;
    background: #FFF;

    box-shadow: 0 0 10px 7px rgba(50, 169, 255, 0.10);
}

.sections-3 .icon-group {
  border-color: #32A9FF1A;
}

.sections-3 .icon-group .icon {
  border-color: #32A9FF;
}

.sections-3 .line-card:hover .icon-aura,
.sections-3 .line-card:hover .icon {
  background-color: #32A9FF;
}
</style>
