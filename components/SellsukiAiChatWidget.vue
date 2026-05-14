<template>
  <div class="sai-chat-root" aria-live="polite">
    <div v-if="!panelOpen" class="sai-fab-wrap">
      <transition name="sai-tooltip-fade">
        <div
          v-if="showIntroTooltip"
          class="sai-tooltip sai-tooltip--left"
          role="tooltip"
        >
          <span class="sai-tooltip-arrow sai-tooltip-arrow--right" aria-hidden="true" />
          สอบถามข้อมูลบริการ / AI Support
        </div>
      </transition>
      <div class="sai-fab-outer">
        <span v-if="showFabRipple" class="sai-fab-ripple sai-fab-ripple--1" aria-hidden="true" />
        <span v-if="showFabRipple" class="sai-fab-ripple sai-fab-ripple--2" aria-hidden="true" />
        <button
          type="button"
          class="sai-fab"
          aria-label="เปิด Sellsuki AI Assistant"
          @click="openPanel"
        >
          <img
            src="../assets/Chatbot/character-bot.png"
            alt=""
            class="sai-fab-img"
            width="48"
            height="48"
            loading="lazy"
          />
        </button>
      </div>
    </div>

    <div v-else class="sai-panel shadow-lg">
      <header class="sai-header">
        <div class="sai-header-profile">
          <div class="sai-avatar">
            <img
              src="../assets/Chatbot/character-bot.png"
              alt=""
              width="40"
              height="40"
              class="sai-avatar-img"
            />
            <span class="sai-avatar-online" aria-hidden="true" />
          </div>
          <div class="sai-header-text">
            <div class="sai-title-row">
              <span class="sai-title">SukiAI</span>
              <span class="sai-badge-ai">AI</span>
            </div>
            <div class="sai-subtitle">
              <span class="sai-dot-online" aria-hidden="true" />
              Online - ตอบกลับอัตโนมัติตลอด 24 ชม.
            </div>
          </div>
        </div>
        <div class="sai-header-actions">
          <button type="button" class="sai-icon-btn" aria-label="ย่อ" @click="collapsePanel">
            <i class="bi bi-dash-lg" />
          </button>
          <button type="button" class="sai-icon-btn" aria-label="ปิด" @click="collapsePanel">
            <i class="bi bi-x-lg" />
          </button>
        </div>
      </header>

      <div ref="scrollArea" class="sai-body">
        <div
          v-for="msg in chatHistory"
          :key="msg.id"
          class="sai-msg"
          :class="msg.role === 'user' ? 'sai-msg-user' : 'sai-msg-ai'"
        >
          <template v-if="msg.role === 'ai'">
            <div class="sai-msg-ai-row">
              <img
                src="../assets/Chatbot/character-bot.png"
                alt=""
                class="sai-msg-avatar"
                width="36"
                height="36"
                loading="lazy"
              />
              <div class="sai-bubble sai-bubble-ai">
              <div v-if="msg.type === 'text'" class="sai-text" v-html="formatText(msg.text)" />
              <div v-else-if="msg.type === 'card'" class="sai-card">
                <div class="sai-card-title">{{ msg.cardTitle }}</div>
                <p class="sai-card-desc">{{ msg.cardDesc }}</p>
                <nuxt-link
                  v-if="msg.linkTo"
                  class="sai-card-link"
                  :to="localePath(msg.linkTo)"
                >
                  อ่านรายละเอียดบริการเพิ่มเติม 🔗
                </nuxt-link>
              </div>
              <div v-else-if="msg.type === 'escalate'" class="sai-text">
                {{ msg.text }}
                <div class="sai-escalate-actions">
                  <button type="button" class="sai-btn-primary" @click="contactFormForId = msg.id">
                    📝 กรอกฟอร์มติดต่อ Admin
                  </button>
                </div>
                <form
                  v-if="contactFormForId === msg.id"
                  class="sai-inline-form"
                  @submit.prevent="submitContactForm(msg.id)"
                >
                  <input v-model="contactForm.name" class="sai-input" type="text" placeholder="ชื่อ" required />
                  <input v-model="contactForm.email" class="sai-input" type="email" placeholder="อีเมล" required />
                  <input v-model="contactForm.phone" class="sai-input" type="tel" placeholder="เบอร์โทร" />
                  <textarea
                    v-model="contactForm.note"
                    class="sai-input sai-textarea"
                    rows="3"
                    placeholder="รายละเอียดเพิ่มเติม"
                    required
                  />
                  <button type="submit" class="sai-btn-submit">ส่งข้อมูล</button>
                </form>
                <p v-if="contactSentForId === msg.id" class="sai-sent-ok">
                  ส่งข้อมูลเรียบร้อยแล้วค่ะ ทีมงานจะติดต่อกลับโดยเร็ว
                </p>
              </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="sai-bubble sai-bubble-user">{{ msg.text }}</div>
          </template>
        </div>

        <div v-if="isLoading" class="sai-msg sai-msg-ai">
          <div class="sai-msg-ai-row">
            <img
              src="../assets/Chatbot/character-bot.png"
              alt=""
              class="sai-msg-avatar"
              width="36"
              height="36"
              loading="lazy"
            />
            <div class="sai-bubble sai-bubble-ai sai-loading">
              <div class="sai-typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showQuickReplies">
          <p class="text-s-16 font-md color-8F97A8 mb-0"><i class="bi bi-lightbulb lightbulb"></i> บริการที่แนะนำ:</p>
        </div>

        <div v-if="showQuickReplies" class="sai-quick-wrap">
          <div class="sai-quick-chips">
            <button
              v-for="chip in quickReplies"
              :key="chip.id"
              type="button"
              class="sai-chip"
              @click="onQuickReply(chip)"
            >
              {{ chip.label }}
            </button>
          </div>
        </div>
      </div>

      <footer class="sai-footer">
        <div class="sai-input-row">
          <input
            v-model="chatInput"
            type="text"
            class="sai-field"
            placeholder="พิมพ์ข้อความสอบถามที่นี่..."
            autocomplete="off"
            @keydown.enter.prevent="sendMessage()"
          />
          <button type="button" class="sai-send" aria-label="ส่งข้อความ" @click="sendMessage()">
            <i class="bi bi-send-fill mt-1" />
          </button>
        </div>
        <p class="sai-powered">Powered by n8n &amp; SukiAI</p>
      </footer>
    </div>
  </div>
