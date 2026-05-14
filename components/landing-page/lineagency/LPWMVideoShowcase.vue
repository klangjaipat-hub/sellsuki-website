<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col lg:flex-row items-center gap-12">

        <!-- Text Content -->
        <div class="w-full lg:w-1/2 space-y-8">
          <div>
            <div class="inline-flex items-center gap-2 bg-line/10 text-line border border-line/20 rounded-full px-4 py-1.5 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
              <span class="text-sm font-semibold uppercase tracking-wider">Overview Video</span>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              ทำไมต้องโฆษณาบน <span class="text-line">LINE Smart Channel</span>?
            </h2>
            <p class="text-lg text-gray-600">
              เข้าถึงกลุ่มเป้าหมายกว่า 50 ล้านคนบนแอปพลิเคชันแชทอันดับ 1 ของไทย พร้อมตัวช่วยเพิ่มยอดขายและสร้างการรับรู้แบรนด์อย่างมีประสิทธิภาพ
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-line border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">ตำแหน่งโฆษณาพรีเมียม</h3>
                <p class="text-gray-600">แสดงผลในตำแหน่งที่โดดเด่นที่สุดบนหน้าแชท LINE ที่ทุกคนต้องเปิดดูทุกวัน</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-line border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">เข้าถึงผู้ใช้งานจำนวนมหาศาล</h3>
                <p class="text-gray-600">ขยายฐานลูกค้าใหม่และเข้าถึงกลุ่มเป้าหมายที่แม่นยำด้วย Data จาก LINE</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-line border border-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-1">วัดผลได้ชัดเจน คุ้มค่าการลงทุน</h3>
                <p class="text-gray-600">ติดตามผลลัพธ์แคมเปญได้แบบ Real-time พร้อมปรับปรุงประสิทธิภาพให้ดีที่สุด</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Video Embed -->
        <div class="w-full lg:w-1/2">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 aspect-video group">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tL7iv5wf1rQ?rel=0"
              title="LINE Smart Channel Overview"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div class="relative mt-8 flex justify-center lg:justify-end items-center gap-4 text-sm text-gray-500 font-medium">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              อัปเดตข้อมูลล่าสุดปี 2024
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMVideoShowcase'
}
</script>
