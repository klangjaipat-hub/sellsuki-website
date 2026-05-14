<template>
  <footer class="footer-section">
    <div class="footer-bg" :style="{ backgroundImage: `url(${bgFooter})` }"></div>

    <div class="position-relative z-10">
      <div class="container py-5">
        <!-- Main grid -->
        <div class="row g-5">

          <!-- Left: Logo + info + social -->
          <div class="col-12 col-lg-3">
            <a href="#" class="d-inline-block mb-4">
              <img :src="sellsukiLogo" alt="Sellsuki" height="40" />
            </a>

            <div class="mb-3" style="font-size:.875rem;line-height:1.6">
              <p class="fw-semibold text-white mb-1">Address:</p>
              <p class="text-white mb-0">Sellsuki Co.,Ltd.</p>
              <p class="text-white mb-0">4Simplex, 3rd Floor, No. 10/39</p>
              <p class="text-white mb-0">Ratchadapisek Road, Chankasem,</p>
              <p class="text-white mb-0">Chatuchak, Bangkok 10900</p>
              <p class="text-white mb-0">Thailand</p>
            </div>

            <div class="mb-3" style="font-size:.875rem">
              <p class="fw-semibold text-white mb-1">Contact:</p>
              <a href="tel:0900967526" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-none">090 096 7526</a>
            </div>

            <div class="d-flex gap-2">
              <a
                v-for="(s, i) in socials"
                :key="i"
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="d-flex align-items-center justify-content-center rounded-circle border text-secondary"
                style="width:2.25rem;height:2.25rem;border-color:rgba(255,255,255,.2)!important;transition:all .2s"
                @mouseover="$event.currentTarget.style.color='#fff';$event.currentTarget.style.borderColor='rgba(255,255,255,1)'"
                @mouseleave="$event.currentTarget.style.color='';$event.currentTarget.style.borderColor='rgba(255,255,255,.2)'"
                v-html="s.icon"
              />
            </div>
          </div>

          <!-- Right: Link columns -->
          <div class="col-12 col-lg-9">
            <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-4">
              <div v-for="col in columns" :key="col.heading" class="col">
                <a
                  v-if="col.headingUrl && col.headingUrl !== '#'"
                  :href="col.headingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="d-block fw-semibold text-white text-decoration-none mb-3"
                  style="transition:opacity .2s"
                  @mouseover="$event.target.style.opacity='.7'"
                  @mouseleave="$event.target.style.opacity='1'"
                >
                  {{ col.heading }}
                </a>
                <span v-else class="d-block fw-semibold text-white mb-3">{{ col.heading }}</span>
                <ul class="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li v-for="link in col.links" :key="link.label">
                    <a :href="link.url || '#'" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-secondary" style="font-size:.875rem;transition:color .2s" @mouseover="$event.target.style.color='#fff'" @mouseleave="$event.target.style.color=''">
                      {{ link.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-5 pt-4 border-top border-white-10 text-secondary" style="font-size:.875rem">
          <p class="mb-0">&copy; {{ currentYear }} sellsuki. All rights reserved.</p>
          <div class="d-flex gap-4">
            <a href="https://www.sellsuki.co.th/policy" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-underline" style="transition:color .2s" @mouseover="$event.target.style.color='#fff'" @mouseleave="$event.target.style.color=''">Privacy Policy</a>
            <a href="https://www.sellsuki.co.th/terms-of-use" target="_blank" rel="noopener noreferrer" class="text-secondary text-decoration-underline" style="transition:color .2s" @mouseover="$event.target.style.color='#fff'" @mouseleave="$event.target.style.color=''">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LPWMFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      sellsukiLogo: require('@/assets/landing-page/wmconsult/White-Consult.png'),
      bgFooter: require('@/assets/landing-page/wmconsult/bg-footer.jpg'),
      socials: [
        { href: 'https://www.facebook.com/Sellsuki/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>' },
        { href: 'https://www.facebook.com/sellsuki/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' },
        { href: 'https://www.facebook.com/Sellsuki/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
        { href: 'https://www.facebook.com/Sellsuki/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>' },
        { href: 'https://www.facebook.com/Sellsuki/', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>' }
      ],
      columns: [
        {
          heading: 'Wizemoves', headingUrl: 'https://www.sellsuki.co.th/solutions/wizemoves',
          links: [
            { label: 'Business Consulting', url: 'https://www.sellsuki.co.th/solutions/wizemoves/business-consulting' },
            { label: 'Digital Advertising',  url: 'https://www.sellsuki.co.th/solutions/wizemoves/online-advertising' },
            { label: 'Content Marketing',    url: 'https://www.sellsuki.co.th/solutions/wizemoves#ContentMarketing' },
            { label: 'e-Distributor',        url: 'https://www.sellsuki.co.th/solutions/wizemoves/edis' },
            { label: 'Martech',              url: 'https://www.sellsuki.co.th/solutions/wizemoves/martech' },
            { label: 'Data Analytics',       url: 'https://www.sellsuki.co.th/solutions/wizemoves#DataAnalytics' }
          ]
        },
        {
          heading: 'LINE Agency', headingUrl: 'https://www.sellsuki.co.th/solutions/lineagency',
          links: [
            { label: 'LINE OA',            url: 'https://www.sellsuki.co.th/solutions/lineagency/line-oa' },
            { label: 'LINE OA Corporate',  url: 'https://www.sellsuki.co.th/solutions/lineagency/line-oa-corporate' },
            { label: 'LINE Smart Channel', url: 'https://www.sellsuki.co.th/solutions/lineagency/line-smart-channel' },
            { label: 'LINE Today',         url: 'https://www.sellsuki.co.th/solutions/lineagency/line-today' },
            { label: 'Sponsored Sticker',  url: 'https://www.sellsuki.co.th/solutions/lineagency/sponsored-sticker' },
            { label: 'My Customer | CRM',  url: 'https://www.sellsuki.co.th/solutions/lineagency/my-customer-crm' }
          ]
        },
        {
          heading: 'Sukispace', headingUrl: '#',
          links: [{ label: 'Business Tool', url: '#' }, { label: 'Akita', url: '#' }, { label: 'Business Community', url: '#' }]
        },
        {
          heading: 'Akita', headingUrl: '#',
          links: [{ label: 'Patona', url: '#' }, { label: 'Oc2plus', url: '#' }]
        },
        {
          heading: 'เกี่ยวกับเรา', headingUrl: 'https://www.sellsuki.co.th/about-us',
          links: [
            { label: 'ติดต่อเรา',        url: 'https://www.sellsuki.co.th/contact-us' },
            { label: 'ร่วมงานกับเรา',    url: 'https://www.sellsuki.co.th/join-us' },
            { label: 'ผลงานของเรา',      url: 'https://www.sellsuki.co.th/' },
            { label: 'บทความที่น่าสนใจ', url: 'https://www.sellsuki.co.th/blog' }
          ]
        }
      ]
    }
  }
}
</script>