</template>

<script>
let idSeq = 0
function nextId() {
  idSeq += 1
  return `sai-${Date.now()}-${idSeq}`
}

export default {
  name: 'SellsukiAiChatWidget',
  data() {
    return {
      showIntroTooltip: true,
      showFabRipple: false,
      panelOpen: false,
      chatInput: '',
      isLoading: false,
      sessionId: '',
      showQuickReplies: true,
      contactFormForId: null,
      contactSentForId: null,
      contactForm: {
        name: '',
        email: '',
        phone: '',
        note: ''
      },
      quickReplies: [
        { id: 'line', label: '🚀 สนใจบริการ Line agency' },
        { id: 'web', label: '🌐 ทำเว็บไซต์ / พัฒนาซอฟต์แวร์' },
        { id: 'stock', label: '📦 ระบบจัดการสต็อก / บริการคลังสินค้า' },
        { id: 'mkt', label: '💡 ปรึกษาเรื่องการตลาดออนไลน์' },
        { id: 'consult', label: '💼 Consult ธุรกิจ' },
        { id: 'ads', label: '📈 ยิง Ads เพิ่มยอดขาย' },
        { id: 'data', label: '📊 จัดการข้อมูล Data' },
        { id: 'human', label: '💬 ติดต่อเจ้าหน้าที่' }
      ],
      chatHistory: [
        {
          id: nextId(),
          role: 'ai',
          type: 'text',
          text:
            'สวัสดีค่ะ! Sellsuki AI ยินดีให้คำปรึกษาและตอบคำถามเกี่ยวกับบริการของเรา วันนี้สนใจสอบถามเรื่องไหนคะ?'
        }
      ]
    }
  },
  watch: {
    chatHistory: {
      handler() {
        this.$nextTick(() => this.scrollToBottom())
      },
      deep: true
    },
    panelOpen(open) {
      if (open) this.$nextTick(() => this.scrollToBottom())
    }
  },
  mounted() {
    this._introTooltipTimer = setTimeout(() => {
      this.showIntroTooltip = false
    }, 5000)

    // Session ID for n8n (cleared automatically when the tab is closed)
    const sessionKey = 'sellsuki_chat_session'
    try {
      const stored = window.sessionStorage.getItem(sessionKey)
      if (stored) {
        this.sessionId = stored
      } else {
        this.sessionId = this.generateSessionId()
        window.sessionStorage.setItem(sessionKey, this.sessionId)
      }
    } catch (e) {
      this.sessionId = this.generateSessionId()
    }

    this.runFabRippleOnce()
    this._rippleIntervalId = setInterval(() => {
      this.runFabRippleOnce()
    }, 15000)
  },
  beforeDestroy() {
    if (this._introTooltipTimer) {
      clearTimeout(this._introTooltipTimer)
    }
    if (this._rippleCleanupTimer) {
      clearTimeout(this._rippleCleanupTimer)
    }
    if (this._rippleIntervalId) {
      clearInterval(this._rippleIntervalId)
    }
  },
  methods: {
    generateSessionId() {
      return `sellsuki-${Date.now()}-${Math.random().toString(36).slice(2)}`
    },
    runFabRippleOnce() {
      if (this._rippleCleanupTimer) {
        clearTimeout(this._rippleCleanupTimer)
      }
      this.showFabRipple = false
      this.$nextTick(() => {
        this.showFabRipple = true
        this._rippleCleanupTimer = setTimeout(() => {
          this.showFabRipple = false
        }, 1600)
      })
    },
    openPanel() {
      if (this._rippleCleanupTimer) {
        clearTimeout(this._rippleCleanupTimer)
      }
      this.showFabRipple = false
      this.panelOpen = true
    },
    collapsePanel() {
      this.panelOpen = false
    },
    formatText(text) {
      if (!text) return '';
      
      // 1. ป้องกัน HTML อันตราย
      let formatted = String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // 2. แปลงหัวข้อ ### ให้เป็นตัวหนาและมีระยะห่างสวยๆ
      formatted = formatted.replace(/^###\s+(.*)$/gm, '<strong style="display: block; margin-top: 12px; margin-bottom: 4px; color: #03193c; font-size: 1.05em;">$1</strong>');
      
      // แปลงหัวข้อ ## (เผื่อ AI ส่งมา)
      formatted = formatted.replace(/^##\s+(.*)$/gm, '<strong style="display: block; margin-top: 12px; margin-bottom: 4px; color: #03193c; font-size: 1.1em;">$1</strong>');

      // 3. แปลงตัวหนา **ข้อความ** ให้กลายเป็นตัวหนาจริงๆ
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // 4. แปลงลิงก์ [ข้อความ](ลิงก์) ให้เป็นปุ่มกด
      const mdLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
      formatted = formatted.replace(mdLinkRegex, '<a href="$2" target="_blank" style="color: #f36f25; text-decoration: underline; font-weight: 500;">$1</a>');

      // 5. แปลงการเว้นบรรทัด \n ให้เป็น <br />
      formatted = formatted.replace(/\n/g, '<br />');

      return formatted;
    },
    scrollToBottom() {
      const el = this.$refs.scrollArea
      if (el) el.scrollTop = el.scrollHeight
    },
    pushUser(text) {
      this.chatHistory.push({ id: nextId(), role: 'user', text })
    },
    pushAi(payload) {
      this.chatHistory.push({ id: nextId(), role: 'ai', ...payload })
    },
    respondToUser(userText) {
      const t = userText.toLowerCase()

      if (/อากาศ|weather|ฝน|หนาว|ร้อน/.test(userText) && !/เว็บ|sellsuki|บริการ/.test(userText)) {
        this.pushAi({
          type: 'text',
          text:
            'ขออภัยค่ะ AI ของเราสามารถตอบคำถามที่เกี่ยวข้องกับบริการของ Sellsuki เท่านั้นค่ะ คุณลูกค้ามีคำถามเกี่ยวกับระบบสต็อก, การตลาด, หรือการทำเว็บไซต์เพิ่มเติมไหมคะ?'
        })
        return
      }

      if (
        /ราคา.*custom|custom.*50|50\s*สาขา|แพ็กเกจ.*custom/i.test(userText) ||
        (t.includes('ราคา') && t.includes('50'))
      ) {
        this.pushAi({
          type: 'escalate',
          text:
            'สำหรับข้อมูลเชิงลึกในส่วนนี้ AI ยังไม่มีข้อมูลที่แน่ชัดค่ะ เพื่อให้คุณลูกค้าได้รับข้อมูลที่ถูกต้องที่สุด รบกวนติดต่อทีมงานผู้เชี่ยวชาญของเรานะคะ'
        })
        return
      }

      if (
        /เว็บ|website|พัฒนา|ซอฟต์แวร์|รายละเอียด.*เว็บ/.test(userText) ||
        userText.includes('ทำเว็บ')
      ) {
        this.pushAi({
          type: 'card',
          cardTitle: 'บริการพัฒนาเว็บไซต์ & ซอฟต์แวร์',
          cardDesc:
            'ทีม Sellsuki ออกแบบและพัฒนาเว็บไซต์ที่รองรับธุรกิจจริง ครบทั้ง UX/UI, Performance และการเชื่อมต่อระบบหลังบ้านตามที่องค์กรต้องการ',
          linkTo: '/solutions/wizemoves'
        })
        this.pushAi({
          type: 'text',
          text:
            'สรุปสั้น ๆ คือ เราช่วยตั้งแต่เก็บ Requirement, ออกแบบประสบการณ์ผู้ใช้ ไปจนถึง Deploy และดูแลหลัง Go-live ค่ะ หากต้องการดูขอบเขตบริการแบบเต็ม กดลิงก์ด้านบนได้เลยค่ะ'
        })
        return
      }

      this.pushAi({
        type: 'text',
        text:
          'ขอบคุณสำหรับคำถามค่ะ ทางทีม Sellsuki มีทั้งบริการ Software, MarTech, Line Agency และที่ปรึกษาด้านธุรกิจ หากต้องการเจาะลึกหัวข้อใดเป็นพิเศษ พิมพ์บอกได้เลยนะคะ หรือกด “ติดต่อเจ้าหน้าที่” เพื่อให้ Admin ช่วยต่อได้ค่ะ'
      })
    },
    cleanAiText(text) {
      if (!text) return '';
      const thaiStart = text.search(/[ก-๙]/);
      if (thaiStart === -1) return text;
      return text.slice(thaiStart);
    },
    onQuickReply(chip) {
      this.sendMessage(chip.label)
    },
    async sendMessage(textOverride) {
      if (this.isLoading) return

      const userText = (typeof textOverride === 'string' ? textOverride : this.chatInput).trim()
      if (!userText) return

      this.chatInput = ''
      this.showQuickReplies = false
      this.pushUser(userText)
      this.isLoading = true

      try {
        this.pushAi({ type: 'text', text: 'ขอบคุณสำหรับข้อความ ทีมงานจะติดต่อกลับโดยเร็ว' })
      } finally {
        this.isLoading = false
      }
    },
    submitContactForm(msgId) {
      this.contactSentForId = msgId
      this.contactFormForId = null
    }
  }
}
</script>

<style scoped>
.sai-chat-root {
  --sai-brand: #03193c;
  --sai-accent: #f36f25;
  --sai-ai-bg: #f3f4f6;
  --sai-user-bg: #f36f25;
  --sai-user-fg: #ffffff;
  position: fixed;
  z-index: 10050;
  right: 20px;
  bottom: 20px;
}

.lightbulb {
  font-size: 12px;
  color: var(--sai-accent);
}

.sai-fab-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.sai-tooltip-fade-enter-active,
.sai-tooltip-fade-leave-active {
  transition: opacity 0.45s ease;
}

.sai-tooltip-fade-enter,
.sai-tooltip-fade-leave-to {
  opacity: 0;
}

.sai-tooltip {
  background: #fff;
  color: var(--sai-brand);
  padding: 10px 18px 10px 16px;
  border-radius: 999px;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  width: max-content;
  max-width: calc(100vw - 100px);
  box-sizing: border-box;
  box-shadow: 0 6px 24px rgba(3, 25, 60, 0.14), 0 2px 8px rgba(3, 25, 60, 0.08);
  border: 1px solid rgba(243, 111, 37, 0.35);
  white-space: nowrap;
  pointer-events: none;
  text-align: center;
}

.sai-tooltip--left {
  position: absolute;
  right: calc(100% + 12px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.sai-tooltip-arrow--right {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: #fff;
  border-top: 1px solid rgba(243, 111, 37, 0.28);
  border-right: 1px solid rgba(243, 111, 37, 0.28);
  box-shadow: 2px -2px 4px rgba(3, 25, 60, 0.04);
}

.sai-fab-outer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
}

.sai-fab-ripple {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58px;
  height: 58px;
  margin: -29px 0 0 -29px;
  border-radius: 50%;
  border: 2px solid rgba(243, 111, 37, 0.55);
  pointer-events: none;
  animation: saiRippleOnce 1.2s ease-out forwards;
}

.sai-fab-ripple--2 {
  animation-delay: 0.22s;
}

@keyframes saiRippleOnce {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.15);
    opacity: 0;
  }
}

.sai-fab {
  position: relative;
  z-index: 1;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: var(--sai-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 28px rgba(243, 111, 37, 0.45), 0 2px 10px rgba(3, 25, 60, 0.2);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  overflow: hidden;
}

.sai-fab-img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  display: block;
}

.sai-fab:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 32px rgba(243, 111, 37, 0.5);
}

