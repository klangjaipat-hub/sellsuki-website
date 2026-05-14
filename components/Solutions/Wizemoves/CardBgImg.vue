<template>
<div>
  <div v-if="type === 'BusinessConsulting'" class="row ps-4 ms-2 pe-1 mt-md-0 mt-md-0 mt-5">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Consulting/ICON11.png"
              alt="ICON11.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              เราไม่ใช่แค่ที่ปรึกษา แต่เป็นพาร์ทเนอร์ที่ขับเคลื่อนธุรกิจ
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราทำมากกว่าการให้คำแนะนำ เราทำงานร่วมกับคุณ ตั้งแต่การวางแผน ไปจนถึงการลงมือทำ พร้อมปรับกลยุทธ์อย่างต่อเนื่องเพื่อให้ได้ผลลัพธ์ที่ดีที่สุด
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Consulting/ICON12.png"
              alt="ICON12.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              กลยุทธ์ที่ขับเคลื่อนด้วยข้อมูล (Data-Driven Strategy)
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราใช้ Social Listening, Performance Marketing, และ Data Visualization เพื่อช่วยให้ คุณเข้าใจตลาด ลูกค้า และพฤติกรรมการซื้ออย่างแม่นยำ ลดความเสี่ยงเพิ่มโอกาสสร้าง ยอดขาย
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Consulting/ICON3.png"
              alt="ICON3.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              สร้างยอดขายที่วัดผลได้จริง ไม่ใช่แค่ยอด Engagement
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราออกแบบแคมเปญที่ เชื่อมโยง Influencer Marketing กับ Performance Marketing เพื่อให้ทุกบาทที่ลงทุนไปสร้างผลลัพธ์ที่ชัดเจน
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="type === 'Edis'" class="row ps-4 ms-2 pe-1 mt-md-0 mt-md-0 mt-5">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Edis/ICON1.png"
              alt="ICON1.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              ยอดขายเติบโตอย่างมั่นคง
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              วางกลยุทธ์การขายที่ใช่ ดึงดูดลูกค้าใหม่ พร้อมรักษาฐานลูกค้าเดิม
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Edis/ICON2.png"
              alt="ICON12.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              ไม่ต้องมีทีมงานก็ขายได้
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราดูแลให้ครบวงจร ตั้งแต่ Set up ร้านค้า วางกลยุทธ์ ยิงโฆษณา ไปจนถึงวิเคราะห์ยอดขาย
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Edis/ICON3.png"
              alt="ICON3.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              เพิ่มการเข้าถึงและการมองเห็นร้านค้าแบบจัดเต็ม
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              ใช้เครื่องมือการตลาดและโฆษณาออนไลน์เพื่อดันร้านค้าคุณให้ติดอันดับ
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Edis/ICON2.png"
              alt="ICON3.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              วิเคราะห์ข้อมูลเชิงลึกและปรับกลยุทธ์แบบ Real-time
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              ใช้ข้อมูลจริงในการวางแผน ไม่ใช่แค่การคาดเดา
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Edis/ICON3.png"
              alt="ICON3.png"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              บริการครบวงจร ดูแลทุกแพลตฟอร์ม
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              ทั้งแพลตฟอร์ม E-Commerce และ Social Media พร้อมวางกลยุทธ์ให้แต่ละแพลตฟอร์ม เติบโต
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="type === 'Martech'" class="row ps-4 ms-2 pe-1 mt-md-0 mt-md-0 mt-5">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Martech/ICON1.svg"
              alt="ICON1.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              ผู้เชี่ยวชาญด้าน MarTech โดยตรง
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราเข้าใจทั้งกลยุทธ์การตลาดและการเลือกเทคโนโลยีที่เหมาะสมที่สุดสำหรับธุรกิจคุณ ไม่ว่าจะเป็นธุรกิจแบบ B2B, B2C หรือ E-commerce
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Martech/ICON2.svg"
              alt="ICON12.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              วิเคราะห์ปัญหาเชิงลึก ก่อนนำเสนอเทคโนโลยีที่ใช่
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              พัฒนา LINE API, CRM, ระบบสมาชิก และคลังสินค้า พร้อมรองรับ Marketplace, Social Media, Payment Gateway และ Fulfillment ช่วยให้ธุรกิจคุณทำงาน อัตโนมัติและไม่มีสะดุด
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Martech/ICON3.svg"
              alt="ICON3.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              มั่นใจด้วยระบบที่ปลอดภัยและเสถียร
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              พัฒนา เว็บและแอปด้วยมาตรฐานความปลอดภัยสูง ป้องกันข้อมูลรั่วไหล ด้วยการรองรับ SSL, Data Encryption , Authentication, GDPR, ISO27001 และ Backup System ให้ธุรกิจคุณ ดำเนินไปได้อย่างมั่นใจ
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Martech/ICON4.svg"
              alt="ICON3.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              วางระบบครบวงจร พร้อมดูแลระยะยาว
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราดูแลตั้งแต่การวางกลยุทธ์ เลือกและติดตั้งเทคโนโลยี ฝึกอบรมการใช้งาน ไปจนถึงบริการดูแล และบำรุงรักษาระบบ เพื่อให้ธุรกิจของคุณเติบโตอย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Martech/ICON5.svg"
              alt="ICON3.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              ผสาน AI เพื่อเพิ่มประสิทธิภาพทางการตลาด
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              นำเทคโนโลยี AI เข้ามาช่วยวิเคราะห์ข้อมูลลูกค้า, คาดการณ์พฤติกรรมผู้บริโภคในอนาคต เพื่อให้การตลาดที่แม่นยำ ลดต้นทุน และสร้างผลลัพธ์ได้สูงกว่าการตลาดแบบเดิม
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="type === 'Ads'" class="row ps-4 ms-2 pe-1 mt-md-0 mt-md-0 mt-5">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Ads/ICON1.svg"
              alt="ICON1.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              พลิกโฉมการโฆษณาด้วยกลยุทธ์ Data First
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เรายกระดับการยิงโฆษณาด้วยการใช้ฐานข้อมูลจริง ไม่ว่าจะเป็นข้อมูลลูกค้าเก่า (CRM), Pixel หรือ Google Analytics เพื่อกำหนดกลุ่มเป้าหมายที่แม่นยำที่สุด ช่วยให้คุณเข้าถึงคนที่ "ใช่" ในเวลาที่ "ถูกต้อง" โดยไม่ต้องเดาทาง
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Ads/ICON2.svg"
              alt="ICON12.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              วางโครงสร้างแคมเปญให้แข็งแรง ก่อนลงงบประมาณ (Structure Before Spending)
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เราให้ความสำคัญกับการออกแบบโครงสร้างโฆษณาอย่างเป็นระบบก่อนเริ่มใช้เงินทุกบาท เพื่อให้มั่นใจว่าทุกงบประมาณที่ลงทุนไปจะถูกบริหารจัดการอย่างมีประสิทธิภาพสูงสุด และสามารถต่อยอดเพื่อสร้างผลกำไรให้ธุรกิจได้อย่างคุ้มค่า
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
      <div class="card">
        <div class="card-body d-flex align-items-center">
          <div class="cart-img">
            <img
              src="~/assets/SolutionsWizemoves/Ads/ICON3.svg"
              alt="ICON3.svg"
            />
          </div>
          <div class="px-112">
            <p class="text-s-36 font-bd color-FFFFFF m-auto">
              ดูแลครบทุกกระบวนการ ตั้งแต่สร้างการรับรู้จนถึง ปิดยอดขาย (Full-Funnel Performance)
            </p>
            <p class="text-s-24 mt-md-3 mt-1 color-FFFFFF mb-0">
              เรารับหน้าที่วางแผนการยิงโฆษณาที่ครอบคลุมการเดินทางของลูกค้าในทุกขั้นตอน ตั้งแต่การ ดึงดูดความสนใจไปจนถึงการกระตุ้นให้เกิดยอดซื้อจริง เพื่อให้ทุกขั้นตอนทำงานร่วมกันอย่าง ไร้รอยต่อและวัดผลความสำเร็จได้ชัดเจน
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
  <script>
  export default {
    name: 'CardBgImg',
    props: ['type'],
  }
  </script>
  
  <style scoped>
  @import url('~/assets/styles/css/customNew.css');
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .card-body {
      padding-top: 24px;
      padding-bottom: 24px;
    }
    .cart-img img {
      width: 48px;
    }
    .cart-img {
      position: absolute;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      box-shadow: -1px -6px 4px 0px rgba(203, 231, 174, 0.15) inset,1px 1px 4px 0px rgba(203, 231, 174, 0.15) inset,0px 3px 10px 0px rgba(0, 0, 0, 0.05);

      background: #A855F7B2;
      border-radius: 16px;
      padding: 17px;
      left: -38px;
      top: 50%;
      transform: translate(0%, -50%);
    }
    .card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      height: auto;
      margin-bottom: 24px;
    }
    .text-s-24 {
      font-size: 20px !important;
      line-height: 20px;
    }
    .text-s-36 {
      font-size: 28px !important;
      line-height: 28px;
    }
    .px-112{
      padding-left: 50px;
      padding-right: 20px;
    }
  }
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .cart-img img {
      width: 48px;
    }
    .cart-img {
      position: absolute;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      box-shadow: -1px -6px 4px 0px rgba(203, 231, 174, 0.15) inset,1px 1px 4px 0px rgba(203, 231, 174, 0.15) inset,0px 3px 10px 0px rgba(0, 0, 0, 0.05);

      background: #A855F7B2;
      border-radius: 16px;
      padding: 17px;
      left: -38px;
      top: 50%;
      transform: translate(0%, -50%);
    }
    .card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      height: auto;
      margin-bottom: 24px;
    }
    .text-s-24 {
      font-size: 20px !important;
      line-height: 20px;
    }
    .text-s-36 {
      font-size: 28px !important;
      line-height: 28px;
    }
    .px-112{
      padding-left: 50px;
      padding-right: 20px;
    }
  }
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .cart-img img {
      width: 48px;
    }
    .cart-img {
      position: absolute;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      box-shadow: -1px -6px 4px 0px rgba(203, 231, 174, 0.15) inset,1px 1px 4px 0px rgba(203, 231, 174, 0.15) inset,0px 3px 10px 0px rgba(0, 0, 0, 0.05);

      background: #A855F7B2;
      border-radius: 16px;
      padding: 17px;
      left: -38px;
      top: 50%;
      transform: translate(0%, -50%);
    }
    .card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      height: auto;
      margin-bottom: 12px;
    }
    .text-s-24 {
      font-size: 20px !important;
      line-height: 20px;
    }
    .text-s-36 {
      font-size: 28px !important;
      line-height: 28px;
    }
    .px-112{
      padding-left: 50px;
      padding-right: 20px;
    }
  }
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .cart-img img {
      width: 100%;
    }
    .cart-img {
      position: absolute;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      box-shadow: -1px -6px 4px 0px rgba(203, 231, 174, 0.15) inset,1px 1px 4px 0px rgba(203, 231, 174, 0.15) inset,0px 3px 10px 0px rgba(0, 0, 0, 0.05);

      background: #A855F7B2;
      border-radius: 32px;
      padding: 17px;
      left: -38px;
      top: 50%;
      transform: translate(0%, -50%);
    }
    .card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      height: 100%;
    }
    .text-s-24 {
      font-size: 24px !important;
      line-height: 24px;
    }
    .text-s-36 {
      font-size: 36px !important;
      line-height: 36px;
    }
    .px-112{
      padding-left: 100px;
      padding-right: 40px;
    }
  }
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .cart-img img {
      width: 100%;
    }
    .cart-img {
      position: absolute;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      box-shadow: -1px -6px 4px 0px rgba(203, 231, 174, 0.15) inset,1px 1px 4px 0px rgba(203, 231, 174, 0.15) inset,0px 3px 10px 0px rgba(0, 0, 0, 0.05);

      background: #A855F7B2;
      border-radius: 32px;
      padding: 17px;
      left: -38px;
      top: 50%;
      transform: translate(0%, -50%);
    }
    .card {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(0, 0, 0, 0.03);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      height: 100%;
    }
    .text-s-24 {
      font-size: 24px !important;
      line-height: 24px;
    }
    .text-s-36 {
      font-size: 36px !important;
      line-height: 36px;
    }
    .px-112{
      padding-left: 100px;
      padding-right: 40px;
    }
  }
  </style>
  