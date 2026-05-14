<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Cards -->
      <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <div class="card-body p-0">
            <span class="mb-0 text-s-18 b-c">Web Development</span>
            <p class="text-s-20 mt-5 mb-0 text-center color-1F2937">เราพาแบรนด์น้องใหม่ฝ่าด่านแบรนด์รุ่นพี่ กลายเป็นม้ามืดมาแรง เพิ่มยอดขายแซงทุกแบรนด์ <span class="color-8B5CF6 font-bd">ขึ้นแท่น Best Seller ในเซเว่นเพียง แค่ภายในหนึ่งเดือนเท่านั้น</span></p>
            <p class="text-s-20 font-bd mt-5 mb-0 color-6B7280">Posh Medica</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  data() {
    return {
      cards: [
        { title: "Card 1", description: "This is the first card." },
        { title: "Card 2", description: "This is the second card." },
        { title: "Card 3", description: "This is the third card." },
        { title: "Card 4", description: "This is the fourth card." },
      ],
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        direction: "horizontal", // เลื่อนแนวตั้ง
        slidesPerView: 1.3, // แสดงการ์ดบางส่วนถัดไป
        spaceBetween: 24, // ระยะห่างระหว่างการ์ด
        //centeredSlides: true,
        loop: true, // วนลูป
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
};
</script>

<style scoped>
/* Container ของ Swiper */
.swiper-container {
  width: 100%;
  max-width: 100%; /* ขนาดของ container */
  margin: auto;
  padding-left: 24px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* การ์ดในแต่ละ Slide */
.card{
  background-color: #FAF9FF;
  border: 1.5px solid #00000008;
  border-radius: 16px;
  box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
  padding: 24px;
  background-image: url(../../../assets/SolutionsWizemoves/success/chat-bubble-left-right.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 50%;
}

.b-c{
  padding: 2px 8px;background-color: #FFFFFF;border: 1px solid #D4D1EC;border-radius: 16px;color:#A78BFA
}

/* Pagination */
.swiper-pagination {
  margin-top: 10px;
}

/* ปุ่ม Navigation */
.swiper-button-next,
.swiper-button-prev {
  color: #007bff;
}

.text-s-20{
  line-height: 20px;
}

.text-s-18{
  line-height: 18px;
}
</style>