.sai-panel {
  width: min(400px, calc(100vw - 24px));
  height: min(560px, calc(100vh - 96px));
  max-height: calc(100vh - 96px);
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(15, 23, 42, 0.2), 0 4px 16px rgba(25, 79, 143, 0.12);
  border: 1px solid rgba(25, 79, 143, 0.12);
}

.sai-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 14px 14px;
  background: linear-gradient(
    135deg,
    rgb(25, 79, 143) 0%,
    rgb(23, 92, 182) 50%,
    rgb(20, 115, 225) 100%
  );
  border-bottom: none;
  flex-shrink: 0;
}

.sai-header-profile {
  display: flex;
  gap: 10px;
  min-width: 0;
  align-items: flex-start;
}

.sai-avatar {
  position: relative;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.sai-avatar-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
}

.sai-avatar-online {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid rgb(23, 92, 182);
  box-sizing: border-box;
}

.sai-title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  line-height: 1;
}

.sai-title {
  font-size: 20px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

.sai-header-text {
  min-width: 0;
  flex: 1;
}

.sai-badge-ai {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 7px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  background: #f36f25;
  line-height: 1.2;
}

.sai-subtitle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 18px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
}

.sai-dot-online {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.sai-header-actions {
  display: flex;
  gap: 0;
  flex-shrink: 0;
}

.sai-icon-btn {
  border: none;
  background: transparent;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  opacity: 0.95;
}

.sai-icon-btn:hover {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

.sai-body {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 14px 14px 12px;
  background: rgb(240, 249, 255);
  min-height: 0;
}

.sai-msg {
  display: flex;
  margin-bottom: 12px;
}

.sai-msg-ai {
  justify-content: flex-start;
  width: 100%;
}

.sai-msg-ai-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  max-width: 100%;
}

.sai-msg-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid rgba(25, 79, 143, 0.12);
}

