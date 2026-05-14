<template>
  <div>
    <!-- <LPWMNavbar /> -->
    <main>
      <LPWMContactForm section-id="contact-form-top" />
      <!-- <LPWMHero /> -->
      <div id="pain-points">
        <LPWMPainPoints />
      </div>
      <LPWMWhyUs />
      <LPWMServices />
      <LPWMProcess />
      <LPWMContactForm section-id="contact-form-bottom" />
    </main>
    <LPWMFooter />
    <LPWMFloatingButtons />
  </div>
</template>

<script>
import LPWMNavbar         from '~/components/landing-page/wmconsult/LPWMNavbar.vue'
import LPWMHero           from '~/components/landing-page/wmconsult/LPWMHero.vue'
import LPWMPainPoints     from '~/components/landing-page/wmconsult/LPWMPainPoints.vue'
import LPWMWhyUs          from '~/components/landing-page/wmconsult/LPWMWhyUs.vue'
import LPWMServices       from '~/components/landing-page/wmconsult/LPWMServices.vue'
import LPWMProcess        from '~/components/landing-page/wmconsult/LPWMProcess.vue'
import LPWMContactForm    from '~/components/landing-page/wmconsult/LPWMContactForm.vue'
import LPWMFooter         from '~/components/landing-page/wmconsult/LPWMFooter.vue'
import LPWMFloatingButtons from '~/components/landing-page/wmconsult/LPWMFloatingButtons.vue'

export default {
  name: 'LandingPagewmconsult',
  layout: 'landing-page-wmconsult',
  components: {
    LPWMNavbar,
    LPWMHero,
    LPWMPainPoints,
    LPWMWhyUs,
    LPWMServices,
    LPWMProcess,
    LPWMContactForm,
    LPWMFooter,
    LPWMFloatingButtons
  },
  head() {
    return {
      title: 'WizeMoves Consulting | Strategic Growth Partner',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Unlock your business growth potential with WizeMoves Consulting. Expert strategic planning for high-net-worth enterprises.'
        }
      ],
      script: [
        {
          hid: 'meta-pixel',
          innerHTML: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','320126622270975');fbq('track','PageView');`,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          hid: 'meta-pixel-noscript',
          innerHTML: '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=320126622270975&ev=PageView&noscript=1" />'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'meta-pixel': ['innerHTML'],
        'meta-pixel-noscript': ['innerHTML']
      }
    }
  }
}
</script>
