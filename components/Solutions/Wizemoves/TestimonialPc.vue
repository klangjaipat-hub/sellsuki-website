<template>
  <div class="row">
      <div class="col-12">
        <img src="../../../assets/SolutionsWizemoves/success/pattern.png" alt="Group 1000011058.png" style="position: absolute;margin-top: -15px;margin-left: 730px">
        <img src="../../../assets/SolutionsWizemoves/success/pattern.png" alt="Group 1000011058.png" style="position: absolute;margin-top: 305px;margin-left: 285px">

        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 725.png" alt="Ellipse 725.png" style="position: absolute;margin-top: -125px;margin-left: 90px;">
        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 723.png" alt="Ellipse 725.png" style="position: absolute;margin-top: -105px;margin-left: 1188px">
        <img src="../../../assets/SolutionsWizemoves/success/Group 1000011060.png" alt="Ellipse 725.png" style="position: absolute;margin-top: -80px;margin-left: 1085px">

        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 724.png" alt="Ellipse 724.png" style="position: absolute;margin-top: 90px;margin-left: 0px;">
        <img src="../../../assets/SolutionsWizemoves/success/Group 1000011059.png" alt="Group 1000011059.png" style="position: absolute;margin-top: 212px;margin-left: 100px">
        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 724.png" alt="Ellipse 724.png" style="position: absolute;margin-top: 60px;margin-left: 1250px;">

        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 728.png" alt="Ellipse 728.png" style="position: absolute;margin-top: 385px;margin-left: 150px;">
        <img src="../../../assets/SolutionsWizemoves/success/Ellipse 726.png" alt="Ellipse 726.png" style="position: absolute;margin-top: 338px;margin-left: 1200px">
        <img src="../../../assets/SolutionsWizemoves/success/Group 1000011058.png" alt="Group 1000011058.png" style="position: absolute;margin-top: 330px;margin-left: 1120px">
        <!-- KeenSlider Container -->
        <div class="keen-slider vertical-slider" ref="slider">
          <div class="keen-slider__slide" v-for="(content, index) in contents" :key="index">
            <div class="card" :class="{ 'active': currentSlide === index }">
              <div class="card-body p-0" style="display: contents;">
                <p class="text-s-28 m-auto ps-5 pe-5 text-center color-1F2937">{{content.text1}}<span class="color-8B5CF6 font-bd">{{content.text2}}</span>{{content.text3}}</p>
                <div class="row">
                  <div class="col-6">
                    <span class="mb-0 text-s-20 b-c">Web Development</span>
                  </div>
                  <div class="col-6 text-end">
                    <a :href="content.url" target="_blank" rel="noopener" style="opacity: 0.6;"><span class="text-s-24 color-7C3AED font-md me-1" style="line-height: 24px;">รายละเอียดเพิ่มเติม</span> <img style="margin-top:-6px" src="../../../assets/SolutionsWizemoves/services/arrow-up-right.png" alt="arrow-up-right.png"></a>
                  </div>
                </div>
                <img src="../../../assets/SolutionsWizemoves/success/comma.png" alt="comma.png" style="position: absolute;top: 32px;left: 32px;">
                <img src="../../../assets/SolutionsWizemoves/success/code-bracket-square-2.png" alt="code-bracket-square-2.png" style="position: absolute;top: 60px;left: 238px;">
              </div>
            </div>
          </div>
        </div>

        <!-- Dots Navigation -->
        <div class="dots mb-5">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ 'active': currentSlide === index }"
            @click="slider.moveToIdx(index)"
          ></button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      slider: null,         // KeenSlider instance
      currentSlide: 0,      // Tracks the active slide
      slides: Array(3).fill(''), // Example: 5 slides
      contents: [
        // Replace with your image URLs
        {
          text1: "เราพาแบรนด์น้องใหม่ฝ่าด่านแบรนด์รุ่นพี่ กลายเป็นม้ามืดมาแรง เพิ่มยอดขายแซงทุกแบรนด์ จน",
          text2: "ขึ้นแท่น Best Seller ในเซเว่นเพียงแค่ภายในหนึ่งเดือนเท่านั้น",
          text3: "",
          url: "https://www.smethailandclub.com/entrepreneur/8125.html"
        },
        {
          text1: "“พอมีโควิด เราใช้เทคโนโลยีโทรศัพท์ที่ทุกคนใช้อยู่แล้วมาต่อยอดให้เป็นประโยชน์ ผ่านเครื่องมือ ที่เรียกว่า",
          text2: " Sale Page ทำงานบนออนไลน์ได้ง่ายขึ้นผ่านโซเชียลมีเดียช่วยลดต้นทุนในการเดินทาง ",
          text3: "ต้องขอบคุณบริษัทเซลสุกิ (Sellsuki) ที่มีส่วนช่วยขับเคลื่อนธุรกิจตรงนี้”",
          url: "https://www.smethailandclub.com/entrepreneur/8363.html"
        },
        {
          text1: "การจัดการข้อมูลขนาดใหญ่เราเข้าไป Design การจัดเก็บข้อมูลเพื่อให้นำไปต่อยอดในการทำการตลาดได้อย่างง่ายดายและมีประสิทธิภาพ",
          text2: "ทำให้ยอดขายเติบโตจาก 35 ล้าน เป็น 3,700 ล้านบาทภายใน 5 ปี",
          text3: "",
          url: "https://www.smethailandclub.com/entrepreneur/8125.html"
        },
      ],
    }
  },
  mounted() {
    // Initialize KeenSlider with vertical mode
    this.slider = new this.$KeenSlider(this.$refs.slider, {
      loop: true,
      vertical: true, // Enables vertical sliding
      slides: { perView: 1, spacing: 0, origin: "center" }, // Adjust spacing between slides
      created: (instance) => this.onSlideChange(instance),
      slideChanged: (instance) => this.onSlideChange(instance)
    })
  },
  beforeDestroy() {
    // Destroy the slider instance
    if (this.slider) this.slider.destroy()
  },
  methods: {
    onSlideChange(sliderInstance) {
      // Update the current slide index
      this.currentSlide = sliderInstance.track.details.rel
    }
  }
};
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
.text-s-28{
  line-height: 28px;
}
.card{
  background-color: #FAF9FF;
  border: 1.5px solid #00000008;
  box-shadow: 0px 1px 3px 0px #7B64AF12, 0px 5px 5px 0px #7B64AF0F, 0px 12px 7px 0px #7B64AF0A, 0px 20px 8px 0px #7B64AF03, 0px 32px 9px 0px #7B64AF00;
  width: 700px;
  height: 348px;
  padding: 40px;
}
.b-c{
  padding: 2px 8px;background-color: #FFFFFF;border: 1px solid #D4D1EC;border-radius: 16px;color:#A78BFA
}
/* KeenSlider Styles */
.vertical-slider {
  width: 100%; /* Adjust the slider width */
  height: 400px; /* Adjust the slider height */
  overflow: hidden; /* Hide overflow to ensure a clean appearance */
}
.keen-slider__slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Ensure each slide takes up the full height */
}

.keen-slider__slide .active{}

/* Dots Navigation */
.dots {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
.dots button {
  width: 16px;
  height: 8px;
  border-radius: 8px;
  background-color: #C4B5FD;
  margin: 0 5px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dots button.active {
  background-color: #8B5CF6;
  width: 32px;
}
</style>
