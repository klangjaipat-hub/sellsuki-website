<template>
  <div>
    <!-- KeenSlider Container -->
    <div class="keen-slider p-3" ref="slider">
      <div v-for="(image, index) in images" :key="index" class="keen-slider__slide">
          <img
            class="img-fluid"
            :src="image.url"
            :alt="image.url"
          />
      </div>
    </div>
    <div class="keen-slider p-3" ref="slider2">
      <div v-for="(image, index) in images2" :key="index" class="keen-slider__slide">
          <img
            class="img-fluid"
            :src="image.url"
            :alt="image.url"
          />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: null, // KeenSlider instance
      slider2: null, // KeenSlider instance
      currentSlide: 0, // Tracks the active slide
      slides: Array(9).fill(''), // Example: 5 slides
      autoplayInterval: null, // Stores the autoplay timer
      images: [
        // Replace with your image URLs
        {
          url: require('@/assets/SolutionsWizemoves/customer/1.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/2.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/3.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/4.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/5.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/6.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/7.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/8.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/9.png'),
        },
      ],
      images2: [
        // Replace with your image URLs
        {
          url: require('@/assets/SolutionsWizemoves/customer/10.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/11.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/12.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/13.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/14.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/15.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/16.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/17.png'),
        },
        {
          url: require('@/assets/SolutionsWizemoves/customer/18.png'),
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
      slides: { perView: 4, spacing: 5 },
      created: (instance) => this.onSlideChange(instance),
      slideChanged: (instance) => this.onSlideChange(instance),
    })

    this.slider2 = new this.$KeenSlider(this.$refs.slider2, {
      loop: true,
      rtl: true,
      slides: { perView: 4, spacing: 5 },
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

    if (this.slider2) this.slider2.destroy()
    this.stopAutoplay()
  },
  methods: {
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

      this.autoplayInterval = setInterval(() => {
        const nextSlide = (this.currentSlide + 1) % this.slides.length
        this.slider2.moveToIdx(nextSlide)
      }, 5000)
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

.img-fluid{
  width: 72px;
  height: 72px;
}

.card-port {
  background: linear-gradient(
    51.93deg,
    rgba(139, 92, 246, 0.15) -8.45%,
    rgba(250, 204, 21, 0.15) 113.97%
  );
  box-shadow: -1px 3px 7px 0px #fde17212 inset, 1px -3px 7px 0px #c1a8fb0d inset;
  border-radius: 24px;
  min-height: 150px;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}

.modal-content {
  position: relative;
  max-width: 80%;
  max-height: 90%;
  overflow: hidden;
  border-radius: 32px;
}

.bg-modal{
  background: linear-gradient(25.39deg, rgba(139, 92, 246, 0.2) 0%, rgba(250, 204, 21, 0.2) 98.42%);
  padding: 24px;
  border-radius: 32px;
}

.modal-content img {
  max-height: 600px;
  display: block;
}

/* Next Button */
.next-button {
  position: absolute;
  background: transparent;
  top: 50%;
  right: 55px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transform: translateY(-50%);
}

/* Pre Button */
.pre-button {
  position: absolute;
  background: transparent;
  top: 50%;
  left: 55px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transform: translateY(-50%);
}

/* Close Button */
.close-button {
  position: absolute;
  background: transparent;
  top: 8px;
  right: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}
</style>
