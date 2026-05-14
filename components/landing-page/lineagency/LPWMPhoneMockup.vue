<template>
  <div class="relative w-[340px] h-[680px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 transform transition-transform duration-500">
    <!-- Notch -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

    <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
      <!-- LINE Header -->
      <div class="bg-[#1D2129] text-white pt-10 pb-4 px-4 flex justify-between items-center z-10">
        <div class="text-lg font-bold">Chats</div>
        <div class="flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </div>
      </div>

      <!-- Chat Filters -->
      <div class="bg-[#1D2129] text-gray-400 px-4 pb-2 flex gap-4 text-xs overflow-x-hidden whitespace-nowrap">
        <span class="text-white border-b-2 border-white pb-1">All</span>
        <span>Friends</span>
        <span>Groups</span>
        <span>Official</span>
      </div>

      <!-- Smart Channel Ad Slot -->
      <div class="bg-white p-2 border-b border-gray-100 relative cursor-pointer transition-all duration-300">
        <div class="absolute top-0 right-0 bg-gray-100 text-[10px] text-gray-400 px-1">AD</div>

        <!-- Static Banner -->
        <div v-if="activeTab === 'static'" class="w-full h-16 bg-gradient-to-r from-green-50 to-green-100 rounded-lg flex items-center p-3 gap-3 animate-fade-in-up">
          <div class="w-12 h-12 bg-gray-200 rounded object-cover flex-shrink-0 flex items-center justify-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          </div>
          <div class="flex-1">
            <div class="h-3 bg-gray-800 rounded w-3/4 mb-1"></div>
            <div class="h-2 bg-gray-400 rounded w-1/2"></div>
          </div>
          <div class="bg-line text-white text-[10px] px-2 py-1 rounded-full shadow-sm">ดูเพิ่ม</div>
        </div>

        <!-- VDO Ads -->
        <div v-else class="w-full h-[320px] bg-black rounded-lg relative overflow-hidden animate-fade-in-up shadow-inner">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-90 drop-shadow-lg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div class="text-white text-sm font-bold mb-1">Video Campaign</div>
            <button class="bg-line text-white text-xs px-3 py-1.5 rounded w-full font-medium">เรียนรู้เพิ่มเติม</button>
          </div>
        </div>
      </div>

      <!-- Fake Chat List -->
      <div class="flex-1 bg-white overflow-hidden relative">
        <div class="flex items-center p-4 gap-3 border-b border-gray-50">
          <div class="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div class="flex-1">
            <div class="flex justify-between mb-1">
              <span class="font-semibold text-sm">Mom</span>
              <span class="text-[10px] text-gray-400">10:42 AM</span>
            </div>
            <div class="h-3 bg-gray-100 rounded w-4/5"></div>
          </div>
        </div>
        <div class="flex items-center p-4 gap-3 border-b border-gray-50">
          <div class="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div class="flex-1">
            <div class="flex justify-between mb-1">
              <span class="font-semibold text-sm">Boss</span>
              <span class="text-[10px] text-gray-400">09:15 AM</span>
            </div>
            <div class="h-3 bg-gray-100 rounded w-2/3"></div>
          </div>
          <div class="w-5 h-5 bg-line rounded-full flex items-center justify-center text-white text-[10px]">2</div>
        </div>
        <div class="flex items-center p-4 gap-3 border-b border-gray-50">
          <div class="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div class="flex-1">
            <div class="flex justify-between mb-1">
              <span class="font-semibold text-sm">Friends Group</span>
              <span class="text-[10px] text-gray-400">Yesterday</span>
            </div>
            <div class="h-3 bg-gray-100 rounded w-full"></div>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      <!-- Bottom Nav -->
      <div class="h-16 border-t border-gray-100 flex items-center justify-around text-gray-400 pb-2 bg-white" aria-hidden="true">
        <div class="flex flex-col items-center gap-1">
          <div class="w-6 h-6 rounded bg-gray-200"></div>
        </div>
        <div class="flex flex-col items-center gap-1 text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>
        <div class="flex flex-col items-center gap-1">
          <div class="w-6 h-6 rounded-full bg-gray-200"></div>
        </div>
        <div class="flex flex-col items-center gap-1">
          <div class="w-6 h-6 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LPWMPhoneMockup',
  props: {
    activeTab: {
      type: String,
      default: 'static'
    }
  }
}
</script>