.sai-msg-ai .sai-bubble-ai {
  flex: 1;
  min-width: 0;
  max-width: none;
}

.sai-msg-user {
  justify-content: flex-end;
}

.sai-bubble {
  max-width: 92%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 18px;
  line-height: 1;
}

.sai-bubble-ai {
  background: #fff;
  color: #1e293b;
  border-bottom-left-radius: 6px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.25);
}

.sai-bubble-user {
  background: var(--sai-user-bg);
  color: var(--sai-user-fg);
  border-bottom-right-radius: 4px;
}

.sai-card {
  background: rgb(248, 252, 255);
  border: 1px solid rgba(25, 79, 143, 0.12);
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 8px;
}

.sai-card-title {
  font-weight: 600;
  color: var(--sai-brand);
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 1;
}

.sai-card-desc {
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1;
  color: #374151;
}

.sai-card-link {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  color: var(--sai-accent);
  text-decoration: none;
}

.sai-card-link:hover {
  text-decoration: underline;
}

.sai-escalate-actions {
  margin-top: 10px;
}

.sai-btn-primary {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  background: var(--sai-accent);
  color: #fff;
}

.sai-btn-primary:hover {
  filter: brightness(1.05);
}

.sai-inline-form {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sai-input {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 16px;
  line-height: 1;
  font-family: inherit;
}

.sai-textarea {
  resize: vertical;
  min-height: 72px;
}

.sai-btn-submit {
  border: none;
  border-radius: 8px;
  padding: 8px;
  background: var(--sai-brand);
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
}

.sai-sent-ok {
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1;
  color: #059669;
}

.sai-quick-wrap {
  margin-top: 4px;
  padding-bottom: 4px;
}

.sai-quick-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
}

