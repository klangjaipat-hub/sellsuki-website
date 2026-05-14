export const state = () => ({
  blogHighlight: null,
  loading: false
})

export const mutations = {
  setBlogHighlight(state, blog) {
    state.blogHighlight = blog
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async fetchBlogHighlight({ commit }) {
    commit('setLoading', true)
    const mockBlogs = [
      {
        id: 1,
        attributes: {
          title: "5 กลยุทธ์การตลาดออนไลน์ที่ได้ผลในปี 2024",
          description: "เรียนรู้กลยุทธ์การตลาดดิจิทัลที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน",
          url: "5-digital-marketing-strategies-2024",
          createdAt: "2024-03-15T00:00:00.000Z",
          publishedAt: "2024-03-15T00:00:00.000Z",
          illustration: { data: { attributes: { url: "https://placehold.co/600x400/FF6603/FFFFFF/png?text=Blog+1", alternativeText: "blog image 1" } } },
          blog_tags: { data: [{ attributes: { name: "Digital Marketing" } }] },
          blog_category: { data: { id: 1, attributes: { name: "Marketing" } } }
        }
      },
      {
        id: 2,
        attributes: {
          title: "วิธีเพิ่มยอดขายออนไลน์ด้วย Social Commerce",
          description: "Social Commerce คืออะไรและทำไมถึงสำคัญต่อธุรกิจออนไลน์ของคุณ",
          url: "social-commerce-boost-sales",
          createdAt: "2024-02-20T00:00:00.000Z",
          publishedAt: "2024-02-20T00:00:00.000Z",
          illustration: { data: { attributes: { url: "https://placehold.co/600x400/0F225A/FFFFFF/png?text=Blog+2", alternativeText: "blog image 2" } } },
          blog_tags: { data: [{ attributes: { name: "E-Commerce" } }] },
          blog_category: { data: { id: 2, attributes: { name: "E-Commerce" } } }
        }
      },
      {
        id: 3,
        attributes: {
          title: "LINE OA สำหรับธุรกิจ: คู่มือฉบับสมบูรณ์",
          description: "เปิดร้านค้าบน LINE OA และเชื่อมต่อกับลูกค้าได้อย่างมีประสิทธิภาพ",
          url: "line-oa-business-complete-guide",
          createdAt: "2024-01-10T00:00:00.000Z",
          publishedAt: "2024-01-10T00:00:00.000Z",
          illustration: { data: { attributes: { url: "https://placehold.co/600x400/06C755/FFFFFF/png?text=Blog+3", alternativeText: "blog image 3" } } },
          blog_tags: { data: [{ attributes: { name: "LINE" } }] },
          blog_category: { data: { id: 3, attributes: { name: "LINE Agency" } } }
        }
      }
    ]
    commit('setBlogHighlight', mockBlogs)
    commit('setLoading', false)
  }
}

export const getters = {
  getBlogHighlight: (state) => state.blogHighlight
}