<template>
  <div>
    <LPWMNavbar />
    <main>
      <LPWMHero />
      <LPWMVideoShowcase />
      <LPWMCorporatePackages />
      <LPWMVisualGuide />
      <LPWMGrowthServices />
      <LPWMTrustSignals />
      <LPWMContactForm />
      <LPWMFloatingButtons />
    </main>
    <LPWMFooter />
  </div>
</template>

<script>
import LPWMNavbar from '~/components/landing-page/lineagency/LPWMNavbar.vue'
import LPWMHero from '~/components/landing-page/lineagency/LPWMHero.vue'
import LPWMVisualGuide from '~/components/landing-page/lineagency/LPWMVisualGuide.vue'
import LPWMVideoShowcase from '~/components/landing-page/lineagency/LPWMVideoShowcase.vue'
import LPWMCorporatePackages from '~/components/landing-page/lineagency/LPWMCorporatePackages.vue'
import LPWMGrowthServices from '~/components/landing-page/lineagency/LPWMGrowthServices.vue'
import LPWMTrustSignals from '~/components/landing-page/lineagency/LPWMTrustSignals.vue'
import LPWMContactForm from '~/components/landing-page/lineagency/LPWMContactForm.vue'
import LPWMFloatingButtons from '~/components/landing-page/lineagency/LPWMFloatingButtons.vue'
import LPWMFooter from '~/components/landing-page/lineagency/LPWMFooter.vue'

export default {
  name: 'LandingPageWmconsult',
  layout: 'landing-page-lineagency',
  components: {
    LPWMNavbar,
    LPWMHero,
    LPWMVisualGuide,
    LPWMVideoShowcase,
    LPWMCorporatePackages,
    LPWMGrowthServices,
    LPWMTrustSignals,
    LPWMContactForm,
    LPWMFloatingButtons,
    LPWMFooter
  },
  head() {
    return {
      title: 'Sellsuki LINE Agency - จองทำเลทองบน LINE Smart Channel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ตำแหน่งโฆษณาที่ทรงพลังที่สุด (Smart Channel) บริหารจัดการโดยทีมผู้เชี่ยวชาญ Certified Coach เข้าถึง 56 ล้านคนทั่วไทย'
        }
      ]
    }
  }
}
</script>
