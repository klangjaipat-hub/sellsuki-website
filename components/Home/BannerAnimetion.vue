<template>
  <div class="interactive-gradient banner-section">
    <div class="container p-0">
      <div class="content">
        <div class="row space-top">
          <div class="col-12 text-center z-1 p-0">
            <div class="px-0">
              <h1 class="font-bd banner-title color-1F2937 mb-0">
                More Than a <br class="d-block d-sm-none" />
                <span class="gradient-text-orange">Business</span>
                <span class="gradient-text-blue">Partner</span>
              </h1>
              <h2 class="font-bd banner-title color-1F2937 mb-0">
                Drive Your Business <br class="d-block d-sm-none" />Beyond Limits
              </h2>
              <p class="font-md banner-subtitle mt-3 mb-0 mt-xl-4 mb-xl-4 color-1F2937">
                Sellsuki เป็นให้คุณได้มากกว่าแค่คำว่าพาร์ทเนอร์ธุรกิจ <br class="d-block d-sm-none" />เราพร้อมจะพา SMEs
                ไทย<br class="d-none d-sm-block" />
                เติบโตไปไกลกว่าเดิมด้วย<br class="d-block d-sm-none" />แพลตฟอร์มและบริการที่ครบ จบ ในที่เดียว
              </p>

              <div class="d-flex flex-wrap justify-content-center mt-xl-5 mt-sm-4 mt-5">
                <div class="btn-group-center">
                  <div class="btn-with-aura">
                    <img class="aura" src="~/assets/New/Home/aura.svg" alt="aura">
                    <a href="#Solution" class="btn-white banner-btn" data-tag="our-services-anchor">
                      <img width="24px" height="24px" src="~/assets/New/Home/hand-coins.svg" alt="hand-coins.svg" class="icon me-2" />
                      <span class="text">บริการของเรา</span>
                    </a>
                  </div>

                  <div class="btn-with-aura ms-md-4 ms-3">
                    <img class="aura" src="~/assets/New/Home/aura-o.svg" alt="aura">
                    <a target="_blank" rel="noopener" href="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                       class="btn-gradient banner-btn" data-tag="start-free-modal">
                      <img width="24px" height="24px" src="~/assets/New/Home/cursor-arrow-rays.svg" alt="cursor-arrow-rays.svg" class="icon me-2" />
                      <span class="text">เริ่มใช้งานฟรี</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 text-center justify-content-center mt-xl-4 mt-sm-5 mt-5 p-0">
            <img class="img-fluid d-none d-xl-block m-auto" src="~/assets/New/Home/Hero.webp" alt="Hero.webp">

            <img class="img-fluid d-none d-sm-block d-xl-none m-auto" src="~/assets/New/Home/Hero-t.webp"
              alt="Hero-t.webp">

            <img class="img-fluid d-block d-sm-none m-auto" src="~/assets/New/Home/Hero-m.webp" alt="Hero-m.webp">
          </div>
        </div>
      </div>
    </div>

    <div class="gradient-bg">
      <!-- background noise -->
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="noiseBg" aria-hidden="true">
        <filter id="noiseFilterBg">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" preserveAspectRatio="xMidYMid meet" filter="url(#noiseFilterBg)" />
      </svg>

      <!-- gooey blur filter -->
      <svg xmlns="http://www.w3.org/2000/svg" class="svgBlur" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
        <div ref="interactive" class="interactive"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InteractiveGradient',
  data() {
    return {
      curX: 0,
      curY: 0,
      tgX: 0,
      tgY: 0,
      rafId: null,
      onMouseMove: null
    }
  },
  mounted() {
    // ทำงานเฉพาะฝั่ง client
    const interBubble = this.$refs.interactive
    if (!interBubble || typeof window === 'undefined') return

    let moving = false

    this.onMouseMove = (e) => {
      this.tgX = e.clientX
      this.tgY = e.clientY
      if (!moving) {
        moving = true
        const move = () => {
          const dx = this.tgX - this.curX
          const dy = this.tgY - this.curY
          this.curX += dx / 20
          this.curY += dy / 20
          interBubble.style.transform = `translate(${Math.round(this.curX)}px, ${Math.round(this.curY)}px)`
          if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
            this.rafId = window.requestAnimationFrame(move)
          } else {
            moving = false
            this.rafId = null
          }
        }
        this.rafId = window.requestAnimationFrame(move)
      }
    }
    window.addEventListener('mousemove', this.onMouseMove, { passive: true })
  },
  beforeDestroy() {
    if (this.onMouseMove) window.removeEventListener('mousemove', this.onMouseMove)
    if (this.rafId) window.cancelAnimationFrame(this.rafId)
  }
}
</script>

