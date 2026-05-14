export default function(req, res, next) {
  const redirects = [
    // --------------- / ---------------
    {
      from: "/solutions/edis", 
      to: "/solutions/wizemoves/edis"
    },
    {
      from: "/solutions/fuse", 
      to: "/solutions/wizemoves#DigitalAdvertising"
    },
    {
      from: "/solutions/fuse/", 
      to: "/solutions/fuse"
    },
    {
      from: "/solutions/line", 
      to: "/solutions/lineagency"
    },
    {
      from: "/solutions/line/", 
      to: "/solutions/lineagency"
    },
    {
      from: "/solutions/kaikong/", 
      to: "/solutions/kaikong"
    },
    {
      from: "/solutions/beary/", 
      to: "/solutions/beary"
    },
    {
      from: "/solutions/akita/", 
      to: "/solutions/akita"
    },
    {
      from: "/solutions/shipmunk/", 
      to: "/solutions/shipmunk"
    },
    {
      from: "/solutions/oc2plus/", 
      to: "/solutions/oc2plus"
    },
    {
      from: "/about-us/", 
      to: "/about-us"
    },
    {
      from: "types-of-business/business-owner/", 
      to: "types-of-business/business-owner"
    },
    {
      from: "/types-of-business/online-merchant/", 
      to: "/types-of-business/online-merchant"
    },
    {
      from: "/types-of-business/corporate/", 
      to: "/types-of-business/corporate"
    },
    {
      from: "/portfolio/", 
      to: "/portfolio"
    },
    {
      from: "/blog/", 
      to: "/blog"
    },
    {
      from: "/contact-us/", 
      to: "/contact-us"
    },
    {
      from: "/join-us/", 
      to: "/join-us"
    },
    {
      from: "/policy/", 
      to: "/policy"
    },
    {
      from: "/terms-of-use/", 
      to: "/terms-of-use"
    },
    // --------------- Uppercase Letter to Lowercase ---------------
    {
      from: "/Solutions/Fuse", 
      to: "/solutions/fuse"
    },
    {
      from: "/Solutions/Line", 
      to: "/solutions/lineagency"
    },
    {
      from: "/Solutions/Kaikong", 
      to: "/solutions/kaikong"
    },
    {
      from: "/Solutions/Beary", 
      to: "/solutions/beary"
    },
    {
      from: "/Solutions/Akita", 
      to: "/solutions/akita"
    },
    {
      from: "/Solutions/Shipmunk", 
      to: "/solutions/shipmunk"
    },
    {
      from: "/Solutions/Oc2plus", 
      to: "/solutions/oc2plus"
    },
    {
      from: "/Solutions/Oc2Plus", 
      to: "/solutions/oc2plus"
    },
    {
      from: "/solutions/Fuse", 
      to: "/solutions/fuse"
    },
    {
      from: "/solutions/Line", 
      to: "/solutions/lineagency"
    },
    {
      from: "/solutions/Kaikong", 
      to: "/solutions/kaikong"
    },
    {
      from: "/solutions/Beary", 
      to: "/solutions/beary"
    },
    {
      from: "/solutions/Akita", 
      to: "/solutions/akita"
    },
    {
      from: "/solutions/Shipmunk", 
      to: "/solutions/shipmunk"
    },
    {
      from: "/solutions/Oc2plus", 
      to: "/solutions/oc2plus"
    },
    {
      from: "/solutions/Oc2Plus", 
      to: "/solutions/oc2plus"
    },
    {
      from: "/About-us", 
      to: "/about-us"
    },
    {
      from: "Types-Of-Business/Business-Owner", 
      to: "types-of-business/business-owner"
    },
    {
      from: "/Types-Of-Business/Online-Merchant",
      to: "/Types-Of-Business/Online-Merchant"
    },
    {
      from: "/Types-Of-Business/Corporate", 
      to: "/types-of-business/corporate"
    },
    {
      from: "/Portfolio", 
      to: "/portfolio"
    },
    {
      from: "/Blog", 
      to: "/blog"
    },
    {
      from: "/Contact-us", 
      to: "/contact-us"
    },
    {
      from: "/Join-us", 
      to: "/join-us"
    },
    {
      from: "/Policy", 
      to: "/policy"
    },
    {
      from: "/Terms-Of-Use", 
      to: "/terms-of-use"
    },
    // --------------- Uppercase Letter to Lowercase EN ---------------
    {
      from: "/en/Solutions/Fuse",
      to: "/en/solutions/fuse"
    },
    {
      from: "/en/Solutions/Line", 
      to: "/en/solutions/lineagency"
    },
    {
      from: "/en/Solutions/Kaikong", 
      to: "/en/solutions/kaikong"
    },
    {
      from: "/en/Solutions/Beary", 
      to: "/en/solutions/beary"
    },
    {
      from: "/en/Solutions/Akita", 
      to: "/en/solutions/akita"
    },
    {
      from: "/en/Solutions/Shipmunk", 
      to: "/en/solutions/shipmunk"
    },
    {
      from: "/en/Solutions/Oc2Plus", 
      to: "/en/solutions/oc2plus"
    },
    {
      from: "/en/Solutions/Oc2plus", 
      to: "/en/solutions/oc2plus"
    },
    {
      from: "/en/solutions/Fuse",
      to: "/en/solutions/fuse"
    },
    {
      from: "/en/solutions/Line", 
      to: "/en/solutions/lineagency"
    },
    {
      from: "/en/solutions/Kaikong", 
      to: "/en/solutions/kaikong"
    },
    {
      from: "/en/solutions/Beary", 
      to: "/en/solutions/beary"
    },
    {
      from: "/en/solutions/Akita", 
      to: "/en/solutions/akita"
    },
    {
      from: "/en/solutions/Shipmunk", 
      to: "/en/solutions/shipmunk"
    },
    {
      from: "/en/solutions/Oc2plus", 
      to: "/en/solutions/oc2plus"
    },
    {
      from: "/en/solutions/Oc2Plus", 
      to: "/en/solutions/oc2plus"
    },
    {
      from: "/en/About-us", 
      to: "/en/about-us"
    },
    {
      from: "/en/Types-Of-Business/Business-Owner", 
      to: "/en/types-of-business/business-owner"
    },
    {
      from: "/en/Types-Of-Business/Online-Merchant",
      to: "/en/Types-Of-Business/Online-Merchant"
    },
    {
      from: "/en/Types-Of-Business/Corporate", 
      to: "/en/types-of-business/corporate"
    },
    {
      from: "/en/Portfolio", 
      to: "/en/portfolio"
    },
    {
      from: "/en/Blog", 
      to: "/en/blog"
    },
    {
      from: "/en/Contact-us", 
      to: "/en/contact-us"
    },
    {
      from: "/en/Join-us", 
      to: "/en/join-us"
    },
    {
      from: "/en/Policy", 
      to: "/en/policy"
    },
    {
      from: "/en/Terms-Of-Use", 
      to: "/en/terms-of-use"
    },
    // --------------- en ---------------
    {
      from: "/en/solutions/fuse/", 
      to: "/en/solutions/fuse"
    },
    {
      from: "/en/solutions/line/", 
      to: "/en/solutions/lineagency"
    },
    {
      from: "/en/solutions/kaikong/", 
      to: "/en/solutions/kaikong"
    },
    {
      from: "/en/solutions/beary/", 
      to: "/en/solutions/beary"
    },
    {
      from: "/en/solutions/akita/", 
      to: "/en/solutions/akita"
    },
    {
      from: "/en/solutions/shipmunk/", 
      to: "/en/solutions/shipmunk"
    },
    {
      from: "/en/solutions/oc2plus/", 
      to: "/en/solutions/oc2plus"
    },
    {
      from: "/en/about-us/", 
      to: "/en/about-us"
    },
    {
      from: "/en/types-of-business/business-owner/", 
      to: "/en/types-of-business/business-owner"
    },
    {
      from: "/en/types-of-business/online-merchant/", 
      to: "/en/types-of-business/online-merchant"
    },
    {
      from: "/en/types-of-business/corporate/", 
      to: "/en/types-of-business/corporate"
    },
    {
      from: "/en/portfolio/", 
      to: "/en/portfolio"
    },
    {
      from: "/en/blog/", 
      to: "/en/blog"
    },
    {
      from: "/en/contact-us/", 
      to: "/en/contact-us"
    },
    {
      from: "/en/join-us/", 
      to: "/en/join-us"
    },
    {
      from: "/en/policy/", 
      to: "/en/policy"
    },
    {
      from: "/en/terms-of-use/", 
      to: "/en/terms-of-use"
    },
    // ------------ อื่นๆ ----------- //
    {
      from: "/testimonial", 
      to: "/"
    },
    {
      from: "/business-solutions_lineat", 
      to: "/solutions/lineagency"
    },
    {
      from: "/Blogs/Detail/116/bit.ly/bearyalwayon", 
      to: "/"
    },
    {
      from: "/line-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3", 
      to: "/solutions/lineagency"
    },

    {
      from: "/line-homepage", 
      to: "/solutions/lineagency"
    },
    {
      from: "/line-homepage-3/line-faq", 
      to: "/solutions/lineagency"
    },
    {
      from: "/feed", 
      to: "/"
    },
    {
      from: "/testimonial", 
      to: "/"
    },
    {
      from: "/testimonial/customer1", 
      to: "/"
    },
    {
      from: "/testimonial/customer2", 
      to: "/"
    },
    {
      from: "/testimonial/customer3", 
      to: "/"
    },

    {
      from: "/testimonial/customer4", 
      to: "/"
    },
    {
      from: "/testimonial/customer5", 
      to: "/"
    },
    {
      from: "/testimonial/customer6", 
      to: "/"
    },

    {
      from: "/testimonial/customer7", 
      to: "/"
    },
    {
      from: "/testimonial/customer8", 
      to: "/"
    },
    {
      from: "/testimonial/customer9", 
      to: "/"
    },
    {
      from: "/testimonial/customer10", 
      to: "/"
    },
    {
      from: "/category/powerup", 
      to: "/"
    },
    {
      from: "/category/powerup/page/2", 
      to: "/"
    },
    {
      from: "/category/powerup/page/3", 
      to: "/"
    },
    {
      from: "/category/powerup/delivery", 
      to: "/"
    },
    {
      from: "/category/powerup/additional-services", 
      to: "/"
    },
    {
      from: "/lap", 
      to: "/solutions/lineagency"
    },
    {
      from: "/lap-staging", 
      to: "/solutions/lineagency"
    },
    {
      from: "/lap#!/line_at_price", 
      to: "/solutions/lineagency"
    },
    {
      from: "/author/sellsukimkt", 
      to: "/"
    },
    {
      from: "/author/admincofen", 
      to: "/"
    },
    {
      from: "/Blogs/Detail/38/null", 
      to: "/blogs/detail/38/6step-create-digital-marketing-plan"
    },
    {
      from: "/Blogs/detail/39/null", 
      to: "/blogs/detail/39/how-to-make-shopper-like-your-mobile-web"
    },
    {
      from: "/Blogs/Detail/45/null", 
      to: "/blogs/detail/45/6tips-make-consumer-satisfied"
    },
    {
      from: "/terms.html", 
      to: "/blogs/detail/68/what-is-line-premium-id"
    },
    {
      from: "/how-to-make-old-consumer-back", 
      to: "/blogs/detail/43/5tips-to-keep-old-consumer"
    },
    {
      from: "/pricing-psychology", 
      to: "/blogs/detail/33/pricing-strategy"
    },
    {
      from: "/policy.html", 
      to: "/"
    },
    {
      from: "/powerup", 
      to: "/"
    },
    {
      from: "/line-tv", 
      to: "/"
    },
    {
      from: "/pricing", 
      to: "/"
    },
    {
      from: "/pricing/", 
      to: "/"
    },
    {
      from: "/wp-content/uploads/smil", 
      to: "/"
    },
    {
      from: "/sellsuki-faq", 
      to: "/"
    },
    {
      from: "/line-homepage", 
      to: "/solutions/lineagency"
    },
    {
      from: "/line-homepage-3/line-faq", 
      to: "/solutions/lineagency"
    },
    {
      from: "/line-timeline", 
      to: "/solutions/lineagency"
    },
    {
      from: "/line-media", 
      to: "/solutions/lineagency"
    },
    {
      from: "/business-solutions_lineat", 
      to: "/solutions/lineagency"
    },
    {
      from: "/business-solutions_sellsuki-partnership-program", 
      to: "/"
    },
    {
      from: "/business-solutions_bearyweb", 
      to: "/solutions/beary"
    },
    {
      from: "/business-solutions_special-parcel", 
      to: "/"
    },
    {
      from: "/business-solutions_kprint", 
      to: "/"
    },
    {
      from: "/business-solutions_paypal", 
      to: "/"
    },
    {
      from: "/additional-service_facebook-shop", 
      to: "/solutions/fuse"
    },
    {
      from: "/additional-service_pick-pack", 
      to: "/solutions/akita"
    },
    {
      from: "/additional-service_barcode", 
      to: "/"
    },
    {
      from: "/additional-service_sellsuki-qr-code", 
      to: "/"
    },
    {
      from: "/additional-service_importer", 
      to: "/"
    },
    {
      from: "/additional-service_pos", 
      to: "/"
    },
    {
      from: "/update-home", 
      to: "/"
    },
    // ซื้อ-package-กับ-sellsuki-ต่างกับซื้อเอง
    {
      from: "/%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD-package-%E0%B8%81%E0%B8%B1%E0%B8%9A-sellsuki-%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B8%87", 
      to: "/solutions/lineagency"
    },
    // บริการส่งของ-drop-off
    {
      from: "/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87-drop-off", 
      to: "/Solutions/Shipmunk"
    },
    // line-sellsuki-รับทำโฆษณา-รับทำการตลาด
    {
      from: "/line-sellsuki-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B9%82%E0%B8%86%E0%B8%A9%E0%B8%93%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94", 
      to: "/solutions/lineagency"
    },
    // line-คืออะไร
    {
      from: "/line-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3", 
      to: "/solutions/lineagency"
    },
    // line-premium-id-คืออะไร-เปลี่ยนชื่อ-premium-id
    {
      from: "/line-premium-id-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-premium-id", 
      to: "/blogs/detail/68/what-is-line-premium-id"
    },
    // แพ็กเกจ-ผู้บัญชาการ
    {
      from: "/%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%88-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3", 
      to: "/"
    },
    // เปิดบัญชี-หรือซื้อ-package-กับ-sellsuk-2
    {
      from: "/%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD-package-%E0%B8%81%E0%B8%B1%E0%B8%9A-sellsuk-2", 
      to: "/"
    },
    // แพ็กเกจ-เข้าที่
    {
      from: "/%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%88-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88", 
      to: "/"
    },
    // แพ็กเกจ-แอบขาย
    {
      from: "/%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%88-%E0%B9%81%E0%B8%AD%E0%B8%9A%E0%B8%82%E0%B8%B2%E0%B8%A2", 
      to: "/"
    },
    // แพ็กเกจ-เลื่อนขั้น
    {
      from: "/%E0%B9%81%E0%B8%9E%E0%B9%87%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%88-%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99", 
      to: "/"
    },
    {
      from: "/solutions",
      to: "/"
    },
    {
      from: "/Solutions",
      to: "/"
    },
    {
      from: "/step-by-step-to-be-online-seller",
      to: "/Blogs/Detail/41/start-online-sale-step-by-step"
    },
    {
      from: "/step-by-step-to-be-online-seller/",
      to: "/Blogs/Detail/41/start-online-sale-step-by-step"
    },
    {
      from: "/whatisfuse",
      to: "/solutions/fuse"
    },
    {
      from: "/whatisfuse/",
      to: "/solutions/fuse"
    },
    {
      from: "/3-ideas-increases-online-review",
      to: "/blogs/detail/79/how-importance-of-consumer-review"
    },
    {
      from: "/3-ideas-increases-online-review/",
      to: "/blogs/detail/79/how-importance-of-consumer-review"
    },
    //---------------------------- blogs -----------------------------------
    {
      from: "/blogs/detail/118/which-one-Admin-VS-ChatBot", 
      to: "/blogs/detail/118/which-one-admin-vs-chatbot"
    },
    {
      from: "/blogs/detail/98/The-Psychology-of-Marketing", 
      to: "/blogs/detail/98/the-psychology-of-marketing"
    },
    {
      from: "/blogs/detail/89/red-blue-ocean-to-lgbtqa%2Bdating-app", 
      to: "/blogs/detail/89/red-blue-ocean-to-lgbtqaplusdating-app"
    },
    {
      from: "/LineOA/GetQuote", 
      to: "/lineoa/getquote"
    },
    {
      from: "/blogs/detail/106/How-to-LINE-Myshop", 
      to: "/blogs/detail/106/how-to-line-myshop"
    },
    {
      from: "/blogs/detail/111/line-mycustomer-new-feature-Facebook-Integration", 
      to: "/blogs/detail/111/line-mycustomer-new-feature-facebook-integration"
    },
    {
      from: "/blogs/detail/87/marketing-centre-feature%20-help-boost-shopee-app",
      to: "/blogs/detail/87/marketing-centre-feature-help-boost-shopee-app"
    },
    {
      from: "/blogs/detail/87/marketing-centre-feature%20-help-boost-shopee-app",
      to: "/blogs/detail/87/marketing-centre-feature-help-boost-shopee-app"
    },
    {
      from: "/blogs/detail/How-to-IG-Reels-to-increase-sales",
      to: "/blogs/detail/how-to-ig-reels-to-increase-sales"
    },
    {
      from: "/blogs/detail/75/how-line-%20broadcast-importance-for-business",
      to: "blogs/detail/75/how-line-broadcast-importance-for-business"
    },
    {
      from: "/blogs/detail/129/differences-the-warehouse-system-in-business.",
      to: "/blogs/detail/129/differences-warehouse-system-in-business"
    },
    {
      from: "/blogs/detail/105/know-how-Web-Application",
      to: "/blogs/detail/105/know-how-web-application"
    },
    {
      from: "/blogs/detail/119/Compare-parcel-shipping-costs-for-online-shopping",
      to: "/blogs/detail/119/compare-parcel-shipping-costs-for-online-shopping"
    },
    {
      from: "/blogs/detail/111/%E0%B8%B7LINE-MyCustomer-new-feature-Facebook-Integration",
      to: "/blogs/detail/111/line-mycustomer-new-feature-facebook-integration"
    },
    {
      from: "/blogs/detail/114/SME-owners-get-to-khow-9-mode-digital-advertising",
      to: "/detail/114/sme-owners-get-to-khow-9-mode-digital-advertising"
    },
    {
      from: "/portfolios/detail/9/success-More",
      to: "/portfolios/detail/9/success-more"
    },
    {
      from: "/blogs/detail/111/line-mycustomer-new-feature",
      to: "/blogs/detail/111/line-mycustomer-new-feature-facebook-integration"
    },
    {
      from: "/Blogs/Detail/63/%E0%B9%89how-digital-transformation-important-for-sme",
      to: "/blogs/detail/63/how-digital-transformation-important-for-sme"
    },
    //---------------------------- blogs EN -----------------------------------
    {
      from: "/en/blogs/detail/118/which-one-admin-vs-chatBot", 
      to: "/en/blogs/detail/118/which-one-admin-vs-chatbot"
    },
    {
      from: "/en/blogs/detail/98/The-Psychology-of-Marketing", 
      to: "/en/blogs/detail/98/the-psychology-of-marketing"
    },
    {
      from: "/en/blogs/detail/89/red-blue-ocean-to-lgbtqa%2Bdating-app", 
      to: "/en/blogs/detail/89/red-blue-ocean-to-lgbtqaplusdating-app"
    },
    {
      from: "/en/LineOA/GetQuote", 
      to: "/en/lineoa/getquote"
    },
    {
      from: "/en/blogs/detail/106/How-to-LINE-Myshop", 
      to: "/en/blogs/detail/106/how-to-line-myshop"
    },
    {
      from: "/en/blogs/detail/111/line-mycustomer-new-feature-Facebook-Integration", 
      to: "/en/blogs/detail/111/line-mycustomer-new-feature-facebook-integration"
    },
    {
      from: "/en/blogs/detail/87/marketing-centre-feature%20-help-boost-shopee-app",
      to: "/en/blogs/detail/87/marketing-centre-feature-help-boost-shopee-app"
    },{
      from: "/en/",
      to: "/en"
    },
    //-------------------- GSC ---------------------
    {
      from: "/new-home", 
      to: "/"
    },
    {
      from: "/wp-json/", 
      to: "/"
    },
    {
      from: "/_nuxt/", 
      to: "/"
    },
    {
      from: "/nuxt/", 
      to: "/"
    },
    {
      from: "/project-category/08-photo-video/feed", 
      to: "/"
    },
    {
      from: "/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.1.1", 
      to: "/"
    },
    {
      from: "/project-category/03-illustrations", 
      to: "/"
    },
    {
      from: "/line-ดีกว่า-facebook-อย่างไร", 
      to: "/solutions/lineagency"
    },
    {
      from: "/line-homepage-3", 
      to: "/solutions/lineagency"
    },
    {
      from: "/ซื้อ-package-กับ-sellsuki-ต่างกับซื้อเอ", 
      to: "/solutions/lineagency"
    },
    {
      from: "/ContactUs", 
      to: "/contact-us"
    },
    {
      from: "/en/ContactUs", 
      to: "/en/contact-us"
    },
    {
      from: "/en/blogs/detail/38/m.me/fusebysellsuki", 
      to: "/en/blogs/detail/38/6step-create-digital-marketing-plan"
    },
    {
      from: "/blogs/detail/38/m.me/fusebysellsuki", 
      to: "/blogs/detail/38/6step-create-digital-marketing-plan"
    },
    {
      from: "/TypesOfBusiness/BusinessOwner", 
      to: "/types-of-business/business-owner"
    },
    {
      from: "/en/TypesOfBusiness/BusinessOwner", 
      to: "/en/types-of-business/business-owner"
    },
    {
      from: "/en/TypesOfBusiness/OnlineMerchant", 
      to: "/en/types-of-business/online-merchant"
    },
    {
      from: "/en/TypesOfBusiness/OnlineMerchant", 
      to: "/en/types-of-business/online-merchant"
    },
    
  ]
  const redirect = redirects.find((r) => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}