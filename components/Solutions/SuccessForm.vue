<template>
    <div>
        <div class="modal fade" id="sussessModal" aria-hidden="true" aria-labelledby="sussessModalLabel2" tabindex="-1">
            <div class="modal-dialog modal-md modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="row">
                            <div class="col-12">
                                <img v-if="bu === 'LineAgency' || bu === 'LineAgencySub'" class="img-fluid"
                                    src="../../assets/SolutionsLine/success.png" alt="มาสคอตของ LINE Agency ยืนชูมือฉลองดีใจ"/>
                                <img v-if="bu === 'Wizemoves' || bu === 'WizemovesConsult' || bu === 'WizemovesEdis' || bu === 'WizemovesSub'"
                                    class="img-fluid" src="../../assets/SolutionsWizemoves/success.png" alt="มาสคอตของ WizeMoves ถือแท็บเล็ต สื่อถึงความพร้อมทำงานเพื่อช่วยให้ธุรกิจให้เติบโต"/>
                                <img v-if="bu === 'Home' || bu === 'event' || bu === 'Oc2plus' || bu === 'Akita' || bu === 'Patona'" class="img-fluid" src="../../assets/event/success.png" alt="มาสคอตของ Sellsuki ยืนชูมือฉลองดีใจ"/>
                            </div>
                            <div class="col-12 color-1F2937">
                                <p class="text-s-60 font-bd mt-3">ส่งฟอร์มเรียบร้อย!</p>
                                <p class="text-s-28 font-df d-none d-lg-block">เราได้รับข้อมูลของคุณแล้ว
                                    ทีมงานของเราจะรีบทำการติดต่อกลับไป<br /> เพื่อนัดหมายการให้คำปรึกษากับคุณ!</p>
                                <p class="text-s-28 font-df d-block d-lg-none">เราได้รับข้อมูลของคุณแล้ว<br />
                                    ทีมงานของเราจะรีบทำการติดต่อกลับไป<br /> เพื่อนัดหมายการให้คำปรึกษากับคุณ!</p>
                                <button v-if="bu === 'WizemovesConsult'"
                                    @click="$router.push('/solutions/wizemoves/business-consulting')"
                                    class="btn-wizemoves mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'Martech'" @click="$router.go(-1)"
                                    class="btn-line mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'LineAgencySub'" @click="$router.go(-1)"
                                    class="btn-line mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'WizemovesSub'" @click="$router.go(-1)"
                                    class="btn-wizemoves mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'WizemovesEdis'"
                                    @click="$router.push('/solutions/wizemoves/edis')"
                                    class="btn-wizemoves mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'event'" @click="$router.push('/')"
                                    class="btn-sellsuki mt-4 text-s-24" data-bs-dismiss="modal"
                                    aria-label="Close">กลับไปที่เว็บไซต์</button>
                                <button v-else-if="bu === 'Home' || bu === 'Oc2plus' || bu === 'Akita' || bu === 'Patona'" class="btn-sellsuki mt-4 text-s-24"
                                    data-bs-dismiss="modal" aria-label="Close">ตกลง</button>
                                <button v-else
                                    :class="{ 'btn-wizemoves': bu === 'Wizemoves', 'btn-line': bu === 'LineAgency' }"
                                    class="mt-4 text-s-24" data-bs-dismiss="modal" aria-label="Close">ตกลง</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bu'],
    mounted() {
    },
}
</script>

<style scoped>
p {
    margin-bottom: 0 !important;
}

.text-s-28 {
    line-height: 28px;
}

.btn-wizemoves {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #7C3AED !important;
    border: 1px solid #7C3AED !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}

.btn-line {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #22C55E !important;
    border: 1px solid #22C55E !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}

.btn-sellsuki {
    width: 184px !important;
    height: 40px !important;
    color: #FFFFFF !important;
    background-color: #32A9FF !important;
    border: 1px solid #32A9FF !important;
    box-sizing: border-box !important;
    border-radius: 20px !important;
}

/* ----------------------- model ----------------- */
.header-model {
    font-weight: 700;
    line-height: 72px;
    text-align: center;
}

.modal-footer {
    border-top: 0px;
}

.modal-content {
    border-radius: 16px;
}

.modal-header {
    border-bottom: 0px;
}

.modal-body {
    padding-top: 50px;
    padding-bottom: 100px;
}

.modal-custom-size {
    border-radius: 16px;
    background-color: #F0FDF4;
}

.btn-close {
    margin-right: 15px;
    margin-top: 10px;
}

.modal-dialog {
    max-width: 750px;
}
</style>
