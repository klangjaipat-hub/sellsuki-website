export const state = () => ({
  blogCategoy: null,
  loading: false
})

export const mutations = {
  setBlogCategoy(state, blog) {
    state.blogCategoy = blog
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async fetchBlogCategoy({ commit }) {
    commit('setLoading', true)
    const mockCategories = [
      { id: 1, attributes: { name: "Marketing" } },
      { id: 2, attributes: { name: "E-Commerce" } },
      { id: 3, attributes: { name: "LINE Agency" } },
      { id: 4, attributes: { name: "Technology" } }
    ]
    commit('setBlogCategoy', mockCategories)
    commit('setLoading', false)
  }
}

export const getters = {
  getBlogCategoy: (state) => state.blogCategoy
}