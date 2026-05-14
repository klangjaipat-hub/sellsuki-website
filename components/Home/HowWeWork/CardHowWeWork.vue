<template>
  <div class="mt-4">
    <div class="row mt-0 mt-xl-5">
      <div 
        class="col-md-4 mb-md-3 mb-4" 
        v-for="(card, index) in cards" 
        :key="index"
      >
        <div class="card h-100 text-white" :style="{ backgroundColor: card.bgColor }">
          <div class="card-body">
            <video 
              v-if="card.video"
              ref="videos"
              class="card-img-in"
              :src="card.video"
              muted
              playsinline
            ></video>
            <h5 class="text-s-36 font-bd color-1F2937 mb-0">{{ card.title }}</h5>
            <p class="text-s-24 color-1F2937 mb-0 mt-4">{{ card.detail }}</p>
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
      cards: [
        {
          bgColor: '#32A9FF1A',
          video: require("~/assets/New/Home/HowWeWork/video-1.mp4"),
          title: 'รู้ก่อน ปรับกลยุทธ์ก่อน นำหน้าคู่แข่ง ไปก่อน',
          detail: 'เราวิเคราะห์ข้อมูลจากโซเชียลมีเดีย ทั้ง Market Insight, Trend, Research ต่างๆ และพฤติกรรม ผู้บริโภคที่เป็น กลุ่มเป้าหมายของแบรนด์คุณ เพื่อเปลี่ยนข้อมูลดิบให้เป็น “โอกาสทอง” ที่สามารถนำมาเสิร์ฟให้แบรนด์ของคุณ ได้คว้าก่อนใคร'
        },
        {
          bgColor: '#F973161A',
          video: require("~/assets/New/Home/HowWeWork/video-2.mp4"),
          title: 'เตรียมแผนเติบโตให้ธุรกิจคุณแบบไม่มีสะดุด',
          detail: 'ไม่ว่าคุณจะเป็น SME ที่ต้องการปั้นแบรนด์ หรือองค์กรที่ ต้องการขยายตลาด เราพร้อมออกแบบ แผนธุรกิจที่มี ความเฉพาะตัว โดยรองรับทุกจังหวะการเติบโตของธุรกิจ คุณได้อย่างมีประสิทธิภาพ'
        },
        {
          bgColor: '#32A9FF1A',
          video: require("~/assets/New/Home/HowWeWork/video-3.mp4"),
          title: 'ออกแบบกลยุทธ์ที่ขับเคลื่อนด้วย ข้อมูลจริงไม่ใช่แค่คาดเดา',
          detail: 'เรามีบริการที่เป็น one stop service พร้อมด้วยระบบ การวิเคราะห์เชิงลึกที่เปรียบเสมือน DNA ของทีมงานที่ พร้อมเปลี่ยนข้อมูลของคุณให้กลายเป็นแคมเปญที่ทรงพลัง ซึ่งจะสามารถสร้างผลลัพธ์ที่แตกต่างได้จริง'
        }
      ]
    }
  },
  mounted() {
    const options = {
      threshold: 0.5 // มองเห็นอย่างน้อย 50% ของ video ถึงจะเล่น
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target
        if (entry.isIntersecting) {
          // เล่นใหม่ทุกครั้งที่เลื่อนมาถึง
          video.currentTime = 0
          video.play()
        } else {
          // หยุดเมื่อเลื่อนออก
          video.pause()
        }
      })
    }, options)

    // ผูก observer กับทุก video
    this.$refs.videos.forEach(video => {
      observer.observe(video)
    })
  }
}
</script>

<style scoped>
@import url('~/assets/styles/css/customNew.css');
.card {
    border-radius: 16px;
    border: 1px solid #00000008;
    backdrop-filter: blur(4px);
}

@media (max-width: 767px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-36 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }
    .padding-section {
        padding-top: 60px !important;
    }
    .card-body {
        padding-top: 24px;
        padding: 24px;
    }
    .card-img-in {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
}

@media (min-width: 768px) {
    .text-s-60 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-36 {
        font-size: 20px !important;
        line-height: 20px !important;
    }

    .text-s-28 {
        font-size: 24px !important;
        line-height: 24px !important;
    }

    .text-s-24 {
        font-size: 20px !important;
        line-height: 20px !important;
    }
    .padding-section {
        padding-top: 80px !important;
    }
    .card-body {
        padding-top: 24px;
        padding: 24px;
    }
    .card-img-in {
      width: 100%;
      height: 150px;
      object-fit: contain;
    }
}

@media (min-width: 1200px) {
    .text-s-28 {
        font-size: 28px !important;
        line-height: 28px !important;
    }

    .text-s-36 {
        font-size: 36px !important;
        line-height: 36px !important;
    }

    .text-s-60 {
        font-size: 60px !important;
        line-height: 60px !important;
    }

    .text-s-24 {
        font-size: 24px !important;
        line-height: 24px !important;
    }
    .padding-section {
        padding-top: 120px !important;
    }
    .card-body {
        padding-top: 24px;
        padding: 40px;
    }
    .card-img-in {
      width: 100%;
      height: 250px;
      object-fit: contain;
    }
}

</style>