<!-- ไม่ใช้ scoped เพื่อเลี่ยง side-effect ของ filter/url(#goo) และ pseudo-elements
     แต่เราปลอดภัยเพราะ prefix ทุก selector ด้วย .interactive-gradient -->
<style>
@media only screen and (min-width: 1580px) {
  .interactive-gradient .row>* {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
}

.interactive-gradient .btn-gradient {
  display: inline-block;
  padding: 0;
  font-size: 28px;
  line-height: 100%;
  font-family: 'Heavent-med', sans-serif;
  color: #fff !important;
  background: linear-gradient(77.43deg, #FF9A1F -0.16%, #FF3700 98.59%);
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}

.interactive-gradient .btn-white {
  display: inline-block;
  padding: 0;
  font-size: 28px;
  line-height: 100%;
  font-family: 'Heavent-med', sans-serif;
  color: #1F2937 !important;
  background: #fff;
  border: none;
  border-radius: 32px;
  box-shadow: 0 2px 8px 0 #ec5e2a22;
  cursor: pointer;
  transition: background 0.3s, box-shadow 0.3s;
}

/* === Main Background === */
.banner-section {
  background-image: url('~@/assets/New/Home/BG.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.interactive-gradient .gradient-text-orange {
  background: linear-gradient(87.52deg, #F35C20 50.36%, #FB923C 60.17%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.interactive-gradient .gradient-text-blue {
  background: linear-gradient(87.52deg, #58C6FF 67.47%, #1B8BF5 78.4%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

@media screen and (max-width: 400px) {
  .banner-section .bg-height {
    padding: 32px 24px !important;
    min-height: 688px;
  }

  .banner-section {
    background-size: cover !important;
    margin-top: 65px;
  }
}

@media (max-width: 1024px) {
  .banner-section {
    background-image: url('~@/assets/New/Home/BG.webp');
    background-size: cover;
    margin-top: 65px;
  }
}

/* === Height control === */
.interactive-gradient .bg-height {
  padding: 64px 24px;
  min-height: 632px;
}

.interactive-gradient .space-top {
  margin-top: 60px;
}

.interactive-gradient .btn-gradient {
  width: auto;
  padding-left: 12px;
  padding-right: 12px;
  height: 36px;
}

.interactive-gradient .btn-white {
  width: auto;
  padding-left: 12px;
  padding-right: 12px;
  height: 36px;
}

@media (min-width: 768px) {
  .interactive-gradient .bg-height {
    padding: 0;
    min-height: 400px;
  }

  .interactive-gradient .space-top {
    margin-top: 80px;
  }

  .interactive-gradient .btn-gradient {
    width: 182px;
    height: 48px;
  }

  .interactive-gradient .btn-white {
    width: 182px;
    height: 48px;
  }
}

@media (min-width: 1200px) {
  .interactive-gradient .bg-height {
    padding: 0;
    min-height: 990px;
  }

  .interactive-gradient .space-top {
    margin-top: 180px;
  }

  .interactive-gradient .btn-gradient {
    width: 182px;
    height: 48px;
  }

  .interactive-gradient .btn-white {
    width: 182px;
    height: 48px;
  }
}

@media (min-width: 1920px) {
  .interactive-gradient .bg-height {
    padding: 0;
    min-height: 990px;
  }

  .interactive-gradient .space-top {
    margin-top: 180px;
  }
}

/* === Typography responsive === */
.interactive-gradient .banner-title {
  font-size: 44px;
  line-height: 1;
}

.interactive-gradient .banner-subtitle {
  font-size: 20px;
  line-height: 1;
}

.interactive-gradient .partner-title {
  font-size: 16px;
  line-height: 1;
}

.interactive-gradient .banner-btn {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .interactive-gradient .banner-title {
    font-size: 44px;
    line-height: 1;
  }

  .interactive-gradient .banner-subtitle {
    font-size: 20px;
    line-height: 1;
  }

  .interactive-gradient .partner-title {
    font-size: 16px;
    line-height: 1;
  }

  .interactive-gradient .banner-btn {
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 1200px) {
  .interactive-gradient .banner-title {
    font-size: 72px;
    line-height: 1;
  }

  .interactive-gradient .banner-subtitle {
    font-size: 28px;
    line-height: 1;
  }

  .interactive-gradient .partner-title {
    font-size: 28px;
    line-height: 1;
  }

  .interactive-gradient .banner-btn {
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* === Partner Logos positioning === */

.interactive-gradient .partner-logos {
  text-align: left;
  position: absolute;
  bottom: 20px;
}

.interactive-gradient .partner-logos img {
  max-height: 16px;
}

.interactive-gradient {
  height: 688px;
}

@media (min-width: 768px) {
  .interactive-gradient .partner-logos {
    text-align: left;
    position: absolute;
    bottom: 20px;
  }

  .interactive-gradient {
    height: 666px;
  }
}

@media (min-width: 1200px) {
  .interactive-gradient .partner-logos {
    text-align: left;
    position: absolute;
    bottom: 50px;
  }

  .interactive-gradient .partner-logos img {
    max-height: 28px;
  }

  .interactive-gradient {
    height: 100vh;
  }
}

/* ===== root wrapper ===== */
.interactive-gradient {
  width: 100%;
  position: relative;
  overflow: hidden;

  --color-bg1: #cde9ff;
  /* ฟ้าอ่อน */
  --color-bg2: #ffe1cc;
  /* ส้มพีชอ่อน */

  /* Blob colors (soft pastel tones) */
  --color1: 135, 206, 250;
  /* skyblue */
  --color2: 100, 180, 255;
  /* blue */
  --color3: 255, 190, 140;
  /* peach/orange */
  --color4: 255, 240, 225;
  /* warm light */
  --color5: 190, 220, 255;
  /* soft blue */
  --color-interactive: 120, 190, 255;
  /* interactive bubble (ฟ้า) */

  --circle-size: 90%;
  --blending: screen;
  /* screen จะใสแบบภาพที่แนบมา */
  background: url('~@/assets/New/Home/BG.webp') no-repeat center center;
  background-size: cover;
}

/* reset เฉพาะในคอมโพเนนต์ */
.interactive-gradient * {
  box-sizing: border-box;
}

/* ===== container ===== */
.interactive-gradient .container {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  overflow: hidden;
  color: #fff;
}

.interactive-gradient .container .content {
  position: relative;
  z-index: 2;
}

.interactive-gradient h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.interactive-gradient p {
  line-height: 1.6;
}

/* ===== animations ===== */
@keyframes ig-moveInCircle {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes ig-moveVertical {
  0% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(50%);
  }

  100% {
    transform: translateY(-50%);
  }
}

@keyframes ig-moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }

  50% {
    transform: translateX(50%) translateY(10%);
  }

  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}

/* ===== gradient playground ===== */
.interactive-gradient .gradient-bg {
  position: absolute;
  inset: 0;
}

.interactive-gradient .svgBlur {
  display: none;
  /* filter definition only */
}

.interactive-gradient .noiseBg {
  position: absolute;
  inset: 0;
  z-index: 1;
  mix-blend-mode: soft-light;
  opacity: 0.3;
}

/* goo + blur */
.interactive-gradient .gradients-container {
  filter: url(#goo) blur(40px);
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

/* circles */
.interactive-gradient .g1,
.interactive-gradient .g2,
.interactive-gradient .g3,
.interactive-gradient .g4,
.interactive-gradient .g5,
.interactive-gradient .interactive {
  position: absolute;
  mix-blend-mode: var(--blending);
  background-repeat: no-repeat;
}

/* each blob */
.interactive-gradient .g1 {
  background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0%, rgba(var(--color1), 0) 50%);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: center center;
  animation: ig-moveVertical 30s ease infinite;
  opacity: 1;
}

.interactive-gradient .g2 {
  background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0%, rgba(var(--color2), 0) 50%);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(60% - 400px);
  animation: ig-moveInCircle 20s reverse infinite;
  opacity: 1;
}

.interactive-gradient .g3 {
  background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0%, rgba(var(--color3), 0) 50%);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);
  transform-origin: calc(50% + 400px);
  animation: ig-moveInCircle 40s linear infinite;
  opacity: 1;
}

.interactive-gradient .g4 {
  background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0%, rgba(var(--color4), 0) 50%);
  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);
  transform-origin: calc(50% - 200px);
  animation: ig-moveHorizontal 40s ease infinite;
  opacity: 0.7;
}

.interactive-gradient .g5 {
  background: radial-gradient(circle at center, rgba(var(--color5), 0.8) 0%, rgba(var(--color5), 0) 50%);
  width: calc(var(--circle-size) * 2);
  height: calc(var(--circle-size) * 2);
  top: calc(50% - var(--circle-size));
  left: calc(50% - var(--circle-size));
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: ig-moveInCircle 20s ease infinite;
  opacity: 1;
}

.interactive-gradient .interactive {
  background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.7) 0%, rgba(var(--color-interactive), 0) 60%);
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  opacity: 0.7;
}

.interactive-gradient .btn-group-center{
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 12px;
}

/* aura อยู่กึ่งกลางหลังปุ่มทั้งคู่ */
.interactive-gradient .btn-group-center .aura-center{
  position: absolute; 
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  width: 420px; /* ปรับขนาดตามต้องการ */
  opacity: 0.95;
}

/* ให้ปุ่มอยู่เหนือ aura */
.interactive-gradient .btn-group-center .banner-btn{
  position: relative;
  z-index: 2;
}

/* aura อยู่ข้างหลังปุ่มแต่ละอัน */
.interactive-gradient .btn-with-aura .aura{
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  width: 360px; /* ปรับขนาดตามต้องการ */
  opacity: 0.95;
}

/* ปุ่มอยู่เหนือ aura */
.interactive-gradient .btn-with-aura .banner-btn{
  position: relative;
  z-index: 2;
}

/* responsive */
@media (max-width: 767px){
  .interactive-gradient .btn-with-aura .aura{
    width: 180px;
    opacity: 0.9;
  }
  .interactive-gradient .btn-group-center{
    gap: 10px;
  }
}
</style>
