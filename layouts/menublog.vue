<template>
    <div class="bg-main">
        <!-- <Cookie/> -->
        <MenuV2/>
        <nuxt/>
        <!-- <div class="fabs animate__animated animate__bounce" @click="scrollToTop">
            <div class="click-top">
                <i class="bi bi-chevron-up" style="font-size: 22px;line-height: 55px;margin: auto;display: table;"></i>
            </div>
        </div> -->
    </div>
    </template>
    
    <script>
    export default {
      layout: null,
      data () {
        return {
          isActive: true
        }
      },
      jsonld() {
          return {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sellsuki",
            "image": "https://www.sellsuki.co.th/nuxt/img/logo-Sellsuki.0b4477c.svg",
            "description":"Sellsuki เป็น Business Enabler หรือผู้ให้บริการ e-Commerce Solution Service อย่างครอบคลุมสำหรับผู้ประกอบการหรือเจ้าของธุรกิจออนไลน์ในไทย มีบริการที่หลากหลายตั้งแต่บริการทำโฆษณาออนไลน์ ขยายช่องทางการขาย ช่วยทำ Content Marketing และระบบ Customer Data Platform ไปจนถึงบริการ Fulfillment ทำให้ Sellsuki เป็นคำตอบสำหรับการทำธุรกิจออนไลน์ที่ครอบคลุมที่สุด",
            "@id": "",
            "url": "https://www.sellsuki.co.th/",
            "telephone": "+6620263250",
            "email": "mailto:hello@sellsuki.com",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10/39 4Simplex Building, 3rd Floor, Ratchadaphisek Rd, Chan Kasem",
              "addressLocality": "Bangkok",
              "postalCode": "10900",
              "addressCountry": "TH"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.801901,
              "longitude": 100.5751
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "10:00",
              "closes": "19:00"
            },
            "sameAs": [
              "https://www.facebook.com/Sellsuki/",
              "https://www.youtube.com/channel/UC-NEIYfX5dc2JXG9mEwWfcQ"
            ] 
          }
        },
      methods: {
        scrollToTop() {
          window.scrollTo(0,0);
        }
      }
    }
    </script>
    
    <style scoped>
    @import url("~/assets/styles/css/customV2.css");
    #progress{
      display: none;
    }
    </style>
    