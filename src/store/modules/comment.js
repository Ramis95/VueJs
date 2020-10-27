export default {
  actions: {
    commentsStore(ctx) {
      if (localStorage.getItem('comments')) {
        try {
          let comments = JSON.parse(localStorage.getItem('comments'))
          ctx.commit('updateComments', comments)
        } catch (e) {
          localStorage.removeItem('comments');
        }
      }
    }
  },
  mutations: {
    updateComments(state, comments) {
      state.comments = comments
    }
  },
  state: {
    comments: []
  },
  getters: {
    allComments(state) {
      return state.comments
    }
  },
}
