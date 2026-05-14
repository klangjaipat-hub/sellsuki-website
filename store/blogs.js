// store/blogs.js

export const state = () => ({
  blogs: [],
  loading: false
})

export const mutations = {
  setBlogs(state, blogs) {
    state.blogs = blogs
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async fetchBlogs({ state, commit }, { name = '' } = {}) {
    // cache ถ้าไม่ค้นหา
    if (state.blogs.length > 0 && !name) return

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
      },
      {
        id: 4,
        attributes: {
          title: "Data Analytics เพื่อการตัดสินใจทางธุรกิจ",
          description: "ใช้ข้อมูลเพื่อขับเคลื่อนธุรกิจและเพิ่มประสิทธิภาพการทำงาน",
          url: "data-analytics-business-decisions",
          createdAt: "2023-12-05T00:00:00.000Z",
          publishedAt: "2023-12-05T00:00:00.000Z",
          illustration: { data: { attributes: { url: "https://placehold.co/600x400/7B64AF/FFFFFF/png?text=Blog+4", alternativeText: "blog image 4" } } },
          blog_tags: { data: [{ attributes: { name: "Analytics" } }] },
          blog_category: { data: { id: 4, attributes: { name: "Technology" } } }
        }
      }
    ]
    commit('setBlogs', mockBlogs)
    commit('setLoading', false)
  }
}

export const getters = {
  blogsCount(state) {
    return state.blogs.length
  }
}
