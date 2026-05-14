<template>
  <div>
    <!-- KeenSlider Container -->
    <div class="keen-slider" ref="slider">
      <div class="keen-slider__slide">
        <div class="card card-port pb-3">
          <div class="card-body pb-4">
            <h5 class="text-s-36">
              ทำสินค้าแบรนด์ใหม่ให้เป็นที่รู้จัก
              <span class="theme-text-main font-bd"
                > สินค้าหมดสต๊อก<br/>
                ภายใน 3 เดือน</span
              >
            </h5>
          </div>
          <img
            src="../../../assets/SolutionsWizemoves/Frame 427319551.png"
            alt="Frame 427319551.png"
            style="position: absolute; top: 22px; right: 24px"
          />
          <img
            src="../../../assets/SolutionsWizemoves/30.png"
            alt="30.png"
            style="position: absolute; bottom: 0; right: 8px"
          />
        </div>
      </div>
      <div class="keen-slider__slide">
        <div class="card card-port pb-3">
          <div class="card-body pb-4">
            <h5 class="text-s-36">
              <span class="theme-text-main font-bd">สร้างยอดขายคืน</span> จากการลงเงินโฆษณา <span class="theme-text-main font-bd">10 เท่า</span>
            </h5>
          </div>
          <img
            src="../../../assets/SolutionsWizemoves/Frame 427319551.png"
            alt="Frame 427319551.png"
            style="position: absolute; top: 22px; right: 24px"
          />
          <img
            src="../../../assets/SolutionsWizemoves/30.png"
            alt="30.png"
            style="position: absolute; bottom: 0; right: 8px"
          />
        </div>
      </div>
    </div>

    <!-- Dots Navigation -->
    <div class="dots">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }"
        @click="slider.moveToIdx(index)"
      ></button>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="modal-overlay fade-overlay"
      @click="closeModal"
    >
      <div class="modal-content modal-animate" @click.stop>
        <div class="p-4">
          <div class="bg-modal text-center">
            <p class="text-s-36 mb-0">
              {{ images[currentImageIndex].title }}
            </p>

            <img
              class="m-auto modal-image img-fluid mt-2"
              :src="images[currentImageIndex].url"
              alt="Current view"
            />

            <p class="text-s-24 mt-3">
              {{ images[currentImageIndex].discretion }}
            </p>
          </div>
        </div>

        <!-- Close -->
        <button class="close-button" @click="closeModal">✕</button>
      </div>

      <!-- Navigation -->
      <button class="pre-button" @click.stop="preImage"><img src="../../../assets/SolutionsWizemoves/gallery/Previous-Next Button.png" alt="Previous-Next Button.png"></button>
      <button class="next-button" @click.stop="nextImage"><img src="../../../assets/SolutionsWizemoves/gallery/Previous-Next Button-2.png" alt="Previous-Next Button-2.png"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: null, // KeenSlider instance
      currentSlide: 0, // Tracks the active slide
      slides: Array(2).fill(''), // Example: 5 slides
      autoplayInterval: null, // Stores the autoplay timer
      images: [
        // Replace with your image URLs
        {
          id: 1,
          url: "https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Screen_Shot_2567_12_11_at_13_40_38_1_c2fe9fecd4.png",
          title: "เพิ่มยอดขายกว่า 1,000 ล้านบาท หรือเติบโต 100% ภายใน 1 ปี",
          discretion: "เราเป็นบริษัทรับทำการตลาดที่ช่วยเพิ่มยอดขายมาแล้ว กว่า 1,000 ล้านบาท หรือเติบโต 100% ภายใน 1 ปี"
        },
        {
          id: 2,
          url: "https://sellsuki-web-storage-production.s3.ap-southeast-1.amazonaws.com/Screen_Shot_2567_12_11_at_13_40_38_1_1_1b132d3dce.png",
          title: "กระจายช่องทางการขาย โดยมีพันธมิตรร้านค้ามากกว่า 10,000 ร้านค้า",
          discretion: "เราวางกลยุทธ์ในการกระจายช่องทางการขายที่เหมาะสม เพื่อทำให้ยอดขายเติบโตอย่างยั่งยืน มีพันธมิตร ร้านค้ามากกว่า 10,000 ร้านค้า"
        }
      ],
      showModal: false,
      currentImageIndex: null,
    }
  },
  mounted() {
    // Initialize KeenSlider
    this.slider = new this.$KeenSlider(this.$refs.slider, {
      loop: true,
      slides: { perView: 1, spacing: 15 },
      created: (instance) => this.onSlideChange(instance),
      slideChanged: (instance) => this.onSlideChange(instance),
    })

    // Start Autoplay
    this.startAutoplay()
  },
  beforeDestroy() {
    // Destroy the slider instance and clear autoplay timer
    if (this.slider) this.slider.destroy()
    this.stopAutoplay()
  },
  methods: {
    openModal(index) {
      this.currentImageIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.currentImageIndex = null;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length; // Loop to the first image
    },
    preImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length; // Loop to the last image
    },
    onSlideChange(sliderInstance) {
      // Update the current slide index
      this.currentSlide = sliderInstance.track.details.rel
    },
    startAutoplay() {
      // Start a timer that moves to the next slide every 3 seconds
      this.autoplayInterval = setInterval(() => {
        const nextSlide = (this.currentSlide + 1) % this.slides.length
        this.slider.moveToIdx(nextSlide)
      }, 5000) // Adjust the interval duration as needed (e.g., 5000ms = 3s)
    },
    stopAutoplay() {
      // Clear the autoplay timer
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval)
        this.autoplayInterval = null
      }
    },
  },
}
</script>

<style scoped>
.theme-text-main {
  color: #7c3aed;
}
.card {
  background-color: transparent;
}

.card-port {
  background: linear-gradient(
    51.93deg,
    rgba(139, 92, 246, 0.15) -8.45%,
    rgba(250, 204, 21, 0.15) 113.97%
  );
  box-shadow: -1px 3px 7px 0px #fde17212 inset, 1px -3px 7px 0px #c1a8fb0d inset;
  border-radius: 24px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Dots Navigation */
.dots {
  margin-top: -32px;
  margin-left: 24px;
  position: absolute;
}
.dots button {
  width: 10px;
  height: 10px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin: 0 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dots button.active {
  background-color: #A78BFA;
  width: 24px;
}

/* Gallery Grid */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.gallery-item {
  cursor: pointer;
  border: 2px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

/* Fade */
.fade-overlay {
  animation: fadeIn 0.35s ease forwards;
}

/* Modal */
.modal-content {
  position: relative;
  max-width: 80%;
  max-height: 90%;
  border-radius: 32px;
  overflow: hidden;
}

.modal-animate {
  animation: modalIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* Image */
.modal-image {
  max-height: 600px;
  display: block;
  margin: auto;
  animation: imageIn 0.5s ease forwards;
}

/* Background */
.bg-modal {
  background: linear-gradient(
    25.39deg,
    rgba(139, 92, 246, 0.2),
    rgba(250, 204, 21, 0.2)
  );
  padding: 24px;
  border-radius: 32px;
}

/* Buttons */
.close-button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.pre-button,
.next-button {
  position: absolute;
  top: 50%;
  background: transparent;
  border: none;
  font-size: 42px;
  cursor: pointer;
  transform: translateY(-50%);
  color: white;
}

.pre-button {
  left: 40px;
}

.next-button {
  right: 40px;
}

.nav-animate {
  animation: navIn 0.5s ease forwards;
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes imageIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes navIn {
  from {
    opacity: 0;
    transform: translateY(-50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}
</style>
