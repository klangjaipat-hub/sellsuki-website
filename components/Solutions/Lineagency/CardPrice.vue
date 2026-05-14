<template>
  <div class="row p-0 mt-5 mb-5 fade-in-up" v-intersect>
    <div class="col-12 text-s-24 color-6B7280 d-xl-block d-none">
        <div class="card-kero">
            <div class="card-body p-0">
                <div class="row color-1F2937">
                <div class="col-xxl-3 col-4"><img class="img-kero" src="../../../assets/SolutionsLine/LineSmartChannel/kero.png" alt="kero.png"></div>
                <div class="col-xxl-6 col-5">
                  <div class="d-flex">
                    <span class="text-s-44 font-bd mb-0">ราคาเริ่มต้น</span>
                    <div v-if="type === '3,999'">
                      <span class="text-s-24 font-md text-hl">ซื้อผ่าน LINE by Sellsuki ถูกกว่า ซื้อเอง</span>
                    </div>
                  </div>
                  <p class="text-s-28 mb-0 mt-2">สำหรับธุรกิจที่ต้องการเพิ่มการมองเห็นและการเข้าถึงกลุ่มเป้าหมาย<br class="d-xxl-block d-none"/> พร้อมทั้งสร้างโอกาสในการเชื่อมต่อกับผู้ใช้งานจำนวนมาก</p>
                </div>
                <div class="col-3 text-center">
                    <p class="text-s-72 d-xxl-block d-none  font-bd" style="margin-top: -20px;">{{type}} ฿</p>
                    <p class="text-s-44 d-xxl-none d-block font-bd" style="margin-top: -20px;">{{type}} ฿</p>
                    <a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="button-color"><span>แชทกับแอดมิน</span></a>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 color-6B7280 d-xl-none d-block">
        <div class="card-kero" style="height: 500px;">
            <div class="card-body p-0">
                <div class="row color-1F2937">
                  <div class="col-12 mb-4">
                    <div class="d-flex">
                      <span class="text-s-28 font-bd mb-0">ราคาเริ่มต้น</span>
                        <div v-if="type === '3,999'">
                          <span class="text-s-24 font-md text-hl">ซื้อผ่าน LINE by Sellsuki ถูกกว่า ซื้อเอง</span>
                        </div>
                      </div>
                      <p class="text-s-20 mb-0">สำหรับธุรกิจที่ต้องการเพิ่มการมองเห็นและการเข้าถึงกลุ่ม เป้าหมาย พร้อมทั้งสร้างโอกาสในการเชื่อมต่อกับผู้ใช้งาน จำนวนมาก</p>
                  </div>
                  <div class="col-7 text-start">
                      <p class="text-s-44 font-bd">{{type}} ฿</p>
                  </div>
                  <div class="col-5 text-end d-inline justify-content-end mt-3"><a href="https://lin.ee/zYORpaH" target="_blank" rel="noopener" class="button-color text-s-24"><span>แชทกับแอดมิน</span></a></div>
                  <div class="col-12 text-center">
                    <img class="img-fluid" src="../../../assets/SolutionsLine/LineSmartChannel/kero-m.png" alt="kero-m.png" style="margin-top: 8px;">
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
            unit: 'เดือน'
        }
    },
    mounted(){
      if (this.type === '3,999') {
        this.unit = 'ปี'
      }
    }
}
</script>

<style scoped>
.text-s-52{
  line-height: 52px;
}

.text-s-44 {
  line-height: 44px;
}

.text-s-24 {
  line-height: 24px;
}

.text-s-36{
  line-height: 36px;
}

.text-s-20{
  line-height: 20px;
}
a{
  color: #FFFFFF;
}
a:hover{
  color: #FFFFFF !important;
}
.button-color{
  color: #FFFFFF;
  background-color: #22C55E;
  font-size: 28px;
  line-height: 28px;
  padding: 8px 20px;
  border-radius: 32px;
}

.text-hl{
  background-color: #FCD34D;
  border-radius: 16px;
  padding: 4px 10px 3px 10px;
  position: absolute;
  margin-top: 8px;
  margin-left: 10px;
}

@media only screen and (max-width: 430px) {
  .text-s-44{
    font-size: 36px !important;
  }
  .button-color{
    font-size: 20px !important;
    line-height: 20px !important;
    padding: 6px 14px !important;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .card-kero{
    background: #F9FAFB;
    border: 1px solid  #E5E7EB;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182712,0px 3px 3px 0px #1118270D,0px 7px 4px 0px #11182708,0px 12px 5px 0px #11182703,0px 19px 5px 0px #11182700;
    padding: 24px 24px;
  }
  .text-hl{
    background-color: #FCD34D;
    border-radius: 16px;
    padding: 1px 10px 0px 10px;
    position: absolute;
    margin-top: 8px;
    margin-left: 10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .card-kero{
    background: #F9FAFB;
    border: 1px solid  #E5E7EB;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182712,0px 3px 3px 0px #1118270D,0px 7px 4px 0px #11182708,0px 12px 5px 0px #11182703,0px 19px 5px 0px #11182700;
    padding: 24px 24px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .card-kero{
    background: #F9FAFB;
    border: 1px solid  #E5E7EB;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182712,0px 3px 3px 0px #1118270D,0px 7px 4px 0px #11182708,0px 12px 5px 0px #11182703,0px 19px 5px 0px #11182700;
    padding: 24px 24px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .card-kero{
    background: #F9FAFB;
    border: 1px solid  #E5E7EB;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182712,0px 3px 3px 0px #1118270D,0px 7px 4px 0px #11182708,0px 12px 5px 0px #11182703,0px 19px 5px 0px #11182700;
    padding: 50px 24px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .card-kero {
    background: #F9FAFB;
    border: 1px solid  #E5E7EB;
    border-radius: 16px;
    box-shadow: 0px 0px 0px 0px #11182717,0px 1px 2px 0px #11182712,0px 3px 3px 0px #1118270D,0px 7px 4px 0px #11182708,0px 12px 5px 0px #11182703,0px 19px 5px 0px #11182700;
    padding: 71px 32px;
  }
  .img-kero {
    margin-top: -62px;position: absolute;
  }
}

@media screen and (max-width: 1450px) and (min-width: 1400px) {
  .img-kero {
    margin-top: 20px;
    position: absolute;
  }
}
</style>