.sai-chip {
  flex: 0 1 auto;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: var(--sai-brand);
  font-size: 14px;
  line-height: 1;
  font-family: inherit;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.sai-chip:hover {
  border-color: var(--sai-accent);
  color: var(--sai-accent);
}

.sai-footer {
  padding: 12px 12px 14px;
  background: #fffefb;
  border-top: 1px solid rgba(243, 111, 37, 0.2);
}

.sai-input-row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.sai-field {
  flex: 1;
  border: 1px solid rgba(243, 111, 37, 0.45);
  border-radius: 12px;
  padding: 11px 14px;
  font-size: 18px;
  line-height: 1;
  font-family: inherit;
  background: #fff8f0;
  color: #1e293b;
}

.sai-field::placeholder {
  color: #94a3b8;
}

.sai-field:focus {
  outline: none;
  border-color: #f36f25;
  box-shadow: 0 0 0 2px rgba(243, 111, 37, 0.2);
  background: #fff;
}

.sai-send {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid rgba(243, 111, 37, 0.25);
  background: linear-gradient(180deg, #fffef8 0%, #faf6ef 100%);
  color: #f36f25;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(243, 111, 37, 0.15);
}

.sai-send:hover {
  filter: brightness(1.03);
  border-color: rgba(243, 111, 37, 0.45);
}

.sai-powered {
  margin: 10px 0 0;
  text-align: center;
  font-size: 14px;
  line-height: 1;
  color: #94a3b8;
  letter-spacing: 0.02em;
}

@media (max-width: 576px) {
  .sai-chat-root {
    right: 12px;
    bottom: 16px;
  }

  .sai-tooltip {
    max-width: calc(100vw - 96px);
    padding: 8px 14px 8px 12px;
    font-size: 14px;
    line-height: 1;
    white-space: normal;
  }
}

/* --- Loading Animation --- */
.sai-loading {
  padding: 14px 16px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sai-typing-indicator {
  display: flex;
  gap: 5px;
  align-items: center;
}

.sai-typing-indicator span {
  width: 7px;
  height: 7px;
  background-color: var(--sai-accent); /* ใช้สีส้มของ Sellsuki */
  border-radius: 50%;
  animation: saiBounce 1.4s infinite ease-in-out both;
}

/* ทำให้จุดขยับไม่พร้อมกัน (ไล่ระดับ) */
.sai-typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.sai-typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes saiBounce {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>