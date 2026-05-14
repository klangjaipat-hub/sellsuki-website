<template>
  <footer class="bg-gray-900 text-white py-12 border-t border-gray-800">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-3">
          <img
            src="https://sellsuki.co.th/wp-content/uploads/2020/06/logo-sellsuki-main.png"
            alt="Sellsuki Logo"
            class="h-8 md:h-10 w-auto brightness-0 invert"
          />
          <div class="h-6 w-px bg-gray-600" aria-hidden="true"></div>
          <span class="text-base md:text-lg font-bold text-white tracking-wide pt-0.5">LINE AGENCY</span>
        </div>

        <div class="text-sm text-gray-300 text-center md:text-right">
          <p>&copy; {{ currentYear }} Sellsuki Co., Ltd. All rights reserved.</p>
          <p class="mt-2">123 Street Name, Bangkok, Thailand 10110</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LPWMFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
