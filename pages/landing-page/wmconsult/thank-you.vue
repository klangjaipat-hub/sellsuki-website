<template>
  <div class="thank-you-wrapper d-flex align-items-center justify-content-center min-vh-100 px-3">
    <div class="thank-you-card text-center">

      <!-- Mascot Image -->
      <div class="col-12 mb-2">
        <img
          class="img-fluid mascot-img"
          src="~/assets/SolutionsWizemoves/success.png"
          alt="มาสคอตของ WizeMoves ถือแท็บเล็ต สื่อถึงความพร้อมทำงานเพื่อช่วยให้ธุรกิจให้เติบโต"
        />
      </div>

      <!-- Title -->
      <div class="col-12">
        <p class="title-text font-bold mt-3">ส่งฟอร์มเรียบร้อย!</p>

        <!-- Description desktop -->
        <p class="desc-text d-none d-lg-block">
          เราได้รับข้อมูลของคุณแล้ว
          ทีมงานของเราจะรีบทำการติดต่อกลับไป<br />
          เพื่อนัดหมายการให้คำปรึกษากับคุณ!
        </p>

        <!-- Description mobile -->
        <p class="desc-text d-block d-lg-none">
          เราได้รับข้อมูลของคุณแล้ว<br />
          ทีมงานของเราจะรีบทำการติดต่อกลับไป<br />
          เพื่อนัดหมายการให้คำปรึกษากับคุณ!
        </p>

        <button
          class="btn-back mt-4"
          @click="$router.push('/landing-page/wmconsult')"
        >
          กลับไปที่เว็บไซต์
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WMConsultThankYou',
  layout: 'landing-page-wmconsult',
  head() {
    return {
      title: 'ขอบคุณที่ลงทะเบียน | WizeMoves Consulting'
    }
  }
}
</script>

<style scoped>
.thank-you-wrapper {
  font-family: 'Heavent', sans-serif !important;
  background-color: #fff;
}

.thank-you-card {
  background: #fff;
  border-radius: 16px;
  padding: 50px 40px 100px;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.mascot-img {
  max-height: 280px;
  object-fit: contain;
}

.title-text {
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #1F2937;
  margin-bottom: 0;
}

.desc-text {
  font-size: 28px;
  line-height: 40px;
  color: #1F2937;
  margin-bottom: 0;
  margin-top: 12px;
}

.btn-back {
  width: 184px;
  height: 40px;
  color: #ffffff;
  background-color: #8B5CF6;
  border: 1px solid #8B5CF6;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-back:hover {
  opacity: 0.85;
}

@media (max-width: 768px) {
  .thank-you-card {
    padding: 40px 20px 60px;
    box-shadow: none;
  }

  .title-text {
    font-size: 36px;
  }

  .desc-text {
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
