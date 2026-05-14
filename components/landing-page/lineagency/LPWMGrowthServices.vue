<template>
  <section id="growth" class="py-24 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          <span class="text-sm font-semibold uppercase tracking-wider">Growth Add-ons</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          บริการเสริมเพื่อการเติบโตแบบก้าวกระโดด
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          ขยายฐานลูกค้าและสร้าง Loyalty ด้วยเครื่องมือทรงพลังจาก LINE Ecosystem
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">

        <!-- LINE TODAY -->
        <div class="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-transparent border border-gray-100 transition-all duration-300">
          <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-900 mb-6 group-hover:bg-line group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">LINE TODAY</h3>
          <p class="text-gray-600 mb-6 min-h-[3rem]">
            โฆษณาบนหน้าข่าวสารที่มีผู้ใช้กว่า <strong>40 ล้านคน</strong>
          </p>
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>ค่า CTR สูงกว่าสื่ออื่นถึง 200%</span>
            </div>
          </div>
          <div class="pt-6 border-t border-gray-200">
            <span class="text-sm text-gray-600 block mb-1">เริ่มต้นเพียง</span>
            <span class="text-2xl font-bold text-line">25,000.-</span>
          </div>
        </div>

        <!-- Sponsored Sticker -->
        <div class="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-transparent border border-gray-100 transition-all duration-300">
          <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-900 mb-6 group-hover:bg-line group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 13s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Sponsored Sticker</h3>
          <p class="text-gray-600 mb-6 min-h-[3rem]">
            ทางลัดเพิ่มเพื่อนใหม่ได้เร็วขึ้น <strong>60 เท่า</strong>
          </p>
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>เพิ่มผู้ติดตามได้ 2-4 ล้านคน/ชุด</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>ต้นทุนเฉลี่ยเพียง 2-4 บาท/คน</span>
            </div>
          </div>
          <div class="pt-6 border-t border-gray-200">
            <span class="text-sm text-gray-600 block mb-1">บริการยอดนิยม</span>
            <span class="text-lg font-bold text-gray-900">High Impact</span>
          </div>
        </div>

        <!-- CRM -->
        <div class="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-transparent border border-gray-100 transition-all duration-300">
          <div class="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-900 mb-6 group-hover:bg-line group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3">My Customer | CRM</h3>
          <p class="text-gray-600 mb-6 min-h-[3rem]">
            ระบบจัดการข้อมูลลูกค้า (CDP) เปลี่ยน Data เป็นยอดขาย
          </p>
          <div class="space-y-3 mb-8">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>ระบบสะสมพอยท์ (Points)</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>ปรับระดับสมาชิก (Member Tier)</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-1.5 h-1.5 rounded-full bg-line" aria-hidden="true"></span>
              <span>เชื่อมต่อบน LINE OA ทันที</span>
            </div>
          </div>
          <div class="pt-6 border-t border-gray-200">
            <span class="text-sm text-gray-600 block mb-1">ติดต่อเพื่อรับ</span>
            <span class="text-lg font-bold text-gray-900">ข้อเสนอพิเศษ</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LPWMGrowthServices'
}
</script>
